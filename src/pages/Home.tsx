import { Link } from 'react-router-dom';
import { Scale, Shield, Users, Award, ChevronRight, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="animate-fadeIn">
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Expert Legal Representation You Can Trust
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              With over 25 years of experience, Sterling & Associates delivers exceptional legal services tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 px-8 py-4 rounded-md font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                Schedule Free Consultation
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/practice-areas"
                className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-md font-semibold transition-all"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Scale, title: '25+ Years', desc: 'Legal Excellence' },
              { icon: Users, title: '1000+', desc: 'Clients Served' },
              { icon: Award, title: '98%', desc: 'Success Rate' },
              { icon: Shield, title: '24/7', desc: 'Client Support' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center group hover:transform hover:scale-105 transition-all">
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-amber-600 group-hover:text-amber-700" />
                <h3 className="text-3xl font-bold text-slate-900 mb-2">{stat.title}</h3>
                <p className="text-slate-600">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              Practice Areas
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive legal services across multiple specializations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Corporate Law',
                desc: 'Business formation, contracts, mergers & acquisitions',
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Family Law',
                desc: 'Divorce, custody, adoption, and family matters',
                color: 'from-rose-500 to-rose-600'
              },
              {
                title: 'Criminal Defense',
                desc: 'Aggressive defense for all criminal charges',
                color: 'from-red-600 to-red-700'
              },
              {
                title: 'Estate Planning',
                desc: 'Wills, trusts, probate, and asset protection',
                color: 'from-emerald-500 to-emerald-600'
              }
            ].map((area, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
              >
                <div className={`h-2 bg-gradient-to-r ${area.color}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{area.desc}</p>
                  <Link
                    to="/practice-areas"
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              Why Choose Sterling & Associates
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                title: 'Experienced Attorneys',
                desc: 'Our team brings decades of combined legal expertise across multiple practice areas.'
              },
              {
                title: 'Client-Focused Approach',
                desc: 'We prioritize your needs and work tirelessly to achieve the best possible outcomes.'
              },
              {
                title: 'Proven Track Record',
                desc: 'Thousands of successful cases and satisfied clients speak to our dedication and skill.'
              }
            ].map((reason, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
                  <CheckCircle className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                text: 'Sterling & Associates handled my corporate merger with exceptional professionalism. Their attention to detail saved us from potential pitfalls.',
                author: 'Michael Chen',
                role: 'CEO, TechStart Inc.'
              },
              {
                text: 'During my divorce proceedings, they provided compassionate support while fiercely protecting my interests. I could not have asked for better representation.',
                author: 'Sarah Williams',
                role: 'Marketing Director'
              },
              {
                text: 'The criminal defense team fought tirelessly for my case. Their expertise and dedication resulted in a favorable outcome I did not think was possible.',
                author: 'James Rodriguez',
                role: 'Business Owner'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-slate-800 p-8 rounded-lg">
                <div className="mb-4">
                  <svg className="h-8 w-8 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">{testimonial.text}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Discuss Your Case?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our experienced attorneys today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-amber-700 hover:bg-slate-100 px-8 py-4 rounded-md font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Get Started Now
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
