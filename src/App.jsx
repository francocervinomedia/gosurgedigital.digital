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
  Mail,
  Shield,
  AlertTriangle,
  Eye,
  DollarSign
} from 'lucide-react';

// --- DICCIONARIO DE IDIOMAS (INGLÉS Y ESPAÑOL) ---
const translations = {
  en: {
    nav_problem: "The Problem",
    nav_system: "Our System",
    nav_results: "Results",
    nav_cta: "Free Audit",
    hero_kicker: "AD FRAUD DETECTION & GROWTH OPTIMIZATION",
    hero_title_1: "Are You Paying for",
    hero_title_2: "Fake Traffic?",
    hero_subtitle: "73% of accounts we audit show hidden cost inflation. We detect ad fraud, optimize your spend, and build predictable growth systems for E-commerce and B2B companies.",
    hero_cta: "Get Your Free Anti-Fraud Audit",
    hero_sub_cta: "Confidential analysis • No commitment",
    marquee: ["Ad Fraud Detection", "Hidden Cost Analysis", "ROAS Optimization", "Traffic Quality Audit", "B2B/B2C Lead Gen", "E-commerce Growth"],
    prob_kicker: "The Hidden Problem",
    prob_title: "How agencies inflate your ad costs without you knowing",
    prob_subtitle: "These tactics drain thousands from your budget every month. Most businesses never discover them.",
    prob_1_title: "Multi-Account Inflation",
    prob_1_desc: "Your agency runs ads from multiple advertisers (Vietnam, India, shell accounts) to hide real CPAs and charge you 2-3x actual costs.",
    prob_2_title: "Ghost Traffic Purchases",
    prob_2_desc: "Buying low-quality traffic from click farms and bot networks to inflate impression numbers while you pay premium rates.",
    prob_3_title: "Budget Black Holes",
    prob_3_desc: "Phantom campaigns, undisclosed markups, and opaque reporting that make it impossible to track where your money actually goes.",
    wf_kicker: "Our Anti-Fraud Process",
    wf_title: "From Detection to Predictable Growth",
    wf_subtitle: "A forensic audit followed by clean, data-driven systems.",
    wf_1: "1. Audit",
    wf_2: "2. Detect Fraud",
    wf_3: "3. Clean Setup",
    wf_4: "4. Scale Clean",
    bento_kicker: "What We Deliver",
    bento_title: "Transparent Growth Systems",
    bento_subtitle: "No hidden costs. No inflated numbers. Just real results you can track.",
    bento_1_title: "Forensic Ad Account Audit",
    bento_1_desc: "We analyze your current ad accounts for multi-advertiser schemes, bot traffic, phantom campaigns, and cost inflation tactics. Full confidential report included.",
    bento_2_title: "Clean E-commerce Systems",
    bento_2_desc: "Rebuild your acquisition funnels with verified traffic sources, transparent attribution, and CRO optimization that converts real buyers.",
    bento_3_title: "Verified B2B/B2C Leads",
    bento_3_desc: "High-intent lead generation with full source transparency. No fake contacts, no inflated numbers—every lead traceable to real campaigns.",
    bento_4_title: "Multi-Platform Mastery",
    bento_4_desc: "Meta, Google, TikTok managed with complete transparency. You see every dollar, every click, every conversion in real-time.",
    
    // --- TESTIMONIOS (MODIFICADOS SEGÚN TU PEDIDO) ---
    test_kicker: "Real Results",
    test_title: "What Happens After the Audit",
    test_1_text: "Go Surge found out we were wasting thousands on fake clicks. Since they cleaned up our accounts, we are getting real, high-quality B2B leads that actually turn into clients. Our cost to get a client dropped in half.",
    test_1_author: "Brad Blankman",
    test_1_role: "Founder, Roofbros",
    test_2_text: "We had no idea our previous agency had hidden fees and was inflating our numbers. The transparency Go Surge brought to our store completely changed our profit margins. Our online sales are breaking records.",
    test_2_author: "Dae Lim",
    test_2_role: "Founder & Creative Director, Sundae School",
    test_3_text: "The audit showed we were paying for ghost traffic that never bought anything. Now, every dollar we spend goes to real shoppers, and the sales at our jewelry store have never been healthier.",
    test_3_author: "Eli Adams",
    test_3_role: "Owner, Eli Adams Jewelers",
    // --------------------------------------------------

    stats_kicker: "The Cost of Fraud",
    stats_title: "What We Find in Most Audits",
    stat_1_number: "73%",
    stat_1_label: "of accounts show cost inflation",
    stat_2_number: "2-4x",
    stat_2_label: "average markup on real CPAs",
    stat_3_number: "$47K",
    stat_3_label: "average wasted spend per year",
    form_title: "Request Your Confidential Audit",
    form_subtitle: "We'll analyze your ad accounts and send you a detailed fraud detection report within 48 hours. Everything we find stays confidential.",
    form_name: "Full Name",
    form_email: "Work Email",
    form_company: "Company Name",
    form_website: "Website URL",
    form_spend: "Monthly Ad Spend",
    form_spend_option_1: "Under $5K",
    form_spend_option_2: "$5K - $25K",
    form_spend_option_3: "$25K - $100K",
    form_spend_option_4: "$100K+",
    form_platform: "Current Ad Platforms",
    form_platform_meta: "Meta (Facebook/Instagram)",
    form_platform_google: "Google Ads",
    form_platform_tiktok: "TikTok",
    form_platform_other: "Other",
    form_concern: "What concerns you most? (Optional)",
    form_submit: "Get My Free Audit",
    form_privacy: "Your data is confidential. We never share audit findings with third parties.",
    footer_title: "Ready to know the truth about your ad spend?",
    footer_desc: "We work with a limited number of companies to ensure deep, confidential analysis. Get your fraud detection report in 48 hours.",
    footer_cta: "Schedule Audit Call",
    footer_email_text: "Or email us directly: ",
    footer_rights: "© 2026 Go Surge Digital. All rights reserved.",
    footer_confidential: "All audits are conducted under strict confidentiality agreements"
  },
  es: {
    nav_problem: "El Problema",
    nav_system: "Nuestro Sistema",
    nav_results: "Resultados",
    nav_cta: "Auditoría Gratis",
    hero_kicker: "DETECCIÓN DE FRAUDE PUBLICITARIO Y OPTIMIZACIÓN DE CRECIMIENTO",
    hero_title_1: "¿Estás Pagando por",
    hero_title_2: "Tráfico Falso?",
    hero_subtitle: "El 73% de las cuentas que auditamos muestran inflación de costos ocultos. Detectamos fraude publicitario, optimizamos tu inversión y construimos sistemas de crecimiento predecibles para empresas E-commerce y B2B.",
    hero_cta: "Obtener Auditoría Anti-Fraude Gratuita",
    hero_sub_cta: "Análisis confidencial • Sin compromiso",
    marquee: ["Detección de Fraude", "Análisis de Costos Ocultos", "Optimización de ROAS", "Auditoría de Calidad", "Leads B2B/B2C", "Crecimiento E-commerce"],
    prob_kicker: "El Problema Oculto",
    prob_title: "Cómo las agencias inflan tus costos publicitarios sin que lo sepas",
    prob_subtitle: "Estas tácticas drenan miles de tu presupuesto cada mes. La mayoría de negocios nunca las descubren.",
    prob_1_title: "Inflación Multi-Cuenta",
    prob_1_desc: "Tu agencia corre ads desde múltiples anunciantes (Vietnam, India, cuentas fantasma) para ocultar los CPAs reales y cobrarte 2-3x los costos verdaderos.",
    prob_2_title: "Compra de Tráfico Fantasma",
    prob_2_desc: "Compran tráfico de baja calidad desde click farms y redes de bots para inflar números de impresiones mientras tú pagas tarifas premium.",
    prob_3_title: "Agujeros Negros de Presupuesto",
    prob_3_desc: "Campañas fantasma, márgenes no revelados y reportes opacos que hacen imposible rastrear dónde va realmente tu dinero.",
    wf_kicker: "Nuestro Proceso Anti-Fraude",
    wf_title: "De la Detección al Crecimiento Predecible",
    wf_subtitle: "Auditoría forense seguida de sistemas limpios basados en datos.",
    wf_1: "1. Auditoría",
    wf_2: "2. Detectar Fraude",
    wf_3: "3. Setup Limpio",
    wf_4: "4. Escalar Limpio",
    bento_kicker: "Lo Que Entregamos",
    bento_title: "Sistemas de Crecimiento Transparentes",
    bento_subtitle: "Sin costos ocultos. Sin números inflados. Solo resultados reales que puedes rastrear.",
    bento_1_title: "Auditoría Forense de Cuentas Publicitarias",
    bento_1_desc: "Analizamos tus cuentas actuales para detectar esquemas multi-anunciante, tráfico de bots, campañas fantasma y tácticas de inflación de costos. Reporte confidencial completo incluido.",
    bento_2_title: "Sistemas E-commerce Limpios",
    bento_2_desc: "Reconstruimos tus embudos de adquisición con fuentes de tráfico verificadas, atribución transparente y optimización CRO que convierte compradores reales.",
    bento_3_title: "Leads B2B/B2C Verificados",
    bento_3_desc: "Generación de leads de alta intención con total transparencia de fuentes. Sin contactos falsos, sin números inflados—cada lead rastreable a campañas reales.",
    bento_4_title: "Dominio Multi-Plataforma",
    bento_4_desc: "Meta, Google, TikTok manejados con total transparencia. Ves cada dólar, cada clic, cada conversión en tiempo real.",
    
    // --- TESTIMONIOS (MODIFICADOS SEGÚN TU PEDIDO) ---
    test_kicker: "Resultados Reales",
    test_title: "Qué Pasa Después de la Auditoría",
    test_1_text: "Go Surge descubrió que estábamos tirando miles de dólares a la basura en clics falsos. Desde que limpiaron nuestras cuentas, recibimos contactos B2B reales que sí se convierten en clientes. Nuestro costo para conseguir un cliente bajó a la mitad.",
    test_1_author: "Brad Blankman",
    test_1_role: "Founder, Roofbros",
    test_2_text: "No teníamos idea de que nuestra antigua agencia tenía costos ocultos e inflaba nuestros números. La transparencia que Go Surge le dio a nuestra tienda cambió por completo nuestros márgenes de ganancia. Nuestras ventas online están rompiendo récords.",
    test_2_author: "Dae Lim",
    test_2_role: "Founder & Directora Creativa, Sundae School",
    test_3_text: "La auditoría demostró que pagábamos por tráfico fantasma que nunca compraba nada. Ahora, cada dólar que invertimos va a compradores reales, y las ventas de nuestra joyería nunca han estado tan sanas.",
    test_3_author: "Eli Adams",
    test_3_role: "Propietario, Eli Adams Jewelers",
    // --------------------------------------------------

    stats_kicker: "El Costo del Fraude",
    stats_title: "Lo Que Encontramos en la Mayoría de Auditorías",
    stat_1_number: "73%",
    stat_1_label: "de cuentas muestran inflación de costos",
    stat_2_number: "2-4x",
    stat_2_label: "margen promedio sobre CPAs reales",
    stat_3_number: "$47K",
    stat_3_label: "gasto desperdiciado promedio por año",
    form_title: "Solicita tu Auditoría Confidencial",
    form_subtitle: "Analizaremos tus cuentas publicitarias y te enviaremos un reporte detallado de detección de fraude en 48 horas. Todo lo que encontremos se mantiene confidencial.",
    form_name: "Nombre Completo",
    form_email: "Email Corporativo",
    form_company: "Nombre de la Empresa",
    form_website: "URL del Sitio Web",
    form_spend: "Inversión Publicitaria Mensual",
    form_spend_option_1: "Menos de $5K",
    form_spend_option_2: "$5K - $25K",
    form_spend_option_3: "$25K - $100K",
    form_spend_option_4: "$100K+",
    form_platform: "Plataformas Publicitarias Actuales",
    form_platform_meta: "Meta (Facebook/Instagram)",
    form_platform_google: "Google Ads",
    form_platform_tiktok: "TikTok",
    form_platform_other: "Otras",
    form_concern: "¿Qué te preocupa más? (Opcional)",
    form_submit: "Obtener Mi Auditoría Gratis",
    form_privacy: "Tus datos son confidenciales. Nunca compartimos hallazgos de auditorías con terceros.",
    footer_title: "¿Listo para conocer la verdad sobre tu inversión publicitaria?",
    footer_desc: "Trabajamos con un número limitado de empresas para asegurar análisis profundos y confidenciales. Obtén tu reporte de detección de fraude en 48 horas.",
    footer_cta: "Agendar Llamada de Auditoría",
    footer_email_text: "O escríbenos directamente: ",
    footer_rights: "© 2026 Go Surge Digital. Todos los derechos reservados.",
    footer_confidential: "Todas las auditorías se realizan bajo estrictos acuerdos de confidencialidad"
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

  const W = '#ffffff';
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
    stroke: isActive ? W : NAVY,
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
               <path d="M88,72 L88,88 L112,88 L112,72 Z M95,75 L95,85 M105,75 L105,85" strokeWidth="2"/>
            </g>

            <circle cx="250" cy="80" r="34" strokeWidth="2" style={nodeStyle(step >= 3)} />
            <g fill="none" strokeLinecap="round" strokeLinejoin="round" style={iconStyle(step >= 3)}>
              <path d="M238,75 L262,75 M238,80 L262,80 M238,85 L250,85" strokeWidth="2" />
              <circle cx="258" cy="72" r="2" fill="currentColor"/>
            </g>

            <circle cx="400" cy="80" r="34" strokeWidth="2" style={nodeStyle(step >= 5)} />
            <g fill="none" strokeLinecap="round" strokeLinejoin="round" style={iconStyle(step >= 5)}>
              <path d="M388,82 L394,76 L406,88 L412,82" strokeWidth="2"/>
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

// --- COMPONENTE DE FORMULARIO ---
const AuditForm = ({ t }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    spend: '',
    platforms: [],
    concern: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        platforms: checked 
          ? [...prev.platforms, value]
          : prev.platforms.filter(p => p !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const myForm = e.target;
    const data = new FormData(myForm);

    // Enviar a Netlify por detrás sin recargar la página (AJAX)
    fetch(window.location.href, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        // Opcional: resetear el form después de 5 segundos
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', company: '', website: '', spend: '', platforms: [], concern: '' });
        }, 5000);
      })
      .catch((error) => {
        console.error(error);
        setIsSubmitting(false);
      });
  };

  return (
    <section className="form-section" id="audit-form">
      <ScrollReveal>
        <div className="form-container">
          <div className="form-header">
            <Shield className="form-icon" size={48} />
            <h2>{t.form_title}</h2>
            <p>{t.form_subtitle}</p>
          </div>

          {/* Formulario conectado a Netlify para enviar correos automáticos sin mailto: */}
          <form name="audit-contact" method="POST" data-netlify="true" className="audit-form" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="audit-contact" />
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">{t.form_name} *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Juan Pérez"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t.form_email} *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="juan@empresa.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="company">{t.form_company} *</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Mi Empresa SRL"
                />
              </div>

              <div className="form-group">
                <label htmlFor="website">{t.form_website} *</label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  required
                  placeholder="https://miempresa.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="spend">{t.form_spend} *</label>
              <select
                id="spend"
                name="spend"
                value={formData.spend}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona un rango</option>
                <option value="under-5k">{t.form_spend_option_1}</option>
                <option value="5k-25k">{t.form_spend_option_2}</option>
                <option value="25k-100k">{t.form_spend_option_3}</option>
                <option value="100k-plus">{t.form_spend_option_4}</option>
              </select>
            </div>

            <div className="form-group">
              <label>{t.form_platform} *</label>
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="platforms[]"
                    value="meta"
                    checked={formData.platforms.includes('meta')}
                    onChange={handleChange}
                  />
                  <span>{t.form_platform_meta}</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="platforms[]"
                    value="google"
                    checked={formData.platforms.includes('google')}
                    onChange={handleChange}
                  />
                  <span>{t.form_platform_google}</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="platforms[]"
                    value="tiktok"
                    checked={formData.platforms.includes('tiktok')}
                    onChange={handleChange}
                  />
                  <span>{t.form_platform_tiktok}</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="platforms[]"
                    value="other"
                    checked={formData.platforms.includes('other')}
                    onChange={handleChange}
                  />
                  <span>{t.form_platform_other}</span>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="concern">{t.form_concern}</label>
              <textarea
                id="concern"
                name="concern"
                value={formData.concern}
                onChange={handleChange}
                rows="4"
                placeholder="Ej: Sospecho que mis números no cuadran, veo anunciantes extraños en mi cuenta, etc."
              />
            </div>

            <button type="submit" className={`form-submit ${isSubmitted ? 'success' : ''}`} disabled={isSubmitting || isSubmitted}>
              {isSubmitted ? (
                <>
                  <CheckCircle2 size={24} className="success-icon-animate" />
                  Enviado
                </>
              ) : isSubmitting ? (
                <>Enviando...</>
              ) : (
                <>
                  <Eye size={20} />
                  {t.form_submit}
                </>
              )}
            </button>

            <p className="form-privacy">
              <Shield size={16} />
              {t.form_privacy}
            </p>
          </form>
        </div>
      </ScrollReveal>
    </section>
  );
};

// --- SECCIÓN DE ESTADÍSTICAS ---
const StatsSection = ({ t }) => {
  return (
    <section className="stats-section">
      <ScrollReveal>
        <header className="section-header">
          <p className="section-kicker">{t.stats_kicker}</p>
          <h2 className="section-title">{t.stats_title}</h2>
        </header>
      </ScrollReveal>

      <div className="stats-grid">
        <ScrollReveal delay={0.1}>
          <div className="stat-card">
            <AlertTriangle className="stat-icon" />
            <div className="stat-number">{t.stat_1_number}</div>
            <div className="stat-label">{t.stat_1_label}</div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="stat-card">
            <TrendingUp className="stat-icon" />
            <div className="stat-number">{t.stat_2_number}</div>
            <div className="stat-label">{t.stat_2_label}</div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="stat-card">
            <DollarSign className="stat-icon" />
            <div className="stat-number">{t.stat_3_number}</div>
            <div className="stat-label">{t.stat_3_label}</div>
          </div>
        </ScrollReveal>
      </div>
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

  // --- FUNCIÓN PARA CALENDLY ---
  const handleCalendlyClick = (e) => {
    e.preventDefault();
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
        .hero-title { font-size: clamp(3rem, 7vw, 5.5rem); font-weight: 800; line-height: 1.1; margin-bottom: 1.5rem; letter-spacing: -0.02em; color: #ffffff; }
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

        /* Estadísticas */
        .stats-section { padding: 8rem 5%; background: rgba(10, 10, 15, 0.3); }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; max-width: 1000px; margin: 0 auto; }
        .stat-card { background: rgba(10, 10, 15, 0.5); border: 1px solid rgba(249, 115, 22, 0.3); border-radius: 20px; padding: 3rem 2rem; text-align: center; transition: all 0.4s ease; }
        .stat-card:hover { transform: translateY(-5px); border-color: rgba(249, 115, 22, 0.6); box-shadow: 0 20px 40px rgba(249, 115, 22, 0.15); }
        .stat-icon { width: 48px; height: 48px; margin: 0 auto 1.5rem; color: var(--brand-orange); }
        .stat-number { font-size: 3.5rem; font-weight: 800; color: var(--brand-orange); margin-bottom: 0.5rem; }
        .stat-label { font-size: 1.1rem; color: var(--text-muted); font-weight: 500; }

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

        /* Formulario */
        .form-section { padding: 10rem 5%; background: rgba(10, 10, 15, 0.3); }
        .form-container { max-width: 800px; margin: 0 auto; background: rgba(10, 10, 15, 0.5); border: 1px solid rgba(27, 58, 107, 0.3); border-radius: 24px; padding: 4rem 3rem; backdrop-filter: blur(12px); }
        .form-header { text-align: center; margin-bottom: 3rem; }
        .form-icon { width: 48px; height: 48px; margin: 0 auto 1.5rem; color: var(--brand-orange); }
        .form-header h2 { font-size: 2.5rem; font-weight: 800; color: #fff; margin-bottom: 1rem; }
        .form-header p { font-size: 1.1rem; color: var(--text-muted); line-height: 1.6; }
        .audit-form { display: flex; flex-direction: column; gap: 1.5rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .form-group { display: flex; flex-direction: column; gap: 0.5rem; }
        .form-group label { font-size: 0.95rem; font-weight: 600; color: rgba(255,255,255,0.9); }
        .form-group input, .form-group select, .form-group textarea { padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: #fff; font-family: 'Space Grotesk', sans-serif; font-size: 1rem; transition: all 0.3s ease; }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus { outline: none; border-color: var(--brand-orange); background: rgba(255,255,255,0.08); }
        .form-group textarea { resize: vertical; }
        .checkbox-group { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .checkbox-label { display: flex; align-items: center; gap: 0.5rem; cursor: pointer; padding: 0.8rem; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; transition: all 0.3s ease; }
        .checkbox-label:hover { border-color: var(--brand-orange); background: rgba(249, 115, 22, 0.05); }
        .checkbox-label input[type="checkbox"] { width: 18px; height: 18px; cursor: pointer; }
        .form-submit { padding: 1.2rem 2.8rem; font-size: 1.15rem; font-weight: 700; color: #000; background: linear-gradient(135deg, #F97316 0%, #ea6c10 100%); border: none; border-radius: 12px; cursor: pointer; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); display: flex; align-items: center; justify-content: center; gap: 0.8rem; box-shadow: 0 10px 30px rgba(249, 115, 22, 0.2); }
        .form-submit:hover:not(:disabled) { transform: translateY(-4px) scale(1.02); box-shadow: 0 20px 40px rgba(249, 115, 22, 0.4); }
        .form-submit:disabled { opacity: 0.8; cursor: not-allowed; }
        .form-submit.success { background: var(--success-green); color: #fff; box-shadow: 0 10px 30px rgba(34, 197, 94, 0.3); }
        .success-icon-animate { animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        @keyframes popIn { 0% { transform: scale(0); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        .form-privacy { text-align: center; font-size: 0.85rem; color: var(--text-muted); display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-top: 1rem; }

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
        .footer-confidential { margin-top: 2rem; font-size: 0.9rem; color: var(--text-muted); display: flex; align-items: center; justify-content: center; gap: 0.5rem; }

        /* Media Queries */
        @media (max-width: 900px) {
          .bento-grid { grid-template-columns: 1fr; }
          .labels { gap: 5px; padding: 0 10px !important; }
          .lb { font-size: 10px; width: auto !important; }
          .form-row { grid-template-columns: 1fr; }
          .checkbox-group { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .glass-nav { padding: 1rem 5%; }
          .nav-logo-wrapper { transform: scale(0.45); margin: -25px -40px; }
          .nav-controls { gap: 0.8rem; }
          .nav-button { padding: 0.7rem 1.2rem; font-size: 0.9rem; }
          .lang-toggle { padding: 0.4rem 0.6rem; font-size: 0.85rem; }
          .hero-section { padding-top: 10rem; }
          .hero-logo { display: none; }
          .form-container { padding: 2.5rem 1.5rem; }
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
          <button className="nav-button" onClick={handleCalendlyClick}>
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
              <a href="#audit-form" className="cta-primary">
                <Eye size={20} /> {t.hero_cta}
              </a>
              <span className="cta-subtext">
                <Shield size={14} color="var(--success-green)"/> {t.hero_sub_cta}
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

        {/* --- ESTADÍSTICAS DE FRAUDE --- */}
        <StatsSection t={t} />

        {/* --- PAIN POINTS / FRAUD TACTICS --- */}
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
                <AlertTriangle className="problem-icon" />
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
                <DollarSign className="problem-icon" />
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
                  <Eye className="bento-card-icon" />
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

        {/* --- FORMULARIO DE AUDITORÍA --- */}
        <AuditForm t={t} />

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
            <button className="cta-primary" onClick={handleCalendlyClick}>
              <Mail size={20} /> {t.footer_cta}
            </button>
            <span className="cta-subtext" style={{justifyContent: 'center', marginTop: '15px'}}>
              <Shield size={14} color="var(--success-green)"/> {t.hero_sub_cta}
            </span>
          </div>

          <p className="footer-email-contact">
            {t.footer_email_text}
            <a href="mailto:franco@gosurgedigital.digital">franco@gosurgedigital.digital</a>
          </p>

          <p className="footer-confidential">
            <Shield size={16} color="var(--brand-orange)" />
            {t.footer_confidential}
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
