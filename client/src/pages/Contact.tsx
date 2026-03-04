import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

const consultationTypeKeys = [
  { value: 'content_production', key: 'contact.type1' },
  { value: 'localization_service', key: 'contact.type2' },
  { value: 'strategy_consulting', key: 'contact.type3' },
  { value: 'partner_application', key: 'contact.type4' },
  { value: 'other', key: 'contact.type5' },
];

export default function Contact() {
  const { t } = useTranslation();
  const consultationTypes = consultationTypeKeys.map(item => ({
    value: item.value,
    label: t(item.key),
  }));
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    consultationType: 'content_production',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitMutation = trpc.contact.submit.useMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      consultationType: value as 'content_production' | 'localization_service' | 'strategy_consulting' | 'partner_application' | 'other',
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitMutation.mutateAsync({
        ...formData,
        consultationType: formData.consultationType as 'content_production' | 'localization_service' | 'strategy_consulting' | 'partner_application' | 'other',
      });
      toast.success(t('contact.toast.success'));
      setFormData({
        name: '',
        company: '',
        email: '',
        consultationType: 'content_production',
        message: '',
      });
    } catch (error) {
      toast.error(t('contact.toast.error'));
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 border-b border-border/40">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('contact.pageTitle')}</h1>
              <p className="text-xl text-muted-foreground">
                {t('contact.pageDescription')}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">{t('contact.info.email')}</h3>
                    <a href="mailto:support@1stepmore.com" className="text-muted-foreground hover:text-foreground transition-colors">
                      support@1stepmore.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">{t('contact.info.phone')}</h3>
                    <p className="text-muted-foreground">{t('contact.info.phoneDescription')}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">{t('contact.info.address')}</h3>
                    <p className="text-muted-foreground">{t('contact.info.addressDescription')}</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {t('contact.form.name')}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.form.namePlaceholder')}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      {t('contact.form.company')}
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t('contact.form.companyPlaceholder')}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t('contact.form.email')}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact.form.emailPlaceholder')}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Consultation Type */}
                  <div>
                    <label htmlFor="consultationType" className="block text-sm font-medium mb-2">
                      {t('contact.form.type')}
                    </label>
                    <Select value={formData.consultationType} onValueChange={handleSelectChange} disabled={isSubmitting}>
                      <SelectTrigger id="consultationType">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {consultationTypes.map(type => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {t('contact.form.message')}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.form.messagePlaceholder')}
                      rows={6}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32 bg-card/30 border-t border-border/40">
          <div className="container">
            <h2 className="text-4xl font-bold mb-12 text-center">{t('contact.faq.title')}</h2>

            <div className="max-w-3xl mx-auto space-y-8">
              {
                [
                  {
                    q: t('contact.faq.q1'),
                    a: t('contact.faq.a1'),
                  },
                  {
                    q: t('contact.faq.q2'),
                    a: t('contact.faq.a2'),
                  },
                  {
                    q: t('contact.faq.q3'),
                    a: t('contact.faq.a3'),
                  },
                  {
                    q: t('contact.faq.q4'),
                    a: t('contact.faq.a4'),
                  },
                ].map((item, index) => (
                  <div key={index} className="border-b border-border/40 pb-8 last:border-b-0">
                    <h3 className="text-lg font-semibold mb-3">{item.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
