import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default function Loading() {
  return (
    <div>
      <Skeleton baseColor="#1c1917" highlightColor="#292524" height={40} />
      <Skeleton baseColor="#1c1917" highlightColor="#292524" height={300} />
      <Skeleton
        baseColor="#1c1917"
        highlightColor="#292524"
        height={40}
        className="mt-4"
      />
      <Skeleton baseColor="#1c1917" highlightColor="#292524" height={30} />
      <Skeleton baseColor="#1c1917" highlightColor="#292524" height={30} />
      <Skeleton baseColor="#1c1917" highlightColor="#292524" height={30} />
      <Skeleton baseColor="#1c1917" highlightColor="#292524" height={30} />
      <Skeleton baseColor="#1c1917" highlightColor="#292524" height={30} />
    </div>
  );
}
