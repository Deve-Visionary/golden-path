/* Golden Path - Script complet Vanilla JS */
const SHEETS_URL = "https://script.google.com/macros/s/AKfycbxoGaKwv5m22qhR5e2_BooD6OMLFzxS1DI-dA3G4bZgi5Ikmc2l7wc709JZX1ZRnyx4/exec";

// ===================== DATABASE =====================
const FILIERES_DB = {
  "A4": [
    {nom:"Lettres Modernes", profils:["A","S","E"], diplome:"Licence", alt:false, altDiplome:""},
    {nom:"Sociologie", profils:["S","A","E"], diplome:"Licence", alt:false, altDiplome:""},
    {nom:"Philosophie", profils:["I","A","C"], diplome:"Licence", alt:false, altDiplome:""},
    {nom:"Histoire et Archéologie", profils:["I","A","S"], diplome:"Licence", alt:false, altDiplome:""},
    {nom:"Psychologie", profils:["S","I","A"], diplome:"Licence", alt:false, altDiplome:""},
    {nom:"Géographie", profils:["I","S","R"], diplome:"Licence", alt:false, altDiplome:""},
    {nom:"Anglais", profils:["S","A","I"], diplome:"Licence", alt:true, altDiplome:"BTS Tourisme-Hôtellerie (langues)"},
    {nom:"Linguistique", profils:["I","A","C"], diplome:"Licence", alt:false, altDiplome:""},
    {nom:"Communication et Journalisme", profils:["A","E","I"], diplome:"Licence", alt:true, altDiplome:"BTS Communication d'Entreprise"},
    {nom:"Sciences Juridiques et Politiques", profils:["E","C","S"], diplome:"Licence", alt:false, altDiplome:""},
    {nom:"Sciences de l'Information Documentaire", profils:["C","A","I"], diplome:"Licence", alt:true, altDiplome:"BTS Sciences de l'Information"},
    {nom:"Gestion du Patrimoine Culturel", profils:["A","S","E"], diplome:"Licence", alt:true, altDiplome:"BTS Tourisme-Hôtellerie"},
    {nom:"Allemand", profils:["S","A","I"], diplome:"Licence", alt:false, altDiplome:""}
  ],
  "C": [
    {nom:"MPCI (Maths, Physique, Chimie, Info)", profils:["I","R","C"], diplome:"Licence", alt:false, altDiplome:""},
    {nom:"Mathématiques Fondamentales", profils:["I","C","R"], diplome:"Licence", alt:false, altDiplome:""},
    {nom:"Sciences Physiques", profils:["I","R","C"], diplome:"Licence", alt:false, altDiplome:""},
    {nom:"Chimie", profils:["I","R","C"], diplome:"Licence", alt:true, altDiplome:"BTS Industries Chimiques"},
    {nom:"SVT", profils:["I","R","S"], diplome:"Licence", alt:false, altDiplome:""},
    {nom:"Biologie", profils:["I","R","S"], diplome:"Licence", alt:true, altDiplome:"BTS Analyses Biologiques"},
    {nom:"Géologie", profils:["R","I","C"], diplome:"Licence", alt:true, altDiplome:"BTS Géologie et Mines"},
    {nom:"Médecine", profils:["I","S","R"], diplome:"Doctorat", alt:false, altDiplome:""},
    {nom:"Pharmacie", profils:["I","S","C"], diplome:"Doctorat", alt:false, altDiplome:""},
    {nom:"Chirurgie Dentaire", profils:["R","I","S"], diplome:"Doctorat", alt:false, altDiplome:""},
    {nom:"Statistiques et Informatique (STIE)", profils:["I","C","R"], diplome:"Licence", alt:true, altDiplome:"BTS Statistique-Informatique"},
    {nom:"Ingénierie Mathématique et Statistique", profils:["I","C","R"], diplome:"Diplôme d'Ingénieur", alt:false, altDiplome:""},
    {nom:"Sciences et Technologies (ST)", profils:["I","R","C"], diplome:"Licence", alt:true, altDiplome:"BTS Maintenance Industrielle"},
    {nom:"Agronomie", profils:["R","I","S"], diplome:"Diplôme d'Ingénieur", alt:true, altDiplome:"BTS Agriculture"},
    {nom:"Eaux et Forêts", profils:["R","I","S"], diplome:"Licence", alt:true, altDiplome:"BTS Eaux et Forêts"},
    {nom:"Élevage", profils:["R","I","S"], diplome:"Licence", alt:true, altDiplome:"BTS Élevage"},
    {nom:"Génie Civil (BTP)", profils:["R","I","C"], diplome:"Diplôme d'Ingénieur", alt:true, altDiplome:"BTS Génie Civil"},
    {nom:"Génie Électrique", profils:["R","I","C"], diplome:"Diplôme d'Ingénieur", alt:true, altDiplome:"BTS Électrotechnique"},
    {nom:"Génie Minier", profils:["R","I","C"], diplome:"Diplôme d'Ingénieur", alt:true, altDiplome:"BTS Exploitation Minière"},
    {nom:"MIAGE", profils:["I","C","R"], diplome:"Licence", alt:true, altDiplome:"BTS Informatique de Gestion"},
    {nom:"Assurances, Banques, Finances (ABF)", profils:["C","I","E"], diplome:"Licence", alt:true, altDiplome:"BTS Banque/Assurance"},
    {nom:"Architecture et Urbanisme", profils:["A","R","I"], diplome:"Diplôme d'Ingénieur", alt:true, altDiplome:"BTS Génie Civil Btiment"},
    {nom:"Génie Électrique et Énergétique (ENR)", profils:["R","I","C"], diplome:"Diplôme d'Ingénieur", alt:true, altDiplome:"BTS Énergies Renouvelables"},
    {nom:"Aéronautique", profils:["R","I","C"], diplome:"Diplôme d'Ingénieur", alt:false, altDiplome:""}
  ],
  "D": [
    {nom:"SVT", profils:["I","R","S"], diplome:"Licence", alt:false, altDiplome:""},
    {nom:"Biologie", profils:["I","R","S"], diplome:"Licence", alt:true, altDiplome:"BTS Analyses Biologiques"},
    {nom:"Géologie", profils:["R","I","C"], diplome:"Licence", alt:true, altDiplome:"BTS Géologie et Mines"},
    {nom:"Agronomie", profils:["R","I","S"], diplome:"Diplôme d'Ingénieur", alt:true, altDiplome:"BTS Agriculture"},
    {nom:"Élevage", profils:["R","I","S"], diplome:"Licence", alt:true, altDiplome:"BTS Élevage"},
    {nom:"Eaux et Forêts", profils:["R","I","S"], diplome:"Licence", alt:true, altDiplome:"BTS Eaux et Forêts"},
    {nom:"Agro-Sylvo-Pastoral", profils:["R","I","S"], diplome:"Licence", alt:true, altDiplome:"BTS Agro-Sylvo-Pastoral"},
    {nom:"Médecine", profils:["I","S","R"], diplome:"Doctorat", alt:false, altDiplome:""},
    {nom:"Pharmacie", profils:["I","S","C"], diplome:"Doctorat", alt:false, altDiplome:""},
    {nom:"Analyse Biomédicale", profils:["I","S","C"], diplome:"Licence", alt:true, altDiplome:"BTS Analyses Biomédicales"},
    {nom:"Génie Civil (BTP)", profils:["R","I","C"], diplome:"Diplôme d'Ingénieur", alt:true, altDiplome:"BTS Génie Civil"},
    {nom:"Génie Électrique", profils:["R","I","C"], diplome:"Diplôme d'Ingénieur", alt:true, altDiplome:"BTS Électrotechnique"},
    {nom:"Génie Biologique", profils:["R","I","S"], diplome:"Licence", alt:true, altDiplome:"BTS Génie Biologique"},
    {nom:"MIAGE", profils:["I","C","R"], diplome:"Licence", alt:true, altDiplome:"BTS Informatique de Gestion"},
    {nom:"Assurances, Banques, Finances (ABF)", profils:["C","I","E"], diplome:"Licence", alt:true, altDiplome:"BTS Banque/Assurance"},
    {nom:"Géographie Générale et Appliquée", profils:["I","S","R"], diplome:"Licence", alt:true, altDiplome:"DUT Géomatique/Topographie"},
    {nom:"Sociologie et Économie Rurale", profils:["S","I","E"], diplome:"Licence", alt:false, altDiplome:""},
    {nom:"Architecture et Urbanisme", profils:["A","R","I"], diplome:"Diplôme d'Ingénieur", alt:true, altDiplome:"BTS Génie Civil Btiment"},
    {nom:"Génie Électrique et Énergétique (ENR)", profils:["R","I","C"], diplome:"Diplôme d'Ingénieur", alt:true, altDiplome:"BTS Énergies Renouvelables"},
    {nom:"Aéronautique", profils:["R","I","C"], diplome:"Diplôme d'Ingénieur", alt:false, altDiplome:""}
  ],
  "E": [
    {nom:"Génie Civil (BTP)", profils:["R","I","C"], diplome:"Diplôme d'Ingénieur", alt:true, altDiplome:"BTS Génie Civil"},
    {nom:"Génie Électrique", profils:["R","I","C"], diplome:"Diplôme d'Ingénieur", alt:true, altDiplome:"BTS Électrotechnique"},
    {nom:"Électromécanique", profils:["R","I","C"], diplome:"Diplôme d'Ingénieur", alt:true, altDiplome:"BTS Électromécanique"},
    {nom:"Génie Mécanique et Productique (GMP)", profils:["R","I","C"], diplome:"Diplôme d'Ingénieur", alt:true, altDiplome:"BTS Génie Mécanique"},
    {nom:"Génie Industriel et Maintenance (GIM)", profils:["R","I","C"], diplome:"Diplôme d'Ingénieur", alt:true, altDiplome:"BTS Maintenance Industrielle"},
    {nom:"MPCI", profils:["I","R","C"], diplome:"Licence", alt:false, altDiplome:""},
    {nom:"Statistiques et Informatique (STIE)", profils:["I","C","R"], diplome:"Licence", alt:true, altDiplome:"BTS Statistique-Informatique"},
    {nom:"MIAGE", profils:["I","C","R"], diplome:"Licence", alt:true, altDiplome:"BTS Informatique de Gestion"},
    {nom:"Architecture et Urbanisme", profils:["A","R","I"], diplome:"Diplôme d'Ingénieur", alt:true, altDiplome:"BTS Génie Civil Btiment"},
    {nom:"Génie Électrique et Énergétique (ENR)", profils:["R","I","C"], diplome:"Diplôme d'Ingénieur", alt:true, altDiplome:"BTS Énergies Renouvelables"},
    {nom:"Aéronautique", profils:["R","I","C"], diplome:"Diplôme d'Ingénieur", alt:false, altDiplome:""},
    {nom:"Licence Professionnelle Agroéconomie", profils:["R","I","E"], diplome:"Licence", alt:true, altDiplome:"BTS Agroéconomie"}
  ],
  "F2": [
    {nom:"Génie Mécanique et Productique (GMP)", profils:["R","I","C"], diplome:"Diplôme d'Ingénieur", alt:true, altDiplome:"BTS Génie Mécanique"},
    {nom:"Génie Industriel et Maintenance (GIM)", profils:["R","I","C"], diplome:"Diplôme d'Ingénieur", alt:true, altDiplome:"BTS Maintenance Industrielle"},
    {nom:"Génie Civil (BTP)", profils:["R","I","C"], diplome:"Diplôme d'Ingénieur", alt:true, altDiplome:"BTS Génie Civil"},
    {nom:"Génie Électrique", profils:["R","I","C"], diplome:"Diplôme d'Ingénieur", alt:true, altDiplome:"BTS Électrotechnique"},
    {nom:"Électromécanique", profils:["R","I","C"], diplome:"Diplôme d'Ingénieur", alt:true, altDiplome:"BTS Électromécanique"},
    {nom:"Informatique industrielle", profils:["R","I","C"], diplome:"Licence", alt:true, altDiplome:"BTS Informatique Industrielle"},
    {nom:"Électronique, Électrotechnique, Automatisme", profils:["R","I","C"], diplome:"Diplôme d'Ingénieur", alt:true, altDiplome:"BTS Électronique/Automatisme"},
    {nom:"Génie Électrique et Énergétique (ENR)", profils:["R","I","C"], diplome:"Diplôme d'Ingénieur", alt:true, altDiplome:"BTS Énergies Renouvelables"},
    {nom:"Licence Professionnelle Agroéconomie", profils:["R","I","E"], diplome:"Licence", alt:true, altDiplome:"BTS Agroéconomie"},
    {nom:"Aéronautique", profils:["R","I","C"], diplome:"Diplôme d'Ingénieur", alt:false, altDiplome:""}
  ],
  "G1": [
    {nom:"Finances Comptabilité et Gestion (FCGE)", profils:["C","E","I"], diplome:"Licence", alt:true, altDiplome:"BTS Finance-Comptabilité"},
    {nom:"Comptabilité, Contrôle et Audit (CCA)", profils:["C","I","E"], diplome:"Licence", alt:true, altDiplome:"BTS Comptabilité-Gestion"},
    {nom:"Secrétariat / Assistant de Direction", profils:["C","S","E"], diplome:"Licence", alt:true, altDiplome:"BTS Secrétariat de Direction"},
    {nom:"Marketing et Gestion Commerciale (MGC)", profils:["E","C","S"], diplome:"Licence", alt:true, altDiplome:"BTS Marketing/Action Commerciale"},
    {nom:"Gestion des Ressources Humaines (GRH)", profils:["S","C","E"], diplome:"Licence", alt:true, altDiplome:"BTS Gestion des Ressources Humaines"},
    {nom:"Sciences Économiques et Gestion", profils:["E","C","I"], diplome:"Licence", alt:true, altDiplome:"BTS Gestion d'Entreprise"},
    {nom:"Assurances, Banques, Finances (ABF)", profils:["C","I","E"], diplome:"Licence", alt:true, altDiplome:"BTS Banque/Assurance"}
  ],
  "G2": [
    {nom:"Finances Comptabilité et Gestion (FCGE)", profils:["C","E","I"], diplome:"Licence", alt:true, altDiplome:"BTS Finance-Comptabilité"},
    {nom:"Comptabilité, Contrôle et Audit (CCA)", profils:["C","I","E"], diplome:"Licence", alt:true, altDiplome:"BTS Comptabilité-Gestion"},
    {nom:"Secrétariat / Assistant de Direction", profils:["C","S","E"], diplome:"Licence", alt:true, altDiplome:"BTS Secrétariat de Direction"},
    {nom:"Marketing et Gestion Commerciale (MGC)", profils:["E","C","S"], diplome:"Licence", alt:true, altDiplome:"BTS Marketing/Action Commerciale"},
    {nom:"Gestion des Ressources Humaines (GRH)", profils:["S","C","E"], diplome:"Licence", alt:true, altDiplome:"BTS Gestion des Ressources Humaines"},
    {nom:"Sciences Économiques et Gestion", profils:["E","C","I"], diplome:"Licence", alt:true, altDiplome:"BTS Gestion d'Entreprise"},
    {nom:"Assurances, Banques, Finances (ABF)", profils:["C","I","E"], diplome:"Licence", alt:true, altDiplome:"BTS Banque/Assurance"}
  ],
  "H": [
    {nom:"Informatique (Licence)", profils:["I","R","C"], diplome:"Licence", alt:true, altDiplome:"BTS Informatique"},
    {nom:"Réseaux Informatiques et Télécoms", profils:["I","R","C"], diplome:"Licence", alt:true, altDiplome:"BTS Réseaux et Télécommunications"},
    {nom:"Génie Logiciel", profils:["I","C","R"], diplome:"Licence", alt:true, altDiplome:"BTS Génie Logiciel"},
    {nom:"Statistiques et Informatique (STIE)", profils:["I","C","R"], diplome:"Licence", alt:true, altDiplome:"BTS Statistique-Informatique"},
    {nom:"Comptabilité, Contrôle et Audit (CCA)", profils:["C","I","E"], diplome:"Licence", alt:true, altDiplome:"BTS Comptabilité-Gestion"},
    {nom:"MIAGE", profils:["I","C","R"], diplome:"Licence", alt:true, altDiplome:"BTS Informatique de Gestion"},
    {nom:"Maintenance Informatique", profils:["R","I","C"], diplome:"Licence", alt:true, altDiplome:"BTS Maintenance Systèmes Informatiques"}
  ]
};

