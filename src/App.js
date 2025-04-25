import "./assets/css/tailwind.css";
import "./assets/sass/style.scss";
import ProfileSection from "./components/prof";
import Heading from "./components/heading";
import WorkList from "./components/worklist";
import TechSlider from "./components/techSlider";
import { IoMailOutline } from "react-icons/io5";
import { RiBug2Line } from "react-icons/ri";
// Images
import placeholder from "./assets/images/placeholder-614.png";
import team from "./assets/images/team.png";
import roster from "./assets/images/roster.png";
import roster2 from "./assets/images/roster-2.png";
import timesheet from "./assets/images/timesheet.png";
import requestAvailability from "./assets/images/request-availability.png";
import widgetSetting from "./assets/images/widget-setting.png";
import flowControl from "./assets/images/flow-control.png";
import specialDay from "./assets/images/special-day.png";
import subscription from "./assets/images/subscription.png";
import wabify from "./assets/images/wabify.png";
import widget from "./assets/images/widget.png";
const slides = [
  {
    title: "Team Management Dashboard",
    lead: "Easily view and manage all your staff members, their roles, job types, contracts, and performance levels at a glance.",
    img: team,
  },
  {
    title: "Weekly Roster Planning",
    lead: "Assign, update, or review shifts for your team members. Track availability, time-off requests, and total hours per week.",
    img: roster,
  },
  {
    title: "Employee Timesheets",
    lead: "Track employee clock-ins and clock-outs, calculate total hours and wages, and approve or edit entries with ease.",
    img: timesheet,
  },
  {
    title: "Customize and Manage Your Booking Widget",
    lead: "Set your branding with images, logo, and colors to match your restaurant’s identity. Preview how your widget will look to customers.",
    img: widgetSetting,
  },
  {
    title: "Flow Control Settings",
    lead: "Configure unique service flows for each day. Manage late-night or lunch services with individual settings and visuals.",
    img: flowControl,
  },
  {
    title: "Special Days Settings",
    lead: "Set and customize public holidays or unique events. Adjust shift timings and open/closed status per day.",
    img: specialDay,
  },
  {
    title: "Subscription Summary & Status",
    lead: "View your current subscription plan, track payment history, and manage upgrades, cancellations, or refunds in one place.",
    img: subscription,
  },
];
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
      <div className="globalInner">
        <Heading
          titleEn="ABOUT"
          titleJp="Creating clean, functional, and beautiful web experiences."
        />
      </div>
      <ProfileSection />
      <div className="pg_works">
        <div className="pg_works__inner">
          <div className="globalInner">
            <Heading
              titleEn="WORKS"
              titleJp="A selection of recent design and development work."
            />
            <div style={{ marginBottom: "180px" }}>
              <div className="u_mb--m">
                <h2 className="p_sec__ttl--xs">
                  Programming × UI/UX At Wabify
                </h2>
                <p>
                  React / TypeScript / Tailwind CSS / REST API / Next.js /
                  Stripe API / POS system
                  <br />I was involved in everything from design to
                  implementation, building reusable components and ensuring
                  maintainable UI architecture. At <strong>Wabify</strong>, I
                  played a key role in developing a modern booking system and
                  its official landing page—handling the entire front-end
                  including UI/UX direction, implementation, and dashboard
                  integration.
                </p>
              </div>
              <div
                className="u_mb--80"
                style={{ maxWidth: "800px", margin: "0 auto" }}
              >
                <TechSlider slides={slides} />
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
                    <h3 className="p_card-m__ttl">
                      Wabify Official Landing Page
                    </h3>
                    <p>
                      I directed, designed, and implemented the entire landing
                      page for Wabify. This page introduces the product’s core
                      features and have a contact page.
                    </p>
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
                    <p>
                      I built a fully functional booking widget that lets users
                      select time slots and make reservations, all synced with
                      the admin dashboard. I was responsible for the entire
                      front-end, including widget UI, time slot display,
                      reservation flow, and dashboard integration.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <h2 className="p_sec__ttl--xs">Website Projects</h2>
            <p>
              These website projects reflect my earlier work, mainly using
              WordPress and jQuery. They demonstrate my foundation in front-end
              development and visual design, which has since evolved into more
              modern frameworks and UI/UX-focused solutions.
            </p>
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
