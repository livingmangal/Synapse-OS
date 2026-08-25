'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type LanguageCode = 
  | 'en' // English
  | 'hi' // हिन्दी (Hindi)
  | 'bn' // বাংলা (Bengali)
  | 'ta' // தமிழ் (Tamil)
  | 'te' // తెలుగు (Telugu)
  | 'mr' // मराठी (Marathi)
  | 'gu' // ગુજરાતી (Gujarati)
  | 'kn' // ಕನ್ನಡ (Kannada)
  | 'ml' // മലയാളം (Malayalam)
  | 'pa' // ਪੰਜਾਬੀ (Punjabi)
  | 'or'; // ଓଡ଼ିଆ (Odia)

export interface LanguageInfo {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  region: string;
}

export const SUPPORTED_LANGUAGES: LanguageInfo[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🌐', region: 'Global' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', region: 'North / Central' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇮🇳', region: 'West Bengal' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳', region: 'Tamil Nadu' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳', region: 'Andhra / Telangana' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳', region: 'Maharashtra' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳', region: 'Gujarat' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳', region: 'Karnataka' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳', region: 'Kerala' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flag: '🇮🇳', region: 'Punjab' },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ', flag: '🇮🇳', region: 'Odisha' },
];

// Rich medical and general translation matrix across all 11 Indian languages
export const TRANSLATIONS: Record<LanguageCode, Record<string, string>> = {
  en: {
    brand_title: 'Sanjeevani OS',
    tagline: 'Autonomous Multi-Agent Healthcare Platform',
    nav_projects: 'Projects',
    nav_about: 'About Us',
    nav_contact: 'Contact',
    nav_orchestrator: 'Orchestrator OS',
    nav_available_homes: 'Launch Workspace',
    tab_swarm: 'Swarm Intelligence',
    tab_overview: 'My Condition',
    tab_analytics: 'Visual Analytics',
    tab_hospital: 'WHO Surveillance & Map',
    tab_scan: 'Medical Scan AI',
    tab_records: 'ABHA & Records',
    tab_health_sync: 'Google & Apple Health',
    btn_emergency_sos: 'Emergency SOS (112)',
    btn_export_hub: 'Export Hub',
    btn_sync_now: 'Sync Wearables',
    map_title: 'Advanced Epidemiological Intelligence Map',
    map_layer_heatmap: 'Outbreak Density',
    map_layer_beds: 'ICU & Bed Capacity',
    map_layer_vectors: 'Contagion Vectors',
    map_layer_aqi: 'AQI Environmental Risk',
    map_scope_global: '🌐 Global Surveillance',
    map_scope_india: '🇮🇳 India Regional Focus',
    health_sync_title: 'Google Health Connect & Apple HealthKit Hub',
    health_sync_subtitle: 'Real-time telemetry aggregation from Apple Watch, Pixel Watch, and Android Health Connect',
    apple_health: 'Apple Health',
    google_health: 'Google Health Connect',
    wearable_status_connected: 'Connected & Streaming',
    wearable_status_syncing: 'Syncing Data...',
    vitals_heart_rate: 'Heart Rate',
    vitals_oxygen: 'Blood Oxygen (SpO2)',
    vitals_blood_pressure: 'Blood Pressure',
    vitals_respiratory: 'Respiratory Rate',
    vitals_steps: 'Daily Step Count',
    vitals_ecg: 'Single-Lead ECG Rhythm',
    vitals_sleep: 'Sleep Architecture',
    import_export_xml: 'Import Apple Health export.xml or Google Takeout',
    drop_file_here: 'Drag & Drop XML / JSON Health Export File',
    ai_anomaly_alert: 'AI Wearable Anomaly Alert',
  },
  hi: {
    brand_title: 'संजीवनी ओएस',
    tagline: 'स्वायत्त मल्टी-एजेंट स्वास्थ्य सेवा मंच',
    nav_projects: 'प्रोजेक्ट्स',
    nav_about: 'हमारे बारे में',
    nav_contact: 'संपर्क करें',
    nav_orchestrator: 'ऑर्केस्ट्रेटर ओएस',
    nav_available_homes: 'वर्कस्पेस खोलें',
    tab_swarm: 'स्वार्म इंटेलिजेंस',
    tab_overview: 'मेरी स्वास्थ्य स्थिति',
    tab_analytics: 'दृश्य विश्लेषण',
    tab_hospital: 'WHO निगरानी और मानचित्र',
    tab_scan: 'मेडिकल स्कैन एआई',
    tab_records: 'आभा और मेडिकल रिकॉर्ड',
    tab_health_sync: 'गूगल और एप्पल हेल्थ सिंक',
    btn_emergency_sos: 'आपातकालीन एसओएस (112)',
    btn_export_hub: 'एक्सपोर्ट हब',
    btn_sync_now: 'वियरेबल्स सिंक करें',
    map_title: 'उन्नत महामारी विज्ञान निगरानी मानचित्र',
    map_layer_heatmap: 'संक्रमण घनत्व हीटमैप',
    map_layer_beds: 'आईसीयू और बेड क्षमता',
    map_layer_vectors: 'संक्रमण प्रवाह वेक्टर',
    map_layer_aqi: 'एक्यूआई वायु गुणवत्ता जोखिम',
    map_scope_global: '🌐 वैश्विक निगरानी',
    map_scope_india: '🇮🇳 भारत क्षेत्रीय फोकस',
    health_sync_title: 'गूगल हेल्थ कनेक्ट और एप्पल हेल्थकिट हब',
    health_sync_subtitle: 'एप्पल वॉच, पिक्सल वॉच और एंड्रॉइड हेल्थ से लाइव स्वास्थ्य डेटा एकत्रीकरण',
    apple_health: 'एप्पल हेल्थ',
    google_health: 'गूगल हेल्थ कनेक्ट',
    wearable_status_connected: 'कनेक्टेड और लाइव स्ट्रीमिंग',
    wearable_status_syncing: 'डेटा सिंक हो रहा है...',
    vitals_heart_rate: 'हृदय गति (हार्ट रेट)',
    vitals_oxygen: 'रक्त ऑक्सीजन (SpO2)',
    vitals_blood_pressure: 'रक्तचाप (ब्लड प्रेशर)',
    vitals_respiratory: 'श्वसन दर',
    vitals_steps: 'दैनिक कदम संख्या',
    vitals_ecg: 'ईसीजी रिदम स्ट्रिप',
    vitals_sleep: 'नींद की गुणवत्ता',
    import_export_xml: 'एप्पल हेल्थ export.xml या गूगल डेटा आयात करें',
    drop_file_here: 'XML / JSON हेल्थ फ़ाइल यहाँ छोड़ें',
    ai_anomaly_alert: 'एआई स्वास्थ्य विसंगति चेतावनी',
  },
  bn: {
    brand_title: 'সঞ্জীবনী ওএস',
    tagline: 'স্বায়ত্তশাসিত মাল্টি-এজেন্ট স্বাস্থ্যসেবা প্ল্যাটফর্ম',
    nav_projects: 'প্রকল্পসমূহ',
    nav_about: 'আমাদের সম্পর্কে',
    nav_contact: 'যোগাযোগ',
    nav_orchestrator: 'অর্কেস্ট্রেটর ওএস',
    nav_available_homes: 'ওয়ার্কস্পেস খুলুন',
    tab_swarm: 'সোয়ার্ম ইন্টেলিজেন্স',
    tab_overview: 'আমার অবস্থা',
    tab_analytics: 'ভিজ্যুয়াল অ্যানালিটিক্স',
    tab_hospital: 'হু নজরদারি ও মানচিত্র',
    tab_scan: 'মেডিকেল স্ক্যান এআই',
    tab_records: 'আভা এবং রেকর্ডস',
    tab_health_sync: 'গুগল এবং অ্যাপল হেলথ',
    btn_emergency_sos: 'জরুরি এসওএস (১১২)',
    btn_export_hub: 'রপ্তানি হাব',
    btn_sync_now: 'ঘড়ি ও ডিভাইস সিঙ্ক করুন',
    map_title: 'উন্নত মহামারী সংক্রান্ত নজরদারি মানচিত্র',
    map_layer_heatmap: 'সংক্রমণ ঘনত্ব',
    map_layer_beds: 'আইসিইউ ও বেড প্রাপ্যতা',
    map_layer_vectors: 'সংক্রমণ ভেক্টর',
    map_layer_aqi: 'বাতাসের মান (AQI) ঝুঁকি',
    map_scope_global: '🌐 বৈশ্বিক নজরদারি',
    map_scope_india: '🇮🇳 ভারত আঞ্চলিক ফোকাস',
    health_sync_title: 'গুগল হেলথ কানেক্ট এবং অ্যাপল হেলথকিট হাব',
    health_sync_subtitle: 'অ্যাপল ওয়াচ ও পিক্সেল ওয়াচ থেকে লাইভ স্বাস্থ্য তথ্য সংগ্রহ',
    apple_health: 'অ্যাপল হেলথ',
    google_health: 'গুগল হেলথ কানেক্ট',
    wearable_status_connected: 'সংযুক্ত ও লাইভ স্ট্রিম হচ্ছে',
    wearable_status_syncing: 'তথ্য সিঙ্ক হচ্ছে...',
    vitals_heart_rate: 'হৃৎস্পন্দন হার',
    vitals_oxygen: 'রক্তের অক্সিজেন (SpO2)',
    vitals_blood_pressure: 'রক্তচাপ',
    vitals_respiratory: 'শ্বাসপ্রশ্বাসের হার',
    vitals_steps: 'দৈনিক পদক্ষেপ সংখ্যা',
    vitals_ecg: 'ইসিজি রিদম স্ট্রিপ',
    vitals_sleep: 'ঘুমের গুণমান',
    import_export_xml: 'অ্যাপল হেলথ export.xml বা গুগল টেকআউট ফাইল আনুন',
    drop_file_here: 'XML / JSON ফাইল এখানে ড্রপ করুন',
    ai_anomaly_alert: 'এআই স্বাস্থ্য সতর্কতা',
  },
  ta: {
    brand_title: 'சஞ்சீவனி ஓஎஸ்',
    tagline: 'தன்னாட்சி மல்டி-ஏஜென்ட் சுகாதார தளம்',
    nav_projects: 'திட்டங்கள்',
    nav_about: 'எங்களை பற்றி',
    nav_contact: 'தொடர்பு கொள்ள',
    nav_orchestrator: 'ஆர்கெஸ்ட்ரேட்டர் ஓஎஸ்',
    nav_available_homes: 'பணியிடத்தைத் திறக்கவும்',
    tab_swarm: 'ஸ்வர்ம் நுண்ணறிவு',
    tab_overview: 'எனது உடல்நிலை',
    tab_analytics: 'காட்சி பகுப்பாய்வு',
    tab_hospital: 'WHO கண்காணிப்பு மற்றும் வரைபடம்',
    tab_scan: 'மருத்துவ ஸ்கேன் ஏஐ',
    tab_records: 'ஆபா மற்றும் பதிவுகள்',
    tab_health_sync: 'கூகிள் மற்றும் ஆப்பிள் ஹெல்த்',
    btn_emergency_sos: 'அவசர SOS (112)',
    btn_export_hub: 'ஏற்றுமதி மையம்',
    btn_sync_now: 'சாதனங்களை ஒத்திசைக்கவும்',
    map_title: 'மேம்பட்ட தொற்றுநோயியல் வரைபடம்',
    map_layer_heatmap: 'தொற்று அடர்த்தி',
    map_layer_beds: 'ஐசியு மற்றும் படுக்கை திறன்',
    map_layer_vectors: 'தொற்று பரவல் திசைகள்',
    map_layer_aqi: 'காற்று தரம் (AQI) ஆபத்து',
    map_scope_global: '🌐 உலகளாவிய கண்காணிப்பு',
    map_scope_india: '🇮🇳 இந்தியா பிராந்திய கவனம்',
    health_sync_title: 'கூகிள் ஹெல்த் மற்றும் ஆப்பிள் ஹெல்த்கிட் மையம்',
    health_sync_subtitle: 'ஆப்பிள் வாட்ச் மற்றும் பிக்சல் வாட்சிலிருந்து நேரலை உடல்நிலை தரவு',
    apple_health: 'ஆப்பிள் ஹெல்த்',
    google_health: 'கூகிள் ஹெல்த் கனெக்ட்',
    wearable_status_connected: 'இணைக்கப்பட்டது மற்றும் நேரலை',
    wearable_status_syncing: 'ஒத்திசைக்கப்படுகிறது...',
    vitals_heart_rate: 'இதய துடிப்பு',
    vitals_oxygen: 'இரத்த ஆக்ஸிஜன் (SpO2)',
    vitals_blood_pressure: 'இரத்த அழுத்தம்',
    vitals_respiratory: 'சுவாச வீதம்',
    vitals_steps: 'தினசரி படிகள்',
    vitals_ecg: 'ஈசிஜி அலைவரிசை',
    vitals_sleep: 'தூக்கத்தின் தரம்',
    import_export_xml: 'ஆப்பிள் ஹெல்த் XML அல்லது கூகிள் கோப்பை இறக்குமதி செய்',
    drop_file_here: 'XML / JSON கோப்பை இங்கே இழுத்து விடவும்',
    ai_anomaly_alert: 'ஏஐ உடல்நல அசாதாரண எச்சரிக்கை',
  },
  te: {
    brand_title: 'సంజీవని ఓఎస్',
    tagline: 'అటానమస్ మల్టీ-ఏజెంట్ హెల్త్‌కేర్ ప్లాట్‌ఫారమ్',
    nav_projects: 'ప్రాజెక్టులు',
    nav_about: 'మా గురించి',
    nav_contact: 'సంప్రదించండి',
    nav_orchestrator: 'ఆర్కెస్ట్రేటర్ ఓఎస్',
    nav_available_homes: 'వర్క్‌స్పేస్ ప్రారంభించండి',
    tab_swarm: 'స్వార్మ్ ఇంటెలిజెన్స్',
    tab_overview: 'నా ఆరోగ్యం',
    tab_analytics: 'విశ్లేషణలు',
    tab_hospital: 'డబ్ల్యూహెచ్‌ఓ మ్యాప్',
    tab_scan: 'మెడికల్ స్కాన్ ఏఐ',
    tab_records: 'ఆభా రికార్డులు',
    tab_health_sync: 'గూగుల్ & ఆపిల్ హెల్త్',
    btn_emergency_sos: 'అత్యవసర SOS (112)',
    btn_export_hub: 'ఎగుమతి హబ్',
    btn_sync_now: 'డివైస్‌లను సింక్ చేయండి',
    map_title: 'అధునాతన మహమ్మారి నిఘా మ్యాప్',
    map_layer_heatmap: 'వ్యాప్తి సాంద్రత',
    map_layer_beds: 'ఐసియు బెడ్ కెపాసిటీ',
    map_layer_vectors: 'వ్యాప్తి వెక్టర్స్',
    map_layer_aqi: 'గాలి నాణ్యత రిస్క్',
    map_scope_global: '🌐 గ్లోబల్ నిఘా',
    map_scope_india: '🇮🇳 భారతదేశ ప్రాంతీయ దృష్టి',
    health_sync_title: 'గూగుల్ హెల్త్ & ఆపిల్ హెల్త్‌కిట్ హబ్',
    health_sync_subtitle: 'ఆపిల్ వాచ్, పిక్సెల్ వాచ్ నుండి లైవ్ టెలిమెట్రీ సేకరించబడుతుంది',
    apple_health: 'ఆపిల్ హెల్త్',
    google_health: 'గూగుల్ హెల్త్ కనెక్ట్',
    wearable_status_connected: 'కనెక్ట్ చేయబడింది & లైవ్ స్ట్రీమింగ్',
    wearable_status_syncing: 'సింక్ అవుతోంది...',
    vitals_heart_rate: 'గుండె వేగం',
    vitals_oxygen: 'రక్తంలో ఆక్సిజన్ (SpO2)',
    vitals_blood_pressure: 'రక్తపోటు',
    vitals_respiratory: 'శ్వాసక్రియ రేటు',
    vitals_steps: 'రోజువారీ అడుగులు',
    vitals_ecg: 'ఈసీజీ రిథమ్ స్ట్రిప్',
    vitals_sleep: 'నిద్ర నాణ్యత',
    import_export_xml: 'ఆపిల్ హెల్త్ XML లేదా గూగుల్ ఫైల్ దిగుమతి చేయండి',
    drop_file_here: 'XML / JSON ఫైల్‌ను ఇక్కడ డ్రాప్ చేయండి',
    ai_anomaly_alert: 'ఏఐ ఆరోగ్య హెచ్చరిక',
  },
  mr: {
    brand_title: 'संजीवनी ओएस',
    tagline: 'स्वायत्त मल्टी-एजंट आरोग्य सेवा प्लॅटफॉर्म',
    nav_projects: 'प्रकल्प',
    nav_about: 'आमच्याबद्दल',
    nav_contact: 'संपर्क',
    nav_orchestrator: 'ऑर्केस्ट्रेटर ओएस',
    nav_available_homes: 'वर्कस्पेस सुरू करा',
    tab_swarm: 'स्वॉर्म इंटेलिजन्स',
    tab_overview: 'माझी प्रकृती',
    tab_analytics: 'दृश्य विश्लेषण',
    tab_hospital: 'जागतिक आरोग्य संघटना नकाशा',
    tab_scan: 'वैद्यकीय स्कॅन एआय',
    tab_records: 'आभा आणि रेकॉर्ड्स',
    tab_health_sync: 'गूगल आणि ऍपल हेल्थ',
    btn_emergency_sos: 'आपत्कालीन SOS (112)',
    btn_export_hub: 'एक्सपोर्ट हब',
    btn_sync_now: 'घड्याळे सिंक करा',
    map_title: 'प्रगत साथीचे रोग नियंत्रण नकाशा',
    map_layer_heatmap: 'संसर्ग घनता',
    map_layer_beds: 'आयसीयू व बेड क्षमता',
    map_layer_vectors: 'संसर्ग प्रवाह',
    map_layer_aqi: 'हवा गुणवत्ता निर्देशांक (AQI)',
    map_scope_global: '🌐 जागतिक देखरेख',
    map_scope_india: '🇮🇳 भारत विशेष लक्ष',
    health_sync_title: 'गूगल हेल्थ कनेक्ट आणि ऍपल हेल्थकिट हब',
    health_sync_subtitle: 'ऍपल वॉच आणि पिक्सेल वॉचवरून थेट आरोग्य डेटा संकलन',
    apple_health: 'ऍपल हेल्थ',
    google_health: 'गूगल हेल्थ कनेक्ट',
    wearable_status_connected: 'कनेक्टेड आणि थेट प्रवाह',
    wearable_status_syncing: 'डेटा सिंक होत आहे...',
    vitals_heart_rate: 'हृदयाचे ठोके',
    vitals_oxygen: 'रक्तातील ऑक्सिजन (SpO2)',
    vitals_blood_pressure: 'रक्तदाब',
    vitals_respiratory: 'श्वसन दर',
    vitals_steps: 'दैनंदिन पावले',
    vitals_ecg: 'ईसीजी रिदम',
    vitals_sleep: 'झोपेची गुणवत्ता',
    import_export_xml: 'ऍपल हेल्थ XML किंवा गूगल फाईल आणा',
    drop_file_here: 'XML / JSON फाईल येथे टाका',
    ai_anomaly_alert: 'एआय आरोग्य विसंगती सूचना',
  },
  gu: {
    brand_title: 'સંજીવની ઓએસ',
    tagline: 'સ્વાયત્ત મલ્ટી-એજન્ટ હેલ્થકેર પ્લેટફોર્મ',
    nav_projects: 'પ્રોજેક્ટ્સ',
    nav_about: 'અમારા વિશે',
    nav_contact: 'સંપર્ક કરો',
    nav_orchestrator: 'ઓર્કેસ્ટ્રેટર ઓએસ',
    nav_available_homes: 'વર્કસ્પેસ ખોલો',
    tab_swarm: 'સ્વોર્મ ઇન્ટેલિજન્સ',
    tab_overview: 'મારી સ્થિતિ',
    tab_analytics: 'વિશ્લેષણ',
    tab_hospital: 'WHO સર્વેલન્સ અને નકશો',
    tab_scan: 'મેડિકલ સ્કેન એઆઈ',
    tab_records: 'આભા રેકોર્ડ્સ',
    tab_health_sync: 'ગુગલ અને એપલ હેલ્થ',
    btn_emergency_sos: 'ઇમરજન્સી SOS (112)',
    btn_export_hub: 'નિકાસ કેન્દ્ર',
    btn_sync_now: 'ડિવાઇસ સિંક કરો',
    map_title: 'રોગચાળા નિરીક્ષણ નકશો',
    map_layer_heatmap: 'ચેપ ઘનતા',
    map_layer_beds: 'આઈસીયુ બેડ ક્ષમતા',
    map_layer_vectors: 'ચેપ પ્રવાહ',
    map_layer_aqi: 'હવા ગુણવત્તા જોખમ',
    map_scope_global: '🌐 વૈશ્વિક સર્વેલન્સ',
    map_scope_india: '🇮🇳 ભારત પ્રાદેશિક ધ્યાન',
    health_sync_title: 'ગુગલ હેલ્થ કનેક્ટ અને એપલ હેલ્થકિટ હબ',
    health_sync_subtitle: 'એપલ વોચ અને પિક્સેલ વોચમાંથી લાઈવ ડેટા મેળવો',
    apple_health: 'એપલ હેલ્થ',
    google_health: 'ગુગલ હેલ્થ કનેક્ટ',
    wearable_status_connected: 'જોડાયેલું અને લાઈવ',
    wearable_status_syncing: 'ડેટા સિંક થઈ રહ્યો છે...',
    vitals_heart_rate: 'હૃદયના ધબકારા',
    vitals_oxygen: 'ઓક્સિજન સ્તર (SpO2)',
    vitals_blood_pressure: 'બ્લડ પ્રેશર',
    vitals_respiratory: 'શ્વસન દર',
    vitals_steps: 'દૈનિક પગલાં',
    vitals_ecg: 'ઇસીજી રિધમ',
    vitals_sleep: 'ઊંઘની ગુણવત્તા',
    import_export_xml: 'એપલ હેલ્થ XML અથવા ગુગલ ફાઇલ લાવો',
    drop_file_here: 'XML / JSON ફાઇલ અહીં મૂકો',
    ai_anomaly_alert: 'એઆઈ આરોગ્ય ચેતવણી',
  },
  kn: {
    brand_title: 'ಸಂಜೀವಿನಿ ಓಎಸ್',
    tagline: 'ಸ್ವಾಯತ್ತ ಮಲ್ಟಿ-ಏಜೆಂಟ್ ಹೆಲ್ತ್‌ಕೇರ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್',
    nav_projects: 'ಯೋಜನೆಗಳು',
    nav_about: 'ನಮ್ಮ ಬಗ್ಗೆ',
    nav_contact: 'ಸಂಪರ್ಕಿಸಿ',
    nav_orchestrator: 'ಆರ್ಕೆಸ್ಟ್ರೇಟರ್ ಓಎಸ್',
    nav_available_homes: 'ಕಾರ್ಯಸ್ಥಳ ತೆರೆಯಿರಿ',
    tab_swarm: 'ಸ್ವಾರ್ಮ್ ಬುದ್ಧಿಮತ್ತೆ',
    tab_overview: 'ನನ್ನ ಸ್ಥಿತಿ',
    tab_analytics: 'ವಿಶ್ಲೇಷಣೆ',
    tab_hospital: 'WHO ನಿಗಾ ನಕ್ಷೆ',
    tab_scan: 'ವೈದ್ಯಕೀಯ ಸ್ಕ್ಯಾನ್ ಎಐ',
    tab_records: 'ಆಭಾ ದಾಖಲೆಗಳು',
    tab_health_sync: 'ಗೂಗಲ್ & ಆಪಲ್ ಹೆಲ್ತ್',
    btn_emergency_sos: 'ತುರ್ತು SOS (112)',
    btn_export_hub: 'ರಫ್ತು ಕೇಂದ್ರ',
    btn_sync_now: 'ಸಾಧನಗಳನ್ನು ಸಿಂಕ್ ಮಾಡಿ',
    map_title: 'ಸಾಂಕ್ರಾಮಿಕ ರೋಗ ನಿಗಾ ನಕ್ಷೆ',
    map_layer_heatmap: 'ಸೋಂಕಿನ ಸಾಂದ್ರತೆ',
    map_layer_beds: 'ಐಸಿಯು ಬೆಡ್ ಸಾಮರ್ಥ್ಯ',
    map_layer_vectors: 'ಹರಡುವಿಕೆಯ ದಿಕ್ಕುಗಳು',
    map_layer_aqi: 'ವಾಯು ಗುಣಮಟ್ಟದ ಅಪಾಯ',
    map_scope_global: '🌐 ಜಾಗತಿಕ ನಿಗಾ',
    map_scope_india: '🇮🇳 ಭಾರತ ಪ್ರಾದೇಶಿಕ ಗಮನ',
    health_sync_title: 'ಗೂಗಲ್ ಹೆಲ್ತ್ ಮತ್ತು ಆಪಲ್ ಹೆಲ್ತ್‌ಕಿಟ್ ಹಬ್',
    health_sync_subtitle: 'ಆಪಲ್ ವಾಚ್ ಮತ್ತು ಪಿಕ್ಸೆಲ್ ವಾಚ್‌ನಿಂದ ನೇರ ಆರೋಗ್ಯ ಮಾಹಿತಿ',
    apple_health: 'ಆಪಲ್ ಹೆಲ್ತ್',
    google_health: 'ಗೂಗಲ್ ಹೆಲ್ತ್ ಕನೆಕ್ಟ್',
    wearable_status_connected: 'ಸಂಪರ್ಕಗೊಂಡಿದೆ ಮತ್ತು ಲೈವ್',
    wearable_status_syncing: 'ಸಿಂಕ್ ಆಗುತ್ತಿದೆ...',
    vitals_heart_rate: 'ಹೃದಯ ಬಡಿತ',
    vitals_oxygen: 'ಆಮ್ಲಜನಕ ಮಟ್ಟ (SpO2)',
    vitals_blood_pressure: 'ರಕ್ತದೊತ್ತಡ',
    vitals_respiratory: 'ಉಸಿರಾಟದ ದರ',
    vitals_steps: 'ದೈನಂದಿನ ಹೆಜ್ಜೆಗಳು',
    vitals_ecg: 'ಇಸಿಜಿ ರಿದಮ್',
    vitals_sleep: 'ನಿದ್ರೆಯ ಗುಣಮಟ್ಟ',
    import_export_xml: 'ಆಪಲ್ ಹೆಲ್ತ್ XML ಅಥವಾ ಗೂಗಲ್ ಫೈಲ್ ತನ್ನಿ',
    drop_file_here: 'XML / JSON ಫೈಲ್ ಇಲ್ಲಿ ಹಾಕಿ',
    ai_anomaly_alert: 'ಎಐ ಆರೋಗ್ಯ ಎಚ್ಚರಿಕೆ',
  },
  ml: {
    brand_title: 'സഞ്ജീവനി ഒഎസ്',
    tagline: 'സ്വയംഭരണ മൾട്ടി-ഏജന്റ് ഹെൽത്ത്‌കെയർ പ്ലാറ്റ്‌ഫോം',
    nav_projects: 'പദ്ധതികൾ',
    nav_about: 'ഞങ്ങളെക്കുറിച്ച്',
    nav_contact: 'ബന്ധപ്പെടുക',
    nav_orchestrator: 'ഓർക്കസ്ട്രേറ്റർ ഒഎസ്',
    nav_available_homes: 'വർക്ക്‌സ്‌പേസ് തുറക്കുക',
    tab_swarm: 'സ്വാം ഇന്റലിജൻസ്',
    tab_overview: 'എന്റെ അവസ്ഥ',
    tab_analytics: 'വിശകലനം',
    tab_hospital: 'ഡബ്ല്യുഎച്ച്ഒ നിരീക്ഷണ ഭൂപടം',
    tab_scan: 'മെഡിക്കൽ സ്കാൻ എഐ',
    tab_records: 'ആഭാ രേഖകൾ',
    tab_health_sync: 'ഗൂഗിൾ & ആപ്പിൾ ഹെൽത്ത്',
    btn_emergency_sos: 'അടിയന്തര SOS (112)',
    btn_export_hub: 'കയറ്റുമതി ഹബ്',
    btn_sync_now: 'ഡിവൈസുകൾ സമന്വയിപ്പിക്കുക',
    map_title: 'സാംക്രമിക രോഗ നിരീക്ഷണ ഭൂപടം',
    map_layer_heatmap: 'രോഗവ്യാപന തീവ്രത',
    map_layer_beds: 'ഐസിയു ബെഡ് ലഭ്യത',
    map_layer_vectors: 'വ്യാപന ദിശകൾ',
    map_layer_aqi: 'വായു ഗുണനിലവാര ഭീഷണി',
    map_scope_global: '🌐 ആഗോള നിരീക്ഷണം',
    map_scope_india: '🇮🇳 ഇന്ത്യ പ്രാദേശിക ശ്രദ്ധ',
    health_sync_title: 'ഗൂഗിൾ ഹെൽത്ത് & ആപ്പിൾ ഹെൽത്ത്കിറ്റ് ഹബ്',
    health_sync_subtitle: 'ആപ്പിൾ വാച്ച്, പിക്സൽ വാച്ച് എന്നിവയിൽ നിന്നുള്ള തത്സമയ വിവരങ്ങൾ',
    apple_health: 'ആപ്പിൾ ഹെൽത്ത്',
    google_health: 'ഗൂഗിൾ ഹെൽത്ത് കണക്റ്റ്',
    wearable_status_connected: 'കണക്റ്റ് ചെയ്തു, ലൈവ് സ്ട്രീമിംഗ്',
    wearable_status_syncing: 'സിങ്ക് ചെയ്യുന്നു...',
    vitals_heart_rate: 'ഹൃദയമിടിപ്പ്',
    vitals_oxygen: 'രക്തത്തിലെ ഓക്സിജൻ (SpO2)',
    vitals_blood_pressure: 'രക്തസമ്മർദ്ദം',
    vitals_respiratory: 'ശ്വാസോച്ഛ്വാസ നിരക്ക്',
    vitals_steps: 'ദിവസേനയുള്ള ചുവടുകൾ',
    vitals_ecg: 'ഇസിജി റിഥം',
    vitals_sleep: 'ഉറക്ക നിലവാരം',
    import_export_xml: 'ആപ്പിൾ ഹെൽത്ത് XML അല്ലെങ്കിൽ ഗൂഗിൾ ഫയൽ നൽകുക',
    drop_file_here: 'XML / JSON ഫയൽ ഇവിടെ ഇടുക',
    ai_anomaly_alert: 'എഐ ആരോഗ്യ മുന്നറിയിപ്പ്',
  },
  pa: {
    brand_title: 'ਸੰਜੀਵਨੀ ਓਐਸ',
    tagline: 'ਸਵੈ-ਚਾਲਿਤ ਮਲਟੀ-ਏਜੰਟ ਹੈਲਥਕੇਅਰ ਪਲੇਟਫਾਰਮ',
    nav_projects: 'ਪ੍ਰੋਜੈਕਟ',
    nav_about: 'ਸਾਡੇ ਬਾਰੇ',
    nav_contact: 'ਸੰਪਰਕ ਕਰੋ',
    nav_orchestrator: 'ਆਰਕੈਸਟਰੇਟਰ ਓਐਸ',
    nav_available_homes: 'ਵਰਕਸਪੇਸ ਖੋਲ੍ਹੋ',
    tab_swarm: 'ਸਵਾਰਮ ਇੰਟੈਲੀਜੈਂਸ',
    tab_overview: 'ਮੇਰੀ ਸਿਹਤ ਸਥਿਤੀ',
    tab_analytics: 'ਵਿਸ਼ਲੇਸ਼ਣ',
    tab_hospital: 'ਡਬਲਯੂਐਚਓ ਨਿਗਰਾਨੀ ਨਕਸ਼ਾ',
    tab_scan: 'ਮੈਡੀਕਲ ਸਕੈਨ ਏਆਈ',
    tab_records: 'ਆਭਾ ਰਿਕਾਰਡ',
    tab_health_sync: 'ਗੂਗਲ ਅਤੇ ਐਪਲ ਹੈਲਥ',
    btn_emergency_sos: 'ਐਮਰਜੈਂਸੀ SOS (112)',
    btn_export_hub: 'ਐਕਸਪੋਰਟ ਹੱਬ',
    btn_sync_now: 'ਡਿਵਾਈਸਾਂ ਸਿੰਕ ਕਰੋ',
    map_title: 'ਉੱਨਤ ਮਹਾਂਮਾਰੀ ਨਿਗਰਾਨੀ ਨਕਸ਼ਾ',
    map_layer_heatmap: 'ਲਾਗ ਘਣਤਾ',
    map_layer_beds: 'ਆਈਸੀਯੂ ਬੈੱਡ ਸਮਰੱਥਾ',
    map_layer_vectors: 'ਲਾਗ ਫੈਲਾਅ',
    map_layer_aqi: 'ਹਵਾ ਗੁਣਵੱਤਾ ਜੋਖਮ',
    map_scope_global: '🌐 ਗਲੋਬਲ ਨਿਗਰਾਨੀ',
    map_scope_india: '🇮🇳 ਭਾਰਤ ਖੇਤਰੀ ਫੋਕਸ',
    health_sync_title: 'ਗੂਗਲ ਹੈਲਥ ਕਨੈਕਟ ਅਤੇ ਐਪਲ ਹੈਲਥਕਿੱਟ ਹੱਬ',
    health_sync_subtitle: 'ਐਪਲ ਵਾਚ ਅਤੇ ਪਿਕਸਲ ਵਾਚ ਤੋਂ ਲਾਈਵ ਸਿਹਤ ਡਾਟਾ ਪ੍ਰਾਪਤ ਕਰੋ',
    apple_health: 'ਐਪਲ ਹੈਲਥ',
    google_health: 'ਗੂਗਲ ਹੈਲਥ ਕਨੈਕਟ',
    wearable_status_connected: 'ਕਨੈਕਟ ਕੀਤਾ ਅਤੇ ਲਾਈਵ',
    wearable_status_syncing: 'ਡਾਟਾ ਸਿੰਕ ਹੋ ਰਿਹਾ ਹੈ...',
    vitals_heart_rate: 'ਦਿਲ ਦੀ ਧੜਕਣ',
    vitals_oxygen: 'ਖੂਨ ਵਿੱਚ ਆਕਸੀਜਨ (SpO2)',
    vitals_blood_pressure: 'ਬਲੱਡ ਪ੍ਰੈਸ਼ਰ',
    vitals_respiratory: 'ਸਾਹ ਦੀ ਦਰ',
    vitals_steps: 'ਰੋਜ਼ਾਨਾ ਕਦਮ',
    vitals_ecg: 'ਈਸੀਜੀ ਰਿਦਮ',
    vitals_sleep: 'ਨੀਂਦ ਦੀ ਗੁਣਵੱਤਾ',
    import_export_xml: 'ਐਪਲ ਹੈਲਥ XML ਜਾਂ ਗੂਗਲ ਫਾਈਲ ਸ਼ਾਮਲ ਕਰੋ',
    drop_file_here: 'XML / JSON ਫਾਈਲ ਇੱਥੇ ਸੁੱਟੋ',
    ai_anomaly_alert: 'ਏਆਈ ਸਿਹਤ ਚੇਤਾਵਨੀ',
  },
  or: {
    brand_title: 'ସଞ୍ଜୀବନୀ ଓଏସ୍',
    tagline: 'ସ୍ୱୟଂଶାସିତ ମଲ୍ଟି-ଏଜେଣ୍ଟ ସ୍ୱାସ୍ଥ୍ୟସେବା ପ୍ଲାଟଫର୍ମ',
    nav_projects: 'ପ୍ରକଳ୍ପ',
    nav_about: 'ଆମ ବିଷୟରେ',
    nav_contact: 'ଯୋଗାଯୋଗ କରନ୍ତୁ',
    nav_orchestrator: 'ଅର୍କେଷ୍ଟ୍ରେଟର ଓଏସ୍',
    nav_available_homes: 'ୱାର୍କସପେସ୍ ଖୋଲନ୍ତୁ',
    tab_swarm: 'ସ୍ୱାର୍ମ ଇଣ୍ଟେଲିଜେନ୍ସ',
    tab_overview: 'ମୋର ସ୍ୱାସ୍ଥ୍ୟ ସ୍ଥିତି',
    tab_analytics: 'ଦୃଶ୍ୟ ବିଶ୍ଳେଷଣ',
    tab_hospital: 'ଡବ୍ଲୁଏଚ୍ଓ ନିରୀକ୍ଷଣ ମାନଚିତ୍ର',
    tab_scan: 'ମେଡିକାଲ୍ ସ୍କାନ୍ ଏଆଇ',
    tab_records: 'ଆଭା ଏବଂ ରେକର୍ଡ',
    tab_health_sync: 'ଗୁଗୁଲ୍ ଓ ଆପଲ୍ ହେଲଥ୍',
    btn_emergency_sos: 'ଜରୁରୀକାଳୀନ SOS (112)',
    btn_export_hub: 'ରପ୍ତାନି ହବ୍',
    btn_sync_now: 'ଡିଭାଇସ୍ ସିଙ୍କ୍ କରନ୍ତୁ',
    map_title: 'ଉନ୍ନତ ମହାମାରୀ ନିରୀକ୍ଷଣ ମାନଚିତ୍ର',
    map_layer_heatmap: 'ସଂକ୍ରମଣ ସାନ୍ଦ୍ରତା',
    map_layer_beds: 'ଆଇସିୟୁ ବେଡ୍ କ୍ଷମତା',
    map_layer_vectors: 'ସଂକ୍ରମଣ ପ୍ରବାହ',
    map_layer_aqi: 'ବାୟୁ ଗୁଣବତ୍ତା ବିପଦ',
    map_scope_global: '🌐 ବିଶ୍ୱସ୍ତରୀୟ ନିରୀକ୍ଷଣ',
    map_scope_india: '🇮🇳 ଭାରତ ଆଞ୍ଚଳିକ ଧ୍ୟାନ',
    health_sync_title: 'ଗୁଗୁଲ୍ ହେଲଥ୍ କନେକ୍ଟ ଏବଂ ଆପଲ୍ ହେଲଥକିଟ୍ ହବ୍',
    health_sync_subtitle: 'ଆପଲ୍ ୱାଚ୍ ଏବଂ ପିକ୍ସେଲ୍ ୱାଚରୁ ଲାଇଭ୍ ସ୍ୱାସ୍ଥ୍ୟ ତଥ୍ୟ ସଂଗ୍ରହ',
    apple_health: 'ଆପଲ୍ ହେଲଥ୍',
    google_health: 'ଗୁଗୁଲ୍ ହେଲଥ୍ କନେକ୍ଟ',
    wearable_status_connected: 'ସଂଯୋଗ ହୋଇଛି ଏବଂ ଲାଇଭ୍',
    wearable_status_syncing: 'ତଥ୍ୟ ସିଙ୍କ୍ ହେଉଛି...',
    vitals_heart_rate: 'ହୃଦସ୍ପନ୍ଦନ ହାର',
    vitals_oxygen: 'ରକ୍ତ ଅମ୍ଳଜାନ (SpO2)',
    vitals_blood_pressure: 'ରକ୍ତଚାପ',
    vitals_respiratory: 'ଶ୍ୱାସକ୍ରିୟା ହାର',
    vitals_steps: 'ଦୈନିକ ପାଦ ଗଣନା',
    vitals_ecg: 'ଇସିଜି ରିଦମ୍',
    vitals_sleep: 'ନିଦ୍ରା ଗୁଣବତ୍ତା',
    import_export_xml: 'ଆପଲ୍ ହେଲଥ୍ XML କିମ୍ବା ଗୁଗୁଲ୍ ଫାଇଲ୍ ଆଣନ୍ତୁ',
    drop_file_here: 'XML / JSON ଫାଇଲ୍ ଏଠାରେ ଛାଡନ୍ତୁ',
    ai_anomaly_alert: 'ଏଆଇ ସ୍ୱାସ୍ଥ୍ୟ ଚେତାବନୀ',
  }
};