const QUESTIONS = [
  {contexte:"Un projet d'énergie solaire est lancé pour alimenter une école de ton village. Que préfères-tu faire ?", optionA:"Monter les structures métalliques de tes mains, fixer les panneaux et faire le cblage sur le terrain.", optionB:"Calculer le rendement des cellules, analyser l'ensoleillement et concevoir les plans électriques du système.", profilA:"R", profilB:"I"},
  {contexte:"Beaucoup de jeunes de ton quartier à Ouagadougou abandonnent l'école. Quelle action choisis-tu ?", optionA:"Donner bénévolement des cours de soutien, les écouter et encourager leurs parents à les soutenir.", optionB:"Créer une petite entreprise de recyclage pour les employer et leur donner un revenu stable.", profilA:"S", profilB:"E"},
  {contexte:"Tu rejoins un atelier qui valorise le pagne Faso Danfani. Quel poste préfères-tu occuper ?", optionA:"Tenir les registres comptables, suivre les stocks de fil et archiver les factures des clients.", optionB:"Imaginer de nouveaux motifs de tissage et dessiner les modèles de vêtements originaux.", profilA:"C", profilB:"A"},
  {contexte:"Un service veut gérer l'approvisionnement en médicaments des centres de santé ruraux. Qu'aimerais-tu faire ?", optionA:"Écrire les lignes de code, concevoir la base de données et sécuriser l'algorithme de l'application.", optionB:"Installer les serveurs, déployer les antennes réseau et assurer la maintenance du matériel.", profilA:"I", profilB:"R"},
  {contexte:"Tu travailles dans une institution de microfinance à Ouagadougou. Quelle est ta force au quotidien ?", optionA:"Aller au marché rencontrer les commerçantes, négocier des crédits et convaincre de nouveaux adhérents.", optionB:"Vérifier la conformité des dossiers de prêt, contrôler les pièces et respecter strictement la réglementation.", profilA:"E", profilB:"C"},
  {contexte:"Tu participes à l'organisation d'un projet pour le FESPACO sur un sujet de société. Que choisis-tu ?", optionA:"Écrire le scénario du film, choisir les plans de caméra et faire le montage pour exprimer ta vision.", optionB:"Organiser des ciné-débats dans les quartiers pour écouter les habitants et animer la discussion.", profilA:"A", profilB:"S"},
  {contexte:"Une nouvelle route reliant Ouaga à Koudougou est en chantier. Quel travail t'attire le plus ?", optionA:"Suivre les travaux sur le tracé, contrôler la qualité du béton et diriger les ouvriers sur le chantier.", optionB:"Gérer le planning, contrôler les factures des fournisseurs et organiser les archives du projet.", profilA:"R", profilB:"C"},
  {contexte:"Pour lutter contre l'insécurité alimentaire au Burkina, quelle approche te semble la meilleure ?", optionA:"Travailler en laboratoire pour étudier les plantes et créer des semences résistantes à la sécheresse.", optionB:"Rencontrer les groupements d'agriculteurs pour leur transmettre les bonnes pratiques d'irrigation.", profilA:"I", profilB:"S"},
  {contexte:"Tu lances une activité dans la mode burkinabè au SIAO. Quelle est ta priorité personnelle ?", optionA:"Développer la marque, trouver des marchés à l'export et négocier les prix avec les grossistes.", optionB:"Prendre le temps de créer des pièces uniques faites main et expérimenter de nouvelles teintures.", profilA:"E", profilB:"A"},
  {contexte:"Tu réussis un concours de l'administration publique. Qu'est-ce qui te plaît le plus au bureau ?", optionA:"Appliquer rigoureusement les textes de loi et classer méthodiquement les dossiers de l'État.", optionB:"Analyser les statistiques économiques, repérer les anomalies et rédiger des notes d'analyse stratégique.", profilA:"C", profilB:"I"},
  {contexte:"Dans une usine de transformation de mangues, quelle fonction occuperais-tu par vocation ?", optionA:"Gérer la maintenance des machines, régler la chaîne de production et optimiser l'emballage des produits.", optionB:"Veiller au bien-être de l'équipe, gérer les relations humaines et animer les formations professionnelles.", profilA:"R", profilB:"S"},
  {contexte:"Tu travailles pour un média numérique burkinabè. Quelle est ton approche face à l'information ?", optionA:"Rédiger des chroniques au style soigné pour émouvoir et faire réfléchir les lecteurs.", optionB:"Mener de longues enquêtes basées sur des faits précis, croiser les sources et vérifier la vérité.", profilA:"A", profilB:"I"},
  {contexte:"Quel est ton rapport idéal face à l'incertitude dans ton avenir professionnel ?", optionA:"Avoir un poste stable, des horaires fixes, une feuille de route claire et un salaire garanti.", optionB:"Lancer ta propre start-up numérique, relever le défi des financements même si les revenus varient.", profilA:"C", profilB:"E"},
  {contexte:"Tu es recruté(e) par une compagnie minière au Burkina. Quel quotidien préfères-tu ?", optionA:"Vivre sur la base-vie de la mine, travailler dans la fosse et manipuler les équipements lourds.", optionB:"Travailler au siège à Ouagadougou, gérer la paye des employés et appliquer les procédures.", profilA:"R", profilB:"C"},
  {contexte:"Tu souhaites faire carrière dans le secteur médical burkinabè. Quel rôle incarne ta vocation ?", optionA:"Travailler au contact des malades comme infirmier(e), apporter du réconfort et soigner les familles.", optionB:"Travailler en laboratoire, manipuler le microscope pour identifier les parasites et valider les diagnostics.", profilA:"S", profilB:"I"},
  {contexte:"Tu rejoins un grand projet d'aménagement agricole pour l'autosuffisance du pays. Ton angle ?", optionA:"Installer les systèmes d'irrigation goutte-à-goutte et superviser la maintenance des tracteurs.", optionB:"Structurer la filière, négocier des contrats de livraison avec les grossistes et manager la distribution.", profilA:"R", profilB:"E"},
  {contexte:"Les services de paiement mobile explosent au Burkina. Comment veux-tu y participer ?", optionA:"Développer l'architecture logicielle, chiffrer les données et optimiser le code en faible connexion.", optionB:"Lever des fonds auprès d'investisseurs, faire adopter l'app par les commerçants et diriger la croissance.", profilA:"I", profilB:"E"},
  {contexte:"Le pays a besoin d'enseignants qualifiés dans les provinces. Qu'est-ce qui guiderait ton travail ?", optionA:"Créer une relation de confiance avec tes élèves et adapter ta pédagogie aux enfants en difficulté.", optionB:"Suivre rigoureusement le programme officiel, évaluer par des barèmes stricts et tenir à jour les registres.", profilA:"S", profilB:"C"},
  {contexte:"Pour la fête de quartier, on te confie un rôle clé dans l'animation. Lequel choisis-tu ?", optionA:"Coordonner les vendeurs, gérer le budget, fixer les prix des entrées et motiver l'équipe.", optionB:"Concevoir les décors, peindre les banderoles et imaginer une ambiance visuelle originale et colorée.", profilA:"E", profilB:"A"},
  {contexte:"Un centre culturel organise un grand événement. Comment préfères-tu t'investir ?", optionA:"Composer une chanson, écrire un poème ou créer une œuvre originale pour exprimer une émotion.", optionB:"Accueillir le public, accompagner les visiteurs perdus et veiller à ce que chacun se sente bienvenu.", profilA:"A", profilB:"S"},
  {contexte:"Ton lycée participe à un concours de robotique. Quelle mission t'enthousiasme le plus ?", optionA:"Programmer le robot, tester les algorithmes et résoudre les bugs logiques pour qu'il fonctionne.", optionB:"Assembler les pièces, souder les circuits, monter le chssis et régler les moteurs avec tes mains.", profilA:"I", profilB:"R"},
  {contexte:"Tu animes un stand de jus de bissap au SIAO. Qu'est-ce qui te motive le plus ?", optionA:"Attirer les clients, négocier les prix, augmenter les ventes et faire connaître ta marque.", optionB:"Discuter avec chaque client, prendre soin de son accueil et créer une ambiance chaleureuse.", profilA:"E", profilB:"S"},
  {contexte:"En classe, quelle méthode te permet de comprendre une leçon avec le plus de facilité ?", optionA:"Faire des exercices d'application, manipuler des objets et réaliser des expériences concrètes.", optionB:"Imaginer un projet artistique libre, dessiner mes idées ou écrire un texte créatif pour mieux retenir.", profilA:"R", profilB:"A"},
  {contexte:"Le smartphone devient un outil de travail essentiel. Comment aimes-tu surtout l'exploiter ?", optionA:"Structurer des données, faire des feuilles de calcul de budget, classer des dossiers et gérer un agenda.", optionB:"Faire du montage photo et vidéo pour les réseaux sociaux et créer du contenu visuel original.", profilA:"C", profilB:"A"}
];

