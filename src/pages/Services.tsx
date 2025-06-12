import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { ArrowRight, Bot, BarChart, Code, FileText, Database, Users, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <Navbar />
        
        <div className="py-16 sm:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Our Services
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
              We offer a comprehensive suite of AI solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="AI Chatbots" 
              description="Engage with customers, answer questions, and generate leads with 24/7 conversational AI."
              icon={<Bot className="h-10 w-10 text-purple-600" />}
            />
            <ServiceCard 
              title="Data Analysis" 
              description="Extract insights and identify patterns from your business data to drive better decisions."
              icon={<BarChart className="h-10 w-10 text-blue-600" />}
            />
            <ServiceCard 
              title="Custom Development" 
              description="Build specialized AI solutions designed specifically for your unique business challenges."
              icon={<Code className="h-10 w-10 text-green-600" />}
            />
            <ServiceCard 
              title="Document Processing" 
              description="Extract, analyze and organize information from documents, forms and unstructured content."
              icon={<FileText className="h-10 w-10 text-amber-600" />}
            />
            <ServiceCard 
              title="Data Integration" 
              description="Connect your existing systems to ensure seamless data flow throughout your organization."
              icon={<Database className="h-10 w-10 text-red-600" />}
            />
            <ServiceCard 
              title="Training & Support" 
              description="Get comprehensive training and ongoing support to maximize the value of your AI solutions."
              icon={<Users className="h-10 w-10 text-indigo-600" />}
            />
          </div>
          
          <div className="mt-16 bg-muted/50 rounded-lg p-8 backdrop-blur">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to transform your business?</h3>
                <p className="text-muted-foreground">Get in touch with our team to discuss your specific needs.</p>
              </div>
              <Link to="/contact">
                <Button className="px-6 py-5 text-lg group" size="lg">
                  <span>Contact Us</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
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

const ServiceCard = ({ title, description, icon }) => {
  return (
    <Card className="p-6 border border-border/40 bg-card/50 backdrop-blur hover:shadow-lg transition-all flex flex-col h-full">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground flex-grow">{description}</p>
      <div className="mt-4">
        <Button variant="ghost" className="p-0 h-auto group">
          <span className="text-primary">Learn more</span>
          <ArrowRight className="ml-2 h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </Card>
  );
};

export default Services;
