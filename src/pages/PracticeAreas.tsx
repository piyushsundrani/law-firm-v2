import { Building2, Heart, Shield, FileText, Briefcase, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface PracticeArea {
  icon: typeof Building2;
  title: string;
  description: string;
  details: string[];
  faqs: FAQ[];
  color: string;
}

export default function PracticeAreas() {
  const [expandedFAQ, setExpandedFAQ] = useState<{ [key: string]: number | null }>({});

  const practiceAreas: PracticeArea[] = [
    {
      icon: Building2,
      title: 'Corporate Law',
      description: 'Comprehensive legal services for businesses of all sizes',
      color: 'from-blue-500 to-blue-600',
      details: [
        'Business Formation & Structure',
        'Contract Negotiation & Drafting',
        'Mergers & Acquisitions',
        'Corporate Governance',
        'Commercial Transactions',
        'Regulatory Compliance'
      ],
      faqs: [
        {
          question: 'What type of business entity should I form?',
          answer: 'The choice depends on factors like liability protection, tax implications, ownership structure, and future growth plans. We can help you evaluate LLC, S-Corp, C-Corp, and partnership options.'
        },
        {
          question: 'How long does a business formation take?',
          answer: 'Typically 2-4 weeks, depending on the complexity and state requirements. We handle all filings and documentation to expedite the process.'
        }
      ]
    },
    {
      icon: Heart,
      title: 'Family Law',
      description: 'Compassionate guidance through sensitive family matters',
      color: 'from-rose-500 to-rose-600',
      details: [
        'Divorce & Legal Separation',
        'Child Custody & Support',
        'Spousal Support/Alimony',
        'Adoption Services',
        'Prenuptial Agreements',
        'Domestic Violence Protection'
      ],
      faqs: [
        {
          question: 'How is child custody determined?',
          answer: 'Courts prioritize the best interests of the child, considering factors like parental fitness, child\'s preferences (age-dependent), stability, and each parent\'s ability to provide care.'
        },
        {
          question: 'What is the divorce process timeline?',
          answer: 'Uncontested divorces can take 3-6 months, while contested divorces may take 12-18 months or longer. Timeline varies by complexity and state requirements.'
        }
      ]
    },
    {
      icon: Shield,
      title: 'Criminal Defense',
      description: 'Aggressive defense to protect your rights and freedom',
      color: 'from-red-600 to-red-700',
      details: [
        'DUI/DWI Defense',
        'Drug Crime Defense',
        'White Collar Crimes',
        'Assault & Violent Crimes',
        'Theft & Property Crimes',
        'Federal Criminal Defense'
      ],
      faqs: [
        {
          question: 'Should I talk to police without a lawyer?',
          answer: 'No. You have the right to remain silent and should exercise it. Anything you say can be used against you. Always consult with an attorney before speaking to law enforcement.'
        },
        {
          question: 'What happens at an arraignment?',
          answer: 'You\'ll be formally charged, informed of your rights, and asked to enter a plea. Bail may be set. Having an attorney present is crucial for this initial court appearance.'
        }
      ]
    },
    {
      icon: FileText,
      title: 'Estate Planning',
      description: 'Protect your legacy and secure your family\'s future',
      color: 'from-emerald-500 to-emerald-600',
      details: [
        'Wills & Trusts',
        'Probate Administration',
        'Powers of Attorney',
        'Healthcare Directives',
        'Asset Protection',
        'Estate Tax Planning'
      ],
      faqs: [
        {
          question: 'Do I need a will or a trust?',
          answer: 'A will is essential for everyone. Trusts offer additional benefits like probate avoidance and privacy. We\'ll assess your assets, family situation, and goals to recommend the best approach.'
        },
        {
          question: 'What happens if I die without a will?',
          answer: 'Your assets will be distributed according to state intestacy laws, which may not align with your wishes. The process is often slower and more expensive for your family.'
        }
      ]
    },
    {
      icon: Briefcase,
      title: 'Personal Injury',
      description: 'Fighting for compensation after accidents and injuries',
      color: 'from-orange-500 to-orange-600',
      details: [
        'Car & Truck Accidents',
        'Medical Malpractice',
        'Slip & Fall Cases',
        'Product Liability',
        'Wrongful Death',
        'Workers\' Compensation'
      ],
      faqs: [
        {
          question: 'How much is my case worth?',
          answer: 'Case value depends on injury severity, medical costs, lost wages, pain and suffering, and liability. We provide a free case evaluation to estimate potential compensation.'
        },
        {
          question: 'Do I have to go to court?',
          answer: 'Most personal injury cases settle before trial. However, we\'re fully prepared to litigate if necessary to secure fair compensation.'
        }
      ]
    },
    {
      icon: Users,
      title: 'Employment Law',
      description: 'Protecting employee rights in the workplace',
      color: 'from-purple-500 to-purple-600',
      details: [
        'Wrongful Termination',
        'Discrimination Cases',
        'Sexual Harassment',
        'Wage & Hour Disputes',
        'Employment Contracts',
        'Whistleblower Protection'
      ],
      faqs: [
        {
          question: 'What constitutes wrongful termination?',
          answer: 'Termination for illegal reasons like discrimination, retaliation for whistleblowing, violation of employment contract, or firing that violates public policy.'
        },
        {
          question: 'How long do I have to file a discrimination claim?',
          answer: 'Typically 180-300 days from the discriminatory act, depending on jurisdiction. It\'s crucial to consult an attorney promptly to preserve your rights.'
        }
      ]
    }
  ];

  const toggleFAQ = (areaTitle: string, faqIndex: number) => {
    setExpandedFAQ(prev => ({
      ...prev,
      [areaTitle]: prev[areaTitle] === faqIndex ? null : faqIndex
    }));
  };

  return (
    <div className="animate-fadeIn">
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Practice Areas</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Comprehensive legal services across multiple specializations
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {practiceAreas.map((area, idx) => (
              <div
                key={idx}
                id={area.title.toLowerCase().replace(/\s+/g, '-')}
                className="bg-white rounded-lg shadow-xl overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${area.color} p-8 text-white`}>
                  <div className="flex items-center space-x-4">
                    <area.icon className="h-12 w-12" />
                    <div>
                      <h2 className="text-3xl font-serif font-bold">{area.title}</h2>
                      <p className="text-lg opacity-90 mt-1">{area.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                    Our Services
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {area.details.map((detail, detailIdx) => (
                      <div key={detailIdx} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                        <p className="text-slate-700">{detail}</p>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {area.faqs.map((faq, faqIdx) => (
                      <div key={faqIdx} className="border border-slate-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleFAQ(area.title, faqIdx)}
                          className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                        >
                          <span className="font-semibold text-slate-900">{faq.question}</span>
                          {expandedFAQ[area.title] === faqIdx ? (
                            <ChevronUp className="h-5 w-5 text-amber-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-amber-600 flex-shrink-0" />
                          )}
                        </button>
                        {expandedFAQ[area.title] === faqIdx && (
                          <div className="p-4 bg-white">
                            <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Need Legal Assistance?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation with one of our experienced attorneys.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-amber-700 hover:bg-slate-100 px-8 py-4 rounded-md font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Schedule Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
