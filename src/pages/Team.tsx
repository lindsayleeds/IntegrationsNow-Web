import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Lindsay Leeds",
    role: "CEO & Founder",
    image: "/images/lindsay_cartoon_cropped.png",
    bio: "Lindsay founded IntegrationsNow to help businesses leverage the power of AI and automation technologies to transform their operations and drive growth.",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <Navbar />
        
        <div className="py-16 sm:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Our Team
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
              Meet the experts behind IntegrationsNow's innovative AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden border border-border/40 bg-card/50 backdrop-blur">
                <div className="flex flex-col items-center p-6">
                  <div className="w-32 h-32 mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="object-cover w-full h-full rounded-full border-4 border-primary/10"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">{member.name}</h3>
                  <p className="text-primary font-medium mb-4 text-center">{member.role}</p>
                </div>
              </Card>
            ))}
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

export default Team;
