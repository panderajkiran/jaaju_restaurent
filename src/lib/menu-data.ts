import dosa from "@/assets/dish-dosa.jpg";
import biryani from "@/assets/dish-biryani.jpg";
import idli from "@/assets/dish-idli.jpg";
import chicken65 from "@/assets/chicken-65.png";
import muttonFryPiece from "@/assets/mutton-fry-piece.png";
import paneerTikkaBiryani from "@/assets/paneer-tikka-biryani.png";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  ingredients: string[];
  image?: string;
  signature?: boolean;
};

export type MenuCategory = {
  id: string;
  name: string;
  subtitle: string;
  items: MenuItem[];
};

export const FEATURED: MenuItem[] = [
  {
    id: "chicken-65",
    name: "Chicken 65",
    description: "Crispy chicken bites glazed in a bold, smoky-spiced sauce are elevated with delicate tuile shards, and vibrant accompaniments for a refined fine-dining experience.",
    price: 435,
    ingredients: ["Chicken", "Glaze", "Silver"],
    image: chicken65,
    signature: true,
  },
  {
    id: "mutton-fry-piece-biryani",
    name: "Pepper Chicken Bites",
    description: "Tender chicken bites tossed with crisp bell peppers, onions, and aromatic spices, finished with a bold pepper glaze and elegant contemporary plating.",
    price: 565,
    ingredients: ["Chicken", "Peppers", "Onions"],
    image: muttonFryPiece,
    signature: true,
  },
  {
    id: "paneer-tikka-biryani",
    name: "Crispy Onion Rings",
    description: "Golden, panko-crusted onion rings served with a creamy house dip, delivering the perfect balance of crunch and indulgence.",
    price: 415,
    ingredients: ["Onion", "Panko", "Dip"],
    image: paneerTikkaBiryani,
    signature: true,
  },
];

