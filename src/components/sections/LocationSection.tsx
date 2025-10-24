import Icon from "@/components/ui/icon";

const LocationSection = () => {
  return (
    <section id="location" className="py-24 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 text-mediterranean mb-4">
              <Icon name="MapPin" size={28} />
              <span className="text-sm uppercase tracking-wider font-semibold">Местоположение</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800 leading-tight">
              Город Каш — затерянный уголок нетуристической Турции
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Каш — небольшой город на средиземноморском побережье вдали от массовых туристических маршрутов. 
              Место, где время замедляется, а душа находит покой.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Мы будем встречать рассветы и закаты в тишине, слушать звуки природы 
              и моря, наслаждаться теплом солнца и мягким бризом.
            </p>
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "Здесь вы услышите тишину и научитесь слушать себя"
              </p>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/files/2e54db15-1163-4564-8174-2a61de3866d8.jpg"
              alt="Средиземноморский городок"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
