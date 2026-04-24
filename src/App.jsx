import React, { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, 
  Users, 
  Star, 
  BarChart, 
  ShoppingCart, 
  Target, 
  Filter, 
  ArrowRight,
  Globe,
  Zap,
  MousePointerClick,
  CheckCircle2,
  Mail
} from 'lucide-react';

// --- DICCIONARIO DE IDIOMAS (INGLÉS Y ESPAÑOL) ---
const translations = {
  en: {
    nav_problem: "The Challenge",
    nav_system: "Our System",
    nav_results: "Results",
    nav_cta: "Let's Talk",
    hero_kicker: "E-COMMERCE & B2B LEAD GEN",
    hero_title_1: "Stop Losing Traffic.",
    hero_title_2: "Start Scaling Sales.",
    hero_subtitle: "We build predictable growth systems. Advanced E-commerce strategies and highly qualified B2B & B2C Lead Generation engines.",
    hero_cta: "Get a Free Audit",
    hero_sub_cta: "No commitment required",
    marquee: ["B2B/B2C Lead Generation", "E-commerce Scalability", "Omnichannel Ads", "Predictable Systems", "ROAS Increase", "CRO Optimization"],
    prob_kicker: "The Challenge",
    prob_title: "Why your current strategy is failing",
    prob_subtitle: "Stop competing on price. Start competing on value and precision.",
    prob_1_title: "Traffic without Conversion",
    prob_1_desc: "You invest thousands in ads, get clicks, but your e-commerce sales or leads don't reflect that investment.",
    prob_2_title: "Sky-high CAC",
    prob_2_desc: "Your Customer Acquisition Costs (CAC) are constantly rising, destroying your profit margins month after month.",
    prob_3_title: "Stagnant Growth",
    prob_3_desc: "You lack a predictable system. Relying on word-of-mouth or sporadic campaigns makes scaling impossible.",
    wf_kicker: "The Go Surge System",
    wf_title: "The Infinite Sales Loop",
    wf_subtitle: "A frictionless journey from first click to loyal customer.",
    wf_1: "1. We Capture",
    wf_2: "2. Drive to Store",
    wf_3: "3. You Sell",
    wf_4: "4. Growth Loop",
    bento_kicker: "The Solution",
    bento_title: "The Go Surge Ecosystem",
    bento_subtitle: "Everything you need to scale your revenue predictably.",
    bento_1_title: "Data-Driven Integral Growth",
    bento_1_desc: "We don't sell 'likes'. We build mathematically designed sales funnels to maximize your Return on Ad Spend (ROAS).",
    bento_2_title: "E-commerce Scalability",
    bento_2_desc: "We optimize your CRO and buying journey to turn casual browsers into loyal buyers effortlessly.",
    bento_3_title: "B2B/B2C Lead Generation",
    bento_3_desc: "High-intent prospect capture systems. We filter the noise and deliver hot leads ready for your CRM.",
    bento_4_title: "Omnichannel Advertising",
    bento_4_desc: "We master Meta, Google and TikTok Ads to impact your ideal client exactly where they spend their time.",
    test_kicker: "Social Proof",
    test_title: "Results That Speak For Themselves",
    test_1_text: "We scaled our E-commerce sales by 300% in less than 6 months. Finally a predictable system we can rely on.",
    test_1_author: "Marcos T.",
    test_1_role: "CEO, B2C Retail",
    test_2_text: "The quality of our B2B leads improved radically. CPA dropped 40% and our team closes more deals with zero friction.",
    test_2_author: "Laura G.",
    test_2_role: "Tech Sales Director",
    test_3_text: "The omnichannel system revolutionized our client acquisition. We went from relying on referrals to having a constant flow.",
    test_3_author: "David R.",
    test_3_role: "SaaS Founder",
    footer_title: "Ready to uncover your hidden revenue?",
    footer_desc: "We work with a limited number of brands to guarantee exceptional results. Let's analyze your current funnel, 100% free.",
    footer_cta: "Request Your Free Audit",
    footer_email_text: "Or email us directly at: ",
    footer_rights: "© 2026 Go Surge Digital. All rights reserved."
  },
  es: {
    nav_problem: "El Reto",
    nav_system: "Nuestro Sistema",
    nav_results: "Resultados",
    nav_cta: "Hablemos",
    hero_kicker: "E-COMMERCE & B2B LEAD GEN",
    hero_title_1: "Deja de Perder Tráfico.",
    hero_title_2: "Empieza a Escalar Ventas.",
    hero_subtitle: "Construimos sistemas predecibles de crecimiento. Estrategias avanzadas para E-commerce y motores de Generación de Leads B2B y B2C.",
    hero_cta: "Obtener Auditoría Gratuita",
    hero_sub_cta: "Sin ningún compromiso",
    marquee: ["Generación de Leads B2B/B2C", "Escalabilidad E-commerce", "Publicidad Omnicanal", "Sistemas Predecibles", "Aumento de ROAS", "Optimización de CRO"],
    prob_kicker: "El Reto",
    prob_title: "Por qué tu estrategia actual falla",
    prob_subtitle: "Deja de competir por precio. Empieza a competir por valor y precisión.",
    prob_1_title: "Tráfico sin Conversión",
    prob_1_desc: "Inviertes miles en pauta, consigues clics, pero las ventas de tu e-commerce o los leads no reflejan esa inversión.",
    prob_2_title: "CAC por las Nubes",
    prob_2_desc: "Tus costos de adquisición de clientes (CAC) son cada vez más altos, destrozando tus márgenes de beneficio.",
    prob_3_title: "Crecimiento Estancado",
    prob_3_desc: "No tienes un sistema predecible. Depender del boca a boca o de campañas esporádicas hace imposible escalar.",
    wf_kicker: "El Sistema Go Surge",
    wf_title: "El Bucle Infinito de Ventas",
    wf_subtitle: "Un viaje sin fricción desde el primer clic hasta el cliente recurrente.",
    wf_1: "1. Capturamos",
    wf_2: "2. A tu Tienda",
    wf_3: "3. Tú Vendes",
    wf_4: "4. Bucle de Escala",
    bento_kicker: "La Solución",
    bento_title: "El Ecosistema Go Surge",
    bento_subtitle: "Todo lo que necesitas para escalar tu facturación de forma predecible.",
    bento_1_title: "Crecimiento Integral Orientado a Datos",
    bento_1_desc: "No vendemos 'likes'. Construimos embudos de venta diseñados matemáticamente para maximizar tu retorno de inversión (ROAS).",
    bento_2_title: "Escalabilidad E-commerce",
    bento_2_desc: "Optimizamos tu CRO y el viaje de compra para convertir visitantes curiosos en compradores recurrentes de forma fluida.",
    bento_3_title: "Generación de Leads B2B/B2C",
    bento_3_desc: "Sistemas de captación de alta intención. Filtramos el ruido y entregamos prospectos listos para tu CRM.",
    bento_4_title: "Publicidad Omnicanal",
    bento_4_desc: "Dominamos Meta Ads, Google Ads y TikTok Ads para impactar a tu cliente ideal exactamente donde pasa su tiempo.",
    test_kicker: "Prueba Social",
    test_title: "Resultados que Hablan por Sí Solos",
    test_1_text: "Escalamos nuestras ventas de E-commerce un 300% en menos de 6 meses. Finalmente un sistema en el que podemos confiar.",
    test_1_author: "Marcos T.",
    test_1_role: "CEO, Retail B2C",
    test_2_text: "La calidad de los leads B2B mejoró radicalmente. El CPA bajó un 40% y nuestro equipo cierra más tratos sin fricción.",
    test_2_author: "Laura G.",
    test_2_role: "Directora Comercial Tech",
    test_3_text: "El sistema omnicanal revolucionó nuestra captación de clientes. Pasamos de depender de referidos a tener un flujo constante.",
    test_3_author: "David R.",
    test_3_role: "Fundador SaaS",
    footer_title: "¿Listo para descubrir tus ingresos ocultos?",
    footer_desc: "Trabajamos con un número limitado de marcas para garantizar calidad. Analicemos tu embudo actual, 100% gratis.",
    footer_cta: "Solicitar mi Auditoría Gratuita",
    footer_email_text: "O escríbenos directamente a: ",
    footer_rights: "© 2026 Go Surge Digital. Todos los derechos reservados."
  }
};

