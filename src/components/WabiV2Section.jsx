import React from "react";
import TechSlider from "./techSlider";
import ExternalLinks from "./ExternalLinks";
import { copy } from "../copy";

// Design Images
import designDashboard from "../assets/images/design-dashboard.png";
import designLogin from "../assets/images/design-login.png";
import designSignup from "../assets/images/design-signup.png";
import designMod from "../assets/images/design-mod.png";
import designItem from "../assets/images/design-item.png";
import figmaMobile from "../assets/images/figma-mobile.png";
// Programming Images
import team from "../assets/images/team.png";
import roster from "../assets/images/roster.png";
import timesheet from "../assets/images/timesheet.png";
import widgetSetting from "../assets/images/widget-setting.png";
import flowControl from "../assets/images/flow-control.png";
import specialDay from "../assets/images/special-day.png";
import subscription from "../assets/images/subscription.png";
import wabiv2sp from "../assets/images/wabi-v2-sp.png";
import wabiv2Signup from "../assets/images/v2-signup.png";
import wabiv2Items from "../assets/images/v2-items.png";
import wabiv2ItemEdit from "../assets/images/v2-item-edit.png";
import wabiv2ItemsTab from "../assets/images/v2-items-tab.png";
import wabiv2LinkitemsTab from "../assets/images/v2-link-items-tab.png";
import wabiv2PosTab from "../assets/images/v2-pos-tab.png";
import wabiv2InvoiceTab from "../assets/images/v2-invoice-tab.png";
import wabiv2Setting from "../assets/images/v2-setting-tab.png";
import wabiV2DashboardTab from "../assets/images/v2-dashboard-tab.png";
import wabiv2StockCount from "../assets/images/v2-stock-count-tab.png";
import wabiv2EditMod from "../assets/images/v2-edit-modifier-tab.png";
import wabiSideMenuSp from "../assets/images/v2-sidemenu-sp.png";
import wabiV2BookingDetailTab from "../assets/images/v2-booking-detail-tab.png";
import wabiV2Timeline from "../assets/images/v2-timeline-tab.png";

