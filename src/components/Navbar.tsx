
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="py-6">
      <nav className="flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-primary">
            IntegrationsNow
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-10">
          <Link to="/services" className="text-base font-medium text-foreground hover:text-primary transition-colors">
            Services
          </Link>
          <Link to="/team" className="text-base font-medium text-foreground hover:text-primary transition-colors">
            Our Team
          </Link>
          <Link to="/mission" className="text-base font-medium text-foreground hover:text-primary transition-colors">
            Our Mission
          </Link>
        </div>
        
        <div className="hidden md:block">
          <Button className="px-4 py-2" size="lg">
            Contact Us
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden pt-4 pb-3 space-y-1 border-t mt-4">
          <Link 
            to="/services"
            className="block px-3 py-2 text-base font-medium text-foreground hover:bg-gray-100 hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/team"
            className="block px-3 py-2 text-base font-medium text-foreground hover:bg-gray-100 hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Team
          </Link>
          <Link 
            to="/mission"
            className="block px-3 py-2 text-base font-medium text-foreground hover:bg-gray-100 hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Mission
          </Link>
          <div className="pt-4">
            <Button className="w-full" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
