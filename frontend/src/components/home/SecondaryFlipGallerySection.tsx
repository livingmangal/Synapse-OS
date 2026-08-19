import React from 'react';

export function SecondaryFlipGallerySection() {
  return (
    <div className="mod-scroll__images bg-beige c-black secundario">
      <div
        className="mod-scroll__images__flip flipMedia flipMedia--rightLeft"
        data-duration="1.7"
        data-start="116% 100%"
      >
        <div
          className="media flipMedia__media flipMedia__media--down noAspect noAnimate no-general-anim"
          data-delay=""
        >
          <div className="media__wrap-source image">
            <img
              className="media__source w-100"
              src="/wp-content/uploads/2026/04/HOME_6.1-previa-1rgf.jpg"
              alt="Clinical Scan Preview"
            />
          </div>
        </div>

        <div
          className="media flipMedia__media flipMedia__media--up noAspect noAnimate no-general-anim"
          data-delay=""
        >
          <div className="media__wrap-source image">
            <img
              className="media__source w-100"
              src="/wp-content/uploads/2025/08/HOME_6.1-previa.jpg"
              alt="Clinical Scan Diagram"
            />
          </div>
        </div>
      </div>

      <div
        className="mod-scroll__images__flip flipMedia flipMedia--leftRight"
        data-duration="1.7"
        data-start="100% 100%"
      >
        <div
          className="media flipMedia__media flipMedia__media--down noAspect noAnimate no-general-anim"
          data-delay=""
        >
          <div className="media__wrap-source image">
            <img
              className="media__source w-100"
              src="/wp-content/uploads/2026/04/HOME_6.2g.jpg"
              alt="Medical Imaging Flow"
            />
          </div>
        </div>

        <div
          className="media flipMedia__media flipMedia__media--up noAspect noAnimate no-general-anim"
          data-delay=""
        >
          <div className="media__wrap-source image">
            <img
              className="media__source w-100"
              src="/wp-content/uploads/2026/04/HOME_8_cierre2.jpg"
              alt="Sanjeevani Telemetry"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
