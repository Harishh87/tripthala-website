import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import heroImage from '@/assets/hero-tribe-mountains.jpg';
import rishikeshImage from '@/assets/rishikesh-adventures.jpg';
import mcleodganjImage from '@/assets/mcleodganj-monasteries.jpg';
import jaisalmerImage from '@/assets/jaisalmer-desert.jpg';
import alleppeyImage from '@/assets/alleppey-backwaters.jpg';

const Home = () => {
  const cities = [
    {
      name: 'Rishikesh',
      slug: 'rishikesh',
      vibe: 'Adventures, stays, and guides — backed by the Tribe.',
      image: rishikeshImage,
    },
    {
      name: 'McLeodGanj/Bir',
      slug: 'mcleodganj',
      vibe: 'Cafés, monasteries, and skies full of paragliders.',
      image: mcleodganjImage,
    },
    {
      name: 'Jaisalmer',
      slug: 'jaisalmer',
      vibe: 'Golden sands, soulful camps, and desert stars.',
      image: jaisalmerImage,
    },
    {
      name: 'Alleppey',
      slug: 'alleppey',
      vibe: 'Slow water, palm trees, and homes on the backwaters.',
      image: alleppeyImage,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white to-sunset-orange bg-clip-text text-transparent">
                TripThala
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-6xl mx-auto mb-8">
              From the hills of Himachal… to the cafés of Croatia… to the deserts of Morocco…<br />
              <span className="font-semibold">One app. One Tribe. One mission: Let the world travel.</span>
            </p>
            {/* <div className="bg-sunset-orange/90 backdrop-blur-sm rounded-lg p-6 inline-block">
              <p className="text-lg font-semibold">
                Launching September 1, 2025 — Starting with Mahadev Nagri: Rishikesh.
              </p>
            </div> */}
          </div>
          
          <Button 
            variant="hero" 
            size="lg" 
            onClick={() => window.open('https://wa.me/918571877787', '_blank')}
            className="text-xl px-8 py-4"
          >
            Join the Tribe on WhatsApp
          </Button>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-text mb-4">
              Explore with the Tribe
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real experiences. Trusted guides. No scams. Starting with these incredible destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cities.map((city) => (
              <Link key={city.slug} to={`/cities/${city.slug}`}>
                <Card className="group cursor-pointer h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={city.image} 
                      alt={city.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold mb-2">{city.name}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {city.vibe}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-himalayan-blue to-sunset-orange">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Connect with us on WhatsApp to get early access, trip planning help, 
            and join the community of conscious travelers.
          </p>
          <Button 
            variant="whatsapp" 
            size="lg"
            onClick={() => window.open('https://wa.me/918571877787', '_blank')}
            className="text-lg px-8"
          >
            Chat with TripThala
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;