
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    bio: "Alex has over 15 years of experience in AI and automation technologies and founded IntegrationsNow to help businesses leverage the power of AI.",
  },
  {
    name: "Samantha Lee",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    bio: "Samantha leads our technical team and oversees all integration projects, bringing a wealth of experience from her background at leading tech companies.",
  },
  {
    name: "Marcus Chen",
    role: "Head of AI Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    bio: "Marcus specializes in developing custom AI solutions that address complex business challenges, with expertise in natural language processing and machine learning.",
  },
  {
    name: "Priya Patel",
    role: "Client Success Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    bio: "Priya ensures our clients achieve their business goals through our solutions, working closely with them from implementation to optimization.",
  },
  {
    name: "James Wilson",
    role: "Integration Specialist",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    bio: "James has deep expertise in connecting disparate systems and ensuring smooth data flow between platforms to create seamless integrations.",
  },
  {
    name: "Elena Rodriguez",
    role: "AI Developer",
    image: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    bio: "Elena develops cutting-edge AI models and algorithms to power our automation solutions, with a focus on creating efficient and scalable systems.",
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
                <div className="aspect-w-3 aspect-h-2 w-full">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="object-cover w-full h-[240px]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-muted-foreground hover:text-primary">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
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
