// ============================================================
// Yang Junhyuk · Portfolio Content (KO + EN)
// ============================================================

window.PORTFOLIO_DATA = {

  meta: {
    name: { ko: "양준혁", en: "Yang, Junhyuk" },
    nameRoman: "YANG, JUNHYUK",
    role: {
      ko: "AI-Native 스마트 총무 전문가",
      en: "AI-Native General Affairs Specialist"
    },
    headline: {
      ko: ["더 똑똑한 사무실의", "형태."],
      en: ["The shape of a", "smarter office."]
    },
    blurb: {
      ko: "8년의 총무 실무 위에 AI를 얹어, 비용·공간·계약의 흐름을 다시 설계해 왔습니다. 2023년 15.3억의 연간 지출은 2025년 5.3억으로 줄었고, 500명 규모의 사무 환경은 데이터로 운영되는 조직으로 진화하고 있습니다.",
      en: "Eight years of general affairs practice, layered with AI — redesigning the flow of cost, space, and contracts. Annual spend of ₩1.53B in 2023 fell to ₩530M in 2025, and a 500-person office is evolving into a data-driven operation."
    },
    location: { ko: "인천 서구 · 서울권 가능", en: "Incheon, Seoul Metro Area" },
    email: "wnsgur8036@naver.com",
    phone: "010 4057 8036",
    born: { ko: "1993 · 32세", en: "1993 · age 32" },
    current: { ko: "코나아이㈜ HR팀 · 과장", en: "KONA I · HR Team · Manager" },
    tenure: { ko: "총 경력 8년 6개월", en: "8 years 6 months" },
    salary: { ko: "회사 내규에 따름", en: "Per company policy" },
    address: { ko: "인천 서구 이음3로", en: "Eum 3-ro, Seo-gu, Incheon" }
  },

  // ------------------------------------------------------------
  // Hero KPIs
  // ------------------------------------------------------------
  kpis: [
    {
      label: { ko: "경력", en: "Career" },
      value: "8.6",
      unit: { ko: "년", en: "yrs" },
      sub: { ko: "2017.11 → 재직중", en: "2017.11 → Present" }
    },
    {
      label: { ko: "연간 비용 절감", en: "Cost Reduction" },
      value: "10.1",
      unit: { ko: "억", en: "₩B" },
      sub: { ko: "−65.7% vs FY2023", en: "−65.7% vs FY2023" },
      accent: true
    },
    {
      label: { ko: "사무 공간 설계", en: "Workforce Designed" },
      value: "500",
      unit: { ko: "명", en: "ppl" },
      sub: { ko: "코나아이 500명", en: "KONA I 500 ppl" }
    },
    {
      label: { ko: "AI 도입 생산성", en: "AI Productivity" },
      value: "60",
      unit: { ko: "%↑", en: "%↑" },
      sub: { ko: "문서·검토 업무", en: "Documents & Reviews" }
    }
  ],

  // ------------------------------------------------------------
  // About narrative
  // ------------------------------------------------------------
  about: {
    title: { ko: "프로필", en: "Profile" },
    quote: {
      ko: "저는 단순한 관리가 아닌, 운영 효율과 재무 성과, 그리고 구성원 경험을 동시에 끌어올리는 총무 전문가입니다.",
      en: "Not just administration — I lift operational efficiency, financial performance, and employee experience together."
    },
    quoteBy: { ko: "양준혁, 자기소개서 中—", en: "Yang Junhyuk, from cover letter" },
    paragraphs: {
      ko: [
        "이마트에서 총무의 기본기를 익히고, SSG.COM에서 1,000명 규모의 대규모 운영을 경험했습니다. 코로나 시기에는 방역과 좌석 재배치를, 자동화 물류센터에서는 스페어 파트와 보냉 박스 단가까지 — 총무가 닿는 모든 비용의 결을 직접 만져왔습니다.",
        "2023년 코나아이로 옮긴 후에는 첫 해의 지출 내역을 전수 조사부터 시작했습니다. 낭비 요소를 찾고, Top 5 항목을 집중 개선하고, 2년 만에 운영 예산을 23년의 34.3% 수준까지 경량화했습니다. 그 과정에서 AI는 도구가 아니라 워크플로가 되었습니다.",
        "검토와 보고서 작성에 LLM, 시장 조사에 Perplexity와 Gpt, 시각화에 Claude와 Napkin, 그리고 직접 만든 운영 대시보드까지 — 총무의 전 주기를 AI로 다시 설계하고 있습니다. 안정적이고 효율적인 경영지원 체계를 함께 구현할 자리를 찾고 있습니다."
      ],
      en: [
        "I learned the fundamentals at E-MART, then ran operations at SSG.COM's 1,000-person headquarters. Through COVID I handled sanitation and seat reassignment; in the automated logistics center I worked down spare-parts and cold-box unit costs. I have personally touched every grain of cost that general affairs reaches.",
        "Moving to KONA I in 2023, I began with a full audit of the prior year's spending. We identified waste, focused on the top five line items, and within two years compressed operating budget to 34.3% of FY23. Along the way, AI shifted from a tool into a workflow.",
        "LLMs for review and report drafting, Perplexity and Grok for market research, Gamma and Napkin for visualization, and live operating dashboards I built myself — the full cycle of general affairs, redesigned around AI. I am looking for a place to build a stable and efficient management-support practice together."
      ]
    }
  },

  // ------------------------------------------------------------
  // Career timeline
  // ------------------------------------------------------------
  career: [
    {
      id: "kona",
      period: "2023.05 — Present",
      duration: { ko: "3년", en: "3 yrs" },
      status: { ko: "재직중", en: "Current" },
      company: { ko: "코나아이㈜", en: "KONA I" },
      role: { ko: "HR팀 · 과장 · 총무 리딩", en: "HR Team · Manager · GA Lead" },
      summary: {
        ko: "2023년 지출 내역 전수 조사로 낭비 요소를 식별하고 Top 5 관리항목을 집중 개선, 2년 만에 운영 예산을 23년의 34.3% 수준으로 경량화. 5개 계열사의 총무·경영지원 체계를 표준화하고 AI 도구를 업무 전 주기에 통합한 운영 워크플로를 구축.",
        en: "Audited all FY23 spending to identify waste, then concentrated on the top five categories — compressing operating budget to 34.3% of FY23 within two years. Standardised GA practice across five affiliates and integrated AI into the full operational workflow."
      },
      bullets: {
        ko: [
          "2024 비용 효율화 프로젝트 PM — 연 10.1억 절감 (−65.7%)",
          "한국렌탈 노트북 임차 → 중고 매입 승계 · −4.6억",
          "KT 통신 인프라 재협상 · −2.5억 (−44%)",
          "SK렌터카 · 에쓰핀 등 공급사 다변화 · 계약 최적화",
          "총무 파트 리딩 · 프로세스 표준화 · 신규 입사자 OJT 설계",
          "법인인장 · 공동인증서 · 4종 기업보험 · 부동산 관리",
          "법인차량 관리규정 제정 · 자산수령증 프로세스 도입",
          "SW 라이선스 일원화 · 구매신청 매뉴얼 표준화",
          "500명 규모 사무실 레이아웃 설계 · CAD / SketchUp",
          "송년회 PM · 5개 계열사 규정,제도,프로세스 통합 관리",
          "더한옥헤리티지호텔 9BL 오픈 — 사업계획·관광사업 등록 행정 지원"
        ],
        en: [
          "Led the FY24 cost-efficiency program — ₩1.01B annual savings (−65.7%)",
          "Converted leased laptops to owned via used-asset transfer · −₩460M",
          "Renegotiated KT communications infrastructure · −₩250M (−44%)",
          "Diversified vendors (SK Rentacar, S-pin and others) · contract optimisation",
          "Led the GA team · standardised processes · designed new-hire onboarding",
          "Corporate seal · digital certificates · 4 corporate insurances · real-estate",
          "Authored fleet-vehicle policy · introduced asset-receipt process",
          "Unified SW licensing · standardised purchase-request manual",
          "Designed 500-person office layout · CAD / SketchUp",
          "End-of-year event PM · unified events & welfare across 5 affiliates",
          "The Hanok Heritage Hotel 9BL launch — business-plan & tourism filing"
        ]
      },
      tags: { ko: ["AI 통합 워크플로", "BPM 표준화", "계열사 시너지", "자산 보유 모델", "스마트 오피스", "벤더 재협상"],
              en: ["AI Workflow", "BPM Standards", "Group Synergy", "Asset Ownership", "Smart Office", "Vendor Renegotiation"] }
    },
    {
      id: "ssg",
      period: "2018.12 — 2023.05",
      duration: { ko: "4년 6개월", en: "4 yrs 6 mos" },
      company: { ko: "㈜에스에스지닷컴", en: "SSG.COM" },
      role: { ko: "총무 · 자산 / 구매 지원", en: "GA · Asset & Procurement Support" },
      summary: {
        ko: "전사 고정자산 실사, 자동화 물류센터 스페어 파트 관리, 디자인·개발·기획 전 직군의 SW 라이선스 운영. 비딩 협상으로 단가 17–24% 인하를 다수 견인.",
        en: "Full-company fixed-asset audits, spare-parts management at automated logistics centers, and SW licensing across design, dev and product. Multiple bid-driven unit-price reductions of 17–24%."
      },
      bullets: {
        ko: [
          "연 1회 전사 PC·유형자산 실사 · 연간 S~C급 투자 계획",
          "SW 라이선스 구매 — Adobe · Figma · Axure · Zeplin · JetBrains · Office",
          "보냉 박스 단가 −24% · 택배 박스 −10%",
          "드라이아이스 부직포 −17.8% · 알비백 재활용",
          "1,000명 규모 사무실 이전 · SketchUp 레이아웃 설계",
          "코로나 방역 · 좌석 재배치 · 도서관(업글) 운영"
        ],
        en: [
          "Annual company-wide PC & fixed-asset audit · S–C tier investment plan",
          "SW license procurement — Adobe · Figma · Axure · Zeplin · JetBrains · Office",
          "Cold-box unit price −24% · shipping-box −10%",
          "Dry-ice non-woven fabric −17.8% · reusable Albi-bag program",
          "1,000-person office relocation · SketchUp layout design",
          "COVID sanitation · seat reassignment · upgraded library operation"
        ]
      },
      tags: { ko: ["대규모 구매", "단가 인하 비딩", "물류센터 운영", "사무 공간 설계"],
              en: ["Large-Scale Procurement", "Bid Negotiation", "Logistics Ops", "Office Design"] }
    },
    {
      id: "emart",
      period: "2017.11 — 2018.12",
      duration: { ko: "1년 1개월", en: "1 yr 1 mo" },
      company: { ko: "㈜이마트", en: "E-MART" },
      role: { ko: "총무 (입사)", en: "General Affairs (Entry)" },
      summary: {
        ko: "총무 커리어의 출발점. 비품·소모품 발주, 계약·인허가·법인 관리 등 총무 제반 업무의 기초 체력을 쌓은 시기.",
        en: "The starting line. Office supplies, contracts, licensing and corporate administration — building the fundamentals of general-affairs practice."
      },
      bullets: { ko: [], en: [] },
      tags: { ko: ["총무 기본기", "계약 · 인허가", "법인 관리"],
              en: ["GA Fundamentals", "Contracts & Licensing", "Corporate Admin"] }
    }
  ],

  // ------------------------------------------------------------
  // Projects (filterable + searchable)
  // ------------------------------------------------------------
  projects: [
    {
      id: "p01",
      year: "2024",
      category: "cost",
      title: { ko: "FY23→FY25 비용 효율화", en: "FY23→FY25 Cost Efficiency" },
      org: "KONA I",
      headline: { ko: "−10.1억 / −65.7%", en: "−₩1.01B / −65.7%" },
      summary: {
        ko: "2023년 지출 전수조사 → Top 5 항목 식별 → 2년에 걸친 집중 개선. 자산 보유 모델 전환과 벤더 재협상이 핵심 레버.",
        en: "Audit FY23 spend → identify top 5 line items → two-year focused improvement. Asset-ownership conversion and vendor renegotiation were the core levers."
      },
      details: {
        ko: [
          "2023년 회계 자료를 계정과목별로 분해, Top 40 벤더와 Top 8 라인 아이템 식별",
          "한국렌탈 노트북 임차 → 중고 매입 승계로 자산화 (−4.65억, 99.8%)",
          "KT 통신 인프라 재협상 — 전용회선 2.34억 → 1.26억 (−44%)",
          "SK렌터카 차량 리스 −0.97억 (−95.1%), 에쓰핀 외주 −0.40억 (−53.1%)",
          "SW 라이선스 일원화로 비활성 좌석 49개 식별, 추가 −28.2% 여지 확보",
          "최종 누계 1,006,318,258원 절감"
        ],
        en: [
          "Decomposed FY23 ledger by account, identified top 40 vendors and top 8 line items",
          "Converted leased laptops to owned assets (−₩465M, −99.8%)",
          "Renegotiated KT communications infrastructure — dedicated lines ₩234M → ₩126M (−44%)",
          "SK Rentacar fleet lease −₩97M (−95.1%); S-pin outsourcing −₩40M (−53.1%)",
          "Unified SW licensing, identified 49 inactive seats — additional −28.2% headroom",
          "Final cumulative saving: ₩1,006,318,258"
        ]
      },
      tags: { ko: ["비용절감", "PM", "벤더협상", "자산화"], en: ["Cost", "PM", "Negotiation", "Capex"] },
      hasDashboard: true,
      dashboardLabel: { ko: "에디토리얼 리포트", en: "Editorial Report" }
    },
    {
      id: "p02",
      year: "2026",
      category: "ai",
      title: { ko: "해외 라이선스 운영 인텔리전스", en: "License Operations Intelligence" },
      org: "KONA I",
      headline: { ko: "191명 · 5 SaaS · 1.27억", en: "191 ppl · 5 SaaS · ₩127M" },
      summary: {
        ko: "Figma·Adobe·Zeplin·Axure·Zoom 5종을 실시간 추적하는 운영 대시보드. Health Score·갱신 타임라인·시뮬레이터 직접 구현.",
        en: "A live operations dashboard tracking 5 SaaS portfolios across 191 seats — Health Score, renewal timeline, and an interactive cost simulator, all hand-built."
      },
      details: {
        ko: [
          "5개 라이선스 · 191명 좌석 운영 데이터를 한 화면으로 통합",
          "비활성 좌석 49개 식별 → 정리 시 −28.2% (−3,573만)",
          "Health Score 72 → 89로 끌어올리는 최적화 액션 시뮬레이션",
          "좌석/환율을 직접 조정하는 인터랙티브 비용 시뮬레이터 내장",
          "Chart.js · Vanilla JS로 직접 구현"
        ],
        en: [
          "Unified operating data of 5 licenses · 191 seats into a single view",
          "Identified 49 inactive seats → cleanup yields −28.2% (−₩35.7M)",
          "Simulated optimisation actions lifting Health Score 72 → 89",
          "Built-in interactive cost simulator for seats and FX rate",
          "Hand-built with Chart.js and vanilla JS"
        ]
      },
      tags: { ko: ["AI 활용", "라이선스", "대시보드", "시뮬레이션"], en: ["AI", "Licensing", "Dashboard", "Simulation"] },
      hasDashboard: true,
      dashboardLabel: { ko: "라이브 대시보드", en: "Live Dashboard" }
    },
    {
      id: "p03",
      year: "2024",
      category: "space",
      title: { ko: "500명 규모 사무실 레이아웃", en: "500-Person Office Layout" },
      org: "KONA I",
      headline: { ko: "CAD · SketchUp", en: "CAD · SketchUp" },
      summary: {
        ko: "500명 규모의 좌석·회의실·동선을 3D로 설계. 부서별 협업 패턴을 동시에 반영한 스마트 오피스.",
        en: "Designed seating, meeting rooms and circulation for 500 people in 3D — reflecting collaboration patterns, daylight and acoustics into one smart-office plan."
      },
      details: {
        ko: [
          "부서별 협업 빈도 데이터를 기반으로 인접 배치 결정",
          "회의실·집중석·라운지 비율 최적화",
          "동선과 채광, 소음 흐름을 동시에 고려한 3D 레이아웃 제작"
        ],
        en: [
          "Adjacency decided from inter-team collaboration frequency data",
          "Optimised ratio of meeting rooms, focus seats, and lounge",
          "3D layout balancing circulation, daylight, and acoustic flow"
        ]
      },
      tags: { ko: ["공간설계", "CAD", "SketchUp", "스마트오피스"], en: ["Space", "CAD", "SketchUp", "Smart Office"] }
    },
    {
      id: "p04",
      year: "2020",
      category: "space",
      title: { ko: "1,000명 사무실 이전", en: "1,000-Person Office Relocation" },
      org: "SSG.COM",
      headline: { ko: "PM · 무사 이전", en: "PM · Zero incidents" },
      summary: {
        ko: "1,000명 규모의 사옥 이전을 PM. 좌석 재배치, 방역, 도서관 운영까지 무사 안착.",
        en: "Project-managed a 1,000-person relocation through COVID — seat reassignment, sanitation, and library operation, all landed without incident."
      },
      details: {
        ko: [
          "SketchUp 레이아웃 설계 · 부서별 좌석 배치",
          "코로나 방역 프로토콜 운영 · 좌석 거리두기 반영",
          "도서관(업글) 운영 — 사내 학습 공간 신설"
        ],
        en: [
          "SketchUp layout · seat assignment by team",
          "COVID sanitation protocols · distancing reflected in seating",
          "Library upgrade — new in-house learning space"
        ]
      },
      tags: { ko: ["이전PM", "공간설계", "방역"], en: ["Relocation PM", "Space", "Sanitation"] }
    },
    {
      id: "p05",
      year: "2024",
      category: "ai",
      title: { ko: "AI-Native 총무 워크플로", en: "AI-Native GA Workflow" },
      org: "KONA I",
      headline: { ko: "리드타임 −60%", en: "Lead-time −60%" },
      summary: {
        ko: "검토→기획→리서치→시각화→운영까지 6단계에 AI를 단계별로 통합. 문서 작성 리드타임 60% 단축.",
        en: "Six AI-integrated stages across review → planning → research → visualization → operations. Document-drafting lead-time reduced by 60%."
      },
      details: {
        ko: [
          "Stage 1 검토·작성 — ChatGPT / Claude — 문서 리드타임 −60%",
          "Stage 2 비딩 리서치 — Perplexity / Grok — 30분 내 단가 정리",
          "Stage 3 트렌드·기획 — Genspark / Perplexity Deep Research",
          "Stage 4 시각화·보고 — Gamma · Napkin · Claude Artifacts — 5× 슬라이드 속도",
          "Stage 5 운영 자동화 — 식당 수요 예측 · 통근버스 노선 최적화",
          "Stage 6 운영 모니터링 — 자체 제작 인터랙티브 대시보드 2건 운영 중"
        ],
        en: [
          "Stage 1 Review & drafting — ChatGPT / Claude — −60% doc lead-time",
          "Stage 2 Bid research — Perplexity / Grok — vendor pricing in 30 min",
          "Stage 3 Trend & planning — Genspark / Perplexity Deep Research",
          "Stage 4 Visualization & reporting — Gamma · Napkin · Claude Artifacts — 5× slide speed",
          "Stage 5 Operations automation — cafeteria demand forecast · shuttle route optimisation",
          "Stage 6 Operations monitoring — 2 self-built interactive dashboards live"
        ]
      },
      tags: { ko: ["AI 워크플로", "리서치", "자동화"], en: ["AI Workflow", "Research", "Automation"] }
    },
    {
      id: "p06",
      year: "2024",
      category: "ops",
      title: { ko: "5개 계열사 송년회 PM", en: "Affiliate-Wide Year-End Event PM" },
      org: "KONA I",
      headline: { ko: "5개사 · 통합 운영", en: "5 affiliates · unified" },
      summary: {
        ko: "그룹 5개 계열사의 송년회를 통합 기획·운영. 행사 의전, 복지, 예산까지 일원화.",
        en: "Planned and ran the year-end event across five group affiliates — protocol, welfare, and budget unified."
      },
      details: {
        ko: [
          "5개 계열사 행사·복지 통합 기획",
          "장소·연출·의전 동선 설계",
          "예산 통합 운영 · 사후 보고서 작성"
        ],
        en: [
          "Unified planning of events & welfare across 5 affiliates",
          "Venue · staging · protocol flow design",
          "Consolidated budget operation · post-event report"
        ]
      },
      tags: { ko: ["행사PM", "의전", "복지"], en: ["Event PM", "Protocol", "Welfare"] }
    },
    {
      id: "p07",
      year: "2024",
      category: "ops",
      title: { ko: "더한옥헤리티지호텔 9BL 오픈 지원", en: "The Hanok Heritage Hotel 9BL Opening" },
      org: "KONA I Group",
      headline: { ko: "신규 사업 · 행정", en: "New business · Admin" },
      summary: {
        ko: "신규 호텔 사업 오픈에 사업계획 수립과 관광사업 등록 등 행정 절차를 지원.",
        en: "Supported a new hotel launch — business-plan drafting and tourism-business registration."
      },
      details: {
        ko: [
          "사업계획서 작성 지원",
          "관광사업 등록 행정 절차 진행",
          "관계기관 협의 · 인허가 추적"
        ],
        en: [
          "Supported business-plan drafting",
          "Drove tourism-business registration administration",
          "Stakeholder coordination · permit tracking"
        ]
      },
      tags: { ko: ["신규사업", "인허가", "행정"], en: ["New Business", "Licensing", "Admin"] }
    },
    {
      id: "p08",
      year: "2021",
      category: "cost",
      title: { ko: "보냉/택배 박스 단가 인하", en: "Cold-Box & Shipping Box Unit-Price Cut" },
      org: "SSG.COM",
      headline: { ko: "−24% / −10%", en: "−24% / −10%" },
      summary: {
        ko: "물류 핵심 자재인 보냉 박스와 택배 박스의 단가를 비딩 협상으로 끌어내림. 드라이아이스 부직포까지 −17.8%.",
        en: "Drove unit-price cuts on core logistics packaging via competitive bidding. Dry-ice non-woven fabric brought down by 17.8%."
      },
      details: {
        ko: [
          "보냉 박스 단가 −24%",
          "택배 박스 단가 −10%",
          "드라이아이스 부직포 −17.8%",
          "알비백 재활용 프로그램 운영"
        ],
        en: [
          "Cold-box unit price −24%",
          "Shipping-box unit price −10%",
          "Dry-ice non-woven fabric −17.8%",
          "Reusable Albi-bag program"
        ]
      },
      tags: { ko: ["비딩", "단가인하", "물류"], en: ["Bidding", "Unit Price", "Logistics"] }
    },
    {
      id: "p09",
      year: "2024",
      category: "ops",
      title: { ko: "법인차량 관리규정 제정", en: "Fleet-Vehicle Policy Authoring" },
      org: "KONA I",
      headline: { ko: "신규 규정 · 운영", en: "New policy · Live" },
      summary: {
        ko: "법인차량 운영 규정과 자산수령증 프로세스를 제정·도입. 자산 흐름의 가시성을 확보.",
        en: "Authored the corporate fleet policy and introduced an asset-receipt process — establishing visibility over the asset trail."
      },
      details: {
        ko: [
          "법인차량 관리규정 초안 작성 → 검토 → 시행",
          "자산수령증 프로세스 도입 — 자산 이동·반납 가시화",
          "구매신청 매뉴얼 표준화"
        ],
        en: [
          "Drafted, reviewed, and enacted fleet-vehicle policy",
          "Introduced asset-receipt process — visualised asset movement",
          "Standardised the purchase-request manual"
        ]
      },
      tags: { ko: ["규정 제정", "프로세스", "자산"], en: ["Policy", "Process", "Asset"] }
    },
    {
      id: "p10",
      year: "2019",
      category: "ops",
      title: { ko: "전사 고정자산 실사", en: "Company-Wide Fixed-Asset Audit" },
      org: "SSG.COM",
      headline: { ko: "연 1회 · 전사", en: "Annual · Company-wide" },
      summary: {
        ko: "전사 PC와 유형자산을 연 1회 실사하고, S~C급으로 분류해 연간 투자 계획을 수립.",
        en: "Audited all company PCs and fixed assets annually, classifying them S–C to drive the annual investment plan."
      },
      details: {
        ko: [
          "연 1회 전사 PC·유형자산 실사",
          "자산 등급 S~C 분류 · 교체 우선순위 산정",
          "연간 S~C급 투자 계획 수립"
        ],
        en: [
          "Annual audit of all company PCs and fixed assets",
          "S–C grade classification · replacement priority",
          "Annual investment plan by grade"
        ]
      },
      tags: { ko: ["자산실사", "투자계획", "ERP"], en: ["Audit", "Capex Plan", "ERP"] }
    }
  ],

  // ------------------------------------------------------------
  // Skills
  // ------------------------------------------------------------
  skills: [
    {
      group: { ko: "총무 · 경영지원 도메인", en: "General Affairs & Operations" },
      chips: [
        { l: "총무", e: "General Affairs", p: true },
        { l: "자산관리", e: "Asset Mgmt", p: true },
        { l: "구매관리", e: "Procurement", p: true },
        { l: "원가관리", e: "Cost Mgmt", p: true },
        { l: "비딩 협상", e: "Bid Negotiation" },
        { l: "계약 / 도급", e: "Contracts" },
        { l: "사내행사", e: "Internal Events" },
        { l: "비품관리", e: "Supplies" },
        { l: "시설관리", e: "Facilities" },
        { l: "부동산", e: "Real Estate" },
        { l: "MRO", e: "MRO" },
        { l: "재고관리", e: "Inventory" },
        { l: "KPI관리", e: "KPI Mgmt" }
      ]
    },
    {
      group: { ko: "AI · 워크플로", en: "AI · Workflow" },
      chips: [
        { l: "ChatGPT", e: "ChatGPT", p: true },
        { l: "Claude", e: "Claude", p: true },
        { l: "Perplexity", e: "Perplexity", p: true },
        { l: "Grok", e: "Grok" },
        { l: "Genspark", e: "Genspark" },
        { l: "Gamma", e: "Gamma" },
        { l: "Napkin", e: "Napkin" },
        { l: "Custom GPT", e: "Custom GPT" },
        { l: "AI 수요 예측", e: "Demand Forecast" },
        { l: "노선 최적화", e: "Route Optimisation" }
      ]
    },
    {
      group: { ko: "공간 · 시설 설계", en: "Space & Facilities Design" },
      chips: [
        { l: "SketchUp", e: "SketchUp", p: true },
        { l: "CAD", e: "CAD", p: true },
        { l: "레이아웃 설계", e: "Layout Design" },
        { l: "대규모 행사 PM", e: "Large-Event PM" },
        { l: "사무실 이전", e: "Office Relocation" },
        { l: "방역 · 위생", e: "Sanitation" }
      ]
    },
    {
      group: { ko: "시스템 · 오피스", en: "Systems & Office" },
      chips: [
        { l: "ERP / SAP", e: "ERP / SAP", p: true },
        { l: "MS Excel", e: "MS Excel" },
        { l: "MS PowerPoint", e: "MS PowerPoint" },
        { l: "MS Word", e: "MS Word" },
        { l: "Notion", e: "Notion" },
        { l: "Chart.js", e: "Chart.js" },
        { l: "HTML / JS", e: "HTML / JS" }
      ]
    },
    {
      group: { ko: "라이선스 운영", en: "License Operations" },
      chips: [
        { l: "Adobe CC", e: "Adobe CC" },
        { l: "Figma", e: "Figma" },
        { l: "Axure RP", e: "Axure RP" },
        { l: "Zeplin", e: "Zeplin" },
        { l: "JetBrains", e: "JetBrains" },
        { l: "Microsoft 365", e: "Microsoft 365" },
        { l: "Zoom", e: "Zoom" },
        { l: "셔터스톡 · 게티", e: "Shutterstock · Getty" }
      ]
    }
  ],

  // ------------------------------------------------------------
  // Education
  // ------------------------------------------------------------
  education: [
    {
      school: { ko: "세종대학교 산업대학원", en: "Sejong University Graduate School of Industry" },
      degree: { ko: "석사 · 유통산업학", en: "M.S. · Distribution Industry" },
      period: "2018.08 — 2022.08",
      gpa: "3.95 / 4.5",
      status: { ko: "졸업", en: "Graduated" }
    },
    {
      school: { ko: "한양사이버대학교", en: "Hanyang Cyber University" },
      degree: { ko: "학사 · 서비스생산물류", en: "B.A. · Service Production & Logistics" },
      period: "2016.03 — 2018.08",
      gpa: "3.13 / 4.5",
      status: { ko: "편입 · 졸업", en: "Transfer · Graduated" }
    },
    {
      school: { ko: "유한대학교", en: "Yuhan University" },
      degree: { ko: "전문학사 · 유통물류", en: "A.S. · Distribution & Logistics" },
      period: "2012.03 — 2016.02",
      gpa: "3.17 / 4.5",
      status: { ko: "졸업", en: "Graduated" }
    },
    {
      school: { ko: "부평고등학교", en: "Bupyeong High School" },
      degree: { ko: "문과계열", en: "Humanities" },
      period: "2009.03 — 2012.02",
      gpa: "—",
      status: { ko: "졸업", en: "Graduated" }
    }
  ],

  certifications: [
    { name: { ko: "소비자전문상담사 2급", en: "Consumer Counselor Level 2" }, date: "2018.11", issuer: { ko: "한국산업인력공단", en: "HRD Korea" } },
    { name: { ko: "텔레마케팅관리사", en: "Telemarketing Manager" }, date: "2015.11", issuer: { ko: "한국산업인력공단", en: "HRD Korea" } },
    { name: { ko: "유통관리사 2급", en: "Distribution Manager Level 2" }, date: "2013.05", issuer: { ko: "대한상공회의소", en: "KCCI" } },
    { name: { ko: "2종 보통 운전면허", en: "Driver's License Type 2" }, date: "2013.02", issuer: { ko: "경찰청", en: "Korean Police" } }
  ]
};

