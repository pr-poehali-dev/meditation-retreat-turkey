import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 text-healing mb-4">
            <Icon name="User" size={28} />
            <span className="text-sm uppercase tracking-wider font-semibold">Ведущая</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
            О ведущей ретрита
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/files/0e5a73cf-f5aa-4caa-a40f-f01c22a31e34.jpg"
              alt="Ольга Натяжкова"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6 animate-fade-in">
            <div>
              <h3 className="text-3xl font-serif mb-2 text-gray-800">Ольга Натяжкова</h3>
              <p className="text-lg text-healing mb-6">
                Преподаватель цигун, медитации и даосских практик
              </p>
            </div>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Icon name="Award" size={24} className="text-healing mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Опыт и образование</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Более 10 лет практики и преподавания цигун. Обучалась у китайских мастеров 
                      традиционных школ. Сертифицированный инструктор по даосским практикам.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Icon name="Heart" size={24} className="text-mediterranean mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Подход к обучению</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Я верю, что каждый человек способен обрести внутреннюю гармонию и здоровье 
                      через практику цигун. Моя задача — создать безопасное пространство для вашего 
                      развития и трансформации.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Icon name="Sparkles" size={24} className="text-sunset mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Философия практики</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Цигун — это не просто упражнения, это путь к пониманию себя, 
                      своего тела и энергии. Через регулярную практику мы учимся слышать 
                      внутреннюю мудрость и жить в гармонии с природой.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
