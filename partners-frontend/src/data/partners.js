// ─────────────────────────────────────────────────────────────────────────────
// B&P House — Partner onboarding content schema (bilingual EN / AR).
//
// Single source of truth for the journey. The Arabic is formal Modern Standard
// Arabic in a plain boardroom register (clear and direct, not literary).
//
// Rules:
//   • `B&P House` is never translated. `Bisher & Partners` → `بشر وشركاؤه`.
//   • No em dashes anywhere, in either language.
//
// Field types consumed by PartnersFields:
//   text | email | tel | url | textarea | select | country | single | multi | ordered
//   - text/email/tel/url may carry `altLabel` + `altWhen:{key,value}` for a
//     label that changes with another answer (the organisation field).
//   - multi may carry `max` and `hasOther` (an "Other" option that reveals a
//     short text field stored under `<key>_other`).
// ─────────────────────────────────────────────────────────────────────────────

// ── Option sets ──────────────────────────────────────────────────────────────

const honorificOptions = [
  { value: "excellency", en: "Excellency", ar: "معالي" },
  { value: "prof", en: "Prof.", ar: "أ.د." },
  { value: "dr", en: "Dr.", ar: "د." },
  { value: "eng", en: "Eng.", ar: "م." },
  { value: "mr", en: "Mr.", ar: "السيد" },
  { value: "ms", en: "Ms.", ar: "السيدة" },
];

const yearsOptions = [
  { value: "lt15", en: "Under 15 years", ar: "أقل من 15 سنة" },
  { value: "15_20", en: "15 to 20 years", ar: "من 15 إلى 20 سنة" },
  { value: "20_25", en: "20 to 25 years", ar: "من 20 إلى 25 سنة" },
  { value: "25_30", en: "25 to 30 years", ar: "من 25 إلى 30 سنة" },
  { value: "gt30", en: "More than 30 years", ar: "أكثر من 30 سنة" },
];

const statusOptions = [
  { value: "serving_ceo", en: "A serving chief executive or president", ar: "رئيس تنفيذي أو رئيس حالي" },
  { value: "serving_csuite", en: "A serving C-suite executive (CxO)", ar: "تنفيذي في الإدارة العليا (CxO) حالياً" },
  { value: "chair_board", en: "A chairman or board member", ar: "رئيس أو عضو مجلس إدارة" },
  { value: "gov_leader", en: "A senior government or public-sector leader", ar: "قيادي حكومي أو في القطاع العام" },
  { value: "former_exec", en: "A former executive, now advising or investing", ar: "تنفيذي سابق، يعمل الآن في الاستشارة أو الاستثمار" },
  { value: "prof_services", en: "A managing partner or leader in professional services (consulting, law, audit)", ar: "شريك إداري أو قيادي في الخدمات المهنية (استشارات، قانون، تدقيق)" },
  { value: "founder", en: "A founder or business owner", ar: "مؤسس أو صاحب عمل" },
  { value: "investor", en: "An investor, fund manager or family-office principal", ar: "مستثمر أو مدير صندوق أو مسؤول مكتب عائلي" },
  { value: "independent_authority", en: "An independent advisor or recognised sector authority", ar: "مستشار مستقل أو مرجع قطاعي معروف" },
];

const seniorityOptions = [
  { value: "minister", en: "Minister, deputy minister or authority governor", ar: "وزير أو نائب وزير أو محافظ هيئة" },
  { value: "chair", en: "Chairman or board member", ar: "رئيس أو عضو مجلس إدارة" },
  { value: "ceo", en: "CEO or President", ar: "رئيس تنفيذي أو رئيس" },
  { value: "csuite", en: "C-suite executive (CxO)", ar: "تنفيذي في الإدارة العليا (CxO)" },
  { value: "md_partner", en: "Managing Director or Partner", ar: "عضو منتدب أو شريك" },
  { value: "vp_gm", en: "Vice President or General Manager", ar: "نائب رئيس أو مدير عام" },
  { value: "director", en: "Senior Director or Head of function", ar: "مدير أول أو رئيس إدارة" },
];

const workStatusOptions = [
  { value: "within", en: "Within an institution", ar: "ضمن مؤسسة" },
  { value: "independent", en: "Working independently", ar: "أعمل بشكل مستقل" },
];

