import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import tribeImage from '@/assets/tribe-campfire.jpg';
import { MessageCircle, Shield, Users, Heart, CheckCircle } from 'lucide-react';

const Tribe = () => {
  const values = [
    {
      icon: Shield,
      title: 'No Scams',
      description: 'Every vendor is verified. Every experience is protected. Your trust is our currency.',
    },
    {
      icon: Users,
      title: 'Real Connections',
      description: 'Connect with fellow travelers and local communities. Travel is better together.',
    },
    {
      icon: Heart,
      title: 'Authentic Experiences',
      description: 'Skip the tourist traps. Experience destinations like a local, backed by local wisdom.',
    },
    {
      icon: CheckCircle,
      title: '24/7 Support',
      description: 'WhatsApp support that actually responds. Real humans, real help, anytime you need it.',
    },
  ];

  const whatsappMessage = () => {
    window.open('https://wa.me/918571877787', '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${tribeImage})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Welcome to the <span className="text-sunset-orange">Tribe</span>
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 max-w-4xl mx-auto">
            TripThala is not just bookings. It's a Tribe that protects travelers, 
            connects souls, and makes journeys real again. No scams. Verified vendors. 
            24/7 WhatsApp help.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={whatsappMessage}
            className="text-xl px-10 py-5"
          >
            <MessageCircle className="mr-3" />
            Join the Tribe on WhatsApp
          </Button>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-text mb-6">
              What Makes Us Different
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're building travel the way it should be: transparent, authentic, and community-driven. 
              Every decision we make puts travelers first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-r from-himalayan-blue to-sunset-orange text-white p-4 rounded-full inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-dark-text mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-warm-gray">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-dark-text mb-8">
            From Travelers, For Travelers
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              We've all been there. The overpriced tours, the pushy vendors, the promises that didn't match reality. 
              Travel should inspire, not stress you out.
            </p>
            <p>
              TripThala was born from a simple belief: travel is transformative when it's authentic. 
              When you connect with real people, experience genuine culture, and know you're supported every step of the way.
            </p>
            <p>
              We started in the hills of Himachal, where we learned the power of community. 
              Now we're building that same spirit into every destination we touch.
            </p>
            <p className="text-xl font-semibold text-dark-text">
              This is more than a platform. This is a movement. This is the Tribe.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-text mb-6">
              How TripThala Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple, transparent, and always on your side
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="bg-himalayan-blue text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-dark-text mb-4">Connect on WhatsApp</h3>
                <p className="text-muted-foreground">
                  Message us your travel plans. Real humans respond, not bots. We understand what you're looking for.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="bg-sunset-orange text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-dark-text mb-4">Get Verified Options</h3>
                <p className="text-muted-foreground">
                  We connect you directly with trusted local vendors. Fair prices, genuine experiences, zero middleman markup.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="bg-himalayan-blue text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold text-dark-text mb-4">Travel Protected</h3>
                <p className="text-muted-foreground">
                  24/7 WhatsApp support throughout your trip. If anything goes wrong, we're your advocate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-gradient-to-r from-himalayan-blue to-sunset-orange">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join the Tribe?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Connect with conscious travelers, get insider access to the best experiences, 
            and be part of a community that's changing how we explore the world.
          </p>
          <Button 
            variant="whatsapp" 
            size="lg"
            onClick={whatsappMessage}
            className="text-lg px-8"
          >
            <MessageCircle className="mr-2" />
            Join the Tribe on WhatsApp
          </Button>
          <p className="text-white/80 mt-4 text-sm">
            Starting September 1, 2025 • Rishikesh and beyond
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Tribe;