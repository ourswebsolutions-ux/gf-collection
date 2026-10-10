// The GF Collection launch catalogue — women's and girls' dresses only — used by
// prisma/seed-products.mjs. Prices are PKR. Stock is the opening stock per variant
// (a zero marks a size that is sold out, so it shows as unavailable in the store).
//
// Images live in public/images/products/<slug>/<n>.jpg (1000×1250, 4:5): composed from
// Unsplash-licensed photography (free for commercial use) — sources in docs/MEDIA_CREDITS.md.
// Image 1 is the primary (full look); further images are a second shot of the same dress
// where one exists, otherwise a close detail crop of the same photograph.
// Sizes: Women use letter sizes (XS–XXL); Girls use age sizes (2Y–12Y), per dress.
// No product is flagged "best seller": that flag is for products that have actually sold.

const WOMEN_FULL = ["XS", "S", "M", "L", "XL", "XXL"];
const WOMEN_CORE = ["XS", "S", "M", "L", "XL"];
const WOMEN_SML = ["S", "M", "L", "XL"];
const TODDLER = ["2Y", "3Y", "4Y", "5Y", "6Y"];
const LITTLE = ["3Y", "4Y", "5Y", "6Y", "7Y", "8Y"];
const GIRL = ["4Y", "5Y", "6Y", "7Y", "8Y", "9Y", "10Y"];
const BIG = ["6Y", "7Y", "8Y", "9Y", "10Y", "11Y", "12Y"];

/**
 * @typedef {{ color?: string, colorHex?: string, code?: string, sizes?: string[], stock: number | number[] }} Colourway
 * Variant SKUs are `${sku}-${colour code}-${size}`.
 */
