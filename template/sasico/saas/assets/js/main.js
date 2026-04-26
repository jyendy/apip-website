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
          loop: brandSlides > 8,
          autoplay: { delay: 3000, disableOnInteraction: false },
          slidesPerView: 6,
          spaceBetween: 20,
          breakpoints: {
            1920: { slidesPerView: 8, spaceBetween: 30 },
            1440: { slidesPerView: 8, spaceBetween: 30 },
            1366: { slidesPerView: 6, spaceBetween: 30 },
            1201: { slidesPerView: 5, spaceBetween: 30 },
            1025: { slidesPerView: 5, spaceBetween: 30 },
            769: { slidesPerView: 4, spaceBetween: 30 },
            577: { slidesPerView: 3, spaceBetween: 30 },
            480: { slidesPerView: 2, spaceBetween: 20 },
            375: { slidesPerView: 2, spaceBetween: 20 },
          },
        });
      }

      if (document.querySelector(".brand2")) {
        const brandEl = document.querySelector(".brand2");
        const brandSlides = brandEl.querySelectorAll('.swiper-slide').length;

        new Swiper(".brand2", {
          loop: brandSlides > 8,
          autoplay: { delay: 3000, disableOnInteraction: false },
          slidesPerView: 6,
          spaceBetween: 20,
          breakpoints: {
            1920: { slidesPerView: 6, spaceBetween: 30 },
            1440: { slidesPerView: 6, spaceBetween: 30 },
            1366: { slidesPerView: 5, spaceBetween: 30 },
            1201: { slidesPerView: 5, spaceBetween: 30 },
            1025: { slidesPerView: 5, spaceBetween: 30 },
            769: { slidesPerView: 4, spaceBetween: 30 },
            577: { slidesPerView: 3, spaceBetween: 30 },
            480: { slidesPerView: 2, spaceBetween: 20 },
            375: { slidesPerView: 2, spaceBetween: 20 },
          },
        });
      }

      if (document.querySelector(".testi")) {
        var testiSwiper = new Swiper(".testi", {
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          slidesPerView: 6,
          spaceBetween: 20,

          pagination: {
            el: ".testi .swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              // sirf 2 dots create hon
              if (index < 2) {
                return '<span class="' + className + '"></span>';
              }
              return "";
            },
          },

          on: {
            slideChange: function () {
              var bullets = document.querySelectorAll(
                ".testi .swiper-pagination span"
              );

              bullets.forEach(function (bullet) {
                bullet.classList.remove("swiper-pagination-bullet-active");
              });

              // sirf 2 dots me active toggle hoga
              var activeIndex = this.realIndex % 2;

              if (bullets[activeIndex]) {
                bullets[activeIndex].classList.add(
                  "swiper-pagination-bullet-active"
                );
              }
            },
          },

          breakpoints: {
            1920: { slidesPerView: 6, spaceBetween: 30 },
            1440: { slidesPerView: 4, spaceBetween: 30 },
            1366: { slidesPerView: 4, spaceBetween: 30 },
            1201: { slidesPerView: 3, spaceBetween: 30 },
            1025: { slidesPerView: 3, spaceBetween: 30 },
            769: { slidesPerView: 2, spaceBetween: 30 },
            577: { slidesPerView: 1, spaceBetween: 30 },
            480: { slidesPerView: 1, spaceBetween: 20 },
            375: { slidesPerView: 1, spaceBetween: 20 },
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

          var hamBtn   = document.querySelector(".hamburger-btn"),
              menu     = document.querySelector(".mobile-menu"),
              overlay  = document.querySelector(".menu-overlay"),
              closeBtn = document.querySelector(".close-btn");

          if (!hamBtn || !menu || !overlay) return;

          function openMenu() {
              menu.classList.add("active");
              overlay.classList.add("active");
          }

          function closeMenu() {
              menu.classList.remove("active");
              overlay.classList.remove("active");

              // Desktop header menu ke active classes remove kar do
              var headerLinks = document.querySelectorAll(".main-menu11.menu-style11 li.active, .main-menu11.menu-style11 li a.active");
              headerLinks.forEach(function(item){
                  item.classList.remove("active");
              });
          }

          // Open/Close events
          hamBtn.onclick = openMenu;
          overlay.onclick = closeMenu;
          if (closeBtn) closeBtn.onclick = closeMenu;

          // Mobile menu links
          var menuLinks = menu.querySelectorAll("li > a");

          // Page load par restore last clicked active link
          var savedIndex = localStorage.getItem("mobileActiveMenu");
          if (savedIndex) {
              var activeLink = menu.querySelector('[data-index="' + savedIndex + '"]');
              if (activeLink) activeLink.classList.add("active");
          }

          menuLinks.forEach(function(link){
              link.addEventListener("click", function(e){
                  var li = this.closest("li");

                  // Dropdown/submenu toggle
                  if (li.classList.contains("has-dropdown") || li.classList.contains("has-submenu")) {
                      e.preventDefault();
                      li.classList.toggle("open");
                      return;
                  }

                  // Remove active from all mobile links
                  menuLinks.forEach(function(l){
                      l.classList.remove("active");
                  });

                  // Clicked link active
                  this.classList.add("active");

                  // Save clicked link index
                  var index = this.getAttribute("data-index");
                  if (index) localStorage.setItem("mobileActiveMenu", index);

                  // Close menu
                  closeMenu();
              });
          });
      }
  };

  // ============================
  // MenuActive
  // ============================
  var Menu = {
      init: function () {
          var menuLinks = document.querySelectorAll(".main-menu11.menu-style11 ul li > a");
          if (!menuLinks.length) return;
          var savedIndex = localStorage.getItem("activeMenu");

          if (savedIndex === null) {
              menuLinks[0].closest("li").classList.add("active");
          } else {
              menuLinks.forEach(function(link, index){
                  if (index == savedIndex) {
                      var parentLi = link.closest("li");
                      while(parentLi){
                          parentLi.classList.add("active");
                          parentLi = parentLi.parentElement.closest("li");
                      }
                  }
              });
          }
          menuLinks.forEach(function(link, index){
              link.addEventListener("click", function(){
                  menuLinks.forEach(function(l){
                      var li = l.closest("li");
                      while(li){
                          li.classList.remove("active");
                          li = li.parentElement.closest("li");
                      }
                  });

                  var parentLi = this.closest("li");
                  while(parentLi){
                      parentLi.classList.add("active");
                      parentLi = parentLi.parentElement.closest("li");
                  }

                  localStorage.setItem("activeMenu", index);
              });
              link.addEventListener("mouseenter", function(){
                  var parentLi = this.closest("li");
                  while(parentLi){
                      parentLi.classList.add("hover-active");
                      parentLi = parentLi.parentElement.closest("li");
                  }
              });

              link.addEventListener("mouseleave", function(){
                  var parentLi = this.closest("li");
                  while(parentLi){
                      parentLi.classList.remove("hover-active");
                      parentLi = parentLi.parentElement.closest("li");
                  }
              });
          });
      }
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

      // Har accordion ko alag handle karo
      document.querySelectorAll(".vs-accordion").forEach(function (accordion) {

        let items = accordion.querySelectorAll(".accordion-item");
        if (!items.length) return;

        // Har accordion ka first item active by default
        items[0].classList.add("active");

        items.forEach(function (item) {

          let collapse = item.querySelector(".accordion-collapse");

          collapse.addEventListener("show.bs.collapse", function () {

            // Sirf is accordion ke items se active remove karo
            items.forEach(i => i.classList.remove("active"));

            item.classList.add("active");
          });

          collapse.addEventListener("hide.bs.collapse", function () {
            item.classList.remove("active");
          });

        });

      });

    }
  };

  // ============================
  // Counter
  // ============================
  var CounterUp = {
    init: function () {
      var counters = document.querySelectorAll(".counter");

      counters.forEach(function (counter) {
        var target = +counter.getAttribute("data-target");
        var count = 0;
        var speed = target / 200; // jitna zyada number hoga utna smooth hoga

        function updateCounter() {
          count += speed;

          if (count < target) {
            counter.innerText = Math.ceil(count);
            requestAnimationFrame(updateCounter);
          } else {
            counter.innerText = target;
          }
        }

        updateCounter();
      });
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
          this.faqContent = document.querySelector('.team-img2, .side-bar3, .faq-content, .portfolio-content');
          this.faqSection = document.querySelector('.team-detail, .career-detail, .faq-sec2, .portfolio-detail');

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
      var buttons = document.querySelectorAll('.video-trigger');
      var modal = document.getElementById('videoModal');
      var frame = document.getElementById('videoFrame');
      var close = document.querySelector('.close-video');

      function init() {
          if (!buttons.length || !modal || !frame || !close) return;

          buttons.forEach(function (btn) {
              btn.addEventListener('click', function (e) {
                  e.preventDefault();

                  var videoURL = this.getAttribute('data-video');
                  frame.src = videoURL + "?autoplay=1";
                  modal.style.display = "flex";
              });
          });

          close.addEventListener('click', function () {
              modal.style.display = "none";
              frame.src = "";
          });

          // Close on outside click
          modal.addEventListener('click', function (e) {
              if (e.target === modal) {
                  modal.style.display = "none";
                  frame.src = "";
              }
          });
      }

      return {
          init: init
      };

  })();

  // ============================
  // ProcessCard
  // ============================
  var ProcessCard = {
      init: function () {
          var cards = document.querySelectorAll(".process-card");
          if (!cards.length) return;

          cards.forEach(function (card) {
              card.addEventListener("click", function () {

                  cards.forEach(function (c) {
                      c.classList.remove("active");
                  });

                  card.classList.add("active");
              });
          });
      }
  };

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
  // Achievement
  // ============================
  var Achievement = {
      init: function () {
          var contents = document.querySelectorAll(".achievement-content");
          if (!contents.length) return;

          let activeIndex = localStorage.getItem("activeAchievement");

          if (activeIndex === null) {
              contents[0].classList.add("active");
          } else {
              contents.forEach((c, i) => {
                  if (i == activeIndex) c.classList.add("active");
              });
          }

          contents.forEach(function(content, index){
              content.addEventListener("click", function () {
                  contents.forEach(c => c.classList.remove("active"));
                  this.classList.add("active");
                  localStorage.setItem("activeAchievement", index);
              });
          });
      }
  };

  // ============================
  // MasonryFilter
  // ============================
  var MasonryFilter = {
    init: function () {

      var grid = document.querySelector('.masonry-grid');
      if (!grid || typeof Isotope === "undefined") return;

      var iso = new Isotope(grid, {
        itemSelector: '.grid-item',
        layoutMode: 'masonry',
        percentPosition: true,
        masonry: {
          columnWidth: '.grid-item'
        }
      });

      // fix layout after images load
      if (typeof imagesLoaded !== "undefined") {
        imagesLoaded(grid).on('progress', function () {
          iso.layout();
        });
      }

      var buttons = document.querySelectorAll(".filter-btns button");

      buttons.forEach(function (btn) {

        btn.addEventListener("click", function () {

          var activeBtn = document.querySelector(".filter-btns .active");
          if (activeBtn) activeBtn.classList.remove("active");

          this.classList.add("active");

          var filterValue = this.getAttribute("data-filter");

          iso.arrange({
            filter: filterValue
          });

        });

      });

    }
  };

  // ============================
  // QtyManager
  // ============================
  var QtyManager = {
      init: function () {
          document.querySelectorAll(".qty-box").forEach(box => {

              const plus = box.querySelector(".plus");
              const minus = box.querySelector(".minus");
              const input = box.querySelector(".qty-input");

              plus.addEventListener("click", () => {
                  input.value = parseInt(input.value) + 1;
              });

              minus.addEventListener("click", () => {
                  if (input.value > 1) {
                      input.value = parseInt(input.value) - 1;
                  }
              });

          });
      }
  };

  // ============================
  // priceRangeSlider
  // ============================
  var priceRangeSlider = {

      init: function () {

          this.minRange = document.getElementById('minRange');
          this.maxRange = document.getElementById('maxRange');
          this.minPrice = document.getElementById('minPrice');
          this.maxPrice = document.getElementById('maxPrice');
          this.progress = document.querySelector('.range-slider .progress');

          if(!this.minRange || !this.maxRange) return;

          var self = this;

          this.minRange.addEventListener('input', function () {

              if (parseInt(self.minRange.value) > parseInt(self.maxRange.value) - 1) {
                  self.minRange.value = parseInt(self.maxRange.value) - 1;
              }

              self.updateProgress();
          });

          this.maxRange.addEventListener('input', function () {

              if (parseInt(self.maxRange.value) < parseInt(self.minRange.value) + 1) {
                  self.maxRange.value = parseInt(self.minRange.value) + 1;
              }

              self.updateProgress();
          });

          this.updateProgress();
      },

      updateProgress: function () {

          if(!this.minRange || !this.maxRange) return;

          var minVal = parseInt(this.minRange.value);
          var maxVal = parseInt(this.maxRange.value);
          var rangeMin = parseInt(this.minRange.min);
          var rangeMax = parseInt(this.maxRange.max);

          this.minPrice.textContent = minVal;
          this.maxPrice.textContent = maxVal;

          var left = ((minVal - rangeMin) / (rangeMax - rangeMin)) * 100;
          var right = ((maxVal - rangeMin) / (rangeMax - rangeMin)) * 100;

          this.progress.style.left = left + '%';
          this.progress.style.right = (100 - right) + '%';
      }
  };

  // ============================
  // ProgressCircle
  // ============================
  var ProgressCircle = {
      init: function () {

          var circles = document.querySelectorAll('.progress-circle');

          var observer = new IntersectionObserver(function(entries, observer){

              entries.forEach(function(entry){

                  if(entry.isIntersecting){

                      var circle = entry.target;
                      var canvas = circle.querySelector('canvas');
                      var ctx = canvas.getContext('2d');
                      var percentEl = circle.querySelector('.percent');
                      var color = circle.getAttribute('data-color') || '#B9FB6A';
                      var targetPercent = parseInt(circle.getAttribute('data-percent')) || 0;
                      var size = canvas.width;
                      var lineWidth = 5;
                      var currentPercent = 0;

                      function drawCircle(percent){

                          ctx.clearRect(0,0,size,size);

                          // background circle
                          ctx.beginPath();
                          ctx.arc(size/2, size/2, (size-lineWidth)/2, 0, 2*Math.PI);
                          ctx.strokeStyle = '#e6e6e6';
                          ctx.lineWidth = lineWidth;
                          ctx.stroke();

                          // progress circle
                          ctx.beginPath();
                          ctx.arc(
                              size/2,
                              size/2,
                              (size-lineWidth)/2,
                              -Math.PI/2,
                              (2*Math.PI*(percent/100)) - Math.PI/2
                          );

                          ctx.strokeStyle = color;
                          ctx.lineWidth = lineWidth;
                          ctx.lineCap = 'round';
                          ctx.stroke();

                          percentEl.innerHTML = Math.round(percent) + '<span class="percent-unit">%</span>';
                      }

                      function animate(){
                          if(currentPercent < targetPercent){
                              currentPercent++;
                              drawCircle(currentPercent);
                              requestAnimationFrame(animate);
                          }
                      }

                      animate();
                      observer.unobserve(circle);

                  }

              });

          }, {threshold:0.3});

          circles.forEach(function(circle){
              observer.observe(circle);
          });

      }
  };

  // ============================
  // ProductGallery
  // ============================
  var ProductGallery = {
      init: function () {

          var current = document.getElementById('current');
          var thumbnails = document.querySelectorAll('.thumbnails img');
          var lightbox = document.getElementById('lightbox');
          var lightboxImg = document.getElementById('lightbox-img');
          var closeBtn = document.getElementById('close');
          var mainImageDiv = document.getElementById('main-image');
          var magnifier = document.getElementById('magnifier');

          var lightPrev = document.getElementById('light-prev');
          var lightNext = document.getElementById('light-next');

          // agar gallery page par exist nahi karti to code stop
          if (!current || !mainImageDiv || thumbnails.length === 0) {
              return;
          }

          var currentIndex = 0;

          // Thumbnail click
          thumbnails.forEach(function (thumb, i) {
              thumb.addEventListener('click', function () {
                  setActive(i);
              });
          });

          function setActive(i) {

              thumbnails.forEach(function (t) {
                  t.classList.remove('active');
              });

              if (thumbnails[i]) {
                  thumbnails[i].classList.add('active');
                  current.src = thumbnails[i].dataset.large;
                  currentIndex = i;
              }
          }

          // Zoom effect
          mainImageDiv.addEventListener('mousemove', function (e) {

              mainImageDiv.classList.add('zoomed');

              var rect = mainImageDiv.getBoundingClientRect();
              var x = (e.clientX - rect.left) / rect.width * 100;
              var y = (e.clientY - rect.top) / rect.height * 100;

              current.style.transformOrigin = x + "% " + y + "%";

          });

          mainImageDiv.addEventListener('mouseleave', function () {
              mainImageDiv.classList.remove('zoomed');
              current.style.transformOrigin = 'center center';
          });

          // Lightbox open
          if (magnifier && lightbox && lightboxImg) {
              magnifier.addEventListener('click', function () {
                  lightbox.classList.add('show');
                  lightboxImg.src = current.src;
              });
          }

          // Lightbox close
          if (closeBtn && lightbox) {
              closeBtn.addEventListener('click', function () {
                  lightbox.classList.remove('show');
              });
          }

          // Lightbox slider prev
          if (lightPrev) {
              lightPrev.addEventListener('click', function () {

                  currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;

                  if (lightboxImg) {
                      lightboxImg.src = thumbnails[currentIndex].dataset.large;
                  }

              });
          }

          // Lightbox slider next
          if (lightNext) {
              lightNext.addEventListener('click', function () {

                  currentIndex = (currentIndex + 1) % thumbnails.length;

                  if (lightboxImg) {
                      lightboxImg.src = thumbnails[currentIndex].dataset.large;
                  }

              });
          }

      }
  };


  // ============================
  // CountdownTimer
  // ============================
  var CountdownTimer = {
      init: function () {

          var daysEl = document.getElementById("days");
          var hoursEl = document.getElementById("hours");
          var minutesEl = document.getElementById("minutes");
          var secondsEl = document.getElementById("seconds");

          // agar elements nahi milay to code stop
          if(!daysEl || !hoursEl || !minutesEl || !secondsEl){
              return;
          }

          var totalSeconds =
              (365 * 24 * 60 * 60) +
              (5 * 60 * 60) +
              (10 * 60) +
              31;

          var interval = setInterval(function () {

              if (totalSeconds <= 0) {
                  clearInterval(interval);
                  return;
              }

              totalSeconds--;

              var days = Math.floor(totalSeconds / (24 * 60 * 60));
              var hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
              var minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
              var seconds = totalSeconds % 60;

              daysEl.innerHTML = String(days).padStart(2,"0");
              hoursEl.innerHTML = String(hours).padStart(2,"0");
              minutesEl.innerHTML = String(minutes).padStart(2,"0");
              secondsEl.innerHTML = String(seconds).padStart(2,"0");

          },1000);

      }

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
  SearchPopup.init();
  DarkModeToggle.init();
  FAQAccordion.init();
  AOSAnimation.init();
  FaqScrollManager.init();
  Menu.init();
  scrollToComments();
  CounterUp.init();
  ProcessCard.init();
  Achievement.init();
  MasonryFilter.init();
  priceRangeSlider.init();
  ProductGallery.init();
  CountdownTimer.init();
  ProgressCircle.init();
  QtyManager.init();
  if (
    document.body.classList.contains("onepage") &&
    typeof MenuSpy !== "undefined"
  ) {
    onePageMenu.init();
  }
});
