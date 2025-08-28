import { ArrowLeft, Plane, Clock, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const FlightStatus = () => {
  const navigate = useNavigate();

  const arrivals = [
    {
      airline: "Avianca",
      flight: "AV523",
      origin: "Guatemala City (GUA)",
      scheduled: "08:45",
      status: "En hora",
      gate: "A3"
    },
    {
      airline: "Copa Airlines",
      flight: "CM315",
      origin: "Panamá City (PTY)",
      scheduled: "10:30",
      status: "Retrasado",
      gate: "B2"
    },
    {
      airline: "American Airlines",
      flight: "AA1234",
      origin: "Miami (MIA)",
      scheduled: "14:20",
      status: "En hora",
      gate: "A1"
    },
    {
      airline: "TACA",
      flight: "TA456",
      origin: "San José (SJO)",
      scheduled: "16:15",
      status: "En hora",
      gate: "A4"
    }
  ];

  const departures = [
    {
      airline: "Avianca",
      flight: "AV524",
      destination: "Guatemala City (GUA)",
      scheduled: "09:30",
      status: "Abordando",
      gate: "A3"
    },
    {
      airline: "Copa Airlines",
      flight: "CM316",
      destination: "Panamá City (PTY)",
      scheduled: "11:45",
      status: "En hora",
      gate: "B2"
    },
    {
      airline: "American Airlines",
      flight: "AA1235",
      destination: "Miami (MIA)",
      scheduled: "15:30",
      status: "En hora",
      gate: "A1"
    },
    {
      airline: "TACA",
      flight: "TA457",
      destination: "San José (SJO)",
      scheduled: "17:00",
      status: "En hora",
      gate: "A4"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "En hora":
        return "text-green-600";
      case "Retrasado":
        return "text-red-600";
      case "Abordando":
        return "text-orange-600";
      default:
        return "text-gray-600";
    }
  };

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
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Plane className="w-8 h-8" />
              Estado de Vuelos
            </h1>
            <p className="text-lg opacity-90">Aeropuerto Internacional Monseñor Óscar Arnulfo Romero (SAL)</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Arrivals */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-100 rounded-lg">
                <Plane className="w-6 h-6 text-green-600 rotate-45" />
              </div>
              <h2 className="text-2xl font-bold text-hotel-primary">Llegadas</h2>
            </div>
            
            <div className="space-y-4">
              {arrivals.map((flight, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg">{flight.airline}</h3>
                      <p className="text-hotel-primary font-semibold">{flight.flight}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{flight.scheduled}</span>
                      </div>
                      <span className={`text-sm font-semibold ${getStatusColor(flight.status)}`}>
                        {flight.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{flight.origin}</span>
                    </div>
                    <span>Puerta: {flight.gate}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Departures */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Plane className="w-6 h-6 text-blue-600 -rotate-45" />
              </div>
              <h2 className="text-2xl font-bold text-hotel-primary">Salidas</h2>
            </div>
            
            <div className="space-y-4">
              {departures.map((flight, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg">{flight.airline}</h3>
                      <p className="text-hotel-primary font-semibold">{flight.flight}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{flight.scheduled}</span>
                      </div>
                      <span className={`text-sm font-semibold ${getStatusColor(flight.status)}`}>
                        {flight.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{flight.destination}</span>
                    </div>
                    <span>Puerta: {flight.gate}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Airport Info */}
        <Card className="bg-white/90 backdrop-blur-sm border-0 p-6 mt-8">
          <h3 className="text-xl font-bold text-hotel-primary mb-4">Información del Aeropuerto</h3>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-gray-800">Tiempo al Aeropuerto</h4>
              <p className="text-2xl font-bold text-hotel-primary">25 min</p>
              <p className="text-sm text-gray-600">Desde el hotel</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Servicio de Shuttle</h4>
              <p className="text-2xl font-bold text-hotel-primary">$15</p>
              <p className="text-sm text-gray-600">Por persona</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Taxi</h4>
              <p className="text-2xl font-bold text-hotel-primary">$20-25</p>
              <p className="text-sm text-gray-600">Tarifa promedio</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FlightStatus;