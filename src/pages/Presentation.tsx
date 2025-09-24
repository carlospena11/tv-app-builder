import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowLeft as ChevronLeft, ArrowRight as ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import aiAssistantPresentation from '@/assets/ai-assistant-presentation.png';
import dashboardPresentation from '@/assets/dashboard-presentation.png';
import smartRoomPresentation from '@/assets/smart-room-presentation.png';

const Presentation = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Mi Hotel - Dashboard Principal",
      description: "Sistema integrado de servicios hoteleros para huéspedes",
      image: dashboardPresentation,
      content: [
        "• Mi Hotel Rewards - Programa de recompensas",
        "• Flight Status - Estado de vuelos en tiempo real", 
        "• Servicios del hotel y amenidades",
        "• Entretenimiento digital integrado",
        "• Descubre El Salvador - Guía turística local"
      ]
    },
    {
      id: 2,
      title: "Asistente Virtual IA",
      description: "Asistente por voz disponible 24/7 para huéspedes",
      image: aiAssistantPresentation,
      content: [
        "• Acceso mediante código QR",
        "• Asistente por voz inteligente",
        "• Información sobre servicios del hotel",
        "• Recomendaciones de restaurantes",
        "• Actividades turísticas en El Salvador",
        "• Disponible las 24 horas del día"
      ]
    },
    {
      id: 3,
      title: "Hospitality Smart Room",
      description: "Tecnología inteligente para experiencias digitales de huéspedes",
      image: smartRoomPresentation,
      content: [
        "• Pronóstico del tiempo en tiempo real",
        "• Tablero de estado de vuelos",
        "• Lugares turísticos interactivos",
        "• Televisión digital y streaming",
        "• Internet WiFi con código QR",
        "• Sistema de eventos del hotel",
        "• Tecnología Cast para dispositivos"
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <Button
          variant="ghost"
          onClick={() => navigate('/dashboard')}
          className="text-white hover:bg-white/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al Dashboard
        </Button>
        
        <h1 className="text-2xl font-bold">Presentación Mi Hotel</h1>
        
        <div className="flex items-center space-x-2 text-sm">
          <span>{currentSlide + 1} de {slides.length}</span>
        </div>
      </header>

      {/* Main Presentation Area */}
      <main className="flex-1 px-6 pb-6">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Content Side */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-3">
                      {slides[currentSlide].title}
                    </h2>
                    <p className="text-lg text-white/80 mb-6">
                      {slides[currentSlide].description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {slides[currentSlide].content.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-3 flex-shrink-0"></div>
                        <span className="text-white/90">{item.replace('• ', '')}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Side */}
                <div className="relative">
                  <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                    <img
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-4 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3">
          {/* Previous Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="text-white hover:bg-white/20 disabled:opacity-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-white scale-110'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="text-white hover:bg-white/20 disabled:opacity-50"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Keyboard Navigation */}
      <div className="fixed bottom-4 right-4 text-xs text-white/60">
        Usa ← → para navegar
      </div>
    </div>
  );
};

export default Presentation;