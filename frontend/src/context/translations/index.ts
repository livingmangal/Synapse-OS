import { LanguageCode, LanguageInfo, SUPPORTED_LANGUAGES } from './types';
import { enTranslations } from './locales/en';
import { hiTranslations } from './locales/hi';
import { bnTranslations } from './locales/bn';
import { taTranslations } from './locales/ta';
import { teTranslations } from './locales/te';
import { mrTranslations } from './locales/mr';
import { guTranslations } from './locales/gu';
import { knTranslations } from './locales/kn';
import { mlTranslations } from './locales/ml';
import { paTranslations } from './locales/pa';
import { orTranslations } from './locales/or';
import { DYNAMIC_MEDICAL_TRANSLATIONS } from './dynamicMedical';

export * from './types';
export * from './dynamicMedical';

export const TRANSLATIONS: Record<LanguageCode, Record<string, string>> = {
  en: enTranslations,
  hi: hiTranslations,
  bn: bnTranslations,
  ta: taTranslations,
  te: teTranslations,
  mr: mrTranslations,
  gu: guTranslations,
  kn: knTranslations,
  ml: mlTranslations,
  pa: paTranslations,
  or: orTranslations,
};
