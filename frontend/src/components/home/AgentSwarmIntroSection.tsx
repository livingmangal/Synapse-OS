import React from 'react';

export function AgentSwarmIntroSection() {
  return (
    <div className="mod-scroll__images-text bg-black c-white">
      <div className="wrapper">
        <div
          className="mod-scroll__images-text__flip flipMedia flipMedia--rightLeft"
          data-duration="1.3"
          data-start="100% 70%"
        >
          <div
            className="media flipMedia__media flipMedia__media--down noAspect noAnimate no-general-anim"
            data-delay=""
          >
            <div className="media__wrap-source image">
              <img
                className="media__source w-100"
                src="/wp-content/uploads/2026/04/CONOCENOS_GAL_3-2.jpg"
                alt="Agent Swarm Overview"
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
                src="/wp-content/uploads/2025/08/HOME_4.1_previa.jpg"
                alt="Agent Swarm Preview"
              />
            </div>
          </div>
        </div>

        <div
          className="mod-scroll__images-text__flip flipMedia flipMedia--leftRight"
          data-duration="1.3"
          data-start="0% 70%"
        >
          <div
            className="media flipMedia__media flipMedia__media--down noAspect noAnimate no-general-anim"
            data-delay=""
          >
            <div className="media__wrap-source image">
              <img
                className="media__source w-100"
                src="/wp-content/uploads/2025/07/MMP-1857209.png"
                alt="Agent Swarm Schematics"
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
                src="/wp-content/uploads/2025/08/HOME_4.2.jpg"
                alt="Agent Swarm Clinical Flow"
              />
            </div>
          </div>
        </div>

        <div className="mod-scroll__images-text__text">
          <p>
            Unlike simple chatbots, Sanjeevani OS coordinates an entire Swarm of Agents. An Orchestrator plans
            multi-step workflows, delegating sub-tasks to specialized models like the Medical Scan Agent for OCR or
            the Symptom Triage Agent for emergency routing.
          </p>
        </div>
      </div>
    </div>
  );
}
