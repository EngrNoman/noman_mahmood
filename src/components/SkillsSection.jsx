import React from "react";
import "../styles/SkillsSection.css";
import { BsFileSpreadsheet } from "react-icons/bs";
import { FaPython, FaDatabase, FaChartBar } from "react-icons/fa";

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <h2 className="section-title">My Skillset</h2>

      <div className="skills-container">
        {/* Quick Audit Section */}
        <div className="skill-card quick-audit">
          <h3>🚀 Quick Audits & Optimization</h3>
          <p className="pitch">
            Instant clarity on your ad performance without overcomplication.
          </p>
          <ul>
            <li>
              <BsFileSpreadsheet size={22} color="#217346" /> Core Google Ads
              Audits (CTR, CPC, Conversions)
            </li>
            <li>
              <BsFileSpreadsheet size={22} color="#34A853" /> Quick Reports with
              Excel & Google Sheets
            </li>
            <li>Campaign Health Check & Spend Analysis</li>
            <li>Identify Wasted Spend & Low ROI campaigns fast</li>
            <li>Actionable insights delivered within hours</li>
          </ul>
          <p className="note">
            Perfect for businesses needing fast, reliable audits.
          </p>
        </div>

        {/* Advanced Automation Section */}
        <div className="skill-card deep-audit">
          <h3>🔮 Advanced Automation & Deep Audits</h3>
          <p className="pitch">
            Scalable insights powered by automation & data science.
          </p>
          <ul>
            <li>
              <FaPython size={22} color="#FFD43B" /> Python (Pandas, Numpy,
              Matplotlib) → custom audit scripts
            </li>
            <li>
              <FaDatabase size={22} color="#4479A1" /> SQL → complex campaign
              datasets
            </li>
            <li>
              <FaChartBar size={22} color="#F2C811" /> Power BI Dashboards →
              interactive KPI tracking
            </li>
            <li>Automated Audit Pipelines → no more manual reports</li>
            <li>
              Deep Audit: anomaly detection, budget forecasting, multi-channel
              analysis
            </li>
          </ul>
          <p className="note">
            Ideal for businesses ready to scale and automate insights.
          </p>
        </div>
      </div>

      <p className="footer-line">
        With 10+ years in Ads & Data Analytics, I help clients move from{" "}
        <strong>quick clarity</strong> to <strong>advanced automation</strong>.
      </p>
    </section>
  );
};

export default SkillsSection;
