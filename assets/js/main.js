/***************************************************
==================== JS INDEX ======================
****************************************************

01. PreLoader Js
02. Sticky Js
03. Menu Controls JS
04. offcanvas Menu JS
05. offcanvas two Menu JS
06. Sidebar Js
07. AOS Js
08. Backtotop Js
09. Magnific Popup Js
10. Counter Js
11. Feature Widget Animation Js
12. Service Two Images Hover Animation Js
13. Bg Image For Attribute  Js
14. Mouse active Js





****************************************************/

(function ($) {
  "use strict";

  ////////////////////////////////////////////////////
  // 01. PreLoader Js
  document.addEventListener("DOMContentLoaded", () => {
    // Create GSAP timeline
    const tl = gsap.timeline();
    const svg = document.getElementById("preloaderSvg");
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
    // Text animation
    tl.to(".preloader-heading .load-text, .preloader-heading .cont", {
      delay: 1,
      y: -80,
      opacity: 0,
      duration: 0.6,
    })
      // SVG curve animation
      .to(svg, {
        duration: 0.6,
        attr: { d: curve },
        ease: "power2.inOut",
      })
      // Flatten SVG
      .to(svg, {
        duration: 0.6,
        attr: { d: flat },
        ease: "power2.inOut",
      })
      // Slide preloader up
      .to(".preloader", {
        y: "-130%",
        duration: 0.8,
        ease: "power4.inOut",
      })
      // Remove from DOM flow
      .set(".preloader", {
        display: "none",
        zIndex: -1,
      });
  });

  ////////////////////////////////////////////////////
  // 02. Sticky Js
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 260) {
      $(".header").addClass("fixed-header");
    } else {
      $(".header").removeClass("fixed-header");
    }
  });

  ////////////////////////////////////////////////////
  // 03. Menu Controls JS
  $(".tw-hamburger-toggle").on("click", function () {
    $(".tw-header-side-menu").slideToggle("tw-header-side-menu");
  });
  if ($(".tw-main-menu-content").length && $(".tw-main-menu-mobile").length) {
    let navContent = document.querySelector(".tw-main-menu-content").outerHTML;
    let mobileNavContainer = document.querySelector(".tw-main-menu-mobile");
    mobileNavContainer.innerHTML = navContent;
    let arrow = $(".tw-main-menu-mobile .has-dropdown > a");
    arrow.each(function () {
      let self = $(this);
      let arrowBtn = document.createElement("BUTTON");
      arrowBtn.classList.add("dropdown-toggle-btn");
      arrowBtn.innerHTML = "<i class='ph ph-caret-right'></i>";
      self.append(function () {
        return arrowBtn;
      });
      self.find("button").on("click", function (e) {
        e.preventDefault();
        let self = $(this);
        self.toggleClass("dropdown-opened");
        self.parent().toggleClass("expanded");
        self
          .parent()
          .parent()
          .addClass("dropdown-opened")
          .siblings()
          .removeClass("dropdown-opened");
        self.parent().parent().children(".tw-submenu").slideToggle();
      });
    });
  }

  ////////////////////////////////////////////////////
  // 04. offcanvas Menu JS
  $(".tw-offcanvas-open-btn").on("click", function () {
    $(".tw-offcanvas-2-area").addClass("opened");

    setTimeout(() => {
      $(".tw-text-hover-effect-word").addClass("animated-text");
    }, 900);
  });

  ////////////////////////////////////////////////////
  // 05. offcanvas two Menu JS
  $(".tw-offcanvas-2-close-btn").on("click", function () {
    setTimeout(() => {
      $(".tw-text-hover-effect-word").removeClass("animated-text");
    }, 1200);

    $(".tw-offcanvas-2-area").removeClass("opened");
    $(".body-overlay").removeClass("opened");
  });

  ////////////////////////////////////////////////////
  // 06. Sidebar Js
  $(".tw-menu-bar").on("click", function () {
    $(".twoffcanvas").addClass("opened");
    $(".body-overlay").addClass("apply");
  });
  $(".close-btn").on("click", function () {
    $(".twoffcanvas").removeClass("opened");
    $(".body-overlay").removeClass("apply");
  });
  $(".body-overlay").on("click", function () {
    $(".twoffcanvas").removeClass("opened");
    $(".body-overlay").removeClass("apply");
  });

  ////////////////////////////////////////////////////
  // 07. AOS Js
  AOS.init({
    once: false, // animation will happen every time you scroll
    offset: 0, // start animation when element enters the viewport
    anchorPlacement: "top-bottom", // when the bottom of the element hits the bottom of the screen
  });

  // 08. Backtotop Js
  function back_to_top() {
    var btn = $("#back_to_top");
    var btn_wrapper = $(".back-to-top-wrapper");
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 300) {
        btn_wrapper.addClass("back-to-top-btn-show");
      } else {
        btn_wrapper.removeClass("back-to-top-btn-show");
      }
    });

    btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 300);
    });
  }
  back_to_top();

  ////////////////////////////////////////////////////
  // 09. Magnific Popup Js
  $(".open-popup").magnificPopup({
    type: "iframe",
    removalDelay: 300,
    mainClass: "mfp-fade",
  });

  ////////////////////////////////////////////////////
  // 10. Counter Js
  new PureCounter();
  new PureCounter({
    filesizing: true,
    selector: ".filesizecount",
    pulse: 2,
  });

  ////////////////////////////////////////////////////
  // 11. Feature Widget Animation Js
  function service_animation() {
    var active_bg = $(".feature-widget .active-bg");
    var element = $(".feature-widget .current");
    $(".feature-widget .feature-2-item").on("mouseenter", function () {
      var e = $(this);
      activeService(active_bg, e);
    });
    $(".feature-widget").on("mouseleave", function () {
      element = $(".feature-widget .current");
      activeService(active_bg, element);
      element.closest(".feature-2-item").siblings().removeClass("mleave");
    });
    activeService(active_bg, element);
  }
  service_animation();
  function activeService(active_bg, e) {
    if (!e.length) {
      return false;
    }
    var topOff = e.offset().top;
    var height = e.outerHeight();
    var menuTop = $(".feature-widget").offset().top;
    e.closest(".feature-2-item").removeClass("mleave");
    e.closest(".feature-2-item").siblings().addClass("mleave");
    active_bg.css({ top: topOff - menuTop + "px", height: height + "px" });
  }
  $(".feature-widget .feature-2-item").on("click", function () {
    $(".feature-widget .feature-2-item").removeClass("current");
    $(this).addClass("current");
  });

  ////////////////////////////////////////////////////
  // 12. Service Two Images Hover Animation Js
  $(".service-two-list-wrap .service-two-list-item").on(
    "mouseenter",
    function () {
      $("#service-two-thumb").removeClass().addClass($(this).attr("rel"));
      $(this).addClass("active").siblings().removeClass("active");
    },
  );

  ////////////////////////////////////////////////////
  // 13. Bg Image For Attribute  Js
  $(".bg-img").each(function () {
    var img = $(this).data("background-image");
    if (img) {
      $(this).css("background-image", "url('" + img + "')");
    }
  });

  ////////////////////////////////////////////////////
  // 14. Mouse active Js
  $(document).ready(function () {
    $(".service-ip-wrapper").on("mouseenter", function () {
      $(this).addClass("active").siblings().removeClass("active");
    });

    $(".service-ip-wrapper").on("mouseenter", function () {
      $(this).addClass("active");
      $(this)
        .parent()
        .siblings()
        .find(".service-ip-wrapper")
        .removeClass("active");
    });
  });

  $(document).ready(function () {
    function initRipples() {
      $(".ripple-image").each(function () {
        var $container = $(this);
        var $img = $container.find("img").first();

        if ($img.length === 0) return;

        var img = new Image();
        img.src = $img.attr("src");

        img.onload = function () {
          var imgURL = img.src;

          $container.css({
            "background-image": "url(" + imgURL + ")",
            "background-size": "cover",
            "background-position": "center center",
          });

          // init ripples plugin
          if (typeof $container.ripples === "function") {
            $container.ripples({
              resolution: 400,
              perturbance: 0.03,
              imageUrl: imgURL,
            });
          }

          $img.hide();
        };
      });
    }

    initRipples();
  });

  // Dynamic custom toast notification helper
  function showToast(title, text, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    let borderStyle = 'var(--success-600)';
    let iconClass = 'ph-check-circle';

    if (type === 'danger') {
      borderStyle = 'var(--danger-600)';
      iconClass = 'ph-x-circle';
    } else if (type === 'warning') {
      borderStyle = 'var(--warning-600)';
      iconClass = 'ph-warning';
    } else if (type === 'info') {
      borderStyle = 'var(--info-600)';
      iconClass = 'ph-info';
    }

    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.style.borderInlineStart = `3px solid ${borderStyle}`;
    toast.innerHTML = `
      <div class="toast-message__content">
        <div class="toast-message__icon" style="color: ${borderStyle}">
          <i class="ph-bold ${iconClass}"></i>
        </div>
        <div>
          <h5 class="toast-message__title" style="color: #1a1a1a; font-weight:700; margin-bottom: 2px;">${title}</h5>
          <p class="toast-message__text" style="margin: 0; color: #555555;">${text}</p>
        </div>
      </div>
      <div class="progress__bar" style="background: ${borderStyle}"></div>
    `;

    container.appendChild(toast);

    // Trigger transition
    setTimeout(() => {
      toast.classList.add('active');
    }, 50);

    // Auto remove
    setTimeout(() => {
      toast.classList.remove('active');
      setTimeout(() => {
        toast.remove();
      }, 500);
    }, 3500);
  }

  // 1. Universal Smooth Scroll Interceptor
  $(document).on("click", 'a[href^="#"]', function (event) {
    var href = $(this).attr("href");
    if (href === "#") return;
    var target = $(href);
    if (target.length) {
      event.preventDefault();
      
      // Check if GSAP ScrollSmoother is active and loaded
      if (window.ScrollSmoother && ScrollSmoother.get()) {
        ScrollSmoother.get().scrollTo(target[0], true, "power2.out");
      } else {
        $("html, body").stop().animate({
          scrollTop: target.offset().top - 100
        }, 1000);
      }
      
      // Close mobile/offcanvas menus if open
      $(".tw-offcanvas-2-area").removeClass("opened");
      $(".body-overlay").removeClass("opened");
    }
  });

  // 2. Projects Tag Filtering JS
  $(document).ready(function() {
    $(".filter-btn").on("click", function() {
      // Toggle active state
      $(".filter-btn").removeClass("active");
      $(this).addClass("active");

      var filterValue = $(this).attr("data-filter");
      var projectCards = $(".portfolio-three-item");

      if (filterValue === "all") {
        projectCards.removeClass("hide-project");
      } else {
        projectCards.each(function() {
          var card = $(this);
          if (card.hasClass("filter-" + filterValue)) {
            card.removeClass("hide-project");
          } else {
            card.addClass("hide-project");
          }
        });
      }
    });
  });

  // 3. CRISPR Sandbox JS
  $(document).ready(function() {
    $(document).on("click", ".sandbox-toggle-btn", function() {
      var container = $(this).siblings(".crispr-sandbox-container");
      container.slideToggle(400);
      $(this).toggleClass("active");
      if ($(this).hasClass("active")) {
        $(this).html('Close Sandbox <i class="ph ph-x"></i>');
      } else {
        $(this).html('Try PAM Scanner <i class="ph ph-sparkle"></i>');
      }
    });

    $(document).on("click", ".crispr-btn", function() {
      var card = $(this).closest(".crispr-sandbox-container");
      var sequenceInput = card.find(".crispr-input-area").val().toUpperCase().trim();
      var resultsSection = card.find(".crispr-results");
      var seqDisplay = card.find(".dna-seq-display");
      var resultsGrid = card.find(".crispr-card-grid");

      if (sequenceInput.length < 10) {
        showToast("Invalid Input", "Please enter a sequence of at least 10 base pairs.", "danger");
        return;
      }

      // Hide results & show scanning animation
      resultsSection.hide();
      var scanBtn = $(this);
      var originalBtnText = scanBtn.html();
      scanBtn.prop("disabled", true).html('<span class="btn-spinner"></span>Scanning Sequence...');

      setTimeout(function() {
        // Find PAM sites (N-G-G or N-C-C in reverse)
        // Match sequence parts and highlight them
        var regex = /([ATCG]GG)/gi;
        var highlightedSeq = sequenceInput.replace(regex, '<span class="pam-highlight">$1</span>');
        seqDisplay.html(highlightedSeq);

        // Generate mock guides
        var matches = [...sequenceInput.matchAll(regex)];
        var cardsHtml = '';

        if (matches.length === 0) {
          cardsHtml = '<p style="color:#888; grid-column: 1/-1;">No PAM sites (NGG) detected. Try adding some "GG" pairs.</p>';
        } else {
          matches.slice(0, 3).forEach(function(match, idx) {
            var index = match.index;
            var guide = sequenceInput.substring(Math.max(0, index - 20), index);
            if (guide.length < 20) {
              guide = (guide + "NNNNNNNNNNNNNNNNNNNN").substring(0, 20);
            }
            
            var efficiency = Math.floor(Math.random() * 20) + 78; // 78-98%
            var offTarget = Math.floor(Math.random() * 15) + 1; // 1-16%
            var score = efficiency - offTarget;

            var borderClass = (idx === 0) ? 'rank-1' : '';
            var rankBadge = (idx === 0) ? '<span class="badge bg-danger text-uppercase tw-text-xs">Top Match</span>' : '';

            cardsHtml += `
              <div class="crispr-res-card ${borderClass}">
                <div class="d-flex justify-content-between align-items-start mb-2">
                  <span class="text-main-two-600 fw-bold">gRNA Candidate #${idx+1}</span>
                  ${rankBadge}
                </div>
                <p style="font-family: monospace; font-size:12px; margin-bottom:8px; color:#ffffff;">${guide}</p>
                <div style="font-size:11px; color:#aaa;">
                  <div>Position: Index ${index-20 > 0 ? index-20 : 0}</div>
                  <div>PAM Site: ${match[0]}</div>
                  <div class="fw-bold mt-2" style="color: #39ff14;">Efficiency: ${efficiency}%</div>
                  <div style="color: #ff3b30;">Off-target Risk: ${offTarget}%</div>
                </div>
              </div>
            `;
          });
        }

        resultsGrid.html(cardsHtml);
        resultsSection.fadeIn(400);

        scanBtn.prop("disabled", false).html(originalBtnText);
        showToast("Scan Complete", `Successfully analyzed sequence. Found ${matches.length} PAM sites.`, "success");
      }, 1200);
    });
  });

  // 4. Vatsalya SOS Simulator JS
  $(document).ready(function() {
    $(document).on("click", ".sos-toggle-btn", function() {
      var container = $(this).siblings(".sos-simulator-container");
      container.slideToggle(400);
      $(this).toggleClass("active");
      if ($(this).hasClass("active")) {
        $(this).html('Close SOS Panel <i class="ph ph-x"></i>');
      } else {
        $(this).html('Launch SOS Simulator <i class="ph ph-bell-ringing"></i>');
      }
    });

    var sosTimer = null;
    $(document).on("click", ".sos-trigger-btn", function() {
      var btn = $(this);
      var screen = btn.closest(".phone-screen");
      var logConsole = screen.find(".phone-logs");
      var checkbox = screen.find(".heart-rate-spike-check");

      if (btn.hasClass("triggered")) {
        // Cancel SOS
        btn.removeClass("triggered").html("SOS").css("background", "#ff3b30");
        screen.removeClass("alert-active");
        btn.siblings(".sos-pulse-ring").show();
        if (sosTimer) clearTimeout(sosTimer);
        logConsole.append(`<div>[CANCEL] Emergency alert cancelled by user.</div>`);
        logConsole.scrollTop(logConsole[0].scrollHeight);
        showToast("SOS Cancelled", "Emergency alert sequence has been halted.", "warning");
        return;
      }

      // Activate SOS
      btn.addClass("triggered").html("CANCEL").css("background", "#666");
      btn.siblings(".sos-pulse-ring").hide();
      screen.addClass("alert-active");

      logConsole.append(`<div>[ALERT] SOS trigger initiated manually.</div>`);
      if (checkbox.is(":checked")) {
        logConsole.append(`<div>[DANGER] Heart rate spike detected: 142 bpm.</div>`);
      } else {
        logConsole.append(`<div>[INFO] Heart rate normal: 72 bpm.</div>`);
      }
      logConsole.append(`<div>[GPS] Fetching high-precision location coords...</div>`);
      logConsole.scrollTop(logConsole[0].scrollHeight);

      var countdown = 3;
      function runCountdown() {
        if (countdown > 0) {
          logConsole.append(`<div>[SEQ] Dispatching telemetry in ${countdown}s...</div>`);
          logConsole.scrollTop(logConsole[0].scrollHeight);
          countdown--;
          sosTimer = setTimeout(runCountdown, 1000);
        } else {
          logConsole.append(`<div>[SENDING] Sending packet via fallback SMS/Data...</div>`);
          logConsole.append(`<div>[SUCCESS] Broadcast confirmation received.</div>`);
          logConsole.append(`<div>[SUCCESS] Dispatched SMS to: Jane Doe (Caretaker)</div>`);
          logConsole.append(`<div>[SUCCESS] Coordinates: 12.9716° N, 77.5946° E</div>`);
          logConsole.scrollTop(logConsole[0].scrollHeight);

          showToast("🚨 SOS Dispatched", "Emergency alert broadcasted. Family notified and GPS sent.", "danger");
          btn.removeClass("triggered").html("SOS").css("background", "#ff3b30");
          screen.removeClass("alert-active");
          btn.siblings(".sos-pulse-ring").show();
        }
      }

      sosTimer = setTimeout(runCountdown, 1000);
    });
  });

  // 5. ServiceNow Workflow Visualizer JS
  $(document).ready(function() {
    $(document).on("click", ".servicenow-visualizer-btn", function() {
      var container = $(this).siblings(".servicenow-visualizer-container");
      container.slideToggle(400);
      $(this).toggleClass("active");
      if ($(this).hasClass("active")) {
        $(this).html('Close Workflow Panel <i class="ph ph-x"></i>');
      } else {
        $(this).html('Interactive Workflow Visualizer <i class="ph ph-git-merge"></i>');
      }
    });

    var logContents = {
      1: "[11:36:41] - User clicks catalog item 'Request Laptop'.\n[11:36:41] - Client script validates active employee ID: EMP-9923.\n[11:36:42] - Form submitted successfully. sys_id: catalog_item_0921a.",
      2: "[11:36:42] - Business Rule 'Validate Department Allocation' triggered.\n[11:36:42] - Current User: Manohar N M.\n[11:36:43] - Querying user profile: B.E. Computer Science. Verified.\n[11:36:43] - Script logs: Budget code valid.",
      3: "[11:36:43] - Flow Designer context launched: context_id=fd_ctx_92a3b.\n[11:36:44] - Creating flow execution timeline...\n[11:36:44] - Action: Get Manager details. Manager found: HOD CS Department.\n[11:36:44] - Stage: Waiting for approval.",
      4: "[11:36:44] - Approval record created (sysapproval_approver).\n[11:36:45] - Email notification dispatched to HOD (hodes@university.edu).\n[11:36:47] - HOD approves request from Approval Portal.\n[11:36:47] - Flow Designer transitions stage to: Approved.",
      5: "[11:36:47] - Flow Designer triggers REST IntegrationHub step.\n[11:36:48] - Target API: Active Directory Integration.\n[11:36:49] - POST Payload: { username: 'manoharnm', department: 'CS' }.\n[11:36:50] - Response: 201 Created. Account created successfully!"
    };

    var scriptContents = {
      1: "/* Client Script: Check Catalog Field validation */\nfunction onSubmit() {\n   var empId = g_form.getValue('employee_id');\n   if (empId === '') {\n      g_form.addErrorMessage('ID is required.');\n      return false;\n   }\n   return true;\n}",
      2: "/* Business Rule: Validate Budget Code */\n(function executeRule(current, previous) {\n   var budget = current.variables.budget_code;\n   var gr = new GlideRecord('u_budget_alloc');\n   gr.addQuery('u_code', budget);\n   gr.query();\n   if (!gr.next()) {\n      current.setAbortAction(true);\n   }\n})(current, previous);",
      3: "/* Flow Designer JavaScript Script Step */\n(function(outputs, inputs) {\n   var gr = new GlideRecord('sys_user');\n   if (gr.get(inputs.user_sys_id)) {\n      outputs.manager = gr.getValue('manager');\n   }\n})(outputs, inputs);",
      4: "/* Approval Script: Auto-Approve if Emergency */\nif (current.variables.urgency == 'critical') {\n   answer = 'approved';\n} else {\n   // normal route\n   answer = [];\n}",
      5: "/* IntegrationHub REST Step: Send Auth Packet */\nvar request = new sn_ws.RESTMessageV2();\nrequest.setEndpoint('https://api.ad.org/users');\nrequest.setHttpMethod('POST');\nrequest.setRequestBody(JSON.stringify(payload));\nvar response = request.execute();"
    };

    $(document).on("click", ".flowchart-step", function() {
      var step = $(this);
      var stepId = step.attr("data-step");
      
      // Update active classes
      step.closest(".flowchart-steps").find(".flowchart-step").removeClass("active");
      step.addClass("active");

      // Update consoles
      var visualizer = step.closest(".servicenow-visualizer-container");
      visualizer.find(".log-console-content").text(logContents[stepId]);
      visualizer.find(".code-console-content").text(scriptContents[stepId]);
    });
  });

  // 6. IEEE Paper Abstract Drawer JS
  $(document).ready(function() {
    $(document).on("click", ".ieee-toggle-btn", function(e) {
      e.preventDefault();
      var drawer = $(this).closest(".feature-three-single").find(".ieee-abstract-drawer");
      drawer.toggleClass("open");
      
      if (drawer.hasClass("open")) {
        $(this).html('Hide Abstract <i class="ph ph-caret-up"></i>');
      } else {
        $(this).html('Read Abstract <i class="ph ph-caret-down"></i>');
      }
    });
  });

  // 7. Contact Form Hijacker & Clipboard Email Copy JS
  $(document).ready(function() {
    // Clipboard Email Copy
    $(document).on("click", ".copy-email-btn", function(e) {
      e.preventDefault();
      var emailText = "nmmanu219@gmail.com";
      
      navigator.clipboard.writeText(emailText).then(function() {
        showToast("Email Copied", "Address copied to clipboard: " + emailText, "success");
      }, function() {
        // Fallback
        var temp = $("<input>");
        $("body").append(temp);
        temp.val(emailText).select();
        document.execCommand("copy");
        temp.remove();
        showToast("Email Copied", "Address copied to clipboard: " + emailText, "success");
      });
    });

    // Form Hijacker
    $("#contact-form").off("submit").on("submit", function(event) {
      event.preventDefault();
      var form = this;
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var submitBtn = $(this).find("button[type='submit']");
      var originalText = submitBtn.text();
      
      // Set loading state
      submitBtn.prop("disabled", true).html('<span class="btn-spinner"></span>Sending Message...');

      setTimeout(function() {
        showToast("Message Sent", "Thank you! Your message has been sent successfully. Manohar will contact you soon.", "success");
        form.reset();
        submitBtn.prop("disabled", false).text(originalText);
      }, 1500);
    });
  });
})(jQuery);

