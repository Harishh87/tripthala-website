import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import devDeepawalitImage from '@/assets/dev-deepawali.jpg';
import hornbillImage from '@/assets/hornbill-festival.jpg';
import rannUtsavImage from '@/assets/rann-utsav.jpg';
import pushkarImage from '@/assets/pushkar-fair.jpg';
import ziroImage from '@/assets/ziro-music.jpg';
import { MessageCircle, Calendar, MapPin } from 'lucide-react';

const Festivals = () => {
  const festivals = [
    {
      name: 'Dev Deepawali',
      location: 'Varanasi, Uttar Pradesh',
      description: 'Ganga ghats glowing with thousands of diyas in a spiritual celebration of light',
      image: devDeepawalitImage,
    },
    {
      name: 'Hornbill Festival',
      location: 'Nagaland',
      description: 'Vibrant tribal dances and culture showcasing the rich heritage of Northeast India',
      image: hornbillImage,
    },
    {
      name: 'Rann Utsav',
      location: 'Kutch, Gujarat',
      description: 'White desert tents, music, and local crafts under the starlit sky of the Great Rann',
      image: rannUtsavImage,
    },
    {
      name: 'Pushkar Camel Fair',
      location: 'Rajasthan',
      description: 'Ancient trading traditions with decorated camels and colorful desert markets',
      image: pushkarImage,
    },
    {
      name: 'Ziro Music Festival',
      location: 'Arunachal Pradesh',
      description: 'Open-air music stage surrounded by paddy fields and pristine mountain landscapes',
      image: ziroImage,
    },
    {
      name: 'Goa Carnival',
      location: 'Goa',
      description: 'Colorful parades, music, and dance celebrating Portuguese-influenced culture',
      image: devDeepawalitImage, // Using as placeholder
    },
    {
      name: 'Onam',
      location: 'Kerala',
      description: 'Snake boat races, traditional feasts, and cultural celebrations of harvest season',
      image: hornbillImage, // Using as placeholder
    },
  ];

  const whatsappMessage = () => {
    window.open('https://wa.me/918571877787', '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-himalayan-blue to-sunset-orange">
        <div className="max-w-6xl mx-auto text-center px-4 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Celebrate India.<br />
            <span className="text-sunset-orange">Celebrate the Tribe.</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            Join exclusive Tribe-only festival experiences across incredible India. 
            From spiritual celebrations to cultural immersions, we curate journeys that connect you to the soul of each festival.
          </p>
          {/* <Button 
            variant="whatsapp" 
            size="lg"
            onClick={whatsappMessage}
            className="text-lg px-8"
          >
            <MessageCircle className="mr-2" />
            Get Festival Updates
          </Button> */}
        </div>
      </section>

      {/* Festivals Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-text mb-6">
              Festival Experiences 2025
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each festival trip is carefully curated with authentic local experiences, 
              verified accommodations, and Tribe-exclusive access to special events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {festivals.map((festival, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={festival.image} 
                    alt={festival.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{festival.name}</h3>
                    <div className="flex items-center text-sm text-white/80">
                      <MapPin size={14} className="mr-1" />
                      {festival.location}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {festival.description}
                  </p>
                  {/* <Button 
                    variant="whatsapp" 
                    className="w-full"
                    onClick={whatsappMessage}
                  >
                    <MessageCircle className="mr-2" />
                    Pre-Register on WhatsApp
                  </Button> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-warm-gray">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-text mb-6">
              Tribe Festival Experience Includes
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for an authentic, hassle-free festival journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-himalayan-blue text-white p-3 rounded-full inline-block mb-4">
                  <Calendar size={24} />
                </div>
                <h3 className="text-lg font-bold text-dark-text mb-2">Festival Access</h3>
                <p className="text-muted-foreground text-sm">
                  VIP passes and exclusive access to special events
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-sunset-orange text-white p-3 rounded-full inline-block mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-lg font-bold text-dark-text mb-2">Local Guides</h3>
                <p className="text-muted-foreground text-sm">
                  Cultural experts who bring festivals to life
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-himalayan-blue text-white p-3 rounded-full inline-block mb-4">
                  <MessageCircle size={24} />
                </div>
                <h3 className="text-lg font-bold text-dark-text mb-2">24/7 Support</h3>
                <p className="text-muted-foreground text-sm">
                  WhatsApp support throughout your journey
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-sunset-orange text-white p-3 rounded-full inline-block mb-4">
                  <Calendar size={24} />
                </div>
                <h3 className="text-lg font-bold text-dark-text mb-2">Authentic Stays</h3>
                <p className="text-muted-foreground text-sm">
                  Verified accommodations near festival venues
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Early Access */}
      <section className="py-20 bg-gradient-to-r from-himalayan-blue to-sunset-orange">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Get Early Access to Festival Trips
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join the Tribe now and be the first to know about festival trip announcements, 
            early bird pricing, and exclusive Tribe-only experiences.
          </p>
          <Button 
            variant="whatsapp" 
            size="lg"
            onClick={whatsappMessage}
            className="text-lg px-8 mb-4"
          >
            <MessageCircle className="mr-2" />
            Join for Festival Updates
          </Button>
          <p className="text-white/80 text-sm">
            More Tribe-exclusive festivals coming soon • Limited spots available
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Festivals;