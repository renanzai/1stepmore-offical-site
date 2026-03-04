import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-semibold">1StepMore</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-sm mb-4">{t('nav.services')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services">
                  <span className="hover:text-foreground transition-colors cursor-pointer">{t('footer.services.item1')}</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-foreground transition-colors cursor-pointer">{t('footer.services.item2')}</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-foreground transition-colors cursor-pointer">{t('footer.services.item3')}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm mb-4">{t('nav.about')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/ecosystem">
                  <span className="hover:text-foreground transition-colors cursor-pointer">{t('footer.about.item1')}</span>
                </Link>
              </li>
              <li>
                <Link href="/cases">
                  <span className="hover:text-foreground transition-colors cursor-pointer">{t('footer.about.item2')}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/contact">
                  <span className="hover:text-foreground transition-colors cursor-pointer">{t('footer.contact.item1')}</span>
                </Link>
              </li>
              <li>
                <a href="mailto:support@1stepmore.com" className="hover:text-foreground transition-colors">
                  support@1stepmore.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; {currentYear} 1StepMore.ai. {t('footer.copyright')}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground transition-colors">
                {t('footer.privacy')}
              </a>
              <Link href="/terms">
                <span className="hover:text-foreground transition-colors cursor-pointer">
                  {t('footer.terms')}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