export const PRODUCTS = [
  // ── Women · Fancy / Party Wear ─────────────────────────────────────────────
  {
    slug: "silver-sequin-one-shoulder-dress",
    sku: "GF-WP-01",
    category: "women-fancy-party-wear",
    gender: "WOMEN",
    name: "Silver Sequin One-Shoulder Dress",
    shortDescription: "A sculpted one-shoulder mini dress covered in mirror-bright silver sequins, with a dramatic puff shoulder.",
    description:
      "Made for the moment the music starts: a fitted mini dress densely hand-applied with silver sequins that catch every light.\n\nA single structured puff shoulder, a clean asymmetric neckline and a concealed side zip. Fully lined in soft stretch jersey so it feels as good as it looks.\n\nFitted silhouette. Model wears size S. Dry clean only.",
    material: "Sequinned mesh on stretch jersey lining",
    price: "24990",
    featured: true,
    colours: [{ color: "Silver", colorHex: "#C9C9CB", code: "SLV", sizes: WOMEN_CORE, stock: [3, 6, 6, 4, 2] }],
    images: ["Woman in a silver sequin one-shoulder mini dress against a blush backdrop", "Silver sequin one-shoulder dress with puff sleeve, front view"],
    translations: {
      ur: { name: "سلور سیکوئن ون شولڈر ڈریس", shortDescription: "چمکدار سلور سیکوئنز سے سجا، پف شولڈر والا ون شولڈر منی ڈریس۔" },
      hi: { name: "सिल्वर सीक्विन वन-शोल्डर ड्रेस", shortDescription: "चमकदार सिल्वर सीक्विन से सजी, पफ़ शोल्डर वाली वन-शोल्डर मिनी ड्रेस।" },
    },
  },
  {
    slug: "maroon-rosette-tulle-gown",
    sku: "GF-WP-02",
    category: "women-fancy-party-wear",
    gender: "WOMEN",
    name: "Maroon Rosette Tulle Gown",
    shortDescription: "A strapless corset gown with a sweeping sheer tulle skirt scattered with hand-made rosettes.",
    description:
      "A true occasion piece. The boned strapless bodice is embellished with three-dimensional fabric rosettes that cascade down a floor-sweeping, layered tulle skirt.\n\nAn inner corset gives shape and support, the sheer overskirt floats over a short satin underlay, and a concealed back zip with hook closure keeps the line clean.\n\nTrue to size. Professional dry clean only.",
    material: "Polyester tulle and satin; boned corset bodice",
    price: "45990",
    featured: true,
    colours: [{ color: "Maroon", colorHex: "#7A1F2E", code: "MRN", sizes: WOMEN_CORE, stock: [2, 4, 4, 3, 1] }],
    images: ["Woman in a maroon strapless tulle gown with rosette appliqués", "Detail of the rosette-embellished corset bodice"],
    translations: {
      ur: { name: "مرون روزیٹ ٹول گاؤن", shortDescription: "ہاتھ سے بنے گلابوں سے سجا، لمبے ٹول اسکرٹ والا اسٹریپ لیس گاؤن۔" },
      hi: { name: "मैरून रोज़ेट ट्यूल गाउन", shortDescription: "हाथ से बने गुलाबों से सजा, लंबी ट्यूल स्कर्ट वाला स्ट्रैपलेस गाउन।" },
    },
  },
  {
    slug: "burgundy-satin-mermaid-gown",
    sku: "GF-WP-03",
    category: "women-fancy-party-wear",
    gender: "WOMEN",
    name: "Burgundy Satin Mermaid Gown",
    shortDescription: "A sweetheart-neck mermaid gown in liquid satin with a dramatic pooling train.",
    description:
      "Old-Hollywood glamour, cut close through the body and released into a full mermaid flare with a pooling train.\n\nA softly structured sweetheart neckline, internal boning for a smooth line and a long concealed back zip. The heavy satin falls beautifully and photographs richly.\n\nFitted through the hip. If between sizes, choose the larger. Dry clean only.",
    material: "Duchess satin; polyester lining",
    price: "38990",
    salePrice: "32990",
    onSale: true,
    colours: [{ color: "Burgundy", colorHex: "#6D1A2A", code: "BRG", sizes: WOMEN_CORE, stock: [2, 4, 5, 3, 0] }],
    images: ["Woman in a burgundy satin mermaid gown in a stone doorway", "Detail of the burgundy satin sweetheart bodice"],
    translations: {
      ur: { name: "برگنڈی ساٹن مرمیڈ گاؤن", shortDescription: "سویٹ ہارٹ نیک اور لمبی ٹرین والا ساٹن مرمیڈ گاؤن۔" },
      hi: { name: "बरगंडी सैटिन मरमेड गाउन", shortDescription: "स्वीटहार्ट नेक और लंबी ट्रेन वाला सैटिन मरमेड गाउन।" },
    },
  },
  {
    slug: "antique-gold-embellished-ball-gown",
    sku: "GF-WP-04",
    category: "women-fancy-party-wear",
    gender: "WOMEN",
    name: "Antique Gold Embellished Ball Gown",
    shortDescription: "A full-skirted ball gown in antique gold, worked all over with beads and metallic embroidery.",
    description:
      "Designed to make an entrance: a fitted, illusion-neck bodice and a voluminous circle skirt, both covered in antique-gold beadwork and metallic thread embroidery.\n\nSheer illusion sleeves, a corseted waist and a full lining with a soft net petticoat for volume.\n\nTrue to size. Professional dry clean only.",
    material: "Embroidered net with bead and sequin work; satin lining",
    price: "62990",
    featured: true,
    colours: [{ color: "Antique Gold", colorHex: "#9C8550", code: "AGD", sizes: WOMEN_CORE, stock: [1, 3, 3, 2, 1] }],
    images: ["Woman twirling in an antique gold embellished ball gown", "Detail of the beaded antique gold bodice and sleeves"],
    translations: {
      ur: { name: "اینٹیک گولڈ کام دار بال گاؤن", shortDescription: "موتیوں اور دھاتی کڑھائی سے سجا، گھیر دار سنہری بال گاؤن۔" },
      hi: { name: "एंटीक गोल्ड एम्बेलिश्ड बॉल गाउन", shortDescription: "मोतियों और मेटैलिक कढ़ाई से सजा, घेरदार सुनहरा बॉल गाउन।" },
    },
  },
  {
    slug: "black-satin-high-slit-gown",
    sku: "GF-WP-05",
    category: "women-fancy-party-wear",
    gender: "WOMEN",
    name: "Black Satin High-Slit Gown",
    shortDescription: "A minimalist floor-length gown in black satin with a draped neckline and a thigh-high slit.",
    description:
      "Pure, modern evening wear. A softly draped cowl neckline and fine straps lead to a fluid column skirt with a single thigh-high slit.\n\nCut from a weighty satin-back crepe that skims the body, with a lined bodice and an invisible side zip.\n\nTrue to size. Dry clean recommended.",
    material: "Satin-back crepe; bodice lining",
    price: "21990",
    colours: [{ color: "Black", colorHex: "#141414", code: "BLK", sizes: WOMEN_FULL, stock: [3, 6, 7, 5, 3, 2] }],
    images: ["Woman in a black satin gown with a high slit in a white studio", "Detail of the draped black satin neckline"],
    translations: {
      ur: { name: "بلیک ساٹن ہائی سلٹ گاؤن", shortDescription: "ڈریپڈ گلے اور اونچے چاک والا لمبا سیاہ ساٹن گاؤن۔" },
      hi: { name: "ब्लैक सैटिन हाई-स्लिट गाउन", shortDescription: "ड्रेप्ड गले और ऊँचे स्लिट वाला लंबा काला सैटिन गाउन।" },
    },
  },
  {
    slug: "crimson-satin-a-line-gown",
    sku: "GF-WP-06",
    category: "women-fancy-party-wear",
    gender: "WOMEN",
    name: "Crimson Satin A-Line Gown",
    shortDescription: "A crimson satin gown with an embroidered fitted bodice and a full, sweeping A-line skirt.",
    description:
      "Rich crimson satin for weddings, mehndi and festive evenings. The fitted long-sleeve bodice is finished with tonal embroidery and beadwork at the neckline and cuffs.\n\nA defined waist opens into a generous A-line skirt with a soft sweep train. Fully lined, with a concealed back zip.\n\nTrue to size. Dry clean only.",
    material: "Satin with thread and bead embroidery; polyester lining",
    price: "34990",
    colours: [{ color: "Crimson", colorHex: "#A3172B", code: "CRM", sizes: WOMEN_FULL, stock: [2, 4, 5, 4, 3, 1] }],
    images: ["Woman in a crimson satin gown under an open sky", "Detail of the embroidered crimson bodice"],
    translations: {
      ur: { name: "کرمزن ساٹن اے لائن گاؤن", shortDescription: "کڑھائی والی فٹڈ چولی اور گھیر دار اسکرٹ والا سرخ ساٹن گاؤن۔" },
      hi: { name: "क्रिमसन सैटिन ए-लाइन गाउन", shortDescription: "कढ़ाईदार फ़िटेड चोली और घेरदार स्कर्ट वाला लाल सैटिन गाउन।" },
    },
  },
  {
    slug: "red-embroidered-bridal-lehenga",
    sku: "GF-WP-07",
    category: "women-fancy-party-wear",
    gender: "WOMEN",
    name: "Red Embroidered Bridal Lehenga Set",
    shortDescription: "A three-piece bridal lehenga — embroidered blouse, multi-panel lehenga and bordered dupatta.",
    description:
      "Heirloom-worthy bridal wear. The flared lehenga is built from richly embroidered panels in red, rose and gold with zari, mirror and resham work, paired with a fitted embroidered blouse.\n\nA sheer red dupatta with a heavy embroidered border completes the set. The blouse has a back hook closure and generous seam allowance for alterations.\n\nSold as a 3-piece set. Professional dry clean only.",
    material: "Raw silk and net with zari, resham and mirror work",
    price: "89990",
    featured: true,
    colours: [{ color: "Bridal Red", colorHex: "#B0202E", code: "RED", sizes: WOMEN_SML, stock: [1, 2, 2, 1] }],
    images: ["Bride in a red embroidered lehenga set beneath stone arches", "Detail of the embroidered blouse and lehenga panels"],
    translations: {
      ur: { name: "سرخ کڑھائی والا برائیڈل لہنگا سیٹ", shortDescription: "کڑھائی والی چولی، کلیوں والا لہنگا اور بارڈر والا دوپٹہ — تین پیس برائیڈل سیٹ۔" },
      hi: { name: "लाल कढ़ाईदार ब्राइडल लहंगा सेट", shortDescription: "कढ़ाईदार ब्लाउज़, कलीदार लहंगा और बॉर्डर वाला दुपट्टा — तीन-पीस ब्राइडल सेट।" },
    },
  },
  {
    slug: "mustard-maroon-embroidered-lehenga",
    sku: "GF-WP-08",
    category: "women-fancy-party-wear",
    gender: "WOMEN",
    name: "Mustard & Maroon Embroidered Lehenga",
    shortDescription: "A festive mustard lehenga with paisley embroidery, a maroon border and a matching dupatta.",
    description:
      "Made for mehndi and festive celebrations: a full mustard lehenga worked with paisley and floral embroidery in maroon and gold, finished with a deep maroon border.\n\nIncludes a fitted embroidered blouse and a lightweight bordered dupatta. The lehenga has an adjustable drawstring waist with a side zip.\n\nSold as a 3-piece set. Dry clean only.",
    material: "Silk blend with thread, zari and sequin embroidery",
    price: "64990",
    salePrice: "57990",
    onSale: true,
    colours: [{ color: "Mustard", colorHex: "#C9922E", code: "MST", sizes: WOMEN_SML, stock: [1, 3, 3, 2] }],
    images: ["Woman in a mustard and maroon embroidered lehenga", "Detail of the paisley embroidery and maroon border"],
    translations: {
      ur: { name: "سرسوں اور مرون کڑھائی والا لہنگا", shortDescription: "پیزلی کڑھائی، مرون بارڈر اور ہم رنگ دوپٹے والا تہوار کا لہنگا۔" },
      hi: { name: "सरसों और मैरून कढ़ाईदार लहंगा", shortDescription: "पैस्ले कढ़ाई, मैरून बॉर्डर और मैचिंग दुपट्टे वाला त्योहारी लहंगा।" },
    },
  },
  {
    slug: "black-embellished-cocktail-dress",
    sku: "GF-WP-09",
    category: "women-fancy-party-wear",
    gender: "WOMEN",
    name: "Black Embellished Cocktail Dress",
    shortDescription: "A knee-length cocktail dress with a sequinned sheer-yoke bodice and a full satin skirt.",
    description:
      "The little black dress, dressed up. A sequin-embellished bodice with a sheer illusion yoke meets a full, gently gathered satin skirt.\n\nCap sleeves, a fitted waist and a concealed back zip. Lined throughout for comfort and shape.\n\nTrue to size. Dry clean recommended.",
    material: "Sequinned mesh and satin; polyester lining",
    price: "16990",
    colours: [{ color: "Black", colorHex: "#151515", code: "BLK", sizes: WOMEN_FULL, stock: [3, 6, 7, 5, 3, 1] }],
    images: ["Woman in a black embellished cocktail dress beside winter greenery", "Detail of the sequinned illusion-yoke bodice"],
    translations: {
      ur: { name: "بلیک کام دار کاک ٹیل ڈریس", shortDescription: "سیکوئن والی چولی اور گھیر دار ساٹن اسکرٹ کے ساتھ گھٹنوں تک کاک ٹیل ڈریس۔" },
      hi: { name: "ब्लैक एम्बेलिश्ड कॉकटेल ड्रेस", shortDescription: "सीक्विन वाली चोली और घेरदार सैटिन स्कर्ट के साथ घुटने तक की कॉकटेल ड्रेस।" },
    },
  },
  {
    slug: "powder-blue-embroidered-gown",
    sku: "GF-WP-10",
    category: "women-fancy-party-wear",
    gender: "WOMEN",
    name: "Powder Blue Embroidered Gown",
    shortDescription: "A long-sleeve powder blue gown with tonal floral embroidery and a soft flared skirt.",
    description:
      "Soft and romantic for walima, engagements and evening receptions. Tonal floral motifs and pearl detailing are embroidered over a powder blue base from shoulder to hem.\n\nSheer long sleeves, a fitted bodice and a gently flared, floor-length skirt with a short train. Fully lined with a concealed back zip.\n\nTrue to size. Dry clean only.",
    material: "Embroidered net with pearl detailing; satin lining",
    price: "42990",
    colours: [{ color: "Powder Blue", colorHex: "#9DB7CB", code: "PBL", sizes: WOMEN_CORE, stock: [2, 4, 4, 3, 1] }],
    images: ["Woman in a powder blue embroidered gown in an arched doorway", "Detail of the tonal floral embroidery and sheer sleeves"],
    translations: {
      ur: { name: "پاؤڈر بلیو کڑھائی والا گاؤن", shortDescription: "ہم رنگ پھولدار کڑھائی اور ہلکے گھیر والا لمبی آستین کا گاؤن۔" },
      hi: { name: "पाउडर ब्लू कढ़ाईदार गाउन", shortDescription: "टोनल फ़्लोरल कढ़ाई और हल्के घेर वाला लंबी आस्तीन का गाउन।" },
    },
  },
  {
    slug: "navy-beaded-off-shoulder-gown",
    sku: "GF-WP-11",
    category: "women-fancy-party-wear",
    gender: "WOMEN",
    name: "Navy Beaded Off-Shoulder Gown",
    shortDescription: "A royal navy off-shoulder gown with a beaded bodice and a full layered skirt.",
    description:
      "Deep navy with a quiet shimmer. The off-shoulder neckline frames the collarbones, while the fitted bodice is worked with sequins and glass beads.\n\nA full, layered skirt adds movement; an inner corset and silicone grip keep the neckline in place all evening.\n\nTrue to size. Professional dry clean only.",
    material: "Beaded net and organza; satin lining",
    price: "36990",
    colours: [{ color: "Navy", colorHex: "#1F2E6B", code: "NVY", sizes: WOMEN_CORE, stock: [2, 4, 5, 3, 2] }],
    images: ["Woman in a navy beaded off-shoulder gown", "Detail of the beaded navy bodice and off-shoulder neckline"],
    translations: {
      ur: { name: "نیوی بیڈڈ آف شولڈر گاؤن", shortDescription: "موتیوں والی چولی اور گھیر دار اسکرٹ کے ساتھ نیوی آف شولڈر گاؤن۔" },
      hi: { name: "नेवी बीडेड ऑफ़-शोल्डर गाउन", shortDescription: "मोतियों वाली चोली और घेरदार स्कर्ट के साथ नेवी ऑफ़-शोल्डर गाउन।" },
    },
  },

  // ── Women · Casual Dresses ─────────────────────────────────────────────────
  {
    slug: "emerald-chiffon-wrap-maxi",
    sku: "GF-WC-01",
    category: "women-casual",
    gender: "WOMEN",
    name: "Emerald Chiffon Wrap Maxi",
    shortDescription: "A flowing wrap maxi in emerald chiffon with blouson sleeves and a tie waist.",
    description:
      "Effortless movement in a light, airy chiffon. A true wrap front with a self-tie waist, a soft V neckline and full blouson sleeves gathered at the cuff.\n\nThe tiered maxi skirt swirls as you walk, with a half lining for coverage.\n\nRelaxed fit; the wrap adjusts at the waist. Gentle hand wash.",
    material: "100% polyester chiffon; half lining",
    price: "8990",
    featured: true,
    colours: [{ color: "Emerald", colorHex: "#2E7D6B", code: "EMR", sizes: WOMEN_FULL, stock: [4, 7, 8, 6, 4, 2] }],
    images: ["Woman in an emerald chiffon wrap maxi dress on a country path", "Detail of the emerald chiffon wrap bodice and sleeves"],
    translations: {
      ur: { name: "ایمرلڈ شیفون ریپ میکسی", shortDescription: "پھولی آستینوں اور بندھنے والی کمر کے ساتھ زمردی شیفون ریپ میکسی۔" },
      hi: { name: "एमरल्ड शिफ़ॉन रैप मैक्सी", shortDescription: "फूली आस्तीनों और टाई वेस्ट के साथ पन्ना-हरी शिफ़ॉन रैप मैक्सी।" },
    },
  },
  {
    slug: "olive-slip-maxi-dress",
    sku: "GF-WC-02",
    category: "women-casual",
    gender: "WOMEN",
    name: "Olive Slip Maxi Dress",
    shortDescription: "A relaxed V-neck maxi with a gathered waist, in a soft olive linen blend.",
    description:
      "A summer essential in a breathable linen blend. Fine straps, a gentle V neckline and an elasticated, gathered waist give an easy shape.\n\nSide-seam pockets and an ankle-grazing hem make it as practical as it is pretty. Pair with sandals by day or a denim jacket at night.\n\nRelaxed fit. Machine wash cold.",
    material: "55% linen, 45% viscose",
    price: "6490",
    colours: [{ color: "Olive", colorHex: "#B7B04E", code: "OLV", sizes: WOMEN_FULL, stock: [4, 7, 8, 6, 3, 2] }],
    images: ["Woman in an olive slip maxi dress in a sunflower field", "Detail of the olive linen V-neck bodice"],
    translations: {
      ur: { name: "زیتونی سلپ میکسی ڈریس", shortDescription: "نرم زیتونی لینن بلینڈ میں وی نیک اور چنٹ دار کمر والی میکسی۔" },
      hi: { name: "ऑलिव स्लिप मैक्सी ड्रेस", shortDescription: "मुलायम ऑलिव लिनन ब्लेंड में वी-नेक और गैदर्ड वेस्ट वाली मैक्सी।" },
    },
  },
  {
    slug: "chambray-button-front-sundress",
    sku: "GF-WC-03",
    category: "women-casual",
    gender: "WOMEN",
    name: "Chambray Button-Front Sundress",
    shortDescription: "A knee-length cotton chambray sundress with a full button front and a cinched waist.",
    description:
      "Light, washed cotton chambray in a classic button-through shape. Square neckline, fine straps and a smocked back panel for an easy fit.\n\nA softly gathered skirt falls just above the knee, with side pockets.\n\nTrue to size. Machine washable.",
    material: "100% cotton chambray",
    price: "5490",
    salePrice: "4690",
    onSale: true,
    colours: [{ color: "Chambray Blue", colorHex: "#5C8DAE", code: "CHB", sizes: WOMEN_FULL, stock: [4, 8, 8, 6, 3, 0] }],
    images: ["Woman in a chambray button-front sundress among sunflowers", "Detail of the chambray sundress buttons and straps"],
    translations: {
      ur: { name: "شیمبرے بٹن فرنٹ سن ڈریس", shortDescription: "سامنے بٹنوں اور کسی ہوئی کمر والا کاٹن شیمبرے سن ڈریس۔" },
      hi: { name: "शैम्ब्रे बटन-फ़्रंट सनड्रेस", shortDescription: "सामने बटनों और कसी कमर वाली कॉटन शैम्ब्रे सनड्रेस।" },
    },
  },
  {
    slug: "white-tiered-cotton-maxi",
    sku: "GF-WC-04",
    category: "women-casual",
    gender: "WOMEN",
    name: "White Tiered Cotton Maxi",
    shortDescription: "A breezy tiered maxi in crisp white cotton voile with an open back.",
    description:
      "Holiday-ready in lightweight cotton voile. A fitted halter-style bodice with an open back flows into three softly gathered tiers.\n\nLined to the hip for coverage, with a concealed side zip. Wear it with flats for the beach or sandals for brunch.\n\nTrue to size. Machine wash cold.",
    material: "100% cotton voile; partial lining",
    price: "7490",
    colours: [{ color: "White", colorHex: "#F7F5F0", code: "WHT", sizes: WOMEN_FULL, stock: [4, 7, 8, 6, 4, 2] }],
    images: ["Woman in a white tiered cotton maxi against a coral wall", "Detail of the open-back white cotton bodice"],
    translations: {
      ur: { name: "سفید ٹئیرڈ کاٹن میکسی", shortDescription: "کھلی پشت والی ہلکی سفید کاٹن وائل کی ٹئیرڈ میکسی۔" },
      hi: { name: "व्हाइट टियर्ड कॉटन मैक्सी", shortDescription: "खुली पीठ वाली हल्की सफ़ेद कॉटन वॉयल की टियर्ड मैक्सी।" },
    },
  },
  {
    slug: "black-floral-maxi-dress",
    sku: "GF-WC-05",
    category: "women-casual",
    gender: "WOMEN",
    name: "Black Floral Maxi Dress",
    shortDescription: "A sleeveless maxi in a romantic black floral print with a front split.",
    description:
      "Moody florals on a black ground, cut in a soft, fluid crepe. A round neckline, a fitted bodice and a full-length skirt with a modest front split for ease of movement.\n\nLightweight and crease-resistant — a reliable choice for travel.\n\nTrue to size. Machine wash cold.",
    material: "100% viscose crepe",
    price: "6990",
    colours: [{ color: "Black Floral", colorHex: "#1E1B1C", code: "BFL", sizes: WOMEN_FULL, stock: [3, 6, 7, 5, 3, 2] }],
    images: ["Woman in a black floral maxi dress on a seaside rock", "Detail of the black floral print"],
    translations: {
      ur: { name: "بلیک فلورل میکسی ڈریس", shortDescription: "سیاہ پس منظر پر پھولدار پرنٹ والی بغیر آستین کی میکسی۔" },
      hi: { name: "ब्लैक फ़्लोरल मैक्सी ड्रेस", shortDescription: "काली पृष्ठभूमि पर फूलों वाले प्रिंट की बिना आस्तीन की मैक्सी।" },
    },
  },
  {
    slug: "tropical-print-off-shoulder-dress",
    sku: "GF-WC-06",
    category: "women-casual",
    gender: "WOMEN",
    name: "Tropical Print Off-Shoulder Dress",
    shortDescription: "A bold tropical-print midi with an elasticated off-shoulder neckline.",
    description:
      "A statement print of oversized tropical leaves in coral, navy and sage. The elasticated off-shoulder neckline can also be worn on the shoulder.\n\nA relaxed body and a midi hem keep it easy to wear from the market to dinner.\n\nRelaxed fit. Machine wash cold.",
    material: "100% cotton poplin",
    price: "5990",
    colours: [{ color: "Navy Tropical", colorHex: "#22355E", code: "NTP", sizes: WOMEN_FULL, stock: [3, 6, 7, 5, 3, 2] }],
    images: ["Woman in a tropical print off-shoulder dress", "Detail of the tropical leaf print"],
    translations: {
      ur: { name: "ٹراپیکل پرنٹ آف شولڈر ڈریس", shortDescription: "لچکدار آف شولڈر گلے والا نمایاں ٹراپیکل پرنٹ مڈی ڈریس۔" },
      hi: { name: "ट्रॉपिकल प्रिंट ऑफ़-शोल्डर ड्रेस", shortDescription: "इलास्टिक ऑफ़-शोल्डर गले वाली बोल्ड ट्रॉपिकल प्रिंट मिडी ड्रेस।" },
    },
  },
  {
    slug: "grass-green-tiered-maxi",
    sku: "GF-WC-07",
    category: "women-casual",
    gender: "WOMEN",
    name: "Grass Green Tiered Maxi",
    shortDescription: "A V-neck tiered maxi in fresh green cotton with balloon sleeves and lace trims.",
    description:
      "A cheerful everyday maxi in soft cotton. A button-front V neckline, three-quarter balloon sleeves and tiers edged with delicate lace insertion.\n\nThe relaxed shape skims rather than clings — easy for long, warm days.\n\nRelaxed fit. Machine washable.",
    material: "100% cotton with cotton lace trims",
    price: "6990",
    colours: [{ color: "Grass Green", colorHex: "#5FAE5B", code: "GRN", sizes: WOMEN_FULL, stock: [4, 6, 7, 5, 3, 2] }],
    images: ["Woman in a grass green tiered maxi dress in a studio", "Detail of the green maxi lace-trimmed tiers"],
    translations: {
      ur: { name: "گراس گرین ٹئیرڈ میکسی", shortDescription: "بیلون آستینوں اور لیس والی ہری کاٹن کی ٹئیرڈ میکسی۔" },
      hi: { name: "ग्रास ग्रीन टियर्ड मैक्सी", shortDescription: "बैलून आस्तीन और लेस वाली हरी कॉटन की टियर्ड मैक्सी।" },
    },
  },
  {
    slug: "mint-tiered-long-sleeve-dress",
    sku: "GF-WC-08",
    category: "women-casual",
    gender: "WOMEN",
    name: "Mint Tiered Long-Sleeve Dress",
    shortDescription: "A modest, flowing tiered dress in mint floral cotton with long sleeves.",
    description:
      "A soft mint ground with a tiny floral print, in a breathable cotton lawn. A notched neckline, long sleeves and a relaxed, tiered body to the ankle.\n\nModest, comfortable and easy to layer — a natural choice for Eid mornings and family visits.\n\nRelaxed fit. Machine wash cold.",
    material: "100% cotton lawn",
    price: "6490",
    colours: [{ color: "Mint", colorHex: "#BFD8CF", code: "MNT", sizes: WOMEN_FULL, stock: [4, 7, 8, 6, 4, 2] }],
    images: ["Woman in a mint tiered long-sleeve dress in a doorway", "Detail of the mint floral cotton lawn"],
    translations: {
      ur: { name: "منٹ ٹئیرڈ لانگ سلیو ڈریس", shortDescription: "لمبی آستینوں والا منٹ پھولدار کاٹن کا ٹئیرڈ ڈریس۔" },
      hi: { name: "मिंट टियर्ड लॉन्ग-स्लीव ड्रेस", shortDescription: "लंबी आस्तीन वाली मिंट फ़्लोरल कॉटन की टियर्ड ड्रेस।" },
    },
  },
  {
    slug: "ivory-crochet-midi-dress",
    sku: "GF-WC-09",
    category: "women-casual",
    gender: "WOMEN",
    name: "Ivory Crochet Midi Dress",
    shortDescription: "A sleeveless crochet-lace midi in ivory cotton, lined for coverage.",
    description:
      "Artisanal texture with an easy shape: an all-over crochet-lace cotton in warm ivory, with a scoop neckline and a straight midi silhouette.\n\nA full slip lining means it can be worn on its own; add a belt to define the waist.\n\nTrue to size. Hand wash cold, dry flat.",
    material: "100% cotton crochet lace; cotton lining",
    price: "7990",
    colours: [{ color: "Ivory", colorHex: "#EFE7D3", code: "IVR", sizes: WOMEN_CORE, stock: [3, 6, 6, 4, 2] }],
    images: ["Woman in an ivory crochet midi dress, studio front view", "Detail of the ivory crochet lace texture"],
    translations: {
      ur: { name: "آئیوری کروشیا مڈی ڈریس", shortDescription: "استر والا، آئیوری کاٹن کروشیا لیس کا بغیر آستین کا مڈی ڈریس۔" },
      hi: { name: "आइवरी क्रोशिया मिडी ड्रेस", shortDescription: "अस्तर वाली, आइवरी कॉटन क्रोशिया लेस की बिना आस्तीन मिडी ड्रेस।" },
    },
  },
  {
    slug: "lavender-off-shoulder-maxi",
    sku: "GF-WC-10",
    category: "women-casual",
    gender: "WOMEN",
    name: "Lavender Off-Shoulder Maxi",
    shortDescription: "A soft jersey maxi in lavender with an off-shoulder ruffle and a column skirt.",
    description:
      "Comfort meets elegance in a fluid stretch jersey. A gathered off-shoulder ruffle frames the neckline, and the column skirt falls straight to the floor.\n\nNo zips or fastenings — it simply pulls on — and it packs without creasing.\n\nTrue to size; stretch fabric. Machine wash cold.",
    material: "95% viscose, 5% elastane jersey",
    price: "5990",
    colours: [{ color: "Lavender", colorHex: "#B9A8D3", code: "LAV", sizes: WOMEN_FULL, stock: [4, 7, 8, 6, 3, 2] }],
    images: ["Woman in a lavender off-shoulder jersey maxi, side view", "Detail of the lavender jersey ruffle neckline"],
    translations: {
      ur: { name: "لیونڈر آف شولڈر میکسی", shortDescription: "آف شولڈر رَفل اور سیدھے اسکرٹ والی نرم جرسی کی لیونڈر میکسی۔" },
      hi: { name: "लैवेंडर ऑफ़-शोल्डर मैक्सी", shortDescription: "ऑफ़-शोल्डर रफ़ल और सीधी स्कर्ट वाली मुलायम जर्सी की लैवेंडर मैक्सी।" },
    },
  },
  {
    slug: "sage-cotton-slip-dress",
    sku: "GF-WC-11",
    category: "women-casual",
    gender: "WOMEN",
    name: "Sage Cotton Slip Dress",
    shortDescription: "A relaxed sage slip dress in washed cotton with a drawstring waist.",
    description:
      "An easy, everyday slip dress in garment-washed cotton with a soft, lived-in feel. Adjustable straps, a straight neckline and an inner drawstring at the waist.\n\nThe midi length and roomy cut make it perfect on its own or layered over a white tee.\n\nRelaxed fit. Machine washable.",
    material: "100% cotton, garment washed",
    price: "4990",
    colours: [{ color: "Sage", colorHex: "#A9BCAF", code: "SGE", sizes: WOMEN_FULL, stock: [5, 8, 9, 7, 4, 2] }],
    images: ["Woman in a sage cotton slip dress, studio front view", "Detail of the sage slip dress drawstring waist"],
    translations: {
      ur: { name: "سیج کاٹن سلپ ڈریس", shortDescription: "ڈوری والی کمر کے ساتھ واشڈ کاٹن کا آرام دہ سیج سلپ ڈریس۔" },
      hi: { name: "सेज कॉटन स्लिप ड्रेस", shortDescription: "ड्रॉस्ट्रिंग कमर वाली वॉश्ड कॉटन की आरामदायक सेज स्लिप ड्रेस।" },
    },
  },

  // ── Girls / Kids · Fancy / Party Wear ──────────────────────────────────────
  {
    slug: "girls-scarlet-ruffle-party-dress",
    sku: "GF-GP-01",
    category: "girls-fancy-party-wear",
    gender: "KIDS",
    name: "Girls' Scarlet Ruffle Party Dress",
    shortDescription: "A twirly scarlet party dress with ruffled bell sleeves and a tiered hem.",
    description:
      "A festive favourite in rich scarlet. Ruffle trims at the yoke, flared bell sleeves and a deep frilled hem that swirls with every spin.\n\nSoft cotton lining keeps it comfortable on sensitive skin, and the back buttons are easy for grown-ups to fasten.\n\nTrue to age. Gentle hand wash.",
    material: "Polyester crepe; 100% cotton lining",
    price: "7490",
    featured: true,
    colours: [{ color: "Scarlet", colorHex: "#C4161C", code: "SCR", sizes: LITTLE, stock: [3, 5, 6, 5, 4, 2] }],
    images: ["Girl in a scarlet ruffled party dress with a floral crown", "Girl twirling in the scarlet party dress among autumn leaves"],
    translations: {
      ur: { name: "بچیوں کا اسکارلیٹ رَفل پارٹی ڈریس", shortDescription: "رَفل والی بیل آستینوں اور تہہ دار گھیر کے ساتھ سرخ پارٹی ڈریس۔" },
      hi: { name: "बच्चियों की स्कारलेट रफ़ल पार्टी ड्रेस", shortDescription: "रफ़ल बेल स्लीव और परतदार घेर वाली लाल पार्टी ड्रेस।" },
    },
  },
  {
    slug: "girls-ivory-tulle-twirl-dress",
    sku: "GF-GP-02",
    category: "girls-fancy-party-wear",
    gender: "KIDS",
    name: "Girls' Ivory Tulle Twirl Dress",
    shortDescription: "A soft ivory party dress with a ruched bodice and layers of twirl-ready tulle.",
    description:
      "Made for flower girls and birthday princesses. A gently ruched bodice with a satin waistband sits over multiple layers of soft tulle that spin out beautifully.\n\nFine straps, a full cotton lining and a back zip with a hook-and-eye. The tulle is soft-finished so it never scratches.\n\nTrue to age. Gentle hand wash.",
    material: "Soft tulle and satin; 100% cotton lining",
    price: "8990",
    featured: true,
    colours: [{ color: "Ivory", colorHex: "#F2EEE6", code: "IVR", sizes: GIRL, stock: [3, 4, 5, 5, 4, 3, 2] }],
    images: [
      "Girl in an ivory tulle twirl dress on a terrace",
      "Girl spinning in the ivory tulle dress",
      "Ivory tulle twirl dress, side view",
      "Ivory tulle dress in motion, back view with hair bow",
    ],
    translations: {
      ur: { name: "بچیوں کا آئیوری ٹول ٹوئرل ڈریس", shortDescription: "چنٹ دار چولی اور گھومنے والے ٹول کی تہوں کے ساتھ آئیوری پارٹی ڈریس۔" },
      hi: { name: "बच्चियों की आइवरी ट्यूल ट्वर्ल ड्रेस", shortDescription: "रूश्ड चोली और घूमने वाली ट्यूल परतों के साथ आइवरी पार्टी ड्रेस।" },
    },
  },
  {
    slug: "girls-ivory-lace-sleeve-tulle-gown",
    sku: "GF-GP-03",
    category: "girls-fancy-party-wear",
    gender: "KIDS",
    name: "Girls' Ivory Lace-Sleeve Tulle Gown",
    shortDescription: "A full-length ivory ball gown with sheer lattice-lace sleeves and a voluminous tulle skirt.",
    description:
      "A gown for the most special occasions — weddings, christenings and Eid. The fitted bodice and sheer lattice-lace sleeves meet a full, multi-layer tulle skirt.\n\nAn inner hoop-free petticoat gives volume without stiffness, and the cotton-lined bodice keeps it comfortable through long celebrations.\n\nTrue to age; floor length on the listed age. Dry clean recommended.",
    material: "Tulle and lace; satin and cotton lining",
    price: "13990",
    colours: [{ color: "Ivory", colorHex: "#F4F1EA", code: "IVR", sizes: BIG, stock: [2, 3, 4, 4, 3, 2, 1] }],
    images: ["Girl in an ivory tulle gown with lace sleeves", "Girl in the ivory lace-sleeve gown, close view"],
    translations: {
      ur: { name: "بچیوں کا آئیوری لیس سلیو ٹول گاؤن", shortDescription: "جالی دار لیس آستینوں اور بھرپور ٹول اسکرٹ والا لمبا آئیوری گاؤن۔" },
      hi: { name: "बच्चियों का आइवरी लेस-स्लीव ट्यूल गाउन", shortDescription: "जालीदार लेस आस्तीन और भरपूर ट्यूल स्कर्ट वाला लंबा आइवरी गाउन।" },
    },
  },
  {
    slug: "girls-blush-puff-sleeve-tulle-dress",
    sku: "GF-GP-04",
    category: "girls-fancy-party-wear",
    gender: "KIDS",
    name: "Girls' Blush Puff-Sleeve Tulle Dress",
    shortDescription: "A soft blush tulle dress with sheer puff sleeves and ruffled detailing, for little ones.",
    description:
      "Sweet and delicate for first birthdays, photo shoots and family celebrations. Sheer puff sleeves, a ruffled bodice and a full tulle skirt in a soft blush shade.\n\nLined in pure cotton with an easy back zip, so it is comfortable for toddlers all day.\n\nTrue to age. Gentle hand wash.",
    material: "Soft tulle; 100% cotton lining",
    price: "6990",
    colours: [{ color: "Blush", colorHex: "#EBD3C6", code: "BLS", sizes: TODDLER, stock: [4, 5, 5, 4, 2] }],
    images: ["Little girl in a blush tulle dress with puff sleeves", "Detail of the blush puff sleeves and ruffled bodice"],
    translations: {
      ur: { name: "بچیوں کا بلش پف سلیو ٹول ڈریس", shortDescription: "باریک پف آستینوں والا ننھی بچیوں کا ہلکا گلابی ٹول ڈریس۔" },
      hi: { name: "बच्चियों की ब्लश पफ़-स्लीव ट्यूल ड्रेस", shortDescription: "पारदर्शी पफ़ स्लीव वाली नन्ही बच्चियों की हल्की गुलाबी ट्यूल ड्रेस।" },
    },
  },
  {
    slug: "girls-midnight-star-tulle-dress",
    sku: "GF-GP-05",
    category: "girls-fancy-party-wear",
    gender: "KIDS",
    name: "Girls' Midnight Star Tulle Dress",
    shortDescription: "A navy long-sleeve party dress with a sparkling star-print ombré tulle skirt.",
    description:
      "A little bit of magic: a navy jersey bodice with a glitter motif and long sleeves, joined to an ombré tulle skirt dusted with silver stars.\n\nComfortable enough for a whole party — the stretch bodice moves with her, and the skirt is lined in soft cotton.\n\nTrue to age. Gentle hand wash, inside out.",
    material: "Cotton-blend jersey bodice; printed glitter tulle skirt; cotton lining",
    price: "6490",
    salePrice: "5490",
    onSale: true,
    colours: [{ color: "Midnight Navy", colorHex: "#26325C", code: "NVY", sizes: LITTLE, stock: [3, 5, 5, 4, 3, 2] }],
    images: ["Girl in a navy star-print tulle dress on a yellow backdrop", "Detail of the ombré star-print tulle skirt"],
    translations: {
      ur: { name: "بچیوں کا مڈنائٹ اسٹار ٹول ڈریس", shortDescription: "چمکتے ستاروں والے اومبرے ٹول اسکرٹ کے ساتھ نیوی پارٹی ڈریس۔" },
      hi: { name: "बच्चियों की मिडनाइट स्टार ट्यूल ड्रेस", shortDescription: "चमकते सितारों वाली ओम्ब्रे ट्यूल स्कर्ट के साथ नेवी पार्टी ड्रेस।" },
    },
  },
  {
    slug: "girls-rose-pink-layered-tulle-gown",
    sku: "GF-GP-06",
    category: "girls-fancy-party-wear",
    gender: "KIDS",
    name: "Girls' Rose Pink Layered Tulle Gown",
    shortDescription: "A rose pink gown with a ruffled bodice and cascading layers of tulle, for weddings and celebrations.",
    description:
      "Romantic layers of rose pink tulle cascade from a softly ruffled bodice to the floor — a dream for flower girls and wedding guests.\n\nA cotton-lined bodice, a satin waistband with a back bow and a concealed zip.\n\nTrue to age. Dry clean recommended.",
    material: "Tulle; satin waistband; cotton lining",
    price: "11990",
    colours: [{ color: "Rose Pink", colorHex: "#E3B7C0", code: "RSP", sizes: GIRL, stock: [2, 3, 4, 4, 3, 2, 1] }],
    images: ["Girl in a rose pink layered tulle gown at a seaside wedding", "Detail of the rose pink ruffled bodice"],
    translations: {
      ur: { name: "بچیوں کا روز پنک لیئرڈ ٹول گاؤن", shortDescription: "رَفل والی چولی اور ٹول کی تہوں کے ساتھ گلابی گاؤن۔" },
      hi: { name: "बच्चियों का रोज़ पिंक लेयर्ड ट्यूल गाउन", shortDescription: "रफ़ल चोली और ट्यूल की परतों वाला गुलाबी गाउन।" },
    },
  },
  {
    slug: "girls-pink-ruffle-birthday-dress",
    sku: "GF-GP-07",
    category: "girls-fancy-party-wear",
    gender: "KIDS",
    name: "Girls' Pink Ruffle Birthday Dress",
    shortDescription: "A candy-pink party dress with a ruffled bodice and a full tulle skirt, sized for toddlers.",
    description:
      "Made for cake, candles and balloons. A ruffled, flower-trimmed bodice and a puffed tulle skirt in candy pink.\n\nPure cotton lining, soft elastic at the back for an easy fit and a quick zip — perfect for little ones.\n\nTrue to age. Gentle hand wash.",
    material: "Tulle and chiffon; 100% cotton lining",
    price: "5990",
    colours: [{ color: "Candy Pink", colorHex: "#F2C6CF", code: "PNK", sizes: TODDLER, stock: [4, 5, 5, 4, 0] }],
    images: ["Little girl in a pink ruffle party dress with birthday balloons", "Detail of the pink ruffled birthday dress"],
    translations: {
      ur: { name: "بچیوں کا پنک رَفل برتھ ڈے ڈریس", shortDescription: "ننھی بچیوں کے لیے رَفل والی چولی اور ٹول اسکرٹ کا گلابی ڈریس۔" },
      hi: { name: "बच्चियों की पिंक रफ़ल बर्थडे ड्रेस", shortDescription: "नन्ही बच्चियों के लिए रफ़ल चोली और ट्यूल स्कर्ट वाली गुलाबी ड्रेस।" },
    },
  },
  {
    slug: "girls-powder-blue-jacquard-dress",
    sku: "GF-GP-08",
    category: "girls-fancy-party-wear",
    gender: "KIDS",
    name: "Girls' Powder Blue Jacquard Dress",
    shortDescription: "A structured powder blue jacquard party dress with flutter sleeves and a full skirt.",
    description:
      "Elegant and a little grown-up: a lustrous floral jacquard in powder blue, with flutter sleeves, a fitted bodice and a full, petticoat-lifted skirt.\n\nA silver-thread sheen catches the light at evening events. Lined in cotton with a back zip.\n\nTrue to age. Dry clean recommended.",
    material: "Polyester jacquard; cotton lining; net petticoat",
    price: "8490",
    colours: [{ color: "Powder Blue", colorHex: "#AFC3CF", code: "PBL", sizes: GIRL, stock: [3, 4, 5, 4, 4, 2, 1] }],
    images: ["Girl in a powder blue jacquard party dress", "Detail of the powder blue jacquard and flutter sleeves"],
    translations: {
      ur: { name: "بچیوں کا پاؤڈر بلیو جیکارڈ ڈریس", shortDescription: "فلٹر آستینوں اور گھیر دار اسکرٹ والا پاؤڈر بلیو جیکارڈ پارٹی ڈریس۔" },
      hi: { name: "बच्चियों की पाउडर ब्लू जैकार्ड ड्रेस", shortDescription: "फ़्लटर स्लीव और घेरदार स्कर्ट वाली पाउडर ब्लू जैकार्ड पार्टी ड्रेस।" },
    },
  },
  {
    slug: "girls-aqua-tulle-princess-dress",
    sku: "GF-GP-09",
    category: "girls-fancy-party-wear",
    gender: "KIDS",
    name: "Girls' Aqua Tulle Princess Dress",
    shortDescription: "An aqua princess dress with puff sleeves, a floral waist trim and a gold-edged tulle skirt.",
    description:
      "A fairytale dress in soft aqua. Puffed short sleeves, a fitted bodice with a hand-applied floral waist trim, and layers of tulle finished with a glittering gold lace hem.\n\nA cotton-lined bodice and a soft net petticoat give it a full, princess silhouette.\n\nTrue to age. Dry clean recommended.",
    material: "Tulle with metallic lace trim; cotton lining",
    price: "10990",
    colours: [{ color: "Aqua", colorHex: "#A9DCE0", code: "AQA", sizes: LITTLE, stock: [2, 3, 4, 4, 3, 2] }],
    images: ["Aqua tulle princess dress with puff sleeves and gold lace hem", "Detail of the floral waist trim and gold-edged tulle"],
    translations: {
      ur: { name: "بچیوں کا ایکوا ٹول پرنسس ڈریس", shortDescription: "پف آستینوں اور سنہری کنارے والے ٹول اسکرٹ کے ساتھ ایکوا پرنسس ڈریس۔" },
      hi: { name: "बच्चियों की एक्वा ट्यूल प्रिंसेस ड्रेस", shortDescription: "पफ़ स्लीव और सुनहरे किनारे वाली ट्यूल स्कर्ट की एक्वा प्रिंसेस ड्रेस।" },
    },
  },
  {
    slug: "girls-lilac-satin-flower-girl-dress",
    sku: "GF-GP-10",
    category: "girls-fancy-party-wear",
    gender: "KIDS",
    name: "Girls' Lilac Satin Flower-Girl Dress",
    shortDescription: "A lilac satin flower-girl dress with an embroidered lace bodice.",
    description:
      "Classic and gentle: a lavender-lilac satin skirt with a soft sheen, gathered from an ivory lace bodice embroidered with tiny flowers.\n\nSleeveless with a round neckline and a back zip; the satin skirt is lined with net for a little lift.\n\nTrue to age. Gentle hand wash.",
    material: "Satin and embroidered lace; cotton lining",
    price: "7990",
    colours: [{ color: "Lilac", colorHex: "#BBB1CF", code: "LLC", sizes: TODDLER, stock: [3, 4, 5, 4, 3] }],
    images: ["Little girl in a lilac satin flower-girl dress with a floral crown", "Detail of the embroidered lace bodice"],
    translations: {
      ur: { name: "بچیوں کا لائلک ساٹن فلاور گرل ڈریس", shortDescription: "کڑھائی والی لیس چولی کے ساتھ لائلک ساٹن فلاور گرل ڈریس۔" },
      hi: { name: "बच्चियों की लाइलैक सैटिन फ़्लावर-गर्ल ड्रेस", shortDescription: "कढ़ाईदार लेस चोली के साथ लाइलैक सैटिन फ़्लावर-गर्ल ड्रेस।" },
    },
  },

  // ── Girls / Kids · Casual Dresses ──────────────────────────────────────────
  {
    slug: "girls-white-ruffle-off-shoulder-dress",
    sku: "GF-GC-01",
    category: "girls-casual",
    gender: "KIDS",
    name: "Girls' White Ruffle Off-Shoulder Dress",
    shortDescription: "A white cotton dress with a striped ruffle off-shoulder neckline.",
    description:
      "Summer-ready in crisp cotton: a tiered ruffle neckline with a navy stripe trim sits off (or on) the shoulders, over a straight, easy dress.\n\nSoft elastic at the neckline keeps it comfortable for running around.\n\nRelaxed fit. Machine washable.",
    material: "100% cotton",
    price: "3990",
    colours: [{ color: "White", colorHex: "#F5F4F0", code: "WHT", sizes: BIG, stock: [4, 5, 6, 6, 5, 3, 2] }],
    images: ["Girl in a white ruffle off-shoulder dress among tall grass", "Detail of the striped ruffle neckline"],
    translations: {
      ur: { name: "بچیوں کا سفید رَفل آف شولڈر ڈریس", shortDescription: "دھاری دار رَفل والے آف شولڈر گلے کا سفید کاٹن ڈریس۔" },
      hi: { name: "बच्चियों की व्हाइट रफ़ल ऑफ़-शोल्डर ड्रेस", shortDescription: "धारीदार रफ़ल वाले ऑफ़-शोल्डर गले की सफ़ेद कॉटन ड्रेस।" },
    },
  },
  {
    slug: "girls-coral-floral-cotton-dress",
    sku: "GF-GC-02",
    category: "girls-casual",
    gender: "KIDS",
    name: "Girls' Coral Floral Cotton Dress",
    shortDescription: "A short-sleeve coral cotton dress with a soft floral print and tie detail.",
    description:
      "A cheerful everyday dress in breathable cotton. A coral ground with a soft floral print, short sleeves and a straight, comfortable body.\n\nPairs with leggings for cooler days. Colourfast and easy to wash.\n\nRelaxed fit. Machine washable.",
    material: "100% cotton",
    price: "3490",
    colours: [{ color: "Coral", colorHex: "#E86F64", code: "CRL", sizes: GIRL, stock: [5, 6, 6, 6, 5, 4, 2] }],
    images: ["Girl in a coral floral cotton dress reaching for flowers", "Detail of the coral floral print"],
    translations: {
      ur: { name: "بچیوں کا کورل فلورل کاٹن ڈریس", shortDescription: "ہلکے پھولدار پرنٹ والا آدھی آستین کا مرجانی کاٹن ڈریس۔" },
      hi: { name: "बच्चियों की कोरल फ़्लोरल कॉटन ड्रेस", shortDescription: "हल्के फूलों वाले प्रिंट की आधी आस्तीन वाली कोरल कॉटन ड्रेस।" },
    },
  },
  {
    slug: "girls-teal-print-fringe-sundress",
    sku: "GF-GC-03",
    category: "girls-casual",
    gender: "KIDS",
    name: "Girls' Teal Print Fringe Sundress",
    shortDescription: "A playful printed sundress in teal and coral with a fringed hem, for toddlers.",
    description:
      "Bright, happy and easy: a geometric print in teal, coral and cream, cut into a sleeveless sundress with a smocked waist and a fun fringed hem.\n\nSoft cotton keeps little ones cool in the heat.\n\nTrue to age. Machine washable.",
    material: "100% cotton",
    price: "2990",
    salePrice: "2490",
    onSale: true,
    colours: [{ color: "Teal Print", colorHex: "#2F8A8C", code: "TLP", sizes: TODDLER, stock: [5, 6, 6, 5, 3] }],
    images: ["Toddler girl in a teal print fringe sundress on the grass", "Detail of the teal geometric print"],
    translations: {
      ur: { name: "بچیوں کا ٹیل پرنٹ فرنج سن ڈریس", shortDescription: "جھالر والے گھیر کے ساتھ ننھی بچیوں کا ٹیل اور مرجانی پرنٹ سن ڈریس۔" },
      hi: { name: "बच्चियों की टील प्रिंट फ़्रिंज सनड्रेस", shortDescription: "झालर वाले घेर के साथ नन्ही बच्चियों की टील और कोरल प्रिंट सनड्रेस।" },
    },
  },
  {
    slug: "girls-white-cotton-swing-dress",
    sku: "GF-GC-04",
    category: "girls-casual",
    gender: "KIDS",
    name: "Girls' White Cotton Swing Dress",
    shortDescription: "A flowing white cotton swing dress with flutter sleeves and a long skirt.",
    description:
      "Light as a feather: a soft white cotton dress with flutter sleeves and a long, swinging skirt that floats as she runs.\n\nPerfect for garden days and family gatherings — dress it up with a hair bow or keep it simple.\n\nRelaxed fit. Machine washable.",
    material: "100% cotton voile; cotton lining",
    price: "4490",
    colours: [{ color: "White", colorHex: "#F8F7F3", code: "WHT", sizes: LITTLE, stock: [4, 5, 5, 5, 4, 3] }],
    images: ["Girl in a white cotton swing dress among flower petals", "Detail of the white cotton flutter sleeves"],
    translations: {
      ur: { name: "بچیوں کا سفید کاٹن سوئنگ ڈریس", shortDescription: "فلٹر آستینوں اور لمبے گھیر والا سفید کاٹن ڈریس۔" },
      hi: { name: "बच्चियों की व्हाइट कॉटन स्विंग ड्रेस", shortDescription: "फ़्लटर स्लीव और लंबे घेर वाली सफ़ेद कॉटन ड्रेस।" },
    },
  },
  {
    slug: "girls-mint-chevron-sundress",
    sku: "GF-GC-05",
    category: "girls-casual",
    gender: "KIDS",
    name: "Girls' Mint Chevron Sundress",
    shortDescription: "A mint sundress with a chevron-knit bodice and a soft A-line skirt.",
    description:
      "A sweet summer sundress: a fitted bodice knitted in a teal-and-white chevron pattern, joined to a soft mint A-line skirt.\n\nWide straps stay put, and the cotton jersey skirt is gentle on the skin.\n\nTrue to age. Machine wash cold.",
    material: "Cotton knit bodice; cotton jersey skirt",
    price: "3290",
    colours: [{ color: "Mint", colorHex: "#CFE7DE", code: "MNT", sizes: TODDLER, stock: [4, 6, 6, 5, 3] }],
    images: ["Girl in a mint chevron sundress in warm evening light", "Detail of the chevron-knit bodice"],
    translations: {
      ur: { name: "بچیوں کا منٹ شیورون سن ڈریس", shortDescription: "شیورون نِٹ چولی اور نرم اے لائن اسکرٹ والا منٹ سن ڈریس۔" },
      hi: { name: "बच्चियों की मिंट शेवरॉन सनड्रेस", shortDescription: "शेवरॉन निट चोली और मुलायम ए-लाइन स्कर्ट वाली मिंट सनड्रेस।" },
    },
  },
  {
    slug: "girls-sunshine-yellow-sundress",
    sku: "GF-GC-06",
    category: "girls-casual",
    gender: "KIDS",
    name: "Girls' Sunshine Yellow Sundress",
    shortDescription: "A bright yellow cotton sundress with a button placket and a twirly A-line skirt.",
    description:
      "Pure sunshine: a cotton sundress with a decorative button placket, a square neckline and a full A-line skirt.\n\nBreathable, colourfast and easy to wash — made for long summer days.\n\nTrue to age. Machine washable.",
    material: "100% cotton",
    price: "3290",
    colours: [{ color: "Sunshine Yellow", colorHex: "#F2B02A", code: "YLW", sizes: TODDLER, stock: [5, 6, 6, 5, 4] }],
    images: ["Girl in a sunshine yellow sundress against a white backdrop", "Detail of the yellow sundress button placket"],
    translations: {
      ur: { name: "بچیوں کا سن شائن یلو سن ڈریس", shortDescription: "بٹن پٹی اور گھیر دار اے لائن اسکرٹ والا روشن پیلا کاٹن سن ڈریس۔" },
      hi: { name: "बच्चियों की सनशाइन येलो सनड्रेस", shortDescription: "बटन प्लैकेट और घेरदार ए-लाइन स्कर्ट वाली चमकीली पीली कॉटन सनड्रेस।" },
    },
  },
  {
    slug: "girls-tangerine-tutu-dress",
    sku: "GF-GC-07",
    category: "girls-casual",
    gender: "KIDS",
    name: "Girls' White & Tangerine Tutu Dress",
    shortDescription: "A playful dress with a soft white cotton top, ruffle sleeves and a tangerine tulle tutu.",
    description:
      "Play-ready with a touch of fun: a soft cotton top with ruffled sleeves and floral appliqués, attached to a fluffy tangerine tutu skirt.\n\nAn elasticated waist and cotton-lined skirt make it easy to wear all day.\n\nTrue to age. Gentle machine wash.",
    material: "Cotton jersey top; tulle skirt with cotton lining",
    price: "3990",
    colours: [{ color: "White / Tangerine", colorHex: "#F5A04A", code: "WTG", sizes: TODDLER, stock: [4, 5, 5, 4, 2] }],
    images: ["Toddler girl in a white and tangerine tutu dress on the grass", "Detail of the ruffle sleeves and tangerine tutu"],
    translations: {
      ur: { name: "بچیوں کا سفید اور نارنجی ٹوٹو ڈریس", shortDescription: "رَفل آستینوں والے کاٹن ٹاپ اور نارنجی ٹول ٹوٹو کے ساتھ ڈریس۔" },
      hi: { name: "बच्चियों की व्हाइट और टेंजरीन टूटू ड्रेस", shortDescription: "रफ़ल स्लीव वाले कॉटन टॉप और नारंगी ट्यूल टूटू वाली ड्रेस।" },
    },
  },
  {
    slug: "girls-green-leaf-print-ruffle-dress",
    sku: "GF-GC-08",
    category: "girls-casual",
    gender: "KIDS",
    name: "Girls' Green Leaf Print Ruffle Dress",
    shortDescription: "A leafy green print dress with ruffled shoulders and a tiered skirt.",
    description:
      "Inspired by the garden: a lush leaf print in greens on a soft cotton, with ruffled shoulder straps and a gently tiered skirt.\n\nLight, cool and easy to move in — a summer staple.\n\nTrue to age. Machine washable.",
    material: "100% cotton",
    price: "3490",
    colours: [{ color: "Leaf Green", colorHex: "#3E6B4A", code: "LGR", sizes: TODDLER, stock: [4, 5, 6, 5, 3] }],
    images: ["Little girl in a green leaf print ruffle dress", "Detail of the green leaf print and ruffled shoulders"],
    translations: {
      ur: { name: "بچیوں کا گرین لیف پرنٹ رَفل ڈریس", shortDescription: "رَفل والے کندھوں اور تہہ دار اسکرٹ کے ساتھ ہرے پتوں کا پرنٹ ڈریس۔" },
      hi: { name: "बच्चियों की ग्रीन लीफ़ प्रिंट रफ़ल ड्रेस", shortDescription: "रफ़ल कंधों और परतदार स्कर्ट वाली हरी पत्तियों की प्रिंट ड्रेस।" },
    },
  },
];

export const CATEGORY_TREE = {
  women: { name: "Women", children: { "women-fancy-party-wear": "Fancy / Party Wear", "women-casual": "Casual Dresses" } },
  girls: { name: "Girls / Kids", children: { "girls-fancy-party-wear": "Girls' Fancy / Party Wear", "girls-casual": "Girls' Casual Dresses" } },
};

/**
 * Products created by earlier versions of this seed that do not belong in a Women + Girls
 * dress store (tops, trousers, coats, boys' and unisex kidswear). The seeder ARCHIVES them
 * (hidden from the store, kept for order history) — it never deletes.
 */
export const RETIRED_SLUGS = [
  "satin-slip-dress", "belted-cotton-trench-coat", "relaxed-wide-leg-trousers", "ribbed-knit-top", "oversized-poplin-shirt",
  "kids-fleece-hoodie", "kids-short-sleeve-shirt", "kids-printed-cotton-tee", "kids-relaxed-joggers", "kids-colour-block-tracksuit",
];
