/**
 * Translations for ThatCleanChef site chrome, hub names, medication
 * summaries, meal-plan metadata, and recipe titles + descriptions across
 * twelve locales.
 *
 * Recipe bodies (items, FAQ answers, sources) are NOT translated here.
 * They remain in English by deliberate editorial decision — machine-
 * translated medical-context dietary advice is unsafe for GLP-1 patients.
 * Human translation of the recipe corpus is queued as a separate workflow.
 *
 * What IS translated:
 *   - chrome: nav, footer, UI labels, the site tagline and description
 *   - hubs: name, shortName, oneLiner (the 5 pillars)
 *   - medications: brand name (kept), oneLiner (translated)
 *   - meal plans: title + description
 *   - recipes: title + description (titles only — bodies in English)
 *
 * Falling back: any locale that doesn't have a key for a given string
 * falls back to `en`. The component using a translation should not crash
 * if a key is missing.
 */

import type { Locale } from "./i18n";

export type ChromeStrings = {
  // navigation
  navHome: string;
  navRecipes: string;
  navGuides: string;
  navMedications: string;
  navMealPlans: string;
  navTeam: string;
  navAbout: string;

  // homepage
  heroEyebrow: string;
  heroH1: string;
  heroDek: string;
  ctaBrowseRecipes: string;
  ctaSeeMealPlans: string;

  // section headings
  sectionPillars: string;
  sectionFeatured: string;
  sectionMedications: string;
  sectionMealPlans: string;
  sectionTrust: string;

  // trust strip
  trustTested: string;
  trustTestedDek: string;
  trustReviewed: string;
  trustReviewedDek: string;
  trustCited: string;
  trustCitedDek: string;

  // recipe surface
  labelTotalTime: string;
  labelProtein: string;
  labelServings: string;
  labelCalories: string;
  labelFiber: string;
  labelLastReviewed: string;
  labelReviewedBy: string;
  labelSeeRecipe: string;
  labelGetThePdf: string;

  // medications callout
  medicationsHeading: string;
  medicationsDek: string;

  // meal plans callout
  mealPlansHeading: string;
  mealPlansDek: string;

  // translation notice
  translationNoticeTitle: string;
  translationNoticeBody: string;

  // language switcher
  switchLanguage: string;

  // footer
  footerKitchenLabel: string;
  footerNoSponsorships: string;
  footerCopyright: string; // includes {year}
};

const en: ChromeStrings = {
  navHome: "Home",
  navRecipes: "Recipes",
  navGuides: "Guides",
  navMedications: "Medications",
  navMealPlans: "Meal plans",
  navTeam: "Team",
  navAbout: "About",

  heroEyebrow: "Clean-eating recipes for people on peptide therapy",
  heroH1: "Recipes for the way you actually eat now.",
  heroDek: "Time-honest recipes, USDA Nutrition Ledger on every page, reviewed by a registered dietitian. Built for people on GLP-1 therapy and peptide protocols.",
  ctaBrowseRecipes: "Browse recipes",
  ctaSeeMealPlans: "See the meal plans",

  sectionPillars: "Browse by peptide context",
  sectionFeatured: "Editor's picks this week",
  sectionMedications: "Eating well on a GLP-1",
  sectionMealPlans: "Free PDFs, RD-reviewed",
  sectionTrust: "How we work",

  trustTested: "Tested 3+ times",
  trustTestedDek: "No recipe ships before it works on home equipment three separate times. We publish what changed between tests.",
  trustReviewed: "Reviewed by a registered dietitian",
  trustReviewedDek: "Every recipe is read by a credentialed RDN before it goes live. Their name and license are on the page.",
  trustCited: "USDA-cited Nutrition Ledger",
  trustCitedDek: "Per-serving values calculated from ingredients against the USDA FoodData Central reference. We disclose where each number comes from.",

  labelTotalTime: "Total time",
  labelProtein: "Protein",
  labelServings: "Servings",
  labelCalories: "Calories",
  labelFiber: "Fibre",
  labelLastReviewed: "Last reviewed",
  labelReviewedBy: "Reviewed by",
  labelSeeRecipe: "See the recipe",
  labelGetThePdf: "Get the PDF",

  medicationsHeading: "Eating well on a GLP-1.",
  medicationsDek: "Recipes selected, scaled, and annotated for the cooking constraints patients on tirzepatide and semaglutide consistently report.",

  mealPlansHeading: "Free PDFs, RD-reviewed.",
  mealPlansDek: "Structured weekly eating, grocery list by section, macros totalled per day. Two plans live; more in the pipeline.",

  translationNoticeTitle: "About this translation",
  translationNoticeBody: "Recipe bodies on ThatCleanChef are written in English. We translate site navigation, recipe titles, and pillar summaries into twelve languages, but keep the cooking instructions and dietary notes in English by editorial choice — machine-translated medical-context dietary content carries real risk. Each recipe page links you to the full English version.",

  switchLanguage: "Language",

  footerKitchenLabel: "Independent test kitchen",
  footerNoSponsorships: "No brand sponsorships",
  footerCopyright: "© {year} ThatCleanChef",
};

