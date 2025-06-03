
import { useEffect } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  stagger?: boolean;
  staggerDelay?: number;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { 
    threshold = 0.15, 
    rootMargin = "0px 0px -50px 0px",
    stagger = true,
    staggerDelay = 100
  } = options;

  useEffect(() => {
    // Create intersection observer to detect when elements enter viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add show class if element is in viewport
          if (stagger) {
            setTimeout(() => {
              entry.target.classList.add('show');
            }, index * staggerDelay);
          } else {
            entry.target.classList.add('show');
          }
        }
      });
    }, {
      threshold,
      rootMargin
    });

    // Target all elements with animation class
    const hiddenElements = document.querySelectorAll('.section-animate');
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, [threshold, rootMargin, stagger, staggerDelay]);
};
