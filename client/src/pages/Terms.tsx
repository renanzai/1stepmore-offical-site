import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useTranslation } from 'react-i18next';

export default function Terms() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      {/* Header */}
      <section className="py-16 md:py-24 border-b border-border/40">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
                {t('terms.header.title')}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('terms.header.subtitle')}
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              {t('terms.header.lastUpdated')}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Section 1 */}
            <Card className="p-8 rounded-xl border border-border/40 bg-background/50">
              <h2 className="text-3xl font-bold mb-6">{t('terms.section1.title')}</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-4">
                  <span className="text-accent font-bold flex-shrink-0">•</span>
                  <span dangerouslySetInnerHTML={{ __html: t('terms.section1.item1') }} />
                </li>
                <li className="flex gap-4">
                  <span className="text-accent font-bold flex-shrink-0">•</span>
                  <span dangerouslySetInnerHTML={{ __html: t('terms.section1.item2') }} />
                </li>
              </ul>
            </Card>

            {/* Section 2 */}
            <Card className="p-8 rounded-xl border border-border/40 bg-background/50">
              <h2 className="text-3xl font-bold mb-6">{t('terms.section2.title')}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">{t('terms.section2.wordCount.title')}</h3>
                  <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('terms.section2.wordCount.description') }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{t('terms.section2.tax.title')}</h3>
                  <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('terms.section2.tax.description') }} />
                </div>
              </div>
            </Card>

            {/* Section 3 */}
            <Card className="p-8 rounded-xl border border-border/40 bg-background/50">
              <h2 className="text-3xl font-bold mb-6">{t('terms.section3.title')}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">{t('terms.section3.deliveryTime.title')}</h3>
                  <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('terms.section3.deliveryTime.description') }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{t('terms.section3.warranty.title')}</h3>
                  <p className="text-muted-foreground mb-3" dangerouslySetInnerHTML={{ __html: t('terms.section3.warranty.description') }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{t('terms.section3.preferences.title')}</h3>
                  <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('terms.section3.preferences.description') }} />
                </div>
              </div>
            </Card>

            {/* Section 4 */}
            <Card className="p-8 rounded-xl border border-border/40 bg-background/50">
              <h2 className="text-3xl font-bold mb-6">{t('terms.section4.title')}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">{t('terms.section4.confidentiality.title')}</h3>
                  <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('terms.section4.confidentiality.description') }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{t('terms.section4.copyright.title')}</h3>
                  <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('terms.section4.copyright.description') }} />
                </div>
              </div>
            </Card>

            {/* Section 5 */}
            <Card className="p-8 rounded-xl border border-border/40 bg-background/50">
              <h2 className="text-3xl font-bold mb-6">{t('terms.section5.title')}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">{t('terms.section5.sourceResponsibility.title')}</h3>
                  <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('terms.section5.sourceResponsibility.description') }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{t('terms.section5.liabilityCap.title')}</h3>
                  <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('terms.section5.liabilityCap.description') }} />
                </div>
              </div>
            </Card>

            {/* Section 6 */}
            <Card className="p-8 rounded-xl border border-border/40 bg-background/50">
              <h2 className="text-3xl font-bold mb-6">{t('terms.section6.title')}</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-4">
                  <span className="text-accent font-bold flex-shrink-0">•</span>
                  <span dangerouslySetInnerHTML={{ __html: t('terms.section6.item1') }} />
                </li>
                <li className="flex gap-4">
                  <span className="text-accent font-bold flex-shrink-0">•</span>
                  <span dangerouslySetInnerHTML={{ __html: t('terms.section6.item2') }} />
                </li>
              </ul>
            </Card>

            {/* Important Notes */}
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">{t('terms.importantNotes.title')}</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: t('terms.importantNotes.item1') }} />
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: t('terms.importantNotes.item2') }} />
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: t('terms.importantNotes.item3') }} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 border-t border-border/40 bg-card/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('terms.cta.title')}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('terms.cta.description')}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-accent hover:bg-accent/90 text-foreground font-semibold transition-colors"
            >
              {t('terms.cta.button')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