const de: ChromeStrings = {
  navHome: "Start",
  navRecipes: "Rezepte",
  navGuides: "Ratgeber",
  navMedications: "Medikamente",
  navMealPlans: "Ernährungspläne",
  navTeam: "Team",
  navAbout: "Über uns",

  heroEyebrow: "Clean-Eating-Rezepte für Menschen unter Peptidtherapie",
  heroH1: "Rezepte für die Art, wie du jetzt isst.",
  heroDek: "Ehrliche Zubereitungszeiten, USDA-Nährwertkarte auf jeder Seite, geprüft von einer Ernährungsberaterin. Entwickelt für Patient:innen unter GLP-1-Therapie und Peptidprotokollen.",
  ctaBrowseRecipes: "Rezepte ansehen",
  ctaSeeMealPlans: "Ernährungspläne anzeigen",

  sectionPillars: "Nach Peptid-Kontext stöbern",
  sectionFeatured: "Empfehlungen der Woche",
  sectionMedications: "Gut essen mit einem GLP-1",
  sectionMealPlans: "Kostenlose PDFs, von Ernährungsberaterinnen geprüft",
  sectionTrust: "Wie wir arbeiten",

  trustTested: "Mindestens dreimal getestet",
  trustTestedDek: "Kein Rezept geht online, bevor es dreimal auf Haushaltsgeräten funktioniert. Wir veröffentlichen, was sich zwischen den Tests geändert hat.",
  trustReviewed: "Von einer Ernährungsberaterin geprüft",
  trustReviewedDek: "Jedes Rezept wird vor Veröffentlichung von einer staatlich registrierten Ernährungsberaterin gegengelesen. Name und Zulassung stehen auf der Seite.",
  trustCited: "USDA-belegte Nährwertkarte",
  trustCitedDek: "Pro Portion aus den Zutaten gegen die USDA-FoodData-Central-Referenz gerechnet. Wir machen transparent, woher jede Zahl stammt.",

  labelTotalTime: "Gesamtzeit",
  labelProtein: "Eiweiß",
  labelServings: "Portionen",
  labelCalories: "Kalorien",
  labelFiber: "Ballaststoffe",
  labelLastReviewed: "Zuletzt geprüft",
  labelReviewedBy: "Geprüft von",
  labelSeeRecipe: "Zum Rezept",
  labelGetThePdf: "PDF herunterladen",

  medicationsHeading: "Gut essen mit einem GLP-1.",
  medicationsDek: "Rezepte, die für die Kochbedingungen ausgewählt, skaliert und kommentiert sind, die Patient:innen unter Tirzepatid und Semaglutid regelmäßig beschreiben.",

  mealPlansHeading: "Kostenlose PDFs, geprüft.",
  mealPlansDek: "Strukturierte Wochenpläne, Einkaufsliste nach Abteilungen, Makros pro Tag aufsummiert. Zwei Pläne sind live, weitere folgen.",

  translationNoticeTitle: "Hinweis zur Übersetzung",
  translationNoticeBody: "Die Rezeptanleitungen auf ThatCleanChef sind auf Englisch verfasst. Wir übersetzen Navigation, Rezepttitel und Pfeiler-Übersichten in zwölf Sprachen, halten die Kochanleitung und die Ernährungshinweise jedoch bewusst auf Englisch — maschinell übersetzte medizinisch relevante Ernährungsinhalte sind ein reales Risiko. Jede Rezeptseite verlinkt auf die vollständige englische Fassung.",

  switchLanguage: "Sprache",

  footerKitchenLabel: "Unabhängige Testküche",
  footerNoSponsorships: "Keine Markenkooperationen",
  footerCopyright: "© {year} ThatCleanChef",
};

const fr: ChromeStrings = {
  navHome: "Accueil",
  navRecipes: "Recettes",
  navGuides: "Guides",
  navMedications: "Médicaments",
  navMealPlans: "Plans de repas",
  navTeam: "Équipe",
  navAbout: "À propos",

  heroEyebrow: "Recettes saines pour les patients sous traitement par peptides",
  heroH1: "Des recettes pour votre façon de manger aujourd'hui.",
  heroDek: "Temps de préparation honnêtes, tableau nutritionnel USDA sur chaque page, validé par une diététicienne diplômée. Conçu pour les patients sous traitement GLP-1 et protocoles peptidiques.",
  ctaBrowseRecipes: "Parcourir les recettes",
  ctaSeeMealPlans: "Voir les plans de repas",

  sectionPillars: "Parcourir par contexte peptidique",
  sectionFeatured: "Sélection de la semaine",
  sectionMedications: "Bien manger sous GLP-1",
  sectionMealPlans: "PDF gratuits, validés par une diététicienne",
  sectionTrust: "Notre méthode",

  trustTested: "Testé au moins trois fois",
  trustTestedDek: "Aucune recette n'est publiée avant d'avoir fonctionné trois fois sur du matériel domestique. Nous publions ce qui a changé entre les tests.",
  trustReviewed: "Validé par une diététicienne diplômée",
  trustReviewedDek: "Chaque recette est relue par une diététicienne accréditée avant publication. Son nom et son numéro d'inscription figurent sur la page.",
  trustCited: "Tableau nutritionnel sourcé USDA",
  trustCitedDek: "Valeurs par portion calculées à partir des ingrédients selon la référence USDA FoodData Central. Nous indiquons l'origine de chaque chiffre.",

  labelTotalTime: "Temps total",
  labelProtein: "Protéines",
  labelServings: "Portions",
  labelCalories: "Calories",
  labelFiber: "Fibres",
  labelLastReviewed: "Dernière validation",
  labelReviewedBy: "Validé par",
  labelSeeRecipe: "Voir la recette",
  labelGetThePdf: "Obtenir le PDF",

  medicationsHeading: "Bien manger sous GLP-1.",
  medicationsDek: "Recettes sélectionnées, ajustées et annotées pour les contraintes de cuisson que les patients sous tirzépatide et sémaglutide signalent régulièrement.",

  mealPlansHeading: "PDF gratuits, validés.",
  mealPlansDek: "Plans hebdomadaires structurés, liste de courses par rayon, macros cumulés par jour. Deux plans en ligne, d'autres à venir.",

  translationNoticeTitle: "À propos de cette traduction",
  translationNoticeBody: "Les recettes complètes de ThatCleanChef sont rédigées en anglais. Nous traduisons la navigation, les titres et les résumés des piliers en douze langues, mais conservons les instructions de cuisson et les notes nutritionnelles en anglais par choix éditorial — un contenu nutritionnel médicalisé traduit automatiquement présente un risque réel. Chaque page de recette renvoie à la version anglaise complète.",

  switchLanguage: "Langue",

  footerKitchenLabel: "Cuisine d'essai indépendante",
  footerNoSponsorships: "Aucun partenariat de marque",
  footerCopyright: "© {year} ThatCleanChef",
};

