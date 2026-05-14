// ============================================================
//  GOODFELLOW & SONS — IMAGE CONFIGURATION
//  To swap any image, just update the filename below.
//  All images should be placed in the /public/images/ folder.
// ============================================================

export const IMAGES = {

  // ----------------------------------------------------------
  // HERO SECTION
  // Replace with a photo of a completed project or jobsite.
  // ----------------------------------------------------------
  hero: "/images/hero-bg.png",

  // ----------------------------------------------------------
  // ABOUT SECTION
  // Replace with a photo of the team, shop, or owner on-site.
  // ----------------------------------------------------------
  about: "/images/about-woodshop.png",

  // ----------------------------------------------------------
  // SERVICES SECTION
  // One image per service card.
  // ----------------------------------------------------------
  services: {
    decks:   "/images/service-decks.png",
    remodel: "/images/service-remodel.png",
    siding:  "/images/service-siding.png",
    finish:  "/images/gallery-3.png",
  },

  // ----------------------------------------------------------
  // GALLERY SECTION
  // Six images displayed in a masonry-style grid.
  // The first image spans 2 columns × 2 rows (feature image).
  // ----------------------------------------------------------
  gallery: [
    { src: "/images/service-decks.png",  alt: "Custom mahogany deck",           span: "md:col-span-2 md:row-span-2" },
    { src: "/images/gallery-1.png",      alt: "Finished custom stairs exterior", span: "col-span-1" },
    { src: "/images/gallery-3.png",      alt: "Interior custom trim and molding", span: "col-span-1" },
    { src: "/images/service-remodel.png", alt: "Whole home remodel interior",    span: "md:col-span-2" },
    { src: "/images/gallery-2.png",      alt: "House framing progress",          span: "col-span-1" },
    { src: "/images/service-siding.png", alt: "Flawless exterior siding",        span: "col-span-1" },
  ],

};
