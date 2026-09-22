// Frågor från JSON-fil
const questionsData = {
  sv: {
    "Roligt": [
      "Vad är det roligaste som har hänt dig den här veckan?",
      "Om du kunde vara en karaktär i en film för en dag, vem skulle du vara?",
      "Vilken låt får dig alltid på bra humör?",
      "Vad är det knäppaste du någonsin har gjort?",
      "Vilket är ditt favoritbarnsliga nöje?",
      "Om du vann en resa till valfri plats, vart skulle du åka?",
      "Vilken superkraft skulle du vilja ha för en dag?",
      "Vad skrattade du åt senast?",
      "Om du fick äta en maträtt resten av livet, vilken skulle det vara?",
      "Vilken film eller serie kan du se om och om igen utan att tröttna?",
      "Vad gör dig riktigt glad?",
      "Vad får dig att skratta varje gång?",
      "Om du bara fick ta med tre saker till en öde ö, vad skulle du välja?",
      "Vad får dig att känna dig som mest levande?",
      "Vad har du alltid velat prova men inte gjort än?",
      "Om du fick byta liv med någon för en dag, vem skulle det vara?",
      "Hur påverkar musik ditt humör?",
      "Ett lyckligt minne du har."
    ],
    "Filosofiskt": [
      "Vad betyder lycka för dig?",
      "Kan man verkligen lära av sina misstag?",
      "Om du kunde ändra en sak i världen, vad skulle det vara?",
      "Vad är meningen med livet enligt dig?",
      "Vad definierar en god människa?",
      "Tror du att allt händer av en anledning?",
      "Kan man vara riktigt fri?",
      "Har du med åldern ändrat din syn på vad som är viktigt i livet?",
      "Kan framgång mätas? Om ja, hur?",
      "Om du visste att du inte kunde misslyckas, vad skulle du göra?",
      "Vad är den viktigaste lärdomen du fått i livet?",
      "Hur ser ditt liv ut om fem år?",
      "Vilket råd skulle du ge någon som börjar sin karriär?",
      "Vad tycker du är viktigast i livet?",
      "Vad får dig att känna dig som mest levande?",
      "Hur skulle du vilja bli ihågkommen?",
      "Vilket motto lever du efter?",
      "Om du fick ett extra dygn i veckan, hur skulle du använda det?",
      "Vilken bok borde alla läsa?",
      "Vad betyder balans för dig?",
      "Vilket är ditt favoritcitat?"
    ],
    "Personligt": [
      "Vad är du mest stolt över i ditt liv?",
      "Hur ser en perfekt dag ut för dig?",
      "Vad är något få personer vet om dig?",
      "Vilken bok har påverkat dig mest?",
      "Vad inspirerar dig i vardagen?",
      "Om du fick ge ditt yngre jag ett råd, vad skulle det vara?",
      "Vad ger dig energi?",
      "Hur hanterar du motgångar?",
      "Vad är ditt bästa barndomsminne?",
      "Vad drömmer du om att uppnå?",
      "Vad gör dig riktigt glad?",
      "Hur har du fått ditt namn? Har namnet någon särskild historia?",
      "Hur skulle du beskriva ditt drömjobb?",
      "Vad är den viktigaste lärdomen du fått i livet?",
      "När kände du dig senast riktigt stolt?",
      "Hur ser ditt liv ut om fem år?",
      "Vad inspirerar dig mest just nu?",
      "Hur laddar du om efter en tuff dag?",
      "Vad tycker du är viktigast i livet?",
      "Hur hanterar du förändringar?",
      "Om du fick vara expert på något, vad skulle du välja?",
      "Vad har du alltid velat prova men inte gjort än?",
      "Hur skulle du vilja bli ihågkommen?",
      "Vad är ditt största intresse just nu?",
      "Vilken egenskap värderar du mest hos andra?",
      "Hur påverkar musik ditt humör?",
      "Vad får dig att känna dig kreativ?",
      "Vilket motto lever du efter?",
      "Vad är din största drivkraft?",
      "Hur hanterar du kritik?",
      "Ett lyckligt minne du har.",
      "Vilken plats vill du besöka igen och varför?",
      "Hur lär du dig bäst?",
      "Om du fick ett extra dygn i veckan, hur skulle du använda det?",
      "Vilken bok borde alla läsa?",
      "Vad har varit en viktig vändpunkt i ditt liv?",
      "Vilken är den bästa komplimangen du fått?",
      "Vad får dig att känna tillhörighet?",
      "Vad betyder balans för dig?",
      "Hur hittar du motivation när det känns tungt?",
      "Vilket är ditt favoritcitat?"
    ],
    "Lära-känna": [
      "Vilken är din favoritårstid och varför?",
      "Vad ville du bli när du var liten?",
      "Om du fick middag med vem som helst, levande eller död, vem skulle det vara?",
      "Vad gillar du att göra på din fritid?",
      "Vilken plats betyder mest för dig?",
      "Vad var ditt första jobb?",
      "Hur ser en perfekt helg ut för dig?",
      "Vilken är din favoritfilm eller bok?",
      "Hur beskriver dina vänner dig?",
      "Vilket språk skulle du vilja lära dig?",
      "Hur har du fått ditt namn? Har namnet någon särskild historia?",
      "Om du bara fick ta med tre saker till en öde ö, vad skulle du välja?",
      "Vilket var ditt favoritämne i skolan?",
      "Vad är ditt största intresse just nu?",
      "Vilken egenskap värderar du mest hos andra?",
      "Om du fick byta liv med någon för en dag, vem skulle det vara?",
      "Vilken plats vill du besöka igen och varför?",
      "Vilken är den bästa komplimangen du fått?",
      "Vad får dig att känna tillhörighet?"
    ],
    "På jobbet": [
      "Vad motiverar dig mest i ditt arbete?",
      "Hur ser en riktigt bra arbetsdag ut?",
      "Vad uppskattar du mest hos en kollega?",
      "Hur hanterar du stress på jobbet?",
      "Vad har varit din största utmaning i arbetslivet?",
      "Hur firar du framgångar på jobbet?",
      "Vad tycker du gör ett team framgångsrikt?",
      "Vad vill du utveckla i din yrkesroll?",
      "Hur ser du på balansen mellan arbete och fritid?",
      "Vad kännetecknar ett bra ledarskap för dig?",
      "Hur skulle du beskriva ditt drömjobb?",
      "När kände du dig senast riktigt stolt?",
      "Vad inspirerar dig mest just nu?",
      "Vilket råd skulle du ge någon som börjar sin karriär?",
      "Hur laddar du om efter en tuff dag?",
      "Hur hanterar du förändringar?",
      "Om du fick vara expert på något, vad skulle du välja?",
      "Vad är en viktig egenskap hos en ledare?",
      "Vad är viktigast för en bra arbetsmiljö?",
      "Vad får dig att känna dig kreativ?",
      "Vad är din största drivkraft?",
      "Hur hanterar du kritik?",
      "Hur lär du dig bäst?",
      "Hur hittar du motivation när det känns tungt?"
    ],
    "Floskler": [
      "Vi är värderingsdrivna",
      "Vi arbetar agilt",
      "Här är det högt i tak",
      "Vi skapar värde",
      "Vi tänker utanför boxen",
      "Vi står inför ett paradigmskifte",
      "Vi behöver bygga kultur",
      "Vi är som en familj",
      "Kultur äter strategi till frukost",
      "Medarbetarna är vår viktigaste resurs",
      "Här finns respekt för allas åsikter",
      "Vi hör vad ni säger",
      "Vi behöver attrahera och behålla talanger",
      "Vi är prestigelösa",
      "Mångfald är viktigt för oss",
      "Vi värnar work-life balance",
      "Vi rekryterar fördomsfritt",
      "Vi behöver tänka inifrån och ut",
      "I en snabbt föränderlig värld…",
      "Vi är på en kulturresa – och den har bara börjat",
      "Vi behöver bygga en robust organisation",
      "Det är ingen förändring – det är en förbättring",
      "Alle man på däck",
      "Det nya normala",
      "Hybridarbete är här för att stanna",
      "Vi behöver vara disruptiva",
      "Vi måste bli mer innovativa",
      "Vi behöver arbeta mer strategiskt",
      "Vi måste bryta stuprören",
      "Vi behöver kroka arm",
      "Vi behöver skapa samsyn",
      "Vi behöver få till en förflyttning",
      "Vi behöver äga frågan",
      "Vi behöver jobba mer proaktivt",
      "Vi behöver ha med oss hela perspektivet",
      "Det här är ett levande dokument",
      "Vi behöver stärka arbetsgivarvarumärket",
      "Vi behöver säkra kompetensförsörjningen",
      "Vi ska vara en attraktiv arbetsgivare",
      "Lågt hängande frukter"
    ]
  },
  en: {
    "Fun": [
      "What's the funniest thing that happened to you this week?",
      "If you could be a character in a movie for a day, who would you be?",
      "Which song always puts you in a good mood?",
      "What's the craziest thing you've ever done?",
      "What's your favorite childish pleasure?",
      "If you won a trip to any place, where would you go?",
      "What superpower would you like to have for a day?",
      "What did you laugh at most recently?",
      "If you could eat only one dish for the rest of your life, what would it be?",
      "Which movie or series can you watch over and over without getting tired of it?",
      "What makes you really happy?",
      "What makes you laugh every time?",
      "If you could only bring three things to a deserted island, what would you choose?",
      "What makes you feel most alive?",
      "What have you always wanted to try but haven't done yet?",
      "If you could swap lives with someone for a day, who would it be?",
      "How does music affect your mood?",
      "A happy memory you have."
    ],
    "Philosophical": [
      "What does happiness mean to you?",
      "Can you really learn from your mistakes?",
      "If you could change one thing in the world, what would it be?",
      "What is the meaning of life according to you?",
      "What defines a good person?",
      "Do you believe everything happens for a reason?",
      "Can one be truly free?",
      "Have you changed your view on what's important in life as you've grown older?",
      "Can success be measured? If yes, how?",
      "If you knew you couldn't fail, what would you do?",
      "What's the most important lesson you've learned in life?",
      "What will your life look like in five years?",
      "What advice would you give someone starting their career?",
      "What do you think is most important in life?",
      "What makes you feel most alive?",
      "How would you like to be remembered?",
      "What motto do you live by?",
      "If you had an extra day in the week, how would you use it?",
      "Which book should everyone read?",
      "What does balance mean to you?",
      "What's your favorite quote?"
    ],
    "Personal": [
      "What are you most proud of in your life?",
      "What does a perfect day look like for you?",
      "What's something few people know about you?",
      "Which book has influenced you the most?",
      "What inspires you in everyday life?",
      "If you could give your younger self advice, what would it be?",
      "What gives you energy?",
      "How do you handle adversity?",
      "What's your best childhood memory?",
      "What do you dream of achieving?",
      "What makes you really happy?",
      "How did you get your name? Does your name have any special history?",
      "How would you describe your dream job?",
      "What's the most important lesson you've learned in life?",
      "When did you last feel really proud?",
      "What will your life look like in five years?",
      "What inspires you most right now?",
      "How do you recharge after a tough day?",
      "What do you think is most important in life?",
      "How do you handle changes?",
      "If you could be an expert at something, what would you choose?",
      "What have you always wanted to try but haven't done yet?",
      "How would you like to be remembered?",
      "What's your biggest interest right now?",
      "Which quality do you value most in others?",
      "How does music affect your mood?",
      "What makes you feel creative?",
      "What motto do you live by?",
      "What's your biggest driving force?",
      "How do you handle criticism?",
      "A happy memory you have.",
      "Which place would you like to visit again and why?",
      "How do you learn best?",
      "If you had an extra day in the week, how would you use it?",
      "Which book should everyone read?",
      "What has been an important turning point in your life?",
      "What's the best compliment you've received?",
      "What makes you feel a sense of belonging?",
      "What does balance mean to you?",
      "How do you find motivation when things feel tough?",
      "What's your favorite quote?"
    ],
    "Get to know": [
      "What's your favorite season and why?",
      "What did you want to be when you were little?",
      "If you could have dinner with anyone, living or dead, who would it be?",
      "What do you like to do in your free time?",
      "Which place means the most to you?",
      "What was your first job?",
      "What does a perfect weekend look like for you?",
      "What's your favorite movie or book?",
      "How do your friends describe you?",
      "Which language would you like to learn?",
      "How did you get your name? Does your name have any special history?",
      "If you could only bring three things to a deserted island, what would you choose?",
      "What was your favorite subject in school?",
      "What's your biggest interest right now?",
      "Which quality do you value most in others?",
      "If you could swap lives with someone for a day, who would it be?",
      "Which place would you like to visit again and why?",
      "What's the best compliment you've received?",
      "What makes you feel a sense of belonging?"
    ],
    "At work": [
      "What motivates you most in your work?",
      "What does a really good workday look like?",
      "What do you appreciate most in a colleague?",
      "How do you handle stress at work?",
      "What has been your biggest challenge in your work life?",
      "How do you celebrate successes at work?",
      "What do you think makes a team successful?",
      "What do you want to develop in your professional role?",
      "How do you view the balance between work and leisure?",
      "What characterizes good leadership for you?",
      "How would you describe your dream job?",
      "When did you last feel really proud?",
      "What inspires you most right now?",
      "What advice would you give someone starting their career?",
      "How do you recharge after a tough day?",
      "How do you handle changes?",
      "If you could be an expert at something, what would you choose?",
      "What's an important quality in a leader?",
      "What's most important for a good work environment?",
      "What makes you feel creative?",
      "What's your biggest driving force?",
      "How do you handle criticism?",
      "How do you learn best?",
      "How do you find motivation when things feel tough?"
    ]
  }
};

