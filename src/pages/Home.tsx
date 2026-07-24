import { Moon, Star, Sparkles } from 'lucide-react';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-8 space-y-8 animate-fade-in">
      <div className="space-y-4">
         <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent flex items-center justify-center gap-3">
           <Sparkles className="w-10 h-10 text-primary" />
           Código dos Signos
           <Star className="w-10 h-10 text-accent" />
         </h1>
         <p className="text-xl text-text/80 max-w-2xl mx-auto">
            Descubra o universo através dos astros. Mapas astrais, sinastria amorosa e leituras profundas com Inteligência Artificial.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mt-12">
          {/* Card 1 */}
          <div className="bg-surface/50 border border-primary/30 p-6 rounded-2xl hover:bg-surface/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] cursor-pointer backdrop-blur-sm group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Moon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mapa Astral</h3>
              <p className="text-text/70 text-sm">Entenda sua essência cósmica e seus potenciais ocultos com precisão matemática.</p>
          </div>

           {/* Card 2 */}
           <div className="bg-surface/50 border border-secondary/30 p-6 rounded-2xl hover:bg-surface/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] cursor-pointer backdrop-blur-sm group">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Star className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sinastria Amorosa</h3>
              <p className="text-text/70 text-sm">A novela dos signos: descubra o nível de compatibilidade com o seu crush.</p>
          </div>

          {/* Card 3 */}
           <div className="bg-surface/50 border border-accent/30 p-6 rounded-2xl hover:bg-surface/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] cursor-pointer backdrop-blur-sm group">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Previsões e IA</h3>
              <p className="text-text/70 text-sm">Leituras de tarot e horóscopo personalizados gerados pela nossa inteligência artificial avançada.</p>
          </div>
      </div>
    </div>
  )
}
