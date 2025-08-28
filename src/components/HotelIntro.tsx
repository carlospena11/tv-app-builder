import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import hotelIntroBg from "@/assets/hotel-intro-bg.jpg";

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
      {/* Video Background Simulation */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ 
          backgroundImage: `url(${hotelIntroBg})`,
          transform: `scale(${fadeIn ? 1.05 : 1})`,
          opacity: fadeIn ? 1 : 0.8
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        {/* Hotel Logo */}
        <div className={`text-center mb-12 transition-all duration-2000 delay-500 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <span className="text-6xl font-bold text-hotel-primary">M</span>
          </div>
          <h1 className="text-6xl font-light text-white mb-4 tracking-wider">MI HOTEL</h1>
          <h2 className="text-2xl text-white opacity-90 tracking-widest">SAN SALVADOR</h2>
          <p className="text-lg text-white opacity-75 mt-2">El Salvador, Centro América</p>
        </div>

        {/* Welcome Message */}
        <div className={`text-center mb-12 transition-all duration-2000 delay-1000 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-4xl text-white font-light mb-4">Bienvenido</h3>
          <p className="text-xl text-white opacity-90 max-w-2xl">
            Una experiencia de hospitalidad excepcional te espera en el corazón de San Salvador
          </p>
        </div>

        {/* Enter Button */}
        <div className={`transition-all duration-2000 delay-1500 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card 
            className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group p-8"
            onClick={handleEnterApp}
          >
            <div className="text-center">
              <button className="text-white text-xl font-medium group-hover:scale-105 transition-transform duration-200">
                Ingresar al SmartRoom
              </button>
              <p className="text-white/70 text-sm mt-2">Toca para continuar</p>
            </div>
          </Card>
        </div>

        {/* Animated Elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/15 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white/25 rounded-full animate-pulse delay-2000"></div>
    </div>
  );
};

export default HotelIntro;