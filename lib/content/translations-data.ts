/**
 * Localised metadata for hubs, medications, meal plans, and recipes.
 * Recipe BODIES (items, FAQ answers, sources) remain in English by
 * editorial decision. Only titles, names, oneLiners, and short descriptions
 * are translated — these are the strings that index for navigation in each
 * locale's SERP and that show up on cards / hub pages / nav.
 *
 * Lookup pattern: `localizedHub("glp1-friendly", "de")` returns the German
 * hub name + oneLiner if available, falling back to English.
 *
 * To add a new translation: extend the locale block in HUB_T / MED_T /
 * MEAL_PLAN_T / RECIPE_T. Missing entries fall back to `en`.
 */

import type { Locale } from "./i18n";

type LocalizedText = Partial<Record<Locale, string>>;

type LocalizedHub = {
  name: LocalizedText;
  shortName: LocalizedText;
  oneLiner: LocalizedText;
};

type LocalizedMedication = {
  oneLiner: LocalizedText;
};

type LocalizedMealPlan = {
  title: LocalizedText;
  h1: LocalizedText;
  description: LocalizedText;
};

type LocalizedRecipe = {
  title: LocalizedText;
  description: LocalizedText;
};

// =============================================================================
// HUBS — 5 pillars
// =============================================================================

