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
              <strong>MATE DOT</strong> is the world's first music society built for true music seekers—discovering the most unique songs across Hip-Hop/Rap/R&B, Pop/Dance Pop, Afrobeats/Afro Fusion, and Amapiano.
            </p>
            <p>
              We don't just find great music—we help artists shine. mate. promotes songs across social media through high-quality music videos and curated playlists, offers custom lyrics for free, and provides artists with direct pathways to bigger record labels at only minimal charges.
            </p>
            <p>
              At mate., we connect music lovers to unforgettable sounds—and artists to the world.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
