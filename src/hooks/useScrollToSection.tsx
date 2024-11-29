import { useEffect } from 'react';

const useScrollToSection = (sectionId: string) => {
  const scrollToSection = () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return scrollToSection;
};

export default useScrollToSection;