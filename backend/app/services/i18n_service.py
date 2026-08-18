"""
Sanjeevani OS — services/i18n_service.py
Multilingual Translation & Audio Accessibility Service.
Ported from AI-Healthcare-System i18n_audio.py.
Supports English, Hindi (हिन्दी), Bengali (বাংলা), Tamil (தமிழ்), Telugu (తెలుగు), and Spanish (Español).
"""

from typing import Dict, Any

# Multi-Language Pre-Translated Clinical Emergency & Triage Messages
CLINICAL_I18N_STRINGS = {
    "hi": {
        "emergency_alert": "⚠️ आपातकालीन सूचना: कृपया तुरंत 112 या 108 पर कॉल करें या नजदीकी अस्पताल जाएं।",
        "triage_home": "🟢 प्राथमिक सलाह: पर्याप्त आराम करें, तरल पदार्थ पिएं और लक्षणों पर नजर रखें।",
        "tele_manas": "राष्ट्रीय मानसिक स्वास्थ्य हेल्पलाइन: 14416 (निःशुल्क 24/7 सेवा)",
        "abha_badge": "आयुष्मान भारत डिजिटल मिशन (ABDM) सत्यापित"
    },
    "bn": {
        "emergency_alert": "⚠️ জরুরি সতর্কতা: অবিলম্বে ১১২ বা ১০৮ নম্বরে যোগাযোগ করুন অথবা নিকটস্থ হাসপাতালে যান।",
        "triage_home": "🟢 প্রাথমিক পরামর্শ: প্রচুর জল পান করুন, বিশ্রাম নিন এবং লক্ষণগুলি লক্ষ্য রাখুন।",
        "tele_manas": "টেলি-মানস হেল্পলাইন: ১৪৪১৬ (২৪/৭ বিনামূল্যে সেবা)",
        "abha_badge": "আয়ুষ্মান ভারত ডিজিটাল মিশন দ্বারা যাচাইকৃত"
    },
    "ta": {
        "emergency_alert": "⚠️ அவசர அறிவிப்பு: உடனடியாக 112 அல்லது 108 ஐ அழைக்கவும் அல்லது மருத்துவமனைக்குச் செல்லவும்.",
        "triage_home": "🟢 முதலுதவி ஆலோசனை: போதுமான ஓய்வு எடுத்துக் கொள்ளுங்கள், நிறைய தண்ணீர் குடிக்கவும்.",
        "tele_manas": "டெலி-மானாஸ் உதவி எண்: 14416 (24/7 இலவச சேவை)",
        "abha_badge": "ஆயுஷ்மான் பாரத் சரிபார்க்கப்பட்டது"
    },
    "te": {
        "emergency_alert": "⚠️ అత్యవసర హెచ్చరిక: దయచేసి వెంటనే 112 లేదా 108 కి కాల్ చేయండి.",
        "triage_home": "🟢 ప్రాథమిక సలహా: తగినంత విశ్రాంతి తీసుకోండి మరియు ద్రవాలు త్రాగండి.",
        "tele_manas": "టెలి-మానస్ హెల్ప్‌లైన్: 14416 (24/7 ఉచిత సేవ)",
        "abha_badge": "ఆయుష్మాన్ భారత్ ధృవీకరించబడింది"
    },
    "es": {
        "emergency_alert": "⚠️ ALERTA MÉDICA: Llame inmediatamente al número de emergencias (911/112).",
        "triage_home": "🟢 Cuidado en el hogar: Descanse adecuadamente y beba abundantes líquidos.",
        "tele_manas": "Línea de Ayuda Psicológica Gratuita: 988",
        "abha_badge": "Registro Médico Certificado"
    }
}


def translate_clinical_message(key: str, lang: str = "hi") -> str:
    """Translates key clinical warnings into regional Indian & global languages."""
    lang_dict = CLINICAL_I18N_STRINGS.get(lang.lower(), CLINICAL_I18N_STRINGS["hi"])
    return lang_dict.get(key, CLINICAL_I18N_STRINGS["hi"].get(key, ""))
