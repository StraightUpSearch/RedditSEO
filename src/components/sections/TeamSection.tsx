import { Linkedin } from "lucide-react";

export default function TeamSection() {
  return (
    <section className="bg-bg-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-dark mb-4">
            Who Is Behind The Reddit SEO
          </h2>
          <p className="text-gray-600">
            Not an anonymous agency. Not a faceless SaaS tool. A real team with
            real experience building brands on Reddit.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-24 h-24 bg-reddit-orange/10 rounded-full flex items-center justify-center shrink-0">
                <span className="text-reddit-orange font-bold text-3xl">JI</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-dark mb-1 text-center sm:text-left">
                  Jamie Irwin
                </h3>
                <p className="text-reddit-orange font-medium text-sm mb-3 text-center sm:text-left">
                  Founder, Straight Up Search
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Jamie has spent over a decade in SEO and digital marketing,
                  working with DTC brands, SaaS companies, and agencies across
                  the US, UK, and Australia. After seeing firsthand how Reddit
                  content was shaping Google results and AI answers, he built
                  The Reddit SEO to give brands a transparent, productized way
                  to tap into that channel.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Every campaign is overseen by Jamie and his team at Straight
                  Up Search, ensuring quality control, community compliance,
                  and measurable results.
                </p>
                <a
                  href="https://www.linkedin.com/company/straight-up-search/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-reddit-orange transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-dark mb-1">10+</div>
            <div className="text-sm text-gray-500">Years in SEO</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-dark mb-1">50+</div>
            <div className="text-sm text-gray-500">Brands Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-dark mb-1">2,000+</div>
            <div className="text-sm text-gray-500">Reddit Placements</div>
          </div>
        </div>
      </div>
    </section>
  );
}