const qualificationOptions = [
  { value: "phd", en: "Doctorate (PhD)", ar: "دكتوراه" },
  { value: "masters", en: "Master's degree", ar: "ماجستير" },
  { value: "bachelors", en: "Bachelor's degree", ar: "بكالوريوس" },
  { value: "professional", en: "Professional qualification or fellowship", ar: "مؤهل مهني أو زمالة" },
  { value: "other", en: "Other", ar: "أخرى" },
];

const expertiseOptions = [
  { value: "strategy_growth", en: "Corporate strategy and growth", ar: "استراتيجية الشركات والنمو" },
  { value: "turnaround", en: "Turnaround and performance improvement", ar: "معالجة التعثّر وتحسين الأداء" },
  { value: "grc", en: "Governance, risk and compliance", ar: "الحوكمة وإدارة المخاطر والامتثال" },
  { value: "ma", en: "Mergers, acquisitions and restructuring", ar: "الاندماج والاستحواذ وإعادة الهيكلة" },
  { value: "investment", en: "Investment and capital raising", ar: "الاستثمار وجمع رأس المال" },
  { value: "digital", en: "Digital transformation", ar: "التحول الرقمي" },
  { value: "ai_data", en: "Artificial intelligence and data", ar: "الذكاء الاصطناعي والبيانات" },
  { value: "tech_cyber", en: "Technology, cloud and cybersecurity", ar: "التقنية والحوسبة السحابية والأمن السيبراني" },
  { value: "legal_policy", en: "Legal, regulatory and public policy", ar: "الشؤون القانونية والتنظيمية والسياسات العامة" },
  { value: "family_business", en: "Family business governance and succession", ar: "حوكمة الأعمال العائلية والتعاقب" },
  { value: "entrepreneurship", en: "Entrepreneurship and venture building", ar: "ريادة الأعمال وبناء المشاريع" },
  { value: "ops_delivery", en: "Operations, project and programme delivery", ar: "العمليات وإدارة المشاريع والبرامج" },
  { value: "human_capital", en: "Human capital and organisational design", ar: "رأس المال البشري والتصميم المؤسسي" },
  { value: "marketing", en: "Marketing, brand and commercial growth", ar: "التسويق والعلامة والنمو التجاري" },
  { value: "finance", en: "Finance, accounting and assurance", ar: "المالية والمحاسبة والتدقيق" },
  { value: "esg", en: "Sustainability and ESG", ar: "الاستدامة والحوكمة البيئية والاجتماعية" },
  { value: "other", en: "Other (please specify)", ar: "أخرى (يرجى التحديد)" },
];

const sectorsOptions = [
  { value: "energy", en: "Energy, petrochemicals and utilities", ar: "الطاقة والبتروكيماويات والمرافق" },
  { value: "mining", en: "Mining and metals", ar: "التعدين والمعادن" },
  { value: "banking", en: "Banking and financial services", ar: "البنوك والخدمات المالية" },
  { value: "capital_markets", en: "Capital markets and investment", ar: "أسواق المال والاستثمار" },
  { value: "real_estate", en: "Real estate, construction and giga-projects", ar: "العقار والإنشاءات والمشاريع الكبرى" },
  { value: "tourism", en: "Tourism and hospitality", ar: "السياحة والضيافة" },
  { value: "sport_ent", en: "Sport, entertainment and culture", ar: "الرياضة والترفيه والثقافة" },
  { value: "health", en: "Healthcare and life sciences", ar: "الرعاية الصحية وعلوم الحياة" },
  { value: "education", en: "Education, training and research", ar: "التعليم والتدريب والبحث" },
  { value: "telecom", en: "Telecommunications", ar: "الاتصالات" },
  { value: "transport", en: "Transport, logistics and aviation", ar: "النقل والخدمات اللوجستية والطيران" },
  { value: "manufacturing", en: "Manufacturing and industrial development", ar: "الصناعة والتطوير الصناعي" },
  { value: "retail", en: "Retail, consumer goods and e-commerce", ar: "التجزئة والسلع الاستهلاكية والتجارة الإلكترونية" },
  { value: "food_agri", en: "Food security and agriculture", ar: "الأمن الغذائي والزراعة" },
  { value: "defence", en: "Defence and military industries", ar: "الدفاع والصناعات العسكرية" },
  { value: "government", en: "Government and the public sector", ar: "الحكومة والقطاع العام" },
  { value: "family_holdings", en: "Family businesses and holding groups", ar: "الأعمال العائلية والمجموعات القابضة" },
  { value: "nonprofit", en: "Non-profit, endowments and the third sector", ar: "القطاع غير الربحي والأوقاف والقطاع الثالث" },
  { value: "other", en: "Other (please specify)", ar: "أخرى (يرجى التحديد)" },
];

