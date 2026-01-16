import { Scale, Award, Users, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="animate-fadeIn">
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">About Our Firm</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Dedicated to excellence in legal representation since 1995
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Founded in 1995 by Senior Partner Jonathan Sterling, Sterling & Associates has grown from a small practice to one of the region's most respected law firms. Our journey has been defined by an unwavering commitment to our clients and a dedication to achieving exceptional results.
                </p>
                <p>
                  Over the past quarter-century, we have successfully represented thousands of clients across a diverse range of legal matters. From complex corporate transactions to sensitive family law cases, our team brings the expertise and personal attention that clients deserve.
                </p>
                <p>
                  Today, Sterling & Associates is home to a team of accomplished attorneys, each bringing specialized knowledge and a shared passion for justice. We continue to evolve, embracing innovative legal strategies while maintaining the traditional values of integrity, diligence, and client service.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900 text-white p-8 rounded-lg">
                <Scale className="h-12 w-12 text-amber-500 mb-4" />
                <h3 className="text-3xl font-bold mb-2">25+</h3>
                <p className="text-slate-300">Years of Excellence</p>
              </div>
              <div className="bg-amber-600 text-white p-8 rounded-lg">
                <Award className="h-12 w-12 mb-4" />
                <h3 className="text-3xl font-bold mb-2">98%</h3>
                <p>Success Rate</p>
              </div>
              <div className="bg-amber-600 text-white p-8 rounded-lg">
                <Users className="h-12 w-12 mb-4" />
                <h3 className="text-3xl font-bold mb-2">15+</h3>
                <p>Expert Attorneys</p>
              </div>
              <div className="bg-slate-900 text-white p-8 rounded-lg">
                <Target className="h-12 w-12 text-amber-500 mb-4" />
                <h3 className="text-3xl font-bold mb-2">1000+</h3>
                <p className="text-slate-300">Cases Won</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-12 text-center">
              Our Mission & Values
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-serif font-bold text-amber-600 mb-4">Our Mission</h3>
                <p className="text-slate-700 leading-relaxed">
                  To provide exceptional legal services that protect our clients' interests and achieve their objectives. We strive to make the legal process transparent, accessible, and as stress-free as possible, while delivering results that exceed expectations.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Integrity',
                    desc: 'We uphold the highest ethical standards in every case and interaction.'
                  },
                  {
                    title: 'Excellence',
                    desc: 'We pursue superior outcomes through diligent preparation and innovative thinking.'
                  },
                  {
                    title: 'Client Focus',
                    desc: 'Your needs and goals are at the center of everything we do.'
                  }
                ].map((value, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                    <p className="text-slate-600">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-12 text-center">
            Our Attorneys
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Jonathan Sterling',
                role: 'Senior Partner',
                specialty: 'Corporate Law',
                bio: '30+ years of experience in corporate law and business transactions. Harvard Law School graduate.'
              },
              {
                name: 'Dr. Emily Rodriguez',
                role: 'Partner',
                specialty: 'Family Law',
                bio: 'Specializes in complex divorce and custody cases. Certified family law specialist with 20 years of experience.'
              },
              {
                name: 'Michael Thompson',
                role: 'Partner',
                specialty: 'Criminal Defense',
                bio: 'Former prosecutor with 25 years of criminal law experience. Known for aggressive defense strategies.'
              },
              {
                name: 'Sarah Chen',
                role: 'Senior Associate',
                specialty: 'Estate Planning',
                bio: 'Expert in wills, trusts, and asset protection. Helps families secure their financial futures.'
              },
              {
                name: 'David Martinez',
                role: 'Associate',
                specialty: 'Personal Injury',
                bio: 'Dedicated to fighting for injury victims. Secured millions in compensation for clients.'
              },
              {
                name: 'Rachel Williams',
                role: 'Associate',
                specialty: 'Employment Law',
                bio: 'Champions workers\' rights in discrimination, harassment, and wrongful termination cases.'
              }
            ].map((attorney, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-slate-700 to-slate-900 h-48 flex items-center justify-center">
                  <Users className="h-24 w-24 text-amber-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-1">
                    {attorney.name}
                  </h3>
                  <p className="text-amber-600 font-medium mb-2">{attorney.role}</p>
                  <p className="text-sm font-semibold text-slate-700 mb-3">{attorney.specialty}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{attorney.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
