'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export function AgentSwarmIntroSection() {
  const { t } = useLanguage();

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
                src="/images/medical/agent_swarm_doctors.jpg"
                alt="Multidisciplinary Indian Medical Team"
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
                src="/images/medical/agent_swarm_workstation.jpg"
                alt="Clinical AI Diagnostics Workstation"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
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
                src="/images/medical/agent_swarm_icu.jpg"
                alt="Intensive Care Telemetry Monitoring"
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
                src="/images/medical/triage_er_intake.jpg"
                alt="Emergency Triage & Patient Intake"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>

        <div className="mod-scroll__images-text__text">
          <p>
            {t('swarm_intro_desc', 'Unlike simple chatbots, SynapseOS coordinates an entire Swarm of Agents. An Orchestrator plans multi-step workflows, delegating sub-tasks to specialized models like the Medical Scan Agent for OCR or the Symptom Triage Agent for emergency routing.')}
          </p>
        </div>
      </div>
    </div>
  );
}
