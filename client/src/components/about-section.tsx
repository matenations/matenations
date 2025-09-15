import { ScrollReveal } from "./scroll-reveal";

export function AboutSection() {
  return (
    <section className="relative py-32 px-6 sphere-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-light mb-12" style={{ letterSpacing: "-1px" }}>
            About MATE
          </h2>
          <div className="text-lg md:text-xl leading-relaxed text-gray-300 space-y-6">
            <p>
              <strong>MATE</strong> is an innovative record label revolutionizing the music industry across Hip-Hop/Rap/R&B, Pop/Dance Pop, Afrobeats/Afro Fusion, and Amapiano genres.
            </p>
            <p>
              As a full-service record label, we provide comprehensive artist development, professional recording services, global distribution, and strategic marketing campaigns. Our artists benefit from industry expertise, creative support, and direct access to major streaming platforms and media outlets.
            </p>
            <p>
              At MATE, we transform talented artists into global superstars through innovative music production, strategic brand development, and worldwide distribution networks.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
