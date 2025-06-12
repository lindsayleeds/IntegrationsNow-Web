import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative py-24 sm:py-32 lg:pt-36 lg:pb-32 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>
      
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200 font-extrabold">
            Supercharge
          </span>{" "}
          your business with AI driven automation
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          We build custom AI solutions that integrate with your existing tools and workflows
          to automate repetitive tasks, extract insights from data, and drive business growth.
        </p>
        <div className="mt-10 flex items-center justify-center gap-6">
          <Link to="/contact">
            <Button className="px-8 py-6 text-lg group" size="lg">
              <span>Contact Us</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Button variant="outline" className="px-8 py-6 text-lg" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