// Översättningar
const translations = {
  sv: {
    title: "Checka In",
    startBtn: "Starta",
    nextBtn: "Nästa",
    categoriesTitle: "Kategorier",
    categories: {
      fun: "Roligt",
      philosophical: "Filosofiskt",
      personal: "Personligt",
      getToKnow: "Lära-känna",
      work: "På jobbet",
      floskler: "Floskler"
    },
    infoText: "En interaktiv incheckningssida för möten, kurser och event.",
    startMessage: "Välj kategorier nedan och klicka på \"Starta\" för att börja",
    manualSelectLabel: "Välj bort påståenden",
    manualHint: "Bocka ur de påståenden du inte vill ska dyka upp.",
    manualResetLabel: "Markera alla igen",
    allDeselectedMessage: "Alla påståenden i valda kategorier är bortvalda"
  },
  en: {
    title: "Check In",
    startBtn: "Start",
    nextBtn: "Next",
    categoriesTitle: "Categories",
    categories: {
      fun: "Fun",
      philosophical: "Philosophical",
      personal: "Personal",
      getToKnow: "Get to know",
      work: "At work"
    },
    infoText: "An interactive check-in page for meetings, courses and events.",
    startMessage: "Select categories below and click \"Start\" to begin",
    manualSelectLabel: "Deselect statements",
    manualHint: "Uncheck any statements you don't want to appear.",
    manualResetLabel: "Select all again",
    allDeselectedMessage: "All statements in the selected categories are deselected"
  }
};

