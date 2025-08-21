import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  location?: 'hyderabad' | 'bengaluru' | 'both';
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image = "https://kennys.bar/lovable-uploads/logo.png",
  url = "https://kennys.bar",
  type = "business.bar",
  location = 'both'
}) => {
  const routerLocation = useLocation();
  const currentUrl = `${url}${routerLocation.pathname}`;

  // Location-specific SEO data
  const locationData = {
    hyderabad: {
      title: "Kenny's Bar Hyderabad | #1 Best Bar in Financial District | Premium Craft Cocktails & Live Music",
      description: "Kenny's Bar Hyderabad - #1 rated bar in Financial District, Nanakramguda. Award-winning craft cocktails, premium whiskey, live music, best happy hours in Telangana. Book your table at Hyderabad's top-rated bar experience. Open daily with the best ambiance in HITEC City area.",
      keywords: "best bar Hyderabad, #1 bar Hyderabad, Financial District bar, Nanakramguda bar, HITEC City bar, craft cocktails Hyderabad, live music bar Hyderabad, whiskey tasting Hyderabad, premium bar Telangana, neighbourhood bar Hyderabad, award winning bar Hyderabad, top rated bar Hyderabad, best pub Hyderabad, cocktail bar Hyderabad, happy hour Hyderabad, nightlife Hyderabad, rooftop bar Hyderabad, sports bar Hyderabad, date night bar Hyderabad, corporate events bar Hyderabad, birthday celebration bar Hyderabad, weekend bar Hyderabad, party venue Hyderabad, bars near me Hyderabad, best drinks Hyderabad, Gachibowli bars, Madhapur bars, Kondapur bars, Jubilee Hills bars, Banjara Hills bars",
      address: "The District, Myscape Rd, Financial District, Nanakramguda, Hyderabad, Telangana 500032",
      phone: "+91 96378 19999",
      coordinates: { lat: "17.4065", lng: "78.4772" },
      region: "IN-TG",
      locality: "Hyderabad"
    },
    bengaluru: {
      title: "Kenny's Bar Bengaluru | #1 Best Bar in Marathahalli | Premium Craft Cocktails & Live Music",
      description: "Kenny's Bar Bengaluru - #1 rated bar in Marathahalli, Outer Ring Road. Award-winning craft cocktails, premium whiskey, live music, best happy hours in Karnataka. Book your table at Bengaluru's top-rated bar experience. Open daily with the best ambiance in Whitefield area.",
      keywords: "best bar Bengaluru, #1 bar Bengaluru, Marathahalli bar, Outer Ring Road bar, Whitefield bar, craft cocktails Bengaluru, live music bar Bengaluru, whiskey tasting Bengaluru, premium bar Karnataka, neighbourhood bar Bengaluru, award winning bar Bengaluru, top rated bar Bengaluru, best pub Bengaluru, cocktail bar Bengaluru, happy hour Bengaluru, nightlife Bengaluru, rooftop bar Bengaluru, sports bar Bengaluru, date night bar Bengaluru, corporate events bar Bengaluru, birthday celebration bar Bengaluru, weekend bar Bengaluru, party venue Bengaluru, bars near me Bengaluru, best drinks Bengaluru, Indiranagar bars, Koramangala bars, HSR Layout bars, BTM Layout bars, Electronic City bars",
      address: "4th Floor, NTR Royal Plaza, Home Building, Outer Ring Rd, Marathahalli Village, Marathahalli, Bengaluru, Karnataka 560037",
      phone: "+91 93174 17517",
      coordinates: { lat: "12.9716", lng: "77.5946" },
      region: "IN-KA",
      locality: "Bengaluru"
    }
  };

  // Determine which location data to use
  const getLocationSpecificData = () => {
    if (location === 'hyderabad') return locationData.hyderabad;
    if (location === 'bengaluru') return locationData.bengaluru;
    
    // Default combined data for both locations
    return {
      title: title || "Kenny's Bar | #1 Best Bar in Hyderabad & Bengaluru | Premium Craft Cocktails & Live Music",
      description: description || "Kenny's Bar - India's #1 rated neighbourhood bar with locations in Marathahalli Bengaluru & Financial District Hyderabad. Award-winning craft cocktails, premium whiskey, live music, best happy hours. Book your table at India's top-rated bar experience.",
      keywords: keywords || `${locationData.hyderabad.keywords}, ${locationData.bengaluru.keywords}, best bar India, Kenny's Bar, top bar India, craft cocktails India, live music bar India, whiskey tasting India, neighbourhood bar India, award winning bar India, premium spirits bar India, cocktail bar India, bar near me, best drinks India, nightlife India`,
      address: `${locationData.hyderabad.address}; ${locationData.bengaluru.address}`,
      phone: `${locationData.hyderabad.phone}, ${locationData.bengaluru.phone}`,
      coordinates: locationData.bengaluru.coordinates, // Default to Bengaluru
      region: "IN-KA;IN-TG",
      locality: "Bengaluru, Hyderabad"
    };
  };

  const seoData = getLocationSpecificData();

  useEffect(() => {
    // Update document title
    document.title = seoData.title;

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

    // Core SEO meta tags
    updateMetaTag('description', seoData.description);
    updateMetaTag('keywords', seoData.keywords);
    updateMetaTag('author', "Kenny's Neighbourhood Bar");
    updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow');
    updateMetaTag('bingbot', 'index, follow');
    
    // Open Graph tags
    updateMetaTag('og:title', seoData.title, true);
    updateMetaTag('og:description', seoData.description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', "Kenny's Bar", true);
    updateMetaTag('og:locale', 'en_IN', true);
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:title', seoData.title, true);
    updateMetaTag('twitter:description', seoData.description, true);
    updateMetaTag('twitter:image', image, true);
    updateMetaTag('twitter:url', currentUrl, true);
    updateMetaTag('twitter:site', '@kennysbar', true);
    
    // Geographic and location tags
    updateMetaTag('geo.region', seoData.region);
    updateMetaTag('geo.placename', seoData.locality);
    updateMetaTag('geo.position', `${seoData.coordinates.lat};${seoData.coordinates.lng}`);
    updateMetaTag('ICBM', `${seoData.coordinates.lat}, ${seoData.coordinates.lng}`);
    
    // Business-specific meta tags
    updateMetaTag('business:contact_data:street_address', seoData.address);
    updateMetaTag('business:contact_data:locality', seoData.locality);
    updateMetaTag('business:contact_data:region', location === 'hyderabad' ? 'Telangana' : location === 'bengaluru' ? 'Karnataka' : 'Karnataka, Telangana');
    updateMetaTag('business:contact_data:country_name', 'India');
    updateMetaTag('business:contact_data:phone_number', seoData.phone);
    
    // Enhanced SEO meta tags
    updateMetaTag('revisit-after', '1 day');
    updateMetaTag('rating', 'general');
    updateMetaTag('distribution', 'global');
    updateMetaTag('language', 'en');
    updateMetaTag('coverage', seoData.locality);
    updateMetaTag('target', 'all');
    updateMetaTag('HandheldFriendly', 'True');
    updateMetaTag('MobileOptimized', '320');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
    
    // Remove existing schema and add new one
    const existingSchema = document.getElementById('local-business-schema');
    if (existingSchema) {
      existingSchema.remove();
    }
    
    // Create comprehensive JSON-LD schema
    const script = document.createElement('script');
    script.id = 'local-business-schema';
    script.type = 'application/ld+json';
    
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "BarOrPub",
      "@id": url,
      "name": "Kenny's Bar",
      "alternateName": ["Kenny's Neighbourhood Bar", "Kennys Bar"],
      "description": seoData.description,
      "url": url,
      "logo": image,
      "image": [
        image,
        "https://kennys.bar/images/1.jpg",
        "https://kennys.bar/images/2.jpg",
        "https://kennys.bar/images/3.jpeg"
      ],
      "priceRange": "₹₹",
      "servesCuisine": ["Bar Food", "Cocktails", "Craft Beer", "Premium Spirits", "Whiskey", "Wine"],
      "hasMenu": `${url}/menu`,
      "acceptsReservations": true,
      "currenciesAccepted": "INR",
      "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "UPI", "Digital Wallet"],
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Live Music",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Craft Cocktails",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Premium Spirits",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Happy Hour",
          "value": true
        }
      ],
      "location": location === 'both' ? [
        {
          "@type": "Place",
          "name": "Kenny's Bar Bengaluru",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "4th Floor, NTR Royal Plaza, Home Building, Outer Ring Rd, Marathahalli Village",
            "addressLocality": "Marathahalli",
            "addressRegion": "Karnataka",
            "postalCode": "560037",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "12.9716",
            "longitude": "77.5946"
          },
          "telephone": "+91 93174 17517",
          "url": `${url}?location=bengaluru`
        },
        {
          "@type": "Place",
          "name": "Kenny's Bar Hyderabad",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "The District, Myscape Rd, Financial District",
            "addressLocality": "Nanakramguda",
            "addressRegion": "Telangana",
            "postalCode": "500032",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "17.4065",
            "longitude": "78.4772"
          },
          "telephone": "+91 96378 19999",
          "url": `${url}?location=hyderabad`
        }
      ] : {
        "@type": "Place",
        "name": location === 'hyderabad' ? "Kenny's Bar Hyderabad" : "Kenny's Bar Bengaluru",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": location === 'hyderabad' ? "The District, Myscape Rd, Financial District" : "4th Floor, NTR Royal Plaza, Home Building, Outer Ring Rd, Marathahalli Village",
          "addressLocality": location === 'hyderabad' ? "Nanakramguda" : "Marathahalli",
          "addressRegion": location === 'hyderabad' ? "Telangana" : "Karnataka",
          "postalCode": location === 'hyderabad' ? "500032" : "560037",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": location === 'hyderabad' ? "17.4065" : "12.9716",
          "longitude": location === 'hyderabad' ? "78.4772" : "77.5946"
        },
        "telephone": location === 'hyderabad' ? "+91 96378 19999" : "+91 93174 17517"
      },
      "openingHours": [
        "Mo-Su 12:00-01:00"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1000+",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Satisfied Customer"
          },
          "reviewBody": location === 'hyderabad' ? "Best bar in Hyderabad! Amazing cocktails and live music in Financial District." : location === 'bengaluru' ? "Best bar in Bengaluru! Amazing cocktails and live music in Marathahalli." : "Best bar in India! Amazing cocktails and live music in both Hyderabad and Bengaluru."
        }
      ],
      "sameAs": [
        "https://www.instagram.com/kennysbar.blr",
        "https://www.instagram.com/kennysbar.hyd",
        "https://www.facebook.com/kennysbar",
        "https://www.zomato.com/kennysbar",
        "https://www.swiggy.com/kennysbar"
      ],
      "potentialAction": {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${url}/book-table`,
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform"
          ]
        },
        "result": {
          "@type": "Reservation",
          "name": "Table Reservation"
        }
      }
    };
    
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);
    
  }, [seoData, currentUrl, image, type, location]);

  return null;
};

export default SEO;