import { ArrowLeft, Clock, Phone, UtensilsCrossed, Coffee, Wine } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import restaurantBg from "@/assets/restaurant-bg.jpg";

const MenuServices = () => {
  const navigate = useNavigate();

  const roomServiceMenu = [
    {
      category: "Desayunos",
      items: [
        { name: "Desayuno Continental", description: "Frutas, cereales, pan tostado, café", price: "$12" },
        { name: "Desayuno Salvadoreño", description: "Pupusas, frijoles, queso, café", price: "$15" },
        { name: "Desayuno Americano", description: "Huevos, tocino, hash browns, tostadas", price: "$18" }
      ]
    },
    {
      category: "Platos Principales",
      items: [
        { name: "Salmón a la Plancha", description: "Con vegetales asados y arroz", price: "$28" },
        { name: "Filete de Res", description: "Con papas gratinadas y ensalada", price: "$32" },
        { name: "Pollo en Salsa de Hierbas", description: "Con puré de papas y vegetales", price: "$24" }
      ]
    },
    {
      category: "Bebidas",
      items: [
        { name: "Café Gourmet", description: "Café salvadoreño premium", price: "$5" },
        { name: "Jugos Naturales", description: "Naranja, piña, mango", price: "$7" },
        { name: "Cócteles", description: "Variedad de cócteles artesanales", price: "$12" }
      ]
    }
  ];

  const restaurantInfo = {
    name: "Restaurante El Mirador",
    description: "Cocina internacional con especialidades salvadoreñas",
    hours: "6:00 AM - 11:00 PM",
    location: "Piso 15 - Vista panorámica de la ciudad",
    reservation: "Ext. 103"
  };

  const barInfo = {
    name: "Sky Lounge Bar",
    description: "Cócteles premium con vista a la ciudad",
    hours: "5:00 PM - 1:00 AM",
    location: "Piso 16 - Terraza al aire libre",
    happyHour: "5:00 PM - 7:00 PM"
  };

  const services = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Room Service 24/7",
      description: "Servicio a la habitación las 24 horas",
      contact: "Marque 101",
      deliveryTime: "20-30 minutos"
    },
    {
      icon: <UtensilsCrossed className="w-6 h-6" />,
      title: "Servicio de Catering",
      description: "Para eventos y reuniones de negocios",
      contact: "Marque 103",
      deliveryTime: "Bajo reserva"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Coffee Shop",
      description: "Café y snacks en el lobby",
      contact: "Ubicado en el lobby",
      deliveryTime: "6:00 AM - 10:00 PM"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${restaurantBg})` }}
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
            <h1 className="text-3xl font-bold">Menú y Servicios</h1>
            <p className="text-lg opacity-90">Gastronomía de clase mundial a tu alcance</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Room Service Menu */}
          <div className="col-span-2 space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm border-0 p-6">
              <div className="flex items-center gap-3 mb-6">
                <UtensilsCrossed className="w-8 h-8 text-hotel-primary" />
                <h2 className="text-2xl font-bold text-hotel-primary">Menú Room Service</h2>
              </div>
              
              {roomServiceMenu.map((category, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-start p-3 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-gray-800">{item.name}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <span className="text-lg font-bold text-hotel-primary">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="mt-6 p-4 bg-hotel-primary text-white rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">Tiempo de entrega: 20-30 minutos</span>
                </div>
                <p className="text-sm opacity-90">
                  Para ordenar, marque 101 desde su habitación. Servicio disponible las 24 horas.
                </p>
              </div>
            </Card>
          </div>

          {/* Services & Restaurant Info */}
          <div className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm border-0 p-6">
              <h3 className="text-xl font-bold text-hotel-primary mb-4">Servicios Disponibles</h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-hotel-primary">{service.icon}</div>
                      <h4 className="font-semibold text-gray-800">{service.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                    <div className="text-xs text-gray-500 space-y-1">
                      <p><strong>Contacto:</strong> {service.contact}</p>
                      <p><strong>Disponibilidad:</strong> {service.deliveryTime}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-orange-500 text-white border-0 p-6">
              <h3 className="text-xl font-bold mb-4">{restaurantInfo.name}</h3>
              <p className="mb-4 opacity-90">{restaurantInfo.description}</p>
              <div className="space-y-2 text-sm">
                <p><strong>Horario:</strong> {restaurantInfo.hours}</p>
                <p><strong>Ubicación:</strong> {restaurantInfo.location}</p>
                <p><strong>Reservas:</strong> {restaurantInfo.reservation}</p>
              </div>
            </Card>

            <Card className="bg-purple-600 text-white border-0 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Wine className="w-6 h-6" />
                <h3 className="text-xl font-bold">{barInfo.name}</h3>
              </div>
              <p className="mb-4 opacity-90">{barInfo.description}</p>
              <div className="space-y-2 text-sm">
                <p><strong>Horario:</strong> {barInfo.hours}</p>
                <p><strong>Ubicación:</strong> {barInfo.location}</p>
                <p><strong>Happy Hour:</strong> {barInfo.happyHour}</p>
              </div>
            </Card>

            <Card className="bg-green-600 text-white border-0 p-6">
              <h3 className="text-lg font-bold mb-3">Información Importante</h3>
              <div className="text-sm space-y-2">
                <p>• Servicio de habitación sin costo adicional</p>
                <p>• Menú especial para niños disponible</p>
                <p>• Opciones vegetarianas y sin gluten</p>
                <p>• Descuentos del 15% para huéspedes Hilton Honors</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuServices;