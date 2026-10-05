import React from 'react';
import Navbar1 from './ui/navbar-1';

export default function Header({
  onLogoClick,
  onAboutClick,
  onProductsClick,
  onPartnerClick,
  onRequestDemo
}) {
  return (
    <Navbar1
      onLogoClick={onLogoClick}
      onAboutClick={onAboutClick}
      onProductsClick={onProductsClick}
      onPartnerClick={onPartnerClick}
      onRequestDemo={onRequestDemo}
    />
  );
}