// Variabler för applikationen
let currentLanguage = 'sv';
let questionQueue = [];
let lastQuestion = null;
let currentSignature = '';
let isStarted = false;

// DOM-element
const svBtn = document.getElementById('sv-btn');
const enBtn = document.getElementById('en-btn');
const titleElement = document.getElementById('title');
const questionElement = document.getElementById('question');
const nextBtn = document.getElementById('next-btn');
const categoriesTitle = document.getElementById('categories-title');
const infoText = document.getElementById('info-text');

// Kategori-checkboxar
const funCheckbox = document.getElementById('fun');
const philosophicalCheckbox = document.getElementById('philosophical');
const personalCheckbox = document.getElementById('personal');
const getToKnowCheckbox = document.getElementById('get-to-know');
const workCheckbox = document.getElementById('work');
const flosklerCheckbox = document.getElementById('floskler');
const flosklerCategory = document.getElementById('floskler-category');

// Välj bort påståenden
const manualToggle = document.getElementById('manual-toggle');
const manualToggleLabel = document.getElementById('manual-toggle-label');
const manualPanel = document.getElementById('manual-panel');
const manualList = document.getElementById('manual-list');
const manualHint = document.getElementById('manual-hint');
const manualReset = document.getElementById('manual-reset');

// Bortvalda påståenden (blockade från slumpen), sparas i webbläsaren
let blockedQuestions = new Set();

