import React from 'react';
import Navbar1 from './ui/navbar-1';

export default function Header({
  onLogoClick,
  onAboutClick,
  onFoundersClick,
  onPartnerClick,
  onContactClick
}) {
  return (
    <Navbar1
      onLogoClick={onLogoClick}
      onAboutClick={onAboutClick}
      onFoundersClick={onFoundersClick}
      onPartnerClick={onPartnerClick}
      onContactClick={onContactClick}
    />
  );
}
