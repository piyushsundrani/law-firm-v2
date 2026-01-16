import { FileText, Download, BookOpen, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resources = [
    {
      category: 'corporate',
      title: 'Business Formation Guide',
      description: 'Complete guide to choosing the right business structure',
      type: 'PDF Guide'
    },
    {
      category: 'corporate',
      title: 'Contract Checklist',
      description: 'Essential elements every business contract should include',
      type: 'Checklist'
    },
    {
      category: 'family',
      title: 'Divorce Process Overview',
      description: 'Step-by-step guide to the divorce process in your state',
      type: 'PDF Guide'
    },
    {
      category: 'family',
      title: 'Child Custody Factors',
      description: 'Understanding what courts consider in custody decisions',
      type: 'Article'
    },
    {
      category: 'criminal',
      title: 'Your Rights When Arrested',
      description: 'Know your constitutional rights during arrest and questioning',
      type: 'PDF Guide'
    },
    {
      category: 'criminal',
      title: 'DUI Defense Strategies',
      description: 'Common defenses and what to expect in DUI cases',
      type: 'Article'
    },
    {
      category: 'estate',
      title: 'Estate Planning Basics',
      description: 'Introduction to wills, trusts, and estate planning',
      type: 'PDF Guide'
    },
    {
      category: 'estate',
      title: 'Power of Attorney Explained',
      description: 'Understanding different types of power of attorney',
      type: 'Article'
    }
  ];

  const filteredResources = selectedCategory === 'all'
    ? resources
    : resources.filter(r => r.category === selectedCategory);

  const handleGeneratePDF = async (title: string) => {
    alert(`Generating PDF: ${title}\n\nThis will be integrated with the chatbot for dynamic document generation.`);
  };

  return (
    <div className="animate-fadeIn">
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Legal Resources</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Educational materials and guides to help you understand your legal matters
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-lg mb-12 flex items-start space-x-4">
            <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">Legal Disclaimer</h3>
              <p className="text-amber-800 leading-relaxed">
                The information provided in these resources is for educational purposes only and does not constitute legal advice. Every case is unique, and laws vary by jurisdiction. For advice specific to your situation, please consult with one of our attorneys.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                All Resources
              </button>
              <button
                onClick={() => setSelectedCategory('corporate')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === 'corporate'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                Corporate Law
              </button>
              <button
                onClick={() => setSelectedCategory('family')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === 'family'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                Family Law
              </button>
              <button
                onClick={() => setSelectedCategory('criminal')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === 'criminal'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                Criminal Defense
              </button>
              <button
                onClick={() => setSelectedCategory('estate')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === 'estate'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                Estate Planning
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden group"
              >
                <div className="bg-gradient-to-br from-slate-700 to-slate-900 p-6 text-white">
                  <div className="flex items-center justify-between mb-3">
                    <BookOpen className="h-10 w-10 text-amber-500" />
                    <span className="text-xs bg-amber-600 px-3 py-1 rounded-full">
                      {resource.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{resource.description}</p>
                  <button
                    onClick={() => handleGeneratePDF(resource.title)}
                    className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-medium"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <FileText className="h-16 w-16 text-amber-600 mx-auto mb-6" />
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">
                Legal Insights Blog
              </h2>
              <p className="text-xl text-slate-600">
                Stay informed with articles from our attorneys
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Recent Changes in Corporate Tax Law: What Businesses Need to Know',
                  date: 'December 15, 2024',
                  author: 'Jonathan Sterling',
                  excerpt: 'The latest tax reform legislation introduces significant changes for corporations...'
                },
                {
                  title: 'Understanding Custody Modifications: When Can You Request Changes?',
                  date: 'December 10, 2024',
                  author: 'Dr. Emily Rodriguez',
                  excerpt: 'Child custody arrangements are not set in stone. Learn when and how to request modifications...'
                },
                {
                  title: 'Protecting Your Assets: Advanced Estate Planning Strategies',
                  date: 'December 5, 2024',
                  author: 'Sarah Chen',
                  excerpt: 'Beyond basic wills and trusts, explore sophisticated strategies for asset protection...'
                }
              ].map((article, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-lg hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors cursor-pointer">
                        {article.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        By {article.author} • {article.date}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-700 mb-3">{article.excerpt}</p>
                  <button className="text-amber-600 hover:text-amber-700 font-medium text-sm">
                    Read More →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Have Questions About Your Case?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our AI-powered legal assistant can help answer your questions and guide you to the right resources.
          </p>
          <button className="inline-block bg-white text-amber-700 hover:bg-slate-100 px-8 py-4 rounded-md font-semibold transition-all transform hover:scale-105 shadow-lg">
            Chat with Legal Assistant
          </button>
        </div>
      </section>
    </div>
  );
}