export const HUB_T: Record<string, LocalizedHub> = {
  "glp1-friendly": {
    name: {
      en: "GLP-1 Friendly Recipes",
      de: "GLP-1-freundliche Rezepte",
      fr: "Recettes adaptées GLP-1",
      it: "Ricette per GLP-1",
      es: "Recetas adaptadas a GLP-1",
      nl: "GLP-1-vriendelijke recepten",
      pl: "Przepisy przyjazne GLP-1",
      sv: "GLP-1-vänliga recept",
      pt: "Receitas adaptadas a GLP-1",
      ro: "Rețete prietenoase cu GLP-1",
      cs: "Recepty vhodné pro GLP-1",
      no: "GLP-1-vennlige oppskrifter",
    },
    shortName: {
      en: "GLP-1 Friendly",
      de: "GLP-1-freundlich",
      fr: "Adapté GLP-1",
      it: "Per GLP-1",
      es: "Para GLP-1",
      nl: "GLP-1-vriendelijk",
      pl: "Przyjazne GLP-1",
      sv: "GLP-1-vänligt",
      pt: "Para GLP-1",
      ro: "Pentru GLP-1",
      cs: "Pro GLP-1",
      no: "GLP-1-vennlig",
    },
    oneLiner: {
      en: "Small portions, nutrient-dense, easier digestion — for reduced appetite on semaglutide, tirzepatide, or liraglutide.",
      de: "Kleine Portionen, nährstoffdicht, leichter verdaulich — für reduzierten Appetit unter Semaglutid, Tirzepatid oder Liraglutid.",
      fr: "Petites portions, denses en nutriments, plus faciles à digérer — pour l'appétit réduit sous sémaglutide, tirzépatide ou liraglutide.",
      it: "Porzioni piccole, dense di nutrienti, più digeribili — per l'appetito ridotto sotto semaglutide, tirzepatide o liraglutide.",
      es: "Porciones pequeñas, densas en nutrientes, fáciles de digerir — para el apetito reducido bajo semaglutida, tirzepatida o liraglutida.",
      nl: "Kleine porties, voedingsdicht, lichter verteerbaar — voor verminderde eetlust onder semaglutide, tirzepatide of liraglutide.",
      pl: "Małe porcje, gęste odżywczo, łatwiej strawne — przy zmniejszonym apetycie na semaglutydzie, tirzepatydzie lub liraglutydzie.",
      sv: "Små portioner, näringstäta, lättsmälta — för minskad aptit under semaglutid, tirzepatid eller liraglutid.",
      pt: "Porções pequenas, densas em nutrientes, de digestão mais fácil — para apetite reduzido em semaglutida, tirzepatida ou liraglutida.",
      ro: "Porții mici, dense în nutrienți, mai ușor de digerat — pentru apetit redus la semaglutidă, tirzepatidă sau liraglutidă.",
      cs: "Malé porce, výživově husté, lépe stravitelné — pro sníženou chuť k jídlu při semaglutidu, tirzepatidu nebo liraglutidu.",
      no: "Små porsjoner, næringstette, lettere fordøyelse — for redusert appetitt på semaglutid, tirzepatid eller liraglutid.",
    },
  },
  "muscle-preservation": {
    name: {
      en: "High-Protein for Muscle Preservation",
      de: "Eiweißreich zum Muskelerhalt",
      fr: "Riches en protéines pour préserver la masse musculaire",
      it: "Ad alto contenuto proteico per la preservazione muscolare",
      es: "Alta proteína para preservar la masa muscular",
      nl: "Eiwitrijk voor spierbehoud",
      pl: "Wysokobiałkowe dla zachowania mięśni",
      sv: "Proteinrikt för muskelbevarande",
      pt: "Ricas em proteína para preservar massa muscular",
      ro: "Bogate în proteină pentru conservarea masei musculare",
      cs: "S vysokým obsahem bílkovin pro zachování svalů",
      no: "Proteinrike for muskelbevaring",
    },
    shortName: {
      en: "Muscle Preservation",
      de: "Muskelerhalt",
      fr: "Préservation musculaire",
      it: "Preservazione muscolare",
      es: "Preservación muscular",
      nl: "Spierbehoud",
      pl: "Zachowanie mięśni",
      sv: "Muskelbevarande",
      pt: "Preservação muscular",
      ro: "Conservare musculară",
      cs: "Zachování svalů",
      no: "Muskelbevaring",
    },
    oneLiner: {
      en: "30g+ protein per serving. Designed to prevent lean-mass loss during GLP-1 therapy and caloric deficit.",
      de: "Über 30 g Eiweiß pro Portion. Entwickelt, um Verlust fettfreier Masse unter GLP-1-Therapie und im Kaloriendefizit zu verhindern.",
      fr: "Plus de 30 g de protéines par portion. Conçues pour limiter la perte de masse maigre sous traitement GLP-1 et en déficit calorique.",
      it: "Oltre 30 g di proteine per porzione. Pensate per prevenire la perdita di massa magra durante terapia GLP-1 e deficit calorico.",
      es: "Más de 30 g de proteína por porción. Diseñadas para evitar la pérdida de masa magra durante terapia GLP-1 y déficit calórico.",
      nl: "Meer dan 30 g eiwit per portie. Bedoeld om verlies van vetvrije massa tijdens GLP-1-therapie en calorietekort te voorkomen.",
      pl: "Ponad 30 g białka na porcję. Mają zapobiegać utracie masy beztłuszczowej w trakcie terapii GLP-1 i deficytu kalorycznego.",
      sv: "Över 30 g protein per portion. Utformade för att förhindra förlust av fettfri massa under GLP-1-behandling och i kaloriunderskott.",
      pt: "Mais de 30 g de proteína por dose. Pensadas para evitar perda de massa magra em terapia GLP-1 e em défice calórico.",
      ro: "Peste 30 g de proteină pe porție. Concepute pentru a preveni pierderea masei slabe în terapia GLP-1 și în deficit caloric.",
      cs: "Přes 30 g bílkovin na porci. Navržené tak, aby zabránily úbytku svalové hmoty při terapii GLP-1 a kalorickém deficitu.",
      no: "Over 30 g protein per porsjon. Utformet for å hindre tap av muskelmasse under GLP-1-behandling og i kalorimangel.",
    },
  },
  "anti-inflammatory-recovery": {
    name: {
      en: "Anti-Inflammatory Recovery",
      de: "Entzündungshemmende Regeneration",
      fr: "Récupération anti-inflammatoire",
      it: "Recupero antinfiammatorio",
      es: "Recuperación antiinflamatoria",
      nl: "Ontstekingsremmend herstel",
      pl: "Regeneracja przeciwzapalna",
      sv: "Antiinflammatorisk återhämtning",
      pt: "Recuperação anti-inflamatória",
      ro: "Recuperare antiinflamatoare",
      cs: "Protizánětlivá regenerace",
      no: "Antiinflammatorisk restitusjon",
    },
    shortName: {
      en: "Anti-Inflammatory",
      de: "Entzündungshemmend",
      fr: "Anti-inflammatoire",
      it: "Antinfiammatorio",
      es: "Antiinflamatoria",
      nl: "Ontstekingsremmend",
      pl: "Przeciwzapalne",
      sv: "Antiinflammatoriskt",
      pt: "Anti-inflamatória",
      ro: "Antiinflamator",
      cs: "Protizánětlivé",
      no: "Antiinflammatorisk",
    },
    oneLiner: {
      en: "Anti-inflammatory ingredients that support BPC-157, TB-500 protocols and joint/tendon recovery work.",
      de: "Entzündungshemmende Zutaten, die BPC-157-, TB-500-Protokolle und die Erholung von Gelenken/Sehnen unterstützen.",
      fr: "Ingrédients anti-inflammatoires qui accompagnent les protocoles BPC-157 et TB-500 ainsi que la récupération articulaire et tendineuse.",
      it: "Ingredienti antinfiammatori che supportano i protocolli BPC-157, TB-500 e il recupero di articolazioni e tendini.",
      es: "Ingredientes antiinflamatorios que apoyan los protocolos BPC-157, TB-500 y la recuperación de articulaciones y tendones.",
      nl: "Ontstekingsremmende ingrediënten die BPC-157-, TB-500-protocollen en het herstel van gewrichten en pezen ondersteunen.",
      pl: "Składniki przeciwzapalne wspierające protokoły BPC-157, TB-500 oraz regenerację stawów i ścięgien.",
      sv: "Antiinflammatoriska ingredienser som stöttar BPC-157- och TB-500-protokoll samt återhämtning av leder och senor.",
      pt: "Ingredientes anti-inflamatórios que apoiam os protocolos BPC-157, TB-500 e a recuperação articular e tendinosa.",
      ro: "Ingrediente antiinflamatoare care susțin protocoalele BPC-157, TB-500 și recuperarea articulațiilor și tendoanelor.",
      cs: "Protizánětlivé suroviny, které podporují protokoly BPC-157, TB-500 a regeneraci kloubů a šlach.",
      no: "Antiinflammatoriske ingredienser som støtter BPC-157- og TB-500-protokoller og restitusjon av ledd og sener.",
    },
  },
  "bone-tendon-health": {
    name: {
      en: "Bone & Tendon Health",
      de: "Knochen- und Sehnengesundheit",
      fr: "Santé osseuse et tendineuse",
      it: "Salute di ossa e tendini",
      es: "Salud ósea y tendinosa",
      nl: "Bot- en peesgezondheid",
      pl: "Zdrowie kości i ścięgien",
      sv: "Ben- och senhälsa",
      pt: "Saúde óssea e tendinosa",
      ro: "Sănătatea oaselor și a tendoanelor",
      cs: "Zdraví kostí a šlach",
      no: "Bein- og senehelse",
    },
    shortName: {
      en: "Bone & Tendon",
      de: "Knochen & Sehnen",
      fr: "Os et tendons",
      it: "Ossa e tendini",
      es: "Hueso y tendón",
      nl: "Bot & pees",
      pl: "Kości i ścięgna",
      sv: "Ben & senor",
      pt: "Osso e tendão",
      ro: "Os și tendon",
      cs: "Kosti a šlachy",
      no: "Bein og sener",
    },
    oneLiner: {
      en: "Collagen-supporting recipes — bone broth, gelatin, vitamin C — that pair with peptide therapy for connective tissue.",
      de: "Kollagenfördernde Rezepte — Knochenbrühe, Gelatine, Vitamin C — die mit Peptidtherapien für Bindegewebe zusammenpassen.",
      fr: "Recettes qui soutiennent le collagène — bouillon d'os, gélatine, vitamine C — pour accompagner les thérapies peptidiques du tissu conjonctif.",
      it: "Ricette che sostengono il collagene — brodo di ossa, gelatina, vitamina C — abbinate alle terapie peptidiche per il tessuto connettivo.",
      es: "Recetas que apoyan el colágeno — caldo de huesos, gelatina, vitamina C — para acompañar terapias peptídicas del tejido conectivo.",
      nl: "Recepten die collageen ondersteunen — botbouillon, gelatine, vitamine C — passend bij peptidetherapie voor bindweefsel.",
      pl: "Przepisy wspierające kolagen — bulion kostny, żelatyna, witamina C — dopasowane do terapii peptydowych tkanki łącznej.",
      sv: "Recept som stöttar kollagen — benbuljong, gelatin, C-vitamin — som passar peptidterapi för bindväv.",
      pt: "Receitas que apoiam o colagénio — caldo de ossos, gelatina, vitamina C — para acompanhar terapias peptídicas do tecido conjuntivo.",
      ro: "Rețete care susțin colagenul — supă de oase, gelatină, vitamina C — care merg cu terapiile peptidice pentru țesutul conjunctiv.",
      cs: "Recepty podporující kolagen — kostní vývar, želatina, vitamin C — vhodné k peptidovým protokolům pro pojivovou tkáň.",
      no: "Oppskrifter som støtter kollagen — beinkraft, gelatin, vitamin C — som passer peptidterapi for bindevev.",
    },
  },
  "cycle-nutrition": {
    name: {
      en: "Pre/Post-Cycle Nutrition",
      de: "Pre-/Post-Cycle-Ernährung",
      fr: "Nutrition avant/après cycle",
      it: "Nutrizione pre e post ciclo",
      es: "Nutrición pre y post ciclo",
      nl: "Voeding rond de kuur",
      pl: "Żywienie przed i po cyklu",
      sv: "Näring inför och efter cykel",
      pt: "Nutrição pré e pós-ciclo",
      ro: "Nutriție pre și post-ciclu",
      cs: "Výživa před a po cyklu",
      no: "Ernæring før og etter syklus",
    },
    shortName: {
      en: "Cycle Nutrition",
      de: "Cycle-Ernährung",
      fr: "Nutrition cycle",
      it: "Nutrizione del ciclo",
      es: "Nutrición de ciclo",
      nl: "Kuurvoeding",
      pl: "Żywienie cyklu",
      sv: "Cykelnäring",
      pt: "Nutrição de ciclo",
      ro: "Nutriție de ciclu",
      cs: "Výživa cyklu",
      no: "Syklusernæring",
    },
    oneLiner: {
      en: "Meal patterns built around the structure of a peptide cycle — pre-cycle priming, post-cycle recovery windows.",
      de: "Essmuster, die auf die Struktur eines Peptidzyklus abgestimmt sind — Vorbereitung vorher, Erholungsfenster danach.",
      fr: "Schémas de repas calqués sur la structure d'un cycle peptidique — préparation avant cycle, fenêtres de récupération après.",
      it: "Schemi alimentari pensati attorno al ciclo peptidico — preparazione prima, finestre di recupero dopo.",
      es: "Patrones de comida construidos alrededor de la estructura de un ciclo peptídico — preparación pre-ciclo, ventanas de recuperación post-ciclo.",
      nl: "Eetpatronen rond de structuur van een peptidekuur — voorbereiding vooraf, herstelvensters achteraf.",
      pl: "Wzorce posiłków oparte na strukturze cyklu peptydowego — przygotowanie przed, okna regeneracji po.",
      sv: "Måltidsmönster byggda kring strukturen i en peptidcykel — förberedelse före, återhämtningsfönster efter.",
      pt: "Padrões alimentares construídos em torno da estrutura de um ciclo peptídico — preparação pré-ciclo, janelas de recuperação pós-ciclo.",
      ro: "Tipare alimentare construite în jurul structurii unui ciclu peptidic — pregătire înainte, ferestre de recuperare după.",
      cs: "Stravovací vzorce postavené na struktuře peptidového cyklu — příprava před, regenerační okna po.",
      no: "Måltidsmønstre bygget rundt strukturen i en peptidsyklus — forberedelse før, restitusjonsvinduer etter.",
    },
  },
};

