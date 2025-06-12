import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <Navbar />
        
        <div className="py-16 sm:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Our Mission
            </h1>
            <div className="mx-auto mt-4 max-w-2xl text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 font-bold">
                Empowering businesses
              </span>{" "}
              through intelligent automation and seamless integrations
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why We Exist</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At IntegrationsNow, we believe that every business should have access to the transformative power of AI-driven automation. Our mission is to bridge the gap between cutting-edge AI technology and practical business applications.
              </p>
              <p className="text-lg text-muted-foreground">
                We're committed to creating solutions that not only solve today's challenges but prepare businesses for future innovation, ensuring they stay competitive in a rapidly evolving digital landscape.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-xl"></div>
              <div className="bg-card/50 backdrop-blur border border-border/40 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
                <ul className="space-y-4">
                  {[
                    "Client-focused innovation",
                    "Technical excellence",
                    "Seamless integration",
                    "Continuous improvement",
                    "Ethical AI development"
                  ].map((value, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-muted/50 rounded-2xl p-8 backdrop-blur mb-20">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Vision</h2>
            <p className="text-xl text-center mx-auto max-w-3xl">
              To create a future where businesses of all sizes can harness the full potential of AI to streamline operations, make better decisions, and deliver exceptional customer experiences.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">How We Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card/50 backdrop-blur border border-border/40 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Understand</h3>
                <p className="text-muted-foreground">
                  We begin by deeply understanding your business, its challenges, and what success looks like for you.
                </p>
              </div>
              <div className="bg-card/50 backdrop-blur border border-border/40 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Design</h3>
                <p className="text-muted-foreground">
                  Our experts design custom solutions that integrate with your existing systems and workflows.
                </p>
              </div>
              <div className="bg-card/50 backdrop-blur border border-border/40 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Implement & Optimize</h3>
                <p className="text-muted-foreground">
                  We implement solutions that evolve with your business, continuously optimizing for better results.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8 mx-auto max-w-2xl">
              Join the businesses that are already experiencing the benefits of AI-driven automation and integration.
            </p>
            <Link to="/contact">
              <Button className="px-8 py-6 text-lg group" size="lg">
                <span>Contact Us Today</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
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

export default Mission;
