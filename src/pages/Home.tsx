import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Heart, MessageCircle } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Public Affairs & Policy Consulting',
    description: 'Navigate complex systems, influence policy, and build community trust.',
  },
  {
    icon: Users,
    title: 'Leadership Coaching & Empowerment',
    description: 'Develop authentic leaders and empower teams to lead with vision.',
  },
  {
    icon: Heart,
    title: 'Social Impact & Organizational Guidance',
    description: 'Design solution-driven programs that create measurable impact.',
  },
  {
    icon: MessageCircle,
    title: 'Branding, Communications & Crisis Management',
    description: 'Shape narratives that inspire trust and protect reputations.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-sage-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-sage-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-gold-100/30 rounded-full blur-3xl" />

        <div className="container-custom relative z-10 px-4 md:px-8 py-16 md:py-24">
          <div className="max-w-4xl">
            {/* Gold decorative line */}
            <div className="gold-line mb-8" />

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-forest leading-tight mb-6">
              Cultivating Growth.
              <br />
              <span className="text-gold">Inspiring Change.</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-forest-700 leading-relaxed mb-8 max-w-2xl">
              At Bloom with Gwendolyn Consulting, we believe transformation happens when authenticity
              meets vision. We partner with leaders, organizations, and communities to create
              lasting impact.
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-gold pl-6 py-2 mb-10">
              <p className="font-display text-xl md:text-2xl italic text-forest-600">
                "When we nurture what's possible, we create space for growth that transforms people
                and communities."
              </p>
            </blockquote>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                Start Your Journey
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Abstract decorative shape */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3">
          <svg viewBox="0 0 400 400" className="w-full h-auto opacity-10">
            <path
              d="M200 50 Q350 100 350 200 Q350 300 200 350 Q50 300 50 200 Q50 100 200 50"
              fill="none"
              stroke="#2D5A3D"
              strokeWidth="2"
            />
            <path
              d="M200 80 Q320 120 320 200 Q320 280 200 320 Q80 280 80 200 Q80 120 200 80"
              fill="none"
              stroke="#C9A227"
              strokeWidth="1"
            />
          </svg>
        </div>
      </section>

      {/* Tagline Banner */}
      <section className="bg-forest py-6">
        <div className="container-custom px-4 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-cream">
            {['Authentic', 'Empowering', 'Strengthening Communities', 'Sparking Transformation'].map(
              (item, index) => (
                <span key={item} className="flex items-center font-body text-sm md:text-base">
                  {item}
                  {index < 3 && <span className="ml-4 md:ml-8 w-1.5 h-1.5 bg-gold rounded-full" />}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Our Story Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="gold-line mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-forest mb-6">
                Our Story
              </h2>
              <p className="font-body text-forest-700 leading-relaxed mb-6">
                At Bloom with Gwendolyn Consulting, we believe growth happens when authenticity
                meets vision. We cultivate tailored solutions that facilitate transformational
                change, rooted in collaboration and resilience.
              </p>
              <p className="font-body text-forest-700 leading-relaxed mb-8">
                As a women-led, Black-owned consulting practice, Bloom is rooted in equity and
                driven by a commitment to cultivating trust, collaboration, and growth. We help
                ideas take root.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center font-body font-semibold text-gold hover:text-gold-600 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>

            {/* Decorative element */}
            <div className="relative">
              <div className="aspect-square bg-sage-50 rounded-lg p-8 flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-full max-w-xs">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#2D5A3D" strokeWidth="1" opacity="0.3" />
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#C9A227" strokeWidth="1" opacity="0.5" />
                  <circle cx="100" cy="100" r="40" fill="#2D5A3D" opacity="0.1" />
                  <path
                    d="M100 40 Q130 60 130 100 Q130 140 100 160 Q70 140 70 100 Q70 60 100 40"
                    fill="none"
                    stroke="#2D5A3D"
                    strokeWidth="2"
                  />
                  <circle cx="100" cy="70" r="4" fill="#C9A227" />
                  <circle cx="115" cy="90" r="3" fill="#C9A227" />
                  <circle cx="85" cy="110" r="3" fill="#C9A227" />
                </svg>
              </div>
              {/* Gold accent corner */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-sage-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-forest mb-4">
              Our Services
            </h2>
            <p className="font-body text-forest-700 max-w-2xl mx-auto">
              Tailored solutions designed to cultivate growth and drive meaningful change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="card bg-white group hover:bg-forest transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold transition-colors duration-300">
                  <service.icon className="text-forest group-hover:text-white" size={24} />
                </div>
                <h3 className="font-display text-lg font-semibold text-forest mb-3 group-hover:text-cream transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-forest-600 group-hover:text-cream/80 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="btn-secondary">
              View All Services
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* What Makes Bloom Different */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-forest mb-8">
              What Makes Bloom Different
            </h2>
            <p className="font-body text-lg text-forest-700 leading-relaxed mb-10">
              We are rooted in equity and resilience. Bloom is not just about strategies, but about
              cultivating tailored pathways, facilitating collaboration, and empowering leaders and
              communities to drive transformational change that achieves meaningful impact that
              lasts.
            </p>

            {/* Identity Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {['Women-Led', 'Black-Owned', 'Equity-Driven'].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 px-6 py-3 bg-forest/5 border border-forest/20 rounded-full"
                >
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span className="font-body font-semibold text-forest">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding bg-forest overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-sage/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream mb-6">
            Ready to Bloom Together?
          </h2>
          <p className="font-body text-cream/80 mb-10 max-w-xl mx-auto">
            Let's cultivate growth and create lasting impact for your organization and community.
          </p>
          <Link to="/contact" className="btn-gold">
            Schedule a Consultation
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
