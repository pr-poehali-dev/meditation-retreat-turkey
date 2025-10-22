import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://cdn.poehali.dev/projects/5ea0fd68-93a4-4f0c-b81d-0e08105d73ed/files/5008b8ae-7219-4b63-a323-8bfd49c5b7a5.jpg')`
        }}
      >
        <div className="text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            Ретрит в Турции
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
            Неделя тепла и солнца в затерянном средиземноморском городке
          </p>
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg"
          >
            Забронировать место
          </Button>
        </div>
      </section>

      <section id="location" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
                Местоположение
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Затерянный городок нетуристической Турции на берегу Средиземного моря. 
                Место, где время замедляется, а суета остается далеко позади.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Мы будем встречать рассветы и закаты в полной тишине, слушать звуки природы 
                и практиковать древние техники оздоровления.
              </p>
              <div className="flex items-center gap-2 text-mediterranean">
                <Icon name="MapPin" size={24} />
                <span className="text-lg font-medium">Средиземноморское побережье Турции</span>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/5ea0fd68-93a4-4f0c-b81d-0e08105d73ed/files/5008b8ae-7219-4b63-a323-8bfd49c5b7a5.jpg"
                alt="Средиземноморский берег"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
              Программа ретрита
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Древние практики цигун для гармонизации тела и духа
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="p-8">
                <div className="mb-4 text-healing">
                  <Icon name="Sunrise" size={48} />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-gray-800">Практики цигун</h3>
                <p className="text-gray-600 leading-relaxed">
                  Изучим гормональный древний комплекс цигун, который помогает наладить 
                  женское и мужское здоровье, избежать или отсрочить симптомы климакса, 
                  справиться с проявлениями ПМС.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="p-8">
                <div className="mb-4 text-mediterranean">
                  <Icon name="Brain" size={48} />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-gray-800">Медитация</h3>
                <p className="text-gray-600 leading-relaxed">
                  Научимся медитировать и слушать тишину. Практики для успокоения ума, 
                  глубокого расслабления и восстановления внутреннего баланса.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="p-8">
                <div className="mb-4 text-sunset">
                  <Icon name="Sailboat" size={48} />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-gray-800">Морское путешествие</h3>
                <p className="text-gray-600 leading-relaxed">
                  Путешествие на яхте по средиземноморскому побережью с посещением 
                  древних памятников и уединенных бухт.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="p-8">
                <div className="mb-4 text-terracotta">
                  <Icon name="Sun" size={48} />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-gray-800">Встречи рассвета</h3>
                <p className="text-gray-600 leading-relaxed">
                  Каждый день начинается с приветствия солнца и завершается созерцанием 
                  заката в атмосфере покоя и гармонии.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/projects/5ea0fd68-93a4-4f0c-b81d-0e08105d73ed/files/3bc242da-aff7-43e2-90c5-c49c796ef1d4.jpg"
              alt="Медитация на рассвете"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="hotel" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl animate-fade-in order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/files/e4f24ad8-5338-4f09-9312-c7679335b1b1.jpg"
                alt="Отель"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="animate-fade-in order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
                Проживание
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Шикарный бутик-отель на берегу моря с аутентичной средиземноморской 
                архитектурой. Уютные номера с видом на море и террасами для медитаций.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="UtensilsCrossed" size={24} className="text-healing mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Вкусная еда</h4>
                    <p className="text-gray-600">
                      Средиземноморская кухня с местными продуктами и свежими морепродуктами
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="Waves" size={24} className="text-mediterranean mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Прямой выход к морю</h4>
                    <p className="text-gray-600">
                      Частный пляж и возможность купаться в любое время
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="Home" size={24} className="text-sunset mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Комфорт и уют</h4>
                    <p className="text-gray-600">
                      Просторные номера с кондиционером и всеми удобствами
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
              Условия участия
            </h2>
            <p className="text-xl text-gray-600">
              Неделя трансформации перед холодной зимой
            </p>
          </div>

          <Card className="border-none shadow-2xl animate-fade-in">
            <CardContent className="p-10">
              <div className="space-y-6">
                <div className="border-b pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-serif text-gray-800">7 дней / 6 ночей</h3>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-mediterranean">€1000</div>
                      <div className="text-sm text-gray-500">за человека</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">В стоимость включено:</h4>
                  
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-healing flex-shrink-0" />
                    <span className="text-gray-600">Проживание в отеле с видом на море</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-healing flex-shrink-0" />
                    <span className="text-gray-600">Трехразовое питание (средиземноморская кухня)</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-healing flex-shrink-0" />
                    <span className="text-gray-600">Ежедневные практики цигун и медитации</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-healing flex-shrink-0" />
                    <span className="text-gray-600">Путешествие на яхте</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-healing flex-shrink-0" />
                    <span className="text-gray-600">Экскурсии к древним памятникам</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-healing flex-shrink-0" />
                    <span className="text-gray-600">Трансфер из/в аэропорт</span>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="text-sm text-gray-500 mb-6">
                    * Авиабилеты оплачиваются отдельно
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-secondary hover:bg-secondary/90 text-white py-6 text-lg"
                  >
                    Забронировать место
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
            Присоединяйтесь
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Осталось ограниченное количество мест. Запишитесь сейчас, 
            чтобы успеть насладиться теплом и солнцем перед зимой.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-mediterranean hover:bg-mediterranean/90 text-white px-8 py-6 text-lg flex items-center gap-2"
              asChild
            >
              <a href="https://t.me/olvonata_private" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={20} />
                Написать в Telegram
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-mediterranean text-mediterranean hover:bg-mediterranean/10 px-8 py-6 text-lg flex items-center gap-2"
            >
              <Icon name="Phone" size={20} />
              Позвонить
            </Button>
          </div>

          <div className="text-gray-600">
            <a href="https://t.me/olvonata_private" target="_blank" rel="noopener noreferrer" className="block hover:text-mediterranean transition-colors">
              💬 @olvonata_private
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-lg font-serif mb-2">Ретрит в Турции 2025</p>
          <p className="text-gray-400">Неделя трансформации и гармонии</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;