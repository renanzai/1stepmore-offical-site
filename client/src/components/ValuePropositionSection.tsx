import { Zap, Users, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const valueKeys = [
  { icon: Zap, key: 'valueProposition.item1' },
  { icon: Users, key: 'valueProposition.item2' },
  { icon: Rocket, key: 'valueProposition.item3' },
];

export default function ValuePropositionSection() {
  const { t } = useTranslation();
  const values = valueKeys.map(item => ({
    icon: item.icon,
    title: t(`${item.key}.title`),
    description: t(`${item.key}.description`),
  }));

  return (
    <section className="py-20 md:py-32 bg-card/30 border-y border-border/40">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('valueProposition.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('valueProposition.subtitle')}
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-xl border border-border/40 bg-background/50 hover:bg-background/80 hover:border-accent/50 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 w-0 group-hover:w-full transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
