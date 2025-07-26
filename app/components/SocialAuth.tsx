import React from 'react';
import Image from 'next/image';

export default function SocialAuth(
  props: Readonly<{ imgSrc: string; title: string }>
) {
  return (
    <div className="flex w-full justify-center gap-2">
      <Image src={props.imgSrc} alt={props.imgSrc} width={20} height={20} />
      <p>{props.title}</p>
    </div>
  );
}
