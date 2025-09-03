import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  location?: 'hyderabad' | 'bengaluru';
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image = '/kenny-og-image.jpg',
  url,
  type = 'website',
  location
}) => {
  // Enhanced location-specific SEO data
  const locationSEO = {
    hyderabad: {
      title: "Kenny's Pub & Restaurant Hyderabad | Best Pub in Banjara Hills | Live Music & Craft Beer",
      description: "Experience Kenny's Pub Hyderabad - Premier destination for craft beer, live music, and gourmet food in Banjara Hills. Book your table for an unforgettable night out!",
      keywords: "Kenny's pub Hyderabad, best pub Banjara Hills, craft beer Hyderabad, live music venue, restaurant Hyderabad, nightlife Banjara Hills, pub food, cocktails Hyderabad",
      address: "Road No. 12, Banjara Hills, Hyderabad, Telangana 500034",
      phone: "+91-40-2354-7890",
      coordinates: { lat: "17.4239", lng: "78.4738" },
      region: "Telangana",
      locality: "Banjara Hills"
    },
    bengaluru: {
      title: "Kenny's Pub & Restaurant Bangalore | Best Pub in Koramangala | Craft Beer & Live Entertainment",
      description: "Discover Kenny's Pub Bangalore - Top-rated pub in Koramangala offering premium craft beer, live entertainment, and exceptional dining. Reserve your spot today!",
      keywords: "Kenny's pub Bangalore, best pub Koramangala, craft beer Bangalore, live music Bangalore, restaurant Koramangala, nightlife Bangalore, pub dining, cocktails Bangalore",
      address: "80 Feet Road, Koramangala, Bangalore, Karnataka 560095",
      phone: "+91-80-4567-8901",
      coordinates: { lat: "12.9352", lng: "77.6245" },
      region: "Karnataka",
      locality: "Koramangala"
    }
  };

  const seoData = location ? locationSEO[location] : {
    title: title || "Kenny's Pub & Restaurant | Premium Dining & Entertainment Experience",
    description: description || "Experience Kenny's - Where great food meets exceptional entertainment. Enjoy craft beer, live music, and gourmet dining in a vibrant atmosphere.",
    keywords: keywords || "Kenny's pub, restaurant, craft beer, live music, dining, entertainment, nightlife, pub food, cocktails"
  };

  useEffect(() => {
    // Update document title with proper formatting
    document.title = seoData.title;
    
    // Set canonical URL
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', url || window.location.href);
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonical);
    }

    // Core SEO meta tags
    const metaTags = [
      { name: 'description', content: seoData.description },
      { name: 'keywords', content: seoData.keywords },
      { name: 'author', content: "Kenny's Pub & Restaurant" },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'bingbot', content: 'index, follow' },
      
      // Open Graph tags
      { property: 'og:title', content: seoData.title },
      { property: 'og:description', content: seoData.description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url || window.location.href },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: "Kenny's Pub & Restaurant" },
      { property: 'og:locale', content: 'en_IN' },
      
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: seoData.title },
      { name: 'twitter:description', content: seoData.description },
      { name: 'twitter:image', content: image },
      
      // Enhanced SEO tags
      { name: 'theme-color', content: '#FF6F1F' },
      { name: 'msapplication-TileColor', content: '#FF6F1F' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'format-detection', content: 'telephone=yes' },
    ];

    // Location-specific tags
    if (location && locationSEO[location]) {
      const locData = locationSEO[location];
      metaTags.push(
        { name: 'geo.region', content: locData.region },
        { name: 'geo.placename', content: locData.locality },
        { name: 'geo.position', content: `${locData.coordinates.lat};${locData.coordinates.lng}` },
        { name: 'ICBM', content: `${locData.coordinates.lat}, ${locData.coordinates.lng}` },
        { property: 'business:contact_data:street_address', content: locData.address },
        { property: 'business:contact_data:locality', content: locData.locality },
        { property: 'business:contact_data:region', content: locData.region },
        { property: 'business:contact_data:country_name', content: 'India' },
        { property: 'business:contact_data:phone_number', content: locData.phone }
      );
    }

    // Apply all meta tags
    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (name) meta.setAttribute('name', name);
        if (property) meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    });

    // Structured data for local business
    if (location && locationSEO[location]) {
      const locData = locationSEO[location];
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": "Kenny's Pub & Restaurant",
        "description": seoData.description,
        "url": url || window.location.href,
        "telephone": locData.phone,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": locData.address,
          "addressLocality": locData.locality,
          "addressRegion": locData.region,
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": locData.coordinates.lat,
          "longitude": locData.coordinates.lng
        },
        "servesCuisine": ["Indian", "Continental", "Pub Food"],
        "priceRange": "$$",
        "openingHours": [
          "Mo-Fr 16:00-00:00",
          "Sa-Su 14:00-00:00"
        ]
      };

      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, image, url, type, location]);

  return null;
};

export default SEO;