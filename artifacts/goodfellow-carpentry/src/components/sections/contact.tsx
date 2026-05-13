import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const contentRef = useScrollReveal();
  const formRef = useScrollReveal();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll be in touch shortly.",
      duration: 5000,
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-background relative z-10 pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div ref={contentRef} className="reveal-on-scroll">
            <h2 className="text-primary font-medium tracking-wider uppercase text-sm mb-3">Get in Touch</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">Let's Discuss Your Project</h3>
            <p className="text-muted-foreground text-lg mb-10 max-w-md">
              Whether you're ready to break ground or just exploring ideas, we're happy to provide an honest assessment and a free estimate.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-muted-foreground">Mon-Fri from 7am to 5pm</p>
                  <p className="text-foreground font-medium text-lg mt-1">[YOUR PHONE NUMBER]</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-muted-foreground">We usually respond within 24 hours</p>
                  <p className="text-foreground font-medium mt-1">[YOUR EMAIL ADDRESS]</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Service Area</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    [YOUR BASE TOWN], MA.<br/>
                    Serving the greater MetroWest region.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div ref={formRef} className="reveal-on-scroll delay-100">
            <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
              <h4 className="font-serif text-2xl font-bold mb-6">Request an Estimate</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required className="bg-background" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" className="bg-background" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Type of Project</Label>
                  <Select required>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="deck">Custom Deck / Porch</SelectItem>
                      <SelectItem value="remodel">Home Remodel / Addition</SelectItem>
                      <SelectItem value="siding">Exterior Siding & Trim</SelectItem>
                      <SelectItem value="finish">Interior Finish Carpentry</SelectItem>
                      <SelectItem value="other">Other / Not Sure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us a bit about what you're looking to build..." 
                    className="min-h-[120px] bg-background" 
                    required 
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-base h-12 cursor-pointer">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