// =============================================================================
// MEDICATIONS — oneLiners only (brand names stay as-is)
// =============================================================================

export const MED_T: Record<string, LocalizedMedication> = {
  mounjaro: {
    oneLiner: {
      en: "Tirzepatide acts on both GIP and GLP-1 receptors. Patients commonly report the steepest appetite reduction of any approved drug in this class, with food often described as 'flat' or 'unappealing' rather than craved.",
      de: "Tirzepatid wirkt auf GIP- und GLP-1-Rezeptoren gleichzeitig. Patient:innen berichten häufig vom stärksten Appetitrückgang in dieser Klasse — Essen wirkt eher fade als verlockend.",
      fr: "Le tirzépatide agit sur les récepteurs GIP et GLP-1. Les patients décrivent souvent la réduction d'appétit la plus marquée de la classe, avec une nourriture qui paraît fade plutôt que désirable.",
      it: "Tirzepatide agisce sia sui recettori GIP sia su quelli GLP-1. I pazienti riportano spesso la riduzione dell'appetito più marcata della classe, con il cibo descritto come piatto piuttosto che desiderato.",
      es: "La tirzepatida actúa sobre los receptores GIP y GLP-1. Los pacientes describen con frecuencia la mayor reducción del apetito de la clase, con la comida vista como sosa más que deseada.",
      nl: "Tirzepatide werkt op zowel GIP- als GLP-1-receptoren. Patiënten melden vaak de scherpste eetlustdaling in deze klasse — eten voelt eerder vlak dan begerenswaardig.",
      pl: "Tirzepatyd działa zarówno na receptory GIP, jak i GLP-1. Pacjenci zgłaszają zwykle najsilniejsze obniżenie apetytu w tej klasie — jedzenie odbierane jest jako mdłe, nie pożądane.",
      sv: "Tirzepatid verkar på både GIP- och GLP-1-receptorer. Patienter beskriver ofta den starkaste aptithämningen i klassen — maten upplevs platt snarare än efterlängtad.",
      pt: "A tirzepatida atua nos recetores GIP e GLP-1. Os pacientes descrevem frequentemente a maior redução do apetite da classe, com a comida vista como neutra em vez de apetecível.",
      ro: "Tirzepatida acționează pe receptorii GIP și GLP-1. Pacienții raportează frecvent cea mai pronunțată reducere a apetitului din clasă — mâncarea pare ștearsă, nu dorită.",
      cs: "Tirzepatid působí na GIP i GLP-1 receptory. Pacienti často popisují nejvýraznější útlum chuti k jídlu v této třídě — jídlo působí ploše, ne lákavě.",
      no: "Tirzepatid virker på både GIP- og GLP-1-reseptorer. Pasienter rapporterer ofte den sterkeste appetittreduksjonen i klassen — mat oppleves flat, ikke ønsket.",
    },
  },
  ozempic: {
    oneLiner: {
      en: "Semaglutide weekly injection — first widely-prescribed GLP-1 in this wave. Appetite reduction is meaningful but typically less abrupt than tirzepatide; patients often describe a 'small-stomach' feeling rather than total disinterest in food.",
      de: "Wöchentliche Semaglutid-Injektion — das erste breit verschriebene GLP-1 dieser Welle. Der Appetitrückgang ist deutlich, aber meist weniger abrupt als bei Tirzepatid; Patient:innen beschreiben häufig ein 'kleiner Magen'-Gefühl statt vollständiger Essensgleichgültigkeit.",
      fr: "Sémaglutide en injection hebdomadaire — le premier GLP-1 largement prescrit de cette vague. La baisse d'appétit est nette mais en général moins brutale qu'avec le tirzépatide ; les patients décrivent souvent une sensation d'estomac plus petit plutôt qu'un désintérêt total pour la nourriture.",
      it: "Iniezione settimanale di semaglutide — il primo GLP-1 ampiamente prescritto di questa ondata. La riduzione dell'appetito è marcata ma di solito meno brusca rispetto al tirzepatide; i pazienti descrivono spesso una sensazione di 'stomaco piccolo' più che disinteresse totale per il cibo.",
      es: "Inyección semanal de semaglutida — el primer GLP-1 ampliamente prescrito de esta ola. La reducción del apetito es relevante pero suele ser menos abrupta que con tirzepatida; los pacientes describen una sensación de 'estómago pequeño' más que falta total de interés en la comida.",
      nl: "Wekelijkse semaglutide-injectie — het eerste breed voorgeschreven GLP-1 van deze golf. De eetlustdaling is duidelijk maar meestal minder abrupt dan tirzepatide; patiënten beschrijven vaak een 'kleine maag'-gevoel in plaats van volledige desinteresse in eten.",
      pl: "Cotygodniowy zastrzyk semaglutydu — pierwszy szeroko stosowany GLP-1 tej fali. Spadek apetytu jest znaczący, ale zwykle łagodniejszy niż przy tirzepatydzie; pacjenci opisują uczucie 'małego żołądka' raczej niż całkowitą obojętność na jedzenie.",
      sv: "Veckovis injektion av semaglutid — den första brett förskrivna GLP-1 i denna våg. Aptitminskningen är märkbar men vanligen mindre tvär än tirzepatid; patienter beskriver ofta en känsla av 'liten mage' snarare än totalt ointresse för mat.",
      pt: "Injeção semanal de semaglutida — o primeiro GLP-1 amplamente receitado desta vaga. A redução do apetite é significativa mas geralmente menos abrupta do que com tirzepatida; os pacientes descrevem uma sensação de 'estômago pequeno' em vez de desinteresse total pela comida.",
      ro: "Injecție săptămânală de semaglutidă — primul GLP-1 larg prescris al acestui val. Reducerea apetitului este consistentă, dar de regulă mai puțin abruptă decât tirzepatida; pacienții descriu o senzație de 'stomac mic' mai degrabă decât dezinteres total pentru mâncare.",
      cs: "Týdenní injekce semaglutidu — první široce předepisovaný GLP-1 této vlny. Pokles chuti k jídlu je výrazný, ale obvykle mírnější než u tirzepatidu; pacienti často popisují pocit 'malého žaludku' spíše než úplný nezájem o jídlo.",
      no: "Ukentlig semaglutid-injeksjon — det første GLP-1 som ble bredt forskrevet i denne bølgen. Appetittreduksjonen er tydelig, men vanligvis mindre brå enn tirzepatid; pasienter beskriver ofte en 'liten mage'-følelse i stedet for total uinteresse for mat.",
    },
  },
  wegovy: {
    oneLiner: {
      en: "Semaglutide at the weight-management licensed dose (up to 2.4 mg/week). Same molecule as Ozempic, higher target dose, same patient profile — slightly more pronounced appetite suppression at the top of the titration ladder.",
      de: "Semaglutid in der für die Gewichtsregulation zugelassenen Dosis (bis 2,4 mg/Woche). Gleiches Molekül wie Ozempic, höhere Zieldosis, gleiches Patientenprofil — am oberen Ende der Titration etwas stärkere Appetithemmung.",
      fr: "Sémaglutide à la dose autorisée pour la gestion du poids (jusqu'à 2,4 mg/semaine). Même molécule qu'Ozempic, dose cible plus élevée, profil patient identique — la suppression d'appétit est légèrement plus marquée en haut du palier de titration.",
      it: "Semaglutide alla dose autorizzata per la gestione del peso (fino a 2,4 mg a settimana). Stessa molecola di Ozempic, dose target più alta, stesso profilo paziente — soppressione dell'appetito leggermente più marcata in cima alla titolazione.",
      es: "Semaglutida a la dosis autorizada para el control del peso (hasta 2,4 mg/semana). Misma molécula que Ozempic, dosis objetivo más alta, mismo perfil de paciente — supresión del apetito algo más marcada en la parte alta de la titulación.",
      nl: "Semaglutide op de voor gewichtsbeheersing geregistreerde dosering (tot 2,4 mg/week). Zelfde molecuul als Ozempic, hogere streefdosis, zelfde patiëntprofiel — eetlustonderdrukking wat sterker bovenaan de titratie.",
      pl: "Semaglutyd w dawce zarejestrowanej do leczenia otyłości (do 2,4 mg tygodniowo). Ta sama cząsteczka co Ozempic, wyższa dawka docelowa, ten sam profil pacjenta — nieco silniejsze tłumienie apetytu na szczycie titracji.",
      sv: "Semaglutid i den dos som är godkänd för viktreglering (upp till 2,4 mg/vecka). Samma molekyl som Ozempic, högre måldos, samma patientprofil — något mer uttalad aptithämning högst upp i titreringen.",
      pt: "Semaglutida na dose licenciada para gestão do peso (até 2,4 mg/semana). Mesma molécula do Ozempic, dose-alvo mais alta, perfil de paciente idêntico — supressão do apetite ligeiramente mais marcada no topo da titulação.",
      ro: "Semaglutidă la doza autorizată pentru gestionarea greutății (până la 2,4 mg/săptămână). Aceeași moleculă ca Ozempic, doză țintă mai mare, același profil de pacient — supresia apetitului ceva mai pronunțată la capătul superior al titrării.",
      cs: "Semaglutid v dávce schválené pro řízení hmotnosti (až 2,4 mg/týden). Stejná molekula jako Ozempic, vyšší cílová dávka, stejný profil pacienta — na vrcholu titrace je potlačení chuti k jídlu o něco výraznější.",
      no: "Semaglutid i godkjent vektreguleringsdose (opptil 2,4 mg/uke). Samme molekyl som Ozempic, høyere måldose, samme pasientprofil — noe sterkere appetittdemping på toppen av opptitreringen.",
    },
  },
  zepbound: {
    oneLiner: {
      en: "Tirzepatide at the weight-management licensed dose. Same molecule as Mounjaro, licensed for chronic weight management. Patient experience tracks Mounjaro closely, with the steepest appetite suppression of any approved drug in this class.",
      de: "Tirzepatid in der für die Gewichtsregulation zugelassenen Dosis. Gleiches Molekül wie Mounjaro, zugelassen zur chronischen Gewichtsregulation. Erfahrungen folgen Mounjaro eng — die stärkste Appetithemmung in dieser Klasse.",
      fr: "Tirzépatide à la dose autorisée pour la gestion du poids. Même molécule que Mounjaro, indiquée pour la gestion pondérale au long cours. L'expérience patient suit celle de Mounjaro, avec la suppression d'appétit la plus marquée de la classe.",
      it: "Tirzepatide alla dose autorizzata per la gestione del peso. Stessa molecola di Mounjaro, autorizzata per la gestione cronica del peso. L'esperienza del paziente segue da vicino Mounjaro, con la soppressione dell'appetito più marcata della classe.",
      es: "Tirzepatida a la dosis autorizada para el control del peso. Misma molécula que Mounjaro, autorizada para el manejo crónico del peso. La experiencia del paciente sigue de cerca a Mounjaro, con la mayor supresión del apetito de la clase.",
      nl: "Tirzepatide op de voor gewichtsbeheersing geregistreerde dosering. Zelfde molecuul als Mounjaro, toegelaten voor chronische gewichtsbehandeling. Ervaringen volgen Mounjaro nauwgezet — de sterkste eetlustonderdrukking in deze klasse.",
      pl: "Tirzepatyd w dawce zarejestrowanej do leczenia otyłości. Ta sama cząsteczka co Mounjaro, dopuszczona do przewlekłej kontroli masy ciała. Doświadczenia pacjentów ściśle pokrywają się z Mounjaro — najsilniejsze tłumienie apetytu w klasie.",
      sv: "Tirzepatid i den dos som är godkänd för viktreglering. Samma molekyl som Mounjaro, godkänd för långsiktig viktbehandling. Patienternas upplevelse följer Mounjaro nära — den starkaste aptithämningen i klassen.",
      pt: "Tirzepatida na dose licenciada para gestão do peso. Mesma molécula do Mounjaro, autorizada para gestão crónica de peso. A experiência do paciente segue de perto a do Mounjaro — a maior supressão do apetite da classe.",
      ro: "Tirzepatidă la doza autorizată pentru gestionarea greutății. Aceeași moleculă ca Mounjaro, autorizată pentru gestionarea cronică a greutății. Experiența pacienților urmează îndeaproape Mounjaro — cea mai pronunțată supresie a apetitului din clasă.",
      cs: "Tirzepatid v dávce schválené pro řízení hmotnosti. Stejná molekula jako Mounjaro, schválená pro dlouhodobou léčbu nadváhy. Zkušenost pacientů se blíží Mounjaru — nejvýraznější potlačení chuti k jídlu v této třídě.",
      no: "Tirzepatid i godkjent vektreguleringsdose. Samme molekyl som Mounjaro, godkjent for langvarig vektbehandling. Pasientopplevelsen følger Mounjaro tett — den sterkeste appetittdempingen i klassen.",
    },
  },
};

