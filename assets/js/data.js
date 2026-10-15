/**
 * Site data — Yuehan Shi academic website V1
 * Bilingual (EN / ZH) content, fully CV-grounded.
 * Edit content here; the UI renders automatically.
 *
 * Provenance: every factual claim traces to the owner's CV
 * (see docs/content-provenance.md). Do not add unverified items.
 */

var I18N = {

  /* ================================================================
     ENGLISH
     ================================================================ */
  en: {

    profile: {
      name: "Yuehan Shi",
      eyebrow: "Researcher \u00b7 Mathematical Sciences \u00b7 Data Analytics",
      statement:
        "I research reliable machine learning \u2014 making models stay accurate and calibrated under distribution shift and uncertainty.",
      description:
        "Undergraduate researcher in Mathematical Sciences (Data Analytics Option) with a Computer Science minor at " +
        "Wenzhou-Kean University. My work spans test-time adaptation, uncertainty calibration, trustworthy " +
        "retrieval-augmented generation, and time-series / spatiotemporal learning.",
      email: "yuehan_shi@outlook.com",
      location: "Wenzhou, China",
    },

    heroMeta: [
      { label: "University", value: "Wenzhou-Kean University" },
      { label: "Class of", value: "2027 (expected)" },
    ],

    heroCTA: {
      primary: "View Publications",
      secondary: "Research Projects",
    },

    nav: [
      { label: "Updates", href: "#updates" },
      { label: "Publications", href: "#publications" },
      { label: "Research", href: "#research" },
      { label: "Projects", href: "#projects" },
      { label: "Education", href: "#education" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],

    sections: {
      updates: "01 / Updates",
      publications: "02 / Selected Publications",
      research: "03 / Research Interests",
      projects: "04 / Research Projects",
      education: "05 / Education & Honors",
      experience: "06 / Experience",
      skills: "07 / Skills",
    },

    headings: {
      updates: "Latest Updates",
      publications: "Selected Publications",
      research: "Research Interests",
      projects: "Research Projects",
      education: "Education & Honors",
      experience: "Experience",
      skills: "Technical Skills",
      contact: "Get in touch.",
      contactSub: "Research collaboration, graduate opportunities, or a simple hello.",
      contactBtn: "Say hello",
    },

    viewAllPublications: "View all publications",

    statusLabels: {
      "accepted": "Accepted",
      "under-review": "Under Review",
      "in-preparation": "In Preparation",
    },

    rankLabels: {
      "ccf-c": "CCF-C",
    },

    pubPage: {
      title: "Publications",
      subtitle: "All research output, grouped by status.",
      backToHome: "\u2190 Back to home",
      groups: {
        "accepted": "Accepted",
        "under-review": "Under Review",
        "in-preparation": "Manuscript in Preparation",
      },
      filters: {
        "all": "All",
        "accepted": "Accepted",
        "under-review": "Under Review",
        "in-preparation": "In Preparation",
      },
      countLabel: "publications",
    },

    latestUpdates: [
      {
        date: "Jul 2026",
        text: "Started RC-TTD \u2014 risk-calibrated test-time decisions for reliable RAG \u2014 as lead researcher.",
      },
      {
        date: "Jun 2026",
        text: "Co-founded Spartina Technology as Partner & AI Product Manager.",
      },
      {
        date: "2026",
        text: "UCDPA accepted to ACML 2026 (CCF-C).",
      },
      {
        date: "2026",
        text: "AdaPS-COME accepted to PRCV 2026 (CCF-C).",
      },
      {
        date: "2026",
        text: "Sea-level forecasting paper (TimeGAN-augmented ConvLSTM / ConvGRU / Mamba) under review at Ocean-Land-Atmosphere Research.",
      },
    ],

    researchInterests: [
      {
        title: "Reliable Machine Learning",
        detail: "Methods that stay accurate and well-calibrated under distribution shift, corruption, and noisy conditions.",
      },
      {
        title: "Test-Time Adaptation",
        detail: "Online adaptation of Vision Transformers; sample-wise routing between conservative adaptation and self-training.",
      },
      {
        title: "Uncertainty Calibration",
        detail: "Split-conformal prediction, evidential uncertainty, and prediction-set reliability for safe decisions.",
      },
      {
        title: "Trustworthy Retrieval-Augmented Generation",
        detail: "Risk-calibrated decision frameworks for RAG: re-retrieval, verification, answering, and abstention.",
      },
      {
        title: "Time-Series & Spatiotemporal Learning",
        detail: "Sea-level anomaly forecasting with CMIP6 data, TimeGAN augmentation, and explainable deep models.",
      },
    ],

    projects: [
      {
        name: "RC-TTD: Risk-Calibrated Test-Time Decisions for Reliable Retrieval-Augmented Generation",
        period: "Jul 2026 \u2014 Present",
        role: "Lead Researcher (Problem Design, Method Development, Experiment Oversight)",
        supervisor: "Supervisor: Gaurav Gupta \u00b7 WKU",
        summary:
          "Investigates RAG reliability failures under irrelevant or conflicting evidence and confident erroneous " +
          "generation, beyond conventional binary answer-or-abstain safeguards. Develops a two-stage risk-calibrated " +
          "decision framework combining split-conformal uncertainty screening with failure-specific routing for " +
          "re-retrieval, verification, answering, and abstention; evaluated on SciQ and SciFact using wrong-context " +
          "stress tests, ablations, and threshold sensitivity analysis.",
        highlights: [
          "Retained 99.6% / 100% answer rates on clean SciQ / SciFact.",
          "Under 50% wrong-context corruption, improved end-to-end accuracy by 2.0 / 3.0 pp.",
          "Re-retrieval corrected 36% of executed wrong-context SciFact cases.",
        ],
      },
      {
        name: "UCDPA: Uncertainty-Calibrated Dual-Path Test-Time Adaptation",
        period: "May 2026 \u2014 Sep 2026",
        role: "Lead Researcher (Algorithm Design & Experiments)",
        supervisor: "Supervisors: Gaurav Gupta & Guanchao Tong \u00b7 WKU",
        summary:
          "Extends AdaPS-COME to address its accuracy\u2013robustness trade-off with a sample-wise dual-path TTA " +
          "framework that routes samples between conservative adaptation and self-training using softmax confidence " +
          "and Dirichlet evidential certainty. Introduces a confidence\u2013certainty gate, loss normalization, EMA " +
          "class balancing, and uncertainty consistency; validated on ImageNet-C through ablation and efficiency analyses.",
        highlights: [
          "ViT-B/16 across 19 corruptions \u00d7 5 severity levels \u00d7 3 seeds.",
          "Top-1 accuracy 66.13% \u2192 69.20% (+3.07 pp) over COME.",
          "ECE 7.22% \u2192 3.48%; AUROC 84.34% \u2192 85.22%.",
        ],
      },
      {
        name: "AdaPS-COME: Adaptive Prediction-Set Reliability for Safe Test-Time Adaptation of Vision Transformers",
        period: "Feb 2026 \u2014 May 2026",
        role: "Team Leader (Problem Design, Method Development, Experiment Oversight)",
        supervisor: "Supervisor: Guanchao Tong \u00b7 WKU",
        summary:
          "Addresses sample-level reliability limitations in conservative TTA by extending COME with adaptive " +
          "prediction sets and soft reliability weighting, down-weighting ambiguous samples during online ViT adaptation.",
        highlights: [
          "On misclassified ImageNet-C samples: wrong confidence 0.451 \u2192 0.446.",
          "Wrong uncertainty 0.117 \u2192 0.119; uncertainty-based AUROC 0.712 \u2192 0.715.",
          "Achieved with a 0.65-pp accuracy trade-off.",
        ],
      },
      {
        name: "Enhancing Regional Sea-Level Prediction Using TimeGAN-Augmented ConvLSTM, ConvGRU, and Mamba Models with Explainability",
        period: "Oct 2025 \u2014 Jun 2026",
        role: "Core Researcher (Data Processing, Model Development, Experimental Analysis)",
        supervisor: "Supervisor: Guanchao Tong \u00b7 WKU",
        summary:
          "Built a global sea-level anomaly forecasting pipeline on 1993\u20132013 CMIP6 spatiotemporal data across " +
          "13 regions (including New York, Shanghai, Africa, and Antarctica). Processed 8 variables for 3 Antarctic " +
          "seas \u2014 missing-value checks, 2\u00d72 \u2192 8\u00d78 regridding, STL decomposition with trend + " +
          "residual prediction, and normalization. Trained ConvLSTM, ConvGRU, and Mamba with TimeGAN augmentation " +
          "ratios n = 0\u201310 on RTX 4090 (PyTorch).",
        highlights: [
          "Up to 76.3 / 76.9% RMSE and 80.0 / 78.1% MAE reduction vs. n = 0 for the RNN models.",
          "27.8% RMSE and 26.7% MAE reduction for Mamba; Mamba performs best at n = 0.",
        ],
      },
    ],

    education: {
      school: "Wenzhou-Kean University (WKU)",
      location: "Wenzhou, China",
      period: "Aug 2023 \u2014 Jun 2027 (expected)",
      degree: "B.S. in Mathematical Sciences \u2014 Data Analytics Option (Wenzhou-Kean University) & B.A. (Kean University)",
      minor: "Minor: Computer Science",
      coursesLabel: "Core courses",
      courses: "Machine Learning, Data Mining, Data Visualization, Big Data Computing, Data Structures, Probability and Statistics, Linear Algebra, Calculus",
      honorsLabel: "Honors & Awards",
      honors: [
        "Second-Class Dean's Scholarship (Dec 2025)",
        "Third-Class Dean's Scholarship (Dec 2024)",
        "Outstanding Student (Sep 2024)",
        "Excellent Performer, WKU Cultural Info and Media Association (Apr 2024)",
      ],
    },

    experience: {
      industryLabel: "Industry & Entrepreneurship",
      campusLabel: "Campus Involvement",
      items: [
        {
          org: "Spartina Technology",
          location: "Wenzhou",
          title: "Partner, AI Product Manager",
          period: "Jun 2026 \u2014 Present",
          group: "industry",
          bullets: [
            "Co-founded a 7-person technology startup supported by WKU's innovation space and Prof. Tong.",
            "Conducted offline demand research for cross-border e-commerce manufacturing clients (MERSCO); translated business needs into data and AI system solutions.",
            "Developed an intelligent customer-service agent using an open-source LLM and RAG; integrated business data for demand forecasting, rolling backtesting, inventory-risk monitoring, and replenishment recommendations.",
          ],
        },
        {
          org: "Jiangsu Xinyi Software Co., Ltd.",
          location: "Xinxiang, China",
          title: "HIS Software Implementation Engineer \u00b7 Information Engineering Department, Client Hospital",
          period: "Dec 2025 \u2014 Jan 2026",
          group: "industry",
          bullets: [
            "Developed data queries and business reports for a Hospital Information System (HIS) using MySQL to retrieve and analyze outpatient, inpatient, and diagnostic records.",
            "Worked with healthcare business workflows and information-system applications, supporting system deployment and functional optimization.",
          ],
        },
        {
          org: "WKU Student Affairs Department",
          location: "Wenzhou, China",
          title: "Student Assistant",
          period: "Feb 2024 \u2014 Jun 2024",
          group: "campus",
          bullets: [
            "Organized administrative materials and responded to student and visitor inquiries regarding university policies, departmental responsibilities, and procedures.",
          ],
        },
        {
          org: "WKU Cultural Info and Media Association",
          location: "Wenzhou, China",
          title: "Member \u00b7 Event Operations",
          period: "Dec 2023 \u2014 Jun 2024",
          group: "campus",
          bullets: [
            "Supported planning and on-site operations for a 1,000-person campus event hosting a Kean University delegation, including booth coordination, materials, and reimbursement.",
          ],
        },
      ],
    },

    skills: [
      { category: "Programming Languages", items: "Python, R, Java, SQL" },
      { category: "Machine Learning & Deep Learning", items: "PyTorch, scikit-learn, XGBoost; RNNs, CNNs, Transformers" },
      { category: "Data Analysis & Applications", items: "NumPy, Pandas, Matplotlib; Statistical Inference, Exploratory Data Analysis, Time-Series Forecasting, Computer Vision, RAG" },
      { category: "Tools", items: "Linux, VSCode, GitHub, LaTeX, draw.io" },
    ],

    publications: {
      selected: [],
    },

    footer: "Designed & built by Yuehan Shi. Content grounded in my CV.",

    links: {
      github: { label: "GitHub", url: "https://github.com/shiyue105" },
    },
  },

  /* ================================================================
     CHINESE
     ================================================================ */
  zh: {

    profile: {
      name: "Yuehan Shi",
      eyebrow: "\u7814\u7a76\u8005 \u00b7 \u6570\u5b66\u79d1\u5b66 \u00b7 \u6570\u636e\u5206\u6790",
      statement:
        "\u6211\u7814\u7a76\u53ef\u9760\u673a\u5668\u5b66\u4e60\u2014\u2014\u8ba9\u6a21\u578b\u5728\u5206\u5e03\u504f\u79fb\u4e0e\u4e0d\u786e\u5b9a\u6761\u4ef6\u4e0b\u4ecd\u7136\u51c6\u786e\u4e14\u6821\u51c6\u3002",
      description:
        "\u6e29\u5dde\u80af\u6069\u5927\u5b66\u6570\u5b66\u79d1\u5b66\uff08\u6570\u636e\u5206\u6790\u65b9\u5411\uff09\u672c\u79d1\u751f\uff0c\u8f85\u4fee\u8ba1\u7b97\u673a\u79d1\u5b66\u3002" +
        "\u7814\u7a76\u65b9\u5411\u6db5\u76d6\u6d4b\u8bd5\u65f6\u81ea\u9002\u5e94\u3001\u4e0d\u786e\u5b9a\u6027\u6821\u51c6\u3001\u53ef\u4fe1\u68c0\u7d22\u589e\u5f3a\u751f\u6210\uff08RAG\uff09\u4ee5\u53ca\u65f6\u95f4\u5e8f\u5217\u4e0e\u65f6\u7a7a\u5b66\u4e60\u3002",
      email: "yuehan_shi@outlook.com",
      location: "\u4e2d\u56fd\u6e29\u5dde",
    },

    heroMeta: [
      { label: "\u5c31\u8bfb\u9662\u6821", value: "\u6e29\u5dde\u80af\u6069\u5927\u5b66" },
      { label: "\u9884\u8ba1\u6bd5\u4e1a", value: "2027 \u5e74" },
    ],

    heroCTA: {
      primary: "\u67e5\u770b\u8bba\u6587",
      secondary: "\u7814\u7a76\u9879\u76ee",
    },

    nav: [
      { label: "\u6700\u65b0\u52a8\u6001", href: "#updates" },
      { label: "\u8bba\u6587", href: "#publications" },
      { label: "\u7814\u7a76\u65b9\u5411", href: "#research" },
      { label: "\u7814\u7a76\u9879\u76ee", href: "#projects" },
      { label: "\u6559\u80b2\u80cc\u666f", href: "#education" },
      { label: "\u5b9e\u8df5\u7ecf\u5386", href: "#experience" },
      { label: "\u8054\u7cfb", href: "#contact" },
    ],

    sections: {
      updates: "01 / \u6700\u65b0\u52a8\u6001",
      publications: "02 / \u7cbe\u9009\u8bba\u6587",
      research: "03 / \u7814\u7a76\u65b9\u5411",
      projects: "04 / \u7814\u7a76\u9879\u76ee",
      education: "05 / \u6559\u80b2\u4e0e\u8363\u8a89",
      experience: "06 / \u5b9e\u8df5\u7ecf\u5386",
      skills: "07 / \u6280\u80fd",
    },

    headings: {
      updates: "\u6700\u65b0\u52a8\u6001",
      publications: "\u7cbe\u9009\u8bba\u6587",
      research: "\u7814\u7a76\u65b9\u5411",
      projects: "\u7814\u7a76\u9879\u76ee",
      education: "\u6559\u80b2\u4e0e\u8363\u8a89",
      experience: "\u5b9e\u8df5\u7ecf\u5386",
      skills: "\u4e13\u4e1a\u6280\u80fd",
      contact: "\u6b22\u8fce\u4ea4\u6d41\u3002",
      contactSub: "\u79d1\u7814\u5408\u4f5c\u3001\u5b66\u672f\u673a\u4f1a\uff0c\u6216\u53ea\u662f\u6253\u4e2a\u62db\u547c\u3002",
      contactBtn: "\u53d1\u90ae\u4ef6",
    },

    viewAllPublications: "\u67e5\u770b\u5168\u90e8\u8bba\u6587",

    statusLabels: {
      "accepted": "\u5df2\u63a5\u6536",
      "under-review": "\u5ba1\u7a3f\u4e2d",
      "in-preparation": "\u64b0\u5199\u4e2d",
    },

    rankLabels: {
      "ccf-c": "CCF-C",
    },

    pubPage: {
      title: "\u8bba\u6587\u53d1\u8868",
      subtitle: "\u5168\u90e8\u7814\u7a76\u6210\u679c\uff0c\u6309\u72b6\u6001\u5206\u7ec4\u3002",
      backToHome: "\u2190 \u8fd4\u56de\u9996\u9875",
      groups: {
        "accepted": "\u5df2\u63a5\u6536",
        "under-review": "\u5ba1\u7a3f\u4e2d",
        "in-preparation": "\u64b0\u5199\u4e2d\u7a3f\u4ef6",
      },
      filters: {
        "all": "\u5168\u90e8",
        "accepted": "\u5df2\u63a5\u6536",
        "under-review": "\u5ba1\u7a3f\u4e2d",
        "in-preparation": "\u64b0\u5199\u4e2d",
      },
      countLabel: "\u7bc7\u8bba\u6587",
    },

    latestUpdates: [
      {
        date: "2026 \u5e74 7 \u6708",
        text: "\u4f5c\u4e3a\u7b2c\u4e00\u7814\u7a76\u8005\u542f\u52a8 RC-TTD \u9879\u76ee\u2014\u2014\u9762\u5411\u53ef\u9760 RAG \u7684\u98ce\u9669\u6821\u51c6\u6d4b\u8bd5\u65f6\u51b3\u7b56\u3002",
      },
      {
        date: "2026 \u5e74 6 \u6708",
        text: "\u5171\u540c\u521b\u7acb\u7c73\u8349\u79d1\u6280\uff0c\u62c5\u4efb\u5408\u4f19\u4eba\u517c AI \u4ea7\u54c1\u7ecf\u7406\u3002",
      },
      {
        date: "2026 \u5e74",
        text: "\u8bba\u6587 UCDPA \u88ab ACML 2026\uff08CCF-C\uff09\u63a5\u6536\u3002",
      },
      {
        date: "2026 \u5e74",
        text: "\u8bba\u6587 AdaPS-COME \u88ab PRCV 2026\uff08CCF-C\uff09\u63a5\u6536\u3002",
      },
      {
        date: "2026 \u5e74",
        text: "\u6d77\u5e73\u9762\u9884\u6d4b\u8bba\u6587\uff08TimeGAN \u589e\u5f3a\u7684 ConvLSTM / ConvGRU / Mamba\uff09\u5728 Ocean-Land-Atmosphere Research \u5ba1\u7a3f\u4e2d\u3002",
      },
    ],

    researchInterests: [
      {
        title: "\u53ef\u9760\u673a\u5668\u5b66\u4e60",
        detail: "\u8ba9\u6a21\u578b\u5728\u5206\u5e03\u504f\u79fb\u3001\u6570\u636e\u6c61\u67d3\u4e0e\u566a\u58f0\u6761\u4ef6\u4e0b\u4ecd\u7136\u4fdd\u6301\u51c6\u786e\u4e0e\u826f\u597d\u6821\u51c6\u3002",
      },
      {
        title: "\u6d4b\u8bd5\u65f6\u81ea\u9002\u5e94",
        detail: "Vision Transformer \u7684\u5728\u7ebf\u81ea\u9002\u5e94\uff1b\u5728\u4fdd\u5b88\u81ea\u9002\u5e94\u4e0e\u81ea\u8bad\u7ec3\u4e4b\u95f4\u8fdb\u884c\u6837\u672c\u7ea7\u8def\u7531\u3002",
      },
      {
        title: "\u4e0d\u786e\u5b9a\u6027\u6821\u51c6",
        detail: "\u5206\u5272\u5171\u5f62\u9884\u6d4b\u3001\u8bc1\u636e\u6df1\u5ea6\u5b66\u4e60\u4e0e\u9884\u6d4b\u96c6\u53ef\u9760\u6027\uff0c\u652f\u6491\u5b89\u5168\u51b3\u7b56\u3002",
      },
      {
        title: "\u53ef\u4fe1\u68c0\u7d22\u589e\u5f3a\u751f\u6210",
        detail: "\u9762\u5411 RAG \u7684\u98ce\u9669\u6821\u51c6\u51b3\u7b56\u6846\u67b6\uff1a\u91cd\u65b0\u68c0\u7d22\u3001\u9a8c\u8bc1\u3001\u56de\u7b54\u4e0e\u5f03\u6743\u3002",
      },
      {
        title: "\u65f6\u95f4\u5e8f\u5217\u4e0e\u65f6\u7a7a\u5b66\u4e60",
        detail: "\u57fa\u4e8e CMIP6 \u6570\u636e\u7684\u6d77\u5e73\u9762\u5f02\u5e38\u9884\u6d4b\uff0c\u7ed3\u5408 TimeGAN \u6570\u636e\u589e\u5f3a\u4e0e\u53ef\u89e3\u91ca\u6df1\u5ea6\u6a21\u578b\u3002",
      },
    ],

    projects: [
      {
        name: "RC-TTD\uff1a\u9762\u5411\u53ef\u9760\u68c0\u7d22\u589e\u5f3a\u751f\u6210\u7684\u98ce\u9669\u6821\u51c6\u6d4b\u8bd5\u65f6\u51b3\u7b56",
        period: "2026 \u5e74 7 \u6708 \u2014 \u81f3\u4eca",
        role: "\u7b2c\u4e00\u7814\u7a76\u8005\uff08\u95ee\u9898\u8bbe\u8ba1\u3001\u65b9\u6cd5\u7814\u53d1\u3001\u5b9e\u9a8c\u76d1\u7763\uff09",
        supervisor: "\u5bfc\u5e08\uff1aGaurav Gupta \u00b7 \u6e29\u80af\u5927\u5b66",
        summary:
          "\u7814\u7a76 RAG \u5728\u65e0\u5173\u6216\u51b2\u7a81\u8bc1\u636e\u4e0b\u7684\u53ef\u9760\u6027\u5931\u6548\u4e0e\u81ea\u4fe1\u4f46\u9519\u8bef\u7684\u751f\u6210\uff0c\u8d85\u8d8a\u4f20\u7edf\u7684\u201c\u56de\u7b54\u6216\u5f03\u6743\u201d\u4e8c\u5143\u4fdd\u62a4\u3002" +
          "\u63d0\u51fa\u4e24\u9636\u6bb5\u98ce\u9669\u6821\u51c6\u51b3\u7b56\u6846\u67b6\uff1a\u5229\u7528\u5206\u5272\u5171\u5f62\u4e0d\u786e\u5b9a\u6027\u7b5b\u67e5\u4e0e\u9488\u5bf9\u6027\u8def\u7531\uff08\u91cd\u65b0\u68c0\u7d22\u3001\u9a8c\u8bc1\u3001\u56de\u7b54\u3001\u5f03\u6743\uff09\uff1b" +
          "\u5728 SciQ \u4e0e SciFact \u4e0a\u901a\u8fc7\u9519\u8bef\u4e0a\u4e0b\u6587\u538b\u529b\u6d4b\u8bd5\u3001\u6d88\u878d\u5b9e\u9a8c\u4e0e\u9608\u503c\u654f\u611f\u6027\u5206\u6790\u8fdb\u884c\u8bc4\u4f30\u3002",
        highlights: [
          "\u5e72\u51c0 SciQ / SciFact \u4e0a\u4fdd\u6301 99.6% / 100% \u56de\u7b54\u7387\u3002",
          "\u5728 50% \u9519\u8bef\u4e0a\u4e0b\u6587\u6c61\u67d3\u4e0b\uff0c\u7aef\u5230\u7aef\u51c6\u786e\u7387\u63d0\u5347 2.0 / 3.0 \u4e2a\u767e\u5206\u70b9\u3002",
          "\u91cd\u65b0\u68c0\u7d22\u4fee\u6b63\u4e86 36% \u7684\u5df2\u6267\u884c\u9519\u8bef\u4e0a\u4e0b\u6587\u7684 SciFact \u6848\u4f8b\u3002",
        ],
      },
      {
        name: "UCDPA\uff1a\u4e0d\u786e\u5b9a\u6027\u6821\u51c6\u7684\u53cc\u8def\u6d4b\u8bd5\u65f6\u81ea\u9002\u5e94",
        period: "2026 \u5e74 5 \u6708 \u2014 9 \u6708",
        role: "\u7b2c\u4e00\u7814\u7a76\u8005\uff08\u7b97\u6cd5\u8bbe\u8ba1\u4e0e\u5b9e\u9a8c\uff09",
        supervisor: "\u5bfc\u5e08\uff1aGaurav Gupta \u4e0e Guanchao Tong \u00b7 \u6e29\u80af\u5927\u5b66",
        summary:
          "\u9488\u5bf9 AdaPS-COME \u7684\u51c6\u786e\u7387\u2013\u9c81\u68d2\u6027\u6743\u8861\u95ee\u9898\uff0c\u63d0\u51fa\u6837\u672c\u7ea7\u53cc\u8def TTA \u6846\u67b6\uff1a" +
          "\u4f9d\u636e softmax \u7f6e\u4fe1\u5ea6\u4e0e Dirichlet \u8bc1\u636e\u786e\u5b9a\u6027\u5728\u4fdd\u5b88\u81ea\u9002\u5e94\u4e0e\u81ea\u8bad\u7ec3\u4e4b\u95f4\u8def\u7531\u6837\u672c\u3002" +
          "\u5f15\u5165\u7f6e\u4fe1\u5ea6\u2013\u786e\u5b9a\u6027\u95e8\u63a7\u3001\u635f\u5931\u5f52\u4e00\u5316\u3001EMA \u7c7b\u5e73\u8861\u4e0e\u4e0d\u786e\u5b9a\u6027\u4e00\u81f4\u6027\uff1b\u5728 ImageNet-C \u4e0a\u901a\u8fc7\u6d88\u878d\u4e0e\u6548\u7387\u5206\u6790\u9a8c\u8bc1\u3002",
        highlights: [
          "ViT-B/16\uff0c\u8986\u76d6 19 \u79cd\u6c61\u67d3 \u00d7 5 \u4e2a\u4e25\u91cd\u7b49\u7ea7 \u00d7 3 \u4e2a\u968f\u673a\u79cd\u5b50\u3002",
          "Top-1 \u51c6\u786e\u7387\u8f83 COME \u4ece 66.13% \u63d0\u5347\u81f3 69.20%\uff08+3.07 \u4e2a\u767e\u5206\u70b9\uff09\u3002",
          "ECE \u4ece 7.22% \u964d\u81f3 3.48%\uff1bAUROC \u4ece 84.34% \u63d0\u5347\u81f3 85.22%\u3002",
        ],
      },
      {
        name: "AdaPS-COME\uff1a\u9762\u5411 Vision Transformer \u5b89\u5168\u6d4b\u8bd5\u65f6\u81ea\u9002\u5e94\u7684\u81ea\u9002\u5e94\u9884\u6d4b\u96c6\u53ef\u9760\u6027",
        period: "2026 \u5e74 2 \u6708 \u2014 5 \u6708",
        role: "\u56e2\u961f\u8d1f\u8d23\u4eba\uff08\u95ee\u9898\u8bbe\u8ba1\u3001\u65b9\u6cd5\u7814\u53d1\u3001\u5b9e\u9a8c\u76d1\u7763\uff09",
        supervisor: "\u5bfc\u5e08\uff1aGuanchao Tong \u00b7 \u6e29\u80af\u5927\u5b66",
        summary:
          "\u9488\u5bf9\u4fdd\u5b88\u578b TTA \u7684\u6837\u672c\u7ea7\u53ef\u9760\u6027\u5c40\u9650\uff0c\u5728 COME \u57fa\u7840\u4e0a\u5f15\u5165\u81ea\u9002\u5e94\u9884\u6d4b\u96c6\u4e0e\u8f6f\u53ef\u9760\u6027\u52a0\u6743\uff0c" +
          "\u5728\u5728\u7ebf ViT \u81ea\u9002\u5e94\u8fc7\u7a0b\u4e2d\u964d\u4f4e\u6a21\u7cca\u6837\u672c\u7684\u6743\u91cd\u3002",
        highlights: [
          "\u5728 ImageNet-C \u9519\u5206\u7c7b\u6837\u672c\u4e0a\uff1a\u9519\u8bef\u7f6e\u4fe1\u5ea6 0.451 \u2192 0.446\u3002",
          "\u9519\u8bef\u4e0d\u786e\u5b9a\u6027 0.117 \u2192 0.119\uff1b\u57fa\u4e8e\u4e0d\u786e\u5b9a\u6027\u7684 AUROC 0.712 \u2192 0.715\u3002",
          "\u4ee3\u4ef7\u4e3a 0.65 \u4e2a\u767e\u5206\u70b9\u7684\u51c6\u786e\u7387\u635f\u5931\u3002",
        ],
      },
      {
        name: "\u57fa\u4e8e TimeGAN \u589e\u5f3a\u7684 ConvLSTM\u3001ConvGRU \u4e0e Mamba \u6a21\u578b\u53ca\u5176\u53ef\u89e3\u91ca\u6027\u7684\u533a\u57df\u6d77\u5e73\u9762\u9884\u6d4b",
        period: "2025 \u5e74 10 \u6708 \u2014 2026 \u5e74 6 \u6708",
        role: "\u6838\u5fc3\u7814\u7a76\u8005\uff08\u6570\u636e\u5904\u7406\u3001\u6a21\u578b\u5f00\u53d1\u3001\u5b9e\u9a8c\u5206\u6790\uff09",
        supervisor: "\u5bfc\u5e08\uff1aGuanchao Tong \u00b7 \u6e29\u80af\u5927\u5b66",
        summary:
          "\u57fa\u4e8e 1993\u20132013 \u5e74 CMIP6 \u65f6\u7a7a\u6570\u636e\uff0c\u6784\u5efa\u8986\u76d6 13 \u4e2a\u533a\u57df\uff08\u542b\u7ebd\u7ea6\u3001\u4e0a\u6d77\u3001\u975e\u6d32\u3001\u5357\u6781\u7b49\uff09\u7684\u5168\u7403\u6d77\u5e73\u9762\u5f02\u5e38\u9884\u6d4b\u6d41\u6c34\u7ebf\u3002" +
          "\u5904\u7406\u5357\u6781 3 \u4e2a\u6d77\u57df\u7684 8 \u4e2a\u53d8\u91cf\uff1a\u7f3a\u5931\u503c\u68c0\u67e5\u30012\u00d72 \u2192 8\u00d78 \u533a\u57df\u91cd\u683c\u70b9\u3001STL \u5206\u89e3\u4e0e\u8d8b\u52bf+\u6b8b\u5dee\u9884\u6d4b\u3001\u5f52\u4e00\u5316\u3002" +
          "\u5728 RTX 4090\uff08PyTorch\uff09\u4e0a\u8bad\u7ec3 ConvLSTM\u3001ConvGRU \u4e0e Mamba\uff0cTimeGAN \u589e\u5f3a\u6bd4\u4f8b n = 0\u201310\u3002",
        highlights: [
          "\u76f8\u6bd4 n = 0\uff0cRNN \u7c7b\u6a21\u578b RMSE \u6700\u591a\u964d\u4f4e 76.3 / 76.9%\uff0cMAE \u6700\u591a\u964d\u4f4e 80.0 / 78.1%\u3002",
          "Mamba \u7684 RMSE \u964d\u4f4e 27.8%\u3001MAE \u964d\u4f4e 26.7%\uff1bn = 0 \u65f6 Mamba \u9884\u6d4b\u6548\u679c\u6700\u4f73\u3002",
        ],
      },
    ],

    education: {
      school: "\u6e29\u5dde\u80af\u6069\u5927\u5b66\uff08WKU\uff09",
      location: "\u4e2d\u56fd\u6e29\u5dde",
      period: "2023 \u5e74 8 \u6708 \u2014 2027 \u5e74 6 \u6708\uff08\u9884\u8ba1\uff09",
      degree: "\u7406\u5b66\u5b66\u58eb\uff08\u6570\u5b66\u79d1\u5b66\u2014\u6570\u636e\u5206\u6790\u65b9\u5411\uff0c\u6e29\u5dde\u80af\u6069\u5927\u5b66\uff09\u4e0e\u6587\u5b66\u5b66\u58eb\uff08\u7f8e\u56fd\u80af\u6069\u5927\u5b66\uff09\u53cc\u5b66\u4f4d",
      minor: "\u8f85\u4fee\uff1a\u8ba1\u7b97\u673a\u79d1\u5b66",
      coursesLabel: "\u6838\u5fc3\u8bfe\u7a0b",
      courses: "\u673a\u5668\u5b66\u4e60\u3001\u6570\u636e\u6316\u6398\u3001\u6570\u636e\u53ef\u89c6\u5316\u3001\u5927\u6570\u636e\u8ba1\u7b97\u3001\u6570\u636e\u7ed3\u6784\u3001\u6982\u7387\u8bba\u4e0e\u6570\u7406\u7edf\u8ba1\u3001\u7ebf\u6027\u4ee3\u6570\u3001\u5fae\u79ef\u5206",
      honorsLabel: "\u8363\u8a89\u4e0e\u5956\u9879",
      honors: [
        "\u4e8c\u7b49\u9662\u957f\u5956\u5b66\u91d1\uff082025 \u5e74 12 \u6708\uff09",
        "\u4e09\u7b49\u9662\u957f\u5956\u5b66\u91d1\uff082024 \u5e74 12 \u6708\uff09",
        "\u4f18\u79c0\u5b66\u751f\uff082024 \u5e74 9 \u6708\uff09",
        "WKU \u6587\u5316\u4fe1\u606f\u4e0e\u5a92\u4f53\u534f\u4f1a\u4f18\u79c0\u6210\u5458\uff082024 \u5e74 4 \u6708\uff09",
      ],
    },

    experience: {
      industryLabel: "\u4ea7\u4e1a\u4e0e\u521b\u4e1a",
      campusLabel: "\u6821\u56ed\u53c2\u4e0e",
      items: [
        {
          org: "\u7c73\u8349\u79d1\u6280\uff08Spartina Technology\uff09",
          location: "\u6e29\u5dde",
          title: "\u5408\u4f19\u4eba\uff0cAI \u4ea7\u54c1\u7ecf\u7406",
          period: "2026 \u5e74 6 \u6708 \u2014 \u81f3\u4eca",
          group: "industry",
          bullets: [
            "\u5171\u540c\u521b\u7acb\u83b7\u6e29\u80af\u5927\u5b66\u521b\u65b0\u7a7a\u95f4\u4e0e\u5168\u8001\u5e08\u652f\u6301\u7684 7 \u4eba\u79d1\u6280\u521d\u521b\u56e2\u961f\u3002",
            "\u9762\u5411\u8de8\u5883\u7535\u5546\u5236\u9020\u4e1a\u5ba2\u6237\uff08MERSCO\uff09\u5f00\u5c55\u7ebf\u4e0b\u9700\u6c42\u8c03\u7814\uff0c\u5c06\u4e1a\u52a1\u9700\u6c42\u8f6c\u5316\u4e3a\u6570\u636e\u4e0e AI \u7cfb\u7edf\u65b9\u6848\u3002",
            "\u57fa\u4e8e\u5f00\u6e90 LLM \u4e0e RAG \u5f00\u53d1\u667a\u80fd\u5ba2\u670d\u4ee3\u7406\uff1b\u6574\u5408\u4e1a\u52a1\u6570\u636e\u5b9e\u73b0\u9700\u6c42\u9884\u6d4b\u3001\u6eda\u52a8\u56de\u6d4b\u3001\u5e93\u5b58\u98ce\u9669\u76d1\u63a7\u4e0e\u8865\u8d27\u5efa\u8bae\u3002",
          ],
        },
        {
          org: "\u6c5f\u82cf\u65b0\u4e00\u8f6f\u4ef6\u6709\u9650\u516c\u53f8",
          location: "\u4e2d\u56fd\u65b0\u4e61",
          title: "HIS \u8f6f\u4ef6\u5b9e\u65bd\u5de5\u7a0b\u5e08 \u00b7 \u4fe1\u606f\u5de5\u7a0b\u90e8\uff08\u5ba2\u6237\u533b\u9662\uff09",
          period: "2025 \u5e74 12 \u6708 \u2014 2026 \u5e74 1 \u6708",
          group: "industry",
          bullets: [
            "\u4f7f\u7528 MySQL \u4e3a\u533b\u9662\u4fe1\u606f\u7cfb\u7edf\uff08HIS\uff09\u5f00\u53d1\u6570\u636e\u67e5\u8be2\u4e0e\u4e1a\u52a1\u62a5\u8868\uff0c\u8986\u76d6\u95e8\u8bca\u3001\u4f4f\u9662\u4e0e\u8bca\u65ad\u8bb0\u5f55\u3002",
            "\u719f\u6089\u533b\u7597\u4e1a\u52a1\u6d41\u7a0b\u4e0e\u4fe1\u606f\u7cfb\u7edf\u5e94\u7528\uff0c\u652f\u6301\u7cfb\u7edf\u90e8\u7f72\u4e0e\u529f\u80fd\u4f18\u5316\u3002",
          ],
        },
        {
          org: "\u6e29\u80af\u5927\u5b66\u5b66\u751f\u4e8b\u52a1\u90e8",
          location: "\u4e2d\u56fd\u6e29\u5dde",
          title: "\u5b66\u751f\u52a9\u7406",
          period: "2024 \u5e74 2 \u6708 \u2014 6 \u6708",
          group: "campus",
          bullets: [
            "\u6574\u7406\u884c\u653f\u6750\u6599\uff0c\u89e3\u7b54\u5e08\u751f\u4e0e\u8bbf\u5ba2\u5173\u4e8e\u5b66\u6821\u653f\u7b56\u3001\u90e8\u95e8\u804c\u8d23\u4e0e\u529e\u4e8b\u6d41\u7a0b\u7684\u54a8\u8be2\u3002",
          ],
        },
        {
          org: "\u6e29\u80af\u5927\u5b66\u6587\u5316\u4fe1\u606f\u4e0e\u5a92\u4f53\u534f\u4f1a",
          location: "\u4e2d\u56fd\u6e29\u5dde",
          title: "\u6210\u5458 \u00b7 \u6d3b\u52a8\u8fd0\u8425",
          period: "2023 \u5e74 12 \u6708 \u2014 2024 \u5e74 6 \u6708",
          group: "campus",
          bullets: [
            "\u53c2\u4e0e\u63a5\u5f85\u7f8e\u56fd\u80af\u6069\u5927\u5b66\u8bbf\u95ee\u56e2\u7684 1000 \u4eba\u6821\u56ed\u6d3b\u52a8\u7684\u7b56\u5212\u4e0e\u73b0\u573a\u8fd0\u8425\uff0c\u5305\u62ec\u644a\u4f4d\u534f\u8c03\u3001\u7269\u6599\u4e0e\u62a5\u9500\u3002",
          ],
        },
      ],
    },

    skills: [
      { category: "\u7f16\u7a0b\u8bed\u8a00", items: "Python\u3001R\u3001Java\u3001SQL" },
      { category: "\u673a\u5668\u5b66\u4e60\u4e0e\u6df1\u5ea6\u5b66\u4e60", items: "PyTorch\u3001scikit-learn\u3001XGBoost\uff1bRNN\u3001CNN\u3001Transformer" },
      { category: "\u6570\u636e\u5206\u6790\u4e0e\u5e94\u7528", items: "NumPy\u3001Pandas\u3001Matplotlib\uff1b\u7edf\u8ba1\u63a8\u65ad\u3001\u63a2\u7d22\u6027\u6570\u636e\u5206\u6790\u3001\u65f6\u95f4\u5e8f\u5217\u9884\u6d4b\u3001\u8ba1\u7b97\u673a\u89c6\u89c9\u3001RAG" },
      { category: "\u5de5\u5177", items: "Linux\u3001VSCode\u3001GitHub\u3001LaTeX\u3001draw.io" },
    ],

    publications: {
      selected: [],
    },

    footer: "\u7531 Yuehan Shi \u8bbe\u8ba1\u4e0e\u6784\u5efa\u3002\u5185\u5bb9\u57fa\u4e8e\u672c\u4eba\u7b80\u5386\u3002",

    links: {
      github: { label: "GitHub", url: "https://github.com/shiyue105" },
    },
  },
};

/* ================================================================
   Shared data (language-independent)
   ================================================================ */
var SHARED = {
  location: "Wenzhou, China",
  socialOrder: ["github"],
  sideSocialOrder: ["github"],
};

/* Detect browser language for initial display */
var DEFAULT_LANG = (function () {
  var saved = null;
  try { saved = localStorage.getItem("site-lang"); } catch (e) { /* noop */ }
  if (saved === "en" || saved === "zh") return saved;
  var browser = (navigator.language || "en").toLowerCase();
  return browser.indexOf("zh") === 0 ? "zh" : "en";
})();

window.I18N = I18N;
window.SHARED = SHARED;
window.DEFAULT_LANG = DEFAULT_LANG;
