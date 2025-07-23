import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import jaisalmerImage from '@/assets/jaisalmer-desert.jpg';
import { MessageCircle, Users, Bike, Star } from 'lucide-react';

const Jaisalmer = () => {
  const activities = [
    {
      name: 'Desert Safari',
      description: 'Camel rides through golden dunes with sunset views over the Thar Desert',
      icon: Star,
    },
    {
      name: 'Camel Trek',
      description: 'Multi-day desert expeditions with traditional camps under starlit skies',
      icon: Users,
    },
    {
      name: 'Luxury Desert Camps',
      description: 'Premium tent stays with Rajasthani cuisine and cultural performances',
      icon: Star,
    },
  ];

  const whatsappMessage = () => {
    window.open('https://wa.me/918571877787', '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-start justify-center overflow-hidden pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${jaisalmerImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Real Jaisalmer.<br />
            <span className="text-sunset-orange">No scams. No stress.</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8">
            Golden sands, soulful camps, and desert stars.
          </p>
          {/* <Button 
            variant="whatsapp" 
            size="lg"
            onClick={whatsappMessage}
            className="text-lg px-8"
          >
            <MessageCircle className="mr-2" />
            Plan My Jaisalmer Trip
          </Button> */}
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-text mb-4">
              Desert Adventures
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From golden sunsets to starlit nights. Experience the magic of Rajasthan's desert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-r from-sunset-orange to-himalayan-blue text-white p-4 rounded-full inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-text mb-4">{activity.name}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{activity.description}</p>
                    {/* <Button 
                      variant="whatsapp" 
                      className="w-full"
                      onClick={whatsappMessage}
                    >
                      <MessageCircle className="mr-2" />
                      Book on WhatsApp
                    </Button> */}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button 
              variant="whatsapp" 
              size="lg"
              onClick={whatsappMessage}
              className="text-lg px-8"
            >
              <MessageCircle className="mr-2" />
              Book on WhatsApp
            </Button>
          </div>

        </div>
      </section>

      {/* Rentals Section */}
      <section className="py-16 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-sunset-orange text-white p-3 rounded-full">
                    <Bike size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark-text">Scooty & Bike Rentals</h3>
                    <p className="text-muted-foreground">Explore the Golden City and nearby villages independently</p>
                  </div>
                </div>
                <Button 
                  variant="default" 
                  onClick={whatsappMessage}
                >
                  <MessageCircle className="mr-2" />
                  Enquire Rentals
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Local Guides Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-sunset-orange text-white p-3 rounded-full inline-block mb-6">
            <Users size={32} />
          </div>
          <h2 className="text-4xl font-bold text-dark-text mb-6">
            Local Guides You Can Trust
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Need a guide you can trust? TripThala connects you with certified, friendly locals 
            for treks, walks, and Tribe experiences — verified by us. No scams, just real stories.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={whatsappMessage}
            className="text-lg px-8"
          >
            <Users className="mr-2" />
            Book a Guide
          </Button>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-gradient-to-r from-sunset-orange to-himalayan-blue">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Planning Your Trip?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our Tribe is here 24/7 to help you plan the perfect desert adventure
          </p>
          <Button 
            variant="whatsapp" 
            size="lg"
            onClick={whatsappMessage}
            className="text-lg px-8"
          >
            <MessageCircle className="mr-2" />
            Chat with TripThala Support
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Jaisalmer;