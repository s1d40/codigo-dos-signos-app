import { useState } from 'react';
import { Heart, Calendar, Clock, MapPin } from 'lucide-react';

export default function Synastry() {
  const [person1, setPerson1] = useState({ name: '', date: '', time: '', location: '' });
  const [person2, setPerson2] = useState({ name: '', date: '', time: '', location: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Gerar Sinastria para:", person1, "e", person2);
    alert('Funcionalidade de cálculo de Sinastria em desenvolvimento!');
  };

  const renderForm = (person: any, setPerson: any, title: string, color: string) => (
    <div className={`space-y-4 p-6 rounded-xl border ${color === "primary" ? "border-primary/20 bg-primary/5" : "border-secondary/20 bg-secondary/5"}`}>
      <h3 className={`text-xl font-semibold ${color === "primary" ? "text-primary" : "text-secondary"} flex items-center gap-2`}>
         <Heart className={`w-5 h-5 ${color === "primary" ? "text-primary" : "text-secondary"}`} /> {title}
      </h3>
      <div className="space-y-2">
        <label className="text-xs text-text/70">Nome</label>
        <input type="text" required className="w-full bg-background/50 border border-white/10 rounded-md p-2 text-sm text-white" value={person.name} onChange={(e) => setPerson({...person, name: e.target.value})} />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1">
          <label className="text-xs text-text/70"><Calendar className="w-3 h-3 inline" /> Data</label>
          <input type="date" required className="w-full bg-background/50 border border-white/10 rounded-md p-2 text-sm text-white" value={person.date} onChange={(e) => setPerson({...person, date: e.target.value})} />
        </div>
        <div className="space-y-1">
          <label className="text-xs text-text/70"><Clock className="w-3 h-3 inline" /> Hora</label>
          <input type="time" required className="w-full bg-background/50 border border-white/10 rounded-md p-2 text-sm text-white" value={person.time} onChange={(e) => setPerson({...person, time: e.target.value})} />
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-xs text-text/70"><MapPin className="w-3 h-3 inline" /> Cidade</label>
        <input type="text" required className="w-full bg-background/50 border border-white/10 rounded-md p-2 text-sm text-white" value={person.location} onChange={(e) => setPerson({...person, location: e.target.value})} />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-4 animate-fade-in">
      <div className="bg-surface/60 backdrop-blur-md border border-secondary/20 rounded-2xl p-8 w-full max-w-4xl shadow-[0_0_40px_rgba(236,72,153,0.1)]">
        <div className="text-center mb-8">
          <div className="bg-secondary/20 p-4 rounded-full text-secondary inline-block mb-4">
            <Heart className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Sinastria Amorosa
          </h2>
          <p className="text-text/70 mt-2 max-w-lg mx-auto">
            Descubra o nível de compatibilidade cósmica entre você e seu par.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 relative">
            {/* Divider line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2"></div>

            {renderForm(person1, setPerson1, "Pessoa 1", "primary")}
            {renderForm(person2, setPerson2, "Pessoa 2", "secondary")}
          </div>

          <div className="flex justify-center pt-4">
             <button
                type="submit"
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-[1.05] shadow-[0_0_20px_rgba(236,72,153,0.4)] flex items-center gap-2"
              >
                <Heart className="w-5 h-5 fill-current" />
                Calcular Compatibilidade
              </button>
          </div>
        </form>
      </div>
    </div>
  );
}
