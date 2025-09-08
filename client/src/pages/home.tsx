import { LogoSwitch } from "@/components/logo-switch";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { PartnerSection } from "@/components/partner-section";
import { AmbassadorSection } from "@/components/ambassador-section";
import { TeamSection } from "@/components/team-section";
import { ContactSection } from "@/components/contact-section";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="smooth-scroll">
      {/* Grain Texture Overlay */}
      <div className="fixed inset-0 grain-texture pointer-events-none z-50 opacity-30"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 p-6">
        <div className="flex justify-between items-center">
          <LogoSwitch />
          <Button 
            className="bg-white text-black hover:bg-gray-200"
            data-testid="button-start-project"
          >
            Start a project
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Partner Community Section */}
      <PartnerSection />

      {/* Brand Ambassador Section */}
      <AmbassadorSection />

      {/* Team Section */}
      <TeamSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">mate.</h2>
          <p className="text-muted-foreground mb-6">Connecting music lovers to unforgettable sounds—and artists to the world.</p>
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <span>© 2024 MATE Music Society</span>
            <span>•</span>
            <span>Made with ♫ for music lovers</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
