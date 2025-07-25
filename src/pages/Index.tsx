import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Icon name="Leaf" className="h-8 w-8 text-primary mr-2" />
              <span className="font-heading font-bold text-2xl text-primary">Зеленый город</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О компании</a>
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary text-white">Лидер на рынке КМВ</Badge>
              <h1 className="font-heading text-5xl font-bold text-gray-900 mb-6">
                Септики и биостанции 
                <span className="text-primary block">в Кисловодске</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Профессиональный монтаж и продажа автономных канализационных систем. 
                Работаем по всему Ставропольскому краю и КМВ с гарантией 2 года.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  Заказать консультацию
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Узнать цены
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/4d4eeb11-b77b-4796-a8d8-69d689c4d9bd.jpg" 
                alt="Монтаж септика Зеленый город"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный цикл работ: от консультации до запуска системы
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Wrench" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl">Монтаж септиков</CardTitle>
                <CardDescription>
                  Профессиональная установка септиков серии "Панда" от Эко-Мир
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Земляные работы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Подключение коммуникаций
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Пуско-наладка
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Droplets" className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="font-heading text-xl">Биологические станции</CardTitle>
                <CardDescription>
                  Автономные системы очистки сточных вод высокой степени очистки
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Очистка до 98%
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Энергоэффективность
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Бесшумная работа
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Settings" className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-heading text-xl">Обслуживание</CardTitle>
                <CardDescription>
                  Регулярное техническое обслуживание и ремонт систем
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Плановые осмотры
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Откачка ила
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Экстренный вызов
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/4ba95a21-0037-47a3-a48e-673cbdc3cc2f.jpg" 
                alt="Биологическая станция очистки"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">О компании</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>Зеленый город</strong> — лидирующая компания в области автономных канализационных систем 
                на территории Кисловодска и всего Ставропольского края.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1+</div>
                  <div className="text-sm text-gray-600">год на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2</div>
                  <div className="text-sm text-gray-600">года гарантии</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="MapPin" className="h-5 w-5 text-primary mr-3" />
                  <span className="text-gray-700">Кисловодск, Ставропольский край, КМВ</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Award" className="h-5 w-5 text-primary mr-3" />
                  <span className="text-gray-700">Поставщик: Эко-Мир, септики серии "Панда" (г. Сочи)</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Shield" className="h-5 w-5 text-primary mr-3" />
                  <span className="text-gray-700">Полная гарантия на услуги — 2 года</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами для консультации</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Icon name="Phone" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Телефон</div>
                      <div className="text-lg text-primary font-semibold">+7 988 768-93-35</div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                      <Icon name="MapPin" className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Зона обслуживания</div>
                      <div className="text-gray-600">г. Кисловодск, Ставропольский край, КМВ</div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                      <Icon name="Clock" className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Режим работы</div>
                      <div className="text-gray-600">Ежедневно, 8:00 - 20:00</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            <div>
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="font-heading text-2xl">Заявка на консультацию</CardTitle>
                  <CardDescription>
                    Оставьте заявку и мы перезвоним в течение 30 минут
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                      <input 
                        type="tel" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="+7 ___ ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                      <textarea 
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Опишите ваши потребности..."
                      />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      <Icon name="Send" className="mr-2 h-4 w-4" />
                      Отправить заявку
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Leaf" className="h-8 w-8 text-primary mr-2" />
                <span className="font-heading font-bold text-2xl">Зеленый город</span>
              </div>
              <p className="text-gray-400 mb-4">
                Лидер по монтажу и продаже септиков в Кисловодске и Ставропольском крае
              </p>
              <div className="text-primary font-semibold">+7 988 768-93-35</div>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Монтаж септиков</li>
                <li>Биологические станции</li>
                <li>Техническое обслуживание</li>
                <li>Консультации</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">О компании</h3>
              <ul className="space-y-2 text-gray-400">
                <li>1+ год на рынке</li>
                <li>Гарантия 2 года</li>
                <li>Поставщик: Эко-Мир</li>
                <li>Серия септиков "Панда"</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Зеленый город. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;