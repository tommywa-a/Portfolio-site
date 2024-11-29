"use client";

import useScrollToSection from '@/hooks/useScrollToSection';

export const Header = () => {
  const scrollToProjects = useScrollToSection('projects');
  const scrollToAbout = useScrollToSection('about');
  const scrollToContact = useScrollToSection('contact');
  const scrollToHero = useScrollToSection('hero');

  return (
  <div className="flex justify-center items-center fixed top-3 w-full z-10">
    <nav className="flex gap-1 p-0.5 border-white/15 rounded-full bg-white/10 backdrop-blur">
      <button onClick={scrollToHero} className="nav-item">Home</button>
      <button onClick={scrollToProjects} className="nav-item">Projects</button>
        <button onClick={scrollToAbout} className="nav-item">About</button>
        <button onClick={scrollToContact} className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</button>
    </nav>
  </div>
  )
};
