import { Phone } from "lucide-react";
import { SITE_CONFIG } from "@/config";

export function MobileCallButton() {
  return (
    <a
      href={SITE_CONFIG.phone.href}
      data-testid="link-mobile-call"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full shadow-lg shadow-primary/30 active:scale-95 transition-transform"
      aria-label="Call us now"
    >
      <Phone className="w-5 h-5 animate-pulse" />
      <span>Call Now — {SITE_CONFIG.phone.display}</span>
    </a>
  );
}