export const MENU: MenuCategory[] = [
  {
    id: "soups",
    name: "Soups",
    subtitle: "Light, warming openers from the Jaaju kitchen.",
    items: [
      { id: "mahakaw-karaakai-vepudu", name: "Mahakaw Karaakai Vepudu", description: "House soup slow-simmered with whole spices.", price: 185, ingredients: ["Spices"] },
      { id: "gadi-mayas-cheru", name: "Gadi Maya's Cheru", description: "Rustic spiced broth, Jaaju style.", price: 185, ingredients: ["Spices"] },
      { id: "mutton-munakkai-soup", name: "Mutton Munakkai Soup", description: "Drumstick and mutton broth — peppery and clear.", price: 275, ingredients: ["Mutton", "Drumstick", "Pepper"] },
      { id: "paya", name: "Paya", description: "Slow-cooked trotter soup — the Hyderabadi classic.", price: 275, ingredients: ["Trotters", "Spices"] },
      { id: "manchow", name: "Manchow (Veg / Chicken)", description: "Indo-Chinese pepper soup, finished with crispy noodles.", price: 165, ingredients: ["Veg / Chicken", "Soy", "Pepper"] },
      { id: "hot-n-sour", name: "Hot n Sour (Veg / Chicken)", description: "Tangy, peppery, slow-thickened soup.", price: 165, ingredients: ["Veg / Chicken", "Vinegar", "Pepper"] },
    ],
  },
  {
    id: "salads",
    name: "Salads",
    subtitle: "Crisp, fresh and cooling.",
    items: [
      { id: "green-salad", name: "Green Salad", description: "Crisp garden greens with lemon and onion.", price: 125, ingredients: ["Cucumber", "Tomato", "Onion"] },
    ],
  },
  {
    id: "veg-starters",
    name: "Veg Starters",
    subtitle: "Fired hot, plated fresh — the vegetarian side of Andhra.",
    items: [
      { id: "ulli-lings", name: "Ulli Lings", description: "Onion fritters tossed in a tangy house masala.", price: 315, ingredients: ["Onion", "Spice"] },
      { id: "mokkajonna-karapaku-garelu", name: "Mokkajonna Karapaku Garelu", description: "Sweetcorn vadas crisped with curry leaf.", price: 315, ingredients: ["Corn", "Curry leaf"] },
      { id: "thotakura-liver-fry", name: "Thotakura Liver Fry", description: "Amaranth greens stir-fried Andhra-style.", price: 355, ingredients: ["Amaranth", "Spice"] },
      { id: "baby-corn-karakartu", name: "Baby Corn Karakartu", description: "Baby corn glazed in a fiery red chilli toss.", price: 335, ingredients: ["Baby corn", "Red chilli"] },
      { id: "mushroom-cheese-balls", name: "Mushroom Cheese Balls", description: "Crisp fried mushroom and cheese bites.", price: 335, ingredients: ["Mushroom", "Cheese"] },
      { id: "uttagodugu-jeedipappu-vepudu", name: "Uttagodugu Jeedipappu Vepudu", description: "Cashew fry tossed with curry leaf and chilli.", price: 345, ingredients: ["Cashew", "Curry leaf"] },
      { id: "gut-and-pepper-mushroom", name: "Gut & Pepper Mushroom", description: "Mushrooms tossed in cracked black pepper and ghee.", price: 345, ingredients: ["Mushroom", "Black pepper"] },
      { id: "mothimichi-paneer-vepudu", name: "Mothimichi Paneer Vepudu", description: "Paneer cubes glazed in a fenugreek-pepper masala.", price: 415, ingredients: ["Paneer", "Fenugreek"] },
      { id: "jajamahandravarm-paneer-vepudu", name: "Jajamahandravarm Paneer Vepudu", description: "House signature paneer fry — pounded spices, ghee finish.", price: 415, ingredients: ["Paneer", "Spice"] },
      { id: "nevpy-corn", name: "Nevpy Corn", description: "Crispy corn kernels tossed with chilli and curry leaf.", price: 315, ingredients: ["Corn", "Chilli"] },
      { id: "peri-peri-mozzarella", name: "Peri Peri Mozzarella Cheese Shots", description: "Crumbed mozzarella batons dusted with peri peri.", price: 315, ingredients: ["Mozzarella", "Peri peri"] },
      { id: "mich-cheese-shot", name: "Mich Cheese Shot", description: "Cheese stuffed jalapeño bites, fried golden.", price: 325, ingredients: ["Cheese", "Jalapeño"] },
      { id: "ner-new-fry", name: "Ner New Fry", description: "Crisp house fry with curry leaf and ghee.", price: 365, ingredients: ["Spice", "Ghee"] },
    ],
  },
  {
    id: "non-veg-starters",
    name: "Non-Veg Starters",
    subtitle: "Andhra fire on the plate.",
    items: [
      { id: "guntur-kodi-vepudu", name: "Guntur Kodi (Kodi Vepudu)", description: "Guntur chilli chicken fry — sharp, smoky, glazed.", price: 425, ingredients: ["Chicken", "Guntur chilli"] },
      { id: "uppada-chepa-vepudu", name: "Uppada Chepa Vepudu", description: "Coastal fish fry in red chilli and curry leaf.", price: 435, ingredients: ["Fish", "Red chilli"] },
      { id: "chitti-royyalu-vellulikaram", name: "Chitti Royyalu Vellulikaram", description: "Baby prawns tossed in garlic-chilli masala.", price: 495, ingredients: ["Prawn", "Garlic", "Chilli"] },
      { id: "natukodi-vepudu", name: "Natukodi Vepudu", description: "Country chicken fry — bone-in, deeply spiced.", price: 455, ingredients: ["Country chicken", "Spice"] },
      { id: "tocan-green-kura", name: "Tocan Green Kura", description: "Chicken in a coriander-mint green masala.", price: 425, ingredients: ["Chicken", "Coriander", "Mint"] },
      { id: "mutton-mogan-kura", name: "Mutton Mogan Kura", description: "Slow-cooked mutton in a rich Hyderabadi gravy.", price: 445, ingredients: ["Mutton", "Spice"] },
      { id: "ponta-vegi", name: "Ponta Vegi (Kadai / Meri)", description: "Bone-in chicken seared kadai-style.", price: 445, ingredients: ["Chicken", "Kadai masala"] },
      { id: "coriander-chicken", name: "Coriander Chicken", description: "Chicken in a fresh coriander green masala.", price: 445, ingredients: ["Chicken", "Coriander"] },
      { id: "chicken-drumstick", name: "Chicken Drumstick", description: "Marinated drumsticks, tandoor-charred.", price: 425, ingredients: ["Chicken", "Tandoor masala"] },
      { id: "chicken-65", name: "Chicken 65", description: "Signature Hyderabadi fry — curry leaf, green chilli, yoghurt marinade.", price: 435, ingredients: ["Chicken", "Curry leaf", "Green chilli"], image: dosa },
      { id: "natukoki-vepyalu", name: "Natukoki Vepyalu", description: "Country chicken stir-fry with whole spices.", price: 455, ingredients: ["Country chicken", "Spice"] },
      { id: "miryala-mutton-veyvalu", name: "Miryala Mutton Veyvalu (B/L)", description: "Black pepper mutton fry — boneless or bone-in.", price: 665, ingredients: ["Mutton", "Black pepper"] },
      { id: "vetamamsam-vepudu", name: "Vetamamsam Vepudu (B/L)", description: "Game-style mutton fry — slow, smoky, intense.", price: 565, ingredients: ["Mutton", "Spice"] },
      { id: "uppada-chepa-vepudu-2", name: "Uppada Chepa Vepudu", description: "Coastal fish fry — house style.", price: 435, ingredients: ["Fish", "Chilli"] },
      { id: "chepa-chips", name: "Chepa Chips", description: "Crisp-fried fish strips, lemon and salt.", price: 435, ingredients: ["Fish", "Lemon"] },
      { id: "apollo-fish", name: "Apollo Fish", description: "Boneless fish tossed in a tangy Andhra spice glaze.", price: 435, ingredients: ["Fish", "Andhra masala"] },
      { id: "fish-fingers", name: "Fish Fingers", description: "Crumbed fish fingers, golden fried.", price: 435, ingredients: ["Fish", "Breadcrumb"] },
      { id: "chitti-royyalu-vellulikaram-2", name: "Chitti Royyalu Vellulikaram", description: "Garlic baby prawns — Andhra coastal style.", price: 495, ingredients: ["Prawn", "Garlic"] },
      { id: "loose-prawns", name: "Loose Prawns", description: "Whole prawns in a fiery house masala.", price: 485, ingredients: ["Prawn", "Spice"] },
      { id: "peethala-vepudu", name: "Peethala Vepudu", description: "Crab fry in red chilli and curry leaf.", price: 555, ingredients: ["Crab", "Curry leaf"] },
    ],
  },
  {
    id: "from-the-claypot",
    name: "From the Claypot",
    subtitle: "Tandoor and claypot — slow-charred, smoky finishes.",
    items: [
      { id: "malai-broccoli", name: "Malai Broccoli", description: "Creamy malai-marinated broccoli, tandoor-charred.", price: 395, ingredients: ["Broccoli", "Cream"] },
      { id: "paneer-tikka", name: "Paneer Tikka", description: "Tandoor-charred paneer with onion and pepper.", price: 415, ingredients: ["Paneer", "Tandoor masala"] },
      { id: "tangol-kebab", name: "Tangol Kebab (4 pcs)", description: "Spiced kebabs grilled in the claypot.", price: 445, ingredients: ["Mutton", "Spice"] },
      { id: "karvepaku-kodi-kebab", name: "Karvepaku Kodi Kebab", description: "Curry-leaf chicken kebab, claypot finished.", price: 445, ingredients: ["Chicken", "Curry leaf"] },
      { id: "kothimeera-kodi-kebab", name: "Kothimeera Kodi Kebab", description: "Coriander-marinated chicken kebab.", price: 445, ingredients: ["Chicken", "Coriander"] },
      { id: "pandumirchi-kodi-kebab", name: "Pandumirchi Kodi Kebab", description: "Ripe red chilli chicken kebab — slow charred.", price: 445, ingredients: ["Chicken", "Red chilli"] },
      { id: "murg-malai-kebab", name: "Murg Malai Kebab", description: "Cream and cardamom chicken kebab — soft, smoky.", price: 445, ingredients: ["Chicken", "Cream", "Cardamom"] },
      { id: "tandoori-chicken-half", name: "Tandoori Chicken (Half)", description: "Classic tandoori marinade, charred over coals.", price: 395, ingredients: ["Chicken", "Tandoor masala"] },
      { id: "tandoori-royyalu", name: "Tandoori Royyalu", description: "Tandoor-roasted prawns in a yoghurt masala.", price: 445, ingredients: ["Prawn", "Yoghurt"] },
      { id: "ajwain-fish-tikka", name: "Ajwain Fish Tikka", description: "Carom-marinated fish tikka, tandoor charred.", price: 445, ingredients: ["Fish", "Ajwain"] },
    ],
  },
  {
    id: "veg-gravies",
    name: "Veg Gravies",
    subtitle: "Slow-cooked vegetarian curries.",
    items: [
      { id: "guthivankaya-kura", name: "Guthivankaya Kura", description: "Stuffed brinjal curry in peanut and sesame masala.", price: 355, ingredients: ["Brinjal", "Peanut", "Sesame"] },
      { id: "puttagodugu-jeedipappu-kura", name: "Puttagodugu Jeedipappu Kura", description: "Mushroom and cashew curry in a creamy gravy.", price: 295, ingredients: ["Mushroom", "Cashew"] },
      { id: "pesarapunugula-kura", name: "Pesarapunugula Kura", description: "Moong dal dumplings in a tangy gravy.", price: 285, ingredients: ["Moong", "Tamarind"] },
      { id: "avakai-paneer-kura", name: "Avakai Paneer Kura", description: "Paneer in tangy avakai-pickle gravy.", price: 395, ingredients: ["Paneer", "Avakai"] },
      { id: "panker", name: "Panker (Butter / Kadai / Methi)", description: "Paneer your way — butter, kadai or methi.", price: 395, ingredients: ["Paneer", "Cream"] },
      { id: "tomato-cashew-curry", name: "Tomato Cashew Curry", description: "Velvet tomato-cashew gravy with whole spices.", price: 365, ingredients: ["Tomato", "Cashew"] },
      { id: "mixed-veg-curry", name: "Mixed Veg / Kadai Veg Curry", description: "Garden vegetables in a kadai masala.", price: 365, ingredients: ["Vegetables", "Kadai masala"] },
      { id: "dal-tadka", name: "Dal (Tadka / Fry / Tomato)", description: "Yellow dal finished with ghee tadka.", price: 275, ingredients: ["Dal", "Ghee"] },
    ],
  },
  {
    id: "non-veg-gravies",
    name: "Non-Veg Gravies",
    subtitle: "The Hyderabadi gravy table.",
    items: [
      { id: "kodiguddu-igura", name: "Kodiguddu Igura", description: "Egg curry in a roasted onion-tomato masala.", price: 345, ingredients: ["Egg", "Onion", "Tomato"] },
      { id: "kakinada-kodikura", name: "Kakinada Kodikura", description: "Coastal chicken curry — Kakinada style.", price: 425, ingredients: ["Chicken", "Coconut"] },
      { id: "gongura-kodi-kura", name: "Gongura Kodi Kura", description: "Chicken in tart gongura-leaf gravy.", price: 425, ingredients: ["Chicken", "Gongura"] },
      { id: "chicken-kadai-methi-butter", name: "Chicken (Kadai / Methi / Butter)", description: "Choose your gravy — kadai, methi or butter.", price: 425, ingredients: ["Chicken", "Cream"] },
      { id: "godavari-chepala-pulaso", name: "Godavari Chepala Pulaso", description: "Tangy Godavari-style fish curry.", price: 375, ingredients: ["Fish", "Tamarind"] },
      { id: "tolanyana-yata-mamsam-sura", name: "Tolanyana Yata Mamsam Sura", description: "Slow-cooked mutton in a roasted masala gravy.", price: 549, ingredients: ["Mutton", "Spice"] },
      { id: "mutton-rogan-josh", name: "Mutton Rogan Josh", description: "Kashmiri-spiced mutton in a deep red gravy.", price: 549, ingredients: ["Mutton", "Kashmiri chilli"] },
      { id: "royyala-iguru", name: "Royyala Iguru", description: "Andhra prawn iguru — onion-tomato thick gravy.", price: 465, ingredients: ["Prawn", "Onion", "Tomato"] },
    ],
  },
  {
    id: "pulaos-biryanis",
    name: "Pulaos & Biryanis",
    subtitle: "Dum-cooked the Hyderabadi way — long-grain, saffron-laced.",
    items: [
      { id: "guthivankay-pulao", name: "Guthivankay Pulao", description: "Stuffed brinjal layered pulao with whole spices.", price: 355, ingredients: ["Basmati", "Brinjal"] },
      { id: "gongura-vankay-pulao", name: "Gongura Vankay Pulao", description: "Brinjal and gongura pulao — tart and fragrant.", price: 355, ingredients: ["Basmati", "Brinjal", "Gongura"] },
      { id: "paneer-tikka-biryani", name: "Paneer Tikka Biryani", description: "Smoky tandoor-charred paneer tikka in dum biryani.", price: 415, ingredients: ["Basmati", "Paneer"], image: idli },
      { id: "gongura-paneer-pulao", name: "Gongura Paneer Pulao", description: "Paneer pulao tossed with tart gongura.", price: 415, ingredients: ["Basmati", "Paneer", "Gongura"] },
      { id: "pachimichi-paneer-pulao", name: "Pachimichi Paneer Pulao", description: "Green-chilli paneer pulao — fresh, fragrant.", price: 415, ingredients: ["Basmati", "Paneer", "Green chilli"] },
      { id: "jaaju-spl-veg-pulao", name: "Jaaju Spl Veg Pulao", description: "House special veg pulao with garam masala and ghee.", price: 415, ingredients: ["Basmati", "Vegetables"] },
      { id: "kaju-mushroom-pulao", name: "Kaju Mushroom Pulao", description: "Cashew and mushroom pulao, lightly spiced.", price: 365, ingredients: ["Basmati", "Cashew", "Mushroom"] },
      { id: "thotakura-liver-pulao", name: "Thotakura Liver Pulao", description: "Amaranth-greens pulao with whole spices.", price: 365, ingredients: ["Basmati", "Amaranth"] },
      { id: "egg-roost-pulao", name: "Egg Roost Pulao", description: "Egg masala layered into fragrant pulao.", price: 375, ingredients: ["Basmati", "Egg"] },
      { id: "naatu-kodi-pulao", name: "Naatu Kodi Pulao", description: "Country chicken pulao — deep, rustic flavour.", price: 485, ingredients: ["Basmati", "Country chicken"] },
      { id: "kakinada-kodi-pulao", name: "Kakinada Kodi Pulao", description: "Coastal chicken pulao with coconut and curry leaf.", price: 445, ingredients: ["Basmati", "Chicken", "Coconut"] },
      { id: "konsaaama-kodi-pulao", name: "Konsaaama Kodi Pulao (B/L)", description: "House chicken pulao — boneless or bone-in.", price: 465, ingredients: ["Basmati", "Chicken"] },
      { id: "pachimirchi-kodi-pulao", name: "Pachimirchi Kodi Pulao", description: "Green-chilli chicken pulao — sharp and fragrant.", price: 455, ingredients: ["Basmati", "Chicken", "Green chilli"] },
      { id: "gongura-kodi-pulao", name: "Gongura Kodi Pulao", description: "Chicken pulao with tart gongura.", price: 455, ingredients: ["Basmati", "Chicken", "Gongura"] },
      { id: "ulavacharu-kodi-pulao", name: "Ulavacharu Kodi Pulao", description: "Horse-gram broth chicken pulao — Andhra classic.", price: 455, ingredients: ["Basmati", "Chicken", "Ulavacharu"] },
      { id: "chicken-fry-piece-biryani", name: "Chicken Fry Piece Biryani", description: "Fried chicken pieces dum-cooked with basmati.", price: 455, ingredients: ["Basmati", "Chicken"] },
      { id: "chicken-tikka-biryani", name: "Chicken Tikka Biryani", description: "Tandoor-charred tikka layered into dum biryani.", price: 455, ingredients: ["Basmati", "Chicken", "Tandoor masala"] },
      { id: "gundamma-mutton-pulao", name: "Gundamma Mutton Pulao", description: "House mutton pulao — slow-layered, deeply spiced.", price: 555, ingredients: ["Basmati", "Mutton"] },
      { id: "mutton-fry-piece-biryani", name: "Mutton Fry Piece Biryani", description: "Slow-fried mutton layered with basmati and saffron.", price: 565, ingredients: ["Basmati", "Mutton", "Saffron"], image: biryani },
      { id: "mutton-kheema-pulao", name: "Mutton Kheema Pulao", description: "Minced mutton folded through basmati with mint.", price: 595, ingredients: ["Basmati", "Mutton keema"] },
      { id: "halli-ghosh-biryani", name: "Halli Ghosh Biryani", description: "Country-style mutton biryani — bold and smoky.", price: 645, ingredients: ["Basmati", "Mutton"] },
    ],
  },
  {
    id: "jaaju-combos",
    name: "Jaaju Combos",
    subtitle: "House combos — the Jaaju signature plates.",
    items: [
      { id: "ragi-mudha-kodi-kura", name: "Ragi Mudha Kodi Kura", description: "Finger-millet mudha with country chicken curry.", price: 415, ingredients: ["Ragi", "Chicken"] },
      { id: "godavari-chepola-pulusu", name: "Godavari Chepola Pulusu with Plain Rice", description: "Godavari fish pulusu served with plain rice.", price: 365, ingredients: ["Fish", "Tamarind", "Rice"] },
      { id: "ragara-rice-mutton-dalcho", name: "Ragara Rice with Mutton Dalcho", description: "Spiced rice with Hyderabadi mutton dalcho.", price: 475, ingredients: ["Rice", "Mutton", "Dal"] },
      { id: "pappuchamamann-chicken-fry", name: "Pappuchamamann with Chicken Fry", description: "House dal-rice with chicken fry on the side.", price: 415, ingredients: ["Dal", "Rice", "Chicken"] },
    ],
  },
  {
    id: "flavored-rice",
    name: "Flavored Rice",
    subtitle: "Simple, fragrant rice plates.",
    items: [
      { id: "pallipedi-noyyi-annam", name: "Pallipedi Noyyi Annam", description: "Ghee rice tempered with whole spices.", price: 295, ingredients: ["Rice", "Ghee"] },
      { id: "muddappopd-avakai-annam", name: "Muddappopd Avakai Annam", description: "Avakai pickle rice — sharp and tangy.", price: 295, ingredients: ["Rice", "Avakai"] },
      { id: "pappuchanamam", name: "Pappuchanamam", description: "Dal-rice with ghee — the everyday classic.", price: 295, ingredients: ["Rice", "Dal", "Ghee"] },
      { id: "ragi-mudha", name: "Ragi Mudha (2 pcs)", description: "Two finger-millet mudhas, fresh-pressed.", price: 245, ingredients: ["Ragi"] },
      { id: "curd-rice", name: "Curd Rice", description: "Cooled curd rice with tempered curry leaf.", price: 255, ingredients: ["Rice", "Curd"] },
      { id: "fried-rice", name: "Fried Rice (Veg / Egg / Chicken)", description: "Wok-tossed fried rice, your choice.", price: 295, ingredients: ["Rice", "Veg / Egg / Chicken"] },
      { id: "bandi-style-fried-rice", name: "Bandi Style Fried Rice (Veg / Egg / Chicken)", description: "Street-cart style smoky fried rice.", price: 285, ingredients: ["Rice", "Veg / Egg / Chicken"] },
    ],
  },
  {
    id: "breads",
    name: "Breads",
    subtitle: "Fresh from the tandoor.",
    items: [
      { id: "roti", name: "Roti (Plain / Butter)", description: "Wholewheat roti, plain or buttered.", price: 49, ingredients: ["Wheat"] },
      { id: "naan", name: "Naan (Plain / Butter / Garlic)", description: "Tandoor naan — plain, buttered or garlic.", price: 65, ingredients: ["Flour", "Yoghurt"] },
      { id: "kulcha", name: "Kulcha (Plain / Masala)", description: "Soft kulcha — plain or masala-stuffed.", price: 69, ingredients: ["Flour"] },
      { id: "lachha-paratha", name: "Lachha Paratha / Malabar Paratha", description: "Layered, flaky paratha.", price: 69, ingredients: ["Flour", "Ghee"] },
      { id: "phulka", name: "Phulka (8 pcs)", description: "Soft phulkas, tava-puffed.", price: 79, ingredients: ["Wheat"] },
      { id: "neyyi-chapathi", name: "Neyyi Chapathi", description: "Ghee chapathi — soft and fragrant.", price: 59, ingredients: ["Wheat", "Ghee"] },
    ],
  },
  {
    id: "kids-corner",
    name: "Kids Corner",
    subtitle: "For the little ones at the table.",
    items: [
      { id: "french-fries", name: "French Fries (Plain / Peri Peri)", description: "Crisp golden fries — plain or peri peri.", price: 295, ingredients: ["Potato"] },
      { id: "paneer-kurkure", name: "Paneer Kurkure", description: "Crumbed crispy paneer bites.", price: 415, ingredients: ["Paneer", "Breadcrumb"] },
      { id: "chicken-nuggets", name: "Chicken Nuggets", description: "Golden fried chicken nuggets.", price: 365, ingredients: ["Chicken", "Breadcrumb"] },
      { id: "chicken-popcorn", name: "Chicken Popcorn (Plain / Peri Peri)", description: "Bite-size chicken popcorn — plain or peri peri.", price: 415, ingredients: ["Chicken"] },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    subtitle: "The sweet Hyderabadi finish.",
    items: [
      { id: "jaaju-special-delight", name: "Jaaju Special Delight", description: "Chef's signature dessert of the day.", price: 295, ingredients: ["Cream", "Sugar"] },
      { id: "birds-nest", name: "Birds Nest", description: "Crispy noodle nest with ice cream.", price: 295, ingredients: ["Noodle", "Ice cream"] },
      { id: "bobbattu-coconut-ice-cream", name: "Bobbattu with Coconut Ice Cream", description: "Sweet stuffed flatbread with coconut ice cream.", price: 245, ingredients: ["Jaggery", "Coconut"] },
      { id: "ballam-juram", name: "Ballam Juram", description: "House jaggery-based traditional sweet.", price: 245, ingredients: ["Jaggery"] },
      { id: "fried-ice-cream", name: "Fried Ice Cream", description: "Crumbed and flash-fried ice cream.", price: 250, ingredients: ["Ice cream"] },
      { id: "choice-ice-cream", name: "Choice Ice Cream (Vanilla / Chocolate)", description: "Classic vanilla or chocolate scoop.", price: 250, ingredients: ["Milk", "Sugar"] },
    ],
  },
  {
    id: "accompaniments",
    name: "Accompaniments",
    subtitle: "Drinks and on-the-side.",
    items: [
      { id: "soft-drinks", name: "Soft Drinks", description: "Chilled bottled soft drinks.", price: 69, ingredients: ["Bottled"] },
      { id: "packaged-water", name: "Packaged Water Bottle", description: "1L packaged drinking water.", price: 39, ingredients: ["Water"] },
      { id: "butter-milk", name: "Butter Milk", description: "Chilled spiced buttermilk with curry leaf.", price: 99, ingredients: ["Yoghurt", "Curry leaf"] },
    ],
  },
];