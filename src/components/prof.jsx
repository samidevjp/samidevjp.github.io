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
                React / JavaScript / TypeScript / UI/UX Design / Node.js /
                WordPress / PHP / Bootstrap / Sass / Figma / Adobe Creative
                Suite (Illustrator, Photoshop, XD, Premiere Pro, After Effects)
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
              implementation. I played a central role in proposing and designing
              new features, contributing across UI/UX, programming, and project
              direction. Skilled in building clean, scalable, and maintainable
              React applications with a focus on intuitive user experiences and
              aesthetic design. Now aiming to take the next step in my career by
              leveraging my combined experience in design, development, and
              leadership to contribute to globally impactful projects.
              Passionate about clear communication, team collaboration, and
              taking on new challenges.
            </p>

            <p>
              Strong history of structuring directories and files that is easy
              for anyone to maintain. (Using The W3C MarkUp, BEM, Sass)
            </p>

            <p>
              Looking to bring excellent good UI design, more globally
              understandable files, and implement highly aesthetic sites to take
              the next career step with attentive and prompt communication with
              a&nbsp; team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
