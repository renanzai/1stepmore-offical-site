import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Globe, FileText, Compass, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 border-b border-border/40">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('nav.services')}</h1>
              <p className="text-xl text-muted-foreground">
                {t('services.pageSubtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Service 1: Multilingual Content Production */}
        <section className="py-20 md:py-32 border-b border-border/40">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-8 h-8 text-accent" />
                  <h2 className="text-4xl font-bold">{t('services.item1.pageTitle')}</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {t('services.item1.description1')}
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {t('services.item1.description2')}
                </p>

                {/* Capabilities */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">{t('services.item1.capabilities.title')}</h3>
                  {
                    [1, 2, 3, 4].map((index) => (
                      <div key={index} className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{t(`services.item1.capabilities.item${index}`)}</span>
                      </div>
                    ))
                  }
                </div>
              </div>

              {/* Workflow */}
              <div className="bg-card/50 border border-border/40 rounded-xl p-8">
                <h3 className="font-semibold text-lg mb-6">{t('services.item1.workflow.title')}</h3>
                <div className="space-y-6">
                  {
                    [1, 2, 3, 4, 5].map((step) => (
                      <div key={step} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-semibold text-sm">
                          {step}
                        </div>
                        <div>
                          <p className="font-semibold mb-1">{t(`services.item1.workflow.step${step}.title`)}</p>
                          <p className="text-sm text-muted-foreground">{t(`services.item1.workflow.step${step}.description`)}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service 2: Professional Localization */}
        <section className="py-20 md:py-32 border-b border-border/40 bg-card/30">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Content first on mobile */}
              <div className="md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-8 h-8 text-accent" />
                  <h2 className="text-4xl font-bold">{t('services.item2.pageTitle')}</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {t('services.item2.description')}
                </p>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">{t('services.item2.scope.title')}</h3>
                  {
                    [1, 2, 3, 4].map((index) => (
                      <div key={index} className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{t(`services.item2.scope.item${index}`)}</span>
                      </div>
                    ))
                  }
                </div>
              </div>

              {/* Comparison Table */}
              <div className="md:order-1">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border/40">
                        <th className="text-left py-3 px-4 font-semibold">{t('services.item2.comparison.title')}</th>
                        <th className="text-left py-3 px-4 font-semibold">{t('services.item2.comparison.traditional')}</th>
                        <th className="text-left py-3 px-4 font-semibold text-accent">{t('services.item2.comparison.production')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        [1, 2, 3, 4].map((rowIndex) => (
                          <tr key={rowIndex} className="border-b border-border/40">
                            <td className="py-3 px-4 font-medium">{t(`services.item2.comparison.row${rowIndex}.item`)}</td>
                            <td className="py-3 px-4 text-muted-foreground">{t(`services.item2.comparison.row${rowIndex}.traditional`)}</td>
                            <td className="py-3 px-4 text-accent">{t(`services.item2.comparison.row${rowIndex}.production`)}</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service 3: Internationalization Consulting */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Compass className="w-8 h-8 text-accent" />
                  <h2 className="text-4xl font-bold">{t('services.item3.pageTitle')}</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {t('services.item3.description')}
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">{t('services.item3.consulting.title1')}</h3>
                    <p className="text-muted-foreground">{t('services.item3.consulting.description1')}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t('services.item3.consulting.title2')}</h3>
                    <p className="text-muted-foreground">{t('services.item3.consulting.description2')}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t('services.item3.consulting.title3')}</h3>
                    <p className="text-muted-foreground">{t('services.item3.consulting.description3')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-8">
                <h3 className="font-semibold text-lg mb-6">{t('services.item3.why.title')}</h3>
                <ul className="space-y-4">
                  {
                    [1, 2, 3, 4].map((index) => (
                      <li key={index} className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{t(`services.item3.why.item${index}`)}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
