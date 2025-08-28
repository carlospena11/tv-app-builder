import { ArrowLeft, Star, Wifi, Waves, Car, Utensils } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const HiltonHonors = () => {
  const navigate = useNavigate();

  const hotelFeatures = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "WiFi Gratuito",
      description: "Internet de alta velocidad en todo el hotel"
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Piscina",
      description: "Piscina al aire libre con vista panorámica"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Estacionamiento",
      description: "Estacionamiento gratuito para huéspedes"
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Restaurante",
      description: "Cocina internacional y local"
    }
  ];

  const benefits = [
    "Check-in sin contacto",
    "WiFi premium gratuito",
    "Acceso a salas VIP",
    "Descuentos en servicios del hotel",
    "Puntos por cada estadía",
    "Upgrades de habitación gratuitos"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-hotel-bg to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-hotel-overlay" />
      
      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => navigate("/")}
            className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="text-white">
            <h1 className="text-3xl font-bold">Hilton Honors</h1>
            <p className="text-lg opacity-90">Hilton San Salvador</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Hotel Information */}
          <div className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm border-0 p-6">
              <h2 className="text-2xl font-bold text-hotel-primary mb-4">Bienvenido a Hilton San Salvador</h2>
              <p className="text-gray-700 mb-4">
                Ubicado en el corazón de San Salvador, nuestro hotel ofrece la perfecta combinación de 
                lujo moderno y hospitalidad excepcional. Disfruta de vistas panorámicas de la ciudad 
                y servicios de clase mundial.
              </p>
              <div className="flex items-center gap-2 text-hotel-primary">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <span className="ml-2 text-gray-600">Hotel 5 estrellas</span>
              </div>
            </Card>

            {/* Hotel Features */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 p-6">
              <h3 className="text-xl font-bold text-hotel-primary mb-4">Servicios del Hotel</h3>
              <div className="grid grid-cols-2 gap-4">
                {hotelFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-hotel-primary mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Hilton Honors Benefits */}
          <div className="space-y-6">
            <Card className="bg-blue-600 text-white border-0 p-6">
              <h2 className="text-2xl font-bold mb-4">Beneficios Hilton Honors</h2>
              <p className="mb-6 opacity-90">
                Únete al programa de lealtad más reconocido del mundo y disfruta de beneficios exclusivos.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Registrarse Ahora
              </button>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 p-6">
              <h3 className="text-xl font-bold text-hotel-primary mb-4">Información de Contacto</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Dirección:</strong> Avenida Las Magnolias, Colonia San Benito, San Salvador</p>
                <p><strong>Teléfono:</strong> +503 2267-8888</p>
                <p><strong>Email:</strong> info@hiltonsansalvador.com</p>
                <p><strong>Check-in:</strong> 3:00 PM</p>
                <p><strong>Check-out:</strong> 12:00 PM</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiltonHonors;