import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { PartnerSection } from "@/components/partner-section";
import { AmbassadorSection } from "@/components/ambassador-section";
import { TeamSection } from "@/components/team-section";
import { ContactSection } from "@/components/contact-section";
import { StickyHeader } from "@/components/sticky-header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="smooth-scroll">
      {/* Grain Texture Overlay */}
      <div className="fixed inset-0 grain-texture pointer-events-none z-50 opacity-30"></div>

      {/* Sticky Header (appears after scrolling) */}
      <StickyHeader />

      {/* Navigation */}
      <nav className="fixed top-0 right-0 z-40 p-6">
        <Button 
          asChild
          className="bg-white text-black hover:bg-gray-200"
          data-testid="button-submit-demo"
        >
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfxRvor4d6Z53P-3PQBWBzs5YHwicH9F0qzKenRSUBCAGgsVQ/viewform?usp=header" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Submit demo
          </a>
        </Button>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <div id="about">
        <AboutSection />
      </div>

      {/* Partner Community Section */}
      <PartnerSection />

      {/* Brand Ambassador Section */}
      <AmbassadorSection />

      {/* Team Section */}
      <div id="team">
        <TeamSection />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Mate Nations</h2>
          <p className="text-muted-foreground mb-6">Transforming talented artists into global superstars through innovative music production and worldwide distribution.</p>
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <span>© 2024 Mate Nations</span>
            <span>•</span>
            <span>The music of revolution</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
