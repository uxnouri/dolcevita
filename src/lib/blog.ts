import postsData from "../data/posts.json";
import type { Lang } from "../i18n";

const TITLES_FR: Record<string, string> = {
  "transform-your-home-scandinavian-style-ideas-with-a-luxury-touch":
    "Style scandinave : des idées pour un intérieur à la touche luxueuse",
  "modular-kitchen-design-in-calgary-canada-roots-cabinet": "La cuisine modulaire, pensée dans les moindres détails",
  "create-your-modern-bohemian-home-office": "Créer un bureau bohème moderne avec plantes et motifs géométriques",
  "pop-border-designs-the-unexpected-twist-your-home-interiors-need":
    "Les bordures décoratives : la touche inattendue de votre intérieur",
  "5-stunning-bed-designs-make-a-cosy-bedroom-dreams-come-alive": "5 lits superbes pour une chambre cocon",
  "style-marries-storage-10-stunning-living-room-almirah-designs":
    "Quand le style rencontre le rangement : 10 armoires de salon",
  "the-ultimate-guide-to-designing-your-ideal-kitchen-10-key-essentials":
    "Le guide pour concevoir la cuisine idéale : 10 essentiels",
  "bring-your-kitchen-to-life-with-these-kitchen-colour-trends-in-2025":
    "Les couleurs de cuisine tendance pour donner vie à votre espace",
  "10-stunning-glass-shelving-ideas-to-elevate-your-home-decor":
    "10 idées d’étagères en verre pour sublimer votre décoration",
  "5-bhk-house-designs-that-turn-heads-and-win-hearts": "Grandes maisons : 5 aménagements qui font tourner les têtes",
  "from-walls-to-ceilings-pop-moulding-ideas-for-a-simple-yet-stylish-home":
    "Des murs aux plafonds : des moulures simples et élégantes",
  "find-the-hue-thats-perfect-for-you-drawing-room-colour-ideas":
    "Trouver la teinte parfaite : idées de couleurs pour le salon",
  "vibrant-visions-captivating-living-room-colour-trends": "Couleurs de salon : les tendances qui captivent",
  "10-living-room-interior-design-trends-to-transform-your-space":
    "10 tendances déco pour transformer votre salon",
  "we-use-only-the-best-and-newest-woodworking-machines-available-on-the-market":
    "Nous travaillons avec les meilleures machines à bois du marché",
  "we-use-the-highest-quality-materials-hard-to-find-on-the-market-to-make-our-furniture-unique":
    "Des matériaux d’exception pour des meubles uniques",
  "2-2": "Les détails font toute la différence : nous y portons une attention particulière",
};

const TITLES_AR: Record<string, string> = {
  "transform-your-home-scandinavian-style-ideas-with-a-luxury-touch": "الطراز الإسكندنافي: أفكار لبيت بلمسة فاخرة",
  "modular-kitchen-design-in-calgary-canada-roots-cabinet": "المطبخ المعياري، مدروس في أدق التفاصيل",
  "create-your-modern-bohemian-home-office": "مكتب منزلي بوهيمي عصري بالنباتات والأشكال الهندسية",
  "pop-border-designs-the-unexpected-twist-your-home-interiors-need": "الإطارات الزخرفية: لمسة غير متوقعة لديكور بيتك",
  "5-stunning-bed-designs-make-a-cosy-bedroom-dreams-come-alive": "5 تصاميم أسرّة رائعة لغرفة نوم دافئة",
  "style-marries-storage-10-stunning-living-room-almirah-designs": "حين يلتقي الجمال بالتخزين: 10 خزائن للصالون",
  "the-ultimate-guide-to-designing-your-ideal-kitchen-10-key-essentials": "دليل تصميم المطبخ المثالي: 10 أساسيات",
  "bring-your-kitchen-to-life-with-these-kitchen-colour-trends-in-2025": "ألوان المطبخ الرائجة لتمنح مساحتك الحياة",
  "10-stunning-glass-shelving-ideas-to-elevate-your-home-decor": "10 أفكار لرفوف زجاجية ترتقي بديكور بيتك",
  "5-bhk-house-designs-that-turn-heads-and-win-hearts": "البيوت الكبيرة: 5 تصاميم تلفت الأنظار",
  "from-walls-to-ceilings-pop-moulding-ideas-for-a-simple-yet-stylish-home":
    "من الجدران إلى الأسقف: زخارف جبسية بسيطة وأنيقة",
  "find-the-hue-thats-perfect-for-you-drawing-room-colour-ideas": "اعثر على اللون المثالي: أفكار ألوان للصالون",
  "vibrant-visions-captivating-living-room-colour-trends": "ألوان الصالون: الاتجاهات التي تأسر الأنظار",
  "10-living-room-interior-design-trends-to-transform-your-space": "10 اتجاهات في الديكور لتجديد صالونك",
  "we-use-only-the-best-and-newest-woodworking-machines-available-on-the-market":
    "نعمل بأفضل وأحدث آلات النجارة في السوق",
  "we-use-the-highest-quality-materials-hard-to-find-on-the-market-to-make-our-furniture-unique":
    "خامات استثنائية لأثاث فريد",
  "2-2": "التفاصيل تصنع الفرق: نوليها عناية خاصة",
};