// =============================================================================
// MEAL PLANS
// =============================================================================

export const MEAL_PLAN_T: Record<string, LocalizedMealPlan> = {
  "14-day-anti-inflammatory": {
    title: {
      en: "14-Day Anti-Inflammatory Meal Plan",
      de: "14-Tage entzündungshemmender Ernährungsplan",
      fr: "Plan de repas anti-inflammatoire de 14 jours",
      it: "Piano alimentare antinfiammatorio da 14 giorni",
      es: "Plan de comidas antiinflamatorio de 14 días",
      nl: "Ontstekingsremmend eetschema van 14 dagen",
      pl: "14-dniowy przeciwzapalny plan posiłków",
      sv: "14-dagars antiinflammatorisk måltidsplan",
      pt: "Plano alimentar anti-inflamatório de 14 dias",
      ro: "Plan de mese antiinflamator pe 14 zile",
      cs: "14denní protizánětlivý jídelníček",
      no: "14-dagers antiinflammatorisk måltidsplan",
    },
    h1: {
      en: "A 14-day anti-inflammatory meal plan, RD-reviewed.",
      de: "Ein 14-Tage entzündungshemmender Ernährungsplan, von einer Ernährungsberaterin geprüft.",
      fr: "Un plan anti-inflammatoire de 14 jours, validé par une diététicienne.",
      it: "Un piano alimentare antinfiammatorio da 14 giorni, revisionato da una dietista.",
      es: "Un plan antiinflamatorio de 14 días, revisado por una dietista.",
      nl: "Een ontstekingsremmend eetschema van 14 dagen, beoordeeld door een diëtiste.",
      pl: "14-dniowy plan przeciwzapalny zaakceptowany przez dietetyka.",
      sv: "En 14-dagars antiinflammatorisk måltidsplan, granskad av dietist.",
      pt: "Um plano alimentar anti-inflamatório de 14 dias, revisto por nutricionista.",
      ro: "Un plan antiinflamator pe 14 zile, verificat de o dieteticiană.",
      cs: "14denní protizánětlivý jídelníček zkontrolovaný nutričním terapeutem.",
      no: "En 14-dagers antiinflammatorisk måltidsplan, vurdert av ernæringsfysiolog.",
    },
    description: {
      en: "Two weeks of anti-inflammatory eating built around turmeric, omega-3 fish, dark leafy greens, and bone-broth-based dishes. Grocery list by section, macros totalled per day, Sunday prep sequence. Free PDF.",
      de: "Zwei Wochen entzündungshemmende Ernährung mit Kurkuma, Omega-3-Fisch, dunklem Blattgemüse und Gerichten auf Knochenbrühe-Basis. Einkaufsliste nach Abteilungen, Makros pro Tag aufsummiert, Sonntags-Vorbereitung. Kostenloses PDF.",
      fr: "Deux semaines d'alimentation anti-inflammatoire autour du curcuma, des poissons riches en oméga-3, des légumes-feuilles foncés et de plats à base de bouillon d'os. Liste de courses par rayon, macros cumulés par jour, préparation du dimanche. PDF gratuit.",
      it: "Due settimane di alimentazione antinfiammatoria attorno a curcuma, pesci ricchi di omega-3, verdure a foglia scura e piatti a base di brodo di ossa. Lista della spesa per reparto, macro sommati per giorno, preparazione della domenica. PDF gratuito.",
      es: "Dos semanas de alimentación antiinflamatoria en torno a cúrcuma, pescados ricos en omega-3, verduras de hoja oscura y platos a base de caldo de huesos. Lista de la compra por sección, macros totalizados por día, preparación del domingo. PDF gratuito.",
      nl: "Twee weken ontstekingsremmend eten rond kurkuma, omega-3-vis, donkere bladgroenten en gerechten op basis van botbouillon. Boodschappenlijst per afdeling, macro's per dag opgeteld, zondagvoorbereiding. Gratis pdf.",
      pl: "Dwa tygodnie żywienia przeciwzapalnego oparte na kurkumie, rybach bogatych w omega-3, ciemnych warzywach liściastych i daniach na bulionie kostnym. Lista zakupów według działów, makra na dzień, niedzielna sekwencja przygotowań. Bezpłatny PDF.",
      sv: "Två veckor antiinflammatoriskt ätande byggt kring gurkmeja, omega-3-fisk, mörka bladgrönsaker och rätter på benbuljong. Inköpslista per avdelning, makron summerade per dag, söndagsförberedelse. Gratis PDF.",
      pt: "Duas semanas de alimentação anti-inflamatória centrada em curcuma, peixes ricos em ómega-3, vegetais de folha escura e pratos à base de caldo de ossos. Lista de compras por secção, macros somados por dia, preparação ao domingo. PDF gratuito.",
      ro: "Două săptămâni de alimentație antiinflamatoare construite în jurul turmericului, peștelui bogat în omega-3, verdețurilor cu frunze închise și preparatelor pe bază de supă de oase. Listă de cumpărături pe raioane, macro însumate pe zi, pregătire de duminică. PDF gratuit.",
      cs: "Dva týdny protizánětlivého stravování postavené kolem kurkumy, omega-3 ryb, tmavé listové zeleniny a jídel na kostním vývaru. Nákupní seznam po odděleních, makra za den, nedělní příprava. PDF zdarma.",
      no: "To uker antiinflammatorisk kosthold bygget rundt gurkemeie, omega-3-fisk, mørke bladgrønnsaker og retter basert på beinkraft. Handleliste etter avdeling, makroer summert per dag, søndagsforberedelse. Gratis PDF.",
    },
  },
  "glp1-7-day": {
    title: {
      en: "7-Day GLP-1 Meal Plan",
      de: "7-Tage GLP-1 Ernährungsplan",
      fr: "Plan de repas GLP-1 sur 7 jours",
      it: "Piano alimentare GLP-1 da 7 giorni",
      es: "Plan de comidas GLP-1 de 7 días",
      nl: "GLP-1 eetschema van 7 dagen",
      pl: "7-dniowy plan posiłków GLP-1",
      sv: "7-dagars GLP-1 måltidsplan",
      pt: "Plano alimentar GLP-1 de 7 dias",
      ro: "Plan de mese GLP-1 pe 7 zile",
      cs: "7denní GLP-1 jídelníček",
      no: "7-dagers GLP-1 måltidsplan",
    },
    h1: {
      en: "A 7-day GLP-1 meal plan, built for small appetites and big protein needs.",
      de: "Ein 7-Tage GLP-1 Ernährungsplan, gemacht für kleinen Appetit und hohen Eiweißbedarf.",
      fr: "Un plan de repas GLP-1 sur 7 jours, conçu pour les petits appétits et les besoins protéiques élevés.",
      it: "Un piano alimentare GLP-1 da 7 giorni, pensato per appetiti ridotti e fabbisogni proteici elevati.",
      es: "Un plan de comidas GLP-1 de 7 días, pensado para apetito pequeño y necesidades proteicas altas.",
      nl: "Een GLP-1 eetschema van 7 dagen, gemaakt voor kleine eetlust en hoge eiwitbehoefte.",
      pl: "7-dniowy plan GLP-1 dla małego apetytu i wysokiego zapotrzebowania na białko.",
      sv: "En 7-dagars GLP-1 måltidsplan, byggd för liten aptit och högt proteinbehov.",
      pt: "Um plano alimentar GLP-1 de 7 dias, pensado para apetites pequenos e necessidades elevadas de proteína.",
      ro: "Un plan de mese GLP-1 pe 7 zile, gândit pentru apetit mic și nevoi mari de proteină.",
      cs: "7denní GLP-1 jídelníček pro malou chuť k jídlu a vysokou potřebu bílkovin.",
      no: "En 7-dagers GLP-1 måltidsplan, laget for liten appetitt og høye proteinbehov.",
    },
    description: {
      en: "A practical week of meals for patients on Mounjaro, Ozempic, Wegovy, or Zepbound. Small dense plates, 30g+ protein per serving, hydration built into the food. RD-reviewed. Free PDF.",
      de: "Eine praktische Woche für Patient:innen unter Mounjaro, Ozempic, Wegovy oder Zepbound. Kleine, dichte Teller, über 30 g Eiweiß pro Portion, Hydrierung im Essen mitgedacht. Von einer Ernährungsberaterin geprüft. Kostenloses PDF.",
      fr: "Une semaine de repas pratique pour les patients sous Mounjaro, Ozempic, Wegovy ou Zepbound. Petites assiettes denses, plus de 30 g de protéines par portion, hydratation intégrée dans les plats. Validé par une diététicienne. PDF gratuit.",
      it: "Una settimana pratica di pasti per chi assume Mounjaro, Ozempic, Wegovy o Zepbound. Piatti piccoli e densi, oltre 30 g di proteine a porzione, idratazione integrata nel cibo. Revisionato da una dietista. PDF gratuito.",
      es: "Una semana práctica de comidas para pacientes en Mounjaro, Ozempic, Wegovy o Zepbound. Platos pequeños y densos, más de 30 g de proteína por porción, hidratación integrada en los alimentos. Revisado por dietista. PDF gratuito.",
      nl: "Een praktische week eten voor patiënten op Mounjaro, Ozempic, Wegovy of Zepbound. Kleine, dichte borden, meer dan 30 g eiwit per portie, hydratatie verwerkt in het eten. Beoordeeld door diëtiste. Gratis pdf.",
      pl: "Praktyczny tydzień posiłków dla pacjentów na Mounjaro, Ozempic, Wegovy lub Zepbound. Małe, gęste talerze, ponad 30 g białka na porcję, nawodnienie wpisane w jedzenie. Sprawdzone przez dietetyka. Bezpłatny PDF.",
      sv: "En praktisk vecka mat för patienter på Mounjaro, Ozempic, Wegovy eller Zepbound. Små, täta tallrikar, över 30 g protein per portion, vätska inbyggd i maten. Granskat av dietist. Gratis PDF.",
      pt: "Uma semana prática de refeições para pacientes com Mounjaro, Ozempic, Wegovy ou Zepbound. Pratos pequenos e densos, mais de 30 g de proteína por dose, hidratação integrada na comida. Revisto por nutricionista. PDF gratuito.",
      ro: "O săptămână practică de mese pentru pacienții pe Mounjaro, Ozempic, Wegovy sau Zepbound. Farfurii mici și dense, peste 30 g proteină pe porție, hidratare integrată în mâncare. Verificat de dieteticiană. PDF gratuit.",
      cs: "Praktický týden jídel pro pacienty na Mounjaru, Ozempicu, Wegovy nebo Zepboundu. Malé husté talíře, přes 30 g bílkovin na porci, hydratace zabudovaná do jídla. Zkontrolováno nutričním terapeutem. PDF zdarma.",
      no: "En praktisk ukes mat for pasienter på Mounjaro, Ozempic, Wegovy eller Zepbound. Små, tette tallerkener, over 30 g protein per porsjon, væske bygget inn i maten. Vurdert av ernæringsfysiolog. Gratis PDF.",
    },
  },
};

