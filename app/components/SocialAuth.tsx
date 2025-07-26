import React from 'react';
import Image from 'next/image';

export default function SocialAuth(
  props: Readonly<{ imgSrc: string; title: string }>
) {
  return (
    <div className="flex justify-center items-center gap-3">
      <Image
        className="ml-10"
        src={props.imgSrc}
        alt={props.imgSrc}
        width={20}
        height={20}
      />

      <p className="flex items-start w-50">{props.title}</p>
    </div>
  );
}
