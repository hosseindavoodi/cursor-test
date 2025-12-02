export type AirportMapResult = {
  airportNameFa: string;
  airportNameEn: string;
  city: {
    cityNameFa: string;
    cityNameEn: string;
    cityCode: string;
  };
  country: CountryMapResult;
};

type CountryMapResult = {
  countryNameFa: string;
  countryNameEn: string;
  countryCode: string;
};

export const airportsMap: { [key: string]: AirportMapResult } = {
  THR: {
    airportNameEn: "Mehrabad",
    airportNameFa: "فرودگاه مهرآباد",
    city: {
      cityCode: "THR",
      cityNameEn: "Tehran",
      cityNameFa: "تهران",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  IKA: {
    airportNameEn: "Imam Khomeini",
    airportNameFa: "فرودگاه بین المللی امام خمینی",
    city: {
      cityCode: "THR",
      cityNameEn: "Tehran",
      cityNameFa: "تهران",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  KHA: {
    airportNameEn: "Khaneh",
    airportNameFa: "فرودگاه پیرانشهر(خانه)",
    city: {
      cityCode: "KHA",
      cityNameEn: "Khaneh",
      cityNameFa: "خانه",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  KKS: {
    airportNameEn: "Kashan Airport",
    airportNameFa: "فرودگاه کاشان",
    city: {
      cityCode: "KKS",
      cityNameEn: "Kashan",
      cityNameFa: "کاشان",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  ACZ: {
    airportNameEn: "Zabol A/P",
    airportNameFa: "فرودگاه زابل",
    city: {
      cityCode: "ACZ",
      cityNameEn: "Zabol",
      cityNameFa: "زابل",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  IFN: {
    airportNameEn: "Isfahan Intl.",
    airportNameFa: "فرودگاه اصفهان",
    city: {
      cityCode: "IFN",
      cityNameEn: "Isfahan",
      cityNameFa: "اصفهان",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  LRR: {
    airportNameEn: "Lar airport",
    airportNameFa: "فرودگاه لار",
    city: {
      cityCode: "LRR",
      cityNameEn: "Lar",
      cityNameFa: "لار",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  MHD: {
    airportNameEn: "Mashhad",
    airportNameFa: "فرودگاه مشهد",
    city: {
      cityCode: "MHD",
      cityNameEn: "Mashhad",
      cityNameFa: "مشهد",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  OMH: {
    airportNameEn: "Urmieh",
    airportNameFa: "فرودگاه ارومیه",
    city: {
      cityCode: "OMH",
      cityNameEn: "Urmieh",
      cityNameFa: "ارومیه",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  PGU: {
    airportNameEn: "Persian Gulf Intl.",
    airportNameFa: "فرودگاه خلیج فارس",
    city: {
      cityCode: "PGU",
      cityNameEn: "Assaluyeh",
      cityNameFa: "عسلویه",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  SYZ: {
    airportNameEn: "Shiraz",
    airportNameFa: "فرودگاه شهید دستغیب",
    city: {
      cityCode: "SYZ",
      cityNameEn: "Shiraz",
      cityNameFa: "شیراز",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  TBZ: {
    airportNameEn: "Tabriz",
    airportNameFa: "فرودگاه تبریز",
    city: {
      cityCode: "TBZ",
      cityNameEn: "Tabriz",
      cityNameFa: "تبریز",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  AWZ: {
    airportNameEn: "Ahwaz",
    airportNameFa: "فرودگاه اهواز",
    city: {
      cityCode: "AWZ",
      cityNameEn: "Ahwaz",
      cityNameFa: "اهواز",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  BND: {
    airportNameEn: "Bandar Abbas",
    airportNameFa: "فرودگاه بندر عباس",
    city: {
      cityCode: "BND",
      cityNameEn: "Bandar Abbas",
      cityNameFa: "بندرعباس",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  KIH: {
    airportNameEn: "Kish Island",
    airportNameFa: "فرودگاه کیش",
    city: {
      cityCode: "KIH",
      cityNameEn: "Kish",
      cityNameFa: "کیش",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  SRY: {
    airportNameEn: "Dashte Naz",
    airportNameFa: "فرودگاه ساری",
    city: {
      cityCode: "SRY",
      cityNameEn: "Sari",
      cityNameFa: "ساری",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  ADU: {
    airportNameEn: "Ardebil",
    airportNameFa: "فرودگاه اردبـیل",
    city: {
      cityCode: "ADU",
      cityNameEn: "Ardabil",
      cityNameFa: "اردبیل",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  AEU: {
    airportNameEn: "Abu Musa",
    airportNameFa: "فرودگاه ابوموسی",
    city: {
      cityCode: "AEU",
      cityNameEn: "Abu Musa",
      cityNameFa: "ابو موسی‌",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  AJK: {
    airportNameEn: "Araak",
    airportNameFa: "فرودگاه اراک",
    city: {
      cityCode: "AJK",
      cityNameEn: "Araak",
      cityNameFa: "اراک",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  AKW: {
    airportNameEn: "Aghajari",
    airportNameFa: "فرودگاه آقاجاری",
    city: {
      cityCode: "AKW",
      cityNameEn: "Aghajari",
      cityNameFa: "آغاجری",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  AZD: {
    airportNameEn: "Yazd",
    airportNameFa: "فرودگاه یزد",
    city: {
      cityCode: "AZD",
      cityNameEn: "Yazd",
      cityNameFa: "یزد",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  BBL: {
    airportNameEn: "Babolsar",
    airportNameFa: "فرودگاه بابلسر",
    city: {
      cityCode: "BBL",
      cityNameEn: "Babolsar",
      cityNameFa: "بابلسر",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  BDH: {
    airportNameEn: "Bandar Lengeh",
    airportNameFa: "فرودگاه بندر لنگه",
    city: {
      cityCode: "BDH",
      cityNameEn: "Bandar Lengeh",
      cityNameFa: "بندر لنگه",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  BJB: {
    airportNameEn: "Bojnord",
    airportNameFa: "فرودگاه بجنورد",
    city: {
      cityCode: "BJB",
      cityNameEn: "Bojnord",
      cityNameFa: "بجنورد",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  BSM: {
    airportNameEn: "Bishe-Kola",
    airportNameFa: "فرودگاه بیشه کلا",
    city: {
      cityCode: "BSM",
      cityNameEn: "Bishe-Kola",
      cityNameFa: "بیشه-کلا",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  BUZ: {
    airportNameEn: "Bushehr",
    airportNameFa: "فرودگاه بوشهر",
    city: {
      cityCode: "BUZ",
      cityNameEn: "Bushehr",
      cityNameFa: "بوشهر",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  BXR: {
    airportNameEn: "Bam",
    airportNameFa: "فرودگاه بم",
    city: {
      cityCode: "BXR",
      cityNameEn: "Bam",
      cityNameFa: "بم",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  CKT: {
    airportNameEn: "Sarakhs",
    airportNameFa: "فرودگاه سرخس",
    city: {
      cityCode: "CKT",
      cityNameEn: "Sarakhs",
      cityNameFa: "سرخس",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  CQD: {
    airportNameEn: "Shahre-kord",
    airportNameFa: "فرودگاه شهرکرد",
    city: {
      cityCode: "CQD",
      cityNameEn: "Shahre Kord",
      cityNameFa: "شهرکرد",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  FAZ: {
    airportNameEn: "Fasa",
    airportNameFa: "فرودگاه فسا",
    city: {
      cityCode: "FAZ",
      cityNameEn: "Fasa",
      cityNameFa: "فسا",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  GBT: {
    airportNameEn: "Gorgan",
    airportNameFa: "فرودگاه گرگان",
    city: {
      cityCode: "GBT",
      cityNameEn: "Gorgan",
      cityNameFa: "گرگان",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  GSM: {
    airportNameEn: "Qeshm",
    airportNameFa: "فرودگاه قشم",
    city: {
      cityCode: "GSM",
      cityNameEn: "Qeshm",
      cityNameFa: "قشم",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  HDM: {
    airportNameEn: "Hamadan",
    airportNameFa: "فرودگاه همدان",
    city: {
      cityCode: "HDM",
      cityNameEn: "Hamadan",
      cityNameFa: "همدان",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  HDR: {
    airportNameEn: "Havadarya",
    airportNameFa: "فرودگاه هوادریا",
    city: {
      cityCode: "HDR",
      cityNameEn: "Havadarya",
      cityNameFa: "هاوادریا",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  IHR: {
    airportNameEn: "Iran Shahr",
    airportNameFa: "فرودگاه ایران شهر",
    city: {
      cityCode: "IHR",
      cityNameEn: "Iranshahr",
      cityNameFa: "ایرانشهر",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  JWN: {
    airportNameEn: "Zanjan",
    airportNameFa: "فرودگاه زنجان",
    city: {
      cityCode: "JWN",
      cityNameEn: "Zanjan",
      cityNameFa: "زنجان",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  JYR: {
    airportNameEn: "Jiroft",
    airportNameFa: "فرودگاه جیرفت",
    city: {
      cityCode: "JYR",
      cityNameEn: "Jiroft",
      cityNameFa: "جیرفت",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  KER: {
    airportNameEn: "Kerman",
    airportNameFa: "فرودگاه کرمان",
    city: {
      cityCode: "KER",
      cityNameEn: "Kerman",
      cityNameFa: "کرمان",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  KHD: {
    airportNameEn: "Khorramabad",
    airportNameFa: "فرودگاه خرم آباد",
    city: {
      cityCode: "KHD",
      cityNameEn: "Khoramabad",
      cityNameFa: "خرم آباد",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  KHK: {
    airportNameEn: "Khark",
    airportNameFa: "فرودگاه خارک",
    city: {
      cityCode: "KHK",
      cityNameEn: "Khark",
      cityNameFa: "خارک",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  KHY: {
    airportNameEn: "Khoy",
    airportNameFa: "فرودگاه خوی",
    city: {
      cityCode: "KHY",
      cityNameEn: "Khoy",
      cityNameFa: "خوی",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  KLM: {
    airportNameEn: "Kalaleh",
    airportNameFa: "فرودگاه کلاله",
    city: {
      cityCode: "KLM",
      cityNameEn: "Kalaleh",
      cityNameFa: "کلاله",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  KNR: {
    airportNameEn: "Jam",
    airportNameFa: "فرودگاه جم",
    city: {
      cityCode: "KNR",
      cityNameEn: "Kangan",
      cityNameFa: "کنگان",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  KSH: {
    airportNameEn: "Kermanshah",
    airportNameFa: "فرودگاه کرمانشاه",
    city: {
      cityCode: "KSH",
      cityNameEn: "Kermanshah",
      cityNameFa: "کرمانشاه",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  LFM: {
    airportNameEn: "Lamerd",
    airportNameFa: "فرودگاه لامرد",
    city: {
      cityCode: "LFM",
      cityNameEn: "Lamerd",
      cityNameFa: "لامرد",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  LVP: {
    airportNameEn: "Lavan",
    airportNameFa: "فرودگاه لاوان",
    city: {
      cityCode: "LVP",
      cityNameEn: "Lavan",
      cityNameFa: "لاون",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  MRX: {
    airportNameEn: "Mahshahr",
    airportNameFa: "فرودگاه ماهشهر",
    city: {
      cityCode: "MRX",
      cityNameEn: "Mahshahr",
      cityNameFa: "ماهشهر",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  NSH: {
    airportNameEn: "Now Shahr",
    airportNameFa: "فرودگاه نوشهر",
    city: {
      cityCode: "NSH",
      cityNameEn: "Now Shahr",
      cityNameFa: "نوشهر",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  OMI: {
    airportNameEn: "Omidieh",
    airportNameFa: "پایگاه هوایی امیدیه",
    city: {
      cityCode: "OMI",
      cityNameEn: "Omidieh",
      cityNameFa: "امیدیه",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  RAS: {
    airportNameEn: "Rasht",
    airportNameFa: "فرودگاه رشت",
    city: {
      cityCode: "RAS",
      cityNameEn: "Rasht",
      cityNameFa: "رشت",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  RJN: {
    airportNameEn: "Rafsanjan",
    airportNameFa: "فرودگاه رفسنجان",
    city: {
      cityCode: "RJN",
      cityNameEn: "Rafsanjan",
      cityNameFa: "رفسنجان",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  RZR: {
    airportNameEn: "Ramsar",
    airportNameFa: "فرودگاه رامسر",
    city: {
      cityCode: "RZR",
      cityNameEn: "Ramsar",
      cityNameFa: "رامسر",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  SDG: {
    airportNameEn: "Sanandaj",
    airportNameFa: "فرودگاه سنندج",
    city: {
      cityCode: "SDG",
      cityNameEn: "Sanandaj",
      cityNameFa: "سنندج",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  SXI: {
    airportNameEn: "Sirri Island",
    airportNameFa: "فرودگاه سیری",
    city: {
      cityCode: "SXI",
      cityNameEn: "Sirri Island",
      cityNameFa: "جزیره سیری",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  SYJ: {
    airportNameEn: "Sirjan",
    airportNameFa: "فرودگاه سیرجان",
    city: {
      cityCode: "SYJ",
      cityNameEn: "Sirjan",
      cityNameFa: "سیرجان",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  TCX: {
    airportNameEn: "Tabas Airport",
    airportNameFa: "فرودگاه طبس",
    city: {
      cityCode: "TCX",
      cityNameEn: "Tabas",
      cityNameFa: "طبس",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  XBJ: {
    airportNameEn: "Birjand",
    airportNameFa: "فرودگاه بیرجند",
    city: {
      cityCode: "XBJ",
      cityNameEn: "Birjand",
      cityNameFa: "بیرجند",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  ZAH: {
    airportNameEn: "Zahedan",
    airportNameFa: "فرودگاه زاهدان",
    city: {
      cityCode: "ZAH",
      cityNameEn: "Zahedan",
      cityNameFa: "زاهدان",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  ZBR: {
    airportNameEn: "Chah-Bahar",
    airportNameFa: "فرودگاه کنارک",
    city: {
      cityCode: "ZBR",
      cityNameEn: "Chah-Bahar",
      cityNameFa: "چابهار",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  PYK: {
    airportNameEn: "Payam Karaj",
    airportNameFa: "فرودگاه پیام کرج",
    city: {
      cityCode: "PYK",
      cityNameEn: "Karaj",
      cityNameFa: "کرج",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  ABD: {
    airportNameEn: "Abadan",
    airportNameFa: "فرودگاه آبادان",
    city: {
      cityCode: "ABD",
      cityNameEn: "Abadan",
      cityNameFa: "آبادان",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  ACP: {
    airportNameEn: "Sahand",
    airportNameFa: "فرودگاه سهند",
    city: {
      cityCode: "ACP",
      cityNameEn: "Sahand",
      cityNameFa: "سهند",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  AFZ: {
    airportNameEn: "Sabzevar",
    airportNameFa: "فرودگاه سبزوار",
    city: {
      cityCode: "AFZ",
      cityNameEn: "Sabzevar",
      cityNameFa: "سبزوار",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  DEF: {
    airportNameEn: "Dezful",
    airportNameFa: "فرودگاه دزفول",
    city: {
      cityCode: "DEF",
      cityNameEn: "Dezful",
      cityNameFa: "دزفول",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  GCH: {
    airportNameEn: "Gachsaran airport",
    airportNameFa: "فرودگاه گچساران",
    city: {
      cityCode: "GCH",
      cityNameEn: "Gachsaran",
      cityNameFa: "گچساران",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  YES: {
    airportNameEn: "YASSUJ",
    airportNameFa: "یاسوج",
    city: {
      cityCode: "YES",
      cityNameEn: "Yasuj",
      cityNameFa: "یاسوج",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  IMQ: {
    airportNameEn: "Maku",
    airportNameFa: "فرودگاه ماکو",
    city: {
      cityCode: "IMQ",
      cityNameEn: "Makou",
      cityNameFa: "ماکو",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  QMJ: {
    airportNameEn: "Masjid Soleiman Airport",
    airportNameFa: "فرودگاه مسجد سلیمان",
    city: {
      cityCode: "QMJ",
      cityNameEn: "Masjed Soleiman",
      cityNameFa: "مسجد سلیمان",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  TQZ: {
    airportNameEn: "Saqqez Airport",
    airportNameFa: "فرودگاه سقز",
    city: {
      cityCode: "TQZ",
      cityNameEn: "Saqqez",
      cityNameFa: "سقز",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  JAR: {
    airportNameEn: "Jahrom Airport",
    airportNameFa: "فرودگاه جهرم",
    city: {
      cityCode: "JAR",
      cityNameEn: "Jahrom",
      cityNameFa: "جهرم",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  PFQ: {
    airportNameEn: "Pars Abad Airport",
    airportNameFa: "قرودگاه پارس آباد",
    city: {
      cityCode: "PFQ",
      cityNameEn: "Pars abad",
      cityNameFa: "پارس آباد",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  RUD: {
    airportNameEn: "Shahrood Airport",
    airportNameFa: "فرودگاه شاهرود",
    city: {
      cityCode: "RUD",
      cityNameEn: "shahroud",
      cityNameFa: "شاهرود",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  JSK: {
    airportNameEn: "Jask Airport",
    airportNameFa: "فرودگاه جاسک",
    city: {
      cityCode: "JSK",
      cityNameEn: "Jask",
      cityNameFa: "جاسک",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  IIL: {
    airportNameEn: "Ilam Airport",
    airportNameFa: "فرودگاه ایلام",
    city: {
      cityCode: "IIL",
      cityNameEn: "Ilam",
      cityNameFa: "ایلام",
    },
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  BKK: {
    airportNameEn: "Bangkok",
    airportNameFa: "فرودگاه بانکوک",
    city: {
      cityCode: "BKK",
      cityNameEn: "Bangkok",
      cityNameFa: "بانکوک",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  DMK: {
    airportNameEn: "Don Muang",
    airportNameFa: "فرودگاه بین‌المللی دن موئنگ",
    city: {
      cityCode: "BKK",
      cityNameEn: "Bangkok",
      cityNameFa: "بانکوک",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  TKH: {
    airportNameEn: "Nakhon Sawan",
    airportNameFa: "فرودگاه ناخون ساوان",
    city: {
      cityCode: "TKH",
      cityNameEn: "Takhli",
      cityNameFa: "تاخلی",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  HKT: {
    airportNameEn: "Phuket Intl.",
    airportNameFa: "فرودگاه پوکت",
    city: {
      cityCode: "HKT",
      cityNameEn: "Phuket",
      cityNameFa: "پوکت",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  BAO: {
    airportNameEn: "Udorn",
    airportNameFa: "فرودگاه اودون ایر بیس",
    city: {
      cityCode: "BAO",
      cityNameEn: "Ban Mak Khaen",
      cityNameFa: "بن مک خین",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  CEI: {
    airportNameEn: "Chiang Rai",
    airportNameFa: "فرودگاه بین‌المللی مائه فه لوانگ-چینگ رایی",
    city: {
      cityCode: "CEI",
      cityNameEn: "Chiang Rai",
      cityNameFa: "چیانگ رای",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  CJM: {
    airportNameEn: "Chumphon Arpt.",
    airportNameFa: "فرودگاه چامفون",
    city: {
      cityCode: "CJM",
      cityNameEn: "Chumphon",
      cityNameFa: "چومفون",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  CNX: {
    airportNameEn: "Chiang Mai Intl.",
    airportNameFa: "فرودگاه بین‌المللی چیانگ مای",
    city: {
      cityCode: "CNX",
      cityNameEn: "Chiang Mai",
      cityNameFa: "چیانگ مای",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  HGN: {
    airportNameEn: "Mae Hong Son",
    airportNameFa: "فرودگاه مائه هنگ سون",
    city: {
      cityCode: "HGN",
      cityNameEn: "Mae Hong Son",
      cityNameFa: "مایی هنگ سان",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  HHQ: {
    airportNameEn: "Hua Hin Arpt.",
    airportNameFa: "فرودگاه هوا هین",
    city: {
      cityCode: "HHQ",
      cityNameEn: "Hua Hin",
      cityNameFa: "هوآهین",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  KBV: {
    airportNameEn: "Krabi",
    airportNameFa: "فرودگاه کرابی",
    city: {
      cityCode: "KBV",
      cityNameEn: "Krabi",
      cityNameFa: "کرآبی",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  KDT: {
    airportNameEn: "Kamphangsaen",
    airportNameFa: "فرودگاه کمفینگ سین",
    city: {
      cityCode: "KDT",
      cityNameEn: "Kamphangsaen",
      cityNameFa: "کامفانگسین",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  KKC: {
    airportNameEn: "Khon Kaen",
    airportNameFa: "فرودگاه خون‌کائن",
    city: {
      cityCode: "KKC",
      cityNameEn: "Khon Kaen",
      cityNameFa: "خون کین",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  KOP: {
    airportNameEn: "Nakhon Phanom",
    airportNameFa: "فرودگاه ناخون فانوم",
    city: {
      cityCode: "KOP",
      cityNameEn: "Nakhon Phanom",
      cityNameFa: "نخون فنم",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  LOE: {
    airportNameEn: "Loei",
    airportNameFa: "فرودگاه لوئی",
    city: {
      cityCode: "LOE",
      cityNameEn: "Loei",
      cityNameFa: "لویی",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  LPT: {
    airportNameEn: "Lampang",
    airportNameFa: "فرودگاه لمپانگ",
    city: {
      cityCode: "LPT",
      cityNameEn: "Lampang",
      cityNameFa: "لامپنگ",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  MAQ: {
    airportNameEn: "Mae Sot",
    airportNameFa: "فرودگاه مائه سوت",
    city: {
      cityCode: "MAQ",
      cityNameEn: "Mae Sot",
      cityNameFa: "مایی سات",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  NAK: {
    airportNameEn: "Nakhon Ratchasima",
    airportNameFa: "فرودگاه ناخون راتچاسیما",
    city: {
      cityCode: "NAK",
      cityNameEn: "Nakhon Ratchasima",
      cityNameFa: "ناخون راتچاسیما",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  NAW: {
    airportNameEn: "Narathiwat",
    airportNameFa: "فرودگاه ناراتیوات",
    city: {
      cityCode: "NAW",
      cityNameEn: "Narathiwat",
      cityNameFa: "ناراثیوات",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  NNT: {
    airportNameEn: "Nan",
    airportNameFa: "فرودگاه نان",
    city: {
      cityCode: "NNT",
      cityNameEn: "Nan",
      cityNameFa: "نان",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  NST: {
    airportNameEn: "Nakhon Si Thammarat",
    airportNameFa: "فرودگاه ناخون سی تامارت",
    city: {
      cityCode: "NST",
      cityNameEn: "Nakhon Si Thammarat",
      cityNameFa: "ناخون سی ثامارات",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  PAN: {
    airportNameEn: "Pattani",
    airportNameFa: "فرودگاه پتنی",
    city: {
      cityCode: "PAN",
      cityNameEn: "Pattani",
      cityNameFa: "پاناما",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  PHS: {
    airportNameEn: "Phitsanulok",
    airportNameFa: "فرودگاه فیتسنولک",
    city: {
      cityCode: "PHS",
      cityNameEn: "Phitsanulok",
      cityNameFa: "فیتسانولوک",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  PHY: {
    airportNameEn: "Phetchabun",
    airportNameFa: "فرودگاه فچابون",
    city: {
      cityCode: "PHY",
      cityNameEn: "Phetchabun",
      cityNameFa: "فچابون",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  PRH: {
    airportNameEn: "Phrae",
    airportNameFa: "فرودگاه فرأ",
    city: {
      cityCode: "PRH",
      cityNameEn: "Phrae",
      cityNameFa: "فرایی",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  PYY: {
    airportNameEn: "Pai",
    airportNameFa: "فرودگاه پای",
    city: {
      cityCode: "PYY",
      cityNameEn: "Pai",
      cityNameFa: "پای",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  SGZ: {
    airportNameEn: "Songkhla",
    airportNameFa: "فرودگاه سنگخلا",
    city: {
      cityCode: "SGZ",
      cityNameEn: "Songkhla",
      cityNameFa: "سونگخلا",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  SNO: {
    airportNameEn: "Sakon Nakhon",
    airportNameFa: "فرودگاه ساکن ناخن",
    city: {
      cityCode: "SNO",
      cityNameEn: "Sakon Nakhon",
      cityNameFa: "ساکون ناخون",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  TDX: {
    airportNameEn: "Trat",
    airportNameFa: "فرودگاه ترات",
    city: {
      cityCode: "TDX",
      cityNameEn: "Trat",
      cityNameFa: "ترات",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  THS: {
    airportNameEn: "Sukhothai",
    airportNameFa: "فرودگاه سوخوتاهی",
    city: {
      cityCode: "THS",
      cityNameEn: "Sukhothai",
      cityNameFa: "سوخوتای",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  TKT: {
    airportNameEn: "Tak",
    airportNameFa: "فرودگاه تک",
    city: {
      cityCode: "TKT",
      cityNameEn: "Tak",
      cityNameFa: "تاک",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  TST: {
    airportNameEn: "Trang",
    airportNameFa: "فرودگاه ترانگ",
    city: {
      cityCode: "TST",
      cityNameEn: "Trang",
      cityNameFa: "ترانگ",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  UBP: {
    airportNameEn: "Muang Ubon",
    airportNameFa: "فرودگاه اوبون راتچاتانی",
    city: {
      cityCode: "UBP",
      cityNameEn: "Ubon Ratchathni",
      cityNameFa: "یوبن رتچتهنی",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  UNN: {
    airportNameEn: "Ranong",
    airportNameFa: "فرودگاه رانونگ",
    city: {
      cityCode: "UNN",
      cityNameEn: "Ranong",
      cityNameFa: "رانونگ",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  URT: {
    airportNameEn: "Surat Thani",
    airportNameFa: "فرودگاه سورات",
    city: {
      cityCode: "URT",
      cityNameEn: "Surat Thani",
      cityNameFa: "سورات تانی",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  USM: {
    airportNameEn: "Koh Samui",
    airportNameFa: "فرودگاه ساموی",
    city: {
      cityCode: "USM",
      cityNameEn: "Koh Samui",
      cityNameFa: "کوه سامویی",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  UTH: {
    airportNameEn: "Udon Thani",
    airportNameFa: "فرودگاه بین‌المللی اودن تانی",
    city: {
      cityCode: "UTH",
      cityNameEn: "Udon Thani",
      cityNameFa: "اودون تانی",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  UTP: {
    airportNameEn: "Utapao",
    airportNameFa: "فرودگاه بین‌المللی یو-تاپائو",
    city: {
      cityCode: "UTP",
      cityNameEn: "Utapao",
      cityNameFa: "اوتاپائو",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  UTR: {
    airportNameEn: "Uttaradit",
    airportNameFa: "فرودگاه یوتردیت",
    city: {
      cityCode: "UTR",
      cityNameEn: "Uttaradit",
      cityNameFa: "اوتارادیت",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  HDY: {
    airportNameEn: "Hat Yai",
    airportNameFa: "فرودگاه بین‌المللی هت یای",
    city: {
      cityCode: "HDY",
      cityNameEn: "Hat Yai",
      cityNameFa: "هات آیی",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  ROI: {
    airportNameEn: "Roi Et Arpt.",
    airportNameFa: "فرودگاه روی ات ارپت.",
    city: {
      cityCode: "ROI",
      cityNameEn: "Roi Et",
      cityNameFa: "روی ات",
    },
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  ADB: {
    airportNameEn: "Adnan Menderes",
    airportNameFa: "فرودگاه عدنان مندرس ازمیر",
    city: {
      cityCode: "IZM",
      cityNameEn: "Izmir",
      cityNameFa: "ازمیر",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  IGL: {
    airportNameEn: "Cigli Military Arpt",
    airportNameFa: "پایگاه هوایی چیگلی ",
    city: {
      cityCode: "IZM",
      cityNameEn: "Izmir",
      cityNameFa: "ازمیر",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  ANK: {
    airportNameEn: "Etimesgut",
    airportNameFa: "فرودگاه اتیمسگوت",
    city: {
      cityCode: "ANK",
      cityNameEn: "Ankara",
      cityNameFa: "آنکارا",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  ESB: {
    airportNameEn: "Esenboga",
    airportNameFa: "فرودگاه اسن‌بوغا",
    city: {
      cityCode: "ANK",
      cityNameEn: "Ankara",
      cityNameFa: "آنکارا",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  AYT: {
    airportNameEn: "Antalya",
    airportNameFa: "فرودگاه آنتالیا",
    city: {
      cityCode: "AYT",
      cityNameEn: "Antalya",
      cityNameFa: "آنتالیا",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  IST: {
    airportNameEn: "Istanbul New",
    airportNameFa: "فرودگاه جدید استانبول",
    city: {
      cityCode: "IST",
      cityNameEn: "Istanbul",
      cityNameFa: "استانبول",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  SAW: {
    airportNameEn: "Sabiha Gokcen",
    airportNameFa: "فرودگاه صابیحا گوکچن",
    city: {
      cityCode: "IST",
      cityNameEn: "Istanbul",
      cityNameFa: "استانبول",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  ISL: {
    airportNameEn: "Ataturk Airport",
    airportNameFa: "فرودگاه آتاتورک",
    city: {
      cityCode: "IST",
      cityNameEn: "Istanbul",
      cityNameFa: "استانبول",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  BJV: {
    airportNameEn: "Milas Arpt.",
    airportNameFa: "فرودگاه میلاس",
    city: {
      cityCode: "BJV",
      cityNameEn: "Bodrum",
      cityNameFa: "بدروم",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  BXN: {
    airportNameEn: "Imsik Arpt.",
    airportNameFa: "فرودگاه ایمسیک",
    city: {
      cityCode: "BJV",
      cityNameEn: "Bodrum",
      cityNameFa: "بدروم",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  BZI: {
    airportNameEn: "Balikesir",
    airportNameFa: "فرودگاه بالیکسیر(مارکز) ",
    city: {
      cityCode: "BZI",
      cityNameEn: "Balikesir",
      cityNameFa: "بالیکسیر",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  EDO: {
    airportNameEn: "Edremit/Korfez",
    airportNameFa: "فرودگاه ادرمیت کورفز",
    city: {
      cityCode: "BZI",
      cityNameEn: "Balikesir",
      cityNameFa: "بالیکسیر",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  ADF: {
    airportNameEn: "Adiyaman",
    airportNameFa: "فرودگاه آدیامان",
    city: {
      cityCode: "ADF",
      cityNameEn: "Adiyaman",
      cityNameFa: "آدیامان",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  AFY: {
    airportNameEn: "Afyon",
    airportNameFa: "فرودگاه افیون",
    city: {
      cityCode: "AFY",
      cityNameEn: "Afyon",
      cityNameFa: "افیون",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  AJI: {
    airportNameEn: "Agri Airport",
    airportNameFa: "فرودگاه آگری",
    city: {
      cityCode: "AJI",
      cityNameEn: "Agri",
      cityNameFa: "آگری",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  ASR: {
    airportNameEn: "Erkilet Intl. Arpt.",
    airportNameFa: "فرودگاه بین المللی ارکیلت کایسری",
    city: {
      cityCode: "ASR",
      cityNameEn: "Kayseri",
      cityNameFa: "کایسری",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  BAL: {
    airportNameEn: "Batman",
    airportNameFa: "فرودگاه باتمان",
    city: {
      cityCode: "BAL",
      cityNameEn: "Batman",
      cityNameFa: "باتمان",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  BDM: {
    airportNameEn: "Bandirma",
    airportNameFa: "فرودگاه باندیرما",
    city: {
      cityCode: "BDM",
      cityNameEn: "Bandirma",
      cityNameFa: "بندیرما",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  BGG: {
    airportNameEn: "Bongouanou",
    airportNameFa: "فرودگاه بونگوانو",
    city: {
      cityCode: "BGG",
      cityNameEn: "Bongouanou",
      cityNameFa: "بنگوانو",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  BTZ: {
    airportNameEn: "Bursa/Yenisehir Airport",
    airportNameFa: "فرودگاه بورسا/ ینی سهیر",
    city: {
      cityCode: "BTZ",
      cityNameEn: "Bursa",
      cityNameFa: "بورسا",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  CII: {
    airportNameEn: "Cildir",
    airportNameFa: "فرودگاه کیلدیر",
    city: {
      cityCode: "CII",
      cityNameEn: "Aydin",
      cityNameFa: "آیدین",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  CKZ: {
    airportNameEn: "Canakkale",
    airportNameFa: "فرودگاه ساناککاله",
    city: {
      cityCode: "CKZ",
      cityNameEn: "Canakkale",
      cityNameFa: "کنککل",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  DLM: {
    airportNameEn: "Dalaman",
    airportNameFa: "فرودگاه دالامان",
    city: {
      cityCode: "DLM",
      cityNameEn: "Dalaman",
      cityNameFa: "دالامان",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  DNZ: {
    airportNameEn: "Cardak",
    airportNameFa: "فرودگاه دنیزلی کاردیک",
    city: {
      cityCode: "DNZ",
      cityNameEn: "Denizli",
      cityNameFa: "دنیزلی",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  ERC: {
    airportNameEn: "Erzincan",
    airportNameFa: "فرودگاه ارزنجان",
    city: {
      cityCode: "ERC",
      cityNameEn: "Erzincan",
      cityNameFa: "ارزنجان",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  ERZ: {
    airportNameEn: "Erzurum",
    airportNameFa: "فرودگاه ارزروم",
    city: {
      cityCode: "ERZ",
      cityNameEn: "Erzurum",
      cityNameFa: "ارزوروم",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  ESK: {
    airportNameEn: "Eskisehir",
    airportNameFa: "فرودگاه اسکی‌شهر",
    city: {
      cityCode: "ESK",
      cityNameEn: "Eskisehir",
      cityNameFa: "اسکیشهیر",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  EZS: {
    airportNameEn: "Elazig",
    airportNameFa: "فرودگاه الازیغ",
    city: {
      cityCode: "EZS",
      cityNameEn: "Elazig",
      cityNameFa: "الازیگ",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  GNY: {
    airportNameEn: "Guney Anadolu Projesi",
    airportNameFa: "فرودگاه گونی اندلس پروجسی",
    city: {
      cityCode: "SFQ",
      cityNameEn: "Sanliurfa",
      cityNameFa: "سانلیورفا",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  GZP: {
    airportNameEn: "Gazipasa Airport",
    airportNameFa: "فرودگاه گزیپسا",
    city: {
      cityCode: "GZP",
      cityNameEn: "Alanya",
      cityNameFa: "آلانیا",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  GZT: {
    airportNameEn: "Gaziantep",
    airportNameFa: "فرودگاه غازی عینتاب",
    city: {
      cityCode: "GZT",
      cityNameEn: "Gaziantep",
      cityNameFa: "قاضیانتپ",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  HTY: {
    airportNameEn: "Hatay",
    airportNameFa: "فرودگاه هاتای",
    city: {
      cityCode: "HTY",
      cityNameEn: "Hatay",
      cityNameFa: "هاتای",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  IGD: {
    airportNameEn: "Igdir Airport",
    airportNameFa: "فرودگاه ایغدیر",
    city: {
      cityCode: "IGD",
      cityNameEn: "Igdir",
      cityNameFa: "ایغدیر",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  ISE: {
    airportNameEn: "Soleiman Damirel",
    airportNameFa: "فرودگاه سلیمان دمیرل",
    city: {
      cityCode: "ISE",
      cityNameEn: "Isparta",
      cityNameFa: "اسپارتا",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  KCM: {
    airportNameEn: "Kahramanmaras",
    airportNameFa: "فرودگاه قهرمان‌مرعش",
    city: {
      cityCode: "KCM",
      cityNameEn: "Kahramanmaras",
      cityNameFa: "کهرامانماراس",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  KCO: {
    airportNameEn: "Cengiz Topel",
    airportNameFa: "ایستگاه هوایی سنگیز توپل",
    city: {
      cityCode: "KCO",
      cityNameEn: "Kocaeli",
      cityNameFa: "کوکالی",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  KFS: {
    airportNameEn: "Kastamonu",
    airportNameFa: "فرودگاه کاستامونو",
    city: {
      cityCode: "KFS",
      cityNameEn: "Kastamonu",
      cityNameFa: "کاستامونو",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  KSY: {
    airportNameEn: "Kars",
    airportNameFa: "فرودگاه قارص",
    city: {
      cityCode: "KSY",
      cityNameEn: "Kars",
      cityNameFa: "کارس",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  KYA: {
    airportNameEn: "Konya",
    airportNameFa: "فرودگاه قونیه",
    city: {
      cityCode: "KYA",
      cityNameEn: "Konya",
      cityNameFa: "قونیه",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  KZR: {
    airportNameEn: "Zafer Kutahya Airport",
    airportNameFa: "فرودگاه ظفر",
    city: {
      cityCode: "KZR",
      cityNameEn: "Kutahya",
      cityNameFa: "کوتاهیا",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  MLX: {
    airportNameEn: "Malatya",
    airportNameFa: "فرودگاه ارهاچ",
    city: {
      cityCode: "MLX",
      cityNameEn: "Malatya",
      cityNameFa: "مالاتیا",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  MQM: {
    airportNameEn: "Mardin",
    airportNameFa: "فرودگاه ماردین",
    city: {
      cityCode: "MQM",
      cityNameEn: "Mardin",
      cityNameFa: "ماردین",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  MZH: {
    airportNameEn: "Merzifon",
    airportNameFa: "فرودگاه اماسیا مرزیفون",
    city: {
      cityCode: "MZH",
      cityNameEn: "Merzifon",
      cityNameFa: "مرزیفون",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  NAV: {
    airportNameEn: "Nevsehir",
    airportNameFa: "فرودگاه نوشهر کاپادوکیه",
    city: {
      cityCode: "NAV",
      cityNameEn: "Nevsehir",
      cityNameFa: "نوشیر",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  NOP: {
    airportNameEn: "Sinop",
    airportNameFa: "فرودگاه سینوپ",
    city: {
      cityCode: "NOP",
      cityNameEn: "Sinop",
      cityNameFa: "سینوپ",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  OGU: {
    airportNameEn: "Ordu–Giresun Airport",
    airportNameFa: "فرودگاه اردو-گیراسون",
    city: {
      cityCode: "OGU",
      cityNameEn: "Ordu–Giresun",
      cityNameFa: "اردو-گیراسون",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  ONQ: {
    airportNameEn: "Zonguldak",
    airportNameFa: "فرودگاه زونگولداغ",
    city: {
      cityCode: "ONQ",
      cityNameEn: "Zonguldak",
      cityNameFa: "زنگولدک",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  SXZ: {
    airportNameEn: "Siirt",
    airportNameFa: "فرودگاه سیرت",
    city: {
      cityCode: "SXZ",
      cityNameEn: "Siirt",
      cityNameFa: "سیرت",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  SZF: {
    airportNameEn: "Carsamba",
    airportNameFa: "فرودگاه سامسون",
    city: {
      cityCode: "SZF",
      cityNameEn: "Samsun",
      cityNameFa: "سامسون",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  TEQ: {
    airportNameEn: "Corlu",
    airportNameFa: "فرودگاه تکیرداغ چورلو",
    city: {
      cityCode: "TEQ",
      cityNameEn: "Tekirdag",
      cityNameFa: "تکیرداغ",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  TJK: {
    airportNameEn: "Tokat",
    airportNameFa: "فرودگاه توقات",
    city: {
      cityCode: "TJK",
      cityNameEn: "Tokat",
      cityNameFa: "توکت",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  TZX: {
    airportNameEn: "Trabzon",
    airportNameFa: "فرودگاه ترابزون",
    city: {
      cityCode: "TZX",
      cityNameEn: "Trabzon",
      cityNameFa: "ترابزون",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  USQ: {
    airportNameEn: "Usak",
    airportNameFa: "فرودگاه اوشاک",
    city: {
      cityCode: "USQ",
      cityNameEn: "Usak",
      cityNameFa: "اوساک",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  VAN: {
    airportNameEn: "Ferit Melen Arpt.",
    airportNameFa: "فرودگاه فرید ملن",
    city: {
      cityCode: "VAN",
      cityNameEn: "Van",
      cityNameFa: "وان",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  VAS: {
    airportNameEn: "Sivas",
    airportNameFa: "فرودگاه سیواس",
    city: {
      cityCode: "VAS",
      cityNameEn: "Sivas",
      cityNameFa: "سیواس",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  YKO: {
    airportNameEn: "Yuksekova",
    airportNameFa: "فرودگاه یوکسک اووا",
    city: {
      cityCode: "YKO",
      cityNameEn: "Hakkari",
      cityNameFa: "حکاری",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  RZV: {
    airportNameEn: "Rize Artvin",
    airportNameFa: "فرودگاه رایز",
    city: {
      cityCode: "QRI",
      cityNameEn: "Rize",
      cityNameFa: "رایز",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  ADA: {
    airportNameEn: "Adana",
    airportNameFa: "فرودگاه آدانا",
    city: {
      cityCode: "ADA",
      cityNameEn: "Adana",
      cityNameFa: "آدانا",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  AOE: {
    airportNameEn: "Anadolu University",
    airportNameFa: "فرودگاه آنادولو",
    city: {
      cityCode: "AOE",
      cityNameEn: "Eskisehir",
      cityNameFa: "اسکیشهیر",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  DIY: {
    airportNameEn: "Diyarbakir",
    airportNameFa: "فرودگاه دیاربکر",
    city: {
      cityCode: "DIY",
      cityNameEn: "Diyarbakir",
      cityNameFa: "دیاربکیر",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  YEI: {
    airportNameEn: "Yenisehir bursa Intl",
    airportNameFa: "فرودگاه ینی شهیر بورسا",
    city: {
      cityCode: "YEI",
      cityNameEn: "Bursa",
      cityNameFa: "بورسا",
    },
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  PVG: {
    airportNameEn: "Pudong",
    airportNameFa: "فرودگاه پودونگ",
    city: {
      cityCode: "SHA",
      cityNameEn: "Shanghai",
      cityNameFa: "شانگهای",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  SHA: {
    airportNameEn: "Hongqiao",
    airportNameFa: "فرودگاه بین‌المللی شانگهای هنگقیو",
    city: {
      cityCode: "SHA",
      cityNameEn: "Shanghai",
      cityNameFa: "شانگهای",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  SZX: {
    airportNameEn: "Shenzhen",
    airportNameFa: "فرودگاه بین‌المللی شنزن بن",
    city: {
      cityCode: "SZX",
      cityNameEn: "Shenzhen",
      cityNameFa: "شنزن",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  ACX: {
    airportNameEn: "Xingyi",
    airportNameFa: "فرودگاه ژینگی",
    city: {
      cityCode: "ACX",
      cityNameEn: "Xingyi",
      cityNameFa: "زینگوی",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  DYG: {
    airportNameEn: "Zhangjiajie Hehua Intl",
    airportNameFa: "فرودگاه بین المللی ژانگجیاجیه",
    city: {
      cityCode: "DYG",
      cityNameEn: "Zhangjiajie",
      cityNameFa: "ژانگجیاجیه",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LJG: {
    airportNameEn: "Lijiang",
    airportNameFa: "فرودگاه لیجیانگ سانی",
    city: {
      cityCode: "LJG",
      cityNameEn: "Lijiang City",
      cityNameFa: "لیجینگ سیتی",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  NAY: {
    airportNameEn: "Nanyuan Arpt.",
    airportNameFa: "فرودگاه پکن نانیوان",
    city: {
      cityCode: "BJS",
      cityNameEn: "Beijing",
      cityNameFa: "پکن",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  PEK: {
    airportNameEn: "Beijing Capital Int.",
    airportNameFa: "فرودگاه بیجینگ",
    city: {
      cityCode: "BJS",
      cityNameEn: "Beijing",
      cityNameFa: "پکن",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  PKX: {
    airportNameEn: "Daxing Intl",
    airportNameFa: "داکسین اینترنشنال",
    city: {
      cityCode: "BJS",
      cityNameEn: "Beijing",
      cityNameFa: "پکن",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  TFU: {
    airportNameEn: "TIANFU INTERNATIONAL",
    airportNameFa: "فرودگاه بین المللی تیانگ فو",
    city: {
      cityCode: "CTU",
      cityNameEn: "Chengdu",
      cityNameFa: "چنگدو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  CTU: {
    airportNameEn: "Shuangliu",
    airportNameFa: "فرودگاه بین‌المللی چنگدو شوانگلیو",
    city: {
      cityCode: "CTU",
      cityNameEn: "Chengdu",
      cityNameFa: "چنگدو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  CAN: {
    airportNameEn: "New Baiyun",
    airportNameFa: "فرودگاه نیو بایون گوانگجو",
    city: {
      cityCode: "CAN",
      cityNameEn: "Guangzhou",
      cityNameFa: "گوانگ ‌ژو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  AKA: {
    airportNameEn: "Ankang",
    airportNameFa: "فرودگاه انکانگ ولیپو",
    city: {
      cityCode: "AKA",
      cityNameEn: "Ankang",
      cityNameFa: "انکانگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  AKU: {
    airportNameEn: "Aksu",
    airportNameFa: "فرودگاه اکسو",
    city: {
      cityCode: "AKU",
      cityNameEn: "Aksu",
      cityNameFa: "اکسو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  AOG: {
    airportNameEn: "Anshan",
    airportNameFa: "فرودگاه آنشان تنگاو",
    city: {
      cityCode: "AOG",
      cityNameEn: "Anshan",
      cityNameFa: "انشان",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  AVA: {
    airportNameEn: "An Shun/Huang Guo Shu",
    airportNameFa: "فرودگاه انشون وانگوشو",
    city: {
      cityCode: "AVA",
      cityNameEn: "An Shun",
      cityNameFa: "ان شون",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  AYN: {
    airportNameEn: "Anyang",
    airportNameFa: "فرودگاه انیانگ",
    city: {
      cityCode: "AYN",
      cityNameEn: "Anyang",
      cityNameFa: "انیانگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  BAV: {
    airportNameEn: "Baotou",
    airportNameFa: "فرودگاه بائوتو ارلیبان",
    city: {
      cityCode: "BAV",
      cityNameEn: "Baotou",
      cityNameFa: "بائوتو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  BFU: {
    airportNameEn: "Bengbu",
    airportNameFa: "فرودگاه بنگبو",
    city: {
      cityCode: "BFU",
      cityNameEn: "Bengbu",
      cityNameFa: "بنگبو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  BHY: {
    airportNameEn: "Beihai",
    airportNameFa: "فرودگاه بیهای فوچنگ",
    city: {
      cityCode: "BHY",
      cityNameEn: "Beihai",
      cityNameFa: "بیهای",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  BPX: {
    airportNameEn: "Bangda",
    airportNameFa: "فرودگاه کامدو بامدا",
    city: {
      cityCode: "BPX",
      cityNameEn: "Bangda",
      cityNameFa: "بنگدا",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  BSD: {
    airportNameEn: "Baoshan",
    airportNameFa: "فرودگاه باوشان",
    city: {
      cityCode: "BSD",
      cityNameEn: "Baoshan",
      cityNameFa: "بائوشان",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  CGD: {
    airportNameEn: "Changde",
    airportNameFa: "فرودگاه چانگده",
    city: {
      cityCode: "CGD",
      cityNameEn: "Changde",
      cityNameFa: "چنگده",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  CGO: {
    airportNameEn: "Zhengzhou",
    airportNameFa: "فرودگاه بین‌المللی ژنگژو سین‌ژنگ",
    city: {
      cityCode: "CGO",
      cityNameEn: "Zhengzhou",
      cityNameFa: "ژنگژو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  CHG: {
    airportNameEn: "Chaoyang Arpt.",
    airportNameFa: "فرودگاه چاویانگ",
    city: {
      cityCode: "CHG",
      cityNameEn: "Chaoyang",
      cityNameFa: "چایانگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  CIF: {
    airportNameEn: "Chifeng",
    airportNameFa: "فرودگاه چایفنگ ایولونگ",
    city: {
      cityCode: "CIF",
      cityNameEn: "Chifeng",
      cityNameFa: "چیفنگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  CIH: {
    airportNameEn: "Changzhi",
    airportNameFa: "فرودگاه شانشی",
    city: {
      cityCode: "CIH",
      cityNameEn: "Changzhi",
      cityNameFa: "چنگژی",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  CKG: {
    airportNameEn: "Chongqing Jiangbei Intl.",
    airportNameFa: "فرودگاه بین‌المللی چنگچینگ ییانگبی",
    city: {
      cityCode: "CKG",
      cityNameEn: "Chongqing",
      cityNameFa: "چونگ کینگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  CNI: {
    airportNameEn: "Changhai",
    airportNameFa: "فرودگاه چانگها",
    city: {
      cityCode: "CNI",
      cityNameEn: "Changhai",
      cityNameFa: "چنگهای",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  CSX: {
    airportNameEn: "Changsha",
    airportNameFa: "فرودگاه بین‌المللی چانگشا هوانگهوا",
    city: {
      cityCode: "CSX",
      cityNameEn: "Changsha",
      cityNameFa: "چنگشا",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  CZX: {
    airportNameEn: "Changzhou",
    airportNameFa: "فرودگاه چانگجو بنیو",
    city: {
      cityCode: "CZX",
      cityNameEn: "Changzhou",
      cityNameFa: "چنگژو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  DAT: {
    airportNameEn: "Beijiazao",
    airportNameFa: "فرودگاه بیجیزو",
    city: {
      cityCode: "DAT",
      cityNameEn: "Datong",
      cityNameFa: "داتونگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  DAX: {
    airportNameEn: "Daxian",
    airportNameFa: "فرودگاه داژو هشی",
    city: {
      cityCode: "DAX",
      cityNameEn: "Daxian",
      cityNameFa: "دازیان",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  DDG: {
    airportNameEn: "Dandong",
    airportNameFa: "فرودگاه داندونگ لنگتو",
    city: {
      cityCode: "DDG",
      cityNameEn: "Dandong",
      cityNameFa: "دندونگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  DIG: {
    airportNameEn: "Diqing",
    airportNameFa: "فرودگاه دکن شنگریلا",
    city: {
      cityCode: "DIG",
      cityNameEn: "Diqing",
      cityNameFa: "دیقینگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  DLC: {
    airportNameEn: "Dalian",
    airportNameFa: "فرودگاه بین‌المللی دالیان ژووشویزی",
    city: {
      cityCode: "DLC",
      cityNameEn: "Dalian",
      cityNameFa: "دالیان",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  DNH: {
    airportNameEn: "Dunhuang",
    airportNameFa: "فرودگاه دونهوانگ",
    city: {
      cityCode: "DNH",
      cityNameEn: "Dunhuang",
      cityNameFa: "دونهوانگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  DOY: {
    airportNameEn: "Dongying",
    airportNameFa: "فرودگاه دونگینگ",
    city: {
      cityCode: "DOY",
      cityNameEn: "Dongying",
      cityNameFa: "دونگینگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  DQA: {
    airportNameEn: "Daqing Saertu",
    airportNameFa: "فرودگاه دقینگ سیرتو",
    city: {
      cityCode: "DQA",
      cityNameEn: "Daqing",
      cityNameFa: "داقینگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  DZU: {
    airportNameEn: "Dazu",
    airportNameFa: "فرودگاه دازو",
    city: {
      cityCode: "DZU",
      cityNameEn: "Dazu",
      cityNameFa: "دذو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  ENH: {
    airportNameEn: "Enshi",
    airportNameFa: "فرودگاه انشی ژوجیپینگ",
    city: {
      cityCode: "ENH",
      cityNameEn: "Enshi",
      cityNameFa: "انشائئ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  ENY: {
    airportNameEn: "Ershilipu",
    airportNameFa: "فرودگاه ارشیلیپو",
    city: {
      cityCode: "ENY",
      cityNameEn: "Yan''An",
      cityNameFa: "یان ان",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  FOC: {
    airportNameEn: "Fuzhou",
    airportNameFa: "فرودگاه بین‌المللی فوژو چنگل",
    city: {
      cityCode: "FOC",
      cityNameEn: "Fuzhou",
      cityNameFa: "فوژو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  FUG: {
    airportNameEn: "Fuyang",
    airportNameFa: "فرودگاه فویانگ ژیگان",
    city: {
      cityCode: "FUG",
      cityNameEn: "Fuyang",
      cityNameFa: "فویانگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  FUO: {
    airportNameEn: "Shadi",
    airportNameFa: "فرودگاه شادی",
    city: {
      cityCode: "FUO",
      cityNameEn: "Foshan",
      cityNameFa: "فوژان",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  GOQ: {
    airportNameEn: "Golmud",
    airportNameFa: "فرودگاه گولمود",
    city: {
      cityCode: "GOQ",
      cityNameEn: "Golmud",
      cityNameFa: "گولمود",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  GXH: {
    airportNameEn: "Gannan Xiahe",
    airportNameFa: "فرودگاه شیاهه",
    city: {
      cityCode: "GXH",
      cityNameEn: "Xiahe",
      cityNameFa: "شیاحه",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  GYS: {
    airportNameEn: "Guang Yuan",
    airportNameFa: "فرودگاه گوانگیوان",
    city: {
      cityCode: "GYS",
      cityNameEn: "Guang Yuan",
      cityNameFa: "گوانگ یوان",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HDG: {
    airportNameEn: "Handan",
    airportNameFa: "فرودگاه هاندان",
    city: {
      cityCode: "HDG",
      cityNameEn: "Handan",
      cityNameFa: "هندان",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HEK: {
    airportNameEn: "Heihe",
    airportNameFa: "فرودگاه هیه",
    city: {
      cityCode: "HEK",
      cityNameEn: "Heihe",
      cityNameFa: "هیه",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HET: {
    airportNameEn: "Hohhot",
    airportNameFa: "فرودگاه بین‌المللی هوهوت بایتا",
    city: {
      cityCode: "HET",
      cityNameEn: "Hohhot",
      cityNameFa: "هههت",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HFE: {
    airportNameEn: "Hefei",
    airportNameFa: "فرودگاه بین‌المللی هفی لوگانگ",
    city: {
      cityCode: "HFE",
      cityNameEn: "Luogang",
      cityNameFa: "لوگانگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HGH: {
    airportNameEn: "Hangzhou",
    airportNameFa: "فرودگاه بین‌المللی هانگجو ژیاشان",
    city: {
      cityCode: "HGH",
      cityNameEn: "Hangzhou",
      cityNameFa: "هانگزو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HLD: {
    airportNameEn: "Hailar",
    airportNameFa: "فرودگاه هایلار دنگشان",
    city: {
      cityCode: "HLD",
      cityNameEn: "Hailar",
      cityNameFa: "هایلار",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HLH: {
    airportNameEn: "Ulanhot",
    airportNameFa: "فرودگاه اولنهت",
    city: {
      cityCode: "HLH",
      cityNameEn: "Ulanhot",
      cityNameFa: "اولانهات",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HMI: {
    airportNameEn: "Hami",
    airportNameFa: "فرودگاه هامی",
    city: {
      cityCode: "HMI",
      cityNameEn: "Hami",
      cityNameFa: "هامی",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HNY: {
    airportNameEn: "Hengyang",
    airportNameFa: "فرودگاه هنگیواگ باجیالینگ",
    city: {
      cityCode: "HNY",
      cityNameEn: "Hengyang",
      cityNameFa: "هنگیانگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HRB: {
    airportNameEn: "Harbin",
    airportNameFa: "فرودگاه بین‌المللی هاربین تایپینگ",
    city: {
      cityCode: "HRB",
      cityNameEn: "Harbin",
      cityNameFa: "هاربین",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HSC: {
    airportNameEn: "Shaoguan",
    airportNameFa: "فرودگاه شگوان گویتو",
    city: {
      cityCode: "HSC",
      cityNameEn: "Shaoguan",
      cityNameFa: "شائوگوان",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HSN: {
    airportNameEn: "Zhoushan",
    airportNameFa: "فرودگاه زوشن پوتوشن",
    city: {
      cityCode: "HSN",
      cityNameEn: "Zhoushan",
      cityNameFa: "ژوشان",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HTN: {
    airportNameEn: "Hotan",
    airportNameFa: "فرودگاه ختن",
    city: {
      cityCode: "HTN",
      cityNameEn: "Hotan",
      cityNameFa: "هوتان",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HUZ: {
    airportNameEn: "Huizhou",
    airportNameFa: "فرودگاه ویجو",
    city: {
      cityCode: "HUZ",
      cityNameEn: "Huizhou",
      cityNameFa: "هویژو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HZG: {
    airportNameEn: "Hanzhong",
    airportNameFa: "فرودگاه هانژونگ کسیگوان",
    city: {
      cityCode: "HZG",
      cityNameEn: "Hanzhong",
      cityNameFa: "هنژنگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HZH: {
    airportNameEn: "Liping",
    airportNameFa: "فرودگاه لیپینگ",
    city: {
      cityCode: "HZH",
      cityNameEn: "Liping City",
      cityNameFa: "لیپینگ سیتی",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  INC: {
    airportNameEn: "Yinchuan",
    airportNameFa: "فرودگاه یینچوان هیدونگ",
    city: {
      cityCode: "INC",
      cityNameEn: "Yinchuan",
      cityNameFa: "یینچوان",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  IQM: {
    airportNameEn: "Qiemo",
    airportNameFa: "فرودگاه کیه‌مو",
    city: {
      cityCode: "IQM",
      cityNameEn: "Qiemo",
      cityNameFa: "قیمو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  IQN: {
    airportNameEn: "Qingyang",
    airportNameFa: "فرودگاه کینگیانگ",
    city: {
      cityCode: "IQN",
      cityNameEn: "Qingyang",
      cityNameFa: "کینگیانگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  JDZ: {
    airportNameEn: "Jingdezhen",
    airportNameFa: "فرودگاه جینگدژن لوییا",
    city: {
      cityCode: "JDZ",
      cityNameEn: "Jingdezhen",
      cityNameFa: "جینگدژن",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  JGN: {
    airportNameEn: "Jiayuguan",
    airportNameFa: "فرودگاه جیایوگوان",
    city: {
      cityCode: "JGN",
      cityNameEn: "Jiayuguan",
      cityNameFa: "جیاوگوان",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  JHG: {
    airportNameEn: "Gasa",
    airportNameFa: "فرودگاه شیشوانگبانا گاسا",
    city: {
      cityCode: "JHG",
      cityNameEn: "Jinghong",
      cityNameFa: "جینقنگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  JIL: {
    airportNameEn: "Jilin",
    airportNameFa: "فرودگاه جیلین ارتایزی",
    city: {
      cityCode: "JIL",
      cityNameEn: "Jilin",
      cityNameFa: "جیلین",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  JIU: {
    airportNameEn: "Jiujiang",
    airportNameFa: "فرودگاه ییوییانگ لوشان",
    city: {
      cityCode: "JIU",
      cityNameEn: "Lushan",
      cityNameFa: "لوشن",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  JJN: {
    airportNameEn: "Jinjiang",
    airportNameFa: "فرودگاه کوانژو جینجیانگ",
    city: {
      cityCode: "JJN",
      cityNameEn: "Jinjiang",
      cityNameFa: "جینجینگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  JNG: {
    airportNameEn: "Jining",
    airportNameFa: "فرودگاه جینینگ کوفو",
    city: {
      cityCode: "JNG",
      cityNameEn: "Jining",
      cityNameFa: "جینینگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  JNZ: {
    airportNameEn: "Jinzhou",
    airportNameFa: "فرودگاه جینجو کسیالینگزی",
    city: {
      cityCode: "JNZ",
      cityNameEn: "Jinzhou",
      cityNameFa: "جینژو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  JZH: {
    airportNameEn: "Jiu Zhai Huang Long",
    airportNameFa: "فرودگاه ییوژای هوانگلنگ",
    city: {
      cityCode: "JZH",
      cityNameEn: "Song Pan",
      cityNameFa: "سانگ پن",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  KCA: {
    airportNameEn: "Kuqa",
    airportNameFa: "فرودگاه کوکا کیوسی",
    city: {
      cityCode: "KCA",
      cityNameEn: "Kuqa",
      cityNameFa: "کوقا",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  KHG: {
    airportNameEn: "Kashi",
    airportNameFa: "فرودگاه کاشغر (کاشی) ",
    city: {
      cityCode: "KHG",
      cityNameEn: "Kashgar",
      cityNameFa: "کاشغر",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  KHN: {
    airportNameEn: "Nanchang",
    airportNameFa: "فرودگاه بین‌المللی نانچانگ چانگبی",
    city: {
      cityCode: "KHN",
      cityNameEn: "Nanchang",
      cityNameFa: "نانچنگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  KMG: {
    airportNameEn: "Kunming",
    airportNameFa: "فرودگاه بین‌المللی کونمینگ چانگشوی",
    city: {
      cityCode: "KMG",
      cityNameEn: "Kunming",
      cityNameFa: "کونمینگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  KOW: {
    airportNameEn: "Ganzhou",
    airportNameFa: "فرودگاه گانژو هوانگژین",
    city: {
      cityCode: "KOW",
      cityNameEn: "Ganzhou",
      cityNameFa: "گانژو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  KRL: {
    airportNameEn: "Korla",
    airportNameFa: "فرودگاه کورلا",
    city: {
      cityCode: "KRL",
      cityNameEn: "Korla",
      cityNameFa: "کرلا",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  KRY: {
    airportNameEn: "Karamay",
    airportNameFa: "فرودگاه کارامی",
    city: {
      cityCode: "KRY",
      cityNameEn: "Karamay",
      cityNameFa: "کارامای",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  KWL: {
    airportNameEn: "Guilin",
    airportNameFa: "فرودگاه بین‌المللی گایلین لیانگ‌جیانگ",
    city: {
      cityCode: "KWL",
      cityNameEn: "Guilin",
      cityNameFa: "گویلین",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LCX: {
    airportNameEn: "Liancheng",
    airportNameFa: "فرودگاه لونجیان گوانژیشان",
    city: {
      cityCode: "LCX",
      cityNameEn: "Longyan",
      cityNameFa: "لنگین",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LHK: {
    airportNameEn: "Guanghua",
    airportNameFa: "فرودگاه گوانگهوا",
    city: {
      cityCode: "LHK",
      cityNameEn: "Guanghua",
      cityNameFa: "گوانقوا",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LHW: {
    airportNameEn: "Lanzhou Arpt.",
    airportNameFa: "فرودگاه لانژو",
    city: {
      cityCode: "LHW",
      cityNameEn: "Lanzhou",
      cityNameFa: "لانژو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LLF: {
    airportNameEn: "Lingling",
    airportNameFa: "فرودگاه یونگ‌ژوی لینگ‌لینگ",
    city: {
      cityCode: "LLF",
      cityNameEn: "Lingling",
      cityNameFa: "لینگلینگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LNJ: {
    airportNameEn: "Lincang",
    airportNameFa: "فرودگاه لینکانگ",
    city: {
      cityCode: "LNJ",
      cityNameEn: "Lincang",
      cityNameFa: "لینکنگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LUM: {
    airportNameEn: "Mangshi",
    airportNameFa: "فرودگاه دیهونگ مانگشی",
    city: {
      cityCode: "LUM",
      cityNameEn: "Luxi",
      cityNameFa: "لوخی",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LXA: {
    airportNameEn: "Gonggar/Lhasa",
    airportNameFa: "فرودگاه لاسا گونگار",
    city: {
      cityCode: "LXA",
      cityNameEn: "Lhasa",
      cityNameFa: "لهاسا",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LYA: {
    airportNameEn: "Luoyang",
    airportNameFa: "فرودگاه لویانگ بیجیائو",
    city: {
      cityCode: "LYA",
      cityNameEn: "Luoyang",
      cityNameFa: "لویانگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LYI: {
    airportNameEn: "Linyi",
    airportNameFa: "فرودگاه لینی شابولینگ",
    city: {
      cityCode: "LYI",
      cityNameEn: "Linyi",
      cityNameFa: "لینی",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LZH: {
    airportNameEn: "Liuzhou",
    airportNameFa: "فرودگاه لیوژو بایلیان",
    city: {
      cityCode: "LZH",
      cityNameEn: "Liuzhou",
      cityNameFa: "لیوژو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LZO: {
    airportNameEn: "Luzhou",
    airportNameFa: "فرودگاه لوژو لانتیان",
    city: {
      cityCode: "LZO",
      cityNameEn: "Luzhou",
      cityNameFa: "لوژو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  MDG: {
    airportNameEn: "Mudanjiang",
    airportNameFa: "فرودگاه مودانجیانگ هایلانگ",
    city: {
      cityCode: "MDG",
      cityNameEn: "Mudanjiang",
      cityNameFa: "مودانجیانگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  MIG: {
    airportNameEn: "Mian Yang",
    airportNameFa: "فرودگاه میانیانگ نانجیائو",
    city: {
      cityCode: "MIG",
      cityNameEn: "Mian Yang",
      cityNameFa: "میانیانگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  MXZ: {
    airportNameEn: "Meixian",
    airportNameFa: "فرودگاه میکسیان",
    city: {
      cityCode: "MXZ",
      cityNameEn: "Meixian",
      cityNameFa: "میکسین",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  NAO: {
    airportNameEn: "Nanchong",
    airportNameFa: "فرودگاه نانچونگ",
    city: {
      cityCode: "NAO",
      cityNameEn: "Nanchong",
      cityNameFa: "نانچونگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  NBS: {
    airportNameEn: "Changbaishan",
    airportNameFa: "فرودگاه چنگبیشن",
    city: {
      cityCode: "NBS",
      cityNameEn: "Baishan",
      cityNameFa: "بایشان",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  NDG: {
    airportNameEn: "Qiqihar",
    airportNameFa: "فرودگاه قیقیهر",
    city: {
      cityCode: "NDG",
      cityNameEn: "Qiqihar",
      cityNameFa: "کیکیهار",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  NGB: {
    airportNameEn: "Lishe Intl. Arpt.",
    airportNameFa: "فرودگاه بین‌المللی نینگبو لیشه",
    city: {
      cityCode: "NGB",
      cityNameEn: "Ningbo",
      cityNameFa: "نینگبو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  NKG: {
    airportNameEn: "Lukou Intl. Arpt.",
    airportNameFa: "فرودگاه بین‌المللی نانجینگ لوکو",
    city: {
      cityCode: "NKG",
      cityNameEn: "Nanking/Nanjing",
      cityNameFa: "نانکینگ/نانجینگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  NNG: {
    airportNameEn: "Nanning",
    airportNameFa: "فرودگاه بین‌المللی نانینگ ووژو",
    city: {
      cityCode: "NNG",
      cityNameEn: "Nanning",
      cityNameFa: "نننینگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  NNY: {
    airportNameEn: "Nanyang",
    airportNameFa: "فرودگاه نانیانگ جیانگ‌یینگ",
    city: {
      cityCode: "NNY",
      cityNameEn: "Nanyang",
      cityNameFa: "نانیانگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  NTG: {
    airportNameEn: "Nantong",
    airportNameFa: "فرودگاه نانتونگ",
    city: {
      cityCode: "NTG",
      cityNameEn: "Nantong",
      cityNameFa: "نانتونگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  RUG: {
    airportNameEn: "Rugao",
    airportNameFa: "پایگاه هوایی روگو",
    city: {
      cityCode: "RUG",
      cityNameEn: "Rugao",
      cityNameFa: "روگائو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  SHP: {
    airportNameEn: "Qinhuangdao",
    airportNameFa: "فرودگاه کینهوانگدو شانهایگوان",
    city: {
      cityCode: "SHP",
      cityNameEn: "Qinhuangdao",
      cityNameFa: "کینهوانگداو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  SHS: {
    airportNameEn: "Shashi",
    airportNameFa: "فرودگاه شاسی",
    city: {
      cityCode: "SHS",
      cityNameEn: "Shashi",
      cityNameFa: "شاشی",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  SJW: {
    airportNameEn: "Daguocun",
    airportNameFa: "فرودگاه بین‌المللی شیاژونگ ژنگدینگ",
    city: {
      cityCode: "SJW",
      cityNameEn: "Shijiazhuang",
      cityNameFa: "شیجیاژوانگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  SWA: {
    airportNameEn: "Shantou",
    airportNameFa: "فرودگاه جییانگوشان",
    city: {
      cityCode: "SWA",
      cityNameEn: "Shantou",
      cityNameFa: "شانتو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  SXJ: {
    airportNameEn: "Shanshan",
    airportNameFa: "فرودگاه شانشان",
    city: {
      cityCode: "SXJ",
      cityNameEn: "Shanshan",
      cityNameFa: "شانشان",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  SYM: {
    airportNameEn: "Simao",
    airportNameFa: "فرودگاه سیمائو",
    city: {
      cityCode: "SYM",
      cityNameEn: "Simao",
      cityNameFa: "سیماو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  SYX: {
    airportNameEn: "Fenghuang Intl.",
    airportNameFa: "فرودگاه بین‌المللی سانیا فونیکس",
    city: {
      cityCode: "SYX",
      cityNameEn: "Hainan-Sanya",
      cityNameFa: "هاینان- سانیا",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  SZV: {
    airportNameEn: "Suzhou",
    airportNameFa: "فرودگاه سوژو جیانگسو،",
    city: {
      cityCode: "SZV",
      cityNameEn: "Suzhou",
      cityNameFa: "سوژو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  TAO: {
    airportNameEn: "Qingdao",
    airportNameFa: "فرودگاه بین‌المللی کینگدائو لیوتینگ",
    city: {
      cityCode: "TAO",
      cityNameEn: "Qingdao",
      cityNameFa: "قینگدائو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  TCG: {
    airportNameEn: "Tacheng",
    airportNameFa: "فرودگاه تچنگ",
    city: {
      cityCode: "TCG",
      cityNameEn: "Tacheng",
      cityNameFa: "تاچنگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  TEN: {
    airportNameEn: "Tongren",
    airportNameFa: "فرودگاه تونگرن فنگ‌هوانگ",
    city: {
      cityCode: "TEN",
      cityNameEn: "Tongren",
      cityNameFa: "تونگرن",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  TGO: {
    airportNameEn: "Tongliao",
    airportNameFa: "فرودگاه تنگلیو",
    city: {
      cityCode: "TGO",
      cityNameEn: "Tongliao",
      cityNameFa: "تونگلیائو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  TNA: {
    airportNameEn: "Jinan",
    airportNameFa: "فرودگاه بین‌المللی جینان یاکیانگ",
    city: {
      cityCode: "TNA",
      cityNameEn: "Jinan",
      cityNameFa: "جینان",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  TNH: {
    airportNameEn: "Tonghua Liuhe",
    airportNameFa: "فرودگاه تونگهوا سن‌یوانپو",
    city: {
      cityCode: "TNH",
      cityNameEn: "Tonghua",
      cityNameFa: "تونقوا",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  TSN: {
    airportNameEn: "Tianjin Binhai Intl.",
    airportNameFa: "فرودگاه بین‌المللی تیانجین بینهای",
    city: {
      cityCode: "TSN",
      cityNameEn: "Tianjin",
      cityNameFa: "تیان جین",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  TVS: {
    airportNameEn: "Sannuhe",
    airportNameFa: "فرودگاه سنوه",
    city: {
      cityCode: "TVS",
      cityNameEn: "Tangshan",
      cityNameFa: "تانگشان",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  TXN: {
    airportNameEn: "Tunxi",
    airportNameFa: "فرودگاه تونخی",
    city: {
      cityCode: "TXN",
      cityNameEn: "Tunxi",
      cityNameFa: "تونکسی",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  TYN: {
    airportNameEn: "Taiyuan",
    airportNameFa: "فرودگاه بین‌المللی ووسو تائی‌یوان",
    city: {
      cityCode: "TYN",
      cityNameEn: "Taiyuan",
      cityNameFa: "تایونان",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  URC: {
    airportNameEn: "Urumqi",
    airportNameFa: "فرودگاه بین‌المللی اورومچی دیووپو",
    city: {
      cityCode: "URC",
      cityNameEn: "Urumqi",
      cityNameFa: "ارومچی",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  UYN: {
    airportNameEn: "Yulin",
    airportNameFa: "فرودگاه یولین",
    city: {
      cityCode: "UYN",
      cityNameEn: "Yulin",
      cityNameFa: "یولین",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  WEF: {
    airportNameEn: "Weifang",
    airportNameFa: "فرودگاه ویفنگ",
    city: {
      cityCode: "WEF",
      cityNameEn: "Weifang",
      cityNameFa: "ویفنگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  WEH: {
    airportNameEn: "Weihai",
    airportNameFa: "فرودگاه ویهای داشویبو",
    city: {
      cityCode: "WEH",
      cityNameEn: "Weihai",
      cityNameFa: "ویهای",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  WHU: {
    airportNameEn: "Wuhu",
    airportNameFa: "فرودگاه ووهو",
    city: {
      cityCode: "WHU",
      cityNameEn: "Wuhu",
      cityNameFa: "ووهو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  WUH: {
    airportNameEn: "Tianhe Intl.",
    airportNameFa: "فرودگاه بین‌المللی ووهان تیانهه",
    city: {
      cityCode: "WUH",
      cityNameEn: "Wuhan",
      cityNameFa: "ووهان",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  WUS: {
    airportNameEn: "Wuyishan",
    airportNameFa: "فرودگاه وییشن",
    city: {
      cityCode: "WUS",
      cityNameEn: "Wuyishan",
      cityNameFa: "ووییشان",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  XIY: {
    airportNameEn: "Xianyang Intl",
    airportNameFa: "فرودگاه بین المللی شیان یانگ",
    city: {
      cityCode: "SIA",
      cityNameEn: "Xian",
      cityNameFa: "شی آن",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  WUX: {
    airportNameEn: "Wuxi",
    airportNameFa: "فرودگاه بین‌المللی سانن شوفانگ",
    city: {
      cityCode: "WUX",
      cityNameEn: "Wuxi",
      cityNameFa: "ووزی",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  WUZ: {
    airportNameEn: "Changzhoudao",
    airportNameFa: "فرودگاه ووژو چانگشودائو",
    city: {
      cityCode: "WUZ",
      cityNameEn: "Wuzhou",
      cityNameFa: "ووژو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  WXN: {
    airportNameEn: "Wanxian",
    airportNameFa: "فرودگاه وانچو ووچیاو",
    city: {
      cityCode: "WXN",
      cityNameEn: "Wanxian",
      cityNameFa: "وانزیان",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  XEN: {
    airportNameEn: "Xingcheng",
    airportNameFa: "فرودگاه ژینگچنگ",
    city: {
      cityCode: "XEN",
      cityNameEn: "Xingcheng",
      cityNameFa: "زینگچنگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  XIC: {
    airportNameEn: "Xichang",
    airportNameFa: "فرودگاه شیچانگ قینگشان",
    city: {
      cityCode: "XIC",
      cityNameEn: "Xichang",
      cityNameFa: "زیچانگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  XIL: {
    airportNameEn: "Xilinhot",
    airportNameFa: "فرودگاه ژیلینهات",
    city: {
      cityCode: "XIL",
      cityNameEn: "Xilinhot",
      cityNameFa: "زیلینهوت",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  XIN: {
    airportNameEn: "Xingning",
    airportNameFa: "فرودگاه ژینگنینگ",
    city: {
      cityCode: "XIN",
      cityNameEn: "Xingning",
      cityNameFa: "زینگ نینگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  XMN: {
    airportNameEn: "Xiamen",
    airportNameFa: "فرودگاه بین‌المللی زیامن گائوچی",
    city: {
      cityCode: "XMN",
      cityNameEn: "Xiamen",
      cityNameFa: "زیامن",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  XNT: {
    airportNameEn: "Xingtai",
    airportNameFa: "فرودگاه شینگتای دلیان",
    city: {
      cityCode: "XNT",
      cityNameEn: "Xingtai",
      cityNameFa: "زینگ تای",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  XNN: {
    airportNameEn: "Xining",
    airportNameFa: "فرودگاه سینینگ کائوجیابو",
    city: {
      cityCode: "XNN",
      cityNameEn: "Xining",
      cityNameFa: "خینینگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  XUZ: {
    airportNameEn: "Xuzhou",
    airportNameFa: "فرودگاه سوژو گئوانئین",
    city: {
      cityCode: "XUZ",
      cityNameEn: "Xuzhou",
      cityNameFa: "زوژو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  YBP: {
    airportNameEn: "Yibin",
    airportNameFa: "فرودگاه ییبین سایبا",
    city: {
      cityCode: "YBP",
      cityNameEn: "Yibin",
      cityNameFa: "ییبین",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  YIH: {
    airportNameEn: "Yichang",
    airportNameFa: "فرودگاه ییچانگ سانگسیا",
    city: {
      cityCode: "YIH",
      cityNameEn: "Yichang",
      cityNameFa: "ییچانگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  YIN: {
    airportNameEn: "Yining",
    airportNameFa: "فرودگاه ینینگ",
    city: {
      cityCode: "YIN",
      cityNameEn: "Yining",
      cityNameFa: "یینینگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  YIW: {
    airportNameEn: "Yiwu",
    airportNameFa: "فرودگاه ایوو",
    city: {
      cityCode: "YIW",
      cityNameEn: "Yiwu",
      cityNameFa: "ییوو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  YNJ: {
    airportNameEn: "Yanji",
    airportNameFa: "فرودگاه یانجی چائویانگ‌چون",
    city: {
      cityCode: "YNJ",
      cityNameEn: "Yanji",
      cityNameFa: "یانجی",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  YNZ: {
    airportNameEn: "Yancheng",
    airportNameFa: "فرودگاه یانچنگ نانیانگ",
    city: {
      cityCode: "YNZ",
      cityNameEn: "Yancheng",
      cityNameFa: "یانچنگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  ZAT: {
    airportNameEn: "Zhaotong",
    airportNameFa: "فرودگاه ژتنگ",
    city: {
      cityCode: "ZAT",
      cityNameEn: "Zhaotong",
      cityNameFa: "ژائوتونگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  ZHA: {
    airportNameEn: "Zhanjiang",
    airportNameFa: "فرودگاه ژان‌جیانگ",
    city: {
      cityCode: "ZHA",
      cityNameEn: "Zhanjiang",
      cityNameFa: "ژانجیانگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  ZUH: {
    airportNameEn: "Zhuhai",
    airportNameFa: "فرودگاه زوهای سانزاهو",
    city: {
      cityCode: "ZUH",
      cityNameEn: "Zhuhai",
      cityNameFa: "ژوهای",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  ZYI: {
    airportNameEn: "Zunyi",
    airportNameFa: "فرودگاه زونی زینزهو",
    city: {
      cityCode: "ZYI",
      cityNameEn: "Zunyi",
      cityNameFa: "زونیی",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  YTY: {
    airportNameEn: "YANGZHOU TAIZHOU INTL",
    airportNameFa: "فرودگاه یانگجو",
    city: {
      cityCode: "YTY",
      cityNameEn: "YANGZHOU",
      cityNameFa: "یانگجو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  AAT: {
    airportNameEn: "Altay",
    airportNameFa: "فرودگاه آلتای",
    city: {
      cityCode: "AAT",
      cityNameEn: "Altay",
      cityNameFa: "التای",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  AQG: {
    airportNameEn: "Anqing",
    airportNameFa: "فرودگاه آنچینگ تیانژوشان",
    city: {
      cityCode: "AQG",
      cityNameEn: "Anqing",
      cityNameFa: "انقینگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  CGQ: {
    airportNameEn: "Changchun",
    airportNameFa: "فرودگاه بین‌المللی چانگچون لونگییا",
    city: {
      cityCode: "CGQ",
      cityNameEn: "Changchun",
      cityNameFa: "چنگچون",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  DSN: {
    airportNameEn: "Dongsheng",
    airportNameFa: "فرودگاه اوردوس ایجین هورو",
    city: {
      cityCode: "DSN",
      cityNameEn: "Dongsheng",
      cityNameFa: "دونگشنگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HAK: {
    airportNameEn: "Haikou",
    airportNameFa: "فرودگاه بین‌المللی هایکو میلان",
    city: {
      cityCode: "HAK",
      cityNameEn: "Haikou",
      cityNameFa: "هاینان-هایکو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HYN: {
    airportNameEn: "Huangyan",
    airportNameFa: "فرودگاه تایژو لوکیائو",
    city: {
      cityCode: "HYN",
      cityNameEn: "Huangyan",
      cityNameFa: "هوانگین",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  JMU: {
    airportNameEn: "Jiamusi",
    airportNameFa: "فرودگاه جیاموسی دنگجیاو",
    city: {
      cityCode: "JMU",
      cityNameEn: "Jiamusi",
      cityNameFa: "جیاموسی",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  KWE: {
    airportNameEn: "Guiyang",
    airportNameFa: "فرودگاه بین‌المللی لانگ‌دونگ‌بائو گوئی‌یانگ",
    city: {
      cityCode: "KWE",
      cityNameEn: "Guiyang",
      cityNameFa: "گوییانگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LIA: {
    airportNameEn: "Liangping",
    airportNameFa: "فرودگاه لیانگ پینگ",
    city: {
      cityCode: "LIA",
      cityNameEn: "Liangping",
      cityNameFa: "لیانگپینگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LYG: {
    airportNameEn: "Lianyungang",
    airportNameFa: "فرودگاه لیانیونگانگ بایتابو",
    city: {
      cityCode: "LYG",
      cityNameEn: "Lianyungang",
      cityNameFa: "لینیونگنگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  SHE: {
    airportNameEn: "Shenyang",
    airportNameFa: "فرودگاه بین‌المللی شنینگ تخین",
    city: {
      cityCode: "SHE",
      cityNameEn: "Shenyang",
      cityNameFa: "شنینگ",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  THQ: {
    airportNameEn: "Maijishan",
    airportNameFa: "فرودگاه میجیشن",
    city: {
      cityCode: "THQ",
      cityNameEn: "Tianshui",
      cityNameFa: "تیانشوی",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  WNZ: {
    airportNameEn: "Wenzhou",
    airportNameFa: "فرودگاه بین‌المللی ونچو یونگچیانگ",
    city: {
      cityCode: "WNZ",
      cityNameEn: "Wenzhou",
      cityNameFa: "ونژو",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  XFN: {
    airportNameEn: "Xiangfan",
    airportNameFa: "فرودگاه شیانگیانگ لیوجی",
    city: {
      cityCode: "XFN",
      cityNameEn: "Xiangfan",
      cityNameFa: "خینگفن",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  YNT: {
    airportNameEn: "Yantai",
    airportNameFa: "فرودگاه بین‌المللی یانتای لایشان",
    city: {
      cityCode: "YNT",
      cityNameEn: "Yantai",
      cityNameFa: "یانتای",
    },
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  FEA: {
    airportNameEn: "Fetlar",
    airportNameFa: "فرودگاه فتلر",
    city: {
      cityCode: "FEA",
      cityNameEn: "Fetlar",
      cityNameFa: "فتلار",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  PME: {
    airportNameEn: "Portsmouth",
    airportNameFa: "فرودگاه پرتسموت",
    city: {
      cityCode: "PME",
      cityNameEn: "Portsmouth",
      cityNameFa: "پورتسموث",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  LGW: {
    airportNameEn: "London Gatwick",
    airportNameFa: "فرودگاه گاتویک",
    city: {
      cityCode: "LON",
      cityNameEn: "London",
      cityNameFa: "لندن",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  LHR: {
    airportNameEn: "London Heathrow",
    airportNameFa: "فرودگاه هیترو لندن",
    city: {
      cityCode: "LON",
      cityNameEn: "London",
      cityNameFa: "لندن",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  QQS: {
    airportNameEn: "St Pancras railway station",
    airportNameFa: "ایستگاه راه‌آهن سینت پانکراس",
    city: {
      cityCode: "LON",
      cityNameEn: "London",
      cityNameFa: "لندن",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  STN: {
    airportNameEn: "London Stansted",
    airportNameFa: "فرودگاه استانستد لندن",
    city: {
      cityCode: "LON",
      cityNameEn: "London",
      cityNameFa: "لندن",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BQH: {
    airportNameEn: "Biggin Hill",
    airportNameFa: "فرودگاه بیگین هیل",
    city: {
      cityCode: "LON",
      cityNameEn: "London",
      cityNameFa: "لندن",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  LCY: {
    airportNameEn: "London City Airport",
    airportNameFa: "فرودگاه لندن سی‌تی",
    city: {
      cityCode: "LON",
      cityNameEn: "London",
      cityNameFa: "لندن",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  LTN: {
    airportNameEn: "Luton",
    airportNameFa: "فرودگاه لوتون",
    city: {
      cityCode: "LON",
      cityNameEn: "London",
      cityNameFa: "لندن",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  SEN: {
    airportNameEn: "London Southend",
    airportNameFa: "فرودگاه جنوبی لندن",
    city: {
      cityCode: "LON",
      cityNameEn: "London",
      cityNameFa: "لندن",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  XQE: {
    airportNameEn: "Ebbsfleet International railway station",
    airportNameFa: "ایستگاه راه‌آهن بین‌المللی ابسفلیت",
    city: {
      cityCode: "LON",
      cityNameEn: "London",
      cityNameFa: "لندن",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  QQU: {
    airportNameEn: "Euston railway station",
    airportNameFa: "ایستگاه راه‌آهن یوستون",
    city: {
      cityCode: "LON",
      cityNameEn: "London",
      cityNameFa: "لندن",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  QQK: {
    airportNameEn: "King's Cross railway station",
    airportNameFa: "ایستگاه راه‌آهن کینگز کراس",
    city: {
      cityCode: "LON",
      cityNameEn: "London",
      cityNameFa: "لندن",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  ZLS: {
    airportNameEn: "Liverpool Street Station",
    airportNameFa: "ایستگاه راه‌آهن خیابان لیورپول",
    city: {
      cityCode: "LON",
      cityNameEn: "London",
      cityNameFa: "لندن",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  QQP: {
    airportNameEn: "Paddington railway station",
    airportNameFa: "ایستگاه راه‌آهن پدینگتون",
    city: {
      cityCode: "LON",
      cityNameEn: "London",
      cityNameFa: "لندن",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  ZEP: {
    airportNameEn: "Victoria station",
    airportNameFa: "ایستگاه راه‌آهن ویکتوریا",
    city: {
      cityCode: "LON",
      cityNameEn: "London",
      cityNameFa: "لندن",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  QQW: {
    airportNameEn: "Waterloo International railway station",
    airportNameFa: "ایستگاه راه‌آهن واترلو",
    city: {
      cityCode: "LON",
      cityNameEn: "London",
      cityNameFa: "لندن",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  EMA: {
    airportNameEn: "East Midlands",
    airportNameFa: "فرودگاه ایست میدلند",
    city: {
      cityCode: "NQT",
      cityNameEn: "Derby - Uk",
      cityNameFa: "دربی",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  LBA: {
    airportNameEn: "Leeds/Bradford",
    airportNameFa: "فرودگاه بین‌المللی لیدز برادفورد",
    city: {
      cityCode: "LBA",
      cityNameEn: "Leeds",
      cityNameFa: "لیدز",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BHD: {
    airportNameEn: "George Best Belfast City",
    airportNameFa: "فرودگاه جورج بست بلفاست",
    city: {
      cityCode: "BFS",
      cityNameEn: "Belfast",
      cityNameFa: "بلفاست",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BFS: {
    airportNameEn: "Aldergrove Intl. Arpt.",
    airportNameFa: "فرودگاه بین‌المللی بلفاست",
    city: {
      cityCode: "BFS",
      cityNameEn: "Belfast",
      cityNameFa: "بلفاست",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BZZ: {
    airportNameEn: "Raf Brize Norton",
    airportNameFa: "فرودگاه ریتز نورتون",
    city: {
      cityCode: "OXF",
      cityNameEn: "Oxford",
      cityNameFa: "آکسفورد",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  OXF: {
    airportNameEn: "Oxford",
    airportNameFa: "فرودگاه آکسفورد لندن",
    city: {
      cityCode: "OXF",
      cityNameEn: "Oxford",
      cityNameFa: "آکسفورد",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  GLA: {
    airportNameEn: "Glasgow",
    airportNameFa: "فرودگاه گلاسکو",
    city: {
      cityCode: "GLA",
      cityNameEn: "Glasgow",
      cityNameFa: "گلاسکو",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  ZGG: {
    airportNameEn: "Glasgow Central station",
    airportNameFa: "ایستگاه راه‌آهن مرکزی گلاسگو",
    city: {
      cityCode: "GLA",
      cityNameEn: "Glasgow",
      cityNameFa: "گلاسکو",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  PIK: {
    airportNameEn: "Prestwick",
    airportNameFa: "فرودگاه گلاسگو پرستویک",
    city: {
      cityCode: "GLA",
      cityNameEn: "Glasgow",
      cityNameFa: "گلاسکو",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  LSI: {
    airportNameEn: "Sumburgh",
    airportNameFa: "فرودگاه سومبرگ",
    city: {
      cityCode: "LSI",
      cityNameEn: "Lerwick",
      cityNameFa: "لرویک",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  LWK: {
    airportNameEn: "Lerwick/Tingwall",
    airportNameFa: "فرودگاه تینگوال",
    city: {
      cityCode: "LSI",
      cityNameEn: "Lerwick",
      cityNameFa: "لرویک",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  HYC: {
    airportNameEn: "High Wycombe",
    airportNameFa: "فرودگاه ر.ای.اف های وایکام",
    city: {
      cityCode: "HYC",
      cityNameEn: "High Wycombe",
      cityNameFa: "های وایکام",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  ACI: {
    airportNameEn: "The Blaye",
    airportNameFa: "فرودگاه الدرنی",
    city: {
      cityCode: "ACI",
      cityNameEn: "Alderney",
      cityNameFa: "الدرنی",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BBP: {
    airportNameEn: "Bembridge",
    airportNameFa: "فرودگاه بمبریج",
    city: {
      cityCode: "BBP",
      cityNameEn: "Bembridge",
      cityNameFa: "بمبریدگ",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BBS: {
    airportNameEn: "Blackbushe",
    airportNameFa: "فرودگاه بلکبوشه",
    city: {
      cityCode: "BBS",
      cityNameEn: "Yateley",
      cityNameFa: "یاتلی",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BDF: {
    airportNameEn: "Rinkenberger",
    airportNameFa: "فرودگاه رینکنبرگر",
    city: {
      cityCode: "BDF",
      cityNameEn: "Bradford",
      cityNameFa: "بردفورد",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BEB: {
    airportNameEn: "Benbecula",
    airportNameFa: "فرودگاه بنبکولا",
    city: {
      cityCode: "BEB",
      cityNameEn: "Benbecula",
      cityNameFa: "بنبکولا",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BEQ: {
    airportNameEn: "Honington",
    airportNameFa: "فرودگاه نیروی هوایی سلطنتی هانینگتون",
    city: {
      cityCode: "BEQ",
      cityNameEn: "Bury St Edmunds",
      cityNameFa: "سنت ادموندز را دفن کنید",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BFD: {
    airportNameEn: "Bradford",
    airportNameFa: "فرودگاه برادفورد",
    city: {
      cityCode: "BFD",
      cityNameEn: "Bradford",
      cityNameFa: "بردفورد",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BFR: {
    airportNameEn: "Virgil I Grissom Muni",
    airportNameFa: "فرودگاه ویرژیل ای گریسوم مونی",
    city: {
      cityCode: "BFR",
      cityNameEn: "Bedford",
      cityNameFa: "بدفورد",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BHX: {
    airportNameEn: "Birmingham Intl. Arpt.",
    airportNameFa: "فرودگاه بیرمنگام",
    city: {
      cityCode: "BHX",
      cityNameEn: "Birmingham",
      cityNameFa: "بیرمنگام",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  QQN: {
    airportNameEn: "Birmingham New Street railway station",
    airportNameFa: "ایستگاه راه‌آهن نیو استریت بیرمنگام",
    city: {
      cityCode: "BHX",
      cityNameEn: "Birmingham",
      cityNameFa: "بیرمنگام",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BLK: {
    airportNameEn: "Blackpool Arpt.",
    airportNameFa: "فرودگاه بین‌المللی بلکپول",
    city: {
      cityCode: "BLK",
      cityNameEn: "Blackpool",
      cityNameFa: "بلکپول",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BOH: {
    airportNameEn: "Bournemouth Intl.",
    airportNameFa: "فرودگاه بورنموث (هرن)",
    city: {
      cityCode: "BOH",
      cityNameEn: "Bournemouth",
      cityNameFa: "بورنموث",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BOL: {
    airportNameEn: "Bally Kelly",
    airportNameFa: "فرودگاه بالی کلی",
    city: {
      cityCode: "BOL",
      cityNameEn: "Bally Kelly",
      cityNameFa: "بالی کلی",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BRS: {
    airportNameEn: "Bristol",
    airportNameFa: "فرودگاه بریستول",
    city: {
      cityCode: "BRS",
      cityNameEn: "Bristol",
      cityNameFa: "بریستول",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BWF: {
    airportNameEn: "Walney Island",
    airportNameFa: "فرودگاه باروو/والنی آیلند",
    city: {
      cityCode: "BWF",
      cityNameEn: "Barrow-In-Furness",
      cityNameFa: "بارو-این-فرنس",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  CAL: {
    airportNameEn: "Machrihanish",
    airportNameFa: "فرودگاه کمبلتاون (آر ای اف مکریهانریش)",
    city: {
      cityCode: "CAL",
      cityNameEn: "Campbeltown",
      cityNameFa: "کمپبلتون",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  CAX: {
    airportNameEn: "Carlisle",
    airportNameFa: "فرودگاه منطقه کارلایل لیک",
    city: {
      cityCode: "CAX",
      cityNameEn: "Carlisle",
      cityNameFa: "کارلایل",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  CBG: {
    airportNameEn: "Cambridge",
    airportNameFa: "فرودگاه کمبریج",
    city: {
      cityCode: "CBG",
      cityNameEn: "Cambridge",
      cityNameFa: "کمبریج",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  CEG: {
    airportNameEn: "Chester",
    airportNameFa: "فرودگاه هاواردن (چستر)",
    city: {
      cityCode: "CEG",
      cityNameEn: "Chester",
      cityNameFa: "چستر",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  COL: {
    airportNameEn: "Isle Of Coll",
    airportNameFa: "فرودگاه کول",
    city: {
      cityCode: "COL",
      cityNameEn: "Isle Of Coll",
      cityNameFa: "جزیره کول",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  CSA: {
    airportNameEn: "Isle Of Colonsay",
    airportNameFa: "فرودگاه کولونسای",
    city: {
      cityCode: "CSA",
      cityNameEn: "Isle Of Colonsay",
      cityNameFa: "ایسله آف کلنسی",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  CVT: {
    airportNameEn: "West Midlands Intl.",
    airportNameFa: "فرودگاه کاونتری",
    city: {
      cityCode: "CVT",
      cityNameEn: "Coventry",
      cityNameFa: "کاونتری",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  CWL: {
    airportNameEn: "Cardiff",
    airportNameFa: "فرودگاه کاردیف",
    city: {
      cityCode: "CWL",
      cityNameEn: "Cardiff",
      cityNameFa: "کاردیف",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  DND: {
    airportNameEn: "Dundee",
    airportNameFa: "فرودگاه داندی",
    city: {
      cityCode: "DND",
      cityNameEn: "Dundee",
      cityNameFa: "داندی",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  ZDU: {
    airportNameEn: "Dundee railway station",
    airportNameFa: "ایستگاه راه‌آهن داندی",
    city: {
      cityCode: "DND",
      cityNameEn: "Dundee",
      cityNameFa: "داندی",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  DOC: {
    airportNameEn: "Dornoch",
    airportNameFa: "فرودگاه دورنوچ",
    city: {
      cityCode: "DOC",
      cityNameEn: "Dornoch",
      cityNameFa: "دورنوچ",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  EDI: {
    airportNameEn: "Turnhouse",
    airportNameFa: "فرودگاه ادینبرو",
    city: {
      cityCode: "EDI",
      cityNameEn: "Edinburgh",
      cityNameFa: "ادینبورگ",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  ZXE: {
    airportNameEn: "Edinburgh Waverley railway station",
    airportNameFa: "ایستگاه راه‌آهن ادینبورو ویورلی",
    city: {
      cityCode: "EDI",
      cityNameEn: "Edinburgh",
      cityNameFa: "ادینبورگ",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  ENK: {
    airportNameEn: "Enniskillen St. Angelo",
    airportNameFa: "فرودگاه انیسکیلنسنت آنجلو",
    city: {
      cityCode: "ENK",
      cityNameEn: "Enniskillen",
      cityNameFa: "انیسکیلن",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  EOI: {
    airportNameEn: "Eday",
    airportNameFa: "فرودگاه اروز",
    city: {
      cityCode: "EOI",
      cityNameEn: "Eday",
      cityNameFa: "ادی",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  ESH: {
    airportNameEn: "Shoreham",
    airportNameFa: "فرودگاه شوهام",
    city: {
      cityCode: "ESH",
      cityNameEn: "Shoreham By Sea",
      cityNameFa: "شورهام بای سی",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  EXT: {
    airportNameEn: "Exeter",
    airportNameFa: "فرودگاه بین‌المللی اکستر",
    city: {
      cityCode: "EXT",
      cityNameEn: "Exeter",
      cityNameFa: "اکستر",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  FAB: {
    airportNameEn: "Farnborough",
    airportNameFa: "فرودگاه فارنبورو",
    city: {
      cityCode: "FAB",
      cityNameEn: "Farnborough",
      cityNameFa: "فارنبرو",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  FIE: {
    airportNameEn: "Fair Isle",
    airportNameFa: "فرودگاه فیرآیل",
    city: {
      cityCode: "FIE",
      cityNameEn: "Fair Isle",
      cityNameFa: "جزیره زیبا",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  FLH: {
    airportNameEn: "Flotta",
    airportNameFa: "فرودگاه فلوتا آیسل",
    city: {
      cityCode: "FLH",
      cityNameEn: "Flotta",
      cityNameFa: "فلوتا",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  FOA: {
    airportNameEn: "Foula",
    airportNameFa: "فرودگاه فولا",
    city: {
      cityCode: "FOA",
      cityNameEn: "Foula",
      cityNameFa: "فولا",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  FSS: {
    airportNameEn: "Kinloss",
    airportNameFa: "فرودگاه نیروی هوایی سلطنتی کینلاس",
    city: {
      cityCode: "FSS",
      cityNameEn: "Forres",
      cityNameFa: "فورس",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  FZO: {
    airportNameEn: "Filton",
    airportNameFa: "فرودگاه بریستول",
    city: {
      cityCode: "FZO",
      cityNameEn: "Bristol",
      cityNameFa: "بریستول",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  GCI: {
    airportNameEn: "Guernsey",
    airportNameFa: "فرودگاه گوئرنزی",
    city: {
      cityCode: "GCI",
      cityNameEn: "Guernsey",
      cityNameFa: "گرنزی",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  GLO: {
    airportNameEn: "Gloucestershire",
    airportNameFa: "فرودگاه گلاستر",
    city: {
      cityCode: "GLO",
      cityNameEn: "Gloucester",
      cityNameFa: "گلاستر",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  HAW: {
    airportNameEn: "Haverfordwest",
    airportNameFa: "فرودگاه هاورفردوست",
    city: {
      cityCode: "HAW",
      cityNameEn: "Haverfordwest",
      cityNameFa: "هاورفوردوست",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  HOY: {
    airportNameEn: "Hoy Island",
    airportNameFa: "فرودگاه هوی",
    city: {
      cityCode: "HOY",
      cityNameEn: "Hoy Island",
      cityNameFa: "جزیره هوی",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  ILY: {
    airportNameEn: "Glenegedale",
    airportNameFa: "فرودگاه ایسلی (گلنگدال)",
    city: {
      cityCode: "ILY",
      cityNameEn: "Islay",
      cityNameFa: "ایسلای",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  INV: {
    airportNameEn: "Inverness",
    airportNameFa: "فرودگاه اینورنس",
    city: {
      cityCode: "INV",
      cityNameEn: "Inverness",
      cityNameFa: "اینورنس",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  ZIV: {
    airportNameEn: "Inverness railway station",
    airportNameFa: "ایستگاه راه‌آهن اینورنس",
    city: {
      cityCode: "INV",
      cityNameEn: "Inverness",
      cityNameFa: "اینورنس",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  IOM: {
    airportNameEn: "Ronaldsway",
    airportNameFa: "فرودگاه رونالدزمن",
    city: {
      cityCode: "IOM",
      cityNameEn: "Isle Of Man",
      cityNameFa: "جزیره من",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  ISC: {
    airportNameEn: "St Marys",
    airportNameFa: "فرودگاه سنت مری (جزیره سیسیلی)",
    city: {
      cityCode: "ISC",
      cityNameEn: "Isles Of Scilly",
      cityNameFa: "جزایر اسکیلی",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  JER: {
    airportNameEn: "Jersey",
    airportNameFa: "فرودگاه جرسی",
    city: {
      cityCode: "JER",
      cityNameEn: "Jersey",
      cityNameFa: "جرسی",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  KNF: {
    airportNameEn: "Marham Raf",
    airportNameFa: "فرودگاه نیروی هوایی سلطنتی مارهام",
    city: {
      cityCode: "KNF",
      cityNameEn: "Kings Lynn",
      cityNameFa: "کینگز لین",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  KOI: {
    airportNameEn: "Orkney Island",
    airportNameFa: "فرودگاه کرکوال",
    city: {
      cityCode: "KOI",
      cityNameEn: "Kirkwall",
      cityNameFa: "کرکوال",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  PZE: {
    airportNameEn: "Penzance",
    airportNameFa: "فرودگاه پنزنک",
    city: {
      cityCode: "PZE",
      cityNameEn: "Penzance",
      cityNameFa: "پنزانس",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  LEQ: {
    airportNameEn: "Lands End",
    airportNameFa: "فرودگاه لاندس اند",
    city: {
      cityCode: "LEQ",
      cityNameEn: "Lands End",
      cityNameFa: "زمین پایان",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  LKZ: {
    airportNameEn: "Lakenheath Raf",
    airportNameFa: "فرودگاه نیروی هوایی سلطنتی لیکن‌هیث",
    city: {
      cityCode: "LKZ",
      cityNameEn: "Brandon",
      cityNameFa: "براندون",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  LPL: {
    airportNameEn: "Liverpool John Lennon",
    airportNameFa: "فرودگاه جان لنون لیورپول",
    city: {
      cityCode: "LPL",
      cityNameEn: "Liverpool",
      cityNameFa: "لیورپول",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  LVM: {
    airportNameEn: "Mission Field",
    airportNameFa: "فرودگاه مشن فیلد",
    city: {
      cityCode: "LVM",
      cityNameEn: "Livingston",
      cityNameFa: "لیوینگستون",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  MAN: {
    airportNameEn: "Manchester",
    airportNameFa: "فرودگاه منچستر",
    city: {
      cityCode: "MAN",
      cityNameEn: "Manchester",
      cityNameFa: "منچستر",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  QQM: {
    airportNameEn: "Manchester Piccadilly station",
    airportNameFa: "ایستگاه راه‌آهن پیکدلی منچستر",
    city: {
      cityCode: "MAN",
      cityNameEn: "Manchester",
      cityNameFa: "منچستر",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  MHZ: {
    airportNameEn: "Mildenhall Arpt",
    airportNameFa: "فرودگاه نیروی هوایی سلطنتی میلدنهال",
    city: {
      cityCode: "MHZ",
      cityNameEn: "Mildenhall",
      cityNameFa: "میلدنهال",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  MME: {
    airportNameEn: "Durham Tees Valley",
    airportNameFa: "فرودگاه درم تیز ولی",
    city: {
      cityCode: "MME",
      cityNameEn: "Teesside, Durham",
      cityNameFa: "تیسیده ، دورهام",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  MSE: {
    airportNameEn: "Kent Intl.",
    airportNameFa: "فرودگاه بین‌المللی کنت",
    city: {
      cityCode: "MSE",
      cityNameEn: "Manston",
      cityNameFa: "منستون",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  NCL: {
    airportNameEn: "Newcastle Arpt.",
    airportNameFa: "فرودگاه نیوکاسل",
    city: {
      cityCode: "NCL",
      cityNameEn: "Newcastle",
      cityNameFa: "نیوکاسل",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  NDY: {
    airportNameEn: "Sanday",
    airportNameFa: "فرودگاه سندی",
    city: {
      cityCode: "NDY",
      cityNameEn: "Sanday",
      cityNameFa: "سندی",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  NHT: {
    airportNameEn: "Northolt",
    airportNameFa: "فرودگاه نیروی هوایی سلطنتی نورثولت",
    city: {
      cityCode: "NHT",
      cityNameEn: "Northolt",
      cityNameFa: "نورتولت",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  NPT: {
    airportNameEn: "State",
    airportNameFa: "فرودگاه استیت",
    city: {
      cityCode: "NPT",
      cityNameEn: "Newport",
      cityNameFa: "نیوپورت",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  NQY: {
    airportNameEn: "Newquay Cornwall Arpt.",
    airportNameFa: "فرودگاه نیوکوئی کورنوال",
    city: {
      cityCode: "NQY",
      cityNameEn: "Newquay",
      cityNameFa: "نیوکوئی",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  NRL: {
    airportNameEn: "North Ronaldsay",
    airportNameFa: "فرودگاه رونالدسی شمالی",
    city: {
      cityCode: "NRL",
      cityNameEn: "North Ronaldsay",
      cityNameFa: "رونالدی شمالی",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  NWI: {
    airportNameEn: "Norwich Intl. Arpt.",
    airportNameFa: "فرودگاه بین‌المللی نورویچ",
    city: {
      cityCode: "NWI",
      cityNameEn: "Norwich",
      cityNameFa: "نورویچ",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  OBN: {
    airportNameEn: "Oban Arpt.",
    airportNameFa: "فرودگاه اوبان",
    city: {
      cityCode: "OBN",
      cityNameEn: "Oban",
      cityNameFa: "اوبان",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  PPW: {
    airportNameEn: "Papa Westray",
    airportNameFa: "فرودگاه پاپا وستری",
    city: {
      cityCode: "PPW",
      cityNameEn: "Papa Westray",
      cityNameFa: "پاپا وستری",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  PSL: {
    airportNameEn: "Perth",
    airportNameFa: "فرودگاه پرث، اسکاتلند",
    city: {
      cityCode: "PSL",
      cityNameEn: "Perth (UK)",
      cityNameFa: "پرت (بریتانیا)",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  QUG: {
    airportNameEn: "Goodwood",
    airportNameFa: "فرودگاه گودوود",
    city: {
      cityCode: "QUG",
      cityNameEn: "Chichester",
      cityNameFa: "چیچستر",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  RCS: {
    airportNameEn: "Rochester",
    airportNameFa: "فرودگاه روچستر (انگلستان)",
    city: {
      cityCode: "RCS",
      cityNameEn: "Rochester",
      cityNameFa: "روچستر",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  SCS: {
    airportNameEn: "Scatsta",
    airportNameFa: "فرودگاه سکتستا",
    city: {
      cityCode: "SDZ",
      cityNameEn: "Lerwick",
      cityNameFa: "لرویک",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  SKL: {
    airportNameEn: "Broadford",
    airportNameFa: "فرودگاه برود فورد",
    city: {
      cityCode: "SKL",
      cityNameEn: "Isle Of Skye",
      cityNameFa: "جزیره اسکای",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  SOU: {
    airportNameEn: "Southampton Arpt.",
    airportNameFa: "فرودگاه ساوت‌همپتون",
    city: {
      cityCode: "SOU",
      cityNameEn: "Southampton",
      cityNameFa: "ساوتهمپتون",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  SOY: {
    airportNameEn: "Stronsay",
    airportNameFa: "فرودگاه استرونسی",
    city: {
      cityCode: "SOY",
      cityNameEn: "Stronsay",
      cityNameFa: "استرونسی",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  SWS: {
    airportNameEn: "Fairwood Comm",
    airportNameFa: "فرودگاه سوانزی",
    city: {
      cityCode: "SWS",
      cityNameEn: "Swansea",
      cityNameFa: "سونسی",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  SYY: {
    airportNameEn: "Stornoway",
    airportNameFa: "فرودگاه استورنووی",
    city: {
      cityCode: "SYY",
      cityNameEn: "Stornoway",
      cityNameFa: "استورنووی",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  TRE: {
    airportNameEn: "Tiree",
    airportNameFa: "فرودگاه تایری",
    city: {
      cityCode: "TRE",
      cityNameEn: "Tiree",
      cityNameFa: "تیری",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  ULL: {
    airportNameEn: "Mull",
    airportNameFa: "فرودگاه مول",
    city: {
      cityCode: "ULL",
      cityNameEn: "Mull",
      cityNameFa: "مول",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  UNT: {
    airportNameEn: "Baltasound",
    airportNameFa: "فرودگاه بالتاسوند",
    city: {
      cityCode: "UNT",
      cityNameEn: "Unst Shetland Is",
      cityNameFa: "آنتشتلند",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  UPV: {
    airportNameEn: "Upavon",
    airportNameFa: "فرودگاه یوپون",
    city: {
      cityCode: "UPV",
      cityNameEn: "Upavon",
      cityNameFa: "آپاوون",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  WHS: {
    airportNameEn: "Whalsay",
    airportNameFa: "فرودگاه وهلسی",
    city: {
      cityCode: "WHS",
      cityNameEn: "Whalsay",
      cityNameFa: "والسی",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  WRY: {
    airportNameEn: "Westray",
    airportNameFa: "فرودگاه وستری",
    city: {
      cityCode: "WRY",
      cityNameEn: "Westray",
      cityNameFa: "وستری",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  WXF: {
    airportNameEn: "Weathersfield Raf",
    airportNameFa: "فرودگاه صحرایی ودرز",
    city: {
      cityCode: "WXF",
      cityNameEn: "Braintree",
      cityNameFa: "برینتری",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  YEO: {
    airportNameEn: "Yeovilton",
    airportNameFa: "مرکز نیروی هوایی نیوزیلند در یویلتون",
    city: {
      cityCode: "YEO",
      cityNameEn: "Yeovilton",
      cityNameFa: "یوویلتون",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  ZXA: {
    airportNameEn: "Aberdeen railway station",
    airportNameFa: "ایستگاه راه‌آهن ابردین",
    city: {
      cityCode: "ABZ",
      cityNameEn: "Aberdeen",
      cityNameFa: "آبردین",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  ABZ: {
    airportNameEn: "Dyce",
    airportNameFa: "فرودگاه آبردین",
    city: {
      cityCode: "ABZ",
      cityNameEn: "Aberdeen",
      cityNameFa: "آبردین",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  QDH: {
    airportNameEn: "Ashford International railway station",
    airportNameFa: "ایستگاه راه‌آهن بین‌المللی اشفورد",
    city: {
      cityCode: "QDH",
      cityNameEn: "Ashford",
      cityNameFa: "اشفورد",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  XQT: {
    airportNameEn: "Lichfield Trent Valley railway station",
    airportNameFa: "ایستگاه راه‌آهن ترنت ولی لیچیفیلد",
    city: {
      cityCode: "XQT",
      cityNameEn: "Lichfield",
      cityNameFa: "لیچیفیلد",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  XRG: {
    airportNameEn: "Rugeley Trent Valley railway station",
    airportNameFa: "ایستگاه راه‌آهن روگلی",
    city: {
      cityCode: "XRG",
      cityNameEn: "Rugeley",
      cityNameFa: "روگلی",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  TTK: {
    airportNameEn: "Tottenham Hale station",
    airportNameFa: "ایستگاه راه‌آهن تاتنهام",
    city: {
      cityCode: "TTK",
      cityNameEn: "Tottenham",
      cityNameFa: "تاتنهام",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  QQY: {
    airportNameEn: "York railway station",
    airportNameFa: "ایستگاه راه‌آهن یورک",
    city: {
      cityCode: "QQY",
      cityNameEn: "York",
      cityNameFa: "یورک",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  ADX: {
    airportNameEn: "Leuchars",
    airportNameFa: "فرودگاه نیروی هوایی سلطنتی لوچارس",
    city: {
      cityCode: "ADX",
      cityNameEn: "St Andrews",
      cityNameFa: "سنت اندرئوس",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BRR: {
    airportNameEn: "North Bay",
    airportNameFa: "فرودگاه اسکاتلند، بارا (نورثبی)",
    city: {
      cityCode: "BRR",
      cityNameEn: "Barra",
      cityNameFa: "باررا",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  DSA: {
    airportNameEn: "Robin Hood",
    airportNameFa: "فرودگاه دونکاستر شفیلد رابین هود",
    city: {
      cityCode: "DSA",
      cityNameEn: "Doncaster Sheffield",
      cityNameFa: "دانکاستر شفیلد",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  HUY: {
    airportNameEn: "Humberside Intl.",
    airportNameFa: "فرودگاه هامبرساید",
    city: {
      cityCode: "HUY",
      cityNameEn: "Humberside",
      cityNameFa: "هومبرسید",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  LDY: {
    airportNameEn: "Eglinton",
    airportNameFa: "فرودگاه دری (لانداندری اگلینتون)-ایرلند شمالی",
    city: {
      cityCode: "LDY",
      cityNameEn: "Derry",
      cityNameFa: "دری",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  PLH: {
    airportNameEn: "Plymouth",
    airportNameFa: "فرودگاه پلیموث سیتی(closed 2011)",
    city: {
      cityCode: "PLH",
      cityNameEn: "Plymouth",
      cityNameFa: "پلیموت",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  WIC: {
    airportNameEn: "Wick",
    airportNameFa: "فرودگاه ویک",
    city: {
      cityCode: "WIC",
      cityNameEn: "Wick",
      cityNameFa: "فیتیله",
    },
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  AGE: {
    airportNameEn: "Flugplatz",
    airportNameFa: "فرودگاه وانگروگه",
    city: {
      cityCode: "AGE",
      cityNameEn: "Wangerooge",
      cityNameFa: "ونگروگ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  EIB: {
    airportNameEn: "Eisenach",
    airportNameFa: "فرودگاه ایسناچ",
    city: {
      cityCode: "EIB",
      cityNameEn: "Eisenach",
      cityNameFa: "آیزناخ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  QUL: {
    airportNameEn: "HBF RAILWAY STATION",
    airportNameFa: "ایستگاه راه‌آهن مرکزی برلین",
    city: {
      cityCode: "QUL",
      cityNameEn: "Baden-Württemberg",
      cityNameFa: "بادن-وورتمبرگ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  FRA: {
    airportNameEn: "Frankfurt Intl",
    airportNameFa: "فرودگاه بین‌المللی فرانکفورت",
    city: {
      cityCode: "FRA",
      cityNameEn: "Frankfurt",
      cityNameFa: "فرانکفورت",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  HHN: {
    airportNameEn: "Frankfurt-Hahn",
    airportNameFa: "فرودگاه فرانکفورت-هان",
    city: {
      cityCode: "FRA",
      cityNameEn: "Frankfurt",
      cityNameFa: "فرانکفورت",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  ZRB: {
    airportNameEn: "Frankfurt (Main) Hauptbahnhof",
    airportNameFa: "ایستگاه راه‌آهن مرکزی فرانکفورت",
    city: {
      cityCode: "FRA",
      cityNameEn: "Frankfurt",
      cityNameFa: "فرانکفورت",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  HAM: {
    airportNameEn: "Hamburg Arpt.",
    airportNameFa: "فرودگاه هامبورگ (فاهلسباتل) ",
    city: {
      cityCode: "HAM",
      cityNameEn: "Hamburg",
      cityNameFa: "هامبورگ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  LBC: {
    airportNameEn: "Luebeck-Blankensee",
    airportNameFa: "فرودگاه لوبک ‌بلنکنسی",
    city: {
      cityCode: "HAM",
      cityNameEn: "Hamburg",
      cityNameFa: "هامبورگ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  XFW: {
    airportNameEn: "Finkenwerder",
    airportNameFa: "فرودگاه هامبورگ فینکن‌وردر",
    city: {
      cityCode: "HAM",
      cityNameEn: "Hamburg",
      cityNameFa: "هامبورگ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  ZMB: {
    airportNameEn: "HBF RAILWAY STATION",
    airportNameFa: "ایستگاه قطار هامبورگ",
    city: {
      cityCode: "HAM",
      cityNameEn: "Hamburg",
      cityNameFa: "هامبورگ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  DUS: {
    airportNameEn: "Dusseldorf",
    airportNameFa: "فرودگاه دوسلدورف",
    city: {
      cityCode: "DUS",
      cityNameEn: "Dusseldorf",
      cityNameFa: "دوسلدورف",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  MGL: {
    airportNameEn: "Moenchen-Gl. - Dus Exp",
    airportNameFa: "فرودگاه مونشنگلادباخ",
    city: {
      cityCode: "DUS",
      cityNameEn: "Dusseldorf",
      cityNameFa: "دوسلدورف",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  NRN: {
    airportNameEn: "Weeze",
    airportNameFa: "فرودگاه ویز",
    city: {
      cityCode: "DUS",
      cityNameEn: "Dusseldorf",
      cityNameFa: "دوسلدورف",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  QDU: {
    airportNameEn: "Dusseldorf Central Railway Station",
    airportNameFa: "ایستگاه مرکزی قطار دوسلدورف",
    city: {
      cityCode: "DUS",
      cityNameEn: "Dusseldorf",
      cityNameFa: "دوسلدورف",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  MUC: {
    airportNameEn: "Franz Josef Strauss",
    airportNameFa: "فرودگاه مونیخ (مونیخ-ریم)",
    city: {
      cityCode: "MUC",
      cityNameEn: "Munich",
      cityNameFa: "مونیخ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  AGB: {
    airportNameEn: "Augsburg  Muehlhausen",
    airportNameFa: "فرودگاه آوگسبورگ",
    city: {
      cityCode: "MUC",
      cityNameEn: "Munich",
      cityNameFa: "مونیخ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  ZMU: {
    airportNameEn: "Munchen Hauptbahnhof",
    airportNameFa: "ایستگاه راه‌آهن مونیخ",
    city: {
      cityCode: "MUC",
      cityNameEn: "Munich",
      cityNameFa: "مونیخ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  AGY: {
    airportNameEn: "AUGSBURG HBF RAIL STN",
    airportNameFa: "ایستگاه راه‌آهن مرکزی برلین",
    city: {
      cityCode: "MUC",
      cityNameEn: "Munich",
      cityNameFa: "مونیخ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  TXL: {
    airportNameEn: "Berlin Tegel Airport",
    airportNameFa: "فرودگاه برلین تگل",
    city: {
      cityCode: "BER",
      cityNameEn: "Berlin",
      cityNameFa: "برلین",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  SXF: {
    airportNameEn: "Berlin Schonefeld Airport",
    airportNameFa: "فرودگاه برلین شونفلد",
    city: {
      cityCode: "BER",
      cityNameEn: "Berlin",
      cityNameFa: "برلین",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  BER: {
    airportNameEn: "Berlin Brandenburg Airport",
    airportNameFa: "فرودگاه براندنبورگ برلین",
    city: {
      cityCode: "BER",
      cityNameEn: "Berlin",
      cityNameFa: "برلین",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  QPP: {
    airportNameEn: "Hbf Railway Station",
    airportNameFa: "ایستگاه قطار برلین",
    city: {
      cityCode: "BER",
      cityNameEn: "Berlin",
      cityNameFa: "برلین",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  CGN: {
    airportNameEn: "Cologne Bonn",
    airportNameFa: "فرودگاه کلن بن",
    city: {
      cityCode: "CGN",
      cityNameEn: "Cologne",
      cityNameFa: "کلن",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  QKL: {
    airportNameEn: "Cologne Bonn",
    airportNameFa: "ایستگاه قطار کلن",
    city: {
      cityCode: "CGN",
      cityNameEn: "Cologne",
      cityNameFa: "کلن",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  BNJ: {
    airportNameEn: "Bonn hauptbahnhof",
    airportNameFa: "ایستگاه  مرکزی راه‌آهن بن",
    city: {
      cityCode: "CGN",
      cityNameEn: "Cologne",
      cityNameFa: "کلن",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  FCN: {
    airportNameEn: "Cuxhaven/Nordholz",
    airportNameFa: "فرودگاه فلیگرهورست نوردهولز",
    city: {
      cityCode: "FCN",
      cityNameEn: "Cuxhaven",
      cityNameFa: "کوکسهاون",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  IES: {
    airportNameEn: "Goehlis",
    airportNameFa: "فرودگاه Goehlis",
    city: {
      cityCode: "IES",
      cityNameEn: "Riesa",
      cityNameFa: "ریزا",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  KOQ: {
    airportNameEn: "Koethen",
    airportNameFa: "فرودگاه کوتن",
    city: {
      cityCode: "KOQ",
      cityNameEn: "Koethen",
      cityNameFa: "کوصن",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  BBH: {
    airportNameEn: "Barth",
    airportNameFa: "فرودگاه استرالساند بارث",
    city: {
      cityCode: "BBH",
      cityNameEn: "Barth",
      cityNameFa: "بارت",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  BBJ: {
    airportNameEn: "Bitburg Air Base",
    airportNameFa: "فرودگاه بیتبورگ (بیتبرگ ایر بیس) ",
    city: {
      cityCode: "BBJ",
      cityNameEn: "Bitburg",
      cityNameFa: "بیتبورگ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  BFE: {
    airportNameEn: "Bielefeld",
    airportNameFa: "فرودگاه بیله فلد",
    city: {
      cityCode: "BFE",
      cityNameEn: "Bielefeld",
      cityNameFa: "بیلفلد",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  BGN: {
    airportNameEn: "R.A.F.",
    airportNameFa: "فرودگاه نیروی هوایی سلطنتی بروگن",
    city: {
      cityCode: "BGN",
      cityNameEn: "Brueggen",
      cityNameFa: "بروگن",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  BMK: {
    airportNameEn: "Borkum",
    airportNameFa: "فرودگاه صحرایی برکوم",
    city: {
      cityCode: "BMK",
      cityNameEn: "Borkum",
      cityNameFa: "برکوم",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  BMR: {
    airportNameEn: "Baltrum",
    airportNameFa: "فرودگاه بلتروم",
    city: {
      cityCode: "BMR",
      cityNameEn: "Baltrum Island",
      cityNameFa: "جزیره بالتروم",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  BRE: {
    airportNameEn: "Bremen",
    airportNameFa: "فرودگاه برمن",
    city: {
      cityCode: "BRE",
      cityNameEn: "Bremen",
      cityNameFa: "برمن",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  DHC: {
    airportNameEn: "BREMEN HBF RAILWAY STATION",
    airportNameFa: "ایستگاه قطار برمن",
    city: {
      cityCode: "BRE",
      cityNameEn: "Bremen",
      cityNameFa: "برمن",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  BRV: {
    airportNameEn: "Bremerhaven",
    airportNameFa: "فرودگاه برمرهافن",
    city: {
      cityCode: "BRV",
      cityNameEn: "Bremerhaven",
      cityNameFa: "برمرهافن",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  BWE: {
    airportNameEn: "Braunschweig",
    airportNameFa: "براونشوایگ- وولفزبرگ رجینال",
    city: {
      cityCode: "BWE",
      cityNameEn: "Braunschweig",
      cityNameFa: "نیوبرانزویک",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  BYU: {
    airportNameEn: "Bindlacher-Berg",
    airportNameFa: "فرودگاه بیندلاچر برگ",
    city: {
      cityCode: "BYU",
      cityNameEn: "Bayreuth",
      cityNameFa: "بایرویت",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  CBU: {
    airportNameEn: "Drewitz",
    airportNameFa: "فرودگاه درویتز",
    city: {
      cityCode: "CBU",
      cityNameEn: "Cottbus",
      cityNameFa: "کوتبوس",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  DRS: {
    airportNameEn: "Dresden Arpt",
    airportNameFa: "فرودگاه درسدن",
    city: {
      cityCode: "DRS",
      cityNameEn: "Dresden",
      cityNameFa: "درسدن",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  DTM: {
    airportNameEn: "Dortmund",
    airportNameFa: "فرودگاه دورتموند",
    city: {
      cityCode: "DTM",
      cityNameEn: "Dortmund",
      cityNameFa: "دورتموند",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  DTZ: {
    airportNameEn: "HBF RAILWAY STATION",
    airportNameFa: "ایستگاه قطار دورتموند",
    city: {
      cityCode: "DTM",
      cityNameEn: "Dortmund",
      cityNameFa: "دورتموند",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  EME: {
    airportNameEn: "Emden",
    airportNameFa: "فرودگاه امدن (نیدزاکسن)",
    city: {
      cityCode: "EME",
      cityNameEn: "Emden",
      cityNameFa: "امدن",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  ERF: {
    airportNameEn: "Erfurt",
    airportNameFa: "فرودگاه ارفورت-وایمار",
    city: {
      cityCode: "ERF",
      cityNameEn: "Erfurt",
      cityNameFa: "ارفورت",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  ESS: {
    airportNameEn: "Essen",
    airportNameFa: "فرودگاه اسن/مولهیم",
    city: {
      cityCode: "ESS",
      cityNameEn: "Essen",
      cityNameFa: "اسن",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  FDH: {
    airportNameEn: "Friedrichshafen",
    airportNameFa: "فرودگاه فریدریش هافن (بودنسی)",
    city: {
      cityCode: "FDH",
      cityNameEn: "Friedrichshafen",
      cityNameFa: "فریدریشسهافن",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  FEL: {
    airportNameEn: "Fuerstenfeldbruck",
    airportNameFa: "پایگاه هوایی فورستنفلدبروک",
    city: {
      cityCode: "FEL",
      cityNameEn: "Fuerstenfeldbruck",
      cityNameFa: "فورستنفلدبروکک",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  FKB: {
    airportNameEn: "Soellingen",
    airportNameFa: "محله هوایی بادن",
    city: {
      cityCode: "FKB",
      cityNameEn: "Karlsruhe/Baden Baden",
      cityNameFa: "کارلسروهه / بادن بادن",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  FLF: {
    airportNameEn: "Schaferhaus",
    airportNameFa: "فرودگاه اسچافرهوس",
    city: {
      cityCode: "FLF",
      cityNameEn: "Flensburg",
      cityNameFa: "فلنسبورگ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  FMM: {
    airportNameEn: "Memmingen-Allg?¤u",
    airportNameFa: "فرودگاه آلگائو",
    city: {
      cityCode: "FMM",
      cityNameEn: "Memmingen",
      cityNameFa: "ممینگن",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  FNB: {
    airportNameEn: "Neubrandenburg",
    airportNameFa: "فرودگاه نوی‌براندنبورگ",
    city: {
      cityCode: "FNB",
      cityNameEn: "Neubrandenburg",
      cityNameFa: "نویبرندنبورگ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  FRZ: {
    airportNameEn: "Fritzlar Airbase",
    airportNameFa: "پایگاه هوایی فریتزلار",
    city: {
      cityCode: "FRZ",
      cityNameEn: "Fritzlar",
      cityNameFa: "فریتزلر",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  GHF: {
    airportNameEn: "Giebelstadt",
    airportNameFa: "فرودگاه گیبل‌شتات",
    city: {
      cityCode: "GHF",
      cityNameEn: "Giebelstadt",
      cityNameFa: "گیبلستاد",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  GKE: {
    airportNameEn: "Geilenkirchen",
    airportNameFa: "پایگاه هوایی ناتو در گایلن‌کیرشن",
    city: {
      cityCode: "GKE",
      cityNameEn: "Geilenkirchen",
      cityNameFa: "گایلنکیرشن",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  GTI: {
    airportNameEn: "Guettin",
    airportNameFa: "فرودگاه روگن",
    city: {
      cityCode: "GTI",
      cityNameEn: "Guettin",
      cityNameFa: "گوتین",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  GUT: {
    airportNameEn: "Guetersloh",
    airportNameFa: "فرودگاه نیروی هوایی سلطنتی گوترسلو",
    city: {
      cityCode: "GUT",
      cityNameEn: "Guetersloh",
      cityNameFa: "گوترسله",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  GWT: {
    airportNameEn: "Westerland - Sylt",
    airportNameFa: "فرودگاه سایلت (فرودگاه سایلت)",
    city: {
      cityCode: "GWT",
      cityNameEn: "Westerland",
      cityNameFa: "وسترلند",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  HAJ: {
    airportNameEn: "Hanover Arpt",
    airportNameFa: "فرودگاه هانوفر",
    city: {
      cityCode: "HAJ",
      cityNameEn: "Hannover",
      cityNameFa: "هانوفر",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  ZVM: {
    airportNameEn: "Hannover Messe Bahnhof",
    airportNameFa: "ایستگاه راه‌آهن نمایشگاه هانوفر",
    city: {
      cityCode: "HAJ",
      cityNameEn: "Hannover",
      cityNameFa: "هانوفر",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  ZVR: {
    airportNameEn: "HBF Railway Station",
    airportNameFa: "ایستگاه قطار هانوفر",
    city: {
      cityCode: "HAJ",
      cityNameEn: "Hannover",
      cityNameFa: "هانوفر",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  HDB: {
    airportNameEn: "Heidelberg",
    airportNameFa: "فرودگاه هیدلبرگ",
    city: {
      cityCode: "HDB",
      cityNameEn: "Heidelberg",
      cityNameFa: "هایدلبرگ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  HDF: {
    airportNameEn: "Heringsdorf",
    airportNameFa: "فرودگاه هرینگسدورف",
    city: {
      cityCode: "HDF",
      cityNameEn: "Heringsdorf",
      cityNameFa: "هرینگسدرف",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  HGL: {
    airportNameEn: "Helgoland",
    airportNameFa: "فرودگاه هلیگولند ",
    city: {
      cityCode: "HGL",
      cityNameEn: "Helgoland",
      cityNameFa: "هل گلند",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  HOQ: {
    airportNameEn: "Hof",
    airportNameFa: "فرودگاه هوف-پلاون (پلاون) ",
    city: {
      cityCode: "HOQ",
      cityNameEn: "Hof",
      cityNameFa: "هوف",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  JUI: {
    airportNameEn: "Juist",
    airportNameFa: "فرودگاه جویست",
    city: {
      cityCode: "JUI",
      cityNameEn: "Juist",
      cityNameFa: "جویست",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  KEL: {
    airportNameEn: "Kiel-Holtenau",
    airportNameFa: "فرودگاه کیل",
    city: {
      cityCode: "KEL",
      cityNameEn: "Kiel",
      cityNameFa: "کیل",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  KSF: {
    airportNameEn: "Kassel-Calden",
    airportNameFa: "فرودگاه کاسل کالدن",
    city: {
      cityCode: "KSF",
      cityNameEn: "Kassel",
      cityNameFa: "کاسل",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  LGO: {
    airportNameEn: "Langeoog",
    airportNameFa: "فرودگاه لانگئوگ",
    city: {
      cityCode: "LGO",
      cityNameEn: "Langeoog",
      cityNameFa: "لنگئوگ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  LHA: {
    airportNameEn: "Black Forest",
    airportNameFa: "فرودگاه بلک فورست (لاهر) ",
    city: {
      cityCode: "LHA",
      cityNameEn: "Lahr",
      cityNameFa: "لار",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  MHG: {
    airportNameEn: "Mannheim Arpt",
    airportNameFa: "فرودگاه شهری مانهایم",
    city: {
      cityCode: "MHG",
      cityNameEn: "Mannheim",
      cityNameFa: "منهیم",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  NDZ: {
    airportNameEn: "Cuxhaven",
    airportNameFa: "فرودگاه کوخهاون",
    city: {
      cityCode: "NDZ",
      cityNameEn: "Nordholz-Spieka",
      cityNameFa: "نوردهولز-اسپیکا",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  NOD: {
    airportNameEn: "Norden",
    airportNameFa: "فرودگاه نوردن-نوردیچ",
    city: {
      cityCode: "NOD",
      cityNameEn: "Norden",
      cityNameFa: "نوردن",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  NRD: {
    airportNameEn: "Norderney",
    airportNameFa: "فرودگاه نوردرنی",
    city: {
      cityCode: "NRD",
      cityNameEn: "Norderney",
      cityNameFa: "نوردنای",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  NUE: {
    airportNameEn: "Nuremberg",
    airportNameFa: "فرودگاه نورمبرگ",
    city: {
      cityCode: "NUE",
      cityNameEn: "Nuremberg",
      cityNameFa: "نورمبرگ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  ZAQ: {
    airportNameEn: "Nuremberg Central Station",
    airportNameFa: "ایستگاه مرکزی قطار نورمبرگ",
    city: {
      cityCode: "NUE",
      cityNameEn: "Nuremberg",
      cityNameFa: "نورمبرگ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  OBF: {
    airportNameEn: "Oberpfaffenhofen",
    airportNameFa: "فرودگاه اوبرفافن هافن",
    city: {
      cityCode: "OBF",
      cityNameEn: "Oberpfaffenhofen",
      cityNameFa: "اوبرفافن هوفن",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  OHR: {
    airportNameEn: "Wyk Auf Foehr",
    airportNameFa: "فرودگاه ویک آف فهر",
    city: {
      cityCode: "OHR",
      cityNameEn: "Wyk Auf Foehr",
      cityNameFa: "ویک آوف فوهر",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  PAD: {
    airportNameEn: "Paderborn/Lippstadt",
    airportNameFa: "فرودگاه پادربورن لیپشتات",
    city: {
      cityCode: "PAD",
      cityNameEn: "Paderborn",
      cityNameFa: "پادربورن",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  PEF: {
    airportNameEn: "Peenemuende",
    airportNameFa: "فرودگاه پینموند",
    city: {
      cityCode: "PEF",
      cityNameEn: "Peenemuende",
      cityNameFa: "پینموند",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  PSH: {
    airportNameEn: "St Peter",
    airportNameFa: "فرودگاه سنت پیتر",
    city: {
      cityCode: "PSH",
      cityNameEn: "St Peter",
      cityNameFa: "‌ست پتر",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  REB: {
    airportNameEn: "Rechlin",
    airportNameFa: "فرودگاه رچلین",
    city: {
      cityCode: "REB",
      cityNameEn: "Rechlin",
      cityNameFa: "رچلین",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  RLG: {
    airportNameEn: "Laage",
    airportNameFa: "فرودگاه روستوک-لاگه",
    city: {
      cityCode: "RLG",
      cityNameEn: "Rostock-Laage",
      cityNameFa: "روستوک-لاگه",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  RMS: {
    airportNameEn: "Ramstein",
    airportNameFa: "پایگاه هوایی رامشتاین",
    city: {
      cityCode: "RMS",
      cityNameEn: "Ramstein",
      cityNameFa: "رمستین",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  SCN: {
    airportNameEn: "Ensheim",
    airportNameFa: "فرودگاه زاربروکن",
    city: {
      cityCode: "SCN",
      cityNameEn: "Saarbrucken",
      cityNameFa: "ساربروکن",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  SGE: {
    airportNameEn: "Siegerland Arpt.",
    airportNameFa: "فرودگاه سیگرلند",
    city: {
      cityCode: "SGE",
      cityNameEn: "Siegen",
      cityNameFa: "زیدن",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  SPM: {
    airportNameEn: "Spangdahlem",
    airportNameFa: "پایگاه هوایی اسپنگدالم",
    city: {
      cityCode: "SPM",
      cityNameEn: "Spangdahlem",
      cityNameFa: "اسپانگدالهم",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  STR: {
    airportNameEn: "Stuttgart Echterdingen",
    airportNameFa: "فرودگاه اشتوتگارت",
    city: {
      cityCode: "STR",
      cityNameEn: "Stuttgart",
      cityNameFa: "اشتوتگارت",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  ZWS: {
    airportNameEn: "Stuttgart Central Station",
    airportNameFa: "ایستگاه مرکزی قطار اشتوتگارت",
    city: {
      cityCode: "STR",
      cityNameEn: "Stuttgart",
      cityNameFa: "اشتوتگارت",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  SZW: {
    airportNameEn: "Parchim Arpt.",
    airportNameFa: "فرودگاه پارچیم",
    city: {
      cityCode: "ZSR",
      cityNameEn: "Schwerin",
      cityNameFa: "شورین",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  VAC: {
    airportNameEn: "Varrelbusch",
    airportNameFa: "فرودگاه وررلبوسچ",
    city: {
      cityCode: "VAC",
      cityNameEn: "Varrelbusch",
      cityNameFa: "وررلبوسچ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  WVN: {
    airportNameEn: "Wilhelmshaven",
    airportNameFa: "فرودگاه جدوسر",
    city: {
      cityCode: "WVN",
      cityNameEn: "Wilhelmshaven",
      cityNameFa: "ویلهمسهافن",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  XLW: {
    airportNameEn: "Lemwerder",
    airportNameFa: "فرودگاه لموردر",
    city: {
      cityCode: "XLW",
      cityNameEn: "Lemwerder",
      cityNameFa: "لموردر",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  ZQW: {
    airportNameEn: "Zweibruecken",
    airportNameFa: "فرودگاه زوی بروکن",
    city: {
      cityCode: "ZQW",
      cityNameEn: "Saarbrucken",
      cityNameFa: "ساربروکن",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  QFB: {
    airportNameEn: "Freiburg Hauptbahnhof",
    airportNameFa: "ایستگاه راه‌آهن مرکزی فریبرگ",
    city: {
      cityCode: "QFB",
      cityNameEn: "Freiburg",
      cityNameFa: "فریبرگ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  XXX: {
    airportNameEn: "xxx",
    airportNameFa: "شبهحخبیت",
    city: {
      cityCode: "QFB",
      cityNameEn: "Freiburg",
      cityNameFa: "فریبرگ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  XHJ: {
    airportNameEn: "Aachen Hauptbahnhof",
    airportNameFa: "ایستگاه راه‌آهن مرکزی آخن",
    city: {
      cityCode: "AAH",
      cityNameEn: "Aachen",
      cityNameFa: "آخن",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  AAH: {
    airportNameEn: "Aachen/Merzbruck",
    airportNameFa: "فرودگاه مرتسبروک",
    city: {
      cityCode: "AAH",
      cityNameEn: "Aachen",
      cityNameFa: "آخن",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  MKF: {
    airportNameEn: "MUENSTER HBF RAILWAY STATION",
    airportNameFa: "ایستگاه قطار مونستر",
    city: {
      cityCode: "FMO",
      cityNameEn: "Muenster/Osnabrueck",
      cityNameFa: "مونستر",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  FMO: {
    airportNameEn: "Greven",
    airportNameFa: "فرودگاه بین‌المللی مانستر اوسنابروک",
    city: {
      cityCode: "FMO",
      cityNameEn: "Muenster/Osnabrueck",
      cityNameFa: "مونستر",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  ZEU: {
    airportNameEn: "Gottingen railway station",
    airportNameFa: "ایستگاه راه‌آهن گاتینجن",
    city: {
      cityCode: "ZEU",
      cityNameEn: "Gottingen",
      cityNameFa: "گاتینجن",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  ZPY: {
    airportNameEn: "Siegburg railway station",
    airportNameFa: "ایستگاه راه‌آهن زیگبورگ",
    city: {
      cityCode: "ZPY",
      cityNameEn: "Siegburg",
      cityNameFa: "زیگبورگ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  AOC: {
    airportNameEn: "Altenburg Nobitz",
    airportNameFa: "فرودگاه لایپزیگ-آلتنبورگ",
    city: {
      cityCode: "AOC",
      cityNameEn: "Altenburg",
      cityNameFa: "آلتنبورگ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  CSO: {
    airportNameEn: "Cochstedt",
    airportNameFa: "فرودگاه کچستدت",
    city: {
      cityCode: "CSO",
      cityNameEn: "Magdeburg",
      cityNameFa: "ماگدبورگ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  IGS: {
    airportNameEn: "Ingolstadt-Manching",
    airportNameFa: "فرودگاه اینگولشتات مانچینگ",
    city: {
      cityCode: "ZNQ",
      cityNameEn: "Ingolstadt-Manching",
      cityNameFa: "اینگل اشتاد-منچینگ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  LEJ: {
    airportNameEn: "Leipzig-Halle",
    airportNameFa: "فرودگاه لایپزیگ/هال",
    city: {
      cityCode: "LEJ",
      cityNameEn: "Leipzig",
      cityNameFa: "لایپزیگ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  XIT: {
    airportNameEn: "Leipzig Hauptbahnhof",
    airportNameFa: "ایستگاه راه‌آهن مرکزی لایپزیگ",
    city: {
      cityCode: "LEJ",
      cityNameEn: "Leipzig",
      cityNameFa: "لایپزیگ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  RBM: {
    airportNameEn: "Wallmuhle",
    airportNameFa: "فرودگاه اشتراوبینگ والموهله",
    city: {
      cityCode: "RBM",
      cityNameEn: "Straubing",
      cityNameFa: "استرابینگ",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  WBG: {
    airportNameEn: "Schleswig-Jagel",
    airportNameFa: "پایگاه هوایی شلسویگ",
    city: {
      cityCode: "WBG",
      cityNameEn: "Schleswig-Jagel",
      cityNameFa: "شلسویگ‌-جگل",
    },
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  AAW: {
    airportNameEn: "Abbottabad",
    airportNameFa: "فرودگاه ابیت‌آباد",
    city: {
      cityCode: "AAW",
      cityNameEn: "Abbottabad",
      cityNameFa: "ابوت آباد",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  CWP: {
    airportNameEn: "Campbellpore",
    airportNameFa: "فرودگاه کمبلپور",
    city: {
      cityCode: "CWP",
      cityNameEn: "Campbellpore",
      cityNameFa: "کمبلپور",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  SWN: {
    airportNameEn: "Sahiwal",
    airportNameFa: "فرودگاه ساحیوال",
    city: {
      cityCode: "SWN",
      cityNameEn: "Sahiwal",
      cityNameFa: "سهیوال",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  HRA: {
    airportNameEn: "Mansehra",
    airportNameFa: "فرودگاه مانسهرا",
    city: {
      cityCode: "HRA",
      cityNameEn: "Mansehra",
      cityNameFa: "منسهره",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  KBH: {
    airportNameEn: "Kalat",
    airportNameFa: "فرودگاه کلات",
    city: {
      cityCode: "KBH",
      cityNameEn: "Kalat",
      cityNameFa: "کالات",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  ATG: {
    airportNameEn: "Attock",
    airportNameFa: "فرودگاه اتوک",
    city: {
      cityCode: "ATG",
      cityNameEn: "Attock",
      cityNameFa: "آنتیگوا و باربودا",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  BDN: {
    airportNameEn: "Talhar",
    airportNameFa: "فرودگاه تلهر",
    city: {
      cityCode: "BDN",
      cityNameEn: "Badin",
      cityNameFa: "بدین",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  BHV: {
    airportNameEn: "Bahawalpur",
    airportNameFa: "فرودگاه بهاولپور",
    city: {
      cityCode: "BHV",
      cityNameEn: "Bahawalpur",
      cityNameFa: "بهاوالپور",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  BHW: {
    airportNameEn: "Bhagatanwala Apt",
    airportNameFa: "فرودگاه بهاگاتانوالا",
    city: {
      cityCode: "SGI",
      cityNameEn: "Sargodha",
      cityNameFa: "سارگودا",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  SGI: {
    airportNameEn: "Sargodha Apt",
    airportNameFa: "فرودگاه سرگودها ای پی تی",
    city: {
      cityCode: "SGI",
      cityNameEn: "Sargodha",
      cityNameFa: "سارگودا",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  BNP: {
    airportNameEn: "Bannu",
    airportNameFa: "فرودگاه بانو",
    city: {
      cityCode: "BNP",
      cityNameEn: "Bannu",
      cityNameFa: "بانو",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  CHB: {
    airportNameEn: "Chilas",
    airportNameFa: "فرودگاه چلاس",
    city: {
      cityCode: "CHB",
      cityNameEn: "Chilas",
      cityNameFa: "چیلاس",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  CJL: {
    airportNameEn: "Chitral",
    airportNameFa: "فرودگاه چیترال",
    city: {
      cityCode: "CJL",
      cityNameEn: "Chitral",
      cityNameFa: "چیترال",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  DBA: {
    airportNameEn: "Dalbandin",
    airportNameFa: "فرودگاه دالباندین",
    city: {
      cityCode: "DBA",
      cityNameEn: "Dalbandin",
      cityNameFa: "دالبندین",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  DDU: {
    airportNameEn: "Dadu",
    airportNameFa: "فرودگاه دادو",
    city: {
      cityCode: "DDU",
      cityNameEn: "Dadu",
      cityNameFa: "دادو",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  DEA: {
    airportNameEn: "Dera Ghazi Khan",
    airportNameFa: "فرودگاه بین‌المللی دیرا گازی کان",
    city: {
      cityCode: "DEA",
      cityNameEn: "Dera Ghazi Khan",
      cityNameFa: "دره غازی خان",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  DSK: {
    airportNameEn: "Dera Ismail Khan",
    airportNameFa: "فرودگاه دیره اسماعیل‌خان",
    city: {
      cityCode: "DSK",
      cityNameEn: "Dera Ismail Khan",
      cityNameFa: "درا اسماعیل خان",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  GIL: {
    airportNameEn: "Gilgit",
    airportNameFa: "فرودگاه گلگت",
    city: {
      cityCode: "GIL",
      cityNameEn: "Gilgit",
      cityNameFa: "گیلگیت",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  GRT: {
    airportNameEn: "Gujrat",
    airportNameFa: "فرودگاه گوجرات",
    city: {
      cityCode: "GRT",
      cityNameEn: "Gujrat",
      cityNameFa: "گوجرت",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  GWD: {
    airportNameEn: "Gwadar",
    airportNameFa: "فرودگاه بین‌المللی گوادار",
    city: {
      cityCode: "GWD",
      cityNameEn: "Gwadar",
      cityNameFa: "گوادر",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  HDD: {
    airportNameEn: "Hyderabad",
    airportNameFa: "فرودگاه حیدرآباد",
    city: {
      cityCode: "HDD",
      cityNameEn: "Hyderabad",
      cityNameFa: "حیدرآباد",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  ISB: {
    airportNameEn: "Islamabad Intl.",
    airportNameFa: "فرودگاه بین‌المللی بینظیر بوتو (اسلام آباد)",
    city: {
      cityCode: "ISB",
      cityNameEn: "Islamabad",
      cityNameFa: "اسلام آباد",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  JAG: {
    airportNameEn: "Jacobabad",
    airportNameFa: "پایگاه هوایی شهباز",
    city: {
      cityCode: "JAG",
      cityNameEn: "Jacobabad",
      cityNameFa: "یعقوب آباد",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  JIW: {
    airportNameEn: "Jiwani",
    airportNameFa: "فرودگاه جوانی",
    city: {
      cityCode: "JIW",
      cityNameEn: "Jiwani",
      cityNameFa: "جیونی",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  KCF: {
    airportNameEn: "Kadanwari",
    airportNameFa: "فرودگاه قادن‌واری",
    city: {
      cityCode: "KCF",
      cityNameEn: "Kadanwari",
      cityNameFa: "کدانواری",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  KDD: {
    airportNameEn: "Khuzdar",
    airportNameFa: "فرودگاه خضدار",
    city: {
      cityCode: "KDD",
      cityNameEn: "Khuzdar",
      cityNameFa: "خوزدر",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  KDU: {
    airportNameEn: "Skardu",
    airportNameFa: "فرودگاه اسکاردو",
    city: {
      cityCode: "KDU",
      cityNameEn: "Skardu",
      cityNameFa: "اسکاردو",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  KHI: {
    airportNameEn: "Quaid-e-azam Intl",
    airportNameFa: "فرودگاه بین‌المللی جناح",
    city: {
      cityCode: "KHI",
      cityNameEn: "Karachi",
      cityNameFa: "کراچی",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  LRG: {
    airportNameEn: "Lora Lai",
    airportNameFa: "فرودگاه لورا لای",
    city: {
      cityCode: "LRG",
      cityNameEn: "Lora Lai",
      cityNameFa: "لورا لای",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  LYP: {
    airportNameEn: "Faisalabad",
    airportNameFa: "فرودگاه بین‌المللی فیصل‌آباد",
    city: {
      cityCode: "LYP",
      cityNameEn: "Faisalabad",
      cityNameFa: "فیصل آباد",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  MFG: {
    airportNameEn: "Muzaffarabad",
    airportNameFa: "فرودگاه مظفرآباد",
    city: {
      cityCode: "MFG",
      cityNameEn: "Muzaffarabad",
      cityNameFa: "مظفرآباد",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  MJD: {
    airportNameEn: "Mohenjodaro",
    airportNameFa: "فرودگاه موهن‌جو دارو",
    city: {
      cityCode: "MJD",
      cityNameEn: "Mohenjodaro",
      cityNameFa: "موهنجودارو",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  MPD: {
    airportNameEn: "Mirpur Khas",
    airportNameFa: "فرودگاه سیندهری (میرپور خاس) ",
    city: {
      cityCode: "MPD",
      cityNameEn: "Mirpur Khas",
      cityNameFa: "میرپور خاص",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  MUX: {
    airportNameEn: "Multan Intl.",
    airportNameFa: "فرودگاه بین‌المللی مولتان",
    city: {
      cityCode: "MUX",
      cityNameEn: "Multan",
      cityNameFa: "مولتان",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  MWD: {
    airportNameEn: "Mianwali",
    airportNameFa: "پایگاه هوایی میان‌والی",
    city: {
      cityCode: "MWD",
      cityNameEn: "Mianwali",
      cityNameFa: "میانوالی",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  NHS: {
    airportNameEn: "Nushki",
    airportNameFa: "فرودگاه نوشکی",
    city: {
      cityCode: "NHS",
      cityNameEn: "Nushki",
      cityNameFa: "نوشکی",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  OHT: {
    airportNameEn: "Kohat",
    airportNameFa: "فرودگاه کوهات",
    city: {
      cityCode: "OHT",
      cityNameEn: "Kohat",
      cityNameFa: "کوهات",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  ORW: {
    airportNameEn: "Ormara",
    airportNameFa: "فرودگاه اورمانا",
    city: {
      cityCode: "ORW",
      cityNameEn: "Ormara",
      cityNameFa: "اورمارا",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  PAJ: {
    airportNameEn: "Para Chinar",
    airportNameFa: "فرودگاه پاراچینار",
    city: {
      cityCode: "PAJ",
      cityNameEn: "Para Chinar",
      cityNameFa: "پارا چینار",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  WGB: {
    airportNameEn: "Bahawalnagar",
    airportNameFa: "فرودگاه بهاولنگر",
    city: {
      cityCode: "WGB",
      cityNameEn: "Bahawalnagar",
      cityNameFa: "بهولنگر",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  PEW: {
    airportNameEn: "Peshawar",
    airportNameFa: "فرودگاه بین‌المللی باچا خان",
    city: {
      cityCode: "PEW",
      cityNameEn: "Peshawar",
      cityNameFa: "پیشاور",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  PJG: {
    airportNameEn: "Panjgur",
    airportNameFa: "فرودگاه پنجگور",
    city: {
      cityCode: "PJG",
      cityNameEn: "Panjgur",
      cityNameFa: "پنجگور",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  PSI: {
    airportNameEn: "Pasni",
    airportNameFa: "فرودگاه پسنی",
    city: {
      cityCode: "PSI",
      cityNameEn: "Pasni",
      cityNameFa: "پاسنی",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  PZH: {
    airportNameEn: "Zhob",
    airportNameFa: "فرودگاه ژوب",
    city: {
      cityCode: "PZH",
      cityNameEn: "Zhob",
      cityNameFa: "ژوب",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  RAZ: {
    airportNameEn: "Rawala Kot",
    airportNameFa: "فرودگاه راوالا کوت",
    city: {
      cityCode: "RAZ",
      cityNameEn: "Rawala Kot",
      cityNameFa: "راوالا کوت",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  RYK: {
    airportNameEn: "Rahim Yar Khan",
    airportNameFa: "فرودگاه رحیم یار خان",
    city: {
      cityCode: "RYK",
      cityNameEn: "Rahim Yar Khan",
      cityNameFa: "رحیم یار خان",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  RZS: {
    airportNameEn: "Sawan",
    airportNameFa: "فرودگاه ساوان",
    city: {
      cityCode: "RZS",
      cityNameEn: "Sawan",
      cityNameFa: "ساوان",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  SBQ: {
    airportNameEn: "Sibi",
    airportNameFa: "فرودگاه سیبی",
    city: {
      cityCode: "SBQ",
      cityNameEn: "Sibi",
      cityNameFa: "سیبی",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  SDT: {
    airportNameEn: "Saidu Sharif",
    airportNameFa: "فرودگاه سیدو شریف",
    city: {
      cityCode: "SDT",
      cityNameEn: "Saidu Sharif",
      cityNameFa: "سایدو شریف",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  SKZ: {
    airportNameEn: "Sukkur",
    airportNameFa: "فرودگاه سکر",
    city: {
      cityCode: "SKZ",
      cityNameEn: "Sukkur",
      cityNameFa: "سوکور",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  SUL: {
    airportNameEn: "Sui",
    airportNameFa: "فرودگاه سویی",
    city: {
      cityCode: "SUL",
      cityNameEn: "Sui",
      cityNameFa: "سوئی",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  SYW: {
    airportNameEn: "Sehwen Sharif",
    airportNameFa: "فرودگاه سهون شریف",
    city: {
      cityCode: "SYW",
      cityNameEn: "Sehwen Sharif",
      cityNameFa: "سهون شریف",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  TFT: {
    airportNameEn: "Taftan",
    airportNameFa: "فرودگاه تفتان",
    city: {
      cityCode: "TFT",
      cityNameEn: "Taftan",
      cityNameFa: "تفتان",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  TLB: {
    airportNameEn: "Tarbela",
    airportNameFa: "فرودگاه تاربلا",
    city: {
      cityCode: "TLB",
      cityNameEn: "Tarbela",
      cityNameFa: "تربلا",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  TUK: {
    airportNameEn: "Turbat",
    airportNameFa: "فرودگاه تربت",
    city: {
      cityCode: "TUK",
      cityNameEn: "Turbat",
      cityNameFa: "تربت",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  UET: {
    airportNameEn: "Quetta",
    airportNameFa: "فرودگاه بین‌المللی کویته",
    city: {
      cityCode: "UET",
      cityNameEn: "Quetta",
      cityNameFa: "کیوتا",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  WAF: {
    airportNameEn: "Wana",
    airportNameFa: "فرودگاه وانا",
    city: {
      cityCode: "WAF",
      cityNameEn: "Wana",
      cityNameFa: "وانا",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  WNS: {
    airportNameEn: "Nawabshah",
    airportNameFa: "فرودگاه ناوابشاه",
    city: {
      cityCode: "WNS",
      cityNameEn: "Nawabshah",
      cityNameFa: "نوابشاه",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  XJM: {
    airportNameEn: "Mangla",
    airportNameFa: "فرودگاه مانگلا",
    city: {
      cityCode: "XJM",
      cityNameEn: "Mangla",
      cityNameFa: "مانگلا",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  LHE: {
    airportNameEn: "Alama Iqbal Intl.",
    airportNameFa: "فرودگاه بین‌المللی اقبال لاهوری",
    city: {
      cityCode: "LHE",
      cityNameEn: "Lahore",
      cityNameFa: "لاهور",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  SKT: {
    airportNameEn: "Sialkot Intl.",
    airportNameFa: "فرودگاه بین‌المللی سیالکوت",
    city: {
      cityCode: "SKT",
      cityNameEn: "Sialkot",
      cityNameFa: "سیالکوت",
    },
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  AAQ: {
    airportNameEn: "Anapa",
    airportNameFa: "فرودگاه آناپا",
    city: {
      cityCode: "AAQ",
      cityNameEn: "Anapa",
      cityNameFa: "آناپا",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  CEE: {
    airportNameEn: "Cherepovets",
    airportNameFa: "فرودگاه چرپووتس",
    city: {
      cityCode: "CEE",
      cityNameEn: "Cherepovets",
      cityNameFa: "چرپووتس",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  NUX: {
    airportNameEn: "Novy Urengoy",
    airportNameFa: "فرودگاه نووی اورنگوی",
    city: {
      cityCode: "NUX",
      cityNameEn: "Novy Urengoy",
      cityNameFa: "نوی یورنگی",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  SVO: {
    airportNameEn: "Sheremetyevo",
    airportNameFa: "فرودگاه شرمتیوو",
    city: {
      cityCode: "MOW",
      cityNameEn: "Moscow",
      cityNameFa: "مسکو",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  VKO: {
    airportNameEn: "Vnukovo",
    airportNameFa: "فرودگاه ونوکووا",
    city: {
      cityCode: "MOW",
      cityNameEn: "Moscow",
      cityNameFa: "مسکو",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  DME: {
    airportNameEn: "Domodedovo",
    airportNameFa: "فرودگاه بین‌المللی دوموده‌دوو",
    city: {
      cityCode: "MOW",
      cityNameEn: "Moscow",
      cityNameFa: "مسکو",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  ZKD: {
    airportNameEn: "Leningradsky Rail Terminal",
    airportNameFa: "ایستگاه راه‌آهن لنینگرادسکی",
    city: {
      cityCode: "MOW",
      cityNameEn: "Moscow",
      cityNameFa: "مسکو",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  XRK: {
    airportNameEn: "Paveletsky Rail Terminal",
    airportNameFa: "ایستگاه راه‌آهن مسکو",
    city: {
      cityCode: "MOW",
      cityNameEn: "Moscow",
      cityNameFa: "مسکو",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  LED: {
    airportNameEn: "Pulkovo",
    airportNameFa: "فرودگاه پالکوو",
    city: {
      cityCode: "LED",
      cityNameEn: "Saint Petersburg",
      cityNameFa: "سنت پترزبورگ",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  FVS: {
    airportNameEn: "Finland Station",
    airportNameFa: "ایستگاه راه‌آهن فنلاند",
    city: {
      cityCode: "LED",
      cityNameEn: "Saint Petersburg",
      cityNameFa: "سنت پترزبورگ",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  ABA: {
    airportNameEn: "Abakan",
    airportNameFa: "فرودگاه آباکان",
    city: {
      cityCode: "ABA",
      cityNameEn: "Abakan",
      cityNameFa: "اباکان",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  ACS: {
    airportNameEn: "Achinsk",
    airportNameFa: "فرودگاه آچینسک",
    city: {
      cityCode: "ACS",
      cityNameEn: "Achinsk",
      cityNameFa: "آچینسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  ADH: {
    airportNameEn: "Aldan",
    airportNameFa: "فرودگاه آلدان",
    city: {
      cityCode: "ADH",
      cityNameEn: "Aldan",
      cityNameFa: "آلدن",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  AER: {
    airportNameEn: "Adler/Sochi",
    airportNameFa: "آدلر / سوچی",
    city: {
      cityCode: "AER",
      cityNameEn: "Adler/Sochi",
      cityNameFa: "سوچی آدلر",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  AMV: {
    airportNameEn: "Amderma",
    airportNameFa: "فرودگاه آمدرما",
    city: {
      cityCode: "AMV",
      cityNameEn: "Amderma",
      cityNameFa: "امدرما",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  ARH: {
    airportNameEn: "Arkhangelsk",
    airportNameFa: "فرودگاه تالاگی",
    city: {
      cityCode: "ARH",
      cityNameEn: "Arkhangelsk",
      cityNameFa: "آرخانگلسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  BAX: {
    airportNameEn: "Barnaul",
    airportNameFa: "فرودگاه بارنائول",
    city: {
      cityCode: "BAX",
      cityNameEn: "Barnaul",
      cityNameFa: "بارنائول",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  BCX: {
    airportNameEn: "Beloreck",
    airportNameFa: "فرودگاه بلورتسک",
    city: {
      cityCode: "BCX",
      cityNameEn: "Beloreck",
      cityNameFa: "بلورک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  BQS: {
    airportNameEn: "Blagoveschensk",
    airportNameFa: "فرودگاه ایگناتیوا",
    city: {
      cityCode: "BQS",
      cityNameEn: "Blagoveschensk",
      cityNameFa: "بلاگوسچنسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  BTK: {
    airportNameEn: "Bratsk",
    airportNameFa: "فرودگاه براتسک",
    city: {
      cityCode: "BTK",
      cityNameEn: "Bratsk",
      cityNameFa: "براتسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  BWO: {
    airportNameEn: "Balakovo",
    airportNameFa: "فرودگاه بالاکوف",
    city: {
      cityCode: "BWO",
      cityNameEn: "Balakovo",
      cityNameFa: "بالاکوو",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  CEK: {
    airportNameEn: "Chelyabinsk",
    airportNameFa: "فرودگاه چلیابینسک",
    city: {
      cityCode: "CEK",
      cityNameEn: "Chelyabinsk",
      cityNameFa: "چلیابینسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  CKH: {
    airportNameEn: "Chokurdah",
    airportNameFa: "فرودگاه چوکورداه",
    city: {
      cityCode: "CKH",
      cityNameEn: "Chokurdah",
      cityNameFa: "چکوردا",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  CSY: {
    airportNameEn: "Cheboksary",
    airportNameFa: "فرودگاه چبوکساری",
    city: {
      cityCode: "CSY",
      cityNameEn: "Cheboksary",
      cityNameFa: "چبوکساری",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  CYX: {
    airportNameEn: "Cherskiy",
    airportNameFa: "فرودگاه چرسکی",
    city: {
      cityCode: "CYX",
      cityNameEn: "Cherskiy",
      cityNameFa: "چرسکی",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  DKS: {
    airportNameEn: "Dikson",
    airportNameFa: "فرودگاه دیکسون",
    city: {
      cityCode: "DKS",
      cityNameEn: "Dikson",
      cityNameFa: "دیکسن",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  DYR: {
    airportNameEn: "Anadyr",
    airportNameFa: "فرودگاه اوگولنی",
    city: {
      cityCode: "DYR",
      cityNameEn: "Anadyr",
      cityNameFa: "آنادیر",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  EGO: {
    airportNameEn: "Belgorod",
    airportNameFa: "فرودگاه بلگورود",
    city: {
      cityCode: "EGO",
      cityNameEn: "Belgorod",
      cityNameFa: "بلگورود",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  EIE: {
    airportNameEn: "Eniseysk",
    airportNameFa: "فرودگاه ینیسیسک",
    city: {
      cityCode: "EIE",
      cityNameEn: "Eniseysk",
      cityNameFa: "انیسیسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  ESL: {
    airportNameEn: "Elista",
    airportNameFa: "فرودگاه الیستا",
    city: {
      cityCode: "ESL",
      cityNameEn: "Elista",
      cityNameFa: "الیستا",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  GDG: {
    airportNameEn: "Magdagachi",
    airportNameFa: "فرودگاه ماگداگاچی",
    city: {
      cityCode: "GDG",
      cityNameEn: "Magdagachi",
      cityNameFa: "مگدگاچی",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  GDX: {
    airportNameEn: "Magadan",
    airportNameFa: "فرودگاه سوکول",
    city: {
      cityCode: "GDX",
      cityNameEn: "Magadan",
      cityNameFa: "ماگادان",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  GDZ: {
    airportNameEn: "Gelendzik",
    airportNameFa: "فرودگاه گلن دژیک",
    city: {
      cityCode: "GDZ",
      cityNameEn: "Gelendzik",
      cityNameFa: "گلندزیک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  GRV: {
    airportNameEn: "Groznyj",
    airportNameFa: "فرودگاه گروزنی",
    city: {
      cityCode: "GRV",
      cityNameEn: "Groznyj",
      cityNameFa: "گروزنی",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  HTA: {
    airportNameEn: "Chita",
    airportNameFa: "فرودگاه کادالا",
    city: {
      cityCode: "HTA",
      cityNameEn: "Chita",
      cityNameFa: "چیتا",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  HTG: {
    airportNameEn: "Hatanga",
    airportNameFa: "فرودگاه خاتانگا",
    city: {
      cityCode: "HTG",
      cityNameEn: "Hatanga",
      cityNameFa: "هتنگا",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  IAA: {
    airportNameEn: "Igarka",
    airportNameFa: "فرودگاه ایگارکا",
    city: {
      cityCode: "IAA",
      cityNameEn: "Igarka",
      cityNameFa: "ایگارکا",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  IAR: {
    airportNameEn: "Yaroslavl",
    airportNameFa: "تونوشنا",
    city: {
      cityCode: "IAR",
      cityNameEn: "Yaroslavl",
      cityNameFa: "یاروسلاول",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  IJK: {
    airportNameEn: "Izhevsk",
    airportNameFa: "فرودگاه ایژفسک",
    city: {
      cityCode: "IJK",
      cityNameEn: "Izhevsk",
      cityNameFa: "ایژوسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  IKS: {
    airportNameEn: "Tiksi",
    airportNameFa: "فرودگاه تیکسی",
    city: {
      cityCode: "IKS",
      cityNameEn: "Tiksi",
      cityNameFa: "تیکسی",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  IKT: {
    airportNameEn: "Irkutsk",
    airportNameFa: "فرودگاه بین‌المللی ایرکوتسک",
    city: {
      cityCode: "IKT",
      cityNameEn: "Irkutsk",
      cityNameFa: "ایرکوتسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  INA: {
    airportNameEn: "Inta",
    airportNameFa: "فرودگاه اینتا",
    city: {
      cityCode: "INA",
      cityNameEn: "Inta",
      cityNameFa: "اینتا",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  IWA: {
    airportNameEn: "Ivanova",
    airportNameFa: "فرودگاه ایوانوف یوژنی",
    city: {
      cityCode: "IWA",
      cityNameEn: "Ivanova",
      cityNameFa: "ایوانوا",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  JOK: {
    airportNameEn: "Joshkar-Ola",
    airportNameFa: "فرودگاه یوشکار اولا",
    city: {
      cityCode: "JOK",
      cityNameEn: "Joshkar-Ola",
      cityNameFa: "جوشکار-‌الا",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KEJ: {
    airportNameEn: "Kemerovo",
    airportNameFa: "فرودگاه کمروف",
    city: {
      cityCode: "KEJ",
      cityNameEn: "Kemerovo",
      cityNameFa: "کمروف",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KGP: {
    airportNameEn: "Kogalym Intl.",
    airportNameFa: "فرودگاه کوگالیم",
    city: {
      cityCode: "KGP",
      cityNameEn: "Kogalym",
      cityNameFa: "کوگالیم",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KHV: {
    airportNameEn: "Novyy",
    airportNameFa: "فرودگاه خاباروفسک ناوی",
    city: {
      cityCode: "KHV",
      cityNameEn: "Khabarovsk",
      cityNameFa: "خاباروفسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KJA: {
    airportNameEn: "Krasnojarsk",
    airportNameFa: "فرودگاه یملیانو",
    city: {
      cityCode: "KJA",
      cityNameEn: "Krasnojarsk",
      cityNameFa: "کراسنویارسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KLD: {
    airportNameEn: "Migalovo",
    airportNameFa: "میگالوف",
    city: {
      cityCode: "KLD",
      cityNameEn: "Kalinin",
      cityNameFa: "کالینین",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KLF: {
    airportNameEn: "Kaluga",
    airportNameFa: "فرودگاه کالوگا گرابتسف",
    city: {
      cityCode: "KLF",
      cityNameEn: "Kaluga",
      cityNameFa: "کالوگا",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KMW: {
    airportNameEn: "Kostroma",
    airportNameFa: "فرودگاه کوستروما",
    city: {
      cityCode: "KMW",
      cityNameEn: "Kostroma",
      cityNameFa: "کاستروما",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KRO: {
    airportNameEn: "Kurgan",
    airportNameFa: "فرودگاه کورگان",
    city: {
      cityCode: "KRO",
      cityNameEn: "Kurgan",
      cityNameFa: "کورگان",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KRR: {
    airportNameEn: "Pashkovsky",
    airportNameFa: "فرودگاه پاشکوفسکی",
    city: {
      cityCode: "KRR",
      cityNameEn: "Krasnodar",
      cityNameFa: "کراسنودار",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KSZ: {
    airportNameEn: "Kotlas",
    airportNameFa: "فرودگاه کوتلاس",
    city: {
      cityCode: "KSZ",
      cityNameEn: "Kotlas",
      cityNameFa: "کوتلاس",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KVK: {
    airportNameEn: "Kirovsk",
    airportNameFa: "کیروفسک آپاتیتی (خیبینی)",
    city: {
      cityCode: "KVK",
      cityNameEn: "Kirovsk",
      cityNameFa: "کیروفسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KVX: {
    airportNameEn: "Kirov",
    airportNameFa: "فرودگاه کیروف پوبدیلوف (کیرو)",
    city: {
      cityCode: "KVX",
      cityNameEn: "Kirov",
      cityNameFa: "کیروف",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KXK: {
    airportNameEn: "Komsomolsk Na Amure",
    airportNameFa: "فرودگاه کامسامولسک بر آمور",
    city: {
      cityCode: "KXK",
      cityNameEn: "Komsomolsk Na Amure",
      cityNameFa: "کومسومولسک نا آمور",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KYZ: {
    airportNameEn: "Kyzyl",
    airportNameFa: "فرودگاه کیزیل",
    city: {
      cityCode: "KYZ",
      cityNameEn: "Kyzyl",
      cityNameFa: "کیزیل",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KZN: {
    airportNameEn: "Kazan",
    airportNameFa: "فرودگاه بین‌المللی قازان",
    city: {
      cityCode: "KZN",
      cityNameEn: "Kazan",
      cityNameFa: "کازان",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  LNX: {
    airportNameEn: "Smolensk",
    airportNameFa: "فرودگاه اسمولنسک",
    city: {
      cityCode: "LNX",
      cityNameEn: "Smolensk",
      cityNameFa: "اسمولنسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  LPK: {
    airportNameEn: "Lipetsk",
    airportNameFa: "فرودگاه لیپتسک",
    city: {
      cityCode: "LPK",
      cityNameEn: "Lipetsk",
      cityNameFa: "لیپتسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  MCX: {
    airportNameEn: "Makhachkala",
    airportNameFa: "فرودگاه اویتاش",
    city: {
      cityCode: "MCX",
      cityNameEn: "Makhachkala",
      cityNameFa: "آکتا",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  MJZ: {
    airportNameEn: "Mirnyj",
    airportNameFa: "فرودگاه میرنی",
    city: {
      cityCode: "MJZ",
      cityNameEn: "Mirnyj",
      cityNameFa: "میرنیج",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  MMK: {
    airportNameEn: "Murmansk Arpt. Murmashi",
    airportNameFa: "فرودگاه مورمانسک",
    city: {
      cityCode: "MMK",
      cityNameEn: "Murmansk",
      cityNameFa: "مورمانسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  MRV: {
    airportNameEn: "Mineralnye Vodyj",
    airportNameFa: "فرودگاه مینرالنیه وودی",
    city: {
      cityCode: "MRV",
      cityNameEn: "Mineralnye Vody",
      cityNameFa: "مینارانی وودی",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  NAL: {
    airportNameEn: "Nalchik",
    airportNameFa: "فرودگاه نالچیک",
    city: {
      cityCode: "NAL",
      cityNameEn: "Nalchik",
      cityNameFa: "نالچیک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  NBC: {
    airportNameEn: "Begishevo",
    airportNameFa: "فرودگاه بگیشوو",
    city: {
      cityCode: "NBC",
      cityNameEn: "Nizhnekamsk",
      cityNameFa: "نیژنکامسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  NEF: {
    airportNameEn: "Neftekamsk",
    airportNameFa: "فرودگاه نفتکامسک",
    city: {
      cityCode: "NEF",
      cityNameEn: "Neftekamsk",
      cityNameFa: "نفتکماسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  NFG: {
    airportNameEn: "Nefteyugansk",
    airportNameFa: "فرودگاه نفتیوگانسک",
    city: {
      cityCode: "NFG",
      cityNameEn: "Nefteyugansk",
      cityNameFa: "نفتیوگانسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  NJC: {
    airportNameEn: "Nizhnevartovsk",
    airportNameFa: "فرودگاه نیژنوارتوفسک",
    city: {
      cityCode: "NJC",
      cityNameEn: "Nizhnevartovsk",
      cityNameFa: "نیژنوارتوفسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  NNM: {
    airportNameEn: "Naryan-Mar",
    airportNameFa: "فرودگاه ناریان-مار",
    city: {
      cityCode: "NNM",
      cityNameEn: "Naryan-Mar",
      cityNameFa: "ناریان-مر",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  NYM: {
    airportNameEn: "Nadym",
    airportNameFa: "فرودگاه نادیم",
    city: {
      cityCode: "NYM",
      cityNameEn: "Nadym",
      cityNameFa: "نادیم",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  OEL: {
    airportNameEn: "Orel",
    airportNameFa: "فرودگاه اوریول یوژنی",
    city: {
      cityCode: "OEL",
      cityNameEn: "Orel",
      cityNameFa: "اورل",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  OGZ: {
    airportNameEn: "Vladikavkaz",
    airportNameFa: "فرودگاه بسلان",
    city: {
      cityCode: "OGZ",
      cityNameEn: "Vladikavkaz",
      cityNameFa: "ولدیکوکز",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  OHO: {
    airportNameEn: "Okhotsk",
    airportNameFa: "فرودگاه اوخوتسک",
    city: {
      cityCode: "OHO",
      cityNameEn: "Okhotsk",
      cityNameFa: "اخوتسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  OKT: {
    airportNameEn: "Oktiabrskij",
    airportNameFa: "فرودگاه اوکتیابرسکی",
    city: {
      cityCode: "OKT",
      cityNameEn: "Oktiabrskij",
      cityNameFa: "اکتیبرسکی",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  OMS: {
    airportNameEn: "Omsk",
    airportNameFa: "فرودگاه تسنترالنی",
    city: {
      cityCode: "OMS",
      cityNameEn: "Omsk",
      cityNameFa: "اومسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  OSW: {
    airportNameEn: "Orsk",
    airportNameFa: "فرودگاه اورسک",
    city: {
      cityCode: "RU",
      cityNameEn: "Orsk",
      cityNameFa: "اورسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  OVB: {
    airportNameEn: "Tolmachevo",
    airportNameFa: "فرودگاه تولمچوا",
    city: {
      cityCode: "OVB",
      cityNameEn: "Novosibirsk",
      cityNameFa: "نووسیبیرسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  PEE: {
    airportNameEn: "Perm",
    airportNameFa: "فرودگاه بولشویه ساوینو",
    city: {
      cityCode: "PEE",
      cityNameEn: "Perm",
      cityNameFa: "پرم",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  PEX: {
    airportNameEn: "Pechora",
    airportNameFa: "فرودگاه پچورا",
    city: {
      cityCode: "PEX",
      cityNameEn: "Pechora",
      cityNameFa: "پچورا",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  PEZ: {
    airportNameEn: "Penza",
    airportNameFa: "فرودگاه پنزا",
    city: {
      cityCode: "PEZ",
      cityNameEn: "Penza",
      cityNameFa: "پنزا",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  PKC: {
    airportNameEn: "Petropavlovsk-Kamchats",
    airportNameFa: "فرودگاه پتروپاولوفسک/سیبون",
    city: {
      cityCode: "PKC",
      cityNameEn: "Petropavlovsk-Kamchats",
      cityNameFa: "پترپولوسک‌-کمچتس",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  PKV: {
    airportNameEn: "Pskov",
    airportNameFa: "فرودگاه پسکوف",
    city: {
      cityCode: "PKV",
      cityNameEn: "Pskov",
      cityNameFa: "پسکوف",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  PVS: {
    airportNameEn: "Provideniya",
    airportNameFa: "فرودگاه پرویدنیا بای",
    city: {
      cityCode: "PVS",
      cityNameEn: "Provideniya",
      cityNameFa: "پرویدنیا",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  PWE: {
    airportNameEn: "Pevek",
    airportNameFa: "فرودگاه پوک",
    city: {
      cityCode: "PWE",
      cityNameEn: "Pevek",
      cityNameFa: "پوک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  PYJ: {
    airportNameEn: "Polyarnyj",
    airportNameFa: "فرودگاه پولیارنی",
    city: {
      cityCode: "PYJ",
      cityNameEn: "Polyarnyj",
      cityNameFa: "پولیارنیج",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  REN: {
    airportNameEn: "Orenburg",
    airportNameFa: "فرودگاه اورنبورگ تسنترالنی",
    city: {
      cityCode: "REN",
      cityNameEn: "Orenburg",
      cityNameFa: "اورنبرگ",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  ROV: {
    airportNameEn: "Rostov",
    airportNameFa: "فرودگاه روستوف‌ان‌دون",
    city: {
      cityCode: "ROV",
      cityNameEn: "Rostov",
      cityNameFa: "رستوو",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  RTW: {
    airportNameEn: "Saratov",
    airportNameFa: "فرودگاه سرتو تسنترلنی",
    city: {
      cityCode: "RTW",
      cityNameEn: "Saratov",
      cityNameFa: "ساراتوف",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  RZN: {
    airportNameEn: "Ryazan",
    airportNameFa: "فرودگاه ریازان تورلاتوف(Turlatovo Airport)",
    city: {
      cityCode: "RZN",
      cityNameEn: "Ryazan",
      cityNameFa: "ریزن",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  SCW: {
    airportNameEn: "Syktyvkar",
    airportNameFa: "فرودگاه سیکتیوکار",
    city: {
      cityCode: "SCW",
      cityNameEn: "Syktyvkar",
      cityNameFa: "سیکتیوکار",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  SGC: {
    airportNameEn: "Surgut",
    airportNameFa: "فرودگاه بین‌المللی سورگوت",
    city: {
      cityCode: "SGC",
      cityNameEn: "Surgut",
      cityNameFa: "سورگوت",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  SKX: {
    airportNameEn: "Saransk",
    airportNameFa: "فرودگاه سارانسک",
    city: {
      cityCode: "SKX",
      cityNameEn: "Saransk",
      cityNameFa: "سرنسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  SLY: {
    airportNameEn: "Salekhard",
    airportNameFa: "فرودگاه سالخارد",
    city: {
      cityCode: "SLY",
      cityNameEn: "Salekhard",
      cityNameFa: "سالخارد",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  STW: {
    airportNameEn: "Stavropol",
    airportNameFa: "فرودگاه شپاکوفسکویه",
    city: {
      cityCode: "STW",
      cityNameEn: "Stavropol",
      cityNameFa: "استاوروپول",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  SVX: {
    airportNameEn: "Koltsovo Intl. Arpt.",
    airportNameFa: "فرودگاه کولتسوو",
    city: {
      cityCode: "SVX",
      cityNameEn: "Ekaterinburg",
      cityNameFa: "اکاترینبورگ",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  TBW: {
    airportNameEn: "Tambov",
    airportNameFa: "فرودگاه تامبوف دونسکویه",
    city: {
      cityCode: "TBW",
      cityNameEn: "Tambov",
      cityNameFa: "تامبوف",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  TOF: {
    airportNameEn: "Tomsk",
    airportNameFa: "فرودگاه بوگاشف",
    city: {
      cityCode: "TOF",
      cityNameEn: "Tomsk",
      cityNameFa: "تومسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  TOX: {
    airportNameEn: "Tobolsk",
    airportNameFa: "فرودگاه تبلسک",
    city: {
      cityCode: "TOX",
      cityNameEn: "Tobolsk",
      cityNameFa: "توبولسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  TYA: {
    airportNameEn: "Tula",
    airportNameFa: "فرودگاه یالووا",
    city: {
      cityCode: "TYA",
      cityNameEn: "Tula",
      cityNameFa: "تولا",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  TYD: {
    airportNameEn: "Tynda",
    airportNameFa: "فرودگاه تیندا",
    city: {
      cityCode: "TYD",
      cityNameEn: "Tynda",
      cityNameFa: "تیندا",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  UCT: {
    airportNameEn: "Ukhta",
    airportNameFa: "فرودگاه اوختا",
    city: {
      cityCode: "UCT",
      cityNameEn: "Ukhta",
      cityNameFa: "اوختا",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  UFA: {
    airportNameEn: "Ufa",
    airportNameFa: "فرودگاه بین‌المللی اوفا",
    city: {
      cityCode: "UFA",
      cityNameEn: "Ufa",
      cityNameFa: "یوفا",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  UIK: {
    airportNameEn: "Ust-Ilimsk",
    airportNameFa: "فرودگاه اوست-ایلیمسک",
    city: {
      cityCode: "UIK",
      cityNameEn: "Ust-Ilimsk",
      cityNameFa: "اوست - ‌ایلیمسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  UKX: {
    airportNameEn: "Ust-Kut",
    airportNameFa: "فرودگاه اوست-کوت",
    city: {
      cityCode: "UKX",
      cityNameEn: "Ust-Kut",
      cityNameFa: "آست-کات",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  ULY: {
    airportNameEn: "Vostochny",
    airportNameFa: "فرودگاه اولیانوفسک ووستوچنی",
    city: {
      cityCode: "ULY",
      cityNameEn: "Ulyanovsk",
      cityNameFa: "اولیانوفسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  URJ: {
    airportNameEn: "Uraj",
    airportNameFa: "فرودگاه اورای",
    city: {
      cityCode: "URJ",
      cityNameEn: "Uraj",
      cityNameFa: "یوراج",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  URS: {
    airportNameEn: "Kursk",
    airportNameFa: "فرودگاه خالینو",
    city: {
      cityCode: "URS",
      cityNameEn: "Kursk",
      cityNameFa: "کورسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  USK: {
    airportNameEn: "Usinsk",
    airportNameFa: "فرودگاه یوسینسک",
    city: {
      cityCode: "USK",
      cityNameEn: "Usinsk",
      cityNameFa: "اسینکس",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  UUA: {
    airportNameEn: "Bugulma",
    airportNameFa: "فرودگاه بوگولما",
    city: {
      cityCode: "UUA",
      cityNameEn: "Bugulma",
      cityNameFa: "بوگولما",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  UUD: {
    airportNameEn: "Ulan-Ude, Mukhino",
    airportNameFa: "فرودگاه اولان‌اوده",
    city: {
      cityCode: "UUD",
      cityNameEn: "Ulan-Ude",
      cityNameFa: "اولان اوده",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  UUS: {
    airportNameEn: "Yuzhno-Sakhalinsk",
    airportNameFa: "فرودگاه یوژنو-ساخالینسک",
    city: {
      cityCode: "UUS",
      cityNameEn: "Yuzhno-Sakhalinsk",
      cityNameFa: "یوژنو-ساخالینسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  VGD: {
    airportNameEn: "Vologda",
    airportNameFa: "فرودگاه وولوگدا",
    city: {
      cityCode: "VGD",
      cityNameEn: "Vologda",
      cityNameFa: "ولگدا",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  VKT: {
    airportNameEn: "Vorkuta",
    airportNameFa: "فرودگاه وورکوتا",
    city: {
      cityCode: "VKT",
      cityNameEn: "Vorkuta",
      cityNameFa: "ورکوتا",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  VLK: {
    airportNameEn: "Volgodonsk",
    airportNameFa: "فرودگاه وولگودونسک",
    city: {
      cityCode: "VLK",
      cityNameEn: "Volgodonsk",
      cityNameFa: "وولگودونسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  VLU: {
    airportNameEn: "Velikiye Luki",
    airportNameFa: "فرودگاه ولیکیه لوکی",
    city: {
      cityCode: "VLU",
      cityNameEn: "Velikiye Luki",
      cityNameFa: "ولیکی لوکی",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  VOG: {
    airportNameEn: "Volgograd",
    airportNameFa: "فرودگاه بین‌المللی ولگاگراد (شهر)",
    city: {
      cityCode: "VOG",
      cityNameEn: "Volgograd",
      cityNameFa: "ولگوگراد",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  VOZ: {
    airportNameEn: "Chertovitskoye",
    airportNameFa: "فرودگاه چرتوویتسکویه",
    city: {
      cityCode: "VOZ",
      cityNameEn: "Voronezh",
      cityNameFa: "وورونژ",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  VUS: {
    airportNameEn: "Velikij Ustyug",
    airportNameFa: "فرودگاه ولیکی اوستیوگ",
    city: {
      cityCode: "VUS",
      cityNameEn: "Velikij Ustyug",
      cityNameFa: "ولیکیج اوستیوگ",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  VVO: {
    airportNameEn: "Vladivostok",
    airportNameFa: "فرودگاه بین‌المللی ولادی‌وستوک",
    city: {
      cityCode: "VVO",
      cityNameEn: "Vladivostok",
      cityNameFa: "ولادی وستک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  YKS: {
    airportNameEn: "Yakutsk",
    airportNameFa: "فرودگاه یاکوتسک",
    city: {
      cityCode: "YKS",
      cityNameEn: "Yakutsk",
      cityNameFa: "یاکوتسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  ZIA: {
    airportNameEn: "Zhukovsky Intl APT",
    airportNameFa: "فرودگاه بین المللی ژوکوفسکی",
    city: {
      cityCode: "ZIA",
      cityNameEn: "Zhukovsky",
      cityNameFa: "ژوکوفسکی",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  GOJ: {
    airportNameEn: "STRIGINO Airport",
    airportNameFa: "فرودگاه استرینگو",
    city: {
      cityCode: "GOJ",
      cityNameEn: "NIZHNY NOVGOROD",
      cityNameFa: "نیژنی نوگراد",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  ASF: {
    airportNameEn: "Astrakhan",
    airportNameFa: "فرودگاه آستراخان",
    city: {
      cityCode: "ASF",
      cityNameEn: "Astrakhan",
      cityNameFa: "آستراخن",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  BZK: {
    airportNameEn: "Briansk",
    airportNameFa: "فرودگاه بریانسک",
    city: {
      cityCode: "BZK",
      cityNameEn: "Briansk",
      cityNameFa: "برینسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  CKL: {
    airportNameEn: "Chkalovsky",
    airportNameFa: "فرودگاه چکالووسکی",
    city: {
      cityCode: "CKL",
      cityNameEn: "Chkalovsky",
      cityNameFa: "چکالووسکی",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  HMA: {
    airportNameEn: "Khanty-Mansiysk",
    airportNameFa: "فرودگاه خانتی-مانسییسک",
    city: {
      cityCode: "HMA",
      cityNameEn: "KHANTY-MANSIYSK",
      cityNameFa: "خانتی-مانسیسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KGD: {
    airportNameEn: "Kaliningrad Devau",
    airportNameFa: "فرودگاه خرابوروفو",
    city: {
      cityCode: "KGD",
      cityNameEn: "Kaliningrad",
      cityNameFa: "کلینینگارد",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KUF: {
    airportNameEn: "Kurumoch",
    airportNameFa: "فرودگاه بین‌المللی کورومچ(Samara Airport)",
    city: {
      cityCode: "KUF",
      cityNameEn: "Samara",
      cityNameFa: "سامارا",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  MQF: {
    airportNameEn: "Magnitogorsk",
    airportNameFa: "فرودگاه ماگنیتوگورسک",
    city: {
      cityCode: "MQF",
      cityNameEn: "Magnitogorsk",
      cityNameFa: "مگنیتاگرس",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  NOJ: {
    airportNameEn: "Nojabrxsk",
    airportNameFa: "فرودگاه نویابرسک",
    city: {
      cityCode: "NOJ",
      cityNameEn: "Nojabrxsk",
      cityNameFa: "نوجابرکس",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  NOZ: {
    airportNameEn: "Novokuznetsk",
    airportNameFa: "فرودگاه اسپیچنکوف (فرودگاه اسپیچنکوف)",
    city: {
      cityCode: "NOZ",
      cityNameEn: "Novokuznetsk",
      cityNameFa: "نوکوزنتسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  PES: {
    airportNameEn: "Petrozavodsk",
    airportNameFa: "فرودگاه بسووتس",
    city: {
      cityCode: "PES",
      cityNameEn: "Petrozavodsk",
      cityNameFa: "پتروزاودسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  RYB: {
    airportNameEn: "Rybinsk",
    airportNameFa: "ریبینسک استاروسلیه",
    city: {
      cityCode: "RYB",
      cityNameEn: "Rybinsk",
      cityNameFa: "ریبینسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  TJM: {
    airportNameEn: "Roschino",
    airportNameFa: "فرودگاه بین‌المللی رسچینو",
    city: {
      cityCode: "TJM",
      cityNameEn: "Tyumen",
      cityNameFa: "تیومن",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  ULV: {
    airportNameEn: "Ulyanovsk Baratayevka Airport",
    airportNameFa: "فرودگاه اولیانووسک باراتایوکا",
    city: {
      cityCode: "ULV",
      cityNameEn: "Ulyanovsk",
      cityNameFa: "اولیانوفسک",
    },
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  XQC: {
    airportNameEn: "Balad",
    airportNameFa: "فرودگاه بلد",
    city: {
      cityCode: "XQC",
      cityNameEn: "Balad",
      cityNameFa: "بلد",
    },
    country: {
      countryCode: "IRQ",
      countryNameEn: "Iraq",
      countryNameFa: "عراق",
    },
  },
  BGW: {
    airportNameEn: "Al Rasheed",
    airportNameFa: "فرودگاه بغداد",
    city: {
      cityCode: "BGW",
      cityNameEn: "Baghdad",
      cityNameFa: "بغداد",
    },
    country: {
      countryCode: "IRQ",
      countryNameEn: "Iraq",
      countryNameFa: "عراق",
    },
  },
  BMN: {
    airportNameEn: "Bamerny",
    airportNameFa: "فرودگاه بامارنی",
    city: {
      cityCode: "BMN",
      cityNameEn: "Bamerny",
      cityNameFa: "بامرنی",
    },
    country: {
      countryCode: "IRQ",
      countryNameEn: "Iraq",
      countryNameFa: "عراق",
    },
  },
  BSR: {
    airportNameEn: "Basra",
    airportNameFa: "فرودگاه بصره",
    city: {
      cityCode: "BSR",
      cityNameEn: "Basra",
      cityNameFa: "بصره",
    },
    country: {
      countryCode: "IRQ",
      countryNameEn: "Iraq",
      countryNameFa: "عراق",
    },
  },
  EBL: {
    airportNameEn: "Erbil Intl.",
    airportNameFa: "فرودگاه اربیل",
    city: {
      cityCode: "EBL",
      cityNameEn: "Erbil",
      cityNameFa: "اربیل",
    },
    country: {
      countryCode: "IRQ",
      countryNameEn: "Iraq",
      countryNameFa: "عراق",
    },
  },
  ISU: {
    airportNameEn: "Sulaimaniyah International",
    airportNameFa: "فرودگاه بین المللی سلیمانیه",
    city: {
      cityCode: "ISU",
      cityNameEn: "Suleymanieh",
      cityNameFa: "سلیمانیه",
    },
    country: {
      countryCode: "IRQ",
      countryNameEn: "Iraq",
      countryNameFa: "عراق",
    },
  },
  KIK: {
    airportNameEn: "Kirkuk",
    airportNameFa: "فرودگاه کرکوک",
    city: {
      cityCode: "KIK",
      cityNameEn: "Kirkuk",
      cityNameFa: "کرکوک",
    },
    country: {
      countryCode: "IRQ",
      countryNameEn: "Iraq",
      countryNameFa: "عراق",
    },
  },
  NJF: {
    airportNameEn: "Al-Najaf International Airport",
    airportNameFa: "فرودگاه نجف",
    city: {
      cityCode: "NJF",
      cityNameEn: "Najaf",
      cityNameFa: "نجف",
    },
    country: {
      countryCode: "IRQ",
      countryNameEn: "Iraq",
      countryNameFa: "عراق",
    },
  },
  BHO: {
    airportNameEn: "Bhopal",
    airportNameFa: "فرودگاه راجا بهوجا",
    city: {
      cityCode: "BHO",
      cityNameEn: "Bhopal",
      cityNameFa: "بهوپال",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXV: {
    airportNameEn: "Along",
    airportNameFa: "فرودگاه الونگ",
    city: {
      cityCode: "IXV",
      cityNameEn: "Along",
      cityNameFa: "الانگ",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  BEK: {
    airportNameEn: "Bareli",
    airportNameFa: "فرودگاه بریلی",
    city: {
      cityCode: "BEK",
      cityNameEn: "Bareli",
      cityNameFa: "بارلی",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  AGX: {
    airportNameEn: "Agatti Island",
    airportNameFa: "فرودگاه آگاتی آیسلند",
    city: {
      cityCode: "AGX",
      cityNameEn: "Agatti Island",
      cityNameFa: "جزیره آگاتی",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  AJL: {
    airportNameEn: "Aizawl",
    airportNameFa: "فرودگاه لنگپوی",
    city: {
      cityCode: "AJL",
      cityNameEn: "Aizawl",
      cityNameFa: "ایزوال",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  AKD: {
    airportNameEn: "Akola",
    airportNameFa: "فرودگاه اکولا",
    city: {
      cityCode: "AKD",
      cityNameEn: "Akola",
      cityNameFa: "اکولا",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  ATQ: {
    airportNameEn: "Raja Sansi",
    airportNameFa: "فرودگاه بین‌المللی سری گرو رام داس جی",
    city: {
      cityCode: "ATQ",
      cityNameEn: "Amritsar",
      cityNameFa: "امریتسار",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  BBI: {
    airportNameEn: "Bhubaneswar",
    airportNameFa: "فرودگاه بیجو پاتنایک",
    city: {
      cityCode: "BBI",
      cityNameEn: "Bhubaneswar",
      cityNameFa: "بوبانسور",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  BDQ: {
    airportNameEn: "Vadodara",
    airportNameFa: "فرودگاه هارنی سیویل",
    city: {
      cityCode: "BDQ",
      cityNameEn: "Vadodara",
      cityNameFa: "وادودارا",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  BEP: {
    airportNameEn: "Bellary",
    airportNameFa: "فرودگاه بلاری",
    city: {
      cityCode: "BEP",
      cityNameEn: "Bellary",
      cityNameFa: "بلاری",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  BHU: {
    airportNameEn: "Bhavnagar",
    airportNameFa: "فرودگاه باونگر",
    city: {
      cityCode: "BHU",
      cityNameEn: "Bhavnagar",
      cityNameFa: "باونگر",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  BKB: {
    airportNameEn: "Bikaner",
    airportNameFa: "فرودگاه نل",
    city: {
      cityCode: "BKB",
      cityNameEn: "Bikaner",
      cityNameFa: "بیکانر",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  BOM: {
    airportNameEn: "Chhatrapati Shivaji Intl.",
    airportNameFa: "فرودگاه چاتراپاتی شیواجی",
    city: {
      cityCode: "BOM",
      cityNameEn: "Mumbai",
      cityNameFa: "بمبئی",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  BUP: {
    airportNameEn: "Bhatinda",
    airportNameFa: "فرودگاه بهیسیانا ایر فورس بیس",
    city: {
      cityCode: "BUP",
      cityNameEn: "Bhatinda",
      cityNameFa: "بهتیندا",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  CBD: {
    airportNameEn: "Car Nicobar",
    airportNameFa: "پایگاه نیروی هوایی کار نیکوبار",
    city: {
      cityCode: "CBD",
      cityNameEn: "Car Nicobar",
      cityNameFa: "کار نیکوبار",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  CCJ: {
    airportNameEn: "Kozhikode Arpt.",
    airportNameFa: "فرودگاه بین‌المللی کالیکوت",
    city: {
      cityCode: "CCJ",
      cityNameEn: "Kozhikode (CALICUT)",
      cityNameFa: "کوژیکود",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  CCU: {
    airportNameEn: "Netaji Subhas Chandra",
    airportNameFa: "فرودگاه بین‌المللی نتاجی سوباش چاندرا بوز",
    city: {
      cityCode: "CCU",
      cityNameEn: "Kolkata",
      cityNameFa: "کلکتا",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  CDP: {
    airportNameEn: "Cuddapah",
    airportNameFa: "فرودگاه کوداپاه",
    city: {
      cityCode: "CDP",
      cityNameEn: "Cuddapah",
      cityNameFa: "کداپا",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  CJB: {
    airportNameEn: "Peelamedu",
    airportNameFa: "فرودگاه کویمباتور",
    city: {
      cityCode: "CJB",
      cityNameEn: "Coimbatore",
      cityNameFa: "کویمباتور",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  COH: {
    airportNameEn: "Cooch Behar",
    airportNameFa: "فرودگاه کوچ بیهار",
    city: {
      cityCode: "COH",
      cityNameEn: "Cooch Behar",
      cityNameFa: "کوچ بهار",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  COK: {
    airportNameEn: "Cochin Intl.",
    airportNameFa: "فرودگاه بین‌المللی کوچین (ندامباسری)",
    city: {
      cityCode: "COK",
      cityNameEn: "Kochi",
      cityNameFa: "فورت‌ کوچی",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  DBD: {
    airportNameEn: "Dhanbad",
    airportNameFa: "فرودگاه دانباد",
    city: {
      cityCode: "DBD",
      cityNameEn: "Dhanbad",
      cityNameFa: "دانباد",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  DED: {
    airportNameEn: "Dehra Dun",
    airportNameFa: "فرودگاه جالی گرنت",
    city: {
      cityCode: "DED",
      cityNameEn: "Dehra Dun",
      cityNameFa: "دهرادون",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  DEL: {
    airportNameEn: "Indira Gandhi Intl",
    airportNameFa: "فرودگاه ایندیرا گاندی",
    city: {
      cityCode: "DEL",
      cityNameEn: "Delhi",
      cityNameFa: "دهلی",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  DEP: {
    airportNameEn: "Deparizo",
    airportNameFa: "فرودگاه داپورییو",
    city: {
      cityCode: "DEP",
      cityNameEn: "Deparizo",
      cityNameFa: "دپریزو",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  DHM: {
    airportNameEn: "Gaggal Arpt.",
    airportNameFa: "فرودگاه گاگال",
    city: {
      cityCode: "DHM",
      cityNameEn: "Dharamsala",
      cityNameFa: "دارامسالا",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  DIB: {
    airportNameEn: "Dibrugarh",
    airportNameFa: "فرودگاه دایبروگار (چابوا)",
    city: {
      cityCode: "DIB",
      cityNameEn: "Dibrugarh",
      cityNameFa: "دیبروگره",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  DIU: {
    airportNameEn: "Diu",
    airportNameFa: "فرودگاه دیو",
    city: {
      cityCode: "DIU",
      cityNameEn: "Diu",
      cityNameFa: "دیو",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  DMU: {
    airportNameEn: "Dimapur",
    airportNameFa: "فرودگاه دیماپور",
    city: {
      cityCode: "DMU",
      cityNameEn: "Dimapur",
      cityNameFa: "دیماپور",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  GAY: {
    airportNameEn: "Gaya",
    airportNameFa: "فرودگاه گایا",
    city: {
      cityCode: "GAY",
      cityNameEn: "Gaya",
      cityNameFa: "گایا",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  GOI: {
    airportNameEn: "Dabolim",
    airportNameFa: "فرودگاه دابولیم",
    city: {
      cityCode: "GOI",
      cityNameEn: "Goa",
      cityNameFa: "گوا",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  GOP: {
    airportNameEn: "Gorakhpur",
    airportNameFa: "فرودگاه گوراکپور",
    city: {
      cityCode: "GOP",
      cityNameEn: "Gorakhpur",
      cityNameFa: "گوراکپور",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  GUX: {
    airportNameEn: "Guna",
    airportNameFa: "فرودگاه گونا",
    city: {
      cityCode: "GUX",
      cityNameEn: "Guna",
      cityNameFa: "گونا",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  GWL: {
    airportNameEn: "Gwalior",
    airportNameFa: "فرودگاه گوالیور",
    city: {
      cityCode: "GWL",
      cityNameEn: "Gwalior",
      cityNameFa: "گوالیا",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  HBX: {
    airportNameEn: "Hubli",
    airportNameFa: "فرودگاه هوبلی -دارودا",
    city: {
      cityCode: "HBX",
      cityNameEn: "Hubli",
      cityNameFa: "هوبلی",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  HJR: {
    airportNameEn: "Khajuraho",
    airportNameFa: "فرودگاه خاجوراهو",
    city: {
      cityCode: "HJR",
      cityNameEn: "Khajuraho",
      cityNameFa: "خجورهو",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  HSS: {
    airportNameEn: "Hissar",
    airportNameFa: "فرودگاه هیسار",
    city: {
      cityCode: "HSS",
      cityNameEn: "Hissar",
      cityNameFa: "حصار",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  HYD: {
    airportNameEn: "Hyderabad Arpt.",
    airportNameFa: "فرودگاه بین‌المللی راجیو گاندی(فرودگاه بگومپت)",
    city: {
      cityCode: "HYD",
      cityNameEn: "Hyderabad",
      cityNameFa: "حیدرآباد",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IDR: {
    airportNameEn: "Devi Ahilyabai Holkar",
    airportNameFa: "فرودگاه دیوی اهیلیابای هولکار",
    city: {
      cityCode: "IDR",
      cityNameEn: "Indore",
      cityNameFa: "ایندور",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IMF: {
    airportNameEn: "Municipal",
    airportNameFa: "فرودگاه ایمفال",
    city: {
      cityCode: "IMF",
      cityNameEn: "Imphal",
      cityNameFa: "ایمفال",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  ISK: {
    airportNameEn: "Gandhinagar Arpt",
    airportNameFa: "فرودگاه گاندی‌نگر",
    city: {
      cityCode: "ISK",
      cityNameEn: "Nasik",
      cityNameFa: "ناشیک",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXA: {
    airportNameEn: "Singerbhil",
    airportNameFa: "فرودگاه اگرتلا",
    city: {
      cityCode: "IXA",
      cityNameEn: "Agartala",
      cityNameFa: "اگرتلا",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXB: {
    airportNameEn: "Bagdogra",
    airportNameFa: "فرودگاه باگدوگرا",
    city: {
      cityCode: "IXB",
      cityNameEn: "Bagdogra",
      cityNameFa: "باگدوگرا",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXC: {
    airportNameEn: "Chandigarh",
    airportNameFa: "فرودگاه چندی‌گر",
    city: {
      cityCode: "IXC",
      cityNameEn: "Chandigarh",
      cityNameFa: "چندیگره",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXD: {
    airportNameEn: "Bamrauli",
    airportNameFa: " فرودگاه الله‌آباد",
    city: {
      cityCode: "IXD",
      cityNameEn: "Allahabad",
      cityNameFa: "الله آباد",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXE: {
    airportNameEn: "Bajpe",
    airportNameFa: "فرودگاه منگالور (هند)",
    city: {
      cityCode: "IXE",
      cityNameEn: "Mangalore",
      cityNameFa: "مانگالور",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXG: {
    airportNameEn: "Sambre",
    airportNameFa: "فرودگاه بلگایوم",
    city: {
      cityCode: "IXG",
      cityNameEn: "Belgaum",
      cityNameFa: "بلگایوم",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXH: {
    airportNameEn: "Kailashahar",
    airportNameFa: "فرودگاه کایلاشهر",
    city: {
      cityCode: "IXH",
      cityNameEn: "Kailashahar",
      cityNameFa: "کایلاشهار",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXJ: {
    airportNameEn: "Satwari",
    airportNameFa: "فرودگاه جامو",
    city: {
      cityCode: "IXJ",
      cityNameEn: "Jammu",
      cityNameFa: "جامو",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXK: {
    airportNameEn: "Keshod",
    airportNameFa: "فرودگاه کشود ",
    city: {
      cityCode: "IXK",
      cityNameEn: "Keshod",
      cityNameFa: "کیشد",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXL: {
    airportNameEn: "Bakula Rimpoche",
    airportNameFa: "فرودگاه کوشک باکولا ریمپچ",
    city: {
      cityCode: "IXL",
      cityNameEn: "Leh",
      cityNameFa: "له",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXM: {
    airportNameEn: "Madurai",
    airportNameFa: "فرودگاه مادوری",
    city: {
      cityCode: "IXM",
      cityNameEn: "Madurai",
      cityNameFa: "مادورای",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXN: {
    airportNameEn: "Khowai",
    airportNameFa: "فرودگاه خوایی",
    city: {
      cityCode: "IXN",
      cityNameEn: "Khowai",
      cityNameFa: "خوآی",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXP: {
    airportNameEn: "Pathankot",
    airportNameFa: "فرودگاه پاتانکوت",
    city: {
      cityCode: "IXP",
      cityNameEn: "Pathankot",
      cityNameFa: "پاتانکوت",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXQ: {
    airportNameEn: "Kamalpur",
    airportNameFa: "فرودگاه کمال‌پور",
    city: {
      cityCode: "IXQ",
      cityNameEn: "Kamalpur",
      cityNameFa: "کمالپور",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXR: {
    airportNameEn: "Birsa Munda Intl.",
    airportNameFa: "فرودگاه بیرسا موندا (رانچی) ",
    city: {
      cityCode: "IXR",
      cityNameEn: "Ranchi",
      cityNameFa: "رانچی",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXS: {
    airportNameEn: "Kumbhirgram",
    airportNameFa: "فرودگاه سیچار (کومبهیرگرام) ",
    city: {
      cityCode: "IXS",
      cityNameEn: "Silchar",
      cityNameFa: "سیلچر",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXT: {
    airportNameEn: "Pasighat",
    airportNameFa: "فرودگاه پاسیگات",
    city: {
      cityCode: "IXT",
      cityNameEn: "Pasighat",
      cityNameFa: "پاسیقات",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  VNS: {
    airportNameEn: "Varanasi",
    airportNameFa: "فرودگاه بنارس",
    city: {
      cityCode: "VNS",
      cityNameEn: "Varanasi",
      cityNameFa: "بنارس",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXW: {
    airportNameEn: "Sonari",
    airportNameFa: "فرودگاه سانری",
    city: {
      cityCode: "IXW",
      cityNameEn: "Jamshedpur",
      cityNameFa: "جمشدپور",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXY: {
    airportNameEn: "Kandla",
    airportNameFa: "فرودگاه کاندلا (گاندهیدهام) ",
    city: {
      cityCode: "IXY",
      cityNameEn: "Kandla",
      cityNameFa: "کندلا",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXZ: {
    airportNameEn: "Port Blair",
    airportNameFa: "فرودگاه بین‌المللی ویر سوارکار",
    city: {
      cityCode: "IXZ",
      cityNameEn: "Port Blair",
      cityNameFa: "بندر بلر",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  JAI: {
    airportNameEn: "Sanganeer",
    airportNameFa: "فرودگاه جیپور",
    city: {
      cityCode: "JAI",
      cityNameEn: "Jaipur",
      cityNameFa: "جیپور",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  JDH: {
    airportNameEn: "Jodhpur",
    airportNameFa: "فرودگاه جوداپور",
    city: {
      cityCode: "JDH",
      cityNameEn: "Jodhpur",
      cityNameFa: "جادهاپور",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  JGA: {
    airportNameEn: "Govardhanpur",
    airportNameFa: "فرودگاه جام‌نگر",
    city: {
      cityCode: "JGA",
      cityNameEn: "Jamnagar",
      cityNameFa: "جامنگر",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  JGB: {
    airportNameEn: "Jagdalpur",
    airportNameFa: "فرودگاه جگدالپر",
    city: {
      cityCode: "JGB",
      cityNameEn: "Jagdalpur",
      cityNameFa: "جگدلپور",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  JLR: {
    airportNameEn: "Jabalpur",
    airportNameFa: "فرودگاه جبال‌پور",
    city: {
      cityCode: "JLR",
      cityNameEn: "Jabalpur",
      cityNameFa: "جبالپور",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  JRH: {
    airportNameEn: "Rowriah",
    airportNameFa: "فرودگاه جورهت",
    city: {
      cityCode: "JRH",
      cityNameEn: "Jorhat",
      cityNameFa: "جرهت",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  KLH: {
    airportNameEn: "Kolhapur",
    airportNameFa: "فرودگاه کولاپور",
    city: {
      cityCode: "KLH",
      cityNameEn: "Kolhapur",
      cityNameFa: "کولاپور",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  KNU: {
    airportNameEn: "Kanpur",
    airportNameFa: "فرودگاه کان‌پور",
    city: {
      cityCode: "KNU",
      cityNameEn: "Kanpur",
      cityNameFa: "کانپور",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  KTU: {
    airportNameEn: "Kota",
    airportNameFa: "فرودگاه کوتا",
    city: {
      cityCode: "KTU",
      cityNameEn: "Kota",
      cityNameFa: "کوتا",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  KUU: {
    airportNameEn: "Kullu Manali",
    airportNameFa: "فرودگاه بونتار (کولو)",
    city: {
      cityCode: "KUU",
      cityNameEn: "Bhuntar Kullu.",
      cityNameFa: "بنتار کول",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  LDA: {
    airportNameEn: "Malda",
    airportNameFa: "فرودگاه مالدا",
    city: {
      cityCode: "LDA",
      cityNameEn: "Malda",
      cityNameFa: "ملدا",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  LKO: {
    airportNameEn: "Amausi",
    airportNameFa: "فرودگاه اماوسی",
    city: {
      cityCode: "LKO",
      cityNameEn: "Lucknow",
      cityNameFa: "لکنو",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  LUH: {
    airportNameEn: "Amritsar",
    airportNameFa: "فرودگاه سهنول",
    city: {
      cityCode: "LUH",
      cityNameEn: "Ludhiana",
      cityNameFa: "لودهیانا",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  MAA: {
    airportNameEn: "Madras Intl.",
    airportNameFa: "فرودگاه بین‌المللی چنای (مادراس)",
    city: {
      cityCode: "MAA",
      cityNameEn: "Chennai/Madras",
      cityNameFa: "چننی/مادراس",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  MYQ: {
    airportNameEn: "Mysore",
    airportNameFa: "فرودگاه مایسور مانداکالی",
    city: {
      cityCode: "MYQ",
      cityNameEn: "Mysore",
      cityNameFa: "میسور",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  MZU: {
    airportNameEn: "Muzaffarpur",
    airportNameFa: "فرودگاه مظفرپور",
    city: {
      cityCode: "MZU",
      cityNameEn: "Muzaffarpur",
      cityNameFa: "مظفرپور",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  NDC: {
    airportNameEn: "Nanded",
    airportNameFa: "فرودگاه ناندد",
    city: {
      cityCode: "NDC",
      cityNameEn: "Nanded",
      cityNameFa: "ناندد",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  NMB: {
    airportNameEn: "Daman",
    airportNameFa: "فرودگاه دامان",
    city: {
      cityCode: "NMB",
      cityNameEn: "Daman",
      cityNameFa: "دامن",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  NVY: {
    airportNameEn: "Neyveli",
    airportNameFa: "فرودگاه نیولی",
    city: {
      cityCode: "NVY",
      cityNameEn: "Neyveli",
      cityNameFa: "نیوولی",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  PAB: {
    airportNameEn: "Bilaspur",
    airportNameFa: "فرودگاه بیلاسپور",
    city: {
      cityCode: "PAB",
      cityNameEn: "Bilaspur",
      cityNameFa: "بیلاسپور",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  PAT: {
    airportNameEn: "Patna",
    airportNameFa: "فرودگاه لوک نایاک جایاپراکاش",
    city: {
      cityCode: "PAT",
      cityNameEn: "Patna",
      cityNameFa: "پاتنا",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  PBD: {
    airportNameEn: "Porbandar",
    airportNameFa: "فرودگاه پربندر",
    city: {
      cityCode: "PBD",
      cityNameEn: "Porbandar",
      cityNameFa: "پوربندر",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  PGH: {
    airportNameEn: "Pantnagar",
    airportNameFa: "فرودگاه پانتناگار",
    city: {
      cityCode: "PGH",
      cityNameEn: "Pantnagar",
      cityNameFa: "پنتنگر",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  PNQ: {
    airportNameEn: "Lohegaon",
    airportNameFa: "فرودگاه پون",
    city: {
      cityCode: "PNQ",
      cityNameEn: "Pune",
      cityNameFa: "پونه",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  PNY: {
    airportNameEn: "Pondicherry",
    airportNameFa: "فرودگاه پاندیچری",
    city: {
      cityCode: "PNY",
      cityNameEn: "Pondicherry",
      cityNameFa: "پوندیچری",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  PUT: {
    airportNameEn: "Puttaprathe",
    airportNameFa: "فرودگاه پوتاپراته",
    city: {
      cityCode: "PUT",
      cityNameEn: "Puttaparthi",
      cityNameFa: "پاتاپارتی",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  PYB: {
    airportNameEn: "Jeypore",
    airportNameFa: "فرودگاه جیپور",
    city: {
      cityCode: "PYB",
      cityNameEn: "Jeypore",
      cityNameFa: "جیپر",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  RAJ: {
    airportNameEn: "Civil",
    airportNameFa: "فرودگاه راجکوت",
    city: {
      cityCode: "RAJ",
      cityNameEn: "Rajkot",
      cityNameFa: "راجکات",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  RGH: {
    airportNameEn: "Balurghat",
    airportNameFa: "فرودگاه بالورقات",
    city: {
      cityCode: "RGH",
      cityNameEn: "Balurghat",
      cityNameFa: "بالورقات",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  RJA: {
    airportNameEn: "Rajahmundry",
    airportNameFa: "فرودگاه راجاماهندری",
    city: {
      cityCode: "RJA",
      cityNameEn: "Rajahmundry",
      cityNameFa: "راجاماهندری",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  RJI: {
    airportNameEn: "Rajouri",
    airportNameFa: "فرودگاه راجوری",
    city: {
      cityCode: "RJI",
      cityNameEn: "Rajouri",
      cityNameFa: "راجوری",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  RPR: {
    airportNameEn: "Raipur",
    airportNameFa: "فرودگاه راجپور",
    city: {
      cityCode: "RPR",
      cityNameEn: "Raipur",
      cityNameFa: "رایپور",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  RTC: {
    airportNameEn: "Ratnagiri",
    airportNameFa: "فرودگاه رانتاگیری",
    city: {
      cityCode: "RTC",
      cityNameEn: "Ratnagiri",
      cityNameFa: "رتنگیری",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  RUP: {
    airportNameEn: "Rupsi",
    airportNameFa: "فرودگاه راپسی",
    city: {
      cityCode: "RUP",
      cityNameEn: "Rupsi",
      cityNameFa: "روپسی",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  SHL: {
    airportNameEn: "Barapani",
    airportNameFa: "فرودگاه شیلانگ",
    city: {
      cityCode: "SHL",
      cityNameEn: "Shillong",
      cityNameFa: "شیلونگ",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  SLV: {
    airportNameEn: "Simla",
    airportNameFa: "فرودگاه شیملا",
    city: {
      cityCode: "SLV",
      cityNameEn: "Simla",
      cityNameFa: "سیملا",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  SSE: {
    airportNameEn: "Sholapur",
    airportNameFa: "فرودگاه سولاپور",
    city: {
      cityCode: "SSE",
      cityNameEn: "Sholapur",
      cityNameFa: "شولاپور",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  STV: {
    airportNameEn: "Surat",
    airportNameFa: "فرودگاه سورات",
    city: {
      cityCode: "STV",
      cityNameEn: "Surat",
      cityNameFa: "سورات",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  SXR: {
    airportNameEn: "Srinagar",
    airportNameFa: "فرودگاه سرینگر",
    city: {
      cityCode: "SXR",
      cityNameEn: "Srinagar",
      cityNameFa: "سریناگار",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  SXV: {
    airportNameEn: "Salem",
    airportNameFa: "فرودگاه سالم (هند)",
    city: {
      cityCode: "SXV",
      cityNameEn: "Salem",
      cityNameFa: "سالم",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  TEI: {
    airportNameEn: "Tezu",
    airportNameFa: "فرودگاه تزو",
    city: {
      cityCode: "TEI",
      cityNameEn: "Tezu",
      cityNameFa: "تزو",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  TEZ: {
    airportNameEn: "Salonibari",
    airportNameFa: "فرودگاه تزپور",
    city: {
      cityCode: "TEZ",
      cityNameEn: "Tezpur",
      cityNameFa: "تزپور",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  TIR: {
    airportNameEn: "Tirupati",
    airportNameFa: "فرودگاه تیروپاتی",
    city: {
      cityCode: "TIR",
      cityNameEn: "Tirupati",
      cityNameFa: "تیروپاتی",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  TNI: {
    airportNameEn: "Satna",
    airportNameFa: "فرودگاه ساتنا",
    city: {
      cityCode: "TNI",
      cityNameEn: "Satna",
      cityNameFa: "ساتنا",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  TRV: {
    airportNameEn: "Thiruvananthapuram Intl.",
    airportNameFa: "فرودگاه بین‌المللی تریواندروم",
    city: {
      cityCode: "TRV",
      cityNameEn: "Trivandrum",
      cityNameFa: "تریواندروم",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  TRZ: {
    airportNameEn: "Tiruchchirappalli",
    airportNameFa: "فرودگاه تیروچیراپالی",
    city: {
      cityCode: "TRZ",
      cityNameEn: "Tiruchchirappalli",
      cityNameFa: "تیروچیراپالی",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  UDR: {
    airportNameEn: "Dabok",
    airportNameFa: "فرودگاه اودی‌پور",
    city: {
      cityCode: "UDR",
      cityNameEn: "Udaipur",
      cityNameFa: "اودیپور",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  VGA: {
    airportNameEn: "Vijayawada",
    airportNameFa: "فرودگاه ویجیاوادا",
    city: {
      cityCode: "VGA",
      cityNameEn: "Vijayawada",
      cityNameFa: "ویجیودا",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  VTZ: {
    airportNameEn: "Vishakhapatnam",
    airportNameFa: "فرودگاه ویساکاپاتنام",
    city: {
      cityCode: "VTZ",
      cityNameEn: "Vishakhapatnam",
      cityNameFa: "ویشاخاپاتنام",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  WGC: {
    airportNameEn: "Warangal",
    airportNameFa: "فرودگاه واراناگل",
    city: {
      cityCode: "WGC",
      cityNameEn: "Warangal",
      cityNameFa: "واراناگل",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  ZER: {
    airportNameEn: "Zero",
    airportNameFa: "فرودگاه زیرو",
    city: {
      cityCode: "ZER",
      cityNameEn: "Zero",
      cityNameFa: "زیرو",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  AGR: {
    airportNameEn: "Kheria",
    airportNameFa: "فرودگاه آگرا/آگرا ایر فورس استیشن",
    city: {
      cityCode: "AGR",
      cityNameEn: "Agra",
      cityNameFa: "آگرا",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  AMD: {
    airportNameEn: "Ahmedabad",
    airportNameFa: "فرودگاه بین‌المللی سردار ولابهبهی پتل",
    city: {
      cityCode: "AMD",
      cityNameEn: "Ahmedabad",
      cityNameFa: "احمدآباد",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  BHJ: {
    airportNameEn: "Rudra Mata",
    airportNameFa: "فرودگاه بوج / پایگاه هوایی رودرا ماتا بوج",
    city: {
      cityCode: "BHJ",
      cityNameEn: "Bhuj",
      cityNameFa: "بوج",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  BLR: {
    airportNameEn: "Bangalore Intl. Arpt.",
    airportNameFa: "فرودگاه بین‌المللی بنگالورو (فرودگاه بین‌المللی هل بنگلر)",
    city: {
      cityCode: "BLR",
      cityNameEn: "Bangalore",
      cityNameFa: "بنگلور",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  GAU: {
    airportNameEn: "Borjhar",
    airportNameFa: "فرودگاه بین‌المللی لوکپریرا گوپیناز بوردولوئی",
    city: {
      cityCode: "GAU",
      cityNameEn: "Gawahati",
      cityNameFa: "گاواهاتی",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXI: {
    airportNameEn: "Lilabari",
    airportNameFa: "فرودگاه لیلاباری (نورث لاخیمپور)",
    city: {
      cityCode: "IXI",
      cityNameEn: "Lilabari",
      cityNameFa: "لیلاباری",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXU: {
    airportNameEn: "Chikkalthana",
    airportNameFa: "فرودگاه اورنگ‌آباد (چیکالتانا)",
    city: {
      cityCode: "IXU",
      cityNameEn: "Aurangabad",
      cityNameFa: "اورنگآباد",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  JSA: {
    airportNameEn: "Jaisalmer",
    airportNameFa: "فرودگاه جیزلمر",
    city: {
      cityCode: "JSA",
      cityNameEn: "Jaisalmer",
      cityNameFa: "جاسالمیر",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  NAG: {
    airportNameEn: "Sonegaon",
    airportNameFa: "فرودگاه بین‌المللی دکتر باباساهب آمبدکار",
    city: {
      cityCode: "NAG",
      cityNameEn: "Nagpur",
      cityNameFa: "ناگپور",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  RRK: {
    airportNameEn: "Rourkela",
    airportNameFa: "فرودگاه رورکلا",
    city: {
      cityCode: "RRK",
      cityNameEn: "Rourkela",
      cityNameFa: "رورکلا",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  TJV: {
    airportNameEn: "Thanjavur",
    airportNameFa: "فرودگاه تانجاوور",
    city: {
      cityCode: "TJV",
      cityNameEn: "Thanjavur",
      cityNameFa: "تانجاوور",
    },
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  KAM: {
    airportNameEn: "Kamaran Is",
    airportNameFa: "فرودگاه کاماران",
    city: {
      cityCode: "KAM",
      cityNameEn: "Kamaran Is",
      cityNameFa: "کامران است",
    },
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  AXK: {
    airportNameEn: "Ataq",
    airportNameFa: "فرودگاه عتاق",
    city: {
      cityCode: "AXK",
      cityNameEn: "Ataq",
      cityNameFa: "عتاق",
    },
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  BHN: {
    airportNameEn: "Beihan",
    airportNameFa: "فرودگاه بیهن",
    city: {
      cityCode: "BHN",
      cityNameEn: "Beihan",
      cityNameFa: "بیهان",
    },
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  BUK: {
    airportNameEn: "Albuq",
    airportNameFa: "فرودگاه البوک",
    city: {
      cityCode: "BUK",
      cityNameEn: "Albuq",
      cityNameFa: "البوق",
    },
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  EAB: {
    airportNameEn: "Abbse Airport",
    airportNameFa: "فرودگاه آبسه",
    city: {
      cityCode: "EAB",
      cityNameEn: "Abbse",
      cityNameFa: "ابسه",
    },
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  GXF: {
    airportNameEn: "Seiyun",
    airportNameFa: "فرودگاه شهر سیئون",
    city: {
      cityCode: "GXF",
      cityNameEn: "Seiyun",
      cityNameFa: "سیئون",
    },
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  HOD: {
    airportNameEn: "Hodeidah Arpt",
    airportNameFa: "فرودگاه بین‌المللی هودیدا",
    city: {
      cityCode: "HOD",
      cityNameEn: "Hodeidah",
      cityNameFa: "حدیده",
    },
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  IHN: {
    airportNameEn: "Qishn",
    airportNameFa: "فرودگاه قیشن",
    city: {
      cityCode: "IHN",
      cityNameEn: "Qishn",
      cityNameFa: "قیشن",
    },
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  MYN: {
    airportNameEn: "Mareb",
    airportNameFa: "فرودگاه مأرب",
    city: {
      cityCode: "MYN",
      cityNameEn: "Mareb",
      cityNameFa: "مارب",
    },
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  SAH: {
    airportNameEn: "El Rahaba Arpt.",
    airportNameFa: "فرودگاه بین‌المللی صنعا",
    city: {
      cityCode: "SAH",
      cityNameEn: "Sanaa",
      cityNameFa: "صنعا",
    },
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  SCT: {
    airportNameEn: "Socotra",
    airportNameFa: "فرودگاه سقطرا",
    city: {
      cityCode: "SCT",
      cityNameEn: "Socotra",
      cityNameFa: "سقطری",
    },
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  SYE: {
    airportNameEn: "Sadah",
    airportNameFa: "فرودگاه صعده",
    city: {
      cityCode: "SYE",
      cityNameEn: "Sadah",
      cityNameFa: "سادا",
    },
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  TAI: {
    airportNameEn: "Al Janad",
    airportNameFa: "فرودگاه بین‌المللی تعز",
    city: {
      cityCode: "TAI",
      cityNameEn: "Taizz",
      cityNameFa: "تعزیه",
    },
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  WDA: {
    airportNameEn: "Wadi Ain",
    airportNameFa: "فرودگاه وادی العین",
    city: {
      cityCode: "WDA",
      cityNameEn: "Wadi Ain",
      cityNameFa: "وادی عین",
    },
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  AAY: {
    airportNameEn: "Al Ghaydah",
    airportNameFa: "فرودگاه الغیضه",
    city: {
      cityCode: "AAY",
      cityNameEn: "Al Ghaydah",
      cityNameFa: "الغیضه",
    },
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  ADE: {
    airportNameEn: "Intl.",
    airportNameFa: "فرودگاه بین‌المللی عدن",
    city: {
      cityCode: "ADE",
      cityNameEn: "Aden",
      cityNameFa: "آدن",
    },
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  RIY: {
    airportNameEn: "Riyan Mukalla",
    airportNameFa: "فرودگاه ریان موکالا",
    city: {
      cityCode: "RIY",
      cityNameEn: "Riyan Mukalla",
      cityNameFa: "رایان موکالا",
    },
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  DXB: {
    airportNameEn: "Dubai",
    airportNameFa: "فرودگاه دبی",
    city: {
      cityCode: "DXB",
      cityNameEn: "Dubai",
      cityNameFa: "دبی",
    },
    country: {
      countryCode: "ARE",
      countryNameEn: "United Arab Emirates",
      countryNameFa: "امارات متحده عربی",
    },
  },
  DWC: {
    airportNameEn: "Al Maktoum International",
    airportNameFa: "فرودگاه دبی وورلد سنترال",
    city: {
      cityCode: "DXB",
      cityNameEn: "Dubai",
      cityNameFa: "دبی",
    },
    country: {
      countryCode: "ARE",
      countryNameEn: "United Arab Emirates",
      countryNameFa: "امارات متحده عربی",
    },
  },
  XNB: {
    airportNameEn: "Dubai Bus Station Airport",
    airportNameFa: "ایستگاه اتوبوس دبی",
    city: {
      cityCode: "DXB",
      cityNameEn: "Dubai",
      cityNameFa: "دبی",
    },
    country: {
      countryCode: "ARE",
      countryNameEn: "United Arab Emirates",
      countryNameFa: "امارات متحده عربی",
    },
  },
  SHJ: {
    airportNameEn: "Sharjah",
    airportNameFa: "فرودگاه بین‌المللی شارجه",
    city: {
      cityCode: "SHJ",
      cityNameEn: "Sharjah",
      cityNameFa: "شارجه",
    },
    country: {
      countryCode: "ARE",
      countryNameEn: "United Arab Emirates",
      countryNameFa: "امارات متحده عربی",
    },
  },
  AUH: {
    airportNameEn: "Abu Dhabi Intl.",
    airportNameFa: "فرودگاه بین‌المللی ابوظبی",
    city: {
      cityCode: "AUH",
      cityNameEn: "Abu Dhabi",
      cityNameFa: "ابوظبی",
    },
    country: {
      countryCode: "ARE",
      countryNameEn: "United Arab Emirates",
      countryNameFa: "امارات متحده عربی",
    },
  },
  AZI: {
    airportNameEn: "Bateen",
    airportNameFa: "فرودگاه باتین",
    city: {
      cityCode: "AUH",
      cityNameEn: "Abu Dhabi",
      cityNameFa: "ابوظبی",
    },
    country: {
      countryCode: "ARE",
      countryNameEn: "United Arab Emirates",
      countryNameFa: "امارات متحده عربی",
    },
  },
  DHF: {
    airportNameEn: "Al Dhafra Military Apt",
    airportNameFa: "فرودگاه الظفره",
    city: {
      cityCode: "AUH",
      cityNameEn: "Abu Dhabi",
      cityNameFa: "ابوظبی",
    },
    country: {
      countryCode: "ARE",
      countryNameEn: "United Arab Emirates",
      countryNameFa: "امارات متحده عربی",
    },
  },
  ZVJ: {
    airportNameEn: "Abu Dhabi Bus Station",
    airportNameFa: "ایستگاه اتوبوس ابوظبی",
    city: {
      cityCode: "AUH",
      cityNameEn: "Abu Dhabi",
      cityNameFa: "ابوظبی",
    },
    country: {
      countryCode: "ARE",
      countryNameEn: "United Arab Emirates",
      countryNameFa: "امارات متحده عربی",
    },
  },
  FJR: {
    airportNameEn: "Fujairah Intl",
    airportNameFa: "فرودگاه بین‌المللی فجیره (کارگو اونلی)",
    city: {
      cityCode: "FJR",
      cityNameEn: "Al Fujairah",
      cityNameFa: "فوجیره",
    },
    country: {
      countryCode: "ARE",
      countryNameEn: "United Arab Emirates",
      countryNameFa: "امارات متحده عربی",
    },
  },
  NHD: {
    airportNameEn: "Minhad Ab",
    airportNameFa: "فرودگاه مینهاد ای بی",
    city: {
      cityCode: "NHD",
      cityNameEn: "Minhad Ab",
      cityNameFa: "مینهد آب",
    },
    country: {
      countryCode: "ARE",
      countryNameEn: "United Arab Emirates",
      countryNameFa: "امارات متحده عربی",
    },
  },
  RKT: {
    airportNameEn: "Ras Al Khaimah",
    airportNameFa: "فرودگاه بین‌المللی راس الخیمه",
    city: {
      cityCode: "RKT",
      cityNameEn: "Ras Al Khaimah",
      cityNameFa: "راس الخیمه",
    },
    country: {
      countryCode: "ARE",
      countryNameEn: "United Arab Emirates",
      countryNameFa: "امارات متحده عربی",
    },
  },
  AAN: {
    airportNameEn: "Al Ain",
    airportNameFa: "فرودگاه بین المللی العین",
    city: {
      cityCode: "AAN",
      cityNameEn: "Al Ain",
      cityNameFa: "العین",
    },
    country: {
      countryCode: "ARE",
      countryNameEn: "United Arab Emirates",
      countryNameFa: "امارات متحده عربی",
    },
  },
  GYD: {
    airportNameEn: "Heydar Aliyev Intl.",
    airportNameFa: "فرودگاه بین‌المللی حیدر علی‌اف (بینا) ",
    city: {
      cityCode: "BAK",
      cityNameEn: "Baku",
      cityNameFa: "باکو",
    },
    country: {
      countryCode: "AZE",
      countryNameEn: "Azerbaijan",
      countryNameFa: "جمهوری آذربایجان",
    },
  },
  ZXT: {
    airportNameEn: "Zabrat",
    airportNameFa: "فرودگاه زبرات",
    city: {
      cityCode: "BAK",
      cityNameEn: "Baku",
      cityNameFa: "باکو",
    },
    country: {
      countryCode: "AZE",
      countryNameEn: "Azerbaijan",
      countryNameFa: "جمهوری آذربایجان",
    },
  },
  KVD: {
    airportNameEn: "Gyandzha",
    airportNameFa: "فرودگاه بین‌المللی گنجه",
    city: {
      cityCode: "KVD",
      cityNameEn: "Ganja",
      cityNameFa: "گنجه",
    },
    country: {
      countryCode: "AZE",
      countryNameEn: "Azerbaijan",
      countryNameFa: "جمهوری آذربایجان",
    },
  },
  NAJ: {
    airportNameEn: "Nakhichevan",
    airportNameFa: "فرودگاه نخیچوان",
    city: {
      cityCode: "NAJ",
      cityNameEn: "Nakhichevan",
      cityNameFa: "نخجوان",
    },
    country: {
      countryCode: "AZE",
      countryNameEn: "Azerbaijan",
      countryNameFa: "جمهوری آذربایجان",
    },
  },
  TBS: {
    airportNameEn: "Tbilisi",
    airportNameFa: "فرودگاه تفلیس",
    city: {
      cityCode: "TBS",
      cityNameEn: "Tbilisi",
      cityNameFa: "تفلیس",
    },
    country: {
      countryCode: "GEO",
      countryNameEn: "Georgia",
      countryNameFa: "گرجستان",
    },
  },
  BUS: {
    airportNameEn: "Batumi",
    airportNameFa: "فرودگاه باتومی",
    city: {
      cityCode: "BUS",
      cityNameEn: "Batumi",
      cityNameFa: "باتومی",
    },
    country: {
      countryCode: "GEO",
      countryNameEn: "Georgia",
      countryNameFa: "گرجستان",
    },
  },
  KUT: {
    airportNameEn: "Kopitnari",
    airportNameFa: "فرودگاه بین‌المللی کوتایسی",
    city: {
      cityCode: "KUT",
      cityNameEn: "Kutaisi",
      cityNameFa: "کوتایسی",
    },
    country: {
      countryCode: "GEO",
      countryNameEn: "Georgia",
      countryNameFa: "گرجستان",
    },
  },
  SUI: {
    airportNameEn: "Babusheri",
    airportNameFa: "فرودگاه سوخومی درندا",
    city: {
      cityCode: "SUI",
      cityNameEn: "Sukhumi",
      cityNameFa: "سوخومی",
    },
    country: {
      countryCode: "GEO",
      countryNameEn: "Georgia",
      countryNameFa: "گرجستان",
    },
  },
  SKD: {
    airportNameEn: "Samarkand",
    airportNameFa: "فرودگاه سمرقند",
    city: {
      cityCode: "SKD",
      cityNameEn: "Samarkand",
      cityNameFa: "سمرقند",
    },
    country: {
      countryCode: "UZB",
      countryNameEn: "Uzbekistan",
      countryNameFa: "ازبکستان",
    },
  },
  AFS: {
    airportNameEn: "Zarafshan",
    airportNameFa: "فرودگاه زرافشان",
    city: {
      cityCode: "AFS",
      cityNameEn: "Zarafshan",
      cityNameFa: "زرافشان",
    },
    country: {
      countryCode: "UZB",
      countryNameEn: "Uzbekistan",
      countryNameFa: "ازبکستان",
    },
  },
  AZN: {
    airportNameEn: "Andizhan",
    airportNameFa: "فرودگاه اندیجان",
    city: {
      cityCode: "AZN",
      cityNameEn: "Andizhan",
      cityNameFa: "اندیژان",
    },
    country: {
      countryCode: "UZB",
      countryNameEn: "Uzbekistan",
      countryNameFa: "ازبکستان",
    },
  },
  BHK: {
    airportNameEn: "Bukhara",
    airportNameFa: "فرودگاه بین‌المللی بخارا",
    city: {
      cityCode: "BHK",
      cityNameEn: "Bukhara",
      cityNameFa: "بخارا",
    },
    country: {
      countryCode: "UZB",
      countryNameEn: "Uzbekistan",
      countryNameFa: "ازبکستان",
    },
  },
  FEG: {
    airportNameEn: "Fergana",
    airportNameFa: "فرودگاه فرغانه",
    city: {
      cityCode: "FEG",
      cityNameEn: "Fergana",
      cityNameFa: "فرغانه",
    },
    country: {
      countryCode: "UZB",
      countryNameEn: "Uzbekistan",
      countryNameFa: "ازبکستان",
    },
  },
  NCU: {
    airportNameEn: "Nukus",
    airportNameFa: "فرودگاه نوکوس",
    city: {
      cityCode: "NCU",
      cityNameEn: "Nukus",
      cityNameFa: "نوکوس",
    },
    country: {
      countryCode: "UZB",
      countryNameEn: "Uzbekistan",
      countryNameFa: "ازبکستان",
    },
  },
  NMA: {
    airportNameEn: "Namangan",
    airportNameFa: "فرودگاه نامنگان",
    city: {
      cityCode: "NMA",
      cityNameEn: "Namangan",
      cityNameFa: "نمنگان",
    },
    country: {
      countryCode: "UZB",
      countryNameEn: "Uzbekistan",
      countryNameFa: "ازبکستان",
    },
  },
  TAS: {
    airportNameEn: "Yuzhny",
    airportNameFa: "فرودگاه بین‌المللی تاشکند",
    city: {
      cityCode: "TAS",
      cityNameEn: "Tashkent",
      cityNameFa: "تاشکند",
    },
    country: {
      countryCode: "UZB",
      countryNameEn: "Uzbekistan",
      countryNameFa: "ازبکستان",
    },
  },
  TMJ: {
    airportNameEn: "Termez",
    airportNameFa: "فرودگاه ترمذ",
    city: {
      cityCode: "TMJ",
      cityNameEn: "Termez",
      cityNameFa: "ترمز",
    },
    country: {
      countryCode: "UZB",
      countryNameEn: "Uzbekistan",
      countryNameFa: "ازبکستان",
    },
  },
  UGC: {
    airportNameEn: "Urgench",
    airportNameFa: "فرودگاه اورگنچ",
    city: {
      cityCode: "UGC",
      cityNameEn: "Urgench",
      cityNameFa: "اورگنچ",
    },
    country: {
      countryCode: "UZB",
      countryNameEn: "Uzbekistan",
      countryNameFa: "ازبکستان",
    },
  },
  KSQ: {
    airportNameEn: "Khanabad",
    airportNameFa: "پایگاه هوایی کارشی خان‌آباد",
    city: {
      cityCode: "KSQ",
      cityNameEn: "Karshi",
      cityNameFa: "کارشی",
    },
    country: {
      countryCode: "UZB",
      countryNameEn: "Uzbekistan",
      countryNameFa: "ازبکستان",
    },
  },
  EBM: {
    airportNameEn: "El Borma",
    airportNameFa: "فرودگاه ال بورما",
    city: {
      cityCode: "EBM",
      cityNameEn: "El Borma",
      cityNameFa: "ال بورما",
    },
    country: {
      countryCode: "TUN",
      countryNameEn: "Tunisia",
      countryNameFa: "تونس",
    },
  },
  DJE: {
    airportNameEn: "Djerba-Zarzis",
    airportNameFa: "فرودگاه بین‌المللی دیربا–زارزیس",
    city: {
      cityCode: "DJE",
      cityNameEn: "Djerba",
      cityNameFa: "جربا",
    },
    country: {
      countryCode: "TUN",
      countryNameEn: "Tunisia",
      countryNameFa: "تونس",
    },
  },
  GAF: {
    airportNameEn: "Gafsa",
    airportNameFa: "فرودگاه بین‌المللی گافساکسار",
    city: {
      cityCode: "GAF",
      cityNameEn: "Gafsa",
      cityNameFa: "گفسا",
    },
    country: {
      countryCode: "TUN",
      countryNameEn: "Tunisia",
      countryNameFa: "تونس",
    },
  },
  GAE: {
    airportNameEn: "Gabes",
    airportNameFa: "فرودگاه بین‌المللی گابیس-ماتماتا",
    city: {
      cityCode: "GAE",
      cityNameEn: "Gabes",
      cityNameFa: "گابس",
    },
    country: {
      countryCode: "TUN",
      countryNameEn: "Tunisia",
      countryNameFa: "تونس",
    },
  },
  MIR: {
    airportNameEn: "Habib Bourguiba",
    airportNameFa: "فرودگاه بین‌المللی منستیر – حبیب بورقیبه",
    city: {
      cityCode: "MIR",
      cityNameEn: "Monastir",
      cityNameFa: "منستیر",
    },
    country: {
      countryCode: "TUN",
      countryNameEn: "Tunisia",
      countryNameFa: "تونس",
    },
  },
  TBJ: {
    airportNameEn: "Tabarka",
    airportNameFa: "فرودگاه بین‌المللی عین دراهم الدولی",
    city: {
      cityCode: "TBJ",
      cityNameEn: "Tabarka",
      cityNameFa: "تبرک",
    },
    country: {
      countryCode: "TUN",
      countryNameEn: "Tunisia",
      countryNameFa: "تونس",
    },
  },
  TOE: {
    airportNameEn: "Tozeur",
    airportNameFa: "فرودگاه بین‌المللی  توزر نفتا",
    city: {
      cityCode: "TOE",
      cityNameEn: "Tozeur",
      cityNameFa: "توزور",
    },
    country: {
      countryCode: "TUN",
      countryNameEn: "Tunisia",
      countryNameFa: "تونس",
    },
  },
  TUN: {
    airportNameEn: "Carthage",
    airportNameFa: "فرودگاه بین‌المللی تونس-کارتاژ",
    city: {
      cityCode: "TUN",
      cityNameEn: "Tunis",
      cityNameFa: "تونس",
    },
    country: {
      countryCode: "TUN",
      countryNameEn: "Tunisia",
      countryNameFa: "تونس",
    },
  },
  SFA: {
    airportNameEn: "Sfax Thyna",
    airportNameFa: "فرودگاه بین‌المللی سفاکس-تینا",
    city: {
      cityCode: "SFA",
      cityNameEn: "Sfax",
      cityNameFa: "اسفاکس",
    },
    country: {
      countryCode: "TUN",
      countryNameEn: "Tunisia",
      countryNameFa: "تونس",
    },
  },
  EVN: {
    airportNameEn: "Zvartnots",
    airportNameFa: "فرودگاه زوارتنوس",
    city: {
      cityCode: "EVN",
      cityNameEn: "Yerevan",
      cityNameFa: "ایروان",
    },
    country: {
      countryCode: "ARM",
      countryNameEn: "Armenia",
      countryNameFa: "ارمنستان",
    },
  },
  LWN: {
    airportNameEn: "Gyoumri",
    airportNameFa: "فرودگاه شیراک",
    city: {
      cityCode: "LWN",
      cityNameEn: "Gyoumri",
      cityNameFa: "شیراک",
    },
    country: {
      countryCode: "ARM",
      countryNameEn: "Armenia",
      countryNameFa: "ارمنستان",
    },
  },
  BST: {
    airportNameEn: "Bost",
    airportNameFa: "فرودگاه بوست",
    city: {
      cityCode: "BST",
      cityNameEn: "Bost",
      cityNameFa: "بوست",
    },
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  CCN: {
    airportNameEn: "Chakcharan",
    airportNameFa: "فرودگاه چغچران",
    city: {
      cityCode: "CCN",
      cityNameEn: "Chakcharan",
      cityNameFa: "چغچران",
    },
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  DAZ: {
    airportNameEn: "Darwaz",
    airportNameFa: "فرودگاه درواز",
    city: {
      cityCode: "DAZ",
      cityNameEn: "Darwaz",
      cityNameFa: "درواز",
    },
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  FAH: {
    airportNameEn: "Farah",
    airportNameFa: "فرودگاه فارا",
    city: {
      cityCode: "FAH",
      cityNameEn: "Farah",
      cityNameFa: "فرح",
    },
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  FBD: {
    airportNameEn: "Faizabad",
    airportNameFa: "فرودگاه فیض‌آباد ",
    city: {
      cityCode: "FBD",
      cityNameEn: "Faizabad",
      cityNameFa: "فیض آباد",
    },
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  GRG: {
    airportNameEn: "Gardez",
    airportNameFa: "فرودگاه گاردز",
    city: {
      cityCode: "GRG",
      cityNameEn: "Gardez",
      cityNameFa: "گاردز",
    },
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  GZI: {
    airportNameEn: "Ghazni",
    airportNameFa: "فرودگاه غنزی",
    city: {
      cityCode: "GZI",
      cityNameEn: "Ghazni",
      cityNameFa: "غزنی",
    },
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  HEA: {
    airportNameEn: "Herat",
    airportNameFa: "میدان هوایی بین‌المللی هرات",
    city: {
      cityCode: "HEA",
      cityNameEn: "Herat",
      cityNameFa: "هرات",
    },
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  JAA: {
    airportNameEn: "Jalalabad",
    airportNameFa: "فرودگاه جلال‌آباد",
    city: {
      cityCode: "JAA",
      cityNameEn: "Jalalabad",
      cityNameFa: "جلال آباد",
    },
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  KBL: {
    airportNameEn: "Khwaja Rawash",
    airportNameFa: "فرودگاه کابل",
    city: {
      cityCode: "KBL",
      cityNameEn: "Kabul",
      cityNameFa: "کابل",
    },
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  KDH: {
    airportNameEn: "Kandahar",
    airportNameFa: "میدان هوایی بین‌المللی قندهار",
    city: {
      cityCode: "KDH",
      cityNameEn: "Kandahar",
      cityNameFa: "قندهار",
    },
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  KHT: {
    airportNameEn: "Khost",
    airportNameFa: "فرودگاه صحرایی خوست",
    city: {
      cityCode: "KHT",
      cityNameEn: "Khost",
      cityNameFa: "خاوران(تبريز)",
    },
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  KWH: {
    airportNameEn: "Khwahan",
    airportNameFa: "فرودگاه خواهان",
    city: {
      cityCode: "KWH",
      cityNameEn: "Khwahan",
      cityNameFa: "خواهان",
    },
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  LQN: {
    airportNameEn: "Qala Nau",
    airportNameFa: "فرودگاه قلعه نو، افغانستان",
    city: {
      cityCode: "LQN",
      cityNameEn: "Qala Nau",
      cityNameFa: "قلعه نو",
    },
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  MMZ: {
    airportNameEn: "Maimana",
    airportNameFa: "فرودگاه میمنه",
    city: {
      cityCode: "MMZ",
      cityNameEn: "Maimana",
      cityNameFa: "میمنه",
    },
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  SBF: {
    airportNameEn: "Sardeh Band",
    airportNameFa: "فرودگاه سرده‌بند",
    city: {
      cityCode: "SBF",
      cityNameEn: "Sardeh Band",
      cityNameFa: "سارده بند",
    },
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  SGA: {
    airportNameEn: "Sheghnan",
    airportNameFa: "فرودگاه شقنن",
    city: {
      cityCode: "SGA",
      cityNameEn: "Sheghnan",
      cityNameFa: "شقنن",
    },
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  TII: {
    airportNameEn: "Tirinkot",
    airportNameFa: "فرودگاه ترین‌کوت",
    city: {
      cityCode: "TII",
      cityNameEn: "Tirinkot",
      cityNameFa: "ترین کوت",
    },
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  TQN: {
    airportNameEn: "Taluqan",
    airportNameFa: "فرودگاه تالقان",
    city: {
      cityCode: "TQN",
      cityNameEn: "Taluqan",
      cityNameFa: "تالقان",
    },
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  UND: {
    airportNameEn: "Kunduz",
    airportNameFa: "فرودگاه کندوز",
    city: {
      cityCode: "UND",
      cityNameEn: "Kunduz",
      cityNameFa: "کندوز",
    },
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  URZ: {
    airportNameEn: "Uruzgan",
    airportNameFa: "فرودگاه ارزگان",
    city: {
      cityCode: "URZ",
      cityNameEn: "Uruzgan",
      cityNameFa: "اروزگان",
    },
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  ZAJ: {
    airportNameEn: "Zaranj",
    airportNameFa: "فرودگاه زرنج",
    city: {
      cityCode: "ZAJ",
      cityNameEn: "Zaranj",
      cityNameFa: "زرنج",
    },
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  BIN: {
    airportNameEn: "Bamiyan",
    airportNameFa: "فرودگاه بامیان",
    city: {
      cityCode: "BIN",
      cityNameEn: "Bamiyan",
      cityNameFa: "بامیان",
    },
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  MZR: {
    airportNameEn: "Mazar-I-Sharif",
    airportNameFa: "میدان هوایی مزار شریف",
    city: {
      cityCode: "MZR",
      cityNameEn: "Mazar-I-Sharif",
      cityNameFa: "مزار شریف",
    },
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  GBQ: {
    airportNameEn: "Muharraq",
    airportNameFa: "فرودگاه موهاراک",
    city: {
      cityCode: "GBQ",
      cityNameEn: "Muharraq",
      cityNameFa: "موهاراک",
    },
    country: {
      countryCode: "BHR",
      countryNameEn: "Bahrain",
      countryNameFa: "بحرین",
    },
  },
  BAH: {
    airportNameEn: "Bahrain Intl.",
    airportNameFa: "فرودگاه بین‌المللی بحرین",
    city: {
      cityCode: "BAH",
      cityNameEn: "Manama",
      cityNameFa: "منامه",
    },
    country: {
      countryCode: "BHR",
      countryNameEn: "Bahrain",
      countryNameFa: "بحرین",
    },
  },
  GOZ: {
    airportNameEn: "Gorna Oriahovitsa",
    airportNameFa: "فرودگاه گرنا اوریاهویتسا",
    city: {
      cityCode: "GOZ",
      cityNameEn: "Gorna Oriahovitsa",
      cityNameFa: "گورنا اریهویتسا",
    },
    country: {
      countryCode: "BGR",
      countryNameEn: "Bulgaria",
      countryNameFa: "بلغارستان",
    },
  },
  HKV: {
    airportNameEn: "Haskovo",
    airportNameFa: "فرودگاه هسکووو",
    city: {
      cityCode: "HKV",
      cityNameEn: "Haskovo",
      cityNameFa: "هسکووو",
    },
    country: {
      countryCode: "BGR",
      countryNameEn: "Bulgaria",
      countryNameFa: "بلغارستان",
    },
  },
  JAM: {
    airportNameEn: "Jambol",
    airportNameFa: "پایگاه هوایی بزمر",
    city: {
      cityCode: "JAM",
      cityNameEn: "Jambol",
      cityNameFa: "جامبول",
    },
    country: {
      countryCode: "BGR",
      countryNameEn: "Bulgaria",
      countryNameFa: "بلغارستان",
    },
  },
  PDV: {
    airportNameEn: "Plovdiv",
    airportNameFa: "فرودگاه پلوودیف",
    city: {
      cityCode: "PDV",
      cityNameEn: "Plovdiv",
      cityNameFa: "پلودیو",
    },
    country: {
      countryCode: "BGR",
      countryNameEn: "Bulgaria",
      countryNameFa: "بلغارستان",
    },
  },
  PVN: {
    airportNameEn: "Pleven",
    airportNameFa: "فرودگاه پلون",
    city: {
      cityCode: "PVN",
      cityNameEn: "Pleven",
      cityNameFa: "پلون",
    },
    country: {
      countryCode: "BGR",
      countryNameEn: "Bulgaria",
      countryNameFa: "بلغارستان",
    },
  },
  SLS: {
    airportNameEn: "Silistra",
    airportNameFa: "فرودگاه سیلیسترا",
    city: {
      cityCode: "SLS",
      cityNameEn: "Silistra",
      cityNameFa: "سیلیسترا",
    },
    country: {
      countryCode: "BGR",
      countryNameEn: "Bulgaria",
      countryNameFa: "بلغارستان",
    },
  },
  SOF: {
    airportNameEn: "Sofia",
    airportNameFa: "فرودگاه صوفیه",
    city: {
      cityCode: "SOF",
      cityNameEn: "Sofia",
      cityNameFa: "صوفیه",
    },
    country: {
      countryCode: "BGR",
      countryNameEn: "Bulgaria",
      countryNameFa: "بلغارستان",
    },
  },
  SZR: {
    airportNameEn: "Stara Zagora",
    airportNameFa: "فرودگاه استارا زاگورا",
    city: {
      cityCode: "SZR",
      cityNameEn: "Stara Zagora",
      cityNameFa: "استارا زاگورا",
    },
    country: {
      countryCode: "BGR",
      countryNameEn: "Bulgaria",
      countryNameFa: "بلغارستان",
    },
  },
  TGV: {
    airportNameEn: "Targovishte",
    airportNameFa: "فرودگاه ترگویشت",
    city: {
      cityCode: "TGV",
      cityNameEn: "Targovishte",
      cityNameFa: "تارگوویشته",
    },
    country: {
      countryCode: "BGR",
      countryNameEn: "Bulgaria",
      countryNameFa: "بلغارستان",
    },
  },
  VAR: {
    airportNameEn: "Varna",
    airportNameFa: "فرودگاه وارنا",
    city: {
      cityCode: "VAR",
      cityNameEn: "Varna",
      cityNameFa: "وارنا",
    },
    country: {
      countryCode: "BGR",
      countryNameEn: "Bulgaria",
      countryNameFa: "بلغارستان",
    },
  },
  VID: {
    airportNameEn: "Vidin",
    airportNameFa: "فرودگاه ویدین",
    city: {
      cityCode: "VID",
      cityNameEn: "Vidin",
      cityNameFa: "ویدین",
    },
    country: {
      countryCode: "BGR",
      countryNameEn: "Bulgaria",
      countryNameFa: "بلغارستان",
    },
  },
  BOJ: {
    airportNameEn: "Burgas Airport",
    airportNameFa: "فرودگاه بورگاس",
    city: {
      cityCode: "BOJ",
      cityNameEn: "Burgas",
      cityNameFa: "بورگاس",
    },
    country: {
      countryCode: "BGR",
      countryNameEn: "Bulgaria",
      countryNameFa: "بلغارستان",
    },
  },
  DYU: {
    airportNameEn: "Dushanbe",
    airportNameFa: "فرودگاه بین‌المللی دوشنبه",
    city: {
      cityCode: "DYU",
      cityNameEn: "Dushanbe",
      cityNameFa: "دوشنبه",
    },
    country: {
      countryCode: "TJK",
      countryNameEn: "Tajikistan",
      countryNameFa: "تاجیکستان",
    },
  },
  LBD: {
    airportNameEn: "Khudzhand",
    airportNameFa: "فرودگاه خجند",
    city: {
      cityCode: "LBD",
      cityNameEn: "Khudzhand",
      cityNameFa: "خجند",
    },
    country: {
      countryCode: "TJK",
      countryNameEn: "Tajikistan",
      countryNameFa: "تاجیکستان",
    },
  },
  ASB: {
    airportNameEn: "Ashgabat",
    airportNameFa: "فرودگاه عشق‌آباد",
    city: {
      cityCode: "ASB",
      cityNameEn: "Ashgabad",
      cityNameFa: "عشق آباد",
    },
    country: {
      countryCode: "TKM",
      countryNameEn: "Turkmenistan",
      countryNameFa: "ترکمنستان",
    },
  },
  CRZ: {
    airportNameEn: "Turkmenabad",
    airportNameFa: "فرودگاه ترکمن‌آباد",
    city: {
      cityCode: "CRZ",
      cityNameEn: "Turkmenabad",
      cityNameFa: "ترکمن آباد",
    },
    country: {
      countryCode: "TKM",
      countryNameEn: "Turkmenistan",
      countryNameFa: "ترکمنستان",
    },
  },
  KRW: {
    airportNameEn: "Turkmanbashi",
    airportNameFa: "فرودگاه ترکمنباشی",
    city: {
      cityCode: "KRW",
      cityNameEn: "Turkmenbashi",
      cityNameFa: "ترکمن باشی",
    },
    country: {
      countryCode: "TKM",
      countryNameEn: "Turkmenistan",
      countryNameFa: "ترکمنستان",
    },
  },
  MYP: {
    airportNameEn: "Mary",
    airportNameFa: "فرودگاه ماری",
    city: {
      cityCode: "MYP",
      cityNameEn: "Mary",
      cityNameFa: "مریم",
    },
    country: {
      countryCode: "TKM",
      countryNameEn: "Turkmenistan",
      countryNameFa: "ترکمنستان",
    },
  },
  CMJ: {
    airportNameEn: "Chi Mei",
    airportNameFa: "فرودگاه کیمی",
    city: {
      cityCode: "CMJ",
      cityNameEn: "Chi Mei",
      cityNameFa: "چی‌ میر",
    },
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  CYI: {
    airportNameEn: "Chiayi",
    airportNameFa: "فرودگاه چیایی",
    city: {
      cityCode: "CYI",
      cityNameEn: "Chiayi",
      cityNameFa: "چیایی",
    },
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  GNI: {
    airportNameEn: "Green Island",
    airportNameFa: "فرودگاه لیودائو (گرین آیسلند)",
    city: {
      cityCode: "GNI",
      cityNameEn: "Green Island",
      cityNameFa: "جزیره سبز",
    },
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  HCN: {
    airportNameEn: "Hengchun",
    airportNameFa: "فرودگاه هنگچون",
    city: {
      cityCode: "HCN",
      cityNameEn: "Hengchun",
      cityNameFa: "هنگچون",
    },
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  HSZ: {
    airportNameEn: "Hsinchu",
    airportNameFa: "فرودگاه هسینچو",
    city: {
      cityCode: "HSZ",
      cityNameEn: "Hsinchu",
      cityNameFa: "هسینچو",
    },
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  HUN: {
    airportNameEn: "Hualien",
    airportNameFa: "فرودگاه هوالین",
    city: {
      cityCode: "HUN",
      cityNameEn: "Hualien",
      cityNameFa: "هوالین",
    },
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  KNH: {
    airportNameEn: "Shang-Yi",
    airportNameFa: "فرودگاه کینمن",
    city: {
      cityCode: "KNH",
      cityNameEn: "Kinmen",
      cityNameFa: "کینمن",
    },
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  KYD: {
    airportNameEn: "Orchid Island",
    airportNameFa: "فرودگاه لانیو",
    city: {
      cityCode: "KYD",
      cityNameEn: "Orchid Island",
      cityNameFa: "ارچید آیسلند",
    },
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  LZN: {
    airportNameEn: "Nangan",
    airportNameFa: "فرودگاه ماتسو نانگان",
    city: {
      cityCode: "LZN",
      cityNameEn: "Nangan",
      cityNameFa: "نانگان",
    },
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  MFK: {
    airportNameEn: "Matsu",
    airportNameFa: "فرودگاه ماتسو",
    city: {
      cityCode: "MFK",
      cityNameEn: "Matsu",
      cityNameFa: "ماتسو",
    },
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  MZG: {
    airportNameEn: "Makung",
    airportNameFa: "فرودگاه ماگونگ",
    city: {
      cityCode: "MZG",
      cityNameEn: "Makung",
      cityNameFa: "ماکونگ",
    },
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  PIF: {
    airportNameEn: "Pingtung",
    airportNameFa: "فرودگاه پینگتونگ",
    city: {
      cityCode: "PIF",
      cityNameEn: "Pingtung",
      cityNameFa: "پینگتونگ",
    },
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  RMQ: {
    airportNameEn: "Chingchuankang",
    airportNameFa: "فرودگاه تیچون",
    city: {
      cityCode: "TXG",
      cityNameEn: "Taichung",
      cityNameFa: "تایچونگ",
    },
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  TXG: {
    airportNameEn: "Taichung",
    airportNameFa: "فرودگاه تیچون",
    city: {
      cityCode: "TXG",
      cityNameEn: "Taichung",
      cityNameFa: "تایچونگ",
    },
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  TNN: {
    airportNameEn: "Tainan",
    airportNameFa: "فرودگاه تاینان",
    city: {
      cityCode: "TNN",
      cityNameEn: "Tainan",
      cityNameFa: "تاینان",
    },
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  TSA: {
    airportNameEn: "Taipei Songshan",
    airportNameFa: "فرودگاه سونگشان تایپه",
    city: {
      cityCode: "TPE",
      cityNameEn: "Taipei",
      cityNameFa: "تایپی",
    },
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  TPE: {
    airportNameEn: "Taiwan Taoyuan Intl.",
    airportNameFa: "فرودگاه بین‌المللی تائویوان تایوان",
    city: {
      cityCode: "TPE",
      cityNameEn: "Taipei",
      cityNameFa: "تایپی",
    },
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  TTT: {
    airportNameEn: "Taitung",
    airportNameFa: "فرودگاه تایتونگ",
    city: {
      cityCode: "TTT",
      cityNameEn: "Taitung",
      cityNameFa: "تایتونگ",
    },
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  WOT: {
    airportNameEn: "Wonan",
    airportNameFa: "فرودگاه وانگ-آن",
    city: {
      cityCode: "WOT",
      cityNameEn: "Wonan",
      cityNameFa: "وونان",
    },
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  KHH: {
    airportNameEn: "Kaoshiung Intl. Arpt.",
    airportNameFa: "فرودگاه بین‌المللی گاوشیونگ",
    city: {
      cityCode: "KHH",
      cityNameEn: "Kaohsiung",
      cityNameFa: "کائوسیونگ",
    },
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  ATB: {
    airportNameEn: "Atbara",
    airportNameFa: "فرودگاه آتبارا",
    city: {
      cityCode: "ATB",
      cityNameEn: "Atbara",
      cityNameFa: "اتبارا",
    },
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  DNX: {
    airportNameEn: "Galegu",
    airportNameFa: "فرودگاه گالیگو",
    city: {
      cityCode: "DNX",
      cityNameEn: "Dinder",
      cityNameFa: "دیندر",
    },
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  DOG: {
    airportNameEn: "Dongola",
    airportNameFa: "فرودگاه دنقلا",
    city: {
      cityCode: "DOG",
      cityNameEn: "Dongola",
      cityNameFa: "دونگولا",
    },
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  EBD: {
    airportNameEn: "El Obeid",
    airportNameFa: "فرودگاه ال اووبید",
    city: {
      cityCode: "EBD",
      cityNameEn: "El Obeid",
      cityNameFa: "العبید",
    },
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  EDB: {
    airportNameEn: "Eldebba",
    airportNameFa: "فرودگاه الدبه",
    city: {
      cityCode: "EDB",
      cityNameEn: "Eldebba",
      cityNameFa: "الدبا",
    },
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  EGN: {
    airportNameEn: "Geneina",
    airportNameFa: "فرودگاه جنینه",
    city: {
      cityCode: "EGN",
      cityNameEn: "Geneina",
      cityNameFa: "جنینا",
    },
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  ELF: {
    airportNameEn: "El Fasher",
    airportNameFa: "فرودگاه الفاشر",
    city: {
      cityCode: "ELF",
      cityNameEn: "El Fasher",
      cityNameFa: "ال فشر",
    },
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  GBU: {
    airportNameEn: "Khashm El Girba",
    airportNameFa: "فرودگاه خشم الجبرا",
    city: {
      cityCode: "GBU",
      cityNameEn: "Khashm El Girba",
      cityNameFa: "خاشم الگیربا",
    },
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  GSU: {
    airportNameEn: "Gedaref",
    airportNameFa: "فرودگاه القضارف",
    city: {
      cityCode: "GSU",
      cityNameEn: "Gedaref",
      cityNameFa: "گدارف",
    },
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  JUB: {
    airportNameEn: "Juba",
    airportNameFa: "فرودگاه جوبا",
    city: {
      cityCode: "JUB",
      cityNameEn: "Juba",
      cityNameFa: "جوبا",
    },
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  KRT: {
    airportNameEn: "Civil",
    airportNameFa: "فرودگاه بین‌المللی خارطوم",
    city: {
      cityCode: "KRT",
      cityNameEn: "Khartoum",
      cityNameFa: "خارطوم",
    },
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  KSL: {
    airportNameEn: "Kassala",
    airportNameFa: "فرودگاه کسلا",
    city: {
      cityCode: "KSL",
      cityNameEn: "Kassala",
      cityNameFa: "کاسالا",
    },
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  KST: {
    airportNameEn: "Kosti",
    airportNameFa: "فرودگاه کوستی",
    city: {
      cityCode: "KST",
      cityNameEn: "Kosti",
      cityNameFa: "کوستی",
    },
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  MAK: {
    airportNameEn: "Malakal",
    airportNameFa: "فرودگاه مالاکال",
    city: {
      cityCode: "MAK",
      cityNameEn: "Malakal",
      cityNameFa: "مالاکال",
    },
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  MWE: {
    airportNameEn: "Merowe",
    airportNameFa: "فرودگاه مروی",
    city: {
      cityCode: "MWE",
      cityNameEn: "Merowe",
      cityNameFa: "مرو",
    },
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  NHF: {
    airportNameEn: "New Halfa",
    airportNameFa: "فرودگاه نیو هالفا",
    city: {
      cityCode: "NHF",
      cityNameEn: "New Halfa",
      cityNameFa: "نیو هالفا",
    },
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  NUD: {
    airportNameEn: "En Nahud",
    airportNameFa: "فرودگاه ان ناهود",
    city: {
      cityCode: "NUD",
      cityNameEn: "En Nahud",
      cityNameFa: "النهود",
    },
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  PZU: {
    airportNameEn: "Port Sudan",
    airportNameFa: "فرودگاه بین‌المللی پورت سودان",
    city: {
      cityCode: "PZU",
      cityNameEn: "Port Sudan",
      cityNameFa: "پورت سودان",
    },
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  RSS: {
    airportNameEn: "Roseires",
    airportNameFa: "فرودگاه رسیرس",
    city: {
      cityCode: "RSS",
      cityNameEn: "Roseires",
      cityNameFa: "رسیرس",
    },
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  UYL: {
    airportNameEn: "Nyala",
    airportNameFa: "فرودگاه نیالا",
    city: {
      cityCode: "UYL",
      cityNameEn: "Nyala",
      cityNameFa: "نیالا",
    },
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  WHF: {
    airportNameEn: "Wadi Halfa",
    airportNameFa: "فرودگاه ودی حلفا",
    city: {
      cityCode: "WHF",
      cityNameEn: "Wadi Halfa",
      cityNameFa: "وادی حلفا",
    },
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  WUU: {
    airportNameEn: "Wau",
    airportNameFa: "فرودگاه وآو",
    city: {
      cityCode: "WUU",
      cityNameEn: "Wau",
      cityNameFa: "وو",
    },
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  DAM: {
    airportNameEn: "Damascus",
    airportNameFa: "فرودگاه دمشق",
    city: {
      cityCode: "DAM",
      cityNameEn: "Damascus",
      cityNameFa: "دمشق",
    },
    country: {
      countryCode: "SYR",
      countryNameEn: "Syria",
      countryNameFa: "سوریه",
    },
  },
  DEZ: {
    airportNameEn: "Al Jafrah",
    airportNameFa: "فرودگاه دیرالزور",
    city: {
      cityCode: "DEZ",
      cityNameEn: "Deirezzor",
      cityNameFa: "دیرزور",
    },
    country: {
      countryCode: "SYR",
      countryNameEn: "Syria",
      countryNameFa: "سوریه",
    },
  },
  KAC: {
    airportNameEn: "Kameshli",
    airportNameFa: "فرودگاه قامشلی",
    city: {
      cityCode: "KAC",
      cityNameEn: "Kameshli",
      cityNameFa: "کامشلی",
    },
    country: {
      countryCode: "SYR",
      countryNameEn: "Syria",
      countryNameFa: "سوریه",
    },
  },
  LTK: {
    airportNameEn: "Latakia",
    airportNameFa: "فرودگاه بین‌المللی باسل الاسد",
    city: {
      cityCode: "LTK",
      cityNameEn: "Latakia",
      cityNameFa: "لاذقیه",
    },
    country: {
      countryCode: "SYR",
      countryNameEn: "Syria",
      countryNameFa: "سوریه",
    },
  },
  PMS: {
    airportNameEn: "Palmyra",
    airportNameFa: "فرودگاه پالمیرا",
    city: {
      cityCode: "PMS",
      cityNameEn: "Palmyra",
      cityNameFa: "پالمیرا",
    },
    country: {
      countryCode: "SYR",
      countryNameEn: "Syria",
      countryNameFa: "سوریه",
    },
  },
  ALP: {
    airportNameEn: "Nejrab",
    airportNameFa: "فرودگاه بین‌المللی حلب (نجرب)",
    city: {
      cityCode: "ALP",
      cityNameEn: "Aleppo",
      cityNameFa: "حلب",
    },
    country: {
      countryCode: "SYR",
      countryNameEn: "Syria",
      countryNameFa: "سوریه",
    },
  },
  AHB: {
    airportNameEn: "Abha",
    airportNameFa: "فرودگاه منطقه‌ای ابها",
    city: {
      cityCode: "AHB",
      cityNameEn: "Abha",
      cityNameFa: "ابها",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  AJF: {
    airportNameEn: "Jouf",
    airportNameFa: "فرودگاه داخلی الجوف",
    city: {
      cityCode: "AJF",
      cityNameEn: "Sakaka Al Jouf",
      cityNameFa: "سککا ال جوف",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  AKH: {
    airportNameEn: "Prince Sultan Air Base",
    airportNameFa: "پایگاه هوایی پرنس سلطان",
    city: {
      cityCode: "AKH",
      cityNameEn: "Al Kharj",
      cityNameFa: "الخرج",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  AQI: {
    airportNameEn: "Qaisumah",
    airportNameFa: "فرودگاه محلی قیصومه",
    city: {
      cityCode: "AQI",
      cityNameEn: "Qaisumah",
      cityNameFa: "قیسومه",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  BHH: {
    airportNameEn: "Bisha",
    airportNameFa: "فرودگاه داخلی بیشه",
    city: {
      cityCode: "BHH",
      cityNameEn: "Bisha",
      cityNameFa: "بیشا",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  DHA: {
    airportNameEn: "Dhahran",
    airportNameFa: "فرودگاه بین المللی ظهران",
    city: {
      cityCode: "DHA",
      cityNameEn: "Dhahran",
      cityNameFa: "ظهران",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  DMM: {
    airportNameEn: "King Fahd Intl. Arpt.",
    airportNameFa: "فرودگاه دمام",
    city: {
      cityCode: "DMM",
      cityNameEn: "Dammam",
      cityNameFa: "دمام",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  DWD: {
    airportNameEn: "Dawadmi",
    airportNameFa: "فرودگاه داخلی دوادمی",
    city: {
      cityCode: "DWD",
      cityNameEn: "Dawadmi",
      cityNameFa: "داودمی",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  EAM: {
    airportNameEn: "Nejran",
    airportNameFa: "فرودگاه محلی نجران",
    city: {
      cityCode: "EAM",
      cityNameEn: "Nejran",
      cityNameFa: "نجران",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  EJH: {
    airportNameEn: "Wedjh",
    airportNameFa: "فرودگاه وژ",
    city: {
      cityCode: "EJH",
      cityNameEn: "Wedjh",
      cityNameFa: "ویج",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  GIZ: {
    airportNameEn: "Jazan",
    airportNameFa: "فرودگاه شاهزاده عبدالله بن عبدالعزیز (گیزان) ",
    city: {
      cityCode: "GIZ",
      cityNameEn: "Jazan",
      cityNameFa: "جازان",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  HAS: {
    airportNameEn: "Hail",
    airportNameFa: "فرودگاه منطقه‌ای هائیل",
    city: {
      cityCode: "HAS",
      cityNameEn: "Hail",
      cityNameFa: "تگرگ",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  JED: {
    airportNameEn: "Jeddah",
    airportNameFa: "فرودگاه جده",
    city: {
      cityCode: "JED",
      cityNameEn: "Jeddah",
      cityNameFa: "جده",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  KMC: {
    airportNameEn: "King Khalid Military",
    airportNameFa: "فرودگاه کینگ خالد میلیتری سیتی",
    city: {
      cityCode: "KMC",
      cityNameEn: "King Khalid Mil. City",
      cityNameFa: "شاه خالد میل. شهر",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  KMX: {
    airportNameEn: "Khamis Mushait",
    airportNameFa: "فرودگاه شاه خالد ایر بیس",
    city: {
      cityCode: "KMX",
      cityNameEn: "Khamis Mushait",
      cityNameFa: "خمیس ​​مشیط",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  MED: {
    airportNameEn: "Madinah",
    airportNameFa: "فرودگاه مدینه",
    city: {
      cityCode: "MED",
      cityNameEn: "Madinah",
      cityNameFa: "مدینه",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  RAE: {
    airportNameEn: "Arar",
    airportNameFa: "فرودگاه آرار",
    city: {
      cityCode: "RAE",
      cityNameEn: "Arar",
      cityNameFa: "آرار",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  RAH: {
    airportNameEn: "Rafha",
    airportNameFa: "فرودگاه رفها",
    city: {
      cityCode: "RAH",
      cityNameEn: "Rafha",
      cityNameFa: "رافها",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  RUH: {
    airportNameEn: "King Khaled Intl",
    airportNameFa: "فرودگاه بین‌المللی ملک خالد",
    city: {
      cityCode: "RUH",
      cityNameEn: "Riyadh",
      cityNameFa: "ریاض",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  SHW: {
    airportNameEn: "Sharurah",
    airportNameFa: "فرودگاه شروره",
    city: {
      cityCode: "SHW",
      cityNameEn: "Sharurah",
      cityNameFa: "شروره",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  SLF: {
    airportNameEn: "Sulayel",
    airportNameFa: "فرودگاه سولیل",
    city: {
      cityCode: "SLF",
      cityNameEn: "Sulayel",
      cityNameFa: "سلیمان",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  TIF: {
    airportNameEn: "Taif",
    airportNameFa: "فرودگاه محلی طائف",
    city: {
      cityCode: "TIF",
      cityNameEn: "Taif",
      cityNameFa: "طائف",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  TUI: {
    airportNameEn: "Turaif",
    airportNameFa: "فرودگاه توریف",
    city: {
      cityCode: "TUI",
      cityNameEn: "Turaif",
      cityNameFa: "توریف",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  TUU: {
    airportNameEn: "Tabuk",
    airportNameFa: "فرودگاه محلی تبوک",
    city: {
      cityCode: "TUU",
      cityNameEn: "Tabuk",
      cityNameFa: "تبوک",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  WAE: {
    airportNameEn: "Wadi Ad Dawasir",
    airportNameFa: "فرودگاه وادی اد الدواسر",
    city: {
      cityCode: "WAE",
      cityNameEn: "Wadi Ad Dawasir",
      cityNameFa: "وادی آگهی الدواسر",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  YNB: {
    airportNameEn: "Yanbu",
    airportNameFa: "فرودگاه ینبع",
    city: {
      cityCode: "YNB",
      cityNameEn: "Yanbu",
      cityNameFa: "یانبو",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  ZUL: {
    airportNameEn: "Zilfi",
    airportNameFa: "فرودگاه زیلفی",
    city: {
      cityCode: "ZUL",
      cityNameEn: "Zilfi",
      cityNameFa: "زیلفی",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  ABT: {
    airportNameEn: "Al-Aqiq",
    airportNameFa: "فرودگاه داخلی الباحه",
    city: {
      cityCode: "ABT",
      cityNameEn: "Al-Baha",
      cityNameFa: "ال‌بها",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  ELQ: {
    airportNameEn: "Gassim Regional Arpt.",
    airportNameFa: "فرودگاه محلی قصیم",
    city: {
      cityCode: "ELQ",
      cityNameEn: "Buraidah",
      cityNameFa: "بریده",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  URY: {
    airportNameEn: "Gurayat",
    airportNameFa: "فرودگاه گورایات",
    city: {
      cityCode: "URY",
      cityNameEn: "Gurayat",
      cityNameFa: "اروگوئه",
    },
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  BJY: {
    airportNameEn: "Batajnica",
    airportNameFa: "پایگاه هوایی باتاینیکا",
    city: {
      cityCode: "BEG",
      cityNameEn: "Belgrade",
      cityNameFa: "بلگراد",
    },
    country: {
      countryCode: "SRB",
      countryNameEn: "Serbia",
      countryNameFa: "صربستان",
    },
  },
  BEG: {
    airportNameEn: "Nikola Tesla",
    airportNameFa: "فرودگاه بلگراد نیکولا تسلا",
    city: {
      cityCode: "BEG",
      cityNameEn: "Belgrade",
      cityNameFa: "بلگراد",
    },
    country: {
      countryCode: "SRB",
      countryNameEn: "Serbia",
      countryNameFa: "صربستان",
    },
  },
  PRN: {
    airportNameEn: "Prishtina Intl. Arpt.",
    airportNameFa: "فرودگاه بین‌المللی پریشتینا",
    city: {
      cityCode: "PRN",
      cityNameEn: "Prishtina",
      cityNameFa: "پریشتینا",
    },
    country: {
      countryCode: "SRB",
      countryNameEn: "Serbia",
      countryNameFa: "صربستان",
    },
  },
  INI: {
    airportNameEn: "Constantine The Great Intl.",
    airportNameFa: "فرودگاه کنستانتین بزرگ در نیش",
    city: {
      cityCode: "INI",
      cityNameEn: "Nis",
      cityNameFa: "نیس",
    },
    country: {
      countryCode: "SRB",
      countryNameEn: "Serbia",
      countryNameFa: "صربستان",
    },
  },
  ALA: {
    airportNameEn: "Almaty",
    airportNameFa: "فرودگاه آلماتی",
    city: {
      cityCode: "ALA",
      cityNameEn: "Almaty",
      cityNameFa: "آلماتی",
    },
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  ATX: {
    airportNameEn: "Atbasar",
    airportNameFa: "فرودگاه آتباسار",
    city: {
      cityCode: "ATX",
      cityNameEn: "Atbasar",
      cityNameFa: "اتبسر",
    },
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  BXH: {
    airportNameEn: "Balhash",
    airportNameFa: "فرودگاه بالقاش",
    city: {
      cityCode: "BXH",
      cityNameEn: "Balhash",
      cityNameFa: "بالهاش",
    },
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  BXJ: {
    airportNameEn: "Burundai",
    airportNameFa: "فرودگاه آلماتی بوروندای",
    city: {
      cityCode: "BXJ",
      cityNameEn: "Burundai",
      cityNameFa: "بوروندای",
    },
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  CIT: {
    airportNameEn: "Shymkent",
    airportNameFa: "فرودگاه بین‌المللی چیمکند",
    city: {
      cityCode: "CIT",
      cityNameEn: "Shymkent",
      cityNameFa: "چیمکند",
    },
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  DMB: {
    airportNameEn: "Zhambyl",
    airportNameFa: "فرودگاه تراز",
    city: {
      cityCode: "DMB",
      cityNameEn: "Zhambyl",
      cityNameFa: "ژامبیل",
    },
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  DZN: {
    airportNameEn: "Zhezhazgan",
    airportNameFa: "فرودگاه ژزقازغان",
    city: {
      cityCode: "DZN",
      cityNameEn: "Zhezkazgan",
      cityNameFa: "ژزکازگان",
    },
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  GUW: {
    airportNameEn: "Atyrau Intl.",
    airportNameFa: "فرودگاه آتیرائو",
    city: {
      cityCode: "GUW",
      cityNameEn: "Atyrau",
      cityNameFa: "آتیراو",
    },
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  HRC: {
    airportNameEn: "Zhairem",
    airportNameFa: "فرودگاه ژیرم",
    city: {
      cityCode: "HRC",
      cityNameEn: "Zhairem",
      cityNameFa: "ژائرم",
    },
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  KOV: {
    airportNameEn: "Kokshetau",
    airportNameFa: "فرودگاه کوکشتائو",
    city: {
      cityCode: "KOV",
      cityNameEn: "Kokshetau",
      cityNameFa: "ککشتو",
    },
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  KSN: {
    airportNameEn: "Kostanay",
    airportNameFa: "فرودگاه قوستانای (نریمانوکا)",
    city: {
      cityCode: "KSN",
      cityNameEn: "Kostanay",
      cityNameFa: "کستانای",
    },
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  KZO: {
    airportNameEn: "Kzyl-Orda",
    airportNameFa: "فرودگاه قیزیل‌اوردا",
    city: {
      cityCode: "KZO",
      cityNameEn: "Kzyl-Orda",
      cityNameFa: "کزیل‌",
    },
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  PPK: {
    airportNameEn: "Petropavlovsk",
    airportNameFa: "فرودگاه پتروپافل",
    city: {
      cityCode: "PPK",
      cityNameEn: "Petropavlovsk",
      cityNameFa: "پتروپالاسک",
    },
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  PWQ: {
    airportNameEn: "Pavlodar",
    airportNameFa: "فرودگاه پاولودار",
    city: {
      cityCode: "PWQ",
      cityNameEn: "Pavlodar",
      cityNameFa: "پاولودار",
    },
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  SCO: {
    airportNameEn: "Shevchenko",
    airportNameFa: "فرودگاه آقتائو قزاقستان",
    city: {
      cityCode: "SCO",
      cityNameEn: "Aktau",
      cityNameFa: "آکتائو",
    },
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  TDK: {
    airportNameEn: "Taldy-Kurgan",
    airportNameFa: "فرودگاه تالدیقورغان",
    city: {
      cityCode: "TDK",
      cityNameEn: "Taldy-Kurgan",
      cityNameFa: "تالدی- کورگان",
    },
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  TSE: {
    airportNameEn: "Astana",
    airportNameFa: "فرودگاه بین‌المللی آستانه",
    city: {
      cityCode: "TSE",
      cityNameEn: "Astana",
      cityNameFa: "آستانه",
    },
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  UKK: {
    airportNameEn: "Ust-Kamenogorsk",
    airportNameFa: "فرودگاه اوسکمن",
    city: {
      cityCode: "UKK",
      cityNameEn: "Ust-Kamenogorsk",
      cityNameFa: "اوست- کامنوگوروسک",
    },
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  URA: {
    airportNameEn: "Uralsk / Podstepnyy",
    airportNameFa: "فرودگاه اورال آک ژول",
    city: {
      cityCode: "URA",
      cityNameEn: "Uralsk",
      cityNameFa: "اورالسک",
    },
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  NQZ: {
    airportNameEn: "Nursultan Nazarbayev",
    airportNameFa: "فرودگاه نورالسلطان",
    city: {
      cityCode: "NQZ",
      cityNameEn: "Nur Sultan",
      cityNameFa: "نورالسطان",
    },
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  AKX: {
    airportNameEn: "Aktyubinsk",
    airportNameFa: "فرودگاه آقتوبه",
    city: {
      cityCode: "AKX",
      cityNameEn: "Aktyubinsk",
      cityNameFa: "آکتیوبینسک",
    },
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  AYK: {
    airportNameEn: "Arkalyk",
    airportNameFa: "فرودگاه آرقالیق",
    city: {
      cityCode: "AYK",
      cityNameEn: "Arkalyk",
      cityNameFa: "آرکالیک",
    },
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  EKB: {
    airportNameEn: "Ekibastuz",
    airportNameFa: "فرودگاه اکیباستوز",
    city: {
      cityCode: "EKB",
      cityNameEn: "Ekibastuz",
      cityNameFa: "اکیباستوز",
    },
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  KGF: {
    airportNameEn: "Karaganda",
    airportNameFa: "فرودگاه سری‌ارکا",
    city: {
      cityCode: "KGF",
      cityNameEn: "Karaganda",
      cityNameFa: "کاراگاندا",
    },
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  DOH: {
    airportNameEn: "Doha",
    airportNameFa: "فرودگاه بین المللی دوحه",
    city: {
      cityCode: "DOH",
      cityNameEn: "Doha",
      cityNameFa: "دوحه",
    },
    country: {
      countryCode: "QAT",
      countryNameEn: "Qatar",
      countryNameFa: "قطر",
    },
  },
  DIA: {
    airportNameEn: "Doha International",
    airportNameFa: "فرودگاه بین المللی دوحه",
    city: {
      cityCode: "DOH",
      cityNameEn: "Doha",
      cityNameFa: "دوحه",
    },
    country: {
      countryCode: "QAT",
      countryNameEn: "Qatar",
      countryNameFa: "قطر",
    },
  },
  ECN: {
    airportNameEn: "Ercan",
    airportNameFa: "فرودگاه ارجان",
    city: {
      cityCode: "ECN",
      cityNameEn: "Ercan",
      cityNameFa: "ارجان",
    },
    country: {
      countryCode: "CYP",
      countryNameEn: "Cyprus",
      countryNameFa: "قبرس",
    },
  },
  GEC: {
    airportNameEn: "Gecitkale",
    airportNameFa: "فرودگاه لفکونیکا",
    city: {
      cityCode: "GEC",
      cityNameEn: "Gecitkale",
      cityNameFa: "گسیتکال",
    },
    country: {
      countryCode: "CYP",
      countryNameEn: "Cyprus",
      countryNameFa: "قبرس",
    },
  },
  LCA: {
    airportNameEn: "Larnaca",
    airportNameFa: "فرودگاه لارناکا",
    city: {
      cityCode: "LCA",
      cityNameEn: "Larnaca",
      cityNameFa: "لارناکا",
    },
    country: {
      countryCode: "CYP",
      countryNameEn: "Cyprus",
      countryNameFa: "قبرس",
    },
  },
  PFO: {
    airportNameEn: "Paphos Intl.",
    airportNameFa: "فرودگاه بین‌المللی پافوس",
    city: {
      cityCode: "PFO",
      cityNameEn: "Paphos",
      cityNameFa: "پافوس",
    },
    country: {
      countryCode: "CYP",
      countryNameEn: "Cyprus",
      countryNameFa: "قبرس",
    },
  },
  FRU: {
    airportNameEn: "Manas",
    airportNameFa: "فرودگاه بیشکاک",
    city: {
      cityCode: "FRU",
      cityNameEn: "Bishkek",
      cityNameFa: "بیشکک",
    },
    country: {
      countryCode: "KGZ",
      countryNameEn: "Kyrgyzstan",
      countryNameFa: "قرقیزستان",
    },
  },
  OSS: {
    airportNameEn: "Osh Intl. Arpt.",
    airportNameFa: "فرودگاه اوش",
    city: {
      cityCode: "OSS",
      cityNameEn: "Osh",
      cityNameFa: "اوش",
    },
    country: {
      countryCode: "KGZ",
      countryNameEn: "Kyrgyzstan",
      countryNameFa: "قرقیزستان",
    },
  },
  KWI: {
    airportNameEn: "Kuwait Intl.",
    airportNameFa: "فرودگاه کویت",
    city: {
      cityCode: "KWI",
      cityNameEn: "Kuwait",
      cityNameFa: "کویت",
    },
    country: {
      countryCode: "KWT",
      countryNameEn: "Kuwait",
      countryNameFa: "کویت",
    },
  },
  XIJ: {
    airportNameEn: "Ahmed Al Jaber",
    airportNameFa: "فرودگاه احمد الجابر",
    city: {
      cityCode: "XIJ",
      cityNameEn: "Ahmed Al Jaber",
      cityNameFa: "احمد الجابر",
    },
    country: {
      countryCode: "KWT",
      countryNameEn: "Kuwait",
      countryNameFa: "کویت",
    },
  },
  BEY: {
    airportNameEn: "Beirut Rafic Hariri Arpt.",
    airportNameFa: "فرودگاه بیروت",
    city: {
      cityCode: "BEY",
      cityNameEn: "Beirut",
      cityNameFa: "بیروت",
    },
    country: {
      countryCode: "LBN",
      countryNameEn: "Lebanon",
      countryNameFa: "لبنان",
    },
  },
  KYE: {
    airportNameEn: "Kleyate",
    airportNameFa: "پایگاه هوایی رنه مواواد(فرودگاه کلیات)",
    city: {
      cityCode: "KYE",
      cityNameEn: "Tripoli",
      cityNameFa: "تریپولی",
    },
    country: {
      countryCode: "LBN",
      countryNameEn: "Lebanon",
      countryNameFa: "لبنان",
    },
  },
  BUD: {
    airportNameEn: "Ferihegy",
    airportNameFa: "فرودگاه بین‌المللی بوداپست",
    city: {
      cityCode: "BUD",
      cityNameEn: "Budapest",
      cityNameFa: "بوداپست",
    },
    country: {
      countryCode: "HUN",
      countryNameEn: "Hungary",
      countryNameFa: "مجارستان",
    },
  },
  XXQ: {
    airportNameEn: "Keleti Palyaudvar",
    airportNameFa: "ایستگاه راه‌آهن شرقی بوداپست",
    city: {
      cityCode: "BUD",
      cityNameEn: "Budapest",
      cityNameFa: "بوداپست",
    },
    country: {
      countryCode: "HUN",
      countryNameEn: "Hungary",
      countryNameFa: "مجارستان",
    },
  },
  DEB: {
    airportNameEn: "Debrecen",
    airportNameFa: "فرودگاه بین‌المللی دبرسن",
    city: {
      cityCode: "DEB",
      cityNameEn: "Debrecen",
      cityNameFa: "دبرسن",
    },
    country: {
      countryCode: "HUN",
      countryNameEn: "Hungary",
      countryNameFa: "مجارستان",
    },
  },
  MCQ: {
    airportNameEn: "Miskolc",
    airportNameFa: "فرودگاه میشکولتس",
    city: {
      cityCode: "MCQ",
      cityNameEn: "Miskolc",
      cityNameFa: "میسکولک",
    },
    country: {
      countryCode: "HUN",
      countryNameEn: "Hungary",
      countryNameFa: "مجارستان",
    },
  },
  PEV: {
    airportNameEn: "Pogany",
    airportNameFa: "فرودگاه پوگانی",
    city: {
      cityCode: "PEV",
      cityNameEn: "Pecs",
      cityNameFa: "پکس",
    },
    country: {
      countryCode: "HUN",
      countryNameEn: "Hungary",
      countryNameFa: "مجارستان",
    },
  },
  QGY: {
    airportNameEn: "Gyor-Per",
    airportNameFa: "فرودگاه گیور- پر",
    city: {
      cityCode: "QGY",
      cityNameEn: "Per",
      cityNameFa: "پر",
    },
    country: {
      countryCode: "HUN",
      countryNameEn: "Hungary",
      countryNameFa: "مجارستان",
    },
  },
  SOB: {
    airportNameEn: "Saarmelleek/Balaton",
    airportNameFa: "فرودگاه بین‌المللی سالفرملیک",
    city: {
      cityCode: "SOB",
      cityNameEn: "Saarmelleek",
      cityNameFa: "سارملیک",
    },
    country: {
      countryCode: "HUN",
      countryNameEn: "Hungary",
      countryNameFa: "مجارستان",
    },
  },
  ABS: {
    airportNameEn: "Abu Simbel",
    airportNameFa: "فرودگاه ابو سمبل",
    city: {
      cityCode: "ABS",
      cityNameEn: "Abu Simbel",
      cityNameFa: "ابوسمبل",
    },
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  ALY: {
    airportNameEn: "El Nohza",
    airportNameFa: "فرودگاه بین‌المللی اسکندریه (مصر)",
    city: {
      cityCode: "ALY",
      cityNameEn: "Alexandria",
      cityNameFa: "اسکندریه",
    },
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  HBE: {
    airportNameEn: "Amiryah West",
    airportNameFa: "فرودگاه برج‌العرب",
    city: {
      cityCode: "ALY",
      cityNameEn: "Alexandria",
      cityNameFa: "اسکندریه",
    },
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  ASW: {
    airportNameEn: "Aswan",
    airportNameFa: "فرودگاه بین‌المللی اسوان",
    city: {
      cityCode: "ASW",
      cityNameEn: "Aswan",
      cityNameFa: "اسوان",
    },
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  ATZ: {
    airportNameEn: "Assiut",
    airportNameFa: "فرودگاه اسیوط",
    city: {
      cityCode: "ATZ",
      cityNameEn: "Assiut",
      cityNameFa: "اسیوت",
    },
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  AUE: {
    airportNameEn: "Abu Rudeis Airport",
    airportNameFa: "فرودگاه ابو رودیس",
    city: {
      cityCode: "AUE",
      cityNameEn: "Abu Rudeis",
      cityNameFa: "ابورودیس",
    },
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  CAI: {
    airportNameEn: "Cairo Intl.",
    airportNameFa: "فرودگاه بین‌المللی قاهره",
    city: {
      cityCode: "CAI",
      cityNameEn: "Cairo",
      cityNameFa: "قاهره",
    },
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  DAK: {
    airportNameEn: "Dakhla",
    airportNameFa: "فرودگاه داخلا اوسیس",
    city: {
      cityCode: "DAK",
      cityNameEn: "Dakhla Oasis",
      cityNameFa: "دخلا اوسیس",
    },
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  DBB: {
    airportNameEn: "Alalamain Intl.",
    airportNameFa: "فرودگاه بین المللی العالمین",
    city: {
      cityCode: "DBB",
      cityNameEn: "Dabaa City",
      cityNameFa: "شهر دابا",
    },
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  ELT: {
    airportNameEn: "Tour Sinai City",
    airportNameFa: "فرودگاه تور سینا سیتی",
    city: {
      cityCode: "ELT",
      cityNameEn: "Tour Sinai City",
      cityNameFa: "تور سینای سیتی",
    },
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  EMY: {
    airportNameEn: "El Minya",
    airportNameFa: "فرودگاه ال منیا",
    city: {
      cityCode: "EMY",
      cityNameEn: "El Minya",
      cityNameFa: "ال منیا",
    },
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  HRG: {
    airportNameEn: "Hurghada",
    airportNameFa: "فرودگاه بین‌المللی غردقه",
    city: {
      cityCode: "HRG",
      cityNameEn: "Hurghada",
      cityNameFa: "هورقدا",
    },
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  LXR: {
    airportNameEn: "Luxor",
    airportNameFa: "فرودگاه بین‌المللی لوکسار",
    city: {
      cityCode: "LXR",
      cityNameEn: "Luxor",
      cityNameFa: "اقصر",
    },
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  MFO: {
    airportNameEn: "Manguna",
    airportNameFa: "فرودگاه مانگونا",
    city: {
      cityCode: "MFO",
      cityNameEn: "Manguna",
      cityNameFa: "مانگونا",
    },
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  PSD: {
    airportNameEn: "Port Said",
    airportNameFa: "فرودگاه پورت سعید",
    city: {
      cityCode: "PSD",
      cityNameEn: "Port Said",
      cityNameFa: "پورت سعید",
    },
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  SEW: {
    airportNameEn: "Siwa",
    airportNameFa: "فرودگاه سیوا",
    city: {
      cityCode: "SEW",
      cityNameEn: "Siwa",
      cityNameFa: "سیوا",
    },
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  SKV: {
    airportNameEn: "Mount Sinai",
    airportNameFa: "فرودگاه بین‌المللی سنت کاترین",
    city: {
      cityCode: "SKV",
      cityNameEn: "Santa Katarina",
      cityNameFa: "سانتا کاتارینا",
    },
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  SSH: {
    airportNameEn: "Ophira Intl.",
    airportNameFa: "فرودگاه بین‌المللی شرم‌الشیخ",
    city: {
      cityCode: "SSH",
      cityNameEn: "Sharm El Sheikh",
      cityNameFa: "شرم الشیخ",
    },
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  TCP: {
    airportNameEn: "Taba Intl.",
    airportNameFa: "فرودگاه بین‌المللی طابا",
    city: {
      cityCode: "TCP",
      cityNameEn: "Taba",
      cityNameFa: "تابا",
    },
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  UVL: {
    airportNameEn: "Kharga",
    airportNameFa: "فرودگاه خارگا",
    city: {
      cityCode: "UVL",
      cityNameEn: "Kharga",
      cityNameFa: "خرگا",
    },
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  AAC: {
    airportNameEn: "Al Arish Intl. Arpt.",
    airportNameFa: "فرودگاه بین‌المللی العریش",
    city: {
      cityCode: "AAC",
      cityNameEn: "Al Arish",
      cityNameFa: "ال اریش",
    },
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  GSQ: {
    airportNameEn: "Shark Elowainat",
    airportNameFa: "فرودگاه شرق ال‌اوینت",
    city: {
      cityCode: "GSQ",
      cityNameEn: "Shark Elowainat",
      cityNameFa: "کوسه ایلواینات",
    },
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  MUH: {
    airportNameEn: "Mersa Matruh",
    airportNameFa: "فرودگاه مرسی مطروح",
    city: {
      cityCode: "MUH",
      cityNameEn: "Mersa Matruh",
      cityNameFa: "مرسا ماتروه",
    },
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  RMF: {
    airportNameEn: "Marsa Alam Intl",
    airportNameFa: "مرسی علم",
    city: {
      cityCode: "RMF",
      cityNameEn: "Marsa Alam",
      cityNameFa: "مرصع علم",
    },
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
} as const;
