// Master translation map for Bisher & Partners website.
// English (en) is the canonical source; Arabic (ar) is a formal/literary
// (Modern Standard Arabic, fusha) translation calibrated for boardroom register.
//
// Keys are addressed by dot-path via `t('home.hero.h1Pre')`.

const translations = {
  en: {
    // ---------------------------------------------------------------------------
    // BRAND / COMMON
    // ---------------------------------------------------------------------------
    brand: {
      name: "Bisher & Partners",
      altName: "Bisher and Partners",
      shortA: "Bisher",
      shortB: "& Partners",
      credit: "B&P Team",
      logoAlt: "Bisher and Partners",
    },
    common: {
      home: "Home",
      company: "Company",
      practices: "Solutions",
      blog: "Blog",
      contact: "Contact",
      faq: "FAQ",
      privacyPolicy: "Privacy Policy",
      termsOfUse: "Terms of Use",
      bookMeeting: "Book a Meeting",
      backToTop: "Back to Top",
      scrollToExplore: "Scroll to explore",
      readPost: "Read Post",
      moreEnquiries: "Discuss the file",
      startConversation: "Contact Us",
      explorePractice: "Explore Arm",
      allInsights: "All Insights",
      newsOverview: "News Overview",
      ourStory: "Our Story",
      ourTeam: "Our Team",
      ourPractices: "Our Solutions",
      ourApproach: "Our Approach",
      contactUs: "Contact Us",
      letsChat: "Let's chat",
      languageEN: "EN",
      languageAR: "العربية",
      switchToArabic: "Switch to Arabic",
      switchToEnglish: "Switch to English",
      lightDarkMode: "light/dark mode",
      universalCta: "Begin an Engagement",
      copyrightAll: "All rights reserved",
      recaptchaNotice: "Protected by reCAPTCHA",
      recaptchaPolicy: "Privacy Policy",
      recaptchaTerms: "Terms of Service",
      recaptchaApply: "apply.",
      and: "and",
      madeWithBy: "Made with",
      builtBy: "Built by",
      copyright: "Copyright",
      menuTagline:
        "Digital Transformation and GRC<br>Solutions for Saudi Institutions",
      address: {
        line: "Riyadh, Kingdom of Saudi Arabia",
        html: "Riyadh,<br>Kingdom of Saudi Arabia",
        city: "Riyadh",
      },
      menuNumbers: ["/ 01", "/ 02", "/ 03", "/ 04", "/ 05"],
      footerDiscover: "/ Discover",
      footerContact: "/ Contact",
      footerInfo: "/ Info",
      footerFollow: "/ Follow Us",
      allPractices: "All Solutions",
      next: "Next",
      nextPractice: "Next Arm",
      practiceWord: "",
      breadcrumbHome: "Home",
      // Social labels in the same order as site.socials. Index by position.
      socials: ["LinkedIn", "X (Twitter)", "YouTube", "Threads", "Instagram"],
    },

    // ---------------------------------------------------------------------------
    // HOMEPAGE
    // ---------------------------------------------------------------------------
    home: {
      meta: {
        title:
          "Bisher & Partners | Digital Transformation & Governance Solutions",
        description:
          "A Saudi firm headquartered in Riyadh, working with institutions across digital transformation, compliance governance, and the building of institutional ventures.",
        keywords:
          "Digital Transformation Saudi Arabia, Compliance Governance Saudi Arabia, Institutional Ventures Saudi Arabia, Enterprise Software Development Riyadh, Process Intelligence Saudi Arabia, Regulatory Compliance Saudi Arabia, Personal Data Protection Law, Essential Cybersecurity Controls, SAMA framework, Capital Market Authority, Institutional Readiness, Institutional Advisory, Value Chain Orchestration, Investment Technical Diligence, Intellectual Property Commercialization, Investment Readiness, Bisher and Partners, Riyadh",
      },
      hero: {
        pill: "Bisher & Partners",
        h1Line1: "Digital Transformation",
        h1And: "&",
        h1Governance: "GRC Solutions",
        h1For: "for",
        h1ForWhom: "Saudi Institutions",
      },
      manifest: {
        sectionNumber: "A/01",
        cursor: "About us",
        lead: "Bisher & Partners is an integrated institutional platform. We accompany institutions from the moment of diagnosis",
        em: "to a result ready to operate, to be funded, and to grow.",
      },
      stats: [
        { value: "1", caption: "One platform, one journey" },
        { value: "5", caption: "Disciplines under one roof" },
        { value: "6", caption: "Saudi frameworks, by design" },
        { value: "40+", caption: "Years of combined leadership" },
      ],
      cards: {
        digital: {
          name: "B&P Digital",
          tags: ["Automation", "AI Agents", "Dashboards"],
          textPre: "Digital operations and AI automation that build",
          textEm: "the operational fabric of institutions.",
        },
        grc: {
          name: "B&P GRC",
          tags: ["PDPL", "Cybersecurity", "Audit"],
          textPre: "Governance, cybersecurity, and data protection woven into",
          textEm: "the backbone of every system.",
        },
        pmo: {
          name: "B&P PMO",
          tags: ["Delivery", "KPIs", "Change"],
          textPre: "Project management and transformation delivery that turn",
          textEm: "strategy into measured, board-level execution.",
        },
        capital: {
          name: "B&P Capital",
          tags: ["Funding", "Valuations", "M&A"],
          textPre: "Access to capital, restructuring, and mergers that turn",
          textEm: "readiness into committed capital.",
        },
        horizon: {
          name: "B&P Horizon",
          tags: ["Venture Studio", "Sovereign Tech", "IP"],
          textPre: "Founding new companies in deep and sovereign technology,",
          textEm: "built for institutional capital from day one.",
        },
      },
      methodology: {
        sectionNumber: "O/02",
        cursor: "The Ontology",
        title1: "Our Institutional",
        title2: "Ontology",
        steps: [
          {
            num: "01",
            name: "The Diagnosis",
            descrPre:
              "Institutions stall when their data, operations, risks, and decisions live as separate worlds,",
            descrEm:
              "bound only by email, meetings, and individual improvisation.",
            meta1: ["Data", "Operations"],
            meta2: ["Email", "Improvisation"],
          },
          {
            num: "02",
            name: "The Map",
            descrPre:
              "We model institutions as one connected operational layer, the Institutional Ontology:",
            descrEm:
              "a living, unified, queryable map of their entities and relationships.",
            meta1: ["Ontology", "Entities"],
            meta2: ["Living", "Queryable"],
          },
          {
            num: "03",
            name: "The Transformation",
            descrPre:
              "Institutions move from fragmentation to clarity, legible from within for the first time,",
            descrEm: "one body whose parts move with a single meaning.",
            meta1: ["Fragmentation", "Clarity"],
            meta2: ["One Body", "One Meaning"],
          },
          {
            num: "04",
            name: "The Operational Effect",
            descrPre:
              "Approvals carry their full context, compliance is watched as work runs,",
            descrEm:
              "and audit evidence and funding readiness accrue on their own.",
            meta1: ["Real-Time", "Context"],
            meta2: ["Evidence", "Readiness"],
          },
        ],
      },
      divider: {
        button: "Our Story",
        h2: "Founded to engineer value from the very places where value seemed exhausted",
      },
      clients: {
        h2: "Clients",
        subtitle: "From partners experience",
      },
      insights: {
        sectionNumber: "I/03",
        cursor: "More Posts",
        title1: "Recent",
        title2: "insights",
        button: "News Overview",
      },
    },

    // ---------------------------------------------------------------------------
    // ABOUT PAGE
    // ---------------------------------------------------------------------------
    about: {
      meta: {
        title:
          "About Bisher & Partners | Digital Transformation & Governance Solutions",
        description:
          "Bisher & Partners is a Saudi firm in Riyadh. Four solution areas converge in service of the institution: digital transformation, compliance governance, institutional innovation, and venture building.",
        keywords:
          "Bisher and Partners, Saudi firm Riyadh, Digital Transformation, Compliance Governance, Institutional Innovation, Venture Building, Enterprise Software Development, Process Intelligence, Regulatory Compliance, Institutional Readiness, Institutional Advisory, Value Chain Orchestration, Investment Technical Diligence, Intellectual Property Commercialization, Investment Readiness",
        schemaDescription:
          "Bisher & Partners is a Saudi firm headquartered in Riyadh, working with institutions across digital transformation, compliance governance, and the building of institutional ventures. Four solution areas integrate or stand alone: Digital Transformation, Governance and Compliance, Institutional Innovation, and Venture Building.",
      },
      hero: {
        pill: "Company",
        h1Where: "Where",
        h1DT: "ambition",
        h1And: "turns into",
        h1Governance: "working systems",
        h1Become: "and funded growth.",
        breadcrumb: "Company",
      },
      manifest: {
        cursor: "Our Areas",
        lead: "Bisher & Partners was founded to clear away everything that stands between institutions and the results they want to reach,",
        em: "until ambition itself is the only variable left to test.",
      },
      vmv: {
        vision: {
          title: "Vision",
          descr:
            "To be an institutional reference that ambitious leaderships rely on to build digital capability, governance, and capital, so their institutions stay sovereign over what they own, able to endure and grow amid an accelerating regulatory environment.",
          meta: "Where we are headed",
        },
        mission: {
          title: "Mission",
          descr:
            "We dedicate decades of specialization to turning scattered operations into one living, queryable system, through embedded teams, automation, and dashboards that make work visible in the moment, let evidence form as it runs, and ready institutions for capital.",
          meta: "What we do",
        },
        position: {
          title: "Measure",
          descr:
            "Success is the living system still in use after we leave, the funded venture, and the capacity that stays. The success of these is the success of their institutions, and their success is ours.",
          meta: "How we measure",
        },
      },
      leadership: {
        title1: "Our",
        title2: "leadership",
        button: "B&P's Leaders",
        captionPre: "Leaders chosen for the weight of the decisions they make,",
        captionEm: "not for the titles they hold.",
        members: [
          { name: "Dr. Bisher Abdulilah", role: "Chairman" },
          { name: "Mr. Sami Al-Zubair", role: "Chief Executive Officer" },
          { name: "Eng. Mohammed Bisher", role: "Chief Technology Officer" },
          { name: "Eng. Faris Bisher", role: "Chief Innovation Officer" },
        ],
      },
      positioning: {
        subtitle: "/ The Standard",
        firmSubtitle: "/ The Firm",
        leadPre:
          "We hold our work to the standard of the world's most advanced institutions, in architecture, discipline, and the capacity to execute,",
        leadEm:
          "then we bias every system toward the Kingdom's language, regulation, and ambition.",
      },
      stats: [
        { value: "0", caption: "Islands between data and decision" },
        { value: "0", caption: "Manual work left where it shouldn't be" },
        {
          value: "0",
          caption: "Reports that arrive after the moment has passed",
        },
        { value: "1", caption: "One live map of the whole institution" },
      ],
      insights: {
        title1: "Our featured",
        title2: "insights",
        button: "All Insights",
        captionPre: "Field reading on digital transformation,",
        captionEm: "compliance governance, and institutional capacity.",
      },
    },

    // ---------------------------------------------------------------------------
    // PRACTICES (services index)
    // ---------------------------------------------------------------------------
    armsIndex: {
      meta: {
        title: "Solutions | Bisher & Partners | Riyadh, Saudi Arabia",
        description:
          "Five executive arms on one integrated institutional platform: B&P Digital, B&P GRC, B&P PMO, B&P Capital, and B&P Horizon. From diagnosis to a result ready to operate, to be funded, and to grow.",
        keywords:
          "Digital Operations Saudi Arabia, AI Automation Riyadh, Governance Risk Compliance Saudi Arabia, Personal Data Protection Law, National Cybersecurity Authority, Project Management Office Saudi Arabia, Transformation Delivery, Access to Capital Saudi Arabia, Mergers and Acquisitions Riyadh, Venture Studio Saudi Arabia, Sovereign Technology, Bisher and Partners Riyadh",
      },
      breadcrumb: "Solutions",
      hero: {
        pill: "Five integrated arms",
        statementPre: "One platform, five arms, from the first",
        statementEm1: "diagnosis",
        statementMid: "to",
        statementEm2: "funded growth",
        statementPost: ".",
      },
      cardSubtitle: "Arm",
      featuredInsights: {
        title1: "Our featured",
        title2: "insights",
        button: "All Insights",
        captionPre: "Field reading on digital operations, governance,",
        captionEm: "delivery, capital, and venture building.",
      },
    },

    // ---------------------------------------------------------------------------
    // ARM PAGE COMMON LABELS (subtitles, breadcrumb, etc.)
    // ---------------------------------------------------------------------------
    armPage: {
      breadcrumbSolutions: "Solutions",
      armDetails: "/ Arm Details",
      mandateLabel: "Mandate",
      enquiriesLabel: "Enquiries",
      challenge: "/ The Reading",
      solutions: "/ Solutions",
      commitment: "/ Our Commitment",
    },

    // ---------------------------------------------------------------------------
    // CONTACT
    // ---------------------------------------------------------------------------
    contact: {
      meta: {
        title: "Contact Bisher & Partners | Begin an Engagement in Riyadh",
        description:
          "Begin an engagement with Bisher & Partners in Riyadh. Initial communication via the corporate email is followed by a reading session with the specialist appropriate to the file.",
        keywords:
          "Bisher Partners contact, Begin an engagement Riyadh, Digital Transformation Saudi Arabia, Compliance Governance Saudi Arabia, Institutional Ventures",
      },
      breadcrumb: "Contact",
      hero: {
        title: "Begin an engagement",
        captionPre:
          "An initial communication via the corporate email opens every engagement. A reading session follows with the specialist appropriate to the file,",
        captionEm:
          "covering the institution’s state, the decision it faces, and the potential scope.",
      },
      form: {
        name: "Your name*",
        company: "Company name",
        email: "Email*",
        phone: "Phone",
        message: "Tell us about the file*",
        submit: "Submit",
        sending: "Sending…",
        successTitle: "Received.",
        successMessage:
          "Thank you. The specialist appropriate to the file will be in touch.",
        errorGeneric: "Submission failed. Please try again.",
        errorNetwork:
          "Network error. Please check your connection and try again.",
        errorCaptcha: "Please confirm you're not a robot.",
        nameLabel: "Your name",
        namePlaceholder: "Full name",
        nameHint: "We'll split your first and last name automatically.",
        companyLabel: "Company name",
        emailLabel: "Email Address",
        phoneLabel: "Phone Number",
        phoneHint: "Include the country code.",
        selectPlaceholder: "Select…",
        companySizeLabel: "Company Size",
        companySizeOptions: [
          "1-10",
          "10-20",
          "20-50",
          "50-100",
          "100-500",
          "More than 500",
        ],
        industryLabel: "Industry",
        industryOptions: [
          "Education & Training",
          "Finance & Investment",
          "Healthcare & Medical",
          "Manufacturing & Logistics",
          "NGOs",
          "Real Estate & Construction",
          "Services & Consulting",
          "Technology & Software",
          "Trading & General Commerce",
          "Other",
        ],
        serviceLabel: "Service Needed",
        serviceOptions: [
          "Digital Transformation",
          "Governance and Compliance",
          "Institutional Innovation",
          "Venture Building",
          "General Consultation / Other",
        ],
        fileLabel: "Tell us about the file",
        consent:
          "I agree to receive marketing emails. I can unsubscribe at any time.",
      },
      connect: "Connect",
      office: {
        title: "Welcome to our office",
        captionPre:
          "Our Riyadh office is where the firm convenes with institutions",
        captionEm: "and delivers the engagements that define its work.",
        cityTitle: "Riyadh",
        addressFull: "Riyadh - Almalaz Dist. - Alsitteen Alaqaria Towers",
        mapTitle: "Bisher & Partners office location on Google Maps",
      },
    },

    // ---------------------------------------------------------------------------
    // FAQ
    // ---------------------------------------------------------------------------
    faq: {
      meta: {
        title: "FAQ | Bisher & Partners | Riyadh, Saudi Arabia",
        description:
          "Answers to common questions about Bisher & Partners: the four solution areas, how engagements run, the four phases of work, and how an engagement begins.",
        keywords:
          "Bisher Partners FAQ, Digital Transformation Saudi Arabia, Compliance Governance Saudi Arabia, Institutional Innovation, Venture Building, Investment Technical Diligence, Investment Readiness, Personal Data Protection Law, Riyadh",
      },
      breadcrumb: "FAQ",
      hero: {
        title: "FAQ",
        subtitlePre: "Everything",
        subtitleEm: "you need to know",
        captionPre: "Clear answers about the firm’s areas, how it works,",
        captionEm: "and how an engagement begins.",
      },
      items: [
        {
          q: "What does Bisher & Partners do?",
          a: "Bisher & Partners is a Saudi firm headquartered in Riyadh, working with institutions across digital transformation, compliance governance, and the building of institutional ventures. The firm operates across four solution areas, integrated when a file demands their combined knowledge and standalone when a single specialization is called for.",
        },
        {
          q: "What are your main solution areas?",
          a: "Four solution areas covering ten solutions in total. Digital Transformation: Rapid Launch Track, Enterprise Software Development, Process Intelligence. Governance and Compliance: Regulatory Compliance, Institutional Readiness, Institutional Advisory. Institutional Innovation: Value Chain Orchestration. Venture Building: Investment Technical Diligence, Intellectual Property Commercialization, Investment Readiness.",
        },
        {
          q: "Who do you work with?",
          a: "Five segments: small and medium enterprises moving from founding into expansion; startups and ventures in pre-seed and seed phases, particularly in deep technology; non-profit organizations, civil associations, and voluntary entities; universities and research institutions converting intellectual property into commercial ventures; and multi-generational family groups moving through governance, digital transformation, or succession.",
        },
        {
          q: "How does Bisher & Partners approach Digital Transformation?",
          a: "The Digital Transformation area builds the software systems and operational capabilities the institution requires in its phases of growth and expansion. Architectural documentation is finalized before a single line of code is written. Every phase is closed with formal acceptance before the next begins. The client receives at closing the source code, architectural diagrams, operational documentation, and licenses in their complete form.",
        },
        {
          q: "What does Venture Building cover?",
          a: "Venture Building transforms the early-stage venture from a promising idea into an investment-grade asset that withstands institutional scrutiny. Three solutions: Investment Technical Diligence delivers a graded assessment across five dimensions; Intellectual Property Commercialization builds spin-out ventures from research portfolios under flexible licensing; Investment Readiness builds the legal, financial, and valuation infrastructure the founder needs before meeting institutional capital.",
        },
        {
          q: "How does Bisher & Partners handle Governance and Compliance?",
          a: "The Governance and Compliance area builds the regulatory and operational structure the institution requires in the present Saudi business environment. Coverage includes the Essential Cybersecurity Controls, the Saudi Central Bank framework, the Capital Market Authority directives, the Personal Data Protection Law, registration and licensing requirements with the relevant authorities, and international quality and information security standards.",
        },
        {
          q: "How does an engagement begin?",
          a: "An engagement begins with an initial communication via the corporate email. A reading session follows with the specialist appropriate to the file, covering the institution’s current state, the decision or challenge it faces, and the potential scope. The session closes with a written priority list delivered at no financial commitment. A formal proposal follows for review and signature in a second session.",
        },
      ],
      featuredInsights: {
        title1: "Our featured",
        title2: "insights",
        button: "All Insights",
        captionPre: "Field reading on digital transformation,",
        captionEm: "compliance governance, and institutional capacity.",
      },
    },

    // ---------------------------------------------------------------------------
    // PRIVACY POLICY
    // ---------------------------------------------------------------------------
    privacy: {
      meta: {
        title: "Privacy Policy | Bisher & Partners | Riyadh, Saudi Arabia",
        description:
          "Privacy Policy for Bisher & Partners: how we collect, use, and protect your personal information.",
      },
      breadcrumb: "Privacy Policy",
      legalTag: "Legal",
      title: "Privacy Policy",
      blocks: [
        {
          type: "intro",
          text: 'Bisher & Partners ("Bisher & Partners," "we," "us," or "our") is committed to protecting the privacy of our website visitors. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you access or use our website located at bishernp.com.',
        },
        { type: "h2", text: "Information We Collect" },
        {
          type: "p",
          text: "We may collect the following types of personal information:",
        },
        {
          type: "ul",
          items: [
            "Contact Information: name, email address, phone number, and other details you provide when you complete our contact forms or request information.",
            "Engagement Details: information about your institution, strategic priorities, and objectives that you submit as part of inquiries or advisory discussions.",
            "Technical Information: IP address, browser type, operating system, device information, and your usage of our website.",
          ],
        },
        { type: "h2", text: "How We Use Your Information" },
        {
          type: "p",
          text: "We may use your personal information for the following purposes:",
        },
        {
          type: "ul",
          items: [
            "Providing Our Services: to respond to inquiries, communicate with you about engagements, provide updates, and deliver the advisory services you request.",
            "Website Improvement: to analyse website usage, understand visitor preferences, and enhance the content and functionality of our website.",
            "Communications: to send you relevant updates and communications about our services, with your consent where required by law.",
          ],
        },
        { type: "h2", text: "How We Share Your Information" },
        {
          type: "p",
          text: "We may share your personal information in the following circumstances:",
        },
        {
          type: "ul",
          items: [
            "Service Providers: with third-party service providers who assist us in operating the website, providing our services, and conducting our business.",
            "Business Transfers: in the event of a merger, acquisition, or sale of all or part of our business.",
            "Legal Compliance: as required by law, to comply with legal processes, or to protect the rights, property, or safety of Bisher & Partners, our users, or others.",
          ],
        },
        { type: "h2", text: "Security" },
        {
          type: "p",
          text: "We implement reasonable technical and organisational measures to protect your personal information from unauthorised access, use, disclosure, alteration, or destruction. However, please be aware that no data transmission over the internet can be guaranteed to be entirely secure.",
        },
        { type: "h2", text: "Your Choices" },
        {
          type: "ul",
          items: [
            "Opt-Out: you can opt out of receiving communications from us by following the unsubscribe instructions included in such communications, or by contacting us directly.",
            "Accessing and Updating Your Information: you may have the right to request access to, correction of, or deletion of your personal information. Contact us for more details.",
          ],
        },
        { type: "h2", text: "Children's Privacy" },
        {
          type: "p",
          text: "Our website is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13.",
        },
        { type: "h2", text: "International Transfers" },
        {
          type: "p",
          text: "If you are located outside of the Kingdom of Saudi Arabia, please be aware that your personal information may be transferred to, processed, and stored in the Kingdom of Saudi Arabia, where data protection laws may differ from those in your jurisdiction.",
        },
        { type: "h2", text: "Changes to This Privacy Policy" },
        {
          type: "p",
          text: "We may update this Privacy Policy from time to time. We will notify you of changes by posting the updated Privacy Policy on the website and indicating the date of the last revision.",
        },
        { type: "h2", text: "Contact Us" },
        {
          type: "p",
          text: "If you have any questions about this Privacy Policy, please contact us at:",
        },
      ],
      contactLabels: { email: "Email", phone: "Phone", address: "Address" },
    },

    // ---------------------------------------------------------------------------
    // TERMS OF USE
    // ---------------------------------------------------------------------------
    terms: {
      meta: {
        title: "Terms of Use | Bisher & Partners | Riyadh, Saudi Arabia",
        description:
          "Terms of Use for Bisher & Partners, the conditions governing your access to and use of our website.",
      },
      breadcrumb: "Terms of Use",
      legalTag: "Legal",
      title: "Terms of Use",
      blocks: [
        {
          type: "intro",
          text: 'These Terms of Use ("Terms") govern your access to and use of the website located at bishernp.com ("Website") operated by Bisher & Partners ("Bisher & Partners," "we," "us," or "our"). By accessing or using our Website, you signify your agreement to be bound by these Terms. If you do not agree, please do not use the Website.',
        },
        { type: "h2", text: "Scope of Use" },
        {
          type: "p",
          text: "The Website is provided for informational and business purposes related to our advisory services. You may use the Website for lawful purposes only and in accordance with these Terms.",
        },
        { type: "h2", text: "Intellectual Property" },
        {
          type: "p",
          text: "All content on the Website, including text, graphics, logos, images, software, and trademarks, is the property of Bisher & Partners or its licensors and is protected by copyright and other intellectual property laws. You may not copy, reproduce, distribute, modify, or create derivative works from any Website content without our express written permission.",
        },
        { type: "h2", text: "User Content" },
        {
          type: "p",
          text: 'You may be able to submit content to the Website ("User Content"), such as through contact forms or engagement inquiries. You grant Bisher & Partners a non-exclusive, royalty-free, worldwide, perpetual licence to use, reproduce, modify, and display your User Content in connection with the operation of the Website and our business.',
        },
        {
          type: "p",
          text: "You represent and warrant that you own or have the necessary rights to submit User Content and that it does not infringe on the rights of any third party.",
        },
        { type: "h2", text: "Prohibited Activities" },
        {
          type: "p",
          text: "You may not use the Website for any illegal or unauthorised purpose. You agree not to:",
        },
        {
          type: "ul",
          items: [
            "Use the Website to transmit spam or other unsolicited commercial communications.",
            "Attempt to gain unauthorised access to the Website, other user accounts, or computer systems connected to the Website.",
            "Interfere with the proper working of the Website or any activities conducted on the Website.",
            "Impersonate any person or entity or misrepresent your affiliation.",
            "Introduce any viruses, malware, or other harmful code to the Website.",
          ],
        },
        { type: "h2", text: "Third-Party Links" },
        {
          type: "p",
          text: "The Website may contain links to third-party websites. Bisher & Partners is not responsible for the content or practices of these websites. Your use of third-party websites is at your own risk.",
        },
        { type: "h2", text: "Disclaimer of Warranties" },
        {
          type: "p",
          text: 'THE WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. BISHER & PARTNERS MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THE WEBSITE OR THE INFORMATION, CONTENT, MATERIALS, OR SERVICES INCLUDED ON THE WEBSITE.',
        },
        {
          type: "p",
          text: "TO THE FULLEST EXTENT PERMISSIBLE BY APPLICABLE LAW, BISHER & PARTNERS DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.",
        },
        { type: "h2", text: "Limitation of Liability" },
        {
          type: "p",
          text: "IN NO EVENT SHALL BISHER & PARTNERS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE USE OF OR INABILITY TO USE THE WEBSITE, EVEN IF BISHER & PARTNERS HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
        },
        { type: "h2", text: "Indemnification" },
        {
          type: "p",
          text: "You agree to indemnify and hold Bisher & Partners harmless from any claims, damages, losses, and expenses (including reasonable attorneys' fees) arising out of your use of the Website or your breach of these Terms.",
        },
        { type: "h2", text: "Changes to Terms" },
        {
          type: "p",
          text: "Bisher & Partners reserves the right to modify these Terms at any time. We will notify you of changes by posting the updated Terms on the Website. Your continued use of the Website following the posting of changes constitutes your acceptance of the changes.",
        },
        { type: "h2", text: "Governing Law and Jurisdiction" },
        {
          type: "p",
          text: "These Terms shall be governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia, without giving effect to any principles of conflicts of law. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of the Kingdom of Saudi Arabia.",
        },
        { type: "h2", text: "Contact Us" },
        {
          type: "p",
          text: "If you have any questions about these Terms, please contact us at:",
        },
      ],
      contactLabels: { email: "Email", phone: "Phone", address: "Address" },
    },

    // ---------------------------------------------------------------------------
    // 404
    // ---------------------------------------------------------------------------
    notFound: {
      meta: {
        title: "404, Page Not Found | Bisher & Partners",
      },
      marquee: "Nothing here/",
      captionPre: "This page does not exist.",
      captionEm: "With apologies.",
      goHome: "Go Home",
      builtBy: "Built by",
      builtWith: "Built with",
    },

    // ---------------------------------------------------------------------------
    // THANK YOU (post-submission confirmation)
    // ---------------------------------------------------------------------------
    thankYou: {
      meta: {
        title: "Thank You | Bisher & Partners",
        description:
          "Your message has reached Bisher & Partners. The specialist appropriate to the file will be in touch.",
      },
      breadcrumb: "Thank You",
      marquee: "Thank you/",
      eyebrow: "Message received",
      title: "Thank you",
      captionPre:
        "Your message has reached us. The specialist appropriate to the file",
      captionEm: "will be in touch shortly.",
      noteTitle: "What happens next",
      note: "Expect an initial response within one business day. We review every file before a reading session is scheduled.",
      goHome: "Back to Home",
      exploreWork: "Explore our work",
      readInsights: "Read our insights",
    },

    // ---------------------------------------------------------------------------
    // BLOG (insights)
    // ---------------------------------------------------------------------------
    blog: {
      meta: {
        title: "Insights & Journal | Bisher & Partners | Riyadh, Saudi Arabia",
        description:
          "Field-tested perspectives on Digital Transformation, software and AI delivery, governance and compliance, and venture building inside Saudi institutions.",
        keywords:
          "Saudi digital transformation insights, software development Saudi Arabia, AI strategy Saudi Arabia, governance and compliance Saudi Arabia, Vision 2030 transformation, Saudi advisory journal, Bisher and Partners blog",
      },
      breadcrumb: "Insights",
      title: "Journal",
      subtitle:
        "Dive into the latest trends, uncover industry insights, explore practical advice",
      subtitleEm: "designed to thrive in the ever-evolving digital landscape.",
      searchPlaceholder: "Search",
      discover: "/ Discover",
      latestPosts: "/ Latest posts",
      sponsored: "Sponsored",
      about: "/ About",
      aboutText: "Dive into the latest trends,",
      aboutTextEm:
        "uncover valuable industry insights, and explore practical advice.",
      followUs: "/ Follow Us",
      all: "All",
      authorTeam: "B&P Editorial Team",
      prev: "Prev",
      next: "Next",
      bookMeeting: "Book a Meeting",
    },
  },

  // ###########################################################################
  // ARABIC TRANSLATIONS (Modern Standard Arabic, Boardroom Register)
  // ###########################################################################
  ar: {
    brand: {
      name: "بشر وشركاؤه",
      altName: "بشر وشركاؤه",
      shortA: "بشر",
      shortB: "وشركاؤه",
      credit: "فريق بشر وشركاؤه",
      logoAlt: "بشر وشركاؤه",
    },
    common: {
      home: "الرئيسية",
      company: "عن الشركة",
      practices: "الحلول",
      blog: "المدونة",
      contact: "تواصل معنا",
      faq: "الأسئلة الشائعة",
      privacyPolicy: "سياسة الخصوصية",
      termsOfUse: "شروط الاستخدام",
      bookMeeting: "احجز اجتماعاً",
      backToTop: "العودة إلى الأعلى",
      scrollToExplore: "مرر للاستكشاف",
      readPost: "قراءة المقال",
      moreEnquiries: "ناقش الملف",
      startConversation: "تواصل معنا",
      explorePractice: "استكشف الذراع",
      allInsights: "جميع المقالات",
      newsOverview: "نظرة عامة",
      ourStory: "قصتنا",
      ourTeam: "فريقنا",
      ourPractices: "حلولنا",
      ourApproach: "منهجنا",
      contactUs: "تواصل معنا",
      letsChat: "لنتحدث",
      languageEN: "EN",
      languageAR: "العربية",
      switchToArabic: "التحويل إلى العربية",
      switchToEnglish: "Switch to English",
      lightDarkMode: "الوضع الفاتح / الداكن",
      universalCta: "ابدأ مشروعك معنا",
      copyrightAll: "جميع الحقوق محفوظة",
      recaptchaNotice: "محميٌّ بواسطة reCAPTCHA",
      recaptchaPolicy: "سياسة الخصوصية",
      recaptchaTerms: "شروط الخدمة",
      recaptchaApply: "سارية المفعول.",
      and: "و",
      madeWithBy: "صُنع بـ",
      builtBy: "بُني بواسطة",
      copyright: "حقوق النشر",
      menuTagline: "حلول التحوّل الرقمي والحوكمة <br>للمنشآت السعودية",
      address: {
        line: "الرياض، المملكة العربية السعودية",
        html: "الرياض،<br>المملكة العربية السعودية",
        city: "الرياض",
      },
      menuNumbers: ["/ 01", "/ 02", "/ 03", "/ 04", "/ 05"],
      footerDiscover: "/ استكشف",
      footerContact: "/ تواصل معنا",
      footerInfo: "/ معلومات",
      footerFollow: "/ تابعنا",
      allPractices: "جميع الحلول",
      next: "التالي",
      nextPractice: "الذراع التالي",
      practiceWord: "",
      breadcrumbHome: "الرئيسية",
      // Social labels in the same order as site.socials.
      socials: ["لينكدإن", "إكس (تويتر)", "يوتيوب", "ثريدز", "إنستغرام"],
    },

    home: {
      meta: {
        title: "بشر وشركاؤه | حلول التحوّل الرقمي والحوكمة",
        description:
          "شركةٌ سعوديةٌ مقرّها الرياض، تعمل مع المنشآت في التحوّل الرقمي وحوكمة الامتثال وبناء المشاريع المؤسسية.",
        keywords:
          "التحوّل الرقمي في السعودية، حوكمة الامتثال في السعودية، بناء المشاريع المؤسسية، تطوير البرمجيات المؤسسية في الرياض، ذكاء العمليات، الامتثال التنظيمي السعودي، نظام حماية البيانات الشخصية، الضوابط الأساسية للأمن السيبراني، إطار البنك المركزي السعودي، هيئة السوق المالية، الجاهزية المؤسسية، الاستشارة المؤسسية، تنسيق سلاسل القيمة، التدقيق التقني للاستثمار، تسييل الملكية الفكرية، جاهزية الاستثمار، بشر وشركاؤه، الرياض",
      },
      hero: {
        pill: "بشر وشركاؤه",
        h1Line1: "حلول  التحوّل الرقمي",
        h1And: "و",
        // h1Governance: "الحوكمة ",
        h1Governance: "الحوكمة والامتثال",
        h1For: "للـ",
        h1ForWhom: "منشآت السعودية",
      },
      manifest: {
        sectionNumber: "م/01",
        cursor: "عنّا",
        lead: "بشر وشركاؤه هي منصة مؤسسية متكاملة، نرافق المنشآت من لحظة التشخيص إلى",
        em: "نتيجةٍ قابلةٍ للتشغيل والتمويل والنمو.",
      },
      stats: [
        { value: "1", caption: "منصةٌ واحدة لرحلةٍ واحدة" },
        { value: "5", caption: "تخصّصات تحت سقفٍ واحد" },
        { value: "6", caption: "أطرٌ سعودية بحكم التصميم" },
        { value: "40+", caption: "سنة من الخبرة القيادية" },
      ],
      cards: {
        digital: {
          name: "B&P Digital",
          tags: ["الأتمتة", "وكلاء الذكاء", "لوحات القيادة"],
          textPre: "العمليات الرقمية وأتمتة الذكاء التي تبني",
          textEm: "النسيج التشغيلي الرقمي للمنشآت.",
        },
        grc: {
          name: "B&P GRC",
          tags: ["حماية البيانات", "الأمن السيبراني", "التدقيق"],
          textPre: "الحوكمة والأمن السيبراني وحماية البيانات منسوجةً في",
          textEm: "العمود الفقري لكلّ نظام.",
        },
        pmo: {
          name: "B&P PMO",
          tags: ["التنفيذ", "مؤشرات الأداء", "إدارة التغيير"],
          textPre: "إدارة المشاريع وتنفيذ التحوّل التي تحوّل",
          textEm: "الاستراتيجية إلى تنفيذٍ مُقاسٍ على مستوى المجلس.",
        },
        capital: {
          name: "B&P Capital",
          tags: ["التمويل", "التقييمات", "الاندماج والاستحواذ"],
          textPre: "الوصول إلى رأس المال وإعادة الهيكلة والاستحواذ التي تحوّل",
          textEm: "الجاهزية إلى رأس مالٍ مُلتَزَم.",
        },
        horizon: {
          name: "B&P Horizon",
          tags: ["استوديو المشاريع", "التقنية السيادية", "الملكية الفكرية"],
          textPre: "تأسيس شركاتٍ جديدةٍ في التقنية العميقة والسيادية،",
          textEm: "مبنيةً لرأس المال المؤسسي منذ اليوم الأول.",
        },
      },
      methodology: {
        sectionNumber: "أ/02",
        cursor: "الأنطولوجيا",
        title1: "الأنطولوجيا",
        title2: "المؤسسية",
        steps: [
          {
            num: "01",
            name: "التشخيص",
            descrPre:
              "تتعثّر المنشآت حين تعيش بياناتها وعملياتها ومخاطرها وقراراتها كعوالم منفصلة،",
            descrEm:
              "لا يربط بينها سوى البريد والاجتماعات والاجتهادات الفردية.",
            meta1: ["البيانات", "العمليات"],
            meta2: ["البريد", "الاجتهاد الفردي"],
          },
          {
            num: "02",
            name: "الخريطة",
            descrPre:
              "نُنمذج المنشآت بوصفها طبقةً تشغيليةً مترابطة، هي الأنطولوجيا المؤسسية:",
            descrEm:
              "خريطةٌ حيّةٌ موحّدةٌ قابلةٌ للاستعلام لكياناتها والعلاقات بينها.",
            meta1: ["الأنطولوجيا", "الكيانات"],
            meta2: ["حيّة", "قابلة للاستعلام"],
          },
          {
            num: "03",
            name: "التحوّل",
            descrPre:
              "تنتقل المنشآت من التفتّت إلى الوضوح، فتغدو مقروءةً من داخل ذاتها لأول مرة،",
            descrEm: "جسداً واحداً تتحرّك أجزاؤه بمعنىً واحد.",
            meta1: ["التفتّت", "الوضوح"],
            meta2: ["جسدٌ واحد", "معنىً واحد"],
          },
          {
            num: "04",
            name: "الأثر التشغيلي",
            descrPre:
              "تتحرّك الموافقات بسياقها الكامل، ويُرصد الامتثال أثناء التشغيل،",
            descrEm: "فتتراكم أدلّة التدقيق والجاهزية التمويلية من تلقائها.",
            meta1: ["الوقت الفعلي", "السياق"],
            meta2: ["الأدلّة", "الجاهزية"],
          },
        ],
      },
      divider: {
        button: "قصتنا",
        h2: "تأسّست لتُهندس القيمة حيث يُظنّ أنها قد استُنفذت",
      },
      clients: {
        h2: "العملاء",
        subtitle: "من خبرات الشركاء",
      },
      insights: {
        sectionNumber: "ر/03",
        cursor: "مزيد من المقالات",
        title1: "أحدث",
        title2: "المقالات",
        button: "نظرة عامة",
      },
    },

    about: {
      meta: {
        title: "عن بشر وشركاؤه | حلول التحوّل الرقمي والحوكمة",
        description:
          "بشر وشركاؤه شركةٌ سعوديةٌ مقرّها الرياض. أربعة مجالات حلول تجتمع في خدمة المؤسسة: التحوّل الرقمي، وحوكمة الامتثال، والابتكار المؤسسي، وبناء المشاريع.",
        keywords:
          "بشر وشركاؤه، شركة سعودية في الرياض، التحوّل الرقمي، حوكمة الامتثال، الابتكار المؤسسي، بناء المشاريع، تطوير البرمجيات المؤسسية، ذكاء العمليات، الامتثال التنظيمي، الجاهزية المؤسسية، الاستشارة المؤسسية، تنسيق سلاسل القيمة، التدقيق التقني للاستثمار، تسييل الملكية الفكرية، جاهزية الاستثمار",
        schemaDescription:
          "بشر وشركاؤه شركةٌ سعوديةٌ مقرّها الرياض، تعمل مع المنشآت في التحوّل الرقمي وحوكمة الامتثال وبناء المشاريع المؤسسية. أربعة مجالات حلول تتكامل أو تُقدَّم منفردة: التحوّل الرقمي، والحوكمة والامتثال، والابتكار المؤسسي، وبناء المشاريع.",
      },
      hero: {
        pill: "الشركة",
        h1Where: "حيث يتحوّل",
        h1DT: "الطموح",
        h1And: "إلى",
        h1Governance: "أنظمةٍ عاملة",
        h1Become: "ونموٍّ ممول.",
        breadcrumb: "الشركة",
      },
      manifest: {
        cursor: "مجالاتنا",
        lead: "وُجدت بشر وشركاؤه لتُزيل كلّ ما يقف بين المنشآت والنتائج التي تطمح إليها،",
        em: "حتى يبقى الطموح وحده المتغيّر الوحيد القابل للاختبار.",
      },
      vmv: {
        vision: {
          title: "الرؤية",
          descr:
            "أن تُمثّل شركة بشر وشركاؤه مرجعاً مؤسسياً تركن إليه القيادات الطموحة لبناء القدرة الرقمية والحوكمة ورأس المال، لتغدو منشآتهم سيّدةً على ما تملك، وقادرةً على البقاء والنمو في ظل البيئة التنظيمية المتسارعة.",
          meta: "حيث نتجه",
        },
        mission: {
          title: "الرسالة",
          descr:
            "نسخّر عقوداً من التخصص لتحويل العمليات المتفرّقة إلى منظومةٍ حيّةٍ قابلةٍ للاستعلام، عبر فِرقٍ مدمجةٍ وأتمتةٍ ولوحات قيادةٍ تجعل العمل مرئياً في لحظته، وتُكوّن الدليل أثناء جريانه، وتُهيّئ المنشآت للتمويل.",
          meta: "ما نفعل",
        },
        position: {
          title: "المعيار",
          descr:
            "النجاح هو النظام الحيّ الباقي بعد رحيلنا، والمشروع الممَوَّل، والقدرة التي تستمر. نجاح هذه العوامل من نجاح منشآتها، ونجاحهم نجاحنا.",
          meta: "كيف نقيس",
        },
      },
      leadership: {
        title1: "قيادتنا",
        title2: "",
        button: "فريقنا",
        captionPre: "فريق اختيرَ بحجم القرارات التي يتخذها أفراده،",
        captionEm: "لا بحسب المناصب التي يحملونها.",
        members: [
          { name: "د. بشر عبدالإله", role: "رئيس مجلس الإدارة" },
          { name: "السيد سامي الزبير", role: "الرئيس التنفيذي" },
          { name: "المهندس محمد بشر", role: "الرئيس التنفيذي للتقنية" },
          { name: "المهندس فارس بشر", role: "الرئيس التنفيذي للابتكار" },
        ],
      },
      positioning: {
        subtitle: "/ المعيار العالمي",
        firmSubtitle: "/ الشركة",
        leadPre:
          "نقيس عملنا على مستوى أكثر المنشآت تقدّماً في العالم، في البنية والانضباط والقدرة على التنفيذ،",
        leadEm: "ثم نَحيز كلّ نظامٍ إلى لغة المملكة وتنظيمها وطموحها.",
      },
      stats: [
        { value: "0", caption: "جزرٌ تفصل البيانات عن القرار" },
        { value: "0", caption: "عملٌ يدويٌّ في غير موضعه" },
        { value: "0", caption: "تقاريرُ تصل بعد فوات اللحظة" },
        { value: "1", caption: "خريطةٌ حيّةٌ للمنشأة بأكملها" },
      ],
      insights: {
        title1: "مقالاتنا",
        title2: "المختارة",
        button: "جميع المقالات",
        captionPre: "قراءاتٌ ميدانيةٌ في التحوّل الرقمي،",
        captionEm: "وحوكمة الامتثال، والقدرة المؤسسية.",
      },
    },

    armsIndex: {
      meta: {
        title: "الحلول | بشر وشركاؤه | الرياض، المملكة العربية السعودية",
        description:
          "خمسة أذرعٍ تنفيذيةٍ على منصةٍ مؤسسيةٍ متكاملةٍ واحدة: B&P Digital وB&P GRC وB&P PMO وB&P Capital وB&P Horizon. من التشخيص إلى نتيجةٍ قابلةٍ للتشغيل والتمويل والنمو.",
        keywords:
          "العمليات الرقمية في السعودية، أتمتة الذكاء الاصطناعي، الحوكمة وإدارة المخاطر والامتثال، حماية البيانات، الأمن السيبراني، مكتب إدارة المشاريع، تنفيذ التحوّل، الوصول إلى رأس المال، الاندماج والاستحواذ، استوديو المشاريع، التقنية السيادية، بشر وشركاؤه الرياض",
      },
      breadcrumb: "الحلول",
      hero: {
        pill: "خمسة أذرعٍ متكاملة",
        statementPre: "منصةٌ واحدة، خمسة أذرع، من",
        statementEm1: "التشخيص",
        statementMid: "الأول إلى",
        statementEm2: "النموّ الممول",
        statementPost: ".",
      },
      cardSubtitle: "ذراع",
      featuredInsights: {
        title1: "مقالاتنا",
        title2: "المختارة",
        button: "جميع المقالات",
        captionPre: "قراءاتٌ ميدانيةٌ في العمليات الرقمية والحوكمة،",
        captionEm: "والتنفيذ، ورأس المال، وبناء المشاريع.",
      },
    },

    armPage: {
      breadcrumbSolutions: "الحلول",
      armDetails: "/ تفاصيل الذراع",
      mandateLabel: "التفويض",
      enquiriesLabel: "الاستفسارات",
      challenge: "/ القراءة",
      solutions: "/ الحلول",
      commitment: "/ التزامنا",
    },

    contact: {
      meta: {
        title: "تواصل مع بشر وشركاؤه | ابدأ مشروعك في الرياض",
        description:
          "ابدأ مشروعك مع بشر وشركاؤه في الرياض. يبدأ التعامل بتواصلٍ أوّليٍّ عبر البريد المؤسسي، تليه جلسة قراءةٍ يحضرها المختصّ بطبيعة الملفّ.",
        keywords:
          "تواصل مع بشر وشركاؤه، ابدأ مشروعك في الرياض، التحوّل الرقمي في السعودية، حوكمة الامتثال في السعودية، المشاريع المؤسسية",
      },
      breadcrumb: "تواصل معنا",
      hero: {
        title: "ابدأ مشروعك",
        captionPre:
          "يبدأ كلّ تعاملٍ بتواصلٍ أوّليٍّ عبر البريد المؤسسي. تليه جلسة قراءةٍ يحضرها المختصّ بطبيعة الملف،",
        captionEm:
          "تُغطّي الوضع الراهن للمؤسسة، والقرار الذي تواجهه، والنطاق المحتمل للارتباط.",
      },
      form: {
        name: "اسمك*",
        company: "اسم الشركة",
        email: "البريد الإلكتروني*",
        phone: "رقم الهاتف",
        message: "أخبرنا عن الملف*",
        submit: "إرسال",
        sending: "جاري الإرسال…",
        successTitle: "وصلتنا.",
        successMessage: "شكراً لكم. سيتواصل معكم المختصّ بطبيعة الملف.",
        errorGeneric: "فشل الإرسال. يُرجى المحاولة مرةً أخرى.",
        errorNetwork:
          "خطأ في الاتصال. يُرجى التحقق من الشبكة والمحاولة مجدداً.",
        errorCaptcha: "يُرجى تأكيد أنك لست برنامجاً آلياً.",
        nameLabel: "اسمك",
        namePlaceholder: "الاسم الكامل",
        nameHint: "سنقوم بفصل الاسم الأول والأخير تلقائياً.",
        companyLabel: "اسم الشركة",
        emailLabel: "البريد الإلكتروني",
        phoneLabel: "رقم الهاتف",
        phoneHint: "يُرجى تضمين رمز الدولة.",
        selectPlaceholder: "اختر…",
        companySizeLabel: "حجم الشركة",
        companySizeOptions: [
          "1-10",
          "10-20",
          "20-50",
          "50-100",
          "100-500",
          "أكثر من 500",
        ],
        industryLabel: "القطاع",
        industryOptions: [
          "التعليم والتدريب",
          "التمويل والاستثمار",
          "الرعاية الصحية والطب",
          "التصنيع والخدمات اللوجستية",
          "المنظمات غير الربحية",
          "العقارات والإنشاءات",
          "الخدمات والاستشارات",
          "التقنية والبرمجيات",
          "التجارة العامة",
          "أخرى",
        ],
        serviceLabel: "الخدمة المطلوبة",
        serviceOptions: [
          "التحوّل الرقمي",
          "الحوكمة والامتثال",
          "الابتكار المؤسسي",
          "بناء المشاريع",
          "استشارة عامة / أخرى",
        ],
        fileLabel: "أخبرنا عن الملف",
        consent:
          "أوافق على تلقي رسائل تسويقية. يمكنني إلغاء الاشتراك في أي وقت.",
      },
      connect: "تواصل",
      office: {
        title: "لزيارتنا في مكتبنا",
        captionPre: "مكتبنا في الرياض حيث تلتقي الشركة بالمنشآت",
        captionEm: "وتُسلّم الارتباطات التي تُعرِّف عملها.",
        cityTitle: "الرياض",
        addressFull: "الرياض - حي الملز - أبراج العقارية الستين",
        mapTitle: "موقع مكتب بشر وشركاؤه على خرائط جوجل",
      },
    },

    faq: {
      meta: {
        title:
          "الأسئلة الشائعة | بشر وشركاؤه | الرياض، المملكة العربية السعودية",
        description:
          "إجاباتٌ على الأسئلة الشائعة حول شركة بشر وشركاؤه؛ المجالات الأربعة، وكيف تَجري الارتباطات، ومراحل العمل الأربع، وكيف يبدأ التعامل.",
        keywords:
          "أسئلة شائعة بشر وشركاؤه، التحوّل الرقمي في السعودية، حوكمة الامتثال في السعودية، الابتكار المؤسسي، بناء المشاريع، التدقيق التقني للاستثمار، جاهزية الاستثمار، نظام حماية البيانات الشخصية، الرياض",
      },
      breadcrumb: "الأسئلة الشائعة",
      hero: {
        title: "الأسئلة الشائعة",
        subtitlePre: "كل ما",
        subtitleEm: "تحتاج إلى معرفته",
        captionPre: "إجاباتٌ واضحةٌ عن مجالات الشركة، وطريقة عملها،",
        captionEm: "وكيف يبدأ التعامل.",
      },
      items: [
        {
          q: "ماذا تفعل بشر وشركاؤه؟",
          a: "شركة بشر وشركاؤه شركةٌ سعوديةٌ مقرّها الرياض، تعمل مع المنشآت في التحوّل الرقمي وحوكمة الامتثال وبناء المشاريع المؤسسية. تعمل الشركة عبر أربعة مجالات حلول، تتكامل حين يحتاج الملفّ معارفها مجتمعة، وتُقدَّم منفردةً حين يستدعي الملفّ تخصّصاً واحداً.",
        },
        {
          q: "ما هي مجالات الحلول الرئيسية؟",
          a: "أربعة مجالات حلول تضمّ عشرة حلولٍ بالإجمال. التحوّل الرقمي: مسار الإطلاق السريع، تطوير البرمجيات المؤسسية، ذكاء العمليات. الحوكمة والامتثال: الامتثال التنظيمي، الجاهزية المؤسسية، الاستشارة المؤسسية. الابتكار المؤسسي: تنسيق سلاسل القيمة. بناء المشاريع: التدقيق التقني للاستثمار، تسييل الملكية الفكرية، جاهزية الاستثمار.",
        },
        {
          q: "مع من تعمل الشركة؟",
          a: "خمس شرائح: المنشآت الصغيرة والمتوسطة المنتقلة من التأسيس إلى التوسّع؛ والمنشآت الناشئة في مرحلتَي ما قبل التمويل والتمويل الأوّلي، وبخاصةٍ في التقنية العميقة؛ والمنظمات غير الربحية والجمعيات الأهلية والهيئات التطوعية؛ والجامعات والمنشآت البحثية التي تُحوِّل ملكيتها الفكرية إلى مشاريع تجارية؛ والمجموعات العائلية متعدّدة الأجيال في مراحل الحوكمة أو التحوّل الرقمي أو التخطيط للخلافة.",
        },
        {
          q: "كيف تتعامل الشركة مع التحوّل الرقمي؟",
          a: "يبني مجال التحوّل الرقمي الأنظمة البرمجية والقدرات التشغيلية التي تحتاجها المؤسسة في مرحلة النموّ والتوسّع. تُقفَل الوثائق المعمارية قبل كتابة سطر كودٍ واحد. تُعتمَد كلّ مرحلةٍ بقبولٍ رسميٍّ قبل بدء ما يليها. ويتسلّم العميل عند الإغلاق الكود المصدري والمخططات المعمارية ووثائق التشغيل والتراخيص بصورتها الكاملة.",
        },
        {
          q: "ماذا يُغطّي مجال بناء المشاريع؟",
          a: "يُحوّل بناء المشاريع المشروع الناشئ من فكرةٍ واعدةٍ إلى أصلٍ استثماريٍّ يصمد أمام التدقيق المؤسسي، عبر ثلاثة حلول: التدقيق التقني للاستثمار يُقدِّم تقييماً مُدرَّجاً عبر خمسة محاور؛ وتسييل الملكية الفكرية يبني مشاريع منبثقةً من المحافظ البحثية بأُطر ترخيصٍ مرنة؛ وجاهزية الاستثمار تبني البنية القانونية والمالية والتقييمية التي يحتاجها المؤسس قبل اللقاء برأس المال المؤسسي.",
        },
        {
          q: "كيف تتعامل الشركة مع الحوكمة والامتثال؟",
          a: "يبني مجال الحوكمة والامتثال البنية الرقابية والتشغيلية التي تحتاجها المؤسسة في بيئة الأعمال السعودية الراهنة. يُغطّي ذلك الضوابط الأساسية للأمن السيبراني، وإطار البنك المركزي السعودي، وتوجيهات هيئة السوق المالية، ومتطلبات نظام حماية البيانات الشخصية، ومتطلبات التسجيل والترخيص لدى الجهات المختصّة، ومعايير الجودة وأمن المعلومات الدولية.",
        },
        {
          q: "كيف يبدأ التعامل؟",
          a: "يبدأ التعامل بتواصلٍ أوّليٍّ عبر البريد المؤسسي. تُحدَّد بعده جلسة قراءةٍ يحضرها المختصّ بطبيعة الملف، تُغطّي الوضع الراهن للمؤسسة، والقرار أو التحدّي الذي تواجهه، والنطاق المحتمل للارتباط. تُختَم الجلسة بقائمة أولوياتٍ مكتوبةٍ تُسلَّم دون أيّ التزامٍ مالي. ثم يُصاغ مقترح ارتباطٍ رسمي يُعرَض في جلسةٍ ثانيةٍ للنقاش والمراجعة والتوقيع.",
        },
      ],
      featuredInsights: {
        title1: "مقالاتنا",
        title2: "المختارة",
        button: "جميع المقالات",
        captionPre: "قراءاتٌ ميدانيةٌ في التحوّل الرقمي،",
        captionEm: "وحوكمة الامتثال، والقدرة المؤسسية.",
      },
    },

    privacy: {
      meta: {
        title:
          "سياسة الخصوصية | بشر وشركاؤه | الرياض، المملكة العربية السعودية",
        description:
          "سياسة الخصوصية لشركة بشر وشركاؤه: كيف نَجمع معلوماتك الشخصية ونستخدمها ونحميها.",
      },
      breadcrumb: "سياسة الخصوصية",
      legalTag: "قانوني",
      title: "سياسة الخصوصية",
      blocks: [
        {
          type: "intro",
          text: "تلتزم شركة بشر وشركاؤه («بشر وشركاؤه» أو «نحن» أو «لنا» أو «خاصتنا») بحماية خصوصية زوار موقعنا الإلكتروني. تُوضِّح سياسة الخصوصية هذه كيفية جمعنا لمعلوماتكم الشخصية واستخدامها والإفصاح عنها وحمايتها عند الوصول إلى موقعنا الإلكتروني bishernp.com أو استخدامه.",
        },
        { type: "h2", text: "المعلومات التي نجمعها" },
        { type: "p", text: "قد نَجمع الأنواع التالية من المعلومات الشخصية:" },
        {
          type: "ul",
          items: [
            "معلومات الاتصال: الاسم، والبريد الإلكتروني، ورقم الهاتف، وغير ذلك من البيانات التي تُقدِّمونها عند تعبئة نماذج التواصل أو طلب المعلومات.",
            "تفاصيل الارتباط: المعلومات المتعلقة بمؤسستكم، وأولوياتها الاستراتيجية، والأهداف التي تُقدِّمونها كجزءٍ من الاستفسارات أو المحادثات الاستشارية.",
            "المعلومات التقنية: عنوان IP، ونوع المتصفح، ونظام التشغيل، ومعلومات الجهاز، واستخدامكم لموقعنا الإلكتروني.",
          ],
        },
        { type: "h2", text: "كيف نستخدم معلوماتكم" },
        { type: "p", text: "قد نستخدم معلوماتكم الشخصية للأغراض التالية:" },
        {
          type: "ul",
          items: [
            "تقديم خدماتنا: للرد على الاستفسارات، والتواصل بشأن الارتباطات، وتقديم التحديثات، وتنفيذ الخدمات الاستشارية المطلوبة.",
            "تطوير الموقع: لتحليل استخدام الموقع، وفهم تفضيلات الزوار، وتحسين محتوى الموقع ووظائفه.",
            "الاتصالات: لإرسال التحديثات والاتصالات ذات الصلة بخدماتنا، بموافقتكم حيثما يقتضي القانون ذلك.",
          ],
        },
        { type: "h2", text: "كيف نُشارك معلوماتكم" },
        { type: "p", text: "قد نُشارك معلوماتكم الشخصية في الحالات التالية:" },
        {
          type: "ul",
          items: [
            "مزودو الخدمات: مع مزودي الخدمات الخارجيين الذين يُساعدوننا في تشغيل الموقع وتقديم خدماتنا وإدارة أعمالنا.",
            "تحويلات الأعمال: في حال حدوث اندماج أو استحواذ أو بيع لكامل أعمالنا أو جزءٍ منها.",
            "الالتزام القانوني: حسبما يقتضيه القانون، أو الامتثال للإجراءات القانونية، أو حماية حقوق وممتلكات وسلامة بشر وشركاؤه ومستخدميها أو غيرهم.",
          ],
        },
        { type: "h2", text: "الأمان" },
        {
          type: "p",
          text: "نُطبِّق إجراءاتٍ تقنيةً وتنظيميةً معقولةً لحماية معلوماتكم الشخصية من الوصول غير المُصرَّح به، أو الاستخدام أو الإفصاح أو التغيير أو الإتلاف. ومع ذلك، يُرجى العلم بأنه لا يُمكن ضمان أمان أيِّ نقلٍ للبيانات عبر الإنترنت بنسبةٍ كاملة.",
        },
        { type: "h2", text: "خياراتكم" },
        {
          type: "ul",
          items: [
            "إلغاء الاشتراك: يمكنكم إلغاء الاشتراك في تلقي الاتصالات منا باتباع تعليمات إلغاء الاشتراك المُتضمَّنة في تلك الاتصالات، أو بالتواصل المباشر معنا.",
            "الوصول إلى معلوماتكم وتحديثها: قد يحقُّ لكم طلب الوصول إلى معلوماتكم الشخصية أو تصحيحها أو حذفها. تواصلوا معنا للمزيد من التفاصيل.",
          ],
        },
        { type: "h2", text: "خصوصية الأطفال" },
        {
          type: "p",
          text: "موقعنا الإلكتروني غير مُخصَّصٍ للاستخدام من قِبَل الأطفال دون سن 13 عاماً. ولا نَجمع عن سابق علمٍ معلوماتٍ شخصيةً من أطفالٍ دون هذا السن.",
        },
        { type: "h2", text: "النقل الدولي" },
        {
          type: "p",
          text: "إذا كنتم خارج المملكة العربية السعودية، يُرجى العلم بأن معلوماتكم الشخصية قد يتم نقلها إلى المملكة العربية السعودية ومعالجتها وتخزينها فيها، حيث قد تختلف قوانين حماية البيانات عن تلك المعمول بها في بلدكم.",
        },
        { type: "h2", text: "تغييرات على سياسة الخصوصية هذه" },
        {
          type: "p",
          text: "قد نُحدِّث سياسة الخصوصية هذه من حينٍ لآخر. وسنُخطركم بالتغييرات بنشر السياسة المُحدَّثة على الموقع وبيان تاريخ آخر مراجعة.",
        },
        { type: "h2", text: "تواصلوا معنا" },
        {
          type: "p",
          text: "إذا كانت لديكم أي أسئلة بخصوص سياسة الخصوصية هذه، يُرجى التواصل معنا على:",
        },
      ],
      contactLabels: {
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        address: "العنوان",
      },
    },

    terms: {
      meta: {
        title:
          "شروط الاستخدام | بشر وشركاؤه | الرياض، المملكة العربية السعودية",
        description:
          "شروط الاستخدام لشركة بشر وشركاؤه، والتي تحكم وصولكم إلى موقعنا الإلكتروني واستخدامه.",
      },
      breadcrumb: "شروط الاستخدام",
      legalTag: "قانوني",
      title: "شروط الاستخدام",
      blocks: [
        {
          type: "intro",
          text: "تحكم شروط الاستخدام هذه («الشروط») وصولكم إلى الموقع الإلكتروني bishernp.com («الموقع») الذي تُديره شركة بشر وشركاؤه («بشر وشركاؤه» أو «نحن» أو «لنا» أو «خاصتنا») واستخدامكم له. وعند الوصول إلى موقعنا أو استخدامه، فإنكم تُقرِّون بقبول الالتزام بهذه الشروط. وإن لم توافقوا، فيُرجى عدم استخدام الموقع.",
        },
        { type: "h2", text: "نطاق الاستخدام" },
        {
          type: "p",
          text: "يُقدَّم الموقع لأغراضٍ معلوماتيةٍ وأعمالٍ تتعلق بخدماتنا الاستشارية. ويجوز لكم استخدام الموقع للأغراض المشروعة فقط ووفقاً لهذه الشروط.",
        },
        { type: "h2", text: "الملكية الفكرية" },
        {
          type: "p",
          text: "جميع المحتويات على الموقع، بما في ذلك النصوص والرسوم والشعارات والصور والبرمجيات والعلامات التجارية، هي ملكٌ لشركة بشر وشركاؤه أو مُرخِّصيها، وهي محميةٌ بموجب قوانين حقوق التأليف والنشر وقوانين الملكية الفكرية الأخرى. ولا يجوز نسخ أيِّ محتوىً من الموقع أو إعادة إنتاجه أو توزيعه أو تعديله أو إنشاء أعمالٍ مُشتقةٍ منه دون إذنٍ خطيٍّ صريحٍ منا.",
        },
        { type: "h2", text: "محتوى المستخدم" },
        {
          type: "p",
          text: "قد تتمكنون من تقديم محتوى للموقع («محتوى المستخدم»)، كأن يكون عبر نماذج التواصل أو استفسارات الارتباط. وتمنحون بشر وشركاؤه ترخيصاً غير حصريٍّ ومجانيّاً وعالميّاً ودائماً لاستخدام محتوى المستخدم وإعادة إنتاجه وتعديله وعرضه فيما يتعلق بتشغيل الموقع وأعمالنا.",
        },
        {
          type: "p",
          text: "تُقرّون وتضمنون أنكم تَملكون أو تَملكون الحقوق اللازمة لتقديم محتوى المستخدم، وأنه لا يَنتهك حقوق أيِّ طرفٍ ثالث.",
        },
        { type: "h2", text: "الأنشطة المحظورة" },
        {
          type: "p",
          text: "لا يجوز استخدام الموقع لأيِّ غرضٍ غير قانونيٍّ أو غير مُصرَّحٍ به. وتوافقون على ألَّا تقوموا بما يلي:",
        },
        {
          type: "ul",
          items: [
            "استخدام الموقع لإرسال البريد المُزعج أو غيره من الاتصالات التجارية غير المرغوب فيها.",
            "محاولة الحصول على وصولٍ غير مُصرَّحٍ به للموقع أو لحسابات المستخدمين الآخرين أو لأنظمة الحاسب المرتبطة بالموقع.",
            "التدخل في عمل الموقع أو في أيٍّ من الأنشطة التي تَجري عليه.",
            "انتحال شخصية أيِّ شخصٍ أو كيانٍ أو تشويه حقيقة انتمائكم.",
            "إدخال أيِّ فيروساتٍ أو برمجياتٍ خبيثةٍ أو أيِّ شيفرةٍ ضارةٍ إلى الموقع.",
          ],
        },
        { type: "h2", text: "روابط الأطراف الثالثة" },
        {
          type: "p",
          text: "قد يحتوي الموقع على روابط لمواقعٍ تابعةٍ لأطرافٍ ثالثة. وبشر وشركاؤه ليست مسؤولةً عن محتوى تلك المواقع أو ممارساتها. واستخدامكم لمواقع الأطراف الثالثة يكون على مسؤوليتكم الخاصة.",
        },
        { type: "h2", text: "إخلاء مسؤولية الضمانات" },
        {
          type: "p",
          text: "يُقدَّم الموقع على أساس «كما هو» و«كما هو متاح». ولا تُقدِّم بشر وشركاؤه أيَّ إقراراتٍ أو ضماناتٍ من أيِّ نوع، صريحةً كانت أم ضمنية، بشأن تشغيل الموقع أو المعلومات أو المحتوى أو المواد أو الخدمات الواردة فيه.",
        },
        {
          type: "p",
          text: "وإلى أقصى حدٍّ يَسمح به القانون المعمول به، تُخلي بشر وشركاؤه مسؤوليتها من جميع الضمانات الصريحة والضمنية، بما فيها على سبيل المثال لا الحصر الضمانات الضمنية للقابلية للتسويق والملاءمة لغرضٍ مُعيَّن.",
        },
        { type: "h2", text: "حدود المسؤولية" },
        {
          type: "p",
          text: "لا تتحمل بشر وشركاؤه بأيِّ حالٍ من الأحوال المسؤولية عن أيِّ أضرارٍ مباشرةٍ أو غير مباشرةٍ أو عَرَضيةٍ أو خاصةٍ أو تبعيةٍ تنشأ عن استخدام الموقع أو عدم القدرة على استخدامه أو فيما يتصل بهما، حتى وإن أُبلِغت بشر وشركاؤه باحتمال وقوع هذه الأضرار.",
        },
        { type: "h2", text: "التعويض" },
        {
          type: "p",
          text: "توافقون على تعويض بشر وشركاؤه وحمايتها من أيِّ مطالباتٍ أو أضرارٍ أو خسائرَ أو نفقات (بما فيها أتعاب المحاماة المعقولة) ناشئةٍ عن استخدامكم للموقع أو إخلالكم بهذه الشروط.",
        },
        { type: "h2", text: "تغييرات على الشروط" },
        {
          type: "p",
          text: "تحتفظ بشر وشركاؤه بالحق في تعديل هذه الشروط في أيِّ وقت. وسنُخطركم بالتغييرات بنشر الشروط المُحدَّثة على الموقع. ويُعد استمراركم في استخدام الموقع بعد نشر التغييرات قبولاً منكم لها.",
        },
        { type: "h2", text: "القانون الحاكم والاختصاص القضائي" },
        {
          type: "p",
          text: "تخضع هذه الشروط لقوانين المملكة العربية السعودية وتُفسَّر وفقاً لها، دون الأخذ بأيِّ مبادئ تنازع القوانين. وأيُّ نزاعاتٍ تنشأ عن هذه الشروط أو تتعلق بها تخضع للاختصاص القضائي الحصري لمحاكم المملكة العربية السعودية.",
        },
        { type: "h2", text: "تواصلوا معنا" },
        {
          type: "p",
          text: "إذا كانت لديكم أي أسئلة بخصوص هذه الشروط، يُرجى التواصل معنا على:",
        },
      ],
      contactLabels: {
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        address: "العنوان",
      },
    },

    notFound: {
      meta: {
        title: "404، الصفحة غير موجودة | بشر وشركاؤه",
      },
      marquee: "لا شيء هنا/",
      captionPre: "هذه الصفحة غير موجودة.",
      captionEm: "مع الاعتذار.",
      goHome: "العودة للرئيسية",
      builtBy: "بُني بواسطة",
      builtWith: "بُني بـ",
    },

    // ---------------------------------------------------------------------------
    // THANK YOU (post-submission confirmation) - AR
    // ---------------------------------------------------------------------------
    thankYou: {
      meta: {
        title: "شكراً لكم | بشر وشركاؤه",
        description:
          "وصلت رسالتكم إلى بشر وشركاؤه. سيتواصل معكم المختصّ بطبيعة الملف.",
      },
      breadcrumb: "شكراً لكم",
      marquee: "شكراً لكم/",
      eyebrow: "وصلتنا رسالتكم",
      title: "شكراً لكم",
      captionPre: "وصلت رسالتكم إلينا. سيتواصل معكم المختصّ بطبيعة الملف",
      captionEm: "في أقرب وقت.",
      noteTitle: "ما الذي يحدث تالياً",
      note: "نتوقّع ردّاً أوّلياً خلال يوم عملٍ واحد. نراجع كل ملفٍّ قبل تحديد موعد جلسة القراءة.",
      goHome: "العودة للرئيسية",
      exploreWork: "استكشف أعمالنا",
      readInsights: "اقرأ مقالاتنا",
    },

    // ---------------------------------------------------------------------------
    // BLOG (insights) - AR
    // ---------------------------------------------------------------------------
    blog: {
      meta: {
        title: "مقالاتنا | بشر وشركاؤه | الرياض، المملكة العربية السعودية",
        description:
          "رؤى ميدانية في التحول الرقمي وتطوير البرمجيات والذكاء الاصطناعي والحوكمة والامتثال وبناء المشاريع داخل المنشآت السعودية.",
        keywords:
          "رؤى التحول الرقمي السعودي، تطوير البرمجيات في السعودية، استراتيجية الذكاء الاصطناعي في السعودية، الحوكمة والامتثال في السعودية، تحول رؤية 2030، مقالات استشارية سعودية، مدونة بشر وشركاؤه",
      },
      breadcrumb: "المقالات",
      title: "المقالات",
      subtitle:
        "تعمَّق في أحدث الاتجاهات، واستكشف رؤى القطاع، واطَّلع على إرشادات عملية",
      subtitleEm: "مُصمَّمة للنجاح في المشهد الرقمي المتطور.",
      searchPlaceholder: "بحث",
      discover: "/ استكشف",
      latestPosts: "/ أحدث المقالات",
      sponsored: "مُموَّل",
      about: "/ نبذة",
      aboutText: "تعمَّق في أحدث الاتجاهات،",
      aboutTextEm: "واستكشف رؤى قيِّمةً ومشورةً عملية.",
      followUs: "/ تابعنا",
      all: "الكل",
      authorTeam: "فريق التحرير",
      prev: "السابق",
      next: "التالي",
      bookMeeting: "احجز اجتماعاً",
    },
  },
};

export default translations;
