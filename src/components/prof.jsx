import React from "react";

const ProfileSection = () => {
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
                src="https://okamotoasami.com/wp/wp-content/uploads/2023/11/IMG_20201227_173418_128-300x300.jpg"
                alt=""
                className="wp-image-43"
                srcSet="https://okamotoasami.com/wp/wp-content/uploads/2023/11/IMG_20201227_173418_128-300x300.jpg 300w, https://okamotoasami.com/wp/wp-content/uploads/2023/11/IMG_20201227_173418_128-150x150.jpg 150w, https://okamotoasami.com/wp/wp-content/uploads/2023/11/IMG_20201227_173418_128-768x768.jpg 768w, https://okamotoasami.com/wp/wp-content/uploads/2023/11/IMG_20201227_173418_128.jpg 942w"
                sizes="(max-width: 300px) 100vw, 300px"
              />
            </div>
            <div className="profLead">
              <p className="u_mb--s">
                Hello! My name is Asami Okamoto. Thank you for browsing my
                portfolio Site.
              </p>
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
            <p>
              A web developer with 5 years of experience, specializing in
              React-based front-end development. At Wabify, a
              hospitality-focused software company in Australia, I served as the
              UI/UX Head Designer, leading website projects from direction to
              implementation. I proposed and designed new features while
              contributing extensively across UI/UX, high-quality programming,
              and project direction.
            </p>

            <p>
              Known for my strong communication skills and collaborative
              approach, I worked closely with teammates and the backend team in
              the Philippines to deliver cohesive, efficient solutions. I’m
              passionate about writing clean, maintainable code and building
              globally understandable, highly aesthetic interfaces. I’m now
              seeking a new opportunity where I can bring thoughtful design,
              strong technical execution, and prompt team communication to the
              next level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