function WabiV2Section({ audience = "global", overview, goal }) {
  const t = copy[audience];

  // --- Design slides ---
  const designSlides = [
    { title: "Dashboard", img: designDashboard },
    { title: "Login", img: designLogin },
    { title: "Signup", img: designSignup },
    { title: "Modifiers", img: designMod },
    { title: "Item", img: designItem },
    { title: "Mobile", img: figmaMobile },
  ].map((slide) => {
    const keyMap = {
      Dashboard: "designDashboard",
      Login: "designLogin",
      Signup: "designSignup",
      Modifiers: "designModifiers",
      Item: "designItem",
      Mobile: "figmaMobile",
    };
    return { ...slide, lead: t[keyMap[slide.title]] };
  });

  // --- Programming slides ---
  const baseSlides = [
    { title: copy.global.teamManagement, img: team },
    { title: copy.global.rosterPlanning, img: roster },
    { title: copy.global.timesheets, img: timesheet },
    { title: copy.global.widgetSettings, img: widgetSetting },
    { title: copy.global.flowControl, img: flowControl },
    { title: copy.global.specialDays, img: specialDay },
    { title: copy.global.subscription, img: subscription },
  ];

  const localizedSlides = baseSlides.map((slide) => {
    const leadKeyMap = {
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
      lead: t[leadKeyMap[slide.title]],
    };
  });

  const overviewText =
    overview ||
    (audience === "jp"
      ? "Wabi V2 では、既存のホスピタリティ向けシステムの課題を洗い出し、UI/UX を全面的に再設計しました。操作の複雑さや情報過多といった問題を解決し、ユーザーが直感的に操作できるように改善しています。レストランやカフェの現場スタッフがストレスなく業務を行えるよう、シンプルで一貫性のあるデザインを重視しました。"
      : "In Wabi V2, we conducted a full redesign of the hospitality management system to address key usability issues. The previous version was complex, text-heavy, and time-consuming to navigate. By simplifying workflows and presenting information more clearly, we created a more intuitive experience. The design focuses on helping restaurant and café staff perform tasks efficiently and with less stress.");
  const goalText =
    goal ||
    (audience === "jp"
      ? "目標は「使いやすさ」と「信頼性」を高めることでした。具体的には、メニュー構造と情報設計を整理して学習コストを下げる / 必要な機能をすぐに見つけられるシンプルなナビゲーション / 誤操作を防ぐための戻る・取り消し機能の導入 / モバイル・タブレット・PC すべてで一貫した体験を提供 - これらを通じて、現場のスタッフが日常業務に集中できる環境を実現しました。"
      : "Our primary goal was to enhance usability and reliability. Specifically: Simplify menu structures and information architecture to reduce learning effort / Provide clear navigation so essential features are always easy to find / Introduce undo/back functions to minimize user errors / Ensure a consistent experience across mobile, tablet, and desktop - Through these improvements, Wabi V2 empowers staff to focus on their daily work without friction.");
  const findingsText =
    audience === "jp"
      ? [
          "Floor、席、時間の区切りがすべて画一的に表示されており、どこがテーブルの境界でどこが時間の目盛りなのかが直感的に把握しにくかった。",
          "そのため予約情報の確認や空席の把握に余計な認知コストがかかっていた。",
        ]
      : [
          "The boundaries between floors, tables, and time slots were visually uniform, making it hard to quickly distinguish where one section ended and another began.",
          "This caused confusion when checking reservations or spotting available tables, increasing cognitive load.",
        ];

  // --- New Slides Array ---
  const v2ShowcaseSlides = [
    {
      title: "Signup / Inventory Items / Item Edit",
      content: (
        <div className="grid md:grid-cols-3 gap-24 w-full mx-auto">
          <div className="">
            <img src={wabiv2Signup} alt="Wabi V2 Signup" />
          </div>
          <div className="">
            <img src={wabiv2Items} alt="Wabi V2 Items" />
          </div>
          <div className="">
            <img src={wabiv2ItemEdit} alt="Wabi V2 Item Edit" />
          </div>
        </div>
      ),
    },
    {
      title: "Inventory Items - Tablet",
      content: (
        <div className="">
          <img src={wabiv2ItemsTab} alt="Wabi V2 Items Tab" />
        </div>
      ),
    },
    {
      title: "POS - Tablet",
      content: (
        <div className="">
          <img src={wabiv2PosTab} alt="Wabi V2 POS Tab" />
        </div>
      ),
    },
    {
      title: "UploadInvoice - Tablet",
      content: (
        <div className="">
          <img src={wabiv2InvoiceTab} alt="Wabi V2 POS Tab" />
        </div>
      ),
    },

    {
      title: "Link Items Modal - Tablet",
      content: (
        <div className="">
          <img src={wabiv2LinkitemsTab} alt="Wabi V2 Link Items Tab" />
        </div>
      ),
    },
  ];
  return (
    <section className="mb-96">
      <div className="globalInner justify-between flex gap-24 items-center h-[780px] mb-60">
        <div>
          <h2 className="text-8xl mb-8 use-inter font-normal">Wabify V2</h2>
          <p className="text-gray-500 text-2xl mb-8">UI/UX Design</p>
          <p
            dangerouslySetInnerHTML={{ __html: t.uiuxLead }}
            className="text-gray-500 max-w-[800px]"
          />
        </div>
        <div className="w-full  max-w-[450px]  justify-center md:flex hidden">
          <img src={wabiv2sp} alt="Wabify V2" className="max-w-[280px]" />
        </div>
      </div>
      <div className="globalInner">
        <div className="max-w-[800px] mb-60">
          <div className="mb-24">
            <h3 className="text-6xl font-semibold mb-4 use-inter">Overview</h3>
            <p className="text-gray-600 leading-relaxed">{overviewText}</p>
          </div>
          <div className="">
            <h3 className="text-6xl font-semibold mb-4 use-inter">Goal</h3>
            <p className="text-gray-600 leading-relaxed">{goalText}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 w-full mb-60">
          <div className="mb-24 md:mb-0">
            <h3 className="text-4xl font-semibold mb-4 use-inter">Role</h3>
            <p className="text-gray-600 leading-relaxed">Lead UX Designer</p>
          </div>
          <div className="mb-24 md:mb-0">
            <h3 className="text-4xl font-semibold mb-4 use-inter">Tools</h3>
            <a href="https://wabify.com/" target="_blank" rel="noreferrer">
              Figma
            </a>
          </div>
          <div className="">
            <h3 className="text-4xl font-semibold mb-4 use-inter">Team</h3>
            <p className="text-gray-600 leading-relaxed">
              5 members (designer, developers, project manager)
            </p>
          </div>
        </div>
        <hr className="border-gray-200 mb-60" />

        <div className="mb-60">
          <h3 className="text-6xl font-semibold mb-6 use-inter">
            {audience === "jp" ? "Findings" : "Findings"}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-24 max-w-[800px]">
            {audience === "jp"
              ? "Wabi V1 の調査から明らかになった主要課題"
              : "Key issues identified from testing and feedback on Wabi V1."}
          </p>
          <div className="md:grid md:grid-cols-3 gap-24 ">
            {findingsText.map((text, index) => (
              <div key={index} className="mb-24 md:mb-0">
                <h4 className="text-4xl mb-6 font-bold use-inter">
                  {audience === "jp"
                    ? `Finding ${index + 1}`
                    : `Finding ${index + 1}`}
                </h4>
                <p className="text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Solutions Section --- */}
        <div className="mb-60">
          <h3 className="text-6xl font-semibold mb-24 use-inter">
            {audience === "jp" ? "Solutions" : "Solutions"}
          </h3>

          {/* Solution 1 */}
          <div className="mb-40">
            <h4 className="text-4xl font-bold mb-6 use-inter">
              {audience === "jp" ? "Solution 1" : "Solution 1"}
            </h4>
            <p className="text-gray-700 leading-relaxed mb-12 max-w-[800px]">
              {audience === "jp"
                ? "フロア、席、時間の区切りを視覚的に差別化したタイムラインデザインを導入しました。横軸は時間、縦軸はテーブルを明確に区切り、Floorごとにセクションを分けることで直感的に把握できるようにしました。これにより、重複予約や空席の確認が容易になり、スタッフは効率的に席を管理できるようになりました。"
                : "We introduced a redesigned timeline with clear visual distinctions between floors, tables, and time slots. The horizontal axis represents time, while the vertical axis organizes tables with separated floor sections, making the layout more intuitive. This allows staff to easily identify overlaps and available tables, enabling more efficient reservation management."}
            </p>
            <div className="grid md:grid-cols-2 items-center justify-center gap-12 md:max-h-[500px]">
              <img
                className="object-contain w-full md:max-h-[500px]"
                src={wabiV2Timeline}
                alt="Dashboard Tab"
              />
              <img
                className="object-contain w-full max-h-[350px] md:max-h-[500px]"
                src={wabiV2BookingDetailTab}
                alt="Side Menu Mobile"
              />
            </div>
          </div>

          {/* Solution 2 */}
          <div className="mb-40">
            <h4 className="text-4xl font-bold mb-6 use-inter">
              {audience === "jp" ? "Solution 2" : "Solution 2"}
            </h4>
            <p className="text-gray-700 leading-relaxed mb-12 max-w-[800px]">
              {audience === "jp"
                ? "冗長なデザイン要素や過剰なテキストを削減し、インターフェースをシンプルにしました。更新後のモディファイア編集画面や設定画面では、必要な情報だけを表示することで、画面がより見やすく、理解しやすくなりました。"
                : "We simplified the interface by reducing redundant design elements and minimizing excessive text. The updated Modifier and Settings screens present only the essential information, making the interface cleaner and easier to read."}
            </p>
            <div className="grid md:grid-cols-2 gap-12">
              <img src={wabiv2EditMod} alt="Edit Modifier Tab" />
              <img src={wabiv2Setting} alt="Settings Tab" />
            </div>
          </div>

          {/* Solution 3 */}
          <div className="mb-40">
            <h4 className="text-4xl font-bold mb-6 use-inter">
              {audience === "jp" ? "Solution 3" : "Solution 3"}
            </h4>
            <p className="text-gray-700 leading-relaxed mb-12 max-w-[800px]">
              {audience === "jp"
                ? "在庫カウントや請求書アップロードなどのワークフローにおいて、戻る・取り消し機能を追加しました。これによりユーザーが操作をコントロールしやすくなり、ストレスが軽減され、システムへの信頼性も向上しました。"
                : "We added clear back and undo options in workflows like Stock Count and Invoice Upload. These improvements give users more control, reduce frustration, and increase overall trust in the system."}
            </p>
            <div className="grid md:grid-cols-2 gap-12">
              <img src={wabiv2StockCount} alt="Stock Count Tab" />
              <img src={wabiv2InvoiceTab} alt="Invoice Upload Tab" />
            </div>
          </div>
        </div>
        <hr className="border-gray-200 mb-60" />

        {/* --- External Links --- */}
        <ExternalLinks audience={audience} />
      </div>
    </section>
  );
}

export default WabiV2Section;