const it: ChromeStrings = {
  navHome: "Home",
  navRecipes: "Ricette",
  navGuides: "Guide",
  navMedications: "Farmaci",
  navMealPlans: "Piani alimentari",
  navTeam: "Team",
  navAbout: "Chi siamo",

  heroEyebrow: "Ricette pulite per chi segue una terapia peptidica",
  heroH1: "Ricette pensate per come mangi ora.",
  heroDek: "Tempi di preparazione onesti, scheda nutrizionale USDA su ogni pagina, revisionate da una dietista qualificata. Progettate per chi è in terapia GLP-1 o segue protocolli peptidici.",
  ctaBrowseRecipes: "Sfoglia le ricette",
  ctaSeeMealPlans: "Vedi i piani alimentari",

  sectionPillars: "Sfoglia per contesto peptidico",
  sectionFeatured: "I consigli della settimana",
  sectionMedications: "Mangiar bene con un GLP-1",
  sectionMealPlans: "PDF gratuiti, revisionati",
  sectionTrust: "Come lavoriamo",

  trustTested: "Testate almeno tre volte",
  trustTestedDek: "Nessuna ricetta viene pubblicata prima di aver funzionato tre volte con attrezzatura domestica. Pubblichiamo cosa è cambiato tra un test e l'altro.",
  trustReviewed: "Revisionate da una dietista qualificata",
  trustReviewedDek: "Ogni ricetta viene letta da una dietista iscritta all'albo prima della pubblicazione. Nome e iscrizione sono indicati nella pagina.",
  trustCited: "Scheda nutrizionale con fonti USDA",
  trustCitedDek: "Valori per porzione calcolati dagli ingredienti secondo il riferimento USDA FoodData Central. Dichiariamo la fonte di ogni numero.",

  labelTotalTime: "Tempo totale",
  labelProtein: "Proteine",
  labelServings: "Porzioni",
  labelCalories: "Calorie",
  labelFiber: "Fibre",
  labelLastReviewed: "Ultima revisione",
  labelReviewedBy: "Revisionato da",
  labelSeeRecipe: "Vai alla ricetta",
  labelGetThePdf: "Scarica il PDF",

  medicationsHeading: "Mangiar bene con un GLP-1.",
  medicationsDek: "Ricette selezionate, scalate e annotate per i vincoli di cottura che i pazienti in terapia con tirzepatide e semaglutide segnalano regolarmente.",

  mealPlansHeading: "PDF gratuiti, revisionati.",
  mealPlansDek: "Piani settimanali strutturati, lista della spesa per reparto, macro sommati per giorno. Due piani online, altri in arrivo.",

  translationNoticeTitle: "Su questa traduzione",
  translationNoticeBody: "I corpi delle ricette di ThatCleanChef sono scritti in inglese. Traduciamo la navigazione, i titoli delle ricette e i riassunti dei pilastri in dodici lingue, ma manteniamo le istruzioni di cottura e le note nutrizionali in inglese per scelta editoriale — contenuti dietetici medicalmente rilevanti tradotti a macchina presentano un rischio reale. Ogni pagina di ricetta rimanda alla versione inglese completa.",

  switchLanguage: "Lingua",

  footerKitchenLabel: "Cucina di prova indipendente",
  footerNoSponsorships: "Nessuna sponsorizzazione",
  footerCopyright: "© {year} ThatCleanChef",
};

const es: ChromeStrings = {
  navHome: "Inicio",
  navRecipes: "Recetas",
  navGuides: "Guías",
  navMedications: "Medicamentos",
  navMealPlans: "Planes de comidas",
  navTeam: "Equipo",
  navAbout: "Sobre nosotros",

  heroEyebrow: "Recetas saludables para personas en terapia con péptidos",
  heroH1: "Recetas para cómo comes ahora.",
  heroDek: "Tiempos de preparación honestos, panel nutricional USDA en cada página, revisado por una dietista colegiada. Pensado para pacientes en terapia GLP-1 y protocolos peptídicos.",
  ctaBrowseRecipes: "Ver recetas",
  ctaSeeMealPlans: "Ver planes de comidas",

  sectionPillars: "Explorar por contexto peptídico",
  sectionFeatured: "Selección de la semana",
  sectionMedications: "Comer bien con un GLP-1",
  sectionMealPlans: "PDF gratuitos, revisados por dietista",
  sectionTrust: "Cómo trabajamos",

  trustTested: "Probado tres veces o más",
  trustTestedDek: "Ninguna receta se publica sin haber funcionado tres veces en equipo doméstico. Publicamos qué cambió entre las pruebas.",
  trustReviewed: "Revisado por una dietista colegiada",
  trustReviewedDek: "Cada receta es leída por una dietista colegiada antes de publicarse. Su nombre y número de colegiación aparecen en la página.",
  trustCited: "Panel nutricional con fuentes USDA",
  trustCitedDek: "Valores por porción calculados desde los ingredientes contra la referencia USDA FoodData Central. Indicamos de dónde sale cada número.",

  labelTotalTime: "Tiempo total",
  labelProtein: "Proteína",
  labelServings: "Porciones",
  labelCalories: "Calorías",
  labelFiber: "Fibra",
  labelLastReviewed: "Última revisión",
  labelReviewedBy: "Revisado por",
  labelSeeRecipe: "Ver la receta",
  labelGetThePdf: "Descargar el PDF",

  medicationsHeading: "Comer bien con un GLP-1.",
  medicationsDek: "Recetas seleccionadas, escaladas y anotadas para las limitaciones de cocción que los pacientes con tirzepatida y semaglutida señalan regularmente.",

  mealPlansHeading: "PDF gratuitos, revisados.",
  mealPlansDek: "Planes semanales estructurados, lista de la compra por sección, macros totalizados por día. Dos planes en línea, más por llegar.",

  translationNoticeTitle: "Sobre esta traducción",
  translationNoticeBody: "Los cuerpos de las recetas de ThatCleanChef están redactados en inglés. Traducimos la navegación, los títulos de recetas y los resúmenes de pilares a doce idiomas, pero mantenemos las instrucciones de cocción y las notas dietéticas en inglés por decisión editorial: el contenido dietético de relevancia médica traducido por máquina supone un riesgo real. Cada página de receta enlaza con la versión completa en inglés.",

  switchLanguage: "Idioma",

  footerKitchenLabel: "Cocina de pruebas independiente",
  footerNoSponsorships: "Sin patrocinios de marca",
  footerCopyright: "© {year} ThatCleanChef",
};

const nl: ChromeStrings = {
  navHome: "Home",
  navRecipes: "Recepten",
  navGuides: "Gidsen",
  navMedications: "Medicijnen",
  navMealPlans: "Eetschema's",
  navTeam: "Team",
  navAbout: "Over ons",

  heroEyebrow: "Schone recepten voor mensen onder peptidetherapie",
  heroH1: "Recepten voor hoe je nu eet.",
  heroDek: "Eerlijke bereidingstijden, USDA-voedingstabel op elke pagina, beoordeeld door een geregistreerde diëtiste. Gemaakt voor patiënten onder GLP-1-therapie en peptideprotocollen.",
  ctaBrowseRecipes: "Bekijk recepten",
  ctaSeeMealPlans: "Bekijk eetschema's",

  sectionPillars: "Bladeren op peptidecontext",
  sectionFeatured: "Selectie van de week",
  sectionMedications: "Goed eten met een GLP-1",
  sectionMealPlans: "Gratis pdf's, door diëtiste beoordeeld",
  sectionTrust: "Zo werken we",

  trustTested: "Minstens drie keer getest",
  trustTestedDek: "Geen recept gaat live voordat het drie keer werkt op huiskeukenapparatuur. We publiceren wat er tussen de tests veranderde.",
  trustReviewed: "Beoordeeld door een geregistreerde diëtiste",
  trustReviewedDek: "Elk recept wordt voor publicatie gelezen door een ingeschreven diëtiste. Haar naam en registratie staan op de pagina.",
  trustCited: "USDA-onderbouwde voedingstabel",
  trustCitedDek: "Waarden per portie berekend vanuit de ingrediënten tegen de USDA FoodData Central-referentie. We laten zien waar elk getal vandaan komt.",

  labelTotalTime: "Totale tijd",
  labelProtein: "Eiwit",
  labelServings: "Porties",
  labelCalories: "Calorieën",
  labelFiber: "Vezels",
  labelLastReviewed: "Laatste beoordeling",
  labelReviewedBy: "Beoordeeld door",
  labelSeeRecipe: "Bekijk het recept",
  labelGetThePdf: "Download de pdf",

  medicationsHeading: "Goed eten met een GLP-1.",
  medicationsDek: "Recepten geselecteerd, geschaald en geannoteerd voor de kookbeperkingen die patiënten onder tirzepatide en semaglutide consequent rapporteren.",

  mealPlansHeading: "Gratis pdf's, beoordeeld.",
  mealPlansDek: "Gestructureerde weekschema's, boodschappenlijst per afdeling, macro's per dag opgeteld. Twee schema's online, meer in voorbereiding.",

  translationNoticeTitle: "Over deze vertaling",
  translationNoticeBody: "De recepten op ThatCleanChef zijn in het Engels geschreven. We vertalen de navigatie, recepttitels en pijler-samenvattingen naar twaalf talen, maar houden de bereidingsinstructies en voedingsnotities bewust in het Engels — machinaal vertaalde medisch relevante voedingsinformatie is een reëel risico. Elke receptpagina verwijst naar de volledige Engelse versie.",

  switchLanguage: "Taal",

  footerKitchenLabel: "Onafhankelijke testkeuken",
  footerNoSponsorships: "Geen merksponsoring",
  footerCopyright: "© {year} ThatCleanChef",
};

