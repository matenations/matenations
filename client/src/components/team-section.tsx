import { ScrollReveal } from "./scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  gradient: string;
}

const teamData = {
  leadership: [
    {
      name: "AVIK",
      role: "Founder & EDM Producer",
      description: "Visionary founder driving MATE's mission to revolutionize music discovery and artist development in the electronic music space.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Garbuel",
      role: "Chief Executive Officer",
      description: "Strategic leader orchestrating MATE's growth and ensuring operational excellence across all business verticals.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Amrit",
      role: "Investor & Sponsorship",
      description: "Financial strategist and partnership architect securing resources and strategic alliances for MATE's expansion.",
      gradient: "from-green-500 to-emerald-500"
    }
  ],
  ar: [
    {
      name: "Prosper",
      role: "A&R Specialist",
      description: "Hip-Hop and R&B talent scout with keen ear for emerging artists.",
      gradient: "from-red-500 to-orange-500"
    },
    {
      name: "Hasan",
      role: "A&R Specialist", 
      description: "Afrobeats and world music curator connecting global sounds.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      name: "Abhay",
      role: "A&R Specialist",
      description: "Pop and electronic music specialist identifying next-gen artists.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      name: "AVIK",
      role: "A&R Lead",
      description: "Electronic and dance music expert guiding artist development.",
      gradient: "from-purple-500 to-pink-500"
    }
  ],
  digital: [
    {
      name: "Stefflen",
      role: "Head of Digital Art",
      description: "Creative director leading visual identity and digital artwork creation.",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      name: "Bernard",
      role: "Junior Digital Artist",
      description: "Emerging talent specializing in motion graphics and album artwork.",
      gradient: "from-lime-500 to-green-500"
    }
  ],
  video: [
    {
      name: "Joel Obais",
      role: "Head of Video Editing",
      description: "Video production maestro crafting compelling music visuals and content.",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      name: "Talha",
      role: "Junior Video Editor",
      description: "Creative video editor specializing in music video production and social content.",
      gradient: "from-violet-500 to-purple-500"
    }
  ],
  developers: [
    {
      name: "AVIK",
      role: "Lead Developer",
      description: "Full-stack developer architecting MATE's digital platform and user experience.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Amrit",
      role: "Backend Developer",
      description: "Systems engineer building robust infrastructure and API services.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "Ben",
      role: "Frontend Developer",
      description: "UI/UX specialist creating intuitive and engaging user interfaces.",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      name: "Rendra",
      role: "Mobile Developer",
      description: "Mobile app developer ensuring seamless cross-platform experiences.",
      gradient: "from-orange-500 to-red-500"
    }
  ],
  management: [
    {
      name: "Utsav Poonia",
      role: "Manager",
      description: "Operations manager ensuring seamless execution of projects and maintaining team productivity across all departments.",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      name: "Toriola",
      role: "Strategist + Manager",
      description: "Strategic planning specialist and management expert driving MATE's long-term vision and market positioning.",
      gradient: "from-emerald-500 to-teal-500"
    }
  ]
};

function TeamCard({ member, size = "normal" }: { member: TeamMember; size?: "normal" | "small" | "large" }) {
  const sizeClasses = {
    small: "w-16 h-16",
    normal: "w-20 h-20", 
    large: "w-20 h-20"
  };

  const textSizes = {
    small: { name: "text-lg", role: "text-primary", desc: "text-xs" },
    normal: { name: "text-xl", role: "text-primary", desc: "text-sm" },
    large: { name: "text-xl", role: "text-primary", desc: "text-sm" }
  };

  return (
    <Card className="team-card rounded-xl p-6 text-center hover:scale-105 transition-all duration-300" data-testid={`card-team-${member.name.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-0">
        <div className={`${sizeClasses[size]} bg-gradient-to-br ${member.gradient} rounded-full mx-auto mb-4`}></div>
        <h4 className={`${textSizes[size].name} font-bold mb-2`}>{member.name}</h4>
        <p className={`${textSizes[size].role} mb-3`}>{member.role}</p>
        <p className={`${textSizes[size].desc} text-muted-foreground`}>{member.description}</p>
      </CardContent>
    </Card>
  );
}

export function TeamSection() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-light text-center mb-20">Our Team</h2>
          
          {/* Leadership */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Leadership</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {teamData.leadership.map((member) => (
                <TeamCard key={member.name} member={member} size="large" />
              ))}
            </div>
          </div>

          {/* A&R Team */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">A&R Team</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {teamData.ar.map((member, index) => (
                <TeamCard key={`${member.name}-${index}`} member={member} size="small" />
              ))}
            </div>
          </div>

          {/* Creative Teams */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Digital Artist Team */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">Digital Artist Team</h3>
              <div className="grid grid-cols-2 gap-6">
                {teamData.digital.map((member) => (
                  <TeamCard key={member.name} member={member} size="small" />
                ))}
              </div>
            </div>

            {/* Video Editing Team */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">Video Editing Team</h3>
              <div className="grid grid-cols-2 gap-6">
                {teamData.video.map((member) => (
                  <TeamCard key={member.name} member={member} size="small" />
                ))}
              </div>
            </div>
          </div>

          {/* Developers */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Development Team</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {teamData.developers.map((member, index) => (
                <TeamCard key={`${member.name}-dev-${index}`} member={member} size="small" />
              ))}
            </div>
          </div>

          {/* Management */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Management</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamData.management.map((member) => (
                <TeamCard key={member.name} member={member} size="normal" />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
