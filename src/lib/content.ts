import {
  Activity,
  BadgeCheck,
  CalendarCheck,
  Footprints,
  HeartPulse,
  MapPin,
  Microscope,
  MoveRight,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRoundCheck,
  Waves,
} from "lucide-react";

export const clinic = {
  name: "My Feet Podiatry",
  legalName: "My Feet NI",
  tagline:
    "Premium foot health and movement care in Ballymena, helping you move comfortably, stay active and enjoy life with healthy feet.",
  address: {
    street: "31 Greenvale Street",
    locality: "Ballymena",
    region: "Co. Antrim",
    postalCode: "BT52 1UL",
    country: "United Kingdom",
  },
  phone: "02825654625",
  email: "admin@myfeetni.co.uk",
  bookingUrl: "https://my-feet-podiatry.au1.cliniko.com/bookings#service",
  instagram: "https://www.instagram.com/myfeetpodiatry/",
  facebook: "https://www.facebook.com/myfeetni/?locale=en_GB&checkpoint_src=any",
  founded: "2010",
  map: {
    lat: 54.8664343,
    lng: -6.2760556,
  },
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/treatments", label: "Treatments" },
  { href: "/contact", label: "Contact" },
];

export const trustItems = [
  { label: "Established", value: "Since 2010", icon: CalendarCheck },
  { label: "Registered care", value: "HCPC podiatrists", icon: ShieldCheck },
  { label: "Professional body", value: "Royal College of Podiatry", icon: BadgeCheck },
  { label: "Local clinic", value: "Ballymena", icon: MapPin },
];

export const outcomes = [
  {
    title: "Move comfortably again",
    text: "Clear assessment, skilled treatment and practical advice for feet that have started to hold you back.",
    icon: Footprints,
  },
  {
    title: "Stay active",
    text: "Support for walking, sport, work and everyday routines, with care designed around how you actually live.",
    icon: Activity,
  },
  {
    title: "Feel confident on your feet",
    text: "From routine care to cosmetic foot wellness, the focus is comfort, reassurance and healthy feet.",
    icon: Sparkles,
  },
];

export const treatmentGroups = [
  {
    title: "Routine Podiatry",
    slug: "routine-podiatry",
    summary: "Toenail cutting, corns, callus, hard skin, cracked heels and general foot health.",
    helpsWith: ["Thick nails", "Corns and callus", "Hard skin", "Cracked heels"],
    whoFor: "Anyone who wants comfortable, well-maintained feet or needs help with routine foot care.",
    howItWorks:
      "Your podiatrist assesses your skin and nails, treats areas of concern and gives clear advice for ongoing comfort.",
    outcome: "Feet that feel lighter, smoother and easier to live with day to day.",
    icon: Stethoscope,
  },
  {
    title: "Nail & Skin Treatments",
    slug: "nail-skin-treatments",
    summary:
      "Ingrown toenails, fungal nails, verrucae, nail reconstruction and medical pedicures.",
    helpsWith: ["Ingrown toenails", "Fungal nails", "Verrucae", "Damaged nails"],
    whoFor: "Patients with painful, changing or difficult nails and skin concerns needing professional care.",
    howItWorks:
      "The team identifies the likely cause, discusses the most suitable options and provides treatment in clinic where appropriate.",
    outcome: "Clearer advice, calmer symptoms and a plan that supports healthier feet.",
    icon: Microscope,
  },
  {
    title: "Heel Pain & Plantar Fasciitis",
    slug: "heel-pain-plantar-fasciitis",
    summary: "Assessment and treatment for heel pain, foot pain and plantar fasciitis.",
    helpsWith: ["Morning heel pain", "Arch pain", "Pain after walking", "Foot strain"],
    whoFor: "Active adults, walkers, runners and anyone whose foot pain is limiting daily movement.",
    howItWorks:
      "Your clinician assesses the pattern of pain and movement, then recommends treatment, exercises or onward options.",
    outcome: "A clearer diagnosis and a practical route back to more comfortable movement.",
    icon: HeartPulse,
  },
  {
    title: "Biomechanics & Orthotics",
    slug: "biomechanics-orthotics",
    summary: "Gait analysis, movement assessment and orthotic support.",
    helpsWith: ["Gait concerns", "Recurring foot pain", "Lower limb strain", "Support needs"],
    whoFor: "People who need a deeper look at how their feet and lower limbs move.",
    howItWorks:
      "The team reviews movement, footwear and symptoms, then advises on support strategies including orthotics where suitable.",
    outcome: "More informed movement, better support and a plan designed around your needs.",
    icon: MoveRight,
  },
  {
    title: "Shockwave Therapy",
    slug: "shockwave-therapy",
    summary: "Modern treatment technology used for selected persistent pain presentations.",
    helpsWith: ["Persistent heel pain", "Soft tissue irritation", "Stubborn symptoms"],
    whoFor: "Patients whose symptoms may benefit from a technology-led treatment option after assessment.",
    howItWorks:
      "Suitability is assessed first, then treatment is delivered in a clean, clinical setting with advice for recovery.",
    outcome: "A structured treatment pathway for selected longer-running pain concerns.",
    icon: Waves,
  },
  {
    title: "Minor Surgery",
    slug: "minor-surgery",
    summary:
      "Partial nail avulsion, total nail avulsion and verruca needling in a safe clinical setting.",
    helpsWith: ["Painful ingrown toenails", "Problematic nails", "Stubborn verrucae"],
    whoFor: "Patients who need more definitive treatment after assessment and discussion of options.",
    howItWorks:
      "The team explains suitability, procedure steps and aftercare before any minor surgical treatment is planned.",
    outcome: "Professional care for problems that need a more targeted clinical approach.",
    icon: UserRoundCheck,
  },
  {
    title: "Diabetic Foot Assessments",
    slug: "diabetic-foot-assessments",
    summary: "Foot checks and preventative care for people living with diabetes.",
    helpsWith: ["Foot health monitoring", "Skin and nail care", "Risk awareness"],
    whoFor: "People with diabetes who need regular, professional foot health support.",
    howItWorks:
      "The appointment focuses on foot health review, routine care where needed and advice tailored to your risk profile.",
    outcome: "Confidence that your feet are being monitored by an experienced team.",
    icon: ShieldCheck,
  },
  {
    title: "Medical Pedicure / Medi Pedi",
    slug: "medical-pedicure-medi-pedi",
    summary: "Cosmetic foot wellness including Medi Pedi, Medi Pedi Lux and warm paraffin wax.",
    helpsWith: ["Dry skin", "Nail appearance", "Pre-holiday care", "Foot confidence"],
    whoFor: "Patients who want feet that feel cared for, comfortable and sandal ready.",
    howItWorks:
      "A podiatry-led wellness appointment blends clinical care with a polished, confidence-building finish.",
    outcome: "Comfortable, refreshed feet with a softer wellness clinic experience.",
    icon: Sparkles,
  },
];