const contributionOptions = [
  { value: "counsel", en: "Offering counsel where my expertise applies", ar: "تقديم المشورة في مجال خبرتي" },
  { value: "delivery", en: "Leading or overseeing delivery", ar: "قيادة التنفيذ أو الإشراف عليه" },
  { value: "sector", en: "Leading a sector practice", ar: "قيادة ممارسة قطاعية" },
  { value: "offerings", en: "Shaping new offerings and methodologies", ar: "تطوير حلول ومنهجيات جديدة" },
  { value: "ventures", en: "Bringing ventures or capital", ar: "جلب مشاريع أو رأس مال" },
  { value: "mandate", en: "Taking on a defined strategic mandate", ar: "تولّي تكليف استراتيجي محدد" },
  { value: "represent", en: "Representing B&P House as a Senior Partner", ar: "تمثيل B&P House بصفتي شريكاً أول" },
  { value: "relationships", en: "Bringing the right people together from my network", ar: "جمع الأشخاص المناسبين من شبكة علاقاتي" },
];

const visionOptions = [
  { value: "giga", en: "Giga-projects and national infrastructure", ar: "المشاريع الكبرى والبنية التحتية الوطنية" },
  { value: "privatisation", en: "Privatisation and PPP", ar: "الخصخصة والشراكة بين القطاعين" },
  { value: "gov_digital", en: "Public-sector transformation and digital government", ar: "تحول القطاع العام والحكومة الرقمية" },
  { value: "financial_dev", en: "Financial sector and capital-market development", ar: "تطوير القطاع المالي وأسواق المال" },
  { value: "tourism_sport", en: "Tourism, sport and entertainment", ar: "السياحة والرياضة والترفيه" },
  { value: "industrial", en: "Industrial development and local content", ar: "التنمية الصناعية والمحتوى المحلي" },
  { value: "sme", en: "SME growth and entrepreneurship", ar: "نمو المنشآت الصغيرة والمتوسطة وريادة الأعمال" },
  { value: "energy_esg", en: "Energy transition, sustainability and ESG", ar: "تحول الطاقة والاستدامة" },
  { value: "quality_life", en: "Health, education and quality of life", ar: "الصحة والتعليم وجودة الحياة" },
  { value: "other", en: "Other (please specify)", ar: "أخرى (يرجى التحديد)" },
];

const institutionsOptions = [
  { value: "gov", en: "Government ministries and authorities", ar: "الوزارات والجهات الحكومية" },
  { value: "sovereign", en: "Sovereign funds and PIF-linked entities", ar: "الصناديق السيادية والجهات المرتبطة بصندوق الاستثمارات العامة" },
  { value: "family_business", en: "Major family businesses and holding groups", ar: "كبرى الأعمال العائلية والمجموعات القابضة" },
  { value: "corporates", en: "Large private corporations", ar: "الشركات الخاصة الكبرى" },
  { value: "banks", en: "Banks and financial institutions", ar: "البنوك والمؤسسات المالية" },
  { value: "investors", en: "Investors and family offices", ar: "المستثمرون والمكاتب العائلية" },
  { value: "startups", en: "The startup and venture ecosystem", ar: "منظومة الشركات الناشئة والمشاريع" },
  { value: "regulators", en: "Regulators and standards bodies", ar: "الجهات التنظيمية وهيئات المعايير" },
];

