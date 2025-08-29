import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Play, Pause } from "lucide-react";
import hotelIntroBg from "@/assets/hotel-intro-bg.jpg";

const HotelIntro = () => {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  
  const totalVideoDuration = 30; // 30 seconds
  
  const scenes = [
    {
      title: "Bienvenido a Mi Hotel",
      subtitle: "Una experiencia única te espera",
      duration: 10,
      background: "bg-gradient-to-r from-blue-900/80 to-purple-900/80"
    },
    {
      title: "Servicios de Lujo",
      subtitle: "Comodidad y elegancia en cada detalle",
      duration: 10,
      background: "bg-gradient-to-r from-emerald-900/80 to-blue-900/80"
    },
    {
      title: "Mi Hotel San Salvador",
      subtitle: "Tu hogar lejos de casa",
      duration: 10,
      background: "bg-gradient-to-r from-orange-900/80 to-red-900/80"
    }
  ];

  useEffect(() => {
    setFadeIn(true);
    
    // Video timer
    let interval: NodeJS.Timeout;
    if (videoPlaying) {
      interval = setInterval(() => {
        setVideoTime(prev => {
          const newTime = prev + 1;
          
          // Calculate current scene
          let accumulatedTime = 0;
          let sceneIndex = 0;
          for (let i = 0; i < scenes.length; i++) {
            accumulatedTime += scenes[i].duration;
            if (newTime <= accumulatedTime) {
              sceneIndex = i;
              break;
            }
          }
          setCurrentScene(sceneIndex);
          
          // Loop video after 30 seconds
          if (newTime >= totalVideoDuration) {
            return 0;
          }
          return newTime;
        });
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [videoPlaying, scenes, totalVideoDuration]);

  const handleEnterApp = () => {
    navigate("/dashboard");
  };

  const togglePlayPause = () => {
    setVideoPlaying(!videoPlaying);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Video Background - You can replace this src with a real hotel video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay 
        muted 
        loop={true}
        playsInline
        onTimeUpdate={(e) => {
          const video = e.target as HTMLVideoElement;
          if (video.currentTime >= totalVideoDuration) {
            video.currentTime = 0;
          }
        }}
        style={{ opacity: 0.7 }}
      >
        {/* Replace this with a real hotel video URL */}
        <source src="https://sample-videos.com/zip/10/mp4/360/SampleVideo_360x240_30s.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Fallback Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ 
          backgroundImage: `url(${hotelIntroBg})`,
          transform: `scale(${fadeIn ? 1.02 : 1})`,
          opacity: fadeIn ? 0.6 : 0.3
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        {/* Hotel Logo */}
        <div className={`text-center mb-8 transition-all duration-2000 delay-500 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
            <span className="text-4xl font-bold text-hotel-primary">M</span>
          </div>
          <h1 className="text-5xl font-light text-white mb-3 tracking-wider">MI HOTEL</h1>
          <h2 className="text-xl text-white opacity-90 tracking-widest">SAN SALVADOR</h2>
          <p className="text-sm text-white opacity-75 mt-1">El Salvador, Centro América</p>
        </div>

        {/* Dynamic Content */}
        <div className={`text-center mb-8 transition-all duration-2000 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl text-white font-light mb-3">
            Bienvenido a Mi Hotel
          </h3>
          <p className="text-lg text-white opacity-90 max-w-2xl">
            Una experiencia única te espera en el corazón de San Salvador
          </p>
        </div>

        {/* Enter Button */}
        <div className={`transition-all duration-2000 delay-1500 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card 
            className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group p-6"
            onClick={handleEnterApp}
          >
            <div className="text-center">
              <button className="text-white text-lg font-medium group-hover:scale-105 transition-transform duration-200">
                Ingresar al SmartRoom
              </button>
              <p className="text-white/70 text-xs mt-1">Toca para continuar</p>
            </div>
          </Card>
        </div>

        {/* Animated Elements */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
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