const pl: ChromeStrings = {
  navHome: "Strona główna",
  navRecipes: "Przepisy",
  navGuides: "Przewodniki",
  navMedications: "Leki",
  navMealPlans: "Plany posiłków",
  navTeam: "Zespół",
  navAbout: "O nas",

  heroEyebrow: "Przepisy clean-eating dla osób na terapii peptydowej",
  heroH1: "Przepisy dopasowane do tego, jak naprawdę teraz jesz.",
  heroDek: "Uczciwe czasy przygotowania, tabela wartości odżywczych USDA na każdej stronie, zatwierdzone przez dyplomowanego dietetyka. Stworzone dla pacjentów na terapii GLP-1 i protokołach peptydowych.",
  ctaBrowseRecipes: "Przeglądaj przepisy",
  ctaSeeMealPlans: "Zobacz plany posiłków",

  sectionPillars: "Przeglądaj według kontekstu peptydowego",
  sectionFeatured: "Wybór tygodnia",
  sectionMedications: "Dobre jedzenie przy GLP-1",
  sectionMealPlans: "Bezpłatne pliki PDF, sprawdzone przez dietetyka",
  sectionTrust: "Jak pracujemy",

  trustTested: "Testowane co najmniej trzy razy",
  trustTestedDek: "Żaden przepis nie trafia online, dopóki nie zadziała trzy razy na sprzęcie domowym. Publikujemy, co zmieniło się między testami.",
  trustReviewed: "Sprawdzone przez dyplomowanego dietetyka",
  trustReviewedDek: "Każdy przepis czyta dyplomowany dietetyk przed publikacją. Jego imię i numer rejestracji są na stronie.",
  trustCited: "Tabela wartości odżywczych ze źródłami USDA",
  trustCitedDek: "Wartości na porcję obliczone z surowców względem bazy USDA FoodData Central. Pokazujemy, skąd pochodzi każda liczba.",

  labelTotalTime: "Czas całkowity",
  labelProtein: "Białko",
  labelServings: "Porcje",
  labelCalories: "Kalorie",
  labelFiber: "Błonnik",
  labelLastReviewed: "Ostatnia weryfikacja",
  labelReviewedBy: "Zweryfikował",
  labelSeeRecipe: "Zobacz przepis",
  labelGetThePdf: "Pobierz PDF",

  medicationsHeading: "Dobre jedzenie przy GLP-1.",
  medicationsDek: "Przepisy dobrane, przeskalowane i opisane pod kątem ograniczeń kuchennych, które pacjenci na tirzepatydzie i semaglutydzie regularnie zgłaszają.",

  mealPlansHeading: "Bezpłatne pliki PDF, sprawdzone.",
  mealPlansDek: "Uporządkowane plany tygodniowe, lista zakupów według działów, makra zsumowane na dzień. Dwa plany online, kolejne w przygotowaniu.",

  translationNoticeTitle: "O tym tłumaczeniu",
  translationNoticeBody: "Treść przepisów na ThatCleanChef jest pisana po angielsku. Tłumaczymy nawigację, tytuły przepisów i streszczenia filarów na dwanaście języków, ale instrukcje kuchenne i uwagi dietetyczne pozostają po angielsku z wyboru redakcji — maszynowo tłumaczone treści dietetyczne o znaczeniu medycznym to realne ryzyko. Każda strona przepisu prowadzi do pełnej wersji angielskiej.",

  switchLanguage: "Język",

  footerKitchenLabel: "Niezależna kuchnia testowa",
  footerNoSponsorships: "Bez sponsoringu marek",
  footerCopyright: "© {year} ThatCleanChef",
};

