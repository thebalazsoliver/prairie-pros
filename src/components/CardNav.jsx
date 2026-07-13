import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';
import logo from '../assets/prairie-pros-logo.svg';
import ShinyText from './ShinyText.jsx';
import './CardNav.css';

const items = [
  {
    label: 'Services',
    bgColor: '#22417A',
    textColor: '#F7F5EF',
    links: [
      { label: 'Snow Removal', href: '/pricing#snow-removal', ariaLabel: 'Snow removal pricing' },
      { label: 'Pressure Washing', href: '/pricing#pressure-washing', ariaLabel: 'Pressure washing pricing' },
      { label: 'Holiday Lighting', href: '/pricing#holiday-lighting', ariaLabel: 'Holiday lighting pricing' },
      { label: 'Fleet & Bin Washing', href: '/pricing#fleet-washing', ariaLabel: 'Fleet and bin washing pricing' }
    ]
  },
  {
    label: 'Company',
    bgColor: '#0E1B38',
    textColor: '#F7F5EF',
    links: [
      { label: 'Meet Zane', href: '/#meet-zane', ariaLabel: 'Meet Zane, the founder' },
      { label: 'Gallery', href: '/gallery', ariaLabel: 'Photo gallery of recent work' },
      { label: 'Full Pricing', href: '/pricing', ariaLabel: 'Full pricing breakdown' },
      { label: 'FAQ', href: '/faq', ariaLabel: 'Frequently asked questions' }
    ]
  },
  {
    label: 'Contact',
    bgColor: '#F0B429',
    textColor: '#16274F',
    links: [
      { label: '(701) 260-9707', href: 'tel:+17012609707', ariaLabel: 'Call Prairie Pros' },
      { label: 'Request a Quote', href: '/#contact', ariaLabel: 'Go to the contact form' }
    ]
  }
];

const CardNav = ({
  logoAlt = 'Prairie Pros LLC',
  className = '',
  ease = 'power3.out',
  baseColor = '#16274F',
  menuColor = '#F7F5EF',
  buttonBgColor = '#F0B429',
  buttonTextColor = '#16274F'
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [theme, setTheme] = useState('dark');
  const wrapperRef = useRef(null);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content');
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        contentEl.offsetHeight;

        const topBar = 60;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ease]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  // Close the menu when the person clicks or taps anywhere outside of it.
  useEffect(() => {
    if (!isExpanded) return;

    const handlePointerDown = e => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        toggleMenu();
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded]);

  // Match the pill's colors to whatever is behind it: dark navy sections
  // (like the hero or the contact block) keep the navy pill, but once you
  // scroll past them onto a cream section, the pill flips to a light style
  // instead of floating there as a dark blob.
  useEffect(() => {
    let rafId = null;

    const checkTheme = () => {
      rafId = null;
      const el = wrapperRef.current;
      if (!el || isExpanded) return;

      const rect = el.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      const prevPointerEvents = el.style.pointerEvents;
      el.style.pointerEvents = 'none';
      const target = document.elementFromPoint(x, y);
      el.style.pointerEvents = prevPointerEvents;

      const themed = target?.closest?.('[data-nav-theme]');
      setTheme(themed?.getAttribute('data-nav-theme') === 'dark' ? 'dark' : 'light');
    };

    const onScroll = () => {
      if (rafId == null) rafId = requestAnimationFrame(checkTheme);
    };

    checkTheme();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isExpanded]);

  const setCardRef = i => el => {
    if (el) cardsRef.current[i] = el;
  };

  const isLight = theme === 'light' && !isExpanded;
  const effectiveBaseColor = isLight ? '#FFFFFF' : baseColor;
  const effectiveMenuColor = isLight ? '#16274F' : menuColor;

  return (
    <div ref={wrapperRef} className={`card-nav-container ${className}`}>
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''} ${isLight ? 'card-nav--light' : ''}`}
        style={{ backgroundColor: effectiveBaseColor }}
      >
        <div className="card-nav-top">
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
              }
            }}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            aria-expanded={isExpanded}
            tabIndex={0}
            style={{ color: effectiveMenuColor }}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>

          <a
            href="/"
            className="logo-container"
            aria-label="Prairie Pros LLC home"
            onClick={() => isExpanded && toggleMenu()}
          >
            <img
              src={logo}
              alt={logoAlt}
              className="logo"
            />
          </a>

          <a
            href="/#contact"
            className="card-nav-cta-button"
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
            onClick={() => isExpanded && toggleMenu()}
          >
            <ShinyText text="Get a Quote" color={buttonTextColor} shineColor="#ffffff" speed={2.4} />
          </a>
        </div>

        <div className="card-nav-content" aria-hidden={!isExpanded}>
          {items.slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label">{item.label}</div>
              <div className="nav-card-links">
                {item.links?.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link"
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                    onClick={() => isExpanded && toggleMenu()}
                  >
                    <GoArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
