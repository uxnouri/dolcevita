import type { Lang } from "../i18n";

/** Turnkey ("clé en main") interior design offer, from the client meeting. */
export type Service = {
  id: string;
  image: string;
  title: string;
  text: string;
  points: string[];
};

type ServicesCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  services: Service[];
  processTitle: string;
  process: { title: string; text: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaWhatsapp: string;
  whatsappMessage: string;
};

const IMAGES = {
  "conception-3d": "2025-04-modern-banner1.jpg",
  amenagement: "2025-04-modern-banner2.jpg",
  "ameublement-decoration": "2025-04-modern-banner5.jpg",
};

export const SERVICES: Record<Lang, ServicesCopy> = {
  fr: {
    eyebrow: "Service clé en main",
    title: "De l’idée à la dernière touche, on s’occupe de tout.",
    lead: "Un seul interlocuteur pour concevoir, aménager, meubler et décorer votre intérieur. Vous découvrez votre projet en 3D, puis nous le réalisons jusqu’au moindre détail.",
    services: [
      {
        id: "conception-3d",
        image: IMAGES["conception-3d"],
        title: "Conception 3D",
        text: "Visualisez votre intérieur avant de vous engager. Nous modélisons chaque pièce en 3D : volumes, matières, couleurs et lumière.",
        points: ["Plans et rendus 3D réalistes", "Choix des matières et des couleurs", "Ajustements jusqu’à validation"],
      },
      {
        id: "amenagement",
        image: IMAGES.amenagement,
        title: "Aménagement",
        text: "Nous optimisons chaque mètre carré : circulation, rangements et mobilier sur mesure pensés pour votre façon de vivre.",
        points: ["Organisation et circulation des espaces", "Rangements et meubles sur mesure", "Suivi de la réalisation"],
      },
      {
        id: "ameublement-decoration",
        image: IMAGES["ameublement-decoration"],
        title: "Ameublement & décoration d’intérieur",
        text: "Nous sélectionnons ou fabriquons le mobilier, les rideaux, les textiles et les objets qui donnent vie à votre intérieur, puis nous installons tout.",
        points: ["Mobilier de notre atelier ou sur mesure", "Rideaux, textiles et luminaires", "Livraison et installation"],
      },
    ],
    processTitle: "Comment ça se passe",
    process: [
      { title: "Rencontre", text: "Nous écoutons vos envies, votre budget et prenons les mesures." },
      { title: "Conception 3D", text: "Vous découvrez votre futur intérieur en 3D et le validez avec nous." },
      { title: "Réalisation", text: "Aménagement, fabrication et sélection du mobilier et de la décoration." },
      { title: "Installation", text: "Nous livrons et installons tout : vous n’avez plus qu’à profiter." },
    ],
    ctaTitle: "Parlons de votre projet",
    ctaText: "Appartement, villa, riad ou local professionnel : décrivez-nous votre projet, nous vous répondons rapidement.",
    ctaWhatsapp: "Demander un devis sur WhatsApp",
    whatsappMessage: "Bonjour Dolce Vita Design, je souhaite un devis pour un projet clé en main.",
  },
  en: {
    eyebrow: "Turnkey service",
    title: "From the first idea to the final touch, we take care of everything.",
    lead: "One partner to design, lay out, furnish and decorate your home. You see your project in 3D first, then we bring it to life down to the last detail.",
    services: [
      {
        id: "conception-3d",
        image: IMAGES["conception-3d"],
        title: "3D design",
        text: "See your interior before you commit. We model every room in 3D: volumes, materials, colours and light.",
        points: ["Plans and realistic 3D renders", "Choice of materials and colours", "Revisions until you approve"],
      },
      {
        id: "amenagement",
        image: IMAGES.amenagement,
        title: "Space planning",
        text: "We make the most of every square metre: flow, storage and made-to-measure furniture designed around the way you live.",
        points: ["Layout and flow of each space", "Built-in storage and custom furniture", "Supervision of the works"],
      },
      {
        id: "ameublement-decoration",
        image: IMAGES["ameublement-decoration"],
        title: "Furnishing & interior decoration",
        text: "We select or make the furniture, curtains, textiles and objects that bring your home to life, then install everything.",
        points: ["Furniture from our workshop or made to measure", "Curtains, textiles and lighting", "Delivery and installation"],
      },
    ],
    processTitle: "How it works",
    process: [
      { title: "Meeting", text: "We listen to your ideas and budget, and take measurements." },
      { title: "3D design", text: "You discover your future interior in 3D and approve it with us." },
      { title: "Making it real", text: "Space planning, furniture making and selection of furniture and decor." },
      { title: "Installation", text: "We deliver and install everything: all that's left is to enjoy it." },
    ],
    ctaTitle: "Let’s talk about your project",
    ctaText: "Apartment, villa, riad or business premises: tell us about your project and we will get back to you quickly.",
    ctaWhatsapp: "Ask for a quote on WhatsApp",
    whatsappMessage: "Hello Dolce Vita Design, I would like a quote for a turnkey project.",
  },
  ar: {
    eyebrow: "خدمة متكاملة",
    title: "من الفكرة الأولى إلى اللمسة الأخيرة، نتكفل بكل شيء.",
    lead: "جهة واحدة لتصميم بيتك وتهيئته وتأثيثه وتزيينه. ترى مشروعك أولًا بتقنية ثلاثية الأبعاد، ثم ننفذه بأدق التفاصيل.",
    services: [
      {
        id: "conception-3d",
        image: IMAGES["conception-3d"],
        title: "التصميم ثلاثي الأبعاد",
        text: "شاهد ديكور بيتك قبل أن تلتزم. نصمم كل غرفة بتقنية ثلاثية الأبعاد: الأحجام والخامات والألوان والإضاءة.",
        points: ["مخططات وصور ثلاثية الأبعاد واقعية", "اختيار الخامات والألوان", "تعديلات حتى موافقتك"],
      },
      {
        id: "amenagement",
        image: IMAGES.amenagement,
        title: "تهيئة المساحات",
        text: "نستغل كل متر مربع: الحركة والتخزين وأثاث حسب المقاس مصمَّم وفق أسلوب حياتك.",
        points: ["تنظيم المساحات وسهولة الحركة", "خزائن وأثاث حسب المقاس", "متابعة التنفيذ"],
      },
      {
        id: "ameublement-decoration",
        image: IMAGES["ameublement-decoration"],
        title: "التأثيث والديكور الداخلي",
        text: "نختار أو نصنع الأثاث والستائر والأقمشة والقطع التي تمنح بيتك الحياة، ثم نتكفل بتركيب كل شيء.",
        points: ["أثاث من ورشتنا أو حسب الطلب", "ستائر وأقمشة وإنارة", "التوصيل والتركيب"],
      },
    ],
    processTitle: "كيف نعمل",
    process: [
      { title: "اللقاء", text: "نستمع إلى رغباتك وميزانيتك ونأخذ القياسات." },
      { title: "التصميم ثلاثي الأبعاد", text: "تكتشف بيتك المستقبلي بتقنية ثلاثية الأبعاد وتوافق عليه معنا." },
      { title: "التنفيذ", text: "تهيئة المساحات وصناعة الأثاث واختيار قطع الديكور." },
      { title: "التركيب", text: "نوصل ونركّب كل شيء، وما عليك إلا الاستمتاع." },
    ],
    ctaTitle: "لنتحدث عن مشروعك",
    ctaText: "شقة أو فيلا أو رياض أو محل مهني: أخبرنا عن مشروعك وسنرد عليك بسرعة.",
    ctaWhatsapp: "اطلب عرض سعر عبر واتساب",
    whatsappMessage: "مرحبًا دولتشي فيتا ديزاين، أرغب في عرض سعر لمشروع متكامل.",
  },
};
