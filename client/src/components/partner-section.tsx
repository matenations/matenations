import { ScrollReveal } from "./scroll-reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function PartnerSection() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">Our Partner Community</h2>
          <Card className="rounded-2xl p-12 text-center bg-card/50 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-4">Unison Music App</h3>
                <p className="text-xl text-muted-foreground mb-8">Make music together. Let your unfinished tracks grow.</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h4 className="text-2xl font-semibold mb-4">Ungatekeep Collaboration</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Collaborate live with musicians worldwide</li>
                    <li>• Seamless stitching and stem creation</li>
                    <li>• Inspire and connect with creative community</li>
                    <li>• Automate stems with a single click</li>
                  </ul>
                </div>
                
                <div className="bg-secondary rounded-xl p-6">
                  <div className="bg-background rounded-lg p-4 mb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-primary rounded-full"></div>
                      <div>
                        <p className="font-medium">@producer123</p>
                        <p className="text-sm text-muted-foreground">Looking for: Mixing, Production</p>
                      </div>
                    </div>
                    <div className="bg-muted rounded p-3">
                      <p className="text-sm">Original Track - Indie Pop</p>
                      <div className="w-full bg-accent h-2 rounded mt-2"></div>
                    </div>
                  </div>
                  <p className="text-sm text-center text-muted-foreground">Real-time music collaboration platform</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  asChild 
                  className="bg-white text-black hover:bg-gray-200"
                  data-testid="button-unison-visit"
                >
                  <a href="https://unisonmusicapp.com/" target="_blank" rel="noopener noreferrer">
                    Visit Unison Music App
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