const relationshipNatureOptions = [
  { value: "senior_personal", en: "Personal, at the most senior level", ar: "شخصية، على أعلى مستوى" },
  { value: "exec_direct", en: "Direct, at executive level", ar: "مباشرة، على المستوى التنفيذي" },
  { value: "strong_prof", en: "Strong and professional", ar: "قوية ومهنية" },
  { value: "introductions", en: "Through trusted introductions", ar: "عبر تعريفات موثوقة" },
  { value: "sector_specific", en: "Specific to certain sectors", ar: "محصورة في قطاعات معيّنة" },
  { value: "advisory", en: "More advisory than direct", ar: "استشارية أكثر منها مباشرة" },
];

const geographyOptions = [
  { value: "ksa", en: "Saudi Arabia", ar: "المملكة العربية السعودية" },
  { value: "gcc", en: "The GCC", ar: "دول الخليج" },
  { value: "mena", en: "Wider MENA", ar: "الشرق الأوسط وشمال أفريقيا" },
  { value: "intl", en: "International", ar: "دولية" },
];

const accessReadinessOptions = [
  { value: "freely", en: "Freely, where it serves", ar: "بحرية، حيثما يكون مناسباً" },
  { value: "selectively", en: "Selectively and with discretion", ar: "بانتقائية وتحفّظ" },
  { value: "firm_involved", en: "Only with the firm's involvement", ar: "فقط بمشاركة الشركة" },
];

const appealsOptions = [
  { value: "standing", en: "The standing of a trusted institutional platform", ar: "مكانة منصّة مؤسسية موثوقة" },
  { value: "access", en: "Access to mandates and relationships worthy of your experience", ar: "الوصول إلى تكليفات وعلاقات تليق بخبرتك" },
  { value: "infrastructure", en: "The team and infrastructure behind every engagement", ar: "الفريق والإسناد خلف كل مهمة" },
  { value: "sector_build", en: "The opportunity to shape a sector and build lasting work", ar: "فرصة تطوير قطاع وبناء أثر باقٍ" },
  { value: "peers", en: "The company of a selective circle of peers", ar: "صحبة نخبة من النظراء" },
  { value: "recognition", en: "Fair recognition for the value you create", ar: "تقدير عادل لما تقدّمه من قيمة" },
];

const availabilityOptions = [
  { value: "few_hours", en: "A few hours a month", ar: "ساعات قليلة شهرياً" },
  { value: "few_days", en: "A few days a month", ar: "أيام قليلة شهرياً" },
  { value: "most_weeks", en: "Part of most weeks", ar: "جزء من معظم الأسابيع" },
  { value: "substantial", en: "A substantial, ongoing commitment", ar: "التزام كبير ومستمر" },
];

const horizonOptions = [
  { value: "long_term", en: "A long-term institutional relationship", ar: "علاقة مؤسسية طويلة الأمد" },
  { value: "open", en: "An open-ended exploration", ar: "استكشاف مفتوح" },
  { value: "specific", en: "Specific opportunities, as they arise", ar: "فرص محددة، عند ظهورها" },
];

const readinessOptions = [
  { value: "now", en: "I am willing to start now", ar: "أنا على استعداد للبدء الآن" },
  { value: "months", en: "Within a few months", ar: "خلال أشهر قليلة" },
  { value: "exploring", en: "Exploring for now", ar: "في مرحلة الاستكشاف حالياً" },
];

const acknowledgments = [
  {
    key: "ack_intro",
    en: "I understand this is an introduction, and that it carries no obligation on either side at this stage.",
    ar: "أُدرك أن هذا تعريف أوّلي لا يترتّب عليه أي التزام على أي من الطرفين في هذه المرحلة.",
  },
  {
    key: "ack_consent",
    en: "I am content for Bisher & Partners to hold what I have shared, in confidence, for the purpose of this introduction.",
    ar: "لا مانع لديّ من احتفاظ بشر وشركاؤه بما شاركته، بسرّية، لغرض هذا التعريف.",
  },
];

// ── Screens ──────────────────────────────────────────────────────────────────

