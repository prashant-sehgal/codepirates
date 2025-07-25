import React from 'react';

export default function Copyright() {
  const year = new Date().getFullYear();

  return (
    <p className="text-xs text-stone-600 text-center">
      &copy; {year} <strong>CodePirates</strong>. All rights reserved.
    </p>
  );
}
