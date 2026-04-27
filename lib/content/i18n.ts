/**
 * i18n configuration for thatcleanchef.com.
 *
 * Twelve locales are exposed at `/[locale]/...` routes. The default locale
 * is `en` (United Kingdom-first, but locale code `en` because we don't yet
 * differentiate `en-GB` and `en-US` content). Recipe bodies remain in
 * English by deliberate choice — machine-translated medical-context dietary
 * advice for GLP-1 patients is a real harm risk. We translate the parts of
 * the site that index for navigation and discovery (chrome, hub names,
 * medication summaries, meal-plan and recipe metadata) so the site is
 * findable in twelve markets, and link readers to the English recipe page
 * with a clear note about the translation status.
 *
 * Adding a new locale: append to LOCALES, add the locale block to T below,
 * and add hreflang to the localized layout. No other wiring required.
 */

export const LOCALES = [
  "en",
  "de",
  "fr",
  "it",
  "es",
  "nl",
  "pl",
  "sv",
  "pt",
  "ro",
  "cs",
  "no",
] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, { native: string; english: string }> = {
  en: { native: "English", english: "English" },
  de: { native: "Deutsch", english: "German" },
  fr: { native: "Français", english: "French" },
  it: { native: "Italiano", english: "Italian" },
  es: { native: "Español", english: "Spanish" },
  nl: { native: "Nederlands", english: "Dutch" },
  pl: { native: "Polski", english: "Polish" },
  sv: { native: "Svenska", english: "Swedish" },
  pt: { native: "Português", english: "Portuguese" },
  ro: { native: "Română", english: "Romanian" },
  cs: { native: "Čeština", english: "Czech" },
  no: { native: "Norsk", english: "Norwegian" },
};

/**
 * BCP-47 codes for hreflang tags. We use the broad subtag because none of
 * our content is region-specific (UK content is canonical English).
 */
