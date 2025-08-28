// src/App.js
import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./assets/css/tailwind.css";
import "./assets/sass/style.scss";
import ProfileSection from "./components/prof";
import WorkList from "./components/worklist";
import SocialSection from "./components/SocialSection";
import WabiV2Section from "./components/WabiV2Section";
import WabiV1Section from "./components/WabiV1Section";
import Header from "./components/Header";
import { copy } from "./copy.js";
import v2Sp from "./assets/images/wbv2sp.png";
import programming from "./assets/images/programming.png";

function getAudience() {
  const searchAud = new URLSearchParams(window.location.search).get("aud");
  if (searchAud) return searchAud === "jp" ? "jp" : "global";
  const hash = window.location.hash || "";
  const q = hash.split("?")[1];
  if (q) {
    const aud = new URLSearchParams(q).get("aud");
    if (aud) return aud === "jp" ? "jp" : "global";
  }
  return "global";
}

function App() {
  const audience = getAudience();
  const t = copy[audience];

  // Set language attribute based on audience
  React.useEffect(() => {
    document.documentElement.lang = audience === "jp" ? "ja" : "en";
  }, [audience]);

  return (
    <Router>
      {/* 必要なら簡易ナビ（消してOK） */}

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <section className="h-[600px] px-8 md:px-40 flex items-center relative">
                <div className="mx-auto max-w-[1200px] w-full">
                  <h1 className="text-7xl md:text-8xl max-w-[600px] use-inter font-normal">
                    Design Engineer bridging UI/UX and front-end implementation.
                  </h1>
                </div>
                <Header />
              </section>

              <div className="w-full px-8 md:px-40 mb-80">
                <div className="max-w-[1200px] mx-auto">
                  <div className="flex w-full gap-24 flex-col md:flex-row">
                    {/* V2 */}
                    <Link to="/wabi-v2" className="block group flex-1">
                      <div className="p-20 md:p-40 bg-gray-200 overflow-hidden mb-8 w-full h-[300px] md:h-[500px] flex items-center justify-center">
                        <img
                          src={v2Sp}
                          alt="Wabify V2"
                          className="max-h-full max-w-full object-contain transform transition duration-300 group-hover:scale-105"
                        />
                      </div>

                      <p className="text-gray-900 text-4xl use-inter">
                        {t.home.v2.title}
                      </p>
                      <p className="text-gray-500">{t.home.v2.subtitle}</p>
                    </Link>

                    {/* V1 */}
                    <Link to="/wabi-v1" className="block group flex-1">
                      <div className="p-20 md:p-40 bg-gray-200 overflow-hidden mb-8 w-full h-[300px] md:h-[500px] flex items-center justify-center">
                        <img
                          src={programming}
                          alt="Wabify V1"
                          className="max-h-full max-w-full object-contain transform transition duration-300 group-hover:scale-105"
                        />
                      </div>

                      <p className="text-gray-900 text-4xl use-inter">
                        {t.home.v1.title}
                      </p>
                      <p className="text-gray-500">{t.home.v1.subtitle}</p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="globalInner u_mb--120">
                <ProfileSection audience={audience} />
              </div>

              {/* <div className="globalInner">
                <h2 className="p_sec__ttl--xs">Website Projects</h2>
                <p
                  dangerouslySetInnerHTML={{ __html: t.websiteProjectsLead }}
                />
                <WorkList audience={audience} />
              </div> */}
            </>
          }
        />

        {/* 別ページ：Wabi V2 */}
        <Route
          path="/wabi-v2"
          element={
            <>
              <Header />
              <WabiV2Section audience={audience} />
            </>
          }
        />

        {/* 別ページ：Wabi V1 */}
        <Route
          path="/wabi-v1"
          element={
            <>
              <Header />
              <WabiV1Section audience={audience} />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