const RIASEC_LABELS = {
  R:{name:"Réaliste", desc:"Pratique, manuel, aime construire"},
  I:{name:"Investigateur", desc:"Analytique, curieux, aime comprendre"},
  A:{name:"Artistique", desc:"Créatif, expressif, original"},
  S:{name:"Social", desc:"Altruiste, empathique, aime aider"},
  E:{name:"Entrepreneur", desc:"Persuasif, leader, aime entreprendre"},
  C:{name:"Conventionnel", desc:"Organisé, rigoureux, aime structurer"}
};

// ===================== STATE =====================
let state = {
  nom:"", email:"", serie:"", moyenne:0,
  reponses:Array(24).fill(null),
  currentQ:0,
  scores:null, codeHolland:null, topFilieres:null, confiance:0
};

// ===================== DOM =====================
const $ = s=>document.querySelector(s);
const progressFill = $("#progressFill");
const dots = document.querySelectorAll(".step-dot");
const stepsEls = {1:$("#step1"),2:$("#step2"),3:$("#step3"),4:$("#step4"),thanks:$("#stepThanks")};

function goToStep(n){
  Object.values(stepsEls).forEach(el=>el.classList.remove("active"));
  if(n==='thanks'){stepsEls.thanks.classList.add("active"); progressFill.style.width="100%";}
  else {stepsEls[n].classList.add("active"); progressFill.style.width=(n*25)+"%";}
  dots.forEach(d=>{const s=parseInt(d.dataset.step); d.classList.toggle("active", s<=n);});
  window.scrollTo({top:0,behavior:"smooth"});
}

