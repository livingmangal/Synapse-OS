'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export function ValuesCarouselSection() {
  const { t } = useLanguage();

  return (
    <div className="mod-scroll__carousel bg-beige c-black t-supertitulo-l">
      <div className="mod-scroll__carousel__content">
        <span>
          <p className="mod-scroll__carousel__text f-regular t-supertitulo t-upper">{t('values_text', 'VALUES')}</p>
          <img
            className="mod-scroll__carousel__image"
            src="/wp-content/themes/normalisboring25/images/asterisco.svg"
            alt="*"
          />
        </span>
        <span>
          <p className="mod-scroll__carousel__text f-regular t-supertitulo t-upper">{t('values_text', 'VALUES')}</p>
          <img
            className="mod-scroll__carousel__image"
            src="/wp-content/themes/normalisboring25/images/asterisco.svg"
            alt="*"
          />
        </span>
        <span>
          <p className="mod-scroll__carousel__text f-regular t-supertitulo t-upper">{t('values_text', 'VALUES')}</p>
          <img
            className="mod-scroll__carousel__image"
            src="/wp-content/themes/normalisboring25/images/asterisco.svg"
            alt="*"
          />
        </span>
      </div>
    </div>
  );
}