// Initialisera applikationen
function init() {
  updateLanguage();
  loadSavedSettings();
  
  // Lägg till event listeners
  svBtn.addEventListener('click', () => setLanguage('sv'));
  enBtn.addEventListener('click', () => setLanguage('en'));
  nextBtn.addEventListener('click', handleNextButtonClick);
  
  // Lägg till event listeners för checkboxar
  const checkboxes = [funCheckbox, philosophicalCheckbox, personalCheckbox, getToKnowCheckbox, workCheckbox, flosklerCheckbox];
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', saveSettings);
  });

  // Hopfällning av "Välj bort påståenden" samt återställning
  manualToggle.addEventListener('click', toggleManualPanel);
  manualReset.addEventListener('click', resetBlockedQuestions);
}

// Öppna/stäng panelen med påståenden
function toggleManualPanel() {
  const willOpen = manualPanel.hidden;
  manualPanel.hidden = !willOpen;
  manualToggle.classList.toggle('open', willOpen);
  manualToggle.setAttribute('aria-expanded', String(willOpen));
}

// Häv alla bortval
function resetBlockedQuestions() {
  blockedQuestions.clear();
  saveSettings();
  buildManualList();
}

// Bygg listan med alla påståenden grupperade per kategori (aktuellt språk).
// Varje påstående är ikryssat från start; bocka ur för att välja bort det.
function buildManualList() {
  manualList.innerHTML = '';
  const categories = questionsData[currentLanguage];

  Object.keys(categories).forEach(categoryName => {
    const group = document.createElement('div');
    group.className = 'manual-group';

    const heading = document.createElement('h3');
    heading.className = 'manual-group-title';
    heading.textContent = categoryName;
    group.appendChild(heading);

    categories[categoryName].forEach(text => {
      const item = document.createElement('label');
      item.className = 'manual-item';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'manual-checkbox';
      checkbox.checked = !blockedQuestions.has(text);

      const span = document.createElement('span');
      span.className = 'manual-item-text';
      span.textContent = text;

      item.classList.toggle('deselected', !checkbox.checked);

      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          blockedQuestions.delete(text);
        } else {
          blockedQuestions.add(text);
        }
        item.classList.toggle('deselected', !checkbox.checked);
        saveSettings();
      });

      item.appendChild(checkbox);
      item.appendChild(span);
      group.appendChild(item);
    });

    manualList.appendChild(group);
  });
}