// --- COMPONENTE SCROLL REVEAL ---
const ScrollReveal = ({ children, delay = 0, direction = 'up', className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0)';
    switch (direction) {
      case 'up': return 'translateY(40px)';
      case 'down': return 'translateY(-40px)';
      case 'left': return 'translateX(40px)';
      case 'right': return 'translateX(-40px)';
      default: return 'translateY(40px)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

// --- COMPONENTE FONDO PREMIUM ---
const PremiumBackground = () => (
  <div className="premium-bg-container" aria-hidden="true">
    <div className="bg-base"></div>
    <div className="orb orb-1"></div>
    <div className="orb orb-2"></div>
    <div className="orb orb-3"></div>
    <div className="bg-grid-tech"></div>
    <div className="bg-noise"></div>
  </div>
);

// --- LOGO COMPONENTE ---
const Logo = ({ size = 'large' }) => {
  const dimensions = size === 'large' ? { width: 400, height: 100 } : { width: 200, height: 50 };
  
  return (
    <a href="#" className="logo-container" aria-label="Go Surge Digital Home" style={{ display: 'inline-block', textDecoration: 'none' }}>
      <svg width={dimensions.width} height={dimensions.height} viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1B3A6B" />
            <stop offset="50%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#1B3A6B" />
          </linearGradient>
          <linearGradient id="waveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="50%" stopColor="#1B3A6B" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path d="M 30 100 Q 45 60, 60 100 T 90 100" stroke="url(#waveGrad1)" strokeWidth="10" fill="none" strokeLinecap="round" filter="url(#glow)" className="wave-animate-1" />
        <path d="M 110 100 Q 125 140, 140 100 T 170 100" stroke="url(#waveGrad2)" strokeWidth="10" fill="none" strokeLinecap="round" filter="url(#glow)" className="wave-animate-2" />
        <text x="200" y="125" fill="#FFFFFF" fontSize="76" fontWeight="800" fontFamily="'Space Grotesk', sans-serif" letterSpacing="-0.02em">
          Go Surge Digital
        </text>
      </svg>
    </a>
  );
};

// --- COMPONENTE BUCLE DE VENTAS ANIMADO ---
const WorkflowSection = ({ t }) => {
  const [step, setStep] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const workflowRef = useRef(null);

  const O = '#ffffff';
  const ORANGE = '#F97316'; 
  const NAVY = '#1B3A6B'; 
  const DARK = '#07070f';
  const ORANGE_BG = 'rgba(249, 115, 22, 0.15)';

  useEffect(() => {
    const checkScroll = () => {
      if (workflowRef.current) {
        const rect = workflowRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.85) {
          setStartAnimation(true);
          window.removeEventListener('scroll', checkScroll);
        }
      }
    };
    checkScroll();
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  useEffect(() => {
    if (!startAnimation) return;
    
    const animateLoop = () => {
      setStep(0);
      setTimeout(() => setStep(1), 400);   
      setTimeout(() => setStep(2), 1000);  
      setTimeout(() => setStep(3), 1600);  
      setTimeout(() => setStep(4), 2200);  
      setTimeout(() => setStep(5), 2800);  
      setTimeout(() => setStep(6), 3400);  
      setTimeout(() => setStep(7), 4000);  
      setTimeout(() => setStep(8), 4600);  
      setTimeout(() => setStep(9), 5600);  
      
      setTimeout(animateLoop, 8500); 
    };

    animateLoop();
  }, [startAnimation]);

  const nodeStyle = (isActive) => ({
    stroke: isActive ? ORANGE : NAVY,
    fill: isActive ? ORANGE_BG : DARK,
    filter: isActive ? 'url(#glo)' : 'none',
    transformOrigin: 'center',
    transform: isActive && step === 9 ? 'scale(1.05)' : 'scale(1)',
    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
  });

  const iconStyle = (isActive) => ({
    stroke: isActive ? O : NAVY,
    transition: 'stroke 0.4s ease'
  });

  const lineStyle = (isActive) => ({
    strokeDasharray: 100,
    strokeDashoffset: isActive ? 0 : 100,
    transition: 'stroke-dashoffset 0.6s ease-in-out'
  });

  const arrowStyle = (isActive) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateX(0)' : 'translateX(-10px)',
    transition: 'all 0.4s ease'
  });

  return (
    <section ref={workflowRef} className="workflow-section" id="how-it-works">
      <ScrollReveal>
        <header className="section-header">
          <p className="section-kicker">{t.wf_kicker}</p>
          <h2 className="section-title">{t.wf_title}</h2>
          <p className="section-subtitle">{t.wf_subtitle}</p>
        </header>
      </ScrollReveal>
      
      <ScrollReveal delay={0.2}>
        <div className="svg-wrap" style={{ position: 'relative', marginTop: '2rem' }}>
          <svg width="100%" viewBox="0 0 656 240" style={{ display: 'block', overflow: 'visible' }} aria-hidden="true">
            <defs>
              <filter id="glo">
                <feGaussianBlur stdDeviation="4" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            <line x1="134" y1="80" x2="216" y2="80" stroke={NAVY} strokeWidth="2" strokeDasharray="4,4" opacity=".5"/>
            <line x1="284" y1="80" x2="366" y2="80" stroke={NAVY} strokeWidth="2" strokeDasharray="4,4" opacity=".5"/>
            <line x1="434" y1="80" x2="516" y2="80" stroke={NAVY} strokeWidth="2" strokeDasharray="4,4" opacity=".5"/>

            <line x1="134" y1="80" x2="216" y2="80" strokeWidth="3" stroke={ORANGE} style={lineStyle(step >= 2)} />
            <line x1="284" y1="80" x2="366" y2="80" strokeWidth="3" stroke={ORANGE} style={lineStyle(step >= 4)} />
            <line x1="434" y1="80" x2="516" y2="80" strokeWidth="3" stroke={ORANGE} style={lineStyle(step >= 6)} />

            <path d="M208,72 L216,80 L208,88" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" stroke={ORANGE} style={arrowStyle(step >= 3)} />
            <path d="M358,72 L366,80 L358,88" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" stroke={ORANGE} style={arrowStyle(step >= 5)} />
            <path d="M508,72 L516,80 L508,88" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" stroke={ORANGE} style={arrowStyle(step >= 7)} />

            <path 
              d="M 550 114 C 550 250, 100 250, 100 114" 
              fill="none" 
              stroke={ORANGE} 
              strokeWidth="2.5" 
              strokeDasharray="1200" 
              strokeDashoffset={step >= 8 ? 0 : 1200} 
              style={{transition: 'stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1)'}} 
            />
            <path 
              d="M 92 125 L 100 114 L 108 125" 
              fill="none"
              strokeWidth="3"
              strokeLinecap="round" 
              strokeLinejoin="round"
              stroke={ORANGE} 
              style={{opacity: step >= 9 ? 1 : 0, transition: 'opacity 0.4s ease'}} 
            />

            <circle cx="100" cy="80" r="34" strokeWidth="2" style={nodeStyle(step >= 1)} />
            <g fill="none" strokeLinecap="round" strokeLinejoin="round" style={iconStyle(step >= 1)}>
               <path d="M85,85 L85,75 A15,15 0 0,1 115,75 L115,85" strokeWidth="2"/>
               <rect x="82" y="85" width="6" height="8" fill="currentColor"/>
               <rect x="112" y="85" width="6" height="8" fill="currentColor"/>
            </g>

            <circle cx="250" cy="80" r="34" strokeWidth="2" style={nodeStyle(step >= 3)} />
            <g fill="none" strokeLinecap="round" strokeLinejoin="round" style={iconStyle(step >= 3)}>
              <rect x="238" y="70" width="24" height="20" rx="2" strokeWidth="2" />
              <path d="M245,90 L255,90 M250,90 L250,94 M242,94 L258,94" strokeWidth="2" />
            </g>

            <circle cx="400" cy="80" r="34" strokeWidth="2" style={nodeStyle(step >= 5)} />
            <g fill="none" strokeLinecap="round" strokeLinejoin="round" style={iconStyle(step >= 5)}>
              <circle cx="394" cy="92" r="2" strokeWidth="2"/>
              <circle cx="406" cy="92" r="2" strokeWidth="2"/>
              <path d="M386,66 L390,66 L393,85 L408,85 L411,72 L391,72" strokeWidth="2"/>
            </g>

            <circle cx="550" cy="80" r="34" strokeWidth="2" style={nodeStyle(step >= 7)} />
            <g fill="none" strokeLinecap="round" strokeLinejoin="round" style={iconStyle(step >= 7)}>
               <path d="M538,75 A12,12 0 1,1 542,88" strokeWidth="2"/>
               <path d="M538,75 L545,75 L538,68" strokeWidth="2"/>
            </g>
          </svg>
        </div>

        <div className="labels" aria-hidden="true" style={{ display: 'flex', justifyContent: 'space-between', padding: '0 30px', marginTop: '10px' }}>
          <div className={`lb ${step >= 1 ? 'active-orange' : ''}`} style={{ width: '100px' }}>{t.wf_1}</div>
          <div className={`lb ${step >= 3 ? 'active-orange' : ''}`} style={{ width: '100px' }}>{t.wf_2}</div>
          <div className={`lb ${step >= 5 ? 'active-orange' : ''}`} style={{ width: '100px' }}>{t.wf_3}</div>
          <div className={`lb ${step >= 7 ? 'active-orange' : ''}`} style={{ width: '100px' }}>{t.wf_4}</div>
        </div>
      </ScrollReveal>
    </section>
  );
};

// --- APLICACIÓN PRINCIPAL ---
export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState('en');

  // Detectar idioma del navegador al cargar
  useEffect(() => {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang && browserLang.toLowerCase().startsWith('es')) {
      setLang('es');
    }
  }, []);

  const t = translations[lang];

  // Navbar Sticky Effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax Mouse Glow
  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // --- FUNCIÓN MAILTO PARA CONTACTO CTAs ---
  const handleContactClick = (e) => {
  e.preventDefault();
  // REEMPLAZA ESTE LINK POR TU LINK DE CALENDLY
  const calendlyUrl = 'https://calendly.com/franco-gosurgedigital/30min'; 
  window.open(calendlyUrl, '_blank');
};

  return (
    <div className="website-container">
      <PremiumBackground />

      {/* --- ESTILOS CSS INYECTADOS --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800&display=swap');
        
        :root {
          --bg-dark: #030305;
          --brand-orange: #F97316;
          --brand-navy: #1B3A6B;
          --success-green: #22c55e;
          --text-main: #ffffff;
          --text-muted: rgba(255, 255, 255, 0.6);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; scroll-behavior: smooth; }
        body { font-family: 'Space Grotesk', sans-serif; overflow-x: hidden; background: var(--bg-dark); color: var(--text-main); }
        
        .website-container { position: relative; min-height: 100vh; z-index: 1; }

        /* Background Effects */
        .premium-bg-container { position: fixed; inset: 0; overflow: hidden; z-index: -2; background-color: var(--bg-dark); }
        .bg-base { position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, #080812 0%, var(--bg-dark) 100%); }
        .orb { position: absolute; border-radius: 50%; filter: blur(140px); opacity: 0.6; animation: floatOrb 20s infinite alternate ease-in-out; will-change: transform; }
        .orb-1 { width: 60vw; height: 60vw; background: rgba(27, 58, 107, 0.25); top: -20%; left: -10%; animation-duration: 25s; }
        .orb-2 { width: 50vw; height: 50vw; background: rgba(249, 115, 22, 0.08); bottom: -20%; right: -10%; animation-duration: 22s; animation-delay: -5s; }
        .orb-3 { width: 40vw; height: 40vw; background: rgba(43, 20, 80, 0.15); top: 40%; left: 30%; animation-duration: 28s; animation-delay: -10s; }

        @keyframes floatOrb {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(3%, 5%) scale(1.05); }
          66% { transform: translate(-2%, 8%) scale(0.95); }
          100% { transform: translate(-5%, -2%) scale(1); }
        }

        .bg-grid-tech { position: absolute; inset: 0; background-image: linear-gradient(to right, rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.015) 1px, transparent 1px); background-size: 50px 50px; mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%); -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%); }
        .bg-noise { position: absolute; inset: 0; opacity: 0.035; mix-blend-mode: overlay; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"); pointer-events: none; }
        .mouse-glow { position: fixed; inset: 0; background: radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(249, 115, 22, 0.06) 0%, transparent 40%); pointer-events: none; z-index: 0; }

        /* Navbar */
        .glass-nav { position: fixed; top: 0; left: 0; width: 100%; padding: 1.5rem 5%; display: flex; justify-content: space-between; align-items: center; z-index: 100; transition: all 0.4s ease; border-bottom: 1px solid transparent; }
        .glass-nav.scrolled { padding: 1rem 5%; background: rgba(3, 3, 9, 0.8); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border-bottom: 1px solid rgba(27, 58, 107, 0.3); box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        .nav-logo-wrapper { transform: scale(0.6); transform-origin: left center; margin: -20px 0; }
        .nav-controls { display: flex; align-items: center; gap: 1.5rem; }
        .lang-toggle { background: transparent; border: 1px solid rgba(255,255,255,0.2); color: white; padding: 0.5rem 0.8rem; border-radius: 8px; cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 0.4rem; transition: all 0.3s ease; }
        .lang-toggle:hover { border-color: var(--brand-orange); color: var(--brand-orange); background: rgba(249, 115, 22, 0.05); }
        .nav-button { padding: 0.8rem 1.8rem; font-size: 1rem; font-weight: 700; color: #fff; background: transparent; border: 1px solid rgba(255,255,255,0.3); border-radius: 8px; cursor: pointer; transition: all 0.3s ease; }
        .nav-button:hover { border-color: var(--brand-orange); background: rgba(249, 115, 22, 0.1); color: var(--brand-orange); }

        /* Typography & Globals */
        .section-header { text-align: center; margin-bottom: 4rem; }
        .section-kicker { font-size: 12px; font-weight: 700; letter-spacing: 0.2em; color: var(--brand-orange); text-transform: uppercase; margin-bottom: 15px; }
        .section-title { font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 800; color: #fff; margin-bottom: 1rem; letter-spacing: -0.02em; }
        .section-subtitle { font-size: 1.2rem; color: var(--text-muted); max-width: 600px; margin: 0 auto; }
        
        /* Botones de Acción (CTAs) */
        .cta-primary { display: inline-flex; align-items: center; justify-content: center; gap: 0.8rem; padding: 1.2rem 2.8rem; font-size: 1.15rem; font-weight: 700; color: #000; background: linear-gradient(135deg, #F97316 0%, #ea6c10 100%); border: none; border-radius: 12px; cursor: pointer; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); text-decoration: none; box-shadow: 0 10px 30px rgba(249, 115, 22, 0.2); }
        .cta-primary:hover { transform: translateY(-4px) scale(1.02); box-shadow: 0 20px 40px rgba(249, 115, 22, 0.4); }
        .cta-subtext { display: block; margin-top: 10px; font-size: 0.85rem; color: var(--text-muted); font-weight: 500; display: flex; align-items: center; justify-content: center; gap: 5px; }

        /* Hero */
        .hero-section { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 8rem 5% 4rem; text-align: center; position: relative; }
        .hero-kicker { font-size: 13px; font-weight: 800; letter-spacing: 0.25em; color: var(--brand-orange); text-transform: uppercase; margin-bottom: 1.5rem; }
        .hero-title { font-size: clamp(3rem, 7vw, 5.5rem); font-weight: 800; line-height: 1.1; margin-bottom: 1.5rem; letter-spacing: -0.02em; }
        .hero-title span { background: linear-gradient(135deg, #F97316 0%, #fb923c 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .hero-subtitle { font-size: clamp(1.1rem, 2vw, 1.3rem); color: var(--text-muted); max-width: 750px; margin: 0 auto 3rem; line-height: 1.6; }
        
        /* Marquee */
        .marquee-wrapper { width: 100%; background: rgba(27, 58, 107, 0.15); border-top: 1px solid rgba(27, 58, 107, 0.3); border-bottom: 1px solid rgba(27, 58, 107, 0.3); overflow: hidden; padding: 1rem 0; display: flex; }
        .marquee-content { display: flex; white-space: nowrap; animation: marquee 35s linear infinite; }
        .marquee-item { display: flex; align-items: center; gap: 2rem; padding: 0 2rem; font-size: 0.95rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.8); }
        .marquee-star { color: var(--brand-orange); }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        /* Animaciones Logo */
        @keyframes wave1 { 0%, 100% { d: path("M 30 100 Q 45 60, 60 100 T 90 100"); } 50% { d: path("M 30 100 Q 45 140, 60 100 T 90 100"); } }
        @keyframes wave2 { 0%, 100% { d: path("M 110 100 Q 125 140, 140 100 T 170 100"); } 50% { d: path("M 110 100 Q 125 60, 140 100 T 170 100"); } }
        .wave-animate-1 { animation: wave1 3s ease-in-out infinite; }
        .wave-animate-2 { animation: wave2 3s ease-in-out infinite 0.3s; }

        /* Problemas */
        .problem-section { padding: 10rem 5%; }
        .problem-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto; }
        .problem-card { background: rgba(10, 10, 15, 0.5); border: 1px solid rgba(27, 58, 107, 0.3); border-radius: 20px; padding: 3rem 2.5rem; transition: all 0.4s ease; backdrop-filter: blur(10px); }
        .problem-card:hover { transform: translateY(-8px); border-color: rgba(249, 115, 22, 0.5); box-shadow: 0 20px 40px rgba(249, 115, 22, 0.1); }
        .problem-icon { width: 48px; height: 48px; margin-bottom: 1.5rem; color: var(--brand-orange); }
        .problem-card h3 { font-size: 1.5rem; margin-bottom: 1rem; color: #ffffff; font-weight: 700; }
        .problem-card p { color: var(--text-muted); line-height: 1.7; }

        /* Bucle */
        .workflow-section { padding: 8rem 5%; position: relative; max-width: 1000px; margin: 0 auto; }
        .lb { text-align: center; font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.3); text-transform: uppercase; transition: all 0.4s ease; letter-spacing: 0.05em; }
        .active-orange { color: var(--brand-orange); text-shadow: 0 0 15px rgba(249, 115, 22, 0.5); transform: translateY(-2px); }

        /* Servicios Bento */
        .services-section { padding: 10rem 5%; }
        .bento-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; max-width: 1200px; margin: 0 auto; }
        .bento-card { background: rgba(10, 10, 15, 0.4); border: 1px solid rgba(27, 58, 107, 0.3); border-radius: 24px; padding: 3rem; transition: all 0.4s ease; display: flex; flex-direction: column; justify-content: space-between; position: relative; overflow: hidden; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
        .bento-card:hover { transform: translateY(-5px); border-color: rgba(249, 115, 22, 0.4); box-shadow: 0 20px 50px rgba(249, 115, 22, 0.1); }
        .bento-highlight { background: linear-gradient(145deg, rgba(255,255,255,0.02) 0%, rgba(249, 115, 22, 0.05) 100%); border-color: rgba(249, 115, 22, 0.2); }
        .bento-card-icon { width: 44px; height: 44px; color: var(--brand-orange); margin-bottom: 1.5rem; }
        .bento-card h3 { font-size: 1.8rem; margin-bottom: 1rem; color: #ffffff; font-weight: 700; letter-spacing: -0.01em; }
        .bento-card p { color: var(--text-muted); line-height: 1.7; font-size: 1.1rem; }

        /* Social Proof */
        .testimonials-section { padding: 8rem 5%; }
        .testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto; }
        .testimonial-card { background: rgba(10, 10, 15, 0.4); border: 1px solid rgba(27, 58, 107, 0.3); border-radius: 20px; padding: 2.5rem; transition: transform 0.3s ease; }
        .testimonial-card:hover { transform: translateY(-5px); border-color: rgba(249, 115, 22, 0.4); }
        .stars { display: flex; gap: 0.3rem; margin-bottom: 1.5rem; }
        .testimonial-text { font-size: 1.15rem; line-height: 1.7; color: rgba(255, 255, 255, 0.9); margin-bottom: 2rem; font-style: italic; }
        .testimonial-author { display: flex; align-items: center; gap: 1rem; }
        .author-avatar { width: 50px; height: 50px; border-radius: 50%; background: linear-gradient(135deg, var(--brand-navy), var(--brand-orange)); }
        .author-info h4 { color: #ffffff; font-size: 1.1rem; font-weight: 700; }
        .author-info p { color: var(--text-muted); font-size: 0.95rem; }

        /* Footer */
        .footer-cta { padding: 10rem 5%; text-align: center; border-top: 1px solid rgba(27, 58, 107, 0.2); background: linear-gradient(180deg, transparent 0%, #050508 100%); }
        .footer-cta h2 { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; margin-bottom: 1.5rem; letter-spacing: -0.02em; }
        .footer-cta p { font-size: 1.3rem; color: var(--text-muted); max-width: 700px; margin: 0 auto 3rem; line-height: 1.6; }
        .footer-email-contact { margin-top: 1.5rem; font-size: 1rem; color: var(--text-muted); }
        .footer-email-contact a { color: var(--brand-orange); text-decoration: none; font-weight: 600; }
        .footer-email-contact a:hover { text-decoration: underline; }

        /* Media Queries */
        @media (max-width: 900px) {
          .bento-grid { grid-template-columns: 1fr; }
          .labels { gap: 5px; padding: 0 10px !important; }
          .lb { font-size: 10px; width: auto !important; }
        }
        @media (max-width: 600px) {
          .glass-nav { padding: 1rem 5%; }
          .nav-logo-wrapper { transform: scale(0.45); margin: -25px -40px; }
          .nav-controls { gap: 0.8rem; }
          .nav-button { padding: 0.7rem 1.2rem; font-size: 0.9rem; }
          .lang-toggle { padding: 0.4rem 0.6rem; font-size: 0.85rem; }
          .hero-section { padding-top: 10rem; }
          .hero-logo { display: none; } 
        }
      `}</style>

      {/* --- NAVEGACIÓN --- */}
      <nav className={`glass-nav ${isScrolled ? 'scrolled' : ''}`} aria-label="Main Navigation">
        <div className="nav-logo-wrapper">
          <Logo size="small" />
        </div>
        <div className="nav-controls">
          <button 
            className="lang-toggle" 
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            aria-label="Toggle language"
          >
            <Globe size={16} /> {lang.toUpperCase()}
          </button>
          {/* Botón CTA del menú ahora abre correo */}
          <button className="nav-button" onClick={handleContactClick}>
            {t.nav_cta}
          </button>
        </div>
      </nav>

      <main>
        {/* --- HERO --- */}
        <section className="hero-section">
          <ScrollReveal delay={0.1}>
            <div className="hero-logo">
              <Logo size="large" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="hero-kicker">{t.hero_kicker}</p>
            <h1 className="hero-title">
              {t.hero_title_1}<br />
              <span>{t.hero_title_2}</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="hero-subtitle">{t.hero_subtitle}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div>
              {/* Botón CTA Principal abre correo */}
              <button className="cta-primary" onClick={handleContactClick}>
                <MousePointerClick size={20} /> {t.hero_cta}
              </button>
              <span className="cta-subtext">
                <CheckCircle2 size={14} color="var(--success-green)"/> {t.hero_sub_cta}
              </span>
            </div>
          </ScrollReveal>
        </section>

        {/* --- MARQUEE --- */}
        <div className="marquee-wrapper" aria-hidden="true">
          <div className="marquee-content">
            {t.marquee.map((item, index) => (
              <div key={index} className="marquee-item">
                <span className="marquee-star">✦</span> {item}
              </div>
            ))}
            {t.marquee.map((item, index) => (
              <div key={`dup-${index}`} className="marquee-item">
                <span className="marquee-star">✦</span> {item}
              </div>
            ))}
          </div>
        </div>

        {/* --- PAIN POINTS --- */}
        <section className="problem-section">
          <ScrollReveal>
            <header className="section-header">
              <p className="section-kicker">{t.prob_kicker}</p>
              <h2 className="section-title">{t.prob_title}</h2>
              <p className="section-subtitle">{t.prob_subtitle}</p>
            </header>
          </ScrollReveal>
          
          <div className="problem-grid">
            <ScrollReveal delay={0.1} direction="up">
              <article className="problem-card">
                <Filter className="problem-icon" />
                <h3>{t.prob_1_title}</h3>
                <p>{t.prob_1_desc}</p>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={0.2} direction="up">
              <article className="problem-card">
                <TrendingUp className="problem-icon" />
                <h3>{t.prob_2_title}</h3>
                <p>{t.prob_2_desc}</p>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={0.3} direction="up">
              <article className="problem-card">
                <Users className="problem-icon" />
                <h3>{t.prob_3_title}</h3>
                <p>{t.prob_3_desc}</p>
              </article>
            </ScrollReveal>
          </div>
        </section>

        {/* --- WORKFLOW / BUCLE DE VENTAS --- */}
        <WorkflowSection t={t} />

        {/* --- SERVICIOS BENTO GRID --- */}
        <section className="services-section">
          <ScrollReveal>
            <header className="section-header">
              <p className="section-kicker">{t.bento_kicker}</p>
              <h2 className="section-title">{t.bento_title}</h2>
              <p className="section-subtitle">{t.bento_subtitle}</p>
            </header>
          </ScrollReveal>
          
          <div className="bento-grid">
            <ScrollReveal delay={0.1} direction="left">
              <article className="bento-card bento-highlight" style={{ height: '100%' }}>
                <div>
                  <BarChart className="bento-card-icon" />
                  <h3>{t.bento_1_title}</h3>
                  <p>{t.bento_1_desc}</p>
                </div>
              </article>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2} direction="right">
              <article className="bento-card" style={{ height: '100%' }}>
                <ShoppingCart className="bento-card-icon" />
                <h3>{t.bento_2_title}</h3>
                <p>{t.bento_2_desc}</p>
              </article>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3} direction="left">
              <article className="bento-card" style={{ height: '100%' }}>
                <Target className="bento-card-icon" />
                <h3>{t.bento_3_title}</h3>
                <p>{t.bento_3_desc}</p>
              </article>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4} direction="right">
              <article className="bento-card" style={{ height: '100%' }}>
                <Zap className="bento-card-icon" />
                <h3>{t.bento_4_title}</h3>
                <p>{t.bento_4_desc}</p>
              </article>
            </ScrollReveal>
          </div>
        </section>

        {/* --- SOCIAL PROOF --- */}
        <section className="testimonials-section">
          <ScrollReveal>
            <header className="section-header">
              <p className="section-kicker">{t.test_kicker}</p>
              <h2 className="section-title">{t.test_title}</h2>
            </header>
          </ScrollReveal>
          
          <div className="testimonials-grid">
            {[
              { name: t.test_1_author, role: t.test_1_role, text: t.test_1_text },
              { name: t.test_2_author, role: t.test_2_role, text: t.test_2_text },
              { name: t.test_3_author, role: t.test_3_role, text: t.test_3_text }
            ].map((test, i) => (
              <ScrollReveal key={i} delay={i * 0.15} direction="up">
                <article className="testimonial-card">
                  <div className="stars" aria-label="5 stars">
                    {[...Array(5)].map((_, si) => <Star key={si} size={18} fill="var(--brand-orange)" color="var(--brand-orange)" />)}
                  </div>
                  <p className="testimonial-text">"{test.text}"</p>
                  <div className="testimonial-author">
                    <div className="author-avatar" aria-hidden="true"></div>
                    <div className="author-info">
                      <h4>{test.name}</h4>
                      <p>{test.role}</p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>

      {/* --- FOOTER / CTA FINAL --- */}
      <footer className="footer-cta" id="contact">
        <ScrollReveal direction="up">
          <h2>{t.footer_title}</h2>
          <p>{t.footer_desc}</p>
          
          <div>
            <button className="cta-primary" onClick={handleContactClick}>
              <Mail size={20} /> {t.footer_cta}
            </button>
            <span className="cta-subtext" style={{justifyContent: 'center', marginTop: '15px'}}>
              <CheckCircle2 size={14} color="var(--success-green)"/> {t.hero_sub_cta}
            </span>
          </div>

          <p className="footer-email-contact">
            {t.footer_email_text}
            <a href="mailto:franco@gosurgedigital.digital">franco@gosurgedigital.digital</a>
          </p>
          
          <div style={{ marginTop: '5rem', scale: '0.45', opacity: 0.5, display: 'flex', justifyContent: 'center' }}>
            <Logo size="small" />
          </div>
          <p style={{ marginTop: '0', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            {t.footer_rights}
          </p>
        </ScrollReveal>
      </footer>
    </div>
  );
}
