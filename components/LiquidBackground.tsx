
import React, { useEffect, useRef } from 'react';

const LiquidBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl');
    if (!gl) return;

    const vsSource = `
      attribute vec4 aVertexPosition;
      void main() {
        gl_Position = aVertexPosition;
      }
    `;

    const fsSource = `
      precision highp float;
      uniform float uTime;
      uniform vec2 uResolution;

      void main() {
        vec2 uv = gl_FragCoord.xy / uResolution.xy;
        float aspect = uResolution.x / uResolution.y;
        uv.x *= aspect;

        float t = uTime * 0.15;
        
        // Complex liquid distortion
        vec2 p = uv * 3.0 - vec2(1.5 * aspect, 1.5);
        for(int i=1; i<6; i++) {
          float fi = float(i);
          p.x += 0.4 / fi * sin(fi * 2.0 * p.y + t + fi * 0.8);
          p.y += 0.4 / fi * sin(fi * 2.0 * p.x + t + fi * 0.3);
        }
        
        // Generate topographic lines
        float lines = sin(p.x * 8.0 + p.y * 8.0);
        lines = abs(lines);
        lines = 0.02 / lines; // Sharp glowing lines
        
        // Color mapping: Electric Blue and Neon Pink
        vec3 blue = vec3(0.0, 0.4, 1.0);
        vec3 pink = vec3(1.0, 0.0, 0.6);
        
        float colorMix = 0.5 + 0.5 * sin(p.x * 0.5 + t);
        vec3 baseColor = mix(blue, pink, colorMix);
        
        // Glow effect
        float dist = length(p);
        float glow = exp(-dist * 0.5);
        
        vec3 finalColor = baseColor * lines * 1.5;
        finalColor += baseColor * glow * 0.1;
        
        // Vignette
        vec2 centeredUv = (gl_FragCoord.xy / uResolution.xy) - 0.5;
        float vignette = 1.0 - length(centeredUv) * 1.2;
        
        gl_FragColor = vec4(finalColor * max(vignette, 0.2), 1.0);
      }
    `;

    const initShader = (gl: WebGLRenderingContext, type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        return null;
      }
      return shader;
    };

    const shaderProgram = gl.createProgram();
    const vs = initShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = initShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs || !shaderProgram) return;
    gl.attachShader(shaderProgram, vs);
    gl.attachShader(shaderProgram, fs);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [
      -1.0,  1.0,
       1.0,  1.0,
      -1.0, -1.0,
       1.0, -1.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const positionAttributeLocation = gl.getAttribLocation(shaderProgram, "aVertexPosition");
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    const timeLocation = gl.getUniformLocation(shaderProgram, "uTime");
    const resolutionLocation = gl.getUniformLocation(shaderProgram, "uResolution");

    const render = (time: number) => {
      if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, time * 0.001);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);
  }, []);

  return <canvas id="liquid-bg" ref={canvasRef} className="opacity-60" />;
};

export default LiquidBackground;
