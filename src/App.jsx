import { useRef, useState, useEffect } from 'react';
import { siteData } from './config/siteData';
import Opener from './components/Opener';
import HeroSection from './components/HeroSection';
import FamilySection from './components/FamilySection';
import TimelineSection from './components/TimelineSection';
import LocationSection from './components/LocationSection';
import FinalSection from './components/FinalSection';

/**
 * App – Root component
 * Theme Variants: To test themes, wrap the content in <div className="theme-green">
 */
export default function App() {
  useEffect(() => {
    document.title = siteData.meta.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', siteData.meta.description);
    }
  }, []);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpenStart = () => {
    if (audioRef.current) {
      audioRef.current.volume = siteData.audio.volume;
      audioRef.current.play().then(() => setIsPlaying(true)).catch((e) => console.log('Audio play failed:', e));
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((e) => console.log('Audio play failed:', e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="page w-full max-w-full mx-auto bg-surface">
      <audio ref={audioRef} src={siteData.audio.src} loop />
      <Opener 
        data={siteData.opener} 
        assets={siteData.assets} 
        onOpenStart={handleOpenStart} 
      />
      <HeroSection 
        data={siteData.hero} 
        assets={siteData.assets} 
        isPlaying={isPlaying} 
        toggleAudio={toggleAudio} 
      />
      <FamilySection data={siteData.family} assets={siteData.assets} />
      <TimelineSection data={siteData.timeline} assets={siteData.assets} />
      <LocationSection data={siteData.location} assets={siteData.assets} />
      <FinalSection 
        blessings={siteData.blessings} 
        footer={siteData.footer} 
        assets={siteData.assets} 
      />
    </div>
  );
}
