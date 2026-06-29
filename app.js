/**
 * KIDSLAND - Tomorrow's World Showroom Script
 * Controls interactive gift guide, category tabs, and WhatsApp messaging engine
 */

// Global Config
const PRIMARY_WHATSAPP_NUMBER = "94761492555"; // Sri Lankan format (+94 76 149 2555)

// Product Database
const products = [
  // 1. Tricycles & Ride-ons
  {
    id: "ride-on-mercedes",
    name: "Mercedes-Benz SUV Ride-On",
    category: "tricycles-rideons",
    categoryName: "Tricycles & Ride-ons",
    description: "A luxury electric ride-on SUV with realistic LED lights, foot pedal accelerator, leather seats, and a Bluetooth audio system. Includes parental remote control.",
    suitability: "3 - 7 Years",
    safety: "Certified non-toxic plastics, safety seatbelt",
    features: ["Parental remote override", "Working headlights & horn", "Rechargeable 12V battery"],
    icon: "🚗",
    badges: ["Unique Collection", "Store Exclusive"]
  },
  {
    id: "sports-motorcycle",
    name: "Kids Sport Motorcycle",
    category: "tricycles-rideons",
    categoryName: "Tricycles & Ride-ons",
    description: "Realistic electric toy motorcycle with training wheels, working headlamps, realistic engine startup sounds, and smooth acceleration controls.",
    suitability: "3 - 6 Years",
    safety: "Wide training wheels for anti-tip protection",
    features: ["Foot pedal control", "Aux/USB music interface", "Multi-stage speed lock"],
    icon: "🏍️",
    badges: ["Unique Collection"]
  },
  {
    id: "toddler-tricycle",
    name: "Pastel Toddler Tricycle",
    category: "tricycles-rideons",
    categoryName: "Tricycles & Ride-ons",
    description: "A beautiful, premium tricycle with a removable parental steering push-handle, folding sun canopy, safety guardrail, and silent-glide EVA wheels.",
    suitability: "1 - 3 Years",
    safety: "5-point safety harness, secure locking brakes",
    features: ["Adjustable push bar", "Foldable footrest", "Rear storage basket"],
    icon: "🚲",
    badges: ["Unique Collection"]
  },

  // 2. Baby Clothes
  {
    id: "newborn-bodysuits",
    name: "Organic Cotton Newborn Bodysuits",
    category: "baby-clothes",
    categoryName: "Baby Clothes",
    description: "Set of 5 ultra-soft bodysuits made from 100% certified organic cotton. Features nickel-free snap closures and expandable shoulders.",
    suitability: "0 - 12 Months",
    safety: "Hypoallergenic, dye-free premium fabrics",
    features: ["Flatlock seams for comfort", "Breathable weave", "Machine washable"],
    icon: "👶",
    badges: ["Store Exclusive"]
  },
  {
    id: "knit-toddler-romper",
    name: "Pastel Knit Toddler Romper",
    category: "baby-clothes",
    categoryName: "Baby Clothes",
    description: "A vintage-inspired knit romper crafted from a premium cotton-wool blend. Features comfortable cross-back straps and wooden buttons.",
    suitability: "1 - 3 Years",
    safety: "Breathable knit prevents overheating",
    features: ["Super soft touch", "Flexible elasticity for play", "Timeless style"],
    icon: "👕",
    badges: ["Unique Collection"]
  },
  {
    id: "print-sleep-play",
    name: "Modern Print Sleep & Play",
    category: "baby-clothes",
    categoryName: "Baby Clothes",
    description: "All-day comfort footie featuring cute modern patterns, a dual-direction zipper for quick diaper changes, and built-in fold-over mittens.",
    suitability: "0 - 12 Months",
    safety: "Snug-fitting safety standard certified",
    features: ["2-way chin-to-toe zipper", "Fold-over scratch protection", "Safety zip tab"],
    icon: "🩱",
    badges: []
  },

  // 3. Soft Toys
  {
    id: "velvet-teddy-bear",
    name: "Jumbo Velvet Teddy Bear",
    category: "soft-toys",
    categoryName: "Soft Toys",
    description: "An incredibly plush, large teddy bear made with velvet-soft fabric and premium high-loft filling. Perfect for nursery decor and warm hugs.",
    suitability: "All Ages",
    safety: "Lock-washer embroidered eyes, zero small parts",
    features: ["Hypoallergenic stuffing", "Durable reinforced stitching", "Washable surface"],
    icon: "🧸",
    badges: ["Store Exclusive"]
  },
  {
    id: "elephant-sleep-companion",
    name: "Pastel Elephant Sleep Companion",
    category: "soft-toys",
    categoryName: "Soft Toys",
    description: "Soothing weighted plush elephant designed to provide comfort and promote deep, restful sleep for babies and toddlers.",
    suitability: "0 - 3 Years",
    safety: "100% organic cotton exterior, non-toxic beads",
    features: ["Calming weighted chest", "Ultra-soft ears for sensory stimulation", "Machine washable bag"],
    icon: "🐘",
    badges: ["Unique Collection"]
  },
  {
    id: "woodland-fox-plush",
    name: "Playful Woodland Fox Plush",
    category: "soft-toys",
    categoryName: "Soft Toys",
    description: "Vibrant orange fox plush featuring interactive crinkle paper ears, a hidden belly rattle, and various sensory textures.",
    suitability: "3 Months+",
    safety: "BPA-free teething ring attachment",
    features: ["Teething ring tail", "Multi-textured fabrics", "Crinkle and rattle sounds"],
    icon: "🦊",
    badges: []
  },

  // 4. New Baby Gifts
  {
    id: "newborn-gift-hamper",
    name: "Deluxe Newborn Gift Hamper",
    category: "baby-gifts",
    categoryName: "New Baby Gifts",
    description: "A beautifully curated baby shower box containing an organic cellular blanket, a wooden ring rattle, a bodysuit, a bib, and milestone cards.",
    suitability: "Newborn",
    safety: "Natural beechwood, organic unbleached cotton",
    features: ["Handcrafted pine gift box", "Custom greeting card included", "Premium essentials collection"],
    icon: "🎁",
    badges: ["Unique Collection", "Store Exclusive"]
  },
  {
    id: "shower-box-set",
    name: "Premium Baby Shower Box Set",
    category: "baby-gifts",
    categoryName: "New Baby Gifts",
    description: "An elegant gift box featuring modern baby essentials: two organic muslin swaddles, a wooden baby comb, and a safe silicone pacifier clip.",
    suitability: "Newborn",
    safety: "Food-grade silicone, 100% natural wood bristles",
    features: ["Luxury gift wrapping", "Ultra-soft swaddle blankets", "Soothing neutral tones"],
    icon: "💝",
    badges: ["Unique Collection"]
  },
  {
    id: "royal-welcome-basket",
    name: "Royal Welcome Baby Basket",
    category: "baby-gifts",
    categoryName: "New Baby Gifts",
    description: "An ultimate celebration basket packed with hand-knit booties, a silver-plated keepsake spoon, a plush bunny companion, and a hooded towel.",
    suitability: "Newborn",
    safety: "Hypoallergenic wool, ultra-absorbent bamboo cotton",
    features: ["Reusable woven nursery basket", "Ideal heirloom keepsake items", "Elegant presentation ribbon"],
    icon: "🧺",
    badges: ["Store Exclusive"]
  },

  // 5. Educative Toys
  {
    id: "shape-sorter-cart",
    name: "Wooden Shape Sorter Block Cart",
    category: "educative-toys",
    categoryName: "Educative Toys",
    description: "Classic solid-wood block cart with shape-sorting slot panels. Promotes color & shape recognition and fine motor skills development.",
    suitability: "1 - 3 Years",
    safety: "Non-toxic water-based paint, rounded edges",
    features: ["Pull-along storage cart", "15 solid wood shapes", "Smooth rolling wheels"],
    icon: "🧱",
    badges: []
  },
  {
    id: "magnetic-stem-tiles",
    name: "Magnetic STEM Building Tiles",
    category: "educative-toys",
    categoryName: "Educative Toys",
    description: "Set of 60 high-transparency magnetic tiles in diverse shapes. Boosts spatial reasoning, engineering basic logic, and creative 3D design.",
    suitability: "3 - 8 Years",
    safety: "Heavy-duty ultrasonic welding, food-grade ABS",
    features: ["Strong neodymium magnets", "Vibrant colors", "Fully compatible with standard brands"],
    icon: "📐",
    badges: ["Unique Collection"]
  },
  {
    id: "toddler-learning-board",
    name: "Interactive Sensory Busy Board",
    category: "educative-toys",
    categoryName: "Educative Toys",
    description: "A wooden activity board featuring zippers, shoelaces, buckles, rotating gears, latch locks, and clock hands to boost logical coordination.",
    suitability: "1 - 4 Years",
    safety: "Securely fastened metal & plastic hardware",
    features: ["14 sensory activities", "Carry handle for travel", "Smooth splinter-free plywood"],
    icon: "🧩",
    badges: ["Store Exclusive"]
  },

  // 6. Baby Essentials
  {
    id: "convertible-crib",
    name: "Premium 3-in-1 Convertible Crib",
    category: "baby-essentials",
    categoryName: "Baby Essentials",
    description: "Sturdy convertible crib made from solid pine wood. Easily converts from a baby cot into a toddler daybed and day sofa as your child grows.",
    suitability: "0 - 5 Years",
    safety: "Lead & phthalate-free finish, teething guards",
    features: ["3 adjustable mattress positions", "Convertible frame", "Solid wood construction"],
    icon: "🛏️",
    badges: ["Store Exclusive"]
  },
  {
    id: "interactive-baby-walker",
    name: "Multi-Stage Interactive Baby Walker",
    category: "baby-essentials",
    categoryName: "Baby Essentials",
    description: "Sturdy sit-to-stand walker featuring speed-controlled wheels, a removable play activity panel with musical piano keys, and shape slots.",
    suitability: "9 Months - 3 Years",
    safety: "Non-slip rubber wheel ring, wide stable base",
    features: ["Removable fun panel", "Adjustable speed controls", "Sensory sound effects"],
    icon: "🚶",
    badges: []
  },
  {
    id: "luxury-stroller-combo",
    name: "Modern Luxury Stroller Combo",
    category: "baby-essentials",
    categoryName: "Baby Essentials",
    description: "High-end lightweight aluminum travel system. Includes an all-terrain suspension stroller frame, reversible bassinet, and sun shield.",
    suitability: "0 - 4 Years",
    safety: "5-point harness, one-touch linked rear brake",
    features: ["Compact one-hand folding", "UPF 50+ canopy", "Extra large storage basket"],
    icon: "🛒",
    badges: ["Unique Collection", "Store Exclusive"]
  },

  // 7. Kids Toys
  {
    id: "hero-fortress-playset",
    name: "Action Hero Fortress Playset",
    category: "kids-toys",
    categoryName: "Kids Toys",
    description: "A 3-level action hero tower with a working lift elevator, secret trapdoors, sound effects, and 4 included articulation action figures.",
    suitability: "3 - 8 Years",
    safety: "Choke-hazard warnings applied, safe plastics",
    features: ["Working manual elevator", "Light and sound effects", "Expandable playset tracks"],
    icon: "🏰",
    badges: []
  },
  {
    id: "creative-art-easel",
    name: "Creative Art & Easel Studio",
    category: "kids-toys",
    categoryName: "Kids Toys",
    description: "Double-sided children's easel featuring a magnetic whiteboard, chalkboard, built-in paper roll dispenser, and spacious lower storage shelves.",
    suitability: "3 - 10 Years",
    safety: "Sturdy triangular A-frame, height-adjustable safety knobs",
    features: ["Whiteboard and chalkboard", "Paper roll included", "Easy-clean paint cups"],
    icon: "🎨",
    badges: ["Store Exclusive"]
  },
  {
    id: "outdoor-adventure-kit",
    name: "Ultimate Outdoor Explorer Kit",
    category: "kids-toys",
    categoryName: "Kids Toys",
    description: "Empower their curiosities with real-working toy binoculars, a magnifying glass, a hand-crank LED flashlight, and an insect catcher box.",
    suitability: "4 - 10 Years",
    safety: "Shatter-proof lenses, child-safe ventilation holes",
    features: ["Self-powered hand-crank light", "Comfort-strap carry bag", "Compass navigation tool"],
    icon: "🔍",
    badges: ["Unique Collection"]
  }
];

