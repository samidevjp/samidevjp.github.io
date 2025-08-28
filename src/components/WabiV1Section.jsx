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
import widget from "../assets/images/widget.png";
import surcharge from "../assets/images/surcharge.png";
import subscriptionUpgrade from "../assets/images/subscription-upgrade.png";
import flowControl from "../assets/images/flow-control.png";
import requestAvailability from "../assets/images/request-availability.png";

import ExternalLinks from "./ExternalLinks";

function WabiV1Section({ audience = "global" }) {
  const t = copy[audience];

  const overviewText =
    audience === "jp"
      ? "既存のホスピタリティ向けシステムを React ベースで再構築し、Web版として新規顧客を獲得することを目指しました。デザインから実装まで全てに携わり、再利用可能なコンポーネントの構築を大切に実装しました。また、モダンな予約サイトとその公式LPの開発で中心的な役割を果たしました。UI/UXディレクション、実装、ダッシュボード統合を含むフロントエンド全体を担当しました。"
      : "We rebuilt the existing hospitality management system with React, delivering a modern web-based solution aimed at acquiring new customers.";

  const goalText =
    audience === "jp"
      ? "安定性と使いやすさを兼ね備えた業務システムを目標に構築しました。予約サイトとのシームレスな連携、パフォーマンスの最適化を重視しました。また、LP制作では、システムの紹介と新規顧客の獲得を目的としたデザインと実装を目指しました。"
      : "Our goal was to deliver a reliable and user-friendly system. We focused on performance optimization, intuitive UI, and scalability.";

  // --- Case Data ---
  // --- Case Data ---
  const cases = [
    {
      title:
        audience === "jp"
          ? "Case 1: スタッフのシフト管理"
          : "Case 1: Staff Shift Management",
      desc:
        audience === "jp"
          ? [
              "従業員管理・勤怠・シフトを一体化。契約/給与レート/権限の段階入力、写真アップロードとカラーピッカー、勤怠の編集/削除/承認、時間・賃金の自動計算、グループ管理とシフトコピーで柔軟運用を実現。",
              "React / TypeScript / Next.js / shadcn-ui / Tailwind CSS / useApi",
            ]
          : [
              "Unified employees, timesheets, and shift scheduling: stepwise staff setup (contract/rates/roles), photo & color theme, edit/delete/approve timesheets, auto time & wage calc, group management and shift copy for flexible ops.",
              "React / TypeScript / Next.js / shadcn-ui / Tailwind CSS / useApi",
            ],
      imgs: [roster, timesheet],
    },
    {
      title:
        audience === "jp"
          ? "Case 2: 予約サイトの構築と連携"
          : "Case 2: Reservation Site & Integration",
      desc:
        audience === "jp"
          ? [
              "予約ウィジェットのデザイン/プレビュー/公開リンク生成に加え、日別フロー（サービス/時間枠/セクション/決済）を一元管理。画像・ロゴの自動リサイズ、テーマ（色/フォント/ボタン形状）、関連リンクのバリデーション、即時モバイル/デスクトッププレビュー、リンクコピーを実装。",
              "曜日ごとの稼働切替、営業時間とインターバルからの枠自動生成、セクション別配席、ウェイトリスト、事前決済ルールも統合。",
              "React / TypeScript / Next.js / shadcn-ui / Tailwind CSS / useApi / Stripe API",
            ]
          : [
              "Built a customizable reservation widget and daily flow control (services/slots/sections/payments) with auto image/logo resize, theme controls (colors/fonts/button shapes), validated related links, instant mobile/desktop preview, and link copy.",
              "Per-day toggles, auto slot generation, section seating, waitlist, and prepayment rules included.",
              "React / TypeScript / Next.js / shadcn-ui / Tailwind CSS / useApi / Stripe API",
            ],
      imgs: [widgetSetting, widget],
    },
    {
      title:
        audience === "jp"
          ? "Case 3: サブスクリプション更新 UI/UX"
          : "Case 3: Subscription Update UI/UX",
      desc:
        audience === "jp"
          ? [
              "フル/カスタム機能を組み合わせて購入可能なプラン選択・アップグレードを実装。URLクエリで自動選択、合計金額の即時計算、解約→新規付与→返金の一連フローをモーダルで確認・実行。",
              "ログイン制御、トースト通知、Base64 SVGアイコンの動的描画に対応。",
              "React / TypeScript / Next.js(App Router) / shadcn-ui / Tailwind CSS / useApi / Stripe API",
            ]
          : [
              "Implemented plan selection & upgrade with full/custom mixes: auto selection via URL query, instant total pricing, and an unsubscribe→attach→refund flow confirmed in modal.",
              "Includes auth gating, toast feedback, and dynamic Base64 SVG icons.",
              "React / TypeScript / Next.js(App Router) / shadcn-ui / Tailwind CSS / useApi / Stripe API",
            ],
      imgs: [subscription, subscriptionUpgrade],
    },
    {
      title:
        audience === "jp"
          ? "Case 4: 特別営業日・サーチャージ設定"
          : "Case 4: Special Days & Surcharge Settings",
      desc:
        audience === "jp"
          ? [
              "注文種別（電話/テイクアウト/店内）やカード種別×決済プロバイダに応じたサーチャージをGUIで作成/編集/有効化。曜日/日付（単日/範囲）/自動適用をuse_typeで柔軟に制御。",
              "特別日（名称・日付・毎年繰返し・営業/休業）は重複日付をバリデーション。将来のシフトUIへ向けローカル保存での暫定編集、Zustandで当日有効サーチャージの永続化、トースト/モーダルで安全なCRUDを提供。",
              "React / TypeScript / Next.js(App Router) / Zustand(use-persist) / useApi",
            ]
          : [
              "Configurable surcharges by order type (phone/takeout/dine-in) and card×processor matrix with GUI create/edit/toggle. Flexible rules via use_type for weekday/date (single/range)/auto-apply.",
              "Special days (name/date/annual repeat/open-close) with overlap validation. Local draft shifts, persisted active-surcharge filtering with Zustand, and safe CRUD via toasts/modals.",
              "React / TypeScript / Next.js(App Router) / Zustand(use-persist) / useApi",
            ],
      imgs: [specialDay, surcharge],
    },
  ];

  return (
    <section className="mb-96">
      {/* --- Hero --- */}
      <div className="globalInner flex gap-24 items-center h-[700px] mb-60">
        <div>
          <h2 className="text-8xl font-bold mb-8">Wabify V1</h2>
          <p className="text-gray-500 text-2xl mb-8">Front-end Development</p>
          <p
            dangerouslySetInnerHTML={{ __html: t.programmingLead }}
            className="text-gray-500 max-w-[800px]"
          />
        </div>
        <div className="w-full px-20 max-w-[500px] bg-black text-green-400 rounded-xl shadow-lg p-6 hidden md:block">
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
            <section key={c.title ?? i} className="mb-40">
              <h4 className="text-4xl font-bold mb-6">{c.title}</h4>

              <div className="mb-12 max-w-[800px] text-gray-500 leading-relaxed space-y-4">
                {Array.isArray(c.desc) ? (
                  c.desc.map((line, idx) => (
                    <p
                      key={idx}
                      className={
                        idx === c.desc.length - 1 ? " text-gray-500" : ""
                      }
                    >
                      {line}
                    </p>
                  ))
                ) : (
                  <p>{c.desc}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {c.imgs.map((img, idx) => (
                  <div
                    key={`${c.title}-${idx}`}
                    className="rounded-xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={img}
                      alt={`${c.title} ${idx + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
        <hr className="border-gray-200 mb-60" />

        {/* --- External Links --- */}
        <ExternalLinks audience={audience} />
      </div>
    </section>
  );
}

export default WabiV1Section;
