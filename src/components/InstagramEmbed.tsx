import React, { useEffect, useRef, useState } from 'react';

const InstagramEmbed = ({ url }: { url: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function handleEmbedLoad() {
      setLoading(false);
    }

    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
      setTimeout(handleEmbedLoad, 2000); // fallback
    } else {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => {
        if ((window as any).instgrm) {
          (window as any).instgrm.Embeds.process();
        }
        setTimeout(handleEmbedLoad, 2000); // fallback
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div ref={ref} className="flex justify-center relative min-h-[400px]">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/30">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF8C42]" />
        </div>
      )}
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: 1,
          maxWidth: 540,
          minWidth: 326,
          padding: 0,
          width: '99.375%',
        }}
      ></blockquote>
    </div>
  );
};

export default InstagramEmbed;