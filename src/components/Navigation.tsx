import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import navLogoImage from '@/assets/tripthala-logo-edited.jpg';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Festivals', path: '/festivals' },
    { name: 'Tribe', path: '/tribe' },
    { name: 'Help', path: '/contact' },
  ];

  const cities = [
    { name: 'Rishikesh', path: '/cities/rishikesh' },
    { name: 'McLeodGanj/Bir', path: '/cities/mcleodganj' },
    { name: 'Jaisalmer', path: '/cities/jaisalmer' },
    { name: 'Alleppey', path: '/cities/alleppey' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}

          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={navLogoImage} 
              alt="TripThala Logo" 
              className="w-20 h-17"
            />
            <div className="flex flex-col">
              <div className="text-xl font-bold bg-gradient-to-r from-himalayan-blue to-sunset-orange bg-clip-text text-transparent">
                TripThala
              </div>
              <div className="text-xs text-muted-foreground -mt-1">
                The Travel Tribe
              </div>

            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors hover:text-himalayan-blue ${
                  isActive(item.path) 
                    ? 'text-himalayan-blue' 
                    : 'text-dark-text'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Cities Navigation Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`font-medium transition-colors hover:text-himalayan-blue ${
                    cities.some(city => isActive(city.path)) 
                      ? 'text-himalayan-blue' 
                      : 'text-dark-text'
                  }`}>
                    Cities
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-1 p-2 w-48">
                      {cities.map((city) => (
                        <NavigationMenuLink key={city.name} asChild>
                          <Link
                            to={city.path}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{city.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button 
              variant="whatsapp" 
              size="sm"
              onClick={() => window.open('https://wa.me/918571877787', '_blank')}
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-colors hover:text-himalayan-blue ${
                    isActive(item.path) 
                      ? 'text-himalayan-blue' 
                      : 'text-dark-text'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Cities in Mobile Menu */}
              <div className="text-sm font-medium text-muted-foreground">Cities</div>
              {cities.map((city) => (
                <Link
                  key={city.name}
                  to={city.path}
                  className={`font-medium transition-colors hover:text-himalayan-blue pl-4 ${
                    isActive(city.path) 
                      ? 'text-himalayan-blue' 
                      : 'text-dark-text'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {city.name}
                </Link>
              ))}
              <Button 
                variant="whatsapp" 
                size="sm"
                className="self-start"
                onClick={() => {
                  window.open('https://wa.me/918571877787', '_blank');
                  setIsOpen(false);
                }}
              >
                WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;