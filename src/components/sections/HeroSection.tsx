import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://cdn.poehali.dev/files/2e54db15-1163-4564-8174-2a61de3866d8.jpg')`
      }}
    >
      <div className="text-center text-white px-4 animate-fade-in max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">
          Цигун-интенсив. 8 дней.
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light">
          16-23 ноября 2025 г.
        </p>
        <p className="text-lg md:text-xl mb-10 font-light opacity-90">
          Затерянный средиземноморский городок · Практики цигун · Морское путешествие
        </p>
        <Button 
          size="lg" 
          className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-6 text-lg font-medium"
          asChild
        >
          <a href="https://t.me/olvonata_private" target="_blank" rel="noopener noreferrer">
            Присоединяйтесь
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
