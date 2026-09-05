/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  SITE DATA — Single source of truth for all customer content ║
 * ║                                                              ║
 * ║  To create a new invitation:                                 ║
 * ║  1. Duplicate this file                                      ║
 * ║  2. Replace text, images, and links below                    ║
 * ║  3. For color/theme changes → edit index.css @theme block    ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

export const siteData = {
  /* ─── Meta ─── */
  meta: {
    title: 'Pandey Ganapati Invitation',
    description: 'पांडे परिवाराकडून गणपती आगमनाचे निमंत्रण',
    lang: 'mr',
  },

  /* ─── Audio ─── */
  audio: {
    src: '/assets/bgMusic.mp3',
    volume: 0.35,
  },

  /* ─── Shared Decorative Assets ─── */
  assets: {
    logo: '/assets/logo-opt.webp',
    divider1: '/assets/divider-1-opt.webp',
    divider2: '/assets/divider-2-opt.webp',
    flower: '/assets/flower-opt.webp',
    paperTexture: '/assets/paper-texture.webp',
    topLayer: '/assets/top-layer-opt.webp',
  },

  /* ─── Opener (Curtain + Seal) ─── */
  opener: {
    sealTitle: 'गणपती नमः',
    sealSubtitle: 'Tap To Open',
  },

  /* ─── Hero Section ─── */
  hero: {
    sacredText: '॥ श्री गणेशाय नमः ॥',
    familyName: 'पांडे परिवाराकडून',
    heroTextImage: '',
    heroTextAlt: 'बाप्पांचे आगमन',
    shlok: 'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।<br/>निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा',
    messageLines: ['आमच्या घरी गणरायांचे', 'आगमन होत आहे...'],
    welcomeLine: 'आपले सहर्ष स्वागत !',
    murtiImage: '/assets/murti-opt.webp',
    murtiAlt: 'श्री गणेश मूर्ती',
    date: {
      title: 'आगमन',
      day: '१३',
      monthYear: 'सप्टेंबर २०२६',
      timeLabel: 'सायंकाळी',
      timeValue: '८:०० वा.',
      city: 'विरार,',
      state: 'महाराष्ट्र',
    },
  },

  /* ─── Family Section (निमंत्रक) ─── */
  family: {
    label: 'INVITING FAMILY',
    title: 'निमंत्रक',
    plaqueName: 'पांडे परिवार',
    subtitle:
      'गणरायाच्या आगमनाच्या या मंगल क्षणी आपण सर्वांनी उपस्थित राहून उत्सवाची शोभा वाढवावी.',
    members: [
      { name: 'श्री. सिद्धार्थ पांडे', image: '' },
    ],
    closingMessage:
      'गणरायाच्या आगमन सोहळ्यास आपली\nउपस्थिती आम्हांस आनंददायी ठरेल.',
  },

  /* ─── Timeline Section (आयोजन) ─── */
  timeline: {
    label: 'UTSAV SOHALA',
    title: 'आयोजन',
    subtitle:
      'भक्ती, प्रेम आणि आनंदाने भरलेला\nगणरायाच्या आगमनाचा मंगल सोहळा',
    events: [
      { title: 'गणेश स्थापना', date: '१४ सप्टेंबर', time: 'सकाळी १०:०० वा.', icon: 'sthapana-opt.webp' },
      { title: 'भजन', date: '१६ सप्टेंबर', time: 'दुपारी ४:०० वा.', icon: 'snehbhet-opt.webp' },
      { title: 'सत्यनारायण कथा', date: '१७ सप्टेंबर', time: 'सायं ५:०० वा.', icon: 'atharvshish-opt.webp' },
      { title: 'आरती', date: 'दररोज', time: 'दुपारी १२ व रात्री ८ वा.', icon: 'aarti-opt.webp' },
      { title: 'विसर्जन', date: '१८ सप्टेंबर', time: 'रात्री ८:०० वा.', icon: 'visarjan-opt.webp' },
    ],
    closingMessage:
      'गणरायाच्या आगमनाने आमचे घर आनंद, भक्ती आणि मंगलमय वातावरणाने उजळून निघाले आहे. या पवित्र उत्सवात आपल्या प्रेमळ उपस्थितीने सोहळ्याची शोभा वाढवावी हीच नम्र विनंती.',
    closingSignature: 'गणपती बाप्पा मोरया!',
  },

  /* ─── Location Section (ठिकाण) ─── */
  location: {
    label: 'LOCATION',
    title: 'ठिकाण',
    subtitle: 'गणरायाच्या आगमन सोहळ्यास\nआपले सहर्ष स्वागत आहे',
    placeName: 'पांडे निवास',
    address:
      'फ्लॅट नं. १००१, १०वा मजला,\nबिल्डिंग नं. ७-सी, म्हाडा, यशवंत नगर,\nन्यू सातारा ऑफिस समोर, विरार (पश्चिम) - ४०१३०३',
    mapsLink: 'https://maps.app.goo.gl/WFBG1zWGPqYZnzNM8',
    mapsButtonText: 'Open Maps',
    mapEmbed:
      'https://maps.google.com/maps?q=Mhada%20Virar%20West%20Yashwanth%20Nagar%20401303&t=&z=14&ie=UTF8&iwloc=&output=embed',
    note: 'आपल्या सहकुटुंब उपस्थितीने\nउत्सवाची शोभा वाढेल',
  },

  /* ─── Gallery Section (क्षणचित्रे) ─── */
  gallery: {
    label: 'MEMORIES',
    title: 'क्षणचित्रे',
    subtitle:
      'बाप्पाच्या आगमनाची आणि\nमागील वर्षीच्या उत्सवाची काही खास क्षणचित्रे',
    featuredImage: '',
    images: [
      '',
      '',
      '',
      '',
    ],
    message:
      'प्रत्येक क्षण बाप्पाच्या आशीर्वादाने\nअधिक सुंदर आणि मंगलमय होतो.',
  },

  /* ─── Blessings (शुभेच्छा) ─── */
  blessings: {
    label: 'BLESSINGS',
    title: 'शुभेच्छा',
    tapMessage: '✦ स्पर्श करा व नवीन आशीर्वाद वाचा ✦',
    list: [
      'गणरायाच्या कृपेने सर्वांच्या जीवनात सुख, समृद्धी व आनंद नांदो.',
      'गणपती बाप्पा आपल्या जीवनात सुख, समृद्धी आणि आनंद घेऊन येवो.',
      'बाप्पाचे आशीर्वाद आपल्या परिवारावर सदैव राहो.',
      'मंगलमूर्ती मोरया! आपल्या सर्व इच्छा पूर्ण होवोत.',
      'गणराय आपल्या घरात आनंद आणि शांतता घेऊन येवो.',
    ],
  },

  /* ─── Footer ─── */
  footer: {
    blessing:
      'आपली उपस्थिती हेच\nआमच्यासाठी बाप्पांचे खरे\n आशीर्वाद आहेत.',
    familySignature: '— पांडे परिवार',
    credit: '',
  },
};
