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
              src="/images/medical/scan_radiologist_diagnostic.jpg"
              alt="Clinical Scan AI Diagnostics"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
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
              src="/images/medical/scan_ct_suite.jpg"
              alt="Clinical CT Imaging Suite"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
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
              src="/images/medical/gallery_robotic_surgery.jpg"
              alt="Advanced Surgical Operating Theater"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
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
              src="/images/medical/orchestrator_ops_center.jpg"
              alt="SynapseOS Hospital Operations Telemetry"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