// ===================== STEP 1 VALIDATION =====================
$("#formStep1").addEventListener("submit", e=>{
  e.preventDefault();
  let ok=true;
  const nom=$("#nom").value.trim();
  const email=$("#email").value.trim();
  const serie=$("#serie").value;
  const moy=parseFloat($("#moyenne").value);
  $("#err-nom").textContent="";$("#err-email").textContent="";$("#err-serie").textContent="";$("#err-moyenne").textContent="";
  if(!nom || nom.length<2){$("#err-nom").textContent="Entre ton nom complet"; ok=false;}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ $("#err-email").textContent="Email invalide"; ok=false;}
  if(!serie){$("#err-serie").textContent="Choisis ta série"; ok=false;}
  if(isNaN(moy)||moy<0||moy>20){$("#err-moyenne").textContent="Moyenne entre 0 et 20"; ok=false;}
  if(!ok) return;
  state.nom=nom; state.email=email; state.serie=serie; state.moyenne=moy;
  $("#qEmail").value=email;
  goToStep(2); renderQuestion();
});

function renderQuestion(){
  const idx=state.currentQ;
  const q=QUESTIONS[idx];
  $("#qNumber").textContent=`Question ${idx+1} / 24`;
  $("#qProgressFill").style.width=`${((idx+1)/24)*100}%`;
  $("#questionContext").textContent=q.contexte;
  $("#optA .opt-text").textContent=q.optionA;
  $("#optB .opt-text").textContent=q.optionB;
  $("#optA").classList.toggle("selected", state.reponses[idx]==="A");
  $("#optB").classList.toggle("selected", state.reponses[idx]==="B");
  $("#btnPrevQ").style.visibility = idx===0 ? "hidden":"visible";
}

