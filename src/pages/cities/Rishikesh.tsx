import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import rishikeshImage from '@/assets/rishikesh-adventures.jpg';
import bungeeImage from '@/assets/bungee-jumping.jpg';
import { MessageCircle, MapPin, Users, Bike } from 'lucide-react';

const Rishikesh = () => {
  const activities = [
    {
      name: 'Bungee Jumping',
      price: '₹3,550',
      description: 'India\'s highest bungee from 83m at Rishikesh',
      image: bungeeImage,
    },
    {
      name: 'River Rafting',
      price: '₹1,350',
      description: '16km white water adventure on the Ganges',
      image: rishikeshImage,
    },
    {
      name: 'Flying Fox (ZipLining)',
      price: '₹3,550',
      description: 'Fly over Rishikesh with speed, thrill, and Himalayan views',
      image: bungeeImage,
    },
    {
      name: 'Giant Swing',
      price: '₹1,200',
      description: 'Swing into the heart of Rishikesh',
      image: bungeeImage,
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
          style={{ backgroundImage: `url(${rishikeshImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Real Rishikesh.<br />
            <span className="text-sunset-orange">No scams. No stress.</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8">
            Adventures, stays, and guides — backed by the Tribe.
          </p>
          {/* <Button 
            variant="whatsapp" 
            size="lg"
            onClick={whatsappMessage}
            className="text-lg px-8"
          >
            <MessageCircle className="mr-2" />
            Plan My Rishikesh Trip
          </Button> */}
        </div>
      </section>

      {/* Adventures Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-text mb-4">
              Adventure Awaits
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Verified operators. Fair prices. Pure adrenaline. All bookings protected by TripThala.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {activities.map((activity, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* <div className="absolute top-4 right-4 bg-sunset-orange text-white px-3 py-1 rounded-full font-bold">
                    {activity.price}
                  </div> */}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-dark-text mb-2">{activity.name}</h3>
                  <p className="text-muted-foreground mb-4">{activity.description}</p>
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
            ))}
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
                  <div className="bg-himalayan-blue text-white p-3 rounded-full">
                    <Bike size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark-text">Scooty & Bike Rentals</h3>
                    <p className="text-muted-foreground">Explore Rishikesh at your own pace with verified rentals</p>
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
          <div className="bg-himalayan-blue text-white p-3 rounded-full inline-block mb-6">
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
      <section className="py-16 bg-gradient-to-r from-himalayan-blue to-sunset-orange">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Planning Your Trip?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our Tribe is here 24/7 to help you plan the perfect Rishikesh adventure
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

export default Rishikesh;