import { useState } from 'react';
import { Sparkles, Sun } from 'lucide-react';

const ZODIAC_SIGNS = [
  'Áries', 'Touro', 'Gêmeos', 'Câncer',
  'Leão', 'Virgem', 'Libra', 'Escorpião',
  'Sagitário', 'Capricórnio', 'Aquário', 'Peixes'
];

export default function Horoscope() {
  const [selectedSign, setSelectedSign] = useState<string | null>(null);

  const renderSignCard = (sign: string) => (
    <button
      key={sign}
      onClick={() => setSelectedSign(sign)}
      className={`p-4 rounded-xl border transition-all duration-300 flex flex-col items-center justify-center gap-2 aspect-square
        ${selectedSign === sign
          ? 'bg-accent/20 border-accent text-white shadow-[0_0_15px_rgba(245,158,11,0.3)] scale-105'
          : 'bg-surface/50 border-white/5 text-text/70 hover:bg-white/5 hover:border-white/10 hover:text-white hover:scale-105'}`}
    >
      {/* Placeholder for actual zodiac icon */}
      <Sun className={`w-8 h-8 ${selectedSign === sign ? 'text-accent' : 'opacity-50'}`} />
      <span className="font-medium text-sm">{sign}</span>
    </button>
  );

  return (
    <div className="flex flex-col items-center min-h-[70vh] p-4 animate-fade-in max-w-5xl mx-auto w-full">
      <div className="text-center mb-10 w-full">
         <h2 className="text-4xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent flex items-center justify-center gap-3">
           <Sparkles className="w-8 h-8 text-accent" />
           Horóscopo Diário
         </h2>
         <p className="text-text/70 mt-3 text-lg">
           Selecione seu signo para receber previsões personalizadas geradas por IA.
         </p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full mb-12">
         {ZODIAC_SIGNS.map(renderSignCard)}
      </div>

      {selectedSign && (
        <div className="bg-surface/80 border border-accent/30 rounded-2xl p-8 w-full max-w-3xl text-center shadow-lg animate-fade-in">
           <h3 className="text-2xl font-semibold mb-4 text-white flex justify-center items-center gap-2">
             Previsão para {selectedSign}
           </h3>
           <div className="space-y-4 text-text/80 leading-relaxed">
             <p>
               <strong className="text-accent">Amor:</strong> Os astros indicam um momento propício para conexões profundas. Seja vulnerável.
             </p>
             <p>
               <strong className="text-secondary">Trabalho:</strong> Fique atento às oportunidades que surgem de forma inesperada.
             </p>
             <p>
               <strong className="text-primary">Energia:</strong> A Lua transita trazendo uma intuição aguçada hoje. Confie nos seus instintos.
             </p>
           </div>
           <div className="mt-8 pt-6 border-t border-white/10 flex justify-center">
             <button className="bg-accent/20 hover:bg-accent/30 text-accent px-6 py-2 rounded-full text-sm font-medium transition-colors">
               Assine o Pro para análise detalhada
             </button>
           </div>
        </div>
      )}
    </div>
  );
}
