
import { MessageCircle, Layers, ArrowLeftRight, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

const serviceItems = [
  {
    title: "Custom chatbots",
    description: "Engage customers 24/7 with AI assistants for customer service, lead generation, and answering frequently asked questions.",
    icon: <MessageCircle className="h-10 w-10 text-purple-600" />,
  },
  {
    title: "Process automation",
    description: "Eliminate manual tasks and streamline operations with intelligent workflows that handle repetitive work across your business.",
    icon: <Layers className="h-10 w-10 text-blue-600" />,
  },
  {
    title: "System integrations",
    description: "Connect your existing business tools and software to create a seamless flow of information without disrupting your operations.",
    icon: <ArrowLeftRight className="h-10 w-10 text-green-600" />,
  },
  {
    title: "Document processing",
    description: "Extract valuable data from documents, forms, and unstructured content using advanced AI to make information actionable.",
    icon: <FileText className="h-10 w-10 text-amber-600" />,
  },
];

const ServicesSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {serviceItems.map((item, index) => (
        <Card key={index} className="p-6 transition-all hover:shadow-lg border border-border/40 bg-card/50 backdrop-blur">
          <div className="mb-4">
            {item.icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-muted-foreground">{item.description}</p>
        </Card>
      ))}
    </div>
  );
};

export default ServicesSection;
