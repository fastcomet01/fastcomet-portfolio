
import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black overflow-hidden flex flex-col selection:bg-neon-pink selection:text-white">
      {/* 
        In the immersive one-page mode, the layout is handled internally by Home.tsx 
        to ensure all elements are within the single viewport. 
      */}
      <main className="flex-grow w-full h-full relative">
        {children}
      </main>
    </div>
  );
};

export default Layout;