// Category labels for project filter
window.PROJECT_CATEGORIES = [
  { id: "all",   ko: "전체",      en: "All" },
  { id: "cost",  ko: "비용 절감", en: "Cost" },
  { id: "ai",    ko: "AI · 도구", en: "AI · Tools" },
  { id: "space", ko: "공간 설계", en: "Space" },
  { id: "ops",   ko: "운영 · 행정", en: "Operations" }
];

// UI strings
window.UI_STRINGS = {
  ko: {
    nav: { hero: "서문", about: "프로필", career: "경력", projects: "프로젝트", skills: "역량", education: "학력", contact: "연락처" },
    hero: { kicker: "AI-Native 스마트 총무 전문가", scroll: "Scroll", available: "이직 가능 · 협업 환영" },
    about: { eyebrow: "01 · About", title: "프로필" },
    career: { eyebrow: "02 · Career", title: "경력", duration: "재직기간" },
    projects: { eyebrow: "03 · Projects", title: "프로젝트", searchPlaceholder: "프로젝트 검색", empty: "검색 결과가 없습니다.", details: "상세 보기", close: "닫기", overview: "개요", keyOutcomes: "핵심 성과", tags: "태그", year: "연도", org: "소속" },
    skills: { eyebrow: "04 · Toolkit", title: "역량" },
    education: { eyebrow: "05 · Education", title: "학력 · 자격", certifications: "자격증" },
    contact: { eyebrow: "06 · Contact", title: "함께 일할 자리를 찾고 있습니다", subtitle: "안정적이고 효율적인 경영지원 체계를 함께 구현할 자리를 찾고 있습니다.", emailMe: "이메일 보내기", call: "전화하기" },
    footer: { compiled: "Compiled · May 2026", tag: "8 YEARS · 6 MONTHS · −10.1억" }
  },
  en: {
    nav: { hero: "Intro", about: "Profile", career: "Career", projects: "Projects", skills: "Skills", education: "Education", contact: "Contact" },
    hero: { kicker: "AI-Native General Affairs Specialist", scroll: "Scroll", available: "Open to roles · Collaborations welcome" },
    about: { eyebrow: "01 · About", title: "Profile" },
    career: { eyebrow: "02 · Career", title: "Career", duration: "Duration" },
    projects: { eyebrow: "03 · Projects", title: "Projects", searchPlaceholder: "Search projects", empty: "No projects match your search.", details: "View details", close: "Close", overview: "Overview", keyOutcomes: "Key outcomes", tags: "Tags", year: "Year", org: "Organisation" },
    skills: { eyebrow: "04 · Toolkit", title: "Toolkit" },
    education: { eyebrow: "05 · Education", title: "Education & Credentials", certifications: "Certifications" },
    contact: { eyebrow: "06 · Contact", title: "Looking for the right place", subtitle: "I'm looking for a place to build a stable and efficient management-support practice together.", emailMe: "Email me", call: "Call" },
    footer: { compiled: "Compiled · May 2026", tag: "8 YEARS · 6 MONTHS · −₩1.01B" }
  }
};
