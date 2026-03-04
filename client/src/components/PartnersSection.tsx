import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/contexts/ThemeContext';

// Partner logos with real images
const partners = [
  { name: 'OPC Global', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663277702582/KgPGxcZYtgtWKQPGAYK8tN/opc-logo_ae034d42.png', isImage: true },
  { name: 'TABLE AI', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663277702582/KgPGxcZYtgtWKQPGAYK8tN/table-ai-logo_467f1f04_2e972821.png', isImage: true },
  { name: 'Nibiru', logo: 'https://img.cloud.1919game.net/resource/img/public/logo.png', isImage: true },
];

export default function PartnersSection() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <section className="py-20 md:py-32 bg-card/30 border-y border-border/40">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('partners.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('partners.subtitle')}
          </p>
        </div>

        {/* Partners Grid */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 mb-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-xl border border-border/40 bg-background/50 hover:bg-background/80 hover:border-accent/50 transition-all duration-300 flex items-center justify-center min-h-[160px] w-full md:w-[200px] flex-shrink-0"
            >
              <div className="text-center">
                {partner.isImage ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 mb-3 group-hover:scale-110 transition-transform object-contain"
                    style={{
                        // 为OPC Global在暗色模式下添加反白效果，为Nibiru在亮色模式下添加反白效果
                        filter: (partner.name === 'OPC Global' && theme === 'dark') || (partner.name === 'Nibiru' && theme === 'light') ? 'invert(1)' : 'none'
                      }}
                  />
                ) : (
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{partner.logo}</div>
                )}
                <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {partner.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link href="/ecosystem">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              {t('partners.viewPartners')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
