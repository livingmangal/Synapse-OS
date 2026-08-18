import React from 'react';

export function ClosingFlipSection() {
  return (
    <div className="mod-scroll__cierre bg-red c-black">
      <div className="mod-scroll__cierre__content">
        <div className="mod-scroll__cierre__content__image flipMedia flipMedia--upDown">
          <div
            className="media flipMedia__media flipMedia__media--down noAspect noAnimate no-general-anim"
            data-delay=""
          >
            <div className="media__wrap-source image">
              <img
                className="media__source w-100"
                src="/wp-content/uploads/2026/04/Foto-08-scaled-1.jpg"
                alt="Closure Image Top"
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
                src="/wp-content/uploads/2026/04/HOME_8_cierre2-1.jpg"
                alt="Closure Image Bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
