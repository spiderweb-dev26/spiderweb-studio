import Hero from '@/components/Hero';
import BentoGrid from '@/components/BentoGrid';
import { philosophy, socialProof } from '@/constants/index';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <Hero />

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Our Philosophy
          </h2>
          <div className="prose lg:prose-xl mx-auto text-gray-700 dark:text-gray-300">
            <p>{philosophy.description}</p>
          </div>
        </div>
      </section>

      {/* Capabilities/Bento Grid */}
      <BentoGrid />

      {/* Social Proof Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Our Impact
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {socialProof.caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {study.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{study.challenge}</p>
                <p className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                  Solution:
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{study.solution}</p>
                <p className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                  Results:
                </p>
                <p className="text-gray-600 dark:text-gray-300 font-mono bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                  {study.results}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}