import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const BodhidharmaSection = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 text-healing mb-4">
            <Icon name="Sparkles" size={28} />
            <span className="text-sm uppercase tracking-wider font-semibold">Что мы будем изучать</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
            Второй комплекс цигун Бодхидхармы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Древнейшая система самосовершенствования для очищения сознания и внутренней силы
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-healing">
                  <Icon name="BookOpen" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-3 text-gray-800">История комплекса</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Легендарный монах Бодхидхарма создал этот комплекс в монастыре Шаолинь 
                    для укрепления тела и духа монахов. Техники передавались из поколения в поколение, 
                    сохраняя свою силу на протяжении веков.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-mediterranean">
                  <Icon name="Target" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-3 text-gray-800">Цель практики</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Второй комплекс направлен на очищение костного мозга, 
                    укрепление внутренних органов и активацию глубинных энергетических каналов. 
                    Это путь к долголетию и внутренней силе.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://cdn.poehali.dev/files/06ab8494-f27c-40e3-ac79-53a6be7fa327.jpg"
              alt="Практика цигун"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white p-12 rounded-2xl shadow-xl">
          <h3 className="text-3xl font-serif mb-8 text-gray-800 text-center">
            Что даёт практика комплекса
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Icon name="CheckCircle2" size={24} className="text-healing mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Физическое здоровье</h4>
                <p className="text-gray-600">
                  Укрепление костей, суставов, улучшение работы внутренних органов
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Icon name="CheckCircle2" size={24} className="text-healing mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Энергетический баланс</h4>
                <p className="text-gray-600">
                  Гармонизация потоков ци, активация энергетических каналов
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Icon name="CheckCircle2" size={24} className="text-healing mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Ясность ума</h4>
                <p className="text-gray-600">
                  Очищение сознания от ментального шума, улучшение концентрации
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Icon name="CheckCircle2" size={24} className="text-healing mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Долголетие</h4>
                <p className="text-gray-600">
                  Замедление процессов старения, повышение жизненной силы
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BodhidharmaSection;
