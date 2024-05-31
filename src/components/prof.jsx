import React from "react";

const ProfileSection = () => {
  return (
    <section className="prof">
      <div className="globalInner">
        <div className="p_pg-head">
          <h1 className="main">ABOUT</h1>
          <p className="sub">プロフィール</p>
        </div>

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
              <h2 className="p_sec__ttl--xs">SKILL</h2>

              <p>
                HTML / CSS / Bootstrap / Sass / JavaScript / TypeScript /
                Node.js / jQuery / WordPress / PHP / Vue.js / React.js / Adobe (
                Illustrator, Photoshop, XD, premiere Pro, After Effect )
              </p>
            </div>
          </div>
          <div className="profTxt">
            <h2 className="p_sec__ttl--xs">SUMMARY</h2>

            <p>
              A web developer with 5 years of experience, known for designing
              and implementing sites with meticulous attention to detail and
              ease of communication. Strong in structuring directories and files
              for easy maintenance by anyone. Aiming to advance to the next
              career step by creating globally understandable files and
              achieving highly aesthetic front-end designs. Values careful and
              prompt communication with the team. Passionate about diving into
              new environments and embracing new opportunities.
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
