import React from 'react';

export function HeroFlipGallerySection() {
  return (
    <div className="mod-scroll__images bg-white principal" style={{ overflow: 'hidden' }}>
      <div
        className="media mod-scroll__images__image-single noAspect noAnimate no-general-anim"
        data-delay=""
        style={{ overflow: 'hidden' }}
      >
        <div className="media__wrap-source image" style={{ overflow: 'hidden' }}>
          <img
            className="media__source w-100"
            src="/1st-photo-new.jpg"
            alt="Sanjeevani Architecture Schematic"
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
      </div>

      <div
        className="mod-scroll__images__flip flipMedia flipMedia--upDown"
        data-duration="1.2"
        style={{ overflow: 'hidden' }}
      >
        <div
          className="media flipMedia__media flipMedia__media--down noAspect noAnimate no-general-anim"
          data-delay=""
          style={{ overflow: 'hidden' }}
        >
          <div
            className="media__wrap-source image"
            style={{
              overflow: 'hidden',
              background: '#f8fafc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              className="media__source w-100"
              src="/images/medical/gallery_icu_barasat.jpg"
              alt="Hospital Intensive Care Ward"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
        </div>

        <div
          className="media flipMedia__media flipMedia__media--up noAspect noAnimate no-general-anim"
          data-delay=""
          style={{ overflow: 'hidden' }}
        >
          <div
            className="media__wrap-source image"
            style={{
              overflow: 'hidden',
              background: '#f8fafc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              className="media__source w-100"
              src="/images/medical/closing_hospital_building.jpg"
              alt="National Health Infrastructure"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