export const HREFLANG: Record<Locale, string> = {
  en: "en",
  de: "de",
  fr: "fr",
  it: "it",
  es: "es",
  nl: "nl",
  pl: "pl",
  sv: "sv",
  pt: "pt",
  ro: "ro",
  cs: "cs",
  no: "nb", // Bokmål, the writing form used on the site
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

// =====================================================================
// UI chrome translations — strings used in shared layouts, nav, footer,
// localized homepage. Recipe BODIES are deliberately NOT translated here
// (see file header). Adding a key requires adding it to every locale block.
// =====================================================================

type ChromeKey =
  | "nav.recipes"
  | "nav.medications"
  | "nav.mealPlans"
  | "nav.team"
  | "nav.about"
  | "footer.tagline"
  | "footer.copyrightSuffix"
  | "home.heroEyebrow"
  | "home.heroH1"
  | "home.heroDek"
  | "home.medsEyebrow"
  | "home.medsH2"
  | "home.medsDek"
  | "home.plansEyebrow"
  | "home.plansH2"
  | "home.plansDek"
  | "home.trustTested"
  | "home.trustReviewed"
  | "home.trustCited"
  | "ledger.calories"
  | "ledger.protein"
  | "ledger.fibre"
  | "ledger.sodium"
  | "ledger.satFat"
  | "ledger.addedSugar"
  | "i18n.translationNotice"
  | "i18n.readInEnglish";

export const CHROME: Record<Locale, Record<ChromeKey, string>> = {
  en: {
    "nav.recipes": "Recipes", "nav.medications": "Medications", "nav.mealPlans": "Meal plans", "nav.team": "The team", "nav.about": "About",
    "footer.tagline": "Clean-eating recipes for people on peptide therapy.",
    "footer.copyrightSuffix": "Independent test kitchen · No brand sponsorships.",
    "home.heroEyebrow": "Issue No. 01",
    "home.heroH1": "Clean-eating recipes for peptide therapy.",
    "home.heroDek": "Recipes designed for GLP-1 patients, peptide-cycle users, and anyone optimising nutrition during a peptide protocol. Time-honest. USDA Nutrition Ledger on every recipe. Reviewed by registered dietitians.",
    "home.medsEyebrow": "By medication", "home.medsH2": "Eating well on a GLP-1.",
    "home.medsDek": "Recipes selected and annotated for the cooking constraints patients on tirzepatide and semaglutide consistently report.",
    "home.plansEyebrow": "Meal plans", "home.plansH2": "Free PDFs, RD-reviewed.",
    "home.plansDek": "Structured weekly eating, grocery list by section, macros totalled per day.",
    "home.trustTested": "Tested 3+ times", "home.trustReviewed": "RD-reviewed", "home.trustCited": "USDA-cited",
    "ledger.calories": "Calories", "ledger.protein": "Protein", "ledger.fibre": "Fibre", "ledger.sodium": "Sodium", "ledger.satFat": "Saturated fat", "ledger.addedSugar": "Added sugar",
    "i18n.translationNotice": "Recipe instructions remain in English while we work with credentialed translators in each market. The site chrome is localized; recipe bodies are not yet.",
    "i18n.readInEnglish": "Read the recipe in English",
  },
  de: {
    "nav.recipes": "Rezepte", "nav.medications": "Medikamente", "nav.mealPlans": "Ernährungspläne", "nav.team": "Das Team", "nav.about": "Über uns",
    "footer.tagline": "Saubere Rezepte für Menschen unter Peptidtherapie.",
    "footer.copyrightSuffix": "Unabhängige Testküche · Keine Markensponsoren.",
    "home.heroEyebrow": "Ausgabe Nr. 01",
    "home.heroH1": "Clean-Eating-Rezepte für die Peptidtherapie.",
    "home.heroDek": "Rezepte für GLP-1-Patient:innen, Peptid-Zyklus-Anwender:innen und alle, die ihre Ernährung im Rahmen eines Protokolls optimieren. Ehrliche Zubereitungszeiten. USDA-Nährwerte auf jedem Rezept. Geprüft von zertifizierten Ernährungsfachkräften.",
    "home.medsEyebrow": "Nach Medikament", "home.medsH2": "Gut essen unter GLP-1.",
    "home.medsDek": "Rezepte, ausgewählt für die Kochrealitäten, die Patient:innen unter Tirzepatid und Semaglutid immer wieder beschreiben.",
    "home.plansEyebrow": "Ernährungspläne", "home.plansH2": "Kostenlose PDFs, fachlich geprüft.",
    "home.plansDek": "Strukturierte Wochenplanung, Einkaufsliste nach Sortiment, Makros pro Tag aufaddiert.",
    "home.trustTested": "3+ Mal getestet", "home.trustReviewed": "Fachlich geprüft", "home.trustCited": "USDA-Quellen",
    "ledger.calories": "Kalorien", "ledger.protein": "Eiweiß", "ledger.fibre": "Ballaststoffe", "ledger.sodium": "Natrium", "ledger.satFat": "Gesättigte Fettsäuren", "ledger.addedSugar": "Zugesetzter Zucker",
    "i18n.translationNotice": "Rezeptanleitungen bleiben vorerst auf Englisch, bis wir mit qualifizierten Übersetzer:innen pro Markt zusammenarbeiten. Die Seitenstruktur ist lokalisiert; die Rezepttexte selbst noch nicht.",
    "i18n.readInEnglish": "Rezept auf Englisch lesen",
  },
  fr: {
    "nav.recipes": "Recettes", "nav.medications": "Médicaments", "nav.mealPlans": "Plans de repas", "nav.team": "L’équipe", "nav.about": "À propos",
    "footer.tagline": "Recettes saines pour les personnes sous traitement par peptides.",
    "footer.copyrightSuffix": "Cuisine d’essai indépendante · Aucun parrainage de marque.",
    "home.heroEyebrow": "Numéro 01",
    "home.heroH1": "Cuisine saine pour la thérapie par peptides.",
    "home.heroDek": "Recettes conçues pour les patients sous GLP-1, les utilisateurs de cycles de peptides et toute personne qui ajuste son alimentation pendant un protocole. Temps honnêtes. Tableau nutritionnel USDA sur chaque recette. Relu par des diététiciennes diplômées.",
    "home.medsEyebrow": "Par médicament", "home.medsH2": "Bien manger sous GLP-1.",
    "home.medsDek": "Recettes sélectionnées pour les contraintes culinaires que les patients sous tirzépatide et sémaglutide signalent régulièrement.",
    "home.plansEyebrow": "Plans de repas", "home.plansH2": "PDF gratuits, relus par diététiciennes.",
    "home.plansDek": "Repas structurés sur la semaine, liste de courses par rayon, macros totalisés par jour.",
    "home.trustTested": "Testé 3+ fois", "home.trustReviewed": "Relu par diététicienne", "home.trustCited": "Sources USDA",
    "ledger.calories": "Calories", "ledger.protein": "Protéines", "ledger.fibre": "Fibres", "ledger.sodium": "Sodium", "ledger.satFat": "Acides gras saturés", "ledger.addedSugar": "Sucres ajoutés",
    "i18n.translationNotice": "Les instructions de recettes restent en anglais le temps que nous collaborions avec des traductrices et traducteurs spécialisés sur chaque marché. La structure du site est localisée ; pas encore le contenu des recettes.",
    "i18n.readInEnglish": "Lire la recette en anglais",
  },
  it: {
    "nav.recipes": "Ricette", "nav.medications": "Farmaci", "nav.mealPlans": "Piani alimentari", "nav.team": "Il team", "nav.about": "Chi siamo",
    "footer.tagline": "Ricette pulite per chi segue una terapia con peptidi.",
    "footer.copyrightSuffix": "Cucina di prova indipendente · Nessuna sponsorizzazione di marca.",
    "home.heroEyebrow": "Numero 01",
    "home.heroH1": "Ricette di cucina pulita per la terapia con peptidi.",
    "home.heroDek": "Ricette pensate per pazienti in GLP-1, utenti di cicli di peptidi e chiunque ottimizzi l’alimentazione durante un protocollo. Tempi onesti. Tabella nutrizionale USDA su ogni ricetta. Revisionato da dietiste registrate.",
    "home.medsEyebrow": "Per farmaco", "home.medsH2": "Mangiare bene con un GLP-1.",
    "home.medsDek": "Ricette selezionate per i vincoli di cucina che i pazienti in tirzepatide e semaglutide riferiscono in modo costante.",
    "home.plansEyebrow": "Piani alimentari", "home.plansH2": "PDF gratuiti, revisionati.",
    "home.plansDek": "Settimane strutturate, lista della spesa per reparti, macro totali al giorno.",
    "home.trustTested": "Testato 3+ volte", "home.trustReviewed": "Revisionato da dietista", "home.trustCited": "Citato USDA",
    "ledger.calories": "Calorie", "ledger.protein": "Proteine", "ledger.fibre": "Fibre", "ledger.sodium": "Sodio", "ledger.satFat": "Grassi saturi", "ledger.addedSugar": "Zuccheri aggiunti",
    "i18n.translationNotice": "Le istruzioni delle ricette restano in inglese mentre lavoriamo con traduttori qualificati per ciascun mercato. La struttura del sito è localizzata; i corpi delle ricette non ancora.",
    "i18n.readInEnglish": "Leggi la ricetta in inglese",
  },
  es: {
    "nav.recipes": "Recetas", "nav.medications": "Medicamentos", "nav.mealPlans": "Planes de comida", "nav.team": "El equipo", "nav.about": "Sobre nosotros",
    "footer.tagline": "Recetas de alimentación limpia para personas en terapia con péptidos.",
    "footer.copyrightSuffix": "Cocina de pruebas independiente · Sin patrocinios de marcas.",
    "home.heroEyebrow": "Número 01",
    "home.heroH1": "Recetas de alimentación limpia para la terapia con péptidos.",
    "home.heroDek": "Recetas pensadas para pacientes en GLP-1, usuarios de ciclos de péptidos y cualquiera que optimice su alimentación durante un protocolo. Tiempos honestos. Información nutricional USDA en cada receta. Revisado por dietistas registradas.",
    "home.medsEyebrow": "Por medicamento", "home.medsH2": "Comer bien con un GLP-1.",
    "home.medsDek": "Recetas seleccionadas y adaptadas a las restricciones de cocina que los pacientes con tirzepatida y semaglutida describen una y otra vez.",
    "home.plansEyebrow": "Planes de comida", "home.plansH2": "PDFs gratuitos, revisados por dietistas.",
    "home.plansDek": "Alimentación semanal estructurada, lista de la compra por secciones, macros totales por día.",
    "home.trustTested": "Probado 3+ veces", "home.trustReviewed": "Revisado por dietista", "home.trustCited": "Citado por USDA",
    "ledger.calories": "Calorías", "ledger.protein": "Proteína", "ledger.fibre": "Fibra", "ledger.sodium": "Sodio", "ledger.satFat": "Grasa saturada", "ledger.addedSugar": "Azúcar añadido",
    "i18n.translationNotice": "Las instrucciones de las recetas permanecen en inglés mientras trabajamos con traductores acreditados por mercado. La estructura del sitio está traducida; los cuerpos de las recetas, todavía no.",
    "i18n.readInEnglish": "Leer la receta en inglés",
  },
  nl: {
    "nav.recipes": "Recepten", "nav.medications": "Medicatie", "nav.mealPlans": "Maaltijdplannen", "nav.team": "Het team", "nav.about": "Over ons",
    "footer.tagline": "Schone recepten voor mensen in een peptidetherapie.",
    "footer.copyrightSuffix": "Onafhankelijke testkeuken · Geen merkensponsors.",
    "home.heroEyebrow": "Editie nr. 01",
    "home.heroH1": "Schone recepten voor peptidetherapie.",
    "home.heroDek": "Recepten ontworpen voor GLP-1-patiënten, peptide-cyclus-gebruikers en iedereen die zijn voeding optimaliseert tijdens een protocol. Eerlijke bereidingstijden. USDA-voedingswaarde op elk recept. Beoordeeld door geregistreerde diëtisten.",
    "home.medsEyebrow": "Per medicijn", "home.medsH2": "Goed eten met een GLP-1.",
    "home.medsDek": "Recepten geselecteerd voor de kookbeperkingen die patiënten op tirzepatide en semaglutide consequent melden.",
    "home.plansEyebrow": "Maaltijdplannen", "home.plansH2": "Gratis PDF’s, diëtist-gecontroleerd.",
    "home.plansDek": "Gestructureerde weekplanning, boodschappenlijst per afdeling, macro’s per dag.",
    "home.trustTested": "3+ keer getest", "home.trustReviewed": "Door diëtist beoordeeld", "home.trustCited": "USDA-bronnen",
    "ledger.calories": "Calorieën", "ledger.protein": "Eiwit", "ledger.fibre": "Vezels", "ledger.sodium": "Natrium", "ledger.satFat": "Verzadigd vet", "ledger.addedSugar": "Toegevoegde suiker",
    "i18n.translationNotice": "Recept-instructies blijven voorlopig in het Engels, totdat we per markt met gekwalificeerde vertalers werken. De sitestructuur is gelokaliseerd; de receptteksten nog niet.",
    "i18n.readInEnglish": "Lees het recept in het Engels",
  },
  pl: {
    "nav.recipes": "Przepisy", "nav.medications": "Leki", "nav.mealPlans": "Plany posiłków", "nav.team": "Zespół", "nav.about": "O nas",
    "footer.tagline": "Czyste jedzenie dla osób w terapii peptydowej.",
    "footer.copyrightSuffix": "Niezależna kuchnia testowa · Brak sponsoringu marek.",
    "home.heroEyebrow": "Numer 01",
    "home.heroH1": "Czyste przepisy do terapii peptydowej.",
    "home.heroDek": "Przepisy zaprojektowane dla pacjentów na GLP-1, osób stosujących cykle peptydowe i każdego, kto optymalizuje odżywianie podczas protokołu. Uczciwe czasy. Tabela żywieniowa USDA przy każdym przepisie. Recenzowane przez dietetyków klinicznych.",
    "home.medsEyebrow": "Według leku", "home.medsH2": "Dobre jedzenie na GLP-1.",
    "home.medsDek": "Przepisy dobrane do ograniczeń kuchennych, jakie pacjenci na tirzepatydzie i semaglutydzie zgłaszają konsekwentnie.",
    "home.plansEyebrow": "Plany posiłków", "home.plansH2": "Bezpłatne PDF, weryfikowane przez dietetyków.",
    "home.plansDek": "Tygodniowe plany, lista zakupów według działów, makro w skali dnia.",
    "home.trustTested": "Testowane 3+ razy", "home.trustReviewed": "Recenzowane przez dietetyka", "home.trustCited": "Źródła USDA",
    "ledger.calories": "Kalorie", "ledger.protein": "Białko", "ledger.fibre": "Błonnik", "ledger.sodium": "Sód", "ledger.satFat": "Kwasy tłuszczowe nasycone", "ledger.addedSugar": "Cukier dodany",
    "i18n.translationNotice": "Treść przepisów pozostaje na razie w języku angielskim, dopóki nie podejmiemy współpracy z certyfikowanymi tłumaczami w danym rynku. Struktura strony jest przetłumaczona; treści przepisów jeszcze nie.",
    "i18n.readInEnglish": "Czytaj przepis po angielsku",
  },
  sv: {
    "nav.recipes": "Recept", "nav.medications": "Läkemedel", "nav.mealPlans": "Matplaner", "nav.team": "Teamet", "nav.about": "Om oss",
    "footer.tagline": "Rena recept för människor i peptidterapi.",
    "footer.copyrightSuffix": "Oberoende provkök · Inga varumärkessponsorer.",
    "home.heroEyebrow": "Nummer 01",
    "home.heroH1": "Rena recept för peptidterapi.",
    "home.heroDek": "Recept för patienter på GLP-1, användare av peptidcykler och alla som optimerar kosten under ett protokoll. Ärliga tider. USDA-näringsvärden på varje recept. Granskat av legitimerade dietister.",
    "home.medsEyebrow": "Per läkemedel", "home.medsH2": "Äta bra på GLP-1.",
    "home.medsDek": "Recept valda för matlagningsbegränsningarna som patienter på tirzepatid och semaglutid återkommande beskriver.",
    "home.plansEyebrow": "Matplaner", "home.plansH2": "Gratis PDF:er, granskade.",
    "home.plansDek": "Strukturerad veckokost, inköpslista per avdelning, makron per dag.",
    "home.trustTested": "Testat 3+ gånger", "home.trustReviewed": "Granskat av dietist", "home.trustCited": "USDA-källor",
    "ledger.calories": "Kalorier", "ledger.protein": "Protein", "ledger.fibre": "Fiber", "ledger.sodium": "Natrium", "ledger.satFat": "Mättat fett", "ledger.addedSugar": "Tillsatt socker",
    "i18n.translationNotice": "Receptanvisningar förblir på engelska tills vi har certifierade översättare per marknad. Webbplatsens stomme är översatt; recepttexterna ännu inte.",
    "i18n.readInEnglish": "Läs receptet på engelska",
  },
  pt: {
    "nav.recipes": "Receitas", "nav.medications": "Medicamentos", "nav.mealPlans": "Planos de refeições", "nav.team": "A equipa", "nav.about": "Sobre",
    "footer.tagline": "Receitas saudáveis para pessoas em terapia com péptidos.",
    "footer.copyrightSuffix": "Cozinha de testes independente · Sem patrocínios de marcas.",
    "home.heroEyebrow": "Número 01",
    "home.heroH1": "Receitas saudáveis para a terapia com péptidos.",
    "home.heroDek": "Receitas pensadas para pacientes em GLP-1, utilizadores de ciclos de péptidos e qualquer pessoa que otimize a alimentação durante um protocolo. Tempos honestos. Tabela nutricional USDA em cada receita. Revisto por nutricionistas registadas.",
    "home.medsEyebrow": "Por medicamento", "home.medsH2": "Comer bem com um GLP-1.",
    "home.medsDek": "Receitas selecionadas para as restrições culinárias que pacientes com tirzepatida e semaglutida relatam frequentemente.",
    "home.plansEyebrow": "Planos de refeições", "home.plansH2": "PDFs gratuitos, revistos por nutricionistas.",
    "home.plansDek": "Refeições semanais estruturadas, lista de compras por secção, macros totais por dia.",
    "home.trustTested": "Testado 3+ vezes", "home.trustReviewed": "Revisto por nutricionista", "home.trustCited": "Fontes USDA",
    "ledger.calories": "Calorias", "ledger.protein": "Proteína", "ledger.fibre": "Fibra", "ledger.sodium": "Sódio", "ledger.satFat": "Gordura saturada", "ledger.addedSugar": "Açúcar adicionado",
    "i18n.translationNotice": "As instruções das receitas permanecem em inglês enquanto trabalhamos com tradutores credenciados por mercado. A estrutura do site está traduzida; o conteúdo das receitas ainda não.",
    "i18n.readInEnglish": "Ler a receita em inglês",
  },
  ro: {
    "nav.recipes": "Rețete", "nav.medications": "Medicamente", "nav.mealPlans": "Planuri de mese", "nav.team": "Echipa", "nav.about": "Despre",
    "footer.tagline": "Rețete curate pentru persoanele aflate în terapie cu peptide.",
    "footer.copyrightSuffix": "Bucătărie de testare independentă · Fără sponsorizări de marcă.",
    "home.heroEyebrow": "Numărul 01",
    "home.heroH1": "Rețete curate pentru terapia cu peptide.",
    "home.heroDek": "Rețete gândite pentru pacienții pe GLP-1, utilizatorii de cicluri de peptide și oricine își optimizează alimentația în cadrul unui protocol. Timpi corecți. Tabel nutrițional USDA la fiecare rețetă. Verificate de dieteticiene autorizate.",
    "home.medsEyebrow": "După medicament", "home.medsH2": "Mâncare bună la GLP-1.",
    "home.medsDek": "Rețete alese pentru restricțiile culinare pe care pacienții cu tirzepatidă și semaglutidă le raportează constant.",
    "home.plansEyebrow": "Planuri de mese", "home.plansH2": "PDF-uri gratuite, verificate.",
    "home.plansDek": "Mese săptămânale structurate, listă de cumpărături pe raion, macro-uri totalizate pe zi.",
    "home.trustTested": "Testat de 3+ ori", "home.trustReviewed": "Verificat de dietetician", "home.trustCited": "Surse USDA",
    "ledger.calories": "Calorii", "ledger.protein": "Proteine", "ledger.fibre": "Fibre", "ledger.sodium": "Sodiu", "ledger.satFat": "Grăsimi saturate", "ledger.addedSugar": "Zahăr adăugat",
    "i18n.translationNotice": "Instrucțiunile de rețetă rămân în engleză până când lucrăm cu traducători acreditați pentru fiecare piață. Structura site-ului este localizată; conținutul rețetelor încă nu.",
    "i18n.readInEnglish": "Citește rețeta în engleză",
  },
  cs: {
    "nav.recipes": "Recepty", "nav.medications": "Léky", "nav.mealPlans": "Jídelníčky", "nav.team": "Tým", "nav.about": "O nás",
    "footer.tagline": "Čisté recepty pro lidi v peptidové terapii.",
    "footer.copyrightSuffix": "Nezávislá testovací kuchyně · Bez sponzoringu značek.",
    "home.heroEyebrow": "Číslo 01",
    "home.heroH1": "Čisté recepty pro peptidovou terapii.",
    "home.heroDek": "Recepty pro pacienty na GLP-1, uživatele peptidových cyklů a každého, kdo si během protokolu ladí výživu. Poctivé časy. USDA výživová tabulka u každého receptu. Kontrolováno registrovanými dietology.",
    "home.medsEyebrow": "Podle léku", "home.medsH2": "Jíst dobře s GLP-1.",
    "home.medsDek": "Recepty vybrané podle kuchyňských omezení, která pacienti na tirzepatidu a semaglutidu opakovaně popisují.",
    "home.plansEyebrow": "Jídelníčky", "home.plansH2": "Bezplatná PDF, ověřená dietology.",
    "home.plansDek": "Strukturovaný týden jídla, nákupní seznam podle oddělení, denní makra.",
    "home.trustTested": "Testováno 3+ krát", "home.trustReviewed": "Ověřeno dietologem", "home.trustCited": "Zdroje USDA",
    "ledger.calories": "Kalorie", "ledger.protein": "Bílkoviny", "ledger.fibre": "Vláknina", "ledger.sodium": "Sodík", "ledger.satFat": "Nasycené tuky", "ledger.addedSugar": "Přidaný cukr",
    "i18n.translationNotice": "Pokyny k receptům zůstávají v angličtině, dokud nezačneme spolupracovat s certifikovanými překladateli v daném trhu. Struktura webu je lokalizována; obsah receptů zatím ne.",
    "i18n.readInEnglish": "Číst recept v angličtině",
  },
  no: {
    "nav.recipes": "Oppskrifter", "nav.medications": "Medisiner", "nav.mealPlans": "Måltidsplaner", "nav.team": "Teamet", "nav.about": "Om oss",
    "footer.tagline": "Rene oppskrifter for folk i peptidterapi.",
    "footer.copyrightSuffix": "Uavhengig prøvekjøkken · Ingen merkesponsorer.",
    "home.heroEyebrow": "Nummer 01",
    "home.heroH1": "Rene oppskrifter for peptidterapi.",
    "home.heroDek": "Oppskrifter for GLP-1-pasienter, brukere av peptidsykluser og alle som optimaliserer kostholdet under en protokoll. Ærlige tider. USDA-næringsverdi på hver oppskrift. Vurdert av autoriserte ernæringsfysiologer.",
    "home.medsEyebrow": "Etter medisin", "home.medsH2": "Spise godt på GLP-1.",
    "home.medsDek": "Oppskrifter valgt for matrelaterte begrensninger pasienter på tirzepatid og semaglutid stadig beskriver.",
    "home.plansEyebrow": "Måltidsplaner", "home.plansH2": "Gratis PDF-er, faglig vurdert.",
    "home.plansDek": "Strukturert ukekost, handleliste etter avdeling, makroer per dag.",
    "home.trustTested": "Testet 3+ ganger", "home.trustReviewed": "Vurdert av ernæringsfysiolog", "home.trustCited": "USDA-kilder",
    "ledger.calories": "Kalorier", "ledger.protein": "Protein", "ledger.fibre": "Fiber", "ledger.sodium": "Natrium", "ledger.satFat": "Mettet fett", "ledger.addedSugar": "Tilsatt sukker",
    "i18n.translationNotice": "Oppskriftsteksten forblir på engelsk inntil vi har kvalifiserte oversettere i hvert marked. Sidens rammeverk er lokalisert; selve oppskriftene ennå ikke.",
    "i18n.readInEnglish": "Les oppskriften på engelsk",
  },
};

export function t(locale: Locale, key: ChromeKey): string {
  return CHROME[locale]?.[key] ?? CHROME[DEFAULT_LOCALE][key];
}

// =====================================================================
// Hub translations — name + shortName + oneLiner per locale per hub.
// Falls back to English if a locale is missing.
// =====================================================================

type HubL10n = { name: string; shortName: string; oneLiner: string };

export const HUB_L10N: Record<string, Partial<Record<Locale, HubL10n>>> = {
  "glp1-friendly": {
    en: { name: "GLP-1 Friendly Recipes", shortName: "GLP-1 Friendly", oneLiner: "Small portions, nutrient-dense, easier digestion — for reduced appetite on semaglutide, tirzepatide, or liraglutide." },
    de: { name: "GLP-1-freundliche Rezepte", shortName: "GLP-1-freundlich", oneLiner: "Kleine Portionen, nährstoffdicht, leichter verdaulich — für reduzierten Appetit unter Semaglutid, Tirzepatid oder Liraglutid." },
    fr: { name: "Recettes adaptées GLP-1", shortName: "Compatible GLP-1", oneLiner: "Petites portions, denses en nutriments, digestion facilitée — pour les appétits réduits sous sémaglutide, tirzépatide ou liraglutide." },
    it: { name: "Ricette adatte al GLP-1", shortName: "GLP-1 friendly", oneLiner: "Porzioni piccole, dense di nutrienti, più digeribili — per appetito ridotto con semaglutide, tirzepatide o liraglutide." },
    es: { name: "Recetas compatibles con GLP-1", shortName: "Apto GLP-1", oneLiner: "Porciones pequeñas, densas en nutrientes, más fáciles de digerir — para apetito reducido con semaglutida, tirzepatida o liraglutida." },
    nl: { name: "GLP-1-vriendelijke recepten", shortName: "GLP-1-vriendelijk", oneLiner: "Kleine porties, voedingsstofdicht, makkelijker verteerbaar — voor verminderde eetlust bij semaglutide, tirzepatide of liraglutide." },
    pl: { name: "Przepisy przyjazne GLP-1", shortName: "GLP-1 friendly", oneLiner: "Małe porcje, gęste odżywczo, lekkostrawne — przy obniżonym apetycie w trakcie semaglutydu, tirzepatydu lub liraglutydu." },
    sv: { name: "GLP-1-vänliga recept", shortName: "GLP-1-vänligt", oneLiner: "Små portioner, näringstäta, lättare matsmältning — för minskad aptit på semaglutid, tirzepatid eller liraglutid." },
    pt: { name: "Receitas compatíveis com GLP-1", shortName: "GLP-1 friendly", oneLiner: "Porções pequenas, densas em nutrientes, fáceis de digerir — para apetite reduzido com semaglutida, tirzepatida ou liraglutida." },
    ro: { name: "Rețete prietenoase cu GLP-1", shortName: "GLP-1 friendly", oneLiner: "Porții mici, dense în nutrienți, ușor de digerat — pentru apetitul redus pe semaglutidă, tirzepatidă sau liraglutidă." },
    cs: { name: "Recepty přátelské k GLP-1", shortName: "GLP-1 friendly", oneLiner: "Malé porce, hutné na živiny, snadněji stravitelné — při sníženém apetitu na semaglutidu, tirzepatidu nebo liraglutidu." },
    no: { name: "GLP-1-vennlige oppskrifter", shortName: "GLP-1-vennlig", oneLiner: "Små porsjoner, næringstette, lettere fordøyelse — for redusert appetitt på semaglutid, tirzepatid eller liraglutid." },
  },
  "muscle-preservation": {
    en: { name: "High-Protein for Muscle Preservation", shortName: "Muscle Preservation", oneLiner: "30g+ protein per serving. Designed to prevent lean-mass loss during GLP-1 therapy and caloric deficit." },
    de: { name: "Eiweißreich für Muskelerhalt", shortName: "Muskelerhalt", oneLiner: "Über 30 g Eiweiß pro Portion. Damit Magermasse unter GLP-1-Therapie und im Kaloriendefizit erhalten bleibt." },
    fr: { name: "Riches en protéines, conservation musculaire", shortName: "Maintien musculaire", oneLiner: "30 g+ de protéines par portion. Pour éviter la perte de masse maigre sous GLP-1 et en déficit calorique." },
    it: { name: "Alto contenuto proteico per la massa magra", shortName: "Massa magra", oneLiner: "Oltre 30 g di proteine per porzione. Per evitare la perdita di massa magra in terapia GLP-1 e deficit calorico." },
    es: { name: "Alta proteína para preservar músculo", shortName: "Conservación muscular", oneLiner: "Más de 30 g de proteína por ración. Para evitar la pérdida de masa magra en GLP-1 y déficit calórico." },
    nl: { name: "Eiwitrijk voor spierbehoud", shortName: "Spierbehoud", oneLiner: "30g+ eiwit per portie. Ontworpen om verlies van spiermassa tijdens GLP-1-therapie en caloriedeficit te voorkomen." },
    pl: { name: "Wysokobiałkowe na ochronę mięśni", shortName: "Ochrona mięśni", oneLiner: "Ponad 30 g białka na porcję. By chronić beztłuszczową masę ciała w terapii GLP-1 i deficycie." },
    sv: { name: "Proteinrikt för muskelbevarande", shortName: "Muskelbevarande", oneLiner: "30g+ protein per portion. För att hindra förlust av mager massa under GLP-1-terapi och kaloriunderskott." },
    pt: { name: "Rico em proteína para preservação muscular", shortName: "Massa magra", oneLiner: "30g+ de proteína por porção. Para evitar perda de massa magra durante terapia GLP-1 e défice calórico." },
    ro: { name: "Bogat în proteine pentru păstrarea masei musculare", shortName: "Masă musculară", oneLiner: "Peste 30 g de proteine pe porție. Pentru a preveni pierderea de masă musculară la GLP-1 și în deficit caloric." },
    cs: { name: "Vysoký obsah bílkovin pro zachování svalů", shortName: "Zachování svalů", oneLiner: "Více než 30 g bílkovin na porci. Aby se chránila aktivní hmota při terapii GLP-1 a v kalorickém deficitu." },
    no: { name: "Proteinrike retter for muskelbevaring", shortName: "Muskelbevaring", oneLiner: "30g+ protein per porsjon. For å hindre tap av mager masse under GLP-1-terapi og kaloriunderskudd." },
  },
  "anti-inflammatory-recovery": {
    en: { name: "Anti-Inflammatory Recovery", shortName: "Anti-Inflammatory", oneLiner: "Anti-inflammatory ingredients that support BPC-157, TB-500 protocols and joint/tendon recovery." },
    de: { name: "Entzündungshemmende Erholung", shortName: "Anti-entzündlich", oneLiner: "Entzündungshemmende Zutaten, die BPC-157- und TB-500-Protokolle und Gelenk-/Sehnen-Erholung begleiten." },
    fr: { name: "Récupération anti-inflammatoire", shortName: "Anti-inflammatoire", oneLiner: "Ingrédients anti-inflammatoires qui accompagnent les protocoles BPC-157, TB-500 et la récupération articulaire et tendineuse." },
    it: { name: "Recupero antinfiammatorio", shortName: "Antinfiammatorio", oneLiner: "Ingredienti antinfiammatori che supportano protocolli BPC-157, TB-500 e il recupero di articolazioni e tendini." },
    es: { name: "Recuperación antiinflamatoria", shortName: "Antiinflamatorio", oneLiner: "Ingredientes antiinflamatorios que acompañan protocolos BPC-157, TB-500 y la recuperación articular y de tendones." },
    nl: { name: "Ontstekingsremmend herstel", shortName: "Anti-ontsteking", oneLiner: "Ontstekingsremmende ingrediënten die BPC-157- en TB-500-protocollen en het herstel van gewrichten en pezen ondersteunen." },
    pl: { name: "Regeneracja przeciwzapalna", shortName: "Przeciwzapalne", oneLiner: "Składniki przeciwzapalne wspierające protokoły BPC-157, TB-500 oraz regenerację stawów i ścięgien." },
    sv: { name: "Antiinflammatorisk återhämtning", shortName: "Antiinflammatoriskt", oneLiner: "Antiinflammatoriska ingredienser som stödjer BPC-157- och TB-500-protokoll och leder/senor." },
    pt: { name: "Recuperação anti-inflamatória", shortName: "Anti-inflamatório", oneLiner: "Ingredientes anti-inflamatórios que apoiam protocolos BPC-157, TB-500 e a recuperação de articulações e tendões." },
    ro: { name: "Recuperare antiinflamatoare", shortName: "Antiinflamator", oneLiner: "Ingrediente antiinflamatoare care însoțesc protocoalele BPC-157, TB-500 și recuperarea articulațiilor și tendoanelor." },
    cs: { name: "Protizánětlivá regenerace", shortName: "Protizánětlivé", oneLiner: "Protizánětlivé ingredience, které podporují protokoly BPC-157, TB-500 a regeneraci kloubů a šlach." },
    no: { name: "Antiinflammatorisk restitusjon", shortName: "Antiinflammatorisk", oneLiner: "Antiinflammatoriske ingredienser som støtter BPC-157- og TB-500-protokoller og ledd/sene-restitusjon." },
  },
  "bone-tendon-health": {
    en: { name: "Bone & Tendon Health", shortName: "Bone & Tendon", oneLiner: "Collagen-supporting recipes — bone broth, gelatin, vitamin C — that pair with peptide therapy for connective tissue." },
    de: { name: "Knochen & Sehnen", shortName: "Knochen & Sehnen", oneLiner: "Kollagen-unterstützende Rezepte — Knochenbrühe, Gelatine, Vitamin C — als Begleitung zur Peptidtherapie für Bindegewebe." },
    fr: { name: "Os & tendons", shortName: "Os & tendons", oneLiner: "Recettes qui soutiennent le collagène — bouillon d’os, gélatine, vitamine C — pour accompagner la thérapie peptidique sur les tissus conjonctifs." },
    it: { name: "Ossa e tendini", shortName: "Ossa & tendini", oneLiner: "Ricette che supportano il collagene — brodo di ossa, gelatina, vitamina C — abbinate alla terapia peptidica per il tessuto connettivo." },
    es: { name: "Salud de hueso y tendón", shortName: "Hueso y tendón", oneLiner: "Recetas que apoyan el colágeno — caldo de huesos, gelatina, vitamina C — para acompañar la terapia con péptidos del tejido conectivo." },
    nl: { name: "Bot & pees", shortName: "Bot & pees", oneLiner: "Collageenondersteunende recepten — botbouillon, gelatine, vitamine C — als aanvulling op peptidetherapie voor bindweefsel." },
    pl: { name: "Zdrowie kości i ścięgien", shortName: "Kości & ścięgna", oneLiner: "Przepisy wspierające kolagen — bulion z kości, żelatyna, witamina C — łączone z terapią peptydową dla tkanki łącznej." },
    sv: { name: "Ben & sena", shortName: "Ben & sena", oneLiner: "Kollagenstödjande recept — benbuljong, gelatin, C-vitamin — i kombination med peptidterapi för bindväv." },
    pt: { name: "Saúde de osso e tendão", shortName: "Osso & tendão", oneLiner: "Receitas que apoiam o colágeno — caldo de ossos, gelatina, vitamina C — para acompanhar terapia com péptidos para tecido conjuntivo." },
    ro: { name: "Sănătatea osului și a tendonului", shortName: "Os & tendon", oneLiner: "Rețete care susțin colagenul — supă de oase, gelatină, vitamina C — alături de terapia cu peptide pentru țesutul conjunctiv." },
    cs: { name: "Zdraví kostí a šlach", shortName: "Kosti & šlachy", oneLiner: "Recepty podporující kolagen — vývar z kostí, želatina, vitamin C — ve spojení s peptidovou terapií pojivové tkáně." },
    no: { name: "Ben & sene", shortName: "Ben & sene", oneLiner: "Kollagenstøttende oppskrifter — beinkraft, gelatin, C-vitamin — som passer til peptidterapi for bindevev." },
  },
  "cycle-nutrition": {
    en: { name: "Pre/Post-Cycle Nutrition", shortName: "Cycle Nutrition", oneLiner: "Meal patterns built around the structure of a peptide cycle — pre-cycle priming, post-cycle recovery windows." },
    de: { name: "Vor/Nach dem Zyklus", shortName: "Zyklus", oneLiner: "Ernährungsmuster, die an die Struktur eines Peptidzyklus anschließen — Vorbereitungsphase, Erholungsfenster danach." },
    fr: { name: "Nutrition pré/post-cycle", shortName: "Cycle", oneLiner: "Schémas de repas calés sur la structure d’un cycle de peptides — préparation pré-cycle, fenêtres de récupération post-cycle." },
    it: { name: "Nutrizione pre e post-ciclo", shortName: "Ciclo", oneLiner: "Schemi alimentari costruiti sulla struttura di un ciclo di peptidi — fase di preparazione, finestre di recupero post-ciclo." },
    es: { name: "Nutrición pre y post ciclo", shortName: "Ciclo", oneLiner: "Patrones de comida adaptados a la estructura de un ciclo de péptidos — preparación previa, ventanas de recuperación posterior." },
    nl: { name: "Pre/post-cyclus voeding", shortName: "Cyclus", oneLiner: "Maaltijdpatronen rond de structuur van een peptidecyclus — voorbereiding vooraf, herstelvensters achteraf." },
    pl: { name: "Żywienie pre/post-cyklowe", shortName: "Cykl", oneLiner: "Schematy posiłków dopasowane do struktury cyklu peptydowego — przygotowanie przed, okna regeneracji po." },
    sv: { name: "Pre/post-cykel-näring", shortName: "Cykel", oneLiner: "Måltidsmönster byggda kring strukturen i en peptidcykel — förberedelse före, återhämtning efter." },
    pt: { name: "Nutrição pré e pós-ciclo", shortName: "Ciclo", oneLiner: "Padrões de refeição construídos em torno da estrutura de um ciclo de péptidos — preparação pré-ciclo, janelas de recuperação pós-ciclo." },
    ro: { name: "Nutriție pre/post-ciclu", shortName: "Ciclu", oneLiner: "Tipare de masă construite în jurul structurii unui ciclu de peptide — pregătire pre-ciclu, ferestre de recuperare post-ciclu." },
    cs: { name: "Výživa před/po cyklu", shortName: "Cyklus", oneLiner: "Stravovací schémata stavěná na struktuře peptidového cyklu — příprava před, regenerační okna po." },
    no: { name: "Pre/post-syklus-ernæring", shortName: "Syklus", oneLiner: "Måltidsmønstre bygd rundt strukturen i en peptidsyklus — forberedelse før, restitusjonsvinduer etter." },
  },
};

export function getHubL10n(slug: string, locale: Locale): HubL10n {
  return HUB_L10N[slug]?.[locale] ?? HUB_L10N[slug]?.[DEFAULT_LOCALE] ?? { name: slug, shortName: slug, oneLiner: "" };
}

// =====================================================================
// Medication translations — brand stays in original (regulator-canonical)
// form, only the patient-facing oneLiner translates.
// =====================================================================

const MED_LINES: Record<string, Partial<Record<Locale, string>>> = {
  mounjaro: {
    en: "Tirzepatide acts on both GIP and GLP-1 receptors. Patients commonly report the steepest appetite reduction of any approved drug in this class.",
    de: "Tirzepatid wirkt sowohl auf GIP- als auch GLP-1-Rezeptoren. Patient:innen berichten den stärksten Appetitrückgang aller zugelassenen Wirkstoffe dieser Klasse.",
    fr: "Le tirzépatide agit sur les récepteurs GIP et GLP-1. Les patients rapportent la baisse d’appétit la plus marquée parmi les médicaments approuvés de cette classe.",
    it: "Il tirzepatide agisce sui recettori GIP e GLP-1. I pazienti riferiscono la riduzione dell’appetito più marcata tra i farmaci approvati di questa classe.",
    es: "La tirzepatida actúa sobre los receptores GIP y GLP-1. Los pacientes refieren la reducción del apetito más pronunciada entre los fármacos aprobados de su clase.",
    nl: "Tirzepatide werkt op zowel GIP- als GLP-1-receptoren. Patiënten melden de sterkste eetlustdaling van alle goedgekeurde middelen in deze klasse.",
    pl: "Tirzepatyd działa na receptory GIP i GLP-1. Pacjenci zgłaszają najsilniejszy spadek apetytu spośród zatwierdzonych leków tej klasy.",
    sv: "Tirzepatid verkar på både GIP- och GLP-1-receptorer. Patienter rapporterar den brantaste aptitminskningen av alla godkända läkemedel i denna klass.",
    pt: "A tirzepatida atua nos recetores GIP e GLP-1. Os pacientes relatam a redução de apetite mais acentuada entre os medicamentos aprovados desta classe.",
    ro: "Tirzepatida acționează atât pe receptorii GIP, cât și pe GLP-1. Pacienții raportează cea mai pronunțată reducere a apetitului dintre medicamentele aprobate ale acestei clase.",
    cs: "Tirzepatid působí na receptory GIP i GLP-1. Pacienti hlásí nejvýraznější pokles apetitu mezi všemi schválenými léky této třídy.",
    no: "Tirzepatid virker på både GIP- og GLP-1-reseptorer. Pasienter rapporterer den bratteste appetittnedgangen av alle godkjente legemidler i klassen.",
  },
  ozempic: {
    en: "Semaglutide weekly injection. Appetite reduction is meaningful but typically less abrupt than tirzepatide; patients describe a 'small-stomach' feeling.",
    de: "Wöchentliche Semaglutid-Injektion. Der Appetit sinkt deutlich, aber meist weniger abrupt als unter Tirzepatid; Patient:innen beschreiben ein „kleiner Magen“-Gefühl.",
    fr: "Injection hebdomadaire de sémaglutide. Baisse d’appétit nette mais souvent moins abrupte qu’avec le tirzépatide ; sensation d’« estomac petit ».",
    it: "Iniezione settimanale di semaglutide. Riduzione dell’appetito significativa ma in genere meno brusca rispetto al tirzepatide; sensazione di 'stomaco piccolo'.",
    es: "Inyección semanal de semaglutida. Reducción del apetito notable pero menos abrupta que la tirzepatida; sensación de 'estómago pequeño'.",
    nl: "Wekelijkse semaglutide-injectie. Eetlust daalt duidelijk maar minder abrupt dan bij tirzepatide; gevoel van 'kleine maag'.",
    pl: "Cotygodniowy zastrzyk semaglutydu. Spadek apetytu wyraźny, choć zwykle mniej gwałtowny niż przy tirzepatydzie; uczucie 'małego żołądka'.",
    sv: "Veckovisa semaglutidinjektioner. Aptiten minskar tydligt men oftast mindre abrupt än med tirzepatid; en känsla av 'liten magsäck'.",
    pt: "Injeção semanal de semaglutida. Redução do apetite significativa, mas geralmente menos abrupta do que a tirzepatida; sensação de 'estômago pequeno'.",
    ro: "Injecție săptămânală de semaglutidă. Reducerea apetitului este semnificativă, dar de obicei mai puțin abruptă decât tirzepatida; senzație de 'stomac mic'.",
    cs: "Týdenní injekce semaglutidu. Snížení apetitu je výrazné, ale obvykle méně prudké než u tirzepatidu; popisován pocit 'malého žaludku'.",
    no: "Ukentlig semaglutidinjeksjon. Appetittnedgangen er tydelig, men vanligvis mindre brå enn ved tirzepatid; følelse av 'liten magesekk'.",
  },
  wegovy: {
    en: "Semaglutide at the licensed weight-management dose (up to 2.4 mg/week). Same molecule as Ozempic, higher target dose, slightly more pronounced appetite suppression.",
    de: "Semaglutid in der für die Gewichtsregulierung zugelassenen Dosis (bis zu 2,4 mg/Woche). Gleiches Molekül wie Ozempic, höhere Zieldosis, etwas stärkere Appetitunterdrückung.",
    fr: "Sémaglutide à la dose autorisée pour la gestion du poids (jusqu’à 2,4 mg/semaine). Même molécule qu’Ozempic, dose cible plus élevée, suppression de l’appétit un peu plus marquée.",
    it: "Semaglutide alla dose autorizzata per la gestione del peso (fino a 2,4 mg/settimana). Stessa molecola di Ozempic, dose obiettivo più alta.",
    es: "Semaglutida en dosis autorizada para control de peso (hasta 2,4 mg/semana). Misma molécula que Ozempic, dosis objetivo superior.",
    nl: "Semaglutide in de voor gewichtsbehandeling goedgekeurde dosering (tot 2,4 mg/week). Zelfde molecuul als Ozempic, hogere streefdosis.",
    pl: "Semaglutyd w dawce zarejestrowanej do leczenia otyłości (do 2,4 mg/tydz.). Ta sama cząsteczka co Ozempic, wyższa dawka docelowa.",
    sv: "Semaglutid i den dosering som är godkänd för viktbehandling (upp till 2,4 mg/vecka). Samma molekyl som Ozempic, högre måldos.",
    pt: "Semaglutida na dose autorizada para gestão de peso (até 2,4 mg/semana). Mesma molécula que o Ozempic, dose-alvo mais alta.",
    ro: "Semaglutidă la doza autorizată pentru gestionarea greutății (până la 2,4 mg/săptămână). Aceeași moleculă ca Ozempic, doză-țintă mai mare.",
    cs: "Semaglutid v dávce schválené pro léčbu obezity (až 2,4 mg/týdně). Stejná molekula jako Ozempic, vyšší cílová dávka.",
    no: "Semaglutid i godkjent dose for vektregulering (opptil 2,4 mg/uke). Samme molekyl som Ozempic, høyere måldose.",
  },
  zepbound: {
    en: "Tirzepatide at the weight-management licensed dose. Same molecule as Mounjaro. Patient experience tracks Mounjaro closely.",
    de: "Tirzepatid in der für die Gewichtsregulierung zugelassenen Dosis. Gleiches Molekül wie Mounjaro. Patient:innen-Erfahrung gleicht Mounjaro stark.",
    fr: "Tirzépatide à la dose autorisée pour la gestion du poids. Même molécule que Mounjaro. L’expérience patient suit de près celle de Mounjaro.",
    it: "Tirzepatide alla dose autorizzata per la gestione del peso. Stessa molecola di Mounjaro. L’esperienza del paziente ricalca Mounjaro.",
    es: "Tirzepatida en la dosis autorizada para control de peso. Misma molécula que Mounjaro. La experiencia del paciente sigue muy de cerca a Mounjaro.",
    nl: "Tirzepatide in de voor gewichtsbehandeling goedgekeurde dosering. Zelfde molecuul als Mounjaro. Patiëntenervaring volgt Mounjaro nauw.",
    pl: "Tirzepatyd w dawce zarejestrowanej do leczenia otyłości. Ta sama cząsteczka co Mounjaro. Doświadczenia pacjentów są bliskie Mounjaro.",
    sv: "Tirzepatid i den dosering som är godkänd för viktbehandling. Samma molekyl som Mounjaro. Patientupplevelsen ligger nära Mounjaro.",
    pt: "Tirzepatida na dose autorizada para gestão de peso. Mesma molécula que o Mounjaro. A experiência do paciente segue de perto a do Mounjaro.",
    ro: "Tirzepatidă la doza autorizată pentru gestionarea greutății. Aceeași moleculă ca Mounjaro. Experiența pacientului urmează îndeaproape Mounjaro.",
    cs: "Tirzepatid v dávce schválené pro léčbu obezity. Stejná molekula jako Mounjaro. Zkušenost pacientů je blízká Mounjaru.",
    no: "Tirzepatid i godkjent dose for vektregulering. Samme molekyl som Mounjaro. Pasientopplevelsen følger Mounjaro tett.",
  },
};

export function getMedicationOneLiner(slug: string, locale: Locale): string {
  return MED_LINES[slug]?.[locale] ?? MED_LINES[slug]?.[DEFAULT_LOCALE] ?? "";
}

// =====================================================================
// Meal-plan translations
// =====================================================================

const MEAL_PLAN_L10N: Record<string, Partial<Record<Locale, { title: string; description: string }>>> = {
  "14-day-anti-inflammatory": {
    en: { title: "14-Day Anti-Inflammatory Meal Plan", description: "Two weeks of anti-inflammatory eating built around turmeric, omega-3 fish, dark leafy greens, and bone-broth-based dishes." },
    de: { title: "14-Tage-Plan, entzündungshemmend", description: "Zwei Wochen entzündungshemmende Ernährung rund um Kurkuma, Omega-3-Fisch, dunkles Blattgemüse und Knochenbrühe-Gerichte." },
    fr: { title: "Plan anti-inflammatoire 14 jours", description: "Deux semaines d’alimentation anti-inflammatoire centrée sur le curcuma, les poissons riches en oméga-3, les légumes-feuilles foncés et les bouillons d’os." },
    it: { title: "Piano antinfiammatorio 14 giorni", description: "Due settimane di alimentazione antinfiammatoria costruita intorno a curcuma, pesce ricco di omega-3, verdure a foglia scura e brodi di ossa." },
    es: { title: "Plan antiinflamatorio de 14 días", description: "Dos semanas de alimentación antiinflamatoria construida en torno a cúrcuma, pescado rico en omega-3, verduras de hoja oscura y caldos de hueso." },
    nl: { title: "14-daags ontstekingsremmend plan", description: "Twee weken ontstekingsremmend eten rond kurkuma, omega-3-rijke vis, donkere bladgroenten en gerechten op botbouillon." },
    pl: { title: "14-dniowy plan przeciwzapalny", description: "Dwa tygodnie odżywiania przeciwzapalnego oparte na kurkumie, rybach bogatych w omega-3, ciemnych liściastych warzywach i bulionach z kości." },
    sv: { title: "14-dagars antiinflammatorisk plan", description: "Två veckor antiinflammatorisk kost byggd kring gurkmeja, omega-3-fisk, mörka bladgrönsaker och benbuljongbaserade rätter." },
    pt: { title: "Plano anti-inflamatório de 14 dias", description: "Duas semanas de alimentação anti-inflamatória construída em torno de curcuma, peixe rico em ómega-3, hortaliças verde-escuras e caldos de ossos." },
    ro: { title: "Plan antiinflamator 14 zile", description: "Două săptămâni de alimentație antiinflamatoare în jurul turmericului, peștelui bogat în omega-3, verdețurilor cu frunze închise și supelor de oase." },
    cs: { title: "14denní protizánětlivý plán", description: "Dva týdny protizánětlivého jídelníčku postaveného na kurkumě, rybách bohatých na omega-3, tmavé listové zelenině a vývaru z kostí." },
    no: { title: "14-dagers antiinflammatorisk plan", description: "To uker antiinflammatorisk kosthold rundt gurkemeie, omega-3-fisk, mørke bladgrønnsaker og beinkraftbaserte retter." },
  },
  "glp1-7-day": {
    en: { title: "7-Day GLP-1 Meal Plan", description: "A practical week of meals for patients on Mounjaro, Ozempic, Wegovy, or Zepbound. Small dense plates, 30g+ protein per serving." },
    de: { title: "7-Tage-Plan unter GLP-1", description: "Eine praxistaugliche Woche für Patient:innen unter Mounjaro, Ozempic, Wegovy oder Zepbound. Kleine, dichte Teller, 30 g+ Eiweiß pro Portion." },
    fr: { title: "Plan GLP-1 sur 7 jours", description: "Une semaine pratique de repas pour les patients sous Mounjaro, Ozempic, Wegovy ou Zepbound. Assiettes petites et denses, 30 g+ de protéines par portion." },
    it: { title: "Piano GLP-1 di 7 giorni", description: "Una settimana pratica di pasti per pazienti in Mounjaro, Ozempic, Wegovy o Zepbound. Piatti piccoli e densi, oltre 30 g di proteine per porzione." },
    es: { title: "Plan GLP-1 de 7 días", description: "Una semana práctica de comidas para pacientes en Mounjaro, Ozempic, Wegovy o Zepbound. Platos pequeños y densos, más de 30 g de proteína por ración." },
    nl: { title: "7-daags GLP-1 maaltijdplan", description: "Een praktische week voor patiënten op Mounjaro, Ozempic, Wegovy of Zepbound. Kleine, dichte borden, 30 g+ eiwit per portie." },
    pl: { title: "7-dniowy plan na GLP-1", description: "Praktyczny tydzień posiłków dla pacjentów na Mounjaro, Ozempic, Wegovy lub Zepbound. Małe, treściwe talerze, ponad 30 g białka na porcję." },
    sv: { title: "7-dagars GLP-1-plan", description: "En praktisk vecka för patienter på Mounjaro, Ozempic, Wegovy eller Zepbound. Små, täta tallrikar, 30 g+ protein per portion." },
    pt: { title: "Plano GLP-1 de 7 dias", description: "Uma semana prática de refeições para pacientes em Mounjaro, Ozempic, Wegovy ou Zepbound. Pratos pequenos e densos, mais de 30 g de proteína por porção." },
    ro: { title: "Plan GLP-1 7 zile", description: "O săptămână practică de mese pentru pacienți pe Mounjaro, Ozempic, Wegovy sau Zepbound. Farfurii mici și dense, peste 30 g de proteine pe porție." },
    cs: { title: "7denní GLP-1 jídelníček", description: "Praktický týden jídel pro pacienty na Mounjaro, Ozempic, Wegovy nebo Zepboundu. Malé, hutné talíře, přes 30 g bílkovin na porci." },
    no: { title: "7-dagers GLP-1-plan", description: "En praktisk uke for pasienter på Mounjaro, Ozempic, Wegovy eller Zepbound. Små, tette tallerkener, 30 g+ protein per porsjon." },
  },
};

export function getMealPlanL10n(slug: string, locale: Locale): { title: string; description: string } {
  return MEAL_PLAN_L10N[slug]?.[locale] ?? MEAL_PLAN_L10N[slug]?.[DEFAULT_LOCALE] ?? { title: slug, description: "" };
}
