import { Clock, Wifi, Thermometer } from "lucide-react";
import { Card } from "@/components/ui/card";

const HotelTVDashboard = () => {
  const currentTime = new Date().toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  });

  const services = [
    {
      title: "Hilton Honors",
      subtitle: "¡Únete a Hilton Honors y descubre todos los beneficios exclusivos que tenemos para ti!",
      image: "/lovable-uploads/609bd03b-dbc2-4032-8d4d-d7a6a3b70766.png",
      buttonText: "Más información",
      bgColor: "bg-blue-600"
    },
    {
      title: "Flight status",
      subtitle: "Check your flight information",
      image: "/lovable-uploads/609bd03b-dbc2-4032-8d4d-d7a6a3b70766.png",
      bgColor: "bg-orange-500"
    },
    {
      title: "Enjoy your Hotel",
      subtitle: "Discover hotel amenities",
      image: "/lovable-uploads/609bd03b-dbc2-4032-8d4d-d7a6a3b70766.png",
      bgColor: "bg-green-600"
    },
    {
      title: "Menu and services",
      subtitle: "Room service and dining",
      image: "/lovable-uploads/609bd03b-dbc2-4032-8d4d-d7a6a3b70766.png",
      bgColor: "bg-gray-600"
    },
    {
      title: "Discover El Salvador",
      subtitle: "Local attractions and tours",
      image: "/lovable-uploads/609bd03b-dbc2-4032-8d4d-d7a6a3b70766.png",
      bgColor: "bg-red-600"
    }
  ];

  const streamingApps = [
    { name: "Stream TV", logo: "📺" },
    { name: "Netflix", logo: "N", bgColor: "bg-red-600" },
    { name: "Prime Video", logo: "📹", bgColor: "bg-blue-500" },
    { name: "Disney+", logo: "D+", bgColor: "bg-blue-700" },
    { name: "YouTube", logo: "▶️", bgColor: "bg-red-500" },
    { name: "Wi-Fi", logo: "📶", bgColor: "bg-gray-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-hotel-bg to-background relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-hotel-overlay" />
      
      {/* Content */}
      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-hotel-primary">H</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Hilton</h1>
                <p className="text-sm opacity-90">SAN SALVADOR</p>
              </div>
            </div>
          </div>
          
          <div className="text-white text-right">
            <div className="text-3xl font-light mb-1">{currentTime}</div>
            <div className="flex items-center gap-2 text-sm opacity-90">
              <Thermometer className="w-4 h-4" />
              <span>18.29°C</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          {/* Hilton Honors - Large card */}
          <Card className="col-span-5 bg-blue-600 text-white border-0 overflow-hidden relative h-48">
            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Hilton Honors</h2>
                <p className="text-sm opacity-90 mb-4">
                  ¡Únete a Hilton Honors y descubre todos los beneficios exclusivos que tenemos para ti!
                </p>
              </div>
              <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/30 hover:bg-white/30 transition-colors text-sm font-medium self-start">
                Más información
              </button>
            </div>
          </Card>

          {/* Flight Status */}
          <Card className="col-span-7 bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 overflow-hidden relative h-48">
            <div className="p-6 h-full flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Flight status</h2>
                <p className="text-sm opacity-90">Check your flight information</p>
              </div>
              <div className="w-24 h-24 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-4xl">✈️</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <Card className="bg-green-600 text-white border-0 overflow-hidden h-32">
            <div className="p-4 h-full flex items-center justify-between">
              <div>
                <h3 className="font-bold">Enjoy your Hotel</h3>
                <p className="text-xs opacity-90">Discover amenities</p>
              </div>
              <span className="text-2xl">🏨</span>
            </div>
          </Card>

          <Card className="bg-gray-600 text-white border-0 overflow-hidden h-32">
            <div className="p-4 h-full flex items-center justify-between">
              <div>
                <h3 className="font-bold">Menu and services</h3>
                <p className="text-xs opacity-90">Room service & dining</p>
              </div>
              <span className="text-2xl">🍽️</span>
            </div>
          </Card>

          <Card className="bg-red-600 text-white border-0 overflow-hidden h-32">
            <div className="p-4 h-full flex items-center justify-between">
              <div>
                <h3 className="font-bold">Discover El Salvador</h3>
                <p className="text-xs opacity-90">Local attractions</p>
              </div>
              <span className="text-2xl">🌅</span>
            </div>
          </Card>
        </div>

        {/* Streaming Apps */}
        <div className="grid grid-cols-6 gap-4">
          {streamingApps.map((app, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 hover:bg-white transition-colors cursor-pointer">
              <div className="p-4 text-center">
                <div className="text-2xl mb-2">{app.logo}</div>
                <p className="text-sm font-medium text-gray-800">{app.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelTVDashboard;