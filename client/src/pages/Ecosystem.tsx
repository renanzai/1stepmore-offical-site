import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Users, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/contexts/ThemeContext';

const partnerTypeKeys = [
  { icon: Zap, key: 'ecosystem.partnerType1' },
  { icon: Users, key: 'ecosystem.partnerType2' },
  { icon: Globe, key: 'ecosystem.partnerType3' },
];

export default function Ecosystem() {
  const { t } = useTranslation();
  const partnerTypes = partnerTypeKeys.map(item => ({
    icon: item.icon,
    title: t(`${item.key}.title`),
    description: t(`${item.key}.description`),
  }));
  
  const benefits = [
    t('ecosystem.benefits.item1'),
    t('ecosystem.benefits.item2'),
    t('ecosystem.benefits.item3'),
    t('ecosystem.benefits.item4'),
  ];

  const { theme } = useTheme();

  const partners = [
    {
      name: 'OPC Global',
      description: t('ecosystem.partners.item1.description'),
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663277702582/KgPGxcZYtgtWKQPGAYK8tN/opc-logo_ae034d42.png',
      isImage: true,
    },
    {
      name: 'TABLE AI (A2A Institute)',
      description: t('ecosystem.partners.item2.description'),
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663277702582/KgPGxcZYtgtWKQPGAYK8tN/table-ai-logo_467f1f04_2e972821.png',
      isImage: true,
    },
    {
      name: 'Nibiru 睿悦科技',
      description: t('ecosystem.partners.item3.description'),
      logo: 'https://img.cloud.1919game.net/resource/img/public/logo.png',
      isImage: true,
    },
  ];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 border-b border-border/40">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('ecosystem.pageTitle')}</h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t('ecosystem.pageDescription')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('ecosystem.pageSubdescription')}
              </p>
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="py-20 md:py-32 bg-card/30 border-b border-border/40">
          <div className="container">
            <h2 className="text-4xl font-bold mb-16 text-center">{t('ecosystem.partnerProgram.title')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnerTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <div
                    key={index}
                    className="p-8 rounded-xl border border-border/40 bg-background/50 hover:bg-background/80 hover:border-accent/50 transition-all duration-300"
                  >
                    <div className="inline-flex p-3 rounded-lg bg-accent/10 mb-6">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                    <p className="text-muted-foreground">{type.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20 md:py-32 border-b border-border/40">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">{t('ecosystem.benefits.title')}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4 p-6 rounded-lg bg-card/50 border border-border/40">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-accent hover:bg-accent/90">
                    {t('ecosystem.benefits.cta')}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Partners */}
        <section className="py-20 md:py-32 bg-card/30">
          <div className="container">
            <h2 className="text-4xl font-bold mb-16 text-center">{t('ecosystem.partners.title')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-xl border border-border/40 bg-background/50 hover:bg-background/80 hover:border-accent/50 transition-all duration-300"
                >
                  {partner.isImage ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-20 mb-6 group-hover:scale-110 transition-transform object-contain"
                      style={{
                        // 为OPC Global在暗色模式下添加反白效果，为Nibiru在亮色模式下添加反白效果
                        filter: (partner.name === 'OPC Global' && theme === 'dark') || (partner.name === 'Nibiru 睿悦科技' && theme === 'light') ? 'invert(1)' : 'none'
                      }}
                    />
                  ) : (
                    <div className="text-6xl mb-6">{partner.logo}</div>
                  )}
                  <h3 className="text-2xl font-bold mb-3">{partner.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{partner.description}</p>
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
