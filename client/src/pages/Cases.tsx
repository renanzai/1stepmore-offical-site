import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const caseKeys = [
  { key: 'cases.case1' },
  { key: 'cases.case2' },
  { key: 'cases.case3' },
];

export default function Cases() {
  const { t } = useTranslation();
  const cases = caseKeys.map(item => ({
    title: t(`${item.key}.title`),
    tags: t(`${item.key}.tags`, { returnObjects: true }),
    challenge: t(`${item.key}.challenge`),
    solution: t(`${item.key}.solution`),
    result: t(`${item.key}.result`),
    metrics: t(`${item.key}.metrics`, { returnObjects: true }),
  }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 border-b border-border/40">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('nav.cases')}</h1>
              <p className="text-xl text-muted-foreground">
                {t('cases.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Cases Grid */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="space-y-12">
              {cases.map((caseItem, index) => (
                <div
                  key={index}
                  className="group p-8 md:p-12 rounded-xl border border-border/40 bg-card/30 hover:bg-card/50 hover:border-accent/50 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {Array.isArray(caseItem.tags) && caseItem.tags.map((tag: any, tagIndex: number) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">{caseItem.title}</h3>
                  </div>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Challenge */}
                    <div>
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                        {t('cases.challenge')}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">{caseItem.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                        {t('cases.solution')}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">{caseItem.solution}</p>
                    </div>

                    {/* Result */}
                    <div>
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-accent mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        {t('cases.result')}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">{caseItem.result}</p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="border-t border-border/40 pt-8">
                    <div className="grid grid-cols-3 gap-6">
                      {Array.isArray(caseItem.metrics) && caseItem.metrics.map((metric: any, metricIndex: number) => (
                        <div key={metricIndex}>
                          <p className="text-2xl md:text-3xl font-bold text-accent mb-1">{metric.value}</p>
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">{metric.label}</p>
                        </div>
                      ))}
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
