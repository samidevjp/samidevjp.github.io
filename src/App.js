import logo from "./logo.svg";
import "./assets/sass/style.scss";
// import './App.css';
import ProfileSection from "./components/prof";
import TtlSection from "./components/workttl";
import LeadSection from "./components/worklead";
import WorkList from "./components/worklist";
import { IoMailOutline } from "react-icons/io5";
import { RiBug2Line } from "react-icons/ri";

function App() {
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
      <ProfileSection />

      <div className="pg_works">
        <div className="pg_works__inner">
          <div className="globalInner">
            <TtlSection />
            <LeadSection />
            <WorkList />
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