export const SCREENS = [
  // Screen 1 — Welcome (introduction to the House)
  {
    id: "welcome",
    step: 1,
    kind: "welcome",
    heading: { en: "Welcome to B&P House", ar: "مرحباً بك في B&P House" },
    blocks: {
      lead: {
        en: "A distinguished career leaves a person with more than a title. It leaves judgment, shaped by decisions of true weight; relationships built and kept across many years; and a name that precedes its bearer into the room. Such things are earned slowly, and they are rare.",
        ar: "المسيرة المهنية الرفيعة تمنح صاحبها ما هو أبعد من المنصب: حُكماً صقلته قرارات مهمة، وعلاقات بُنيت عبر سنوات، ومكانةً معروفة. وهي مكتسبات نادرة لا تُبنى إلا بالوقت.",
      },
      house: {
        en: "B&P House is where Bisher & Partners brings together those who possess precisely this: senior leaders, sector authorities, and respected professionals who continue to apply their experience to work of substance, within an institution worthy of it.",
        ar: "في B&P House تجمع بشر وشركاؤه نخبةً ممن يملكون ذلك: قادةً كباراً، وخبراء قطاعيين، ومهنيين مرموقين، يواصلون توظيف خبرتهم في أعمال ذات قيمة، ضمن مؤسسة تليق بهم.",
      },
      invitation: {
        en: "You are invited to take your place among them, as a Senior Partner of Bisher & Partners.",
        ar: "وأنت مدعوّ للانضمام إليهم، شريكاً أول في بشر وشركاؤه.",
      },
      role: {
        en: "The role is yours to define. You offer your judgment where it is of greatest value, extend an introduction where you judge it fitting, and take the lead upon the files that command your interest. In support of this, Bisher & Partners provides its name, its teams, and the discipline of its delivery, so that a single conversation may become a considered and well-executed engagement. The measure of your involvement remains yours to determine, and your contribution is duly recognised and protected.",
        ar: "وأنت من يحدّد دوره. تُقدّم رأيك حيث يكون أكثر فائدة، وتُعرّف بمن تراه مناسباً، وتتولّى الملفات التي تهمّك. وتوفّر بشر وشركاؤه اسمها وفِرقها وانضباط التنفيذ، حتى يتحوّل الحديث الأول إلى عمل مدروس ومُتقن. ويبقى حجم مشاركتك بيدك، ويُحفظ إسهامك ويُنسب إليك.",
      },
      appeal: {
        en: "For many who accept, the appeal lies in consequence itself: the opportunity to shape a sector, to take part in endeavours of genuine merit, and to build something that endures, in the company of equals.",
        ar: "وما يجذب كثيرين هو الأثر نفسه: فرصة للإسهام في تطوير قطاع، والمشاركة في أعمال ذات قيمة حقيقية، وبناء ما يبقى، بين نظراء لهم.",
      },
      trust: {
        en: "All of this rests upon discretion. What you confide, and the relationships you choose to share, are held in the strictest confidence and treated with the care your standing warrants.",
        ar: "وكل ذلك قائم على السرّية. فما تشاركنا به، والعلاقات التي تختار ذكرها، يبقى طيّ الكتمان ويُعامَل بما يليق بمكانتك.",
      },
      close: {
        en: "This invitation is personal, and it has been extended with intention. What follows is a brief introduction, so that we may come to know you, and the points at which your interests meet our own. We would be honoured by your consideration.",
        ar: "هذه دعوة شخصية، وُجِّهت إليك عن قصد. وما يلي تعريف موجز نتعرّف به إليك، ونرى أين تلتقي اهتماماتك باهتماماتنا. ويسعدنا أن تنظر فيها.",
      },
    },
    reassurance: {
      en: "A matter of minutes, and yours to pause and resume at your convenience.",
      ar: "دقائق معدودة، ويمكنك التوقّف والعودة وقتما تشاء.",
    },
  },

  // Screen 2 — Page 1: Your details
  {
    id: "details",
    step: 2,
    kind: "fields",
    heading: { en: "Your details", ar: "بياناتك" },
    intro: { en: "A few details, so we know you and can reach you.", ar: "بعض البيانات لنعرفك ونتمكّن من التواصل معك." },
    fields: [
      { id: "name", key: "full_name", type: "text", required: true, autoComplete: "name",
        label: { en: "Full name", ar: "الاسم الكامل" } },
      { id: "honorific", key: "honorific", type: "select", required: true, options: honorificOptions,
        label: { en: "How you prefer to be addressed", ar: "كيف تفضّل أن نخاطبك" } },
      { id: "email", key: "email", type: "email", required: true, autoComplete: "email",
        label: { en: "Email", ar: "البريد الإلكتروني" } },
      { id: "mobile", key: "mobile", type: "tel", required: true, autoComplete: "tel",
        label: { en: "Mobile number", ar: "رقم الجوال" } },
      { id: "based", key: "based_in", type: "text", required: true,
        label: { en: "Where you are mostly based", ar: "أين مقرّك في الغالب" } },
      { id: "nationality", key: "nationality", type: "country", required: true,
        label: { en: "Nationality", ar: "الجنسية" } },
      { id: "linkedin", key: "linkedin", type: "url", required: false,
        label: { en: "Your LinkedIn or professional profile", ar: "حسابك على لينكدإن أو ملفك المهني" },
        helper: { en: "A link is enough, if you have one.", ar: "يكفي الرابط، إن وُجد." } },
    ],
  },

  // Screen 3 — Page 2: Your standing
  {
    id: "standing",
    step: 3,
    kind: "fields",
    heading: { en: "Your standing", ar: "مكانتك المهنية" },
    intro: { en: "Where you sit today, and the experience behind it.", ar: "موقعك اليوم، والخبرة التي وراءه." },
    fields: [
      { id: "years", key: "years_experience", type: "single", required: true, options: yearsOptions,
        label: { en: "Years of professional experience", ar: "سنوات الخبرة المهنية" } },
      { id: "status", key: "current_status", type: "multi", required: true, options: statusOptions,
        label: { en: "Which best describes you today", ar: "ما الذي يصفك اليوم" },
        helper: { en: "Choose any that apply.", ar: "اختر ما ينطبق." } },
      { id: "seniority", key: "seniority_reached", type: "single", required: true, options: seniorityOptions,
        label: { en: "The highest level of seniority you have reached", ar: "أعلى منصب وصلت إليه" } },
      { id: "title", key: "title", type: "text", required: true,
        label: { en: "Your current or most recent title", ar: "منصبك الحالي أو الأخير" },
        helper: { en: "Whichever best reflects your standing.", ar: "ما يعكس مكانتك على أفضل وجه." } },
      { id: "workstatus", key: "work_status", type: "single", required: true, options: workStatusOptions,
        label: { en: "Your current standing", ar: "وضعك الحالي" } },
      { id: "org", key: "institution", type: "text", required: true,
        label: { en: "Your institution", ar: "مؤسستك" },
        altLabel: { en: "Your most recent institution", ar: "مؤسستك الأخيرة" },
        altWhen: { key: "work_status", value: "independent" } },
      { id: "qualification", key: "qualification", type: "single", required: true, options: qualificationOptions,
        label: { en: "Highest academic qualification", ar: "أعلى مؤهل علمي" } },
    ],
  },

  // Screen 4 — Page 3: Your expertise
  {
    id: "expertise",
    step: 4,
    kind: "fields",
    heading: { en: "Your expertise", ar: "مجالات خبرتك" },
    intro: { en: "The areas and sectors where your judgment carries the most weight.", ar: "المجالات والقطاعات التي يكون لرأيك فيها أكبر الأثر." },
    fields: [
      { id: "expertise", key: "expertise_areas", type: "multi", required: true, max: 4, hasOther: true, options: expertiseOptions,
        label: { en: "Your principal areas of expertise", ar: "أبرز مجالات خبرتك" },
        helper: { en: "Choose up to four.", ar: "اختر حتى أربعة." } },
      { id: "sectors", key: "sectors", type: "multi", required: true, max: 4, hasOther: true, options: sectorsOptions,
        label: { en: "Sectors where you have real depth", ar: "القطاعات التي تملك فيها خبرة حقيقية" },
        helper: { en: "Choose up to four.", ar: "اختر حتى أربعة." } },
      { id: "vision", key: "vision_themes", type: "multi", required: false, hasOther: true, options: visionOptions,
        label: { en: "Vision 2030 themes you have worked within", ar: "محاور رؤية 2030 التي عملت ضمنها" },
        helper: { en: "Choose any that apply.", ar: "اختر ما ينطبق." } },
    ],
  },

  // Screen 5 — Page 4: Your reach
  {
    id: "reach",
    step: 5,
    kind: "fields",
    heading: { en: "Your reach", ar: "امتداد علاقاتك" },
    intro: { en: "The shape of your access, never names. It shows us where we are strongest together.", ar: "طبيعة وصولك، دون أي أسماء. يبيّن لنا أين نكون أقوى معاً." },
    fields: [
      { id: "institutions", key: "institutions", type: "multi", required: true, options: institutionsOptions,
        label: { en: "The institutions you are connected to", ar: "المنشآت التي تربطك بها علاقات" },
        helper: { en: "Choose any that apply.", ar: "اختر ما ينطبق." } },
      { id: "relnature", key: "relationship_nature", type: "multi", required: true, max: 3, options: relationshipNatureOptions,
        label: { en: "The nature of your relationships in these institutions", ar: "طبيعة علاقاتك داخل هذه المنشآت" },
        helper: { en: "Choose up to three.", ar: "اختر حتى ثلاثة." } },
      { id: "geographies", key: "reach_geographies", type: "multi", required: true, options: geographyOptions,
        label: { en: "Where your relationships are strongest", ar: "أين تتركّز علاقاتك الأقوى" },
        helper: { en: "Choose any that apply.", ar: "اختر ما ينطبق." } },
      { id: "readiness_access", key: "access_readiness", type: "single", required: true, options: accessReadinessOptions,
        label: { en: "How readily you would draw on these relationships", ar: "إلى أي مدى تستعدّ للاستفادة من هذه العلاقات" } },
    ],
  },

  // Screen 6 — Page 5: What draws you
  {
    id: "draws",
    step: 6,
    kind: "fields",
    heading: { en: "What draws you", ar: "ما الذي يجذبك" },
    intro: { en: "What you value, and the time you can give.", ar: "ما تقدّره، والوقت الذي يمكنك منحه." },
    fields: [
      { id: "appeals", key: "appeals", type: "ordered", required: true, options: appealsOptions,
        label: { en: "What draws you to B&P House", ar: "ما الذي يجذبك إلى B&P House" },
        helper: { en: "Place them in the order that matters most to you.", ar: "رتّبها حسب الأهم لديك." } },
      { id: "contribution", key: "contribution", type: "multi", required: true, max: 4, options: contributionOptions,
        label: { en: "How you would prefer to take part", ar: "كيف تفضّل أن تشارك" },
        helper: { en: "Choose up to four.", ar: "اختر حتى أربعة." } },
      { id: "availability", key: "availability", type: "single", required: true, options: availabilityOptions,
        label: { en: "The time you imagine giving", ar: "الوقت الذي تتصوّر منحه" } },
      { id: "horizon", key: "horizon", type: "single", required: true, options: horizonOptions,
        label: { en: "The horizon you have in mind", ar: "الأفق الذي تفكّر فيه" } },
      { id: "readiness", key: "readiness", type: "single", required: true, options: readinessOptions,
        label: { en: "How soon you could begin", ar: "متى يمكنك البدء" } },
    ],
  },

  // Screen 7 — Page 6: A closing word
  {
    id: "closing",
    step: 7,
    kind: "fields",
    heading: { en: "A closing word", ar: "كلمة أخيرة" },
    intro: { en: "Anything you would like to add before we speak.", ar: "أي شيء تودّ إضافته قبل أن نتحدّث." },
    fields: [
      { id: "remarks", key: "closing_remarks", type: "textarea", required: false,
        label: { en: "Would you like to highlight any last remarks before the next conversation?", ar: "هل تودّ إضافة أي ملاحظات أخيرة قبل المحادثة القادمة؟" },
        helper: { en: "Keep it empty if all is well.", ar: "اتركها فارغة إن لم يكن لديك ما تضيفه." } },
    ],
    ack: {
      subheading: { en: "Before you send", ar: "قبل الإرسال" },
      intro: { en: "Two understandings, so we begin on the same footing.", ar: "تفاهمان بسيطان لنبدأ من أرضية واحدة." },
      items: acknowledgments,
    },
  },

  // Screen 8 — One last look
  {
    id: "review",
    step: 8,
    kind: "review",
    heading: { en: "One last look", ar: "مراجعة أخيرة" },
    intro: { en: "Take a moment to review what you have shared. You can change anything before you send it.", ar: "خذ لحظة لمراجعة ما شاركته. يمكنك تعديل أي شيء قبل الإرسال." },
    fields: [],
    submitLabel: { en: "Send my introduction", ar: "إرسال تعريفي" },
  },

  // Screen 9 — Confirmation
  {
    id: "confirmation",
    step: 9,
    kind: "confirmation",
    heading: { en: "Thank you", ar: "شكراً لك" },
    body: {
      en: "Your introduction is now with the B&P House committee. What follows is a short review, a conversation with our team, and a considered decision. We will be in touch soon.",
      ar: "وصل تعريفك إلى لجنة B&P House. يلي ذلك مراجعة موجزة، ولقاء مع فريقنا، وقرار مدروس. سنتواصل معك قريباً.",
    },
  },
];

