import React from "react";
import profImage from "../assets/images/prof/prof.jpg";
import { FaLinkedin } from "react-icons/fa6";

const copy = {
  jp: {
    greeting: "ポートフォリオサイトをご覧いただきありがとうございます。",
    summary1:
      "Reactベースのフロントエンド開発を得意とする、5年の経験を持つWebデベロッパーです。オーストラリアの飲食業界向けテック企業Wabiでは、リードデザイナー兼フロントエンドエンジニアとして、ウェブサイトプロジェクトをディレクションから実装まで主導しました。飲食店向けSaaSの開発では、UI/UXデザインからプログラミング、プロジェクトディレクションまで幅広く担当し、新機能の提案と設計・実装に貢献しました。",
    summary2:
      "オーストラリアのメルボルンを拠点として、フィリピンのバックエンドチームとも緊密に連携し、保守性の高いコードを書くこと、そしてグローバルに理解されるUI/UXの構築を行いました。",
  },
  global: {
    greeting:
      "Hello! My name is Asami Okamoto. Thank you for browsing my portfolio site.",
    summary1:
      "I’m a web developer with 5 years of experience in React-based front-end development. At Wabify, a hospitality software company in Australia, I worked as UI/UX Head Designer, leading projects from direction to implementation and delivering new features across design and code.",
    summary2:
      "I value collaboration and clean, maintainable code, working closely with global teams to create clear, accessible, and aesthetic interfaces.",
  },
};

const ProfileSection = ({ audience }) => {
  const t = copy[audience] || copy.global;
  return (
    <section className="">
      <div className="flex gap-24 flex-col md:flex-row">
        <div className="profImg max-w-[400px]">
          <img
            fetchpriority="high"
            decoding="async"
            width="400"
            height="400"
            src={profImage}
            alt=""
            className="wp-image-43 grayscale"
          />
        </div>

        <div className="">
          <div className="text-5xl font-bold mb-8">Asami Okamoto</div>
          <div className="mb-16">
            <p className="text-gray-500 mb-4">{t.summary1}</p>
            <p className="text-gray-500">{t.summary2}</p>
          </div>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">SKILLS</h2>
            <div className="flex flex-wrap gap-4 text-gray-600">
              {[
                "React",
                "JavaScript",
                "TypeScript",
                "UI/UX Design",
                "Node.js",
                "REST API",
                "Axios",
                "Tailwind CSS",
                "Sass",
                "Figma",
                "Adobe XD",
                "Premiere Pro",
                "WordPress",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full border text-gray-600 bg-gray-100 text-[14px]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-16">
            <a
              href="https://www.linkedin.com/in/samidevjp/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition-colors text-4xl inline-block"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
