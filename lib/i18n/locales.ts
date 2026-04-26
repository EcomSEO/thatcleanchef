/**
 * Locale registry for the cookbook. Twelve locales — the cookbook is
 * sold as an "international edition" the way Salt Fat Acid Heat or
 * Ottolenghi titles are. The dictionary covers the chrome (header,
 * footer, the front-matter copy on the home page). Recipe bodies stay
 * in English for now and are flagged in the locale spec as deferred.
 *
 * Voice is cookbook: warm, instructive, patient. Never marketing.
 */

export type LocaleCode =
  | "en"
  | "es"
  | "fr"
  | "de"
  | "it"
  | "pt"
  | "nl"
  | "sv"
  | "pl"
  | "ja"
  | "zh"
  | "ar";

export const LOCALES: Array<{
  code: LocaleCode;
  label: string;
  edition: string;
  region: string;
  hreflang: string;
  dir?: "rtl" | "ltr";
}> = [
  { code: "en", label: "English",   edition: "First Edition",        region: "International", hreflang: "en" },
  { code: "es", label: "Espa\u00F1ol", edition: "Primera Edici\u00F3n", region: "International", hreflang: "es" },
  { code: "fr", label: "Fran\u00E7ais", edition: "Premi\u00E8re \u00C9dition", region: "International", hreflang: "fr" },
  { code: "de", label: "Deutsch",   edition: "Erste Auflage",        region: "International", hreflang: "de" },
  { code: "it", label: "Italiano",  edition: "Prima Edizione",       region: "Internazionale", hreflang: "it" },
  { code: "pt", label: "Portugu\u00EAs", edition: "Primeira Edi\u00E7\u00E3o", region: "Internacional", hreflang: "pt" },
  { code: "nl", label: "Nederlands",edition: "Eerste Editie",        region: "Internationaal", hreflang: "nl" },
  { code: "sv", label: "Svenska",   edition: "F\u00F6rsta Utg\u00E5van", region: "Internationell", hreflang: "sv" },
  { code: "pl", label: "Polski",    edition: "Wydanie Pierwsze",     region: "Mi\u0119dzynarodowe", hreflang: "pl" },
  { code: "ja", label: "\u65E5\u672C\u8A9E", edition: "\u521D\u7248", region: "\u56FD\u969B\u7248", hreflang: "ja" },
  { code: "zh", label: "\u4E2D\u6587", edition: "\u9996\u7248",       region: "\u56FD\u9645\u7248", hreflang: "zh" },
  { code: "ar", label: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", edition: "\u0627\u0644\u0637\u0628\u0639\u0629\u0020\u0627\u0644\u0623\u0648\u0644\u0649", region: "\u062F\u0648\u0644\u064A\u0629", hreflang: "ar", dir: "rtl" },
];

export type Dict = {
  contents: string;
  ingredients: string;
  recipes: string;
  techniques: string;
  approach: string;
  whatWereTesting: string;
  pipeline: string;
  edition: string;
  frontMatter: string;
  backMatter: string;
  chapter: string;
  // home-page front-matter
  coverTitle: string;
  coverSubtitle: string;
  coverByline: string;
  introHeading: string;
  introBody: string;
  approachHeading: string;
  approachBody: string;
};

export const DICTS: Record<LocaleCode, Dict> = {
  en: {
    contents: "Contents",
    ingredients: "Ingredients",
    recipes: "Recipes",
    techniques: "Techniques",
    approach: "Our Approach",
    whatWereTesting: "What We're Testing",
    pipeline: "The Pipeline",
    edition: "First Edition · 2026",
    frontMatter: "Front Matter",
    backMatter: "Back Matter",
    chapter: "Chapter",
    coverTitle: "thatcleanchef",
    coverSubtitle: "A working cookbook for clean, considered cooking — written in the kitchen, not for it.",
    coverByline: "The ThatCleanChef Kitchen · 2026",
    introHeading: "A note from the kitchen.",
    introBody:
      "This is a cookbook bound the slow way. Every recipe is tested in a home kitchen on home equipment three times before it earns a page. Every ingredient list reads like the shopping list it actually is. Every method is written the way you would talk a friend through it on the phone — patient, in order, without the fanfare.",
    approachHeading: "Our approach.",
    approachBody:
      "Ingredients first. Method second. The list of techniques is short on purpose: salt, fat, acid, heat, and the patience to let one thing finish before starting the next. Read the index. Pick a chapter. Cook a page.",
  },
  es: {
    contents: "\u00CDndice",
    ingredients: "Ingredientes",
    recipes: "Recetas",
    techniques: "T\u00E9cnicas",
    approach: "Nuestro M\u00E9todo",
    whatWereTesting: "Lo que probamos",
    pipeline: "Nuestro Calendario",
    edition: "Primera Edici\u00F3n · 2026",
    frontMatter: "P\u00E1ginas Iniciales",
    backMatter: "P\u00E1ginas Finales",
    chapter: "Cap\u00EDtulo",
    coverTitle: "thatcleanchef",
    coverSubtitle: "Un libro de cocina escrito desde la cocina — recetas honestas, tiempos honestos, ingredientes que ya tienes.",
    coverByline: "La cocina de ThatCleanChef · 2026",
    introHeading: "Una nota desde la cocina.",
    introBody:
      "Este libro est\u00E1 escrito despacio. Cada receta se prueba tres veces en una cocina dom\u00E9stica antes de ganarse su p\u00E1gina. Cada lista de ingredientes se lee como una lista de la compra. Cada m\u00E9todo se cuenta como se contar\u00EDa por tel\u00E9fono: con paciencia, en orden, sin adornos.",
    approachHeading: "Nuestro m\u00E9todo.",
    approachBody:
      "Primero los ingredientes. Despu\u00E9s la t\u00E9cnica. La lista de t\u00E9cnicas es corta a prop\u00F3sito: sal, grasa, \u00E1cido, calor y la paciencia de dejar terminar una cosa antes de empezar la siguiente. Lee el \u00EDndice. Elige un cap\u00EDtulo. Cocina una p\u00E1gina.",
  },
  fr: {
    contents: "Sommaire",
    ingredients: "Ingr\u00E9dients",
    recipes: "Recettes",
    techniques: "Techniques",
    approach: "Notre D\u00E9marche",
    whatWereTesting: "Ce que l'on teste",
    pipeline: "Le Calendrier",
    edition: "Premi\u00E8re \u00C9dition · 2026",
    frontMatter: "Pages Liminaires",
    backMatter: "Pages Finales",
    chapter: "Chapitre",
    coverTitle: "thatcleanchef",
    coverSubtitle: "Un livre de cuisine \u00E9crit en cuisine — recettes \u00E9prouv\u00E9es, temps honn\u00EAtes, ingr\u00E9dients que vous avez.",
    coverByline: "La cuisine de ThatCleanChef · 2026",
    introHeading: "Un mot de la cuisine.",
    introBody:
      "Ce livre est \u00E9crit lentement. Chaque recette est test\u00E9e trois fois dans une cuisine domestique avant d'avoir sa page. Chaque liste d'ingr\u00E9dients se lit comme une vraie liste de courses. Chaque m\u00E9thode est rac contee comme on l'expliquerait au t\u00E9l\u00E9phone : patiemment, dans l'ordre, sans esbroufe.",
    approachHeading: "Notre d\u00E9marche.",
    approachBody:
      "Les ingr\u00E9dients d'abord. La technique ensuite. La liste de techniques est courte par choix : sel, gras, acide, chaleur, et la patience de laisser finir une chose avant d'en commencer une autre. Lisez l'index. Choisissez un chapitre. Cuisinez une page.",
  },
  de: {
    contents: "Inhalt",
    ingredients: "Zutaten",
    recipes: "Rezepte",
    techniques: "Techniken",
    approach: "Unser Vorgehen",
    whatWereTesting: "Was wir testen",
    pipeline: "Der Plan",
    edition: "Erste Auflage · 2026",
    frontMatter: "Vorderer Buchteil",
    backMatter: "Hinterer Buchteil",
    chapter: "Kapitel",
    coverTitle: "thatcleanchef",
    coverSubtitle: "Ein Kochbuch, geschrieben in der K\u00FCche — ehrliche Rezepte, ehrliche Zeiten, Zutaten, die du wirklich hast.",
    coverByline: "Die K\u00FCche von ThatCleanChef · 2026",
    introHeading: "Eine Notiz aus der K\u00FCche.",
    introBody:
      "Dieses Buch entsteht langsam. Jedes Rezept wird dreimal in einer Hausk\u00FCche getestet, bevor es eine Seite verdient. Jede Zutatenliste liest sich wie eine echte Einkaufsliste. Jede Methode ist so aufgeschrieben, wie man sie am Telefon erkl\u00E4ren w\u00FCrde: geduldig, der Reihe nach, ohne Aufhebens.",
    approachHeading: "Unser Vorgehen.",
    approachBody:
      "Zuerst die Zutaten. Dann die Technik. Die Technikenliste ist absichtlich kurz: Salz, Fett, S\u00E4ure, Hitze und die Geduld, eine Sache fertig werden zu lassen, bevor die n\u00E4chste beginnt. Lies das Register. W\u00E4hle ein Kapitel. Koch eine Seite.",
  },
  it: {
    contents: "Indice",
    ingredients: "Ingredienti",
    recipes: "Ricette",
    techniques: "Tecniche",
    approach: "Il Nostro Metodo",
    whatWereTesting: "Cosa stiamo provando",
    pipeline: "Il Calendario",
    edition: "Prima Edizione · 2026",
    frontMatter: "Pagine d'Apertura",
    backMatter: "Pagine Finali",
    chapter: "Capitolo",
    coverTitle: "thatcleanchef",
    coverSubtitle: "Un libro di cucina scritto in cucina — ricette oneste, tempi onesti, ingredienti che hai gi\u00E0.",
    coverByline: "La cucina di ThatCleanChef · 2026",
    introHeading: "Una nota dalla cucina.",
    introBody:
      "Questo libro nasce lentamente. Ogni ricetta viene provata tre volte in una cucina di casa prima di guadagnarsi una pagina. Ogni lista di ingredienti si legge come una vera lista della spesa. Ogni metodo \u00E8 scritto come lo racconteresti al telefono: con pazienza, in ordine, senza fronzoli.",
    approachHeading: "Il nostro metodo.",
    approachBody:
      "Prima gli ingredienti. Poi la tecnica. La lista delle tecniche \u00E8 corta di proposito: sale, grasso, acido, calore e la pazienza di lasciar finire una cosa prima di iniziarne un'altra. Leggi l'indice. Scegli un capitolo. Cucina una pagina.",
  },
  pt: {
    contents: "\u00CDndice",
    ingredients: "Ingredientes",
    recipes: "Receitas",
    techniques: "T\u00E9cnicas",
    approach: "O Nosso M\u00E9todo",
    whatWereTesting: "O que estamos a testar",
    pipeline: "O Calend\u00E1rio",
    edition: "Primeira Edi\u00E7\u00E3o · 2026",
    frontMatter: "P\u00E1ginas Iniciais",
    backMatter: "P\u00E1ginas Finais",
    chapter: "Cap\u00EDtulo",
    coverTitle: "thatcleanchef",
    coverSubtitle: "Um livro de cozinha escrito a partir da cozinha — receitas honestas, tempos honestos, ingredientes que tens.",
    coverByline: "A cozinha do ThatCleanChef · 2026",
    introHeading: "Uma nota da cozinha.",
    introBody:
      "Este livro \u00E9 escrito devagar. Cada receita \u00E9 testada tr\u00EAs vezes numa cozinha caseira antes de merecer uma p\u00E1gina. Cada lista de ingredientes l\u00EA-se como uma verdadeira lista de compras. Cada m\u00E9todo \u00E9 contado como o explicarias ao telefone: com paci\u00EAncia, por ordem, sem alarde.",
    approachHeading: "O nosso m\u00E9todo.",
    approachBody:
      "Primeiro os ingredientes. Depois a t\u00E9cnica. A lista de t\u00E9cnicas \u00E9 curta por op\u00E7\u00E3o: sal, gordura, \u00E1cido, calor e a paci\u00EAncia para deixar uma coisa terminar antes de come\u00E7ar a seguinte. L\u00EA o \u00EDndice. Escolhe um cap\u00EDtulo. Cozinha uma p\u00E1gina.",
  },
  nl: {
    contents: "Inhoud",
    ingredients: "Ingredi\u00EBnten",
    recipes: "Recepten",
    techniques: "Technieken",
    approach: "Onze Aanpak",
    whatWereTesting: "Wat we testen",
    pipeline: "De Planning",
    edition: "Eerste Editie · 2026",
    frontMatter: "Voorwerk",
    backMatter: "Nawerk",
    chapter: "Hoofdstuk",
    coverTitle: "thatcleanchef",
    coverSubtitle: "Een kookboek geschreven vanuit de keuken — eerlijke recepten, eerlijke tijden, ingredi\u00EBnten die je hebt.",
    coverByline: "De keuken van ThatCleanChef · 2026",
    introHeading: "Een notitie uit de keuken.",
    introBody:
      "Dit boek wordt langzaam geschreven. Elk recept wordt drie keer thuis getest voordat het een pagina verdient. Elke ingredi\u00EBntenlijst leest als een echte boodschappenlijst. Elke methode is opgeschreven zoals je het aan de telefoon zou uitleggen: rustig, op volgorde, zonder bombarie.",
    approachHeading: "Onze aanpak.",
    approachBody:
      "Eerst de ingredi\u00EBnten. Daarna de techniek. De lijst met technieken is bewust kort: zout, vet, zuur, hitte en het geduld om \u00E9\u00E9n ding klaar te laten zijn voordat het volgende begint. Lees het register. Kies een hoofdstuk. Kook een pagina.",
  },
  sv: {
    contents: "Inneh\u00E5ll",
    ingredients: "Ingredienser",
    recipes: "Recept",
    techniques: "Tekniker",
    approach: "V\u00E5rt S\u00E4tt",
    whatWereTesting: "Vad vi testar",
    pipeline: "Planen",
    edition: "F\u00F6rsta Utg\u00E5van · 2026",
    frontMatter: "F\u00F6rord och inneh\u00E5ll",
    backMatter: "Register",
    chapter: "Kapitel",
    coverTitle: "thatcleanchef",
    coverSubtitle: "En kokbok skriven fr\u00E5n k\u00F6ket — \u00E4rliga recept, \u00E4rliga tider, r\u00E5varor du har hemma.",
    coverByline: "ThatCleanChefs k\u00F6k · 2026",
    introHeading: "En notis fr\u00E5n k\u00F6ket.",
    introBody:
      "Den h\u00E4r boken skrivs l\u00E5ngsamt. Varje recept testas tre g\u00E5nger i ett hemmak\u00F6k innan det f\u00E5r en sida. Varje ingredienslista l\u00E4ser som en riktig ink\u00F6pslista. Varje metod \u00E4r skriven som man skulle f\u00F6rklara den i telefon: lugnt, i ordning, utan st\u00E5tspr\u00E5k.",
    approachHeading: "V\u00E5rt s\u00E4tt.",
    approachBody:
      "Ingredienserna f\u00F6rst. Tekniken sedan. Listan \u00F6ver tekniker \u00E4r kort med flit: salt, fett, syra, v\u00E4rme och t\u00E5lamodet att l\u00E5ta en sak bli f\u00E4rdig innan n\u00E4sta b\u00F6rjar. L\u00E4s registret. V\u00E4lj ett kapitel. Laga en sida.",
  },
  pl: {
    contents: "Spis tre\u015Bci",
    ingredients: "Sk\u0142adniki",
    recipes: "Przepisy",
    techniques: "Techniki",
    approach: "Nasze podej\u015Bcie",
    whatWereTesting: "Co testujemy",
    pipeline: "Plan wydawniczy",
    edition: "Wydanie Pierwsze · 2026",
    frontMatter: "Strony pocz\u0105tkowe",
    backMatter: "Strony ko\u0144cowe",
    chapter: "Rozdzia\u0142",
    coverTitle: "thatcleanchef",
    coverSubtitle: "Ksi\u0105\u017Cka kucharska pisana z kuchni — uczciwe przepisy, uczciwe czasy, sk\u0142adniki, kt\u00F3re ju\u017C masz.",
    coverByline: "Kuchnia ThatCleanChef · 2026",
    introHeading: "Notatka z kuchni.",
    introBody:
      "Ta ksi\u0105\u017Cka powstaje wolno. Ka\u017Cdy przepis jest testowany trzykrotnie w domowej kuchni, zanim zas\u0142u\u017Cy na stron\u0119. Ka\u017Cda lista sk\u0142adnik\u00F3w czyta si\u0119 jak prawdziwa lista zakup\u00F3w. Ka\u017Cda metoda jest spisana tak, jak by\u015B opowiedzia\u0142 j\u0105 przez telefon \u2014 spokojnie, po kolei, bez popis\u00F3w.",
    approachHeading: "Nasze podej\u015Bcie.",
    approachBody:
      "Najpierw sk\u0142adniki. Potem technika. Lista technik jest celowo kr\u00F3tka: s\u00F3l, t\u0142uszcz, kwas, ciep\u0142o i cierpliwo\u015B\u0107, by sko\u0144czy\u0107 jedno, zanim zacznie si\u0119 nast\u0119pne. Przeczytaj indeks. Wybierz rozdzia\u0142. Ugotuj stron\u0119.",
  },
  ja: {
    contents: "\u76EE\u6B21",
    ingredients: "\u6750\u6599",
    recipes: "\u30EC\u30B7\u30D4",
    techniques: "\u6280\u6CD5",
    approach: "\u308F\u305F\u3057\u305F\u3061\u306E\u8003\u3048\u65B9",
    whatWereTesting: "\u4ECA\u8A66\u3057\u3066\u3044\u308B\u3053\u3068",
    pipeline: "\u4ECA\u5F8C\u306E\u4E88\u5B9A",
    edition: "\u521D\u7248 · 2026",
    frontMatter: "\u524D\u4ED8\u304D",
    backMatter: "\u5DFB\u672B",
    chapter: "\u7AE0",
    coverTitle: "thatcleanchef",
    coverSubtitle: "\u53F0\u6240\u304B\u3089\u66F8\u3044\u305F\u6599\u7406\u672C\u3002\u8AA0\u5B9F\u306A\u30EC\u30B7\u30D4\u3001\u8AA0\u5B9F\u306A\u6642\u9593\u3001\u624B\u5143\u306B\u3042\u308B\u6750\u6599\u3067\u3002",
    coverByline: "\u30B6\u30AF\u30EA\u30FC\u30F3\u30B7\u30A7\u30D5\u306E\u53F0\u6240 · 2026",
    introHeading: "\u53F0\u6240\u304B\u3089\u306E\u4E00\u8A00\u3002",
    introBody:
      "\u3053\u306E\u672C\u306F\u3086\u3063\u304F\u308A\u66F8\u304B\u308C\u3066\u3044\u307E\u3059\u3002\u3069\u306E\u30EC\u30B7\u30D4\u3082\u3001\u4E00\u30DA\u30FC\u30B8\u306B\u8F09\u305B\u308B\u524D\u306B\u3001\u5BB6\u306E\u53F0\u6240\u3067\u4E09\u56DE\u8A66\u3057\u3066\u3044\u307E\u3059\u3002\u6750\u6599\u8868\u306F\u672C\u5F53\u306E\u8CB7\u3044\u7269\u30E1\u30E2\u306E\u3088\u3046\u306B\u8AAD\u3081\u308B\u3082\u306E\u3060\u3051\u3002\u624B\u9806\u306F\u96FB\u8A71\u3067\u8AAC\u660E\u3059\u308B\u3088\u3046\u306B\u3001\u843D\u3061\u7740\u3044\u3066\u3001\u9806\u756A\u3069\u304A\u308A\u3001\u9952\u308A\u305A\u306B\u66F8\u3044\u3066\u3044\u307E\u3059\u3002",
    approachHeading: "\u308F\u305F\u3057\u305F\u3061\u306E\u8003\u3048\u65B9\u3002",
    approachBody:
      "\u307E\u305A\u6750\u6599\u3001\u305D\u3057\u3066\u6280\u6CD5\u3002\u6280\u6CD5\u306E\u30EA\u30B9\u30C8\u306F\u610F\u56F3\u7684\u306B\u77ED\u3081\u3067\u3059\uFF1A\u5869\u3001\u8102\u3001\u9178\u3001\u71B1\u3001\u305D\u3057\u3066\u4E00\u3064\u304C\u7D42\u308F\u308B\u307E\u3067\u6B21\u3092\u59CB\u3081\u306A\u3044\u5FCD\u8010\u3002\u7D22\u5F15\u3092\u8AAD\u3093\u3067\u3001\u7AE0\u3092\u9078\u3093\u3067\u3001\u4E00\u30DA\u30FC\u30B8\u4F5C\u3063\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002",
  },
  zh: {
    contents: "\u76EE\u5F55",
    ingredients: "\u98DF\u6750",
    recipes: "\u98DF\u8C31",
    techniques: "\u6280\u6CD5",
    approach: "\u6211\u4EEC\u7684\u65B9\u6CD5",
    whatWereTesting: "\u6211\u4EEC\u6B63\u5728\u8BD5\u9A8C\u7684",
    pipeline: "\u51FA\u7248\u8BA1\u5212",
    edition: "\u9996\u7248 · 2026",
    frontMatter: "\u4E66\u9996",
    backMatter: "\u4E66\u672B",
    chapter: "\u7AE0",
    coverTitle: "thatcleanchef",
    coverSubtitle: "\u4E00\u672C\u4ECE\u53A8\u623F\u91CC\u5199\u51FA\u7684\u83DC\u8C31\u3002\u8BDA\u5B9E\u7684\u914D\u65B9\u3001\u8BDA\u5B9E\u7684\u65F6\u95F4\u3001\u4F60\u624B\u8FB9\u5C31\u6709\u7684\u98DF\u6750\u3002",
    coverByline: "ThatCleanChef \u53A8\u623F · 2026",
    introHeading: "\u53A8\u623F\u7684\u4E00\u70B9\u8BDD\u3002",
    introBody:
      "\u8FD9\u672C\u4E66\u662F\u6162\u6162\u5199\u6210\u7684\u3002\u6BCF\u4E00\u9053\u83DC\u90FD\u5728\u5BB6\u7528\u53A8\u623F\u88E1\u8BD5\u4E86\u4E09\u6B21\u624D\u80FD\u4E0A\u9875\u3002\u6BCF\u4E00\u4EFD\u98DF\u6750\u8868\u8BFB\u8D77\u6765\u90FD\u50CF\u4E00\u4EFD\u771F\u6B63\u7684\u8D2D\u7269\u6E05\u5355\u3002\u6BCF\u4E00\u6B65\u505A\u6CD5\u90FD\u50CF\u5728\u7535\u8BDD\u91CC\u8DDF\u670B\u53CB\u8BB2\u4E00\u6837\uFF1A\u8010\u5FC3\u5730\u3001\u6309\u987A\u5E8F\u5730\u3001\u4E0D\u52A0\u4FEE\u9970\u5730\u5199\u51FA\u3002",
    approachHeading: "\u6211\u4EEC\u7684\u65B9\u6CD5\u3002",
    approachBody:
      "\u5148\u8BB2\u98DF\u6750\uFF0C\u518D\u8BB2\u6280\u6CD5\u3002\u6280\u6CD5\u8868\u6545\u610F\u4FDD\u6301\u7B80\u77ED\uFF1A\u76D0\u3001\u8102\u3001\u9178\u3001\u70ED\uFF0C\u4EE5\u53CA\u8BA9\u4E00\u4EF6\u4E8B\u505A\u5B8C\u518D\u5F00\u59CB\u4E0B\u4E00\u4EF6\u7684\u8010\u5FC3\u3002\u8BFB\u4E00\u8BFB\u7D22\u5F15\u3002\u9009\u4E00\u4E2A\u7AE0\u8282\u3002\u70F9\u4E00\u9875\u83DC\u3002",
  },
  ar: {
    contents: "\u0627\u0644\u0641\u0647\u0631\u0633",
    ingredients: "\u0627\u0644\u0645\u0643\u0648\u0651\u0646\u0627\u062A",
    recipes: "\u0627\u0644\u0648\u0635\u0641\u0627\u062A",
    techniques: "\u0627\u0644\u062A\u0642\u0646\u064A\u0627\u062A",
    approach: "\u0645\u0646\u0647\u062C\u0646\u0627",
    whatWereTesting: "\u0645\u0627 \u0646\u062E\u062A\u0628\u0631\u0647",
    pipeline: "\u062E\u0637\u0651\u0629 \u0627\u0644\u0625\u0635\u062F\u0627\u0631",
    edition: "\u0627\u0644\u0637\u0628\u0639\u0629 \u0627\u0644\u0623\u0648\u0644\u0649 · 2026",
    frontMatter: "\u0635\u0641\u062D\u0627\u062A \u0627\u0644\u0627\u0641\u062A\u062A\u0627\u062D",
    backMatter: "\u0635\u0641\u062D\u0627\u062A \u0627\u0644\u062E\u062A\u0627\u0645",
    chapter: "\u0641\u0635\u0644",
    coverTitle: "thatcleanchef",
    coverSubtitle: "\u0643\u062A\u0627\u0628 \u0637\u0628\u062E \u0645\u0643\u062A\u0648\u0628 \u0645\u0646 \u062F\u0627\u062E\u0644 \u0627\u0644\u0645\u0637\u0628\u062E\u060C \u0648\u0635\u0641\u0627\u062A \u0635\u0627\u062F\u0642\u0629\u060C \u0623\u0648\u0642\u0627\u062A \u0635\u0627\u062F\u0642\u0629\u060C \u0648\u0645\u0643\u0648\u0651\u0646\u0627\u062A \u062A\u0645\u0644\u0643\u0647\u0627 \u0641\u0639\u0644\u0627\u064B.",
    coverByline: "\u0645\u0637\u0628\u062E \u062B\u0627\u062A\u0643\u0644\u064A\u0646\u062A\u0634\u064A\u0641 · 2026",
    introHeading: "\u0643\u0644\u0645\u0629 \u0645\u0646 \u0627\u0644\u0645\u0637\u0628\u062E.",
    introBody:
      "\u0647\u0630\u0627 \u0627\u0644\u0643\u062A\u0627\u0628 \u0645\u0643\u062A\u0648\u0628 \u0639\u0644\u0649 \u0645\u0647\u0644. \u0643\u0644 \u0648\u0635\u0641\u0629 \u062A\u064F\u062C\u0631\u0651\u0628 \u062B\u0644\u0627\u062B \u0645\u0631\u0651\u0627\u062A \u0641\u064A \u0645\u0637\u0628\u062E \u0645\u0646\u0632\u0644\u064A \u0642\u0628\u0644 \u0623\u0646 \u062A\u0633\u062A\u062D\u0642\u0651 \u0635\u0641\u062D\u062A\u0647\u0627. \u0642\u0648\u0627\u0626\u0645 \u0627\u0644\u0645\u0643\u0648\u0651\u0646\u0627\u062A \u062A\u064F\u0642\u0631\u0623 \u0643\u0623\u0646\u0651\u0647\u0627 \u0642\u0648\u0627\u0626\u0645 \u062A\u0633\u0648\u0651\u0642 \u062D\u0642\u064A\u0642\u064A\u0651\u0629\u060C \u0648\u0627\u0644\u0637\u0631\u064A\u0642\u0629 \u0645\u0643\u062A\u0648\u0628\u0629 \u0643\u0645\u0627 \u062A\u064F\u0642\u0627\u0644 \u0639\u0628\u0631 \u0627\u0644\u0647\u0627\u062A\u0641: \u0628\u0635\u0628\u0631\u060C \u0628\u0627\u0644\u062A\u0631\u062A\u064A\u0628\u060C \u0628\u0644\u0627 \u0625\u0633\u0631\u0627\u0641.",
    approachHeading: "\u0645\u0646\u0647\u062C\u0646\u0627.",
    approachBody:
      "\u0627\u0644\u0645\u0643\u0648\u0651\u0646\u0627\u062A \u0623\u0648\u0651\u0644\u0627\u064B\u060C \u062B\u0645\u0651 \u0627\u0644\u062A\u0642\u0646\u064A\u0629. \u0644\u0627\u0626\u062D\u0629 \u0627\u0644\u062A\u0642\u0646\u064A\u0627\u062A \u0642\u0635\u064A\u0631\u0629 \u0639\u0646 \u0642\u0635\u062F: \u0645\u0644\u062D\u060C \u062F\u0633\u0645\u060C \u062D\u0645\u0648\u0636\u0629\u060C \u062D\u0631\u0627\u0631\u0629\u060C \u0648\u0635\u0628\u0631 \u064A\u0633\u0645\u062D \u0644\u0644\u0623\u0645\u0631 \u0623\u0646 \u064A\u0646\u062A\u0647\u064A \u0642\u0628\u0644 \u0623\u0646 \u064A\u0628\u062F\u0623 \u0627\u0644\u062A\u0627\u0644\u064A. \u0627\u0642\u0631\u0623 \u0627\u0644\u0641\u0647\u0631\u0633. \u0627\u062E\u062A\u0631 \u0641\u0635\u0644\u0627\u064B. \u0627\u0637\u0628\u062E \u0635\u0641\u062D\u0629.",
  },
};

export const DEFAULT_LOCALE: LocaleCode = "en";

export function getDict(code: LocaleCode = DEFAULT_LOCALE): Dict {
  return DICTS[code] ?? DICTS.en;
}
