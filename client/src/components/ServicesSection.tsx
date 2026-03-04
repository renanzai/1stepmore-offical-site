import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Globe, FileText, Compass, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const serviceKeys = [
  { icon: Globe, key: 'services.item1', featured: true },
  { icon: FileText, key: 'services.item2', featured: false },
  { icon: Compass, key: 'services.item3', featured: false },
];

export default function ServicesSection() {
  const { t } = useTranslation();
  const services = serviceKeys.map(item => ({
    icon: item.icon,
    title: t(`${item.key}.title`),
    description: t(`${item.key}.description`),
    featured: item.featured,
  }));

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('services.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`relative group rounded-xl border transition-all duration-300 ${
                  service.featured
                    ? 'md:col-span-1 md:row-span-2 border-accent/50 bg-gradient-to-br from-card to-card/50 hover:border-accent'
                    : 'border-border/40 bg-background/50 hover:bg-background/80 hover:border-accent/50'
                }`}
              >
                <div className={`p-8 h-full flex flex-col ${service.featured ? 'md:p-10' : ''}`}>
                  {/* Icon */}
                  <div
                    className={`inline-flex p-3 rounded-lg mb-6 transition-colors ${
                      service.featured
                        ? 'bg-accent/20 text-accent'
                        : 'bg-accent/10 group-hover:bg-accent/20 text-accent'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className={`font-semibold mb-3 ${service.featured ? 'text-2xl' : 'text-xl'}`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed flex-1 mb-6">
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  <Link href="/services">
                    <Button
                      variant={service.featured ? 'default' : 'outline'}
                      className={`w-full group/btn ${
                        service.featured ? 'bg-accent hover:bg-accent/90' : 'border-border/50'
                      }`}
                    >
                      {t('nav.services')}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                {/* Decorative line */}
                {service.featured && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