// =============================================================================
// RECIPES — title + description only (the body stays in English)
// Translations cover the 23 published recipes by slug.
// =============================================================================

export const RECIPE_T: Record<string, LocalizedRecipe> = {
  "anti-inflammatory-golden-chicken-soup": {
    title: {
      en: "Anti-Inflammatory Golden Chicken Soup",
      de: "Entzündungshemmende goldene Hühnersuppe",
      fr: "Soupe de poulet dorée anti-inflammatoire",
      it: "Zuppa di pollo dorata antinfiammatoria",
      es: "Sopa dorada de pollo antiinflamatoria",
      nl: "Ontstekingsremmende gouden kippensoep",
      pl: "Przeciwzapalna złota zupa drobiowa",
      sv: "Antiinflammatorisk gyllene kycklingsoppa",
      pt: "Sopa dourada de frango anti-inflamatória",
      ro: "Supă aurie de pui antiinflamatoare",
      cs: "Protizánětlivá zlatá kuřecí polévka",
      no: "Antiinflammatorisk gyllen kyllingsuppe",
    },
    description: {
      en: "Chef-tested anti-inflammatory chicken soup with turmeric, ginger, and bone broth. 55 min, 32g protein, Nutrition Ledger below.",
      de: "Vom Koch getestete entzündungshemmende Hühnersuppe mit Kurkuma, Ingwer und Knochenbrühe. 55 Min, 32 g Eiweiß, Nährwertkarte unten.",
      fr: "Soupe de poulet anti-inflammatoire testée en cuisine, au curcuma, gingembre et bouillon d'os. 55 min, 32 g de protéines, tableau nutritionnel ci-dessous.",
      it: "Zuppa di pollo antinfiammatoria testata in cucina, con curcuma, zenzero e brodo di ossa. 55 min, 32 g di proteine, scheda nutrizionale sotto.",
      es: "Sopa de pollo antiinflamatoria probada en cocina, con cúrcuma, jengibre y caldo de huesos. 55 min, 32 g de proteína, panel nutricional abajo.",
      nl: "In de testkeuken bewezen ontstekingsremmende kippensoep met kurkuma, gember en botbouillon. 55 min, 32 g eiwit, voedingstabel hieronder.",
      pl: "Zupa drobiowa przeciwzapalna sprawdzona w kuchni, z kurkumą, imbirem i bulionem kostnym. 55 min, 32 g białka, tabela wartości odżywczych poniżej.",
      sv: "Köksprovad antiinflammatorisk kycklingsoppa med gurkmeja, ingefära och benbuljong. 55 min, 32 g protein, näringstabell nedan.",
      pt: "Sopa de frango anti-inflamatória testada em cozinha, com curcuma, gengibre e caldo de ossos. 55 min, 32 g de proteína, tabela nutricional abaixo.",
      ro: "Supă de pui antiinflamatoare testată în bucătărie, cu turmeric, ghimbir și supă de oase. 55 min, 32 g proteină, tabel nutrițional mai jos.",
      cs: "Kuchyní vyzkoušená protizánětlivá kuřecí polévka s kurkumou, zázvorem a kostním vývarem. 55 min, 32 g bílkovin, výživová tabulka níže.",
      no: "Kjøkkenprøvd antiinflammatorisk kyllingsuppe med gurkemeie, ingefær og beinkraft. 55 min, 32 g protein, næringstabell nedenfor.",
    },
  },
  "cottage-cheese-pancakes": {
    title: {
      en: "Cottage Cheese Pancakes",
      de: "Hüttenkäse-Pfannkuchen",
      fr: "Pancakes au cottage cheese",
      it: "Pancake al cottage cheese",
      es: "Tortitas de queso cottage",
      nl: "Cottage cheese-pannenkoeken",
      pl: "Placki z twarogu wiejskiego",
      sv: "Cottage cheese-pannkakor",
      pt: "Panquecas de queijo cottage",
      ro: "Clătite cu brânză cottage",
      cs: "Lívance z cottage sýra",
      no: "Cottage cheese-pannekaker",
    },
    description: {
      en: "Three-ingredient cottage cheese pancakes — 28g protein per stack of three, 12 minutes start to plate. Tested for GLP-1 patients front-loading morning protein.",
      de: "Drei-Zutaten-Pfannkuchen mit Hüttenkäse — 28 g Eiweiß pro Stapel, 12 Minuten vom Start bis zum Teller. Getestet für GLP-1-Patient:innen, die morgens Eiweiß vorziehen.",
      fr: "Pancakes au cottage cheese en trois ingrédients — 28 g de protéines par pile de trois, 12 minutes de la cuisine à l'assiette. Testés pour les patients sous GLP-1 qui chargent leurs protéines le matin.",
      it: "Pancake al cottage cheese in tre ingredienti — 28 g di proteine per pila da tre, 12 minuti dall'avvio al piatto. Testati per chi è in terapia GLP-1 e sposta le proteine al mattino.",
      es: "Tortitas de cottage en tres ingredientes — 28 g de proteína por pila de tres, 12 minutos del fogón al plato. Probadas para pacientes en GLP-1 que adelantan la proteína de la mañana.",
      nl: "Cottage cheese-pannenkoeken met drie ingrediënten — 28 g eiwit per stapel van drie, 12 minuten van pan tot bord. Getest voor GLP-1-patiënten die hun eiwit vooraan in de dag plaatsen.",
      pl: "Placki z twarogu wiejskiego z trzech składników — 28 g białka w stosie trzech, 12 minut od patelni do talerza. Sprawdzone dla pacjentów na GLP-1 koncentrujących białko rano.",
      sv: "Pannkakor på cottage cheese med tre ingredienser — 28 g protein per stapel om tre, 12 minuter från start till tallrik. Testade för GLP-1-patienter som lägger proteinet på morgonen.",
      pt: "Panquecas de cottage com três ingredientes — 28 g de proteína por pilha de três, 12 minutos do fogão ao prato. Testadas para pacientes em GLP-1 que antecipam a proteína da manhã.",
      ro: "Clătite cu brânză cottage din trei ingrediente — 28 g proteină la o stivă de trei, 12 minute de la tigaie la farfurie. Testate pentru pacienții pe GLP-1 care își aduc proteina dimineața.",
      cs: "Lívance z cottage sýra ze tří surovin — 28 g bílkovin na trojici, 12 minut od pánve na talíř. Vyzkoušeno pro pacienty na GLP-1, kteří přesouvají bílkoviny na ráno.",
      no: "Cottage cheese-pannekaker med tre ingredienser — 28 g protein per stabel på tre, 12 minutter fra panne til tallerken. Testet for GLP-1-pasienter som flytter proteinet til morgenen.",
    },
  },
  "bone-broth": {
    title: {
      en: "Bone Broth, the slow method",
      de: "Knochenbrühe, langsam gekocht",
      fr: "Bouillon d'os, méthode lente",
      it: "Brodo di ossa, metodo lento",
      es: "Caldo de huesos, método lento",
      nl: "Botbouillon, traag gemaakt",
      pl: "Bulion kostny, metoda powolna",
      sv: "Benbuljong, långsam metod",
      pt: "Caldo de ossos, método lento",
      ro: "Supă de oase, metoda lentă",
      cs: "Kostní vývar pomalou metodou",
      no: "Beinkraft, langsom metode",
    },
    description: {
      en: "A 24-hour bone broth recipe that gels at the fridge — collagen-rich, low-sodium, sippable from a mug. Tested for connective-tissue support alongside BPC-157 and TB-500 protocols.",
      de: "Ein 24-Stunden-Rezept für Knochenbrühe, die im Kühlschrank geliert — kollagenreich, salzarm, aus der Tasse trinkbar. Getestet zur Bindegewebeunterstützung neben BPC-157- und TB-500-Protokollen.",
      fr: "Une recette de bouillon d'os de 24 heures qui prend en gelée au frigo — riche en collagène, peu salée, à siroter à la tasse. Testée pour soutenir le tissu conjonctif aux côtés des protocoles BPC-157 et TB-500.",
      it: "Una ricetta di brodo di ossa da 24 ore che gelifica in frigo — ricco di collagene, povero di sodio, da sorseggiare in tazza. Testato a sostegno del tessuto connettivo accanto ai protocolli BPC-157 e TB-500.",
      es: "Una receta de caldo de huesos de 24 horas que cuaja en la nevera — rica en colágeno, baja en sodio, para tomar en taza. Probada como apoyo del tejido conjuntivo junto a los protocolos BPC-157 y TB-500.",
      nl: "Een botbouillon van 24 uur die geleert in de koelkast — collageenrijk, laag in natrium, drinkbaar uit een mok. Getest ter ondersteuning van bindweefsel naast BPC-157- en TB-500-protocollen.",
      pl: "Bulion kostny gotowany 24 godziny, który tężeje w lodówce — bogaty w kolagen, niskosodowy, do popijania z kubka. Sprawdzony jako wsparcie tkanki łącznej obok protokołów BPC-157 i TB-500.",
      sv: "En 24-timmars benbuljong som geléar i kylen — kollagenrik, låg natriumhalt, kan drickas ur mugg. Testad som stöd för bindväv vid sidan av BPC-157- och TB-500-protokoll.",
      pt: "Uma receita de caldo de ossos de 24 horas que ganha gel no frigorífico — rica em colagénio, com pouco sódio, para beber à caneca. Testada como apoio ao tecido conjuntivo a par dos protocolos BPC-157 e TB-500.",
      ro: "O rețetă de supă de oase de 24 de ore care se gelifiază la frigider — bogată în colagen, săracă în sodiu, de băut la cană. Testată ca sprijin pentru țesutul conjunctiv alături de protocoalele BPC-157 și TB-500.",
      cs: "Recept na 24hodinový kostní vývar, který v ledničce želíruje — bohatý na kolagen, s nízkým obsahem sodíku, k usrkávání z hrnku. Vyzkoušeno na podporu pojivové tkáně vedle protokolů BPC-157 a TB-500.",
      no: "En 24-timers beinkraft som geléerer i kjøleskapet — kollagenrik, natriumfattig, drikkes fra kopp. Testet som støtte for bindevev sammen med BPC-157- og TB-500-protokoller.",
    },
  },
};