// Total visible steps (Welcome ... One last look). Confirmation is excluded.
export const TOTAL_STEPS = 8;

// ── Shared interface text ────────────────────────────────────────────────────

export const UI = {
  en: {
    stepOf: "Step {x} of {n}",
    continue: "Continue",
    back: "Back",
    savedNote: "Your answers are saved as you go.",
    required: "Required",
    optional: "Optional",
    missingField: "This one helps us, if you would.",
    begin: "Begin",
    edit: "Edit",
    welcomeGreeting: "Welcome, {name}",
    stepsNav: "Form steps",
    goToStep: "Go to step {x} of {n}",
    stepperHint: "Tap any step to preview the form as you go.",
    sending: "Sending…",
    submitErrorReview: "A few answers need revisiting. We have returned you to them.",
    submitErrorNetwork: "We could not send this just now. Your answers are saved — please try again.",
    breadcrumb: "B&P House",
    selectPlaceholder: "Select",
    searchPlaceholder: "Search",
    otherPlaceholder: "Please specify",
    noResults: "No matches",
  },
  ar: {
    stepOf: "الخطوة {x} من {n}",
    continue: "متابعة",
    back: "رجوع",
    savedNote: "تُحفظ إجاباتك أولاً بأول.",
    required: "مطلوب",
    optional: "اختياري",
    missingField: "يعيننا هذا، إن سمحت.",
    begin: "لنبدأ",
    edit: "تعديل",
    welcomeGreeting: "مرحباً، {name}",
    stepsNav: "خطوات النموذج",
    goToStep: "الانتقال إلى الخطوة {x} من {n}",
    stepperHint: "اضغط أي خطوة لمعاينة النموذج أثناء التعبئة.",
    sending: "جارٍ الإرسال…",
    submitErrorReview: "بعض الإجابات تحتاج إلى مراجعة، وقد أعدناك إليها.",
    submitErrorNetwork: "تعذّر الإرسال في هذه اللحظة. إجاباتك محفوظة، فيرجى إعادة المحاولة.",
    breadcrumb: "B&P House",
    selectPlaceholder: "اختر",
    searchPlaceholder: "ابحث",
    otherPlaceholder: "يرجى التحديد",
    noResults: "لا نتائج",
  },
};

// SEO meta — never shown inside the partner flow.
export const META = {
  en: {
    title: "B&P House | Bisher & Partners",
    description: "A private invitation to take your place as a Senior Partner of Bisher & Partners.",
  },
  ar: {
    title: "B&P House | بشر وشركاؤه",
    description: "دعوة خاصة للانضمام شريكاً أول في بشر وشركاؤه.",
  },
};

// ── Helpers ──────────────────────────────────────────────────────────────────

export function pick(pair, locale) {
  if (pair == null) return "";
  if (typeof pair === "string") return pair;
  return pair[locale] != null ? pair[locale] : pair.en;
}

export function getScreen(step) {
  return SCREENS.find((s) => s.step === step) || SCREENS[0];
}

export function getConfirmationScreen() {
  return SCREENS.find((s) => s.kind === "confirmation");
}

export function allFields() {
  const out = [];
  for (const screen of SCREENS) {
    if (Array.isArray(screen.fields)) {
      for (const f of screen.fields) out.push({ ...f, step: screen.step });
    }
  }
  return out;
}

export function optionLabel(options, value, locale) {
  const opt = (options || []).find((o) => o.value === value);
  return opt ? pick(opt, locale) : value;
}
