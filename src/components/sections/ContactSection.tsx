import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in mb-12">
          <div className="flex items-center justify-center gap-2 text-healing mb-4">
            <Icon name="MessageCircle" size={28} />
            <span className="text-sm uppercase tracking-wider font-semibold">Контакты</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
            Присоединяйтесь к ретриту
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Осталось ограниченное количество мест. Свяжитесь с нами для бронирования.
          </p>
        </div>

        <Card className="border-none shadow-2xl bg-white">
          <CardContent className="p-12">
            <div className="space-y-8">
              <div className="flex items-center justify-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-healing/10 rounded-xl">
                <Icon name="Send" size={32} className="text-healing" />
                <div className="text-left">
                  <p className="text-sm text-gray-600 mb-1">Telegram</p>
                  <a 
                    href="https://t.me/olvonata_private" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-healing hover:text-mediterranean transition-colors"
                  >
                    @olvonata_private
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-healing/10 rounded-xl">
                <Icon name="Phone" size={32} className="text-healing" />
                <div className="text-left">
                  <p className="text-sm text-gray-600 mb-1">WhatsApp / Телефон</p>
                  <a 
                    href="https://wa.me/79857737898" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-healing hover:text-mediterranean transition-colors"
                  >
                    +7 985 773 78 98
                  </a>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-healing hover:bg-mediterranean text-white px-8 py-6 text-lg font-medium"
                asChild
              >
                <a href="https://t.me/olvonata_private" target="_blank" rel="noopener noreferrer">
                  Забронировать место
                </a>
              </Button>

              <p className="text-sm text-gray-500 italic">
                Ответим на все ваши вопросы и поможем с подготовкой к ретриту
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
