import React from "react";
import { TypeAnimation } from "react-type-animation";
import { copy } from "../copy";

// Dummy Images for Cases
import designDashboard from "../assets/images/design-dashboard.png";
import designLogin from "../assets/images/design-login.png";
import roster from "../assets/images/roster.png";
import timesheet from "../assets/images/timesheet.png";
import subscription from "../assets/images/subscription.png";
import specialDay from "../assets/images/special-day.png";
import widgetSetting from "../assets/images/widget-setting.png";
import surcharge from "../assets/images/surcharge.png";
import subscriptionUpgrade from "../assets/images/subscription-upgrade.png";
import flowControl from "../assets/images/flow-control.png";
import requestAvailability from "../assets/images/request-availability.png";

// Card Images
import wabify from "../assets/images/wabify.png";
import widget from "../assets/images/widget.png";

function WabiProgrammingSection({ audience = "global" }) {
  const t = copy[audience];

  const overviewText =
    audience === "jp"
      ? "既存のホスピタリティ向けシステムを React ベースで再構築し、Web版として新規顧客を獲得することを目指しました。"
      : "We rebuilt the existing hospitality management system with React, delivering a modern web-based solution aimed at acquiring new customers.";

  const goalText =
    audience === "jp"
      ? "安定性と使いやすさを兼ね備えた業務システムを目標に構築しました。パフォーマンスの最適化、直感的なUI、拡張性を重視しました。"
      : "Our goal was to deliver a reliable and user-friendly system. We focused on performance optimization, intuitive UI, and scalability.";

  // --- Case Data ---
  const cases = [
    {
      title:
        audience === "jp"
          ? "Case 1: スタッフのシフト管理"
          : "Case 1: Staff Shift Management",
      desc:
        audience === "jp"
          ? "シフト作成・編集・コピー機能や役職ごとの表示切替、勤務時間やコスト集計などを実装しました。"
          : "Implemented features such as shift creation, editing, duplication, role-based views, and time/cost calculations.",
      imgs: [roster, timesheet],
    },
    {
      title:
        audience === "jp"
          ? "Case 2: 予約サイトの構築と連携"
          : "Case 2: Reservation Site & Integration",
      desc:
        audience === "jp"
          ? "予約フォームとPOSデータの同期を実装し、顧客側とスタッフ側の両方にとってシームレスな体験を実現しました。"
          : "Developed an integrated reservation site with POS synchronization.",
      imgs: [widgetSetting, widget],
    },
    {
      title:
        audience === "jp"
          ? "Case 3: サブスクリプション更新 UI/UX"
          : "Case 3: Subscription Update UI/UX",
      desc:
        audience === "jp"
          ? "プラン変更時に Subscribe/Unsubscribe の両方を処理し、ログアウトまでの一連の体験をデザイン・実装しました。"
          : "Designed and implemented subscription flows handling both Subscribe and Unsubscribe actions.",
      imgs: [subscription, subscriptionUpgrade],
    },
    {
      title:
        audience === "jp"
          ? "Case 4: 特別営業日・サーチャージ設定"
          : "Case 4: Special Days & Surcharge Settings",
      desc:
        audience === "jp"
          ? "特別営業日や割増料金の設定をモジュール化し、店舗ごとに柔軟に対応可能な仕組みを構築しました。"
          : "Modularized special day and surcharge settings to provide flexible configuration options.",
      imgs: [specialDay, surcharge],
    },
  ];

  return (
    <section className="mb-96">
      {/* --- Hero --- */}
      <div className="globalInner flex gap-24 items-center h-[700px] mb-60">
        <div>
          <h2 className="text-8xl font-bold mb-8">Programming</h2>
          <p
            dangerouslySetInnerHTML={{ __html: t.programmingLead }}
            className="text-gray-500 max-w-[800px]"
          />
        </div>
        <div className="w-full px-20 max-w-[500px] bg-black text-green-400 rounded-xl shadow-lg p-6">
          <TypeAnimation
            sequence={[
              `function greet(name) {\n  return \`Hello, \${name}\`;\n}\n\nconsole.log(greet("Asami Okamoto"));`,
              2000,
              "",
            ]}
            speed={50}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              fontFamily: "monospace",
              fontSize: "14px",
              lineHeight: "1.5",
            }}
          />
        </div>
      </div>
      <div className="globalInner">
        {/* --- Overview & Goal --- */}
        <div className="max-w-[800px] mb-60">
          <div className="mb-24">
            <h3 className="text-6xl font-semibold mb-4">Overview</h3>
            <p className="text-gray-500 leading-relaxed">{overviewText}</p>
          </div>
          <div className="mb-24">
            <h3 className="text-6xl font-semibold mb-4">Goal</h3>
            <p className="text-gray-500 leading-relaxed">{goalText}</p>
          </div>
        </div>
        <hr className="border-gray-200 mb-60" />

        {/* --- Cases --- */}
        <div className="mb-60">
          {cases.map((c, i) => (
            <div key={i} className="mb-40">
              <h4 className="text-4xl font-bold mb-6">{c.title}</h4>
              <p className="text-gray-500 leading-relaxed mb-12 max-w-[800px]">
                {c.desc}
              </p>
              <div className="grid md:grid-cols-2 gap-12">
                {c.imgs.map((img, idx) => (
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img key={idx} src={img} alt={`${c.title} ${idx + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <hr className="border-gray-200 mb-60" />

        {/* --- External Links --- */}
        <div className="mb-24">
          <h3 className="text-6xl font-semibold mb-4">External Links</h3>
          <p className="text-gray-500 leading-relaxed"></p>
        </div>
        <div className=" grid md:grid-cols-2 gap-24 max-w-[800px] mx-auto">
          <a
            className="p_card-m block"
            href="https://wabify.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="p_card-m__inner">
              <div className="p_card-m__img">
                <img src={wabify} alt="Wabify Landing" />
              </div>
              <div className="p_card-m__cap">
                <h3 className="p_card-m__ttl">{t.wabifyTitle}</h3>
                <p dangerouslySetInnerHTML={{ __html: t.wabifyLead }} />
              </div>
            </div>
          </a>

          <a
            className="p_card-m block"
            href="https://widget-staging.wabify.com/v2/67d25d091b48a1741839625"
            target="_blank"
            rel="noreferrer"
          >
            <div className="p_card-m__inner">
              <div className="p_card-m__img">
                <img src={widget} alt="Booking Widget" />
              </div>
              <div className="p_card-m__cap">
                <h3 className="p_card-m__ttl">Booking System Widget</h3>
                <p dangerouslySetInnerHTML={{ __html: t.bookingWidgetLead }} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default WabiProgrammingSection;