// Hantera språkbyte
function setLanguage(lang) {
  currentLanguage = lang;
  updateLanguage();
  saveSettings();
  
  // Uppdatera aktiv knapp
  svBtn.classList.toggle('active', lang === 'sv');
  enBtn.classList.toggle('active', lang === 'en');
}

// Uppdatera UI med valt språk
function updateLanguage() {
  const t = translations[currentLanguage];
  
  titleElement.textContent = t.title;
  nextBtn.textContent = isStarted ? t.nextBtn : t.startBtn;
  categoriesTitle.textContent = t.categoriesTitle;
  infoText.textContent = t.infoText;
  
  // Uppdatera kategori-labels
  document.querySelector('label[for="fun"]').textContent = t.categories.fun;
  document.querySelector('label[for="philosophical"]').textContent = t.categories.philosophical;
  document.querySelector('label[for="personal"]').textContent = t.categories.personal;
  document.querySelector('label[for="get-to-know"]').textContent = t.categories.getToKnow;
  document.querySelector('label[for="work"]').textContent = t.categories.work;

  // Floskler finns bara på svenska – dölj kategorin i engelska läget
  if (currentLanguage === 'sv') {
    flosklerCategory.style.display = '';
    document.querySelector('label[for="floskler"]').textContent = t.categories.floskler;
  } else {
    flosklerCategory.style.display = 'none';
  }

  // Uppdatera "Välj bort påståenden" och bygg om listan för aktuellt språk
  manualToggleLabel.textContent = t.manualSelectLabel;
  manualHint.textContent = t.manualHint;
  manualReset.textContent = t.manualResetLabel;
  buildManualList();

  // Om vi inte har startat, visa startmeddelande
  if (!isStarted) {
    questionElement.textContent = t.startMessage;
  }
}

// Hantera klick på nästa-knappen
function handleNextButtonClick() {
  if (!isStarted) {
    startQuestions();
  } else {
    showNextQuestion();
  }
}

// Starta frågevisningen
function startQuestions() {
  isStarted = true;
  nextBtn.textContent = translations[currentLanguage].nextBtn;
  currentSignature = ''; // tvinga en ny blandad kö
  showNextQuestion();
}

// Hämta påståenden från ikryssade kategorier (utan hänsyn till bortval)
function getCategoryQuestions() {
  let selected = [];

  const categoryMap = {
    sv: {
      fun: "Roligt",
      philosophical: "Filosofiskt",
      personal: "Personligt",
      getToKnow: "Lära-känna",
      work: "På jobbet"
    },
    en: {
      fun: "Fun",
      philosophical: "Philosophical",
      personal: "Personal",
      getToKnow: "Get to know",
      work: "At work"
    }
  };
  const map = categoryMap[currentLanguage];

  if (funCheckbox.checked) selected = selected.concat(questionsData[currentLanguage][map.fun]);
  if (philosophicalCheckbox.checked) selected = selected.concat(questionsData[currentLanguage][map.philosophical]);
  if (personalCheckbox.checked) selected = selected.concat(questionsData[currentLanguage][map.personal]);
  if (getToKnowCheckbox.checked) selected = selected.concat(questionsData[currentLanguage][map.getToKnow]);
  if (workCheckbox.checked) selected = selected.concat(questionsData[currentLanguage][map.work]);

  // Floskler finns bara på svenska
  if (currentLanguage === 'sv' && flosklerCheckbox.checked) {
    selected = selected.concat(questionsData.sv["Floskler"]);
  }

  // Ta bort dubletter
  return [...new Set(selected)];
}

