import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const navItemKeys = [
  { labelKey: 'nav.home', href: '/' },
  { labelKey: 'nav.about', href: '/about' },
  { labelKey: 'nav.services', href: '/services' },
  { labelKey: 'nav.pricing', href: '/pricing' },
  { labelKey: 'nav.ecosystem', href: '/ecosystem' },
  { labelKey: 'nav.cases', href: '/cases' },
  { labelKey: 'nav.contact', href: '/contact' },
];

export default function Navigation() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navItems = navItemKeys.map(item => ({
    label: t(item.labelKey),
    href: item.href,
  }));

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <span className="font-semibold text-lg cursor-pointer">1StepMore</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors cursor-pointer">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link href="/terms">
              <span className="px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              {t('nav.terms')}
            </span>
          </Link>
          <Link href="/contact">
            <Button variant="default" size="sm" className="bg-accent hover:bg-accent/90">
              {t('nav.consult')}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border/40 bg-card/50 backdrop-blur">
          <div className="container py-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <Button
                variant="default"
                size="sm"
                className="w-full mt-2 bg-accent hover:bg-accent/90"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.consult')}
              </Button>
            </Link>
            <Link href="/terms">
              <span
                className="block px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.terms')}
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
