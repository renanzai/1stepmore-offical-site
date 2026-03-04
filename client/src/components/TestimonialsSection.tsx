import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function TestimonialsSection() {
  const { t } = useTranslation();
  const testimonials = [1, 2, 3].map(index => ({
    company: t(`testimonials.item${index}.company`),
    position: t(`testimonials.item${index}.position`),
    text: t(`testimonials.item${index}.text`),
    metric: t(`testimonials.item${index}.metric`),
    avatar: t(`testimonials.item${index}.avatar`),
  }));

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('testimonials.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Metric */}
              <div className="mb-6 p-3 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm font-semibold text-accent">
                  ✓ {testimonial.metric}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.company}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
