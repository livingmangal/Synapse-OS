import React from 'react';

export function ContactChapterSection() {
  return (
    <>
      <section className="mod-title wrapper mod-title--chapter bg-beige c-black pt-md pb-sm anim-line">
        <div className="mod-title__intro">
          <span className="mod-title__anchor" id="" />
          <div className="f-edit t-titulo">(Contact)</div>
        </div>
        <div className="anima__title f-regular t-supertitulo-xl t-title-ls t-upper t-center">
          TRY THE PLATFORM
        </div>
      </section>

      <section className="mod-media mod-media--double bg-beige c-black none pb-xs wrapper">
        <div className="media mod-media__item col-6" data-delay="">
          <div className="media__wrap-source image">
            <img className="media__source w-100" src="/wp-content/uploads/2025/08/FOOTER_1.jpg" alt="Footer Media 1" />
          </div>
        </div>

        <div className="media mod-media__item col-4" data-delay="0.2">
          <div className="media__wrap-source image">
            <img
              className="media__source w-100"
              src="/wp-content/uploads/2026/04/Foto-08-scaled-2.jpg"
              alt="Footer Media 2"
            />
          </div>
        </div>
      </section>

      <section className="mod-title wrapper mod-title--lines bg-beige c-black none pb-md no-anim">
        <div className="line f-regular t-supertitulo t-title-ls t-upper col-12 align-left t-left">
          Intelligence In
        </div>
        <div className="line f-regular t-supertitulo t-title-ls t-upper col-12 align-left t-left">
          Its Ultimate
        </div>
        <div className="line f-regular t-supertitulo t-title-ls t-upper col-6 align-right t-left">
          Expression
        </div>
      </section>

      <section className="mod-content wrapper mod-content--cols bg-beige c-black none pb-md no-anim">
        <div className="mod-content__col" />
        <div className="mod-content__col big_text">
          <div className="mod-content__wrap-text">
            <div className="mod-content__text big_text">
              <p>
                The Sanjeevani OS is completely open-source and built for the community. Reach out to collaborate,
                view our documentation, or test the live deployment.
              </p>
              <p>
                <strong>hello@sanjeevani-os.com</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mod-content wrapper mod-content--center bg-beige c-black none pb-md no-anim">
        <div className="mod-content__col">
          <a href="contacto" className="mod-content__btn btn btn--bg btn--bg-xl f-edit t-titulo">
            Request Information
          </a>
        </div>
      </section>
    </>
  );
}
