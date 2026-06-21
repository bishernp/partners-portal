// Executive-arm definitions for Bisher & Partners ("Solutions").
//
// Bisher & Partners is an integrated institutional platform across a six-layer
// architecture. The platform owns Layer 1 (Diagnosis & Design); five arms
// execute Layers 2 to 6. This file defines those five arms.
//
// Structural fields are shared; localized prose lives under `en` / `ar`.
// Arm names (B&P Digital, B&P GRC, ...) stay in Latin script in both locales.
// `cardImg` is the Solutions-index card image; `imgFolder` / `imgPrefix` drive
// the detail-page slot images. Use getArms(locale) / getArm(slug, locale).

const armsData = [
  {
    slug: "digital",
    layerNum: 2,
    imgFolder: "services/digital-transformation-imgs",
    imgPrefix: "DT",
    cardImg: "/img/bnp-custom/home/DT.webp",
    commitmentAuthorImg: "/img/bnp-custom/team/cto.webp",
    nextSlug: "grc",
    en: {
      name: "B&P Digital",
      discipline: "Digital Operations & AI Automation",
      title:
        "B&P Digital | Digital Operations & AI Automation | Bisher & Partners",
      layerLabel: "Second Layer · Digital Build",
      ownsLabel: "Owns the Second Layer, in integration with B&P PMO",
      commitmentAuthorName: "Eng. Mohammed Bisher",
      commitmentAuthorRole: "Chief Technology Officer",
      heroSubtitlePre:
        "Building the digital operational fabric of institutions, turning manual, intermittent chains into ",
      heroSubtitleEm:
        "reliable, interconnected flows that run at institutional scale",
      heroSubtitlePost: ".",
      tags1: ["Automation", "AI Agents", "Unified Data"],
      tags2: ["Integration", "Command Dashboards", "Digital Twin"],
      opportunityLabel: "The Layer",
      opportunityPre:
        "B&P Digital builds the digital operational fabric of institutions. It reshapes the way work is done, turning manual and intermittent chains into reliable, interconnected digital flows capable of running at institutional scale.",
      opportunityEm:
        "It establishes the operational digital twin, so operations become visible, measurable, and open to continuous improvement.",
      opportunityPost: "",
      practiceName: "B&P Digital",
      sectorsValue:
        "Government, large enterprises, SMEs and startups, and any institution digitizing its operational core",
      focusValue:
        "Automation, system integration, AI agents, and command dashboards over a unified data layer",
      methodologyValue: "Entry, Build, Capital empowerment",
      challengePre:
        "Most institutions run on systems that were never bound to one another: data in one place, the workflow in another, the controls in a third. Work splinters in the distances that separate them.",
      challengeEm:
        "B&P Digital closes those distances, binding data to the workflows that produce it and the controls that govern it inside a single operational layer.",
      challengePost: "",
      serviceLines: [
        {
          name: "Operations Automation",
          description:
            "Automation of internal operations across human resources, sales, marketing, and operations, converting paper-based, intermittent processes into reliable, auditable digital workflows that run at institutional scale.",
        },
        {
          name: "System Integration & the Data Layer",
          description:
            "Integration of disparate systems into a unified data layer, so institutions stop reconciling fragments and begin operating from a single, queryable source of operational truth.",
        },
        {
          name: "AI Agents",
          description:
            "Development of artificial-intelligence agents that execute routine and orchestrated operations under defined supervision, freeing institutional capacity for the decisions that need human judgment.",
        },
        {
          name: "Command Dashboards & the Digital Twin",
          description:
            "Operational dashboards that grant leadership a direct, real-time view, and an operational digital twin that makes the present picture observable, measurable, and open to continuous improvement.",
        },
      ],
      approachLabel: "How It Works",
      approachPre:
        "B&P Digital does not add another tool on top of the disorder. It re-engineers the way work is done, so the system produces its own evidence as it runs.",
      approachEm:
        "The operational digital twin becomes the surface on which AI agents and dashboards act on institutions in their actual moment.",
      approachPost: "",
      capabilitiesLabel: "Engagement Standards",
      capabilities: [
        {
          name: "Built to Institutional Scale",
          description:
            "Digital flows are engineered to run reliably at institutional scale, not as scripts that break under load, but as an operational fabric institutions can depend on.",
        },
        {
          name: "Evidence From Within the Work",
          description:
            "Compliance and audit evidence form automatically from inside the work itself, so governance is observed during operation rather than reconstructed after it.",
        },
        {
          name: "Owned by the Client",
          description:
            "The systems, the data layer, and the dashboards settle inside institutions as an operational property they own and can run from within after the team departs.",
        },
      ],
      commitmentPre:
        "Every system B&P Digital deploys is designed to be operated by the institutions' own people after the engagement closes.",
      commitmentEm:
        "The data becomes an operational property of the institutions, and the capacity remains in place, present, and ready to be run from within.",
      commitmentPost: "",
      practicePosition: "Digital Build · Second Layer",
      nextName: "B&P GRC",
      nextCursorText: "Governance",
      sectorsLabel: "Serves",
      focusLabel: "Focus",
      methodologyLabel: "Engagement",
    },
    ar: {
      name: "B&P Digital",
      discipline: "العمليات الرقمية وأتمتة الذكاء الاصطناعي",
      title:
        "B&P Digital | العمليات الرقمية وأتمتة الذكاء الاصطناعي | بشر وشركاؤه",
      layerLabel: "الطبقة الثانية · البناء الرقمي",
      ownsLabel: "تمتلك الطبقة الثانية، بالتكامل مع B&P PMO",
      commitmentAuthorName: "المهندس محمد بشر",
      commitmentAuthorRole: "الرئيس التنفيذي للتقنية",
      heroSubtitlePre:
        "بناء النسيج التشغيلي الرقمي للمنشآت، وتحويل السلاسل اليدوية والمتقطّعة إلى ",
      heroSubtitleEm: "تدفقاتٍ موثوقةٍ ومترابطة تعمل على نطاقٍ مؤسسي",
      heroSubtitlePost: ".",
      tags1: ["الأتمتة", "وكلاء الذكاء", "طبقة بيانات موحّدة"],
      tags2: ["التكامل", "لوحات القيادة", "التوأم الرقمي"],
      opportunityLabel: "الطبقة",
      opportunityPre:
        "تبني B&P Digital النسيج التشغيلي الرقمي للمنشآت. تُعيد تشكيل طريقة العمل، فتحوّل السلاسل اليدوية والمتقطّعة إلى تدفقاتٍ رقميةٍ موثوقةٍ ومترابطة، قادرةٍ على العمل على نطاقٍ مؤسسي.",
      opportunityEm:
        "وتؤسّس للتوأم الرقمي التشغيلي، فتصبح العمليات قابلةً للرؤية والقياس والتحسين المستمر.",
      opportunityPost: "",
      practiceName: "B&P Digital",
      sectorsValue:
        "الجهات الرسمية، والمنشآت الكبرى، والشركات الصغيرة والمتوسطة والمشاريع الناشئة، وكلّ منشأةٍ ترقمن نواتها التشغيلية",
      focusValue:
        "الأتمتة، وتكامل الأنظمة، ووكلاء الذكاء الاصطناعي، ولوحات القيادة فوق طبقة بياناتٍ موحّدة",
      methodologyValue: "الدخول، البناء، التمكين الرأسمالي",
      challengePre:
        "تعمل معظم المنشآت على أنظمةٍ لم تُربَط ببعضها قطّ: البيانات في موضع، ومسار العمل في آخر، والضوابط في ثالث. ويتشظّى العمل في المسافات الفاصلة بينها.",
      challengeEm:
        "تُغلق B&P Digital تلك المسافات، فتربط البيانات بمسارات العمل التي تنتجها وبالضوابط التي تحكمها داخل طبقةٍ تشغيليةٍ واحدة.",
      challengePost: "",
      serviceLines: [
        {
          name: "أتمتة العمليات",
          description:
            "أتمتة العمليات الداخلية في الموارد البشرية والمبيعات والتسويق والعمليات، بتحويل المسارات الورقية والمتقطّعة إلى مسارات عملٍ رقميةٍ موثوقةٍ قابلةٍ للتدقيق تعمل على نطاقٍ مؤسسي.",
        },
        {
          name: "تكامل الأنظمة وطبقة البيانات",
          description:
            "تكامل الأنظمة المتفرّقة في طبقة بياناتٍ موحّدة، فتكفّ المنشآت عن مطابقة الشظايا وتبدأ العمل من مصدرٍ واحدٍ قابلٍ للاستعلام للحقيقة التشغيلية.",
        },
        {
          name: "وكلاء الذكاء الاصطناعي",
          description:
            "تطوير وكلاء ذكاءٍ اصطناعيٍّ ينفّذون العمليات الروتينية والمنسَّقة تحت إشرافٍ محدَّد، فتتحرّر القدرة المؤسسية للقرارات التي تتطلّب حُكم الإنسان.",
        },
        {
          name: "لوحات القيادة والتوأم الرقمي",
          description:
            "لوحاتٌ تشغيليةٌ تمنح القيادة رؤيةً مباشرةً وفي الوقت الفعلي، وتوأمٌ رقميٌّ تشغيليٌّ يجعل الصورة الحاضرة قابلةً للرؤية والقياس والتحسين المستمر.",
        },
      ],
      approachLabel: "كيف تعمل",
      approachPre:
        "لا تُضيف B&P Digital أداةً جديدةً فوق الفوضى، بل تُعيد هندسة طريقة العمل حتى يُنتج النظام أدلّته أثناء تشغيله.",
      approachEm:
        "ويغدو التوأم الرقمي التشغيلي السطحَ الذي يعمل عليه وكلاء الذكاء ولوحات القيادة على المنشآت في لحظتها الفعلية.",
      approachPost: "",
      capabilitiesLabel: "معايير الارتباط",
      capabilities: [
        {
          name: "مبنيٌّ لنطاقٍ مؤسسي",
          description:
            "تُهندَس التدفقات الرقمية لتعمل بموثوقيةٍ على نطاقٍ مؤسسي، لا نصوصاً برمجيةً تنهار تحت الحِمل، بل نسيجاً تشغيلياً يمكن للمنشآت الاعتماد عليه.",
        },
        {
          name: "الدليل من داخل العمل",
          description:
            "تتكوّن أدلّة الامتثال والتدقيق تلقائياً من داخل العمل ذاته، فيُرصد الامتثال أثناء التشغيل بدل إعادة بنائه بعده.",
        },
        {
          name: "ملكٌ للعميل",
          description:
            "تستقرّ الأنظمة وطبقة البيانات ولوحات القيادة داخل المنشآت بوصفها ملكاً تشغيلياً تمتلكه وتشغّله من الداخل بعد مغادرة الفريق.",
        },
      ],
      commitmentPre:
        "يُصمَّم كلّ نظامٍ تنشره B&P Digital ليُشغَّل بكوادر المنشآت بعد إغلاق الارتباط.",
      commitmentEm:
        "تصبح البيانات ملكاً تشغيلياً للمنشأة، وتبقى القدرة في موضعها، حاضرةً، قابلةً للتشغيل من الداخل.",
      commitmentPost: "",
      practicePosition: "البناء الرقمي · الطبقة الثانية",
      nextName: "B&P GRC",
      nextCursorText: "الحوكمة",
      sectorsLabel: "تخدم",
      focusLabel: "التركيز",
      methodologyLabel: "الارتباط",
    },
  },
  {
    slug: "grc",
    layerNum: 3,
    imgFolder: "services/governance-compliance-imgs",
    imgPrefix: "GC",
    cardImg: "/img/bnp-custom/home/GC.webp",
    commitmentAuthorImg: "/img/bnp-custom/team/ceo.webp",
    nextSlug: "pmo",
    en: {
      name: "B&P GRC",
      discipline: "Governance, Cybersecurity & Data Protection",
      title:
        "B&P GRC | Governance, Cybersecurity & Data Protection | Bisher & Partners",
      layerLabel: "Third Layer · Governance & Compliance",
      ownsLabel:
        "Owns the Third Layer, with technical support from B&P Digital",
      commitmentAuthorName: "Mr. Sami Al-Zubair",
      commitmentAuthorRole: "Chief Executive Officer",
      heroSubtitlePre:
        "Embedding governance, security, and compliance inside the structure of the systems themselves, ",
      heroSubtitleEm:
        "defensible before auditors and regulators from the very first line",
      heroSubtitlePost: ".",
      tags1: ["PDPL", "NCA", "Cybersecurity"],
      tags2: ["Audit Readiness", "Risk & Controls", "Data Protection"],
      opportunityLabel: "The Layer",
      opportunityPre:
        "B&P GRC embeds governance, security, and compliance inside the structure of the systems themselves. Every system the platform delivers gains observability during operation, defensibility before auditors and regulators, and complete alignment with the Kingdom's statutory and regulatory frameworks from its first line.",
      opportunityEm:
        "Governance, compliance, and security are woven into the backbone of the system, working from within as a founding component.",
      opportunityPost: "",
      practiceName: "B&P GRC",
      sectorsValue:
        "Regulated businesses, banks and insurers, government bodies, non-profits, and any institution preparing for audit, licensing, or accreditation",
      focusValue:
        "Governance frameworks, regulatory compliance, cybersecurity, data protection, and audit readiness",
      methodologyValue: "Entry, Build, Capital empowerment",
      challengePre:
        "A regulatory landscape that updates at accelerating speed leaves bolted-on compliance perpetually behind. What is repaired after the build is costly, fragile, and hard to defend.",
      challengeEm:
        "B&P GRC designs compliance in from the first line, so the sound system produces its own integrity, observed in operation and proven by evidence.",
      challengePost: "",
      serviceLines: [
        {
          name: "Governance & Risk Frameworks",
          description:
            "Institutional governance and risk-management frameworks, compliance policies and procedures, and registers of risks and controls that institutions can operate, not merely file.",
        },
        {
          name: "Regulatory Compliance & Data Protection",
          description:
            "Regulatory compliance, data protection, privacy, and cybersecurity aligned to the Kingdom's frameworks, PDPL, NCA, SAMA, and CMA, designed into the system rather than appended to it.",
        },
        {
          name: "Audit Readiness & Control Rooms",
          description:
            "Due diligence and audit readiness, regulatory control rooms, and automated oversight of deviations, so audit evidence forms automatically from within the work itself.",
        },
        {
          name: "Evidence Packages & Third-Party Risk",
          description:
            "Evidence packages prepared for regulators and boards, and the management of third-party risk, sustaining a defensible posture as frameworks evolve.",
        },
      ],
      approachLabel: "How It Works",
      approachPre:
        "Compliance enters as a founding material in the structure of every system, every workflow, and every institutional decision.",
      approachEm:
        "Audit readiness becomes a permanent property of the system, present in every moment of the work.",
      approachPost: "",
      capabilitiesLabel: "Engagement Standards",
      capabilities: [
        {
          name: "Compliance by Design",
          description:
            "Controls and policies are designed into the system from its first line, sparing institutions the cost of later repair and keeping the present aligned with the requirements of the future.",
        },
        {
          name: "Observed in Operation",
          description:
            "Compliance is monitored during operation, with audit evidence accumulating automatically by virtue of the design rather than assembled under deadline.",
        },
        {
          name: "Defensible to Regulators",
          description:
            "Every system carries defensibility before auditors and regulators, with evidence packages ready for boards and authorities at any moment.",
        },
      ],
      commitmentPre:
        "The governance frameworks and policies are delivered to institutions in their complete form, designed to be practiced by their own people.",
      commitmentEm:
        "The governance we design continues to protect institutions' sovereignty long after the engagement closes.",
      commitmentPost: "",
      practicePosition: "Governance & Compliance · Third Layer",
      nextName: "B&P PMO",
      nextCursorText: "Delivery",
      sectorsLabel: "Serves",
      focusLabel: "Focus",
      methodologyLabel: "Engagement",
    },
    ar: {
      name: "B&P GRC",
      discipline: "الحوكمة، الأمن السيبراني، وحماية البيانات",
      title: "B&P GRC | الحوكمة والأمن السيبراني وحماية البيانات | بشر وشركاؤه",
      layerLabel: "الطبقة الثالثة · الحوكمة والامتثال",
      ownsLabel: "تمتلك الطبقة الثالثة، بدعمٍ تقنيٍّ من B&P Digital",
      commitmentAuthorName: "السيد سامي الزبير",
      commitmentAuthorRole: "الرئيس التنفيذي",
      heroSubtitlePre: "دمج الحوكمة والأمن والامتثال داخل بنية الأنظمة ذاتها، ",
      heroSubtitleEm:
        "قابلةً للدفاع أمام المدقّقين والجهات التنظيمية منذ سطرها الأول",
      heroSubtitlePost: ".",
      tags1: ["حماية البيانات", "الأمن السيبراني", "الضوابط"],
      tags2: ["الجاهزية للتدقيق", "المخاطر", "الحوكمة"],
      opportunityLabel: "الطبقة",
      opportunityPre:
        "تدمج B&P GRC الحوكمة والأمن والامتثال داخل بنية الأنظمة ذاتها. يكتسب كلّ نظامٍ تُقدّمه المنصة قابليةَ الملاحظة أثناء التشغيل، وقابليةَ الدفاع أمام المدقّقين والجهات التنظيمية، وتوافقاً تاماً مع أطر المملكة النظامية والتنظيمية منذ سطره الأول.",
      opportunityEm:
        "تُنسج الحوكمة والامتثال والأمن في العمود الفقري للنظام، فتعمل من داخله بوصفها مكوّناً تأسيسياً.",
      opportunityPost: "",
      practiceName: "B&P GRC",
      sectorsValue:
        "الأعمال المنظَّمة، والبنوك وشركات التأمين، والجهات الحكومية، والمنظمات غير الربحية، وكلّ منشأةٍ تستعدّ للتدقيق أو الترخيص أو الاعتماد",
      focusValue:
        "أطر الحوكمة، والامتثال التنظيمي، والأمن السيبراني، وحماية البيانات، والجاهزية للتدقيق",
      methodologyValue: "الدخول، البناء، التمكين الرأسمالي",
      challengePre:
        "منظومةٌ تنظيميةٌ تتسارع في تحديث متطلباتها تترك الامتثالَ المُضاف لاحقاً متأخّراً على الدوام. وما يُصلَح بعد البناء مكلفٌ، هشٌّ، وصعب الدفاع عنه.",
      challengeEm:
        "تُصمّم B&P GRC الامتثال منذ السطر الأول، فتُنتج المنظومة السليمة نزاهتها بنفسها، تُلاحَظ في التشغيل وتُثبَت بالأدلّة.",
      challengePost: "",
      serviceLines: [
        {
          name: "أطر الحوكمة والمخاطر",
          description:
            "أطر الحوكمة المؤسسية وإدارة المخاطر، وسياسات وإجراءات الامتثال، وسجلّات المخاطر والضوابط التي تُشغّلها المنشآت لا التي تحفظها في الأدراج فحسب.",
        },
        {
          name: "الامتثال التنظيمي وحماية البيانات",
          description:
            "الامتثال التنظيمي وحماية البيانات والخصوصية والأمن السيبراني، متوافقاً مع أطر المملكة، حماية البيانات والأمن السيبراني والبنك المركزي وهيئة السوق المالية، مصمَّماً داخل النظام لا مُضافاً إليه.",
        },
        {
          name: "الجاهزية للتدقيق وغرف التحكّم",
          description:
            "العناية الواجبة والجاهزية للتدقيق، وغرف التحكّم التنظيمية، والرقابة الآلية على الانحرافات، فتتكوّن أدلّة التدقيق تلقائياً من داخل العمل ذاته.",
        },
        {
          name: "حِزَم الأدلّة ومخاطر الأطراف الثالثة",
          description:
            "تجهيز حِزَم الأدلّة للجهات التنظيمية ومجالس الإدارة، وإدارة مخاطر الأطراف الثالثة، بما يحفظ وضعاً قابلاً للدفاع مع تطوّر الأُطُر.",
        },
      ],
      approachLabel: "كيف تعمل",
      approachPre:
        "يدخل الامتثال مادةً تأسيسيةً في بنية كل نظام، وكل مسار عمل، وكل قرارٍ مؤسسي.",
      approachEm:
        "وتغدو الجاهزية للتدقيق خاصيةً دائمةً في النظام، حاضرةً في كلّ لحظةٍ من لحظات العمل.",
      approachPost: "",
      capabilitiesLabel: "معايير الارتباط",
      capabilities: [
        {
          name: "امتثالٌ بحكم التصميم",
          description:
            "تُصمَّم الضوابط والسياسات داخل النظام منذ سطره الأول، فتُحفَظ المنشآت من كلفة الإصلاح اللاحق ويُضمَن انسجام الحاضر مع متطلبات المستقبل.",
        },
        {
          name: "مرصودٌ في التشغيل",
          description:
            "يُرصد الامتثال أثناء التشغيل، وتتراكم أدلّة التدقيق تلقائياً بحكم التصميم لا تجميعاً تحت ضغط المواعيد.",
        },
        {
          name: "قابلٌ للدفاع أمام الجهات التنظيمية",
          description:
            "يحمل كلّ نظامٍ قابليةَ الدفاع أمام المدقّقين والجهات التنظيمية، مع حِزَم أدلّةٍ جاهزةٍ للمجالس والجهات في كلّ لحظة.",
        },
      ],
      commitmentPre:
        "تُسلَّم أطر الحوكمة والسياسات إلى المنشآت بصورتها الكاملة، مصمَّمةً لتُمارَس بكوادرها الذاتية.",
      commitmentEm:
        "وتستمرّ الحوكمة التي نصمّمها في حماية سيادة المنشآت بعد إغلاق الارتباط بزمنٍ طويل.",
      commitmentPost: "",
      practicePosition: "الحوكمة والامتثال · الطبقة الثالثة",
      nextName: "B&P PMO",
      nextCursorText: "التنفيذ",
      sectorsLabel: "تخدم",
      focusLabel: "التركيز",
      methodologyLabel: "الارتباط",
    },
  },
  {
    slug: "pmo",
    layerNum: 4,
    imgFolder: "services/institutional-innovation-imgs",
    imgPrefix: "II",
    cardImg: "/img/bnp-custom/home/II.webp",
    commitmentAuthorImg: "/img/bnp-custom/team/cto.webp",
    nextSlug: "capital",
    en: {
      name: "B&P PMO",
      discipline: "Project Management & Transformation Delivery",
      title:
        "B&P PMO | Project Management & Transformation Delivery | Bisher & Partners",
      layerLabel: "Fourth Layer · Execution & Management",
      ownsLabel: "Owns the Fourth Layer",
      commitmentAuthorName: "Eng. Mohammed Bisher",
      commitmentAuthorRole: "Chief Technology Officer",
      heroSubtitlePre:
        "Turning strategy into execution that is visible, measured, and accountable ",
      heroSubtitleEm: "at the level of the board",
      heroSubtitlePost: ".",
      tags1: ["Transformation Office", "KPIs", "Delivery"],
      tags2: ["Change Management", "Portfolios", "Board Reporting"],
      opportunityLabel: "The Layer",
      opportunityPre:
        "B&P PMO turns strategy into execution that is visible, measured, and accountable at the level of the board. Transformation offices, the engineering of performance indicators, and change-management programs ensure that initiatives reach genuine completion.",
      opportunityEm:
        "It moves institutions from the language of intentions to the language of accomplishment, and from belated reports to a continuous executive view.",
      opportunityPost: "",
      practiceName: "B&P PMO",
      sectorsValue:
        "Government programs, large enterprises, and institutions running multi-initiative transformations",
      focusValue:
        "Transformation offices, portfolio and project management, KPI engineering, and change management",
      methodologyValue: "Entry, Build, Capital empowerment",
      challengePre:
        "Initiatives multiply, reports arrive late, and the distance between what leadership needs to see and what it can in fact see becomes the upper limit of institutions' speed.",
      challengeEm:
        "B&P PMO binds strategy, execution, risk, and budget into a single operational view, so follow-up becomes a continuous leadership picture.",
      challengePost: "",
      serviceLines: [
        {
          name: "Transformation & Project Offices",
          description:
            "Establishing transformation offices and project-management offices, and managing portfolios and projects at institutional scale.",
        },
        {
          name: "KPIs & Execution Tracking",
          description:
            "Designing performance indicators, managing initiatives, and tracking execution, so initiatives reach genuine, measurable completion rather than quiet abandonment.",
        },
        {
          name: "Change Management",
          description:
            "Change-management programs that strengthen institutional adoption and convert new systems from a directive into daily practice.",
        },
        {
          name: "Board Reporting & Command View",
          description:
            "Board reports and strategic command dashboards that bind strategy, execution, risk, and budget into one continuous executive view.",
        },
      ],
      approachLabel: "How It Works",
      approachPre:
        "Execution is bound to evidence, control, and decision from the moment of design, not measured after the quarter has already passed.",
      approachEm:
        "Leadership sees movement as it happens, in its actual moment.",
      approachPost: "",
      capabilitiesLabel: "Engagement Standards",
      capabilities: [
        {
          name: "Board-Level Accountability",
          description:
            "Execution is made visible, measured, and accountable at the level of the board, not buried in the distance between intention and report.",
        },
        {
          name: "Genuine Completion",
          description:
            "Initiatives are driven to real completion and converted into tangible operational results that can be measured and reviewed.",
        },
        {
          name: "One Operational View",
          description:
            "Strategy, execution, risk, and budget are bound into a single operational view, replacing a multiplicity of initiatives with a clarity of priorities.",
        },
      ],
      commitmentPre:
        "The command dashboards and delivery structures remain inside institutions as a long-term capacity after the team withdraws.",
      commitmentEm:
        "What recurs in the daily becomes a structure open to improvement, owned, measured, and operated by the client.",
      commitmentPost: "",
      practicePosition: "Execution & Management · Fourth Layer",
      nextName: "B&P Capital",
      nextCursorText: "Capital",
      sectorsLabel: "Serves",
      focusLabel: "Focus",
      methodologyLabel: "Engagement",
    },
    ar: {
      name: "B&P PMO",
      discipline: "إدارة المشاريع وتنفيذ التحوّل",
      title: "B&P PMO | إدارة المشاريع وتنفيذ التحوّل | بشر وشركاؤه",
      layerLabel: "الطبقة الرابعة · التنفيذ والإدارة",
      ownsLabel: "تمتلك الطبقة الرابعة",
      commitmentAuthorName: "المهندس محمد بشر",
      commitmentAuthorRole: "الرئيس التنفيذي للتقنية",
      heroSubtitlePre:
        "تحويل الاستراتيجية إلى تنفيذٍ مرئيٍّ ومُقاسٍ وقابلٍ للمساءلة ",
      heroSubtitleEm: "على مستوى مجلس الإدارة",
      heroSubtitlePost: ".",
      tags1: ["مكتب التحوّل", "مؤشرات الأداء", "التنفيذ"],
      tags2: ["إدارة التغيير", "المحافظ", "تقارير المجلس"],
      opportunityLabel: "الطبقة",
      opportunityPre:
        "تحوّل B&P PMO الاستراتيجية إلى تنفيذٍ مرئيٍّ، مُقاسٍ، وقابلٍ للمساءلة على مستوى مجلس الإدارة. تُصمَّم مكاتب التحوّل، وهندسة مؤشرات الأداء، وبرامج إدارة التغيير، لضمان وصول المبادرات إلى الاكتمال الفعلي.",
      opportunityEm:
        "تنقل المنشآت من لغة النوايا إلى لغة الإنجاز، ومن التقارير المتأخّرة إلى رؤيةٍ تنفيذيةٍ مستمرّة.",
      opportunityPost: "",
      practiceName: "B&P PMO",
      sectorsValue:
        "البرامج الحكومية، والمنشآت الكبرى، والمنشآت التي تُدير تحوّلاتٍ متعدّدة المبادرات",
      focusValue:
        "مكاتب التحوّل، وإدارة المحافظ والمشاريع، وهندسة مؤشرات الأداء، وإدارة التغيير",
      methodologyValue: "الدخول، البناء، التمكين الرأسمالي",
      challengePre:
        "تتكاثر المبادرات، وتصل التقارير متأخّرة، فتصير المسافة بين ما تحتاج القيادة إلى رؤيته وما تستطيع رؤيته فعلاً هي الحدّ الأعلى لسرعة المنشآت.",
      challengeEm:
        "تربط B&P PMO الاستراتيجية والتنفيذ والمخاطر والميزانية في رؤيةٍ تشغيليةٍ واحدة، فتغدو المتابعة صورةً قياديةً مستمرّة.",
      challengePost: "",
      serviceLines: [
        {
          name: "مكاتب التحوّل والمشاريع",
          description:
            "تأسيس مكاتب التحوّل ومكاتب إدارة المشاريع، وإدارة المحافظ والمشاريع على نطاقٍ مؤسسي.",
        },
        {
          name: "مؤشرات الأداء وتتبّع التنفيذ",
          description:
            "تصميم مؤشرات الأداء، وإدارة المبادرات، وتتبّع التنفيذ، فتبلغ المبادرات اكتمالاً فعلياً قابلاً للقياس لا تخلّياً صامتاً.",
        },
        {
          name: "إدارة التغيير",
          description:
            "برامج إدارة التغيير التي تعزّز التبنّي المؤسسي وتحوّل الأنظمة الجديدة من توجيهٍ إلى ممارسةٍ يومية.",
        },
        {
          name: "تقارير المجلس ورؤية القيادة",
          description:
            "تقارير مجالس الإدارة ولوحات القيادة الاستراتيجية التي تربط الاستراتيجية والتنفيذ والمخاطر والميزانية في رؤيةٍ تنفيذيةٍ واحدةٍ مستمرّة.",
        },
      ],
      approachLabel: "كيف تعمل",
      approachPre:
        "يرتبط التنفيذ بالدليل والضبط والقرار منذ لحظة التصميم، لا يُقاس بعد أن يكون الربع قد انقضى.",
      approachEm:
        "وتغدو القيادة قادرةً على رؤية الحركة وهي تحدث، في لحظتها الفعلية.",
      approachPost: "",
      capabilitiesLabel: "معايير الارتباط",
      capabilities: [
        {
          name: "مساءلةٌ على مستوى المجلس",
          description:
            "يُصبح التنفيذ مرئياً ومُقاساً وقابلاً للمساءلة على مستوى مجلس الإدارة، لا مدفوناً في المسافة بين النيّة والتقرير.",
        },
        {
          name: "اكتمالٌ فعلي",
          description:
            "تُساق المبادرات إلى اكتمالٍ حقيقي وتُحوَّل إلى نتائج تشغيليةٍ ملموسةٍ قابلةٍ للقياس والمراجعة.",
        },
        {
          name: "رؤيةٌ تشغيليةٌ واحدة",
          description:
            "تُربَط الاستراتيجية والتنفيذ والمخاطر والميزانية في رؤيةٍ تشغيليةٍ واحدة، فتحلّ وضوحُ الأولويات محلَّ تعدّد المبادرات.",
        },
      ],
      commitmentPre:
        "تبقى لوحات القيادة وهياكل التنفيذ داخل المنشآت بوصفها قدرةً طويلة الأجل بعد انسحاب الفريق.",
      commitmentEm:
        "ويغدو ما يتكرّر في اليومي بنيةً قابلةً للتحسين، يمتلكها العميل، ويقيسها، ويشغّلها.",
      commitmentPost: "",
      practicePosition: "التنفيذ والإدارة · الطبقة الرابعة",
      nextName: "B&P Capital",
      nextCursorText: "رأس المال",
      sectorsLabel: "تخدم",
      focusLabel: "التركيز",
      methodologyLabel: "الارتباط",
    },
  },
  {
    slug: "capital",
    layerNum: 5,
    imgFolder: "services/venture-building-imgs",
    imgPrefix: "VB",
    cardImg: "/img/bnp-custom/home/VB.webp",
    commitmentAuthorImg: "/img/bnp-custom/team/ceo.webp",
    nextSlug: "horizon",
    en: {
      name: "B&P Capital",
      discipline: "Access to Capital, Restructuring & M&A",
      title:
        "B&P Capital | Access to Capital, Restructuring & M&A | Bisher & Partners",
      layerLabel: "Fifth Layer · Funding & Growth",
      ownsLabel: "Owns the Fifth Layer",
      commitmentAuthorName: "Mr. Sami Al-Zubair",
      commitmentAuthorRole: "Chief Executive Officer",
      heroSubtitlePre:
        "Turning institutional readiness into committed capital, ",
      heroSubtitleEm: "capital is drawn to what can be examined",
      heroSubtitlePost: ".",
      tags1: ["Funding Readiness", "Valuations", "M&A"],
      tags2: ["Data Rooms", "Deal Structuring", "Due Diligence"],
      opportunityLabel: "The Layer",
      opportunityPre:
        "B&P Capital turns institutional readiness into committed capital. Investment documents, financial models, valuations, data rooms, deal structuring, and connection with investors and financiers are built from within the very platform that prepared institutions to receive capital.",
      opportunityEm:
        "Capital is drawn to what can be examined: the evidence, the discipline, the transparency, and the financial story that can be verified.",
      opportunityPost: "",
      practiceName: "B&P Capital",
      sectorsValue:
        "SMEs and startups, family companies, non-profits, and institutions preparing for funding, restructuring, or M&A",
      focusValue:
        "Funding readiness, financial models and valuations, deal structuring, and mergers and acquisitions",
      methodologyValue: "Entry, Build, Capital empowerment",
      challengePre:
        "Institutions reach the funding round carrying a story they cannot fully evidence, and capital hesitates before what it cannot examine.",
      challengeEm:
        "B&P Capital builds the road to funding from the first diagnosis, so institutions arrive carried by their evidence, their systems, and their discipline.",
      challengePost: "",
      serviceLines: [
        {
          name: "Funding Readiness & Data Rooms",
          description:
            "Funding readiness and the preparation of investor files and data rooms built to investor standards, supported by the operational, financial, and regulatory evidence required.",
        },
        {
          name: "Financial Models & Valuations",
          description:
            "Development of financial models and valuations that present a disciplined financial story capable of verification.",
        },
        {
          name: "Restructuring & M&A",
          description:
            "Institutional restructuring, the restructuring of capital, and mergers and acquisitions, supported by financial, commercial, and technical due diligence.",
        },
        {
          name: "Investor Connection & Closing",
          description:
            "Connection with investors and financiers, deal structuring, negotiation support, and support for financial closing and access to funding.",
        },
      ],
      approachLabel: "How It Works",
      approachPre:
        "The road to capital is engineered across every layer of the work, so funding readiness is a fruit of operational discipline rather than a last-minute exercise.",
      approachEm:
        "When institutions reach the stage of funding, they arrive with a clear, examinable investment story.",
      approachPost: "",
      capabilitiesLabel: "Engagement Standards",
      capabilities: [
        {
          name: "Examinable by Design",
          description:
            "Institutions are prepared to be examined: evidence, discipline, transparency, and a verifiable financial story assembled from the operational layer itself.",
        },
        {
          name: "Aligned With the Outcome",
          description:
            "Where the work involves funding or structured capital outcomes, the model can be founded on success, with incentives aligned to realized, measurable value.",
        },
        {
          name: "Built From the Platform",
          description:
            "Investment documents and data rooms are built from within the very platform that prepared institutions, not assembled by an outside party after the fact.",
        },
      ],
      commitmentPre:
        "The capital we structure continues to fund institutions' growth after the deal closes.",
      commitmentEm:
        "The position of capital supremacy remains the client's, and the ambition remains theirs.",
      commitmentPost: "",
      practicePosition: "Funding & Growth · Fifth Layer",
      nextName: "B&P Horizon",
      nextCursorText: "Ventures",
      sectorsLabel: "Serves",
      focusLabel: "Focus",
      methodologyLabel: "Engagement",
    },
    ar: {
      name: "B&P Capital",
      discipline: "الوصول إلى رأس المال، إعادة الهيكلة، والاندماج والاستحواذ",
      title:
        "B&P Capital | الوصول إلى رأس المال وإعادة الهيكلة والاستحواذ | بشر وشركاؤه",
      layerLabel: "الطبقة الخامسة · التمويل والنمو",
      ownsLabel: "تمتلك الطبقة الخامسة",
      commitmentAuthorName: "السيد سامي الزبير",
      commitmentAuthorRole: "الرئيس التنفيذي",
      heroSubtitlePre: "تحويل الجاهزية المؤسسية إلى رأس مالٍ مُلتَزَم، ",
      heroSubtitleEm: "ينجذب رأس المال إلى ما هو قابلٌ للفحص",
      heroSubtitlePost: ".",
      tags1: ["الجاهزية للتمويل", "التقييمات", "الاندماج والاستحواذ"],
      tags2: ["غرف البيانات", "هيكلة الصفقات", "العناية الواجبة"],
      opportunityLabel: "الطبقة",
      opportunityPre:
        "تحوّل B&P Capital الجاهزية المؤسسية إلى رأس مالٍ مُلتَزَم. تُبنى الوثائق الاستثمارية والنماذج المالية والتقييمات وغرف البيانات وهيكلة الصفقات والربط مع المستثمرين والممولين، من داخل المنصة ذاتها التي جهّزت المنشآت لاستقبال رأس المال.",
      opportunityEm:
        "ينجذب رأس المال إلى ما هو قابلٌ للفحص: الدليل، والانضباط، والشفافية، والقصة المالية القابلة للتحقّق.",
      opportunityPost: "",
      practiceName: "B&P Capital",
      sectorsValue:
        "الشركات الصغيرة والمتوسطة والمشاريع الناشئة، والشركات العائلية، والمنظمات غير الربحية، والمنشآت المستعدّة للتمويل أو إعادة الهيكلة أو الاندماج والاستحواذ",
      focusValue:
        "الجاهزية للتمويل، والنماذج المالية والتقييمات، وهيكلة الصفقات، وعمليات الاندماج والاستحواذ",
      methodologyValue: "الدخول، البناء، التمكين الرأسمالي",
      challengePre:
        "تبلغ المنشآت جولتها التمويلية حاملةً قصةً لا تستطيع إثباتها بالكامل، فيتردّد رأس المال أمام ما لا يستطيع فحصه.",
      challengeEm:
        "تبني B&P Capital الطريق إلى التمويل منذ التشخيص الأول، فتصل المنشآت محمولةً بأدلّتها وأنظمتها وانضباطها.",
      challengePost: "",
      serviceLines: [
        {
          name: "الجاهزية للتمويل وغرف البيانات",
          description:
            "الجاهزية للتمويل وإعداد ملفات المستثمرين وغرف البيانات بمعايير المستثمرين، مدعومةً بالأدلّة التشغيلية والمالية والتنظيمية اللازمة.",
        },
        {
          name: "النماذج المالية والتقييمات",
          description:
            "تطوير النماذج المالية والتقييمات التي تعرض قصةً ماليةً منضبطةً قابلةً للتحقّق.",
        },
        {
          name: "إعادة الهيكلة والاندماج والاستحواذ",
          description:
            "إعادة الهيكلة المؤسسية وإعادة هيكلة رأس المال وعمليات الاندماج والاستحواذ، مدعومةً بالعناية الواجبة المالية والتجارية والتقنية.",
        },
        {
          name: "الربط بالمستثمرين والإغلاق",
          description:
            "الربط مع المستثمرين والممولين، وهيكلة الصفقات، ودعم التفاوض، ودعم الإغلاق المالي والوصول إلى التمويل.",
        },
      ],
      approachLabel: "كيف تعمل",
      approachPre:
        "يُبنى الطريق إلى رأس المال عبر كلّ طبقةٍ من طبقات العمل، فتغدو الجاهزية التمويلية ثمرةً للانضباط التشغيلي لا تمريناً في اللحظة الأخيرة.",
      approachEm:
        "وحين تبلغ المنشآت مرحلة التمويل، تصل بقصةٍ استثماريةٍ واضحةٍ قابلةٍ للفحص.",
      approachPost: "",
      capabilitiesLabel: "معايير الارتباط",
      capabilities: [
        {
          name: "قابلٌ للفحص بحكم التصميم",
          description:
            "تُهيَّأ المنشآت لأن تُفحَص: الدليل، والانضباط، والشفافية، وقصةٌ ماليةٌ قابلةٌ للتحقّق، مجموعةٌ من الطبقة التشغيلية ذاتها.",
        },
        {
          name: "متوافقٌ مع النتيجة",
          description:
            "حين يتضمّن العمل تمويلاً أو نتائج رأسماليةً منظَّمة، يمكن أن يقوم النموذج على النجاح، بحوافزَ متوافقةٍ مع القيمة المتحقّقة القابلة للقياس.",
        },
        {
          name: "مبنيٌّ من المنصة",
          description:
            "تُبنى الوثائق الاستثمارية وغرف البيانات من داخل المنصة ذاتها التي جهّزت المنشآت، لا تُجمَّع من طرفٍ خارجيٍّ بعد فوات الأوان.",
        },
      ],
      commitmentPre:
        "يستمرّ رأس المال الذي نهيكله في تمويل نموّ المنشآت بعد إغلاق الصفقة.",
      commitmentEm: "ويبقى موقع التفوّق الرأسمالي للعميل، ويبقى الطموح له.",
      commitmentPost: "",
      practicePosition: "التمويل والنمو · الطبقة الخامسة",
      nextName: "B&P Horizon",
      nextCursorText: "المشاريع",
      sectorsLabel: "تخدم",
      focusLabel: "التركيز",
      methodologyLabel: "الارتباط",
    },
  },
  {
    slug: "horizon",
    layerNum: 6,
    imgFolder: "services/venture-building-imgs",
    imgPrefix: "VB",
    cardImg: "/img/bnp-custom/home/story.webp",
    commitmentAuthorImg: "/img/bnp-custom/team/ci.webp",
    nextSlug: "digital",
    en: {
      name: "B&P Horizon",
      discipline: "The Venture Studio & Sovereign Technology",
      title:
        "B&P Horizon | The Venture Studio & Sovereign Technology | Bisher & Partners",
      layerLabel: "Sixth Layer · Venture Building",
      ownsLabel: "Owns the Sixth Layer, integrated with B&P Capital",
      commitmentAuthorName: "Eng. Faris Bisher",
      commitmentAuthorRole: "Chief Innovation Officer",
      heroSubtitlePre: "Building new companies, a co-founding engine for ",
      heroSubtitleEm:
        "sovereign technology, deep technologies, and academic intellectual property",
      heroSubtitlePost: ".",
      tags1: ["Venture Studio", "Sovereign Tech", "Deep Tech"],
      tags2: ["IP Commercialization", "Spin-Outs", "Co-Founding"],
      opportunityLabel: "The Layer",
      opportunityPre:
        "B&P Horizon builds new companies. It operates as a co-founding engine for ventures in sovereign technology, deep technologies, and academic intellectual property, designed from inception with a clear path toward institutional capital, a structure capable of growth, and intellectual property that can be turned into economic value.",
      opportunityEm:
        "The arm operates as a laboratory for founding companies capable of life and continuity, built on clarity of product, strength of team, discipline of capital, and solidity of structure.",
      opportunityPost: "",
      practiceName: "B&P Horizon",
      sectorsValue:
        "Universities and research institutions, founders in deep technology, and sovereign-technology ventures",
      focusValue:
        "Venture building, IP commercialization, sovereign-technology products, and investment readiness",
      methodologyValue: "Entry, Build, Capital empowerment",
      challengePre:
        "Sovereign capability cannot be rented. Knowledge held inside universities, and ambition held inside founders, rarely finds a structured path to a company capable of growth.",
      challengeEm:
        "B&P Horizon converts intellectual property and founder ambition into ventures designed, from their first day, for institutional capital.",
      challengePost: "",
      serviceLines: [
        {
          name: "Startup Building",
          description:
            "Building startups, designing minimum products, and forming teams, companies built on clarity of product, strength of team, and solidity of structure.",
        },
        {
          name: "IP Commercialization",
          description:
            "Commercializing intellectual property through the student venture studio in universities, turning preserved research into investable ventures.",
        },
        {
          name: "Sovereign & Deep Technology",
          description:
            "Developing sovereign-technology products and building ventures in regulatory technology, financial technology, and deep technologies.",
        },
        {
          name: "Investment Readiness",
          description:
            "Integrating investment readiness directly with the paths of B&P Capital, so ventures are built toward institutional capital from inception.",
        },
      ],
      approachLabel: "How It Works",
      approachPre:
        "Ventures are designed from inception with a clear path toward institutional capital and a structure capable of growth.",
      approachEm:
        "Knowledge becomes an asset, and intellectual property becomes a venture capable of growth.",
      approachPost: "",
      capabilitiesLabel: "Engagement Standards",
      capabilities: [
        {
          name: "Co-Founding Engine",
          description:
            "Horizon enters as a partner in turning the idea into a company, through ownership, founders' shares, or the venture-building arrangements appropriate to the stage of the venture.",
        },
        {
          name: "Built for Capital",
          description:
            "Ventures are structured from inception toward institutional capital, integrated directly with the paths of B&P Capital.",
        },
        {
          name: "Sovereign by Mandate",
          description:
            "The arm builds the coming generation of sovereign-technology companies in the Kingdom, turning technical ambition into a sovereign economic asset.",
        },
      ],
      commitmentPre:
        "Horizon founds companies designed for life and continuity, connected to the capital that funds their growth.",
      commitmentEm:
        "Innovation turns from an inspiring idea into a venture capable of life, and latent intellectual property into a company capable of growth.",
      commitmentPost: "",
      practicePosition: "Venture Building · Sixth Layer",
      nextName: "B&P Digital",
      nextCursorText: "Digital",
      sectorsLabel: "Serves",
      focusLabel: "Focus",
      methodologyLabel: "Engagement",
    },
    ar: {
      name: "B&P Horizon",
      discipline: "استوديو المشاريع والتقنية السيادية",
      title: "B&P Horizon | استوديو المشاريع والتقنية السيادية | بشر وشركاؤه",
      layerLabel: "الطبقة السادسة · بناء المشاريع",
      ownsLabel: "تمتلك الطبقة السادسة، بالتكامل مع B&P Capital",
      commitmentAuthorName: "المهندس فارس بشر",
      commitmentAuthorRole: "الرئيس التنفيذي للابتكار",
      heroSubtitlePre: "بناء شركاتٍ جديدة، محرّكُ تأسيسٍ مشتركٍ في ",
      heroSubtitleEm:
        "التقنية السيادية، والتقنيات العميقة، والملكية الفكرية الأكاديمية",
      heroSubtitlePost: ".",
      tags1: ["استوديو المشاريع", "التقنية السيادية", "التقنيات العميقة"],
      tags2: ["تسويق الملكية الفكرية", "المشاريع المنبثقة", "التأسيس المشترك"],
      opportunityLabel: "الطبقة",
      opportunityPre:
        "تبني B&P Horizon شركاتٍ جديدة. تعمل بوصفها محرّكَ تأسيسٍ مشتركٍ للمشاريع في التقنية السيادية والتقنيات العميقة والملكية الفكرية الأكاديمية، تُصمَّم منذ نشأتها بمسارٍ واضحٍ نحو رأس المال المؤسسي، وبنيةٍ قادرةٍ على النمو، وملكيةٍ فكريةٍ قابلةٍ للتحويل إلى قيمةٍ اقتصادية.",
      opportunityEm:
        "يعمل الذراع بوصفه معملاً لتأسيس شركاتٍ قابلةٍ للحياة والاستمرار، مبنيةٍ على وضوح المنتج، وقوة الفريق، وانضباط رأس المال، وصلابة البنية.",
      opportunityPost: "",
      practiceName: "B&P Horizon",
      sectorsValue:
        "الجامعات والمنشآت البحثية، والمؤسسون في التقنيات العميقة، ومشاريع التقنية السيادية",
      focusValue:
        "بناء المشاريع، وتسويق الملكية الفكرية، ومنتجات التقنية السيادية، والجاهزية الاستثمارية",
      methodologyValue: "الدخول، البناء، التمكين الرأسمالي",
      challengePre:
        "القدرة السيادية لا تُستأجَر. والمعرفة المحبوسة داخل الجامعات، والطموح المحبوس داخل المؤسسين، نادراً ما يجدان مساراً منظَّماً إلى شركةٍ قادرةٍ على النمو.",
      challengeEm:
        "تحوّل B&P Horizon الملكية الفكرية وطموح المؤسسين إلى مشاريع مُصمَّمةٍ، منذ يومها الأول، لرأس المال المؤسسي.",
      challengePost: "",
      serviceLines: [
        {
          name: "بناء الشركات الناشئة",
          description:
            "بناء الشركات الناشئة، وتصميم المنتجات الأولية، وتكوين الفرق، شركاتٌ مبنيةٌ على وضوح المنتج، وقوة الفريق، وصلابة البنية.",
        },
        {
          name: "تسويق الملكية الفكرية",
          description:
            "تسويق الملكية الفكرية من خلال استوديو مشاريع الطلاب في الجامعات، فيتحوّل البحث المحفوظ إلى مشاريع قابلةٍ للاستثمار.",
        },
        {
          name: "التقنية السيادية والعميقة",
          description:
            "تطوير منتجات التقنية السيادية، وبناء مشاريع في التقنية التنظيمية، والتقنية المالية، والتقنيات العميقة.",
        },
        {
          name: "الجاهزية الاستثمارية",
          description:
            "دمج الجاهزية الاستثمارية مباشرةً مع مسارات B&P Capital، فتُبنى المشاريع نحو رأس المال المؤسسي منذ نشأتها.",
        },
      ],
      approachLabel: "كيف تعمل",
      approachPre:
        "تُصمَّم المشاريع منذ نشأتها بمسارٍ واضحٍ نحو رأس المال المؤسسي وبنيةٍ قادرةٍ على النمو.",
      approachEm:
        "فتتحوّل المعرفة إلى أصل، وتتحوّل الملكية الفكرية إلى مشروعٍ قابلٍ للنمو.",
      approachPost: "",
      capabilitiesLabel: "معايير الارتباط",
      capabilities: [
        {
          name: "محرّك تأسيسٍ مشترك",
          description:
            "تدخل Horizon شريكاً في تحويل الفكرة إلى شركة، عبر الملكية، أو حصص المؤسسين، أو ترتيبات بناء المشاريع المناسبة لمرحلة المشروع.",
        },
        {
          name: "مبنيٌّ لرأس المال",
          description:
            "تُهيكَل المشاريع منذ نشأتها نحو رأس المال المؤسسي، متكاملةً مباشرةً مع مسارات B&P Capital.",
        },
        {
          name: "سياديٌّ بحكم التفويض",
          description:
            "يبني الذراع الجيل القادم من شركات التقنية السيادية في المملكة، فيحوّل الطموح التقني إلى أصلٍ اقتصاديٍّ سيادي.",
        },
      ],
      commitmentPre:
        "تؤسّس Horizon شركاتٍ مصمَّمةً للحياة والاستمرار، موصولةً برأس المال الذي يموّل نموّها.",
      commitmentEm:
        "فيتحوّل الابتكار من فكرةٍ ملهمةٍ إلى مشروعٍ قابلٍ للحياة، ومن ملكيةٍ فكريةٍ كامنةٍ إلى شركةٍ قادرةٍ على النمو.",
      commitmentPost: "",
      practicePosition: "بناء المشاريع · الطبقة السادسة",
      nextName: "B&P Digital",
      nextCursorText: "الرقمي",
      sectorsLabel: "تخدم",
      focusLabel: "التركيز",
      methodologyLabel: "الارتباط",
    },
  },
];

function flatten(entry, locale) {
  const localized = entry[locale] || entry.en;
  const { en, ar, ...structural } = entry;
  return { ...structural, ...localized };
}

export function getArms(locale = "en") {
  return armsData.map((a) => flatten(a, locale));
}

export function getArm(slug, locale = "en") {
  const entry = armsData.find((a) => a.slug === slug);
  return entry ? flatten(entry, locale) : null;
}

const arms = getArms("en");
export default arms;
