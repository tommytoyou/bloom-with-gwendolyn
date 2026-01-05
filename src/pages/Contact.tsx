import { useState, type FormEvent } from 'react';
import { Mail, Phone, Linkedin, Instagram, Facebook, Send, CheckCircle } from 'lucide-react';

const serviceOptions = [
  'Public Affairs & Policy Consulting',
  'Leadership Coaching & Empowerment',
  'Social Impact & Organizational Guidance',
  'Branding, Communications & Crisis Management',
  'Other',
];

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/bloomwithgwendolyn' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/bloomwithgwendolyn' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/bloomwithgwendolyn' },
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  service: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after showing success
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        organization: '',
        service: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-cream via-cream to-sage-50">
        <div className="container-custom px-4 md:px-8">
          <div className="max-w-3xl">
            <div className="gold-line mb-6" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-forest mb-6">
              Let's Connect
            </h1>
            <p className="font-body text-lg md:text-xl text-forest-700 leading-relaxed">
              Ready to cultivate growth and create lasting impact? We'd love to hear from you.
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-sage-50 rounded-2xl p-6 md:p-10">
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-forest mb-6">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-forest mx-auto mb-4" />
                    <h3 className="font-display text-2xl font-semibold text-forest mb-2">
                      Thank You!
                    </h3>
                    <p className="font-body text-forest-700">
                      We've received your message and will get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block font-body text-sm font-semibold text-forest mb-2"
                        >
                          Full Name <span className="text-gold">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.fullName ? 'border-red-500' : 'border-forest/20'
                          } bg-white font-body text-forest focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors`}
                          placeholder="Your full name"
                        />
                        {errors.fullName && (
                          <p className="mt-1 text-sm text-red-500 font-body">{errors.fullName}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block font-body text-sm font-semibold text-forest mb-2"
                        >
                          Email Address <span className="text-gold">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.email ? 'border-red-500' : 'border-forest/20'
                          } bg-white font-body text-forest focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors`}
                          placeholder="you@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500 font-body">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block font-body text-sm font-semibold text-forest mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-forest/20 bg-white font-body text-forest focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      {/* Organization */}
                      <div>
                        <label
                          htmlFor="organization"
                          className="block font-body text-sm font-semibold text-forest mb-2"
                        >
                          Organization
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-forest/20 bg-white font-body text-forest focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                          placeholder="Your organization name"
                        />
                      </div>
                    </div>

                    {/* Service Interest */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block font-body text-sm font-semibold text-forest mb-2"
                      >
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-forest/20 bg-white font-body text-forest focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                      >
                        <option value="">Select a service...</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block font-body text-sm font-semibold text-forest mb-2"
                      >
                        Message <span className="text-gold">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.message ? 'border-red-500' : 'border-forest/20'
                        } bg-white font-body text-forest focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none`}
                        placeholder="Tell us about your needs and how we can help..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500 font-body">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                          </span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2" size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="sticky top-32">
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-forest mb-6">
                  Contact Information
                </h2>

                {/* Contact Details */}
                <div className="space-y-6 mb-10">
                  <a
                    href="mailto:info@bloomwithgwendolyn.com"
                    className="flex items-center gap-4 p-4 bg-sage-50 rounded-lg hover:bg-sage-100 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-forest rounded-lg flex items-center justify-center group-hover:bg-gold transition-colors">
                      <Mail className="text-cream" size={22} />
                    </div>
                    <div>
                      <p className="font-body text-sm text-forest-600">Email</p>
                      <p className="font-body font-semibold text-forest">
                        info@bloomwithgwendolyn.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+19139070916"
                    className="flex items-center gap-4 p-4 bg-sage-50 rounded-lg hover:bg-sage-100 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-forest rounded-lg flex items-center justify-center group-hover:bg-gold transition-colors">
                      <Phone className="text-cream" size={22} />
                    </div>
                    <div>
                      <p className="font-body text-sm text-forest-600">Phone</p>
                      <p className="font-body font-semibold text-forest">(913) 907-0916</p>
                    </div>
                  </a>
                </div>

                {/* Social Links */}
                <div className="mb-10">
                  <h3 className="font-body font-semibold text-forest mb-4">Follow Us</h3>
                  <div className="flex items-center gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-forest rounded-lg flex items-center justify-center hover:bg-gold transition-colors"
                        aria-label={social.name}
                      >
                        <social.icon className="text-cream" size={22} />
                      </a>
                    ))}
                  </div>
                  <p className="font-body text-sm text-forest-600 mt-3">@BloomwithGwendolyn</p>
                </div>

                {/* Quote */}
                <blockquote className="border-l-4 border-gold pl-6 py-4">
                  <p className="font-display text-lg italic text-forest-600 mb-3">
                    "When we choose to nurture what's possible, we cultivate growth that
                    endures—one person, one organization, and one community at a time."
                  </p>
                  <p className="font-body text-sm text-gold font-semibold">
                    Where vision grows, and communities thrive.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
