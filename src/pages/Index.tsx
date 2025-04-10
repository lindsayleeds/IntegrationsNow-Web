
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ServicesSection from "@/components/ServicesSection";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <Navbar />
        <Hero />
        
        <div className="py-16 sm:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-4">
              What Can IntegrationsNow Do for Me?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Discover how our AI-powered solutions can transform your business operations
              and drive efficiency across your organization.
            </p>
          </div>
          
          <ServicesSection />
          
          <div className="mt-16 flex justify-center">
            <Button className="px-8 py-6 text-lg group" size="lg">
              <span>Learn more about our services</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        <footer className="py-12 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-medium text-lg">IntegrationsNow</p>
              <p className="text-muted-foreground">© 2025 IntegrationsNow. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
