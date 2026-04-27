/**
 * Locale registry for ThatCleanChef. Twelve locales — the cookbook is
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
  | "ro"
  | "cs"
  | "no";

export const LOCALES: Array<{
  code: LocaleCode;
  label: string;
  edition: string;
  region: string;
  hreflang: string;
  dir?: "rtl" | "ltr";
}> = [
  { code: "en", label: "English",    edition: "First Edition",         region: "International",   hreflang: "en" },
  { code: "es", label: "Español", edition: "Primera Edición", region: "International",   hreflang: "es" },
  { code: "fr", label: "Français", edition: "Première Édition", region: "International", hreflang: "fr" },
  { code: "de", label: "Deutsch",    edition: "Erste Auflage",         region: "International",   hreflang: "de" },
  { code: "it", label: "Italiano",   edition: "Prima Edizione",        region: "Internazionale",  hreflang: "it" },
  { code: "pt", label: "Português", edition: "Primeira Edição", region: "Internacional", hreflang: "pt" },
  { code: "nl", label: "Nederlands", edition: "Eerste Editie",         region: "Internationaal",  hreflang: "nl" },
  { code: "sv", label: "Svenska",    edition: "Första Utgåvan", region: "Internationell", hreflang: "sv" },
  { code: "pl", label: "Polski",     edition: "Wydanie Pierwsze",      region: "Międzynarodowe", hreflang: "pl" },
  { code: "ro", label: "Română", edition: "Ediția I", region: "Internațională", hreflang: "ro" },
  { code: "cs", label: "Čeština", edition: "První vydání", region: "Mezinárodní", hreflang: "cs" },
  { code: "no", label: "Norsk",      edition: "Første utgave",    region: "Internasjonal",   hreflang: "nb" },
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

const en: Dict = {
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
};

const es: Dict = {
  contents: "Índice",
  ingredients: "Ingredientes",
  recipes: "Recetas",
  techniques: "Técnicas",
  approach: "Nuestro Método",
  whatWereTesting: "Lo que probamos",
  pipeline: "Nuestro Calendario",
  edition: "Primera Edición · 2026",
  frontMatter: "Páginas Iniciales",
  backMatter: "Páginas Finales",
  chapter: "Capítulo",
  coverTitle: "thatcleanchef",
  coverSubtitle: "Un libro de cocina escrito desde la cocina — recetas honestas, tiempos honestos, ingredientes que ya tienes.",
  coverByline: "La cocina de ThatCleanChef · 2026",
  introHeading: "Una nota desde la cocina.",
  introBody:
    "Este libro está escrito despacio. Cada receta se prueba tres veces en una cocina doméstica antes de ganarse su página. Cada lista de ingredientes se lee como una lista de la compra. Cada método se cuenta como se contaría por teléfono: con paciencia, en orden, sin adornos.",
  approachHeading: "Nuestro método.",
  approachBody:
    "Primero los ingredientes. Después la técnica. La lista de técnicas es corta a propósito: sal, grasa, ácido, calor y la paciencia de dejar terminar una cosa antes de empezar la siguiente. Lee el índice. Elige un capítulo. Cocina una página.",
};

const fr: Dict = {
  contents: "Sommaire",
  ingredients: "Ingrédients",
  recipes: "Recettes",
  techniques: "Techniques",
  approach: "Notre Démarche",
  whatWereTesting: "Ce que l'on teste",
  pipeline: "Le Calendrier",
  edition: "Première Édition · 2026",
  frontMatter: "Pages Liminaires",
  backMatter: "Pages Finales",
  chapter: "Chapitre",
  coverTitle: "thatcleanchef",
  coverSubtitle: "Un livre de cuisine écrit en cuisine — recettes éprouvées, temps honnêtes, ingrédients que vous avez.",
  coverByline: "La cuisine de ThatCleanChef · 2026",
  introHeading: "Un mot de la cuisine.",
  introBody:
    "Ce livre est écrit lentement. Chaque recette est testée trois fois dans une cuisine domestique avant d'avoir sa page. Chaque liste d'ingrédients se lit comme une vraie liste de courses. Chaque méthode est racontée comme on l'expliquerait au téléphone : patiemment, dans l'ordre, sans esbroufe.",
  approachHeading: "Notre démarche.",
  approachBody:
    "Les ingrédients d'abord. La technique ensuite. La liste de techniques est courte par choix : sel, gras, acide, chaleur, et la patience de laisser finir une chose avant d'en commencer une autre. Lisez l'index. Choisissez un chapitre. Cuisinez une page.",
};

const de: Dict = {
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
  coverSubtitle: "Ein Kochbuch, geschrieben in der Küche — ehrliche Rezepte, ehrliche Zeiten, Zutaten, die du wirklich hast.",
  coverByline: "Die Küche von ThatCleanChef · 2026",
  introHeading: "Eine Notiz aus der Küche.",
  introBody:
    "Dieses Buch entsteht langsam. Jedes Rezept wird dreimal in einer Hausküche getestet, bevor es eine Seite verdient. Jede Zutatenliste liest sich wie eine echte Einkaufsliste. Jede Methode ist so aufgeschrieben, wie man sie am Telefon erklären würde: geduldig, der Reihe nach, ohne Aufhebens.",
  approachHeading: "Unser Vorgehen.",
  approachBody:
    "Zuerst die Zutaten. Dann die Technik. Die Technikenliste ist absichtlich kurz: Salz, Fett, Säure, Hitze und die Geduld, eine Sache fertig werden zu lassen, bevor die nächste beginnt. Lies das Register. Wähle ein Kapitel. Koch eine Seite.",
};

const it: Dict = {
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
  coverSubtitle: "Un libro di cucina scritto in cucina — ricette oneste, tempi onesti, ingredienti che hai già.",
  coverByline: "La cucina di ThatCleanChef · 2026",
  introHeading: "Una nota dalla cucina.",
  introBody:
    "Questo libro nasce lentamente. Ogni ricetta viene provata tre volte in una cucina di casa prima di guadagnarsi una pagina. Ogni lista di ingredienti si legge come una vera lista della spesa. Ogni metodo è scritto come lo racconteresti al telefono: con pazienza, in ordine, senza fronzoli.",
  approachHeading: "Il nostro metodo.",
  approachBody:
    "Prima gli ingredienti. Poi la tecnica. La lista delle tecniche è corta di proposito: sale, grasso, acido, calore e la pazienza di lasciar finire una cosa prima di iniziarne un'altra. Leggi l'indice. Scegli un capitolo. Cucina una pagina.",
};

const pt: Dict = {
  contents: "Índice",
  ingredients: "Ingredientes",
  recipes: "Receitas",
  techniques: "Técnicas",
  approach: "O Nosso Método",
  whatWereTesting: "O que estamos a testar",
  pipeline: "O Calendário",
  edition: "Primeira Edição · 2026",
  frontMatter: "Páginas Iniciais",
  backMatter: "Páginas Finais",
  chapter: "Capítulo",
  coverTitle: "thatcleanchef",
  coverSubtitle: "Um livro de cozinha escrito a partir da cozinha — receitas honestas, tempos honestos, ingredientes que tens.",
  coverByline: "A cozinha do ThatCleanChef · 2026",
  introHeading: "Uma nota da cozinha.",
  introBody:
    "Este livro é escrito devagar. Cada receita é testada três vezes numa cozinha caseira antes de merecer uma página. Cada lista de ingredientes lê-se como uma verdadeira lista de compras. Cada método é contado como o explicarias ao telefone: com paciência, por ordem, sem alarde.",
  approachHeading: "O nosso método.",
  approachBody:
    "Primeiro os ingredientes. Depois a técnica. A lista de técnicas é curta por opção: sal, gordura, ácido, calor e a paciência para deixar uma coisa terminar antes de começar a seguinte. Lê o índice. Escolhe um capítulo. Cozinha uma página.",
};

const nl: Dict = {
  contents: "Inhoud",
  ingredients: "Ingrediënten",
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
  coverSubtitle: "Een kookboek geschreven vanuit de keuken — eerlijke recepten, eerlijke tijden, ingrediënten die je hebt.",
  coverByline: "De keuken van ThatCleanChef · 2026",
  introHeading: "Een notitie uit de keuken.",
  introBody:
    "Dit boek wordt langzaam geschreven. Elk recept wordt drie keer thuis getest voordat het een pagina verdient. Elke ingrediëntenlijst leest als een echte boodschappenlijst. Elke methode is opgeschreven zoals je het aan de telefoon zou uitleggen: rustig, op volgorde, zonder bombarie.",
  approachHeading: "Onze aanpak.",
  approachBody:
    "Eerst de ingrediënten. Daarna de techniek. De lijst met technieken is bewust kort: zout, vet, zuur, hitte en het geduld om één ding klaar te laten zijn voordat het volgende begint. Lees het register. Kies een hoofdstuk. Kook een pagina.",
};

const sv: Dict = {
  contents: "Innehåll",
  ingredients: "Ingredienser",
  recipes: "Recept",
  techniques: "Tekniker",
  approach: "Vårt Sätt",
  whatWereTesting: "Vad vi testar",
  pipeline: "Planen",
  edition: "Första Utgåvan · 2026",
  frontMatter: "Förord och innehåll",
  backMatter: "Register",
  chapter: "Kapitel",
  coverTitle: "thatcleanchef",
  coverSubtitle: "En kokbok skriven från köket — ärliga recept, ärliga tider, råvaror du har hemma.",
  coverByline: "ThatCleanChefs kök · 2026",
  introHeading: "En notis från köket.",
  introBody:
    "Den här boken skrivs långsamt. Varje recept testas tre gånger i ett hemmakök innan det får en sida. Varje ingredienslista läser som en riktig inköpslista. Varje metod är skriven som man skulle förklara den i telefon: lugnt, i ordning, utan ståtspråk.",
  approachHeading: "Vårt sätt.",
  approachBody:
    "Ingredienserna först. Tekniken sedan. Listan över tekniker är kort med flit: salt, fett, syra, värme och tålamodet att låta en sak bli färdig innan nästa börjar. Läs registret. Välj ett kapitel. Laga en sida.",
};

const pl: Dict = {
  contents: "Spis treści",
  ingredients: "Składniki",
  recipes: "Przepisy",
  techniques: "Techniki",
  approach: "Nasze podejście",
  whatWereTesting: "Co testujemy",
  pipeline: "Plan wydawniczy",
  edition: "Wydanie Pierwsze · 2026",
  frontMatter: "Strony początkowe",
  backMatter: "Strony końcowe",
  chapter: "Rozdział",
  coverTitle: "thatcleanchef",
  coverSubtitle: "Książka kucharska pisana z kuchni — uczciwe przepisy, uczciwe czasy, składniki, które już masz.",
  coverByline: "Kuchnia ThatCleanChef · 2026",
  introHeading: "Notatka z kuchni.",
  introBody:
    "Ta książka powstaje wolno. Każdy przepis jest testowany trzykrotnie w domowej kuchni, zanim zasłuży na stronę. Każda lista składników czyta się jak prawdziwa lista zakupów. Każda metoda jest spisana tak, jak byś opowiedział ją przez telefon — spokojnie, po kolei, bez popisów.",
  approachHeading: "Nasze podejście.",
  approachBody:
    "Najpierw składniki. Potem technika. Lista technik jest celowo krótka: sól, tłuszcz, kwas, ciepło i cierpliwość, by skończyć jedno, zanim zacznie się następne. Przeczytaj indeks. Wybierz rozdział. Ugotuj stronę.",
};

const ro: Dict = {
  contents: "Cuprins",
  ingredients: "Ingrediente",
  recipes: "Rețete",
  techniques: "Tehnici",
  approach: "Abordarea noastră",
  whatWereTesting: "Ce testăm",
  pipeline: "Calendarul",
  edition: "Ediția I · 2026",
  frontMatter: "Pagini de început",
  backMatter: "Pagini finale",
  chapter: "Capitol",
  coverTitle: "thatcleanchef",
  coverSubtitle: "O carte de bucăte scrisă din bucătărie — rețete oneste, timpi onești, ingrediente pe care deja le ai.",
  coverByline: "Bucătăria ThatCleanChef · 2026",
  introHeading: "O notă din bucătărie.",
  introBody:
    "Această carte se scrie încet. Fiecare rețetă este testată de trei ori într-o bucătărie de casă înainte să-și merite pagina. Fiecare listă de ingrediente se citește ca o listă de cumpărături adevărată. Fiecare metodă este scrisă așa cum ai povesti-o cuiva la telefon: cu răbdare, în ordine, fără zorzoane.",
  approachHeading: "Abordarea noastră.",
  approachBody:
    "Întâi ingredientele. Apoi tehnica. Lista de tehnici e scurtă din intenție: sare, grăsime, acid, căldură și răbdarea de a lăsa un lucru să se termine înainte să înceapă următorul. Citește indexul. Alege un capitol. Gătește o pagină.",
};

const cs: Dict = {
  contents: "Obsah",
  ingredients: "Suroviny",
  recipes: "Recepty",
  techniques: "Techniky",
  approach: "Náš přístup",
  whatWereTesting: "Co testujeme",
  pipeline: "Plán",
  edition: "První vydání · 2026",
  frontMatter: "Úvodní část",
  backMatter: "Závěrečná část",
  chapter: "Kapitola",
  coverTitle: "thatcleanchef",
  coverSubtitle: "Kuchařská kniha psaná z kuchyně — poctivé recepty, poctivé časy, suroviny, které máš.",
  coverByline: "Kuchyň ThatCleanChef · 2026",
  introHeading: "Poznámka z kuchyně.",
  introBody:
    "Tahle kniha vzniká pomalu. Každý recept se zkouší třikrát v domácí kuchyni, než si zaslouží stranu. Každý seznam surovin se čte jako opravdový nákupní lístek. Každý postup je napsán tak, jak bys ho povykládal kamarádovi do telefonu — klidně, po pořádku, bez ozdob.",
  approachHeading: "Náš přístup.",
  approachBody:
    "Nejdřív suroviny. Pak technika. Seznam technik je záměrně krátký: sůl, tuk, kyselina, teplo a trpělivost nechat jednu věc dodělat než začne další. Přečti si rejstřík. Vyber kapitolu. Uvař stranu.",
};

const no: Dict = {
  contents: "Innhold",
  ingredients: "Ingredienser",
  recipes: "Oppskrifter",
  techniques: "Teknikker",
  approach: "Vår tilnærming",
  whatWereTesting: "Det vi tester",
  pipeline: "Planen",
  edition: "Første utgave · 2026",
  frontMatter: "Forord og innhold",
  backMatter: "Etterord og register",
  chapter: "Kapittel",
  coverTitle: "thatcleanchef",
  coverSubtitle: "En kokebok skrevet fra kjøkkenet — ærlige oppskrifter, ærlige tider, råvarer du har hjemme.",
  coverByline: "ThatCleanChefs kjøkken · 2026",
  introHeading: "En liten merknad fra kjøkkenet.",
  introBody:
    "Denne boka skrives sakte. Hver oppskrift testes tre ganger på vanlig kjøkkenutstyr før den fortjener en side. Hver ingrediensliste leses som en ekte handleliste. Hver metode er skrevet slik du ville forklart den i telefonen — rolig, i rekkefølge, uten bråk.",
  approachHeading: "Vår tilnærming.",
  approachBody:
    "Først ingrediensene. Så teknikken. Listen over teknikker er kort med vilje: salt, fett, syre, varme og tålmodigheten til å la én ting bli ferdig før den neste begynner. Les registeret. Velg et kapittel. Lag en side.",
};

export const DICTS: Record<LocaleCode, Dict> = {
  en, es, fr, de, it, pt, nl, sv, pl, ro, cs, no,
};

export const DEFAULT_LOCALE: LocaleCode = "en";

export function getDict(code: LocaleCode = DEFAULT_LOCALE): Dict {
  return DICTS[code] ?? DICTS.en;
}
