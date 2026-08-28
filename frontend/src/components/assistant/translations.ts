import { SupportedLanguage, Persona, ChatSession } from './types';
import { MockHealthProfile } from '@/data/mockHealthProfiles';

export interface AssistantDictionary {
  brandTitle: string;
  clinicalAiBadge: string;
  newChat: string;
  newConsultation: string;
  consultationWith: string;
  patientContext: string;
  uploadJson: string;
  searchInquiries: string;
  noInquiries: string;
  
  // Personas
  personas: {
    copilot: { label: string; full: string; desc: string };
    triage: { label: string; full: string; desc: string };
    nutrition: { label: string; full: string; desc: string };
    orchestrator: { label: string; full: string; desc: string };
  };

  // Inbox Filters
  inboxTabs: {
    all: string;
    triage: string;
    swarm: string;
    surveillance: string;
  };

  // Dossier Panel
  dossier: {
    title: string;
    connected: string;
    synced: string;
    yrs: string;
    blood: string;
    heartRate: string;
    oxygen: string;
    pressure: string;
    glucose: string;
    subAgentsTitle: string;
    directivesTitle: string;
    subAgents: {
      swarm: string;
      organTwin: string;
      who: string;
      uwin: string;
      scan: string;
      blockchain: string;
      rural: string;
    };
    directives: {
      sinus: string;
      noConflicts: string;
      idsp: string;
      ipfs: string;
    };
  };

  // Input & Action Buttons
  placeholders: {
    copilot: string;
    triage: string;
    nutrition: string;
    orchestrator: string;
  };
  send: string;
}

