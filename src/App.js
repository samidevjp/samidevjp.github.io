import "./assets/css/tailwind.css";
import "./assets/sass/style.scss";
import ProfileSection from "./components/prof";
import Heading from "./components/heading";
import WorkList from "./components/worklist";
import TechSlider from "./components/techSlider";
import { IoMailOutline } from "react-icons/io5";
import { RiBug2Line } from "react-icons/ri";
// Programming Images
import team from "./assets/images/team.png";
import roster from "./assets/images/roster.png";
import timesheet from "./assets/images/timesheet.png";
import widgetSetting from "./assets/images/widget-setting.png";
import flowControl from "./assets/images/flow-control.png";
import specialDay from "./assets/images/special-day.png";
import subscription from "./assets/images/subscription.png";
import wabify from "./assets/images/wabify.png";
import widget from "./assets/images/widget.png";
// Design Images
import designDashboard from "./assets/images/design-dashboard.png";
import designLogin from "./assets/images/design-login.png";
import designSignup from "./assets/images/design-signup.png";
import designMod from "./assets/images/design-mod.png";
import designItem from "./assets/images/design-item.png";

const copy = {
  jp: {
    about: "自己紹介",
    works: "制作事例",
    uiuxLead:
      "飲食業界向けSaaSプラットフォームのデザインコレクションを紹介します。<br />ログインフローやサインアップ、POSの商品管理やアドオンまで、使いやすさ、明瞭さ、一貫したブランディングを重視し、ユーザーの思考負荷の軽減を意識し多機能で複雑な要件を整理しデザインしました。レスポンシブアプローチで戦略的に設計し、スマートフォン、タブレット、デスクトップで最適かつ一貫した体験を保証できるようにしました。",
    programmingLead:
      "React / TypeScript / Tailwind CSS / Next.js <br />デザインから実装まで全てに携わり、再利用可能なコンポーネントの構築を大切に実装しました。また、モダンな予約サイトとその公式LPの開発で中心的な役割を果たしました。UI/UXディレクション、実装、ダッシュボード統合を含むフロントエンド全体を担当しました。",
    wabifyTitle: "Wabi 公式ランディングページ",
    wabifyLead:
      "Wabiのランディングページ全体のディレクション、デザイン、実装を担当しました。製品の主要機能を紹介し、お問い合わせページも設けています。",
    bookingWidgetLead:
      "ユーザーが時間枠を選択して予約を行える予約ウィジェットを構築しました。主にウィジェットUI、時間枠の表示、予約フロー、ダッシュボード統合を含むフロントエンド全体を担当しました。",
    websiteProjectsLead:
      "ウェブサイトプロジェクトでは、主にWordPressとjQueryを使用しています。",
    designDashboard:
      "直感的なナビゲーションと主要なビジネスツールへの迅速なアクセスを目的として設計しました。統一感のあるアクセスしやすいレイアウトを心がけました。",
    designLogin:
      "クリーンでセキュアなログインインターフェースを考案しました。認証情報が違う場合も明確なフィードバックを返し、スムーズなエントリーポイントを提供するよう設計しました。",
    designSignup:
      "進捗インジケーターと最小限の注意散漫要素を備えたガイド付きサインアップフローで、新規事業者のオンボーディングを迅速かつユーザーフレンドリーにします。",
    designModifiers:
      "迅速かつ正確に注文をとれるような、コンテクストを重視してPOSのアドオン選択画面を設計しました。",
    designItem:
      "事業者がリアルタイムで商品詳細の編集、在庫状況の調整、価格管理を行える商品管理ページを設計しました。",
    teamManagement: "従業員管理ダッシュボード",
    teamManagementLead:
      "スタッフ全員の役割、職種、契約形態、パフォーマンスレベルを一覧で簡単に表示・管理できます。",
    rosterPlanning: "シフト表",
    rosterPlanningLead:
      "従業員のシフトの割り当て、更新、確認、出勤可能状況、休暇申請、週ごとの総労働時間を追跡します。",
    timesheets: "従業員の打刻記録",
    timesheetsLead:
      "従業員の出退勤を記録し、総労働時間と賃金を計算し、エントリーを簡単に承認・編集できます。",
    widgetSettings: "予約サイトのカスタマイズと管理",
    widgetSettingsLead:
      "レストランのアイデンティティに合わせて、画像、ロゴ、カラーでブランディングを設定し、予約サイトが顧客にどのように見えるかをプレビューできるように設計しました。",
    flowControl: "フローコントロール設定",
    flowControlLead:
      "各曜日に独自のサービスフローを設定し、深夜やランチサービスを個別の設定とビジュアルで管理する機能です。",
    specialDays: "特別日設定",
    specialDaysLead:
      "祝日や特別ななイベントを設定・カスタマイズする機能です。日ごとにシフト時間や営業/休業ステータスを調整します。",
    subscription: "サブスクリプション概要とステータス",
    subscriptionLead:
      "現在のサブスクリプションプランを表示し、支払い履歴を追跡し、アップグレード、キャンセル、返金を一箇所で管理する機能を設計しました。",
  },
  global: {
    about: "Creating clean, functional, and beautiful web experiences.",
    works: "A selection of recent design and development work.",
    uiuxLead:
      "A collection of interface designs crafted for a hospitality-focused SaaS platform, covering both customer-facing and admin experiences. From login flows and onboarding screens to POS item management and modifiers, each design emphasizes usability, clarity, and consistent branding to support efficient business operations. The UI/UX was strategically designed with a responsive approach, ensuring an optimal and consistent experience across smartphones, tablets, and desktops.",
    programmingLead:
      "React / TypeScript / Tailwind CSS / REST API / Next.js / Stripe API / POS system<br />I was involved in everything from design to implementation, building reusable components and ensuring maintainable UI architecture. At <strong>Wabify</strong>, I played a key role in developing a modern booking system and its official landing page—handling the entire front-end including UI/UX direction, implementation, and dashboard integration.",
    wabifyTitle: "Wabify Official Landing Page",
    wabifyLead:
      "I directed, designed, and implemented the entire landing page for Wabify. This page introduces the product’s core features and have a contact page.",
    bookingWidgetLead:
      "I built a fully functional booking widget that lets users select time slots and make reservations, all synced with the admin dashboard. I was responsible for the entire front-end, including widget UI, time slot display, reservation flow, and dashboard integration.",
    websiteProjectsLead:
      "These website projects reflect my earlier work, mainly using WordPress and jQuery. They demonstrate my foundation in front-end development and visual design, which has since evolved into more modern frameworks and UI/UX-focused solutions.",
    designDashboard:
      "A streamlined admin dashboard designed for intuitive navigation and quick access to essential business tools. Ensures a cohesive, accessible layout for efficient daily operations.",
    designLogin:
      "A clean and secure login interface with clear feedback for incorrect credentials. Designed to provide a smooth entry point while maintaining brand consistency.",
    designSignup:
      "A guided sign-up flow with progress indicators and minimal distractions, making onboarding fast and user-friendly for new businesses.",
    designModifiers:
      "An organized POS modifier selection screen that groups options logically, helping staff customize orders quickly and accurately during service.",
    designItem:
      "A detailed item management page where businesses can edit product details, adjust availability, and manage pricing in real-time.",
    teamManagement: "Team Management Dashboard",
    teamManagementLead:
      "Easily view and manage all your staff members, their roles, job types, contracts, and performance levels at a glance.",
    rosterPlanning: "Weekly Roster Planning",
    rosterPlanningLead:
      "Assign, update, or review shifts for your team members. Track availability, time-off requests, and total hours per week.",
    timesheets: "Employee Timesheets",
    timesheetsLead:
      "Track employee clock-ins and clock-outs, calculate total hours and wages, and approve or edit entries with ease.",
    widgetSettings: "Customize and Manage Your Booking Widget",
    widgetSettingsLead:
      "Set your branding with images, logo, and colors to match your restaurant’s identity. Preview how your widget will look to customers.",
    flowControl: "Flow Control Settings",
    flowControlLead:
      "Configure unique service flows for each day. Manage late-night or lunch services with individual settings and visuals.",
    specialDays: "Special Days Settings",
    specialDaysLead:
      "Set and customize public holidays or unique events. Adjust shift timings and open/closed status per day.",
    subscription: "Subscription Summary & Status",
    subscriptionLead:
      "View your current subscription plan, track payment history, and manage upgrades, cancellations, or refunds in one place.",
  },
};