export const careJourney = [
  {
    step: "01",
    title: "Book clearly",
    text: "Choose online booking for the fastest route, or call the clinic if you would rather speak to the team first.",
  },
  {
    step: "02",
    title: "Be assessed",
    text: "Your clinician listens, examines and explains what is happening in plain language before treatment begins.",
  },
  {
    step: "03",
    title: "Leave with a plan",
    text: "You receive treatment where appropriate, plus practical advice for comfort, mobility and ongoing foot health.",
  },
];

export const team = [
  {
    name: "Maria Kearney",
    role: "Founder and HCPC-registered podiatrist",
    text: "Maria founded My Feet Podiatry in 2010 at 23 after graduating from University of Ulster, Jordanstown, with a First Class Honours degree in Podiatry.",
  },
  {
    name: "Molly",
    role: "HCPC-registered podiatrist",
    text: "Molly provides assessment, diagnosis and treatment for a wide range of foot and lower limb conditions, supporting comfort, mobility and wellbeing.",
  },
  {
    name: "Victoria",
    role: "HCPC-registered podiatrist",
    text: "Victoria works within the NHS four days a week and brings clinical experience and evidence-based practice to her role at My Feet Podiatry.",
  },
  {
    name: "Christie",
    role: "Foot Health Practitioner",
    text: "Christie has more than 15 years of experience in routine foot care and preventative treatments, with a friendly and caring approach.",
  },
  {
    name: "Riona",
    role: "Reception",
    text: "Riona is often the first friendly face patients meet and helps every visit run smoothly, from appointments to enquiries.",
  },
];

export const reviews = [
  {
    quote: "The service is exceptional. Molly is professional, incredibly knowledgeable, and clearly knows exactly what she is doing.",
    source: "Patient review",
  },
  {
    quote: "I left the clinic feeling great and sandal ready. Lovely clinic, friendly and knowledgeable podiatrist.",
    source: "Patient review",
  },
  {
    quote: "Booked online, had an appointment within 2 days at a time that suited me. Maria was fantastic.",
    source: "Patient review",
  },
  {
    quote: "First visit with Molly - welcome relief from a painful toe and a lovely atmosphere.",
    source: "Patient review",
  },
];

export const faqs = [
  {
    question: "Do I need a referral to book?",
    answer:
      "No referral is mentioned on the source website. Patients can book online directly through the clinic booking link.",
  },
  {
    question: "Do you treat ingrown toenails?",
    answer:
      "Yes. The clinic lists ingrown toenail management and minor surgery including partial and total nail avulsion.",
  },
  {
    question: "Do you offer gait analysis and orthotics?",
    answer:
      "Yes. Gait analysis, orthotics and movement-related foot care are included in the clinic treatment list.",
  },
  {
    question: "Where is the clinic?",
    answer:
      "My Feet Podiatry is at 31 Greenvale Street, Ballymena, Co. Antrim, BT52 1UL.",
  },
];

export const imageLibrary = {
  hero:
    "https://images.squarespace-cdn.com/content/v1/6a2ab2274b5616653454657f/1781378112480-25U9WT6EFYYWIHF8ZJDF/GettyImages-945036672.jpg",
  treatments:
    "https://images.squarespace-cdn.com/content/v1/6a2ab2274b5616653454657f/1781378853359-GWH2GZ20GH42HGHJZJ07/GettyImages-506473292.jpg",
  contact:
    "https://images.squarespace-cdn.com/content/v1/6a2ab2274b5616653454657f/1781377544144-26KB5RJBMMT960IZBEJQ/GettyImages-1777641882.jpg",
  wellness:
    "https://images.squarespace-cdn.com/content/v1/6a2ab2274b5616653454657f/1781291516259-F3D9CVOI8NPT7JV1OHQB/GettyImages-1781672157.jpg",
};

// TODO: Confirm clinic opening hours, parking notes and accessibility details with the clinic.
// They were not published in the extracted source content.
export const unconfirmedOperationalNotes = {
  hours: "Opening hours to be confirmed",
  parking:
    "A patient review mentions handy parking, but formal parking/accessibility details need confirmation.",
};