export const ASSISTANT_TRANSLATIONS: Record<SupportedLanguage, AssistantDictionary> = {
  en: {
    brandTitle: 'SynapseOS',
    clinicalAiBadge: 'Clinical AI',
    newChat: 'New Chat',
    newConsultation: 'New Consultation',
    consultationWith: 'Patient',
    patientContext: 'SWITCH PATIENT CONTEXT',
    uploadJson: 'Upload Custom Patient JSON',
    searchInquiries: 'Search inquiries...',
    noInquiries: 'No past inquiries yet. Ask questions in the center chat!',
    personas: {
      copilot: { label: 'Copilot', full: 'Clinical Copilot', desc: 'Specialized clinical reasoning, multi-agent consensus, imaging DICOM analysis, and ABDM longitudinal records.' },
      triage: { label: 'Triage', full: 'Triage Specialist AI', desc: 'Emergency severity assessment, acute red-flag detection, symptom progression modeling, and zero-bandwidth 2G GSM dispatch.' },
      nutrition: { label: 'Nutrition', full: 'Metabolic Nutrition AI', desc: 'Personalized macro distribution, glycemic index optimization, clinical dietetics, and metabolic recovery blueprints.' },
      orchestrator: { label: 'Surveillance', full: 'Public Health Radar', desc: 'Real-time WHO epidemic feeds, IDSP sentinel surveillance, U-WIN vaccination tracking, and regional hospital capacity.' }
    },
    inboxTabs: {
      all: 'All',
      triage: 'Triage',
      swarm: 'Swarm',
      surveillance: 'Surveillance'
    },
    dossier: {
      title: 'PATIENT DOSSIER & TELEMETRY',
      connected: 'Connected',
      synced: 'Synced',
      yrs: 'yrs',
      blood: 'Blood',
      heartRate: 'HEART RATE',
      oxygen: 'OXYGEN',
      pressure: 'PRESSURE',
      glucose: 'GLUCOSE',
      subAgentsTitle: 'ORCHESTRATOR SUB-AGENTS',
      directivesTitle: 'CLINICAL DIRECTIVES & TAGS',
      subAgents: {
        swarm: 'Swarm Multi-Agent Consensus',
        organTwin: 'Organ Twin Telemetry',
        who: 'WHO Disease Sentinel',
        uwin: 'U-WIN Vaccination Tracker',
        scan: 'MONAI & YOLOv8 Scan AI',
        blockchain: 'Blockchain ABHA Records',
        rural: '2G GSM SMS Triage'
      },
      directives: {
        sinus: 'Sinus Rhythm Normal',
        noConflicts: '0 Drug Conflicts',
        idsp: 'IDSP Sentinel Active',
        ipfs: 'IPFS EHR Verified'
      }
    },
    placeholders: {
      copilot: 'Ask clinical inquiries, query sub-agents, or review telemetry...',
      triage: 'Describe symptoms or red-flags for clinical triage...',
      nutrition: 'Ask for daily macro distribution and meal blueprint...',
      orchestrator: 'Query disease outbreaks, vaccination schedules, or IDSP surveillance...'
    },
    send: 'Send'
  },
  hi: {
    brandTitle: 'सिनैप्स ओएस',
    clinicalAiBadge: 'क्लिनिकल एआई',
    newChat: 'नया चैट',
    newConsultation: 'नया परामर्श',
    consultationWith: 'मरीज़',
    patientContext: 'मरीज़ प्रोफाइल बदलें',
    uploadJson: 'कस्टम मरीज़ JSON अपलोड करें',
    searchInquiries: 'पूछताछ खोजें...',
    noInquiries: 'अभी कोई पुराना परामर्श नहीं है। केंद्र चैट में प्रश्न पूछें!',
    personas: {
      copilot: { label: 'कोपायलट', full: 'क्लिनिकल कोपायलट', desc: 'विशेषज्ञ क्लिनिकल तर्क, मल्टी-एजेंट सर्वसम्मति, इमेजिंग विश्लेषण और एबीडीएम रिकॉर्ड।' },
      triage: { label: 'ट्राइएज', full: 'आपातकालीन ट्राइएज विशेषज्ञ', desc: 'आपातकालीन गंभीरता मूल्यांकन, लक्षण प्रगति और 2G जीएसएम ग्रामीण प्रेषण।' },
      nutrition: { label: 'पोषण', full: 'मेटाबोलिक पोषण एआई', desc: 'व्यक्तिगत मैक्रो वितरण, ग्लाइसेमिक इंडेक्स नियंत्रण और नैदानिक आहार ब्लूप्रिंट।' },
      orchestrator: { label: 'निगरानी', full: 'सार्वजनिक स्वास्थ्य रडार', desc: 'वास्तविक समय डब्ल्यूएचओ महामारी अलर्ट, आईडीएसपी निगरानी और यू-विन टीकाकरण।' }
    },
    inboxTabs: {
      all: 'सभी',
      triage: 'ट्राइएज',
      swarm: 'स्वार्म',
      surveillance: 'निगरानी'
    },
    dossier: {
      title: 'मरीज़ विवरण और टेलीमेट्री',
      connected: 'संबद्ध',
      synced: 'सिंक किया',
      yrs: 'वर्ष',
      blood: 'रक्त समूह',
      heartRate: 'हृदय गति',
      oxygen: 'ऑक्सीजन',
      pressure: 'रक्तचाप',
      glucose: 'ग्लूकोज',
      subAgentsTitle: 'ऑर्केस्ट्रेटर सब-एजेंट्स',
      directivesTitle: 'क्लिनिकल निर्देश और टैग',
      subAgents: {
        swarm: 'स्वार्म 5-एजेंट सर्वसम्मति',
        organTwin: 'अंग डिजिटल ट्विन टेलीमेट्री',
        who: 'डब्ल्यूएचओ रोग निगरानी',
        uwin: 'यू-विन टीकाकरण ट्रैकर',
        scan: 'मोनाई एवं वाईओएलओ एक्स-रे',
        blockchain: 'ब्लॉकचेन आभा ईएचआर रिकॉर्ड्स',
        rural: '2G जीएसएम एसएमएस ट्राइएज'
      },
      directives: {
        sinus: 'साइनस रिदम सामान्य',
        noConflicts: '0 दवा संघर्ष',
        idsp: 'आईडीएसपी अलर्ट सक्रिय',
        ipfs: 'आईपीएफआईएस सत्यापित'
      }
    },
    placeholders: {
      copilot: 'क्लिनिकल प्रश्न पूछें, एजेंटों से पूछें या टेलीमेट्री देखें...',
      triage: 'ट्राइएज के लिए लक्षण या खतरे के संकेत बताएं...',
      nutrition: 'दैनिक मैक्रो और भोजन योजना के बारे में पूछें...',
      orchestrator: 'रोग प्रकोप, टीकाकरण कार्यक्रम या आईडीएसपी अलर्ट खोजें...'
    },
    send: 'भेजें'
  },
  bn: {
    brandTitle: 'সিন্যাপ্স ওএস',
    clinicalAiBadge: 'ক্লিনিকাল এআই',
    newChat: 'নতুন চ্যাট',
    newConsultation: 'নতুন পরামর্শ',
    consultationWith: 'রোগী',
    patientContext: 'রোগী পরিবর্তন করুন',
    uploadJson: 'রোগীর JSON আপলোড করুন',
    searchInquiries: 'অনুসন্ধান করুন...',
    noInquiries: 'এখনও কোনো পূর্ববর্তী অনুসন্ধান নেই। চ্যাটে প্রশ্ন করুন!',
    personas: {
      copilot: { label: 'কোপাইলট', full: 'ক্লিনিকাল কোপাইলট', desc: 'ক্লিনিকাল যুক্তি, মাল্টি-এজেন্ট কনসেনসাস এবং এবিডিএম রেকর্ড।' },
      triage: { label: 'ট্রায়াজ', full: 'জরুরি ট্রায়াজ বিশেষজ্ঞ', desc: 'জরুরি তীব্রতা মূল্যায়ন, উপসর্গ অগ্রগতি এবং 2G এসএমএস প্রোটোকল।' },
      nutrition: { label: 'পুষ্টি', full: 'মেটাবলিক পুষ্টি এআই', desc: 'ব্যক্তিগত ম্যাক্রো বিতরণ, গ্লাইসেমিক সূচক এবং ডায়েট ব্লুপ্রিন্ট।' },
      orchestrator: { label: 'নজরদারি', full: 'জনস্বাস্থ্য রাডার', desc: 'রিয়েল-টাইম ডাব্লুএইচও মহামারী ফিড এবং ইউ-উইন টিকাকরণ।' }
    },
    inboxTabs: {
      all: 'সব',
      triage: 'ট্রায়াজ',
      swarm: 'সোয়ার্ম',
      surveillance: 'নজরদারি'
    },
    dossier: {
      title: 'রোগীর তথ্য ও টেলিমেট্রি',
      connected: 'সংযুক্ত',
      synced: 'সিঙ্ক করা',
      yrs: 'বছর',
      blood: 'রক্তের গ্রুপ',
      heartRate: 'হৃদস্পন্দন',
      oxygen: 'অক্সিজেন',
      pressure: 'রক্তচাপ',
      glucose: 'গ্লুকোজ',
      subAgentsTitle: 'সাব-এজেন্ট সমূহ',
      directivesTitle: 'ক্লিনিকাল নির্দেশিকা',
      subAgents: {
        swarm: 'সোয়ার্ম ৫-এজেন্ট কনসেনসাস',
        organTwin: 'অঙ্গ ডিজিটাল টুইন টেলিমেট্রি',
        who: 'ডাব্লুএইচও রোগ নজরদারি',
        uwin: 'ইউ-উইন টিকাদান ট্র্যাকার',
        scan: 'মোনাই ও ওয়াইওএলও এক্স-রে',
        blockchain: 'ব্লকচেইন আভা রেকর্ডস',
        rural: '2G এসএমএস গ্রামীণ ট্রায়াজ'
      },
      directives: {
        sinus: 'সাইনাস ছন্দ স্বাভাবিক',
        noConflicts: '০ ওষুধের দ্বন্দ্ব',
        idsp: 'আইডিএসপি সতর্কতা সক্রিয়',
        ipfs: 'আইপিএফএস যাচাইকৃত'
      }
    },
    placeholders: {
      copilot: 'ক্লিনিকাল প্রশ্ন জিজ্ঞাসা করুন বা টেলিমেট্রি পর্যালোচনা করুন...',
      triage: 'উপসর্গ বা বিপদের লক্ষণ বর্ণনা করুন...',
      nutrition: 'দৈনিক ম্যাক্রো এবং খাদ্য পরিকল্পনা জিজ্ঞাসা করুন...',
      orchestrator: 'রোগের প্রাদুর্ভাব বা টিকাদান কর্মসূচি খুঁজুন...'
    },
    send: 'পাঠান'
  },
  ta: {
    brandTitle: 'சினாப்ஸ் ஓஎஸ்',
    clinicalAiBadge: 'மருத்துவ AI',
    newChat: 'புதிய உரையாடல்',
    newConsultation: 'புதிய ஆலோசனை',
    consultationWith: 'நோயாளி',
    patientContext: 'நோயாளியை மாற்றவும்',
    uploadJson: 'JSON பதிவேற்றவும்',
    searchInquiries: 'தேடவும்...',
    noInquiries: 'முந்தைய வினவல்கள் இல்லை. உரையாடலில் கேட்கவும்!',
    personas: {
      copilot: { label: 'துணைவி', full: 'மருத்துவ துணைவி', desc: 'மருத்துவ பகுப்பாய்வு மற்றும் ABDM பதிவுகள்.' },
      triage: { label: 'ட்ரையஜ்', full: 'அவசர ட்ரையஜ் நிபுணர்', desc: 'அவசர சிகிச்சை மதிப்பீடு மற்றும் 2G SMS நெறிமுறை.' },
      nutrition: { label: 'ஊட்டச்சத்து', full: 'வளர்சிதை மாற்ற ஊட்டச்சத்து', desc: 'உணவு முறை மற்றும் ஊட்டச்சத்து வழிகாட்டுதல்.' },
      orchestrator: { label: 'கண்காணிப்பு', full: 'பொது சுகாதார ரேடார்', desc: 'WHO தொற்று கண்காணிப்பு மற்றும் U-WIN தடுப்பூசி.' }
    },
    inboxTabs: {
      all: 'அனைத்தும்',
      triage: 'ட்ரையஜ்',
      swarm: 'ஸ்வார்ம்',
      surveillance: 'கண்காணிப்பு'
    },
    dossier: {
      title: 'நோயாளி விபரம் & தொலைநிலை அளவீடு',
      connected: 'இணைக்கப்பட்டது',
      synced: 'ஒத்திசைக்கப்பட்டது',
      yrs: 'வயது',
      blood: 'இரத்த வகை',
      heartRate: 'இதய துடிப்பு',
      oxygen: 'ஆக்ஸிஜன்',
      pressure: 'இரத்த அழுத்தம்',
      glucose: 'குளுக்கோஸ்',
      subAgentsTitle: 'துணை முகவர்கள்',
      directivesTitle: 'மருத்துவ வழிகாட்டுதல்கள்',
      subAgents: {
        swarm: 'ஸ்வார்ம் 5-முகவர் ஒருமித்த கருத்து',
        organTwin: 'உறுப்பு டிஜிட்டல் இரட்டை தொலைநிலை',
        who: 'WHO நோய் கண்காணிப்பு',
        uwin: 'U-WIN தடுப்பூசி கண்காணிப்பாளர்',
        scan: 'MONAI & YOLOv8 எக்ஸ்-ரே ஸ்கேன்',
        blockchain: 'பிளாக்செயின் ABHA பதிவுகள்',
        rural: '2G GSM SMS ட்ரையஜ்'
      },
      directives: {
        sinus: 'சைனஸ் ரிதம் இயல்பானது',
        noConflicts: '0 மருந்து முரண்பாடுகள்',
        idsp: 'IDSP எச்சரிக்கை செயலில்',
        ipfs: 'IPFS சரிபார்க்கப்பட்டது'
      }
    },
    placeholders: {
      copilot: 'மருத்துவ கேள்விகளைக் கேட்கவும்...',
      triage: 'அறிகுறிகளை விவரிக்கவும்...',
      nutrition: 'உணவு முறைகள் குறித்து கேட்கவும்...',
      orchestrator: 'தொற்று நோய்கள் அல்லது தடுப்பூசி தகவல்களைத் தேடவும்...'
    },
    send: 'அனுப்பு'
  },
  te: {
    brandTitle: 'సినాప్స్ ఓఎస్',
    clinicalAiBadge: 'క్లినికల్ AI',
    newChat: 'కొత్త చాట్',
    newConsultation: 'కొత్త సంప్రదింపు',
    consultationWith: 'రోగి',
    patientContext: 'రోగిని మార్చండి',
    uploadJson: 'JSON అప్‌లోడ్ చేయండి',
    searchInquiries: 'శోధించండి...',
    noInquiries: 'గత విచారణలు లేవు. చాట్‌లో ప్రశ్నలు అడగండి!',
    personas: {
      copilot: { label: 'కోపైలట్', full: 'క్లినికల్ కోపైలట్', desc: 'క్లినికల్ రీజనింగ్ మరియు ABDM రికార్డులు.' },
      triage: { label: 'ట్రయాజ్', full: 'అత్యవసర ట్రయాజ్ నిపుణుడు', desc: 'అత్యవసర తీవ్రత అంచనా మరియు 2G SMS ప్రోటోకాల్.' },
      nutrition: { label: 'పోషణ', full: 'జీవక్రియ పోషణ AI', desc: 'వ్యక్తిగత పోషకాహార పంపిణీ మరియు డైట్ బ్లూప్రింట్.' },
      orchestrator: { label: 'నిఘా', full: 'ప్రజారోగ్య రాడార్', desc: 'WHO అంటువ్యాధి హెచ్చరికలు మరియు U-WIN టీకాలు.' }
    },
    inboxTabs: {
      all: 'అన్నీ',
      triage: 'ట్రయాజ్',
      swarm: 'స్వార్మ్',
      surveillance: 'నిఘా'
    },
    dossier: {
      title: 'రోగి వివరాలు & టెలిమెట్రీ',
      connected: 'కనెక్ట్ చేయబడింది',
      synced: 'సింక్ చేయబడింది',
      yrs: 'సంవత్సరాలు',
      blood: 'రక్త వర్గం',
      heartRate: 'గుండె వేగం',
      oxygen: 'ఆక్సిజన్',
      pressure: 'రక్తపోటు',
      glucose: 'గ్లూకోజ్',
      subAgentsTitle: 'సబ్-ఏజెంట్లు',
      directivesTitle: 'క్లినికల్ ఆదేశాలు',
      subAgents: {
        swarm: 'స్వార్మ్ 5-ఏజెంట్ ఏకాభిప్రాయం',
        organTwin: 'ఆర్గాన్ డిజిటల్ ట్విన్ టెలిమెట్రీ',
        who: 'WHO వ్యాధి నిఘా',
        uwin: 'U-WIN టీకా ట్రాకర్',
        scan: 'MONAI & YOLO ఎక్స్-రే స్కాన్',
        blockchain: 'బ్లాక్‌చెయిన్ ABHA రికార్డులు',
        rural: '2G GSM SMS అత్యవసర ట్రయాజ్'
      },
      directives: {
        sinus: 'సైనస్ రిథమ్ సాధారణం',
        noConflicts: '0 ఔషధ విభేదాలు',
        idsp: 'IDSP హెచ్చరిక క్రియాశీలం',
        ipfs: 'IPFS ధృవీకరించబడింది'
      }
    },
    placeholders: {
      copilot: 'క్లినికల్ ప్రశ్నలను అడగండి...',
      triage: 'లక్షణాలను వివరించండి...',
      nutrition: 'డైట్ ప్లాన్ గురించి అడగండి...',
      orchestrator: 'వ్యాధి వ్యాప్తి లేదా టీకా షెడ్యూల్ కోసం వెతకండి...'
    },
    send: 'పంపండి'
  },
  mr: {
    brandTitle: 'सिनॅप्स ओएस',
    clinicalAiBadge: 'क्लिनिकल एआय',
    newChat: 'नवीन चॅट',
    newConsultation: 'नवीन सल्लामसलत',
    consultationWith: 'रुग्ण',
    patientContext: 'रुग्ण बदला',
    uploadJson: 'JSON अपलोड करा',
    searchInquiries: 'शोधा...',
    noInquiries: 'अजून कोणताही सल्ला नाही. चॅटमध्ये विचारा!',
    personas: {
      copilot: { label: 'कोपायलट', full: 'क्लिनिकल कोपायलट', desc: 'क्लिनिकल विश्लेषण आणि एबीडीएम नोंदी.' },
      triage: { label: 'ट्रायज', full: 'आपत्कालीन ट्रायज तज्ज्ञ', desc: 'गंभीरता मूल्यांकन आणि 2G एसएमएस यंत्रणा.' },
      nutrition: { label: 'पोषण', full: 'मेटाबॉलिक पोषण एआय', desc: 'आहार नियोजन आणि पोषण मार्गदर्शन.' },
      orchestrator: { label: 'निरीक्षण', full: 'सार्वजनिक आरोग्य रडार', desc: 'साथीचे रोग सूचना आणि यु-विन लसीकरण.' }
    },
    inboxTabs: {
      all: 'सर्व',
      triage: 'ट्रायज',
      swarm: 'स्वॉर्म',
      surveillance: 'निरीक्षण'
    },
    dossier: {
      title: 'रुग्ण माहिती व टेलीमेट्री',
      connected: 'जोडले',
      synced: 'सिंक केले',
      yrs: 'वर्षे',
      blood: 'रक्तगट',
      heartRate: 'हृदयाचे ठोके',
      oxygen: 'ऑक्सिजन',
      pressure: 'रक्तदाब',
      glucose: 'ग्लुकोज',
      subAgentsTitle: 'ऑर्केस्ट्रेटर सब-एजंट',
      directivesTitle: 'क्लिनिकल मार्गदर्शक तत्त्वे',
      subAgents: {
        swarm: 'स्वॉर्म ५-एजंट सहमती',
        organTwin: 'ऑर्गन डिजिटल ट्विन टेलीमेट्री',
        who: 'WHO रोग निरीक्षण',
        uwin: 'यु-विन लसीकरण ट्रॅकर',
        scan: 'MONAI व YOLO एक्स-रे स्कॅन',
        blockchain: 'ब्लॉकचेन आभा रेकॉर्ड्स',
        rural: '2G जीएसएम एसएमएस ट्रायज'
      },
      directives: {
        sinus: 'सायनस रिदम सामान्य',
        noConflicts: '० औषध संघर्ष',
        idsp: 'IDSP अलर्ट सक्रिय',
        ipfs: 'IPFS सत्यापित'
      }
    },
    placeholders: {
      copilot: 'क्लिनिकल प्रश्न विचारा किंवा टेलीमेट्री तपासा...',
      triage: 'लक्षणे किंवा धोक्याचे संकेत सांगा...',
      nutrition: 'दैनिक आहार आणि पोषण योजना विचारा...',
      orchestrator: 'रोग प्रादुर्भाव किंवा लसीकरण वेळापत्रक शोधा...'
    },
    send: 'पाठवा'
  },
  gu: {
    brandTitle: 'સિનેપ્સ ઓએસ',
    clinicalAiBadge: 'ક્લિનિકલ AI',
    newChat: 'નવી ચેટ',
    newConsultation: 'નવી સલાહ',
    consultationWith: 'દર્દી',
    patientContext: 'દર્દી બદલો',
    uploadJson: 'JSON અપલોડ કરો',
    searchInquiries: 'શોધો...',
    noInquiries: 'હજુ કોઈ પૂછપરછ નથી. ચેટમાં પૂછો!',
    personas: {
      copilot: { label: 'કોપાયલટ', full: 'ક્લિનિકલ કોપાયલટ', desc: 'ક્લિનિકલ વિશ્લેષણ અને ABDM રેકોર્ડ્સ.' },
      triage: { label: 'ટ્રાયજ', full: 'ઇમરજન્સી ટ્રાયજ નિષ્ણાત', desc: 'ઇમરજન્સી મૂલ્યાંકન અને 2G SMS સિસ્ટમ.' },
      nutrition: { label: 'પોષણ', full: 'મેટાબોલિક પોષણ AI', desc: 'ડાયેટ પ્લાનિંગ અને પોષણ માર્ગદર્શન.' },
      orchestrator: { label: 'દેખરેખ', full: 'જાહેર આરોગ્ય રડાર', desc: 'રોગચાળાની ચેતવણીઓ અને U-WIN રસીકરણ.' }
    },
    inboxTabs: {
      all: 'બધા',
      triage: 'ટ્રાયજ',
      swarm: 'સ્વોર્મ',
      surveillance: 'દેખરેખ'
    },
    dossier: {
      title: 'દર્દી પ્રોફાઇલ અને ટેલિમેટ્રી',
      connected: 'જોડાયેલ',
      synced: 'સિંક કરેલ',
      yrs: 'વર્ષ',
      blood: 'બ્લડ ગ્રુપ',
      heartRate: 'હૃદય દર',
      oxygen: 'ઓક્સિજન',
      pressure: 'બ્લડ પ્રેશર',
      glucose: 'ગ્લુકોઝ',
      subAgentsTitle: 'સબ-એજન્ટ્સ',
      directivesTitle: 'ક્લિનિકલ નિર્દેશો',
      subAgents: {
        swarm: 'સ્વોર્મ 5-એજન્ટ સર્વસંમતિ',
        organTwin: 'ઓર્ગન ડિજિટલ ટ્વિન ટેલિમેટ્રી',
        who: 'WHO રોગ સર્વેલન્સ',
        uwin: 'U-WIN રસીકરણ ટ્રેકર',
        scan: 'MONAI અને YOLO એક્સ-રે સ્કેન',
        blockchain: 'બ્લોકચેન ABHA રેકોર્ડ્સ',
        rural: '2G GSM SMS ઇમરજન્સી ટ્રાયજ'
      },
      directives: {
        sinus: 'સાઇનસ રિધમ સામાન્ય',
        noConflicts: '0 દવા વિરોધાભાસ',
        idsp: 'IDSP ચેતવણી સક્રિય',
        ipfs: 'IPFS પ્રમાણિત'
      }
    },
    placeholders: {
      copilot: 'ક્લિનિકલ પ્રશ્નો પૂછો...',
      triage: 'લક્ષણો વર્ણવો...',
      nutrition: 'આહાર યોજના વિશે પૂછો...',
      orchestrator: 'રોગચાળા અથવા રસીકરણ માહિતી શોધો...'
    },
    send: 'મોકલો'
  },
  kn: {
    brandTitle: 'ಸಿನಾಪ್ಸ್ ಒಎಸ್',
    clinicalAiBadge: 'ಕ್ಲಿನಿಕಲ್ AI',
    newChat: 'ಹೊಸ ಚಾಟ್',
    newConsultation: 'ಹೊಸ ಸಮಾಲೋಚನೆ',
    consultationWith: 'ರೋಗಿ',
    patientContext: 'ರೋಗಿಯನ್ನು ಬದಲಿಸಿ',
    uploadJson: 'JSON ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
    searchInquiries: 'ಹುಡುಕಿ...',
    noInquiries: 'ಹಿಂದಿನ ವಿಚಾರಣೆಗಳಿಲ್ಲ. ಚಾಟ್‌ನಲ್ಲಿ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ!',
    personas: {
      copilot: { label: 'ಕೋಪೈಲಟ್', full: 'ಕ್ಲಿನಿಕಲ್ ಕೋಪೈಲಟ್', desc: 'ಕ್ಲಿನಿಕಲ್ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ABDM ದಾಖಲೆಗಳು.' },
      triage: { label: 'ಟ್ರಯಾಜ್', full: 'ತುರ್ತು ಟ್ರಯಾಜ್ ತಜ್ಞ', desc: 'ತುರ್ತು ಚಿಕಿತ್ಸಾ ಮೌಲ್ಯಮಾಪನ ಮತ್ತು 2G SMS ಪ್ರೋಟೋಕಾಲ್.' },
      nutrition: { label: 'ಪೌಷ್ಟಿಕಾಂಶ', full: 'ಮೆಟಾಬಾಲಿಕ್ ಪೌಷ್ಟಿಕಾಂಶ AI', desc: 'ಆಹಾರ ಯೋಜನೆ ಮತ್ತು ಪೌಷ್ಟಿಕಾಂಶ ಮಾರ್ಗದರ್ಶನ.' },
      orchestrator: { label: 'ಮೇಲ್ವಿಚಾರಣೆ', full: 'ಸಾರ್ವಜನಿಕ ಆರೋಗ್ಯ ರೇಡಾರ್', desc: 'ಸಾಂಕ್ರಾಮಿಕ ರೋಗ ಎಚ್ಚರಿಕೆ ಮತ್ತು U-WIN ಲಸಿಕೆ.' }
    },
    inboxTabs: {
      all: 'ಎಲ್ಲಾ',
      triage: 'ಟ್ರಯಾಜ್',
      swarm: 'ಸ್ವಾರ್ಮ್',
      surveillance: 'ಮೇಲ್ವಿಚಾರಣೆ'
    },
    dossier: {
      title: 'ರೋಗಿಯ ಮಾಹಿತಿ ಮತ್ತು ಟೆಲಿಮೆಟ್ರಿ',
      connected: 'ಸಂಪರ್ಕಗೊಂಡಿದೆ',
      synced: 'ಸಿಂಕ್ ಆಗಿದೆ',
      yrs: 'ವರ್ಷ',
      blood: 'ರಕ್ತದ ಗುಂಪು',
      heartRate: 'ಹೃದಯ ಬಡಿತ',
      oxygen: 'ಆಮ್ಲಜನಕ',
      pressure: 'ರಕ್ತದೊತ್ತಡ',
      glucose: 'ಗ್ಲೂಕೋಸ್',
      subAgentsTitle: 'ಉಪ-ಏಜೆಂಟ್‌ಗಳು',
      directivesTitle: 'ಕ್ಲಿನಿಕಲ್ ನಿರ್ದೇಶನಗಳು',
      subAgents: {
        swarm: 'ಸ್ವಾರ್ಮ್ 5-ಏಜೆಂಟ್ ಒಮ್ಮತ',
        organTwin: 'ಆರ್ಗನ್ ಡಿಜಿಟಲ್ ಟ್ವಿನ್ ಟೆಲಿಮೆಟ್ರಿ',
        who: 'WHO ರೋಗ ನಿಗಾ',
        uwin: 'U-WIN ಲಸಿಕೆ ಟ್ರ್ಯಾಕರ್',
        scan: 'MONAI & YOLO ಎಕ್ಸ್-ರೇ ಸ್ಕ್ಯಾನ್',
        blockchain: 'ಬ್ಲಾಕ್‌ಚೈನ್ ABHA ದಾಖಲೆಗಳು',
        rural: '2G GSM SMS ತುರ್ತು ಟ್ರಯಾಜ್'
      },
      directives: {
        sinus: 'ಸೈನಸ್ ರಿದಮ್ ಸಾಮಾನ್ಯ',
        noConflicts: '0 ಔಷಧ ಸಂಘರ್ಷಗಳು',
        idsp: 'IDSP ಎಚ್ಚರಿಕೆ ಸಕ್ರಿಯ',
        ipfs: 'IPFS ಪರಿಶೀಲಿಸಲಾಗಿದೆ'
      }
    },
    placeholders: {
      copilot: 'ಕ್ಲಿನಿಕಲ್ ವಿಚಾರಣೆಗಳನ್ನು ಕೇಳಿ...',
      triage: 'ರೋಗಲಕ್ಷಣಗಳನ್ನು ವಿವರಿಸಿ...',
      nutrition: 'ಆಹಾರ ಯೋಜನೆಯನ್ನು ಕೇಳಿ...',
      orchestrator: 'ರೋಗ ಹರಡುವಿಕೆ ಅಥವಾ ಲಸಿಕೆ ವೇಳಾಪಟ್ಟಿಯನ್ನು ಹುಡುಕಿ...'
    },
    send: 'ಕಳುಹಿಸಿ'
  },
  ml: {
    brandTitle: 'സിനാപ്സ് ഒഎസ്',
    clinicalAiBadge: 'ക്ലിനിക്കൽ AI',
    newChat: 'പുതിയ ചാറ്റ്',
    newConsultation: 'പുതിയ കൺസൾട്ടേഷൻ',
    consultationWith: 'രോഗി',
    patientContext: 'രോഗിയെ മാറ്റുക',
    uploadJson: 'JSON അപ്‌ലോഡ് ചെയ്യുക',
    searchInquiries: 'തിരയുക...',
    noInquiries: 'മുൻകാല അന്വേഷണങ്ങളൊന്നുമില്ല. ചാറ്റിൽ ചോദിക്കുക!',
    personas: {
      copilot: { label: 'കോപൈലറ്റ്', full: 'ക്ലിനിക്കൽ കോപൈലറ്റ്', desc: 'ക്ലിനിക്കൽ വിശകലനവും ABDM രേഖകളും.' },
      triage: { label: 'ട്രിയാജ്', full: 'അടിയന്തര ട്രിയാജ് വിദഗ്ദ്ധൻ', desc: 'തീവ്രതാ വിലയിരുത്തലും 2G SMS സംവിധാനവും.' },
      nutrition: { label: 'പോഷകാഹാരം', full: 'മെറ്റബോളിക് പോഷകാഹാരം', desc: 'ഭക്ഷണ ക്രമീകരണവും പോഷകാഹാര മാർഗ്ഗനിർദ്ദേശവും.' },
      orchestrator: { label: 'നിരീക്ഷണം', full: 'പൊതുജനാരോഗ്യ റഡാർ', desc: 'പകർച്ചവ്യാധി മുന്നറിയിപ്പുകളും U-WIN പ്രതിരോധ കുത്തിവയ്പ്പുകളും.' }
    },
    inboxTabs: {
      all: 'എല്ലാം',
      triage: 'ട്രിയാജ്',
      swarm: 'സ്വാം',
      surveillance: 'നിരീക്ഷണം'
    },
    dossier: {
      title: 'രോഗിയുടെ വിവരങ്ങളും ടെലിമെട്രിയും',
      connected: 'ബന്ധിപ്പിച്ചു',
      synced: 'സമന്വയിപ്പിച്ചു',
      yrs: 'വയസ്സ്',
      blood: 'രക്തഗ്രൂപ്പ്',
      heartRate: 'ഹൃദയമിടിപ്പ്',
      oxygen: 'ഓക്സിജൻ',
      pressure: 'രക്തസമ്മർദ്ദം',
      glucose: 'ഗ്ലൂക്കോസ്',
      subAgentsTitle: 'സബ് ഏജന്റുകൾ',
      directivesTitle: 'ക്ലിനിക്കൽ നിർദ്ദേശങ്ങൾ',
      subAgents: {
        swarm: 'സ്വാം 5-ഏജന്റ് സമവായം',
        organTwin: 'ഓർഗൻ ഡിജിറ്റൽ ട്വിൻ ടെലിമെട്രി',
        who: 'WHO രോഗ നിരീക്ഷണം',
        uwin: 'U-WIN വാക്സിനേഷൻ ട്രാക്കർ',
        scan: 'MONAI & YOLO എക്സ്-റേ സ്കാൻ',
        blockchain: 'ബ്ലോക്ക്ചെയിൻ ABHA രേഖകൾ',
        rural: '2G GSM SMS അടിയന്തര ട്രിയാജ്'
      },
      directives: {
        sinus: 'സൈനസ് താളം സാധാരണമാണ്',
        noConflicts: '0 മരുന്ന് വൈരുദ്ധ്യങ്ങൾ',
        idsp: 'IDSP മുന്നറിയിപ്പ് സജീവം',
        ipfs: 'IPFS സ്ഥിരീകരിച്ചു'
      }
    },
    placeholders: {
      copilot: 'ക്ലിനിക്കൽ ചോദ്യങ്ങൾ ചോദിക്കുക...',
      triage: 'ലക്ഷണങ്ങൾ വിശദീകരിക്കുക...',
      nutrition: 'ഡയറ്റ് പ്ലാനിനെക്കുറിച്ച് ചോദിക്കുക...',
      orchestrator: 'രോഗവ്യാപന വിവരങ്ങൾ അന്വേഷിക്കുക...'
    },
    send: 'അയക്കുക'
  },
  pa: {
    brandTitle: 'ਸਿਨੈਪਸ ਓਐਸ',
    clinicalAiBadge: 'ਕਲੀਨਿਕਲ AI',
    newChat: 'ਨਵੀਂ ਗੱਲਬਾਤ',
    newConsultation: 'ਨਵਾਂ ਸਲਾਹ-ਮਸ਼ਵਰਾ',
    consultationWith: 'ਮਰੀਜ਼',
    patientContext: 'ਮਰੀਜ਼ ਬਦਲੋ',
    uploadJson: 'JSON ਅੱਪਲੋਡ ਕਰੋ',
    searchInquiries: 'ਖੋਜ ਕਰੋ...',
    noInquiries: 'ਹਾਲੇ ਕੋਈ ਪਿਛਲਾ ਸਵਾਲ ਨਹੀਂ ਹੈ। ਚੈਟ ਵਿੱਚ ਪੁੱਛੋ!',
    personas: {
      copilot: { label: 'ਕੋਪਾਇਲਟ', full: 'ਕਲੀਨਿਕਲ ਕੋਪਾਇਲਟ', desc: 'ਕਲੀਨਿਕਲ ਵਿਸ਼ਲੇਸ਼ਣ ਅਤੇ ABDM ਰਿਕਾਰਡ।' },
      triage: { label: 'ਟ੍ਰਾਈਏਜ', full: 'ਐਮਰਜੈਂਸੀ ਟ੍ਰਾਈਏਜ ਮਾਹਰ', desc: 'ਐਮਰਜੈਂਸੀ ਮੁਲਾਂਕਣ ਅਤੇ 2G SMS ਪ੍ਰੋਟੋਕੋਲ।' },
      nutrition: { label: 'ਪੋਸ਼ਣ', full: 'ਮੈਟਾਬੋਲਿਕ ਪੋਸ਼ਣ AI', desc: 'ਖੁਰਾਕ ਯੋਜਨਾ ਅਤੇ ਪੋਸ਼ਣ ਸੰਬੰਧੀ ਸਲਾਹ।' },
      orchestrator: { label: 'ਨਿਗਰਾਨੀ', full: 'ਜਨਤਕ ਸਿਹਤ ਰਡਾਰ', desc: 'ਮਹਾਮਾਰੀ ਚੇਤਾਵਨੀਆਂ ਅਤੇ U-WIN ਟੀਕਾਕਰਨ।' }
    },
    inboxTabs: {
      all: 'ਸਾਰੇ',
      triage: 'ਟ੍ਰਾਈਏਜ',
      swarm: 'ਸਵਾਰਮ',
      surveillance: 'ਨਿਗਰਾਨੀ'
    },
    dossier: {
      title: 'ਮਰੀਜ਼ ਪ੍ਰੋਫਾਈਲ ਅਤੇ ਟੈਲੀਮੈਟਰੀ',
      connected: 'ਜੁੜਿਆ ਹੋਇਆ',
      synced: 'ਸਿੰਕ ਕੀਤਾ',
      yrs: 'ਸਾਲ',
      blood: 'ਖੂਨ ਦਾ ਗਰੁੱਪ',
      heartRate: 'ਦਿਲ ਦੀ ਧੜਕਣ',
      oxygen: 'ਆਕਸੀਜਨ',
      pressure: 'ਬਲੱਡ ਪ੍ਰੈਸ਼ਰ',
      glucose: 'ਗਲੂਕੋਜ਼',
      subAgentsTitle: 'ਸਬ-ਏਜੰਟ',
      directivesTitle: 'ਕਲੀਨਿਕਲ ਨਿਰਦੇਸ਼',
      subAgents: {
        swarm: 'ਸਵਾਰਮ 5-ਏਜੰਟ ਸਹਿਮਤੀ',
        organTwin: 'ਅੰਗ ਡਿਜੀਟਲ ਟਵਿਨ ਟੈਲੀਮੈਟਰੀ',
        who: 'WHO ਬਿਮਾਰੀ ਨਿਗਰਾਨੀ',
        uwin: 'U-WIN ਟੀਕਾਕਰਨ ਟਰੈਕਰ',
        scan: 'MONAI & YOLO ਐਕਸ-ਰੇ ਸਕੈਨ',
        blockchain: 'ਬਲਾਕਚੈਨ ABHA ਰਿਕਾਰਡ',
        rural: '2G GSM SMS ਐਮਰਜੈਂਸੀ ਟ੍ਰਾਈਏਜ'
      },
      directives: {
        sinus: 'ਸਾਈਨਸ ਰਿਦਮ ਆਮ',
        noConflicts: '0 ਦਵਾਈ ਟਕਰਾਅ',
        idsp: 'IDSP ਚੇਤਾਵਨੀ ਸਰਗਰਮ',
        ipfs: 'IPFS ਪ੍ਰਮਾਣਿਤ'
      }
    },
    placeholders: {
      copilot: 'ਕਲੀਨਿਕਲ ਸਵਾਲ ਪੁੱਛੋ ਜਾਂ ਟੈਲੀਮੈਟਰੀ ਦੇਖੋ...',
      triage: 'ਲੱਛਣ ਜਾਂ ਖ਼ਤਰੇ ਦੇ ਨਿਸ਼ਾਨ ਦੱਸੋ...',
      nutrition: 'ਰੋਜ਼ਾਨਾ ਖੁਰਾਕ ਯੋਜਨਾ ਬਾਰੇ ਪੁੱਛੋ...',
      orchestrator: 'ਬਿਮਾਰੀ ਦੇ ਪ੍ਰਕੋਪ ਜਾਂ ਟੀਕਾਕਰਨ ਦੀ ਜਾਣਕਾਰੀ ਲੱਭੋ...'
    },
    send: 'ਭੇਜੋ'
  },
  or: {
    brandTitle: 'ସିନାପ୍ସ ଓଏସ',
    clinicalAiBadge: 'କ୍ଲିନିକାଲ AI',
    newChat: 'ନୂତନ ଚାଟ୍',
    newConsultation: 'ନୂତନ ପରାମର୍ଶ',
    consultationWith: 'ରୋଗୀ',
    patientContext: 'ରୋଗୀ ବଦଳାନ୍ତୁ',
    uploadJson: 'JSON ଅପଲୋଡ୍ କରନ୍ତୁ',
    searchInquiries: 'ସନ୍ଧାନ କରନ୍ତୁ...',
    noInquiries: 'ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି ପରାମର୍ଶ ନାହିଁ। ଚାଟ୍‌ରେ ପଚାରନ୍ତୁ!',
    personas: {
      copilot: { label: 'କୋପାଇଲଟ୍', full: 'କ୍ଲିନିକାଲ କୋପାଇଲଟ୍', desc: 'କ୍ଲିନିକାଲ ବିଶ୍ଳେଷଣ ଏବଂ ABDM ରେକର୍ଡ।' },
      triage: { label: 'ଟ୍ରାଇଏଜ୍', full: 'ଜରୁରୀକାଳୀନ ଟ୍ରାଇଏଜ୍ ବିଶେଷଜ୍ଞ', desc: 'ଜରୁରୀକାଳୀନ ମୂଲ୍ୟାଙ୍କନ ଏବଂ 2G SMS ବ୍ୟବସ୍ଥା।' },
      nutrition: { label: 'ପୋଷଣ', full: 'ମେଟାବୋଲିକ୍ ପୋଷଣ AI', desc: 'ଖାଦ୍ୟ ଯୋଜନା ଏବଂ ପୋଷଣ ମାର୍ଗଦର୍ଶନ।' },
      orchestrator: { label: 'ନିରୀକ୍ଷଣ', full: 'ଜନସ୍ୱାସ୍ଥ୍ୟ ରାଡାର୍', desc: 'ମହାମାରୀ ସତର୍କତା ଏବଂ U-WIN ଟିକାକରଣ।' }
    },
    inboxTabs: {
      all: 'ସମସ୍ତ',
      triage: 'ଟ୍ରାଇଏଜ୍',
      swarm: 'ସ୍ୱାର୍ମ',
      surveillance: 'ନିରୀକ୍ଷଣ'
    },
    dossier: {
      title: 'ରୋଗୀ ବିବରଣୀ ଏବଂ ଟେଲିମେଟ୍ରି',
      connected: 'ସଂଯୁକ୍ତ',
      synced: 'ସିଙ୍କ ହୋଇଛି',
      yrs: 'ବର୍ଷ',
      blood: 'ରକ୍ତ ଗ୍ରୁପ୍',
      heartRate: 'ହୃଦସ୍ପନ୍ଦନ',
      oxygen: 'ଅମ୍ଳଜାନ',
      pressure: 'ରକ୍ତଚାପ',
      glucose: 'ଗ୍ଲୁକୋଜ୍',
      subAgentsTitle: 'ସବ୍-ଏଜେଣ୍ଟ',
      directivesTitle: 'କ୍ଲିନିକାଲ ନିର୍ଦ୍ଦେଶାବଳୀ',
      subAgents: {
        swarm: 'ସ୍ୱାର୍ମ 5-ଏଜେଣ୍ଟ ସର୍ବସମ୍ମତି',
        organTwin: 'ଅଙ୍ଗ ଡିଜିଟାଲ ଟ୍ୱିନ୍ ଟେଲିମେଟ୍ରି',
        who: 'WHO ରୋଗ ନିରୀକ୍ଷଣ',
        uwin: 'U-WIN ଟିକାଦାନ ଟ୍ରାକର୍',
        scan: 'MONAI & YOLO ଏକ୍ସ-ରେ ସ୍କାନ୍',
        blockchain: 'ବ୍ଲକଚେନ୍ ABHA ରେକର୍ଡ',
        rural: '2G GSM SMS ଜରୁରୀକାଳୀନ ଟ୍ରାଇଏଜ୍'
      },
      directives: {
        sinus: 'ସାଇନସ୍ ରିଦମ୍ ସ୍ୱାଭାବିକ',
        noConflicts: '0 ଔଷଧ ଦ୍ୱନ୍ଦ୍ୱ',
        idsp: 'IDSP ସତର୍କତା ସକ୍ରିୟ',
        ipfs: 'IPFS ଯାଞ୍ଚ ହୋଇଛି'
      }
    },
    placeholders: {
      copilot: 'କ୍ଲିନିକାଲ ପ୍ରଶ୍ନ ପଚାରନ୍ତୁ...',
      triage: 'ଲକ୍ଷଣ ବର୍ଣ୍ଣନା କରନ୍ତୁ...',
      nutrition: 'ଦୈନନ୍ଦିନ ଖାଦ୍ୟ ଯୋଜନା ପଚାରନ୍ତୁ...',
      orchestrator: 'ରୋଗ ପ୍ରକୋପ କିମ୍ବା ଟିକାକରଣ ତଥ୍ୟ ଖୋଜନ୍ତୁ...'
    },
    send: 'ପଠାନ୍ତୁ'
  }
};