// Universal Medical Text Translation Matrix for Scans, Diagnoses, Explanations, and Doctor Q&A
const DYNAMIC_MEDICAL_TRANSLATIONS: Record<string, Record<LanguageCode, string>> = {
  // Headings
  "Interpretation Summary": {
    en: "Interpretation Summary",
    hi: "व्याख्या सारांश",
    bn: "ব্যাখ্যা সারসংক্ষেপ",
    ta: "விளக்கச் சுருக்கம்",
    te: "వ్యాఖ్యాన సారాంశం",
    mr: "अर्थविवरण सारांश",
    gu: "અર્થઘટન સારાંશ",
    kn: "ವಿವರಣೆಯ ಸಾರಾಂಶ",
    ml: "വ്യാഖ്യാന സംഗ്രഹം",
    pa: "ਵਿਆਖਿਆ ਸਾਰ",
    or: "ବ୍ୟାଖ୍ୟା ସାରାଂଶ"
  },
  "Patient-Friendly Explanation": {
    en: "Patient-Friendly Explanation",
    hi: "मरीज़-अनुकूल व्याख्या (सरल भाषा)",
    bn: "রোগী-বান্ধব সহজ ব্যাখ্যা",
    ta: "நோயாளிக்கான எளிய விளக்கம்",
    te: "రోగికి అర్థమయ్యే సులభమైన వివరణ",
    mr: "रुग्ण-स्नेही सोपे स्पष्टीकरण",
    gu: "દર્દી માટે સરળ સમજૂતી",
    kn: "ರೋಗಿ-ಸ್ನೇಹಿ ಸರಳ ವಿವರಣೆ",
    ml: "രോഗിക്കുള്ള ലളിതമായ വിശദീകരണം",
    pa: "ਮਰੀਜ਼-ਅਨੁਕੂਲ ਸਰਲ ਵਿਆਖਿਆ",
    or: "ରୋଗୀ-ଅନୁକୂଳ ସରଳ ବ୍ୟାଖ୍ୟା"
  },
  "Extracted Clinical Observations": {
    en: "Extracted Clinical Observations",
    hi: "निकाले गए नैदानिक अवलोकन",
    bn: "নিষ্কাশিত ক্লিনিকাল পর্যবেক্ষণ",
    ta: "கண்டறியப்பட்ட மருத்துவ அவதானிப்புகள்",
    te: "వెలికితీసిన క్లినికల్ పరిశీలనలు",
    mr: "काढून घेतलेले वैद्यकीय निरीक्षणे",
    gu: "તારવેલા ક્લિનિકલ અવલોકનો",
    kn: "ಹೊರತೆಗೆಯಲಾದ ವೈದ್ಯಕೀಯ ವೀಕ್ಷಣೆಗಳು",
    ml: "കണ്ടെത്തിയ ക്ലിനിക്കൽ നിരീക്ഷണങ്ങൾ",
    pa: "ਕੱਢੇ ਗਏ ਕਲੀਨਿਕਲ ਨਿਰੀਖਣ",
    or: "ପ୍ରାପ୍ତ କ୍ଲିନିକାଲ୍ ପର୍ଯ୍ୟବେକ୍ଷଣ"
  },
  "Recommended Questions for Your Doctor": {
    en: "Recommended Questions for Your Doctor",
    hi: "अपने डॉक्टर से पूछने के लिए अनुशंसित प्रश्न",
    bn: "আপনার ডাক্তারের কাছে জিজ্ঞাসা করার জন্য প্রস্তাবিত প্রশ্ন",
    ta: "உங்கள் மருத்துவரிடம் கேட்க பரிந்துரைக்கப்பட்ட கேள்விகள்",
    te: "మీ డాక్టర్‌ను అడగవలసిన ముఖ్యమైన ప్రశ్నలు",
    mr: "आपल्या डॉक्टरांना विचारण्यासाठी शिफारस केलेले प्रश्न",
    gu: "તમારા ડૉક્ટરને પૂછવા માટેના ભલામણ કરેલ પ્રશ્નો",
    kn: "ನಿಮ್ಮ ವೈದ್ಯರನ್ನು ಕೇಳಲು ಶಿಫಾರಸು ಮಾಡಲಾದ ಪ್ರಶ್ನೆಗಳು",
    ml: "നിങ്ങളുടെ ഡോക്ടറോട് ചോദിക്കാൻ നിർദ്ദേശിച്ച ചോദ്യങ്ങൾ",
    pa: "ਆਪਣੇ ਡਾਕਟਰ ਨੂੰ ਪੁੱਛਣ ਲਈ ਸਿਫਾਰਸ਼ ਕੀਤੇ ਸਵਾਲ",
    or: "ଆପଣଙ୍କ ଡାକ୍ତରଙ୍କୁ ପଚାରିବା ପାଇଁ ସୁପାରିଶ ପ୍ରଶ୍ନ"
  },

  // Urgency & Diagnosis
  "🔴 Urgent Orthopedic Review Required": {
    en: "🔴 Urgent Orthopedic Review Required",
    hi: "🔴 तत्काल आर्थोपेडिक (हड्डी रोग) समीक्षा आवश्यक",
    bn: "🔴 অবিলম্বে অর্থোপেডিক পর্যালোচনা প্রয়োজন",
    ta: "🔴 அவசர எலும்பியல் மருத்துவர் பரிசோதனை தேவை",
    te: "🔴 అత్యవసర ఆర్థోపెడిక్ సమీక్ష అవసరం",
    mr: "🔴 तातडीने ऑर्थोपेडिक तपासणी आवश्यक",
    gu: "🔴 તાત્કાલિક ઓર્થોપેડિક તપાસ જરૂરી",
    kn: "🔴 ತುರ್ತು ಮೂಳೆ ತಜ್ಞರ ಪರಿಶೀಲನೆ ಅಗತ್ಯವಿದೆ",
    ml: "🔴 അടിയന്തര ഓർത്തോപീഡിക് പരിശോധന ആവശ്യമാണ്",
    pa: "🔴 ਤੁਰੰਤ ਹੱਡੀਆਂ ਦੇ ਡਾਕਟਰ ਦੀ ਸਮੀਖਿਆ ਜ਼ਰੂਰੀ ਹੈ",
    or: "🔴 ତୁରନ୍ତ ଅସ୍ଥିଶଲ୍ୟ ଡାକ୍ତରୀ ସମୀକ୍ଷା ଆବଶ୍ୟକ"
  },
  "FractureNet YOLOv8: Displaced Distal Radius Forearm Fracture": {
    en: "FractureNet YOLOv8: Displaced Distal Radius Forearm Fracture",
    hi: "फ्रैक्चरनेट YOLOv8: विस्थापित डिस्टल रेडियस अग्रभाग फ्रैक्चर (हाथ की हड्डी टूटी)",
    bn: "ফ্র্যাকচারনেট YOLOv8: স্থানচ্যুত ডিস্টাল রেডিয়াস ফোরআর্ম ফ্র্যাকচার",
    ta: "ஃபிராக்சர்நெட் YOLOv8: மணிக்கட்டுக்கு அருகிலுள்ள முன்கை எலும்பு முறிவு",
    te: "ఫ్రాక్చర్‌నెట్ YOLOv8: స్థానభ్రంశం చెందిన ముంజేయి ఎముక పగులు",
    mr: "फ्रॅक्चरनेट YOLOv8: विस्थापित डिस्टल रेडियस मनगटाजवळील हाड फ्रॅक्चर",
    gu: "ફ્રેક્ચરનેટ YOLOv8: કાંડા પાસેના હાથના હાડકામાં ફ્રેક્ચર",
    kn: "ಫ್ರ್ಯಾಕ್ಚರ್‌ನೆಟ್ YOLOv8: ಮುಂಗೈ ಮೂಳೆ ಮುರಿತ (ರೇಡಿಯಸ್ ಫ್ರ್ಯಾಕ್ಚರ್)",
    ml: "ഫ്രാക്ചർനെറ്റ് YOLOv8: കൈത്തണ്ടയിലെ അസ്ഥി ഒടിവ് (റേഡിയസ് ഫ്രാക്ചർ)",
    pa: "ਫ੍ਰੈਕਚਰਨੈੱਟ YOLOv8: ਗੁੱਟ ਦੇ ਕੋਲ ਬਾਂਹ ਦੀ ਹੱਡੀ ਦਾ ਫ੍ਰੈਕਚਰ",
    or: "ଫ୍ରାକ୍ଚରନେଟ୍ YOLOv8: ହାତର ଅଗ୍ରଭାଗ ହାଡ଼ ଭଙ୍ଗା (ରେଡିଅସ୍ ଫ୍ରାକ୍ଚର)"
  },

  // Patient friendly paragraph
  "The X-ray shows a clear fracture line in the forearm bone (radius) near the wrist. The wrist joint itself appears aligned, but the broken bone requires immediate orthopedic stabilization (splint or cast) to ensure proper healing.": {
    en: "The X-ray shows a clear fracture line in the forearm bone (radius) near the wrist. The wrist joint itself appears aligned, but the broken bone requires immediate orthopedic stabilization (splint or cast) to ensure proper healing.",
    hi: "एक्स-रे में कलाई के पास अग्रभाग की हड्डी (रेडियस) में एक स्पष्ट फ्रैक्चर लाइन दिखाई दे रही है। कलाई का जोड़ स्वयं संरेखित दिखता है, लेकिन टूटी हुई हड्डी को ठीक से जुड़ने के लिए तत्काल प्लास्टर (कास्ट या स्प्लिंट) की आवश्यकता है।",
    bn: "এক্স-রে রিপোর্টে কব্জির কাছে বাহুর হাড়ে (রেডিয়াস) একটি স্পষ্ট ফ্র্যাকচার রেখা দেখা যাচ্ছে। কব্জির জয়েন্টটি ঠিক থাকলেও, সঠিকভাবে জোড়া লাগার জন্য ভাঙা হাড়টিতে অবিলম্বে প্লাস্টার বা স্প্লিন্ট প্রয়োজন।",
    ta: "எக்ஸ்-ரே படத்தில் மணிக்கட்டுக்கு அருகில் உள்ள முன்கை எலும்பில் (ரேடியஸ்) தெளிவான முறிவு தெரிகிறது. மணிக்கட்டு மூட்டு சீராக உள்ளது, ஆனால் உடைந்த எலும்பு சரியாக குணமடைய உடனடியாக கட்டு (பிளாஸ்டர் காஸ்ட்) போடப்பட வேண்டும்.",
    te: "ఎక్స్-రేలో మణికట్టు దగ్గర ముంజేయి ఎముక (రేడియస్) లో స్పష్టమైన పగులు కనిపిస్తోంది. మణికట్టు కీలు బాగానే ఉంది, కానీ విరిగిన ఎముక సరిగ్గా అతుక్కోవడానికి వెంటనే ప్లాస్టర్ (స్ప్లింట్ లేదా కాస్ట్) అవసరం.",
    mr: "क्ष-किरण (एक्स-रे) तपासणीत मनगटाजवळील हाताच्या हाडात (रेडियस) स्पष्ट फ्रॅक्चर दिसत आहे. मनगटाचा सांधा सुरक्षित असला तरी, हाड व्यवस्थित जुळण्यासाठी त्वरित प्लास्टर किंवा स्प्लिंट लावणे आवश्यक आहे.",
    gu: "એક્સ-રેમાં કાંડા પાસેના હાથના હાડકામાં (રેડિયસ) સ્પષ્ટ ફ્રેક્ચર દેખાય છે. કાંડાનો સાંધો યોગ્ય દેખાય છે, પરંતુ તૂટેલા હાડકાને યોગ્ય રીતે સાજા કરવા માટે તાત્કાલિક પ્લાસ્ટર (કાસ્ટ) જરૂરી છે.",
    kn: "ಎಕ್ಸ್-ರೇ ಚಿತ್ರದಲ್ಲಿ ಮಣಿಕಟ್ಟಿನ ಬಳಿಯ ಮುಂಗೈ ಮೂಳೆಯಲ್ಲಿ (ರೇಡಿಯಸ್) ಸ್ಪಷ್ಟ ಮುರಿತ ಕಂಡುಬರುತ್ತದೆ. ಮಣಿಕಟ್ಟಿನ ಕೀಲು ಸರಿಯಾಗಿದೆ, ಆದರೆ ಮುರಿದ ಮೂಳೆ ಸರಿಯಾಗಿ ಗುಣವಾಗಲು ತಕ್ಷಣ ಪ್ಲ್ಯಾಸ್ಟರ್ (ಸ್ಪ್ಲಿಂಟ್ ಅಥವಾ ಕಾಸ್ಟ್) ಅಗತ್ಯವಿದೆ.",
    ml: "എക്സ്-റേയിൽ കൈത്തണ്ടയിലെ അസ്ഥിയിൽ (റേഡിയസ്) വ്യക്തമായ ഒടിവ് കാണാം. മണിബന്ധം സുരക്ഷിതമാണെങ്കിലും, ഒടിഞ്ഞ അസ്ഥി ശരിയായി കൂടിച്ചേരാൻ ഉടൻ തന്നെ പ്ലാസ്റ്റർ ഇടേണ്ടതുണ്ട്.",
    pa: "ਐਕਸ-ਰੇ ਵਿੱਚ ਗੁੱਟ ਦੇ ਕੋਲ ਬਾਂਹ ਦੀ ਹੱਡੀ (ਰੇਡੀਅਸ) ਵਿੱਚ ਇੱਕ ਸਾਫ਼ ਫ੍ਰੈਕਚਰ ਲਾਈਨ ਦਿਖਾਈ ਦੇ ਰਹੀ ਹੈ। ਗੁੱਟ ਦਾ ਜੋੜ ਠੀਕ ਲੱਗਦਾ ਹੈ, ਪਰ ਟੁੱਟੀ ਹੋਈ ਹੱਡੀ ਨੂੰ ਠੀਕ ਹੋਣ ਲਈ ਤੁਰੰਤ ਪਲਾਸਟਰ (ਸਪਲਿੰਟ ਜਾਂ ਕਾਸਟ) ਦੀ ਲੋੜ ਹੈ।",
    or: "ଏକ୍ସ-ରେ ରିପୋର୍ଟରେ କବ୍ଜି ପାଖ ହାତ ହାଡ଼ (ରେଡିଅସ୍) ରେ ସ୍ପଷ୍ଟ ଭଙ୍ଗା ରେଖା ଦେଖାଯାଉଛି । ଭଙ୍ଗା ହାଡ଼ ଠିକ୍ ଭାବେ ଯୋଡ଼ି ହେବା ପାଇଁ ତୁରନ୍ତ ପ୍ଲାଷ୍ଟର (କାଷ୍ଟ୍) ଆବଶ୍ୟକ ।"
  },

  // Observations
  "Transverse cortical break localized at the distal metaphyseal radius junction.": {
    en: "Transverse cortical break localized at the distal metaphyseal radius junction.",
    hi: "डिस्टल मेटाफिसियल रेडियस जंक्शन पर अनुप्रस्थ कॉर्टिकल ब्रेक स्थित है।",
    bn: "ডিস্টাল মেটাফিসিয়াল রেডিয়াস সংযোগস্থলে ট্রান্সভার্স কর্টিক্যাল ব্রেক দেখা গেছে।",
    ta: "மணிக்கட்டு மூட்டுக்கு அருகில் உள்ள முன்கை எலும்பில் குறுக்குவெட்டு முறிவு உறுதி செய்யப்பட்டுள்ளது.",
    te: "డిస్టల్ మెటాఫిసియల్ రేడియస్ జంక్షన్ వద్ద ఎముకలో విరుపు గుర్తించబడింది.",
    mr: "डिस्टल मेटाफिसियल रेडियस जंक्शनवर ट्रान्सव्हर्स कॉर्टिकल ब्रेक आढळला.",
    gu: "ડિસ્ટલ મેટાફિસિયલ રેડિયસ જંક્શન પર હાડકામાં ફ્રેક્ચર નોંધાયું છે.",
    kn: "ರೇಡಿಯಸ್ ಮೂಳೆಯ ಜಂಕ್ಷನ್‌ನಲ್ಲಿ ಅಡ್ಡಲಾಗಿ ಮುರಿತ ಕಂಡುಬಂದಿದೆ.",
    ml: "റേഡിയസ് അസ്ഥിയുടെ സന്ധിയിൽ കുറുകെയുള്ള ഒടിവ് രേഖപ്പെടുത്തി.",
    pa: "ਰੇਡੀਅਸ ਜੰਕਸ਼ਨ ਉੱਤੇ ਹੱਡੀ ਵਿੱਚ ਤਰੇੜ ਦਿਖਾਈ ਦਿੱਤੀ ਹੈ।",
    or: "ରେଡିଅସ୍ ସଂଯୋଗସ୍ଥଳରେ ହାଡ଼ ଭାଙ୍ଗିଥିବା ଦେଖାଯାଉଛି ।"
  },
  "FractureNet YOLOv8 convolutional layer activation peaked over the radius displacement zone.": {
    en: "FractureNet YOLOv8 convolutional layer activation peaked over the radius displacement zone.",
    hi: "फ्रैक्चरनेट YOLOv8 कनवल्शनल लेयर का सक्रियण रेडियस विस्थापन क्षेत्र पर सबसे अधिक रहा।",
    bn: "ফ্র্যাকচারনেট YOLOv8 এআই মডেল রেডিয়াস স্থানচ্যুতি অঞ্চলে সর্বোচ্চ সক্রিয়তা দেখিয়েছে।",
    ta: "ஃபிராக்சர்நெட் YOLOv8 ஏஐ மாடல் எலும்பு முறிவுப் பகுதியை துல்லியமாக கண்டறிந்துள்ளது.",
    te: "ఫ్రాక్చర్‌నెట్ YOLOv8 ఏఐ మోడల్ పగులు ప్రాంతాన్ని ఖచ్చితంగా గుర్తించింది.",
    mr: "फ्रॅक्चरनेट YOLOv8 कन्व्होल्युशनल लेयर ॲक्टिव्हेशन फ्रॅक्चर क्षेत्रावर अचूक नोंदवले गेले.",
    gu: "ફ્રેક્ચરનેટ YOLOv8 એઆઈ મોડેલે ફ્રેક્ચર વિસ્તારની સચોટ ઓળખ કરી છે.",
    kn: "ಫ್ರ್ಯಾಕ್ಚರ್‌ನೆಟ್ YOLOv8 ಮಾದರಿಯು ಮುರಿತದ ವಲಯವನ್ನು ನಿಖರವಾಗಿ ಗುರುತಿಸಿದೆ.",
    ml: "ഫ്രാക്ചർനെറ്റ് YOLOv8 എഐ മോഡൽ ഒടിവ് കൃത്യമായി കണ്ടെത്തി.",
    pa: "ਫ੍ਰੈਕਚਰਨੈੱਟ YOLOv8 ਮਾਡਲ ਨੇ ਹੱਡੀ ਦੀ ਤਰੇੜ ਨੂੰ ਸਹੀ ਤਰੀਕੇ ਨਾਲ ਪਛਾਣਿਆ ਹੈ।",
    or: "ଫ୍ରାକ୍ଚରନେଟ୍ YOLOv8 ଏଆଇ ମଡେଲ୍ ଭଙ୍ଗା ଅଂଶକୁ ସଠିକ୍ ଭାବରେ ଚିହ୍ନଟ କରିଛି ।"
  },
  "No intra-articular radiocarpal joint extension visible.": {
    en: "No intra-articular radiocarpal joint extension visible.",
    hi: "कलाई के मुख्य जोड़ में कोई फ्रैक्चर फैलाव नहीं देखा गया है (जोड़ सुरक्षित है)।",
    bn: "কব্জির মূল জয়েন্টে কোনো ফ্র্যাকচার বিস্তার দেখা যায়নি (জয়েন্টটি সুরক্ষিত)।",
    ta: "மணிக்கட்டு மூட்டின் உள்ளே எலும்பு முறிவு பரவவில்லை (மூட்டு பாதுகாப்பாக உள்ளது).",
    te: "మణికట్టు కీలు లోపలికి పగులు విస్తరించలేదు (కీలు సురక్షితంగా ఉంది).",
    mr: "मनगटाच्या मुख्य सांध्यात फ्रॅक्चरचा विस्तार झालेला नाही (सांधा सुरक्षित आहे).",
    gu: "કાંડાના મુખ્ય સાંધામાં કોઈ ફ્રેક્ચર ફેલાવ નથી (સાંધો સુરક્ષિત છે).",
    kn: "ಮಣಿಕಟ್ಟಿನ ಮುಖ್ಯ ಕೀಲು ಒಳಗೆ ಮುರಿತ ಹರಡಿಲ್ಲ (ಕೀಲು ಸುರಕ್ಷಿತವಾಗಿದೆ).",
    ml: "മണിബന്ധ സന്ധിയിലേക്ക് ഒടിവ് പടർന്നിട്ടില്ല (സന്ധി സുരക്ഷിതമാണ്).",
    pa: "ਗੁੱਟ ਦੇ ਮੁੱਖ ਜੋੜ ਵਿੱਚ ਕੋਈ ਫ੍ਰੈਕਚਰ ਨਹੀਂ ਫੈਲਿਆ (ਜੋੜ ਸੁਰੱਖਿਅਤ ਹੈ)।",
    or: "କବ୍ଜି ମୁଖ୍ୟ ଗଣ୍ଠି ଭିତରକୁ ଭଙ୍ଗା ଯାଇନାହିଁ (ଗଣ୍ଠି ସୁରକ୍ଷିତ) ।"
  },
  "Ulnar styloid process appears intact with preserved joint congruence.": {
    en: "Ulnar styloid process appears intact with preserved joint congruence.",
    hi: "उलनार स्टायलॉयड प्रोसेस बरकरार है और संयुक्त संरेखण सुरक्षित है।",
    bn: "আলনার স্টাইলয়েড অংশ অক্ষত রয়েছে এবং জয়েন্টের সামঞ্জস্য বজায় আছে।",
    ta: "அல்னார் எலும்பு முனை உறுதியாக உள்ளது மற்றும் மூட்டு அமைப்பு பாதுகாக்கப்பட்டுள்ளது.",
    te: "అల్నార్ ఎముక సురక్షితంగా ఉంది మరియు కీలు అమరిక చెక్కుచెదరకుండా ఉంది.",
    mr: "अल्नार स्टायलॉइड प्रोसेस सुरक्षित असून सांध्याची रचना व्यवस्थित आहे.",
    gu: "અલ્નાર હાડકું સુરક્ષિત છે અને સાંધાનું બંધારણ જળવાયેલું છે.",
    kn: "ಅಲ್ನಾರ್ ಮೂಳೆ ಸುರಕ್ಷಿತವಾಗಿದೆ ಮತ್ತು ಕೀಲಿನ ರಚನೆ ಉತ್ತಮವಾಗಿದೆ.",
    ml: "അൽനാർ അസ്ഥി സുരക്ഷിതമാണ്, സന്ധി ഘടന കേടുകൂടാതെയിരിക്കുന്നു.",
    pa: "ਅਲਨਾਰ ਹੱਡੀ ਸੁਰੱਖਿਅਤ ਹੈ ਅਤੇ ਜੋੜ ਦੀ ਬਣਤਰ ਠੀਕ ਹੈ।",
    or: "ଅଲନାର୍ ହାଡ଼ ସୁରକ୍ଷିତ ଅଛି ଏବଂ ଗଣ୍ଠି ସଠିକ୍ ଅଛି ।"
  },

  // Questions for doctor
  "Do I need a follow-up imaging scan after cast placement?": {
    en: "Do I need a follow-up imaging scan after cast placement?",
    hi: "क्या प्लास्टर (कास्ट) लगाने के बाद मुझे दोबारा एक्स-रे करवाने की आवश्यकता होगी?",
    bn: "প্লাস্টার লাগানোর পর কি আমার আবার এক্স-রে স্ক্যান করাতে হবে?",
    ta: "கட்டு போட்ட பிறகு நான் மீண்டும் எக்ஸ்-ரே எடுக்க வேண்டுமா?",
    te: "ప్లాస్టర్ వేసిన తర్వాత నేను మళ్లీ ఎక్స్-రే చేయించుకోవాలా?",
    mr: "प्लास्टर बसवल्यानंतर मला पुन्हा एक्स-रे स्कॅन करण्याची गरज आहे का?",
    gu: "પ્લાસ્ટર લગાવ્યા પછી શું મારે ફરીથી એક્સ-રે કરાવવો પડશે?",
    kn: "ಪ್ಲ್ಯಾಸ್ಟರ್ ಹಾಕಿದ ನಂತರ ನಾನು ಮತ್ತೆ ಎಕ್ಸ್-ರೇ ಸ್ಕ್ಯಾನ್ ಮಾಡಬೇಕೇ?",
    ml: "പ്ലാസ്റ്റർ ഇട്ടതിനു ശേഷം വീണ്ടും എക്സ്-റേ എടുക്കേണ്ടതുണ്ടോ?",
    pa: "ਕੀ ਪਲਾਸਟਰ ਲਗਾਉਣ ਤੋਂ ਬਾਅਦ ਮੈਨੂੰ ਦੁਬਾਰਾ ਐਕਸ-ਰੇ ਕਰਵਾਉਣ ਦੀ ਲੋੜ ਪਵੇਗੀ?",
    or: "ପ୍ଲାଷ୍ଟର ପରେ ମୋତେ ପୁଣି ଥରେ ଏକ୍ସ-ରେ କରିବାକୁ ପଡିବ କି?"
  },
  "Are there any symptom red flags (e.g. numbness, cyanosis in fingers) that require urgent attention?": {
    en: "Are there any symptom red flags (e.g. numbness, cyanosis in fingers) that require urgent attention?",
    hi: "क्या ऐसे कोई खतरे के लक्षण हैं (जैसे उंगलियों का सुन्न होना, नीला पड़ना या असहनीय दर्द) जिन पर तुरंत ध्यान देना आवश्यक है?",
    bn: "এমন কোনো সতর্কতামূলক লক্ষণ আছে কি (যেমন আঙ্গুল অসাড় হওয়া, নীল হয়ে যাওয়া) যার জন্য জরুরি মনোযোগ প্রয়োজন?",
    ta: "விரல்களில் மரத்துப்போதல் அல்லது நீல நிறமாக மாறுதல் போன்ற அவசர சிகிச்சை தேவைப்படும் அறிகுறிகள் ஏதேனும் உள்ளதா?",
    te: "వేళ్లు తిమ్మిరి రావడం లేదా నీలంగా మారడం వంటి అత్యవసర వైద్యం అవసరమయ్యే ప్రమాద సంకేతాలు ఏమైనా ఉన్నాయా?",
    mr: "बोटे बधीर होणे किंवा निळी पडणे यासारखी तातडीने लक्ष देण्याची काही धोक्याची लक्षणे आहेत का?",
    gu: "શું આંગળીઓ સુન્ન થઈ જવી કે વાદળી પડી જવી જેવા કોઈ ગંભીર લક્ષણો છે જેના પર તાત્કાલિક ધ્યાન આપવું જરૂરી છે?",
    kn: "ಬೆರಳುಗಳು ಮರಗಟ್ಟುವುದು ಅಥವಾ ನೀಲಿ ಬಣ್ಣಕ್ಕೆ ತಿರುಗುವಂತಹ ತುರ್ತು ಗಮನ ಅಗತ್ಯವಿರುವ ಯಾವುದೇ ಅಪಾಯಕಾರಿ ಲಕ್ಷಣಗಳಿವೆಯೇ?",
    ml: "വിരലുകളിൽ മരവിപ്പ് അല്ലെങ്കിൽ നീലനിറം വരുന്നത് പോലുള്ള അടിയന്തര ശ്രദ്ധ ആവശ്യമുള്ള എന്തെങ്കിലും ലക്ഷണങ്ങളുണ്ടോ?",
    pa: "ਕੀ ਕੋਈ ਖ਼ਤਰੇ ਦੇ ਲੱਛਣ ਹਨ (ਜਿਵੇਂ ਉਂਗਲਾਂ ਦਾ ਸੁੰਨ ਹੋਣਾ ਜਾਂ ਨੀਲਾ ਪੈਣਾ) ਜਿਨ੍ਹਾਂ 'ਤੇ ਤੁਰੰਤ ਧਿਆਨ ਦੇਣ ਦੀ ਲੋੜ ਹੈ?",
    or: "ଆଙ୍ଗୁଠି ଶୋଇଯିବା କିମ୍ବା ନୀଳ ପଡ଼ିଯିବା ଭଳି କୌଣସି ଜରୁରୀ ବିପଦ ଲକ୍ଷଣ ଅଛି କି?"
  },
  "What is the expected cast duration before starting physical therapy?": {
    en: "What is the expected cast duration before starting physical therapy?",
    hi: "फिजियोथेरेपी (व्यायाम) शुरू करने से पहले प्लास्टर कितने समय तक लगा रहेगा?",
    bn: "ফিজিওথেরাপি শুরু করার আগে প্লাস্টার কতদিন রাখতে হবে?",
    ta: "உடற்பயிற்சி சிகிச்சை (பிசியோதெரபி) தொடங்குவதற்கு முன் கட்டு எத்தனை வாரங்கள் இருக்க வேண்டும்?",
    te: "ఫిజియోథెరపీ ప్రారంభించే ముందు ప్లాస్టర్ ఎంత కాలం ఉంచాలి?",
    mr: "फिजिओथेरपी सुरू करण्यापूर्वी प्लास्टर किती दिवस ठेवावे लागेल?",
    gu: "ફિઝિયોથેરાપી શરૂ કરતા પહેલા પ્લાસ્ટર કેટલા સમય સુધી રાખવું પડશે?",
    kn: "ಫಿಸಿಯೋಥೆರಪಿ ಪ್ರಾರಂಭಿಸುವ ಮೊದಲು ಪ್ಲ್ಯಾಸ್ಟರ್ ಅನ್ನು ಎಷ್ಟು ದಿನ ಇರಿಸಬೇಕು?",
    ml: "ഫിസിയോതെറാപ്പി ആരംഭിക്കുന്നതിന് മുമ്പ് എത്ര കാലം പ്ലാസ്റ്റർ ഇടേണ്ടി വരും?",
    pa: "ਫਿਜ਼ੀਓਥੈਰੇਪੀ ਸ਼ੁਰੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਪਲਾਸਟਰ ਕਿੰਨੇ ਸਮੇਂ ਲਈ ਰਹੇਗਾ?",
    or: "ଫିଜିଓଥେରାପି ପୂର୍ବରୁ ପ୍ଲାଷ୍ଟର କେତେ ଦିନ ରହିବ?"
  },

  // Wearables
  "Google Pixel Watch 3": {
    en: "Google Pixel Watch 3",
    hi: "गूगल पिक्सल वॉच 3",
    bn: "গুগল পিক্সেল ওয়াচ ৩",
    ta: "கூகிள் பிக்சல் வாட்ச் 3",
    te: "గూగుల్ పిక్సెల్ వాచ్ 3",
    mr: "गूगल पिक्सेल वॉच ३",
    gu: "ગુગલ પિક્સેલ વોચ ૩",
    kn: "ಗೂಗಲ್ ಪಿಕ್ಸೆಲ್ ವಾಚ್ 3",
    ml: "ഗൂഗിൾ പിക്സൽ വാച്ച് 3",
    pa: "ਗੂਗਲ ਪਿਕਸਲ ਵਾਚ 3",
    or: "ଗୁଗୁଲ୍ ପିକ୍ସେଲ୍ ୱାଚ୍ ୩"
  },
  "Apple Watch Ultra 2": {
    en: "Apple Watch Ultra 2",
    hi: "एप्पल वॉच अल्ट्रा 2",
    bn: "অ্যাপল ওয়াচ আল্ট্রা ২",
    ta: "ஆப்பிள் வாட்ச் அல்ட்ரா 2",
    te: "ఆపిల్ వాచ్ అల్ట్రా 2",
    mr: "ऍपल वॉच अल्ट्रा २",
    gu: "એપલ વોચ અલ્ટ્રા ૨",
    kn: "ಆಪಲ್ ವಾಚ್ ಅಲ್ಟ್ರಾ 2",
    ml: "ആപ്പിൾ വാച്ച് അൾട്രാ 2",
    pa: "ਐਪਲ ਵਾਚ ਅਲਟ੍ਰਾ 2",
    or: "ଆପଲ୍ ୱାଚ୍ ଅଲଟ୍ରା ୨"
  },
  "● Live Sync (3 mins ago)": {
    en: "● Live Sync (3 mins ago)",
    hi: "● लाइव सिंक (3 मिनट पहले)",
    bn: "● লাইভ সিঙ্ক (৩ মিনিট আগে)",
    ta: "● நேரலை ஒத்திசைவு (3 நிமிடங்களுக்கு முன்)",
    te: "● లైవ్ సింక్ (3 నిమిషాల క్రితం)",
    mr: "● थेट सिंक (३ मिनिटांपूर्वी)",
    gu: "● લાઈવ સિંક (૩ મિનિટ પહેલાં)",
    kn: "● ಲೈವ್ ಸಿಂಕ್ (3 ನಿಮಿಷಗಳ ಹಿಂದೆ)",
    ml: "● ലൈവ് സിങ്ക് (3 മിനിറ്റ് മുമ്പ്)",
    pa: "● ਲਾਈਵ ਸਿੰਕ (3 ਮਿੰਟ ਪਹਿਲਾਂ)",
    or: "● ଲାଇଭ୍ ସିଙ୍କ୍ (୩ ମିନିଟ୍ ପୂର୍ବରୁ)"
  },
  "● Live Sync (Just now)": {
    en: "● Live Sync (Just now)",
    hi: "● लाइव सिंक (अभी-अभी)",
    bn: "● লাইভ সিঙ্ক (এইমাত্র)",
    ta: "● நேரலை ஒத்திசைவு (இப்போது)",
    te: "● లైవ్ సింక్ (ఇప్పుడే)",
    mr: "● थेट सिंक (आत्ताच)",
    gu: "● લાઈવ સિંક (હમણાં જ)",
    kn: "● ಲೈವ್ ಸಿಂಕ್ (ಈಗಷ್ಟೇ)",
    ml: "● ലൈവ് സിങ്ക് (ഇപ്പോൾ)",
    pa: "● ਲਾਈਵ ਸਿੰਕ (ਹੁਣੇ ਹੀ)",
    or: "● ଲାଇଭ୍ ସିଙ୍କ୍ (ଏବେ)"
  }
};

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string, fallback?: string) => string;
  translateText: (text: string) => string;
  languages: LanguageInfo[];
  currentLangInfo: LanguageInfo;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>('en');

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('sanjeevani_lang') as LanguageCode;
      if (savedLang && TRANSLATIONS[savedLang]) {
        setLanguageState(savedLang);
      }
    } catch {
      // localStorage fallback
    }
  }, []);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('sanjeevani_lang', lang);
    } catch {}
  };

  const t = (key: string, fallback?: string): string => {
    const langDict = TRANSLATIONS[language];
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    const defaultDict = TRANSLATIONS.en;
    if (defaultDict && defaultDict[key]) {
      return defaultDict[key];
    }
    return fallback || key;
  };

  // Universal dynamic medical string translator across all 11 languages
  const translateText = (text: string): string => {
    if (!text) return text;
    if (language === 'en') return text;

    // 1. Direct dictionary match
    const directMatch = DYNAMIC_MEDICAL_TRANSLATIONS[text.trim()];
    if (directMatch && directMatch[language]) {
      return directMatch[language];
    }

    // 2. Substring & fuzzy pattern matching for common medical variations
    for (const [key, translations] of Object.entries(DYNAMIC_MEDICAL_TRANSLATIONS)) {
      if (text.includes(key) && translations[language]) {
        return text.replace(key, translations[language]);
      }
    }

    // 3. Fallback to standard key dictionary
    return t(text, text);
  };

  const currentLangInfo = SUPPORTED_LANGUAGES.find(l => l.code === language) || SUPPORTED_LANGUAGES[0];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translateText, languages: SUPPORTED_LANGUAGES, currentLangInfo }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
