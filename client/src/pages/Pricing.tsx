import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Pricing() {
  const { t } = useTranslation();
  const subscriptionPlans = [
    {
      name: t('pricing.plans.personal.name'),
      price: '99',
      period: t('pricing.plans.period.month'),
      description: t('pricing.plans.personal.description'),
      features: [
        t('pricing.plans.personal.feature1'),
        t('pricing.plans.personal.feature2'),
        t('pricing.plans.personal.feature3'),
        t('pricing.plans.personal.feature4'),
        t('pricing.plans.personal.feature5'),
      ],
      cta: t('pricing.plans.personal.cta'),
      highlighted: false,
    },
    {
      name: t('pricing.plans.enterprise.name'),
      price: '999',
      period: t('pricing.plans.period.year'),
      description: t('pricing.plans.enterprise.description'),
      features: [
        t('pricing.plans.enterprise.feature1'),
        t('pricing.plans.enterprise.feature2'),
        t('pricing.plans.enterprise.feature3'),
        t('pricing.plans.enterprise.feature4'),
        t('pricing.plans.enterprise.feature5'),
        t('pricing.plans.enterprise.feature6'),
      ],
      cta: t('pricing.plans.enterprise.cta'),
      highlighted: true,
    },
  ];

  const serviceLevel = [
    {
      level: t('pricing.serviceLevel.l1.name'),
      price: '60',
      description: t('pricing.serviceLevel.l1.description'),
      scenarios: [
        t('pricing.serviceLevel.l1.scenario1'),
        t('pricing.serviceLevel.l1.scenario2'),
        t('pricing.serviceLevel.l1.scenario3'),
        t('pricing.serviceLevel.l1.scenario4'),
      ],
      standard: t('pricing.serviceLevel.l1.standard'),
      competitive: t('pricing.serviceLevel.l1.competitive'),
    },
    {
      level: t('pricing.serviceLevel.l2.name'),
      price: '140',
      description: t('pricing.serviceLevel.l2.description'),
      scenarios: [
        t('pricing.serviceLevel.l2.scenario1'),
        t('pricing.serviceLevel.l2.scenario2'),
        t('pricing.serviceLevel.l2.scenario3'),
        t('pricing.serviceLevel.l2.scenario4'),
      ],
      standard: t('pricing.serviceLevel.l2.standard'),
      competitive: t('pricing.serviceLevel.l2.competitive'),
    },
    {
      level: t('pricing.serviceLevel.l3.name'),
      price: '250',
      description: t('pricing.serviceLevel.l3.description'),
      scenarios: [
        t('pricing.serviceLevel.l3.scenario1'),
        t('pricing.serviceLevel.l3.scenario2'),
        t('pricing.serviceLevel.l3.scenario3'),
        t('pricing.serviceLevel.l3.scenario4'),
      ],
      standard: t('pricing.serviceLevel.l3.standard'),
      competitive: t('pricing.serviceLevel.l3.competitive'),
    },
  ];

  const additionalServices = [
    {
      category: t('pricing.additionalServices.category1'),
      services: [
        { name: t('pricing.additionalServices.service1.name'), price: '15', unit: t('pricing.additionalServices.service1.unit'), desc: t('pricing.additionalServices.service1.desc') },
        { name: t('pricing.additionalServices.service2.name'), price: '30', unit: t('pricing.additionalServices.service2.unit'), desc: t('pricing.additionalServices.service2.desc') },
        { name: t('pricing.additionalServices.service3.name'), price: '45', unit: t('pricing.additionalServices.service3.unit'), desc: t('pricing.additionalServices.service3.desc') },
      ],
    },
    {
      category: t('pricing.additionalServices.category2'),
      services: [
        { name: t('pricing.additionalServices.service4.name'), price: '120', unit: t('pricing.additionalServices.service4.unit'), desc: t('pricing.additionalServices.service4.desc') },
        { name: t('pricing.additionalServices.service5.name'), price: '100', unit: t('pricing.additionalServices.service5.unit'), desc: t('pricing.additionalServices.service5.desc') },
        { name: t('pricing.additionalServices.service6.name'), price: '250', unit: t('pricing.additionalServices.service6.unit'), desc: t('pricing.additionalServices.service6.desc') },
      ],
    },
    {
      category: t('pricing.additionalServices.category3'),
      services: [
        { name: t('pricing.additionalServices.service7.name'), price: '400', unit: t('pricing.additionalServices.service7.unit'), desc: t('pricing.additionalServices.service7.desc') },
        { name: t('pricing.additionalServices.service8.name'), price: '200', unit: t('pricing.additionalServices.service8.unit'), desc: t('pricing.additionalServices.service8.desc') },
        { name: t('pricing.additionalServices.service9.name'), price: '30', unit: t('pricing.additionalServices.service9.unit'), desc: t('pricing.additionalServices.service9.desc') },
      ],
    },
  ];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main>
      {/* Header */}
      <section className="py-16 md:py-24 border-b border-border/40">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
                {t('pricing.header.title')}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('pricing.header.description')}
            </p>
            <p className="text-lg text-accent font-semibold">
              {t('pricing.header.highlight')}
            </p>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">{t('pricing.subscriptionPlans.title')}</h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            {t('pricing.subscriptionPlans.description')}
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {subscriptionPlans.map((plan, idx) => (
              <Card
                key={idx}
                className={`p-8 rounded-2xl border ${
                  plan.highlighted
                    ? 'border-accent/50 bg-accent/5 ring-1 ring-accent/20'
                    : 'border-border/40 bg-background/50'
                } hover:border-accent/50 transition-all duration-300`}
              >
                {plan.highlighted && (
                  <div className="mb-4 inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-semibold">
                    {t('pricing.plans.recommended')}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <div className="mb-8">
                  <span className="text-5xl font-bold">¥{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <Button
                    size="lg"
                    className={`w-full ${
                      plan.highlighted
                        ? 'bg-accent hover:bg-accent/90'
                        : 'bg-foreground/10 hover:bg-foreground/20 text-foreground'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl bg-card/30 border border-border/40 max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground">
              <strong>{t('pricing.notes.label')}</strong> {t('pricing.notes.subscription')}
            </p>
          </div>
        </div>
      </section>

      {/* Service Levels */}
      <section className="py-20 md:py-32 bg-card/30 border-y border-border/40">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">{t('pricing.serviceLevels.title')}</h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            {t('pricing.serviceLevels.description')}
          </p>

          <div className="space-y-6">
            {serviceLevel.map((level, idx) => (
              <Card
                key={idx}
                className="p-8 rounded-xl border border-border/40 bg-background/50 hover:border-accent/50 transition-all duration-300"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{level.level}</h3>
                    <p className="text-muted-foreground mb-4">{level.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-accent">¥{level.price}</span>
                      <span className="text-muted-foreground">/千字</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-sm">{t('pricing.serviceLevel.scenarios.title')}</h4>
                    <ul className="space-y-2">
                      {level.scenarios.map((scenario, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                          {scenario}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-sm">{t('pricing.serviceLevel.standard.title')}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{level.standard}</p>
                    <p className="text-sm text-accent/80 font-medium">{level.competitive}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl bg-card/30 border border-border/40 max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground">
              <strong>{t('pricing.notes.floating.label')}</strong> {t('pricing.notes.floating.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">{t('pricing.additionalServices.title')}</h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            {t('pricing.additionalServices.description')}
          </p>

          <div className="space-y-12">
            {additionalServices.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {category.services.map((service, i) => (
                    <Card
                      key={i}
                      className="p-6 rounded-xl border border-border/40 bg-background/50 hover:border-accent/50 transition-all duration-300"
                    >
                      <h4 className="font-bold mb-2">{service.name}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
                      <div className="flex items-baseline gap-2 text-accent font-semibold">
                        <span className="text-2xl">¥{service.price}</span>
                        <span className="text-sm">/{service.unit}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-card/30 border-y border-border/40">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">{t('pricing.whyChooseUs.title')}</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 rounded-xl border border-border/40 bg-background/50">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">{t('pricing.whyChooseUs.reason1.title')}</h3>
              <p className="text-muted-foreground">
                {t('pricing.whyChooseUs.reason1.description')}
              </p>
            </Card>

            <Card className="p-8 rounded-xl border border-border/40 bg-background/50">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">{t('pricing.whyChooseUs.reason2.title')}</h3>
              <p className="text-muted-foreground">
                {t('pricing.whyChooseUs.reason2.description')}
              </p>
            </Card>

            <Card className="p-8 rounded-xl border border-border/40 bg-background/50">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3">{t('pricing.whyChooseUs.reason3.title')}</h3>
              <p className="text-muted-foreground">
                {t('pricing.whyChooseUs.reason3.description')}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Adjustments & Coefficients */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">{t('pricing.adjustments.title')}</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 rounded-xl border border-border/40 bg-background/50">
              <h3 className="text-2xl font-bold mb-6">{t('pricing.adjustments.language.title')}</h3>
              <p className="text-muted-foreground mb-6">
                {t('pricing.adjustments.language.description')}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center justify-between p-3 rounded-lg bg-card/30">
                  <span>{t('pricing.adjustments.language.tier1')}</span>
                  <span className="font-bold text-accent">{t('pricing.adjustments.language.tier1.coefficient')}</span>
                </li>
                <li className="flex items-center justify-between p-3 rounded-lg bg-card/30">
                  <span>{t('pricing.adjustments.language.tier2')}</span>
                  <span className="font-bold text-accent">{t('pricing.adjustments.language.tier2.coefficient')}</span>
                </li>
                <li className="flex items-center justify-between p-3 rounded-lg bg-card/30">
                  <span>{t('pricing.adjustments.language.tier3')}</span>
                  <span className="font-bold text-accent">{t('pricing.adjustments.language.tier3.coefficient')}</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 rounded-xl border border-border/40 bg-background/50">
              <h3 className="text-2xl font-bold mb-6">{t('pricing.adjustments.difficulty.title')}</h3>
              <ul className="space-y-4">
                <li className="p-4 rounded-lg bg-card/30">
                  <div className="font-bold mb-1">{t('pricing.adjustments.difficulty.rush')}</div>
                  <div className="text-muted-foreground">{t('pricing.adjustments.difficulty.rush.fee')}</div>
                </li>
                <li className="p-4 rounded-lg bg-card/30">
                  <div className="font-bold mb-1">{t('pricing.adjustments.difficulty.format')}</div>
                  <div className="text-muted-foreground">
                    {t('pricing.adjustments.difficulty.format.fee')}
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-border/40">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('pricing.cta.title')}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('pricing.cta.description')}
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                {t('pricing.cta.button')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}
