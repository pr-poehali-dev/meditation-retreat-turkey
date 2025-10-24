import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ProgramSection = () => {
  return (
    <section id="program" className="py-24 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 text-terracotta mb-4">
            <Icon name="Calendar" size={28} />
            <span className="text-sm uppercase tracking-wider font-semibold">Программа</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
            Условия участия
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Всё продумано до мелочей для вашего комфорта и глубокого погружения
          </p>
        </div>

        <Card className="border-none shadow-2xl animate-fade-in bg-gradient-to-br from-blue-50 to-white">
          <CardContent className="p-12">
            <div className="text-center mb-10">
              <div className="inline-block mb-6">
                <Icon name="Sparkles" size={64} className="text-healing" />
              </div>
              <h3 className="text-3xl font-serif mb-4 text-gray-800">Программа «Цигун-интенсив»</h3>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Всё включено для полного погружения в практики
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <Icon name="CheckCircle2" size={24} className="text-healing mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 font-medium">Ежедневные практики цигун</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <Icon name="CheckCircle2" size={24} className="text-healing mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 font-medium">Проживание в шикарном отеле</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <Icon name="CheckCircle2" size={24} className="text-healing mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 font-medium">Медитации на рассвете и закате</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <Icon name="CheckCircle2" size={24} className="text-healing mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 font-medium">Специальное детокс меню</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <Icon name="CheckCircle2" size={24} className="text-healing mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 font-medium">Барбекю на море</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <Icon name="CheckCircle2" size={24} className="text-healing mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 font-medium">Спа процедуры</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <Icon name="CheckCircle2" size={24} className="text-healing mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 font-medium">Морская прогулка</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <Icon name="CheckCircle2" size={24} className="text-healing mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 font-medium">Затерянные пляжи</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <Icon name="CheckCircle2" size={24} className="text-healing mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 font-medium">Старинные улочки</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <Icon name="CheckCircle2" size={24} className="text-healing mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 font-medium">Затопленный античный город</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-lg md:col-span-2">
                <Icon name="CheckCircle2" size={24} className="text-healing mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 font-medium">Нетуристическая Турция с греческими пейзажами</p>
                </div>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-gray-600 mb-6 text-lg">
                16-23 ноября 2025 г. · Полное погружение в мир цигун и древности
              </p>
              <div className="bg-healing/10 p-6 rounded-xl">
                <p className="text-3xl font-serif text-healing mb-2">99 000 руб.</p>
                <p className="text-gray-600">
                  Полный пакет: проживание, питание, все практики и экскурсии
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProgramSection;
