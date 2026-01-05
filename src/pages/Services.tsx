import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Heart, MessageCircle, Check } from 'lucide-react';

const services = [
  {
    id: 'public-affairs',
    icon: Target,
    title: 'Public Affairs & Policy Consulting',
    tagline: 'Navigate. Influence. Build Trust.',
    description:
      'Helping leaders and organizations navigate complex systems, influence policy, and build community trust.',
    offerings: [
      'Government relations strategy',
      'Policy analysis and advocacy',
      'Stakeholder engagement',
      'Community trust building',
      'Legislative affairs support',
    ],
  },
  {
    id: 'leadership',
    icon: Users,
    title: 'Leadership Coaching & Empowerment',
    tagline: 'Develop. Empower. Lead.',
    description:
      'Developing authentic leaders and empowering teams to lead with vision and impact.',
    offerings: [
      'Executive coaching',
      'Leadership development programs',
      'Team empowerment workshops',
      'Personal storytelling guidance',
      'Authentic leadership cultivation',
    ],
  },
  {
    id: 'social-impact',
    icon: Heart,
    title: 'Social Impact & Organizational Guidance',
    tagline: 'Design. Measure. Transform.',
    description:
      'Supporting organizations, nonprofits, and agencies to design solution-driven programs that create measurable impact.',
    offerings: [
      'Strategic planning facilitation',
      'Program design and development',
      'Organizational change management',
      'Equity-centered consulting',
      'Impact measurement frameworks',
    ],
  },
  {
    id: 'branding',
    icon: MessageCircle,
    title: 'Branding, Communications & Crisis Management',
    tagline: 'Shape. Protect. Inspire.',
    description:
      'Shaping narratives that inspire trust and engagement while protecting reputations during challenges.',
    offerings: [
      'Brand strategy development',
      'Crisis communication planning',
      'Narrative and messaging strategy',
      'Media relations support',
      'Reputation management',
    ],
  },
];

const additionalServices = [
  'Government Relations',
  'Crisis Communication',
  'Coaching',
  'Practical Advice',
  'Facilitation',
  'Event Strategy',
  'Trusted Partnership',
];

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-cream via-cream to-sage-50">
        <div className="container-custom px-4 md:px-8">
          <div className="max-w-3xl">
            <div className="gold-line mb-6" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-forest mb-6">
              Our Services
            </h1>
            <p className="font-body text-lg md:text-xl text-forest-700 leading-relaxed mb-4">
              Tailored solutions designed to cultivate growth, inspire change, and create lasting impact.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Authentic', 'Transformational', 'Empowering'].map((word, index) => (
                <span key={word} className="flex items-center font-body text-gold font-semibold">
                  {word}
                  {index < 2 && <span className="ml-3 w-1.5 h-1.5 bg-forest rounded-full" />}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
      </section>

      {/* Service Pillars */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-start ${
                  index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Content */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-forest rounded-lg flex items-center justify-center">
                      <service.icon className="text-cream" size={28} />
                    </div>
                    <div className="gold-line" />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-forest mb-2">
                    {service.title}
                  </h2>
                  <p className="font-body text-gold font-semibold mb-4">{service.tagline}</p>
                  <p className="font-body text-forest-700 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Offerings List */}
                  <div className="bg-sage-50 rounded-lg p-6">
                    <h4 className="font-body font-semibold text-forest mb-4">What We Offer:</h4>
                    <ul className="space-y-3">
                      {service.offerings.map((offering) => (
                        <li key={offering} className="flex items-start gap-3">
                          <Check className="text-gold flex-shrink-0 mt-1" size={18} />
                          <span className="font-body text-forest-700">{offering}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Decorative Card */}
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-sage-100 to-sage-50 rounded-lg flex items-center justify-center">
                    <service.icon className="text-forest/20" size={120} />
                  </div>
                  <div
                    className={`absolute -bottom-3 ${
                      index % 2 === 0 ? '-right-3' : '-left-3'
                    } w-20 h-20 border-2 border-gold rounded-lg -z-10`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Banner */}
      <section className="py-12 bg-forest">
        <div className="container-custom px-4 md:px-8">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl font-semibold text-cream">
              Additional Expertise
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {additionalServices.map((service, index) => (
              <span
                key={service}
                className="flex items-center font-body text-cream/90 text-sm md:text-base"
              >
                {service}
                {index < additionalServices.length - 1 && (
                  <span className="ml-4 md:ml-6 w-1.5 h-1.5 bg-gold rounded-full" />
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section-padding bg-sage-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-forest mb-6">
              Why It Matters
            </h2>
            <p className="font-body text-lg text-forest-700 leading-relaxed mb-8">
              We empower leaders, organizations, and communities to bloom with authentic solutions
              and lasting change. Every engagement is designed to create meaningful impact that
              extends beyond the immediate challenge.
            </p>

            {/* Identity Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {['Women-Led', 'Black-Owned', 'Equity-Driven'].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 px-5 py-2 bg-white border border-forest/20 rounded-full"
                >
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span className="font-body text-sm font-semibold text-forest">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-forest rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-sage/10 rounded-full blur-2xl" />

            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream mb-4">
                Ready to Get Started?
              </h2>
              <p className="font-body text-cream/80 mb-8 max-w-xl mx-auto">
                Let's discuss how our services can help you achieve your goals and create lasting
                change.
              </p>
              <Link to="/contact" className="btn-gold">
                Schedule a Consultation
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
