import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { SITE_CONFIG } from "@/config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, CheckCircle, AlertCircle } from "lucide-react";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const emailjsConfigured = SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY;

export function Contact() {
  const contentRef = useScrollReveal();
  const formRef = useScrollReveal();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailjsConfigured) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: `${firstName} ${lastName}`,
          from_email: email,
          phone: phone || "Not provided",
          service_type: service,
          message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("success");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setService("");
      setMessage("");
    } catch {
      setStatus("error");
    }
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
                  <a href={SITE_CONFIG.phone.href} className="text-foreground font-medium text-lg mt-1 hover:text-primary transition-colors">{SITE_CONFIG.phone.display}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-muted-foreground">We usually respond within 24 hours</p>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-foreground font-medium mt-1 hover:text-primary transition-colors">{SITE_CONFIG.email}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Service Area</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Based in {SITE_CONFIG.baseTown}, MA.<br/>
                    {SITE_CONFIG.serviceArea}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div ref={formRef} className="reveal-on-scroll delay-100">
            <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
              <h4 className="font-serif text-2xl font-bold mb-6">Request an Estimate</h4>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                  <CheckCircle className="w-14 h-14 text-primary" />
                  <h5 className="font-serif text-2xl font-bold">Message Sent!</h5>
                  <p className="text-muted-foreground max-w-xs">
                    Thanks for reaching out. We'll review your project details and get back to you within 24 hours.
                  </p>
                  <Button variant="outline" onClick={() => setStatus("idle")} className="mt-4 cursor-pointer">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {!emailjsConfigured && (
                    <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 text-amber-800 rounded-lg p-4 text-sm">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <p>Email sending is not configured yet. Add your EmailJS credentials to enable this form.</p>
                    </div>
                  )}

                  {status === "error" && emailjsConfigured && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 text-sm">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <p>Something went wrong. Please try again or call us directly.</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        required
                        className="bg-background"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        data-testid="input-firstName"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        required
                        className="bg-background"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        data-testid="input-lastName"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="bg-background"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        data-testid="input-email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        className="bg-background"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        data-testid="input-phone"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Type of Project</Label>
                    <Select required value={service} onValueChange={setService}>
                      <SelectTrigger className="bg-background" data-testid="select-service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Custom Deck / Porch">Custom Deck / Porch</SelectItem>
                        <SelectItem value="Home Remodel / Addition">Home Remodel / Addition</SelectItem>
                        <SelectItem value="Exterior Siding & Trim">Exterior Siding & Trim</SelectItem>
                        <SelectItem value="Interior Finish Carpentry">Interior Finish Carpentry</SelectItem>
                        <SelectItem value="Other / Not Sure">Other / Not Sure</SelectItem>
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
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-base h-12 cursor-pointer"
                    disabled={status === "sending"}
                    data-testid="button-submit"
                  >
                    {status === "sending" ? "Sending…" : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>

        <div className="mt-16 rounded-xl overflow-hidden border border-border shadow-md">
          <iframe
            title="MetroWest MA Service Area"
            src="https://maps.google.com/maps?q=Wayland,+Massachusetts&t=&z=12&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="380"
            loading="lazy"
            className="block"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
}
