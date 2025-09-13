import "./../styles/casestudy.css";

export default function CaseStudy() {
  return (
    <div className="case-study">
      {/* Hero */}
      <header className="case-hero">
        <h1>Google Ads Audit – Case Study</h1>
        <p>How I improved ROI by 25% through data-driven optimization</p>
      </header>

      {/* Problem & Solution */}
      <section className="case-problem-solution">
        <div className="case-card problem">
          <h2>❌ Problem</h2>
          <p>
            High ad spend but low conversions. Tracking and budget allocation
            issues.
          </p>
        </div>
        <div className="case-card solution">
          <h2>✅ Solution</h2>
          <p>
            Audit campaigns, fix tracking, reallocate budget, and remove wasted
            spend.
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="case-process">
        <h2>🔍 Audit Process</h2>
        <ul>
          <li>📊 Data Cleaning & Validation</li>
          <li>📈 Campaign Performance Snapshot</li>
          <li>⚡ Conversion Tracking Validation</li>
          <li>💰 Budget & Spend Distribution</li>
          <li>🔑 Keyword-level Insights</li>
        </ul>
      </section>

      {/* Deliverables */}
      <section className="case-deliverables">
        <h2>📂 Deliverables</h2>
        <div className="deliverables-grid">
          <div className="deliverable-card">
            <img src="/images/dashboard.png" alt="Dashboard" />
            <p>Interactive Dashboard</p>
          </div>
          <div className="deliverable-card">
            <img src="/images/report.png" alt="Report" />
            <p>PDF Report</p>
          </div>
          <div className="deliverable-card">
            <img src="/images/excel.png" alt="Excel" />
            <p>Excel Audit Sheet</p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="case-results">
        <h2>🚀 Results</h2>
        <div className="results-grid">
          <div className="result-card">+25% ROI</div>
          <div className="result-card">-40% Wasted Spend</div>
          <div className="result-card">100% Tracking Fixed</div>
        </div>
      </section>

      {/* Conclusion */}
      <footer className="case-conclusion">
        <p>Want similar results for your campaigns?</p>
        <a href="/contact">
          <button>Let’s Work Together</button>
        </a>
      </footer>
    </div>
  );
}
