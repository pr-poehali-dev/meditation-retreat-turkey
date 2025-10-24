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
            Цигун-интенсив
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
                Город Каш на Ликийской тропе
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Каш – небольшой древний городок, который стоит на знаменитой Ликийской тропе еще с античных времен.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Вдали от шумных туристических локаций, где время замедляется, а душа находит покой среди древних улочек и бирюзового моря.
              </p>
              <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
                <p className="text-gray-700 italic">
                  "Место, где древность встречается с природой"
                </p>
              </div>
            </div>
            <div className="space-y-4 animate-fade-in">
              <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://cdn.poehali.dev/files/14a2099d-b96e-4fb6-a0b1-a27809dd9520.jpg"
                  alt="Старинные улочки Каша"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[240px] rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://cdn.poehali.dev/files/d36e763c-4bf5-4469-8680-4be39dc981ba.jpg"
                    alt="Античная архитектура"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-[240px] rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://cdn.poehali.dev/files/0590defc-81b0-412f-b963-ce5bf047760b.jpg"
                    alt="Уютные улочки"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
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
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center gap-2 text-healing mb-4">
              <Icon name="Sparkles" size={28} />
              <span className="text-sm uppercase tracking-wider font-semibold">Что мы будем изучать</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
              Второй комплекс цигун Бодхидхармы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Древнейший комплекс цигун от самого Дамо, оставленный в наследство первым шаолиньским монахам
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div className="animate-fade-in">
              <h3 className="text-3xl font-serif mb-6 text-gray-800">Древнее наследие Шаолиня</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Изображения этого комплекса до сих пор высечены на камнях у подножия храма. 
                Именно там, в Шаолине, я изучала этот комплекс под личным руководством одного 
                из сильнейших мастеров цигун современного Китая.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Это канон укрепления мышц и сухожилий, улучшение кровообращения и повышение гибкости. 
                Этот комплекс также способствует энергетическому здоровью и улучшает ясность ума.
              </p>
              
              <div className="bg-gradient-to-br from-blue-50 to-healing/10 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-3 text-lg flex items-center gap-2">
                  <Icon name="Sparkles" size={24} className="text-healing" />
                  Польза практики
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-healing mt-1 flex-shrink-0" />
                    <span>Укрепление мышц и сухожилий</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-healing mt-1 flex-shrink-0" />
                    <span>Улучшение кровообращения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-healing mt-1 flex-shrink-0" />
                    <span>Повышение гибкости тела</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-healing mt-1 flex-shrink-0" />
                    <span>Энергетическое здоровье</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-healing mt-1 flex-shrink-0" />
                    <span>Ясность ума и концентрация</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://cdn.poehali.dev/files/1b4c000b-4c22-4e4c-8fb8-1dd5a2fddfa7.jpg"
                  alt="Высеченные изображения комплекса Бодхидхармы"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://cdn.poehali.dev/files/b8ef5802-dab4-4fe7-9de8-ac9bf1fba178.jpg"
                  alt="Древние изображения практик цигун"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://cdn.poehali.dev/files/a71c287b-23b0-4117-aed8-342f19ef4e4b.jpg"
                  alt="Высеченные фигуры на камнях Шаолиня"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://cdn.poehali.dev/files/dadc4b1e-d1cb-4549-a9a9-179d9b16b2d9.jpg"
                  alt="Изображения упражнений комплекса"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 via-healing/5 to-white rounded-2xl p-8 md:p-12 shadow-lg animate-fade-in">
            <div className="text-center mb-8">
              <Icon name="Mountain" size={48} className="text-healing mx-auto mb-4" />
              <h3 className="text-3xl font-serif text-gray-800 mb-4">Прямая передача из Шаолиня</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed italic">
                "Эти древние изображения сохранились на протяжении веков, передавая мудрость великих мастеров. 
                Я передам вам эти знания так, как они были переданы мне в самом сердце Шаолиня"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Gallery Section */}
      <section id="hotel" className="py-24 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center gap-2 text-mediterranean mb-4">
              <Icon name="Hotel" size={28} />
              <span className="text-sm uppercase tracking-wider font-semibold">Проживание</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
              Шикарный отель с видом на море
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Комфортабельные номера, бассейн с панорамным видом и ресторан на берегу моря
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/files/b6dce265-b299-4257-9368-8659fc6b5006.jpg"
                alt="Бассейн отеля с видом на море"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/files/932c083f-ebbd-4204-90e8-f8af84162d7e.jpg"
                alt="Ресторан на берегу моря"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/files/d0c16ab0-a3fd-40dd-a8b3-579285e1c4b0.jpg"
                alt="Номер с видом на море"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Icon name="Home" size={40} className="text-healing mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">Комфортные номера</h4>
                <p className="text-gray-600 text-sm">
                  Современные номера с панорамными окнами и видом на Средиземное море
                </p>
              </div>

              <div>
                <Icon name="Waves" size={40} className="text-mediterranean mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">Бассейн-инфинити</h4>
                <p className="text-gray-600 text-sm">
                  Бассейн с видом на море и горы, шезлонги для отдыха после практик
                </p>
              </div>

              <div>
                <Icon name="UtensilsCrossed" size={40} className="text-terracotta mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">Ресторан у моря</h4>
                <p className="text-gray-600 text-sm">
                  Завтраки и ужины с видом на закат, свежие средиземноморские блюда
                </p>
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
                <h3 className="text-3xl font-serif mb-4 text-gray-800">Программа «Цигун-интенсив»</h3>
                <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                  Всё включено для полного погружения в практики
                </p>
                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-2xl mb-8">
                  <img 
                    src="https://cdn.poehali.dev/files/d0a26237-abb6-4042-9d7f-16792d8df4dd.jpg"
                    alt="Затерянный пляж в Каше"
                    className="w-full h-full object-cover"
                  />
                </div>
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
                <Button 
                  size="lg" 
                  className="bg-healing hover:bg-healing/90 text-white px-12 py-6 text-xl"
                  asChild
                >
                  <a href="https://t.me/olvonata_private" target="_blank" rel="noopener noreferrer">
                    Присоединяйтесь
                  </a>
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
            asChild
          >
            <a href="https://t.me/olvonata_private" target="_blank" rel="noopener noreferrer">
              Забронировать место
            </a>
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