import React from 'react';

export function ProjectsSection() {
  return (
    <div className="mod-scroll__projects bg-beige c-black">
      <div className="mod-scroll__projects__wrap-text bg-beige c-black">
        <div className="mod-scroll__projects__section mod-scroll__section t-parrafo-l f-edit">Projects</div>
        <div className="mod-scroll__projects__text f-izmir t-parrafo">
          Our architecture relies on 18 specialized agents, from document OCR to on-chain records. Explore the core
          cluster that powers the Sanjeevani platform.
        </div>
      </div>

      {/* Project 1: Orchestrator Agent */}
      <div className="mod-scroll__projects__item bg-beige c-black">
        <div className="mod-scroll__projects__item__content">
          <div className="media mod-scroll__projects__item__image noAnimate no-general-anim" data-delay="">
            <div className="media__wrap-source image">
              <img
                className="media__source w-100"
                src="/wp-content/uploads/2026/04/HOME_8_PZE-1.jpg"
                alt="Sanjeevani Orchestrator Agent"
              />
            </div>
          </div>

          <div className="mod-scroll__projects__item__text">
            <div className="mod-scroll__projects__item__text__data">
              <div className="f-edit t-parrafo-l">
                <span>2024</span>
              </div>
              <div className="f-izmir t-parrafo-l">
                <span>OLEIROS</span>
              </div>
              <div className="f-izmir t-parrafo data-number">01</div>
              <span>
                <a
                  href="/projects/orchestrator-agent"
                  className="btn btn--bg btn--bg-inv btn--bg-beige c-black f-edit t-parrafo-l"
                >
                  The project
                </a>
              </span>
            </div>
            <div className="mod-scroll__projects__item__text__title t-upper f-regular t-titulo-xxl">
              Sanjeevani Orchestrator
            </div>
          </div>
        </div>
      </div>

      {/* Project 2: Medical Scan Agent */}
      <div className="mod-scroll__projects__item bg-grey">
        <div className="mod-scroll__projects__item__content">
          <div className="media mod-scroll__projects__item__image noAnimate no-general-anim" data-delay="">
            <div className="media__wrap-source image">
              <img
                className="media__source w-100"
                src="/wp-content/uploads/2025/08/HOME_8_PZE.jpg"
                alt="Medical Scan Agent"
              />
            </div>
          </div>

          <div className="mod-scroll__projects__item__text">
            <div className="mod-scroll__projects__item__text__data">
              <div className="f-edit t-parrafo-l">
                <span>2024</span>
              </div>
              <div className="f-izmir t-parrafo-l">
                <span>OLEIROS</span>
              </div>
              <div className="f-izmir t-parrafo data-number">02</div>
              <span>
                <a
                  href="/projects/medical-scan-agent"
                  className="btn btn--bg btn--bg-inv btn--bg-grey f-edit t-parrafo-l"
                >
                  The project
                </a>
              </span>
            </div>
            <div className="mod-scroll__projects__item__text__title t-upper f-izmir t-titulo-xxl">
              Medical Scan Agent
            </div>
          </div>
        </div>
      </div>

      {/* Project 3: Symptom Triage Agent */}
      <div className="mod-scroll__projects__item bg-blue">
        <div className="mod-scroll__projects__item__content">
          <div className="media mod-scroll__projects__item__image noAnimate no-general-anim" data-delay="">
            <div className="media__wrap-source image">
              <img
                className="media__source w-100"
                src="/wp-content/uploads/2025/08/HOME_8_PXG.jpg"
                alt="Symptom Triage Agent"
              />
            </div>
          </div>

          <div className="mod-scroll__projects__item__text">
            <div className="mod-scroll__projects__item__text__data">
              <div className="f-edit t-parrafo-l">
                <span>2023</span>
              </div>
              <div className="f-izmir t-parrafo-l">
                <span>CLINICAL</span>
              </div>
              <div className="f-izmir t-parrafo data-number">03</div>
              <span>
                <a
                  href="/projects/symptom-triage-agent"
                  className="btn btn--bg btn--bg-inv btn--bg-blue f-edit t-parrafo-l"
                >
                  The project
                </a>
              </span>
            </div>
            <div className="mod-scroll__projects__item__text__title t-upper f-edit t-titulo-xxl">
              Symptom Triage Agent
            </div>
          </div>
        </div>
      </div>

      {/* Project 4: 3D Live Interactive Body */}
      <div className="mod-scroll__projects__item bg-grey" style={{ backgroundColor: '#0b0f19' }}>
        <div className="mod-scroll__projects__item__content">
          <div className="media mod-scroll__projects__item__image noAnimate no-general-anim" data-delay="">
            <div className="media__wrap-source image">
              <img
                className="media__source w-100"
                src="/original-81f128047aa980c2c10cdfb3cf6095a3.webp"
                alt="3D Live Anatomy Explorer"
                style={{ filter: 'brightness(0.85) contrast(1.1)' }}
              />
            </div>
          </div>

          <div className="mod-scroll__projects__item__text">
            <div className="mod-scroll__projects__item__text__data">
              <div className="f-edit t-parrafo-l">
                <span style={{ color: '#818cf8' }}>3D LIVE</span>
              </div>
              <div className="f-izmir t-parrafo-l">
                <span>ANATOMY</span>
              </div>
              <div className="f-izmir t-parrafo data-number" style={{ color: '#818cf8' }}>
                04
              </div>
              <span>
                <a
                  href="/vibrant"
                  data-no-swup="true"
                  className="btn btn--bg btn--bg-inv btn--bg-grey f-edit t-parrafo-l"
                  style={{
                    borderColor: '#6366f1',
                    color: '#fff',
                    backgroundColor: 'rgba(99,102,241,0.25)',
                  }}
                >
                  Launch 3D Explorer
                </a>
              </span>
            </div>
            <div
              className="mod-scroll__projects__item__text__title t-upper f-izmir t-titulo-xxl"
              style={{ color: '#ffffff' }}
            >
              Interactive 3D Body
            </div>
          </div>
        </div>
      </div>

      {/* Project 5: Blockchain Records */}
      <div className="mod-scroll__projects__item bg-beige c-black">
        <div className="mod-scroll__projects__item__content">
          <div className="media mod-scroll__projects__item__image noAnimate no-general-anim" data-delay="">
            <div className="media__wrap-source image">
              <img
                className="media__source w-100"
                src="/wp-content/uploads/2026/04/HOME_8_JUN-1.jpg"
                alt="Blockchain Records"
              />
            </div>
          </div>

          <div className="mod-scroll__projects__item__text">
            <div className="mod-scroll__projects__item__text__data">
              <div className="f-edit t-parrafo-l">
                <span>2024</span>
              </div>
              <div className="f-izmir t-parrafo-l">
                <span>ICARIA IV</span>
              </div>
              <div className="f-izmir t-parrafo data-number">04</div>
              <span>
                <a
                  href=""
                  className="btn btn--bg btn--bg-inv btn--bg-beige c-black f-edit t-parrafo-l disabled"
                >
                  Próximamente
                </a>
              </span>
            </div>
            <div className="mod-scroll__projects__item__text__title t-upper f-regular t-titulo-xxl">
              Blockchain Records
            </div>
          </div>
        </div>
      </div>

      {/* Project 6: Outbreak Predictive */}
      <div className="mod-scroll__projects__item last-item bg-grey">
        <div className="mod-scroll__projects__item__content">
          <div className="media mod-scroll__projects__item__image noAnimate no-general-anim" data-delay="">
            <div className="media__wrap-source image">
              <img
                className="media__source w-100"
                src="/wp-content/uploads/2026/04/HOME_8_POL-1.jpg"
                alt="Outbreak Predictive Agent"
              />
            </div>
          </div>

          <div className="mod-scroll__projects__item__text">
            <div className="mod-scroll__projects__item__text__data">
              <div className="f-edit t-parrafo-l">
                <span>2024</span>
              </div>
              <div className="f-izmir t-parrafo-l">
                <span>MONTROVE</span>
              </div>
              <div className="f-izmir t-parrafo data-number">05</div>
              <span>
                <a
                  href=""
                  className="btn btn--bg btn--bg-inv btn--bg-grey f-edit t-parrafo-l disabled"
                >
                  Próximamente
                </a>
              </span>
            </div>
            <div className="mod-scroll__projects__item__text__title t-upper f-izmir t-titulo-xxl">
              Outbreak Predictive
            </div>
          </div>
        </div>

        {/* last-item__carousel */}
        <div className="last-item__carousel">
          <div className="last-item__carousel__item">
            <div className="media last-item__carousel__item__image noAnimate no-general-anim" data-delay="">
              <div className="media__wrap-source image">
                <img
                  className="media__source w-100"
                  src="/wp-content/uploads/2026/04/HOME_8_POghjL.jpg"
                  alt="Gallery 1"
                />
              </div>
            </div>
          </div>

          <div className="last-item__carousel__item">
            <div className="media last-item__carousel__item__image noAnimate no-general-anim" data-delay="">
              <div className="media__wrap-source image">
                <img
                  className="media__source w-100"
                  src="/wp-content/uploads/2026/04/HOME_8_POLdfg.jpg"
                  alt="Gallery 2"
                />
              </div>
            </div>
          </div>

          <a
            href="/projects"
            className="last-item__carousel__item last-item__carousel__item--link btn btn--bg btn--bg-inv btn--bg-blue bg-blue f-edit"
          >
            <svg
              className="last-item__carousel__item__arrow btn__image"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="25.815"
              viewBox="0 0 28 25.815"
            >
              <g id="Grupo_12667" data-name="Grupo 12667" transform="translate(-7871.062 19814.479)">
                <path
                  id="Línea_6"
                  data-name="Línea 6"
                  d="M16.962-.067H-1V-1H16.962Z"
                  transform="translate(7881.317 -19813.479)"
                />
                <path
                  id="Línea_7"
                  data-name="Línea 7"
                  d="M-.067,17.665H-1V-1h.933Z"
                  transform="translate(7899.129 -19813.479)"
                />
                <path
                  id="Línea_8"
                  data-name="Línea 8"
                  d="M-.045,24.641l-.633-.686L26.069-.735l.633.686Z"
                  transform="translate(7871.74 -19813.305)"
                />
              </g>
            </svg>
            <span className="last-item__carousel__item__text t-titulo-l">View All</span>
          </a>
        </div>

        {/* last-item__content */}
        <div className="last-item__content">
          <div className="last-item__content__wrap">
            <div className="last-item__content__section f-edit t-parrafo">Projects</div>
            <div className="last-item__content__title">
              <div className="line f-regular t-titulo-xxl t-upper lh-less col-12 align-left t-left">
                Who said
              </div>
              <div className="line f-regular t-titulo-xxl t-upper lh-less col-12 align-left t-left">
                That <span />
                <span />
                <span />
                <span /> health
              </div>
              <div className="line f-regular t-titulo-xxl t-upper lh-less col-12 align-left t-right">
                Cannot be
              </div>
              <div className="line f-regular t-titulo-xxl t-upper lh-less col-12 align-left t-right">
                Intelligent
              </div>
            </div>
            <div className="last-item__content__text">
              <p>
                We rely on open data and verifiable models. All patient records and scans are hashed to the
                Polygon blockchain via IPFS, giving you complete, tamper-proof control over your medical
                history.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
