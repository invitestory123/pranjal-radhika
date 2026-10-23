/**
 * wedding-data.js — Customer-facing editable data layer for Riddhika & Pranjal
 * Threads Meet Strings — Wedding Invitation
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Pranjal",
    bride: "Riddhika",
    monogram: "",
    hashtag: "#ThreadsMeetStrings",
  },

  mainEvent: {
    title: "Riddhika & Pranjal — Wedding Celebrations",
    startsAt: "2026-11-20T09:00:00+05:30",
    durationMinutes: 2160,
    dateLabel: "20 — 21 November 2026",
    timeLabel: "Celebrations begin Friday, 9:00 AM",
  },

  families: {
    brideSide: {
      parents: "Prerna & Sunilji Bhandari",
      parentsFull: "D/O Prerna & Sunil Bhandari",
      line: "request the pleasure of your company to celebrate the wedding of their daughter",
    },
    groomSide: {
      parents: "Ratna & Sandeepji Sirohi",
      parentsFull: "S/O Ratna & Sandeep Sirohi",
      line: "together with the family of their son",
    },
  },

  invitationNote: "Your presence and blessings will make our celebrations truly special.",

  story: [
    {
      year: "2023",
      title: "Threads Meet Strings",
      text: "Two souls, two melodies, and a quiet rhythm that felt like coming home. A conversation that tuned our hearts together.",
      image: "./editable/assets/story-1.jpg",
    },
    {
      year: "2025",
      title: "Woven in Love",
      text: "With the warmth of two families and blessings all around, we celebrated our Roka and took the first step toward our forever.",
      image: "./editable/assets/story-2.jpg",
    },
    {
      year: "2026",
      title: "Tuned for Forever",
      text: "A sacred promise, hands held tight, and a lifetime of love waiting to unfold in the company of everyone we cherish.",
      image: "./editable/assets/story-3.jpg",
    },
  ],

  events: [
    {
      key: "ganesh-pujan",
      name: "Chalk & Ganesh Pujan",
      startsAt: "2026-11-20T09:00:00+05:30",
      durationMinutes: 120,
      venue: "Ashokraj Resort & Farms",
      address: "",
      dressCode: "Traditional Auspicious",
      dressCodeColor: "#C9A84C",
      note: "Invoking auspicious beginnings and divine blessings.",
    },
    {
      key: "tilak",
      name: "Tilak",
      startsAt: "2026-11-20T11:00:00+05:30",
      durationMinutes: 120,
      venue: "Ashokraj Resort & Farms",
      address: "",
      dressCode: "Festive Indian",
      dressCodeColor: "#E07A5F",
      note: "A cherished ritual of love, honour, and family bonds.",
    },
    {
      key: "haldi",
      name: "Haldi Unplugged",
      startsAt: "2026-11-20T13:00:00+05:30",
      durationMinutes: 180,
      venue: "Ashokraj Resort & Farms",
      address: "",
      dressCode: "Haldi Yellow & Florals",
      dressCodeColor: "#E9B949",
      note: "Sunshine, laughter, colour, and all things joyful.",
    },
    {
      key: "sangeet",
      name: "The Sangeet Night",
      startsAt: "2026-11-20T19:00:00+05:30",
      durationMinutes: 240,
      venue: "Ashokraj Resort & Farms",
      address: "",
      dressCode: "Evening Glam & Indo-Western",
      dressCodeColor: "#3D405B",
      note: "An evening of music, dance, and melodies close to our hearts.",
    },
    {
      key: "baraat",
      name: "Baraat",
      startsAt: "2026-11-21T11:00:00+05:30",
      durationMinutes: 120,
      venue: "Ashokraj Resort & Farms",
      address: "",
      dressCode: "Royal Traditional",
      dressCodeColor: "#81B29A",
      note: "Let the beats lead the way and the Royal celebrations begin.",
    },
    {
      key: "wedding",
      name: "Shubh Lagna & Mangal Phera",
      startsAt: "2026-11-21T15:00:00+05:30",
      durationMinutes: 180,
      venue: "Ashokraj Resort & Farms",
      address: "",
      dressCode: "Traditional Formals",
      dressCodeColor: "#7B1E2B",
      note: "As sacred vows are exchanged, two journeys become one.",
    },
    {
      key: "reception",
      name: "Reception",
      startsAt: "2026-11-21T19:00:00+05:30",
      durationMinutes: 240,
      venue: "Ashokraj Resort & Farms",
      address: "",
      dressCode: "Elegant Formals",
      dressCodeColor: "#C9A84C",
      note: "An evening of togetherness, warm embraces, and new beginnings.",
    },
  ],

  venue: {
    name: "Ashokraj Resort & Farms",
    address: "Khandwa Road, Asrawad Fata, near Tejaji Nagar Police Station / Reliance Petrol Pump, Asrawad Khurd, Indore, Madhya Pradesh",
    lat: 22.6331393,
    lng: 75.8863717,
    directionsNote: "Near Tejaji Nagar Police Station / Reliance Petrol Pump, Khandwa Road, Asrawad Khurd, Indore. Valet & ample parking available.",
  },

  gallery: [
    { src: "./editable/assets/gallery-1.jpg", alt: "Haldi — Boho Carnival" },
    { src: "./editable/assets/gallery-2.jpg", alt: "Sangeet — Concert & Glam" },
    { src: "./editable/assets/gallery-3.jpg", alt: "Phere — Earthy & Traditional" },
    { src: "./editable/assets/gallery-4.jpg", alt: "Reception — Royal Theme" },
  ],

  closing: {
    blessing: "Threads Meet Strings — woven in love, tuned for forever.",
    signOff: "With love and gratitude,",
  },

  contacts: [
    { name: "Bhandari Family (Bride's Side)", phone: "+919826000000" },
    { name: "Sirohi Family (Groom's Side)", phone: "+919827000000" },
  ],

  media: {
    doorPanel: "./editable/assets/door-panel.png",
    couple: "./editable/assets/couple.png",
    coupleLogoImage: "./editable/assets/logo.png",
    floralCorner: "./editable/assets/floral-corner.png",
    garland: "./editable/assets/garland.png",
    lantern: "./editable/assets/lantern.png",
    footerFloral: "./editable/assets/footer-floral.jpg",
    ambientAudio: "./editable/assets/ambient-shehnai.mp3",
  },
};