const sv: ChromeStrings = {
  navHome: "Hem",
  navRecipes: "Recept",
  navGuides: "Guider",
  navMedications: "Läkemedel",
  navMealPlans: "Måltidsplaner",
  navTeam: "Team",
  navAbout: "Om oss",

  heroEyebrow: "Rena recept för dig på peptidterapi",
  heroH1: "Recept för hur du faktiskt äter idag.",
  heroDek: "Ärliga tillagningstider, USDA-näringstabell på varje sida, granskat av legitimerad dietist. Byggt för patienter på GLP-1-behandling och peptidprotokoll.",
  ctaBrowseRecipes: "Bläddra bland recept",
  ctaSeeMealPlans: "Se måltidsplaner",

  sectionPillars: "Bläddra efter peptidkontext",
  sectionFeatured: "Veckans urval",
  sectionMedications: "Äta bra med GLP-1",
  sectionMealPlans: "Gratis PDF, granskade",
  sectionTrust: "Så jobbar vi",

  trustTested: "Testat minst tre gånger",
  trustTestedDek: "Inget recept publiceras innan det fungerat tre gånger med utrustning man har hemma. Vi publicerar vad som ändrades mellan testerna.",
  trustReviewed: "Granskat av legitimerad dietist",
  trustReviewedDek: "Varje recept läses av en legitimerad dietist innan publicering. Namn och legitimation står på sidan.",
  trustCited: "USDA-belagd näringstabell",
  trustCitedDek: "Värden per portion beräknade från råvarorna mot USDA FoodData Central. Vi anger varifrån varje siffra kommer.",

  labelTotalTime: "Total tid",
  labelProtein: "Protein",
  labelServings: "Portioner",
  labelCalories: "Kalorier",
  labelFiber: "Fibrer",
  labelLastReviewed: "Senast granskat",
  labelReviewedBy: "Granskat av",
  labelSeeRecipe: "Till receptet",
  labelGetThePdf: "Hämta PDF",

  medicationsHeading: "Äta bra med GLP-1.",
  medicationsDek: "Recept utvalda, skalade och kommenterade efter de matlagningsbegränsningar som patienter på tirzepatid och semaglutid återkommande rapporterar.",

  mealPlansHeading: "Gratis PDF, granskade.",
  mealPlansDek: "Strukturerade veckoplaner, inköpslista per avdelning, makron summerade per dag. Två planer live, fler på väg.",

  translationNoticeTitle: "Om den här översättningen",
  translationNoticeBody: "Receptinnehållet på ThatCleanChef skrivs på engelska. Vi översätter navigation, recepttitlar och pelaröversikter till tolv språk, men behåller tillagningsinstruktioner och kostanteckningar på engelska som ett medvetet redaktionellt val — maskinöversatt medicinskt relevant kostinformation innebär en verklig risk. Varje receptsida länkar till den fullständiga engelska versionen.",

  switchLanguage: "Språk",

  footerKitchenLabel: "Oberoende testkök",
  footerNoSponsorships: "Inga varumärkessamarbeten",
  footerCopyright: "© {year} ThatCleanChef",
};

const pt: ChromeStrings = {
  navHome: "Início",
  navRecipes: "Receitas",
  navGuides: "Guias",
  navMedications: "Medicamentos",
  navMealPlans: "Planos alimentares",
  navTeam: "Equipa",
  navAbout: "Sobre",

  heroEyebrow: "Receitas saudáveis para quem está em terapia com péptidos",
  heroH1: "Receitas para o jeito que come agora.",
  heroDek: "Tempos de preparo honestos, tabela nutricional USDA em cada página, revisto por nutricionista registada. Pensado para pacientes em terapia GLP-1 e protocolos peptídicos.",
  ctaBrowseRecipes: "Ver receitas",
  ctaSeeMealPlans: "Ver planos alimentares",

  sectionPillars: "Procurar por contexto peptídico",
  sectionFeatured: "Escolhas da semana",
  sectionMedications: "Comer bem com um GLP-1",
  sectionMealPlans: "PDFs gratuitos, revistos",
  sectionTrust: "Como trabalhamos",

  trustTested: "Testado três vezes ou mais",
  trustTestedDek: "Nenhuma receita é publicada antes de funcionar três vezes em equipamento doméstico. Publicamos o que mudou entre os testes.",
  trustReviewed: "Revisto por nutricionista registada",
  trustReviewedDek: "Cada receita é lida por uma nutricionista inscrita na ordem antes da publicação. O nome e o número de inscrição estão na página.",
  trustCited: "Tabela nutricional com fontes USDA",
  trustCitedDek: "Valores por porção calculados a partir dos ingredientes contra a referência USDA FoodData Central. Mostramos a origem de cada número.",

  labelTotalTime: "Tempo total",
  labelProtein: "Proteína",
  labelServings: "Doses",
  labelCalories: "Calorias",
  labelFiber: "Fibra",
  labelLastReviewed: "Última revisão",
  labelReviewedBy: "Revisto por",
  labelSeeRecipe: "Ver a receita",
  labelGetThePdf: "Obter o PDF",

  medicationsHeading: "Comer bem com um GLP-1.",
  medicationsDek: "Receitas selecionadas, escaladas e anotadas para as limitações de cozinha que pacientes em tirzepatida e semaglutida relatam de forma consistente.",

  mealPlansHeading: "PDFs gratuitos, revistos.",
  mealPlansDek: "Planos semanais estruturados, lista de compras por secção, macros somados por dia. Dois planos online, mais a caminho.",

  translationNoticeTitle: "Sobre esta tradução",
  translationNoticeBody: "Os corpos das receitas da ThatCleanChef são escritos em inglês. Traduzimos a navegação, os títulos de receitas e os resumos dos pilares para doze idiomas, mas mantemos as instruções de preparo e as notas dietéticas em inglês por opção editorial — conteúdo dietético com relevância médica traduzido por máquina representa um risco real. Cada página de receita liga à versão completa em inglês.",

  switchLanguage: "Idioma",

  footerKitchenLabel: "Cozinha de testes independente",
  footerNoSponsorships: "Sem patrocínios",
  footerCopyright: "© {year} ThatCleanChef",
};

