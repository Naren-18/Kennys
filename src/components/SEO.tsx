import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Kenny's Bar | Best Bar in India | Premium Neighbourhood Bar Marathahalli Bengaluru",
  description = "Kenny's Bar - India's premier neighbourhood bar in Marathahalli, Bengaluru. Award-winning craft cocktails, live music, premium spirits, whiskey tastings. Voted best bar in Karnataka. Experience India's top-rated bar.",
  keywords = "best bar in India, Kenny's Bar, top bar India, premium bar Bengaluru, best bar Karnataka, Marathahalli bar, craft cocktails India, live music bar, whiskey tasting India, neighbourhood bar, award winning bar, top rated bar Bengaluru, best pub India, premium spirits bar, cocktail bar India, live entertainment bar, book table bar India, Outer Ring Road bar, best nightlife Bengaluru, top bar Marathahalli, India's finest bar, luxury bar experience, craft beer India, mixology bar India, weekend bar India, date night bar, corporate events bar, private dining bar, authentic bar experience India",
  image = "https://kennys.bar/lovable-uploads/logo.png",
  url = "https://kennys.bar",
  type = "business.bar"
}) => {
  const location = useLocation();
  const currentUrl = `${url}${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        if (property) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Update canonical URL
    let canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute('href', currentUrl);

    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);
    updateMetaTag('twitter:url', currentUrl, true);
    
    // Add additional SEO meta tags
    updateMetaTag('revisit-after', '3 days');
    updateMetaTag('rating', 'general');
    updateMetaTag('distribution', 'global');
  }, [title, description, keywords, image, currentUrl, type]);

  return null;
};

export default SEO;