// Utility: Build WhatsApp URL
function buildWhatsAppUrl(messageText) {
  const encodedText = encodeURIComponent(messageText);
  return `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodedText}`;
}

// App Initialization
document.addEventListener("DOMContentLoaded", () => {
  initHeaderScroll();
  initMobileMenu();
  renderProductCards();
  initTabFiltering();
  initGiftWizard();
  initProductClickHandlers();
  initNavigation();
});

// 1. Sticky Header Scroll Effect
function initHeaderScroll() {
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// 2. Mobile Menu Logic
function initMobileMenu() {
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

// 3. Tabbed Gallery Rendering & Filtering
function renderProductCards() {
  const grid = document.querySelector(".product-grid");
  if (!grid) return;

  grid.innerHTML = products.map(product => {
    const badgesHtml = product.badges.map(badge => {
      const cls = badge.toLowerCase().includes("unique") ? "badge-unique" : "badge-exclusive";
      return `<span class="badge ${cls}">${badge}</span>`;
    }).join("");

    const featuresHtml = product.features.map(f => `
      <li>
        <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        ${f}
      </li>
    `).join("");

    const waMsg = `Hi Kidsland, I am inquiring about the "${product.name}" I saw on your website. Is it currently available?`;
    const waLink = buildWhatsAppUrl(waMsg);

    return `
      <div class="product-card" data-category="${product.category}">
        <div class="product-visual-container">
          <div class="product-badges">
            ${badgesHtml}
            <span class="badge badge-safety">${product.safety.split(",")[0]}</span>
          </div>
          <div class="product-visual-icon">${product.icon}</div>
        </div>
        <div class="product-details">
          <span class="product-category">${product.categoryName}</span>
          <h3 class="product-title">${product.name}</h3>
          <p class="product-desc">${product.description}</p>
          <ul class="product-spec-list">
            <li><strong>Age Suitability:</strong> ${product.suitability}</li>
            <li><strong>Safety Details:</strong> ${product.safety}</li>
            ${featuresHtml}
          </ul>
          <div class="product-actions">
            <a href="${waLink}" target="_blank" class="btn btn-whatsapp">
              <svg viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.057 5.284 5.342 0 11.83 0c3.143.001 6.097 1.226 8.318 3.45A11.758 11.758 0 0 1 23.596 11.89c0 6.55-5.286 11.834-11.776 11.834-1.996-.001-3.957-.512-5.711-1.488L0 24zm6.59-4.837c1.66.986 3.298 1.503 5.233 1.504 5.438 0 9.864-4.422 9.866-9.859.001-2.634-1.023-5.11-2.883-6.97C16.945 2.08 14.476 1.055 11.84 1.055c-5.442 0-9.87 4.425-9.872 9.863-.001 2.01.523 3.978 1.52 5.715l-.994 3.633 3.731-.979zm11.168-7.836c-.29-.146-1.718-.847-1.984-.943-.265-.097-.459-.146-.653.146-.193.29-.75.943-.919 1.137-.168.193-.337.217-.627.072-1.288-.644-2.126-1.127-2.966-2.57-.223-.383.223-.356.638-1.182.073-.146.037-.272-.018-.383-.056-.11-.459-1.109-.628-1.517-.165-.397-.333-.343-.459-.349-.118-.006-.254-.007-.39-.007-.136 0-.356.051-.543.255-.187.204-.714.698-.714 1.701 0 1.004.73 1.974.832 2.11.102.136 1.436 2.193 3.479 3.073.486.209.865.334 1.161.428.489.155.934.133 1.286.08.392-.058 1.717-.701 1.959-1.378.243-.677.243-1.258.17-1.378-.073-.121-.265-.193-.555-.339z"/></svg>
              Inquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function initTabFiltering() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const productCards = document.querySelectorAll(".product-card");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Toggle active classes on tabs
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-filter");

      // Filter the grid items
      productCards.forEach(card => {
        const cardCat = card.getAttribute("data-category");
        if (category === "all" || cardCat === category) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
}

// 4. Interactive Age & Gift Guide Wizard
function initGiftWizard() {
  const wizard = {
    currentStep: 1,
    totalSteps: 3,
    answers: {
      occasion: null,
      occasionText: "",
      ageGroup: null,
      ageGroupText: ""
    }
  };

  const steps = document.querySelectorAll(".wizard-step");
  const progressSteps = document.querySelectorAll(".progress-step");
  const progressLine = document.querySelector(".progress-line");
  const nextBtn = document.getElementById("wizard-next-btn");
  const prevBtn = document.getElementById("wizard-prev-btn");
  const resetBtn = document.getElementById("wizard-reset-btn");
  const resultsContainer = document.querySelector(".recommendations-container");

  // Hook Option Card Selection
  const optionCards = document.querySelectorAll(".option-card");
  optionCards.forEach(card => {
    card.addEventListener("click", () => {
      const stepEl = card.closest(".wizard-step");
      const stepIndex = parseInt(stepEl.getAttribute("data-step"));

      // Deselect siblings in the same step
      stepEl.querySelectorAll(".option-card").forEach(c => c.classList.remove("selected"));
      // Select clicked card
      card.classList.add("selected");

      // Store answers
      const value = card.getAttribute("data-value");
      const titleText = card.querySelector(".option-title").textContent.trim();

      if (stepIndex === 1) {
        wizard.answers.occasion = value;
        wizard.answers.occasionText = titleText;
      } else if (stepIndex === 2) {
        wizard.answers.ageGroup = value;
        wizard.answers.ageGroupText = titleText;
      }

      // Automatically enable Next button once selected
      nextBtn.disabled = false;
    });
  });

  // Next Step Function
  nextBtn.addEventListener("click", () => {
    if (wizard.currentStep < wizard.totalSteps) {
      wizard.currentStep++;
      updateWizardUI();
    }
  });

  // Previous Step Function
  prevBtn.addEventListener("click", () => {
    if (wizard.currentStep > 1) {
      wizard.currentStep--;
      updateWizardUI();
    }
  });

  // Reset Function
  const resetAll = () => {
    wizard.currentStep = 1;
    wizard.answers.occasion = null;
    wizard.answers.occasionText = "";
    wizard.answers.ageGroup = null;
    wizard.answers.ageGroupText = "";
    
    // Clear selection classes
    optionCards.forEach(c => c.classList.remove("selected"));
    
    updateWizardUI();
  };

  resetBtn.addEventListener("click", resetAll);
  
  // Custom reset link inside result page, if any
  document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "wizard-reset-link") {
      e.preventDefault();
      resetAll();
    }
  });

  function updateWizardUI() {
    // 1. Toggle Step Displays
    steps.forEach((step, idx) => {
      if (idx + 1 === wizard.currentStep) {
        step.classList.add("active");
      } else {
        step.classList.remove("active");
      }
    });

    // 2. Update Progress Bar
    progressSteps.forEach((pStep, idx) => {
      const stepNum = idx + 1;
      pStep.classList.remove("active", "completed");
      
      if (stepNum === wizard.currentStep) {
        pStep.classList.add("active");
      } else if (stepNum < wizard.currentStep) {
        pStep.classList.add("completed");
      }
    });

    // Calculate percentage width for line connection
    const progressPercent = ((wizard.currentStep - 1) / (wizard.totalSteps - 1)) * 100;
    progressLine.style.width = `${progressPercent}%`;

    // 3. Toggle Button States
    if (wizard.currentStep === 1) {
      prevBtn.style.visibility = "hidden";
      nextBtn.style.display = "inline-flex";
      // Only enable next if option is already chosen
      nextBtn.disabled = !wizard.answers.occasion;
      nextBtn.innerHTML = `Next Step <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21 12 12.85 3.85l-1.42 1.42 5.43 5.43H5v2z"/></svg>`;
    } else if (wizard.currentStep === 2) {
      prevBtn.style.visibility = "visible";
      nextBtn.style.display = "inline-flex";
      nextBtn.disabled = !wizard.answers.ageGroup;
      nextBtn.innerHTML = `Find Recommendations <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`;
    } else if (wizard.currentStep === 3) {
      prevBtn.style.visibility = "visible";
      nextBtn.style.display = "none";
      // Generate Recommendations
      generateWizardRecommendations();
    }
  }

  function generateWizardRecommendations() {
    const { occasion, ageGroup, occasionText, ageGroupText } = wizard.answers;

    // Filter Logic: Match product suitability and category to recommend best items
    let recommended = [];

    // Helper: Match Age Tag
    const isAgeMatch = (productAge, selectionTag) => {
      const lowerAge = productAge.toLowerCase();
      if (selectionTag === "infant") return lowerAge.includes("0 -") || lowerAge.includes("all") || lowerAge.includes("newborn") || lowerAge.includes("months");
      if (selectionTag === "toddler") return lowerAge.includes("1 -") || lowerAge.includes("toddler") || lowerAge.includes("9 months") || lowerAge.includes("all");
      if (selectionTag === "preschooler") return lowerAge.includes("3 -") || lowerAge.includes("1 -") || lowerAge.includes("all");
      if (selectionTag === "bigkids") return lowerAge.includes("5 -") || lowerAge.includes("4 -") || lowerAge.includes("8") || lowerAge.includes("all");
      return false;
    };

    // 1. Filter by category match derived from occasion
    let targetCategory = "";
    if (occasion === "rideon") targetCategory = "tricycles-rideons";
    else if (occasion === "newborn") targetCategory = "baby-gifts"; // Or baby-clothes/essentials
    else if (occasion === "educational") targetCategory = "educative-toys";
    
    if (targetCategory) {
      recommended = products.filter(p => p.category === targetCategory && isAgeMatch(p.suitability, ageGroup));
    }

    // 2. If it's a general birthday occasion or if we have fewer than 3 items, look through all products matching the age group
    if (recommended.length < 3) {
      const ageMatches = products.filter(p => isAgeMatch(p.suitability, ageGroup) && !recommended.find(r => r.id === p.id));
      
      // Sort to prioritize unique/exclusive items
      ageMatches.sort((a, b) => b.badges.length - a.badges.length);
      recommended = [...recommended, ...ageMatches];
    }

    // 3. Still fewer than 3? Fallback to store best sellers
    if (recommended.length < 3) {
      const fallbackList = products.filter(p => !recommended.find(r => r.id === p.id));
      recommended = [...recommended, ...fallbackList];
    }

    // Slice to exactly 3 premium recommendations
    const finalRecs = recommended.slice(0, 3);

    // Build Results HTML
    if (finalRecs.length === 0) {
      resultsContainer.innerHTML = `
        <div class="text-center" style="grid-column: 1/-1; padding: 40px 0;">
          <p style="font-size: 1.1rem; color: var(--text-medium); margin-bottom: 24px;">We couldn't find an exact match, but our store in Eravur is fully stocked with toys!</p>
          <a href="#" id="wizard-reset-link" class="btn btn-primary">Start Guide Again</a>
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = finalRecs.map(prod => {
      const waMsg = `Hi Kidsland! I used your online Gift Guide and selected:
- Need/Occasion: ${occasionText}
- Age Group: ${ageGroupText}

I am interested in: "${prod.name}" (${prod.categoryName}). Can you check if you have this in stock and tell me about the options?`;
      
      const waLink = buildWhatsAppUrl(waMsg);

      return `
        <div class="rec-card">
          <div class="rec-header">
            <span class="rec-category">${prod.categoryName}</span>
            <span style="font-size: 1.5rem;">${prod.icon}</span>
          </div>
          <h4 class="rec-title">${prod.name}</h4>
          <p class="rec-desc">${prod.description}</p>
          <div class="rec-meta">
            <span>
              <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
              Age: ${prod.suitability}
            </span>
            <span>
              <svg viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/></svg>
              Safety: ${prod.safety.split(",")[0]}
            </span>
          </div>
          <a href="${waLink}" target="_blank" class="btn btn-whatsapp text-center" style="font-size: 0.9rem; padding: 10px 16px;">
            <svg viewBox="0 0 24 24" width="16" height="16"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.057 5.284 5.342 0 11.83 0c3.143.001 6.097 1.226 8.318 3.45A11.758 11.758 0 0 1 23.596 11.89c0 6.55-5.286 11.834-11.776 11.834-1.996-.001-3.957-.512-5.711-1.488L0 24zm6.59-4.837c1.66.986 3.298 1.503 5.233 1.504 5.438 0 9.864-4.422 9.866-9.859.001-2.634-1.023-5.11-2.883-6.97C16.945 2.08 14.476 1.055 11.84 1.055c-5.442 0-9.87 4.425-9.872 9.863-.001 2.01.523 3.978 1.52 5.715l-.994 3.633 3.731-.979zm11.168-7.836c-.29-.146-1.718-.847-1.984-.943-.265-.097-.459-.146-.653.146-.193.29-.75.943-.919 1.137-.168.193-.337.217-.627.072-1.288-.644-2.126-1.127-2.966-2.57-.223-.383.223-.356.638-1.182.073-.146.037-.272-.018-.383-.056-.11-.459-1.109-.628-1.517-.165-.397-.333-.343-.459-.349-.118-.006-.254-.007-.39-.007-.136 0-.356.051-.543.255-.187.204-.714.698-.714 1.701 0 1.004.73 1.974.832 2.11.102.136 1.436 2.193 3.479 3.073.486.209.865.334 1.161.428.489.155.934.133 1.286.08.392-.058 1.717-.701 1.959-1.378.243-.677.243-1.258.17-1.378-.073-.121-.265-.193-.555-.339z"/></svg>
            Check Availability
          </a>
        </div>
      `;
    }).join("");
  }
}

// 5. Scroll Action for Custom "Explore Collection" Hero Button
function initProductClickHandlers() {
  const exploreBtn = document.getElementById("hero-explore-btn");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetSec = document.getElementById("showcase");
      if (targetSec) {
        targetSec.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}

// 6. Navigation Link Active States and Scroll Spy
function initNavigation() {
  const navLinks = document.querySelectorAll(".nav-menu .nav-link");
  const sections = document.querySelectorAll("section, footer");

  // Click Handler to update active state immediately
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Scroll Spy to dynamically update active state on scroll
  const observerOptions = {
    root: null,
    rootMargin: "-25% 0px -55% 0px", // Detect section when it occupies the core viewport area
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        if (!id) return;

        navLinks.forEach(link => {
          const href = link.getAttribute("href");
          if (href === `#${id}` || (id === "home" && href === "#")) {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  // Observe all sections and footer
  sections.forEach(section => {
    if (section.getAttribute("id")) {
      observer.observe(section);
    }
  });

  // Special Check: If at the very bottom, highlight the last element (Contact)
  window.addEventListener("scroll", () => {
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 60) {
      const contactLink = document.querySelector('.nav-link[href="#contact"]');
      if (contactLink) {
        navLinks.forEach(l => l.classList.remove("active"));
        contactLink.classList.add("active");
      }
    }
  });
}
