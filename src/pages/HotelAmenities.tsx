import { ArrowLeft, Wifi, Waves, Dumbbell, Car, Coffee, Shield, Utensils } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const HotelAmenities = () => {
  const navigate = useNavigate();

  const amenities = [
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Piscina al Aire Libre",
      description: "Piscina climatizada con vista panorámica de la ciudad",
      hours: "6:00 AM - 10:00 PM",
      location: "Piso 5"
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Gimnasio",
      description: "Equipamiento moderno Technogym las 24 horas",
      hours: "24 horas",
      location: "Piso 2"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "WiFi Premium",
      description: "Internet de alta velocidad en todo el hotel",
      hours: "24 horas",
      location: "Todo el hotel"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Estacionamiento",
      description: "Estacionamiento seguro y gratuito para huéspedes",
      hours: "24 horas",
      location: "Sótanos 1 y 2"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Lobby Bar",
      description: "Cócteles artesanales y café gourmet",
      hours: "6:00 AM - 12:00 AM",
      location: "Lobby principal"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Seguridad 24/7",
      description: "Personal de seguridad y cámaras de vigilancia",
      hours: "24 horas",
      location: "Todo el hotel"
    }
  ];

  const roomAmenities = [
    "Aire acondicionado centralizado",
    "TV LED 55\" con canales internacionales",
    "Minibar totalmente equipado",
    "Caja fuerte digital",
    "Secador de cabello profesional",
    "Plancha y tabla de planchar",
    "Servicio de limpieza diario",
    "Amenidades de baño premium",
    "Escritorio ejecutivo",
    "Balcón privado con vista a la ciudad"
  ];

  const businessServices = [
    {
      service: "Centro de Negocios",
      description: "Computadoras, impresoras y servicios de oficina",
      hours: "6:00 AM - 10:00 PM"
    },
    {
      service: "Salas de Reuniones",
      description: "4 salas equipadas con tecnología audiovisual",
      hours: "Bajo reserva"
    },
    {
      service: "Servicio de Conserjería",
      description: "Asistencia para tours, transporte y reservas",
      hours: "24 horas"
    },
    {
      service: "Servicio de Lavandería",
      description: "Lavado, planchado y tintorería express",
      hours: "6:00 AM - 10:00 PM"
    }
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
            <h1 className="text-3xl font-bold">Amenidades del Hotel</h1>
            <p className="text-lg opacity-90">Todo lo que necesitas para una estadía perfecta</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Hotel Amenities */}
          <div className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm border-0 p-6">
              <h2 className="text-2xl font-bold text-hotel-primary mb-6">Instalaciones Principales</h2>
              <div className="space-y-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="text-hotel-primary mt-1">{amenity.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800">{amenity.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{amenity.description}</p>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Horario: {amenity.hours}</span>
                        <span>Ubicación: {amenity.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 p-6">
              <h3 className="text-xl font-bold text-hotel-primary mb-4">Servicios de Negocios</h3>
              <div className="space-y-3">
                {businessServices.map((service, index) => (
                  <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0">
                    <h4 className="font-semibold text-gray-800">{service.service}</h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
                    <p className="text-xs text-gray-500">Disponible: {service.hours}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Room Amenities */}
          <div className="space-y-6">
            <Card className="bg-hotel-primary text-white border-0 p-6">
              <h2 className="text-2xl font-bold mb-6">Amenidades de Habitación</h2>
              <div className="grid grid-cols-1 gap-3">
                {roomAmenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span className="text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 p-6">
              <h3 className="text-xl font-bold text-hotel-primary mb-4">Horarios de Servicios</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium">Desayuno</span>
                  <span className="text-gray-600">6:00 AM - 10:30 AM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium">Restaurante</span>
                  <span className="text-gray-600">12:00 PM - 11:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium">Room Service</span>
                  <span className="text-gray-600">24 horas</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium">Recepción</span>
                  <span className="text-gray-600">24 horas</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">Housekeeping</span>
                  <span className="text-gray-600">8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </Card>

            <Card className="bg-green-600 text-white border-0 p-6">
              <h3 className="text-xl font-bold mb-4">Contacto Rápido</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Recepción:</strong> Marque 0</p>
                <p><strong>Room Service:</strong> Marque 101</p>
                <p><strong>Housekeeping:</strong> Marque 102</p>
                <p><strong>Conserjería:</strong> Marque 103</p>
                <p><strong>Seguridad:</strong> Marque 911</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelAmenities;