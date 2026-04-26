/**
 * Template Name: sasico | Task-Management HTML Template
 * Description: Task-Management.
 * Version: 1.0.0
 * Author: ib-thems
 * Author https://themeforest.net/user/ib-themes
 * License: https://tinyurl.com/52b6y2rb
 */

document.addEventListener("DOMContentLoaded", function () {
  // ============================
  // Preloader
  // ============================
  var Preloader = {
    init: function () {
      var preloader = document.getElementById("preloader");
      if (!preloader) return;

      function hidePreloader() {
        preloader.style.transition = "opacity 0.5s ease";
        preloader.style.opacity = "0";
        setTimeout(function () {
          preloader.style.display = "none";
        }, 600);
      }

      setTimeout(function () {
        if (preloader.style.display !== "none") hidePreloader();
      }, 2000);

      window.addEventListener("load", hidePreloader);

      setTimeout(function () {
        if (preloader.style.display !== "none") hidePreloader();
      }, 5000);
    },
  };

  // ============================
  // Swiper Sliders
  // ============================
  var SwiperSliders = {
    init: function () {
      if (typeof Swiper === "undefined") return;

      // BRAND SLIDER
      if (document.querySelector(".brand")) {
        const brandEl = document.querySelector(".brand");
        const brandSlides = brandEl.querySelectorAll('.swiper-slide').length;

        new Swiper(".brand", {
          loop: brandSlides > 6,
          autoplay: { delay: 3000, disableOnInteraction: false },
          slidesPerView: 7,
          spaceBetween: 20,
          breakpoints: {
            1920: { slidesPerView: 7, spaceBetween: 30 },
            1440: { slidesPerView: 6, spaceBetween: 30 },
            1366: { slidesPerView: 5, spaceBetween: 30 },
            1201: { slidesPerView: 4, spaceBetween: 30 },
            1025: { slidesPerView: 4, spaceBetween: 30 },
            769: { slidesPerView: 3, spaceBetween: 30 },
            577: { slidesPerView: 2, spaceBetween: 30 },
            480: { slidesPerView: 2, spaceBetween: 20 },
            375: { slidesPerView: 2, spaceBetween: 20 },
          },
        });
      }
    },
  };

  // ============================
  // Scroll To Top
  // ============================
  var ScrollToTop = {
    init: function () {
      var btn = document.getElementById("scrollTopBtn");
      if (!btn) return;

      btn.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    },
  };

  // ============================
  // Sticky Header
  // ============================
  var StickyHeader = {
    init: function () {
      var header = document.querySelector(".header-main");
      if (!header) return;

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      });
    },
  };

  // ============================
  // Smooth Scroll
  // ============================
  var MenuScroll = {
    init: function () {
      var menuLinks = document.querySelectorAll(
        ".main-menu11 a, .scrol-menu a"
      );
      var header =
        document.querySelector(".header-area") ||
        document.querySelector("header");
      var headerHeight = header ? header.offsetHeight : 120;
      var offset = headerHeight;
      menuLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
          var targetId = this.getAttribute("href");

          if (targetId && targetId.startsWith("#")) {
            e.preventDefault();

            var targetEl = document.querySelector(targetId);
            if (targetEl) {
              var scrollPos =
                targetEl.getBoundingClientRect().top + window.pageYOffset;

              window.scrollTo({
                top: scrollPos - offset,
                behavior: "smooth",
              });
            }
          }
        });
      });
      window.addEventListener("load", function () {
        if (window.location.hash) {
          var hash = window.location.hash;
          var targetEl = document.querySelector(hash);

          if (targetEl) {
            setTimeout(function () {
              var scrollPos =
                targetEl.getBoundingClientRect().top + window.pageYOffset;

              window.scrollTo({
                top: scrollPos - offset,
                behavior: "smooth",
              });
            }, 200);
          }
        }
      });
    },
  };

  // ============================
  // onepage menu
  // ============================
  var onePageMenu = {
    init: function () {
      if (typeof MenuSpy === "undefined") {
        console.error("MenuSpy is not loaded!");
        return;
      }

      var menus = document.querySelectorAll(".one_page_nav");

      if (!menus.length) return;

      menus.forEach(function (menu) {
        new MenuSpy(menu, {
          menuItemSelector: 'a[href^="#"]',
          activeClass: "active",
          threshold: 150,
          enableLocationHash: false,
        });
      });

      this.syncMenus();
      this.setInitialActive();
    },

    syncMenus: function () {
      document.addEventListener("click", function (e) {
        var link = e.target.closest('.one_page_nav a[href^="#"]');
        if (!link) return;

        var target = link.getAttribute("href");

        document
          .querySelectorAll('.one_page_nav a[href^="#"]')
          .forEach(function (item) {
            item.classList.remove("active");
            if (item.getAttribute("href") === target) {
              item.classList.add("active");
            }
          });
      });
    },

    setInitialActive: function () {
      window.addEventListener("load", function () {
        if (window.location.hash) return;

        document.querySelectorAll(".one_page_nav li").forEach(function (li) {
          li.classList.remove("active");
        });

        var firstLinks = document.querySelectorAll(
          ".one_page_nav li:first-child"
        );

        firstLinks.forEach(function (li) {
          li.classList.add("active");
        });
      });
    },
  };

  // ✅ ONLY RUN ON index-onepage.html
  if (window.location.pathname.includes("index-onepage.html")) {
    onePageMenu.init();
  }

  // ============================
  // Mobile Menu
  // ============================
  var MobileMenu = {
    init: function () {
      var hamBtn = document.querySelector(".hamburger-btn"),
        menu = document.querySelector(".mobile-menu"),
        overlay = document.querySelector(".menu-overlay"),
        closeBtn = document.querySelector(".close-btn");

      if (!hamBtn || !menu || !overlay) return;

      function openMenu() {
        menu.classList.add("active");
        overlay.classList.add("active");
      }

      function closeMenu() {
        menu.classList.remove("active");
        overlay.classList.remove("active");
      }

      hamBtn.onclick = openMenu;
      overlay.onclick = closeMenu;

      if (closeBtn) closeBtn.onclick = closeMenu;
    },
  };


  // ============================
  // MenuActive
  // ============================
  var ActiveMenu = {
    init: function () {
      var currentPage = window.location.pathname.split("/").pop();

      // ---- DESKTOP ACTIVE SYSTEM ----
      function setActive(menuLi) {
        var links = menuLi.querySelectorAll(":scope > a");
        var found = false;

        links.forEach(function (link) {
          var linkPage = link.getAttribute("href").split("/").pop();
          if (linkPage === currentPage) {
            link.classList.add("active");
            found = true;
          } else {
            link.classList.remove("active");
          }
        });

        var nestedLinks = menuLi.querySelectorAll("li a");
        nestedLinks.forEach(function (link) {
          var linkPage = link.getAttribute("href").split("/").pop();
          if (linkPage === currentPage) {
            link.classList.add("active");
            found = true;

            var parentLi = link.closest("li");
            if (parentLi) parentLi.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });

        if (found) {
          menuLi.classList.add("active");
          var topLink = menuLi.querySelector(":scope > a");
          if (topLink) topLink.classList.add("active");
        } else {
          menuLi.classList.remove("active");
          var topLink = menuLi.querySelector(":scope > a");
          if (topLink) topLink.classList.remove("active");
        }

        return found;
      }

      var topMenuItems = document.querySelectorAll(
        " .main-menu10.menu-style10, .main-menu11.menu-style11 > ul > li"
      );
      topMenuItems.forEach(function (li) {
        setActive(li);
      });

      // ---- MOBILE MENU ACTIVE SYSTEM ----
      const mobileLinks = document.querySelectorAll(".mobile-menu ul li a");

      mobileLinks.forEach((link) => {
        const linkPage = link.getAttribute("href").split("/").pop();

        // Page match → active
        if (linkPage === currentPage) {
          link.classList.add("active");
        }

        // Click par active
        link.addEventListener("click", function () {
          mobileLinks.forEach((l) => l.classList.remove("active"));
          this.classList.add("active");
        });
      });
    },
  };

  // ============================
  // DarkModeToggle
  // ============================
  var DarkModeToggle = {
    init: function () {
      this.body = document.body;
      this.btn = document.getElementById("darkModeBtn");
      if (!this.btn) return;

      if (localStorage.getItem("darkMode") === "on") {
        this.enableDark();
      }

      this.btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.toggleDark();
      });
    },

    enableDark: function () {
      this.body.classList.add("active");
      this.btn.classList.add("active");

      localStorage.setItem("darkMode", "on");
    },

    disableDark: function () {
      this.body.classList.remove("active");
      this.btn.classList.remove("active");

      localStorage.setItem("darkMode", "off");
    },

    toggleDark: function () {
      if (this.body.classList.contains("active")) {
        this.disableDark();
      } else {
        this.enableDark();
      }
    },
  };

  // ============================
  // Language Toggle (ES default)
  // ============================
  var LanguageToggle = {
    current: "es",
    dict: {
      en: {
        navSolution: "Solution",
        navFeatures: "Features",
        navValue: "Value",
        navUseCases: "FAQ",
        navStart: "Start",
        signinLabel: "Sign in",
        signupLabel: "Sign up",
        heroKicker: "Asset Intelligence Platform",
        heroTitle:
          "Make better investment decisions — before losing money.",
        heroSubtitle:
          "Fincora helps you know if an investment is worth it - before committing capital.",
        heroPrimaryCta: "Start evaluating your investments",
        heroRating: "Understand your returns in minutes",
        heroPunch: "Stop guessing. Start measuring.",
        problemKicker: "Problem",
        problemTitle:
          "Most investment decisions are made with incomplete data.",
        problemBody:
          "Spreadsheets break when things get complex\nReturns look good — until financing changes everything\nPortfolio performance is hard to understand",
        problemCard1Title: "You don't need more data.",
        problemCard1Body: "You need to make decisions based on real numbers.",
        problemCard2Title: "Not just data.",
        problemCard2Body: "Financial intelligence.",
        problemCard2Extra: "Clear decisions based on real numbers.",
        problemCard3Title: "Know what matters.",
        problemCard3Body:
          "Clear and actionable insights for every decision.",
        solutionTitle:
          "Fincora connects your assets, your cash flows, and your decisions in one place.",
        solutionBody:
          "Model your investments and understand how much you can gain — and what you could lose.",
        feature1Title: "Structured financial analysis",
        feature1Body:
          "Evaluate each asset with clear, consistent metrics.",
        feature2Title: "Scenarios and simulation",
        feature2Body:
          "Understand how returns change under different assumptions.",
        feature3Title: "Enterprise-grade security",
        feature3Body:
          "Your financial data stays protected and under your control.",
        benefitsKicker: "Benefits of Fincora",
        benefitsTitle:
          "Outcomes that help you decide with confidence",
        benefit1Title:
          "Avoid investment mistakes that can cost you thousands",
        benefit1Body:
          "Analyze key scenarios before committing capital.",
        benefit2Title:
          "Understand the real impact of debt on your returns",
        benefit2Body:
          "Compare financing structures with financial clarity.",
        benefit3Title:
          "See your portfolio performance in one view",
        benefit3Body:
          "Connect assets, cash flows, and outcomes to decide faster.",
        benefit4Title:
          "Detect risks before they affect your capital",
        benefit4Body:
          "Identify early warning signals and act in time.",
        benefit5Title:
          "Make decisions with data, not intuition",
        benefit5Body:
          "Prioritize opportunities by return, risk, and liquidity.",
        pricingKicker: "Pricing",
        pricingTitle:
          "Choose how you want to make better investment decisions",
        pricingSubtitle:
          "Choose the plan that matches your analysis depth and portfolio complexity.",
        billingMonthly: "Monthly",
        billingYearly: "Yearly - ",
        billingYearlyPromo: "Pay 10 months, get 12",
        pricingMxnNote:
          "MXN prices may vary slightly based on exchange rates.",
        starterPriceAmountM: "$19 USD / $349 MXN",
        starterPricePeriodM: "/month",
        proPriceAmountM: "$59 USD / $999 MXN",
        proPricePeriodM: "/month",
        businessPriceAmountM: "$129 USD / $2,199 MXN",
        businessPricePeriodM: "/month",
        starterPriceAmountY: "$190 USD / $3,490 MXN",
        starterPricePeriodY: "/year",
        proPriceAmountY: "$590 USD / $9,990 MXN",
        proPricePeriodY: "/year",
        businessPriceAmountY: "$1,290 USD / $21,990 MXN",
        businessPricePeriodY: "/year",
        starterTitleM: "Starter",
        starterSubtitleM:
          "Analyze and validate your first investments with clarity",
        starterAnnualM:
          "$190 USD / $3,490 MXN / year (2 months free)",
        starterDescM:
          "Everything you need to analyze your first investments",
        starterFeature1M: "Up to 5 assets",
        starterFeature2M: "Financial modeling (ROI, IRR, NPV, Payback)",
        starterFeature3M: "Basic investment scenarios",
        starterFeature4M: "Asset-level insights",
        starterFeature5M: "Export results (PDF)",
        starterFeature6M: "Email support",
        starterCtaM: "Start free",
        proTitleM: "Pro",
        proBadgeM: "Most popular",
        proSubtitleM: "Make decisions with full portfolio visibility",
        proAnnualM: "$590 USD / $9,990 MXN / year (2 months free)",
        proDescM: "Advanced analysis and full portfolio visibility",
        proFeature1M: "Unlimited assets",
        proFeature2M:
          "Portfolio-level aggregation (project and portfolio views)",
        proFeature3M: "Financing modeling (debt vs equity)",
        proFeature4M: "Advanced insights and alerts",
        proFeature5M: "Scenario analysis (best and worst case)",
        proFeature6M: "Investment comparison tools",
        proFeature7M: "Priority support",
        proCtaM: "Start free",
        businessTitleM: "Business",
        businessSubtitleM:
          "Operate investment decisions at a team level",
        businessAnnualM: "$1,290 USD / $21,990 MXN / year (2 months free)",
        businessDescM: "Full financial intelligence for teams and portfolios",
        businessFeature1M: "Everything in Pro",
        businessFeature2M: "Multi-user access (roles and permissions)",
        businessFeature3M: "Advanced portfolio analytics",
        businessFeature4M: "Investor-ready reports",
        businessFeature5M: "Custom financial assumptions",
        businessFeature6M: "Document management (basic)",
        businessFeature7M: "Dedicated support",
        businessCtaM: "Start free",
        starterTitleY: "Starter",
        starterSubtitleY:
          "Analyze and validate your first investments with clarity",
        starterMonthlyEqY:
          "$19 USD / $349 MXN per month equivalent (2 months free)",
        starterDescY:
          "Everything you need to analyze your first investments",
        starterCtaY: "Start free",
        proTitleY: "Pro",
        proBadgeY: "Most popular",
        proSubtitleY: "Make decisions with full portfolio visibility",
        proMonthlyEqY:
          "$59 USD / $999 MXN per month equivalent (2 months free)",
        proDescY: "Advanced analysis and full portfolio visibility",
        proCtaY: "Start free",
        businessTitleY: "Business",
        businessSubtitleY:
          "Operate investment decisions at a team level",
        businessMonthlyEqY:
          "$129 USD / $2,199 MXN per month equivalent (2 months free)",
        businessDescY: "Full financial intelligence for teams and portfolios",
        businessCtaY: "Start free",
        pricingFinalTitle: "Before you invest, run it through Fincora.",
        pricingFinalBody:
          "It takes minutes — and can prevent a bad decision with real money.",
        pricingFinalCta: "Start analyzing now",
        faqTitle: "Everything you need to know before getting started",
        faqSubtitle:
          "Clear answers to make better decisions before investing.",
        faqQ1: "1. What problem does Fincora actually solve?",
        faqA1:
          "Fincora helps you know if an investment is worth it before committing capital. It models revenue, costs, and financing so you understand real returns and make data-driven decisions.",
        faqQ2: "2. How difficult is it to use Fincora?",
        faqA2:
          "No technical skills are required. You can model an asset in minutes and get clear metrics like ROI, IRR, and cash flow.",
        faqQ3: "3. How reliable are the results?",
        faqA3:
          "Metrics are calculated using standard financial models used in real investments. Fincora doesn't estimate outcomes — it builds them from clear cash flows and assumptions.",
        faqQ4: "4. Can I use Fincora before having real data?",
        faqA4:
          "Yes. You can start with estimated scenarios and later replace them with real data as your asset operates.",
        faqQ5: "5. What if Fincora doesn't provide value?",
        faqA5:
          "You can try the platform risk-free and validate if it actually improves your decisions before scaling usage.",
        faqQ6: "6. How do I know if an investment is good or bad?",
        faqA6:
          "Fincora shows ROI, IRR, cash flow, and payback, so you can compare scenarios and make decisions with data, not intuition.",
        footerHeadline:
          "Every investment decision, backed by data.",
        footerSubhead:
          "From your first asset to your full portfolio, Fincora helps you decide with confidence.",
        footerVideoLabel: "See how it works",
        footerProductTitle: "Product",
        footerCompanyTitle: "Company",
        footerLinkIntegrations: "Integrations",
        footerLinkDownloads: "Downloads",
        footerLinkPricing: "Pricing",
        footerLinkAbout: "About us",
        footerLinkBlog: "Latest blog",
        footerLinkCustomers: "Our customers",
        footerLinkCareers: "Careers",
        footerCopyright: "Fincora, 2026 © All rights reserved",
        footerTermsLink: "Terms and conditions",
        footerPrivacyLink: "Privacy policy",
        footerCta: "Start free",
        footerCtaSubline:
          "No complex setup required. Get started in minutes.",
        footerTagline: "Analyze. Evaluate. Decide.",
      },
      es: {
        navSolution: "Solución",
        navFeatures: "Funciones",
        navValue: "Valor",
        navUseCases: "Preguntas frecuentes",
        navStart: "Empezar",
        signinLabel: "Iniciar sesión",
        signupLabel: "Crear cuenta",
        heroKicker: "Plataforma de Inteligencia de Activos",
        heroTitle:
          "Toma mejores decisiones de inversión — antes de perder dinero.",
        heroSubtitle:
          "Fincora te ayuda a saber si una inversión vale la pena - antes de comprometer capital.",
        heroPrimaryCta: "Empieza a evaluar tus inversiones",
        heroRating: "Entiende tus retornos en minutos",
        heroPunch: "Deja de adivinar. Empieza a medir.",
        problemKicker: "Problema",
        problemTitle:
          "La mayoría de las decisiones de inversión se toman con información incompleta.",
        problemBody:
          "Las hojas de cálculo fallan cuando todo se vuelve complejo\nLos retornos se ven bien — hasta que el financiamiento cambia todo\nEl desempeño del portafolio es difícil de entender",
        problemCard1Title: "No necesitas más datos.",
        problemCard1Body: "Necesitas tomar decisiones con números reales.",
        problemCard2Title: "No solo datos.",
        problemCard2Body: "Inteligencia financiera.",
        problemCard2Extra:
          "Decisiones claras, basadas en números reales.",
        problemCard3Title: "Enfócate en lo que importa.",
        problemCard3Body:
          "Insights claros y accionables para cada decisión.",
        solutionTitle:
          "Fincora conecta tus activos, tus flujos y tus decisiones en un solo lugar.",
        solutionBody:
          "Modela tus inversiones y entiende cuánto puedes ganar — y qué puedes perder.",
        feature1Title: "Análisis financiero estructurado",
        feature1Body:
          "Evalúa cada activo con métricas claras y consistentes.",
        feature2Title: "Escenarios y simulación",
        feature2Body:
          "Entiende cómo cambian los retornos bajo diferentes supuestos.",
        feature3Title: "Seguridad de nivel empresarial",
        feature3Body:
          "Tus datos financieros se mantienen protegidos y bajo tu control.",
        benefitsKicker: "Beneficios de Fincora",
        benefitsTitle:
          "Resultados que te ayudan a decidir con confianza",
        benefit1Title:
          "Evita errores de inversión que pueden costarte miles",
        benefit1Body:
          "Analiza escenarios clave antes de comprometer capital.",
        benefit2Title:
          "Entiende el impacto real de la deuda en tus retornos",
        benefit2Body:
          "Compara estructuras de financiamiento con claridad financiera.",
        benefit3Title:
          "Ve el desempeño de tu portafolio en una sola vista",
        benefit3Body:
          "Conecta activos, flujos y resultados para decidir mejor.",
        benefit4Title:
          "Detecta riesgos antes de que afecten tu capital",
        benefit4Body:
          "Identifica señales tempranas y actúa con anticipación.",
        benefit5Title:
          "Toma decisiones con datos, no con intuición",
        benefit5Body:
          "Prioriza oportunidades por retorno, riesgo y liquidez.",
        pricingKicker: "Precios",
        pricingTitle:
          "Elige cómo quieres tomar mejores decisiones de inversión",
        pricingSubtitle:
          "Elige el plan que se ajusta a la profundidad de análisis y complejidad de tu portafolio.",
        billingMonthly: "Mensual",
        billingYearly: "Anual - ",
        billingYearlyPromo: "Paga 10 meses y recibe 12",
        pricingMxnNote:
          "Precios en MXN pueden variar ligeramente según tipo de cambio",
        starterPriceAmountM: "$19 USD / $349 MXN",
        starterPricePeriodM: "/mes",
        proPriceAmountM: "$59 USD / $999 MXN",
        proPricePeriodM: "/mes",
        businessPriceAmountM: "$129 USD / $2,199 MXN",
        businessPricePeriodM: "/mes",
        starterPriceAmountY: "$190 USD / $3,490 MXN",
        starterPricePeriodY: "/año",
        proPriceAmountY: "$590 USD / $9,990 MXN",
        proPricePeriodY: "/año",
        businessPriceAmountY: "$1,290 USD / $21,990 MXN",
        businessPricePeriodY: "/año",
        starterTitleM: "Starter",
        starterSubtitleM:
          "Analiza y valida tus primeras inversiones con claridad",
        starterAnnualM:
          "$190 USD / $3,490 MXN / año (2 meses gratis)",
        starterDescM:
          "Todo lo que necesitas para analizar tus primeras inversiones",
        starterFeature1M: "Hasta 5 activos",
        starterFeature2M: "Modelado financiero (ROI, IRR, NPV, Payback)",
        starterFeature3M: "Escenarios básicos de inversión",
        starterFeature4M: "Insights por activo",
        starterFeature5M: "Exportación de resultados (PDF)",
        starterFeature6M: "Soporte por correo",
        starterCtaM: "Empieza gratis",
        proTitleM: "Pro",
        proBadgeM: "Más popular",
        proSubtitleM:
          "Toma decisiones con visibilidad completa de tu portafolio",
        proAnnualM: "$590 USD / $9,990 MXN / año (2 meses gratis)",
        proDescM: "Análisis avanzado y visibilidad total del portafolio",
        proFeature1M: "Activos ilimitados",
        proFeature2M: "Agregación a nivel proyecto y portafolio",
        proFeature3M: "Modelado de financiamiento (deuda vs capital)",
        proFeature4M: "Insights y alertas avanzadas",
        proFeature5M: "Análisis de escenarios (mejor y peor caso)",
        proFeature6M: "Herramientas de comparación de inversiones",
        proFeature7M: "Soporte prioritario",
        proCtaM: "Empieza gratis",
        businessTitleM: "Business",
        businessSubtitleM:
          "Opera decisiones de inversión a nivel equipo",
        businessAnnualM: "$1,290 USD / $21,990 MXN / año (2 meses gratis)",
        businessDescM:
          "Inteligencia financiera completa para equipos y portafolios",
        businessFeature1M: "Todo lo de Pro",
        businessFeature2M: "Acceso multiusuario (roles y permisos)",
        businessFeature3M: "Analítica avanzada de portafolio",
        businessFeature4M: "Reportes listos para inversionistas",
        businessFeature5M: "Supuestos financieros personalizados",
        businessFeature6M: "Gestión documental (básica)",
        businessFeature7M: "Soporte dedicado",
        businessCtaM: "Empieza gratis",
        starterTitleY: "Starter",
        starterSubtitleY:
          "Analiza y valida tus primeras inversiones con claridad",
        starterMonthlyEqY:
          "$19 USD / $349 MXN equivalentes al mes (2 meses gratis)",
        starterDescY:
          "Todo lo que necesitas para analizar tus primeras inversiones",
        starterCtaY: "Empieza gratis",
        proTitleY: "Pro",
        proBadgeY: "Más popular",
        proSubtitleY:
          "Toma decisiones con visibilidad completa de tu portafolio",
        proMonthlyEqY:
          "$59 USD / $999 MXN equivalentes al mes (2 meses gratis)",
        proDescY: "Análisis avanzado y visibilidad total del portafolio",
        proCtaY: "Empieza gratis",
        businessTitleY: "Business",
        businessSubtitleY:
          "Opera decisiones de inversión a nivel equipo",
        businessMonthlyEqY:
          "$129 USD / $2,199 MXN equivalentes al mes (2 meses gratis)",
        businessDescY:
          "Inteligencia financiera completa para equipos y portafolios",
        businessCtaY: "Empieza gratis",
        pricingFinalTitle: "Antes de invertir, pásalo por Fincora.",
        pricingFinalBody:
          "Te toma minutos — y puede evitar una mala decisión con dinero real.",
        pricingFinalCta: "Empieza a analizar ahora",
        faqTitle: "Todo lo que necesitas saber antes de empezar",
        faqSubtitle:
          "Respuestas claras para decidir mejor antes de invertir.",
        faqQ1: "1. ¿Qué problema resuelve Fincora realmente?",
        faqA1:
          "Fincora te ayuda a saber si una inversión vale la pena antes de comprometer capital. Modela ingresos, costos y financiamiento para que entiendas el retorno real y tomes decisiones con datos.",
        faqQ2: "2. ¿Qué tan difícil es usar Fincora?",
        faqA2:
          "No necesitas conocimientos técnicos. Puedes modelar un activo en minutos y obtener métricas claras como ROI, IRR y flujo de efectivo.",
        faqQ3: "3. ¿Qué tan confiables son los resultados?",
        faqA3:
          "Las métricas se calculan con modelos financieros estándar usados en inversión real. Fincora no estima resultados — los construye a partir de flujos y supuestos claros.",
        faqQ4: "4. ¿Puedo usar Fincora antes de tener datos reales?",
        faqA4:
          "Sí. Puedes empezar con escenarios estimados y luego reemplazarlos con datos reales conforme operas el activo.",
        faqQ5: "5. ¿Qué pasa si Fincora no me aporta valor?",
        faqA5:
          "Puedes probar la plataforma sin compromiso y validar si realmente mejora tus decisiones antes de escalar su uso.",
        faqQ6: "6. ¿Cómo sé si una inversión es buena o mala?",
        faqA6:
          "Fincora te muestra ROI, IRR, flujo de efectivo y tiempo de recuperación, para que compares escenarios y tomes una decisión con datos, no con intuición.",
        footerHeadline:
          "Cada decisión de inversión, respaldada por datos.",
        footerSubhead:
          "Desde tu primer activo hasta todo tu portafolio, Fincora te ayuda a decidir con confianza.",
        footerVideoLabel: "Ver cómo funciona",
        footerProductTitle: "Producto",
        footerCompanyTitle: "Compañía",
        footerLinkIntegrations: "Integraciones",
        footerLinkDownloads: "Descargas",
        footerLinkPricing: "Precios",
        footerLinkAbout: "Sobre nosotros",
        footerLinkBlog: "Último blog",
        footerLinkCustomers: "Nuestros clientes",
        footerLinkCareers: "Carreras",
        footerCopyright: "Fincora, 2026 © Todos los derechos reservados",
        footerTermsLink: "Términos y condiciones",
        footerPrivacyLink: "Política de privacidad",
        footerCta: "Empieza gratis",
        footerCtaSubline:
          "No necesitas configuración compleja. Empieza en minutos.",
        footerTagline: "Analiza. Evalúa. Decide.",
      },
    },
    apply: function (lang) {
      var table = this.dict[lang];
      Object.keys(table).forEach(function (id) {
        var el = document.getElementById(id);
        if (!el) return;
        if (id === "signupLabel") {
          var icon = el.querySelector(".btn-icon");
          if (icon) {
            el.childNodes[0].nodeValue = table[id] + " ";
          } else {
            el.textContent = table[id];
          }
          return;
        }
        if (id === "footerTermsLink" || id === "footerPrivacyLink") {
          el.textContent = table[id];
          el.setAttribute("title", table[id]);
          return;
        }
        el.textContent = table[id];
      });
      var btnText = document.getElementById("langToggleText");
      var btnFlag = document.getElementById("langToggleFlag");
      if (btnText) btnText.textContent = lang === "es" ? "EN" : "ES";
      if (btnFlag) btnFlag.src = lang === "es" ? "assets/images/flag-us.svg" : "assets/images/flag-es.svg";
      this.current = lang;
    },
    init: function () {
      var btn = document.getElementById("langToggle");
      if (!btn) return;
      this.apply("es");
      btn.addEventListener("click", () => {
        this.apply(this.current === "es" ? "en" : "es");
      });
    },
  };

  // ============================
  // AOS animation
  // ============================
  var AOSAnimation = {
    init: function () {
      window.addEventListener("load", function () {
        const preloader = document.querySelector(".preloader");
        if (preloader) {
          preloader.classList.add("hide");
          setTimeout(function () {
            AOS.init({
              duration: 1500,
              once: true,
              easing: "ease-out-cubic",
              offset: 10,
            });
          }, 300);
        } else {
          AOS.init({
            duration: 1500,
            once: true,
            easing: "ease-out-cubic",
            offset: 10,
          });
        }
      });
    },
  };


  // ============================
  // faqAccordionActive
  // ============================
  var FAQAccordion = {
    init: function () {
      var items = document.querySelectorAll(".vs-accordion .accordion-item");

      if (!items.length) return;

      // First item active by default
      items[0].classList.add("active");

      items.forEach(function (item) {
        let collapse = item.querySelector(".accordion-collapse");

        collapse.addEventListener("show.bs.collapse", function () {
          // remove active from all
          items.forEach(i => i.classList.remove("active"));

          // add active to current
          item.classList.add("active");
        });

        collapse.addEventListener("hide.bs.collapse", function () {
          item.classList.remove("active");
        });
      });
    }
  };


  // ============================
  // Counter
  // ============================
  var Counter = {
    init: function() {
      var counters = document.querySelectorAll('.counter');
      if (!counters.length) return;

      for (var i = 0; i < counters.length; i++) {
        (function(counter) {
          var target = parseInt(counter.getAttribute('data-target'));
          var current = 0;
          var speed = target / 100;

          function updateCounter() {
            if (current < target) {
              current += speed;
              counter.innerText = Math.ceil(current);
              setTimeout(updateCounter, 20);
            } else {
              counter.innerText = target;
            }
          }

          updateCounter();
        })(counters[i]);
      }
    }
  };

  // ============================
  // FaqScrollManager
  // ============================
  var FaqScrollManager = {
      faqContent: null,
      faqSection: null,
      sectionTop: 0,
      sectionHeight: 0,
      contentHeight: 0,

      init: function () {
          this.faqContent = document.querySelector('.faq-content');
          this.faqSection = document.querySelector('.faq-sec2');

          if (!this.faqContent || !this.faqSection) return;

          this.sectionTop = this.faqSection.offsetTop;
          this.sectionHeight = this.faqSection.offsetHeight;
          this.contentHeight = this.faqContent.offsetHeight;

          window.addEventListener('scroll', this.onScroll.bind(this));

          window.addEventListener('resize', this.updateMeasurements.bind(this));
      },

      onScroll: function () {
          const scrollY = window.scrollY;

          if (scrollY > this.sectionTop && scrollY < this.sectionTop + this.sectionHeight - this.contentHeight - 120) {
              this.faqContent.classList.add('is-fixed');
              this.faqContent.classList.remove('is-absolute');
          } else if (scrollY >= this.sectionTop + this.sectionHeight - this.contentHeight - 120) {
              this.faqContent.classList.add('is-absolute');
              this.faqContent.classList.remove('is-fixed');
          } else {
              this.faqContent.classList.remove('is-fixed', 'is-absolute');
          }
      },

      updateMeasurements: function () {
          this.sectionTop = this.faqSection.offsetTop;
          this.sectionHeight = this.faqSection.offsetHeight;
          this.contentHeight = this.faqContent.offsetHeight;
      }
  };

  // ============================
  // smooth scrol
  // ============================
  var scrollToComments = function() {
      var commentLink = document.querySelector('a[href="#comments"]');
      var commentSection = document.querySelector('#comments');
      var header = document.querySelector('.header, .sticky-header, header');

      if ('scrollRestoration' in history) {
          history.scrollRestoration = 'manual';
      }

      if (commentLink && commentSection) {
          commentLink.addEventListener('click', function(e) {
              e.preventDefault();

              var headerHeight = header ? header.offsetHeight : 0;
              var elementPosition = commentSection.getBoundingClientRect().top;
              var offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;

              window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
              });
          });
      }
  };

  // ============================
  // video popup
  // ============================
  var videoPopup = (function () {
    var btn = document.querySelector('.video-btn');
    var modal = document.getElementById('videoModal');
    var frame = document.getElementById('videoFrame');
    var close = document.querySelector('.close-video');

    function init() {
      if (!btn || !modal || !frame || !close) return;

      btn.addEventListener('click', function (e) {
        e.preventDefault();
        frame.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
        modal.style.display = "flex";
      });

      close.addEventListener('click', function () {
        modal.style.display = "none";
        frame.src = "";
      });
    }

    return {
      init: init
    };

  })();



  // ============================
  // INIT ALL SCRIPTS
  // ============================
  Preloader.init();
  SwiperSliders.init();
  ScrollToTop.init();
  StickyHeader.init();
  MenuScroll.init();
  MobileMenu.init();
  videoPopup.init();
  ActiveMenu.init();
  DarkModeToggle.init();
  FAQAccordion.init();
  AOSAnimation.init();
  FaqScrollManager.init();
  scrollToComments();
  Counter.init();
  LanguageToggle.init();
  if (
    document.body.classList.contains("onepage") &&
    typeof MenuSpy !== "undefined"
  ) {
    onePageMenu.init();
  }
});
