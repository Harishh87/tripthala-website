import { MessageCircle, Mail, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-warm-gray border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-himalayan-blue to-sunset-orange bg-clip-text text-transparent">
              TripThala
            </div>
            <p className="text-muted-foreground max-w-sm">
              One app. One Tribe. One mission: Let the world travel.
            </p>
            {/* <div className="inline-block bg-sunset-orange text-white px-3 py-1 rounded-full text-sm font-medium">
              Coming Soon - Sept 1, 2025
            </div> */}
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-dark-text">Email</h3>
            <div className="space-y-3">

              <a 
                href="mailto:tripthala.tribe@gmail.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-himalayan-blue transition-colors"
              >
                <Mail size={16} />
                <span>tripthala.tribe@gmail.com</span>
              </a>
              {/* Telephone number line below */}


            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-dark-text">Mobile</h3>
            <div className="flex space-x-3">

              <a
                href="tel:+918571877787"
                className="flex items-center space-x-2 text-muted-foreground hover:text-himalayan-blue transition-colors"
              >
                <Phone size={16} />
                <span>+91 85718 77787</span>
              </a>

              {/* <Button 
                variant="whatsapp" 
                size="sm"
                onClick={() => window.open('https://wa.me/918571877787', '_blank')}
                className="w-full sm:w-auto"
              >
              <MessageCircle size={16} />
                Chat with Support
              </Button> */}

              {/* <Button variant="outline" size="icon">
                <Instagram size={16} />
              </Button>
              <Button variant="outline" size="icon">
                <Facebook size={16} />
              </Button> */}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 TripThala. Building the future of travel, one Tribe at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;