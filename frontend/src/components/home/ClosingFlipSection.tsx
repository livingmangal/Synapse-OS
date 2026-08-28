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
                src="/images/medical/aiims_new_delhi_block.jpg"
                alt="AIIMS Healthcare Center New Delhi"
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
                src="/images/medical/agent_swarm_doctors.jpg"
                alt="SynapseOS Multidisciplinary Clinical Care Team"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