function choose(opt){
  state.reponses[state.currentQ]=opt;
  renderQuestion();
  setTimeout(()=>{
    if(state.currentQ<23){ state.currentQ++; renderQuestion(); }
    else { computeResults(); }
  },320);
}
$("#optA").addEventListener("click",()=>choose("A"));
$("#optB").addEventListener("click",()=>choose("B"));
$("#btnPrevQ").addEventListener("click",()=>{ if(state.currentQ>0){state.currentQ--; renderQuestion();}});

// ===================== ALGORITHME =====================
function computeResults(){
  const POINTS=3, SEUIL=10, PENALITE=-1, SCORE_MAX=7;
  // A scores
  let scores={R:0,I:0,A:0,S:0,E:0,C:0};
  state.reponses.forEach((rep,i)=>{
    if(!rep) return;
    const q=QUESTIONS[i];
    if(rep==="A") scores[q.profilA]+=POINTS;
    else scores[q.profilB]+=POINTS;
  });
  // B code Holland
  let sorted = Object.entries(scores).sort((a,b)=>b[1]-a[1]).map(e=>e[0]);
  let codeHolland = sorted.slice(0,3);
  // C matching
  let filieres = FILIERES_DB[state.serie] || FILIERES_DB["A4"];
  let scored = filieres.map(f=>{
    let scoreBrut=0;
    f.profils.forEach((p,idx)=>{
      if(p===codeHolland[0] && idx===0) scoreBrut+=3;
      else if(codeHolland.includes(p)) scoreBrut+=2;
    });
    let diplomeCible=f.diplome;
    let statut="Cursus standard recommandé";
    let alerte=null;
    let scoreFinal=scoreBrut;
    if(state.moyenne < SEUIL){
      if(f.alt){
        diplomeCible=f.altDiplome;
        statut="Cursus court conseillé";
        alerte={type:"orange", text:`Moyenne ${state.moyenne}/20 : le ${f.altDiplome} sécurise mieux ton insertion avant une Licence.`};
      }else{
        scoreFinal=scoreBrut+PENALITE;
        statut="Risque académique élevé";
        alerte={type:"red", text:`Moyenne ${state.moyenne}/20 sans alternative courte : risque élevé, renforcement nécessaire.`};
      }
    }
    return {...f, scoreBrut, scoreFinal, diplomeCible, statut, alerte};
  });
  // E trier top3
  scored.sort((a,b)=>b.scoreFinal-a.scoreFinal);
  let top3 = scored.slice(0,3);
  // F confiance
  let nbRep = state.reponses.filter(Boolean).length;
  let tauxReponse = (nbRep/24)*100;
  let topScore = Math.max(0,Math.min(100,(top3[0].scoreFinal / SCORE_MAX)*100));
  let confiance = (tauxReponse*0.4)+(topScore*0.6);
  state.scores=scores; state.codeHolland=codeHolland; state.topFilieres=top3; state.confiance=Math.round(confiance);
  renderResults();
  goToStep(3);
}

