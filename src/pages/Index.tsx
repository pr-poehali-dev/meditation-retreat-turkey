import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://cdn.poehali.dev/files/2e54db15-1163-4564-8174-2a61de3866d8.jpg')`
        }}
      >
        <div className="text-center text-white px-4 animate-fade-in max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            Ретрит в Турции
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Неделя тепла и солнца перед холодной зимой
          </p>
          <p className="text-lg md:text-xl mb-10 font-light opacity-90">
            Затерянный средиземноморский городок · Практики цигун · Морское путешествие
          </p>
          <Button 
            size="lg" 
            className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-6 text-lg font-medium"
          >
            Присоединяйтесь
          </Button>
        </div>
      </section>

      {/* Location Section */}
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

      {/* Practices Section */}
      <section id="practices" className="py-24 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center gap-2 text-healing mb-4">
              <Icon name="Heart" size={28} />
              <span className="text-sm uppercase tracking-wider font-semibold">Практики</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
              Практики цигун и медитация
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Древние техники для внутренней гармонии и здоровья
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in bg-white">
              <CardContent className="p-8">
                <div className="mb-6 text-healing">
                  <Icon name="Sparkles" size={48} />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-gray-800">Практики цигун</h3>
                <p className="text-gray-600 leading-relaxed">
                  Изучим древние техники работы с энергией ци для укрепления здоровья, 
                  внутренней силы и баланса.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in bg-white">
              <CardContent className="p-8">
                <div className="mb-6 text-mediterranean">
                  <Icon name="Flower2" size={48} />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-gray-800">Здоровье и долголетие</h3>
                <p className="text-gray-600 leading-relaxed">
                  Комплекс способствует укреплению иммунитета, 
                  повышению жизненного тонуса и энергетики.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in bg-white">
              <CardContent className="p-8">
                <div className="mb-6 text-sunset">
                  <Icon name="Brain" size={48} />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-gray-800">Медитация</h3>
                <p className="text-gray-600 leading-relaxed">
                  Научимся медитировать, слушать тишину и находить внутренний покой. 
                  Техники для глубокого расслабления.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in bg-white">
              <CardContent className="p-8">
                <div className="mb-6 text-terracotta">
                  <Icon name="Sunrise" size={48} />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-gray-800">Встречи рассвета</h3>
                <p className="text-gray-600 leading-relaxed">
                  Каждый день начинается с приветствия солнца на берегу моря 
                  в атмосфере покоя и гармонии.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in bg-white">
              <CardContent className="p-8">
                <div className="mb-6 text-healing">
                  <Icon name="Moon" size={48} />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-gray-800">Закаты в тишине</h3>
                <p className="text-gray-600 leading-relaxed">
                  Вечерние практики созерцания и благодарности, 
                  наблюдая за уходящим солнцем над морем.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in bg-white">
              <CardContent className="p-8">
                <div className="mb-6 text-mediterranean">
                  <Icon name="Sailboat" size={48} />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-gray-800">Морское путешествие</h3>
                <p className="text-gray-600 leading-relaxed">
                  Путешествие на яхте по побережью с посещением 
                  древних памятников и скрытых бухт.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bodhidharma Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 text-healing mb-4">
                <Icon name="Sparkles" size={28} />
                <span className="text-sm uppercase tracking-wider font-semibold">Что мы будем изучать</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800 leading-tight">
                Комплекс цигун Бодхидхармы
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6 font-medium">
                Древнее наследие мудрости для внутренней гармонии и силы
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Этот уникальный комплекс цигун был создан великим мастером Бодхидхармы и оставлен 
                в наследство монахам Шаолиня — одному из старейших и самых знаменитых монастырей 
                и центров духовной и боевой практики Китая.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Он объединяет древние знания о внутренней энергии и техники, которые помогают 
                обрести здоровье, баланс и внутреннюю силу.
              </p>
              
              <div className="bg-gradient-to-br from-blue-50 to-healing/10 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-800 mb-3 text-lg">Что представляет собой комплекс</h4>
                <p className="text-gray-600 leading-relaxed">
                  Систематизированная практика, включающая дыхательные упражнения, статические 
                  и динамические движения, медитации и техники концентрации. Все компоненты направлены 
                  на активизацию, гармонизацию и укрепление энергии ци внутри тела, а также на развитие 
                  внутреннего спокойствия, осознанности и духовной глубины.
                </p>
              </div>
            </div>

            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-serif mb-6 text-gray-800">Ценность комплекса</h3>
              
              <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-sm border border-blue-100">
                <Icon name="Zap" size={28} className="text-healing mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Глубокое знание внутренней энергии</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Комплекс помогает понять и управлять своей жизненной силой, 
                    что важно для достижения гармонии тела и ума
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-sm border border-blue-100">
                <Icon name="Heart" size={28} className="text-mediterranean mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Здоровье и долголетие</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Регулярная практика способствует укреплению иммунитета, 
                    повышению жизненного тонуса и энергетики
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-sm border border-blue-100">
                <Icon name="Flame" size={28} className="text-sunset mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Духовное развитие</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Практики Бодхидхармы помогают найти внутренний покой, 
                    развивают сосредоточенность и духовное восприятие
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-sm border border-blue-100">
                <Icon name="BookOpen" size={28} className="text-terracotta mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Историческая и культурная ценность</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Это часть великого наследия мудрости древнего Китая, 
                    сохраняющая свою актуальность и сегодня
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Section */}
      <section id="hotel" className="py-24 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[550px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/files/e4f24ad8-5338-4f09-9312-c7679335b1b1.jpg"
                alt="Отель на берегу моря"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 text-sunset mb-4">
                <Icon name="Hotel" size={28} />
                <span className="text-sm uppercase tracking-wider font-semibold">Проживание</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800 leading-tight">
                Шикарный отель на берегу моря
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Бутик-отель с аутентичной средиземноморской архитектурой, 
                уютными номерами и потрясающими видами на море.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <Icon name="UtensilsCrossed" size={28} className="text-healing mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">Вкусная еда</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Средиземноморская кухня с местными продуктами, свежими морепродуктами 
                      и традиционными турецкими блюдами
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <Icon name="Waves" size={28} className="text-mediterranean mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">Прямой выход к морю</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Частный пляж с шезлонгами и возможность купаться 
                      в чистейшей воде в любое время
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <Icon name="Home" size={28} className="text-sunset mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">Комфорт и уют</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Просторные номера с террасами, кондиционером 
                      и всеми удобствами для отдыха
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center gap-2 text-terracotta mb-4">
              <Icon name="Calendar" size={28} />
              <span className="text-sm uppercase tracking-wider font-semibold">Условия</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
              Условия участия
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Всё включено: проживание, питание, практики и морское путешествие
            </p>
          </div>

          <Card className="border-none shadow-2xl animate-fade-in bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="p-12">
              <div className="text-center mb-10">
                <div className="inline-block mb-6">
                  <Icon name="Sparkles" size={64} className="text-healing" />
                </div>
                <h3 className="text-3xl font-serif mb-4 text-gray-800">Программа «Полный ретрит»</h3>
                <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                  7 дней и 6 ночей на берегу Средиземного моря
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                  <Icon name="CheckCircle2" size={24} className="text-healing mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">Проживание в шикарном отеле</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                  <Icon name="CheckCircle2" size={24} className="text-healing mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">Трёхразовое питание</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                  <Icon name="CheckCircle2" size={24} className="text-healing mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">Ежедневные практики цигун</p>
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
                    <p className="text-gray-700 font-medium">Путешествие на яхте</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                  <Icon name="CheckCircle2" size={24} className="text-healing mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">Экскурсии к памятникам</p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-8 border-t border-gray-200">
                <p className="text-gray-600 mb-6 text-lg">
                  Неделя тепла и солнца перед холодной зимой
                </p>
                <Button 
                  size="lg" 
                  className="bg-healing hover:bg-healing/90 text-white px-12 py-6 text-xl"
                >
                  Присоединяйтесь
                </Button>
                <p className="text-gray-500 mt-6 text-sm">
                  Количество мест ограничено
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-blue-50 to-mediterranean/10">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <Icon name="Heart" size={64} className="text-healing mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
            Присоединяйтесь к ретриту
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Подарите себе неделю покоя, практик и средиземноморского тепла 
            перед холодной зимой
          </p>
          <Button 
            size="lg" 
            className="bg-sunset hover:bg-sunset/90 text-white px-12 py-6 text-xl"
          >
            Забронировать место
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-800 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-300 mb-4">Ретрит в Турции · 2024</p>
          <div className="flex justify-center gap-6">
            <a href="#location" className="text-gray-300 hover:text-white transition-colors">
              Местоположение
            </a>
            <a href="#practices" className="text-gray-300 hover:text-white transition-colors">
              Практики
            </a>
            <a href="#hotel" className="text-gray-300 hover:text-white transition-colors">
              Отель
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Условия
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;