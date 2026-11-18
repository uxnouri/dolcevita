import type { Lang } from "../i18n";

/**
 * Product descriptions, keyed by product slug. Kept apart from products.json so re-running the
 * photo import never wipes them. A product without an entry falls back to the generic text in
 * the dictionaries ("product.descriptionText").
 * Describe only what the photo and the name show: no invented dimensions or materials.
 */
export const DESCRIPTIONS: Record<string, Record<Lang, string>> = {
  // ---- Canapés
  "canape-banana": {
    fr: "Une silhouette tout en courbes qui rappelle la forme d’une banane. Ses lignes enveloppantes en font la pièce maîtresse d’un salon contemporain. Disponible en beige, blanc, bleu, gris et marron.",
    en: "A flowing, curved silhouette shaped like a banana. Its wraparound lines make it the centrepiece of a contemporary living room. Available in beige, white, blue, grey and brown.",
    ar: "تصميم منحني بالكامل يذكّر بشكل حبة الموز. خطوطه الانسيابية تجعل منه القطعة الأبرز في صالون عصري. متوفرة بالبيج والأبيض والأزرق والرمادي والبني.",
  },
  "canape-angle-boucle-creme": {
    fr: "Un grand canapé d’angle en bouclé crème, aux assises matelassées posées sur un socle en bois clair. Ses coussins à motifs graphiques apportent du caractère à un intérieur lumineux.",
    en: "A generous cream bouclé corner sofa, with quilted seats resting on a light wood base. Its graphic-print cushions add character to a bright interior.",
    ar: "كنبة زاوية واسعة من قماش البوكليه الكريمي، بمقاعد مبطنة ترتكز على قاعدة من الخشب الفاتح. وسائدها ذات النقوش الهندسية تضفي طابعًا مميزًا على الفضاءات المضيئة.",
  },
  "canape-angle-boucle-terracotta": {
    fr: "Un canapé d’angle en bouclé terracotta, à l’assise touffetée et aux coussins généreux. Sa couleur chaude et sa matière douce créent un coin salon accueillant où l’on aime s’installer.",
    en: "A terracotta bouclé corner sofa with a tufted seat and generous cushions. Its warm colour and soft texture create an inviting corner you will want to sink into.",
    ar: "كنبة زاوية من قماش البوكليه بلون التيراكوتا، بمقعد مبطّن ووسائد سخية. لونها الدافئ وملمسها الناعم يصنعان ركن جلوس مريحًا تحب الاسترخاء فيه.",
  },
  "canape-angle-coussins-colores": {
    fr: "Un canapé d’angle crème aux lignes nettes, posé sur des pieds en bois. Ses coussins rouges et jaune moutarde réveillent l’ensemble et apportent une touche de couleur à votre salon.",
    en: "A cream corner sofa with clean lines, raised on wooden feet. Its red and mustard cushions liven it up and bring a touch of colour to your living room.",
    ar: "كنبة زاوية كريمية بخطوط واضحة، ترتكز على أرجل خشبية. وسائدها الحمراء والصفراء الخردلية تمنح المجموعة حيوية ولمسة لون لصالونك.",
  },
  "canape-angle-modulable": {
    fr: "Un canapé d’angle bas et modulable, composé d’éléments que l’on agence selon la pièce. Son tissu beige, ses assises surpiquées et ses grands coussins de dossier invitent à la détente.",
    en: "A low, modular corner sofa made of sections you arrange to suit the room. Its beige fabric, top-stitched seats and large back cushions are made for lounging.",
    ar: "كنبة زاوية منخفضة ومعيارية، تتكون من وحدات يمكن ترتيبها حسب مساحة الغرفة. قماشها البيج ومقاعدها المخيطة ووسائد ظهرها الكبيرة تدعو إلى الاسترخاء.",
  },
  "canape-capitonne-vert-emeraude": {
    fr: "Un canapé capitonné en velours vert émeraude, aux formes rondes et moelleuses. Une pièce affirmée qui apporte profondeur et élégance à un salon.",
    en: "A tufted sofa in emerald green velvet, with soft, rounded shapes. A bold piece that brings depth and elegance to a living room.",
    ar: "كنبة مبطنة من المخمل الأخضر الزمردي، بأشكال دائرية وناعمة. قطعة جريئة تمنح الصالون عمقًا وأناقة.",
  },
  // ---- Fauteuils
  "fauteuil-bulle": {
    fr: "Un fauteuil bas aux volumes ronds et capitonnés, aussi confortable qu’il en a l’air. Il se décline en bleu marine, jaune moutarde, vert et bordeaux pour s’accorder à votre intérieur.",
    en: "A low armchair with rounded, padded volumes, as comfortable as it looks. It comes in navy, mustard, green and burgundy to suit your interior.",
    ar: "كرسي منخفض بأحجام دائرية ومبطنة، مريح بقدر ما يبدو. متوفر بالأزرق الداكن والأصفر الخردلي والأخضر والعنابي ليتناسب مع ديكورك.",
  },
  "fauteuil-lounge-boucle": {
    fr: "Un fauteuil lounge en bouclé crème, à l’assise ronde et au dossier cylindrique porté par une structure en bois. Disponible en bois sombre ou en bois naturel.",
    en: "A cream bouclé lounge chair with a round seat and a cylindrical backrest held by a wooden frame. Available in dark wood or natural wood.",
    ar: "كرسي استرخاء من البوكليه الكريمي، بمقعد دائري ومسند أسطواني يحمله هيكل خشبي. متوفر بالخشب الداكن أو الخشب الطبيعي.",
  },
  "fauteuil-sculptural-boucle-ivoire": {
    fr: "Un fauteuil en bouclé ivoire à la forme sculpturale : une assise ronde et un dossier enveloppant d’un seul geste. Parfait dans une chambre, un dressing ou un coin lecture.",
    en: "An ivory bouclé chair with a sculptural form: a round seat and a backrest that wraps around in one sweep. Perfect in a bedroom, dressing room or reading corner.",
    ar: "كرسي من البوكليه العاجي بتصميم منحوت: مقعد دائري ومسند يلتف حوله في حركة واحدة. مثالي لغرفة النوم أو غرفة الملابس أو ركن القراءة.",
  },
  "fauteuil-scandinave": {
    fr: "Un fauteuil d’inspiration scandinave, à la structure en bois apparente et à l’assise rembourrée. Trois finitions : blanc et noir, beige et noyer, ou bleu marine et teck.",
    en: "A Scandinavian-inspired armchair with an exposed wooden frame and an upholstered seat. Three finishes: white and black, beige and walnut, or navy and teak.",
    ar: "كرسي مستوحى من الطراز الإسكندنافي، بهيكل خشبي ظاهر ومقعد مبطن. ثلاثة اختيارات: أبيض وأسود، بيج وجوز، أو أزرق داكن وخشب الساج.",
  },
  // ---- Chaises
  "chaise-accoudoirs-boucle": {
    fr: "Une chaise à accoudoirs en bouclé crème, au piètement en bois fin et graphique. Confortable autour d’une table à manger comme dans un bureau. Disponible avec un bois noir ou noyer.",
    en: "A cream bouclé armchair-style dining chair on a slim, graphic wooden frame. Comfortable at a dining table or a desk. Available with black or walnut wood.",
    ar: "كرسي بمساند ذراعين من البوكليه الكريمي، بهيكل خشبي رفيع وأنيق. مريح حول طاولة الطعام أو في المكتب. متوفر بالخشب الأسود أو خشب الجوز.",
  },
  "chaise-dossier-rond-boucle": {
    fr: "Une chaise en bouclé crème au dossier arrondi, encadrée d’une structure en bois sombre aux lignes franches. Le contraste des matières lui donne une allure moderne et chaleureuse.",
    en: "A cream bouclé chair with a rounded backrest, framed in dark wood with strong, simple lines. The contrast of materials gives it a modern yet warm look.",
    ar: "كرسي من البوكليه الكريمي بمسند ظهر دائري، يحيط به هيكل من الخشب الداكن بخطوط واضحة. تباين الخامات يمنحه مظهرًا عصريًا ودافئًا.",
  },
  // ---- Lits
  "lit-bulle-ivoire": {
    fr: "Un lit en tissu ivoire entièrement habillé de boudins moelleux, de la tête de lit au cadre. Une pièce douce et enveloppante qui transforme la chambre en cocon.",
    en: "A bed in ivory fabric wrapped in soft, puffy rolls, from the headboard to the frame. A soft, enveloping piece that turns the bedroom into a cocoon.",
    ar: "سرير من القماش العاجي مكسو بالكامل بوسائد منتفخة وناعمة، من اللوح الأمامي إلى الإطار. قطعة ناعمة تحوّل غرفة النوم إلى ملاذ دافئ.",
  },
  "lit-tete-capitonnee-beige": {
    fr: "Un lit en tissu beige à la haute tête de lit rainurée, posé sur des pieds en bois. Ses lignes verticales donnent de la hauteur et de l’élégance à la chambre.",
    en: "A beige fabric bed with a tall channel-tufted headboard, on wooden feet. Its vertical lines bring height and elegance to the bedroom.",
    ar: "سرير من القماش البيج بلوح أمامي عالٍ بخطوط عمودية، يرتكز على أرجل خشبية. خطوطه العمودية تمنح غرفة النوم ارتفاعًا وأناقة.",
  },
  "lit-capitonne-gris": {
    fr: "Un lit capitonné gris dont la tête de lit et le cadre reprennent les mêmes rainures verticales. Une ligne sobre et structurée pour une chambre élégante.",
    en: "A grey upholstered bed whose headboard and frame share the same vertical channels. A clean, structured design for an elegant bedroom.",
    ar: "سرير رمادي مبطن يتكرر فيه نفس التضليع العمودي على اللوح الأمامي والإطار. تصميم بسيط ومتناسق لغرفة نوم أنيقة.",
  },
  "lit-capitonne-beige-texture": {
    fr: "Un lit en tissu beige texturé, à la tête de lit capitonnée en carrés et au cadre matelassé. Un style doux et contemporain qui réchauffe la chambre.",
    en: "A bed in textured beige fabric, with a square-tufted headboard and a quilted frame. A soft, contemporary style that warms up the bedroom.",
    ar: "سرير من القماش البيج ذي الملمس البارز، بلوح أمامي مبطن بمربعات وإطار مبطن. أسلوب ناعم وعصري يمنح غرفة النوم دفئًا.",
  },
  "lit-rembourre-creme": {
    fr: "Un lit rembourré crème aux formes arrondies, avec une tête de lit capitonnée et un cadre généreusement matelassé. Douceur et confort pour une chambre apaisante.",
    en: "A cream upholstered bed with rounded shapes, a tufted headboard and a generously padded frame. Softness and comfort for a calm bedroom.",
    ar: "سرير كريمي مبطن بأشكال دائرية، بلوح أمامي منجّد وإطار مبطن بسخاء. نعومة وراحة لغرفة نوم هادئة.",
  },
  // ---- Miroirs
  "miroir-organique": {
    fr: "Un grand miroir à la forme organique, encadré d’un épais boudin de tissu. Posé au sol ou fixé au mur, il adoucit la pièce et agrandit l’espace. En bouclé ivoire ou velours beige.",
    en: "A large organic-shaped mirror framed by a thick roll of fabric. Leaning on the floor or hung on the wall, it softens the room and opens up the space. In ivory bouclé or beige velvet.",
    ar: "مرآة كبيرة بشكل عضوي، محاطة بإطار سميك من القماش. سواء وُضعت على الأرض أو عُلّقت على الحائط، تمنح الغرفة نعومة وتوسّع المساحة. متوفرة بالبوكليه العاجي أو المخمل البيج.",
  },
  "cadre-miroir-festonne-boucle": {
    fr: "Un miroir encadré de bouclé blanc, découpé en arche festonnée qui évoque l’architecture marocaine. Une pièce élégante et contemporaine pour une entrée, un salon ou une chambre.",
    en: "A mirror framed in white bouclé, cut into a scalloped arch that recalls Moroccan architecture. An elegant, contemporary piece for an entrance, living room or bedroom.",
    ar: "مرآة بإطار من البوكليه الأبيض، على شكل قوس مزخرف الحواف يستحضر العمارة المغربية. قطعة أنيقة وعصرية للمدخل أو الصالون أو غرفة النوم.",
  },
  "cadre-miroir-organique-boucle": {
    fr: "Un miroir aux contours ondulés, encadré d’un épais boudin de bouclé. Sa forme libre et sa matière douce apportent une touche ludique et chaleureuse au mur.",
    en: "A mirror with wavy outlines, framed by a thick roll of bouclé. Its free-flowing shape and soft texture bring a playful, warm touch to the wall.",
    ar: "مرآة بحواف متموجة، محاطة بإطار سميك من البوكليه. شكلها الحر وملمسها الناعم يضفيان لمسة مرحة ودافئة على الجدار.",
  },
  "cadre-miroir-ovale-boucle": {
    fr: "Un miroir ovale allongé, encadré d’un boudin de bouclé crème. Une forme intemporelle, adoucie par la matière, qui trouve sa place partout dans la maison.",
    en: "An elongated oval mirror framed by a roll of cream bouclé. A timeless shape, softened by the fabric, that fits anywhere in the home.",
    ar: "مرآة بيضاوية مستطيلة، بإطار من البوكليه الكريمي. شكل خالد تزيده الخامة نعومة، ويجد مكانه في أي ركن من البيت.",
  },
  "cadre-miroir-asymetrique-boucle": {
    fr: "Un miroir à la forme asymétrique, comme un galet, encadré de bouclé crème. Il apporte du mouvement et une note organique à un mur trop sage.",
    en: "A pebble-like asymmetric mirror framed in cream bouclé. It adds movement and an organic note to a plain wall.",
    ar: "مرآة غير متماثلة تشبه الحصاة، بإطار من البوكليه الكريمي. تضيف حركة ولمسة طبيعية إلى جدار بسيط.",
  },
  "cadre-miroir-arche-classique": {
    fr: "Un miroir en arche, encadré de bouclé crème. La forme classique de l’arche, rendue plus douce par la matière, pour une entrée ou une chambre.",
    en: "An arched mirror framed in cream bouclé. The classic arch shape, softened by the fabric, for an entrance or a bedroom.",
    ar: "مرآة على شكل قوس، بإطار من البوكليه الكريمي. شكل القوس الكلاسيكي بلمسة أنعم بفضل الخامة، للمدخل أو غرفة النوم.",
  },
  "cadre-miroir-carre-arrondi": {
    fr: "Un miroir carré aux angles arrondis, encadré d’un épais bouclé crème. Une forme simple et généreuse, idéale au-dessus d’une console ou d’une commode.",
    en: "A square mirror with rounded corners, framed in thick cream bouclé. A simple, generous shape, ideal above a console or a chest of drawers.",
    ar: "مرآة مربعة بزوايا مستديرة، بإطار سميك من البوكليه الكريمي. شكل بسيط وسخي، مثالي فوق طاولة جانبية أو خزانة أدراج.",
  },
  "cadre-miroir-double-arche": {
    fr: "Un miroir à double arche, encadré de bouclé crème. Sa silhouette rappelle les ouvertures de l’architecture marocaine et apporte du caractère à une pièce.",
    en: "A double-arch mirror framed in cream bouclé. Its silhouette recalls the openings of Moroccan architecture and gives character to a room.",
    ar: "مرآة بقوس مزدوج، بإطار من البوكليه الكريمي. شكلها يستحضر أقواس العمارة المغربية ويمنح الغرفة طابعًا مميزًا.",
  },
  // ---- Poufs
  "pouf-geometrique-noir-ivoire": {
    fr: "Un pouf cylindrique habillé d’un tissu à motif géométrique noir et ivoire. Assise d’appoint ou repose-pieds, il ajoute une touche graphique au salon ou à la chambre.",
    en: "A cylindrical pouf covered in a black and ivory geometric-pattern fabric. As an extra seat or a footrest, it adds a graphic touch to a living room or bedroom.",
    ar: "بوف أسطواني مكسو بقماش بنقوش هندسية بالأسود والعاجي. مقعد إضافي أو مسند للقدمين، يضيف لمسة جرافيكية إلى الصالون أو غرفة النوم.",
  },
  "pouf-geometrique": {
    fr: "Un petit pouf rond au motif géométrique, en rouge et crème ou en terracotta et crème. Pratique et coloré, il se glisse partout comme assise d’appoint.",
    en: "A small round pouf with a geometric pattern, in red and cream or terracotta and cream. Handy and colourful, it slips in anywhere as an extra seat.",
    ar: "بوف دائري صغير بنقوش هندسية، بالأحمر والكريمي أو التيراكوتا والكريمي. عملي وملوّن، يمكن وضعه في أي مكان كمقعد إضافي.",
  },
  "pouf-boucle-trois-niveaux": {
    fr: "Un pouf rond en bouclé crème, formé de trois boudins superposés. Doux au toucher et tout en rondeur, il sert d’assise d’appoint ou de repose-pieds.",
    en: "A round cream bouclé pouf made of three stacked rolls. Soft to the touch and fully rounded, it works as an extra seat or a footrest.",
    ar: "بوف دائري من البوكليه الكريمي، يتكون من ثلاث طبقات منتفخة فوق بعضها. ناعم الملمس ودائري الشكل، يُستعمل كمقعد إضافي أو مسند للقدمين.",
  },
  "pouf-rond-beige": {
    fr: "Un pouf rond en tissu beige texturé, légèrement évasé vers le haut. Une pièce simple et douce qui complète un salon ou une chambre.",
    en: "A round pouf in textured beige fabric, gently flared towards the top. A simple, soft piece that completes a living room or bedroom.",
    ar: "بوف دائري من القماش البيج ذي الملمس البارز، يتسع قليلًا نحو الأعلى. قطعة بسيطة وناعمة تكمل الصالون أو غرفة النوم.",
  },
  // ---- Tables basses
  "table-basse-bloc-travertin": {
    fr: "Une table basse monolithique en travertin, taillée comme un bloc aux lignes pures. Les veines naturelles de la pierre rendent chaque pièce unique.",
    en: "A monolithic travertine coffee table, cut like a block with pure lines. The natural veining of the stone makes every piece unique.",
    ar: "طاولة قهوة من الترافرتين على شكل كتلة واحدة بخطوط نقية. عروق الحجر الطبيعية تجعل كل قطعة فريدة.",
  },
  "table-basse-pieds-canneles": {
    fr: "Une table basse ovale au plateau beige, portée par deux pieds cylindriques cannelés. Une ligne douce et architecturale pour un salon lumineux.",
    en: "An oval coffee table with a beige top, carried by two fluted cylindrical legs. A soft, architectural design for a bright living room.",
    ar: "طاولة قهوة بيضاوية بسطح بيج، يحملها عمودان أسطوانيان مضلّعان. تصميم ناعم ومعماري لصالون مضيء.",
  },
  "table-basse-travertin-pieds-noirs": {
    fr: "Une table basse ovale au plateau en travertin, posée sur deux piédestaux cannelés noirs. Le contraste entre la pierre claire et le noir lui donne beaucoup de présence.",
    en: "An oval coffee table with a travertine top, on two black fluted pedestals. The contrast between the pale stone and the black gives it real presence.",
    ar: "طاولة قهوة بيضاوية بسطح من الترافرتين، ترتكز على قاعدتين سوداوين مضلّعتين. التباين بين الحجر الفاتح والأسود يمنحها حضورًا قويًا.",
  },
  "table-basse-sculpturale-travertin": {
    fr: "Une table basse sculpturale en travertin, faite de deux plateaux décalés à des hauteurs différentes. Son design architectural en fait une véritable pièce d’art au centre du salon.",
    en: "A sculptural travertine coffee table made of two offset tops at different heights. Its architectural design makes it a true work of art at the heart of the living room.",
    ar: "طاولة قهوة منحوتة من الترافرتين، تتكون من سطحين متداخلين على ارتفاعين مختلفين. تصميمها المعماري يجعل منها تحفة فنية في قلب الصالون.",
  },
  "table-basse-rectangulaire-travertin": {
    fr: "Une table basse rectangulaire en travertin beige naturel, au plateau épais posé sur un socle massif. Une pièce sobre et généreuse, où chaque veine de la pierre est unique.",
    en: "A rectangular coffee table in natural beige travertine, with a thick top on a solid base. A simple, generous piece in which every vein of the stone is unique.",
    ar: "طاولة قهوة مستطيلة من الترافرتين البيج الطبيعي، بسطح سميك يرتكز على قاعدة ضخمة. قطعة بسيطة وسخية، كل عرق من عروق حجرها فريد.",
  },
  "table-basse-ovale-travertin-cannele": {
    fr: "Une table basse ovale entièrement en travertin, au plateau porté par deux pieds cylindriques cannelés. La pierre naturelle et les cannelures créent un jeu de lumière tout en douceur.",
    en: "An oval coffee table made entirely of travertine, its top carried by two fluted cylindrical legs. The natural stone and the fluting create a soft play of light.",
    ar: "طاولة قهوة بيضاوية من الترافرتين بالكامل، يحمل سطحها عمودان أسطوانيان مضلّعان. الحجر الطبيعي والتضليع يصنعان لعبة ضوء ناعمة.",
  },
  "table-basse-ovale-travertin-beige": {
    fr: "Une table basse ovale en travertin beige naturel, au plateau posé sur deux pieds en croix. Une ligne douce et architecturale, sublimée par les veines naturelles de la pierre.",
    en: "An oval coffee table in natural beige travertine, its top resting on two cross-shaped legs. A soft, architectural line, enhanced by the natural veining of the stone.",
    ar: "طاولة قهوة بيضاوية من الترافرتين البيج الطبيعي، يرتكز سطحها على قاعدتين متقاطعتين. خط ناعم ومعماري تزيده عروق الحجر الطبيعية جمالًا.",
  },
  "table-basse-bois-verre": {
    fr: "Une table basse au plateau rond en verre, posée sur un piètement sculptural en bois fait d’anneaux entrelacés. La transparence du verre met en valeur la forme du bois.",
    en: "A coffee table with a round glass top on a sculptural wooden base of interlaced rings. The transparent glass shows off the shape of the wood.",
    ar: "طاولة قهوة بسطح دائري من الزجاج، ترتكز على قاعدة خشبية منحوتة من حلقات متشابكة. شفافية الزجاج تُبرز جمال شكل الخشب.",
  },
  "tables-gigognes-marbre-creme": {
    fr: "Un ensemble de trois tables gigognes rondes, aux plateaux en marbre crème et aux pieds cannelés en bois. On les rassemble ou on les disperse selon les besoins du salon.",
    en: "A set of three round nesting tables with cream marble tops and fluted wooden bases. Group them together or spread them around the living room as needed.",
    ar: "مجموعة من ثلاث طاولات متداخلة دائرية، بأسطح من الرخام الكريمي وقواعد خشبية مضلّعة. يمكن جمعها أو توزيعها حسب حاجة الصالون.",
  },
  "tables-gigognes-rondes-noyer": {
    fr: "Deux tables gigognes rondes en noyer naturel, aux plateaux marquetés et aux pieds coniques. Le veinage du noyer apporte chaleur et raffinement au salon.",
    en: "Two round nesting tables in natural walnut, with inlaid tops and conical bases. The rich walnut grain adds warmth and refinement to the living room.",
    ar: "طاولتان متداخلتان دائريتان من خشب الجوز الطبيعي، بأسطح مطعّمة وقواعد مخروطية. عروق الخشب الدافئة تمنح الصالون دفئًا ورقيًا.",
  },
  "tables-gigognes-marbre-noir": {
    fr: "Deux tables gigognes en marbre noir veiné de blanc, aux lignes droites et épurées. Elles s’emboîtent pour gagner de la place et servent de bout de canapé ou de table de chevet.",
    en: "Two nesting tables in black marble veined with white, with straight, clean lines. They slide into each other to save space and work as side tables or bedside tables.",
    ar: "طاولتان متداخلتان من الرخام الأسود بعروق بيضاء، بخطوط مستقيمة وبسيطة. تدخل إحداهما في الأخرى لتوفير المساحة، وتُستعملان كطاولة جانبية أو طاولة بجانب السرير.",
  },
};
