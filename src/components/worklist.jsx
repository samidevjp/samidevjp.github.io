import React from "react";
import threelight from "../assets/images/threelight.png";
import lalaland from "../assets/images/lalaland.png";
// import marusanai from "../assets/images/marusanai.png";
// import fuji from "../assets/images/fuji.png";
// import fujiK from "../assets/images/fuji-k.png";
import merpay from "../assets/images/merpay.png";

const workLists = {
  jp: [
    {
      imageSrc: threelight,
      title: "株式会社スリーライト コーポレートサイト",
      companyName: "株式会社スリーライト",
      link: "https://www.threelight.co.jp/",
      description:
        "株式会社スリーライトのコーポレートサイトです。Cookie制御による初回アニメーション、フロントエンド開発を担当しました。",
      period: "2023年8月 - 2023年9月",
      category:
        "WordPress, MySQL, PHP, JavaScript, jQuery, Sass, デザイン (Adobe XD, Photoshop)",
    },
    {
      imageSrc: lalaland,
      title: "株式会社LaLaLand コーポレートサイト",
      companyName: "株式会社LaLaLand",
      link: "https://la-la-land.co.jp/",
      description:
        "計21ページからなる幼稚園のコーポレートサイトです。WordPressで構築されています。",
      period: "2023年5月 - 2023年7月",
      category: "WordPress, MySQL, JavaScript, jQuery, Sass",
    },
    {
      imageSrc: merpay,
      title: "Merpay & Mercoin Tech Fest 2023 イベントサイト",
      companyName: "株式会社メルペイ / 株式会社メルコイン",
      link: "https://events.merpay.com/techfest-2023/",
      description:
        "技術や組織などを紹介するオンライン技術カンファレンスのイベントサイトのフロントエンド開発を担当しました。全セッションが独自のモーダルを持つなど、ボリュームの大きいサイトです。",
      period: "2023年6月 - 2023年9月",
      category: "TypeScript, JavaScript, Node.js, Sass",
    },
  ],
  global: [
    {
      imageSrc: threelight,
      title: "Corporate Site – Threelight Inc.",
      companyName: "Threelight Inc.",
      link: "https://www.threelight.co.jp/",
      description:
        "This is the corporate site of threelight. The first animation is controlled by a cookie system and can be seen only the first time on the same day.",
      period: "Aug 2023 - Sep 2023",
      category:
        "WordPress, MySQL, PHP, JavaScript, jQuery, Sass, Design (Adobe XD, Photoshop)",
    },
    {
      imageSrc: lalaland,
      title: "Corporate Site – LaLaLand",
      companyName: "株式会社LaLaLand",
      link: "https://la-la-land.co.jp/",
      description:
        "This is the corporate site of one kindergarten, with 21 pages in WordPress.",
      period: "May 2023 - Jul 2023",
      category: "WordPress, MySQL, JavaScript, jQuery, Sass",
    },
    {
      imageSrc: merpay,
      title: "Event Site – Merpay & Mercoin Tech Fest 2023",
      companyName: "Merpay, Inc. and/or Mercoin, Inc.",
      link: "https://events.merpay.com/techfest-2023/",
      description:
        "This is an Event Site for an online tech conference that spotlight technology, organizations, and so on. All sessions have their own modals so it has a great volume.",
      period: "June 2023 - Sep 2023",
      category: "TypeScript, JavaScript, Node.js, Sass, Design (Adobe XD)",
    },
  ],
};

const WorkItem = ({
  imageSrc,
  title,
  companyName,
  link,
  description,
  category,
}) => (
  <li className="pg_works__item p_works-cap">
    <a className="thumb" href={link} target="_blank" rel="noopener noreferrer">
      <img src={imageSrc} alt={title} />
      <span className="info_group">
        <p className="title">
          {title}
          <span className="material-symbols-outlined">open_in_new</span>
        </p>
        <p>{companyName}</p>
      </span>
    </a>
    <div className="pg_works__item-cap">
      <p className="ttl">{title}</p>
      <p className="client">{companyName}</p>
      <p className="point">{description}</p>
      <p className="category">{category}</p>
    </div>
  </li>
);

const WorkList = ({ audience }) => {
  const list = workLists[audience] || workLists.global;
  return (
    <ul className="pg_works__group">
      {list.map((workItem, index) => (
        <WorkItem
          key={index}
          imageSrc={workItem.imageSrc}
          title={workItem.title}
          companyName={workItem.companyName}
          link={workItem.link}
          description={workItem.description}
          period={workItem.period}
          category={workItem.category}
        />
      ))}
    </ul>
  );
};

export default WorkList;
