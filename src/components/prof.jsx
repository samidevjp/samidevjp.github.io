import React from "react";
import profImage from "../assets/images/prof/prof.jpg";

const copy = {
  jp: {
    greeting: "ポートフォリオサイトをご覧いただきありがとうございます。",
    summary1:
      "Reactベースのフロントエンド開発を得意とする、5年の経験を持つWebデベロッパーです。オーストラリアの飲食業界向けテック企業Wabiでは、リードデザイナー兼フロントエンドエンジニアとして、ウェブサイトプロジェクトをディレクションから実装まで主導し、飲食店向けSaaSの開発ではUI/UX、プログラミング、プロジェクトディレクションに幅広く貢献しながら、新機能の提案と設計・実装を行いました。",
    summary2:
      "オーストラリアのメルボルンを拠点として、フィリピンのバックエンドチームとも緊密に連携し、保守性の高いコードを書くこと、そしてグローバルに理解されるUI/UXの構築を行いました。",
  },
  global: {
    greeting:
      "Hello! My name is Asami Okamoto. Thank you for browsing my portfolio Site.",
    summary1:
      "A web developer with 5 years of experience, specializing in React-based front-end development. At Wabify, a hospitality-focused software company in Australia, I served as the UI/UX Head Designer, leading website projects from direction to implementation. I proposed and designed new features while contributing extensively across UI/UX, high-quality programming, and project direction.",
    summary2:
      "Known for my strong communication skills and collaborative approach, I worked closely with teammates and the backend team in the Philippines to deliver cohesive, efficient solutions. I’m passionate about writing clean, maintainable code and building globally understandable, highly aesthetic interfaces. I’m now seeking a new opportunity where I can bring thoughtful design, strong technical execution, and prompt team communication to the next level.",
  },
};

const ProfileSection = ({ audience }) => {
  const t = copy[audience] || copy.global;
  return (
    <section className="prof">
      <div className="globalInner">
        <div className="prof__body">
          <div className="profDesc">
            <div className="profImg">
              <img
                fetchpriority="high"
                decoding="async"
                width="300"
                height="300"
                src={profImage}
                alt=""
                className="wp-image-43"
              />
            </div>
            <div className="profLead">
              <p className="u_mb--s">{t.greeting}</p>
              <h2 className="p_sec__ttl--xs">SKILLS</h2>
              <p>
                React / JavaScript / TypeScript / UI/UX Design / Node.js / REST
                API / Axios / WordPress / PHP / Bootstrap / Sass / Figma / Adobe
                Creative Suite (Illustrator, Photoshop, XD, Premiere Pro, After
                Effects) / Git / Slack / Responsive Design
              </p>
            </div>
          </div>
          <div className="profTxt">
            <h2 className="p_sec__ttl--xs">SUMMARY</h2>
            <p>{t.summary1}</p>
            <p>{t.summary2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