const designSlides = [
  {
    title: "Dashboard",
    img: designDashboard,
  },
  {
    title: "Login",
    img: designLogin,
  },
  {
    title: "Signup",
    img: designSignup,
  },
  {
    title: "Modifiers",
    img: designMod,
  },
  {
    title: "Item",
    img: designItem,
  },
];
const slides = [
  {
    title: copy.global.teamManagement,
    img: team,
  },
  {
    title: copy.global.rosterPlanning,
    img: roster,
  },
  {
    title: copy.global.timesheets,
    img: timesheet,
  },
  {
    title: copy.global.widgetSettings,
    img: widgetSetting,
  },
  {
    title: copy.global.flowControl,
    img: flowControl,
  },
  {
    title: copy.global.specialDays,
    img: specialDay,
  },
  {
    title: copy.global.subscription,
    img: subscription,
  },
];
function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const audience = urlParams.get("aud") === "jp" ? "jp" : "global";
  const t = copy[audience];

  const localizedDesignSlides = designSlides.map((slide) => {
    const keyMap = {
      Dashboard: "designDashboard",
      Login: "designLogin",
      Signup: "designSignup",
      Modifiers: "designModifiers",
      Item: "designItem",
    };
    return { ...slide, lead: t[keyMap[slide.title]] };
  });

  const localizedSlides = slides.map((slide) => {
    const keyMap = {
      [copy.global.teamManagement]: "teamManagementLead",
      [copy.global.rosterPlanning]: "rosterPlanningLead",
      [copy.global.timesheets]: "timesheetsLead",
      [copy.global.widgetSettings]: "widgetSettingsLead",
      [copy.global.flowControl]: "flowControlLead",
      [copy.global.specialDays]: "specialDaysLead",
      [copy.global.subscription]: "subscriptionLead",
    };
    const titleKeyMap = {
      [copy.global.teamManagement]: "teamManagement",
      [copy.global.rosterPlanning]: "rosterPlanning",
      [copy.global.timesheets]: "timesheets",
      [copy.global.widgetSettings]: "widgetSettings",
      [copy.global.flowControl]: "flowControl",
      [copy.global.specialDays]: "specialDays",
      [copy.global.subscription]: "subscription",
    };
    return {
      ...slide,
      title: t[titleKeyMap[slide.title]],
      lead: t[keyMap[slide.title]],
    };
  });

  return (
    <>
      <a href="mailto:linyashamei@gmail.com" className="c_btn-mail mailtoui">
        <IoMailOutline />
      </a>
      <section className="kv">
        <div className="globalInner">
          <h1 className="kv__ttl">
            ASAMI OKAM
            <RiBug2Line
              style={{
                marginRight: "0.15em",
                fontSize: "1.1em",
              }}
            />
            TO
          </h1>
        </div>
      </section>
      <div className="globalInner">
        <Heading titleEn="ABOUT" titleJp={t.about} />
      </div>
      <ProfileSection audience={audience} />
      <div className="pg_works">
        <div className="pg_works__inner">
          <div className="globalInner">
            <Heading titleEn="WORKS" titleJp={t.works} />
            <div style={{ marginBottom: "200px" }}>
              <div className="u_mb--s">
                <h2 className="p_sec__ttl--xs">UI / UX</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: t.uiuxLead,
                  }}
                ></p>
              </div>
              <div
                className="u_mb--80"
                style={{ maxWidth: "800px", margin: "0 auto" }}
              >
                <TechSlider slides={localizedDesignSlides} />
              </div>
              <div className="u_mb--s">
                <h2 className="p_sec__ttl--xs">Programming</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: t.programmingLead,
                  }}
                ></p>
              </div>
              <div
                className="u_mb--80"
                style={{ maxWidth: "800px", margin: "0 auto" }}
              >
                <TechSlider slides={localizedSlides} />
              </div>
              <a
                className="p_card-m u_mb--s"
                style={{ display: "block" }}
                href="https://wabify.com/"
                target="_blank"
              >
                <div className="p_card-m__inner">
                  <div className="p_card-m__img">
                    <img src={wabify} alt="" />
                  </div>
                  <div className="p_card-m__cap">
                    <h3 className="p_card-m__ttl">{t.wabifyTitle}</h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: t.wabifyLead,
                      }}
                    ></p>
                  </div>
                </div>
              </a>
              <a
                className="p_card-m"
                href="https://widget-staging.wabify.com/v2/67d25d091b48a1741839625"
                target="_blank"
              >
                <div className="p_card-m__inner">
                  <div className="p_card-m__img">
                    <img src={widget} alt="" />
                  </div>
                  <div className="p_card-m__cap">
                    <h3 className="p_card-m__ttl">Booking System Widget</h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: t.bookingWidgetLead,
                      }}
                    ></p>
                  </div>
                </div>
              </a>
            </div>
            <h2 className="p_sec__ttl--xs">Website Projects</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: t.websiteProjectsLead,
              }}
            ></p>
            <WorkList audience={audience} />
          </div>
        </div>
      </div>
      <footer className="l_footer">
        <p className="l_footer__copy">
          Copyright © Asami Okamoto All rights reserved.
        </p>
      </footer>
    </>
  );
}
export default App;
