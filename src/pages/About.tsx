import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Scale, Sparkles, Users } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Authenticity',
    description: 'We lead with genuine connection and transparent communication in all we do.',
  },
  {
    icon: Scale,
    title: 'Equity',
    description: 'We center fairness and inclusion, ensuring everyone has a seat at the table.',
  },
  {
    icon: Sparkles,
    title: 'Transformation',
    description: 'We believe in the power of change to create lasting, meaningful impact.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We grow together, building partnerships rooted in trust and mutual respect.',
  },
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-cream via-cream to-sage-50">
        <div className="container-custom px-4 md:px-8">
          <div className="max-w-3xl">
            <div className="gold-line mb-6" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-forest mb-6">
              Our Story
            </h1>
            <p className="font-body text-lg md:text-xl text-forest-700 leading-relaxed">
              Cultivating growth through authentic guidance and transformational partnerships.
            </p>
          </div>
        </div>
        {/* Decorative shape */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-forest mb-6">
                Who We Are
              </h2>
              <p className="font-body text-forest-700 leading-relaxed mb-6">
                Bloom with Gwendolyn Consulting is a women-led, Black-owned consulting practice
                dedicated to cultivating growth and inspiring change. We believe that transformation
                happens when authenticity meets vision—when leaders and organizations are empowered
                to lead with purpose and create lasting impact.
              </p>
              <p className="font-body text-forest-700 leading-relaxed mb-8">
                Founded on principles of equity, collaboration, and resilience, we partner with
                individuals, organizations, and communities to develop tailored strategies that
                address their unique challenges and unlock their full potential.
              </p>

              {/* Quote Block */}
              <blockquote className="border-l-4 border-gold pl-6 py-4 bg-sage-50 rounded-r-lg">
                <p className="font-display text-xl italic text-forest-600 mb-2">
                  "A flower does not use words to announce its arrival to the world; it just
                  blooms."
                </p>
              </blockquote>
            </div>

            {/* Decorative Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] bg-sage-100 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-forest/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-32 h-32 opacity-30">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#2D5A3D" strokeWidth="1" />
                    <path
                      d="M50 20 Q70 35 70 50 Q70 65 50 80 Q30 65 30 50 Q30 35 50 20"
                      fill="none"
                      stroke="#C9A227"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-gold rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Guide */}
      <section className="section-padding bg-sage-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo Placeholder */}
            <div className="relative order-2 md:order-1">
              <div className="aspect-[3/4] bg-forest-100 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-body text-sm text-cream/80 mb-1">Photo</p>
                  <p className="font-display text-xl text-cream">Gwendolyn S. Thomas</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full -z-10" />
            </div>

            <div className="order-1 md:order-2">
              <div className="gold-line mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-forest mb-2">
                Meet Your Guide
              </h2>
              <p className="font-body text-gold font-semibold mb-6">
                Leadership That Cultivates Change
              </p>
              <p className="font-body text-forest-700 leading-relaxed mb-6">
                With nearly three decades of public service and community leadership, I bring a rare
                blend of creative strategic insight, empathy, and results-driven action. Through
                Bloom with Gwendolyn Consulting, I help organizations and leaders grow
                authentically—turning values into impact and ideas into reality.
              </p>
              <div className="border-t border-forest/20 pt-6">
                <p className="font-display text-xl font-semibold text-forest">
                  Gwendolyn S. Thomas
                </p>
                <p className="font-body text-forest-600">
                  Founder, Lead Storyteller & Creative Strategist
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-forest text-cream rounded-lg p-8 md:p-10">
              <h3 className="font-display text-2xl font-semibold mb-4 text-gold">Our Mission</h3>
              <p className="font-body leading-relaxed text-cream/90">
                We believe transformation happens when we grow together, through authentic guidance,
                solution-driven strategies, and visionary collaboration. We help ideas take root.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-sage-100 rounded-lg p-8 md:p-10">
              <h3 className="font-display text-2xl font-semibold mb-4 text-forest">Our Vision</h3>
              <p className="font-body leading-relaxed text-forest-700">
                To co-create spaces where authenticity drives leadership, collaboration fuels
                growth, transformation shapes communities, every solution transforms challenges into
                opportunities, and empowerment ensures everyone has a seat at the table—because true
                growth happens when we bloom together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-forest mb-6">
              Our Approach
            </h2>
            <p className="font-body text-lg text-forest-700 leading-relaxed">
              Our tailored approach is rooted in listening, clarity, and authentic engagement. We
              cultivate solutions that facilitate growth, transformation, and impact. We meet you
              where you are and help you grow with purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-forest mb-4">
              Our Values
            </h2>
            <p className="font-body text-forest-700 max-w-2xl mx-auto">
              The principles that guide every partnership and strategy we cultivate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-forest" size={28} />
                </div>
                <h3 className="font-display text-xl font-semibold text-forest mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-sm text-forest-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-forest">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream mb-6">
            Ready to Grow Together?
          </h2>
          <p className="font-body text-cream/80 mb-10 max-w-xl mx-auto">
            Let's explore how we can cultivate transformation for your organization.
          </p>
          <Link to="/contact" className="btn-gold">
            Start the Conversation
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
