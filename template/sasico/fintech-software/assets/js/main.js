/**
 * Template Name: sasico | Chat Boot HTML Template
 * Description: Chat-Boot.
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
          slidesPerView: 6,
          spaceBetween: 20,
          breakpoints: {
            1920: { slidesPerView: 6, spaceBetween: 30 },
            1440: { slidesPerView: 6, spaceBetween: 30 },
            1366: { slidesPerView: 5, spaceBetween: 30 },
            1201: { slidesPerView: 5, spaceBetween: 30 },
            1025: { slidesPerView: 4, spaceBetween: 30 },
            769: { slidesPerView: 4, spaceBetween: 30 },
            577: { slidesPerView: 3, spaceBetween: 30 },
            480: { slidesPerView: 2, spaceBetween: 20 },
            375: { slidesPerView: 2, spaceBetween: 20 },
          },
        });
      }

      if (document.querySelector(".testi")) {
          const brandEl = document.querySelector(".testi");
          const brandSlides = brandEl.querySelectorAll('.swiper-slide').length;

          new Swiper(".testi", {
            loop: brandSlides > 1,          // loop tabhi jab slides 1 se zyada ho
            slidesPerView: "auto",          // har slide ka width auto
            spaceBetween: 20,
            speed: 3000,                     // jitna bada number, utna slow smooth scroll
            autoplay: {
              delay: 0,                      // delay 0 → continuous scrolling
              disableOnInteraction: false,
            },
            freeMode: true,                  // free scrolling without snapping
            freeModeMomentum: false,         // smooth constant speed
            breakpoints: {
              1920: { spaceBetween: 30 },
              1440: { spaceBetween: 30 },
              1366: { spaceBetween: 30 },
              1201: { spaceBetween: 30 },
              1025: { spaceBetween: 30 },
              769: { spaceBetween: 20 },
              577: { spaceBetween: 20 },
              480: { spaceBetween: 15 },
              375: { spaceBetween: 10 },
            },
          });
      }

      if (document.querySelector(".testi2")) {
        const brandEl2 = document.querySelector(".testi2");
        const brandSlides2 = brandEl2.querySelectorAll('.swiper-slide').length;

        new Swiper(".testi2", {
          loop: brandSlides2 > 1,
          slidesPerView: "auto",
          spaceBetween: 20,
          speed: 3000,
          autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,        
          },
          freeMode: true,
          freeModeMomentum: false,
          allowTouchMove: false,
          breakpoints: {
            1920: { spaceBetween: 30 },
            1440: { spaceBetween: 30 },
            1366: { spaceBetween: 30 },
            1201: { spaceBetween: 30 },
            1025: { spaceBetween: 30 },
            769: { spaceBetween: 20 },
            577: { spaceBetween: 20 },
            480: { spaceBetween: 15 },
            375: { spaceBetween: 10 },
          },
        });
      }

      if (document.querySelector(".testi3")) {
        var testiSwiper = new Swiper(".testi3", {
          loop: true,
          centeredSlides: true,
          slidesPerView: 3,
          spaceBetween: 20,

          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },

          pagination: {
            el: ".testi3 .swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              // sirf 2 dots hi create karo
              if (index < 2) {
                return '<span class="' + className + '" data-dot="' + index + '"></span>';
              }
              return "";
            },
          },

          on: {
            init: function () {
              var swiper = this;

              document.querySelectorAll(".testi3 .swiper-pagination span").forEach(function(bullet){
                bullet.addEventListener("click", function(){
                  var dotIndex = parseInt(this.getAttribute("data-dot"));

                  // slide to next matching slide (alternate logic)
                  var current = swiper.realIndex;
                  var total = swiper.slides.length;

                  for(var j = current+1; j < current+total; j++){
                    if(j % 2 === dotIndex){
                      swiper.slideToLoop(j);
                      break;
                    }
                  }
                });
              });
            },

            slideChange: function () {
              var bullets = document.querySelectorAll(".testi3 .swiper-pagination span");

              bullets.forEach(function(b){
                b.classList.remove("swiper-pagination-bullet-active");
              });

              // alternate logic: mod 2
              var activeDot = this.realIndex % 2;
              if(bullets[activeDot]){
                bullets[activeDot].classList.add("swiper-pagination-bullet-active");
              }
            },
          },

          breakpoints: {
            768: { spaceBetween: 20 },
            0: { spaceBetween: 15 },
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

          this.updateMeasurements();

          window.addEventListener('scroll', this.onScroll.bind(this));
          window.addEventListener('resize', this.updateMeasurements.bind(this));
      },

      onScroll: function () {

          const scrollY = window.scrollY;
          const start = this.sectionTop - 120;
          const end = this.sectionTop + this.sectionHeight - this.contentHeight - 120;

          if (scrollY >= start && scrollY <= end) {
              this.faqContent.classList.add('is-fixed');
              this.faqContent.classList.remove('is-absolute');
          } 
          else if (scrollY > end) {
              this.faqContent.classList.remove('is-fixed');
              this.faqContent.classList.add('is-absolute');
          } 
          else {
              this.faqContent.classList.remove('is-fixed', 'is-absolute');
          }
      },

      updateMeasurements: function () {
          const rect = this.faqSection.getBoundingClientRect();

          this.sectionTop = rect.top + window.pageYOffset;
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
  // SearchPopup
  // ============================
  var SearchPopup = {
    init: function () {
      var searchBtn = document.querySelector(".search-btn"),
        popup = document.querySelector(".search-popup"),
        overlay = document.querySelector(".search-overlay"),
        closeBtn = document.querySelector(".close-search");

      if (!searchBtn || !popup || !overlay) return;

      function openPopup(e) {
        e.preventDefault();
        popup.classList.add("active");
        overlay.classList.add("active");
      }

      function closePopup() {
        popup.classList.remove("active");
        overlay.classList.remove("active");
      }

      searchBtn.addEventListener("click", openPopup);
      closeBtn && closeBtn.addEventListener("click", closePopup);
      overlay.addEventListener("click", closePopup);
    },
  };


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
  SearchPopup.init();
  FAQAccordion.init();
  AOSAnimation.init();
  FaqScrollManager.init();
  scrollToComments();
  Counter.init();
  if (
    document.body.classList.contains("onepage") &&
    typeof MenuSpy !== "undefined"
  ) {
    onePageMenu.init();
  }
});
