import React from 'react';
import BrandAnchor from './BrandAnchor';
import Auth from './Auth';

export default function Header() {
  return (
    <header className="flex justify-between p-2 border-b border-stone-900 bg-stone-950 sticky top-0">
      <BrandAnchor />
      <Auth />
    </header>
  );
}
