import React from "react";
import wabify from "../assets/images/wabify.png";
import widget from "../assets/images/widget.png";
import { copy } from "../copy";

const ExternalLinks = ({ audience = "global" }) => {
  const t = copy[audience];
  return (
    <>
      <div className="mb-24">
        <h3 className="text-6xl font-semibold mb-4 use-inter">
          External Links
        </h3>
        <p className="text-gray-500 leading-relaxed"></p>
      </div>
      <div className=" grid md:grid-cols-2 gap-24 max-w-[800px] mx-auto">
        <a
          className="p_card-m block"
          href="https://wabify.com/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="p_card-m__inner">
            <div className="p_card-m__img">
              <img src={wabify} alt="Wabify Landing" />
            </div>
            <div className="p_card-m__cap">
              <h3 className="p_card-m__ttl">{t.wabifyTitle}</h3>
              <p dangerouslySetInnerHTML={{ __html: t.wabifyLead }} />
            </div>
          </div>
        </a>

        <a
          className="p_card-m block"
          href="https://widget-staging.wabify.com/v2/67d25d091b48a1741839625"
          target="_blank"
          rel="noreferrer"
        >
          <div className="p_card-m__inner">
            <div className="p_card-m__img">
              <img src={widget} alt="Booking Widget" />
            </div>
            <div className="p_card-m__cap">
              <h3 className="p_card-m__ttl">Booking System Widget</h3>
              <p dangerouslySetInnerHTML={{ __html: t.bookingWidgetLead }} />
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default ExternalLinks;