export type Post ={ slug: string; date: string; image: string | null; title: Record<Lang, string> };

export const posts: Post[] = postsData.map((p) => ({
  slug: p.slug,
  date: p.date,
  image: p.image,
  title: { en: p.title, fr: TITLES_FR[p.slug] ?? p.title, ar: TITLES_AR[p.slug] ?? p.title },
}));

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

/** Shared article body (the original site used the same text for every post). */
type Block =
  | { type: "lead"; text: string }
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: [string, string][] }
  | { type: "image"; src: string };

export const ARTICLE: Record<Lang, Block[]> = {
  fr: [
    { type: "lead", text: "Pour meubler votre maison, confort et style sont essentiels. Mais comment trouver le juste équilibre ?" },
    { type: "p", text: "Chez Dolce Vita Design, nous pensons que votre intérieur doit être beau, mais aussi être un refuge : un lieu pour se détendre, recevoir et se sentir bien. Voici comment transformer votre maison en véritable cocon." },
    { type: "image", src: "2025-03-blog-detail-1-rounded.jpg" },
    { type: "h2", text: "Le salon, cœur de la maison" },
    { type: "p", text: "C’est la pièce où l’on passe le plus de temps en famille et entre amis. Commencez par l’essentiel : un canapé confortable, adapté à votre style et à votre façon de vivre." },
    { type: "list", items: [
      ["Des canapés confortables", "alliant confort et élégance, du mid-century au contemporain."],
      ["Des tables basses", "à la fois pratiques et élégantes, véritables pièces centrales."],
      ["Des meubles TV", "pour organiser votre espace multimédia sans sacrifier le style."],
    ] },
    { type: "image", src: "2025-03-blog-detail-2-rounded.jpg" },
    { type: "h2", text: "La chambre, votre sanctuaire" },
    { type: "p", text: "Votre chambre doit être un lieu de calme qui favorise la détente et un sommeil réparateur." },
    { type: "list", items: [
      ["Choisissez un lit confortable :", "tête de lit capitonnée ou cadre en bois, le lit est la pièce maîtresse."],
      ["Pensez rangement :", "commodes, chevets et armoires gardent l’espace ordonné et élégant."],
      ["Ajoutez des textiles doux :", "linge de lit, plaids et coussins apportent la touche finale."],
    ] },
    { type: "image", src: "2025-03-blog-detail-3-rounded.jpg" },
    { type: "h2", text: "Le bureau, entre fonction et style" },
    { type: "p", text: "Le bureau à la maison est devenu essentiel. Il n’a pourtant aucune raison d’être terne : un bel espace de travail aide à rester concentré et à l’aise." },
    { type: "list", items: [
      ["Des sièges ergonomiques", "pour travailler longtemps sans inconfort."],
      ["Des bureaux fonctionnels", "du coin compact au grand plan de travail."],
      ["Du rangement", "avec caissons, bibliothèques et organisateurs pour un esprit clair."],
    ] },
    { type: "h2", text: "Pourquoi Dolce Vita Design ?" },
    { type: "p", text: "Notre objectif : un mobilier de qualité, fonctionnel, élégant et surtout confortable, qui vous accompagne pendant des années. Meubler sa maison, ce n’est pas remplir un espace, c’est créer un lieu qui vous ressemble." },
  ],
  en: [
    { type: "lead", text: "When it comes to furnishing your home, comfort and style are key. But how do you strike the perfect balance?" },
    { type: "p", text: "At Dolce Vita Design, we believe your space should not only look beautiful but also feel like a sanctuary: a place to unwind, entertain and feel at ease. Here is how to turn your home into the ultimate cosy haven." },
    { type: "image", src: "2025-03-blog-detail-1-rounded.jpg" },
    { type: "h2", text: "Start with the living room, the heart of your home" },
    { type: "p", text: "The living room is where you spend the most time with family and friends. Start with the essentials, like a comfortable sofa that fits your aesthetic and lifestyle." },
    { type: "list", items: [
      ["Comfortable sofas", "that blend comfort and style, from mid-century to contemporary."],
      ["Stylish coffee tables", "that balance practicality and chic design."],
      ["Entertainment units", "that organise your media space without sacrificing style."],
    ] },
    { type: "image", src: "2025-03-blog-detail-2-rounded.jpg" },
    { type: "h2", text: "Create your personal sanctuary: the bedroom" },
    { type: "p", text: "Your bedroom should be a calming retreat that promotes relaxation and restful sleep." },
    { type: "list", items: [
      ["Choose a comfortable bed:", "upholstered headboard or wooden frame, the bed is the star of the room."],
      ["Add storage:", "dressers, nightstands and wardrobes keep everything tidy and polished."],
      ["Layer soft textiles:", "bedding, throws and cushions add the finishing touch."],
    ] },
    { type: "image", src: "2025-03-blog-detail-3-rounded.jpg" },
    { type: "h2", text: "Elevate your home office" },
    { type: "p", text: "Home offices have become essential, but that doesn’t mean your workspace should feel dull. The right furniture keeps you productive and comfortable." },
    { type: "list", items: [
      ["Ergonomic chairs", "so you can work for hours in comfort."],
      ["Functional desks", "from compact nooks to spacious work surfaces."],
      ["Storage", "with cabinets, shelves and organisers for a clutter-free mind."],
    ] },
    { type: "h2", text: "Why Dolce Vita Design?" },
    { type: "p", text: "Our goal is high-quality furniture that is functional, stylish and above all comfortable, built to last for years. Furnishing a home isn’t about filling a space; it’s about creating a place that reflects who you are." },
  ],
  ar: [
    { type: "lead", text: "عند تأثيث بيتك، الراحة والأناقة أمران أساسيان. لكن كيف تجد التوازن المناسب بينهما؟" },
    { type: "p", text: "في دولتشي فيتا ديزاين، نؤمن بأن بيتك يجب أن يكون جميلًا، وأن يكون أيضًا ملاذًا: مكانًا للاسترخاء واستقبال الضيوف والشعور بالراحة. إليك كيف تحوّل بيتك إلى مساحة دافئة حقًا." },
    { type: "image", src: "2025-03-blog-detail-1-rounded.jpg" },
    { type: "h2", text: "الصالون، قلب البيت" },
    { type: "p", text: "هو المكان الذي نقضي فيه أطول وقت مع العائلة والأصدقاء. ابدأ بالأساسيات: كنبة مريحة تناسب ذوقك وأسلوب حياتك." },
    { type: "list", items: [
      ["كنبات مريحة", "تجمع بين الراحة والأناقة، من طراز منتصف القرن إلى التصاميم العصرية."],
      ["طاولات قهوة", "عملية وأنيقة في آن واحد، تشكّل مركز الصالون."],
      ["وحدات التلفاز", "لتنظيم أجهزتك دون التضحية بالجمال."],
    ] },
    { type: "image", src: "2025-03-blog-detail-2-rounded.jpg" },
    { type: "h2", text: "غرفة النوم، ملاذك الخاص" },
    { type: "p", text: "يجب أن تكون غرفة نومك مكانًا هادئًا يساعد على الاسترخاء والنوم المريح." },
    { type: "list", items: [
      ["اختر سريرًا مريحًا:", "بلوح رأس منجّد أو بإطار خشبي، السرير هو نجم الغرفة."],
      ["فكّر في التخزين:", "الخزائن والكومودينو والدواليب تحافظ على ترتيب المكان وأناقته."],
      ["أضف أقمشة ناعمة:", "أغطية السرير والبطانيات والوسائد تمنح اللمسة الأخيرة."],
    ] },
    { type: "image", src: "2025-03-blog-detail-3-rounded.jpg" },
    { type: "h2", text: "المكتب المنزلي، بين العملي والأنيق" },
    { type: "p", text: "أصبح المكتب في البيت ضرورة، لكن لا داعي لأن يكون مملًا: مساحة عمل جميلة تساعدك على التركيز والراحة." },
    { type: "list", items: [
      ["كراسي مريحة", "تسمح لك بالعمل لساعات دون تعب."],
      ["مكاتب عملية", "من الركن الصغير إلى سطح العمل الواسع."],
      ["حلول تخزين", "خزائن ورفوف ومنظِّمات لذهن صافٍ ومكتب مرتب."],
    ] },
    { type: "h2", text: "لماذا دولتشي فيتا ديزاين؟" },
    { type: "p", text: "هدفنا أثاث عالي الجودة، عملي وأنيق، ومريح قبل كل شيء، يرافقك لسنوات طويلة. تأثيث البيت لا يعني ملء الفراغ، بل خلق مكان يشبهك." },
  ],
};