function renderResults(){
  const prenom = state.nom.split(" ")[0] || state.nom;
  $("#resultTitle").textContent=`Ton profil RIASEC, ${prenom} !`;
  // badges Holland
  const hcDiv=$("#hollandCode"); hcDiv.innerHTML="";
  state.codeHolland.forEach(l=>{
    const b=document.createElement("div"); b.className="h-badge gold"; b.textContent=l; hcDiv.appendChild(b);
  });
  $("#hollandDesc").textContent = state.codeHolland.map(l=>RIASEC_LABELS[l].name).join(" • ") + " — ton trio dominant.";

  // Bars
  const barsDiv=$("#riasecBars"); barsDiv.innerHTML="";
  const maxScore = Math.max(...Object.values(state.scores),1);
  Object.entries(state.scores).sort((a,b)=>b[1]-a[1]).forEach(([k,v])=>{
    const isTop = state.codeHolland.includes(k);
    const row=document.createElement("div"); row.className="bar-row";
    row.innerHTML=`<span class="bar-label">${k} - ${RIASEC_LABELS[k].name}</span><div class="bar-track"><div class="bar-fill ${isTop?'gold':'gray'}" style="width:${(v/maxScore)*100}%"></div></div><span class="bar-val">${v}</span>`;
    barsDiv.appendChild(row);
  });

  // Top filières
  const grid=$("#topFilieres"); grid.innerHTML="";
  const emojis=["🥇","🥈","🥉"];
  state.topFilieres.forEach((f,i)=>{
    let compat = Math.round((Math.max(0,f.scoreFinal)/7)*100);
    let compatCls = compat>=70?"high":compat>=45?"mid":"low";
    const card=document.createElement("div"); card.className="f-card"+(i===0?" top1":"");
    card.innerHTML=`
      <span class="f-rank">${emojis[i]}</span>
      <div class="f-name">${f.nom}</div>
      <div class="f-meta">
        <span class="badge navy">🎓 ${f.diplomeCible}</span>
        <span class="badge ${f.alerte?.type==='red'?'red':f.alerte?.type==='orange'?'orange':'green'}">${f.statut}</span>
      </div>
      <div class="compat"><div class="compat-circle ${compatCls}">${compat}%</div><div><strong>Compatibilité</strong><br><span class="subtitle" style="margin:0">Score brut ${f.scoreBrut}/7 • Final ${f.scoreFinal}/7</span></div></div>
      ${f.alerte?`<div class="alert ${f.alerte.type}">${f.alerte.text}</div>`:""}
    `;
    grid.appendChild(card);
  });

  // Fiabilité
  const alertDiv=$("#alertFiabilite");
  let nbRep=state.reponses.filter(Boolean).length;
  if(nbRep<17){alertDiv.textContent="⚠️ Résultat peu fiable : moins de 17 réponses. Refais le test en répondant à tout."; alertDiv.className="alert red"; alertDiv.classList.remove("hidden");}
  else if(state.moyenne<10){alertDiv.textContent=`ℹ️ Moyenne ${state.moyenne}/20 : nous avons adapté les diplômes pour maximiser tes chances de réussite.`; alertDiv.className="alert orange"; alertDiv.classList.remove("hidden");}
  else {alertDiv.classList.add("hidden");}

  // Confiance
  let circ = 2*Math.PI*52;
  let offset = circ - (state.confiance/100)*circ;
  $("#confCircle").style.strokeDasharray=circ;
  setTimeout(()=>$("#confCircle").style.strokeDashoffset=offset,100);
  $("#confValue").textContent=state.confiance+"%";
  $("#confTaux").textContent=Math.round((nbRep/24)*100)+"%";
  $("#confTop").textContent=Math.round((Math.max(0,state.topFilieres[0].scoreFinal)/7)*100)+"%";
  $("#confText").textContent = state.confiance>=75 ? "Résultat très fiable, ton profil est clair." : state.confiance>=50 ? "Résultat fiable, à affiner avec un conseiller." : "Résultat à confirmer : hésitations détectées.";

  // Populate neverWhich select
  const sel=$("#neverWhich"); sel.innerHTML='<option value="" disabled selected>Laquelle ?</option>';
  state.topFilieres.forEach(f=>{const o=document.createElement("option");o.value=f.nom;o.textContent=f.nom;sel.appendChild(o);});
}

