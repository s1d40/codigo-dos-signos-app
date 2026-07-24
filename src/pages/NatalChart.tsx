import { useState } from 'react';
import { Compass, Calendar, Clock, MapPin } from 'lucide-react';

export default function NatalChart() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    location: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Gerar Mapa Astral para:", formData);
    // Aqui seria feita a chamada para calcular o mapa astral (ex: Swiss Ephemeris API)
    alert('Funcionalidade de cálculo do Mapa Astral em desenvolvimento!');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-4 animate-fade-in">
      <div className="bg-surface/60 backdrop-blur-md border border-primary/20 rounded-2xl p-8 w-full max-w-lg shadow-[0_0_40px_rgba(124,58,237,0.1)]">

        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary/20 p-3 rounded-full text-primary">
            <Compass className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-text/70 bg-clip-text text-transparent">
            Seu Mapa Astral
          </h2>
        </div>

        <p className="text-text/70 mb-8 text-sm">
          Preencha seus dados de nascimento exatos para descobrir a posição dos astros no momento em que você chegou ao mundo.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-text/90">Nome Completo</label>
            <input
              type="text"
              required
              className="w-full bg-background/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
              placeholder="Ex: João da Silva"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-text/90 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary/70" /> Data
              </label>
              <input
                type="date"
                required
                className="w-full bg-background/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary/50 transition-all"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text/90 flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary/70" /> Hora
              </label>
              <input
                type="time"
                required
                className="w-full bg-background/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary/50 transition-all"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-text/90 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary/70" /> Cidade de Nascimento
            </label>
            <input
              type="text"
              required
              className="w-full bg-background/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary/50 transition-all"
              placeholder="Ex: São Paulo, SP"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(124,58,237,0.4)] mt-4 flex items-center justify-center gap-2"
          >
            <Compass className="w-5 h-5" />
            Gerar Meu Mapa Astral
          </button>
        </form>
      </div>
    </div>
  );
}