const ro: ChromeStrings = {
  navHome: "Acasă",
  navRecipes: "Rețete",
  navGuides: "Ghiduri",
  navMedications: "Medicamente",
  navMealPlans: "Planuri de mese",
  navTeam: "Echipă",
  navAbout: "Despre",

  heroEyebrow: "Rețete curate pentru pacienții aflați în terapie cu peptide",
  heroH1: "Rețete potrivite pentru cum mănânci acum.",
  heroDek: "Timpi de preparare onești, tabel nutrițional USDA pe fiecare pagină, verificat de o dieteticiană autorizată. Construit pentru pacienții aflați în terapie GLP-1 și pe protocoale peptidice.",
  ctaBrowseRecipes: "Răsfoiește rețete",
  ctaSeeMealPlans: "Vezi planurile de mese",

  sectionPillars: "Răsfoiește după contextul peptidic",
  sectionFeatured: "Recomandările săptămânii",
  sectionMedications: "Să mănânci bine cu GLP-1",
  sectionMealPlans: "PDF-uri gratuite, verificate",
  sectionTrust: "Cum lucrăm",

  trustTested: "Testate de cel puțin trei ori",
  trustTestedDek: "Nicio rețetă nu este publicată înainte să funcționeze de trei ori pe echipamente de uz casnic. Publicăm ce s-a schimbat între teste.",
  trustReviewed: "Verificate de o dieteticiană autorizată",
  trustReviewedDek: "Fiecare rețetă este citită de o dieteticiană înregistrată înainte de publicare. Numele și autorizația apar pe pagină.",
  trustCited: "Tabel nutrițional cu surse USDA",
  trustCitedDek: "Valori pe porție calculate din ingrediente, pe baza referinței USDA FoodData Central. Arătăm de unde provine fiecare cifră.",

  labelTotalTime: "Timp total",
  labelProtein: "Proteină",
  labelServings: "Porții",
  labelCalories: "Calorii",
  labelFiber: "Fibre",
  labelLastReviewed: "Ultima verificare",
  labelReviewedBy: "Verificat de",
  labelSeeRecipe: "Vezi rețeta",
  labelGetThePdf: "Descarcă PDF-ul",

  medicationsHeading: "Să mănânci bine cu GLP-1.",
  medicationsDek: "Rețete selectate, scalate și adnotate pentru constrângerile de gătit pe care pacienții cu tirzepatidă și semaglutidă le raportează în mod constant.",

  mealPlansHeading: "PDF-uri gratuite, verificate.",
  mealPlansDek: "Planuri săptămânale structurate, listă de cumpărături pe raioane, macro însumate pe zi. Două planuri online, altele în pregătire.",

  translationNoticeTitle: "Despre această traducere",
  translationNoticeBody: "Conținutul rețetelor de pe ThatCleanChef este scris în engleză. Traducem navigarea, titlurile rețetelor și rezumatele pilonilor în douăsprezece limbi, dar păstrăm instrucțiunile de gătit și notele dietetice în engleză din alegere editorială — conținutul dietetic cu relevanță medicală tradus automat reprezintă un risc real. Fiecare pagină de rețetă duce la versiunea completă în engleză.",

  switchLanguage: "Limbă",

  footerKitchenLabel: "Bucătărie de test independentă",
  footerNoSponsorships: "Fără parteneriate de brand",
  footerCopyright: "© {year} ThatCleanChef",
};

const cs: ChromeStrings = {
  navHome: "Domů",
  navRecipes: "Recepty",
  navGuides: "Průvodci",
  navMedications: "Léky",
  navMealPlans: "Jídelníčky",
  navTeam: "Tým",
  navAbout: "O nás",

  heroEyebrow: "Čisté recepty pro pacienty na peptidové terapii",
  heroH1: "Recepty pro to, jak skutečně teď jíte.",
  heroDek: "Poctivé časy přípravy, USDA tabulka výživových hodnot na každé stránce, zkontrolováno registrovanou nutriční terapeutkou. Pro pacienty na GLP-1 terapii a peptidových protokolech.",
  ctaBrowseRecipes: "Prohlédnout recepty",
  ctaSeeMealPlans: "Zobrazit jídelníčky",

  sectionPillars: "Procházet podle peptidového kontextu",
  sectionFeatured: "Tipy týdne",
  sectionMedications: "Dobré jídlo na GLP-1",
  sectionMealPlans: "PDF zdarma, zkontrolováno",
  sectionTrust: "Jak pracujeme",

  trustTested: "Otestováno minimálně třikrát",
  trustTestedDek: "Žádný recept nejde online, dokud třikrát nezafunguje na domácí výbavě. Zveřejňujeme, co se mezi testy změnilo.",
  trustReviewed: "Schváleno registrovanou nutriční terapeutkou",
  trustReviewedDek: "Každý recept čte registrovaná nutriční terapeutka před publikací. Její jméno a registrace jsou na stránce.",
  trustCited: "Výživová tabulka s USDA zdroji",
  trustCitedDek: "Hodnoty na porci spočítané z ingrediencí podle USDA FoodData Central. Říkáme, odkud každé číslo pochází.",

  labelTotalTime: "Celkový čas",
  labelProtein: "Bílkoviny",
  labelServings: "Porcí",
  labelCalories: "Kalorie",
  labelFiber: "Vláknina",
  labelLastReviewed: "Naposledy zkontrolováno",
  labelReviewedBy: "Zkontroloval/a",
  labelSeeRecipe: "Zobrazit recept",
  labelGetThePdf: "Stáhnout PDF",

  medicationsHeading: "Dobré jídlo na GLP-1.",
  medicationsDek: "Recepty vybrané, naškálované a komentované podle kuchařských omezení, která pacienti na tirzepatidu a semaglutidu pravidelně popisují.",

  mealPlansHeading: "PDF zdarma, zkontrolováno.",
  mealPlansDek: "Strukturované týdenní jídelníčky, nákupní seznam podle oddělení, makra sečtená na den. Dva plány online, další v přípravě.",

  translationNoticeTitle: "O tomto překladu",
  translationNoticeBody: "Texty receptů na ThatCleanChef jsou psané anglicky. Navigaci, názvy receptů a shrnutí pilířů překládáme do dvanácti jazyků, ale postupy a výživové poznámky necháváme v angličtině jako redakční rozhodnutí — strojově přeložený dietní obsah s medicínskou relevancí představuje reálné riziko. Každá stránka receptu odkazuje na úplnou anglickou verzi.",

  switchLanguage: "Jazyk",

  footerKitchenLabel: "Nezávislá zkušební kuchyně",
  footerNoSponsorships: "Bez sponzoringu značek",
  footerCopyright: "© {year} ThatCleanChef",
};

