import { ScrollReveal } from "./scroll-reveal";

export function AboutSection() {
  return (
    <section className="relative py-32 px-6 sphere-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-light mb-12" style={{ letterSpacing: "-1px" }}>
            About Mate Nations
          </h2>
          <div className="text-lg md:text-xl leading-relaxed text-gray-300 space-y-6">
            <p>
              <strong>Mate Nations</strong> is an innovative record label revolutionizing the music industry. We embrace and celebrate all music genres, welcoming artists from every musical background and style.
            </p>
            <p>
              As a full-service record label, we provide comprehensive artist development, professional recording services, global distribution, and strategic marketing campaigns. Our artists benefit from industry expertise, creative support, and direct access to major streaming platforms and media outlets.
            </p>
            <p>
              At Mate Nations, we transform talented artists into global superstars through innovative music production, strategic brand development, and worldwide distribution networks.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