export function getTranslation(lang: SupportedLanguage = 'en'): AssistantDictionary {
  const base = ASSISTANT_TRANSLATIONS.en;
  const target = ASSISTANT_TRANSLATIONS[lang] || base;
  return {
    ...base,
    ...target,
    personas: { ...base.personas, ...target.personas },
    inboxTabs: { ...base.inboxTabs, ...target.inboxTabs },
    dossier: {
      ...base.dossier,
      ...target.dossier,
      subAgents: { ...base.dossier.subAgents, ...(target.dossier?.subAgents || {}) },
      directives: { ...base.dossier.directives, ...(target.dossier?.directives || {}) }
    },
    placeholders: { ...base.placeholders, ...target.placeholders }
  };
}

export function getLocalizedDefaultSessions(patient: MockHealthProfile, lang: SupportedLanguage = 'en'): ChatSession[] {
  const pName = patient?.patient?.name || 'Mausam Kar';
  const pAbha = patient?.patient?.abhaId || '91-7294-8102-5309';
  const hr = patient?.vitals?.currentHeartRate || 74;
  const spo2 = patient?.vitals?.spo2 || 98.5;
  const bp = patient?.vitals?.bloodPressure || '118/76';
  const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // 1. HINDI (hi)
  if (lang === 'hi') {
    return [
      {
        id: 'session-scan-imaging',
        title: 'मोनाई और वाईओएलओ एक्स-रे एआई',
        createdAt: 'आज, ' + nowTime,
        persona: 'copilot',
        messages: [
          {
            id: 'msg-scan-user',
            sender: 'user',
            text: `${pName} के लिए मोनाई चेस्ट एक्स-रे और वाईओएलओवी8 अस्थि फ्रैक्चर स्क्रीनिंग चलाएं। फेफड़ों और हड्डियों की जांच करें।`,
            timestamp: nowTime,
            channel: 'web'
          },
          {
            id: 'msg-scan-ai',
            sender: 'assistant',
            text: `### एम्स नैदानिक रेडियोग्राफी और इमेजिंग विश्लेषण\n\n**मरीज़:** ${pName} | **आभा आईडी:** ${pAbha} | **मोडालिटी:** चेस्ट पीए और कंकाल रेडियोग्राफी\n\n| नैदानिक मोडालिटी | परीक्षण क्षेत्र | एआई स्क्रीनिंग मॉडल | सटीकता |\n| :--- | :--- | :--- | :--- |\n| **चेस्ट पीए रेडियोग्राफ** | फेफड़े और फुफ्फुसीय क्षेत्र | MONAI DenseNet-121 | **98.8%** |\n| **आर्थोपेडिक सर्वे** | पसलियां, हंसली और स्कैपुला | YOLOv8-Trauma Screen | **99.2%** |\n| **अटेंशन हीटमैप** | मीडियास्टिनल रूपरेखा | Grad-CAM स्थानीयकरण | **सममित (सामान्य)** |\n\n• **रेडियोलॉजिकल निष्कर्ष**: दोनों फेफड़ों के क्षेत्र स्पष्ट हैं, कोई सक्रिय संक्रमण या फुफ्फुस प्रवाह नहीं है।\n• **कंकाल का आकलन**: पसलियों, हंसली और स्कैपुला का परीक्षण किया गया। **कोई फ्रैक्चर या हड्डी विकार नहीं मिला**।\n• **नैदानिक प्रभाव**: **सामान्य अध्ययन (98.8% विश्वास स्कोर)**।`,
            timestamp: nowTime,
            channel: 'web',
            visualType: 'scan',
            visualData: {
              modality: 'चेस्ट पीए और कंकाल एक्स-रे',
              finding: 'सामान्य परीक्षण। कोई तीव्र कार्डियोपल्मोनरी पैथोलॉजी या फ्रैक्चर नहीं मिला।',
              confidence: '98.8%',
              gradcam: 'द्विपक्षीय समरूपता सत्यापित'
            },
            followUps: ['Grad-CAM ओवरले देखें', 'डिजिटल पर्चा डाउनलोड करें', 'पिछली इमेजिंग की तुलना करें']
          }
        ]
      },
      {
        id: 'session-swarm-consensus',
        title: 'स्वार्म इंटेलिजेंस सर्वसम्मति',
        createdAt: 'आज, ' + nowTime,
        persona: 'copilot',
        messages: [
          {
            id: 'msg-swarm-user',
            sender: 'user',
            text: `${pName} (${pAbha}) के लिए ट्राइएज, दवा अंतःक्रिया, मानसिक स्वास्थ्य और बायोमेट्रिक्स को कवर करते हुए 5-एजेंट स्वार्म सर्वसम्मति निष्पादित करें।`,
            timestamp: nowTime,
            channel: 'web'
          },
          {
            id: 'msg-swarm-ai',
            sender: 'assistant',
            text: `### स्वार्म मल्टी-एजेंट क्लिनिकल सर्वसम्मति रिपोर्ट\n\n**लक्षित मरीज़:** ${pName} (${pAbha})\n\n| एजेंट नोड | क्लिनिकल दायरा | मूल्यांकन स्थिति | गंभीरता स्तर |\n| :--- | :--- | :--- | :--- |\n| **डॉ. संजीवनी (ट्राइएज)** | हेमोडायनामिक टेलीमेट्री (${hr} BPM, SpO2 ${spo2}%) | जोखिम स्कोर: **18/100** | सामान्य |\n| **फार्माकोजेनोमिक्स** | CYP450 एंजाइम जांच | **0 प्रतिकूल अंतःक्रिया** | सुरक्षित |\n| **मानसिक स्वास्थ्य नोड** | एचआरवी सिम्पैथेटिक लोड | एचआरवी **65ms** बेसलाइन | सामान्य |\n| **सत्यापन नोड** | ब्लॉकचेन ईसीडीएसए हस्ताक्षर | **98.4% सहमति** | सत्यापित |\n| **बायोमेट्रिक सिंक नोड** | स्मार्ट वियरेबल टेलीमेट्री | रीयल-टाइम सिंक सक्रिय | लिंक किया गया |\n\n• **सर्वसम्मति सारांश**: मल्टी-एजेंट सत्यापन पूर्ण हुआ। ${pName} के लिए कोई प्रतिकूल दवा संघर्ष या तत्काल खतरे का संकेत नहीं पाया गया।\n• **सिफारिशें**: निर्धारित दवाओं को जारी रखें और नियमित बायोमेट्रिक जांच का पालन करें।`,
            timestamp: nowTime,
            channel: 'web',
            visualType: 'swarm',
            visualData: {
              confidence: '98.4%',
              agents: [
                { name: 'ट्राइएज एजेंट', status: 'स्थिर (0 खतरे के संकेत)' },
                { name: 'दवा अंतःक्रिया', status: 'पास (0 चेतावनियां)' },
                { name: 'मानसिक स्वास्थ्य', status: 'HRV 65ms सामान्य' },
                { name: 'सत्यापन एजेंट', status: 'हस्ताक्षरित और सत्यापित' }
              ]
            },
            followUps: ['CYP450 एंजाइम ऑडिट करें', '7-दिवसीय HRV ट्रेंड देखें', 'सर्वसम्मति JSON निर्यात करें']
          }
        ]
      },
      {
        id: 'session-who-outbreak',
        title: 'डब्ल्यूएचओ रोग निगरानी और प्रकोप',
        createdAt: 'आज, ' + nowTime,
        persona: 'orchestrator',
        messages: [
          {
            id: 'msg-who-user',
            sender: 'user',
            text: 'दिल्ली एनसीआर के लिए डब्ल्यूएचओ और आईडीएसपी क्षेत्रीय रोग निगरानी रिपोर्ट प्राप्त करें। सक्रिय मामले: 1,420, आईसीयू लोड: 68%।',
            timestamp: nowTime,
            channel: 'web'
          },
          {
            id: 'msg-who-ai',
            sender: 'assistant',
            text: `### एकीकृत रोग निगरानी कार्यक्रम (आईडीएसपी) एवं डब्ल्यूएचओ बुलेटिन\n\n**निगरानी केंद्र:** राष्ट्रीय महामारी संचालन केंद्र\n\n| निगरानी हब | मुख्य रोगाणु | सक्रिय मामले | आईसीयू अधिभोग | अलर्ट स्थिति |\n| :--- | :--- | :--- | :--- | :--- |\n| **दिल्ली एनसीआर हब** | डेंगू सेरोटाइप-2 (DENV-2) | 1,420 सक्रिय | 68% अधिभोग | **उच्च प्रकोप** |\n| **केरल सेंटिनल नोड** | निपाह कॉन्टैक्ट ट्रेसिंग | 0 नए / 72 घंटे | 18% अधिभोग | **नियंत्रित** |\n| **उत्तरी क्षेत्रीय हब** | चिकनगुनिया सूचकांक | 480 सक्रिय | 42% अधिभोग | **मध्यम** |\n\n• **क्लिनिकल निर्देश**: तेज बुखार के सभी मामलों के लिए रैपिड NS1 एंटीजन परीक्षण अनिवार्य करें।\n• **जनस्वास्थ्य सलाह**: हॉटस्पॉट क्षेत्रों में फॉगिंग और समुदाय में ओआरएस वितरण सक्रिय करें।`,
            timestamp: nowTime,
            channel: 'web',
            visualType: 'outbreak',
            visualData: {
              riskLevel: 'उच्च प्रकोप चेतावनी',
              district: 'दिल्ली एनसीआर और उत्तरी क्षेत्रीय हब',
              pathogen: 'डेंगू वायरस (DENV-2 सेरोटाइप)',
              advisory: 'आपातकालीन वेक्टर रोकथाम सक्रिय। अस्पताल ट्राइएज वार्ड सतर्क।'
            },
            followUps: ['जीआईएस आउटब্রেক मैप देखें', 'डब्ल्यूएचओ ट्राइएज प्रोटोकॉल पढ़ें', 'आईसीयू बेड उपलब्धता जांचें']
          }
        ]
      },
      {
        id: 'session-vaccination-schedule',
        title: 'यू-विन टीकाकरण समय सारिणी',
        createdAt: 'आज, ' + nowTime,
        persona: 'orchestrator',
        messages: [
          {
            id: 'msg-vax-user',
            sender: 'user',
            text: `${pName} (${pAbha}) के लिए सार्वभौमिक टीकाकरण कार्यक्रम (U-WIN / UIP) रिकॉर्ड और टीकाकरण समय सारिणी की जांच करें।`,
            timestamp: nowTime,
            channel: 'web'
          },
          {
            id: 'msg-vax-ai',
            sender: 'assistant',
            text: `### राष्ट्रीय सार्वभौमिक टीकाकरण कार्यक्रम (U-WIN) स्थिति\n\n**मरीज़:** ${pName} | **आभा आईडी:** ${pAbha}\n\n| टीका / खुराक | स्थिति | डिजिटल प्रमाण पत्र | अगली देय तिथि |\n| :--- | :--- | :--- | :--- |\n| **कोविड-19 बूस्टर (Corbevax)** | **पूर्ण** | QR-सत्यापित | पूर्ण |\n| **हेपेटाइटिस बी वयस्क श्रृंखला** | **पूर्ण** | QR-सत्यापित | पूर्ण |\n| **टिटनेस और डिप्थीरिया (Td)** | **पूर्ण** | QR-सत्यापित | 2028 में देय |\n| **इन्फ्लुएंजा मौसमी टीका** | **अनुशंसित** | देय | चालू माह |\n\n• **डिजिटल स्वास्थ्य लॉकर**: सभी टीके एबीडीएम स्वास्थ्य लॉकर में ब्लॉकचेन सत्यापन के साथ सुरक्षित हैं।`,
            timestamp: nowTime,
            channel: 'web',
            followUps: ['U-WIN QR कार्ड डाउनलोड करें', 'इन्फ्लुएंजा स्लॉट बुक करें', 'टीकाकरण इतिहास निर्यात करें']
          }
        ]
      },
      {
        id: 'session-sms-rural-triage',
        title: '2G जीएसएम ग्रामीण एसएमएस ट्राइएज',
        createdAt: 'आज, ' + nowTime,
        persona: 'triage',
        messages: [
          {
            id: 'msg-sms-user',
            sender: 'user',
            text: 'ग्रामीण प्राथमिक स्वास्थ्य केंद्रों के लिए हिंदी और अंग्रेजी में 160-वर्ण का जीरो-बैंडविड्थ एसएमएस अलर्ट तैयार करें।',
            timestamp: nowTime,
            channel: 'web'
          },
          {
            id: 'msg-sms-ai',
            sender: 'assistant',
            text: `### 2G जीएसएम जीरो-बैंडविड्थ आपातकालीन एसएमएस प्रेषण\n\n**प्रसारण चैनल:** सेल ब्रॉडकास्ट जीएसएम नेटवर्क (ग्रामीण टेलीफोनी)\n\n\`\`\`text\nसंजीवनी अलर्ट: बुखार और डिहाइड्रेशन से बचें। तुरंत नजदीकी PHC से मुफ्त ओआरएस (ORS) और दवा लें। उबला पानी पिएं। आपातकालीन 108 डायल करें।\n\`\`\`\n\n• **विशेषता**: 100% इंटरनेट रहित वातावरण में सीधे साधारण कीपैड फोन पर कार्य करता है।`,
            timestamp: nowTime,
            channel: 'web',
            visualType: 'rural_sms',
            visualData: {
              charCount: 154,
              recipient: 'क्षेत्रीय आशा कार्यकर्ता एवं प्राथमिक स्वास्थ्य केंद्र',
              advisoryEnglish: 'SANJEEVNI ALERT: Avoid fever & dehydration. Visit nearest PHC for free ORS & treatment. Drink boiled water.',
              advisoryHindi: 'संजीवनी अलर्ट: बुखार और डिहाइड्रेशन से बचें। तुरंत नजदीकी प्राथमिक स्वास्थ्य केंद्र से मुफ्त ओआरएस और दवा लें।'
            },
            followUps: ['सेल ब्रॉडकास्ट टेस्ट करें', 'स्थानीय आशा कार्यकर्ता को अलर्ट भेजें', 'एसएमएस प्रेषण लॉग देखें']
          }
        ]
      }
    ];
  }

  // 2. BENGALI (bn)
  if (lang === 'bn') {
    return [
      {
        id: 'session-scan-imaging',
        title: 'মোনাই এবং ওয়াইওএলও এক্স-রে এআই',
        createdAt: 'আজ, ' + nowTime,
        persona: 'copilot',
        messages: [
          {
            id: 'msg-scan-user',
            sender: 'user',
            text: `${pName}-এর জন্য মোনাই চেস্ট এক্স-রে এবং ওয়াইওএলও ফ্র্যাকচার স্ক্রিনিং চালান। ফুসফুস এবং হাড় পরীক্ষা করুন।`,
            timestamp: nowTime,
            channel: 'web'
          },
          {
            id: 'msg-scan-ai',
            sender: 'assistant',
            text: `### এইমস ক্লিনিকাল রেডিওলজি ও ইমেজিং বিশ্লেষণ\n\n**রোগী:** ${pName} | **আভা আইডি:** ${pAbha} | **মোডালিটি:** চেস্ট পিএ এবং কঙ্কাল রেডিওগ্রাফি\n\n| ক্লিনিকাল মোডালিটি | পরীক্ষার এলাকা | এআই স্ক্রিনিং মডেল | নির্ভুলতা |\n| :--- | :--- | :--- | :--- |\n| **চেস্ট পিএ এক্স-রে** | ফুসফুস ও কার্ডিওপালমোনারি | MONAI DenseNet-121 | **৯৮.৮%** |\n| **অর্থোপেডিক সার্ভে** | পাঁজর ও কলারবোন | YOLOv8-Trauma Screen | **৯৯.২%** |\n| **অ্যাটেনশন হিটম্যাপ** | মিডিয়াস্টিনাল কনট্যুর | Grad-CAM লোকলাইজেশন | **স্বাভাবিক** |\n\n• **রেডিওলজিক্যাল ফলাফল**: উভয় ফুসফুস সম্পূর্ণ পরিষ্কার, কোনো সক্রিয় সংক্রমণ বা তরল জমে নেই।\n• **কঙ্কাল মূল্যায়ন**: কোনো হাড়ের ফ্র্যাকচার বা আঘাতের চিহ্ন পাওয়া যায়নি।\n• **ক্লিনিকাল প্রভাব**: **সম্পূর্ণ স্বাভাবিক ফলাফল (৯৮.৮% কনফিডেন্স)**।`,
            timestamp: nowTime,
            channel: 'web',
            visualType: 'scan',
            visualData: {
              modality: 'চেস্ট পিএ এবং কঙ্কাল এক্স-রে',
              finding: 'স্বাভাবিক পরীক্ষা। কোনো তীব্র প্যাথলজি বা ফ্র্যাকচার নেই।',
              confidence: '৯৮.৮%',
              gradcam: 'দ্বিপাক্ষিক প্রতিসাম্য যাচাইকৃত'
            },
            followUps: ['Grad-CAM ওভারলে দেখুন', 'ডিজিটাল প্রেসক্রিপশন ডাউনলোড করুন', 'পূর্ববর্তী স্ক্যান তুলনা করুন']
          }
        ]
      },
      {
        id: 'session-swarm-consensus',
        title: 'সোয়ার্ম ৫-এজেন্ট কনসেনসাস',
        createdAt: 'আজ, ' + nowTime,
        persona: 'copilot',
        messages: [
          {
            id: 'msg-swarm-user',
            sender: 'user',
            text: `${pName} (${pAbha})-এর জন্য ট্রায়াজ, ওষুধের পার্শ্বপ্রতিক্রিয়া এবং বায়োমেট্রিক্স সহ ৫-এজেন্ট সোয়ার্ম কনসেনসাস সম্পন্ন করুন।`,
            timestamp: nowTime,
            channel: 'web'
          },
          {
            id: 'msg-swarm-ai',
            sender: 'assistant',
            text: `### সোয়ার্ম মাল্টি-এজেন্ট ক্লিনিকাল কনসেনসাস রিপোর্ট\n\n**রোগী:** ${pName} (${pAbha})\n\n| এজেন্ট নোড | পরীক্ষার ক্ষেত্র | মূল্যায়ন স্থিতি | ঝুঁকি মাত্রা |\n| :--- | :--- | :--- | :--- |\n| **ডাঃ সঞ্জীবনী (ট্রায়াজ)** | হেমোডাইনামিক (${hr} BPM, SpO2 ${spo2}%) | ঝুঁকি স্কোর: **১৮/১০০** | স্বাভাবিক |\n| **ফার্মাকোজেনোমিক্স** | ওষুধ প্রতিক্রিয়া পরীক্ষা | **০ ওষুধের দ্বন্দ্ব** | নিরাপদ |\n| **মানসিক স্বাস্থ্য নোড** | এইচআরভি স্ট্রেস লোড | এইচআরভি **৬৫ms** | স্বাভাবিক |\n| **ব্লকচেইন ভেরিফায়ার** | ক্রিপ্টোগ্রাফিক স্বাক্ষর | **৯৮.৪% সম্মতি** | যাচাইকৃত |\n\n• **সারসংক্ষেপ**: মাল্টি-এজেন্ট যাচাইকরণ সফল হয়েছে। রোগীর কোনো স্বাস্থ্যঝুঁকি নেই।`,
            timestamp: nowTime,
            channel: 'web',
            visualType: 'swarm',
            visualData: {
              confidence: '৯৮.৪%',
              agents: [
                { name: 'ট্রায়াজ এজেন্ট', status: 'স্থিতিশীল (ঝুঁকিমুক্ত)' },
                { name: 'ওষুধ নোড', status: 'নিরাপদ (০ দ্বন্দ্ব)' },
                { name: 'মানসিক স্বাস্থ্য', status: 'HRV 65ms স্বাভাবিক' },
                { name: 'যাচাই নোড', status: 'স্বাক্ষরিত ও যাচাইকৃত' }
              ]
            },
            followUps: ['৭ দিনের HRV ট্রেন্ড দেখুন', 'কনসেনসাস রিপোর্ট ডাউনলোড করুন']
          }
        ]
      }
    ];
  }

  // 3. TAMIL (ta)
  if (lang === 'ta') {
    return [
      {
        id: 'session-scan-imaging',
        title: 'MONAI & YOLO எக்ஸ்-ரே AI',
        createdAt: 'இன்று, ' + nowTime,
        persona: 'copilot',
        messages: [
          {
            id: 'msg-scan-user',
            sender: 'user',
            text: `${pName} க்கான மார்பு எக்ஸ்-ரே மற்றும் எலும்பு முறிவு பரிசோதனையை இயக்கவும்.`,
            timestamp: nowTime,
            channel: 'web'
          },
          {
            id: 'msg-scan-ai',
            sender: 'assistant',
            text: `### எய்ம்ஸ் மருத்துவ கதிரியக்கவியல் & இமேஜிங் ஆய்வு\n\n**நோயாளி:** ${pName} | **ABHA ID:** ${pAbha}\n\n• **கதிரியக்க முடிவு**: நுரையீரல் முற்றிலும் தெளிவாக உள்ளது, எந்த தொற்று பாதிப்பும் இல்லை.\n• **எலும்பு பரிசோதனை**: எலும்பு முறிவுகள் எதுவும் இல்லை.\n• **முடிவு**: **இயல்பான மருத்துவ நிலை (98.8% துல்லியம்)**.`,
            timestamp: nowTime,
            channel: 'web',
            visualType: 'scan',
            visualData: {
              modality: 'மார்பு மற்றும் எலும்பு எக்ஸ்-ரே',
              finding: 'இயல்பான ஆய்வு. எந்த கடுமையான நோயும் இல்லை.',
              confidence: '98.8%',
              gradcam: 'சரிபார்க்கப்பட்டது'
            },
            followUps: ['மருத்துவ அறிக்கையைப் பதிவிறக்கவும்', 'முந்தைய ஸ்கேன்களுடன் ஒப்பிடவும்']
          }
        ]
      },
      {
        id: 'session-swarm-consensus',
        title: 'ஸ்வார்ம் 5-முகவர் ஒருமித்த கருத்து',
        createdAt: 'இன்று, ' + nowTime,
        persona: 'copilot',
        messages: [
          {
            id: 'msg-swarm-user',
            sender: 'user',
            text: `${pName} க்கான ஸ்வார்ம் பல முகவர் மருத்துவ மதிப்பீட்டை இயக்கவும்.`,
            timestamp: nowTime,
            channel: 'web'
          },
          {
            id: 'msg-swarm-ai',
            sender: 'assistant',
            text: `### ஸ்வார்ம் பல-முகவர் மருத்துவ அறிக்கை\n\n**நோயாளி:** ${pName} | இதய துடிப்பு: ${hr} BPM | ஆக்ஸிஜன்: ${spo2}%\n\n• **மருந்து பாதுகாப்பு**: 0 மருந்து முரண்பாடுகள்.\n• **ஒருமித்த முடிவு**: அனைத்து முகவர்களும் நோயாளி பாதுகாப்பாக உள்ளார் என்பதை உறுதிப்படுத்தினர்.`,
            timestamp: nowTime,
            channel: 'web',
            visualType: 'swarm',
            visualData: {
              confidence: '98.4%',
              agents: [
                { name: 'ட்ரையஜ் முகவர்', status: 'நிலையானது' },
                { name: 'மருந்து பாதுகாப்பு', status: 'முரண்பாடுகள் இல்லை' },
                { name: 'சரிபார்ப்பு', status: 'சரிபார்க்கப்பட்டது' }
              ]
            },
            followUps: ['அறிக்கையை பதிவிறக்கவும்', 'HRV விவரங்களை பார்க்கவும்']
          }
        ]
      }
    ];
  }

  // 4. TELUGU (te)
  if (lang === 'te') {
    return [
      {
        id: 'session-scan-imaging',
        title: 'MONAI & YOLO ఎక్స్-రే AI',
        createdAt: 'ఈరోజు, ' + nowTime,
        persona: 'copilot',
        messages: [
          {
            id: 'msg-scan-user',
            sender: 'user',
            text: `${pName} కొరకు ఛాతీ ఎక్స్-రే మరియు ఎముక ఫ్రాక్చర్ స్క్రీనింగ్ నిర్వహించండి.`,
            timestamp: nowTime,
            channel: 'web'
          },
          {
            id: 'msg-scan-ai',
            sender: 'assistant',
            text: `### క్లినికల్ రేడియాలజీ మరియు ఇమేజింగ్ విశ్లేషణ\n\n**రోగి:** ${pName} | **ABHA ID:** ${pAbha}\n\n• **రేడియాలజీ ఫలితం**: ఊపిరితిత్తులు పూర్తిగా స్పష్టంగా ఉన్నాయి, ఎలాంటి ఇన్ఫెక్షన్ లేదు.\n• **ఎముకల పరిశీలన**: ఎలాంటి ఎముక విరుపులు లేదా ఫ్రాక్చర్లు లేవు.\n• **ఫలితం**: **సాధారణ ఆరోగ్య స్థితి (98.8% ఖచ్చితత్వం)**.`,
            timestamp: nowTime,
            channel: 'web',
            visualType: 'scan',
            visualData: {
              modality: 'ఛాతీ మరియు ఎముకల ఎక్స్-రే',
              finding: 'సాధారణ స్క్రీనింగ్. ఎలాంటి ఇన్ఫెక్షన్ లేదా ఫ్రాక్చర్ లేదు.',
              confidence: '98.8%',
              gradcam: 'ధృవీకరించబడింది'
            },
            followUps: ['రిపోర్ట్ డౌన్‌లోడ్ చేయండి', 'మునుపటి స్కాన్‌లను సరిపోల్చండి']
          }
        ]
      },
      {
        id: 'session-swarm-consensus',
        title: 'స్వార్మ్ 5-ఏజెంట్ ఏకాభిప్రాయం',
        createdAt: 'ఈరోజు, ' + nowTime,
        persona: 'copilot',
        messages: [
          {
            id: 'msg-swarm-user',
            sender: 'user',
            text: `${pName} కొరకు 5-ఏజెంట్ స్వార్మ్ క్లినికల్ ఏకాభిప్రాయాన్ని రూపొందించండి.`,
            timestamp: nowTime,
            channel: 'web'
          },
          {
            id: 'msg-swarm-ai',
            sender: 'assistant',
            text: `### స్వార్మ్ మల్టీ-ఏజెంట్ క్లినికల్ రిపోర్ట్\n\n**రోగి:** ${pName} | గుండె వేగం: ${hr} BPM | ఆక్సిజన్: ${spo2}%\n\n• **ఔషధ భద్రత**: 0 ఔషధ విభేదాలు.\n• **ఏకాభిప్రాయం**: రోగి పూర్తిగా స్థిరంగా మరియు ఆరోగ్యంగా ఉన్నారని ఏజెంట్లు ధృవీకరించారు.`,
            timestamp: nowTime,
            channel: 'web',
            visualType: 'swarm',
            visualData: {
              confidence: '98.4%',
              agents: [
                { name: 'ట్రయాజ్ ఏజెంట్', status: 'స్థిరంగా ఉంది' },
                { name: 'ఔషధ భద్రత', status: 'సురక్షితం' }
              ]
            },
            followUps: ['పూర్తి వివరాలు చూడండి']
          }
        ]
      }
    ];
  }

  // 5. MARATHI (mr)
  if (lang === 'mr') {
    return [
      {
        id: 'session-scan-imaging',
        title: 'MONAI आणि YOLO एक्स-रे एआय',
        createdAt: 'आज, ' + nowTime,
        persona: 'copilot',
        messages: [
          {
            id: 'msg-scan-user',
            sender: 'user',
            text: `${pName} साठी चेस्ट एक्स-रे आणि फ्रॅक्चर तपासणी करा.`,
            timestamp: nowTime,
            channel: 'web'
          },
          {
            id: 'msg-scan-ai',
            sender: 'assistant',
            text: `### एम्स क्लिनिकल रेडिओलॉजी आणि इमेजिंग विश्लेषण\n\n**रुग्ण:** ${pName} | **आभा आयडी:** ${pAbha}\n\n• **रेडिओलॉजी निष्कर्ष**: दोन्ही फुफ्फुसे पूर्णपणे स्वच्छ आहेत, कोणताही संसर्ग नाही.\n• **हाडांची तपासणी**: कोणतीही हाडे मोडलेली नाहीत.\n• **निष्कर्ष**: **सामान्य अहवाल (९८.८% अचूकता)**.`,
            timestamp: nowTime,
            channel: 'web',
            visualType: 'scan',
            visualData: {
              modality: 'चेस्ट एक्स-रे आणि हाडांचे स्कॅन',
              finding: 'सामान्य तपासणी. कोणताही आजार किंवा फ्रॅक्चर नाही.',
              confidence: '९८.८%',
              gradcam: 'सत्यापित'
            },
            followUps: ['अहवाल डाउनलोड करा', 'मागील तपासणीशी तुलना करा']
          }
        ]
      }
    ];
  }

  // 6. GUJARATI (gu)
  if (lang === 'gu') {
    return [
      {
        id: 'session-scan-imaging',
        title: 'MONAI અને YOLO એક્સ-રે AI',
        createdAt: 'આજે, ' + nowTime,
        persona: 'copilot',
        messages: [
          {
            id: 'msg-scan-user',
            sender: 'user',
            text: `${pName} માટે ચેસ્ટ એક્સ-રે અને ફ્રેક્ચર સ્ક્રીનીંગ ચલાવો.`,
            timestamp: nowTime,
            channel: 'web'
          },
          {
            id: 'msg-scan-ai',
            sender: 'assistant',
            text: `### ક્લિનિકલ રેડિયોલોજી અને ઇમેજિંગ વિશ્લેષણ\n\n**દર્દી:** ${pName} | **ABHA ID:** ${pAbha}\n\n• **રેડિયોલોજી તારણ**: ફેફસાં સંપૂર્ણ સ્વચ્છ છે, કોઈ ઈન્ફેક્શન નથી.\n• **હાડકાંની તપાસ**: કોઈ ફ્રેક્ચર મળ્યું નથી.\n• **પરિણામ**: **સામાન્ય તંદુરસ્ત સ્થિતિ (98.8% સચોટતા)**.`,
            timestamp: nowTime,
            channel: 'web',
            visualType: 'scan',
            visualData: {
              modality: 'ચેસ્ટ અને અસ્થિ એક્સ-રે',
              finding: 'સામાન્ય પરિણામ. કોઈ પેથોલોજી નથી.',
              confidence: '98.8%',
              gradcam: 'પ્રમાણિત'
            },
            followUps: ['રિપોર્ટ ડાઉનલોડ કરો']
          }
        ]
      }
    ];
  }

  // 7. KANNADA (kn)
  if (lang === 'kn') {
    return [
      {
        id: 'session-scan-imaging',
        title: 'MONAI ಮತ್ತು YOLO ಎಕ್ಸ್-ರೇ AI',
        createdAt: 'ಇಂದು, ' + nowTime,
        persona: 'copilot',
        messages: [
          {
            id: 'msg-scan-user',
            sender: 'user',
            text: `${pName} ರವರ ಎದೆ ಎಕ್ಸ್-ರೇ ಮತ್ತು ಮೂಳೆ ಮುರಿತ ಪರೀಕ್ಷೆ ನಡೆಸಿ.`,
            timestamp: nowTime,
            channel: 'web'
          },
          {
            id: 'msg-scan-ai',
            sender: 'assistant',
            text: `### ಕ್ಲಿನಿಕಲ್ ರೇಡಿಯಾಲಜಿ ಮತ್ತು ಇಮೇಜಿಂಗ್ ವಿಶ್ಲೇಷಣೆ\n\n**ರೋಗಿ:** ${pName} | **ABHA ID:** ${pAbha}\n\n• **ರೇಡಿಯಾಲಜಿ ವರದಿ**: ಶ್ವಾಸಕೋಶಗಳು ಸಂಪೂರ್ಣ ಸ್ವಚ್ಛವಾಗಿವೆ, ಯಾವುದೇ ಸೋಂಕು ಇಲ್ಲ.\n• **ಮೂಳೆಗಳ ಮೌಲ್ಯಮಾಪನ**: ಯಾವುದೇ ಮೂಳೆ ಮುರಿತಗಳು ಕಂಡುಬಂದಿಲ್ಲ.\n• **ಫಲಿತಾಂಶ**: **ಸಾಮಾನ್ಯ ಆರೋಗ್ಯ ಸ್ಥಿತಿ (98.8% ನಿಖರತೆ)**.`,
            timestamp: nowTime,
            channel: 'web',
            visualType: 'scan',
            visualData: {
              modality: 'ಎದೆ ಮತ್ತು ಮೂಳೆಗಳ ಎಕ್ಸ್-ರೇ',
              finding: 'ಸಾಮಾನ್ಯ ಪರೀಕ್ಷೆ. ಯಾವುದೇ ಸಮಸ್ಯೆಗಳಿಲ್ಲ.',
              confidence: '98.8%',
              gradcam: 'ಪರಿಶೀಲಿಸಲಾಗಿದೆ'
            },
            followUps: ['ವರದಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ']
          }
        ]
      }
    ];
  }

  // 8. MALAYALAM (ml)
  if (lang === 'ml') {
    return [
      {
        id: 'session-scan-imaging',
        title: 'MONAI & YOLO എക്സ്-റേ AI',
        createdAt: 'ഇന്ന്, ' + nowTime,
        persona: 'copilot',
        messages: [
          {
            id: 'msg-scan-user',
            sender: 'user',
            text: `${pName} നായുള്ള ചെസ്റ്റ് എക്സ്-റേയും അസ്ഥി ഒടിവ് പരിശോധനയും നടത്തുക.`,
            timestamp: nowTime,
            channel: 'web'
          },
          {
            id: 'msg-scan-ai',
            sender: 'assistant',
            text: `### ക്ലിനിക്കൽ റേഡിയോളജി പരിശോധന\n\n**രോഗി:** ${pName} | **ABHA ID:** ${pAbha}\n\n• **റേഡിയോളജി ഫലം**: ശ്വാസകോശം പൂർണ്ണമായും വ്യക്തമാണ്, അണുബാധയില്ല.\n• **അസ്ഥി പരിശോധന**: ഒടിവുകളൊന്നുമില്ല.\n• **ഫലം**: **സാധാരണ നില (98.8% കൃത്യത)**.`,
            timestamp: nowTime,
            channel: 'web',
            visualType: 'scan',
            visualData: {
              modality: 'ചെസ്റ്റ് & അസ്ഥി എക്സ്-റേ',
              finding: 'സാധാരണ പരിശോധനാ ഫലം.',
              confidence: '98.8%',
              gradcam: 'സ്ഥിരീകരിച്ചു'
            },
            followUps: ['റിപ്പോർട്ട് ഡൗൺലോഡ് ചെയ്യുക']
          }
        ]
      }
    ];
  }

  // 9. PUNJABI (pa)
  if (lang === 'pa') {
    return [
      {
        id: 'session-scan-imaging',
        title: 'MONAI ਅਤੇ YOLO ਐਕਸ-ਰੇ AI',
        createdAt: 'ਅੱਜ, ' + nowTime,
        persona: 'copilot',
        messages: [
          {
            id: 'msg-scan-user',
            sender: 'user',
            text: `${pName} ਲਈ ਛਾਤੀ ਦਾ ਐਕਸ-ਰੇ ਅਤੇ ਹੱਡੀ ਫਰੈਕਚਰ ਸਕ੍ਰੀਨਿੰਗ ਚਲਾਓ।`,
            timestamp: nowTime,
            channel: 'web'
          },
          {
            id: 'msg-scan-ai',
            sender: 'assistant',
            text: `### ਕਲੀਨਿਕਲ ਰੇਡੀਓਲੋਜੀ ਵਿਸ਼ਲੇਸ਼ਣ\n\n**ਮਰੀਜ਼:** ${pName} | **ABHA ID:** ${pAbha}\n\n• **ਰੇਡੀਓਲੋਜੀ ਨਤੀਜਾ**: ਫੇਫੜੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸਾਫ਼ ਹਨ, ਕੋਈ ਇਨਫੈਕਸ਼ਨ ਨਹੀਂ।\n• **ਹੱਡੀਆਂ ਦੀ ਜਾਂਚ**: ਕੋਈ ਫਰੈਕਚਰ ਨਹੀਂ ਮਿਲਿਆ।\n• **ਨਤੀਜਾ**: **ਆਮ ਸਿਹਤਮੰਦ ਸਥਿਤੀ (98.8% ਸ਼ੁੱਧਤਾ)**।`,
            timestamp: nowTime,
            channel: 'web',
            visualType: 'scan',
            visualData: {
              modality: 'ਛਾਤੀ ਅਤੇ ਹੱਡੀਆਂ ਦਾ ਐਕਸ-ਰੇ',
              finding: 'ਆਮ ਜਾਂਚ ਨਤੀਜਾ।',
              confidence: '98.8%',
              gradcam: 'ਪ੍ਰਮਾਣਿਤ'
            },
            followUps: ['ਰਿਪੋਰਟ ਡਾਊਨਲੋਡ ਕਰੋ']
          }
        ]
      }
    ];
  }

  // 10. ODIA (or)
  if (lang === 'or') {
    return [
      {
        id: 'session-scan-imaging',
        title: 'MONAI ଏବଂ YOLO ଏକ୍ସ-ରେ AI',
        createdAt: 'ଆଜି, ' + nowTime,
        persona: 'copilot',
        messages: [
          {
            id: 'msg-scan-user',
            sender: 'user',
            text: `${pName} ପାଇଁ ଛାତି ଏକ୍ସ-ରେ ଏବଂ ହାଡ଼ ଭାଙ୍ଗିବା ଯାଞ୍ଚ କରନ୍ତୁ।`,
            timestamp: nowTime,
            channel: 'web'
          },
          {
            id: 'msg-scan-ai',
            sender: 'assistant',
            text: `### କ୍ଲିନିକାଲ ରେଡିଓଲୋଜି ବିଶ୍ଳେଷଣ\n\n**ରୋଗୀ:** ${pName} | **ABHA ID:** ${pAbha}\n\n• **ଫଳାଫଳ**: ଫୁସଫୁସ ସମ୍ପୂର୍ଣ୍ଣ ସଫା ଅଛି, କୌଣସି ସଂକ୍ରମଣ ନାହିଁ।\n• **ହାଡ଼ ପରୀକ୍ଷା**: କୌଣସି ହାଡ଼ ଭାଙ୍ଗି ନାହିଁ।\n• **ନିଷ୍କର୍ଷ**: **ସ୍ୱାଭାବିକ ସୁସ୍ଥ ଅବସ୍ଥା (98.8% ସଠିକତା)**।`,
            timestamp: nowTime,
            channel: 'web',
            visualType: 'scan',
            visualData: {
              modality: 'ଛାତି ଏବଂ ଅସ୍ଥି ଏକ୍ସ-ରେ',
              finding: 'ସ୍ୱାଭାବିକ ଫଳାଫଳ।',
              confidence: '98.8%',
              gradcam: 'ଯାଞ୍ଚ ହୋଇଛି'
            },
            followUps: ['ରିପୋର୍ଟ ଡାଉନଲୋଡ୍ କରନ୍ତୁ']
          }
        ]
      }
    ];
  }

  // 11. DEFAULT ENGLISH (en)
  return [
    {
      id: 'session-scan-imaging',
      title: 'MONAI & YOLOv8 Scan AI',
      createdAt: 'Today, ' + nowTime,
      persona: 'copilot',
      messages: [
        {
          id: 'msg-scan-user',
          sender: 'user',
          text: `Run MONAI Chest X-Ray and YOLOv8 trauma fracture screening for ${pName}. Check for pulmonary infiltrates and skeletal fractures.`,
          timestamp: nowTime,
          channel: 'web'
        },
        {
          id: 'msg-scan-ai',
          sender: 'assistant',
          text: `### AIIMS Clinical Radiography & Imaging Analysis\n\n**Target Patient:** ${pName} | **ABHA ID:** ${pAbha} | **Modality:** Chest PA & Skeletal Radiography\n\n| Diagnostic Modality | Target Region | AI Screening Engine | Accuracy / Confidence |\n| :--- | :--- | :--- | :--- |\n| **Chest PA Radiograph** | Bilateral Pulmonary Fields | MONAI DenseNet-121 | **98.8% Confidence** |\n| **Orthopedic Survey** | Costal Arc, Clavicle, Scapula | YOLOv8-Trauma Screen | **99.2% Accuracy** |\n| **Attention Heatmap** | Mediastinal & Cardiac Contour | Grad-CAM Localization | **Symmetric (Normal)** |\n\n• **Radiological Findings**: Clear lung fields bilaterally with no active focal consolidation, pleural effusion, or pneumothorax.\n• **Skeletal Assessment**: Costal margins, bilateral clavicles, and scapular girdles intact. **No acute traumatic fracture detected**.\n• **Clinical Impression**: **Normal Radiographic Study (98.8% confidence)**. No urgent cardiopulmonary pathology identified.`,
          timestamp: nowTime,
          channel: 'web',
          visualType: 'scan',
          visualData: {
            modality: 'Chest PA & Skeletal Radiograph',
            finding: 'Normal study. No acute cardiopulmonary pathology or traumatic fracture.',
            confidence: '98.8%',
            gradcam: 'Bilateral Symmetry Verified'
          },
          followUps: ['Inspect Grad-CAM Overlay', 'Download Signed Prescription', 'Compare with Prior Imaging']
        }
      ]
    },
    {
      id: 'session-swarm-consensus',
      title: 'Swarm Multi-Agent Consensus',
      createdAt: 'Today, ' + nowTime,
      persona: 'copilot',
      messages: [
        {
          id: 'msg-swarm-user',
          sender: 'user',
          text: `Execute Swarm Intelligence 5-agent consensus for patient ${pName} (${pAbha}) covering Clinical Triage, Pharmacogenomics, Mental Health, and Biometrics.`,
          timestamp: nowTime,
          channel: 'web'
        },
        {
          id: 'msg-swarm-ai',
          sender: 'assistant',
          text: `### Swarm Intelligence Multi-Agent Clinical Consensus Report\n\n**Target Patient:** ${pName} (${pAbha})\n\n| Agent Node | Clinical Scope | Evaluation Status | Acuity / Severity |\n| :--- | :--- | :--- | :--- |\n| **Dr. Sanjeevni (Triage)** | Hemodynamic Telemetry (${hr} BPM, SpO2 ${spo2}%) | Risk Index: **18/100** | Normal / Stable |\n| **Pharmacogenomics** | CYP450 Enzyme Interaction Audit | **0 Adverse Interactions** | Clear / Safe |\n| **Mental Health Node** | HRV Sympathetic Stress Load | HRV **65ms** Baseline | Normal |\n| **Verifier Node** | Blockchain ECDSA Audit Trail | **98.4% Consensus** | Cryptographically Signed |\n| **Biometric Sync Node** | Smart Wearable Telemetry | Real-Time Bridge Active | Linked |\n\n• **Consensus Summary**: Multi-agent verification concluded. No acute drug interactions, contraindications, or emergency red-flags detected for ${pName}.\n• **Directives**: Maintain standard outpatient monitoring schedule and wearable telemetry.`,
          timestamp: nowTime,
          channel: 'web',
          visualType: 'swarm',
          visualData: {
            confidence: '98.4%',
            agents: [
              { name: 'Triage Agent', status: 'Stable (0 red flags)' },
              { name: 'Pharmacogenomics', status: 'Clear (0 interactions)' },
              { name: 'Mental Health Node', status: 'HRV 65ms Normal' },
              { name: 'Verifier Node', status: 'Signed & Anchored' }
            ]
          },
          followUps: ['Audit CYP450 Pathway', 'Review 7-Day HRV Trend', 'Export Consensus JSON']
        }
      ]
    },
    {
      id: 'session-who-outbreak',
      title: 'WHO Disease Sentinel & Outbreak',
      createdAt: 'Today, ' + nowTime,
      persona: 'orchestrator',
      messages: [
        {
          id: 'msg-who-user',
          sender: 'user',
          text: 'Fetch WHO & IDSP regional disease surveillance report for Delhi NCR. Active cases: 1,420, ICU load: 68%, vector index: High Alert.',
          timestamp: nowTime,
          channel: 'web'
        },
        {
          id: 'msg-who-ai',
          sender: 'assistant',
          text: `### Integrated Disease Surveillance Programme (IDSP) & WHO Sentinel Bulletin\n\n**Surveillance Operations**: National Epidemic Operations Center\n\n| Surveillance Node | Primary Pathogen | Active Regional Cases | ICU Capacity | Alert Level |\n| :--- | :--- | :--- | :--- | :--- |\n| **Delhi NCR Hub** | Dengue Serotype-2 (DENV-2) | 1,420 active | 68% Bed Load | **Outbreak Alert** |\n| **Kerala Sentinel Node** | Nipah Contact Tracing Matrix | 0 new / 72h | 18% Bed Load | **Controlled** |\n| **Northern Regional Node** | Chikungunya Incidence Index | 480 active | 42% Bed Load | **Moderate** |\n\n• **Clinical Directives**: Mandate rapid NS1 antigen and IgM ELISA triage for acute febrile illness presentation.\n• **Public Health Action**: Activate district mosquito source reduction and community oral rehydration solution (ORS) distribution in high-density wards.`,
          timestamp: nowTime,
          channel: 'web',
          visualType: 'outbreak',
          visualData: {
            riskLevel: 'High Outbreak Alert',
            district: 'Delhi NCR & Northern Regional Hub',
            pathogen: 'Dengue Virus (DENV-2 Serotype)',
            advisory: 'Emergency vector containment active. Hospital triage wards alerted.'
          },
          followUps: ['View GIS Outbreak Map', 'Review WHO Triage Guidelines', 'Audit ICU Bed Availability']
        }
      ]
    },
    {
      id: 'session-vaccination-schedule',
      title: 'U-WIN Vaccination Tracker',
      createdAt: 'Today, ' + nowTime,
      persona: 'orchestrator',
      messages: [
        {
          id: 'msg-vax-user',
          sender: 'user',
          text: `Query Universal Immunization Programme (U-WIN / UIP) records and childhood/adult vaccination schedule for ${pName} (${pAbha}).`,
          timestamp: nowTime,
          channel: 'web'
        },
        {
          id: 'msg-vax-ai',
          sender: 'assistant',
          text: `### National Universal Immunization Programme (U-WIN) Registry\n\n**Target Patient:** ${pName} | **ABHA ID:** ${pAbha}\n\n| Vaccine / Dose | Administration Status | Digital Verification | Next Due Milestone |\n| :--- | :--- | :--- | :--- |\n| **COVID-19 Booster (Corbevax)** | **Administered** | QR-Verified | Complete |\n| **Hepatitis B Adult Series** | **Administered** | QR-Verified | Complete |\n| **Tetanus & Adult Diphtheria (Td)** | **Administered** | QR-Verified | Due 2028 |\n| **Influenza Seasonal Quadrivalent** | **Recommended** | Due | Current Month |\n\n• **Digital Health Locker**: All vaccination records are cryptographically anchored to ABHA health locker.`,
          timestamp: nowTime,
          channel: 'web',
          followUps: ['Download U-WIN QR Card', 'Book Influenza Slot', 'Export Immunization History']
        }
      ]
    },
    {
      id: 'session-sms-rural-triage',
      title: '2G GSM SMS Rural Triage',
      createdAt: 'Today, ' + nowTime,
      persona: 'triage',
      messages: [
        {
          id: 'msg-sms-user',
          sender: 'user',
          text: 'Generate a 160-character plain-text zero-bandwidth 2G GSM SMS triage and emergency fever alert in Hindi and English for rural community dispatch.',
          timestamp: nowTime,
          channel: 'web'
        },
        {
          id: 'msg-sms-ai',
          sender: 'assistant',
          text: `### 2G GSM Zero-Bandwidth Emergency SMS Dispatch\n\n**Broadcast Channel:** Cell Broadcast GSM Network (Zero-Bandwidth Rural Telephony)\n\n\`\`\`text\nSANJEEVNI ALERT: Avoid fever & dehydration. Visit nearest PHC for free ORS & treatment. Drink boiled water. Dial 108 for emergency ambulance.\n\`\`\`\n\n• **Rural Telephony Specification**: Designed to transmit without internet across basic feature phones.`,
          timestamp: nowTime,
          channel: 'web',
          visualType: 'rural_sms',
          visualData: {
            charCount: 154,
            recipient: 'Regional ASHA Workers & Rural Primary Health Centres (PHC)',
            advisoryEnglish: 'SANJEEVNI ALERT: Avoid fever & dehydration. Visit nearest PHC for free ORS & treatment. Drink boiled water.',
            advisoryHindi: 'संजीवनी अलर्ट: बुखार और डिहाइड्रेशन से बचें। तुरंत नजदीकी प्राथमिक स्वास्थ्य केंद्र (PHC) से मुफ्त ओआरएस (ORS) और दवा लें। उबला पानी पिएं।'
          },
          followUps: ['Simulate Cell Broadcast Dispatch', 'Generate Regional Dialect SMS', 'Alert Local ASHA Worker']
        }
      ]
    }
  ];
}