$("#btnGoAvis").addEventListener("click",()=>goToStep(4));

// ===================== STEP 4 LOGIC =====================
function setupConditional(){
  document.querySelectorAll('input[name="never"]').forEach(r=>r.addEventListener("change",e=>{
    $("#neverDetail").classList.toggle("hidden", e.target.value!=="Oui");
  }));
  document.querySelectorAll('input[name="discover"]').forEach(r=>r.addEventListener("change",e=>{
    $("#discoverWhich").classList.toggle("hidden", e.target.value!=="Oui");
  }));
  document.querySelectorAll('input[name="understood"]').forEach(r=>r.addEventListener("change",e=>{
    $("#understoodDetail").classList.toggle("hidden", e.target.value!="Non, certains mots m'ont bloqué");
  }));
  document.querySelectorAll('input[name="impossible"]').forEach(r=>r.addEventListener("change",e=>{
    $("#impossibleDetail").classList.toggle("hidden", e.target.value!=="Oui");
  }));
  $("#qBefore").addEventListener("change",e=>{
    $("#qBeforeAutre").classList.toggle("hidden", e.target.value!=="Autre");
  });
}
setupConditional();

$("#formAvis").addEventListener("submit", async e=>{
  e.preventDefault();
  // validation required
  let ok=true;
  const satisfaction = document.querySelector('input[name="satisfaction"]:checked');
  const understood = document.querySelector('input[name="understood"]:checked');
  const impossible = document.querySelector('input[name="impossible"]:checked');
  const interest = document.querySelector('input[name="interest"]:checked');
  const emailFinal = $("#qEmail").value.trim();
  $("#err-qEmail").textContent="";
  if(!satisfaction||!understood||!impossible||!interest){ alert("Merci de remplir tous les champs obligatoires *"); ok=false; }
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailFinal)){ $("#err-qEmail").textContent="Email invalide"; ok=false;}
  if(!ok) return;

  const missing = [...document.querySelectorAll('input[name="missing"]:checked')].map(i=>i.value);
  const payload = {
    timestamp: new Date().toISOString(),
    nom: state.nom,
    email: state.email,
    serie: state.serie,
    moyenne: state.moyenne,
    reponses: state.reponses,
    scoresRIASEC: state.scores,
    codeHolland: state.codeHolland.join(""),
    filiere1: state.topFilieres[0].nom,
    score1: Math.round((Math.max(0,state.topFilieres[0].scoreFinal)/7)*100),
    statut1: state.topFilieres[0].statut,
    filiere2: state.topFilieres[1].nom,
    score2: Math.round((Math.max(0,state.topFilieres[1].scoreFinal)/7)*100),
    statut2: state.topFilieres[1].statut,
    filiere3: state.topFilieres[2].nom,
    score3: Math.round((Math.max(0,state.topFilieres[2].scoreFinal)/7)*100),
    statut3: state.topFilieres[2].statut,
    scoreConfiance: state.confiance,
    satisfaction: satisfaction.value,
    satisfaction_score: {exact:4,proche:3,different:2,a_cote:1}[satisfaction.value]||0,
    filieres_ok: interest.value,
    questions_ok: understood.value,
    questions_comm: $("#understoodDetail").value||"",
    filieres_avis: impossible.value,
    filieres_comm: $("#impossibleDetail").value||"",
    ambition: $("#qBefore").value + ( $("#qBeforeAutre").value? " - "+$("#qBeforeAutre").value:""),
    plus_info: $("#qShould").value,
    // champs étendus
    missing_info: missing.join(", "),
    fear: $("#qFear").value,
    never_sure: document.querySelector('input[name="never"]:checked')?.value||"",
    never_which: $("#neverWhich").value||"",
    never_why: $("#neverWhy").value||"",
    discover: document.querySelector('input[name="discover"]:checked')?.value||"",
    discover_which: $("#discoverWhich").value||"",
    email_confirm: emailFinal
  };

  $("#sendStatus").textContent="Envoi en cours...";
  try{
    // Tentative d'envoi, mais l'URL fournie est une URL d'édition Google Sheet, pas un Apps Script.
    // On tente quand même, puis fallback local.
    const res = await fetch(SHEETS_URL, {method:"POST", mode:"no-cors", headers:{"Content-Type":"application/json"}, body:JSON.stringify(payload)});
    // no-cors => opaque, on considère comme succès si pas d'exception réseau
    localStorage.setItem("golden_last", JSON.stringify(payload));
    $("#sendStatus").textContent="Données sauvegardées localement ✓ (URL Sheets non configurée en Web App)";
  }catch(err){
    localStorage.setItem("golden_last", JSON.stringify(payload));
    $("#sendStatus").textContent="Données sauvegardées localement ✓";
  }
  // Thanks screen
  $("#thanksName").textContent = state.nom.split(" ")[0];
  $("#thanksCode").textContent = state.codeHolland.join("");
  $("#thanksF1").textContent = state.topFilieres[0].nom + " ("+payload.score1+"%)";
  goToStep('thanks');
  launchConfetti();
});

function launchConfetti(){
  const cont=$("#confetti"); cont.innerHTML="";
  const colors=["#E8A020","#FCD34D","#1DB954","#0B1E3D","#FAFAF8"];
  for(let i=0;i<36;i++){
    const el=document.createElement("i");
    el.style.left=Math.random()*100+"%";
    el.style.background=colors[Math.floor(Math.random()*colors.length)];
    el.style.animationDelay=(Math.random()*0.6)+"s";
    el.style.transform=`rotate(${Math.random()*360}deg)`;
    el.style.borderRadius=Math.random()>0.5?"50%":"2px";
    cont.appendChild(el);
  }
}
