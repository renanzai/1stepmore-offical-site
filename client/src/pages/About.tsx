import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const milestoneKeys = [
  { year: '2023', key: 'about.milestone1' },
  { year: '2024', key: 'about.milestone2' },
  { year: '2024', key: 'about.milestone3' },
  { year: '2025', key: 'about.milestone4' },
];

export default function About() {
  const { t } = useTranslation();
  const milestones = milestoneKeys.map(item => ({
    year: item.year,
    title: t(`${item.key}.title`),
    description: t(`${item.key}.description`),
  }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 border-b border-border/40">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('nav.about')}</h1>
              <p className="text-xl text-muted-foreground">
                {t('about.hero')}
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 md:py-32 bg-card/30 border-b border-border/40">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Mission */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  {t('about.mission.title')}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.mission.description')}
                </p>
              </div>

              {/* Vision */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  {t('about.vision.title')}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.vision.description')}
                </p>
              </div>

              {/* Values */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  {t('about.values.title')}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.values.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 md:py-32 border-b border-border/40">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">{t('about.team.title')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t('about.team.subtitle')}
              </p>
              <div className="bg-card/50 border border-border/40 rounded-xl p-8">
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.team.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 md:py-32 bg-card/30">
          <div className="container">
            <h2 className="text-4xl font-bold mb-16 text-center">{t('about.timeline.title')}</h2>

            <div className="max-w-2xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pb-12 last:pb-0">
                  {/* Timeline line */}
                  {index !== milestones.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-12 bg-gradient-to-b from-accent to-accent/0" />
                  )}

                  <div className="flex gap-6">
                    {/* Timeline dot */}
                    <div className="relative flex-shrink-0 w-16 h-16 flex items-center justify-center">
                      <div className="absolute inset-0 bg-accent/10 rounded-full" />
                      <div className="relative w-4 h-4 bg-accent rounded-full" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <p className="text-sm font-semibold text-accent mb-1">{milestone.year}</p>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
