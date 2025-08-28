import { ArrowLeft, MapPin, Camera, Mountain, Waves, Clock, Car } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import elSalvadorBg from "@/assets/el-salvador-bg.jpg";

const DiscoverElSalvador = () => {
  const navigate = useNavigate();

  const attractions = [
    {
      name: "Centro Histórico de San Salvador",
      description: "Catedral, Palacio Nacional y Teatro Nacional",
      distance: "15 min",
      price: "Gratis",
      category: "cultural",
      image: "🏛️"
    },
    {
      name: "Volcán de San Salvador",
      description: "Senderismo y vistas panorámicas",
      distance: "45 min",
      price: "$10",
      category: "nature",
      image: "🌋"
    },
    {
      name: "Joya de Cerén",
      description: "Sitio arqueológico - Pompeya de América",
      distance: "1 hora",
      price: "$15",
      category: "cultural",
      image: "🏺"
    },
    {
      name: "Playa El Tunco",
      description: "Surf y vida nocturna en la costa",
      distance: "1.5 horas",
      price: "$20 transporte",
      category: "beach",
      image: "🏄‍♂️"
    },
    {
      name: "Ruta de las Flores",
      description: "Pueblos coloniales y cafetales",
      distance: "1 hora",
      price: "$25 tour",
      category: "nature",
      image: "🌺"
    },
    {
      name: "Lago de Coatepeque",
      description: "Lago volcánico y deportes acuáticos",
      distance: "1.5 horas",
      price: "$30 tour",
      category: "nature",
      image: "🏞️"
    }
  ];

  const tours = [
    {
      name: "Tour de Café",
      duration: "Medio día",
      price: "$45",
      description: "Visita plantaciones y aprende sobre el proceso del café salvadoreño"
    },
    {
      name: "San Salvador Colonial",
      duration: "4 horas",
      price: "$35",
      description: "Recorrido histórico por el centro de la capital"
    },
    {
      name: "Volcanes y Aventura",
      duration: "Día completo",
      price: "$85",
      description: "Senderismo en volcanes con almuerzo incluido"
    },
    {
      name: "Playa y Surf",
      duration: "Día completo",
      price: "$75",
      description: "Costa del Pacífico con clases de surf opcionales"
    }
  ];

  const culturalTips = [
    "El pupusa es el plato nacional - pruébalo en cualquier pupusería local",
    "El café salvadoreño es reconocido mundialmente por su calidad",
    "La moneda oficial es el dólar estadounidense desde 2001",
    "El idioma oficial es español, pero muchos hablan inglés en zonas turísticas",
    "Los salvadoreños son conocidos por su hospitalidad y amabilidad",
    "El colón salvadoreño era la moneda anterior, aún se ve en souvenirs"
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "cultural":
        return "bg-purple-100 text-purple-800";
      case "nature":
        return "bg-green-100 text-green-800";
      case "beach":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${elSalvadorBg})` }}
      />
      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/40" />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-hotel-bg/60 to-background/60" />
      
      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => navigate("/dashboard")}
            className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="text-white">
            <h1 className="text-3xl font-bold">Descubre El Salvador</h1>
            <p className="text-lg opacity-90">El Pulgarcito de América te espera</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Main Attractions */}
          <div className="col-span-2 space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm border-0 p-6">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-hotel-primary" />
                <h2 className="text-2xl font-bold text-hotel-primary">Atracciones Principales</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {attractions.map((attraction, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-3xl">{attraction.image}</div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(attraction.category)}`}>
                        {attraction.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{attraction.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{attraction.description}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Car className="w-3 h-3" />
                        <span>{attraction.distance}</span>
                      </div>
                      <span className="font-semibold text-hotel-primary">{attraction.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 p-6">
              <div className="flex items-center gap-3 mb-6">
                <Camera className="w-8 h-8 text-hotel-primary" />
                <h2 className="text-2xl font-bold text-hotel-primary">Tours Organizados</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {tours.map((tour, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-hotel-primary transition-colors">
                    <h3 className="font-bold text-gray-800 mb-2">{tour.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{tour.description}</p>
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{tour.duration}</span>
                      </div>
                      <span className="font-bold text-hotel-primary text-lg">{tour.price}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-hotel-primary text-white rounded-lg">
                <p className="text-sm">
                  <strong>Reserva tus tours:</strong> Contacta a nuestro servicio de conserjería marcando 103 
                  o visita el lobby. Descuentos especiales para huéspedes del hotel.
                </p>
              </div>
            </Card>
          </div>

          {/* Side Information */}
          <div className="space-y-6">
            <Card className="bg-green-600 text-white border-0 p-6">
              <h3 className="text-xl font-bold mb-4">Datos de El Salvador</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Capital:</strong> San Salvador
                </div>
                <div>
                  <strong>Población:</strong> 6.5 millones
                </div>
                <div>
                  <strong>Clima:</strong> Tropical, 18-32°C
                </div>
                <div>
                  <strong>Moneda:</strong> Dólar estadounidense
                </div>
                <div>
                  <strong>Zona horaria:</strong> UTC-6
                </div>
                <div>
                  <strong>Volcanes:</strong> 23 volcanes
                </div>
              </div>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 p-6">
              <h3 className="text-xl font-bold text-hotel-primary mb-4">Tips Culturales</h3>
              <div className="space-y-3">
                {culturalTips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-hotel-primary rounded-full mt-2" />
                    <p className="text-sm text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-blue-600 text-white border-0 p-6">
              <h3 className="text-xl font-bold mb-4">Clima Actual</h3>
              <div className="text-center">
                <div className="text-4xl mb-2">☀️</div>
                <div className="text-2xl font-bold">28°C</div>
                <p className="text-sm opacity-90">Soleado y cálido</p>
              </div>
              <div className="mt-4 text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Máxima:</span>
                  <span>32°C</span>
                </div>
                <div className="flex justify-between">
                  <span>Mínima:</span>
                  <span>22°C</span>
                </div>
                <div className="flex justify-between">
                  <span>Humedad:</span>
                  <span>65%</span>
                </div>
              </div>
            </Card>

            <Card className="bg-orange-500 text-white border-0 p-6">
              <h3 className="text-lg font-bold mb-3">Transporte</h3>
              <div className="text-sm space-y-2">
                <p><strong>Taxi del hotel:</strong> Disponible 24/7</p>
                <p><strong>Uber/InDriver:</strong> Disponible en la ciudad</p>
                <p><strong>Buses públicos:</strong> Económicos pero básicos</p>
                <p><strong>Rent a car:</strong> Consulta en recepción</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverElSalvador;