// components/DeviceFrame.tsx
import React from 'react';

type DeviceFrameProps = {
  src: string;
  alt?: string;
};

export default function DeviceFrame({ src, alt = 'App screenshot' }: DeviceFrameProps) {
  return (
    <div className="mx-auto my-12 w-[300px] rounded-[2rem] border-[10px] border-black shadow-xl overflow-hidden">
      <img src={src} alt={alt} className="w-full" />
    </div>
  );
}
