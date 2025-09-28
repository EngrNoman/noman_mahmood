// src/data/projects.js
const projects = [
  {
    id: 1,
    title: "E-commerce Google Ads Audit",
    subtitle: "Reduce wasted spend & improve ROAS",
    overview:
      "Full account audit for a mid-size e-commerce store: cleaned data, rebuilt pivot analysis, and created an actionable Power BI dashboard to reallocate budget.",
    objectives: ["Reduce wasted spend", "Increase conversions", "Fix tracking"],
    challenges: ["Missing conversion tags", "High CPC keywords", "Untracked channels"],
    images: [
      "data:image/jpeg;base64,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",
      "https://source.unsplash.com/1600x900/?data,charts",
      "https://source.unsplash.com/1600x900/?adwords"
    ],
    process: ["Data cleaning", "Pivot analysis", "Dashboard", "Insights", "Recommendations"],
    deliverables: [
      { icon: "📊", title: "Power BI Dashboard" },
      { icon: "📑", title: "Audit Report (PDF)" },
      { icon: "🧾", title: "Pivot Analysis CSV" }
    ],
    insights: [
      { value: "$4,200", detail: "Monthly wasted spend on non-converting keywords" },
      { value: "32%", detail: "Priority campaigns CTR advantage vs baseline" },
      { value: "15%", detail: "Estimated conversion uplift if tracking fixed" }
    ],
    recommendations: [
      "Pause non-performing keywords with zero conversions",
      "Reallocate 20% budget to top 3 campaigns",
      "Implement server-side conversion tracking for forms"
    ],
    tools: ["Google Ads", "Excel (Pivot)", "Power BI", "Google Tag Manager"],
    contactCTA: "Want a similar audit? Let's talk."
  },

  {
    id: 2,
    title: "Lead Gen Ads Optimization",
    subtitle: "Improve CPL for B2B client",
    overview:
      "Optimized lead generation funnels, validated conversion events and redesigned campaign structure to lower cost per lead (CPL).",
    objectives: ["Lower CPL", "Improve lead quality"],
    challenges: ["High CPL", "Duplicate leads", "Poor ad relevance"],
    images: [
      "https://source.unsplash.com/1600x900/?leads,marketing",
      "https://source.unsplash.com/1600x900/?funnel,analytics"
    ],
    process: ["Audit", "Segmentation", "Campaign restructure", "A/B testing"],
    deliverables: [
      { icon: "🧭", title: "Campaign map" },
      { icon: "🧾", title: "Recommendations doc" }
    ],
    insights: [
      { value: "↓28%", detail: "CPL reduction potential after optimizations" },
      { value: "3x", detail: "Higher lead quality from optimized landing pages" }
    ],
    recommendations: [
      "Create separate campaigns per industry vertical",
      "Use form validation to reduce duplicate leads",
      "Run 2 A/B tests for top performing CTAs"
    ],
    tools: ["Google Ads", "Google Analytics", "Hotjar"],
    contactCTA: "Need CPL reduction? Reach out."
  },

  {
    id: 3,
    title: "Shopping Ads Cleanup",
    subtitle: "Recover lost revenue from feed issues",
    overview:
      "Identified feed mapping errors and low-quality product groups causing wasted impressions; rebuilt feed and restructured Shopping campaigns.",
    objectives: ["Fix product feed", "Increase ROAS"],
    challenges: ["Incorrect product categories", "Missing GTINs"],
    images: [
      "https://source.unsplash.com/1600x900/?shopping,feed",
      "https://source.unsplash.com/1600x900/?ecommerce,product"
    ],
    process: ["Feed audit", "Fix mapping", "Campaign restructure", "Monitor"],
    deliverables: [
      { icon: "🛒", title: "Fixed product feed" },
      { icon: "🔁", title: "Campaign restructure plan" }
    ],
    insights: [
      { value: "20%", detail: "ROAS improvement after feed fixes (estimated)" },
      { value: "45%", detail: "Reduction in wasted impressions on low-value SKUs" }
    ],
    recommendations: [
      "Add GTINs & standardized categories",
      "Exclude low margin SKUs from broad campaigns",
      "Schedule weekly feed validation"
    ],
    tools: ["Merchant Center", "Google Ads", "Excel"],
    contactCTA: "Want help fixing your product feed?"
  },

  {
    id: 4,
    title: "Local Service Ads Audit",
    subtitle: "Increase booked jobs via better targeting",
    overview:
      "Audit for a local services business to tighten location targeting, improve ad copy and correct conversion actions for booked jobs.",
    objectives: ["Increase booked jobs", "Improve local targeting"],
    challenges: ["Broad location radius", "Unoptimized ad copy"],
    images: [
      "https://source.unsplash.com/1600x900/?local,business",
      "https://source.unsplash.com/1600x900/?map,location"
    ],
    process: ["Geo audit", "Copy optimization", "Conversion validation", "Budget allocation"],
    deliverables: [
      { icon: "📍", title: "Geo target matrix" },
      { icon: "✍️", title: "Ad copy variants" }
    ],
    insights: [
      { value: "3x", detail: "Higher booking rate in top 5 zip codes" },
      { value: "12%", detail: "Lower CPL after copy refresh" }
    ],
    recommendations: [
      "Tighten bid adjustments by zip code",
      "Implement call tracking for booked jobs",
      "Rotate top-performing ad variants weekly"
    ],
    tools: ["Google Ads", "CallRail", "Excel"],
    contactCTA: "Let's improve your local ads."
  },

  {
    id: 5,
    title: "Performance Marketing Dashboard",
    subtitle: "Single source of truth for paid channels",
    overview:
      "Built a Power BI dashboard aggregating Google Ads, Facebook Ads and GA data to show unified KPIs and channel ROI.",
    objectives: ["Centralize reporting", "Faster decision making"],
    challenges: ["Siloed channel reports", "Manual data pulls"],
    images: [
      "https://source.unsplash.com/1600x900/?powerbi,dashboard",
      "https://source.unsplash.com/1600x900/?reporting,analytics"
    ],
    process: ["Data connectors", "Transformations", "Dashboard design", "Handover"],
    deliverables: [
      { icon: "📈", title: "Power BI dashboard" },
      { icon: "🔌", title: "ETL script (Python)" }
    ],
    insights: [
      { value: "Consolidated", detail: "All channels in one dashboard" },
      { value: "Weekly", detail: "Automated refresh cadence" }
    ],
    recommendations: [
      "Automate data refresh daily",
      "Add ROI by campaign and landing page",
      "Schedule weekly review meeting"
    ],
    tools: ["Power BI", "Python", "Google Ads", "Facebook Ads"],
    contactCTA: "Want a consolidated dashboard?"
  }
];

export default projects;