// =============================================================================
// LOOKUP HELPERS
// =============================================================================

function pick(text: LocalizedText, locale: Locale, fallback: string): string {
  return text[locale] ?? text.en ?? fallback;
}

export function localizedHubName(slug: string, locale: Locale, fallback: string): string {
  const h = HUB_T[slug];
  return h ? pick(h.name, locale, fallback) : fallback;
}

export function localizedHubShortName(slug: string, locale: Locale, fallback: string): string {
  const h = HUB_T[slug];
  return h ? pick(h.shortName, locale, fallback) : fallback;
}

export function localizedHubOneLiner(slug: string, locale: Locale, fallback: string): string {
  const h = HUB_T[slug];
  return h ? pick(h.oneLiner, locale, fallback) : fallback;
}

export function localizedMedicationOneLiner(slug: string, locale: Locale, fallback: string): string {
  const m = MED_T[slug];
  return m ? pick(m.oneLiner, locale, fallback) : fallback;
}

export function localizedMealPlanTitle(slug: string, locale: Locale, fallback: string): string {
  const p = MEAL_PLAN_T[slug];
  return p ? pick(p.title, locale, fallback) : fallback;
}

export function localizedMealPlanH1(slug: string, locale: Locale, fallback: string): string {
  const p = MEAL_PLAN_T[slug];
  return p ? pick(p.h1, locale, fallback) : fallback;
}

export function localizedMealPlanDescription(slug: string, locale: Locale, fallback: string): string {
  const p = MEAL_PLAN_T[slug];
  return p ? pick(p.description, locale, fallback) : fallback;
}

export function localizedRecipeTitle(slug: string, locale: Locale, fallback: string): string {
  const r = RECIPE_T[slug];
  return r ? pick(r.title, locale, fallback) : fallback;
}

export function localizedRecipeDescription(slug: string, locale: Locale, fallback: string): string {
  const r = RECIPE_T[slug];
  return r ? pick(r.description, locale, fallback) : fallback;
}
