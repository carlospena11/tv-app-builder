import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HotelIntro = () => {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleEnterApp = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Video Background - 10 second loop */}
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay 
        muted 
        loop
        playsInline
        style={{ opacity: 0.8 }}
      >
        <source src="/hotel-intro-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        {/* Hotel Logo */}
        <div className={`text-center mb-12 transition-all duration-1000 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <span className="text-5xl font-bold text-hotel-primary">M</span>
          </div>
          <h1 className="text-6xl font-light text-white mb-4 tracking-wider">MI HOTEL</h1>
          <h2 className="text-2xl text-white/90 tracking-widest">SAN SALVADOR</h2>
          <p className="text-lg text-white/70 mt-2">El Salvador, Centro América</p>
        </div>

        {/* Enter Button */}
        <div className={`transition-all duration-1000 delay-500 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            onClick={handleEnterApp}
            size="lg"
            className="bg-white/20 backdrop-blur-md border-2 border-white/40 hover:bg-white/30 hover:border-white/60 text-white text-xl px-12 py-8 rounded-full transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-105"
          >
            Ingresar al Portal
          </Button>
          <p className="text-white/60 text-sm mt-4 text-center">Toca para continuar</p>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default HotelIntro;
