import type { Article } from "./types";

export const PART_1: Article[] = [
  // ---------------------------------------------------------------------------
  // 1. Canapé sur mesure
  // ---------------------------------------------------------------------------
  {
    slug: "canape-sur-mesure-marrakech",
    date: "2026-11-10",
    image: "canape-sur-mesure-marrakech.jpg",
    title: {
      fr: "Canapé sur mesure à Marrakech : comment bien le choisir",
      en: "Made-to-measure sofa in Marrakech: how to choose the right one",
      ar: "كنبة حسب المقاس في مراكش: كيف تختارها بشكل صحيح؟",
    },
    description: {
      fr: "Dimensions, canapé d’angle ou modulable, profondeur d’assise, bouclé ou velours : nos conseils pour choisir votre canapé sur mesure à Marrakech.",
      en: "Room size, corner or modular, seat depth, bouclé or velvet: our practical guide to choosing a made-to-measure sofa in Marrakech, Morocco.",
      ar: "المقاسات، كنبة زاوية أو معيارية، عمق المقعد، البوكليه أو المخمل: نصائحنا العملية لاختيار كنبة حسب المقاس في مراكش تناسب صالونك وطريقة عيشك.",
    },
    body: {
      fr: [
        {
          type: "lead",
          text: "Un canapé sur mesure à Marrakech se choisit d’abord avec un mètre ruban : les dimensions de la pièce, votre façon de vous asseoir et la vie de la maison comptent davantage qu’une photo de catalogue. Voici la méthode que nous suivons avec nos clients, de la prise de mesures au choix du tissu.",
        },
        { type: "h2", text: "Partir des dimensions de la pièce" },
        {
          type: "p",
          text: "Avant de parler forme ou couleur, mesurez le mur qui accueillera le canapé, la distance jusqu’à la télévision ou à la fenêtre et les passages autour. Pensez aussi au trajet du canapé jusqu’au salon : escalier étroit d’un riad, ascenseur d’un immeuble à Guéliz, porte d’entrée d’une villa. C’est tout l’intérêt du [mobilier sur mesure](blog:mobilier-sur-mesure-marrakech) : adapter la longueur, l’angle ou le découpage en éléments à ces contraintes, plutôt que de subir un format standard.",
        },
        {
          type: "list",
          items: [
            ["Longueur du mur :", "laissez un peu d’air de chaque côté plutôt que de couvrir le mur d’un bout à l’autre."],
            ["Passages :", "comptez, en règle générale, 80 à 90 cm entre le canapé et les autres meubles pour circuler sans gêne."],
            ["Accès :", "mesurez portes, couloirs et escaliers, surtout dans un riad ou un immeuble ancien."],
          ],
        },
        { type: "h2", text: "Canapé d’angle, droit ou modulable ?" },
        {
          type: "p",
          text: "Le canapé d’angle reste très demandé au Maroc par les familles qui reçoivent : il offre beaucoup de places assises sur une surface compacte et délimite naturellement le salon dans une pièce ouverte. Le canapé droit convient mieux aux pièces étroites ou aux salons où l’on veut garder une circulation fluide, souvent complété par un ou deux fauteuils. Le modulable, enfin, se compose d’éléments que l’on réorganise, idéal pour une pièce de forme irrégulière.",
        },
        {
          type: "p",
          text: "Notre [canapé d’angle modulable](product:canape-angle-modulable) illustre bien cette souplesse, tandis que le [canapé Banana](product:canape-banana) mise sur une silhouette tout en courbes, pièce maîtresse d’un salon contemporain.",
        },
        {
          type: "products",
          slugs: ["canape-angle-modulable", "canape-angle-boucle-terracotta", "canape-banana", "canape-capitonne-vert-emeraude"],
        },
        { type: "h2", text: "Profondeur et confort d’assise" },
        {
          type: "p",
          text: "Le confort ne se lit pas sur une photo, il s’essaie. Quelques repères généraux aident toutefois à préciser votre demande : une assise peu profonde favorise une position droite, idéale pour discuter ou prendre le thé, tandis qu’une assise plus profonde invite à s’installer jambes repliées. Un canapé bas et profond donne une allure contemporaine ; un modèle un peu plus haut et plus ferme sera plus facile à quitter pour les personnes âgées. Le mieux reste de vous asseoir sur plusieurs modèles au showroom avant de décider.",
        },
        { type: "h2", text: "Bouclé, velours ou tissu texturé : la bonne matière" },
        {
          type: "p",
          text: "La matière donne son caractère au canapé, mais elle doit aussi suivre votre quotidien et le climat de Marrakech : chaleur sèche, poussière et soleil fort près des fenêtres.",
        },
        {
          type: "list",
          items: [
            ["Le bouclé :", "doux, chaleureux et très actuel, il apporte du relief même dans des tons neutres. Notre [guide du tissu bouclé](blog:tissu-boucle-tendance-entretien) explique comment l’entretenir."],
            ["Le velours :", "profond et lumineux, il donne une allure élégante, comme sur notre canapé capitonné vert émeraude."],
            ["Le tissu texturé :", "au tissage serré et à l’aspect mat, il pardonne bien les petites traces de la vie de famille."],
          ],
        },
        {
          type: "p",
          text: "Côté couleur, les neutres (crème, beige, sable) agrandissent visuellement la pièce. Les teintes chaudes comme le terracotta font écho aux murs de la ville ocre, et une couleur franche comme l’émeraude assume le rôle de pièce forte. Évitez de laisser un tissu foncé en plein soleil derrière une baie vitrée : un voilage suffit souvent à le protéger. Pour aller plus loin, lisez nos idées sur les [couleurs d’intérieur à Marrakech](blog:couleurs-interieur-marrakech).",
        },
        { type: "h2", text: "Ce qu’il faut apporter au showroom" },
        {
          type: "p",
          text: "Pour que notre premier échange soit efficace, venez avec quelques éléments concrets. Nous vous recevons du lundi au samedi, de 9 h à 20 h, au showroom du 124 Al Massar, Route de Safi.",
        },
        {
          type: "list",
          items: [
            ["Un plan ou des mesures :", "longueur des murs, emplacement des portes, des fenêtres et des prises."],
            ["Des photos de la pièce :", "sol, murs, lumière naturelle et meubles que vous gardez."],
            ["Vos usages :", "nombre de personnes à asseoir, enfants, animaux, réceptions fréquentes."],
          ],
        },
        {
          type: "faq",
          items: [
            [
              "Combien coûte un canapé sur mesure à Marrakech ?",
              "Le prix dépend des dimensions, de la forme et du tissu choisis : nous établissons donc un devis pour chaque projet. Envoyez-nous vos mesures et quelques photos sur WhatsApp, ou passez au showroom de la Route de Safi.",
            ],
            [
              "Quel est le délai de fabrication d’un canapé sur mesure ?",
              "Il varie selon le modèle, la taille et le tissu. Nous vous l’indiquons précisément au moment du devis, avant toute commande.",
            ],
            [
              "Peut-on essayer les canapés avant de commander ?",
              "Oui, et c’est même recommandé. Au showroom, vous pouvez vous asseoir sur nos [canapés](category:canapes) et voir les matières de près, à la lumière du jour, avant de décider.",
            ],
          ],
        },
        { type: "cta" },
      ],
      en: [
        {
          type: "lead",
          text: "Choosing a made-to-measure sofa in Marrakech starts with a tape measure, not a catalogue: the size of the room, the way you like to sit and how the house is used matter more than any photo. Here is the method we follow with our clients, from the first measurements to the choice of fabric.",
        },
        { type: "h2", text: "Start with the room" },
        {
          type: "p",
          text: "Before thinking about shape or colour, measure the wall the sofa will stand against, the distance to the TV or the window, and the walkways around it. Then think about how the sofa will get there: the narrow staircase of a riad, the lift in a Guéliz apartment block, the front door of a villa. That is exactly what [made-to-measure furniture](blog:mobilier-sur-mesure-marrakech) is for: adapting the length, the corner or the number of sections to your space instead of settling for a standard size.",
        },
        {
          type: "list",
          items: [
            ["Wall length:", "leave a little breathing room on each side rather than filling the wall end to end."],
            ["Walkways:", "as a rule of thumb, allow 80 to 90 cm between the sofa and other furniture so people can move freely."],
            ["Access:", "measure doors, corridors and stairs, especially in a riad or an older building."],
          ],
        },
        { type: "h2", text: "Corner, straight or modular?" },
        {
          type: "p",
          text: "Corner sofas are a favourite in Morocco for families who entertain: they seat a lot of people in a compact footprint and naturally define the lounge area in an open-plan room. A straight sofa suits narrow rooms or spaces where you want the flow to stay open, often paired with one or two armchairs. A modular sofa is made of sections you can rearrange, ideal for an awkwardly shaped room.",
        },
        {
          type: "p",
          text: "Our [modular corner sofa](product:canape-angle-modulable) shows this flexibility well, while the [Banana sofa](product:canape-banana) goes for a curved silhouette that becomes the centrepiece of a contemporary living room.",
        },
        {
          type: "products",
          slugs: ["canape-angle-modulable", "canape-angle-boucle-terracotta", "canape-banana", "canape-capitonne-vert-emeraude"],
        },
        { type: "h2", text: "Seat depth and comfort" },
        {
          type: "p",
          text: "Comfort cannot be judged from a picture; you have to sit on it. A few general guidelines still help you brief us: a shallower seat keeps you upright, which is ideal for conversation or a glass of mint tea, while a deeper seat invites you to curl up with your legs tucked in. A low, deep sofa looks contemporary; a slightly higher, firmer one is easier to get out of for older family members. The best way to decide is to try several models at the showroom.",
        },
        { type: "h2", text: "Bouclé, velvet or textured fabric" },
        {
          type: "p",
          text: "The fabric gives a sofa its personality, but it also has to cope with daily life and with the Marrakech climate: dry heat, dust and strong sun near the windows.",
        },
        {
          type: "list",
          items: [
            ["Bouclé:", "soft, warm and very current, it adds texture even in neutral tones. Our [guide to bouclé fabric](blog:tissu-boucle-tendance-entretien) explains how to look after it."],
            ["Velvet:", "deep and luminous, it brings elegance, as on our emerald green tufted sofa."],
            ["Textured fabric:", "tightly woven with a matt finish, it is forgiving with the small marks of family life."],
          ],
        },
        {
          type: "p",
          text: "On colour, neutrals such as cream, beige and sand make a room feel larger and let cushions and objects take the stage. Warm shades like terracotta echo the walls of the Red City, while a bold colour like emerald plays the role of statement piece. Avoid leaving a dark fabric in full sun behind a picture window: a sheer curtain is often enough to protect it. For more ideas, read our piece on [Marrakech colours at home](blog:couleurs-interieur-marrakech).",
        },
        { type: "h2", text: "What to bring to the showroom" },
        {
          type: "p",
          text: "To make our first conversation as useful as possible, bring a few practical details. We are open Monday to Saturday, 9 am to 8 pm, at 124 Al Massar, Route de Safi.",
        },
        {
          type: "list",
          items: [
            ["A floor plan or measurements:", "wall lengths and the position of doors, windows and sockets."],
            ["Photos of the room:", "floor, walls, natural light and the furniture you are keeping."],
            ["How you live:", "how many people you need to seat, children, pets, how often you entertain."],
          ],
        },
        {
          type: "faq",
          items: [
            [
              "How much does a made-to-measure sofa cost in Marrakech?",
              "It depends on the size, the shape and the fabric, so we prepare a quote for each project. Send us your measurements and a few photos on WhatsApp, or drop by the showroom on Route de Safi.",
            ],
            [
              "How long does it take to make a custom sofa?",
              "It varies with the model, the size and the fabric. We give you a precise timeframe with the quote, before you place any order.",
            ],
            [
              "Can I try the sofas before ordering?",
              "Yes, and we recommend it. At the showroom you can sit on our [sofas](category:canapes) and see the fabrics up close, in daylight, before you decide.",
            ],
          ],
        },
        { type: "cta" },
      ],
      ar: [
        {
          type: "lead",
          text: "يبدأ اختيار كنبة حسب المقاس في مراكش بشريط القياس لا بالكتالوج: فمقاسات الغرفة وطريقة جلوسك وحياة البيت اليومية أهم من أي صورة. إليك الطريقة التي نتبعها مع زبائننا، من أخذ القياسات إلى اختيار القماش.",
        },
        { type: "h2", text: "ابدأ بمقاسات الغرفة" },
        {
          type: "p",
          text: "قبل التفكير في الشكل أو اللون، قِس الجدار الذي ستوضع عليه الكنبة، والمسافة إلى التلفاز أو النافذة، والممرات من حولها. وفكّر أيضًا في طريق الكنبة إلى الصالون: درج ضيق في رياض، أو مصعد عمارة في جيليز، أو باب مدخل فيلا. وهنا تكمن فائدة [الأثاث حسب المقاس](blog:mobilier-sur-mesure-marrakech): تكييف الطول والزاوية وعدد الوحدات مع هذه القيود بدل الاكتفاء بمقاس جاهز.",
        },
        {
          type: "list",
          items: [
            ["طول الجدار:", "اترك مساحة صغيرة على كل جانب بدل تغطية الجدار من طرف إلى طرف."],
            ["الممرات:", "كقاعدة عامة، احسب ما بين 80 و90 سم بين الكنبة وباقي الأثاث لتسهيل الحركة."],
            ["المداخل:", "قِس الأبواب والممرات والأدراج، خاصة في الرياض أو العمارات القديمة."],
            ["الاستعمال:", "صالون استقبال أو ركن تلفاز أو سرير إضافي للضيوف، ولكل حالة تصميمها."],
          ],
        },
        { type: "h2", text: "كنبة زاوية أم مستقيمة أم معيارية؟" },
        {
          type: "p",
          text: "تبقى كنبة الزاوية من أكثر الخيارات طلبًا في المغرب لدى العائلات التي تستقبل الضيوف كثيرًا، فهي توفر مقاعد عديدة في مساحة محدودة وتحدد ركن الجلوس بشكل طبيعي في الفضاءات المفتوحة. أما الكنبة المستقيمة فتناسب الغرف الضيقة أو الصالونات التي نريد فيها حركة سلسة، وغالبًا ما ترافقها كرسي أو كرسيان. وتتكون الكنبة المعيارية من وحدات يُعاد ترتيبها، وهي عملية إذا كنت تنتقل من بيت إلى آخر أو كان شكل الغرفة غير منتظم.",
        },
        {
          type: "p",
          text: "من بين موديلاتنا، تجسد [كنبة الزاوية المعيارية](product:canape-angle-modulable)، المنخفضة والمكونة من وحدات تُرتَّب حسب الغرفة، هذه المرونة بوضوح. أما [كنبة بانانا](product:canape-banana) فتعتمد على تصميم منحنٍ بالكامل يجعلها القطعة الأبرز في صالون عصري.",
        },
        {
          type: "products",
          slugs: ["canape-angle-modulable", "canape-angle-boucle-terracotta", "canape-banana", "canape-capitonne-vert-emeraude"],
        },
        { type: "h2", text: "عمق المقعد والراحة" },
        {
          type: "p",
          text: "الراحة لا تُقرأ في صورة، بل تُجرَّب. ومع ذلك تساعدك بعض القواعد العامة على تحديد طلبك: المقعد الأقل عمقًا يحافظ على جلسة مستقيمة مناسبة للحديث أو لشرب الشاي، بينما يدعو المقعد الأعمق إلى الجلوس براحة مع ثني الساقين. كما يغيّر ارتفاع المقعد وصلابة الوسائد وارتفاع الظهر الإحساس كثيرًا. الكنبة المنخفضة والعميقة تمنح مظهرًا عصريًا، أما الأعلى قليلًا والأكثر صلابة فيسهل النهوض منها على كبار السن. وأفضل طريقة للحسم هي تجربة عدة موديلات في صالة العرض.",
        },
        { type: "h2", text: "البوكليه أم المخمل أم القماش المنسوج: اختيار الخامة" },
        {
          type: "p",
          text: "الخامة تمنح الكنبة طابعها، لكن يجب أن تواكب حياتك اليومية ومناخ مراكش أيضًا: حرارة جافة وغبار وشمس قوية قرب النوافذ.",
        },
        {
          type: "list",
          items: [
            ["البوكليه:", "ناعم ودافئ وعصري جدًا، يضيف ملمسًا مميزًا حتى بالألوان المحايدة. ويشرح [دليلنا عن قماش البوكليه](blog:tissu-boucle-tendance-entretien) طريقة العناية به."],
            ["المخمل:", "عميق ولامع، يمنح أناقة واضحة كما في كنبتنا المبطنة الخضراء الزمردية."],
            ["القماش المنسوج:", "نسيجه كثيف ومظهره مطفأ، ويخفي جيدًا الآثار الصغيرة للحياة العائلية."],
          ],
        },
        {
          type: "p",
          text: "أما الألوان، فالمحايدة منها كالكريمي والبيج والرملي تُظهر الغرفة أوسع وتترك المجال للوسائد والقطع الديكورية. والألوان الدافئة كالتيراكوتا تتناغم مع جدران المدينة الحمراء، بينما يلعب لون قوي كالأخضر الزمردي دور القطعة البارزة. تجنب ترك قماش داكن تحت أشعة الشمس المباشرة خلف واجهة زجاجية، فستارة خفيفة تكفي غالبًا لحمايته. ولمزيد من الأفكار، اقرأ مقالنا عن [ألوان الديكور في مراكش](blog:couleurs-interieur-marrakech).",
        },
        { type: "h2", text: "ماذا تحضر معك إلى صالة العرض؟" },
        {
          type: "p",
          text: "ليكون لقاؤنا الأول مثمرًا، أحضر معك بعض المعطيات العملية. نستقبلك من الإثنين إلى السبت، من التاسعة صباحًا إلى الثامنة مساءً، في صالة العرض بـ124 المسار، طريق آسفي.",
        },
        {
          type: "list",
          items: [
            ["مخطط أو قياسات:", "أطوال الجدران ومواقع الأبواب والنوافذ والمقابس الكهربائية."],
            ["صور الغرفة:", "الأرضية والجدران والإضاءة الطبيعية والأثاث الذي ستحتفظ به."],
            ["طريقة استعمالك:", "عدد الأشخاص الذين تحتاج إلى إجلاسهم، والأطفال، والحيوانات الأليفة، ووتيرة استقبال الضيوف."],
            ["مصادر إلهامك:", "صور أو لقطات شاشة تعجبك، حتى لو كانت بأسلوب مختلف."],
          ],
        },
        {
          type: "faq",
          items: [
            [
              "كم يكلف صنع كنبة حسب المقاس في مراكش؟",
              "يتوقف السعر على المقاسات والشكل والقماش المختار، لذلك نعدّ عرض سعر لكل مشروع. أرسل إلينا قياساتك وبعض الصور عبر واتساب، أو زرنا في صالة العرض بطريق آسفي.",
            ],
            [
              "ما هي مدة صنع كنبة حسب المقاس؟",
              "تختلف المدة حسب الموديل والمقاس والقماش. نحددها لك بدقة عند إعداد عرض السعر، قبل أي طلب.",
            ],
            [
              "هل يمكن تجربة الكنبات قبل الطلب؟",
              "نعم، بل ننصح بذلك. في صالة العرض يمكنك الجلوس على [كنباتنا](category:canapes) ومعاينة الخامات عن قرب وفي ضوء النهار قبل اتخاذ القرار.",
            ],
          ],
        },
        { type: "cta" },
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // 2. Aménager un riad
  // ---------------------------------------------------------------------------
  {
    slug: "amenager-riad-marrakech",
    date: "2026-10-30",
    image: "amenager-riad-marrakech.jpg",
    title: {
      fr: "Aménagement d’un riad à Marrakech : nos conseils déco",
      en: "Furnishing a riad in Marrakech: our interior design advice",
      ar: "تأثيث رياض في مراكش: نصائحنا للديكور والتهيئة",
    },
    description: {
      fr: "Patio, salons tout en longueur, zellige et tadelakt : comment meubler et décorer un riad à Marrakech en mariant mobilier contemporain et architecture.",
      en: "Patio, long narrow salons, zellige and tadelakt: how to furnish and decorate a riad in Marrakech, blending contemporary furniture with Moroccan architecture.",
      ar: "الفناء والصالونات الطويلة والزليج والتادلاكت: كيف تؤثث رياضك في مراكش وتزينه بأثاث عصري ينسجم مع العمارة المغربية الأصيلة دون أن يطغى عليها.",
    },
    body: {
      fr: [
        {
          type: "lead",
          text: "Aménager un riad à Marrakech, c’est composer avec une architecture tournée vers l’intérieur : des pièces qui s’ouvrent sur le patio, une lumière qui vient d’en haut et des matières artisanales qu’il faut mettre en valeur plutôt que masquer. Voici comment nous abordons la décoration d’un riad, du patio jusqu’aux salons.",
        },
        { type: "h2", text: "Le patio, cœur de la maison" },
        {
          type: "p",
          text: "Dans un riad, tout s’organise autour du patio. C’est l’espace que l’on traverse sans cesse, celui que l’on aperçoit depuis chaque pièce et souvent le premier que découvrent vos invités. Gardez-le dégagé : quelques assises, une table d’appoint, des plantes en pot suffisent. Ouvert sur le ciel ou couvert d’une verrière, il reçoit la poussière et parfois la pluie ; préférez des pièces faciles à déplacer et à entretenir.",
        },
        {
          type: "list",
          items: [
            ["Des assises légères :", "poufs et fauteuils que l’on déplace pour suivre l’ombre au fil de la journée."],
            ["Des textiles faciles à vivre :", "coussins et plaids que l’on rentre le soir ou quand la maison est fermée."],
            ["Un seul point focal :", "une fontaine, un grand pot ou un arbre, plutôt qu’une accumulation d’objets."],
          ],
        },
        { type: "h2", text: "Meubler les salons tout en longueur" },
        {
          type: "p",
          text: "Les pièces d’un riad sont souvent longues et étroites. Plutôt que de lutter contre cette forme, suivez-la : une banquette ou un canapé le long du mur principal, comme dans un salon marocain traditionnel, puis une ou deux zones distinctes d’un bout à l’autre (thé, lecture, télévision). Plusieurs petites tables valent mieux qu’un grand plateau qui couperait le passage. Notre article sur le [salon marocain contemporain](blog:salon-marocain-contemporain) donne d’autres pistes pour moderniser ce type de pièce.",
        },
        { type: "h2", text: "Jouer avec la lumière du patio" },
        {
          type: "p",
          text: "La lumière d’un riad entre surtout par le patio, à travers de grandes portes et quelques fenêtres intérieures. Les pièces du rez-de-chaussée peuvent donc rester sombres, surtout en hiver. Les miroirs sont vos alliés : placés face ou à côté d’une ouverture, ils renvoient la lumière vers le fond de la pièce. Les formes en arche répondent naturellement aux portes et aux niches. Le [miroir à double arche](product:cadre-miroir-double-arche), encadré de bouclé crème, rappelle justement les ouvertures de l’architecture marocaine. Nos conseils pour [choisir un miroir décoratif](blog:miroir-decoratif-agrandir-piece) détaillent les bons emplacements.",
        },
        {
          type: "products",
          slugs: ["cadre-miroir-double-arche", "cadre-miroir-festonne-boucle", "pouf-geometrique", "fauteuil-lounge-boucle"],
        },
        { type: "h2", text: "Respecter le zellige, le tadelakt et le plâtre sculpté" },
        {
          type: "p",
          text: "Un riad restauré possède souvent des matières artisanales : zellige au sol ou en soubassement, tadelakt dans les salles d’eau, plâtre sculpté et bois peint aux plafonds. Ce sont les vraies vedettes du lieu. Le mobilier doit les accompagner sans les concurrencer : lignes simples, couleurs reprises dans le zellige, matières douces comme le bouclé qui contrastent avec la brillance des carreaux. Évitez de plaquer un meuble haut contre un plâtre sculpté, et glissez des patins sous les pieds des meubles posés sur un zellige ancien.",
        },
        { type: "h2", text: "Mélanger contemporain et architecture marocaine" },
        {
          type: "p",
          text: "Un riad n’a pas besoin d’être meublé uniquement dans le style traditionnel. Le contraste entre une architecture chargée d’histoire et des pièces contemporaines aux formes rondes fonctionne très bien, à condition de garder une palette cohérente. Un [fauteuil lounge en bouclé crème](product:fauteuil-lounge-boucle) au dossier cylindrique, un pouf géométrique rouge et crème près d’une banquette : quelques pièces fortes suffisent. Reste la question de l’échelle, essentielle dans un riad.",
        },
        {
          type: "list",
          items: [
            ["Mesurez les accès :", "portes basses et escaliers étroits ou tournants limitent la taille des meubles livrés d’un seul bloc."],
            ["Pensez en éléments :", "un canapé modulable ou fabriqué en plusieurs parties passe là où un modèle monobloc resterait bloqué."],
            ["Gardez des assises basses :", "dans les pièces hautes et étroites, elles dégagent la vue sur les murs et les plafonds."],
          ],
        },
        {
          type: "p",
          text: "Si vous rénovez ou meublez un riad entier, notre [service clé en main](services) permet de voir chaque pièce en 3D et de la valider avant toute fabrication.",
        },
        {
          type: "faq",
          items: [
            [
              "Peut-on mettre des meubles contemporains dans un riad traditionnel ?",
              "Oui. Le mélange fonctionne bien si la palette reste cohérente avec le zellige et les boiseries, et si les meubles sont à l’échelle des pièces. Quelques pièces aux formes douces suffisent à moderniser l’ensemble sans effacer le caractère du riad.",
            ],
            [
              "Comment faire entrer un grand canapé dans un riad ?",
              "Mesurez portes et escaliers avant de choisir. Un canapé modulable ou fabriqué sur mesure en plusieurs éléments résout la plupart des cas. Nous vérifions ces accès avec vous lors de la prise de mesures.",
            ],
            [
              "Quels meubles choisir pour le patio d’un riad ?",
              "Des pièces légères et faciles à déplacer : poufs, fauteuils, petites tables. Le patio reçoit poussière et soleil, alors privilégiez des textiles que l’on rentre ou que l’on entretient facilement. Nos [poufs](category:poufs) font de bonnes assises d’appoint.",
            ],
          ],
        },
        { type: "cta" },
      ],
      en: [
        {
          type: "lead",
          text: "Furnishing a riad in Marrakech means working with inward-looking architecture: rooms that open onto the patio, light that comes from above and handcrafted surfaces that deserve to be shown off rather than hidden. Here is how we approach riad interiors, from the courtyard to the salons.",
        },
        { type: "h2", text: "The patio, heart of the house" },
        {
          type: "p",
          text: "In a riad, everything revolves around the patio. It is the space you cross all day, the one you see from every room, and often the first thing your guests discover. Keep it uncluttered: a few seats, a side table and some potted plants are enough. Whether it is open to the sky or under a glass roof, it gets dust and sometimes rain, so choose pieces that are easy to move and easy to clean.",
        },
        {
          type: "list",
          items: [
            ["Light seating:", "poufs and armchairs you can move around to follow the shade during the day."],
            ["Easy-going textiles:", "cushions and throws you bring inside in the evening or when the house is closed up."],
            ["One focal point:", "a fountain, a large planter or a tree, rather than a collection of small objects."],
          ],
        },
        { type: "h2", text: "Furnishing long, narrow salons" },
        {
          type: "p",
          text: "Riad rooms are often long and narrow. Rather than fight the shape, follow it: a banquette or sofa along the main wall, as in a traditional Moroccan salon, then one or two distinct zones from one end to the other (tea, reading, TV). Several small tables work better than one large top that would block the way through. Our article on the [contemporary Moroccan living room](blog:salon-marocain-contemporain) has more ideas for updating this kind of room.",
        },
        { type: "h2", text: "Making the most of courtyard light" },
        {
          type: "p",
          text: "Light enters a riad mainly through the patio, via tall doors and a few inner windows, so ground-floor rooms can feel dark, especially in winter. Mirrors are your best friends: placed opposite or beside an opening, they bounce light to the back of the room. Arched shapes naturally echo the doorways and niches. Our [double arch mirror](product:cadre-miroir-double-arche), framed in cream bouclé, recalls the openings of Moroccan architecture. Our advice on [choosing a decorative mirror](blog:miroir-decoratif-agrandir-piece) covers where to hang one.",
        },
        {
          type: "products",
          slugs: ["cadre-miroir-double-arche", "cadre-miroir-festonne-boucle", "pouf-geometrique", "fauteuil-lounge-boucle"],
        },
        { type: "h2", text: "Respecting zellige, tadelakt and carved plaster" },
        {
          type: "p",
          text: "A restored riad often has handcrafted finishes: zellige tiles on floors or lower walls, tadelakt in the bathrooms, carved plaster and painted wood ceilings. These are the real stars of the house. Furniture should support them, not compete: simple lines, colours picked up from the zellige, soft textures such as bouclé that contrast with the shine of the tiles. Avoid pushing tall furniture against carved plaster, and put felt pads under furniture standing on old zellige.",
        },
        { type: "h2", text: "Mixing contemporary pieces with Moroccan architecture" },
        {
          type: "p",
          text: "A riad does not have to be furnished in a purely traditional style. The contrast between historic architecture and rounded contemporary pieces works beautifully, as long as the palette stays consistent. A [cream bouclé lounge chair](product:fauteuil-lounge-boucle) with its cylindrical backrest, a red and cream geometric pouf beside a banquette: a few strong pieces are enough. Then comes scale, which is crucial in a riad.",
        },
        {
          type: "list",
          items: [
            ["Measure the way in:", "low doorways and narrow or winding stairs limit what can be delivered in one piece."],
            ["Think in sections:", "a modular or made-to-measure sofa in several parts gets through where a single block would not."],
            ["Keep seating low:", "in tall, narrow rooms it keeps the walls and ceilings in view."],
          ],
        },
        {
          type: "p",
          text: "If you are renovating or furnishing a whole riad, our [turnkey service](services) lets you see every room in 3D and approve it before anything is made.",
        },
        {
          type: "faq",
          items: [
            [
              "Can contemporary furniture work in a traditional riad?",
              "Yes. The mix works well when the palette stays in tune with the zellige and woodwork and the furniture is in scale with the rooms. A few softly shaped pieces are enough to freshen things up without erasing the riad’s character.",
            ],
            [
              "How do you get a large sofa into a riad?",
              "Measure doors and stairs before choosing. A modular sofa, or one made to measure in several sections, solves most cases. We check access with you when we take measurements.",
            ],
            [
              "What furniture works in a riad patio?",
              "Light pieces that are easy to move: poufs, armchairs, small tables. The patio gets dust and sun, so favour textiles you can bring inside or clean easily. Our [poufs](category:poufs) make great extra seats.",
            ],
          ],
        },
        { type: "cta" },
      ],
      ar: [
        {
          type: "lead",
          text: "تأثيث رياض في مراكش يعني التعامل مع عمارة منفتحة على الداخل: غرف تطل على الفناء، وضوء يأتي من الأعلى، وخامات تقليدية يجب إبرازها لا إخفاؤها. إليك كيف نتناول ديكور الرياض، من الفناء إلى الصالونات.",
        },
        { type: "h2", text: "الفناء، قلب البيت" },
        {
          type: "p",
          text: "في الرياض يدور كل شيء حول الفناء. فهو المكان الذي نعبره طوال اليوم، ونراه من كل غرفة، وغالبًا ما يكون أول ما يكتشفه ضيوفك. حافظ عليه خفيفًا: بعض المقاعد وطاولة جانبية ونباتات في أصص تكفي. وسواء كان مفتوحًا على السماء أو مغطى بسقف زجاجي، فهو يستقبل الغبار وأحيانًا المطر، لذا اختر قطعًا يسهل نقلها وتنظيفها.",
        },
        {
          type: "list",
          items: [
            ["مقاعد خفيفة:", "بوفات وكراسٍ تُنقل لتتبع الظل على مدار اليوم."],
            ["أقمشة سهلة العناية:", "وسائد وأغطية تُدخل في المساء أو عند إغلاق البيت."],
            ["نقطة جذب واحدة:", "نافورة أو أصيص كبير أو شجرة، بدل تكديس القطع الصغيرة."],
          ],
        },
        { type: "h2", text: "تأثيث الصالونات الطويلة والضيقة" },
        {
          type: "p",
          text: "غالبًا ما تكون غرف الرياض طويلة وضيقة. وبدل مقاومة هذا الشكل، اتبعه: أريكة أو كنبة على طول الجدار الرئيسي كما في الصالون المغربي التقليدي، ثم ركن أو ركنان مختلفان من طرف إلى آخر (للشاي أو القراءة أو التلفاز). وعدة طاولات صغيرة أفضل من طاولة كبيرة تقطع الممر. ويقدم مقالنا عن [الصالون المغربي العصري](blog:salon-marocain-contemporain) أفكارًا أخرى لتجديد هذا النوع من الغرف.",
        },
        { type: "h2", text: "الاستفادة من ضوء الفناء" },
        {
          type: "p",
          text: "يدخل الضوء إلى الرياض أساسًا من الفناء عبر أبواب عالية وبعض النوافذ الداخلية، لذا قد تبقى غرف الطابق الأرضي معتمة، خاصة في الشتاء. المرايا هنا خير حليف: إذا وُضعت مقابل فتحة أو بجانبها، فإنها تعكس الضوء نحو عمق الغرفة. والأشكال المقوسة تنسجم طبيعيًا مع الأبواب والمحاريب. فـ[المرآة ذات القوس المزدوج](product:cadre-miroir-double-arche)، بإطارها من البوكليه الكريمي، تذكّر بفتحات العمارة المغربية. وتشرح نصائحنا حول [اختيار مرآة ديكورية](blog:miroir-decoratif-agrandir-piece) أفضل أماكن تعليقها.",
        },
        {
          type: "products",
          slugs: ["cadre-miroir-double-arche", "cadre-miroir-festonne-boucle", "pouf-geometrique", "fauteuil-lounge-boucle"],
        },
        { type: "h2", text: "احترام الزليج والتادلاكت والجبس المنقوش" },
        {
          type: "p",
          text: "كثيرًا ما يحتفظ الرياض المرمم بخامات تقليدية: زليج على الأرض أو أسفل الجدران، وتادلاكت في الحمامات، وجبس منقوش وخشب مصبوغ في الأسقف. هذه هي النجوم الحقيقية للمكان. وعلى الأثاث أن يرافقها لا أن ينافسها: خطوط بسيطة، وألوان مستوحاة من الزليج، وخامات ناعمة كالبوكليه تتباين مع لمعان البلاط. تجنب إلصاق قطعة عالية بجبس منقوش، وضع وسادات واقية تحت أرجل الأثاث الموضوع على زليج قديم.",
        },
        { type: "h2", text: "المزج بين العصري والعمارة المغربية" },
        {
          type: "p",
          text: "لا يُشترط أن يُؤثث الرياض بالطراز التقليدي وحده. فالتباين بين عمارة عريقة وقطع عصرية بأشكال دائرية ينجح كثيرًا، شرط الحفاظ على تناسق الألوان. [كرسي استرخاء من البوكليه الكريمي](product:fauteuil-lounge-boucle) بظهره الأسطواني، وبوف هندسي بالأحمر والكريمي قرب أريكة: بضع قطع قوية تكفي. ثم تأتي مسألة الحجم، وهي أساسية في الرياض.",
        },
        {
          type: "list",
          items: [
            ["قِس المداخل:", "الأبواب المنخفضة والأدراج الضيقة أو الملتوية تحدّ من حجم الأثاث الذي يُسلَّم قطعة واحدة."],
            ["فكّر في الوحدات:", "الكنبة المعيارية أو المصنوعة حسب المقاس من عدة أجزاء تمر حيث تتعثر الكنبة المصمتة."],
            ["اختر مقاعد منخفضة:", "في الغرف العالية والضيقة، تُبقي الجدران والأسقف ظاهرة للعين."],
          ],
        },
        {
          type: "p",
          text: "إذا كنت ترمم رياضًا كاملًا أو تؤثثه، فإن [خدمتنا المتكاملة](services) تتيح لك رؤية كل غرفة بتقنية ثلاثية الأبعاد والموافقة عليها قبل أي تصنيع.",
        },
        {
          type: "faq",
          items: [
            [
              "هل يمكن وضع أثاث عصري في رياض تقليدي؟",
              "نعم. ينجح المزج إذا بقيت الألوان منسجمة مع الزليج والخشب، وكان الأثاث متناسبًا مع حجم الغرف. وبضع قطع بأشكال ناعمة تكفي لتجديد المكان دون محو طابع الرياض.",
            ],
            [
              "كيف ندخل كنبة كبيرة إلى رياض؟",
              "قِس الأبواب والأدراج قبل الاختيار. فالكنبة المعيارية أو المصنوعة حسب المقاس من عدة وحدات تحل أغلب الحالات. ونتحقق معك من المداخل عند أخذ القياسات.",
            ],
            [
              "ما الأثاث المناسب لفناء الرياض؟",
              "قطع خفيفة يسهل نقلها: بوفات وكراسٍ وطاولات صغيرة. فالفناء يتعرض للغبار والشمس، لذا فضّل أقمشة يمكن إدخالها أو تنظيفها بسهولة. و[البوفات](category:poufs) لدينا مقاعد إضافية مثالية.",
            ],
          ],
        },
        { type: "cta" },
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // 3. Meubler une villa
  // ---------------------------------------------------------------------------
  {
    slug: "meubler-villa-marrakech",
    date: "2026-10-20",
    image: "meubler-villa-marrakech.jpg",
    title: {
      fr: "Meubler une villa à Marrakech : par où commencer ?",
      en: "Furnishing a villa in Marrakech: where to start",
      ar: "تأثيث فيلا في مراكش: من أين تبدأ؟",
    },
    description: {
      fr: "Palmeraie, Route de l’Ourika, Targa : nos conseils pour meubler une villa à Marrakech, des grands volumes aux vues sur l’Atlas, avec une conception 3D.",
      en: "Palmeraie, Ourika road, Targa: how to furnish a villa in Marrakech, from large volumes and open spaces to Atlas views, with a 3D design to plan it all.",
      ar: "النخيل وطريق أوريكا وتاركة: نصائحنا لتأثيث فيلا في مراكش، من الفضاءات الواسعة إلى الإطلالة على الأطلس، مع تصميم ثلاثي الأبعاد يسهّل التخطيط لكل غرفة.",
    },
    body: {
      fr: [
        {
          type: "lead",
          text: "Pour meubler une villa à Marrakech, commencez par le plan, pas par les meubles : définir les zones de vie, l’ordre des pièces et un fil conducteur de style évite les achats isolés qui ne s’accordent jamais. Voici notre méthode, que la villa se trouve dans la Palmeraie, sur la Route de l’Ourika, la Route d’Amizmiz ou à Targa.",
        },
        { type: "h2", text: "Par où commencer ?" },
        {
          type: "p",
          text: "Une villa, c’est beaucoup de pièces à meubler en même temps, et la tentation est grande d’acheter au coup de cœur. Nous conseillons l’inverse : un plan d’ensemble, puis les grandes pièces qui structurent l’espace (canapés, lits, tables), et seulement ensuite la décoration.",
        },
        {
          type: "list",
          items: [
            ["Un relevé de mesures :", "chaque pièce, avec la hauteur sous plafond, les ouvertures et les prises."],
            ["La liste des usages :", "réceptions, vie de famille, séjours ponctuels, télétravail."],
            ["Un ordre de priorité :", "les pièces de vie et les chambres d’abord, les espaces secondaires ensuite."],
            ["Un budget par pièce :", "pour arbitrer sereinement plutôt que de manquer de moyens en fin de projet."],
          ],
        },
        { type: "h2", text: "Grands volumes : donner de l’échelle au salon" },
        {
          type: "p",
          text: "Les salons de villa offrent souvent de grandes surfaces et de belles hauteurs sous plafond. Un mobilier trop petit s’y perd et donne une impression de vide. Misez sur des pièces généreuses : un grand canapé d’angle, une table basse affirmée, des rideaux qui tombent du plafond au sol. Le [canapé d’angle bouclé crème](product:canape-angle-boucle-creme), aux assises matelassées sur un socle en bois clair, associé à une [table basse rectangulaire en travertin](product:table-basse-rectangulaire-travertin) au plateau épais, donne immédiatement de l’assise à un grand séjour.",
        },
        {
          type: "products",
          slugs: ["canape-angle-boucle-creme", "table-basse-rectangulaire-travertin", "lit-bulle-ivoire"],
        },
        { type: "h2", text: "Zoner les espaces ouverts" },
        {
          type: "p",
          text: "Dans un séjour ouvert, chaque zone doit se lire sans murs : salon, salle à manger, coin lecture. Les outils sont simples : un tapis qui délimite le salon, un canapé dont le dos tourne vers la salle à manger, une suspension au-dessus de la table, un changement de matière ou de couleur. Gardez des passages francs entre les zones, surtout vers la terrasse et le jardin, que l’on emprunte sans cesse aux beaux jours. Pour habiller les grandes baies, les [rideaux](category:rideaux) se réalisent sur commande, à la hauteur exacte de vos fenêtres.",
        },
        { type: "h2", text: "Orienter la maison vers le jardin et l’Atlas" },
        {
          type: "p",
          text: "Beaucoup de villas autour de Marrakech ouvrent sur un jardin, une piscine ou, par temps clair, sur les sommets de l’Atlas. Tournez les assises principales vers cette vue plutôt que vers la télévision, quitte à créer un coin télé plus intime ailleurs. Le soleil est fort une grande partie de l’année : protégez les tissus et les bois placés derrière les baies avec des voilages, et choisissez des matières qui supportent la chaleur sèche. Notre article sur le [mobilier face au climat de Marrakech](blog:mobilier-climat-marrakech) détaille ces choix.",
        },
        { type: "h2", text: "Un style cohérent d’une pièce à l’autre" },
        {
          type: "p",
          text: "Dans une villa, on passe d’une pièce à l’autre par de larges ouvertures : un style trop différent dans chaque espace fatigue le regard. Choisissez une palette de base, par exemple crème, bois clair et pierre, et deux ou trois matières qui reviennent partout, puis variez les accents selon les pièces. Dans les chambres, un lit enveloppant comme le lit Bulle ivoire, entièrement habillé de boudins moelleux, prolonge la douceur du salon.",
        },
        { type: "h2", text: "Planifier en 3D, ou confier tout le projet" },
        {
          type: "p",
          text: "Pour un projet de cette taille, la [conception 3D](blog:conception-3d-interieur-marrakech) permet de voir chaque pièce meublée avant de commander : proportions, couleurs, lumière. Si vous préférez déléguer, notre [service clé en main](services) couvre tout, avec un seul interlocuteur : rencontre et prise de mesures, conception 3D, réalisation, puis livraison et installation.",
        },
        {
          type: "faq",
          items: [
            [
              "Par quelle pièce commencer pour meubler une villa ?",
              "En général par les pièces de vie, salon et salle à manger, qui donnent le ton de toute la maison, puis les chambres. Mais le plus efficace reste de définir d’abord un plan d’ensemble pour que chaque achat s’intègre au reste.",
            ],
            [
              "Livrez-vous et installez-vous les meubles dans les villas autour de Marrakech ?",
              "La livraison et l’installation font partie de notre service clé en main. Les modalités dépendent de l’adresse et du projet : indiquez-nous l’emplacement de votre villa sur WhatsApp et nous vous répondrons précisément.",
            ],
            [
              "Combien coûte l’ameublement d’une villa à Marrakech ?",
              "Cela dépend du nombre de pièces, du mobilier choisi et de la part de sur-mesure. Nous établissons un devis détaillé après la rencontre et la prise de mesures. Contactez-nous sur WhatsApp ou passez au showroom de la Route de Safi.",
            ],
          ],
        },
        { type: "cta" },
      ],
      en: [
        {
          type: "lead",
          text: "To furnish a villa in Marrakech, start with the plan, not the furniture: defining living zones, the order of the rooms and a common thread of style avoids one-off purchases that never quite go together. Here is our method, whether your villa is in the Palmeraie, on the Ourika or Amizmiz road, or in Targa.",
        },
        { type: "h2", text: "Where to start" },
        {
          type: "p",
          text: "A villa means a lot of rooms to furnish at once, and it is tempting to buy whatever catches your eye. We suggest the opposite: an overall plan first, then the large pieces that structure each space (sofas, beds, tables), and only then the decoration.",
        },
        {
          type: "list",
          items: [
            ["A full set of measurements:", "every room, including ceiling height, openings and sockets."],
            ["A list of uses:", "entertaining, family life, occasional stays, working from home."],
            ["An order of priority:", "living areas and bedrooms first, secondary spaces later."],
            ["A budget per room:", "so you can make choices calmly instead of running short at the end."],
          ],
        },
        { type: "h2", text: "Large volumes: giving the living room scale" },
        {
          type: "p",
          text: "Villa living rooms often have generous floor areas and high ceilings. Furniture that is too small gets lost and makes the room feel empty. Go for generous pieces: a large corner sofa, a substantial coffee table, curtains that fall from ceiling to floor. Our [cream bouclé corner sofa](product:canape-angle-boucle-creme), with quilted seats on a light wood base, paired with a [rectangular travertine coffee table](product:table-basse-rectangulaire-travertin) with its thick top, instantly anchors a large living space.",
        },
        {
          type: "products",
          slugs: ["canape-angle-boucle-creme", "table-basse-rectangulaire-travertin", "lit-bulle-ivoire"],
        },
        { type: "h2", text: "Zoning open-plan spaces" },
        {
          type: "p",
          text: "In an open-plan room, each zone should read clearly without walls: lounge, dining, reading corner. The tools are simple: a rug that frames the lounge, a sofa with its back to the dining area, a pendant light over the table, a change of material or colour. Keep clear paths between zones, especially towards the terrace and garden, which you use constantly in the warm months. For large windows, [curtains](category:rideaux) are made to order to the exact height of your openings.",
        },
        { type: "h2", text: "Facing the garden and the Atlas" },
        {
          type: "p",
          text: "Many villas around Marrakech look out onto a garden, a pool or, on clear days, the peaks of the Atlas. Turn the main seating towards that view rather than the TV, and create a cosier TV corner elsewhere if needed. The sun is strong for much of the year: protect fabrics and wood behind large windows with sheer curtains, and choose materials that handle dry heat well. Our article on [furniture and the Marrakech climate](blog:mobilier-climat-marrakech) goes into more detail.",
        },
        { type: "h2", text: "A consistent style from room to room" },
        {
          type: "p",
          text: "In a villa, rooms flow into one another through wide openings, and a completely different style in each space quickly tires the eye. Choose a base palette, for example cream, light wood and stone, plus two or three materials that recur throughout, then vary the accents from room to room. In the bedrooms, an enveloping bed such as the ivory bubble bed, wrapped in soft, puffy rolls, carries the softness of the living room through.",
        },
        { type: "h2", text: "Plan it in 3D, or hand over the whole project" },
        {
          type: "p",
          text: "For a project of this size, [3D interior design](blog:conception-3d-interieur-marrakech) lets you see every room furnished before you order anything: proportions, colours, light. If you would rather delegate, our [turnkey service](services) covers everything with a single point of contact: meeting and measurements, 3D design, making it real, then delivery and installation.",
        },
        {
          type: "faq",
          items: [
            [
              "Which room should I furnish first in a villa?",
              "Usually the living areas, lounge and dining room, which set the tone for the whole house, then the bedrooms. But the most effective approach is to define an overall plan first so that every purchase fits with the rest.",
            ],
            [
              "Do you deliver and install furniture in villas around Marrakech?",
              "Delivery and installation are part of our turnkey service. Arrangements depend on the address and the project: tell us where your villa is on WhatsApp and we will give you a precise answer.",
            ],
            [
              "How much does it cost to furnish a villa in Marrakech?",
              "It depends on the number of rooms, the furniture you choose and how much is made to measure. We prepare a detailed quote after our first meeting and the measurements. Contact us on WhatsApp or visit the showroom on Route de Safi.",
            ],
          ],
        },
        { type: "cta" },
      ],
      ar: [
        {
          type: "lead",
          text: "لتأثيث فيلا في مراكش، ابدأ بالمخطط لا بالأثاث: فتحديد فضاءات العيش وترتيب الغرف وخيط أسلوبي موحد يجنبك مشتريات متفرقة لا تنسجم أبدًا. إليك طريقتنا، سواء كانت فيلتك في النخيل أو على طريق أوريكا أو طريق أمزميز أو في تاركة.",
        },
        { type: "h2", text: "من أين تبدأ؟" },
        {
          type: "p",
          text: "الفيلا تعني غرفًا كثيرة يجب تأثيثها في وقت واحد، والإغراء كبير بشراء ما يعجبك فورًا. ننصح بالعكس: مخطط شامل أولًا، ثم القطع الكبيرة التي تبني الفضاء (الكنبات والأسرّة والطاولات)، وبعدها فقط الديكور.",
        },
        {
          type: "list",
          items: [
            ["قياسات دقيقة:", "لكل غرفة، مع علو السقف والفتحات والمقابس."],
            ["قائمة الاستعمالات:", "استقبال الضيوف والحياة العائلية والإقامات المتقطعة والعمل عن بعد."],
            ["ترتيب الأولويات:", "فضاءات العيش وغرف النوم أولًا، ثم الفضاءات الثانوية."],
            ["ميزانية لكل غرفة:", "لتتخذ قراراتك بهدوء بدل أن تنفد الإمكانيات في آخر المشروع."],
          ],
        },
        { type: "h2", text: "الفضاءات الواسعة: منح الصالون حجمه" },
        {
          type: "p",
          text: "غالبًا ما تتميز صالونات الفيلات بمساحات كبيرة وأسقف عالية. والأثاث الصغير يضيع فيها ويترك إحساسًا بالفراغ. راهن على قطع سخية: كنبة زاوية كبيرة، وطاولة قهوة حاضرة، وستائر تنزل من السقف إلى الأرض. فـ[كنبة الزاوية من البوكليه الكريمي](product:canape-angle-boucle-creme)، بمقاعدها المبطنة على قاعدة من الخشب الفاتح، مع [طاولة قهوة مستطيلة من الترافرتين](product:table-basse-rectangulaire-travertin) بسطحها السميك، تمنح الصالون الكبير ثباتًا وحضورًا فوريين.",
        },
        {
          type: "products",
          slugs: ["canape-angle-boucle-creme", "table-basse-rectangulaire-travertin", "lit-bulle-ivoire"],
        },
        { type: "h2", text: "تقسيم الفضاءات المفتوحة" },
        {
          type: "p",
          text: "في الصالة المفتوحة، يجب أن يُقرأ كل ركن دون جدران: الصالون، وركن الأكل، وركن القراءة. والأدوات بسيطة: زربية تحدد الصالون، وكنبة يتجه ظهرها نحو ركن الأكل، ومصباح معلق فوق الطاولة، وتغيير في الخامة أو اللون. واترك ممرات واضحة بين الأركان، خاصة نحو التراس والحديقة اللذين نستعملهما باستمرار في الأيام الدافئة. ولتلبيس الواجهات الزجاجية الكبيرة، تُصنع [الستائر](category:rideaux) حسب الطلب وبالعلو المضبوط لنوافذك.",
        },
        { type: "h2", text: "التوجه نحو الحديقة والأطلس" },
        {
          type: "p",
          text: "كثير من الفيلات حول مراكش تطل على حديقة أو مسبح، أو على قمم الأطلس في الأيام الصافية. وجّه المقاعد الرئيسية نحو هذا المنظر بدل التلفاز، ولا بأس بإنشاء ركن تلفاز أكثر حميمية في مكان آخر. الشمس قوية معظم أيام السنة، لذا احمِ الأقمشة والخشب الموجود خلف الواجهات بستائر خفيفة، واختر خامات تتحمل الحرارة الجافة. ويفصّل مقالنا عن [الأثاث ومناخ مراكش](blog:mobilier-climat-marrakech) هذه الاختيارات.",
        },
        { type: "h2", text: "أسلوب متناسق من غرفة إلى أخرى" },
        {
          type: "p",
          text: "في الفيلا ننتقل بين الغرف عبر فتحات واسعة، وأسلوب مختلف تمامًا في كل فضاء يُتعب العين. اختر ألوانًا أساسية، كالكريمي والخشب الفاتح والحجر مثلًا، وخامتين أو ثلاثًا تتكرر في كل مكان، ثم نوّع اللمسات حسب الغرف. وفي غرف النوم، يواصل سرير محتضن مثل سرير بابل العاجي، المكسو بالكامل بلفائف ناعمة، نعومة الصالون.",
        },
        { type: "h2", text: "التخطيط بتقنية ثلاثية الأبعاد أو تفويض المشروع كاملًا" },
        {
          type: "p",
          text: "في مشروع بهذا الحجم، يتيح [التصميم ثلاثي الأبعاد](blog:conception-3d-interieur-marrakech) رؤية كل غرفة مؤثثة قبل أي طلب: النسب والألوان والإضاءة. وإذا فضّلت التفويض، فإن [خدمتنا المتكاملة](services) تغطي كل شيء مع جهة واحدة: اللقاء وأخذ القياسات، ثم التصميم ثلاثي الأبعاد، فالتنفيذ، وأخيرًا التوصيل والتركيب.",
        },
        {
          type: "faq",
          items: [
            [
              "بأي غرفة أبدأ تأثيث الفيلا؟",
              "عادة بفضاءات العيش، أي الصالون وغرفة الأكل، لأنها تحدد طابع البيت كله، ثم غرف النوم. لكن الأنجع هو وضع مخطط شامل أولًا حتى ينسجم كل شراء مع الباقي.",
            ],
            [
              "هل توصلون الأثاث وتركبونه في الفيلات المحيطة بمراكش؟",
              "التوصيل والتركيب جزء من خدمتنا المتكاملة. وتتوقف الترتيبات على العنوان وطبيعة المشروع: أخبرنا بموقع فيلتك عبر واتساب وسنجيبك بدقة.",
            ],
            [
              "كم تكلف عملية تأثيث فيلا في مراكش؟",
              "يتوقف ذلك على عدد الغرف والأثاث المختار ونسبة القطع المصنوعة حسب المقاس. نعدّ عرض سعر مفصلًا بعد اللقاء وأخذ القياسات. تواصل معنا عبر واتساب أو زر صالة العرض بطريق آسفي.",
            ],
          ],
        },
        { type: "cta" },
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // 4. Conception 3D
  // ---------------------------------------------------------------------------
  {
    slug: "conception-3d-interieur-marrakech",
    date: "2026-10-09",
    image: "conception-3d-interieur-marrakech.webp",
    title: {
      fr: "Conception 3D d’intérieur à Marrakech : voir avant de faire",
      en: "3D interior design in Marrakech: see it before it is made",
      ar: "التصميم الداخلي ثلاثي الأبعاد في مراكش: شاهد مشروعك قبل تنفيذه",
    },
    description: {
      fr: "Plan, volumes, matières, couleurs et lumière : la conception 3D d’intérieur à Marrakech permet de valider votre projet avant tout achat et d’éviter les erreurs.",
      en: "Plans, volumes, materials, colours and light: 3D interior design in Marrakech lets you approve your project before buying anything and avoid costly mistakes.",
      ar: "المخطط والأحجام والخامات والألوان والإضاءة: يتيح لك التصميم الداخلي ثلاثي الأبعاد في مراكش الموافقة على مشروعك قبل أي شراء وتجنب الأخطاء المكلفة.",
    },
    body: {
      fr: [
        {
          type: "lead",
          text: "La conception 3D d’intérieur consiste à modéliser votre logement à partir de ses mesures réelles pour voir, avant d’acheter ou de fabriquer quoi que ce soit, à quoi ressembleront vos pièces une fois meublées. À Marrakech comme ailleurs, c’est le moyen le plus sûr d’éviter un canapé trop grand ou une couleur qui ne fonctionne pas.",
        },
        { type: "h2", text: "Qu’est-ce que la conception 3D d’intérieur ?" },
        {
          type: "p",
          text: "Concrètement, nous reproduisons chaque pièce en trois dimensions : murs, ouvertures, hauteur sous plafond, sol. Nous y plaçons ensuite le mobilier à sa taille réelle, les matières et les couleurs envisagées, puis nous travaillons la lumière. Le résultat prend la forme de plans et de rendus 3D réalistes que nous parcourons avec vous. Il s’agit de conception et de design d’intérieur : nous ne remplaçons pas un architecte pour les travaux de structure, nous dessinons l’aménagement, le mobilier et la décoration.",
        },
        { type: "h2", text: "Ce que la 3D permet de vérifier" },
        {
          type: "list",
          items: [
            ["Les mesures et la circulation :", "chaque meuble trouve sa place sans gêner les portes, les fenêtres ni les passages."],
            ["Les volumes :", "on voit tout de suite si un canapé écrase la pièce ou si une table semble perdue dans un grand salon."],
            ["Les matières et les couleurs :", "bouclé, velours, bois, travertin, teintes des murs et des textiles se comparent côte à côte."],
            ["La lumière :", "orientation, soleil de Marrakech, éclairage du soir et effet des miroirs sur l’ambiance."],
            ["La cohérence :", "l’enchaînement d’une pièce à l’autre, essentiel dans une villa ou un riad."],
          ],
        },
        { type: "h2", text: "Des ajustements jusqu’à votre validation" },
        {
          type: "p",
          text: "Un premier rendu n’est jamais définitif. Vous réagissez, nous ajustons : déplacer le coin télé, essayer une autre teinte de canapé, passer d’une table ronde à une table ovale. Ces allers-retours ont lieu avant la moindre commande, ce qui coûte bien moins cher que de corriger une erreur une fois le meuble fabriqué ou le mur peint. Le projet ne passe à la réalisation qu’une fois que vous l’avez validé.",
        },
        {
          type: "p",
          text: "C’est particulièrement utile pour le [mobilier sur mesure](blog:mobilier-sur-mesure-marrakech) : un canapé dessiné pour votre salon ou un [meuble TV](category:meubles-tv) adapté à un mur précis se valide d’abord en 3D, puis se fabrique.",
        },
        { type: "h2", text: "Éviter les erreurs coûteuses" },
        {
          type: "p",
          text: "Les erreurs d’aménagement les plus fréquentes sont souvent simples : un meuble trop profond qui bloque un passage, une table basse disproportionnée par rapport au canapé, un tissu sombre en plein soleil, des couleurs qui se contredisent d’une pièce à l’autre. La 3D les rend visibles à l’écran, avant qu’elles ne coûtent quoi que ce soit. Elle aide aussi à décider à plusieurs : en couple, en famille ou entre associés pour un local professionnel, tout le monde voit la même image. Et si vous vivez à l’étranger, les rendus se partagent facilement pour suivre le projet à distance.",
        },
        { type: "h2", text: "Comment la 3D s’intègre au service clé en main" },
        {
          type: "p",
          text: "La conception 3D est la deuxième des quatre étapes de notre [service clé en main](services) :",
        },
        {
          type: "list",
          items: [
            ["Rencontre :", "nous écoutons vos envies et votre budget, et prenons les mesures."],
            ["Conception 3D :", "vous découvrez votre futur intérieur en 3D et le validez avec nous."],
            ["Réalisation :", "aménagement, fabrication et sélection du mobilier et de la décoration."],
            ["Installation :", "nous livrons et installons tout ; il ne vous reste plus qu’à profiter."],
          ],
        },
        {
          type: "p",
          text: "Pour voir comment ces étapes se déroulent sur un chantier complet, lisez notre article sur l’[aménagement intérieur clé en main à Marrakech](blog:amenagement-interieur-cle-en-main-marrakech), ou venez en parler au showroom de la Route de Safi.",
        },
        {
          type: "faq",
          items: [
            [
              "Combien coûte une conception 3D d’intérieur à Marrakech ?",
              "Le tarif dépend de la surface, du nombre de pièces et du niveau de détail souhaité. Nous l’indiquons sur devis après un premier échange : écrivez-nous sur WhatsApp ou passez au showroom.",
            ],
            [
              "Êtes-vous architectes d’intérieur ?",
              "Nous faisons de la conception et du design d’intérieur : aménagement, mobilier, matières, couleurs et décoration. Pour des travaux qui touchent à la structure du bâtiment, un architecte reste l’interlocuteur à consulter.",
            ],
            [
              "Peut-on modifier le projet après avoir vu la 3D ?",
              "Oui, c’est tout son intérêt. Nous ajustons les rendus jusqu’à votre validation, et la réalisation ne commence qu’ensuite. Pour en parler, passez par notre page [contact](contact).",
            ],
          ],
        },
        { type: "cta" },
      ],
      en: [
        {
          type: "lead",
          text: "3D interior design means modelling your home from its real measurements so that you can see what each room will look like once furnished, before anything is bought or made. In Marrakech as anywhere else, it is the surest way to avoid a sofa that is too big or a colour that does not work.",
        },
        { type: "h2", text: "What is 3D interior design?" },
        {
          type: "p",
          text: "In practice, we rebuild each room in three dimensions: walls, openings, ceiling height, floor. We then place the furniture at its real size, add the materials and colours under consideration, and work on the light. The result is a set of plans and realistic 3D renders that we walk through with you. This is interior design and space planning: we do not replace an architect for structural work, we design the layout, the furniture and the decoration.",
        },
        { type: "h2", text: "What 3D lets you check" },
        {
          type: "list",
          items: [
            ["Measurements and flow:", "every piece fits without blocking doors, windows or walkways."],
            ["Volumes:", "you can see straight away if a sofa overwhelms the room or a table looks lost in a large lounge."],
            ["Materials and colours:", "bouclé, velvet, wood, travertine, wall and fabric colours are compared side by side."],
            ["Light:", "orientation, the Marrakech sun, evening lighting and the effect of mirrors on the mood."],
            ["Consistency:", "how one room leads into the next, which matters so much in a villa or a riad."],
          ],
        },
        { type: "h2", text: "Revisions until you approve" },
        {
          type: "p",
          text: "A first render is never final. You react, we adjust: move the TV corner, try another sofa colour, switch from a round to an oval table. These rounds happen before a single order is placed, which costs far less than fixing a mistake once the furniture is made or the wall is painted. The project only moves on to production once you have approved it.",
        },
        {
          type: "p",
          text: "This is especially useful for [made-to-measure furniture](blog:mobilier-sur-mesure-marrakech): a sofa designed for your living room or a [TV unit](category:meubles-tv) fitted to a specific wall is approved in 3D first, then made.",
        },
        { type: "h2", text: "Avoiding costly mistakes" },
        {
          type: "p",
          text: "The most common layout mistakes are often simple: a piece that is too deep and blocks a walkway, a coffee table out of proportion with the sofa, a dark fabric in full sun, colours that clash from one room to the next. 3D makes them visible on screen, before they cost anything. It also helps when several people are deciding: as a couple, as a family or between business partners for commercial premises, everyone sees the same picture. And if you live abroad, renders are easy to share so you can follow the project remotely.",
        },
        { type: "h2", text: "How 3D fits into our turnkey service" },
        {
          type: "p",
          text: "3D design is the second of the four steps in our [turnkey service](services):",
        },
        {
          type: "list",
          items: [
            ["Meeting:", "we listen to your ideas and budget, and take measurements."],
            ["3D design:", "you discover your future interior in 3D and approve it with us."],
            ["Making it real:", "space planning, furniture making and selection of furniture and decor."],
            ["Installation:", "we deliver and install everything; all that is left is to enjoy it."],
          ],
        },
        {
          type: "p",
          text: "To see how these steps play out on a complete project, read our article on [turnkey interior projects in Marrakech](blog:amenagement-interieur-cle-en-main-marrakech), or come and talk it through at the showroom on Route de Safi.",
        },
        {
          type: "faq",
          items: [
            [
              "How much does 3D interior design cost in Marrakech?",
              "It depends on the floor area, the number of rooms and the level of detail you need. We give you a quote after a first conversation: message us on WhatsApp or visit the showroom.",
            ],
            [
              "Are you interior architects?",
              "We do interior design: layout, furniture, materials, colours and decoration. For work that affects the structure of the building, an architect remains the right person to consult.",
            ],
            [
              "Can the project be changed after seeing the 3D?",
              "Yes, that is the whole point. We adjust the renders until you approve them, and production only starts afterwards. To get started, use our [contact page](contact).",
            ],
          ],
        },
        { type: "cta" },
      ],
      ar: [
        {
          type: "lead",
          text: "التصميم الداخلي ثلاثي الأبعاد هو نمذجة بيتك انطلاقًا من قياساته الحقيقية، لترى شكل غرفك بعد تأثيثها قبل شراء أي شيء أو تصنيعه. وفي مراكش كما في غيرها، هو أضمن وسيلة لتجنب كنبة أكبر من اللازم أو لون لا ينسجم مع المكان.",
        },
        { type: "h2", text: "ما هو التصميم الداخلي ثلاثي الأبعاد؟" },
        {
          type: "p",
          text: "عمليًا، نعيد بناء كل غرفة بثلاثة أبعاد: الجدران والفتحات وعلو السقف والأرضية. ثم نضع فيها الأثاث بحجمه الحقيقي، ونضيف الخامات والألوان المقترحة، ونشتغل على الإضاءة. والنتيجة مخططات وصور ثلاثية الأبعاد واقعية نتصفحها معك. ويتعلق الأمر بالتصميم والديكور الداخلي: فنحن لا نعوّض المهندس المعماري في أشغال البناء والهيكل، بل نصمم التهيئة والأثاث والديكور.",
        },
        { type: "h2", text: "ما الذي تسمح التقنية ثلاثية الأبعاد بالتحقق منه؟" },
        {
          type: "list",
          items: [
            ["القياسات والحركة:", "تجد كل قطعة مكانها دون أن تعيق الأبواب أو النوافذ أو الممرات."],
            ["الأحجام:", "ترى فورًا إن كانت الكنبة تطغى على الغرفة أو كانت الطاولة تائهة في صالون كبير."],
            ["الخامات والألوان:", "البوكليه والمخمل والخشب والترافرتين وألوان الجدران والأقمشة تُقارن جنبًا إلى جنب."],
            ["الإضاءة:", "الاتجاه وشمس مراكش وإنارة المساء وأثر المرايا على الأجواء."],
            ["التناسق:", "الانتقال من غرفة إلى أخرى، وهو أمر أساسي في الفيلا أو الرياض."],
          ],
        },
        { type: "h2", text: "تعديلات حتى موافقتك" },
        {
          type: "p",
          text: "الصورة الأولى ليست نهائية أبدًا. تبدي رأيك فنعدّل: نقل ركن التلفاز، أو تجربة لون آخر للكنبة، أو الانتقال من طاولة دائرية إلى طاولة بيضاوية. وتجري هذه المراجعات قبل أي طلب، وهو أقل كلفة بكثير من تصحيح خطأ بعد صنع القطعة أو صباغة الجدار. ولا ينتقل المشروع إلى التنفيذ إلا بعد موافقتك.",
        },
        {
          type: "p",
          text: "وهذا مفيد بشكل خاص في [الأثاث حسب المقاس](blog:mobilier-sur-mesure-marrakech): فالكنبة المصممة لصالونك أو [خزانة التلفاز](category:meubles-tv) المكيّفة مع جدار محدد يُوافَق عليها أولًا بتقنية ثلاثية الأبعاد، ثم تُصنع.",
        },
        { type: "h2", text: "تجنب الأخطاء المكلفة" },
        {
          type: "p",
          text: "أكثر أخطاء التهيئة شيوعًا بسيطة في الغالب: قطعة عميقة أكثر من اللازم تسد ممرًا، أو طاولة قهوة غير متناسبة مع الكنبة، أو قماش داكن تحت الشمس المباشرة، أو ألوان متنافرة من غرفة إلى أخرى. والتقنية ثلاثية الأبعاد تكشفها على الشاشة قبل أن تكلفك شيئًا. كما تساعد على اتخاذ القرار المشترك: بين الزوجين أو داخل العائلة أو بين الشركاء في محل مهني، يرى الجميع الصورة نفسها. وإذا كنت تقيم خارج المغرب، فمشاركة الصور سهلة لمتابعة المشروع عن بعد.",
        },
        { type: "h2", text: "مكانة التصميم ثلاثي الأبعاد في خدمتنا المتكاملة" },
        {
          type: "p",
          text: "التصميم ثلاثي الأبعاد هو المرحلة الثانية من المراحل الأربع لـ[خدمتنا المتكاملة](services):",
        },
        {
          type: "list",
          items: [
            ["اللقاء:", "نستمع إلى رغباتك وميزانيتك ونأخذ القياسات."],
            ["التصميم ثلاثي الأبعاد:", "تكتشف بيتك المستقبلي بتقنية ثلاثية الأبعاد وتوافق عليه معنا."],
            ["التنفيذ:", "تهيئة المساحات وصناعة الأثاث واختيار قطع الديكور."],
            ["التركيب:", "نوصل ونركّب كل شيء، وما عليك إلا الاستمتاع."],
          ],
        },
        {
          type: "p",
          text: "لترى كيف تجري هذه المراحل في مشروع كامل، اقرأ مقالنا عن [التهيئة الداخلية المتكاملة في مراكش](blog:amenagement-interieur-cle-en-main-marrakech)، أو تعال للحديث عنها في صالة العرض بطريق آسفي.",
        },
        {
          type: "faq",
          items: [
            [
              "كم يكلف التصميم الداخلي ثلاثي الأبعاد في مراكش؟",
              "يتوقف السعر على المساحة وعدد الغرف ومستوى التفاصيل المطلوب. نحدده في عرض سعر بعد أول تواصل: راسلنا عبر واتساب أو زر صالة العرض.",
            ],
            [
              "هل أنتم مهندسون معماريون للديكور الداخلي؟",
              "نحن نشتغل في التصميم والديكور الداخلي: التهيئة والأثاث والخامات والألوان والزينة. أما الأشغال التي تمس هيكل البناية، فالمهندس المعماري يبقى الجهة المختصة.",
            ],
            [
              "هل يمكن تعديل المشروع بعد رؤية التصميم ثلاثي الأبعاد؟",
              "نعم، وهذه هي فائدته. نعدّل الصور حتى موافقتك، ولا يبدأ التنفيذ إلا بعد ذلك. وللبدء، يمكنك زيارة [صفحة التواصل](contact).",
            ],
          ],
        },
        { type: "cta" },
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // 5. Table basse en travertin
  // ---------------------------------------------------------------------------
  {
    slug: "table-basse-travertin-maroc",
    date: "2026-09-29",
    image: "table-basse-travertin-maroc.jpg",
    title: {
      fr: "Table basse en travertin au Maroc : comment la choisir",
      en: "Travertine coffee table in Morocco: how to choose one",
      ar: "طاولة قهوة من الترافرتين في المغرب: كيف تختارها؟",
    },
    description: {
      fr: "Veines, formes, taille par rapport au canapé et entretien : tout pour bien choisir une table basse en travertin au Maroc, avec nos modèles à Marrakech.",
      en: "Veining, shapes, size relative to your sofa and simple care: everything you need to choose a travertine coffee table in Morocco, with our pieces in Marrakech.",
      ar: "العروق الطبيعية والأشكال والحجم المناسب للكنبة والعناية اليومية: كل ما تحتاجه لاختيار طاولة قهوة من الترافرتين في المغرب، مع موديلاتنا في مراكش.",
    },
    body: {
      fr: [
        {
          type: "lead",
          text: "Une table basse en travertin apporte au salon la chaleur d’une pierre naturelle, et chaque pièce est unique grâce à ses veines. Pour bien la choisir, trois questions comptent : la forme, la taille par rapport à votre canapé et l’entretien au quotidien.",
        },
        { type: "h2", text: "Le travertin, une pierre naturelle à part" },
        {
          type: "p",
          text: "Le travertin est une pierre calcaire naturelle, reconnaissable à ses tons beige, sable ou crème et à ses petites cavités caractéristiques. Ses veines et ses nuances varient d’un bloc à l’autre : deux tables du même modèle ne seront jamais tout à fait identiques. C’est ce qui fait son charme, et c’est aussi pourquoi nous vous conseillons de voir la pierre en vrai avant de choisir. Ses tons chauds s’accordent naturellement avec la lumière de Marrakech et les couleurs des intérieurs marocains.",
        },
        { type: "h2", text: "Rectangulaire, ovale ou sculpturale : quelle forme ?" },
        {
          type: "list",
          items: [
            ["La rectangulaire :", "classique et généreuse, elle accompagne bien un canapé droit ou un grand canapé d’angle. Notre [table basse rectangulaire](product:table-basse-rectangulaire-travertin) pose un plateau épais sur un socle massif."],
            ["L’ovale :", "ses bords arrondis facilitent la circulation et adoucissent un salon aux lignes droites ; pratique aussi avec des enfants."],
            ["La sculpturale :", "plateaux décalés, volumes architecturaux, elle devient la pièce d’art du salon."],
            ["Les pieds cannelés :", "les cannelures créent un jeu de lumière et donnent du relief à une forme simple."],
          ],
        },
        {
          type: "p",
          text: "Nos modèles ovales existent avec deux pieds en croix, comme la [table basse ovale en travertin beige](product:table-basse-ovale-travertin-beige), ou avec deux pieds cylindriques cannelés pour la version entièrement en travertin. Retrouvez toute la gamme parmi nos [tables basses](category:tables-basses).",
        },
        {
          type: "products",
          slugs: [
            "table-basse-rectangulaire-travertin",
            "table-basse-ovale-travertin-beige",
            "table-basse-sculpturale-travertin",
            "table-basse-ovale-travertin-cannele",
          ],
        },
        { type: "h2", text: "Quelle taille par rapport au canapé ?" },
        {
          type: "p",
          text: "Quelques règles d’usage, souvent citées en décoration, aident à trouver la bonne proportion. Ce sont des repères, pas des lois : votre façon de vivre compte autant.",
        },
        {
          type: "list",
          items: [
            ["Longueur :", "environ les deux tiers de la longueur du canapé, pour un ensemble équilibré."],
            ["Distance :", "40 à 45 cm entre le bord de l’assise et la table, assez près pour poser un verre, assez loin pour passer les jambes."],
            ["Hauteur :", "à peu près au niveau de l’assise du canapé, ou légèrement en dessous."],
            ["Canapé d’angle :", "une table ovale ou ronde se place plus facilement face à l’angle qu’un long rectangle."],
          ],
        },
        {
          type: "p",
          text: "Dans le salon d’un appartement à Guéliz ou à l’Hivernage, une forme ovale laisse plus de place pour circuler ; dans le grand séjour d’une villa, une table rectangulaire ou sculpturale tient mieux l’espace. Pour les petites surfaces, voyez aussi nos idées de [meubles malins pour petits espaces](blog:petits-espaces-meubles-malins).",
        },
        { type: "h2", text: "L’associer au canapé et au tapis" },
        {
          type: "p",
          text: "Beige et mat, le travertin se marie très bien avec les tissus doux : un canapé en bouclé crème crée un ensemble tout en douceur, un velours plus profond comme le vert émeraude apporte du contraste. Côté tapis, un tissage dans des tons écrus, sable ou terre prolonge la pierre ; évitez seulement un tapis exactement de la même teinte, qui ferait disparaître la table. Pour le choix du canapé lui-même, lisez notre guide du [canapé sur mesure à Marrakech](blog:canape-sur-mesure-marrakech).",
        },
        { type: "h2", text: "Entretenir une table en travertin" },
        {
          type: "p",
          text: "Le travertin est une pierre poreuse, sensible aux acides. Quelques gestes simples suffisent à le garder beau longtemps :",
        },
        {
          type: "list",
          items: [
            ["Des sous-verres :", "pour éviter les auréoles laissées par les verres, le café ou le thé."],
            ["Un nettoyage doux :", "un chiffon humide avec un savon doux, puis un séchage."],
            ["Pas d’acides :", "ni vinaigre, ni citron, ni produit anticalcaire, qui ternissent la pierre."],
            ["Essuyer vite :", "les liquides renversés, surtout le jus d’orange, le vin ou l’huile."],
          ],
        },
        {
          type: "p",
          text: "Nous détaillons ces gestes dans notre article sur l’[entretien du bois, du tissu et du travertin](blog:entretien-meubles-bois-tissu-travertin).",
        },
        {
          type: "faq",
          items: [
            [
              "Le travertin convient-il au climat de Marrakech ?",
              "Oui, c’est une pierre qui se plaît dans les climats chauds et secs. Comme elle est poreuse, il suffit de la dépoussiérer régulièrement, la poussière étant fréquente à Marrakech, et d’éviter les produits acides.",
            ],
            [
              "Deux tables en travertin du même modèle sont-elles identiques ?",
              "Non. Chaque plateau a ses propres veines et nuances, puisque la pierre est naturelle. C’est pourquoi nous vous recommandons de venir voir la pierre au showroom de la Route de Safi.",
            ],
            [
              "Où acheter une table basse en travertin à Marrakech ?",
              "Au showroom Dolce Vita Design, 124 Al Massar, Route de Safi, du lundi au samedi de 9 h à 20 h. Les prix sont communiqués sur demande, par WhatsApp ou sur place.",
            ],
          ],
        },
        { type: "cta" },
      ],
      en: [
        {
          type: "lead",
          text: "A travertine coffee table brings the warmth of natural stone to a living room, and its veining makes every piece unique. Choosing the right one comes down to three questions: the shape, the size relative to your sofa, and everyday care.",
        },
        { type: "h2", text: "Travertine, a natural stone apart" },
        {
          type: "p",
          text: "Travertine is a natural limestone, recognisable by its beige, sand or cream tones and its characteristic small pores. Its veining and shading vary from one block to the next, so two tables of the same model will never be exactly alike. That is a large part of its charm, and also why we suggest seeing the stone in person before you choose. Its warm tones sit naturally with the light of Marrakech and the colours of Moroccan interiors.",
        },
        { type: "h2", text: "Rectangular, oval or sculptural?" },
        {
          type: "list",
          items: [
            ["Rectangular:", "classic and generous, it suits a straight sofa or a large corner sofa. Our [rectangular travertine table](product:table-basse-rectangulaire-travertin) sets a thick top on a solid base."],
            ["Oval:", "rounded edges make it easier to move around and soften a room full of straight lines; handy with children too."],
            ["Sculptural:", "offset tops and architectural volumes turn it into the living room’s work of art."],
            ["Fluted legs:", "the fluting catches the light and adds relief to a simple shape."],
          ],
        },
        {
          type: "p",
          text: "Our oval models come with two cross-shaped legs, like the [oval beige travertine coffee table](product:table-basse-ovale-travertin-beige), or with two fluted cylindrical legs in the all-travertine version. You will find the full range among our [coffee tables](category:tables-basses).",
        },
        {
          type: "products",
          slugs: [
            "table-basse-rectangulaire-travertin",
            "table-basse-ovale-travertin-beige",
            "table-basse-sculpturale-travertin",
            "table-basse-ovale-travertin-cannele",
          ],
        },
        { type: "h2", text: "What size, relative to the sofa?" },
        {
          type: "p",
          text: "A few rules of thumb often quoted by decorators help you find the right proportion. They are guidelines rather than laws; the way you live matters just as much.",
        },
        {
          type: "list",
          items: [
            ["Length:", "about two-thirds of the sofa’s length, for a balanced look."],
            ["Distance:", "40 to 45 cm between the edge of the seat and the table: close enough to reach a glass, far enough for your legs."],
            ["Height:", "roughly level with the sofa seat, or slightly lower."],
            ["Corner sofas:", "an oval or round table sits more easily in front of the corner than a long rectangle."],
          ],
        },
        {
          type: "p",
          text: "In an apartment living room in Guéliz or Hivernage, an oval shape leaves more space to move around; in the large living room of a villa, a rectangular or sculptural table holds the space better. For compact homes, see our ideas on [clever furniture for small spaces](blog:petits-espaces-meubles-malins).",
        },
        { type: "h2", text: "Pairing it with your sofa and rug" },
        {
          type: "p",
          text: "Beige and matt, travertine pairs beautifully with soft fabrics: a cream bouclé sofa creates a gentle, tonal look, while a deeper velvet such as emerald green adds contrast. For the rug, a weave in ecru, sand or earthy tones extends the stone; just avoid one in exactly the same shade, which would make the table disappear. For the sofa itself, read our guide to [choosing a made-to-measure sofa in Marrakech](blog:canape-sur-mesure-marrakech).",
        },
        { type: "h2", text: "Caring for a travertine table" },
        {
          type: "p",
          text: "Travertine is porous and sensitive to acids. A few simple habits keep it looking good for years:",
        },
        {
          type: "list",
          items: [
            ["Coasters:", "to avoid rings from glasses, coffee or tea."],
            ["Gentle cleaning:", "a damp cloth with mild soap, then dry it off."],
            ["No acids:", "no vinegar, lemon or limescale remover, which dull the stone."],
            ["Wipe spills quickly:", "especially orange juice, wine or oil."],
          ],
        },
        {
          type: "p",
          text: "We go into more detail in our article on [caring for wood, fabric and travertine](blog:entretien-meubles-bois-tissu-travertin).",
        },
        {
          type: "faq",
          items: [
            [
              "Is travertine suited to the Marrakech climate?",
              "Yes, it is a stone that does well in hot, dry climates. Because it is porous, simply dust it regularly, since dust is common in Marrakech, and avoid acidic cleaning products.",
            ],
            [
              "Are two travertine tables of the same model identical?",
              "No. Every top has its own veining and shading, because the stone is natural. That is why we recommend coming to see the stone at our showroom on Route de Safi.",
            ],
            [
              "Where can I buy a travertine coffee table in Marrakech?",
              "At the Dolce Vita Design showroom, 124 Al Massar, Route de Safi, open Monday to Saturday from 9 am to 8 pm. Prices are available on request, on WhatsApp or in store.",
            ],
          ],
        },
        { type: "cta" },
      ],
      ar: [
        {
          type: "lead",
          text: "تمنح طاولة القهوة من الترافرتين الصالون دفء الحجر الطبيعي، وعروقها تجعل كل قطعة فريدة. ولاختيارها جيدًا، تهمك ثلاثة أسئلة: الشكل، والحجم مقارنة بالكنبة، والعناية اليومية.",
        },
        { type: "h2", text: "الترافرتين، حجر طبيعي مميز" },
        {
          type: "p",
          text: "الترافرتين حجر جيري طبيعي، يُعرف بألوانه البيج والرملية والكريمية وبمساماته الصغيرة المميزة. وتختلف عروقه ودرجاته من كتلة إلى أخرى، فلا تتطابق طاولتان من الموديل نفسه تمامًا أبدًا. وهذا سر جاذبيته، ولهذا ننصحك بمعاينة الحجر على أرض الواقع قبل الاختيار. كما تنسجم ألوانه الدافئة بشكل طبيعي مع ضوء مراكش وألوان البيوت المغربية.",
        },
        { type: "h2", text: "مستطيلة أم بيضاوية أم منحوتة؟" },
        {
          type: "list",
          items: [
            ["المستطيلة:", "كلاسيكية وسخية، تناسب الكنبة المستقيمة أو كنبة الزاوية الكبيرة. و[طاولتنا المستطيلة من الترافرتين](product:table-basse-rectangulaire-travertin) تضع سطحًا سميكًا على قاعدة صلبة."],
            ["البيضاوية:", "حوافها المستديرة تسهّل الحركة وتلطف صالونًا تغلب عليه الخطوط المستقيمة، وهي عملية أيضًا بوجود الأطفال."],
            ["المنحوتة:", "بسطوح متدرجة وأحجام معمارية، تصبح التحفة الفنية للصالون."],
            ["الأرجل المضلعة:", "تخلق الأخاديد لعبًا للضوء وتضيف عمقًا إلى شكل بسيط."],
          ],
        },
        {
          type: "p",
          text: "تتوفر موديلاتنا البيضاوية بقاعدة من رجلين متقاطعتين، مثل [طاولة القهوة البيضاوية من الترافرتين البيج](product:table-basse-ovale-travertin-beige)، أو برجلين أسطوانيتين مضلعتين في النسخة المصنوعة بالكامل من الترافرتين. وتجد التشكيلة كاملة ضمن [طاولات القهوة](category:tables-basses) لدينا.",
        },
        {
          type: "products",
          slugs: [
            "table-basse-rectangulaire-travertin",
            "table-basse-ovale-travertin-beige",
            "table-basse-sculpturale-travertin",
            "table-basse-ovale-travertin-cannele",
          ],
        },
        { type: "h2", text: "ما الحجم المناسب مقارنة بالكنبة؟" },
        {
          type: "p",
          text: "تساعدك بعض القواعد المتداولة في عالم الديكور على إيجاد النسبة المناسبة. وهي مجرد مؤشرات لا قوانين، فطريقة عيشك لا تقل أهمية.",
        },
        {
          type: "list",
          items: [
            ["الطول:", "حوالي ثلثي طول الكنبة، لمجموعة متوازنة."],
            ["المسافة:", "من 40 إلى 45 سم بين حافة المقعد والطاولة: قريبة بما يكفي لوضع كأس، وبعيدة بما يكفي لتمرير الساقين."],
            ["الارتفاع:", "في مستوى مقعد الكنبة تقريبًا، أو أقل منه بقليل."],
            ["كنبة الزاوية:", "الطاولة البيضاوية أو الدائرية توضع أمام الزاوية بسهولة أكبر من مستطيل طويل."],
          ],
        },
        {
          type: "p",
          text: "في صالون شقة بجيليز أو الحي الشتوي، يترك الشكل البيضاوي مجالًا أكبر للحركة، أما في صالة فيلا واسعة فالطاولة المستطيلة أو المنحوتة تملأ الفضاء بشكل أفضل. وللمساحات الصغيرة، اطلع على أفكارنا حول [الأثاث الذكي للمساحات الصغيرة](blog:petits-espaces-meubles-malins).",
        },
        { type: "h2", text: "تنسيقها مع الكنبة والزربية" },
        {
          type: "p",
          text: "الترافرتين البيج المطفأ ينسجم كثيرًا مع الأقمشة الناعمة: كنبة من البوكليه الكريمي تخلق مجموعة هادئة ومتجانسة، بينما يضيف مخمل أعمق كالأخضر الزمردي تباينًا جميلًا. أما الزربية، فنسيج بألوان العاج أو الرمل أو التراب يواصل لون الحجر، فقط تجنب زربية بنفس درجة لون الترافرتين تمامًا لأنها ستُخفي الطاولة. ولاختيار الكنبة نفسها، اقرأ دليلنا حول [الكنبة حسب المقاس في مراكش](blog:canape-sur-mesure-marrakech).",
        },
        { type: "h2", text: "العناية بطاولة الترافرتين" },
        {
          type: "p",
          text: "الترافرتين حجر مسامي يتأثر بالأحماض. وتكفي بعض العادات البسيطة للحفاظ على جماله لسنوات:",
        },
        {
          type: "list",
          items: [
            ["قواعد الأكواب:", "لتجنب الدوائر التي تتركها الكؤوس أو القهوة أو الشاي."],
            ["تنظيف لطيف:", "قطعة قماش مبللة مع صابون خفيف، ثم التجفيف."],
            ["لا للأحماض:", "لا خل ولا ليمون ولا مزيلات الكلس، فهي تُفقد الحجر لمعانه."],
            ["المسح السريع:", "للسوائل المسكوبة، خاصة عصير البرتقال والزيت."],
          ],
        },
        {
          type: "p",
          text: "نفصّل هذه العادات في مقالنا عن [العناية بالخشب والقماش والترافرتين](blog:entretien-meubles-bois-tissu-travertin).",
        },
        {
          type: "faq",
          items: [
            [
              "هل يناسب الترافرتين مناخ مراكش؟",
              "نعم، فهو حجر يلائم المناخات الحارة والجافة. ولأنه مسامي، يكفي إزالة الغبار عنه بانتظام، فالغبار كثير في مراكش، مع تجنب المنتجات الحمضية.",
            ],
            [
              "هل تتطابق طاولتان من الترافرتين من الموديل نفسه؟",
              "لا. لكل سطح عروقه ودرجاته الخاصة لأن الحجر طبيعي. لذلك ننصحك بالقدوم لمعاينة الحجر في صالة العرض بطريق آسفي.",
            ],
            [
              "أين أشتري طاولة قهوة من الترافرتين في مراكش؟",
              "في صالة عرض دولتشي فيتا ديزاين، 124 المسار، طريق آسفي، من الإثنين إلى السبت من التاسعة صباحًا إلى الثامنة مساءً. الأسعار متوفرة عند الطلب، عبر واتساب أو في عين المكان.",
            ],
          ],
        },
        { type: "cta" },
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // 6. Location saisonnière
  // ---------------------------------------------------------------------------
  {
    slug: "meubler-location-saisonniere-marrakech",
    date: "2026-09-18",
    image: "meubler-location-saisonniere-marrakech.jpg",
    title: {
      fr: "Meubler une location saisonnière à Marrakech : nos conseils",
      en: "Furnishing a holiday rental in Marrakech: our advice",
      ar: "تأثيث شقة أو بيت للكراء السياحي في مراكش: نصائحنا",
    },
    description: {
      fr: "Pièce signature pour les photos, tissus faciles à vivre, literie, rangements : nos conseils pour meubler une location saisonnière ou un Airbnb à Marrakech.",
      en: "A signature piece for the photos, easy-care fabrics, good beds, storage: how to furnish a holiday rental or Airbnb in Marrakech that looks great and lasts.",
      ar: "قطعة مميزة تلفت الأنظار في الصور، أقمشة سهلة العناية، أسرّة مريحة، وتخزين عملي: نصائحنا لتأثيث بيت للكراء السياحي أو Airbnb في مراكش يدوم طويلًا.",
    },
    body: {
      fr: [
        {
          type: "lead",
          text: "Pour meubler une location saisonnière à Marrakech, il faut viser deux objectifs à la fois : des photos qui donnent envie de réserver et un mobilier qui résiste au passage des voyageurs, séjour après séjour. Voici comment nous équipons un appartement, une villa ou une maison d’hôtes pensés pour la location.",
        },
        { type: "h2", text: "Une pièce signature qui fait la photo" },
        {
          type: "p",
          text: "Sur les plateformes de réservation, la première photo décide souvent du clic. Plutôt que de multiplier les objets, misez sur une ou deux pièces fortes par espace : un fauteuil coloré, une tête de lit marquante, un miroir en arche. Le [fauteuil Bulle](product:fauteuil-bulle), bas et tout en rondeurs, se décline en bleu marine, jaune moutarde, vert et bordeaux : un seul suffit à donner du caractère au salon. Un miroir en arche encadré de bouclé crème habille aussi très bien une entrée ou une chambre, tout en renvoyant la lumière.",
        },
        {
          type: "products",
          slugs: ["fauteuil-bulle", "lit-tete-capitonnee-beige", "pouf-boucle-trois-niveaux", "cadre-miroir-arche-classique"],
        },
        { type: "h2", text: "Des tissus durables et faciles à entretenir" },
        {
          type: "p",
          text: "Un logement loué accueille beaucoup de monde, des valises posées sur le canapé et parfois des enfants. Choisissez des tissages serrés, des couleurs moyennes plutôt que du blanc pur, et des coussins déhoussables quand c’est possible. À Marrakech, la poussière et le soleil comptent aussi : protégez les tissus placés près des baies avec des [rideaux](category:rideaux) ou des voilages. Notre article sur le [mobilier face au climat de Marrakech](blog:mobilier-climat-marrakech) détaille ces choix.",
        },
        { type: "h2", text: "Le confort du sommeil avant tout" },
        {
          type: "p",
          text: "La qualité du sommeil revient souvent dans les avis des voyageurs. Un bon lit, une tête de lit confortable pour lire et une table de chevet de chaque côté font une vraie différence. Le [lit beige à tête de lit rainurée](product:lit-tete-capitonnee-beige), posé sur des pieds en bois, apporte de la hauteur et de l’élégance à la chambre tout en restant sobre, ce qui plaît au plus grand nombre. Pour créer une chambre accueillante, voyez aussi nos conseils pour une [chambre cocon](blog:chambre-cocon-lit-tete-de-lit).",
        },
        { type: "h2", text: "Rangements et palette cohérente" },
        {
          type: "list",
          items: [
            ["Des rangements pour les voyageurs :", "une penderie ou des patères, un porte-bagages, quelques tiroirs pour un séjour de vacances."],
            ["Des rangements pour vous :", "un placard fermé à clé pour le linge de rechange et les produits d’entretien."],
            ["Une palette limitée :", "deux ou trois couleurs de base reprises dans toutes les pièces, pour des photos homogènes."],
            ["Des assises d’appoint :", "un pouf comme notre pouf bouclé à trois niveaux sert de siège ou de repose-pieds selon les besoins."],
          ],
        },
        {
          type: "p",
          text: "Dans un studio ou un petit appartement, des rangements dessinés sur mesure exploitent chaque recoin sans encombrer les photos.",
        },
        { type: "h2", text: "Terrasse et patio : l’espace qui fait la différence" },
        {
          type: "p",
          text: "À Marrakech, une terrasse sur le toit ou un patio ombragé fait souvent partie de ce que les voyageurs recherchent. Équipez-le comme une vraie pièce : assises confortables, petite table pour le petit-déjeuner, ombre (voile, pergola ou parasol) et éclairage doux pour le soir. Rentrez ou couvrez les coussins quand le logement est vide, pour les protéger du soleil et de la poussière.",
        },
        { type: "h2", text: "Propriétaire à l’étranger : le clé en main suivi à distance" },
        {
          type: "p",
          text: "Si vous vivez hors du Maroc, notre [service clé en main](services) vous permet de confier le projet de bout en bout : prise de mesures sur place, conception 3D que vous validez à distance, réalisation, puis livraison et installation. Le suivi se fait sur WhatsApp, jusqu’à ce que le logement soit prêt à être photographié.",
        },
        {
          type: "faq",
          items: [
            [
              "Quels meubles choisir pour un Airbnb à Marrakech ?",
              "Des pièces solides et faciles à entretenir, un bon lit dans chaque chambre, des rangements simples et une ou deux pièces fortes qui ressortent sur les photos. Une palette cohérente d’une pièce à l’autre rend l’annonce plus lisible.",
            ],
            [
              "Peut-on meubler sa location à distance, sans venir à Marrakech ?",
              "Oui. Avec notre service clé en main, le projet est suivi sur WhatsApp : nous prenons les mesures sur place, vous validez la conception 3D et les choix à distance, puis nous nous occupons de la réalisation, de la livraison et de l’installation.",
            ],
            [
              "Combien de temps faut-il pour meubler une location saisonnière ?",
              "Cela dépend de la surface, de la part de mobilier sur mesure et des éventuels travaux. Nous vous indiquons les délais au moment du devis ; écrivez-nous sur WhatsApp pour en parler.",
            ],
          ],
        },
        { type: "cta" },
      ],
      en: [
        {
          type: "lead",
          text: "Furnishing a holiday rental in Marrakech means aiming for two things at once: photos that make people want to book, and furniture that stands up to guest after guest. Here is how we fit out apartments, villas and guest houses designed to be let.",
        },
        { type: "h2", text: "A signature piece that makes the photo" },
        {
          type: "p",
          text: "On booking platforms, the first photo often decides the click. Rather than adding more objects, invest in one or two strong pieces per room: a colourful armchair, a striking headboard, an arched mirror. Our [Bubble armchair](product:fauteuil-bulle), low and fully rounded, comes in navy, mustard, green and burgundy, and one is enough to give a living room character. An arched mirror framed in cream bouclé also dresses an entrance or a bedroom beautifully while bouncing the light around.",
        },
        {
          type: "products",
          slugs: ["fauteuil-bulle", "lit-tete-capitonnee-beige", "pouf-boucle-trois-niveaux", "cadre-miroir-arche-classique"],
        },
        { type: "h2", text: "Durable, easy-care fabrics" },
        {
          type: "p",
          text: "A rental sees a lot of people, suitcases dropped on the sofa and sometimes children. Choose tightly woven fabrics, mid tones rather than pure white, and removable cushion covers where possible. In Marrakech, dust and sun matter too: protect fabrics near large windows with [curtains](category:rideaux) or sheers. Our article on [furniture and the Marrakech climate](blog:mobilier-climat-marrakech) explains these choices in more detail.",
        },
        { type: "h2", text: "Sleep comes first" },
        {
          type: "p",
          text: "Sleep quality comes up again and again in guest reviews. A good bed, a comfortable headboard to read against and a bedside table on each side make a real difference. Our [beige bed with a channel-tufted headboard](product:lit-tete-capitonnee-beige), on wooden feet, brings height and elegance to the bedroom while staying understated, which appeals to most guests. For a welcoming bedroom, see also our tips for a [cosy cocoon bedroom](blog:chambre-cocon-lit-tete-de-lit).",
        },
        { type: "h2", text: "Storage and a consistent palette" },
        {
          type: "list",
          items: [
            ["Storage for guests:", "a wardrobe or hooks, a luggage rack and a few drawers for a holiday stay."],
            ["Storage for you:", "a lockable cupboard for spare linen and cleaning products."],
            ["A limited palette:", "two or three base colours repeated in every room, so the photos feel consistent."],
            ["Extra seating:", "a pouf like our three-tier bouclé pouf works as a seat or a footrest as needed."],
          ],
        },
        {
          type: "p",
          text: "In a studio or small apartment, made-to-measure storage makes use of every corner without cluttering the photos.",
        },
        { type: "h2", text: "Terrace and patio: the space that makes the difference" },
        {
          type: "p",
          text: "In Marrakech, a roof terrace or a shaded patio is often part of what guests are looking for. Furnish it like a real room: comfortable seating, a small table for breakfast, shade (a sail, pergola or parasol) and soft lighting for the evening. Bring the cushions in or cover them when the property is empty, to protect them from sun and dust.",
        },
        { type: "h2", text: "Living abroad? Turnkey, followed remotely" },
        {
          type: "p",
          text: "If you live outside Morocco, our [turnkey service](services) lets you hand over the whole project: measurements on site, a 3D design you approve remotely, production, then delivery and installation. Everything is followed on WhatsApp until the property is ready for its photo shoot.",
        },
        {
          type: "faq",
          items: [
            [
              "What furniture works best for an Airbnb in Marrakech?",
              "Sturdy, easy-care pieces, a good bed in every bedroom, simple storage and one or two statement pieces that stand out in the photos. A consistent palette from room to room makes the listing easier to read.",
            ],
            [
              "Can I furnish my rental remotely, without coming to Marrakech?",
              "Yes. With our turnkey service, the project is followed on WhatsApp: we take the measurements on site, you approve the 3D design and the choices remotely, then we handle production, delivery and installation.",
            ],
            [
              "How long does it take to furnish a holiday rental?",
              "It depends on the size, how much is made to measure and whether any works are needed. We give you timings with the quote; message us on WhatsApp to talk it through.",
            ],
          ],
        },
        { type: "cta" },
      ],
      ar: [
        {
          type: "lead",
          text: "تأثيث بيت للكراء السياحي في مراكش يعني السعي إلى هدفين في آن واحد: صور تُغري بالحجز، وأثاث يصمد أمام توافد المسافرين إقامة بعد أخرى. إليك كيف نجهّز الشقق والفيلات ودور الضيافة المخصصة للكراء.",
        },
        { type: "h2", text: "قطعة مميزة تصنع الصورة" },
        {
          type: "p",
          text: "على منصات الحجز، كثيرًا ما تحسم الصورة الأولى قرار النقر. وبدل تكديس القطع، راهن على قطعة أو قطعتين قويتين في كل فضاء: كرسي ملون، أو لوح رأس سرير لافت، أو مرآة مقوسة. فـ[كرسي بابل](product:fauteuil-bulle)، المنخفض والدائري بالكامل، متوفر بالأزرق البحري والأصفر الخردلي والأخضر والعنابي، وواحد منه يكفي ليمنح الصالون طابعًا خاصًا. كما تزيّن مرآة مقوسة بإطار من البوكليه الكريمي المدخل أو غرفة النوم بأناقة، وتعكس الضوء في الوقت نفسه.",
        },
        {
          type: "products",
          slugs: ["fauteuil-bulle", "lit-tete-capitonnee-beige", "pouf-boucle-trois-niveaux", "cadre-miroir-arche-classique"],
        },
        { type: "h2", text: "أقمشة متينة وسهلة العناية" },
        {
          type: "p",
          text: "البيت المؤجَّر يستقبل أشخاصًا كثيرين، وحقائب توضع على الكنبة، وأحيانًا أطفالًا. اختر أقمشة كثيفة النسيج، وألوانًا متوسطة بدل الأبيض الناصع، ووسائد بأغطية قابلة للنزع كلما أمكن. وفي مراكش، للغبار والشمس حسابهما أيضًا: احمِ الأقمشة القريبة من الواجهات الزجاجية بـ[الستائر](category:rideaux) أو الستائر الخفيفة. ويشرح مقالنا عن [الأثاث ومناخ مراكش](blog:mobilier-climat-marrakech) هذه الاختيارات بالتفصيل.",
        },
        { type: "h2", text: "راحة النوم قبل كل شيء" },
        {
          type: "p",
          text: "جودة النوم موضوع يتكرر كثيرًا في تقييمات المسافرين. سرير جيد، ولوح رأس مريح للقراءة، وطاولة بجانب كل جهة من السرير تصنع فرقًا حقيقيًا. فـ[السرير البيج بلوح الرأس المبطن](product:lit-tete-capitonnee-beige)، المرتكز على أرجل خشبية، يمنح غرفة النوم ارتفاعًا وأناقة مع بساطة تُرضي أغلب الأذواق. ولغرفة نوم مريحة ودافئة، اطلع أيضًا على نصائحنا حول [غرفة النوم الدافئة](blog:chambre-cocon-lit-tete-de-lit).",
        },
        { type: "h2", text: "التخزين وألوان متناسقة" },
        {
          type: "list",
          items: [
            ["تخزين للمسافرين:", "خزانة ملابس أو مشاجب، وحامل للحقائب، وبعض الأدراج لإقامة عطلة."],
            ["تخزين لك أنت:", "خزانة مقفلة لأغطية الأسرّة الاحتياطية ومواد التنظيف."],
            ["ألوان محدودة:", "لونان أو ثلاثة أساسية تتكرر في كل الغرف، لصور متجانسة."],
            ["مقاعد إضافية:", "بوف مثل البوف الدائري من البوكليه بثلاث طبقات يصلح مقعدًا أو مسندًا للقدمين حسب الحاجة."],
          ],
        },
        {
          type: "p",
          text: "في الاستوديو أو الشقة الصغيرة، تستغل الخزائن المصممة حسب المقاس كل زاوية دون أن تُثقل الصور.",
        },
        { type: "h2", text: "السطح والفناء: الفضاء الذي يصنع الفرق" },
        {
          type: "p",
          text: "في مراكش، كثيرًا ما يكون السطح أو الفناء الظليل جزءًا مما يبحث عنه المسافرون. جهّزه كغرفة حقيقية: مقاعد مريحة، وطاولة صغيرة للفطور، وظل (شراع أو عريشة أو مظلة)، وإنارة هادئة للمساء. وأدخل الوسائد أو غطّها حين يكون البيت فارغًا لحمايتها من الشمس والغبار.",
        },
        { type: "h2", text: "تقيم خارج المغرب؟ خدمة متكاملة تتابعها عن بعد" },
        {
          type: "p",
          text: "إذا كنت تعيش خارج المغرب، فإن [خدمتنا المتكاملة](services) تتيح لك تفويض المشروع من البداية إلى النهاية: أخذ القياسات في عين المكان، وتصميم ثلاثي الأبعاد توافق عليه عن بعد، ثم التنفيذ والتوصيل والتركيب. وتتم المتابعة عبر واتساب إلى أن يصبح البيت جاهزًا للتصوير.",
        },
        {
          type: "faq",
          items: [
            [
              "ما الأثاث المناسب لشقة Airbnb في مراكش؟",
              "قطع متينة وسهلة العناية، وسرير جيد في كل غرفة، وتخزين بسيط، وقطعة أو قطعتان بارزتان في الصور. والألوان المتناسقة من غرفة إلى أخرى تجعل الإعلان أوضح.",
            ],
            [
              "هل يمكن تأثيث بيت الكراء عن بعد دون القدوم إلى مراكش؟",
              "نعم. مع خدمتنا المتكاملة، تتم متابعة المشروع عبر واتساب: نأخذ القياسات في عين المكان، وتوافق أنت على التصميم ثلاثي الأبعاد والاختيارات عن بعد، ثم نتكفل بالتنفيذ والتوصيل والتركيب.",
            ],
            [
              "كم من الوقت يتطلب تأثيث بيت للكراء السياحي؟",
              "يتوقف ذلك على المساحة ونسبة الأثاث المصنوع حسب المقاس والأشغال المحتملة. نحدد لك الآجال عند إعداد عرض السعر، فراسلنا عبر واتساب للحديث عن مشروعك.",
            ],
          ],
        },
        { type: "cta" },
      ],
    },
  },
];
