import { ScrollReveal } from "./scroll-reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function AmbassadorSection() {
  return (
    <section className="relative py-32 px-6 sphere-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-light mb-16">Our Brand Ambassador</h2>
          <Card className="rounded-2xl p-12 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full mx-auto mb-6"></div>
              <h3 className="text-3xl font-bold mb-4">Sam Noton</h3>
              <p className="text-xl text-muted-foreground mb-6">Award-winning Music Producer & Artist</p>
              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                Sam Noton represents the pinnacle of modern music production, bringing innovative sounds and creative vision to the electronic music landscape. As our brand ambassador, Sam embodies the spirit of MATE - discovering unique sounds and helping artists reach their full potential.
              </p>
              <Button 
                asChild 
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90"
                data-testid="button-sam-instagram"
              >
                <a href="https://www.instagram.com/samnotonmusic/" target="_blank" rel="noopener noreferrer">
                  Follow on Instagram
                </a>
              </Button>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