// Signatur över aktuellt urval (språk + ikryssade kategorier)
function getSelectionSignature() {
  const flags = [
    funCheckbox.checked, philosophicalCheckbox.checked, personalCheckbox.checked,
    getToKnowCheckbox.checked, workCheckbox.checked, flosklerCheckbox.checked
  ];
  return currentLanguage + '|' + flags.join(',');
}

// Blanda en array (Fisher-Yates)
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Visa nästa fråga – varje valt påstående visas en gång innan kön blandas om
function showNextQuestion() {
  const categoryQuestions = getCategoryQuestions();

  // Inga kategorier valda
  if (categoryQuestions.length === 0) {
    questionElement.textContent = currentLanguage === 'sv'
      ? "Välj minst en kategori för att visa frågor"
      : "Select at least one category to show questions";
    questionQueue = [];
    currentSignature = '';
    return;
  }

  // Ta bort bortvalda påståenden
  const pool = categoryQuestions.filter(q => !blockedQuestions.has(q));

  // Alla påståenden i valda kategorier är bortvalda
  if (pool.length === 0) {
    questionElement.textContent = translations[currentLanguage].allDeselectedMessage;
    questionQueue = [];
    currentSignature = '';
    return;
  }

  const signature = getSelectionSignature();

  // Bygg en ny blandad kö när urvalet ändrats eller när kön är tömd
  if (signature !== currentSignature || questionQueue.length === 0) {
    questionQueue = shuffle(pool);

    // Undvik att sista påståendet i en runda blir det första i nästa
    if (questionQueue.length > 1 && questionQueue[0] === lastQuestion) {
      const swapIndex = 1 + Math.floor(Math.random() * (questionQueue.length - 1));
      [questionQueue[0], questionQueue[swapIndex]] = [questionQueue[swapIndex], questionQueue[0]];
    }

    currentSignature = signature;
  }

  // Hoppa över påståenden som blockerats efter att kön byggdes
  let question;
  do {
    question = questionQueue.shift();
  } while (question !== undefined && blockedQuestions.has(question));

  // Om kön tömdes av blockering, bygg om från aktuell pool
  if (question === undefined) {
    questionQueue = shuffle(pool);
    question = questionQueue.shift();
  }

  lastQuestion = question;
  displayQuestion(question);
}

// Visa en fråga i frågefältet med övergång
function displayQuestion(text) {
  questionElement.style.opacity = 0;
  setTimeout(() => {
    questionElement.textContent = text;
    questionElement.style.opacity = 1;
  }, 300);
}

// Spara inställningar i cookies
function saveSettings() {
  const settings = {
    language: currentLanguage,
    categories: {
      fun: funCheckbox.checked,
      philosophical: philosophicalCheckbox.checked,
      personal: personalCheckbox.checked,
      getToKnow: getToKnowCheckbox.checked,
      work: workCheckbox.checked,
      floskler: flosklerCheckbox.checked
    },
    blocked: Array.from(blockedQuestions)
  };

  // Spara i localStorage
  localStorage.setItem('checkinSettings', JSON.stringify(settings));
}

// Ladda sparade inställningar
function loadSavedSettings() {
  const savedSettings = localStorage.getItem('checkinSettings');
  
  if (savedSettings) {
    const settings = JSON.parse(savedSettings);
    
    // Återställ språk
    currentLanguage = settings.language;
    svBtn.classList.toggle('active', currentLanguage === 'sv');
    enBtn.classList.toggle('active', currentLanguage === 'en');
    
    // Återställ kategorier
    funCheckbox.checked = settings.categories.fun;
    philosophicalCheckbox.checked = settings.categories.philosophical;
    personalCheckbox.checked = settings.categories.personal;
    getToKnowCheckbox.checked = settings.categories.getToKnow;
    workCheckbox.checked = settings.categories.work;
    flosklerCheckbox.checked = settings.categories.floskler !== false;

    // Återställ bortvalda påståenden
    if (Array.isArray(settings.blocked)) {
      blockedQuestions = new Set(settings.blocked);
    }

    updateLanguage();
  }
}

// Initialisera applikationen när DOM är laddad
document.addEventListener('DOMContentLoaded', init);
