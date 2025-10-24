import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const PracticesSection = () => {
  return (
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
  );
};

export default PracticesSection;
