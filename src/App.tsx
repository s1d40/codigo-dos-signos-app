import { useState } from 'react';
import Home from './pages/Home';
import NatalChart from './pages/NatalChart';
import Synastry from './pages/Synastry';
import Horoscope from './pages/Horoscope';
import { Compass, Heart, Sparkles, Home as HomeIcon } from 'lucide-react';
import Starfield from './components/Starfield';

export default function App() {
  const [route, setRoute] = useState('/');

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col font-sans">
      <Starfield />
      {/* Dynamic Cosmic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/20 animate-nebula [animation-delay:-10s] blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-secondary/20 animate-nebula [animation-delay:-10s] blur-[150px] pointer-events-none"></div>

      <nav className="p-4 flex flex-wrap gap-4 justify-center items-center bg-surface/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-50 shadow-lg">
        <button
           onClick={() => setRoute('/')}
           className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-medium ${route === '/' ? 'bg-white/10 text-white' : 'text-text/70 hover:text-white hover:bg-white/5'}`}
        >
          <HomeIcon className="w-4 h-4" />
          Home
        </button>
        <button
           onClick={() => setRoute('/natal-chart')}
           className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-medium ${route === '/natal-chart' ? 'bg-primary/20 text-primary' : 'text-text/70 hover:text-primary hover:bg-primary/10'}`}
        >
          <Compass className="w-4 h-4" />
          Mapa Astral
        </button>
        <button
           onClick={() => setRoute('/synastry')}
           className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-medium ${route === '/synastry' ? 'bg-secondary/20 text-secondary' : 'text-text/70 hover:text-secondary hover:bg-secondary/10'}`}
        >
          <Heart className="w-4 h-4" />
          Sinastria
        </button>
        <button
           onClick={() => setRoute('/horoscope')}
           className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-medium ${route === '/horoscope' ? 'bg-accent/20 text-accent' : 'text-text/70 hover:text-accent hover:bg-accent/10'}`}
        >
           <Sparkles className="w-4 h-4" />
          Horóscopo
        </button>
      </nav>

      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full z-10 relative">
        {route === '/' && <Home />}
        {route === '/natal-chart' && <NatalChart />}
        {route === '/synastry' && <Synastry />}
        {route === '/horoscope' && <Horoscope />}
      </main>

      <footer className="py-6 text-center text-text/40 text-sm border-t border-white/5 z-10">
          © 2026 Código dos Signos. A magia do universo nas suas mãos.
      </footer>
    </div>
  );
}
