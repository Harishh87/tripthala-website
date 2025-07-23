import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { MessageCircle, Mail, HelpCircle, Users, Shield, Clock } from 'lucide-react';

const Contact = () => {
  const faqs = [
    {
      question: 'How does TripThala work?',
      answer: 'We connect you directly with trusted local vendors via WhatsApp. No middlemen, no markup. We verify every vendor and provide 24/7 support throughout your trip.',
    },
    {
      question: 'Is it safe to book through TripThala?',
      answer: 'Absolutely. Every vendor is verified by our team. We provide 24/7 WhatsApp support and act as your advocate if anything goes wrong.',
    },
    {
      question: 'What destinations do you cover?',
      answer: 'Currently launching with Rishikesh in September 2025, then expanding to McLeodGanj/Bir, Jaisalmer, and Alleppey. Many more destinations coming soon.',
    },
    {
      question: 'How do I join the Tribe?',
      answer: 'Simply message us on WhatsApp! We\'ll add you to our community updates and help you plan your perfect trip.',
    },
    {
      question: 'Are there any booking fees?',
      answer: 'No hidden fees. You pay vendors directly at fair local prices. Our mission is transparent, honest travel.',
    },
  ];

  const whatsappMessage = () => {
    window.open('https://wa.me/918571877787', '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-himalayan-blue to-sunset-orange">
        <div className="max-w-4xl mx-auto text-center px-4 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            We're Here to Help
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 leading-relaxed">
            Real humans, real support, real travel solutions. 
            The Tribe is always here for you.
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

      {/* Contact Options */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-text mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Multiple ways to connect with the TripThala Tribe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="bg-[#25D366] text-white p-4 rounded-full inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-dark-text mb-4">WhatsApp Support</h3>
                <p className="text-muted-foreground mb-6">
                  Instant support from real humans. Available 24/7 for all your travel needs.
                </p>
                <Button 
                  variant="whatsapp" 
                  className="w-full"
                  onClick={whatsappMessage}
                >
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="bg-himalayan-blue text-white p-4 rounded-full inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail size={32} />
                </div>
                <h3 className="text-xl font-bold text-dark-text mb-4">Email Us</h3>
                <p className="text-muted-foreground mb-6">
                  For detailed inquiries, partnerships, or feedback about TripThala.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('mailto:tripthala.tribe@gmail.com', '_blank')}
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="bg-sunset-orange text-white p-4 rounded-full inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold text-dark-text mb-4">Join the Tribe</h3>
                <p className="text-muted-foreground mb-6">
                  Connect with fellow travelers and get exclusive access to trip updates.
                </p>
                <Button 
                  variant="hero" 
                  className="w-full"
                  onClick={whatsappMessage}
                >
                  Join Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-warm-gray">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-text mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about TripThala
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg text-dark-text flex items-center">
                    <HelpCircle className="mr-3 text-himalayan-blue" size={20} />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-text mb-6">
              Why Trust TripThala?
            </h2>
            <p className="text-xl text-muted-foreground">
              We're building travel the right way
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-himalayan-blue text-white p-3 rounded-full inline-block mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="text-lg font-bold text-dark-text mb-2">Verified Vendors</h3>
                <p className="text-muted-foreground text-sm">
                  Every partner is personally verified by our team for safety and quality
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-sunset-orange text-white p-3 rounded-full inline-block mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="text-lg font-bold text-dark-text mb-2">24/7 Support</h3>
                <p className="text-muted-foreground text-sm">
                  Real human support whenever you need it, not automated responses
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-himalayan-blue text-white p-3 rounded-full inline-block mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-lg font-bold text-dark-text mb-2">Community First</h3>
                <p className="text-muted-foreground text-sm">
                  Built by travelers, for travelers. Your experience is our priority
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-himalayan-blue to-sunset-orange">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We're here to help! Message us anytime and get answers from real people who care about your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="whatsapp" 
              size="lg"
              onClick={whatsappMessage}
              className="text-lg px-8"
            >
              <MessageCircle className="mr-2" />
              Chat on WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-himalayan-blue"
              onClick={() => window.open('mailto:tripthala.tribe@gmail.com', '_blank')}
            >
              <Mail className="mr-2" />
              Send Email
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;