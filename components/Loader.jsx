// components/Loader.jsx
import React from 'react';
import Image from 'next/image';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <Image
      width={1000} height={1000}
        src="/images/squirrel-logo.png"
        alt="Logo"
        className="w-24 h-24"
      />
    </div>
  );
};

export default Loader;
