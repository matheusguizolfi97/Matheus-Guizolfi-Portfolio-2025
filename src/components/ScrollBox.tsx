import React from 'react';

interface ScrollBoxProps {
  imageSrc: string;
}

export default function ScrollBox({ imageSrc }: ScrollBoxProps) {
  return (
    <div className="w-full max-w-[880px] h-[520px] overflow-y-scroll overflow-x-hidden mx-auto p-0 border-2 border-white rounded-xl box-border bg-transparent scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent max-md:h-[60vh]">
      <style>{`
        .scroll-box-custom::-webkit-scrollbar {
          width: 8px;
        }
        .scroll-box-custom::-webkit-scrollbar-thumb {
          background: white;
          border-radius: 4px;
        }
        .scroll-box-custom::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
      <div className="scroll-box-custom">
        <img 
          src={imageSrc} 
          alt="Website Preview" 
          className="block w-full h-auto pointer-events-none rounded-xl"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}