const no: ChromeStrings = {
  navHome: "Hjem",
  navRecipes: "Oppskrifter",
  navGuides: "Guider",
  navMedications: "Legemidler",
  navMealPlans: "Måltidsplaner",
  navTeam: "Team",
  navAbout: "Om oss",

  heroEyebrow: "Rene oppskrifter for deg på peptidterapi",
  heroH1: "Oppskrifter for slik du faktisk spiser nå.",
  heroDek: "Ærlige tilberedningstider, USDA-næringstabell på hver side, vurdert av autorisert klinisk ernæringsfysiolog. Laget for pasienter på GLP-1-behandling og peptidprotokoller.",
  ctaBrowseRecipes: "Se oppskrifter",
  ctaSeeMealPlans: "Se måltidsplaner",

  sectionPillars: "Bla etter peptidkontekst",
  sectionFeatured: "Ukens utvalg",
  sectionMedications: "Spise godt med GLP-1",
  sectionMealPlans: "Gratis PDF, vurderte",
  sectionTrust: "Slik jobber vi",

  trustTested: "Testet minst tre ganger",
  trustTestedDek: "Ingen oppskrift går live før den fungerer tre ganger på vanlig kjøkkenutstyr. Vi publiserer hva som endret seg mellom testene.",
  trustReviewed: "Vurdert av autorisert ernæringsfysiolog",
  trustReviewedDek: "Hver oppskrift leses av en autorisert klinisk ernæringsfysiolog før publisering. Navn og autorisasjon står på siden.",
  trustCited: "USDA-belagt næringstabell",
  trustCitedDek: "Verdier per porsjon beregnet fra ingrediensene mot USDA FoodData Central. Vi viser hvor hvert tall kommer fra.",

  labelTotalTime: "Total tid",
  labelProtein: "Protein",
  labelServings: "Porsjoner",
  labelCalories: "Kalorier",
  labelFiber: "Fiber",
  labelLastReviewed: "Sist vurdert",
  labelReviewedBy: "Vurdert av",
  labelSeeRecipe: "Til oppskriften",
  labelGetThePdf: "Last ned PDF",

  medicationsHeading: "Spise godt med GLP-1.",
  medicationsDek: "Oppskrifter valgt ut, skalert og kommentert etter de matlagingsbegrensningene pasienter på tirzepatid og semaglutid jevnlig melder.",

  mealPlansHeading: "Gratis PDF, vurderte.",
  mealPlansDek: "Strukturerte ukeplaner, handleliste etter avdeling, makroer summert per dag. To planer live, flere på vei.",

  translationNoticeTitle: "Om denne oversettelsen",
  translationNoticeBody: "Oppskriftsinnholdet på ThatCleanChef skrives på engelsk. Vi oversetter navigasjon, oppskriftstitler og pilarsammendrag til tolv språk, men beholder tilberedningstrinn og kostholdsmerknader på engelsk som et bevisst redaksjonelt valg — maskinoversatt medisinsk relevant kostholdsinnhold er en reell risiko. Hver oppskriftsside lenker til den fullstendige engelske versjonen.",

  switchLanguage: "Språk",

  footerKitchenLabel: "Uavhengig testkjøkken",
  footerNoSponsorships: "Ingen merkevaresponsorater",
  footerCopyright: "© {year} ThatCleanChef",
};

export const T: Record<Locale, ChromeStrings> = {
  en,
  de,
  fr,
  it,
  es,
  nl,
  pl,
  sv,
  pt,
  ro,
  cs,
  no,
};

export function t(locale: Locale): ChromeStrings {
  return T[locale] ?? T.en;
}
