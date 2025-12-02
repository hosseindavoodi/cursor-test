export type CityMapResult = {
  cityNameFa: string;
  cityNameEn: string;
  country: CountryMapResult;
  airports: {
    airportNameFa: string;
    airportNameEn: string;
    airportCode: string;
  }[];
};
type CountryMapResult = {
  countryNameFa: string;
  countryNameEn: string;
  countryCode: string;
};

type CitiesMap = Record<string, CityMapResult>;

export const citiesMap: { [key: string]: CityMapResult } = {
  THR: {
    airports: [
      {
        airportNameEn: "Mehrabad",
        airportNameFa: "فرودگاه مهرآباد",
        airportCode: "THR",
      },
      {
        airportNameEn: "Imam Khomeini",
        airportNameFa: "فرودگاه بین المللی امام خمینی",
        airportCode: "IKA",
      },
    ],
    cityNameFa: "تهران",
    cityNameEn: "Tehran",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  KHA: {
    airports: [
      {
        airportNameEn: "Khaneh",
        airportNameFa: "فرودگاه پیرانشهر(خانه)",
        airportCode: "KHA",
      },
    ],
    cityNameFa: "خانه",
    cityNameEn: "Khaneh",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  KKS: {
    airports: [
      {
        airportNameEn: "Kashan Airport",
        airportNameFa: "فرودگاه کاشان",
        airportCode: "KKS",
      },
    ],
    cityNameFa: "کاشان",
    cityNameEn: "Kashan",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  ACZ: {
    airports: [
      {
        airportNameEn: "Zabol A/P",
        airportNameFa: "فرودگاه زابل",
        airportCode: "ACZ",
      },
    ],
    cityNameFa: "زابل",
    cityNameEn: "Zabol",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  IFN: {
    airports: [
      {
        airportNameEn: "Isfahan Intl.",
        airportNameFa: "فرودگاه اصفهان",
        airportCode: "IFN",
      },
    ],
    cityNameFa: "اصفهان",
    cityNameEn: "Isfahan",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  LRR: {
    airports: [
      {
        airportNameEn: "Lar airport",
        airportNameFa: "فرودگاه لار",
        airportCode: "LRR",
      },
    ],
    cityNameFa: "لار",
    cityNameEn: "Lar",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  MHD: {
    airports: [
      {
        airportNameEn: "Mashhad",
        airportNameFa: "فرودگاه مشهد",
        airportCode: "MHD",
      },
    ],
    cityNameFa: "مشهد",
    cityNameEn: "Mashhad",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  OMH: {
    airports: [
      {
        airportNameEn: "Urmieh",
        airportNameFa: "فرودگاه ارومیه",
        airportCode: "OMH",
      },
    ],
    cityNameFa: "ارومیه",
    cityNameEn: "Urmieh",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  PGU: {
    airports: [
      {
        airportNameEn: "Persian Gulf Intl.",
        airportNameFa: "فرودگاه خلیج فارس",
        airportCode: "PGU",
      },
    ],
    cityNameFa: "عسلویه",
    cityNameEn: "Assaluyeh",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  SYZ: {
    airports: [
      {
        airportNameEn: "Shiraz",
        airportNameFa: "فرودگاه شهید دستغیب",
        airportCode: "SYZ",
      },
    ],
    cityNameFa: "شیراز",
    cityNameEn: "Shiraz",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  TBZ: {
    airports: [
      {
        airportNameEn: "Tabriz",
        airportNameFa: "فرودگاه تبریز",
        airportCode: "TBZ",
      },
    ],
    cityNameFa: "تبریز",
    cityNameEn: "Tabriz",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  AWZ: {
    airports: [
      {
        airportNameEn: "Ahwaz",
        airportNameFa: "فرودگاه اهواز",
        airportCode: "AWZ",
      },
    ],
    cityNameFa: "اهواز",
    cityNameEn: "Ahwaz",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  BND: {
    airports: [
      {
        airportNameEn: "Bandar Abbas",
        airportNameFa: "فرودگاه بندر عباس",
        airportCode: "BND",
      },
    ],
    cityNameFa: "بندرعباس",
    cityNameEn: "Bandar Abbas",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  KIH: {
    airports: [
      {
        airportNameEn: "Kish Island",
        airportNameFa: "فرودگاه کیش",
        airportCode: "KIH",
      },
    ],
    cityNameFa: "کیش",
    cityNameEn: "Kish",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  SRY: {
    airports: [
      {
        airportNameEn: "Dashte Naz",
        airportNameFa: "فرودگاه ساری",
        airportCode: "SRY",
      },
    ],
    cityNameFa: "ساری",
    cityNameEn: "Sari",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  ADU: {
    airports: [
      {
        airportNameEn: "Ardebil",
        airportNameFa: "فرودگاه اردبـیل",
        airportCode: "ADU",
      },
    ],
    cityNameFa: "اردبیل",
    cityNameEn: "Ardabil",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  AEU: {
    airports: [
      {
        airportNameEn: "Abu Musa",
        airportNameFa: "فرودگاه ابوموسی",
        airportCode: "AEU",
      },
    ],
    cityNameFa: "ابو موسی‌",
    cityNameEn: "Abu Musa",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  AJK: {
    airports: [
      {
        airportNameEn: "Araak",
        airportNameFa: "فرودگاه اراک",
        airportCode: "AJK",
      },
    ],
    cityNameFa: "اراک",
    cityNameEn: "Araak",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  AKW: {
    airports: [
      {
        airportNameEn: "Aghajari",
        airportNameFa: "فرودگاه آقاجاری",
        airportCode: "AKW",
      },
    ],
    cityNameFa: "آغاجری",
    cityNameEn: "Aghajari",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  AZD: {
    airports: [
      {
        airportNameEn: "Yazd",
        airportNameFa: "فرودگاه یزد",
        airportCode: "AZD",
      },
    ],
    cityNameFa: "یزد",
    cityNameEn: "Yazd",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  BBL: {
    airports: [
      {
        airportNameEn: "Babolsar",
        airportNameFa: "فرودگاه بابلسر",
        airportCode: "BBL",
      },
    ],
    cityNameFa: "بابلسر",
    cityNameEn: "Babolsar",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  BDH: {
    airports: [
      {
        airportNameEn: "Bandar Lengeh",
        airportNameFa: "فرودگاه بندر لنگه",
        airportCode: "BDH",
      },
    ],
    cityNameFa: "بندر لنگه",
    cityNameEn: "Bandar Lengeh",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  BJB: {
    airports: [
      {
        airportNameEn: "Bojnord",
        airportNameFa: "فرودگاه بجنورد",
        airportCode: "BJB",
      },
    ],
    cityNameFa: "بجنورد",
    cityNameEn: "Bojnord",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  BSM: {
    airports: [
      {
        airportNameEn: "Bishe-Kola",
        airportNameFa: "فرودگاه بیشه کلا",
        airportCode: "BSM",
      },
    ],
    cityNameFa: "بیشه-کلا",
    cityNameEn: "Bishe-Kola",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  BUZ: {
    airports: [
      {
        airportNameEn: "Bushehr",
        airportNameFa: "فرودگاه بوشهر",
        airportCode: "BUZ",
      },
    ],
    cityNameFa: "بوشهر",
    cityNameEn: "Bushehr",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  BXR: {
    airports: [
      {
        airportNameEn: "Bam",
        airportNameFa: "فرودگاه بم",
        airportCode: "BXR",
      },
    ],
    cityNameFa: "بم",
    cityNameEn: "Bam",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  CKT: {
    airports: [
      {
        airportNameEn: "Sarakhs",
        airportNameFa: "فرودگاه سرخس",
        airportCode: "CKT",
      },
    ],
    cityNameFa: "سرخس",
    cityNameEn: "Sarakhs",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  CQD: {
    airports: [
      {
        airportNameEn: "Shahre-kord",
        airportNameFa: "فرودگاه شهرکرد",
        airportCode: "CQD",
      },
    ],
    cityNameFa: "شهرکرد",
    cityNameEn: "Shahre Kord",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  FAZ: {
    airports: [
      {
        airportNameEn: "Fasa",
        airportNameFa: "فرودگاه فسا",
        airportCode: "FAZ",
      },
    ],
    cityNameFa: "فسا",
    cityNameEn: "Fasa",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  GBT: {
    airports: [
      {
        airportNameEn: "Gorgan",
        airportNameFa: "فرودگاه گرگان",
        airportCode: "GBT",
      },
    ],
    cityNameFa: "گرگان",
    cityNameEn: "Gorgan",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  GSM: {
    airports: [
      {
        airportNameEn: "Qeshm",
        airportNameFa: "فرودگاه قشم",
        airportCode: "GSM",
      },
    ],
    cityNameFa: "قشم",
    cityNameEn: "Qeshm",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  HDM: {
    airports: [
      {
        airportNameEn: "Hamadan",
        airportNameFa: "فرودگاه همدان",
        airportCode: "HDM",
      },
    ],
    cityNameFa: "همدان",
    cityNameEn: "Hamadan",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  HDR: {
    airports: [
      {
        airportNameEn: "Havadarya",
        airportNameFa: "فرودگاه هوادریا",
        airportCode: "HDR",
      },
    ],
    cityNameFa: "هاوادریا",
    cityNameEn: "Havadarya",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  IHR: {
    airports: [
      {
        airportNameEn: "Iran Shahr",
        airportNameFa: "فرودگاه ایران شهر",
        airportCode: "IHR",
      },
    ],
    cityNameFa: "ایرانشهر",
    cityNameEn: "Iranshahr",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  JWN: {
    airports: [
      {
        airportNameEn: "Zanjan",
        airportNameFa: "فرودگاه زنجان",
        airportCode: "JWN",
      },
    ],
    cityNameFa: "زنجان",
    cityNameEn: "Zanjan",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  JYR: {
    airports: [
      {
        airportNameEn: "Jiroft",
        airportNameFa: "فرودگاه جیرفت",
        airportCode: "JYR",
      },
    ],
    cityNameFa: "جیرفت",
    cityNameEn: "Jiroft",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  KER: {
    airports: [
      {
        airportNameEn: "Kerman",
        airportNameFa: "فرودگاه کرمان",
        airportCode: "KER",
      },
    ],
    cityNameFa: "کرمان",
    cityNameEn: "Kerman",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  KHD: {
    airports: [
      {
        airportNameEn: "Khorramabad",
        airportNameFa: "فرودگاه خرم آباد",
        airportCode: "KHD",
      },
    ],
    cityNameFa: "خرم آباد",
    cityNameEn: "Khoramabad",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  KHK: {
    airports: [
      {
        airportNameEn: "Khark",
        airportNameFa: "فرودگاه خارک",
        airportCode: "KHK",
      },
    ],
    cityNameFa: "خارک",
    cityNameEn: "Khark",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  KHY: {
    airports: [
      {
        airportNameEn: "Khoy",
        airportNameFa: "فرودگاه خوی",
        airportCode: "KHY",
      },
    ],
    cityNameFa: "خوی",
    cityNameEn: "Khoy",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  KLM: {
    airports: [
      {
        airportNameEn: "Kalaleh",
        airportNameFa: "فرودگاه کلاله",
        airportCode: "KLM",
      },
    ],
    cityNameFa: "کلاله",
    cityNameEn: "Kalaleh",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  KNR: {
    airports: [
      {
        airportNameEn: "Jam",
        airportNameFa: "فرودگاه جم",
        airportCode: "KNR",
      },
    ],
    cityNameFa: "کنگان",
    cityNameEn: "Kangan",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  KSH: {
    airports: [
      {
        airportNameEn: "Kermanshah",
        airportNameFa: "فرودگاه کرمانشاه",
        airportCode: "KSH",
      },
    ],
    cityNameFa: "کرمانشاه",
    cityNameEn: "Kermanshah",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  LFM: {
    airports: [
      {
        airportNameEn: "Lamerd",
        airportNameFa: "فرودگاه لامرد",
        airportCode: "LFM",
      },
    ],
    cityNameFa: "لامرد",
    cityNameEn: "Lamerd",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  LVP: {
    airports: [
      {
        airportNameEn: "Lavan",
        airportNameFa: "فرودگاه لاوان",
        airportCode: "LVP",
      },
    ],
    cityNameFa: "لاون",
    cityNameEn: "Lavan",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  MRX: {
    airports: [
      {
        airportNameEn: "Mahshahr",
        airportNameFa: "فرودگاه ماهشهر",
        airportCode: "MRX",
      },
    ],
    cityNameFa: "ماهشهر",
    cityNameEn: "Mahshahr",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  NSH: {
    airports: [
      {
        airportNameEn: "Now Shahr",
        airportNameFa: "فرودگاه نوشهر",
        airportCode: "NSH",
      },
    ],
    cityNameFa: "نوشهر",
    cityNameEn: "Now Shahr",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  OMI: {
    airports: [
      {
        airportNameEn: "Omidieh",
        airportNameFa: "پایگاه هوایی امیدیه",
        airportCode: "OMI",
      },
    ],
    cityNameFa: "امیدیه",
    cityNameEn: "Omidieh",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  RAS: {
    airports: [
      {
        airportNameEn: "Rasht",
        airportNameFa: "فرودگاه رشت",
        airportCode: "RAS",
      },
    ],
    cityNameFa: "رشت",
    cityNameEn: "Rasht",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  RJN: {
    airports: [
      {
        airportNameEn: "Rafsanjan",
        airportNameFa: "فرودگاه رفسنجان",
        airportCode: "RJN",
      },
    ],
    cityNameFa: "رفسنجان",
    cityNameEn: "Rafsanjan",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  RZR: {
    airports: [
      {
        airportNameEn: "Ramsar",
        airportNameFa: "فرودگاه رامسر",
        airportCode: "RZR",
      },
    ],
    cityNameFa: "رامسر",
    cityNameEn: "Ramsar",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  SDG: {
    airports: [
      {
        airportNameEn: "Sanandaj",
        airportNameFa: "فرودگاه سنندج",
        airportCode: "SDG",
      },
    ],
    cityNameFa: "سنندج",
    cityNameEn: "Sanandaj",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  SXI: {
    airports: [
      {
        airportNameEn: "Sirri Island",
        airportNameFa: "فرودگاه سیری",
        airportCode: "SXI",
      },
    ],
    cityNameFa: "جزیره سیری",
    cityNameEn: "Sirri Island",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  SYJ: {
    airports: [
      {
        airportNameEn: "Sirjan",
        airportNameFa: "فرودگاه سیرجان",
        airportCode: "SYJ",
      },
    ],
    cityNameFa: "سیرجان",
    cityNameEn: "Sirjan",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  TCX: {
    airports: [
      {
        airportNameEn: "Tabas Airport",
        airportNameFa: "فرودگاه طبس",
        airportCode: "TCX",
      },
    ],
    cityNameFa: "طبس",
    cityNameEn: "Tabas",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  XBJ: {
    airports: [
      {
        airportNameEn: "Birjand",
        airportNameFa: "فرودگاه بیرجند",
        airportCode: "XBJ",
      },
    ],
    cityNameFa: "بیرجند",
    cityNameEn: "Birjand",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  ZAH: {
    airports: [
      {
        airportNameEn: "Zahedan",
        airportNameFa: "فرودگاه زاهدان",
        airportCode: "ZAH",
      },
    ],
    cityNameFa: "زاهدان",
    cityNameEn: "Zahedan",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  ZBR: {
    airports: [
      {
        airportNameEn: "Chah-Bahar",
        airportNameFa: "فرودگاه کنارک",
        airportCode: "ZBR",
      },
    ],
    cityNameFa: "چابهار",
    cityNameEn: "Chah-Bahar",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  PYK: {
    airports: [
      {
        airportNameEn: "Payam Karaj",
        airportNameFa: "فرودگاه پیام کرج",
        airportCode: "PYK",
      },
    ],
    cityNameFa: "کرج",
    cityNameEn: "Karaj",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  ABD: {
    airports: [
      {
        airportNameEn: "Abadan",
        airportNameFa: "فرودگاه آبادان",
        airportCode: "ABD",
      },
    ],
    cityNameFa: "آبادان",
    cityNameEn: "Abadan",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  ACP: {
    airports: [
      {
        airportNameEn: "Sahand",
        airportNameFa: "فرودگاه سهند",
        airportCode: "ACP",
      },
    ],
    cityNameFa: "سهند",
    cityNameEn: "Sahand",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  AFZ: {
    airports: [
      {
        airportNameEn: "Sabzevar",
        airportNameFa: "فرودگاه سبزوار",
        airportCode: "AFZ",
      },
    ],
    cityNameFa: "سبزوار",
    cityNameEn: "Sabzevar",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  DEF: {
    airports: [
      {
        airportNameEn: "Dezful",
        airportNameFa: "فرودگاه دزفول",
        airportCode: "DEF",
      },
    ],
    cityNameFa: "دزفول",
    cityNameEn: "Dezful",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  GCH: {
    airports: [
      {
        airportNameEn: "Gachsaran airport",
        airportNameFa: "فرودگاه گچساران",
        airportCode: "GCH",
      },
    ],
    cityNameFa: "گچساران",
    cityNameEn: "Gachsaran",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  YES: {
    airports: [
      {
        airportNameEn: "YASSUJ",
        airportNameFa: "یاسوج",
        airportCode: "YES",
      },
    ],
    cityNameFa: "یاسوج",
    cityNameEn: "Yasuj",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  IMQ: {
    airports: [
      {
        airportNameEn: "Maku",
        airportNameFa: "فرودگاه ماکو",
        airportCode: "IMQ",
      },
    ],
    cityNameFa: "ماکو",
    cityNameEn: "Makou",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  QMJ: {
    airports: [
      {
        airportNameEn: "Masjid Soleiman Airport",
        airportNameFa: "فرودگاه مسجد سلیمان",
        airportCode: "QMJ",
      },
    ],
    cityNameFa: "مسجد سلیمان",
    cityNameEn: "Masjed Soleiman",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  TQZ: {
    airports: [
      {
        airportNameEn: "Saqqez Airport",
        airportNameFa: "فرودگاه سقز",
        airportCode: "TQZ",
      },
    ],
    cityNameFa: "سقز",
    cityNameEn: "Saqqez",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  JAR: {
    airports: [
      {
        airportNameEn: "Jahrom Airport",
        airportNameFa: "فرودگاه جهرم",
        airportCode: "JAR",
      },
    ],
    cityNameFa: "جهرم",
    cityNameEn: "Jahrom",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  PFQ: {
    airports: [
      {
        airportNameEn: "Pars Abad Airport",
        airportNameFa: "قرودگاه پارس آباد",
        airportCode: "PFQ",
      },
    ],
    cityNameFa: "پارس آباد",
    cityNameEn: "Pars abad",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  RUD: {
    airports: [
      {
        airportNameEn: "Shahrood Airport",
        airportNameFa: "فرودگاه شاهرود",
        airportCode: "RUD",
      },
    ],
    cityNameFa: "شاهرود",
    cityNameEn: "shahroud",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  JSK: {
    airports: [
      {
        airportNameEn: "Jask Airport",
        airportNameFa: "فرودگاه جاسک",
        airportCode: "JSK",
      },
    ],
    cityNameFa: "جاسک",
    cityNameEn: "Jask",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  IIL: {
    airports: [
      {
        airportNameEn: "Ilam Airport",
        airportNameFa: "فرودگاه ایلام",
        airportCode: "IIL",
      },
    ],
    cityNameFa: "ایلام",
    cityNameEn: "Ilam",
    country: {
      countryCode: "IRN",
      countryNameEn: "Iran",
      countryNameFa: "ایران",
    },
  },
  BKK: {
    airports: [
      {
        airportNameEn: "Bangkok",
        airportNameFa: "فرودگاه بانکوک",
        airportCode: "BKK",
      },
      {
        airportNameEn: "Don Muang",
        airportNameFa: "فرودگاه بین‌المللی دن موئنگ",
        airportCode: "DMK",
      },
    ],
    cityNameFa: "بانکوک",
    cityNameEn: "Bangkok",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  TKH: {
    airports: [
      {
        airportNameEn: "Nakhon Sawan",
        airportNameFa: "فرودگاه ناخون ساوان",
        airportCode: "TKH",
      },
    ],
    cityNameFa: "تاخلی",
    cityNameEn: "Takhli",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  HKT: {
    airports: [
      {
        airportNameEn: "Phuket Intl.",
        airportNameFa: "فرودگاه پوکت",
        airportCode: "HKT",
      },
    ],
    cityNameFa: "پوکت",
    cityNameEn: "Phuket",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  BAO: {
    airports: [
      {
        airportNameEn: "Udorn",
        airportNameFa: "فرودگاه اودون ایر بیس",
        airportCode: "BAO",
      },
    ],
    cityNameFa: "بن مک خین",
    cityNameEn: "Ban Mak Khaen",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  CEI: {
    airports: [
      {
        airportNameEn: "Chiang Rai",
        airportNameFa: "فرودگاه بین‌المللی مائه فه لوانگ-چینگ رایی",
        airportCode: "CEI",
      },
    ],
    cityNameFa: "چیانگ رای",
    cityNameEn: "Chiang Rai",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  CJM: {
    airports: [
      {
        airportNameEn: "Chumphon Arpt.",
        airportNameFa: "فرودگاه چامفون",
        airportCode: "CJM",
      },
    ],
    cityNameFa: "چومفون",
    cityNameEn: "Chumphon",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  CNX: {
    airports: [
      {
        airportNameEn: "Chiang Mai Intl.",
        airportNameFa: "فرودگاه بین‌المللی چیانگ مای",
        airportCode: "CNX",
      },
    ],
    cityNameFa: "چیانگ مای",
    cityNameEn: "Chiang Mai",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  HGN: {
    airports: [
      {
        airportNameEn: "Mae Hong Son",
        airportNameFa: "فرودگاه مائه هنگ سون",
        airportCode: "HGN",
      },
    ],
    cityNameFa: "مایی هنگ سان",
    cityNameEn: "Mae Hong Son",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  HHQ: {
    airports: [
      {
        airportNameEn: "Hua Hin Arpt.",
        airportNameFa: "فرودگاه هوا هین",
        airportCode: "HHQ",
      },
    ],
    cityNameFa: "هوآهین",
    cityNameEn: "Hua Hin",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  KBV: {
    airports: [
      {
        airportNameEn: "Krabi",
        airportNameFa: "فرودگاه کرابی",
        airportCode: "KBV",
      },
    ],
    cityNameFa: "کرآبی",
    cityNameEn: "Krabi",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  KDT: {
    airports: [
      {
        airportNameEn: "Kamphangsaen",
        airportNameFa: "فرودگاه کمفینگ سین",
        airportCode: "KDT",
      },
    ],
    cityNameFa: "کامفانگسین",
    cityNameEn: "Kamphangsaen",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  KKC: {
    airports: [
      {
        airportNameEn: "Khon Kaen",
        airportNameFa: "فرودگاه خون‌کائن",
        airportCode: "KKC",
      },
    ],
    cityNameFa: "خون کین",
    cityNameEn: "Khon Kaen",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  KOP: {
    airports: [
      {
        airportNameEn: "Nakhon Phanom",
        airportNameFa: "فرودگاه ناخون فانوم",
        airportCode: "KOP",
      },
    ],
    cityNameFa: "نخون فنم",
    cityNameEn: "Nakhon Phanom",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  LOE: {
    airports: [
      {
        airportNameEn: "Loei",
        airportNameFa: "فرودگاه لوئی",
        airportCode: "LOE",
      },
    ],
    cityNameFa: "لویی",
    cityNameEn: "Loei",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  LPT: {
    airports: [
      {
        airportNameEn: "Lampang",
        airportNameFa: "فرودگاه لمپانگ",
        airportCode: "LPT",
      },
    ],
    cityNameFa: "لامپنگ",
    cityNameEn: "Lampang",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  MAQ: {
    airports: [
      {
        airportNameEn: "Mae Sot",
        airportNameFa: "فرودگاه مائه سوت",
        airportCode: "MAQ",
      },
    ],
    cityNameFa: "مایی سات",
    cityNameEn: "Mae Sot",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  NAK: {
    airports: [
      {
        airportNameEn: "Nakhon Ratchasima",
        airportNameFa: "فرودگاه ناخون راتچاسیما",
        airportCode: "NAK",
      },
    ],
    cityNameFa: "ناخون راتچاسیما",
    cityNameEn: "Nakhon Ratchasima",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  NAW: {
    airports: [
      {
        airportNameEn: "Narathiwat",
        airportNameFa: "فرودگاه ناراتیوات",
        airportCode: "NAW",
      },
    ],
    cityNameFa: "ناراثیوات",
    cityNameEn: "Narathiwat",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  NNT: {
    airports: [
      {
        airportNameEn: "Nan",
        airportNameFa: "فرودگاه نان",
        airportCode: "NNT",
      },
    ],
    cityNameFa: "نان",
    cityNameEn: "Nan",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  NST: {
    airports: [
      {
        airportNameEn: "Nakhon Si Thammarat",
        airportNameFa: "فرودگاه ناخون سی تامارت",
        airportCode: "NST",
      },
    ],
    cityNameFa: "ناخون سی ثامارات",
    cityNameEn: "Nakhon Si Thammarat",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  PAN: {
    airports: [
      {
        airportNameEn: "Pattani",
        airportNameFa: "فرودگاه پتنی",
        airportCode: "PAN",
      },
    ],
    cityNameFa: "پاناما",
    cityNameEn: "Pattani",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  PHS: {
    airports: [
      {
        airportNameEn: "Phitsanulok",
        airportNameFa: "فرودگاه فیتسنولک",
        airportCode: "PHS",
      },
    ],
    cityNameFa: "فیتسانولوک",
    cityNameEn: "Phitsanulok",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  PHY: {
    airports: [
      {
        airportNameEn: "Phetchabun",
        airportNameFa: "فرودگاه فچابون",
        airportCode: "PHY",
      },
    ],
    cityNameFa: "فچابون",
    cityNameEn: "Phetchabun",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  PRH: {
    airports: [
      {
        airportNameEn: "Phrae",
        airportNameFa: "فرودگاه فرأ",
        airportCode: "PRH",
      },
    ],
    cityNameFa: "فرایی",
    cityNameEn: "Phrae",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  PYY: {
    airports: [
      {
        airportNameEn: "Pai",
        airportNameFa: "فرودگاه پای",
        airportCode: "PYY",
      },
    ],
    cityNameFa: "پای",
    cityNameEn: "Pai",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  SGZ: {
    airports: [
      {
        airportNameEn: "Songkhla",
        airportNameFa: "فرودگاه سنگخلا",
        airportCode: "SGZ",
      },
    ],
    cityNameFa: "سونگخلا",
    cityNameEn: "Songkhla",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  SNO: {
    airports: [
      {
        airportNameEn: "Sakon Nakhon",
        airportNameFa: "فرودگاه ساکن ناخن",
        airportCode: "SNO",
      },
    ],
    cityNameFa: "ساکون ناخون",
    cityNameEn: "Sakon Nakhon",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  TDX: {
    airports: [
      {
        airportNameEn: "Trat",
        airportNameFa: "فرودگاه ترات",
        airportCode: "TDX",
      },
    ],
    cityNameFa: "ترات",
    cityNameEn: "Trat",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  THS: {
    airports: [
      {
        airportNameEn: "Sukhothai",
        airportNameFa: "فرودگاه سوخوتاهی",
        airportCode: "THS",
      },
    ],
    cityNameFa: "سوخوتای",
    cityNameEn: "Sukhothai",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  TKT: {
    airports: [
      {
        airportNameEn: "Tak",
        airportNameFa: "فرودگاه تک",
        airportCode: "TKT",
      },
    ],
    cityNameFa: "تاک",
    cityNameEn: "Tak",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  TST: {
    airports: [
      {
        airportNameEn: "Trang",
        airportNameFa: "فرودگاه ترانگ",
        airportCode: "TST",
      },
    ],
    cityNameFa: "ترانگ",
    cityNameEn: "Trang",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  UBP: {
    airports: [
      {
        airportNameEn: "Muang Ubon",
        airportNameFa: "فرودگاه اوبون راتچاتانی",
        airportCode: "UBP",
      },
    ],
    cityNameFa: "یوبن رتچتهنی",
    cityNameEn: "Ubon Ratchathni",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  UNN: {
    airports: [
      {
        airportNameEn: "Ranong",
        airportNameFa: "فرودگاه رانونگ",
        airportCode: "UNN",
      },
    ],
    cityNameFa: "رانونگ",
    cityNameEn: "Ranong",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  URT: {
    airports: [
      {
        airportNameEn: "Surat Thani",
        airportNameFa: "فرودگاه سورات",
        airportCode: "URT",
      },
    ],
    cityNameFa: "سورات تانی",
    cityNameEn: "Surat Thani",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  USM: {
    airports: [
      {
        airportNameEn: "Koh Samui",
        airportNameFa: "فرودگاه ساموی",
        airportCode: "USM",
      },
    ],
    cityNameFa: "کوه سامویی",
    cityNameEn: "Koh Samui",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  UTH: {
    airports: [
      {
        airportNameEn: "Udon Thani",
        airportNameFa: "فرودگاه بین‌المللی اودن تانی",
        airportCode: "UTH",
      },
    ],
    cityNameFa: "اودون تانی",
    cityNameEn: "Udon Thani",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  UTP: {
    airports: [
      {
        airportNameEn: "Utapao",
        airportNameFa: "فرودگاه بین‌المللی یو-تاپائو",
        airportCode: "UTP",
      },
    ],
    cityNameFa: "اوتاپائو",
    cityNameEn: "Utapao",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  UTR: {
    airports: [
      {
        airportNameEn: "Uttaradit",
        airportNameFa: "فرودگاه یوتردیت",
        airportCode: "UTR",
      },
    ],
    cityNameFa: "اوتارادیت",
    cityNameEn: "Uttaradit",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  HDY: {
    airports: [
      {
        airportNameEn: "Hat Yai",
        airportNameFa: "فرودگاه بین‌المللی هت یای",
        airportCode: "HDY",
      },
    ],
    cityNameFa: "هات آیی",
    cityNameEn: "Hat Yai",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  ROI: {
    airports: [
      {
        airportNameEn: "Roi Et Arpt.",
        airportNameFa: "فرودگاه روی ات ارپت.",
        airportCode: "ROI",
      },
    ],
    cityNameFa: "روی ات",
    cityNameEn: "Roi Et",
    country: {
      countryCode: "THA",
      countryNameEn: "Thailand",
      countryNameFa: "تایلند",
    },
  },
  IZM: {
    airports: [
      {
        airportNameEn: "Adnan Menderes",
        airportNameFa: "فرودگاه عدنان مندرس ازمیر",
        airportCode: "ADB",
      },
      {
        airportNameEn: "Cigli Military Arpt",
        airportNameFa: "پایگاه هوایی چیگلی ",
        airportCode: "IGL",
      },
    ],
    cityNameFa: "ازمیر",
    cityNameEn: "Izmir",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  ANK: {
    airports: [
      {
        airportNameEn: "Etimesgut",
        airportNameFa: "فرودگاه اتیمسگوت",
        airportCode: "ANK",
      },
      {
        airportNameEn: "Esenboga",
        airportNameFa: "فرودگاه اسن‌بوغا",
        airportCode: "ESB",
      },
    ],
    cityNameFa: "آنکارا",
    cityNameEn: "Ankara",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  AYT: {
    airports: [
      {
        airportNameEn: "Antalya",
        airportNameFa: "فرودگاه آنتالیا",
        airportCode: "AYT",
      },
    ],
    cityNameFa: "آنتالیا",
    cityNameEn: "Antalya",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  IST: {
    airports: [
      {
        airportNameEn: "Istanbul New",
        airportNameFa: "فرودگاه جدید استانبول",
        airportCode: "IST",
      },
      {
        airportNameEn: "Sabiha Gokcen",
        airportNameFa: "فرودگاه صابیحا گوکچن",
        airportCode: "SAW",
      },
      {
        airportNameEn: "Ataturk Airport",
        airportNameFa: "فرودگاه آتاتورک",
        airportCode: "ISL",
      },
    ],
    cityNameFa: "استانبول",
    cityNameEn: "Istanbul",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  BJV: {
    airports: [
      {
        airportNameEn: "Milas Arpt.",
        airportNameFa: "فرودگاه میلاس",
        airportCode: "BJV",
      },
      {
        airportNameEn: "Imsik Arpt.",
        airportNameFa: "فرودگاه ایمسیک",
        airportCode: "BXN",
      },
    ],
    cityNameFa: "بدروم",
    cityNameEn: "Bodrum",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  BZI: {
    airports: [
      {
        airportNameEn: "Balikesir",
        airportNameFa: "فرودگاه بالیکسیر(مارکز) ",
        airportCode: "BZI",
      },
      {
        airportNameEn: "Edremit/Korfez",
        airportNameFa: "فرودگاه ادرمیت کورفز",
        airportCode: "EDO",
      },
    ],
    cityNameFa: "بالیکسیر",
    cityNameEn: "Balikesir",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  ADF: {
    airports: [
      {
        airportNameEn: "Adiyaman",
        airportNameFa: "فرودگاه آدیامان",
        airportCode: "ADF",
      },
    ],
    cityNameFa: "آدیامان",
    cityNameEn: "Adiyaman",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  AFY: {
    airports: [
      {
        airportNameEn: "Afyon",
        airportNameFa: "فرودگاه افیون",
        airportCode: "AFY",
      },
    ],
    cityNameFa: "افیون",
    cityNameEn: "Afyon",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  AJI: {
    airports: [
      {
        airportNameEn: "Agri Airport",
        airportNameFa: "فرودگاه آگری",
        airportCode: "AJI",
      },
    ],
    cityNameFa: "آگری",
    cityNameEn: "Agri",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  ASR: {
    airports: [
      {
        airportNameEn: "Erkilet Intl. Arpt.",
        airportNameFa: "فرودگاه بین المللی ارکیلت کایسری",
        airportCode: "ASR",
      },
    ],
    cityNameFa: "کایسری",
    cityNameEn: "Kayseri",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  BAL: {
    airports: [
      {
        airportNameEn: "Batman",
        airportNameFa: "فرودگاه باتمان",
        airportCode: "BAL",
      },
    ],
    cityNameFa: "باتمان",
    cityNameEn: "Batman",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  BDM: {
    airports: [
      {
        airportNameEn: "Bandirma",
        airportNameFa: "فرودگاه باندیرما",
        airportCode: "BDM",
      },
    ],
    cityNameFa: "بندیرما",
    cityNameEn: "Bandirma",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  BGG: {
    airports: [
      {
        airportNameEn: "Bongouanou",
        airportNameFa: "فرودگاه بونگوانو",
        airportCode: "BGG",
      },
    ],
    cityNameFa: "بنگوانو",
    cityNameEn: "Bongouanou",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  BTZ: {
    airports: [
      {
        airportNameEn: "Bursa/Yenisehir Airport",
        airportNameFa: "فرودگاه بورسا/ ینی سهیر",
        airportCode: "BTZ",
      },
    ],
    cityNameFa: "بورسا",
    cityNameEn: "Bursa",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  CII: {
    airports: [
      {
        airportNameEn: "Cildir",
        airportNameFa: "فرودگاه کیلدیر",
        airportCode: "CII",
      },
    ],
    cityNameFa: "آیدین",
    cityNameEn: "Aydin",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  CKZ: {
    airports: [
      {
        airportNameEn: "Canakkale",
        airportNameFa: "فرودگاه ساناککاله",
        airportCode: "CKZ",
      },
    ],
    cityNameFa: "کنککل",
    cityNameEn: "Canakkale",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  DLM: {
    airports: [
      {
        airportNameEn: "Dalaman",
        airportNameFa: "فرودگاه دالامان",
        airportCode: "DLM",
      },
    ],
    cityNameFa: "دالامان",
    cityNameEn: "Dalaman",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  DNZ: {
    airports: [
      {
        airportNameEn: "Cardak",
        airportNameFa: "فرودگاه دنیزلی کاردیک",
        airportCode: "DNZ",
      },
    ],
    cityNameFa: "دنیزلی",
    cityNameEn: "Denizli",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  ERC: {
    airports: [
      {
        airportNameEn: "Erzincan",
        airportNameFa: "فرودگاه ارزنجان",
        airportCode: "ERC",
      },
    ],
    cityNameFa: "ارزنجان",
    cityNameEn: "Erzincan",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  ERZ: {
    airports: [
      {
        airportNameEn: "Erzurum",
        airportNameFa: "فرودگاه ارزروم",
        airportCode: "ERZ",
      },
    ],
    cityNameFa: "ارزوروم",
    cityNameEn: "Erzurum",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  ESK: {
    airports: [
      {
        airportNameEn: "Eskisehir",
        airportNameFa: "فرودگاه اسکی‌شهر",
        airportCode: "ESK",
      },
    ],
    cityNameFa: "اسکیشهیر",
    cityNameEn: "Eskisehir",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  EZS: {
    airports: [
      {
        airportNameEn: "Elazig",
        airportNameFa: "فرودگاه الازیغ",
        airportCode: "EZS",
      },
    ],
    cityNameFa: "الازیگ",
    cityNameEn: "Elazig",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  SFQ: {
    airports: [
      {
        airportNameEn: "Guney Anadolu Projesi",
        airportNameFa: "فرودگاه گونی اندلس پروجسی",
        airportCode: "GNY",
      },
    ],
    cityNameFa: "سانلیورفا",
    cityNameEn: "Sanliurfa",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  GZP: {
    airports: [
      {
        airportNameEn: "Gazipasa Airport",
        airportNameFa: "فرودگاه گزیپسا",
        airportCode: "GZP",
      },
    ],
    cityNameFa: "آلانیا",
    cityNameEn: "Alanya",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  GZT: {
    airports: [
      {
        airportNameEn: "Gaziantep",
        airportNameFa: "فرودگاه غازی عینتاب",
        airportCode: "GZT",
      },
    ],
    cityNameFa: "قاضیانتپ",
    cityNameEn: "Gaziantep",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  HTY: {
    airports: [
      {
        airportNameEn: "Hatay",
        airportNameFa: "فرودگاه هاتای",
        airportCode: "HTY",
      },
    ],
    cityNameFa: "هاتای",
    cityNameEn: "Hatay",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  IGD: {
    airports: [
      {
        airportNameEn: "Igdir Airport",
        airportNameFa: "فرودگاه ایغدیر",
        airportCode: "IGD",
      },
    ],
    cityNameFa: "ایغدیر",
    cityNameEn: "Igdir",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  ISE: {
    airports: [
      {
        airportNameEn: "Soleiman Damirel",
        airportNameFa: "فرودگاه سلیمان دمیرل",
        airportCode: "ISE",
      },
    ],
    cityNameFa: "اسپارتا",
    cityNameEn: "Isparta",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  KCM: {
    airports: [
      {
        airportNameEn: "Kahramanmaras",
        airportNameFa: "فرودگاه قهرمان‌مرعش",
        airportCode: "KCM",
      },
    ],
    cityNameFa: "کهرامانماراس",
    cityNameEn: "Kahramanmaras",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  KCO: {
    airports: [
      {
        airportNameEn: "Cengiz Topel",
        airportNameFa: "ایستگاه هوایی سنگیز توپل",
        airportCode: "KCO",
      },
    ],
    cityNameFa: "کوکالی",
    cityNameEn: "Kocaeli",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  KFS: {
    airports: [
      {
        airportNameEn: "Kastamonu",
        airportNameFa: "فرودگاه کاستامونو",
        airportCode: "KFS",
      },
    ],
    cityNameFa: "کاستامونو",
    cityNameEn: "Kastamonu",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  KSY: {
    airports: [
      {
        airportNameEn: "Kars",
        airportNameFa: "فرودگاه قارص",
        airportCode: "KSY",
      },
    ],
    cityNameFa: "کارس",
    cityNameEn: "Kars",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  KYA: {
    airports: [
      {
        airportNameEn: "Konya",
        airportNameFa: "فرودگاه قونیه",
        airportCode: "KYA",
      },
    ],
    cityNameFa: "قونیه",
    cityNameEn: "Konya",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  KZR: {
    airports: [
      {
        airportNameEn: "Zafer Kutahya Airport",
        airportNameFa: "فرودگاه ظفر",
        airportCode: "KZR",
      },
    ],
    cityNameFa: "کوتاهیا",
    cityNameEn: "Kutahya",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  MLX: {
    airports: [
      {
        airportNameEn: "Malatya",
        airportNameFa: "فرودگاه ارهاچ",
        airportCode: "MLX",
      },
    ],
    cityNameFa: "مالاتیا",
    cityNameEn: "Malatya",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  MQM: {
    airports: [
      {
        airportNameEn: "Mardin",
        airportNameFa: "فرودگاه ماردین",
        airportCode: "MQM",
      },
    ],
    cityNameFa: "ماردین",
    cityNameEn: "Mardin",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  MZH: {
    airports: [
      {
        airportNameEn: "Merzifon",
        airportNameFa: "فرودگاه اماسیا مرزیفون",
        airportCode: "MZH",
      },
    ],
    cityNameFa: "مرزیفون",
    cityNameEn: "Merzifon",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  NAV: {
    airports: [
      {
        airportNameEn: "Nevsehir",
        airportNameFa: "فرودگاه نوشهر کاپادوکیه",
        airportCode: "NAV",
      },
    ],
    cityNameFa: "نوشیر",
    cityNameEn: "Nevsehir",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  NOP: {
    airports: [
      {
        airportNameEn: "Sinop",
        airportNameFa: "فرودگاه سینوپ",
        airportCode: "NOP",
      },
    ],
    cityNameFa: "سینوپ",
    cityNameEn: "Sinop",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  OGU: {
    airports: [
      {
        airportNameEn: "Ordu–Giresun Airport",
        airportNameFa: "فرودگاه اردو-گیراسون",
        airportCode: "OGU",
      },
    ],
    cityNameFa: "اردو-گیراسون",
    cityNameEn: "Ordu–Giresun",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  ONQ: {
    airports: [
      {
        airportNameEn: "Zonguldak",
        airportNameFa: "فرودگاه زونگولداغ",
        airportCode: "ONQ",
      },
    ],
    cityNameFa: "زنگولدک",
    cityNameEn: "Zonguldak",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  SXZ: {
    airports: [
      {
        airportNameEn: "Siirt",
        airportNameFa: "فرودگاه سیرت",
        airportCode: "SXZ",
      },
    ],
    cityNameFa: "سیرت",
    cityNameEn: "Siirt",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  SZF: {
    airports: [
      {
        airportNameEn: "Carsamba",
        airportNameFa: "فرودگاه سامسون",
        airportCode: "SZF",
      },
    ],
    cityNameFa: "سامسون",
    cityNameEn: "Samsun",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  TEQ: {
    airports: [
      {
        airportNameEn: "Corlu",
        airportNameFa: "فرودگاه تکیرداغ چورلو",
        airportCode: "TEQ",
      },
    ],
    cityNameFa: "تکیرداغ",
    cityNameEn: "Tekirdag",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  TJK: {
    airports: [
      {
        airportNameEn: "Tokat",
        airportNameFa: "فرودگاه توقات",
        airportCode: "TJK",
      },
    ],
    cityNameFa: "توکت",
    cityNameEn: "Tokat",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  TZX: {
    airports: [
      {
        airportNameEn: "Trabzon",
        airportNameFa: "فرودگاه ترابزون",
        airportCode: "TZX",
      },
    ],
    cityNameFa: "ترابزون",
    cityNameEn: "Trabzon",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  USQ: {
    airports: [
      {
        airportNameEn: "Usak",
        airportNameFa: "فرودگاه اوشاک",
        airportCode: "USQ",
      },
    ],
    cityNameFa: "اوساک",
    cityNameEn: "Usak",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  VAN: {
    airports: [
      {
        airportNameEn: "Ferit Melen Arpt.",
        airportNameFa: "فرودگاه فرید ملن",
        airportCode: "VAN",
      },
    ],
    cityNameFa: "وان",
    cityNameEn: "Van",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  VAS: {
    airports: [
      {
        airportNameEn: "Sivas",
        airportNameFa: "فرودگاه سیواس",
        airportCode: "VAS",
      },
    ],
    cityNameFa: "سیواس",
    cityNameEn: "Sivas",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  YKO: {
    airports: [
      {
        airportNameEn: "Yuksekova",
        airportNameFa: "فرودگاه یوکسک اووا",
        airportCode: "YKO",
      },
    ],
    cityNameFa: "حکاری",
    cityNameEn: "Hakkari",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  QRI: {
    airports: [
      {
        airportNameEn: "Rize Artvin",
        airportNameFa: "فرودگاه رایز",
        airportCode: "RZV",
      },
    ],
    cityNameFa: "رایز",
    cityNameEn: "Rize",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  ADA: {
    airports: [
      {
        airportNameEn: "Adana",
        airportNameFa: "فرودگاه آدانا",
        airportCode: "ADA",
      },
    ],
    cityNameFa: "آدانا",
    cityNameEn: "Adana",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  AOE: {
    airports: [
      {
        airportNameEn: "Anadolu University",
        airportNameFa: "فرودگاه آنادولو",
        airportCode: "AOE",
      },
    ],
    cityNameFa: "اسکیشهیر",
    cityNameEn: "Eskisehir",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  DIY: {
    airports: [
      {
        airportNameEn: "Diyarbakir",
        airportNameFa: "فرودگاه دیاربکر",
        airportCode: "DIY",
      },
    ],
    cityNameFa: "دیاربکیر",
    cityNameEn: "Diyarbakir",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  YEI: {
    airports: [
      {
        airportNameEn: "Yenisehir bursa Intl",
        airportNameFa: "فرودگاه ینی شهیر بورسا",
        airportCode: "YEI",
      },
    ],
    cityNameFa: "بورسا",
    cityNameEn: "Bursa",
    country: {
      countryCode: "TUR",
      countryNameEn: "Turkey",
      countryNameFa: "ترکیه",
    },
  },
  SHA: {
    airports: [
      {
        airportNameEn: "Pudong",
        airportNameFa: "فرودگاه پودونگ",
        airportCode: "PVG",
      },
      {
        airportNameEn: "Hongqiao",
        airportNameFa: "فرودگاه بین‌المللی شانگهای هنگقیو",
        airportCode: "SHA",
      },
    ],
    cityNameFa: "شانگهای",
    cityNameEn: "Shanghai",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  SZX: {
    airports: [
      {
        airportNameEn: "Shenzhen",
        airportNameFa: "فرودگاه بین‌المللی شنزن بن",
        airportCode: "SZX",
      },
    ],
    cityNameFa: "شنزن",
    cityNameEn: "Shenzhen",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  ACX: {
    airports: [
      {
        airportNameEn: "Xingyi",
        airportNameFa: "فرودگاه ژینگی",
        airportCode: "ACX",
      },
    ],
    cityNameFa: "زینگوی",
    cityNameEn: "Xingyi",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  DYG: {
    airports: [
      {
        airportNameEn: "Zhangjiajie Hehua Intl",
        airportNameFa: "فرودگاه بین المللی ژانگجیاجیه",
        airportCode: "DYG",
      },
    ],
    cityNameFa: "ژانگجیاجیه",
    cityNameEn: "Zhangjiajie",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LJG: {
    airports: [
      {
        airportNameEn: "Lijiang",
        airportNameFa: "فرودگاه لیجیانگ سانی",
        airportCode: "LJG",
      },
    ],
    cityNameFa: "لیجینگ سیتی",
    cityNameEn: "Lijiang City",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  BJS: {
    airports: [
      {
        airportNameEn: "Nanyuan Arpt.",
        airportNameFa: "فرودگاه پکن نانیوان",
        airportCode: "NAY",
      },
      {
        airportNameEn: "Beijing Capital Int.",
        airportNameFa: "فرودگاه بیجینگ",
        airportCode: "PEK",
      },
      {
        airportNameEn: "Daxing Intl",
        airportNameFa: "داکسین اینترنشنال",
        airportCode: "PKX",
      },
    ],
    cityNameFa: "پکن",
    cityNameEn: "Beijing",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  CTU: {
    airports: [
      {
        airportNameEn: "TIANFU INTERNATIONAL",
        airportNameFa: "فرودگاه بین المللی تیانگ فو",
        airportCode: "TFU",
      },
      {
        airportNameEn: "Shuangliu",
        airportNameFa: "فرودگاه بین‌المللی چنگدو شوانگلیو",
        airportCode: "CTU",
      },
    ],
    cityNameFa: "چنگدو",
    cityNameEn: "Chengdu",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  CAN: {
    airports: [
      {
        airportNameEn: "New Baiyun",
        airportNameFa: "فرودگاه نیو بایون گوانگجو",
        airportCode: "CAN",
      },
    ],
    cityNameFa: "گوانگ ‌ژو",
    cityNameEn: "Guangzhou",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  AKA: {
    airports: [
      {
        airportNameEn: "Ankang",
        airportNameFa: "فرودگاه انکانگ ولیپو",
        airportCode: "AKA",
      },
    ],
    cityNameFa: "انکانگ",
    cityNameEn: "Ankang",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  AKU: {
    airports: [
      {
        airportNameEn: "Aksu",
        airportNameFa: "فرودگاه اکسو",
        airportCode: "AKU",
      },
    ],
    cityNameFa: "اکسو",
    cityNameEn: "Aksu",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  AOG: {
    airports: [
      {
        airportNameEn: "Anshan",
        airportNameFa: "فرودگاه آنشان تنگاو",
        airportCode: "AOG",
      },
    ],
    cityNameFa: "انشان",
    cityNameEn: "Anshan",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  AVA: {
    airports: [
      {
        airportNameEn: "An Shun/Huang Guo Shu",
        airportNameFa: "فرودگاه انشون وانگوشو",
        airportCode: "AVA",
      },
    ],
    cityNameFa: "ان شون",
    cityNameEn: "An Shun",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  AYN: {
    airports: [
      {
        airportNameEn: "Anyang",
        airportNameFa: "فرودگاه انیانگ",
        airportCode: "AYN",
      },
    ],
    cityNameFa: "انیانگ",
    cityNameEn: "Anyang",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  BAV: {
    airports: [
      {
        airportNameEn: "Baotou",
        airportNameFa: "فرودگاه بائوتو ارلیبان",
        airportCode: "BAV",
      },
    ],
    cityNameFa: "بائوتو",
    cityNameEn: "Baotou",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  BFU: {
    airports: [
      {
        airportNameEn: "Bengbu",
        airportNameFa: "فرودگاه بنگبو",
        airportCode: "BFU",
      },
    ],
    cityNameFa: "بنگبو",
    cityNameEn: "Bengbu",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  BHY: {
    airports: [
      {
        airportNameEn: "Beihai",
        airportNameFa: "فرودگاه بیهای فوچنگ",
        airportCode: "BHY",
      },
    ],
    cityNameFa: "بیهای",
    cityNameEn: "Beihai",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  BPX: {
    airports: [
      {
        airportNameEn: "Bangda",
        airportNameFa: "فرودگاه کامدو بامدا",
        airportCode: "BPX",
      },
    ],
    cityNameFa: "بنگدا",
    cityNameEn: "Bangda",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  BSD: {
    airports: [
      {
        airportNameEn: "Baoshan",
        airportNameFa: "فرودگاه باوشان",
        airportCode: "BSD",
      },
    ],
    cityNameFa: "بائوشان",
    cityNameEn: "Baoshan",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  CGD: {
    airports: [
      {
        airportNameEn: "Changde",
        airportNameFa: "فرودگاه چانگده",
        airportCode: "CGD",
      },
    ],
    cityNameFa: "چنگده",
    cityNameEn: "Changde",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  CGO: {
    airports: [
      {
        airportNameEn: "Zhengzhou",
        airportNameFa: "فرودگاه بین‌المللی ژنگژو سین‌ژنگ",
        airportCode: "CGO",
      },
    ],
    cityNameFa: "ژنگژو",
    cityNameEn: "Zhengzhou",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  CHG: {
    airports: [
      {
        airportNameEn: "Chaoyang Arpt.",
        airportNameFa: "فرودگاه چاویانگ",
        airportCode: "CHG",
      },
    ],
    cityNameFa: "چایانگ",
    cityNameEn: "Chaoyang",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  CIF: {
    airports: [
      {
        airportNameEn: "Chifeng",
        airportNameFa: "فرودگاه چایفنگ ایولونگ",
        airportCode: "CIF",
      },
    ],
    cityNameFa: "چیفنگ",
    cityNameEn: "Chifeng",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  CIH: {
    airports: [
      {
        airportNameEn: "Changzhi",
        airportNameFa: "فرودگاه شانشی",
        airportCode: "CIH",
      },
    ],
    cityNameFa: "چنگژی",
    cityNameEn: "Changzhi",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  CKG: {
    airports: [
      {
        airportNameEn: "Chongqing Jiangbei Intl.",
        airportNameFa: "فرودگاه بین‌المللی چنگچینگ ییانگبی",
        airportCode: "CKG",
      },
    ],
    cityNameFa: "چونگ کینگ",
    cityNameEn: "Chongqing",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  CNI: {
    airports: [
      {
        airportNameEn: "Changhai",
        airportNameFa: "فرودگاه چانگها",
        airportCode: "CNI",
      },
    ],
    cityNameFa: "چنگهای",
    cityNameEn: "Changhai",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  CSX: {
    airports: [
      {
        airportNameEn: "Changsha",
        airportNameFa: "فرودگاه بین‌المللی چانگشا هوانگهوا",
        airportCode: "CSX",
      },
    ],
    cityNameFa: "چنگشا",
    cityNameEn: "Changsha",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  CZX: {
    airports: [
      {
        airportNameEn: "Changzhou",
        airportNameFa: "فرودگاه چانگجو بنیو",
        airportCode: "CZX",
      },
    ],
    cityNameFa: "چنگژو",
    cityNameEn: "Changzhou",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  DAT: {
    airports: [
      {
        airportNameEn: "Beijiazao",
        airportNameFa: "فرودگاه بیجیزو",
        airportCode: "DAT",
      },
    ],
    cityNameFa: "داتونگ",
    cityNameEn: "Datong",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  DAX: {
    airports: [
      {
        airportNameEn: "Daxian",
        airportNameFa: "فرودگاه داژو هشی",
        airportCode: "DAX",
      },
    ],
    cityNameFa: "دازیان",
    cityNameEn: "Daxian",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  DDG: {
    airports: [
      {
        airportNameEn: "Dandong",
        airportNameFa: "فرودگاه داندونگ لنگتو",
        airportCode: "DDG",
      },
    ],
    cityNameFa: "دندونگ",
    cityNameEn: "Dandong",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  DIG: {
    airports: [
      {
        airportNameEn: "Diqing",
        airportNameFa: "فرودگاه دکن شنگریلا",
        airportCode: "DIG",
      },
    ],
    cityNameFa: "دیقینگ",
    cityNameEn: "Diqing",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  DLC: {
    airports: [
      {
        airportNameEn: "Dalian",
        airportNameFa: "فرودگاه بین‌المللی دالیان ژووشویزی",
        airportCode: "DLC",
      },
    ],
    cityNameFa: "دالیان",
    cityNameEn: "Dalian",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  DNH: {
    airports: [
      {
        airportNameEn: "Dunhuang",
        airportNameFa: "فرودگاه دونهوانگ",
        airportCode: "DNH",
      },
    ],
    cityNameFa: "دونهوانگ",
    cityNameEn: "Dunhuang",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  DOY: {
    airports: [
      {
        airportNameEn: "Dongying",
        airportNameFa: "فرودگاه دونگینگ",
        airportCode: "DOY",
      },
    ],
    cityNameFa: "دونگینگ",
    cityNameEn: "Dongying",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  DQA: {
    airports: [
      {
        airportNameEn: "Daqing Saertu",
        airportNameFa: "فرودگاه دقینگ سیرتو",
        airportCode: "DQA",
      },
    ],
    cityNameFa: "داقینگ",
    cityNameEn: "Daqing",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  DZU: {
    airports: [
      {
        airportNameEn: "Dazu",
        airportNameFa: "فرودگاه دازو",
        airportCode: "DZU",
      },
    ],
    cityNameFa: "دذو",
    cityNameEn: "Dazu",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  ENH: {
    airports: [
      {
        airportNameEn: "Enshi",
        airportNameFa: "فرودگاه انشی ژوجیپینگ",
        airportCode: "ENH",
      },
    ],
    cityNameFa: "انشائئ",
    cityNameEn: "Enshi",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  ENY: {
    airports: [
      {
        airportNameEn: "Ershilipu",
        airportNameFa: "فرودگاه ارشیلیپو",
        airportCode: "ENY",
      },
    ],
    cityNameFa: "یان ان",
    cityNameEn: "Yan''An",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  FOC: {
    airports: [
      {
        airportNameEn: "Fuzhou",
        airportNameFa: "فرودگاه بین‌المللی فوژو چنگل",
        airportCode: "FOC",
      },
    ],
    cityNameFa: "فوژو",
    cityNameEn: "Fuzhou",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  FUG: {
    airports: [
      {
        airportNameEn: "Fuyang",
        airportNameFa: "فرودگاه فویانگ ژیگان",
        airportCode: "FUG",
      },
    ],
    cityNameFa: "فویانگ",
    cityNameEn: "Fuyang",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  FUO: {
    airports: [
      {
        airportNameEn: "Shadi",
        airportNameFa: "فرودگاه شادی",
        airportCode: "FUO",
      },
    ],
    cityNameFa: "فوژان",
    cityNameEn: "Foshan",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  GOQ: {
    airports: [
      {
        airportNameEn: "Golmud",
        airportNameFa: "فرودگاه گولمود",
        airportCode: "GOQ",
      },
    ],
    cityNameFa: "گولمود",
    cityNameEn: "Golmud",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  GXH: {
    airports: [
      {
        airportNameEn: "Gannan Xiahe",
        airportNameFa: "فرودگاه شیاهه",
        airportCode: "GXH",
      },
    ],
    cityNameFa: "شیاحه",
    cityNameEn: "Xiahe",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  GYS: {
    airports: [
      {
        airportNameEn: "Guang Yuan",
        airportNameFa: "فرودگاه گوانگیوان",
        airportCode: "GYS",
      },
    ],
    cityNameFa: "گوانگ یوان",
    cityNameEn: "Guang Yuan",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HDG: {
    airports: [
      {
        airportNameEn: "Handan",
        airportNameFa: "فرودگاه هاندان",
        airportCode: "HDG",
      },
    ],
    cityNameFa: "هندان",
    cityNameEn: "Handan",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HEK: {
    airports: [
      {
        airportNameEn: "Heihe",
        airportNameFa: "فرودگاه هیه",
        airportCode: "HEK",
      },
    ],
    cityNameFa: "هیه",
    cityNameEn: "Heihe",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HET: {
    airports: [
      {
        airportNameEn: "Hohhot",
        airportNameFa: "فرودگاه بین‌المللی هوهوت بایتا",
        airportCode: "HET",
      },
    ],
    cityNameFa: "هههت",
    cityNameEn: "Hohhot",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HFE: {
    airports: [
      {
        airportNameEn: "Hefei",
        airportNameFa: "فرودگاه بین‌المللی هفی لوگانگ",
        airportCode: "HFE",
      },
    ],
    cityNameFa: "لوگانگ",
    cityNameEn: "Luogang",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HGH: {
    airports: [
      {
        airportNameEn: "Hangzhou",
        airportNameFa: "فرودگاه بین‌المللی هانگجو ژیاشان",
        airportCode: "HGH",
      },
    ],
    cityNameFa: "هانگزو",
    cityNameEn: "Hangzhou",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HLD: {
    airports: [
      {
        airportNameEn: "Hailar",
        airportNameFa: "فرودگاه هایلار دنگشان",
        airportCode: "HLD",
      },
    ],
    cityNameFa: "هایلار",
    cityNameEn: "Hailar",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HLH: {
    airports: [
      {
        airportNameEn: "Ulanhot",
        airportNameFa: "فرودگاه اولنهت",
        airportCode: "HLH",
      },
    ],
    cityNameFa: "اولانهات",
    cityNameEn: "Ulanhot",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HMI: {
    airports: [
      {
        airportNameEn: "Hami",
        airportNameFa: "فرودگاه هامی",
        airportCode: "HMI",
      },
    ],
    cityNameFa: "هامی",
    cityNameEn: "Hami",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HNY: {
    airports: [
      {
        airportNameEn: "Hengyang",
        airportNameFa: "فرودگاه هنگیواگ باجیالینگ",
        airportCode: "HNY",
      },
    ],
    cityNameFa: "هنگیانگ",
    cityNameEn: "Hengyang",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HRB: {
    airports: [
      {
        airportNameEn: "Harbin",
        airportNameFa: "فرودگاه بین‌المللی هاربین تایپینگ",
        airportCode: "HRB",
      },
    ],
    cityNameFa: "هاربین",
    cityNameEn: "Harbin",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HSC: {
    airports: [
      {
        airportNameEn: "Shaoguan",
        airportNameFa: "فرودگاه شگوان گویتو",
        airportCode: "HSC",
      },
    ],
    cityNameFa: "شائوگوان",
    cityNameEn: "Shaoguan",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HSN: {
    airports: [
      {
        airportNameEn: "Zhoushan",
        airportNameFa: "فرودگاه زوشن پوتوشن",
        airportCode: "HSN",
      },
    ],
    cityNameFa: "ژوشان",
    cityNameEn: "Zhoushan",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HTN: {
    airports: [
      {
        airportNameEn: "Hotan",
        airportNameFa: "فرودگاه ختن",
        airportCode: "HTN",
      },
    ],
    cityNameFa: "هوتان",
    cityNameEn: "Hotan",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HUZ: {
    airports: [
      {
        airportNameEn: "Huizhou",
        airportNameFa: "فرودگاه ویجو",
        airportCode: "HUZ",
      },
    ],
    cityNameFa: "هویژو",
    cityNameEn: "Huizhou",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HZG: {
    airports: [
      {
        airportNameEn: "Hanzhong",
        airportNameFa: "فرودگاه هانژونگ کسیگوان",
        airportCode: "HZG",
      },
    ],
    cityNameFa: "هنژنگ",
    cityNameEn: "Hanzhong",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HZH: {
    airports: [
      {
        airportNameEn: "Liping",
        airportNameFa: "فرودگاه لیپینگ",
        airportCode: "HZH",
      },
    ],
    cityNameFa: "لیپینگ سیتی",
    cityNameEn: "Liping City",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  INC: {
    airports: [
      {
        airportNameEn: "Yinchuan",
        airportNameFa: "فرودگاه یینچوان هیدونگ",
        airportCode: "INC",
      },
    ],
    cityNameFa: "یینچوان",
    cityNameEn: "Yinchuan",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  IQM: {
    airports: [
      {
        airportNameEn: "Qiemo",
        airportNameFa: "فرودگاه کیه‌مو",
        airportCode: "IQM",
      },
    ],
    cityNameFa: "قیمو",
    cityNameEn: "Qiemo",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  IQN: {
    airports: [
      {
        airportNameEn: "Qingyang",
        airportNameFa: "فرودگاه کینگیانگ",
        airportCode: "IQN",
      },
    ],
    cityNameFa: "کینگیانگ",
    cityNameEn: "Qingyang",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  JDZ: {
    airports: [
      {
        airportNameEn: "Jingdezhen",
        airportNameFa: "فرودگاه جینگدژن لوییا",
        airportCode: "JDZ",
      },
    ],
    cityNameFa: "جینگدژن",
    cityNameEn: "Jingdezhen",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  JGN: {
    airports: [
      {
        airportNameEn: "Jiayuguan",
        airportNameFa: "فرودگاه جیایوگوان",
        airportCode: "JGN",
      },
    ],
    cityNameFa: "جیاوگوان",
    cityNameEn: "Jiayuguan",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  JHG: {
    airports: [
      {
        airportNameEn: "Gasa",
        airportNameFa: "فرودگاه شیشوانگبانا گاسا",
        airportCode: "JHG",
      },
    ],
    cityNameFa: "جینقنگ",
    cityNameEn: "Jinghong",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  JIL: {
    airports: [
      {
        airportNameEn: "Jilin",
        airportNameFa: "فرودگاه جیلین ارتایزی",
        airportCode: "JIL",
      },
    ],
    cityNameFa: "جیلین",
    cityNameEn: "Jilin",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  JIU: {
    airports: [
      {
        airportNameEn: "Jiujiang",
        airportNameFa: "فرودگاه ییوییانگ لوشان",
        airportCode: "JIU",
      },
    ],
    cityNameFa: "لوشن",
    cityNameEn: "Lushan",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  JJN: {
    airports: [
      {
        airportNameEn: "Jinjiang",
        airportNameFa: "فرودگاه کوانژو جینجیانگ",
        airportCode: "JJN",
      },
    ],
    cityNameFa: "جینجینگ",
    cityNameEn: "Jinjiang",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  JNG: {
    airports: [
      {
        airportNameEn: "Jining",
        airportNameFa: "فرودگاه جینینگ کوفو",
        airportCode: "JNG",
      },
    ],
    cityNameFa: "جینینگ",
    cityNameEn: "Jining",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  JNZ: {
    airports: [
      {
        airportNameEn: "Jinzhou",
        airportNameFa: "فرودگاه جینجو کسیالینگزی",
        airportCode: "JNZ",
      },
    ],
    cityNameFa: "جینژو",
    cityNameEn: "Jinzhou",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  JZH: {
    airports: [
      {
        airportNameEn: "Jiu Zhai Huang Long",
        airportNameFa: "فرودگاه ییوژای هوانگلنگ",
        airportCode: "JZH",
      },
    ],
    cityNameFa: "سانگ پن",
    cityNameEn: "Song Pan",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  KCA: {
    airports: [
      {
        airportNameEn: "Kuqa",
        airportNameFa: "فرودگاه کوکا کیوسی",
        airportCode: "KCA",
      },
    ],
    cityNameFa: "کوقا",
    cityNameEn: "Kuqa",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  KHG: {
    airports: [
      {
        airportNameEn: "Kashi",
        airportNameFa: "فرودگاه کاشغر (کاشی) ",
        airportCode: "KHG",
      },
    ],
    cityNameFa: "کاشغر",
    cityNameEn: "Kashgar",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  KHN: {
    airports: [
      {
        airportNameEn: "Nanchang",
        airportNameFa: "فرودگاه بین‌المللی نانچانگ چانگبی",
        airportCode: "KHN",
      },
    ],
    cityNameFa: "نانچنگ",
    cityNameEn: "Nanchang",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  KMG: {
    airports: [
      {
        airportNameEn: "Kunming",
        airportNameFa: "فرودگاه بین‌المللی کونمینگ چانگشوی",
        airportCode: "KMG",
      },
    ],
    cityNameFa: "کونمینگ",
    cityNameEn: "Kunming",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  KOW: {
    airports: [
      {
        airportNameEn: "Ganzhou",
        airportNameFa: "فرودگاه گانژو هوانگژین",
        airportCode: "KOW",
      },
    ],
    cityNameFa: "گانژو",
    cityNameEn: "Ganzhou",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  KRL: {
    airports: [
      {
        airportNameEn: "Korla",
        airportNameFa: "فرودگاه کورلا",
        airportCode: "KRL",
      },
    ],
    cityNameFa: "کرلا",
    cityNameEn: "Korla",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  KRY: {
    airports: [
      {
        airportNameEn: "Karamay",
        airportNameFa: "فرودگاه کارامی",
        airportCode: "KRY",
      },
    ],
    cityNameFa: "کارامای",
    cityNameEn: "Karamay",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  KWL: {
    airports: [
      {
        airportNameEn: "Guilin",
        airportNameFa: "فرودگاه بین‌المللی گایلین لیانگ‌جیانگ",
        airportCode: "KWL",
      },
    ],
    cityNameFa: "گویلین",
    cityNameEn: "Guilin",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LCX: {
    airports: [
      {
        airportNameEn: "Liancheng",
        airportNameFa: "فرودگاه لونجیان گوانژیشان",
        airportCode: "LCX",
      },
    ],
    cityNameFa: "لنگین",
    cityNameEn: "Longyan",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LHK: {
    airports: [
      {
        airportNameEn: "Guanghua",
        airportNameFa: "فرودگاه گوانگهوا",
        airportCode: "LHK",
      },
    ],
    cityNameFa: "گوانقوا",
    cityNameEn: "Guanghua",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LHW: {
    airports: [
      {
        airportNameEn: "Lanzhou Arpt.",
        airportNameFa: "فرودگاه لانژو",
        airportCode: "LHW",
      },
    ],
    cityNameFa: "لانژو",
    cityNameEn: "Lanzhou",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LLF: {
    airports: [
      {
        airportNameEn: "Lingling",
        airportNameFa: "فرودگاه یونگ‌ژوی لینگ‌لینگ",
        airportCode: "LLF",
      },
    ],
    cityNameFa: "لینگلینگ",
    cityNameEn: "Lingling",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LNJ: {
    airports: [
      {
        airportNameEn: "Lincang",
        airportNameFa: "فرودگاه لینکانگ",
        airportCode: "LNJ",
      },
    ],
    cityNameFa: "لینکنگ",
    cityNameEn: "Lincang",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LUM: {
    airports: [
      {
        airportNameEn: "Mangshi",
        airportNameFa: "فرودگاه دیهونگ مانگشی",
        airportCode: "LUM",
      },
    ],
    cityNameFa: "لوخی",
    cityNameEn: "Luxi",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LXA: {
    airports: [
      {
        airportNameEn: "Gonggar/Lhasa",
        airportNameFa: "فرودگاه لاسا گونگار",
        airportCode: "LXA",
      },
    ],
    cityNameFa: "لهاسا",
    cityNameEn: "Lhasa",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LYA: {
    airports: [
      {
        airportNameEn: "Luoyang",
        airportNameFa: "فرودگاه لویانگ بیجیائو",
        airportCode: "LYA",
      },
    ],
    cityNameFa: "لویانگ",
    cityNameEn: "Luoyang",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LYI: {
    airports: [
      {
        airportNameEn: "Linyi",
        airportNameFa: "فرودگاه لینی شابولینگ",
        airportCode: "LYI",
      },
    ],
    cityNameFa: "لینی",
    cityNameEn: "Linyi",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LZH: {
    airports: [
      {
        airportNameEn: "Liuzhou",
        airportNameFa: "فرودگاه لیوژو بایلیان",
        airportCode: "LZH",
      },
    ],
    cityNameFa: "لیوژو",
    cityNameEn: "Liuzhou",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LZO: {
    airports: [
      {
        airportNameEn: "Luzhou",
        airportNameFa: "فرودگاه لوژو لانتیان",
        airportCode: "LZO",
      },
    ],
    cityNameFa: "لوژو",
    cityNameEn: "Luzhou",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  MDG: {
    airports: [
      {
        airportNameEn: "Mudanjiang",
        airportNameFa: "فرودگاه مودانجیانگ هایلانگ",
        airportCode: "MDG",
      },
    ],
    cityNameFa: "مودانجیانگ",
    cityNameEn: "Mudanjiang",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  MIG: {
    airports: [
      {
        airportNameEn: "Mian Yang",
        airportNameFa: "فرودگاه میانیانگ نانجیائو",
        airportCode: "MIG",
      },
    ],
    cityNameFa: "میانیانگ",
    cityNameEn: "Mian Yang",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  MXZ: {
    airports: [
      {
        airportNameEn: "Meixian",
        airportNameFa: "فرودگاه میکسیان",
        airportCode: "MXZ",
      },
    ],
    cityNameFa: "میکسین",
    cityNameEn: "Meixian",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  NAO: {
    airports: [
      {
        airportNameEn: "Nanchong",
        airportNameFa: "فرودگاه نانچونگ",
        airportCode: "NAO",
      },
    ],
    cityNameFa: "نانچونگ",
    cityNameEn: "Nanchong",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  NBS: {
    airports: [
      {
        airportNameEn: "Changbaishan",
        airportNameFa: "فرودگاه چنگبیشن",
        airportCode: "NBS",
      },
    ],
    cityNameFa: "بایشان",
    cityNameEn: "Baishan",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  NDG: {
    airports: [
      {
        airportNameEn: "Qiqihar",
        airportNameFa: "فرودگاه قیقیهر",
        airportCode: "NDG",
      },
    ],
    cityNameFa: "کیکیهار",
    cityNameEn: "Qiqihar",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  NGB: {
    airports: [
      {
        airportNameEn: "Lishe Intl. Arpt.",
        airportNameFa: "فرودگاه بین‌المللی نینگبو لیشه",
        airportCode: "NGB",
      },
    ],
    cityNameFa: "نینگبو",
    cityNameEn: "Ningbo",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  NKG: {
    airports: [
      {
        airportNameEn: "Lukou Intl. Arpt.",
        airportNameFa: "فرودگاه بین‌المللی نانجینگ لوکو",
        airportCode: "NKG",
      },
    ],
    cityNameFa: "نانکینگ/نانجینگ",
    cityNameEn: "Nanking/Nanjing",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  NNG: {
    airports: [
      {
        airportNameEn: "Nanning",
        airportNameFa: "فرودگاه بین‌المللی نانینگ ووژو",
        airportCode: "NNG",
      },
    ],
    cityNameFa: "نننینگ",
    cityNameEn: "Nanning",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  NNY: {
    airports: [
      {
        airportNameEn: "Nanyang",
        airportNameFa: "فرودگاه نانیانگ جیانگ‌یینگ",
        airportCode: "NNY",
      },
    ],
    cityNameFa: "نانیانگ",
    cityNameEn: "Nanyang",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  NTG: {
    airports: [
      {
        airportNameEn: "Nantong",
        airportNameFa: "فرودگاه نانتونگ",
        airportCode: "NTG",
      },
    ],
    cityNameFa: "نانتونگ",
    cityNameEn: "Nantong",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  RUG: {
    airports: [
      {
        airportNameEn: "Rugao",
        airportNameFa: "پایگاه هوایی روگو",
        airportCode: "RUG",
      },
    ],
    cityNameFa: "روگائو",
    cityNameEn: "Rugao",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  SHP: {
    airports: [
      {
        airportNameEn: "Qinhuangdao",
        airportNameFa: "فرودگاه کینهوانگدو شانهایگوان",
        airportCode: "SHP",
      },
    ],
    cityNameFa: "کینهوانگداو",
    cityNameEn: "Qinhuangdao",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  SHS: {
    airports: [
      {
        airportNameEn: "Shashi",
        airportNameFa: "فرودگاه شاسی",
        airportCode: "SHS",
      },
    ],
    cityNameFa: "شاشی",
    cityNameEn: "Shashi",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  SJW: {
    airports: [
      {
        airportNameEn: "Daguocun",
        airportNameFa: "فرودگاه بین‌المللی شیاژونگ ژنگدینگ",
        airportCode: "SJW",
      },
    ],
    cityNameFa: "شیجیاژوانگ",
    cityNameEn: "Shijiazhuang",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  SWA: {
    airports: [
      {
        airportNameEn: "Shantou",
        airportNameFa: "فرودگاه جییانگوشان",
        airportCode: "SWA",
      },
    ],
    cityNameFa: "شانتو",
    cityNameEn: "Shantou",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  SXJ: {
    airports: [
      {
        airportNameEn: "Shanshan",
        airportNameFa: "فرودگاه شانشان",
        airportCode: "SXJ",
      },
    ],
    cityNameFa: "شانشان",
    cityNameEn: "Shanshan",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  SYM: {
    airports: [
      {
        airportNameEn: "Simao",
        airportNameFa: "فرودگاه سیمائو",
        airportCode: "SYM",
      },
    ],
    cityNameFa: "سیماو",
    cityNameEn: "Simao",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  SYX: {
    airports: [
      {
        airportNameEn: "Fenghuang Intl.",
        airportNameFa: "فرودگاه بین‌المللی سانیا فونیکس",
        airportCode: "SYX",
      },
    ],
    cityNameFa: "هاینان- سانیا",
    cityNameEn: "Hainan-Sanya",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  SZV: {
    airports: [
      {
        airportNameEn: "Suzhou",
        airportNameFa: "فرودگاه سوژو جیانگسو،",
        airportCode: "SZV",
      },
    ],
    cityNameFa: "سوژو",
    cityNameEn: "Suzhou",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  TAO: {
    airports: [
      {
        airportNameEn: "Qingdao",
        airportNameFa: "فرودگاه بین‌المللی کینگدائو لیوتینگ",
        airportCode: "TAO",
      },
    ],
    cityNameFa: "قینگدائو",
    cityNameEn: "Qingdao",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  TCG: {
    airports: [
      {
        airportNameEn: "Tacheng",
        airportNameFa: "فرودگاه تچنگ",
        airportCode: "TCG",
      },
    ],
    cityNameFa: "تاچنگ",
    cityNameEn: "Tacheng",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  TEN: {
    airports: [
      {
        airportNameEn: "Tongren",
        airportNameFa: "فرودگاه تونگرن فنگ‌هوانگ",
        airportCode: "TEN",
      },
    ],
    cityNameFa: "تونگرن",
    cityNameEn: "Tongren",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  TGO: {
    airports: [
      {
        airportNameEn: "Tongliao",
        airportNameFa: "فرودگاه تنگلیو",
        airportCode: "TGO",
      },
    ],
    cityNameFa: "تونگلیائو",
    cityNameEn: "Tongliao",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  TNA: {
    airports: [
      {
        airportNameEn: "Jinan",
        airportNameFa: "فرودگاه بین‌المللی جینان یاکیانگ",
        airportCode: "TNA",
      },
    ],
    cityNameFa: "جینان",
    cityNameEn: "Jinan",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  TNH: {
    airports: [
      {
        airportNameEn: "Tonghua Liuhe",
        airportNameFa: "فرودگاه تونگهوا سن‌یوانپو",
        airportCode: "TNH",
      },
    ],
    cityNameFa: "تونقوا",
    cityNameEn: "Tonghua",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  TSN: {
    airports: [
      {
        airportNameEn: "Tianjin Binhai Intl.",
        airportNameFa: "فرودگاه بین‌المللی تیانجین بینهای",
        airportCode: "TSN",
      },
    ],
    cityNameFa: "تیان جین",
    cityNameEn: "Tianjin",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  TVS: {
    airports: [
      {
        airportNameEn: "Sannuhe",
        airportNameFa: "فرودگاه سنوه",
        airportCode: "TVS",
      },
    ],
    cityNameFa: "تانگشان",
    cityNameEn: "Tangshan",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  TXN: {
    airports: [
      {
        airportNameEn: "Tunxi",
        airportNameFa: "فرودگاه تونخی",
        airportCode: "TXN",
      },
    ],
    cityNameFa: "تونکسی",
    cityNameEn: "Tunxi",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  TYN: {
    airports: [
      {
        airportNameEn: "Taiyuan",
        airportNameFa: "فرودگاه بین‌المللی ووسو تائی‌یوان",
        airportCode: "TYN",
      },
    ],
    cityNameFa: "تایونان",
    cityNameEn: "Taiyuan",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  URC: {
    airports: [
      {
        airportNameEn: "Urumqi",
        airportNameFa: "فرودگاه بین‌المللی اورومچی دیووپو",
        airportCode: "URC",
      },
    ],
    cityNameFa: "ارومچی",
    cityNameEn: "Urumqi",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  UYN: {
    airports: [
      {
        airportNameEn: "Yulin",
        airportNameFa: "فرودگاه یولین",
        airportCode: "UYN",
      },
    ],
    cityNameFa: "یولین",
    cityNameEn: "Yulin",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  WEF: {
    airports: [
      {
        airportNameEn: "Weifang",
        airportNameFa: "فرودگاه ویفنگ",
        airportCode: "WEF",
      },
    ],
    cityNameFa: "ویفنگ",
    cityNameEn: "Weifang",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  WEH: {
    airports: [
      {
        airportNameEn: "Weihai",
        airportNameFa: "فرودگاه ویهای داشویبو",
        airportCode: "WEH",
      },
    ],
    cityNameFa: "ویهای",
    cityNameEn: "Weihai",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  WHU: {
    airports: [
      {
        airportNameEn: "Wuhu",
        airportNameFa: "فرودگاه ووهو",
        airportCode: "WHU",
      },
    ],
    cityNameFa: "ووهو",
    cityNameEn: "Wuhu",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  WUH: {
    airports: [
      {
        airportNameEn: "Tianhe Intl.",
        airportNameFa: "فرودگاه بین‌المللی ووهان تیانهه",
        airportCode: "WUH",
      },
    ],
    cityNameFa: "ووهان",
    cityNameEn: "Wuhan",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  WUS: {
    airports: [
      {
        airportNameEn: "Wuyishan",
        airportNameFa: "فرودگاه وییشن",
        airportCode: "WUS",
      },
    ],
    cityNameFa: "ووییشان",
    cityNameEn: "Wuyishan",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  SIA: {
    airports: [
      {
        airportNameEn: "Xianyang Intl",
        airportNameFa: "فرودگاه بین المللی شیان یانگ",
        airportCode: "XIY",
      },
    ],
    cityNameFa: "شی آن",
    cityNameEn: "Xian",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  WUX: {
    airports: [
      {
        airportNameEn: "Wuxi",
        airportNameFa: "فرودگاه بین‌المللی سانن شوفانگ",
        airportCode: "WUX",
      },
    ],
    cityNameFa: "ووزی",
    cityNameEn: "Wuxi",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  WUZ: {
    airports: [
      {
        airportNameEn: "Changzhoudao",
        airportNameFa: "فرودگاه ووژو چانگشودائو",
        airportCode: "WUZ",
      },
    ],
    cityNameFa: "ووژو",
    cityNameEn: "Wuzhou",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  WXN: {
    airports: [
      {
        airportNameEn: "Wanxian",
        airportNameFa: "فرودگاه وانچو ووچیاو",
        airportCode: "WXN",
      },
    ],
    cityNameFa: "وانزیان",
    cityNameEn: "Wanxian",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  XEN: {
    airports: [
      {
        airportNameEn: "Xingcheng",
        airportNameFa: "فرودگاه ژینگچنگ",
        airportCode: "XEN",
      },
    ],
    cityNameFa: "زینگچنگ",
    cityNameEn: "Xingcheng",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  XIC: {
    airports: [
      {
        airportNameEn: "Xichang",
        airportNameFa: "فرودگاه شیچانگ قینگشان",
        airportCode: "XIC",
      },
    ],
    cityNameFa: "زیچانگ",
    cityNameEn: "Xichang",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  XIL: {
    airports: [
      {
        airportNameEn: "Xilinhot",
        airportNameFa: "فرودگاه ژیلینهات",
        airportCode: "XIL",
      },
    ],
    cityNameFa: "زیلینهوت",
    cityNameEn: "Xilinhot",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  XIN: {
    airports: [
      {
        airportNameEn: "Xingning",
        airportNameFa: "فرودگاه ژینگنینگ",
        airportCode: "XIN",
      },
    ],
    cityNameFa: "زینگ نینگ",
    cityNameEn: "Xingning",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  XMN: {
    airports: [
      {
        airportNameEn: "Xiamen",
        airportNameFa: "فرودگاه بین‌المللی زیامن گائوچی",
        airportCode: "XMN",
      },
    ],
    cityNameFa: "زیامن",
    cityNameEn: "Xiamen",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  XNT: {
    airports: [
      {
        airportNameEn: "Xingtai",
        airportNameFa: "فرودگاه شینگتای دلیان",
        airportCode: "XNT",
      },
    ],
    cityNameFa: "زینگ تای",
    cityNameEn: "Xingtai",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  XNN: {
    airports: [
      {
        airportNameEn: "Xining",
        airportNameFa: "فرودگاه سینینگ کائوجیابو",
        airportCode: "XNN",
      },
    ],
    cityNameFa: "خینینگ",
    cityNameEn: "Xining",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  XUZ: {
    airports: [
      {
        airportNameEn: "Xuzhou",
        airportNameFa: "فرودگاه سوژو گئوانئین",
        airportCode: "XUZ",
      },
    ],
    cityNameFa: "زوژو",
    cityNameEn: "Xuzhou",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  YBP: {
    airports: [
      {
        airportNameEn: "Yibin",
        airportNameFa: "فرودگاه ییبین سایبا",
        airportCode: "YBP",
      },
    ],
    cityNameFa: "ییبین",
    cityNameEn: "Yibin",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  YIH: {
    airports: [
      {
        airportNameEn: "Yichang",
        airportNameFa: "فرودگاه ییچانگ سانگسیا",
        airportCode: "YIH",
      },
    ],
    cityNameFa: "ییچانگ",
    cityNameEn: "Yichang",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  YIN: {
    airports: [
      {
        airportNameEn: "Yining",
        airportNameFa: "فرودگاه ینینگ",
        airportCode: "YIN",
      },
    ],
    cityNameFa: "یینینگ",
    cityNameEn: "Yining",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  YIW: {
    airports: [
      {
        airportNameEn: "Yiwu",
        airportNameFa: "فرودگاه ایوو",
        airportCode: "YIW",
      },
    ],
    cityNameFa: "ییوو",
    cityNameEn: "Yiwu",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  YNJ: {
    airports: [
      {
        airportNameEn: "Yanji",
        airportNameFa: "فرودگاه یانجی چائویانگ‌چون",
        airportCode: "YNJ",
      },
    ],
    cityNameFa: "یانجی",
    cityNameEn: "Yanji",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  YNZ: {
    airports: [
      {
        airportNameEn: "Yancheng",
        airportNameFa: "فرودگاه یانچنگ نانیانگ",
        airportCode: "YNZ",
      },
    ],
    cityNameFa: "یانچنگ",
    cityNameEn: "Yancheng",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  ZAT: {
    airports: [
      {
        airportNameEn: "Zhaotong",
        airportNameFa: "فرودگاه ژتنگ",
        airportCode: "ZAT",
      },
    ],
    cityNameFa: "ژائوتونگ",
    cityNameEn: "Zhaotong",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  ZHA: {
    airports: [
      {
        airportNameEn: "Zhanjiang",
        airportNameFa: "فرودگاه ژان‌جیانگ",
        airportCode: "ZHA",
      },
    ],
    cityNameFa: "ژانجیانگ",
    cityNameEn: "Zhanjiang",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  ZUH: {
    airports: [
      {
        airportNameEn: "Zhuhai",
        airportNameFa: "فرودگاه زوهای سانزاهو",
        airportCode: "ZUH",
      },
    ],
    cityNameFa: "ژوهای",
    cityNameEn: "Zhuhai",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  ZYI: {
    airports: [
      {
        airportNameEn: "Zunyi",
        airportNameFa: "فرودگاه زونی زینزهو",
        airportCode: "ZYI",
      },
    ],
    cityNameFa: "زونیی",
    cityNameEn: "Zunyi",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  YTY: {
    airports: [
      {
        airportNameEn: "YANGZHOU TAIZHOU INTL",
        airportNameFa: "فرودگاه یانگجو",
        airportCode: "YTY",
      },
    ],
    cityNameFa: "یانگجو",
    cityNameEn: "YANGZHOU",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  AAT: {
    airports: [
      {
        airportNameEn: "Altay",
        airportNameFa: "فرودگاه آلتای",
        airportCode: "AAT",
      },
    ],
    cityNameFa: "التای",
    cityNameEn: "Altay",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  AQG: {
    airports: [
      {
        airportNameEn: "Anqing",
        airportNameFa: "فرودگاه آنچینگ تیانژوشان",
        airportCode: "AQG",
      },
    ],
    cityNameFa: "انقینگ",
    cityNameEn: "Anqing",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  CGQ: {
    airports: [
      {
        airportNameEn: "Changchun",
        airportNameFa: "فرودگاه بین‌المللی چانگچون لونگییا",
        airportCode: "CGQ",
      },
    ],
    cityNameFa: "چنگچون",
    cityNameEn: "Changchun",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  DSN: {
    airports: [
      {
        airportNameEn: "Dongsheng",
        airportNameFa: "فرودگاه اوردوس ایجین هورو",
        airportCode: "DSN",
      },
    ],
    cityNameFa: "دونگشنگ",
    cityNameEn: "Dongsheng",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HAK: {
    airports: [
      {
        airportNameEn: "Haikou",
        airportNameFa: "فرودگاه بین‌المللی هایکو میلان",
        airportCode: "HAK",
      },
    ],
    cityNameFa: "هاینان-هایکو",
    cityNameEn: "Haikou",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  HYN: {
    airports: [
      {
        airportNameEn: "Huangyan",
        airportNameFa: "فرودگاه تایژو لوکیائو",
        airportCode: "HYN",
      },
    ],
    cityNameFa: "هوانگین",
    cityNameEn: "Huangyan",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  JMU: {
    airports: [
      {
        airportNameEn: "Jiamusi",
        airportNameFa: "فرودگاه جیاموسی دنگجیاو",
        airportCode: "JMU",
      },
    ],
    cityNameFa: "جیاموسی",
    cityNameEn: "Jiamusi",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  KWE: {
    airports: [
      {
        airportNameEn: "Guiyang",
        airportNameFa: "فرودگاه بین‌المللی لانگ‌دونگ‌بائو گوئی‌یانگ",
        airportCode: "KWE",
      },
    ],
    cityNameFa: "گوییانگ",
    cityNameEn: "Guiyang",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LIA: {
    airports: [
      {
        airportNameEn: "Liangping",
        airportNameFa: "فرودگاه لیانگ پینگ",
        airportCode: "LIA",
      },
    ],
    cityNameFa: "لیانگپینگ",
    cityNameEn: "Liangping",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  LYG: {
    airports: [
      {
        airportNameEn: "Lianyungang",
        airportNameFa: "فرودگاه لیانیونگانگ بایتابو",
        airportCode: "LYG",
      },
    ],
    cityNameFa: "لینیونگنگ",
    cityNameEn: "Lianyungang",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  SHE: {
    airports: [
      {
        airportNameEn: "Shenyang",
        airportNameFa: "فرودگاه بین‌المللی شنینگ تخین",
        airportCode: "SHE",
      },
    ],
    cityNameFa: "شنینگ",
    cityNameEn: "Shenyang",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  THQ: {
    airports: [
      {
        airportNameEn: "Maijishan",
        airportNameFa: "فرودگاه میجیشن",
        airportCode: "THQ",
      },
    ],
    cityNameFa: "تیانشوی",
    cityNameEn: "Tianshui",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  WNZ: {
    airports: [
      {
        airportNameEn: "Wenzhou",
        airportNameFa: "فرودگاه بین‌المللی ونچو یونگچیانگ",
        airportCode: "WNZ",
      },
    ],
    cityNameFa: "ونژو",
    cityNameEn: "Wenzhou",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  XFN: {
    airports: [
      {
        airportNameEn: "Xiangfan",
        airportNameFa: "فرودگاه شیانگیانگ لیوجی",
        airportCode: "XFN",
      },
    ],
    cityNameFa: "خینگفن",
    cityNameEn: "Xiangfan",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  YNT: {
    airports: [
      {
        airportNameEn: "Yantai",
        airportNameFa: "فرودگاه بین‌المللی یانتای لایشان",
        airportCode: "YNT",
      },
    ],
    cityNameFa: "یانتای",
    cityNameEn: "Yantai",
    country: {
      countryCode: "CHN",
      countryNameEn: "China",
      countryNameFa: "چین",
    },
  },
  FEA: {
    airports: [
      {
        airportNameEn: "Fetlar",
        airportNameFa: "فرودگاه فتلر",
        airportCode: "FEA",
      },
    ],
    cityNameFa: "فتلار",
    cityNameEn: "Fetlar",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  PME: {
    airports: [
      {
        airportNameEn: "Portsmouth",
        airportNameFa: "فرودگاه پرتسموت",
        airportCode: "PME",
      },
    ],
    cityNameFa: "پورتسموث",
    cityNameEn: "Portsmouth",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  LON: {
    airports: [
      {
        airportNameEn: "London Gatwick",
        airportNameFa: "فرودگاه گاتویک",
        airportCode: "LGW",
      },
      {
        airportNameEn: "London Heathrow",
        airportNameFa: "فرودگاه هیترو لندن",
        airportCode: "LHR",
      },
      {
        airportNameEn: "St Pancras railway station",
        airportNameFa: "ایستگاه راه‌آهن سینت پانکراس",
        airportCode: "QQS",
      },
      {
        airportNameEn: "London Stansted",
        airportNameFa: "فرودگاه استانستد لندن",
        airportCode: "STN",
      },
      {
        airportNameEn: "Biggin Hill",
        airportNameFa: "فرودگاه بیگین هیل",
        airportCode: "BQH",
      },
      {
        airportNameEn: "London City Airport",
        airportNameFa: "فرودگاه لندن سی‌تی",
        airportCode: "LCY",
      },
      {
        airportNameEn: "Luton",
        airportNameFa: "فرودگاه لوتون",
        airportCode: "LTN",
      },
      {
        airportNameEn: "London Southend",
        airportNameFa: "فرودگاه جنوبی لندن",
        airportCode: "SEN",
      },
      {
        airportNameEn: "Ebbsfleet International railway station",
        airportNameFa: "ایستگاه راه‌آهن بین‌المللی ابسفلیت",
        airportCode: "XQE",
      },
      {
        airportNameEn: "Euston railway station",
        airportNameFa: "ایستگاه راه‌آهن یوستون",
        airportCode: "QQU",
      },
      {
        airportNameEn: "King's Cross railway station",
        airportNameFa: "ایستگاه راه‌آهن کینگز کراس",
        airportCode: "QQK",
      },
      {
        airportNameEn: "Liverpool Street Station",
        airportNameFa: "ایستگاه راه‌آهن خیابان لیورپول",
        airportCode: "ZLS",
      },
      {
        airportNameEn: "Paddington railway station",
        airportNameFa: "ایستگاه راه‌آهن پدینگتون",
        airportCode: "QQP",
      },
      {
        airportNameEn: "Victoria station",
        airportNameFa: "ایستگاه راه‌آهن ویکتوریا",
        airportCode: "ZEP",
      },
      {
        airportNameEn: "Waterloo International railway station",
        airportNameFa: "ایستگاه راه‌آهن واترلو",
        airportCode: "QQW",
      },
    ],
    cityNameFa: "لندن",
    cityNameEn: "London",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  NQT: {
    airports: [
      {
        airportNameEn: "East Midlands",
        airportNameFa: "فرودگاه ایست میدلند",
        airportCode: "EMA",
      },
    ],
    cityNameFa: "دربی",
    cityNameEn: "Derby - Uk",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  LBA: {
    airports: [
      {
        airportNameEn: "Leeds/Bradford",
        airportNameFa: "فرودگاه بین‌المللی لیدز برادفورد",
        airportCode: "LBA",
      },
    ],
    cityNameFa: "لیدز",
    cityNameEn: "Leeds",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BFS: {
    airports: [
      {
        airportNameEn: "George Best Belfast City",
        airportNameFa: "فرودگاه جورج بست بلفاست",
        airportCode: "BHD",
      },
      {
        airportNameEn: "Aldergrove Intl. Arpt.",
        airportNameFa: "فرودگاه بین‌المللی بلفاست",
        airportCode: "BFS",
      },
    ],
    cityNameFa: "بلفاست",
    cityNameEn: "Belfast",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  OXF: {
    airports: [
      {
        airportNameEn: "Raf Brize Norton",
        airportNameFa: "فرودگاه ریتز نورتون",
        airportCode: "BZZ",
      },
      {
        airportNameEn: "Oxford",
        airportNameFa: "فرودگاه آکسفورد لندن",
        airportCode: "OXF",
      },
    ],
    cityNameFa: "آکسفورد",
    cityNameEn: "Oxford",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  GLA: {
    airports: [
      {
        airportNameEn: "Glasgow",
        airportNameFa: "فرودگاه گلاسکو",
        airportCode: "GLA",
      },
      {
        airportNameEn: "Glasgow Central station",
        airportNameFa: "ایستگاه راه‌آهن مرکزی گلاسگو",
        airportCode: "ZGG",
      },
      {
        airportNameEn: "Prestwick",
        airportNameFa: "فرودگاه گلاسگو پرستویک",
        airportCode: "PIK",
      },
    ],
    cityNameFa: "گلاسکو",
    cityNameEn: "Glasgow",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  LSI: {
    airports: [
      {
        airportNameEn: "Sumburgh",
        airportNameFa: "فرودگاه سومبرگ",
        airportCode: "LSI",
      },
      {
        airportNameEn: "Lerwick/Tingwall",
        airportNameFa: "فرودگاه تینگوال",
        airportCode: "LWK",
      },
    ],
    cityNameFa: "لرویک",
    cityNameEn: "Lerwick",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  HYC: {
    airports: [
      {
        airportNameEn: "High Wycombe",
        airportNameFa: "فرودگاه ر.ای.اف های وایکام",
        airportCode: "HYC",
      },
    ],
    cityNameFa: "های وایکام",
    cityNameEn: "High Wycombe",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  ACI: {
    airports: [
      {
        airportNameEn: "The Blaye",
        airportNameFa: "فرودگاه الدرنی",
        airportCode: "ACI",
      },
    ],
    cityNameFa: "الدرنی",
    cityNameEn: "Alderney",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BBP: {
    airports: [
      {
        airportNameEn: "Bembridge",
        airportNameFa: "فرودگاه بمبریج",
        airportCode: "BBP",
      },
    ],
    cityNameFa: "بمبریدگ",
    cityNameEn: "Bembridge",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BBS: {
    airports: [
      {
        airportNameEn: "Blackbushe",
        airportNameFa: "فرودگاه بلکبوشه",
        airportCode: "BBS",
      },
    ],
    cityNameFa: "یاتلی",
    cityNameEn: "Yateley",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BDF: {
    airports: [
      {
        airportNameEn: "Rinkenberger",
        airportNameFa: "فرودگاه رینکنبرگر",
        airportCode: "BDF",
      },
    ],
    cityNameFa: "بردفورد",
    cityNameEn: "Bradford",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BEB: {
    airports: [
      {
        airportNameEn: "Benbecula",
        airportNameFa: "فرودگاه بنبکولا",
        airportCode: "BEB",
      },
    ],
    cityNameFa: "بنبکولا",
    cityNameEn: "Benbecula",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BEQ: {
    airports: [
      {
        airportNameEn: "Honington",
        airportNameFa: "فرودگاه نیروی هوایی سلطنتی هانینگتون",
        airportCode: "BEQ",
      },
    ],
    cityNameFa: "سنت ادموندز را دفن کنید",
    cityNameEn: "Bury St Edmunds",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BFD: {
    airports: [
      {
        airportNameEn: "Bradford",
        airportNameFa: "فرودگاه برادفورد",
        airportCode: "BFD",
      },
    ],
    cityNameFa: "بردفورد",
    cityNameEn: "Bradford",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BFR: {
    airports: [
      {
        airportNameEn: "Virgil I Grissom Muni",
        airportNameFa: "فرودگاه ویرژیل ای گریسوم مونی",
        airportCode: "BFR",
      },
    ],
    cityNameFa: "بدفورد",
    cityNameEn: "Bedford",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BHX: {
    airports: [
      {
        airportNameEn: "Birmingham Intl. Arpt.",
        airportNameFa: "فرودگاه بیرمنگام",
        airportCode: "BHX",
      },
      {
        airportNameEn: "Birmingham New Street railway station",
        airportNameFa: "ایستگاه راه‌آهن نیو استریت بیرمنگام",
        airportCode: "QQN",
      },
    ],
    cityNameFa: "بیرمنگام",
    cityNameEn: "Birmingham",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BLK: {
    airports: [
      {
        airportNameEn: "Blackpool Arpt.",
        airportNameFa: "فرودگاه بین‌المللی بلکپول",
        airportCode: "BLK",
      },
    ],
    cityNameFa: "بلکپول",
    cityNameEn: "Blackpool",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BOH: {
    airports: [
      {
        airportNameEn: "Bournemouth Intl.",
        airportNameFa: "فرودگاه بورنموث (هرن)",
        airportCode: "BOH",
      },
    ],
    cityNameFa: "بورنموث",
    cityNameEn: "Bournemouth",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BOL: {
    airports: [
      {
        airportNameEn: "Bally Kelly",
        airportNameFa: "فرودگاه بالی کلی",
        airportCode: "BOL",
      },
    ],
    cityNameFa: "بالی کلی",
    cityNameEn: "Bally Kelly",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BRS: {
    airports: [
      {
        airportNameEn: "Bristol",
        airportNameFa: "فرودگاه بریستول",
        airportCode: "BRS",
      },
    ],
    cityNameFa: "بریستول",
    cityNameEn: "Bristol",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BWF: {
    airports: [
      {
        airportNameEn: "Walney Island",
        airportNameFa: "فرودگاه باروو/والنی آیلند",
        airportCode: "BWF",
      },
    ],
    cityNameFa: "بارو-این-فرنس",
    cityNameEn: "Barrow-In-Furness",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  CAL: {
    airports: [
      {
        airportNameEn: "Machrihanish",
        airportNameFa: "فرودگاه کمبلتاون (آر ای اف مکریهانریش)",
        airportCode: "CAL",
      },
    ],
    cityNameFa: "کمپبلتون",
    cityNameEn: "Campbeltown",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  CAX: {
    airports: [
      {
        airportNameEn: "Carlisle",
        airportNameFa: "فرودگاه منطقه کارلایل لیک",
        airportCode: "CAX",
      },
    ],
    cityNameFa: "کارلایل",
    cityNameEn: "Carlisle",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  CBG: {
    airports: [
      {
        airportNameEn: "Cambridge",
        airportNameFa: "فرودگاه کمبریج",
        airportCode: "CBG",
      },
    ],
    cityNameFa: "کمبریج",
    cityNameEn: "Cambridge",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  CEG: {
    airports: [
      {
        airportNameEn: "Chester",
        airportNameFa: "فرودگاه هاواردن (چستر)",
        airportCode: "CEG",
      },
    ],
    cityNameFa: "چستر",
    cityNameEn: "Chester",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  COL: {
    airports: [
      {
        airportNameEn: "Isle Of Coll",
        airportNameFa: "فرودگاه کول",
        airportCode: "COL",
      },
    ],
    cityNameFa: "جزیره کول",
    cityNameEn: "Isle Of Coll",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  CSA: {
    airports: [
      {
        airportNameEn: "Isle Of Colonsay",
        airportNameFa: "فرودگاه کولونسای",
        airportCode: "CSA",
      },
    ],
    cityNameFa: "ایسله آف کلنسی",
    cityNameEn: "Isle Of Colonsay",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  CVT: {
    airports: [
      {
        airportNameEn: "West Midlands Intl.",
        airportNameFa: "فرودگاه کاونتری",
        airportCode: "CVT",
      },
    ],
    cityNameFa: "کاونتری",
    cityNameEn: "Coventry",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  CWL: {
    airports: [
      {
        airportNameEn: "Cardiff",
        airportNameFa: "فرودگاه کاردیف",
        airportCode: "CWL",
      },
    ],
    cityNameFa: "کاردیف",
    cityNameEn: "Cardiff",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  DND: {
    airports: [
      {
        airportNameEn: "Dundee",
        airportNameFa: "فرودگاه داندی",
        airportCode: "DND",
      },
      {
        airportNameEn: "Dundee railway station",
        airportNameFa: "ایستگاه راه‌آهن داندی",
        airportCode: "ZDU",
      },
    ],
    cityNameFa: "داندی",
    cityNameEn: "Dundee",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  DOC: {
    airports: [
      {
        airportNameEn: "Dornoch",
        airportNameFa: "فرودگاه دورنوچ",
        airportCode: "DOC",
      },
    ],
    cityNameFa: "دورنوچ",
    cityNameEn: "Dornoch",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  EDI: {
    airports: [
      {
        airportNameEn: "Turnhouse",
        airportNameFa: "فرودگاه ادینبرو",
        airportCode: "EDI",
      },
      {
        airportNameEn: "Edinburgh Waverley railway station",
        airportNameFa: "ایستگاه راه‌آهن ادینبورو ویورلی",
        airportCode: "ZXE",
      },
    ],
    cityNameFa: "ادینبورگ",
    cityNameEn: "Edinburgh",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  ENK: {
    airports: [
      {
        airportNameEn: "Enniskillen St. Angelo",
        airportNameFa: "فرودگاه انیسکیلنسنت آنجلو",
        airportCode: "ENK",
      },
    ],
    cityNameFa: "انیسکیلن",
    cityNameEn: "Enniskillen",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  EOI: {
    airports: [
      {
        airportNameEn: "Eday",
        airportNameFa: "فرودگاه اروز",
        airportCode: "EOI",
      },
    ],
    cityNameFa: "ادی",
    cityNameEn: "Eday",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  ESH: {
    airports: [
      {
        airportNameEn: "Shoreham",
        airportNameFa: "فرودگاه شوهام",
        airportCode: "ESH",
      },
    ],
    cityNameFa: "شورهام بای سی",
    cityNameEn: "Shoreham By Sea",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  EXT: {
    airports: [
      {
        airportNameEn: "Exeter",
        airportNameFa: "فرودگاه بین‌المللی اکستر",
        airportCode: "EXT",
      },
    ],
    cityNameFa: "اکستر",
    cityNameEn: "Exeter",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  FAB: {
    airports: [
      {
        airportNameEn: "Farnborough",
        airportNameFa: "فرودگاه فارنبورو",
        airportCode: "FAB",
      },
    ],
    cityNameFa: "فارنبرو",
    cityNameEn: "Farnborough",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  FIE: {
    airports: [
      {
        airportNameEn: "Fair Isle",
        airportNameFa: "فرودگاه فیرآیل",
        airportCode: "FIE",
      },
    ],
    cityNameFa: "جزیره زیبا",
    cityNameEn: "Fair Isle",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  FLH: {
    airports: [
      {
        airportNameEn: "Flotta",
        airportNameFa: "فرودگاه فلوتا آیسل",
        airportCode: "FLH",
      },
    ],
    cityNameFa: "فلوتا",
    cityNameEn: "Flotta",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  FOA: {
    airports: [
      {
        airportNameEn: "Foula",
        airportNameFa: "فرودگاه فولا",
        airportCode: "FOA",
      },
    ],
    cityNameFa: "فولا",
    cityNameEn: "Foula",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  FSS: {
    airports: [
      {
        airportNameEn: "Kinloss",
        airportNameFa: "فرودگاه نیروی هوایی سلطنتی کینلاس",
        airportCode: "FSS",
      },
    ],
    cityNameFa: "فورس",
    cityNameEn: "Forres",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  FZO: {
    airports: [
      {
        airportNameEn: "Filton",
        airportNameFa: "فرودگاه بریستول",
        airportCode: "FZO",
      },
    ],
    cityNameFa: "بریستول",
    cityNameEn: "Bristol",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  GCI: {
    airports: [
      {
        airportNameEn: "Guernsey",
        airportNameFa: "فرودگاه گوئرنزی",
        airportCode: "GCI",
      },
    ],
    cityNameFa: "گرنزی",
    cityNameEn: "Guernsey",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  GLO: {
    airports: [
      {
        airportNameEn: "Gloucestershire",
        airportNameFa: "فرودگاه گلاستر",
        airportCode: "GLO",
      },
    ],
    cityNameFa: "گلاستر",
    cityNameEn: "Gloucester",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  HAW: {
    airports: [
      {
        airportNameEn: "Haverfordwest",
        airportNameFa: "فرودگاه هاورفردوست",
        airportCode: "HAW",
      },
    ],
    cityNameFa: "هاورفوردوست",
    cityNameEn: "Haverfordwest",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  HOY: {
    airports: [
      {
        airportNameEn: "Hoy Island",
        airportNameFa: "فرودگاه هوی",
        airportCode: "HOY",
      },
    ],
    cityNameFa: "جزیره هوی",
    cityNameEn: "Hoy Island",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  ILY: {
    airports: [
      {
        airportNameEn: "Glenegedale",
        airportNameFa: "فرودگاه ایسلی (گلنگدال)",
        airportCode: "ILY",
      },
    ],
    cityNameFa: "ایسلای",
    cityNameEn: "Islay",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  INV: {
    airports: [
      {
        airportNameEn: "Inverness",
        airportNameFa: "فرودگاه اینورنس",
        airportCode: "INV",
      },
      {
        airportNameEn: "Inverness railway station",
        airportNameFa: "ایستگاه راه‌آهن اینورنس",
        airportCode: "ZIV",
      },
    ],
    cityNameFa: "اینورنس",
    cityNameEn: "Inverness",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  IOM: {
    airports: [
      {
        airportNameEn: "Ronaldsway",
        airportNameFa: "فرودگاه رونالدزمن",
        airportCode: "IOM",
      },
    ],
    cityNameFa: "جزیره من",
    cityNameEn: "Isle Of Man",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  ISC: {
    airports: [
      {
        airportNameEn: "St Marys",
        airportNameFa: "فرودگاه سنت مری (جزیره سیسیلی)",
        airportCode: "ISC",
      },
    ],
    cityNameFa: "جزایر اسکیلی",
    cityNameEn: "Isles Of Scilly",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  JER: {
    airports: [
      {
        airportNameEn: "Jersey",
        airportNameFa: "فرودگاه جرسی",
        airportCode: "JER",
      },
    ],
    cityNameFa: "جرسی",
    cityNameEn: "Jersey",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  KNF: {
    airports: [
      {
        airportNameEn: "Marham Raf",
        airportNameFa: "فرودگاه نیروی هوایی سلطنتی مارهام",
        airportCode: "KNF",
      },
    ],
    cityNameFa: "کینگز لین",
    cityNameEn: "Kings Lynn",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  KOI: {
    airports: [
      {
        airportNameEn: "Orkney Island",
        airportNameFa: "فرودگاه کرکوال",
        airportCode: "KOI",
      },
    ],
    cityNameFa: "کرکوال",
    cityNameEn: "Kirkwall",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  PZE: {
    airports: [
      {
        airportNameEn: "Penzance",
        airportNameFa: "فرودگاه پنزنک",
        airportCode: "PZE",
      },
    ],
    cityNameFa: "پنزانس",
    cityNameEn: "Penzance",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  LEQ: {
    airports: [
      {
        airportNameEn: "Lands End",
        airportNameFa: "فرودگاه لاندس اند",
        airportCode: "LEQ",
      },
    ],
    cityNameFa: "زمین پایان",
    cityNameEn: "Lands End",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  LKZ: {
    airports: [
      {
        airportNameEn: "Lakenheath Raf",
        airportNameFa: "فرودگاه نیروی هوایی سلطنتی لیکن‌هیث",
        airportCode: "LKZ",
      },
    ],
    cityNameFa: "براندون",
    cityNameEn: "Brandon",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  LPL: {
    airports: [
      {
        airportNameEn: "Liverpool John Lennon",
        airportNameFa: "فرودگاه جان لنون لیورپول",
        airportCode: "LPL",
      },
    ],
    cityNameFa: "لیورپول",
    cityNameEn: "Liverpool",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  LVM: {
    airports: [
      {
        airportNameEn: "Mission Field",
        airportNameFa: "فرودگاه مشن فیلد",
        airportCode: "LVM",
      },
    ],
    cityNameFa: "لیوینگستون",
    cityNameEn: "Livingston",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  MAN: {
    airports: [
      {
        airportNameEn: "Manchester",
        airportNameFa: "فرودگاه منچستر",
        airportCode: "MAN",
      },
      {
        airportNameEn: "Manchester Piccadilly station",
        airportNameFa: "ایستگاه راه‌آهن پیکدلی منچستر",
        airportCode: "QQM",
      },
    ],
    cityNameFa: "منچستر",
    cityNameEn: "Manchester",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  MHZ: {
    airports: [
      {
        airportNameEn: "Mildenhall Arpt",
        airportNameFa: "فرودگاه نیروی هوایی سلطنتی میلدنهال",
        airportCode: "MHZ",
      },
    ],
    cityNameFa: "میلدنهال",
    cityNameEn: "Mildenhall",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  MME: {
    airports: [
      {
        airportNameEn: "Durham Tees Valley",
        airportNameFa: "فرودگاه درم تیز ولی",
        airportCode: "MME",
      },
    ],
    cityNameFa: "تیسیده ، دورهام",
    cityNameEn: "Teesside, Durham",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  MSE: {
    airports: [
      {
        airportNameEn: "Kent Intl.",
        airportNameFa: "فرودگاه بین‌المللی کنت",
        airportCode: "MSE",
      },
    ],
    cityNameFa: "منستون",
    cityNameEn: "Manston",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  NCL: {
    airports: [
      {
        airportNameEn: "Newcastle Arpt.",
        airportNameFa: "فرودگاه نیوکاسل",
        airportCode: "NCL",
      },
    ],
    cityNameFa: "نیوکاسل",
    cityNameEn: "Newcastle",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  NDY: {
    airports: [
      {
        airportNameEn: "Sanday",
        airportNameFa: "فرودگاه سندی",
        airportCode: "NDY",
      },
    ],
    cityNameFa: "سندی",
    cityNameEn: "Sanday",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  NHT: {
    airports: [
      {
        airportNameEn: "Northolt",
        airportNameFa: "فرودگاه نیروی هوایی سلطنتی نورثولت",
        airportCode: "NHT",
      },
    ],
    cityNameFa: "نورتولت",
    cityNameEn: "Northolt",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  NPT: {
    airports: [
      {
        airportNameEn: "State",
        airportNameFa: "فرودگاه استیت",
        airportCode: "NPT",
      },
    ],
    cityNameFa: "نیوپورت",
    cityNameEn: "Newport",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  NQY: {
    airports: [
      {
        airportNameEn: "Newquay Cornwall Arpt.",
        airportNameFa: "فرودگاه نیوکوئی کورنوال",
        airportCode: "NQY",
      },
    ],
    cityNameFa: "نیوکوئی",
    cityNameEn: "Newquay",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  NRL: {
    airports: [
      {
        airportNameEn: "North Ronaldsay",
        airportNameFa: "فرودگاه رونالدسی شمالی",
        airportCode: "NRL",
      },
    ],
    cityNameFa: "رونالدی شمالی",
    cityNameEn: "North Ronaldsay",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  NWI: {
    airports: [
      {
        airportNameEn: "Norwich Intl. Arpt.",
        airportNameFa: "فرودگاه بین‌المللی نورویچ",
        airportCode: "NWI",
      },
    ],
    cityNameFa: "نورویچ",
    cityNameEn: "Norwich",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  OBN: {
    airports: [
      {
        airportNameEn: "Oban Arpt.",
        airportNameFa: "فرودگاه اوبان",
        airportCode: "OBN",
      },
    ],
    cityNameFa: "اوبان",
    cityNameEn: "Oban",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  PPW: {
    airports: [
      {
        airportNameEn: "Papa Westray",
        airportNameFa: "فرودگاه پاپا وستری",
        airportCode: "PPW",
      },
    ],
    cityNameFa: "پاپا وستری",
    cityNameEn: "Papa Westray",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  PSL: {
    airports: [
      {
        airportNameEn: "Perth",
        airportNameFa: "فرودگاه پرث، اسکاتلند",
        airportCode: "PSL",
      },
    ],
    cityNameFa: "پرت (بریتانیا)",
    cityNameEn: "Perth (UK)",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  QUG: {
    airports: [
      {
        airportNameEn: "Goodwood",
        airportNameFa: "فرودگاه گودوود",
        airportCode: "QUG",
      },
    ],
    cityNameFa: "چیچستر",
    cityNameEn: "Chichester",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  RCS: {
    airports: [
      {
        airportNameEn: "Rochester",
        airportNameFa: "فرودگاه روچستر (انگلستان)",
        airportCode: "RCS",
      },
    ],
    cityNameFa: "روچستر",
    cityNameEn: "Rochester",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  SDZ: {
    airports: [
      {
        airportNameEn: "Scatsta",
        airportNameFa: "فرودگاه سکتستا",
        airportCode: "SCS",
      },
    ],
    cityNameFa: "لرویک",
    cityNameEn: "Lerwick",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  SKL: {
    airports: [
      {
        airportNameEn: "Broadford",
        airportNameFa: "فرودگاه برود فورد",
        airportCode: "SKL",
      },
    ],
    cityNameFa: "جزیره اسکای",
    cityNameEn: "Isle Of Skye",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  SOU: {
    airports: [
      {
        airportNameEn: "Southampton Arpt.",
        airportNameFa: "فرودگاه ساوت‌همپتون",
        airportCode: "SOU",
      },
    ],
    cityNameFa: "ساوتهمپتون",
    cityNameEn: "Southampton",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  SOY: {
    airports: [
      {
        airportNameEn: "Stronsay",
        airportNameFa: "فرودگاه استرونسی",
        airportCode: "SOY",
      },
    ],
    cityNameFa: "استرونسی",
    cityNameEn: "Stronsay",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  SWS: {
    airports: [
      {
        airportNameEn: "Fairwood Comm",
        airportNameFa: "فرودگاه سوانزی",
        airportCode: "SWS",
      },
    ],
    cityNameFa: "سونسی",
    cityNameEn: "Swansea",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  SYY: {
    airports: [
      {
        airportNameEn: "Stornoway",
        airportNameFa: "فرودگاه استورنووی",
        airportCode: "SYY",
      },
    ],
    cityNameFa: "استورنووی",
    cityNameEn: "Stornoway",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  TRE: {
    airports: [
      {
        airportNameEn: "Tiree",
        airportNameFa: "فرودگاه تایری",
        airportCode: "TRE",
      },
    ],
    cityNameFa: "تیری",
    cityNameEn: "Tiree",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  ULL: {
    airports: [
      {
        airportNameEn: "Mull",
        airportNameFa: "فرودگاه مول",
        airportCode: "ULL",
      },
    ],
    cityNameFa: "مول",
    cityNameEn: "Mull",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  UNT: {
    airports: [
      {
        airportNameEn: "Baltasound",
        airportNameFa: "فرودگاه بالتاسوند",
        airportCode: "UNT",
      },
    ],
    cityNameFa: "آنتشتلند",
    cityNameEn: "Unst Shetland Is",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  UPV: {
    airports: [
      {
        airportNameEn: "Upavon",
        airportNameFa: "فرودگاه یوپون",
        airportCode: "UPV",
      },
    ],
    cityNameFa: "آپاوون",
    cityNameEn: "Upavon",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  WHS: {
    airports: [
      {
        airportNameEn: "Whalsay",
        airportNameFa: "فرودگاه وهلسی",
        airportCode: "WHS",
      },
    ],
    cityNameFa: "والسی",
    cityNameEn: "Whalsay",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  WRY: {
    airports: [
      {
        airportNameEn: "Westray",
        airportNameFa: "فرودگاه وستری",
        airportCode: "WRY",
      },
    ],
    cityNameFa: "وستری",
    cityNameEn: "Westray",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  WXF: {
    airports: [
      {
        airportNameEn: "Weathersfield Raf",
        airportNameFa: "فرودگاه صحرایی ودرز",
        airportCode: "WXF",
      },
    ],
    cityNameFa: "برینتری",
    cityNameEn: "Braintree",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  YEO: {
    airports: [
      {
        airportNameEn: "Yeovilton",
        airportNameFa: "مرکز نیروی هوایی نیوزیلند در یویلتون",
        airportCode: "YEO",
      },
    ],
    cityNameFa: "یوویلتون",
    cityNameEn: "Yeovilton",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  ABZ: {
    airports: [
      {
        airportNameEn: "Aberdeen railway station",
        airportNameFa: "ایستگاه راه‌آهن ابردین",
        airportCode: "ZXA",
      },
      {
        airportNameEn: "Dyce",
        airportNameFa: "فرودگاه آبردین",
        airportCode: "ABZ",
      },
    ],
    cityNameFa: "آبردین",
    cityNameEn: "Aberdeen",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  QDH: {
    airports: [
      {
        airportNameEn: "Ashford International railway station",
        airportNameFa: "ایستگاه راه‌آهن بین‌المللی اشفورد",
        airportCode: "QDH",
      },
    ],
    cityNameFa: "اشفورد",
    cityNameEn: "Ashford",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  XQT: {
    airports: [
      {
        airportNameEn: "Lichfield Trent Valley railway station",
        airportNameFa: "ایستگاه راه‌آهن ترنت ولی لیچیفیلد",
        airportCode: "XQT",
      },
    ],
    cityNameFa: "لیچیفیلد",
    cityNameEn: "Lichfield",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  XRG: {
    airports: [
      {
        airportNameEn: "Rugeley Trent Valley railway station",
        airportNameFa: "ایستگاه راه‌آهن روگلی",
        airportCode: "XRG",
      },
    ],
    cityNameFa: "روگلی",
    cityNameEn: "Rugeley",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  TTK: {
    airports: [
      {
        airportNameEn: "Tottenham Hale station",
        airportNameFa: "ایستگاه راه‌آهن تاتنهام",
        airportCode: "TTK",
      },
    ],
    cityNameFa: "تاتنهام",
    cityNameEn: "Tottenham",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  QQY: {
    airports: [
      {
        airportNameEn: "York railway station",
        airportNameFa: "ایستگاه راه‌آهن یورک",
        airportCode: "QQY",
      },
    ],
    cityNameFa: "یورک",
    cityNameEn: "York",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  ADX: {
    airports: [
      {
        airportNameEn: "Leuchars",
        airportNameFa: "فرودگاه نیروی هوایی سلطنتی لوچارس",
        airportCode: "ADX",
      },
    ],
    cityNameFa: "سنت اندرئوس",
    cityNameEn: "St Andrews",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  BRR: {
    airports: [
      {
        airportNameEn: "North Bay",
        airportNameFa: "فرودگاه اسکاتلند، بارا (نورثبی)",
        airportCode: "BRR",
      },
    ],
    cityNameFa: "باررا",
    cityNameEn: "Barra",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  DSA: {
    airports: [
      {
        airportNameEn: "Robin Hood",
        airportNameFa: "فرودگاه دونکاستر شفیلد رابین هود",
        airportCode: "DSA",
      },
    ],
    cityNameFa: "دانکاستر شفیلد",
    cityNameEn: "Doncaster Sheffield",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  HUY: {
    airports: [
      {
        airportNameEn: "Humberside Intl.",
        airportNameFa: "فرودگاه هامبرساید",
        airportCode: "HUY",
      },
    ],
    cityNameFa: "هومبرسید",
    cityNameEn: "Humberside",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  LDY: {
    airports: [
      {
        airportNameEn: "Eglinton",
        airportNameFa: "فرودگاه دری (لانداندری اگلینتون)-ایرلند شمالی",
        airportCode: "LDY",
      },
    ],
    cityNameFa: "دری",
    cityNameEn: "Derry",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  PLH: {
    airports: [
      {
        airportNameEn: "Plymouth",
        airportNameFa: "فرودگاه پلیموث سیتی(closed 2011)",
        airportCode: "PLH",
      },
    ],
    cityNameFa: "پلیموت",
    cityNameEn: "Plymouth",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  WIC: {
    airports: [
      {
        airportNameEn: "Wick",
        airportNameFa: "فرودگاه ویک",
        airportCode: "WIC",
      },
    ],
    cityNameFa: "فیتیله",
    cityNameEn: "Wick",
    country: {
      countryCode: "GBR",
      countryNameEn: "United Kingdom",
      countryNameFa: "انگلستان",
    },
  },
  AGE: {
    airports: [
      {
        airportNameEn: "Flugplatz",
        airportNameFa: "فرودگاه وانگروگه",
        airportCode: "AGE",
      },
    ],
    cityNameFa: "ونگروگ",
    cityNameEn: "Wangerooge",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  EIB: {
    airports: [
      {
        airportNameEn: "Eisenach",
        airportNameFa: "فرودگاه ایسناچ",
        airportCode: "EIB",
      },
    ],
    cityNameFa: "آیزناخ",
    cityNameEn: "Eisenach",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  QUL: {
    airports: [
      {
        airportNameEn: "HBF RAILWAY STATION",
        airportNameFa: "ایستگاه راه‌آهن مرکزی برلین",
        airportCode: "QUL",
      },
    ],
    cityNameFa: "بادن-وورتمبرگ",
    cityNameEn: "Baden-Württemberg",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  FRA: {
    airports: [
      {
        airportNameEn: "Frankfurt Intl",
        airportNameFa: "فرودگاه بین‌المللی فرانکفورت",
        airportCode: "FRA",
      },
      {
        airportNameEn: "Frankfurt-Hahn",
        airportNameFa: "فرودگاه فرانکفورت-هان",
        airportCode: "HHN",
      },
      {
        airportNameEn: "Frankfurt (Main) Hauptbahnhof",
        airportNameFa: "ایستگاه راه‌آهن مرکزی فرانکفورت",
        airportCode: "ZRB",
      },
    ],
    cityNameFa: "فرانکفورت",
    cityNameEn: "Frankfurt",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  HAM: {
    airports: [
      {
        airportNameEn: "Hamburg Arpt.",
        airportNameFa: "فرودگاه هامبورگ (فاهلسباتل) ",
        airportCode: "HAM",
      },
      {
        airportNameEn: "Luebeck-Blankensee",
        airportNameFa: "فرودگاه لوبک ‌بلنکنسی",
        airportCode: "LBC",
      },
      {
        airportNameEn: "Finkenwerder",
        airportNameFa: "فرودگاه هامبورگ فینکن‌وردر",
        airportCode: "XFW",
      },
      {
        airportNameEn: "HBF RAILWAY STATION",
        airportNameFa: "ایستگاه قطار هامبورگ",
        airportCode: "ZMB",
      },
    ],
    cityNameFa: "هامبورگ",
    cityNameEn: "Hamburg",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  DUS: {
    airports: [
      {
        airportNameEn: "Dusseldorf",
        airportNameFa: "فرودگاه دوسلدورف",
        airportCode: "DUS",
      },
      {
        airportNameEn: "Moenchen-Gl. - Dus Exp",
        airportNameFa: "فرودگاه مونشنگلادباخ",
        airportCode: "MGL",
      },
      {
        airportNameEn: "Weeze",
        airportNameFa: "فرودگاه ویز",
        airportCode: "NRN",
      },
      {
        airportNameEn: "Dusseldorf Central Railway Station",
        airportNameFa: "ایستگاه مرکزی قطار دوسلدورف",
        airportCode: "QDU",
      },
    ],
    cityNameFa: "دوسلدورف",
    cityNameEn: "Dusseldorf",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  MUC: {
    airports: [
      {
        airportNameEn: "Franz Josef Strauss",
        airportNameFa: "فرودگاه مونیخ (مونیخ-ریم)",
        airportCode: "MUC",
      },
      {
        airportNameEn: "Augsburg  Muehlhausen",
        airportNameFa: "فرودگاه آوگسبورگ",
        airportCode: "AGB",
      },
      {
        airportNameEn: "Munchen Hauptbahnhof",
        airportNameFa: "ایستگاه راه‌آهن مونیخ",
        airportCode: "ZMU",
      },
      {
        airportNameEn: "AUGSBURG HBF RAIL STN",
        airportNameFa: "ایستگاه راه‌آهن مرکزی برلین",
        airportCode: "AGY",
      },
    ],
    cityNameFa: "مونیخ",
    cityNameEn: "Munich",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  BER: {
    airports: [
      {
        airportNameEn: "Berlin Tegel Airport",
        airportNameFa: "فرودگاه برلین تگل",
        airportCode: "TXL",
      },
      {
        airportNameEn: "Berlin Schonefeld Airport",
        airportNameFa: "فرودگاه برلین شونفلد",
        airportCode: "SXF",
      },
      {
        airportNameEn: "Berlin Brandenburg Airport",
        airportNameFa: "فرودگاه براندنبورگ برلین",
        airportCode: "BER",
      },
      {
        airportNameEn: "Hbf Railway Station",
        airportNameFa: "ایستگاه قطار برلین",
        airportCode: "QPP",
      },
    ],
    cityNameFa: "برلین",
    cityNameEn: "Berlin",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  CGN: {
    airports: [
      {
        airportNameEn: "Cologne Bonn",
        airportNameFa: "فرودگاه کلن بن",
        airportCode: "CGN",
      },
      {
        airportNameEn: "Cologne Bonn",
        airportNameFa: "ایستگاه قطار کلن",
        airportCode: "QKL",
      },
      {
        airportNameEn: "Bonn hauptbahnhof",
        airportNameFa: "ایستگاه  مرکزی راه‌آهن بن",
        airportCode: "BNJ",
      },
    ],
    cityNameFa: "کلن",
    cityNameEn: "Cologne",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  FCN: {
    airports: [
      {
        airportNameEn: "Cuxhaven/Nordholz",
        airportNameFa: "فرودگاه فلیگرهورست نوردهولز",
        airportCode: "FCN",
      },
    ],
    cityNameFa: "کوکسهاون",
    cityNameEn: "Cuxhaven",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  IES: {
    airports: [
      {
        airportNameEn: "Goehlis",
        airportNameFa: "فرودگاه Goehlis",
        airportCode: "IES",
      },
    ],
    cityNameFa: "ریزا",
    cityNameEn: "Riesa",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  KOQ: {
    airports: [
      {
        airportNameEn: "Koethen",
        airportNameFa: "فرودگاه کوتن",
        airportCode: "KOQ",
      },
    ],
    cityNameFa: "کوصن",
    cityNameEn: "Koethen",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  BBH: {
    airports: [
      {
        airportNameEn: "Barth",
        airportNameFa: "فرودگاه استرالساند بارث",
        airportCode: "BBH",
      },
    ],
    cityNameFa: "بارت",
    cityNameEn: "Barth",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  BBJ: {
    airports: [
      {
        airportNameEn: "Bitburg Air Base",
        airportNameFa: "فرودگاه بیتبورگ (بیتبرگ ایر بیس) ",
        airportCode: "BBJ",
      },
    ],
    cityNameFa: "بیتبورگ",
    cityNameEn: "Bitburg",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  BFE: {
    airports: [
      {
        airportNameEn: "Bielefeld",
        airportNameFa: "فرودگاه بیله فلد",
        airportCode: "BFE",
      },
    ],
    cityNameFa: "بیلفلد",
    cityNameEn: "Bielefeld",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  BGN: {
    airports: [
      {
        airportNameEn: "R.A.F.",
        airportNameFa: "فرودگاه نیروی هوایی سلطنتی بروگن",
        airportCode: "BGN",
      },
    ],
    cityNameFa: "بروگن",
    cityNameEn: "Brueggen",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  BMK: {
    airports: [
      {
        airportNameEn: "Borkum",
        airportNameFa: "فرودگاه صحرایی برکوم",
        airportCode: "BMK",
      },
    ],
    cityNameFa: "برکوم",
    cityNameEn: "Borkum",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  BMR: {
    airports: [
      {
        airportNameEn: "Baltrum",
        airportNameFa: "فرودگاه بلتروم",
        airportCode: "BMR",
      },
    ],
    cityNameFa: "جزیره بالتروم",
    cityNameEn: "Baltrum Island",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  BRE: {
    airports: [
      {
        airportNameEn: "Bremen",
        airportNameFa: "فرودگاه برمن",
        airportCode: "BRE",
      },
      {
        airportNameEn: "BREMEN HBF RAILWAY STATION",
        airportNameFa: "ایستگاه قطار برمن",
        airportCode: "DHC",
      },
    ],
    cityNameFa: "برمن",
    cityNameEn: "Bremen",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  BRV: {
    airports: [
      {
        airportNameEn: "Bremerhaven",
        airportNameFa: "فرودگاه برمرهافن",
        airportCode: "BRV",
      },
    ],
    cityNameFa: "برمرهافن",
    cityNameEn: "Bremerhaven",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  BWE: {
    airports: [
      {
        airportNameEn: "Braunschweig",
        airportNameFa: "براونشوایگ- وولفزبرگ رجینال",
        airportCode: "BWE",
      },
    ],
    cityNameFa: "نیوبرانزویک",
    cityNameEn: "Braunschweig",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  BYU: {
    airports: [
      {
        airportNameEn: "Bindlacher-Berg",
        airportNameFa: "فرودگاه بیندلاچر برگ",
        airportCode: "BYU",
      },
    ],
    cityNameFa: "بایرویت",
    cityNameEn: "Bayreuth",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  CBU: {
    airports: [
      {
        airportNameEn: "Drewitz",
        airportNameFa: "فرودگاه درویتز",
        airportCode: "CBU",
      },
    ],
    cityNameFa: "کوتبوس",
    cityNameEn: "Cottbus",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  DRS: {
    airports: [
      {
        airportNameEn: "Dresden Arpt",
        airportNameFa: "فرودگاه درسدن",
        airportCode: "DRS",
      },
    ],
    cityNameFa: "درسدن",
    cityNameEn: "Dresden",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  DTM: {
    airports: [
      {
        airportNameEn: "Dortmund",
        airportNameFa: "فرودگاه دورتموند",
        airportCode: "DTM",
      },
      {
        airportNameEn: "HBF RAILWAY STATION",
        airportNameFa: "ایستگاه قطار دورتموند",
        airportCode: "DTZ",
      },
    ],
    cityNameFa: "دورتموند",
    cityNameEn: "Dortmund",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  EME: {
    airports: [
      {
        airportNameEn: "Emden",
        airportNameFa: "فرودگاه امدن (نیدزاکسن)",
        airportCode: "EME",
      },
    ],
    cityNameFa: "امدن",
    cityNameEn: "Emden",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  ERF: {
    airports: [
      {
        airportNameEn: "Erfurt",
        airportNameFa: "فرودگاه ارفورت-وایمار",
        airportCode: "ERF",
      },
    ],
    cityNameFa: "ارفورت",
    cityNameEn: "Erfurt",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  ESS: {
    airports: [
      {
        airportNameEn: "Essen",
        airportNameFa: "فرودگاه اسن/مولهیم",
        airportCode: "ESS",
      },
    ],
    cityNameFa: "اسن",
    cityNameEn: "Essen",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  FDH: {
    airports: [
      {
        airportNameEn: "Friedrichshafen",
        airportNameFa: "فرودگاه فریدریش هافن (بودنسی)",
        airportCode: "FDH",
      },
    ],
    cityNameFa: "فریدریشسهافن",
    cityNameEn: "Friedrichshafen",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  FEL: {
    airports: [
      {
        airportNameEn: "Fuerstenfeldbruck",
        airportNameFa: "پایگاه هوایی فورستنفلدبروک",
        airportCode: "FEL",
      },
    ],
    cityNameFa: "فورستنفلدبروکک",
    cityNameEn: "Fuerstenfeldbruck",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  FKB: {
    airports: [
      {
        airportNameEn: "Soellingen",
        airportNameFa: "محله هوایی بادن",
        airportCode: "FKB",
      },
    ],
    cityNameFa: "کارلسروهه / بادن بادن",
    cityNameEn: "Karlsruhe/Baden Baden",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  FLF: {
    airports: [
      {
        airportNameEn: "Schaferhaus",
        airportNameFa: "فرودگاه اسچافرهوس",
        airportCode: "FLF",
      },
    ],
    cityNameFa: "فلنسبورگ",
    cityNameEn: "Flensburg",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  FMM: {
    airports: [
      {
        airportNameEn: "Memmingen-Allg?¤u",
        airportNameFa: "فرودگاه آلگائو",
        airportCode: "FMM",
      },
    ],
    cityNameFa: "ممینگن",
    cityNameEn: "Memmingen",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  FNB: {
    airports: [
      {
        airportNameEn: "Neubrandenburg",
        airportNameFa: "فرودگاه نوی‌براندنبورگ",
        airportCode: "FNB",
      },
    ],
    cityNameFa: "نویبرندنبورگ",
    cityNameEn: "Neubrandenburg",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  FRZ: {
    airports: [
      {
        airportNameEn: "Fritzlar Airbase",
        airportNameFa: "پایگاه هوایی فریتزلار",
        airportCode: "FRZ",
      },
    ],
    cityNameFa: "فریتزلر",
    cityNameEn: "Fritzlar",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  GHF: {
    airports: [
      {
        airportNameEn: "Giebelstadt",
        airportNameFa: "فرودگاه گیبل‌شتات",
        airportCode: "GHF",
      },
    ],
    cityNameFa: "گیبلستاد",
    cityNameEn: "Giebelstadt",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  GKE: {
    airports: [
      {
        airportNameEn: "Geilenkirchen",
        airportNameFa: "پایگاه هوایی ناتو در گایلن‌کیرشن",
        airportCode: "GKE",
      },
    ],
    cityNameFa: "گایلنکیرشن",
    cityNameEn: "Geilenkirchen",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  GTI: {
    airports: [
      {
        airportNameEn: "Guettin",
        airportNameFa: "فرودگاه روگن",
        airportCode: "GTI",
      },
    ],
    cityNameFa: "گوتین",
    cityNameEn: "Guettin",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  GUT: {
    airports: [
      {
        airportNameEn: "Guetersloh",
        airportNameFa: "فرودگاه نیروی هوایی سلطنتی گوترسلو",
        airportCode: "GUT",
      },
    ],
    cityNameFa: "گوترسله",
    cityNameEn: "Guetersloh",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  GWT: {
    airports: [
      {
        airportNameEn: "Westerland - Sylt",
        airportNameFa: "فرودگاه سایلت (فرودگاه سایلت)",
        airportCode: "GWT",
      },
    ],
    cityNameFa: "وسترلند",
    cityNameEn: "Westerland",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  HAJ: {
    airports: [
      {
        airportNameEn: "Hanover Arpt",
        airportNameFa: "فرودگاه هانوفر",
        airportCode: "HAJ",
      },
      {
        airportNameEn: "Hannover Messe Bahnhof",
        airportNameFa: "ایستگاه راه‌آهن نمایشگاه هانوفر",
        airportCode: "ZVM",
      },
      {
        airportNameEn: "HBF Railway Station",
        airportNameFa: "ایستگاه قطار هانوفر",
        airportCode: "ZVR",
      },
    ],
    cityNameFa: "هانوفر",
    cityNameEn: "Hannover",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  HDB: {
    airports: [
      {
        airportNameEn: "Heidelberg",
        airportNameFa: "فرودگاه هیدلبرگ",
        airportCode: "HDB",
      },
    ],
    cityNameFa: "هایدلبرگ",
    cityNameEn: "Heidelberg",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  HDF: {
    airports: [
      {
        airportNameEn: "Heringsdorf",
        airportNameFa: "فرودگاه هرینگسدورف",
        airportCode: "HDF",
      },
    ],
    cityNameFa: "هرینگسدرف",
    cityNameEn: "Heringsdorf",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  HGL: {
    airports: [
      {
        airportNameEn: "Helgoland",
        airportNameFa: "فرودگاه هلیگولند ",
        airportCode: "HGL",
      },
    ],
    cityNameFa: "هل گلند",
    cityNameEn: "Helgoland",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  HOQ: {
    airports: [
      {
        airportNameEn: "Hof",
        airportNameFa: "فرودگاه هوف-پلاون (پلاون) ",
        airportCode: "HOQ",
      },
    ],
    cityNameFa: "هوف",
    cityNameEn: "Hof",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  JUI: {
    airports: [
      {
        airportNameEn: "Juist",
        airportNameFa: "فرودگاه جویست",
        airportCode: "JUI",
      },
    ],
    cityNameFa: "جویست",
    cityNameEn: "Juist",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  KEL: {
    airports: [
      {
        airportNameEn: "Kiel-Holtenau",
        airportNameFa: "فرودگاه کیل",
        airportCode: "KEL",
      },
    ],
    cityNameFa: "کیل",
    cityNameEn: "Kiel",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  KSF: {
    airports: [
      {
        airportNameEn: "Kassel-Calden",
        airportNameFa: "فرودگاه کاسل کالدن",
        airportCode: "KSF",
      },
    ],
    cityNameFa: "کاسل",
    cityNameEn: "Kassel",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  LGO: {
    airports: [
      {
        airportNameEn: "Langeoog",
        airportNameFa: "فرودگاه لانگئوگ",
        airportCode: "LGO",
      },
    ],
    cityNameFa: "لنگئوگ",
    cityNameEn: "Langeoog",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  LHA: {
    airports: [
      {
        airportNameEn: "Black Forest",
        airportNameFa: "فرودگاه بلک فورست (لاهر) ",
        airportCode: "LHA",
      },
    ],
    cityNameFa: "لار",
    cityNameEn: "Lahr",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  MHG: {
    airports: [
      {
        airportNameEn: "Mannheim Arpt",
        airportNameFa: "فرودگاه شهری مانهایم",
        airportCode: "MHG",
      },
    ],
    cityNameFa: "منهیم",
    cityNameEn: "Mannheim",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  NDZ: {
    airports: [
      {
        airportNameEn: "Cuxhaven",
        airportNameFa: "فرودگاه کوخهاون",
        airportCode: "NDZ",
      },
    ],
    cityNameFa: "نوردهولز-اسپیکا",
    cityNameEn: "Nordholz-Spieka",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  NOD: {
    airports: [
      {
        airportNameEn: "Norden",
        airportNameFa: "فرودگاه نوردن-نوردیچ",
        airportCode: "NOD",
      },
    ],
    cityNameFa: "نوردن",
    cityNameEn: "Norden",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  NRD: {
    airports: [
      {
        airportNameEn: "Norderney",
        airportNameFa: "فرودگاه نوردرنی",
        airportCode: "NRD",
      },
    ],
    cityNameFa: "نوردنای",
    cityNameEn: "Norderney",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  NUE: {
    airports: [
      {
        airportNameEn: "Nuremberg",
        airportNameFa: "فرودگاه نورمبرگ",
        airportCode: "NUE",
      },
      {
        airportNameEn: "Nuremberg Central Station",
        airportNameFa: "ایستگاه مرکزی قطار نورمبرگ",
        airportCode: "ZAQ",
      },
    ],
    cityNameFa: "نورمبرگ",
    cityNameEn: "Nuremberg",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  OBF: {
    airports: [
      {
        airportNameEn: "Oberpfaffenhofen",
        airportNameFa: "فرودگاه اوبرفافن هافن",
        airportCode: "OBF",
      },
    ],
    cityNameFa: "اوبرفافن هوفن",
    cityNameEn: "Oberpfaffenhofen",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  OHR: {
    airports: [
      {
        airportNameEn: "Wyk Auf Foehr",
        airportNameFa: "فرودگاه ویک آف فهر",
        airportCode: "OHR",
      },
    ],
    cityNameFa: "ویک آوف فوهر",
    cityNameEn: "Wyk Auf Foehr",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  PAD: {
    airports: [
      {
        airportNameEn: "Paderborn/Lippstadt",
        airportNameFa: "فرودگاه پادربورن لیپشتات",
        airportCode: "PAD",
      },
    ],
    cityNameFa: "پادربورن",
    cityNameEn: "Paderborn",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  PEF: {
    airports: [
      {
        airportNameEn: "Peenemuende",
        airportNameFa: "فرودگاه پینموند",
        airportCode: "PEF",
      },
    ],
    cityNameFa: "پینموند",
    cityNameEn: "Peenemuende",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  PSH: {
    airports: [
      {
        airportNameEn: "St Peter",
        airportNameFa: "فرودگاه سنت پیتر",
        airportCode: "PSH",
      },
    ],
    cityNameFa: "‌ست پتر",
    cityNameEn: "St Peter",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  REB: {
    airports: [
      {
        airportNameEn: "Rechlin",
        airportNameFa: "فرودگاه رچلین",
        airportCode: "REB",
      },
    ],
    cityNameFa: "رچلین",
    cityNameEn: "Rechlin",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  RLG: {
    airports: [
      {
        airportNameEn: "Laage",
        airportNameFa: "فرودگاه روستوک-لاگه",
        airportCode: "RLG",
      },
    ],
    cityNameFa: "روستوک-لاگه",
    cityNameEn: "Rostock-Laage",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  RMS: {
    airports: [
      {
        airportNameEn: "Ramstein",
        airportNameFa: "پایگاه هوایی رامشتاین",
        airportCode: "RMS",
      },
    ],
    cityNameFa: "رمستین",
    cityNameEn: "Ramstein",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  SCN: {
    airports: [
      {
        airportNameEn: "Ensheim",
        airportNameFa: "فرودگاه زاربروکن",
        airportCode: "SCN",
      },
    ],
    cityNameFa: "ساربروکن",
    cityNameEn: "Saarbrucken",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  SGE: {
    airports: [
      {
        airportNameEn: "Siegerland Arpt.",
        airportNameFa: "فرودگاه سیگرلند",
        airportCode: "SGE",
      },
    ],
    cityNameFa: "زیدن",
    cityNameEn: "Siegen",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  SPM: {
    airports: [
      {
        airportNameEn: "Spangdahlem",
        airportNameFa: "پایگاه هوایی اسپنگدالم",
        airportCode: "SPM",
      },
    ],
    cityNameFa: "اسپانگدالهم",
    cityNameEn: "Spangdahlem",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  STR: {
    airports: [
      {
        airportNameEn: "Stuttgart Echterdingen",
        airportNameFa: "فرودگاه اشتوتگارت",
        airportCode: "STR",
      },
      {
        airportNameEn: "Stuttgart Central Station",
        airportNameFa: "ایستگاه مرکزی قطار اشتوتگارت",
        airportCode: "ZWS",
      },
    ],
    cityNameFa: "اشتوتگارت",
    cityNameEn: "Stuttgart",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  ZSR: {
    airports: [
      {
        airportNameEn: "Parchim Arpt.",
        airportNameFa: "فرودگاه پارچیم",
        airportCode: "SZW",
      },
    ],
    cityNameFa: "شورین",
    cityNameEn: "Schwerin",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  VAC: {
    airports: [
      {
        airportNameEn: "Varrelbusch",
        airportNameFa: "فرودگاه وررلبوسچ",
        airportCode: "VAC",
      },
    ],
    cityNameFa: "وررلبوسچ",
    cityNameEn: "Varrelbusch",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  WVN: {
    airports: [
      {
        airportNameEn: "Wilhelmshaven",
        airportNameFa: "فرودگاه جدوسر",
        airportCode: "WVN",
      },
    ],
    cityNameFa: "ویلهمسهافن",
    cityNameEn: "Wilhelmshaven",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  XLW: {
    airports: [
      {
        airportNameEn: "Lemwerder",
        airportNameFa: "فرودگاه لموردر",
        airportCode: "XLW",
      },
    ],
    cityNameFa: "لموردر",
    cityNameEn: "Lemwerder",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  ZQW: {
    airports: [
      {
        airportNameEn: "Zweibruecken",
        airportNameFa: "فرودگاه زوی بروکن",
        airportCode: "ZQW",
      },
    ],
    cityNameFa: "ساربروکن",
    cityNameEn: "Saarbrucken",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  QFB: {
    airports: [
      {
        airportNameEn: "Freiburg Hauptbahnhof",
        airportNameFa: "ایستگاه راه‌آهن مرکزی فریبرگ",
        airportCode: "QFB",
      },
      {
        airportNameEn: "xxx",
        airportNameFa: "شبهحخبیت",
        airportCode: "XXX",
      },
    ],
    cityNameFa: "فریبرگ",
    cityNameEn: "Freiburg",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  AAH: {
    airports: [
      {
        airportNameEn: "Aachen Hauptbahnhof",
        airportNameFa: "ایستگاه راه‌آهن مرکزی آخن",
        airportCode: "XHJ",
      },
      {
        airportNameEn: "Aachen/Merzbruck",
        airportNameFa: "فرودگاه مرتسبروک",
        airportCode: "AAH",
      },
    ],
    cityNameFa: "آخن",
    cityNameEn: "Aachen",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  FMO: {
    airports: [
      {
        airportNameEn: "MUENSTER HBF RAILWAY STATION",
        airportNameFa: "ایستگاه قطار مونستر",
        airportCode: "MKF",
      },
      {
        airportNameEn: "Greven",
        airportNameFa: "فرودگاه بین‌المللی مانستر اوسنابروک",
        airportCode: "FMO",
      },
    ],
    cityNameFa: "مونستر",
    cityNameEn: "Muenster/Osnabrueck",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  ZEU: {
    airports: [
      {
        airportNameEn: "Gottingen railway station",
        airportNameFa: "ایستگاه راه‌آهن گاتینجن",
        airportCode: "ZEU",
      },
    ],
    cityNameFa: "گاتینجن",
    cityNameEn: "Gottingen",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  ZPY: {
    airports: [
      {
        airportNameEn: "Siegburg railway station",
        airportNameFa: "ایستگاه راه‌آهن زیگبورگ",
        airportCode: "ZPY",
      },
    ],
    cityNameFa: "زیگبورگ",
    cityNameEn: "Siegburg",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  AOC: {
    airports: [
      {
        airportNameEn: "Altenburg Nobitz",
        airportNameFa: "فرودگاه لایپزیگ-آلتنبورگ",
        airportCode: "AOC",
      },
    ],
    cityNameFa: "آلتنبورگ",
    cityNameEn: "Altenburg",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  CSO: {
    airports: [
      {
        airportNameEn: "Cochstedt",
        airportNameFa: "فرودگاه کچستدت",
        airportCode: "CSO",
      },
    ],
    cityNameFa: "ماگدبورگ",
    cityNameEn: "Magdeburg",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  ZNQ: {
    airports: [
      {
        airportNameEn: "Ingolstadt-Manching",
        airportNameFa: "فرودگاه اینگولشتات مانچینگ",
        airportCode: "IGS",
      },
    ],
    cityNameFa: "اینگل اشتاد-منچینگ",
    cityNameEn: "Ingolstadt-Manching",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  LEJ: {
    airports: [
      {
        airportNameEn: "Leipzig-Halle",
        airportNameFa: "فرودگاه لایپزیگ/هال",
        airportCode: "LEJ",
      },
      {
        airportNameEn: "Leipzig Hauptbahnhof",
        airportNameFa: "ایستگاه راه‌آهن مرکزی لایپزیگ",
        airportCode: "XIT",
      },
    ],
    cityNameFa: "لایپزیگ",
    cityNameEn: "Leipzig",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  RBM: {
    airports: [
      {
        airportNameEn: "Wallmuhle",
        airportNameFa: "فرودگاه اشتراوبینگ والموهله",
        airportCode: "RBM",
      },
    ],
    cityNameFa: "استرابینگ",
    cityNameEn: "Straubing",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  WBG: {
    airports: [
      {
        airportNameEn: "Schleswig-Jagel",
        airportNameFa: "پایگاه هوایی شلسویگ",
        airportCode: "WBG",
      },
    ],
    cityNameFa: "شلسویگ‌-جگل",
    cityNameEn: "Schleswig-Jagel",
    country: {
      countryCode: "DEU",
      countryNameEn: "Germany",
      countryNameFa: "آلمان",
    },
  },
  AAW: {
    airports: [
      {
        airportNameEn: "Abbottabad",
        airportNameFa: "فرودگاه ابیت‌آباد",
        airportCode: "AAW",
      },
    ],
    cityNameFa: "ابوت آباد",
    cityNameEn: "Abbottabad",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  CWP: {
    airports: [
      {
        airportNameEn: "Campbellpore",
        airportNameFa: "فرودگاه کمبلپور",
        airportCode: "CWP",
      },
    ],
    cityNameFa: "کمبلپور",
    cityNameEn: "Campbellpore",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  SWN: {
    airports: [
      {
        airportNameEn: "Sahiwal",
        airportNameFa: "فرودگاه ساحیوال",
        airportCode: "SWN",
      },
    ],
    cityNameFa: "سهیوال",
    cityNameEn: "Sahiwal",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  HRA: {
    airports: [
      {
        airportNameEn: "Mansehra",
        airportNameFa: "فرودگاه مانسهرا",
        airportCode: "HRA",
      },
    ],
    cityNameFa: "منسهره",
    cityNameEn: "Mansehra",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  KBH: {
    airports: [
      {
        airportNameEn: "Kalat",
        airportNameFa: "فرودگاه کلات",
        airportCode: "KBH",
      },
    ],
    cityNameFa: "کالات",
    cityNameEn: "Kalat",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  ATG: {
    airports: [
      {
        airportNameEn: "Attock",
        airportNameFa: "فرودگاه اتوک",
        airportCode: "ATG",
      },
    ],
    cityNameFa: "آنتیگوا و باربودا",
    cityNameEn: "Attock",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  BDN: {
    airports: [
      {
        airportNameEn: "Talhar",
        airportNameFa: "فرودگاه تلهر",
        airportCode: "BDN",
      },
    ],
    cityNameFa: "بدین",
    cityNameEn: "Badin",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  BHV: {
    airports: [
      {
        airportNameEn: "Bahawalpur",
        airportNameFa: "فرودگاه بهاولپور",
        airportCode: "BHV",
      },
    ],
    cityNameFa: "بهاوالپور",
    cityNameEn: "Bahawalpur",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  SGI: {
    airports: [
      {
        airportNameEn: "Bhagatanwala Apt",
        airportNameFa: "فرودگاه بهاگاتانوالا",
        airportCode: "BHW",
      },
      {
        airportNameEn: "Sargodha Apt",
        airportNameFa: "فرودگاه سرگودها ای پی تی",
        airportCode: "SGI",
      },
    ],
    cityNameFa: "سارگودا",
    cityNameEn: "Sargodha",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  BNP: {
    airports: [
      {
        airportNameEn: "Bannu",
        airportNameFa: "فرودگاه بانو",
        airportCode: "BNP",
      },
    ],
    cityNameFa: "بانو",
    cityNameEn: "Bannu",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  CHB: {
    airports: [
      {
        airportNameEn: "Chilas",
        airportNameFa: "فرودگاه چلاس",
        airportCode: "CHB",
      },
    ],
    cityNameFa: "چیلاس",
    cityNameEn: "Chilas",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  CJL: {
    airports: [
      {
        airportNameEn: "Chitral",
        airportNameFa: "فرودگاه چیترال",
        airportCode: "CJL",
      },
    ],
    cityNameFa: "چیترال",
    cityNameEn: "Chitral",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  DBA: {
    airports: [
      {
        airportNameEn: "Dalbandin",
        airportNameFa: "فرودگاه دالباندین",
        airportCode: "DBA",
      },
    ],
    cityNameFa: "دالبندین",
    cityNameEn: "Dalbandin",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  DDU: {
    airports: [
      {
        airportNameEn: "Dadu",
        airportNameFa: "فرودگاه دادو",
        airportCode: "DDU",
      },
    ],
    cityNameFa: "دادو",
    cityNameEn: "Dadu",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  DEA: {
    airports: [
      {
        airportNameEn: "Dera Ghazi Khan",
        airportNameFa: "فرودگاه بین‌المللی دیرا گازی کان",
        airportCode: "DEA",
      },
    ],
    cityNameFa: "دره غازی خان",
    cityNameEn: "Dera Ghazi Khan",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  DSK: {
    airports: [
      {
        airportNameEn: "Dera Ismail Khan",
        airportNameFa: "فرودگاه دیره اسماعیل‌خان",
        airportCode: "DSK",
      },
    ],
    cityNameFa: "درا اسماعیل خان",
    cityNameEn: "Dera Ismail Khan",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  GIL: {
    airports: [
      {
        airportNameEn: "Gilgit",
        airportNameFa: "فرودگاه گلگت",
        airportCode: "GIL",
      },
    ],
    cityNameFa: "گیلگیت",
    cityNameEn: "Gilgit",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  GRT: {
    airports: [
      {
        airportNameEn: "Gujrat",
        airportNameFa: "فرودگاه گوجرات",
        airportCode: "GRT",
      },
    ],
    cityNameFa: "گوجرت",
    cityNameEn: "Gujrat",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  GWD: {
    airports: [
      {
        airportNameEn: "Gwadar",
        airportNameFa: "فرودگاه بین‌المللی گوادار",
        airportCode: "GWD",
      },
    ],
    cityNameFa: "گوادر",
    cityNameEn: "Gwadar",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  HDD: {
    airports: [
      {
        airportNameEn: "Hyderabad",
        airportNameFa: "فرودگاه حیدرآباد",
        airportCode: "HDD",
      },
    ],
    cityNameFa: "حیدرآباد",
    cityNameEn: "Hyderabad",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  ISB: {
    airports: [
      {
        airportNameEn: "Islamabad Intl.",
        airportNameFa: "فرودگاه بین‌المللی بینظیر بوتو (اسلام آباد)",
        airportCode: "ISB",
      },
    ],
    cityNameFa: "اسلام آباد",
    cityNameEn: "Islamabad",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  JAG: {
    airports: [
      {
        airportNameEn: "Jacobabad",
        airportNameFa: "پایگاه هوایی شهباز",
        airportCode: "JAG",
      },
    ],
    cityNameFa: "یعقوب آباد",
    cityNameEn: "Jacobabad",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  JIW: {
    airports: [
      {
        airportNameEn: "Jiwani",
        airportNameFa: "فرودگاه جوانی",
        airportCode: "JIW",
      },
    ],
    cityNameFa: "جیونی",
    cityNameEn: "Jiwani",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  KCF: {
    airports: [
      {
        airportNameEn: "Kadanwari",
        airportNameFa: "فرودگاه قادن‌واری",
        airportCode: "KCF",
      },
    ],
    cityNameFa: "کدانواری",
    cityNameEn: "Kadanwari",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  KDD: {
    airports: [
      {
        airportNameEn: "Khuzdar",
        airportNameFa: "فرودگاه خضدار",
        airportCode: "KDD",
      },
    ],
    cityNameFa: "خوزدر",
    cityNameEn: "Khuzdar",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  KDU: {
    airports: [
      {
        airportNameEn: "Skardu",
        airportNameFa: "فرودگاه اسکاردو",
        airportCode: "KDU",
      },
    ],
    cityNameFa: "اسکاردو",
    cityNameEn: "Skardu",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  KHI: {
    airports: [
      {
        airportNameEn: "Quaid-e-azam Intl",
        airportNameFa: "فرودگاه بین‌المللی جناح",
        airportCode: "KHI",
      },
    ],
    cityNameFa: "کراچی",
    cityNameEn: "Karachi",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  LRG: {
    airports: [
      {
        airportNameEn: "Lora Lai",
        airportNameFa: "فرودگاه لورا لای",
        airportCode: "LRG",
      },
    ],
    cityNameFa: "لورا لای",
    cityNameEn: "Lora Lai",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  LYP: {
    airports: [
      {
        airportNameEn: "Faisalabad",
        airportNameFa: "فرودگاه بین‌المللی فیصل‌آباد",
        airportCode: "LYP",
      },
    ],
    cityNameFa: "فیصل آباد",
    cityNameEn: "Faisalabad",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  MFG: {
    airports: [
      {
        airportNameEn: "Muzaffarabad",
        airportNameFa: "فرودگاه مظفرآباد",
        airportCode: "MFG",
      },
    ],
    cityNameFa: "مظفرآباد",
    cityNameEn: "Muzaffarabad",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  MJD: {
    airports: [
      {
        airportNameEn: "Mohenjodaro",
        airportNameFa: "فرودگاه موهن‌جو دارو",
        airportCode: "MJD",
      },
    ],
    cityNameFa: "موهنجودارو",
    cityNameEn: "Mohenjodaro",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  MPD: {
    airports: [
      {
        airportNameEn: "Mirpur Khas",
        airportNameFa: "فرودگاه سیندهری (میرپور خاس) ",
        airportCode: "MPD",
      },
    ],
    cityNameFa: "میرپور خاص",
    cityNameEn: "Mirpur Khas",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  MUX: {
    airports: [
      {
        airportNameEn: "Multan Intl.",
        airportNameFa: "فرودگاه بین‌المللی مولتان",
        airportCode: "MUX",
      },
    ],
    cityNameFa: "مولتان",
    cityNameEn: "Multan",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  MWD: {
    airports: [
      {
        airportNameEn: "Mianwali",
        airportNameFa: "پایگاه هوایی میان‌والی",
        airportCode: "MWD",
      },
    ],
    cityNameFa: "میانوالی",
    cityNameEn: "Mianwali",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  NHS: {
    airports: [
      {
        airportNameEn: "Nushki",
        airportNameFa: "فرودگاه نوشکی",
        airportCode: "NHS",
      },
    ],
    cityNameFa: "نوشکی",
    cityNameEn: "Nushki",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  OHT: {
    airports: [
      {
        airportNameEn: "Kohat",
        airportNameFa: "فرودگاه کوهات",
        airportCode: "OHT",
      },
    ],
    cityNameFa: "کوهات",
    cityNameEn: "Kohat",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  ORW: {
    airports: [
      {
        airportNameEn: "Ormara",
        airportNameFa: "فرودگاه اورمانا",
        airportCode: "ORW",
      },
    ],
    cityNameFa: "اورمارا",
    cityNameEn: "Ormara",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  PAJ: {
    airports: [
      {
        airportNameEn: "Para Chinar",
        airportNameFa: "فرودگاه پاراچینار",
        airportCode: "PAJ",
      },
    ],
    cityNameFa: "پارا چینار",
    cityNameEn: "Para Chinar",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  WGB: {
    airports: [
      {
        airportNameEn: "Bahawalnagar",
        airportNameFa: "فرودگاه بهاولنگر",
        airportCode: "WGB",
      },
    ],
    cityNameFa: "بهولنگر",
    cityNameEn: "Bahawalnagar",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  PEW: {
    airports: [
      {
        airportNameEn: "Peshawar",
        airportNameFa: "فرودگاه بین‌المللی باچا خان",
        airportCode: "PEW",
      },
    ],
    cityNameFa: "پیشاور",
    cityNameEn: "Peshawar",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  PJG: {
    airports: [
      {
        airportNameEn: "Panjgur",
        airportNameFa: "فرودگاه پنجگور",
        airportCode: "PJG",
      },
    ],
    cityNameFa: "پنجگور",
    cityNameEn: "Panjgur",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  PSI: {
    airports: [
      {
        airportNameEn: "Pasni",
        airportNameFa: "فرودگاه پسنی",
        airportCode: "PSI",
      },
    ],
    cityNameFa: "پاسنی",
    cityNameEn: "Pasni",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  PZH: {
    airports: [
      {
        airportNameEn: "Zhob",
        airportNameFa: "فرودگاه ژوب",
        airportCode: "PZH",
      },
    ],
    cityNameFa: "ژوب",
    cityNameEn: "Zhob",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  RAZ: {
    airports: [
      {
        airportNameEn: "Rawala Kot",
        airportNameFa: "فرودگاه راوالا کوت",
        airportCode: "RAZ",
      },
    ],
    cityNameFa: "راوالا کوت",
    cityNameEn: "Rawala Kot",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  RYK: {
    airports: [
      {
        airportNameEn: "Rahim Yar Khan",
        airportNameFa: "فرودگاه رحیم یار خان",
        airportCode: "RYK",
      },
    ],
    cityNameFa: "رحیم یار خان",
    cityNameEn: "Rahim Yar Khan",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  RZS: {
    airports: [
      {
        airportNameEn: "Sawan",
        airportNameFa: "فرودگاه ساوان",
        airportCode: "RZS",
      },
    ],
    cityNameFa: "ساوان",
    cityNameEn: "Sawan",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  SBQ: {
    airports: [
      {
        airportNameEn: "Sibi",
        airportNameFa: "فرودگاه سیبی",
        airportCode: "SBQ",
      },
    ],
    cityNameFa: "سیبی",
    cityNameEn: "Sibi",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  SDT: {
    airports: [
      {
        airportNameEn: "Saidu Sharif",
        airportNameFa: "فرودگاه سیدو شریف",
        airportCode: "SDT",
      },
    ],
    cityNameFa: "سایدو شریف",
    cityNameEn: "Saidu Sharif",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  SKZ: {
    airports: [
      {
        airportNameEn: "Sukkur",
        airportNameFa: "فرودگاه سکر",
        airportCode: "SKZ",
      },
    ],
    cityNameFa: "سوکور",
    cityNameEn: "Sukkur",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  SUL: {
    airports: [
      {
        airportNameEn: "Sui",
        airportNameFa: "فرودگاه سویی",
        airportCode: "SUL",
      },
    ],
    cityNameFa: "سوئی",
    cityNameEn: "Sui",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  SYW: {
    airports: [
      {
        airportNameEn: "Sehwen Sharif",
        airportNameFa: "فرودگاه سهون شریف",
        airportCode: "SYW",
      },
    ],
    cityNameFa: "سهون شریف",
    cityNameEn: "Sehwen Sharif",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  TFT: {
    airports: [
      {
        airportNameEn: "Taftan",
        airportNameFa: "فرودگاه تفتان",
        airportCode: "TFT",
      },
    ],
    cityNameFa: "تفتان",
    cityNameEn: "Taftan",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  TLB: {
    airports: [
      {
        airportNameEn: "Tarbela",
        airportNameFa: "فرودگاه تاربلا",
        airportCode: "TLB",
      },
    ],
    cityNameFa: "تربلا",
    cityNameEn: "Tarbela",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  TUK: {
    airports: [
      {
        airportNameEn: "Turbat",
        airportNameFa: "فرودگاه تربت",
        airportCode: "TUK",
      },
    ],
    cityNameFa: "تربت",
    cityNameEn: "Turbat",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  UET: {
    airports: [
      {
        airportNameEn: "Quetta",
        airportNameFa: "فرودگاه بین‌المللی کویته",
        airportCode: "UET",
      },
    ],
    cityNameFa: "کیوتا",
    cityNameEn: "Quetta",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  WAF: {
    airports: [
      {
        airportNameEn: "Wana",
        airportNameFa: "فرودگاه وانا",
        airportCode: "WAF",
      },
    ],
    cityNameFa: "وانا",
    cityNameEn: "Wana",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  WNS: {
    airports: [
      {
        airportNameEn: "Nawabshah",
        airportNameFa: "فرودگاه ناوابشاه",
        airportCode: "WNS",
      },
    ],
    cityNameFa: "نوابشاه",
    cityNameEn: "Nawabshah",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  XJM: {
    airports: [
      {
        airportNameEn: "Mangla",
        airportNameFa: "فرودگاه مانگلا",
        airportCode: "XJM",
      },
    ],
    cityNameFa: "مانگلا",
    cityNameEn: "Mangla",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  LHE: {
    airports: [
      {
        airportNameEn: "Alama Iqbal Intl.",
        airportNameFa: "فرودگاه بین‌المللی اقبال لاهوری",
        airportCode: "LHE",
      },
    ],
    cityNameFa: "لاهور",
    cityNameEn: "Lahore",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  SKT: {
    airports: [
      {
        airportNameEn: "Sialkot Intl.",
        airportNameFa: "فرودگاه بین‌المللی سیالکوت",
        airportCode: "SKT",
      },
    ],
    cityNameFa: "سیالکوت",
    cityNameEn: "Sialkot",
    country: {
      countryCode: "PAK",
      countryNameEn: "Pakistan",
      countryNameFa: "پاکستان",
    },
  },
  AAQ: {
    airports: [
      {
        airportNameEn: "Anapa",
        airportNameFa: "فرودگاه آناپا",
        airportCode: "AAQ",
      },
    ],
    cityNameFa: "آناپا",
    cityNameEn: "Anapa",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  CEE: {
    airports: [
      {
        airportNameEn: "Cherepovets",
        airportNameFa: "فرودگاه چرپووتس",
        airportCode: "CEE",
      },
    ],
    cityNameFa: "چرپووتس",
    cityNameEn: "Cherepovets",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  NUX: {
    airports: [
      {
        airportNameEn: "Novy Urengoy",
        airportNameFa: "فرودگاه نووی اورنگوی",
        airportCode: "NUX",
      },
    ],
    cityNameFa: "نوی یورنگی",
    cityNameEn: "Novy Urengoy",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  MOW: {
    airports: [
      {
        airportNameEn: "Sheremetyevo",
        airportNameFa: "فرودگاه شرمتیوو",
        airportCode: "SVO",
      },
      {
        airportNameEn: "Vnukovo",
        airportNameFa: "فرودگاه ونوکووا",
        airportCode: "VKO",
      },
      {
        airportNameEn: "Domodedovo",
        airportNameFa: "فرودگاه بین‌المللی دوموده‌دوو",
        airportCode: "DME",
      },
      {
        airportNameEn: "Leningradsky Rail Terminal",
        airportNameFa: "ایستگاه راه‌آهن لنینگرادسکی",
        airportCode: "ZKD",
      },
      {
        airportNameEn: "Paveletsky Rail Terminal",
        airportNameFa: "ایستگاه راه‌آهن مسکو",
        airportCode: "XRK",
      },
    ],
    cityNameFa: "مسکو",
    cityNameEn: "Moscow",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  LED: {
    airports: [
      {
        airportNameEn: "Pulkovo",
        airportNameFa: "فرودگاه پالکوو",
        airportCode: "LED",
      },
      {
        airportNameEn: "Finland Station",
        airportNameFa: "ایستگاه راه‌آهن فنلاند",
        airportCode: "FVS",
      },
    ],
    cityNameFa: "سنت پترزبورگ",
    cityNameEn: "Saint Petersburg",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  ABA: {
    airports: [
      {
        airportNameEn: "Abakan",
        airportNameFa: "فرودگاه آباکان",
        airportCode: "ABA",
      },
    ],
    cityNameFa: "اباکان",
    cityNameEn: "Abakan",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  ACS: {
    airports: [
      {
        airportNameEn: "Achinsk",
        airportNameFa: "فرودگاه آچینسک",
        airportCode: "ACS",
      },
    ],
    cityNameFa: "آچینسک",
    cityNameEn: "Achinsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  ADH: {
    airports: [
      {
        airportNameEn: "Aldan",
        airportNameFa: "فرودگاه آلدان",
        airportCode: "ADH",
      },
    ],
    cityNameFa: "آلدن",
    cityNameEn: "Aldan",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  AER: {
    airports: [
      {
        airportNameEn: "Adler/Sochi",
        airportNameFa: "آدلر / سوچی",
        airportCode: "AER",
      },
    ],
    cityNameFa: "سوچی آدلر",
    cityNameEn: "Adler/Sochi",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  AMV: {
    airports: [
      {
        airportNameEn: "Amderma",
        airportNameFa: "فرودگاه آمدرما",
        airportCode: "AMV",
      },
    ],
    cityNameFa: "امدرما",
    cityNameEn: "Amderma",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  ARH: {
    airports: [
      {
        airportNameEn: "Arkhangelsk",
        airportNameFa: "فرودگاه تالاگی",
        airportCode: "ARH",
      },
    ],
    cityNameFa: "آرخانگلسک",
    cityNameEn: "Arkhangelsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  BAX: {
    airports: [
      {
        airportNameEn: "Barnaul",
        airportNameFa: "فرودگاه بارنائول",
        airportCode: "BAX",
      },
    ],
    cityNameFa: "بارنائول",
    cityNameEn: "Barnaul",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  BCX: {
    airports: [
      {
        airportNameEn: "Beloreck",
        airportNameFa: "فرودگاه بلورتسک",
        airportCode: "BCX",
      },
    ],
    cityNameFa: "بلورک",
    cityNameEn: "Beloreck",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  BQS: {
    airports: [
      {
        airportNameEn: "Blagoveschensk",
        airportNameFa: "فرودگاه ایگناتیوا",
        airportCode: "BQS",
      },
    ],
    cityNameFa: "بلاگوسچنسک",
    cityNameEn: "Blagoveschensk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  BTK: {
    airports: [
      {
        airportNameEn: "Bratsk",
        airportNameFa: "فرودگاه براتسک",
        airportCode: "BTK",
      },
    ],
    cityNameFa: "براتسک",
    cityNameEn: "Bratsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  BWO: {
    airports: [
      {
        airportNameEn: "Balakovo",
        airportNameFa: "فرودگاه بالاکوف",
        airportCode: "BWO",
      },
    ],
    cityNameFa: "بالاکوو",
    cityNameEn: "Balakovo",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  CEK: {
    airports: [
      {
        airportNameEn: "Chelyabinsk",
        airportNameFa: "فرودگاه چلیابینسک",
        airportCode: "CEK",
      },
    ],
    cityNameFa: "چلیابینسک",
    cityNameEn: "Chelyabinsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  CKH: {
    airports: [
      {
        airportNameEn: "Chokurdah",
        airportNameFa: "فرودگاه چوکورداه",
        airportCode: "CKH",
      },
    ],
    cityNameFa: "چکوردا",
    cityNameEn: "Chokurdah",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  CSY: {
    airports: [
      {
        airportNameEn: "Cheboksary",
        airportNameFa: "فرودگاه چبوکساری",
        airportCode: "CSY",
      },
    ],
    cityNameFa: "چبوکساری",
    cityNameEn: "Cheboksary",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  CYX: {
    airports: [
      {
        airportNameEn: "Cherskiy",
        airportNameFa: "فرودگاه چرسکی",
        airportCode: "CYX",
      },
    ],
    cityNameFa: "چرسکی",
    cityNameEn: "Cherskiy",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  DKS: {
    airports: [
      {
        airportNameEn: "Dikson",
        airportNameFa: "فرودگاه دیکسون",
        airportCode: "DKS",
      },
    ],
    cityNameFa: "دیکسن",
    cityNameEn: "Dikson",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  DYR: {
    airports: [
      {
        airportNameEn: "Anadyr",
        airportNameFa: "فرودگاه اوگولنی",
        airportCode: "DYR",
      },
    ],
    cityNameFa: "آنادیر",
    cityNameEn: "Anadyr",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  EGO: {
    airports: [
      {
        airportNameEn: "Belgorod",
        airportNameFa: "فرودگاه بلگورود",
        airportCode: "EGO",
      },
    ],
    cityNameFa: "بلگورود",
    cityNameEn: "Belgorod",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  EIE: {
    airports: [
      {
        airportNameEn: "Eniseysk",
        airportNameFa: "فرودگاه ینیسیسک",
        airportCode: "EIE",
      },
    ],
    cityNameFa: "انیسیسک",
    cityNameEn: "Eniseysk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  ESL: {
    airports: [
      {
        airportNameEn: "Elista",
        airportNameFa: "فرودگاه الیستا",
        airportCode: "ESL",
      },
    ],
    cityNameFa: "الیستا",
    cityNameEn: "Elista",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  GDG: {
    airports: [
      {
        airportNameEn: "Magdagachi",
        airportNameFa: "فرودگاه ماگداگاچی",
        airportCode: "GDG",
      },
    ],
    cityNameFa: "مگدگاچی",
    cityNameEn: "Magdagachi",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  GDX: {
    airports: [
      {
        airportNameEn: "Magadan",
        airportNameFa: "فرودگاه سوکول",
        airportCode: "GDX",
      },
    ],
    cityNameFa: "ماگادان",
    cityNameEn: "Magadan",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  GDZ: {
    airports: [
      {
        airportNameEn: "Gelendzik",
        airportNameFa: "فرودگاه گلن دژیک",
        airportCode: "GDZ",
      },
    ],
    cityNameFa: "گلندزیک",
    cityNameEn: "Gelendzik",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  GRV: {
    airports: [
      {
        airportNameEn: "Groznyj",
        airportNameFa: "فرودگاه گروزنی",
        airportCode: "GRV",
      },
    ],
    cityNameFa: "گروزنی",
    cityNameEn: "Groznyj",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  HTA: {
    airports: [
      {
        airportNameEn: "Chita",
        airportNameFa: "فرودگاه کادالا",
        airportCode: "HTA",
      },
    ],
    cityNameFa: "چیتا",
    cityNameEn: "Chita",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  HTG: {
    airports: [
      {
        airportNameEn: "Hatanga",
        airportNameFa: "فرودگاه خاتانگا",
        airportCode: "HTG",
      },
    ],
    cityNameFa: "هتنگا",
    cityNameEn: "Hatanga",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  IAA: {
    airports: [
      {
        airportNameEn: "Igarka",
        airportNameFa: "فرودگاه ایگارکا",
        airportCode: "IAA",
      },
    ],
    cityNameFa: "ایگارکا",
    cityNameEn: "Igarka",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  IAR: {
    airports: [
      {
        airportNameEn: "Yaroslavl",
        airportNameFa: "تونوشنا",
        airportCode: "IAR",
      },
    ],
    cityNameFa: "یاروسلاول",
    cityNameEn: "Yaroslavl",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  IJK: {
    airports: [
      {
        airportNameEn: "Izhevsk",
        airportNameFa: "فرودگاه ایژفسک",
        airportCode: "IJK",
      },
    ],
    cityNameFa: "ایژوسک",
    cityNameEn: "Izhevsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  IKS: {
    airports: [
      {
        airportNameEn: "Tiksi",
        airportNameFa: "فرودگاه تیکسی",
        airportCode: "IKS",
      },
    ],
    cityNameFa: "تیکسی",
    cityNameEn: "Tiksi",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  IKT: {
    airports: [
      {
        airportNameEn: "Irkutsk",
        airportNameFa: "فرودگاه بین‌المللی ایرکوتسک",
        airportCode: "IKT",
      },
    ],
    cityNameFa: "ایرکوتسک",
    cityNameEn: "Irkutsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  INA: {
    airports: [
      {
        airportNameEn: "Inta",
        airportNameFa: "فرودگاه اینتا",
        airportCode: "INA",
      },
    ],
    cityNameFa: "اینتا",
    cityNameEn: "Inta",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  IWA: {
    airports: [
      {
        airportNameEn: "Ivanova",
        airportNameFa: "فرودگاه ایوانوف یوژنی",
        airportCode: "IWA",
      },
    ],
    cityNameFa: "ایوانوا",
    cityNameEn: "Ivanova",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  JOK: {
    airports: [
      {
        airportNameEn: "Joshkar-Ola",
        airportNameFa: "فرودگاه یوشکار اولا",
        airportCode: "JOK",
      },
    ],
    cityNameFa: "جوشکار-‌الا",
    cityNameEn: "Joshkar-Ola",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KEJ: {
    airports: [
      {
        airportNameEn: "Kemerovo",
        airportNameFa: "فرودگاه کمروف",
        airportCode: "KEJ",
      },
    ],
    cityNameFa: "کمروف",
    cityNameEn: "Kemerovo",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KGP: {
    airports: [
      {
        airportNameEn: "Kogalym Intl.",
        airportNameFa: "فرودگاه کوگالیم",
        airportCode: "KGP",
      },
    ],
    cityNameFa: "کوگالیم",
    cityNameEn: "Kogalym",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KHV: {
    airports: [
      {
        airportNameEn: "Novyy",
        airportNameFa: "فرودگاه خاباروفسک ناوی",
        airportCode: "KHV",
      },
    ],
    cityNameFa: "خاباروفسک",
    cityNameEn: "Khabarovsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KJA: {
    airports: [
      {
        airportNameEn: "Krasnojarsk",
        airportNameFa: "فرودگاه یملیانو",
        airportCode: "KJA",
      },
    ],
    cityNameFa: "کراسنویارسک",
    cityNameEn: "Krasnojarsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KLD: {
    airports: [
      {
        airportNameEn: "Migalovo",
        airportNameFa: "میگالوف",
        airportCode: "KLD",
      },
    ],
    cityNameFa: "کالینین",
    cityNameEn: "Kalinin",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KLF: {
    airports: [
      {
        airportNameEn: "Kaluga",
        airportNameFa: "فرودگاه کالوگا گرابتسف",
        airportCode: "KLF",
      },
    ],
    cityNameFa: "کالوگا",
    cityNameEn: "Kaluga",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KMW: {
    airports: [
      {
        airportNameEn: "Kostroma",
        airportNameFa: "فرودگاه کوستروما",
        airportCode: "KMW",
      },
    ],
    cityNameFa: "کاستروما",
    cityNameEn: "Kostroma",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KRO: {
    airports: [
      {
        airportNameEn: "Kurgan",
        airportNameFa: "فرودگاه کورگان",
        airportCode: "KRO",
      },
    ],
    cityNameFa: "کورگان",
    cityNameEn: "Kurgan",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KRR: {
    airports: [
      {
        airportNameEn: "Pashkovsky",
        airportNameFa: "فرودگاه پاشکوفسکی",
        airportCode: "KRR",
      },
    ],
    cityNameFa: "کراسنودار",
    cityNameEn: "Krasnodar",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KSZ: {
    airports: [
      {
        airportNameEn: "Kotlas",
        airportNameFa: "فرودگاه کوتلاس",
        airportCode: "KSZ",
      },
    ],
    cityNameFa: "کوتلاس",
    cityNameEn: "Kotlas",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KVK: {
    airports: [
      {
        airportNameEn: "Kirovsk",
        airportNameFa: "کیروفسک آپاتیتی (خیبینی)",
        airportCode: "KVK",
      },
    ],
    cityNameFa: "کیروفسک",
    cityNameEn: "Kirovsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KVX: {
    airports: [
      {
        airportNameEn: "Kirov",
        airportNameFa: "فرودگاه کیروف پوبدیلوف (کیرو)",
        airportCode: "KVX",
      },
    ],
    cityNameFa: "کیروف",
    cityNameEn: "Kirov",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KXK: {
    airports: [
      {
        airportNameEn: "Komsomolsk Na Amure",
        airportNameFa: "فرودگاه کامسامولسک بر آمور",
        airportCode: "KXK",
      },
    ],
    cityNameFa: "کومسومولسک نا آمور",
    cityNameEn: "Komsomolsk Na Amure",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KYZ: {
    airports: [
      {
        airportNameEn: "Kyzyl",
        airportNameFa: "فرودگاه کیزیل",
        airportCode: "KYZ",
      },
    ],
    cityNameFa: "کیزیل",
    cityNameEn: "Kyzyl",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KZN: {
    airports: [
      {
        airportNameEn: "Kazan",
        airportNameFa: "فرودگاه بین‌المللی قازان",
        airportCode: "KZN",
      },
    ],
    cityNameFa: "کازان",
    cityNameEn: "Kazan",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  LNX: {
    airports: [
      {
        airportNameEn: "Smolensk",
        airportNameFa: "فرودگاه اسمولنسک",
        airportCode: "LNX",
      },
    ],
    cityNameFa: "اسمولنسک",
    cityNameEn: "Smolensk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  LPK: {
    airports: [
      {
        airportNameEn: "Lipetsk",
        airportNameFa: "فرودگاه لیپتسک",
        airportCode: "LPK",
      },
    ],
    cityNameFa: "لیپتسک",
    cityNameEn: "Lipetsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  MCX: {
    airports: [
      {
        airportNameEn: "Makhachkala",
        airportNameFa: "فرودگاه اویتاش",
        airportCode: "MCX",
      },
    ],
    cityNameFa: "آکتا",
    cityNameEn: "Makhachkala",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  MCT: {
    airports: [
      {
        airportNameEn: "Muscat International Airport",
        airportNameFa: "فرودگاه بین‌المللی مسقط",
        airportCode: "MCT",
      },
    ],
    cityNameEn: "Muscat",
    cityNameFa: "مسقط",
    country: {
      countryCode: "OMN",
      countryNameEn: "Oman",
      countryNameFa: "عمان",
    },
  },
  MJZ: {
    airports: [
      {
        airportNameEn: "Mirnyj",
        airportNameFa: "فرودگاه میرنی",
        airportCode: "MJZ",
      },
    ],
    cityNameFa: "میرنیج",
    cityNameEn: "Mirnyj",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  MMK: {
    airports: [
      {
        airportNameEn: "Murmansk Arpt. Murmashi",
        airportNameFa: "فرودگاه مورمانسک",
        airportCode: "MMK",
      },
    ],
    cityNameFa: "مورمانسک",
    cityNameEn: "Murmansk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  MRV: {
    airports: [
      {
        airportNameEn: "Mineralnye Vodyj",
        airportNameFa: "فرودگاه مینرالنیه وودی",
        airportCode: "MRV",
      },
    ],
    cityNameFa: "مینارانی وودی",
    cityNameEn: "Mineralnye Vody",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  NAL: {
    airports: [
      {
        airportNameEn: "Nalchik",
        airportNameFa: "فرودگاه نالچیک",
        airportCode: "NAL",
      },
    ],
    cityNameFa: "نالچیک",
    cityNameEn: "Nalchik",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  NBC: {
    airports: [
      {
        airportNameEn: "Begishevo",
        airportNameFa: "فرودگاه بگیشوو",
        airportCode: "NBC",
      },
    ],
    cityNameFa: "نیژنکامسک",
    cityNameEn: "Nizhnekamsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  NEF: {
    airports: [
      {
        airportNameEn: "Neftekamsk",
        airportNameFa: "فرودگاه نفتکامسک",
        airportCode: "NEF",
      },
    ],
    cityNameFa: "نفتکماسک",
    cityNameEn: "Neftekamsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  NFG: {
    airports: [
      {
        airportNameEn: "Nefteyugansk",
        airportNameFa: "فرودگاه نفتیوگانسک",
        airportCode: "NFG",
      },
    ],
    cityNameFa: "نفتیوگانسک",
    cityNameEn: "Nefteyugansk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  NJC: {
    airports: [
      {
        airportNameEn: "Nizhnevartovsk",
        airportNameFa: "فرودگاه نیژنوارتوفسک",
        airportCode: "NJC",
      },
    ],
    cityNameFa: "نیژنوارتوفسک",
    cityNameEn: "Nizhnevartovsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  NNM: {
    airports: [
      {
        airportNameEn: "Naryan-Mar",
        airportNameFa: "فرودگاه ناریان-مار",
        airportCode: "NNM",
      },
    ],
    cityNameFa: "ناریان-مر",
    cityNameEn: "Naryan-Mar",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  NYM: {
    airports: [
      {
        airportNameEn: "Nadym",
        airportNameFa: "فرودگاه نادیم",
        airportCode: "NYM",
      },
    ],
    cityNameFa: "نادیم",
    cityNameEn: "Nadym",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  OEL: {
    airports: [
      {
        airportNameEn: "Orel",
        airportNameFa: "فرودگاه اوریول یوژنی",
        airportCode: "OEL",
      },
    ],
    cityNameFa: "اورل",
    cityNameEn: "Orel",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  OGZ: {
    airports: [
      {
        airportNameEn: "Vladikavkaz",
        airportNameFa: "فرودگاه بسلان",
        airportCode: "OGZ",
      },
    ],
    cityNameFa: "ولدیکوکز",
    cityNameEn: "Vladikavkaz",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  OHO: {
    airports: [
      {
        airportNameEn: "Okhotsk",
        airportNameFa: "فرودگاه اوخوتسک",
        airportCode: "OHO",
      },
    ],
    cityNameFa: "اخوتسک",
    cityNameEn: "Okhotsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  OKT: {
    airports: [
      {
        airportNameEn: "Oktiabrskij",
        airportNameFa: "فرودگاه اوکتیابرسکی",
        airportCode: "OKT",
      },
    ],
    cityNameFa: "اکتیبرسکی",
    cityNameEn: "Oktiabrskij",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  OMS: {
    airports: [
      {
        airportNameEn: "Omsk",
        airportNameFa: "فرودگاه تسنترالنی",
        airportCode: "OMS",
      },
    ],
    cityNameFa: "اومسک",
    cityNameEn: "Omsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  RU: {
    airports: [
      {
        airportNameEn: "Orsk",
        airportNameFa: "فرودگاه اورسک",
        airportCode: "OSW",
      },
    ],
    cityNameFa: "اورسک",
    cityNameEn: "Orsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  OVB: {
    airports: [
      {
        airportNameEn: "Tolmachevo",
        airportNameFa: "فرودگاه تولمچوا",
        airportCode: "OVB",
      },
    ],
    cityNameFa: "نووسیبیرسک",
    cityNameEn: "Novosibirsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  PEE: {
    airports: [
      {
        airportNameEn: "Perm",
        airportNameFa: "فرودگاه بولشویه ساوینو",
        airportCode: "PEE",
      },
    ],
    cityNameFa: "پرم",
    cityNameEn: "Perm",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  PEX: {
    airports: [
      {
        airportNameEn: "Pechora",
        airportNameFa: "فرودگاه پچورا",
        airportCode: "PEX",
      },
    ],
    cityNameFa: "پچورا",
    cityNameEn: "Pechora",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  PEZ: {
    airports: [
      {
        airportNameEn: "Penza",
        airportNameFa: "فرودگاه پنزا",
        airportCode: "PEZ",
      },
    ],
    cityNameFa: "پنزا",
    cityNameEn: "Penza",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  PKC: {
    airports: [
      {
        airportNameEn: "Petropavlovsk-Kamchats",
        airportNameFa: "فرودگاه پتروپاولوفسک/سیبون",
        airportCode: "PKC",
      },
    ],
    cityNameFa: "پترپولوسک‌-کمچتس",
    cityNameEn: "Petropavlovsk-Kamchats",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  PKV: {
    airports: [
      {
        airportNameEn: "Pskov",
        airportNameFa: "فرودگاه پسکوف",
        airportCode: "PKV",
      },
    ],
    cityNameFa: "پسکوف",
    cityNameEn: "Pskov",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  PVS: {
    airports: [
      {
        airportNameEn: "Provideniya",
        airportNameFa: "فرودگاه پرویدنیا بای",
        airportCode: "PVS",
      },
    ],
    cityNameFa: "پرویدنیا",
    cityNameEn: "Provideniya",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  PWE: {
    airports: [
      {
        airportNameEn: "Pevek",
        airportNameFa: "فرودگاه پوک",
        airportCode: "PWE",
      },
    ],
    cityNameFa: "پوک",
    cityNameEn: "Pevek",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  PYJ: {
    airports: [
      {
        airportNameEn: "Polyarnyj",
        airportNameFa: "فرودگاه پولیارنی",
        airportCode: "PYJ",
      },
    ],
    cityNameFa: "پولیارنیج",
    cityNameEn: "Polyarnyj",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  REN: {
    airports: [
      {
        airportNameEn: "Orenburg",
        airportNameFa: "فرودگاه اورنبورگ تسنترالنی",
        airportCode: "REN",
      },
    ],
    cityNameFa: "اورنبرگ",
    cityNameEn: "Orenburg",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  ROV: {
    airports: [
      {
        airportNameEn: "Rostov",
        airportNameFa: "فرودگاه روستوف‌ان‌دون",
        airportCode: "ROV",
      },
    ],
    cityNameFa: "رستوو",
    cityNameEn: "Rostov",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  RTW: {
    airports: [
      {
        airportNameEn: "Saratov",
        airportNameFa: "فرودگاه سرتو تسنترلنی",
        airportCode: "RTW",
      },
    ],
    cityNameFa: "ساراتوف",
    cityNameEn: "Saratov",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  RZN: {
    airports: [
      {
        airportNameEn: "Ryazan",
        airportNameFa: "فرودگاه ریازان تورلاتوف(Turlatovo Airport)",
        airportCode: "RZN",
      },
    ],
    cityNameFa: "ریزن",
    cityNameEn: "Ryazan",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  SCW: {
    airports: [
      {
        airportNameEn: "Syktyvkar",
        airportNameFa: "فرودگاه سیکتیوکار",
        airportCode: "SCW",
      },
    ],
    cityNameFa: "سیکتیوکار",
    cityNameEn: "Syktyvkar",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  SGC: {
    airports: [
      {
        airportNameEn: "Surgut",
        airportNameFa: "فرودگاه بین‌المللی سورگوت",
        airportCode: "SGC",
      },
    ],
    cityNameFa: "سورگوت",
    cityNameEn: "Surgut",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  SKX: {
    airports: [
      {
        airportNameEn: "Saransk",
        airportNameFa: "فرودگاه سارانسک",
        airportCode: "SKX",
      },
    ],
    cityNameFa: "سرنسک",
    cityNameEn: "Saransk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  SLY: {
    airports: [
      {
        airportNameEn: "Salekhard",
        airportNameFa: "فرودگاه سالخارد",
        airportCode: "SLY",
      },
    ],
    cityNameFa: "سالخارد",
    cityNameEn: "Salekhard",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  STW: {
    airports: [
      {
        airportNameEn: "Stavropol",
        airportNameFa: "فرودگاه شپاکوفسکویه",
        airportCode: "STW",
      },
    ],
    cityNameFa: "استاوروپول",
    cityNameEn: "Stavropol",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  SVX: {
    airports: [
      {
        airportNameEn: "Koltsovo Intl. Arpt.",
        airportNameFa: "فرودگاه کولتسوو",
        airportCode: "SVX",
      },
    ],
    cityNameFa: "اکاترینبورگ",
    cityNameEn: "Ekaterinburg",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  TBW: {
    airports: [
      {
        airportNameEn: "Tambov",
        airportNameFa: "فرودگاه تامبوف دونسکویه",
        airportCode: "TBW",
      },
    ],
    cityNameFa: "تامبوف",
    cityNameEn: "Tambov",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  TOF: {
    airports: [
      {
        airportNameEn: "Tomsk",
        airportNameFa: "فرودگاه بوگاشف",
        airportCode: "TOF",
      },
    ],
    cityNameFa: "تومسک",
    cityNameEn: "Tomsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  TOX: {
    airports: [
      {
        airportNameEn: "Tobolsk",
        airportNameFa: "فرودگاه تبلسک",
        airportCode: "TOX",
      },
    ],
    cityNameFa: "توبولسک",
    cityNameEn: "Tobolsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  TYA: {
    airports: [
      {
        airportNameEn: "Tula",
        airportNameFa: "فرودگاه یالووا",
        airportCode: "TYA",
      },
    ],
    cityNameFa: "تولا",
    cityNameEn: "Tula",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  TYD: {
    airports: [
      {
        airportNameEn: "Tynda",
        airportNameFa: "فرودگاه تیندا",
        airportCode: "TYD",
      },
    ],
    cityNameFa: "تیندا",
    cityNameEn: "Tynda",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  UCT: {
    airports: [
      {
        airportNameEn: "Ukhta",
        airportNameFa: "فرودگاه اوختا",
        airportCode: "UCT",
      },
    ],
    cityNameFa: "اوختا",
    cityNameEn: "Ukhta",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  UFA: {
    airports: [
      {
        airportNameEn: "Ufa",
        airportNameFa: "فرودگاه بین‌المللی اوفا",
        airportCode: "UFA",
      },
    ],
    cityNameFa: "یوفا",
    cityNameEn: "Ufa",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  UIK: {
    airports: [
      {
        airportNameEn: "Ust-Ilimsk",
        airportNameFa: "فرودگاه اوست-ایلیمسک",
        airportCode: "UIK",
      },
    ],
    cityNameFa: "اوست - ‌ایلیمسک",
    cityNameEn: "Ust-Ilimsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  UKX: {
    airports: [
      {
        airportNameEn: "Ust-Kut",
        airportNameFa: "فرودگاه اوست-کوت",
        airportCode: "UKX",
      },
    ],
    cityNameFa: "آست-کات",
    cityNameEn: "Ust-Kut",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  ULY: {
    airports: [
      {
        airportNameEn: "Vostochny",
        airportNameFa: "فرودگاه اولیانوفسک ووستوچنی",
        airportCode: "ULY",
      },
    ],
    cityNameFa: "اولیانوفسک",
    cityNameEn: "Ulyanovsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  URJ: {
    airports: [
      {
        airportNameEn: "Uraj",
        airportNameFa: "فرودگاه اورای",
        airportCode: "URJ",
      },
    ],
    cityNameFa: "یوراج",
    cityNameEn: "Uraj",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  URS: {
    airports: [
      {
        airportNameEn: "Kursk",
        airportNameFa: "فرودگاه خالینو",
        airportCode: "URS",
      },
    ],
    cityNameFa: "کورسک",
    cityNameEn: "Kursk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  USK: {
    airports: [
      {
        airportNameEn: "Usinsk",
        airportNameFa: "فرودگاه یوسینسک",
        airportCode: "USK",
      },
    ],
    cityNameFa: "اسینکس",
    cityNameEn: "Usinsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  UUA: {
    airports: [
      {
        airportNameEn: "Bugulma",
        airportNameFa: "فرودگاه بوگولما",
        airportCode: "UUA",
      },
    ],
    cityNameFa: "بوگولما",
    cityNameEn: "Bugulma",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  UUD: {
    airports: [
      {
        airportNameEn: "Ulan-Ude, Mukhino",
        airportNameFa: "فرودگاه اولان‌اوده",
        airportCode: "UUD",
      },
    ],
    cityNameFa: "اولان اوده",
    cityNameEn: "Ulan-Ude",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  UUS: {
    airports: [
      {
        airportNameEn: "Yuzhno-Sakhalinsk",
        airportNameFa: "فرودگاه یوژنو-ساخالینسک",
        airportCode: "UUS",
      },
    ],
    cityNameFa: "یوژنو-ساخالینسک",
    cityNameEn: "Yuzhno-Sakhalinsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  VGD: {
    airports: [
      {
        airportNameEn: "Vologda",
        airportNameFa: "فرودگاه وولوگدا",
        airportCode: "VGD",
      },
    ],
    cityNameFa: "ولگدا",
    cityNameEn: "Vologda",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  VKT: {
    airports: [
      {
        airportNameEn: "Vorkuta",
        airportNameFa: "فرودگاه وورکوتا",
        airportCode: "VKT",
      },
    ],
    cityNameFa: "ورکوتا",
    cityNameEn: "Vorkuta",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  VLK: {
    airports: [
      {
        airportNameEn: "Volgodonsk",
        airportNameFa: "فرودگاه وولگودونسک",
        airportCode: "VLK",
      },
    ],
    cityNameFa: "وولگودونسک",
    cityNameEn: "Volgodonsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  VLU: {
    airports: [
      {
        airportNameEn: "Velikiye Luki",
        airportNameFa: "فرودگاه ولیکیه لوکی",
        airportCode: "VLU",
      },
    ],
    cityNameFa: "ولیکی لوکی",
    cityNameEn: "Velikiye Luki",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  VOG: {
    airports: [
      {
        airportNameEn: "Volgograd",
        airportNameFa: "فرودگاه بین‌المللی ولگاگراد (شهر)",
        airportCode: "VOG",
      },
    ],
    cityNameFa: "ولگوگراد",
    cityNameEn: "Volgograd",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  VOZ: {
    airports: [
      {
        airportNameEn: "Chertovitskoye",
        airportNameFa: "فرودگاه چرتوویتسکویه",
        airportCode: "VOZ",
      },
    ],
    cityNameFa: "وورونژ",
    cityNameEn: "Voronezh",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  VUS: {
    airports: [
      {
        airportNameEn: "Velikij Ustyug",
        airportNameFa: "فرودگاه ولیکی اوستیوگ",
        airportCode: "VUS",
      },
    ],
    cityNameFa: "ولیکیج اوستیوگ",
    cityNameEn: "Velikij Ustyug",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  VVO: {
    airports: [
      {
        airportNameEn: "Vladivostok",
        airportNameFa: "فرودگاه بین‌المللی ولادی‌وستوک",
        airportCode: "VVO",
      },
    ],
    cityNameFa: "ولادی وستک",
    cityNameEn: "Vladivostok",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  YKS: {
    airports: [
      {
        airportNameEn: "Yakutsk",
        airportNameFa: "فرودگاه یاکوتسک",
        airportCode: "YKS",
      },
    ],
    cityNameFa: "یاکوتسک",
    cityNameEn: "Yakutsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  ZIA: {
    airports: [
      {
        airportNameEn: "Zhukovsky Intl APT",
        airportNameFa: "فرودگاه بین المللی ژوکوفسکی",
        airportCode: "ZIA",
      },
    ],
    cityNameFa: "ژوکوفسکی",
    cityNameEn: "Zhukovsky",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  GOJ: {
    airports: [
      {
        airportNameEn: "STRIGINO Airport",
        airportNameFa: "فرودگاه استرینگو",
        airportCode: "GOJ",
      },
    ],
    cityNameFa: "نیژنی نوگراد",
    cityNameEn: "NIZHNY NOVGOROD",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  ASF: {
    airports: [
      {
        airportNameEn: "Astrakhan",
        airportNameFa: "فرودگاه آستراخان",
        airportCode: "ASF",
      },
    ],
    cityNameFa: "آستراخن",
    cityNameEn: "Astrakhan",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  BZK: {
    airports: [
      {
        airportNameEn: "Briansk",
        airportNameFa: "فرودگاه بریانسک",
        airportCode: "BZK",
      },
    ],
    cityNameFa: "برینسک",
    cityNameEn: "Briansk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  CKL: {
    airports: [
      {
        airportNameEn: "Chkalovsky",
        airportNameFa: "فرودگاه چکالووسکی",
        airportCode: "CKL",
      },
    ],
    cityNameFa: "چکالووسکی",
    cityNameEn: "Chkalovsky",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  HMA: {
    airports: [
      {
        airportNameEn: "Khanty-Mansiysk",
        airportNameFa: "فرودگاه خانتی-مانسییسک",
        airportCode: "HMA",
      },
    ],
    cityNameFa: "خانتی-مانسیسک",
    cityNameEn: "KHANTY-MANSIYSK",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KGD: {
    airports: [
      {
        airportNameEn: "Kaliningrad Devau",
        airportNameFa: "فرودگاه خرابوروفو",
        airportCode: "KGD",
      },
    ],
    cityNameFa: "کلینینگارد",
    cityNameEn: "Kaliningrad",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  KUF: {
    airports: [
      {
        airportNameEn: "Kurumoch",
        airportNameFa: "فرودگاه بین‌المللی کورومچ(Samara Airport)",
        airportCode: "KUF",
      },
    ],
    cityNameFa: "سامارا",
    cityNameEn: "Samara",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  MQF: {
    airports: [
      {
        airportNameEn: "Magnitogorsk",
        airportNameFa: "فرودگاه ماگنیتوگورسک",
        airportCode: "MQF",
      },
    ],
    cityNameFa: "مگنیتاگرس",
    cityNameEn: "Magnitogorsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  NOJ: {
    airports: [
      {
        airportNameEn: "Nojabrxsk",
        airportNameFa: "فرودگاه نویابرسک",
        airportCode: "NOJ",
      },
    ],
    cityNameFa: "نوجابرکس",
    cityNameEn: "Nojabrxsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  NOZ: {
    airports: [
      {
        airportNameEn: "Novokuznetsk",
        airportNameFa: "فرودگاه اسپیچنکوف (فرودگاه اسپیچنکوف)",
        airportCode: "NOZ",
      },
    ],
    cityNameFa: "نوکوزنتسک",
    cityNameEn: "Novokuznetsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  PES: {
    airports: [
      {
        airportNameEn: "Petrozavodsk",
        airportNameFa: "فرودگاه بسووتس",
        airportCode: "PES",
      },
    ],
    cityNameFa: "پتروزاودسک",
    cityNameEn: "Petrozavodsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  RYB: {
    airports: [
      {
        airportNameEn: "Rybinsk",
        airportNameFa: "ریبینسک استاروسلیه",
        airportCode: "RYB",
      },
    ],
    cityNameFa: "ریبینسک",
    cityNameEn: "Rybinsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  TJM: {
    airports: [
      {
        airportNameEn: "Roschino",
        airportNameFa: "فرودگاه بین‌المللی رسچینو",
        airportCode: "TJM",
      },
    ],
    cityNameFa: "تیومن",
    cityNameEn: "Tyumen",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  ULV: {
    airports: [
      {
        airportNameEn: "Ulyanovsk Baratayevka Airport",
        airportNameFa: "فرودگاه اولیانووسک باراتایوکا",
        airportCode: "ULV",
      },
    ],
    cityNameFa: "اولیانوفسک",
    cityNameEn: "Ulyanovsk",
    country: {
      countryCode: "RUS",
      countryNameEn: "Russia",
      countryNameFa: "روسیه",
    },
  },
  XQC: {
    airports: [
      {
        airportNameEn: "Balad",
        airportNameFa: "فرودگاه بلد",
        airportCode: "XQC",
      },
    ],
    cityNameFa: "بلد",
    cityNameEn: "Balad",
    country: {
      countryCode: "IRQ",
      countryNameEn: "Iraq",
      countryNameFa: "عراق",
    },
  },
  BGW: {
    airports: [
      {
        airportNameEn: "Al Rasheed",
        airportNameFa: "فرودگاه بغداد",
        airportCode: "BGW",
      },
    ],
    cityNameFa: "بغداد",
    cityNameEn: "Baghdad",
    country: {
      countryCode: "IRQ",
      countryNameEn: "Iraq",
      countryNameFa: "عراق",
    },
  },
  BMN: {
    airports: [
      {
        airportNameEn: "Bamerny",
        airportNameFa: "فرودگاه بامارنی",
        airportCode: "BMN",
      },
    ],
    cityNameFa: "بامرنی",
    cityNameEn: "Bamerny",
    country: {
      countryCode: "IRQ",
      countryNameEn: "Iraq",
      countryNameFa: "عراق",
    },
  },
  BSR: {
    airports: [
      {
        airportNameEn: "Basra",
        airportNameFa: "فرودگاه بصره",
        airportCode: "BSR",
      },
    ],
    cityNameFa: "بصره",
    cityNameEn: "Basra",
    country: {
      countryCode: "IRQ",
      countryNameEn: "Iraq",
      countryNameFa: "عراق",
    },
  },
  EBL: {
    airports: [
      {
        airportNameEn: "Erbil Intl.",
        airportNameFa: "فرودگاه اربیل",
        airportCode: "EBL",
      },
    ],
    cityNameFa: "اربیل",
    cityNameEn: "Erbil",
    country: {
      countryCode: "IRQ",
      countryNameEn: "Iraq",
      countryNameFa: "عراق",
    },
  },
  ISU: {
    airports: [
      {
        airportNameEn: "Sulaimaniyah International",
        airportNameFa: "فرودگاه بین المللی سلیمانیه",
        airportCode: "ISU",
      },
    ],
    cityNameFa: "سلیمانیه",
    cityNameEn: "Suleymanieh",
    country: {
      countryCode: "IRQ",
      countryNameEn: "Iraq",
      countryNameFa: "عراق",
    },
  },
  KIK: {
    airports: [
      {
        airportNameEn: "Kirkuk",
        airportNameFa: "فرودگاه کرکوک",
        airportCode: "KIK",
      },
    ],
    cityNameFa: "کرکوک",
    cityNameEn: "Kirkuk",
    country: {
      countryCode: "IRQ",
      countryNameEn: "Iraq",
      countryNameFa: "عراق",
    },
  },
  NJF: {
    airports: [
      {
        airportNameEn: "Al-Najaf International Airport",
        airportNameFa: "فرودگاه نجف",
        airportCode: "NJF",
      },
    ],
    cityNameFa: "نجف",
    cityNameEn: "Najaf",
    country: {
      countryCode: "IRQ",
      countryNameEn: "Iraq",
      countryNameFa: "عراق",
    },
  },
  BHO: {
    airports: [
      {
        airportNameEn: "Bhopal",
        airportNameFa: "فرودگاه راجا بهوجا",
        airportCode: "BHO",
      },
    ],
    cityNameFa: "بهوپال",
    cityNameEn: "Bhopal",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXV: {
    airports: [
      {
        airportNameEn: "Along",
        airportNameFa: "فرودگاه الونگ",
        airportCode: "IXV",
      },
    ],
    cityNameFa: "الانگ",
    cityNameEn: "Along",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  BEK: {
    airports: [
      {
        airportNameEn: "Bareli",
        airportNameFa: "فرودگاه بریلی",
        airportCode: "BEK",
      },
    ],
    cityNameFa: "بارلی",
    cityNameEn: "Bareli",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  AGX: {
    airports: [
      {
        airportNameEn: "Agatti Island",
        airportNameFa: "فرودگاه آگاتی آیسلند",
        airportCode: "AGX",
      },
    ],
    cityNameFa: "جزیره آگاتی",
    cityNameEn: "Agatti Island",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  AJL: {
    airports: [
      {
        airportNameEn: "Aizawl",
        airportNameFa: "فرودگاه لنگپوی",
        airportCode: "AJL",
      },
    ],
    cityNameFa: "ایزوال",
    cityNameEn: "Aizawl",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  AKD: {
    airports: [
      {
        airportNameEn: "Akola",
        airportNameFa: "فرودگاه اکولا",
        airportCode: "AKD",
      },
    ],
    cityNameFa: "اکولا",
    cityNameEn: "Akola",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  ATQ: {
    airports: [
      {
        airportNameEn: "Raja Sansi",
        airportNameFa: "فرودگاه بین‌المللی سری گرو رام داس جی",
        airportCode: "ATQ",
      },
    ],
    cityNameFa: "امریتسار",
    cityNameEn: "Amritsar",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  BBI: {
    airports: [
      {
        airportNameEn: "Bhubaneswar",
        airportNameFa: "فرودگاه بیجو پاتنایک",
        airportCode: "BBI",
      },
    ],
    cityNameFa: "بوبانسور",
    cityNameEn: "Bhubaneswar",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  BDQ: {
    airports: [
      {
        airportNameEn: "Vadodara",
        airportNameFa: "فرودگاه هارنی سیویل",
        airportCode: "BDQ",
      },
    ],
    cityNameFa: "وادودارا",
    cityNameEn: "Vadodara",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  BEP: {
    airports: [
      {
        airportNameEn: "Bellary",
        airportNameFa: "فرودگاه بلاری",
        airportCode: "BEP",
      },
    ],
    cityNameFa: "بلاری",
    cityNameEn: "Bellary",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  BHU: {
    airports: [
      {
        airportNameEn: "Bhavnagar",
        airportNameFa: "فرودگاه باونگر",
        airportCode: "BHU",
      },
    ],
    cityNameFa: "باونگر",
    cityNameEn: "Bhavnagar",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  BKB: {
    airports: [
      {
        airportNameEn: "Bikaner",
        airportNameFa: "فرودگاه نل",
        airportCode: "BKB",
      },
    ],
    cityNameFa: "بیکانر",
    cityNameEn: "Bikaner",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  BOM: {
    airports: [
      {
        airportNameEn: "Chhatrapati Shivaji Intl.",
        airportNameFa: "فرودگاه چاتراپاتی شیواجی",
        airportCode: "BOM",
      },
    ],
    cityNameFa: "بمبئی",
    cityNameEn: "Mumbai",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  BUP: {
    airports: [
      {
        airportNameEn: "Bhatinda",
        airportNameFa: "فرودگاه بهیسیانا ایر فورس بیس",
        airportCode: "BUP",
      },
    ],
    cityNameFa: "بهتیندا",
    cityNameEn: "Bhatinda",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  CBD: {
    airports: [
      {
        airportNameEn: "Car Nicobar",
        airportNameFa: "پایگاه نیروی هوایی کار نیکوبار",
        airportCode: "CBD",
      },
    ],
    cityNameFa: "کار نیکوبار",
    cityNameEn: "Car Nicobar",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  CCJ: {
    airports: [
      {
        airportNameEn: "Kozhikode Arpt.",
        airportNameFa: "فرودگاه بین‌المللی کالیکوت",
        airportCode: "CCJ",
      },
    ],
    cityNameFa: "کوژیکود",
    cityNameEn: "Kozhikode (CALICUT)",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  CCU: {
    airports: [
      {
        airportNameEn: "Netaji Subhas Chandra",
        airportNameFa: "فرودگاه بین‌المللی نتاجی سوباش چاندرا بوز",
        airportCode: "CCU",
      },
    ],
    cityNameFa: "کلکتا",
    cityNameEn: "Kolkata",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  CDP: {
    airports: [
      {
        airportNameEn: "Cuddapah",
        airportNameFa: "فرودگاه کوداپاه",
        airportCode: "CDP",
      },
    ],
    cityNameFa: "کداپا",
    cityNameEn: "Cuddapah",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  CJB: {
    airports: [
      {
        airportNameEn: "Peelamedu",
        airportNameFa: "فرودگاه کویمباتور",
        airportCode: "CJB",
      },
    ],
    cityNameFa: "کویمباتور",
    cityNameEn: "Coimbatore",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  COH: {
    airports: [
      {
        airportNameEn: "Cooch Behar",
        airportNameFa: "فرودگاه کوچ بیهار",
        airportCode: "COH",
      },
    ],
    cityNameFa: "کوچ بهار",
    cityNameEn: "Cooch Behar",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  COK: {
    airports: [
      {
        airportNameEn: "Cochin Intl.",
        airportNameFa: "فرودگاه بین‌المللی کوچین (ندامباسری)",
        airportCode: "COK",
      },
    ],
    cityNameFa: "فورت‌ کوچی",
    cityNameEn: "Kochi",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  DBD: {
    airports: [
      {
        airportNameEn: "Dhanbad",
        airportNameFa: "فرودگاه دانباد",
        airportCode: "DBD",
      },
    ],
    cityNameFa: "دانباد",
    cityNameEn: "Dhanbad",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  DED: {
    airports: [
      {
        airportNameEn: "Dehra Dun",
        airportNameFa: "فرودگاه جالی گرنت",
        airportCode: "DED",
      },
    ],
    cityNameFa: "دهرادون",
    cityNameEn: "Dehra Dun",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  DEL: {
    airports: [
      {
        airportNameEn: "Indira Gandhi Intl",
        airportNameFa: "فرودگاه ایندیرا گاندی",
        airportCode: "DEL",
      },
    ],
    cityNameFa: "دهلی",
    cityNameEn: "Delhi",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  DEP: {
    airports: [
      {
        airportNameEn: "Deparizo",
        airportNameFa: "فرودگاه داپورییو",
        airportCode: "DEP",
      },
    ],
    cityNameFa: "دپریزو",
    cityNameEn: "Deparizo",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  DHM: {
    airports: [
      {
        airportNameEn: "Gaggal Arpt.",
        airportNameFa: "فرودگاه گاگال",
        airportCode: "DHM",
      },
    ],
    cityNameFa: "دارامسالا",
    cityNameEn: "Dharamsala",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  DIB: {
    airports: [
      {
        airportNameEn: "Dibrugarh",
        airportNameFa: "فرودگاه دایبروگار (چابوا)",
        airportCode: "DIB",
      },
    ],
    cityNameFa: "دیبروگره",
    cityNameEn: "Dibrugarh",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  DIU: {
    airports: [
      {
        airportNameEn: "Diu",
        airportNameFa: "فرودگاه دیو",
        airportCode: "DIU",
      },
    ],
    cityNameFa: "دیو",
    cityNameEn: "Diu",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  DMU: {
    airports: [
      {
        airportNameEn: "Dimapur",
        airportNameFa: "فرودگاه دیماپور",
        airportCode: "DMU",
      },
    ],
    cityNameFa: "دیماپور",
    cityNameEn: "Dimapur",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  GAY: {
    airports: [
      {
        airportNameEn: "Gaya",
        airportNameFa: "فرودگاه گایا",
        airportCode: "GAY",
      },
    ],
    cityNameFa: "گایا",
    cityNameEn: "Gaya",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  GOI: {
    airports: [
      {
        airportNameEn: "Dabolim",
        airportNameFa: "فرودگاه دابولیم",
        airportCode: "GOI",
      },
    ],
    cityNameFa: "گوا",
    cityNameEn: "Goa",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  GOP: {
    airports: [
      {
        airportNameEn: "Gorakhpur",
        airportNameFa: "فرودگاه گوراکپور",
        airportCode: "GOP",
      },
    ],
    cityNameFa: "گوراکپور",
    cityNameEn: "Gorakhpur",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  GUX: {
    airports: [
      {
        airportNameEn: "Guna",
        airportNameFa: "فرودگاه گونا",
        airportCode: "GUX",
      },
    ],
    cityNameFa: "گونا",
    cityNameEn: "Guna",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  GWL: {
    airports: [
      {
        airportNameEn: "Gwalior",
        airportNameFa: "فرودگاه گوالیور",
        airportCode: "GWL",
      },
    ],
    cityNameFa: "گوالیا",
    cityNameEn: "Gwalior",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  HBX: {
    airports: [
      {
        airportNameEn: "Hubli",
        airportNameFa: "فرودگاه هوبلی -دارودا",
        airportCode: "HBX",
      },
    ],
    cityNameFa: "هوبلی",
    cityNameEn: "Hubli",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  HJR: {
    airports: [
      {
        airportNameEn: "Khajuraho",
        airportNameFa: "فرودگاه خاجوراهو",
        airportCode: "HJR",
      },
    ],
    cityNameFa: "خجورهو",
    cityNameEn: "Khajuraho",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  HSS: {
    airports: [
      {
        airportNameEn: "Hissar",
        airportNameFa: "فرودگاه هیسار",
        airportCode: "HSS",
      },
    ],
    cityNameFa: "حصار",
    cityNameEn: "Hissar",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  HYD: {
    airports: [
      {
        airportNameEn: "Hyderabad Arpt.",
        airportNameFa: "فرودگاه بین‌المللی راجیو گاندی(فرودگاه بگومپت)",
        airportCode: "HYD",
      },
    ],
    cityNameFa: "حیدرآباد",
    cityNameEn: "Hyderabad",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IDR: {
    airports: [
      {
        airportNameEn: "Devi Ahilyabai Holkar",
        airportNameFa: "فرودگاه دیوی اهیلیابای هولکار",
        airportCode: "IDR",
      },
    ],
    cityNameFa: "ایندور",
    cityNameEn: "Indore",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IMF: {
    airports: [
      {
        airportNameEn: "Municipal",
        airportNameFa: "فرودگاه ایمفال",
        airportCode: "IMF",
      },
    ],
    cityNameFa: "ایمفال",
    cityNameEn: "Imphal",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  ISK: {
    airports: [
      {
        airportNameEn: "Gandhinagar Arpt",
        airportNameFa: "فرودگاه گاندی‌نگر",
        airportCode: "ISK",
      },
    ],
    cityNameFa: "ناشیک",
    cityNameEn: "Nasik",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXA: {
    airports: [
      {
        airportNameEn: "Singerbhil",
        airportNameFa: "فرودگاه اگرتلا",
        airportCode: "IXA",
      },
    ],
    cityNameFa: "اگرتلا",
    cityNameEn: "Agartala",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXB: {
    airports: [
      {
        airportNameEn: "Bagdogra",
        airportNameFa: "فرودگاه باگدوگرا",
        airportCode: "IXB",
      },
    ],
    cityNameFa: "باگدوگرا",
    cityNameEn: "Bagdogra",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXC: {
    airports: [
      {
        airportNameEn: "Chandigarh",
        airportNameFa: "فرودگاه چندی‌گر",
        airportCode: "IXC",
      },
    ],
    cityNameFa: "چندیگره",
    cityNameEn: "Chandigarh",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXD: {
    airports: [
      {
        airportNameEn: "Bamrauli",
        airportNameFa: " فرودگاه الله‌آباد",
        airportCode: "IXD",
      },
    ],
    cityNameFa: "الله آباد",
    cityNameEn: "Allahabad",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXE: {
    airports: [
      {
        airportNameEn: "Bajpe",
        airportNameFa: "فرودگاه منگالور (هند)",
        airportCode: "IXE",
      },
    ],
    cityNameFa: "مانگالور",
    cityNameEn: "Mangalore",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXG: {
    airports: [
      {
        airportNameEn: "Sambre",
        airportNameFa: "فرودگاه بلگایوم",
        airportCode: "IXG",
      },
    ],
    cityNameFa: "بلگایوم",
    cityNameEn: "Belgaum",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXH: {
    airports: [
      {
        airportNameEn: "Kailashahar",
        airportNameFa: "فرودگاه کایلاشهر",
        airportCode: "IXH",
      },
    ],
    cityNameFa: "کایلاشهار",
    cityNameEn: "Kailashahar",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXJ: {
    airports: [
      {
        airportNameEn: "Satwari",
        airportNameFa: "فرودگاه جامو",
        airportCode: "IXJ",
      },
    ],
    cityNameFa: "جامو",
    cityNameEn: "Jammu",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXK: {
    airports: [
      {
        airportNameEn: "Keshod",
        airportNameFa: "فرودگاه کشود ",
        airportCode: "IXK",
      },
    ],
    cityNameFa: "کیشد",
    cityNameEn: "Keshod",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXL: {
    airports: [
      {
        airportNameEn: "Bakula Rimpoche",
        airportNameFa: "فرودگاه کوشک باکولا ریمپچ",
        airportCode: "IXL",
      },
    ],
    cityNameFa: "له",
    cityNameEn: "Leh",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXM: {
    airports: [
      {
        airportNameEn: "Madurai",
        airportNameFa: "فرودگاه مادوری",
        airportCode: "IXM",
      },
    ],
    cityNameFa: "مادورای",
    cityNameEn: "Madurai",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXN: {
    airports: [
      {
        airportNameEn: "Khowai",
        airportNameFa: "فرودگاه خوایی",
        airportCode: "IXN",
      },
    ],
    cityNameFa: "خوآی",
    cityNameEn: "Khowai",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXP: {
    airports: [
      {
        airportNameEn: "Pathankot",
        airportNameFa: "فرودگاه پاتانکوت",
        airportCode: "IXP",
      },
    ],
    cityNameFa: "پاتانکوت",
    cityNameEn: "Pathankot",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXQ: {
    airports: [
      {
        airportNameEn: "Kamalpur",
        airportNameFa: "فرودگاه کمال‌پور",
        airportCode: "IXQ",
      },
    ],
    cityNameFa: "کمالپور",
    cityNameEn: "Kamalpur",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXR: {
    airports: [
      {
        airportNameEn: "Birsa Munda Intl.",
        airportNameFa: "فرودگاه بیرسا موندا (رانچی) ",
        airportCode: "IXR",
      },
    ],
    cityNameFa: "رانچی",
    cityNameEn: "Ranchi",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXS: {
    airports: [
      {
        airportNameEn: "Kumbhirgram",
        airportNameFa: "فرودگاه سیچار (کومبهیرگرام) ",
        airportCode: "IXS",
      },
    ],
    cityNameFa: "سیلچر",
    cityNameEn: "Silchar",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXT: {
    airports: [
      {
        airportNameEn: "Pasighat",
        airportNameFa: "فرودگاه پاسیگات",
        airportCode: "IXT",
      },
    ],
    cityNameFa: "پاسیقات",
    cityNameEn: "Pasighat",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  VNS: {
    airports: [
      {
        airportNameEn: "Varanasi",
        airportNameFa: "فرودگاه بنارس",
        airportCode: "VNS",
      },
    ],
    cityNameFa: "بنارس",
    cityNameEn: "Varanasi",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXW: {
    airports: [
      {
        airportNameEn: "Sonari",
        airportNameFa: "فرودگاه سانری",
        airportCode: "IXW",
      },
    ],
    cityNameFa: "جمشدپور",
    cityNameEn: "Jamshedpur",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXY: {
    airports: [
      {
        airportNameEn: "Kandla",
        airportNameFa: "فرودگاه کاندلا (گاندهیدهام) ",
        airportCode: "IXY",
      },
    ],
    cityNameFa: "کندلا",
    cityNameEn: "Kandla",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXZ: {
    airports: [
      {
        airportNameEn: "Port Blair",
        airportNameFa: "فرودگاه بین‌المللی ویر سوارکار",
        airportCode: "IXZ",
      },
    ],
    cityNameFa: "بندر بلر",
    cityNameEn: "Port Blair",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  JAI: {
    airports: [
      {
        airportNameEn: "Sanganeer",
        airportNameFa: "فرودگاه جیپور",
        airportCode: "JAI",
      },
    ],
    cityNameFa: "جیپور",
    cityNameEn: "Jaipur",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  JDH: {
    airports: [
      {
        airportNameEn: "Jodhpur",
        airportNameFa: "فرودگاه جوداپور",
        airportCode: "JDH",
      },
    ],
    cityNameFa: "جادهاپور",
    cityNameEn: "Jodhpur",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  JGA: {
    airports: [
      {
        airportNameEn: "Govardhanpur",
        airportNameFa: "فرودگاه جام‌نگر",
        airportCode: "JGA",
      },
    ],
    cityNameFa: "جامنگر",
    cityNameEn: "Jamnagar",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  JGB: {
    airports: [
      {
        airportNameEn: "Jagdalpur",
        airportNameFa: "فرودگاه جگدالپر",
        airportCode: "JGB",
      },
    ],
    cityNameFa: "جگدلپور",
    cityNameEn: "Jagdalpur",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  JLR: {
    airports: [
      {
        airportNameEn: "Jabalpur",
        airportNameFa: "فرودگاه جبال‌پور",
        airportCode: "JLR",
      },
    ],
    cityNameFa: "جبالپور",
    cityNameEn: "Jabalpur",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  JRH: {
    airports: [
      {
        airportNameEn: "Rowriah",
        airportNameFa: "فرودگاه جورهت",
        airportCode: "JRH",
      },
    ],
    cityNameFa: "جرهت",
    cityNameEn: "Jorhat",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  KLH: {
    airports: [
      {
        airportNameEn: "Kolhapur",
        airportNameFa: "فرودگاه کولاپور",
        airportCode: "KLH",
      },
    ],
    cityNameFa: "کولاپور",
    cityNameEn: "Kolhapur",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  KNU: {
    airports: [
      {
        airportNameEn: "Kanpur",
        airportNameFa: "فرودگاه کان‌پور",
        airportCode: "KNU",
      },
    ],
    cityNameFa: "کانپور",
    cityNameEn: "Kanpur",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  KTU: {
    airports: [
      {
        airportNameEn: "Kota",
        airportNameFa: "فرودگاه کوتا",
        airportCode: "KTU",
      },
    ],
    cityNameFa: "کوتا",
    cityNameEn: "Kota",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  KUU: {
    airports: [
      {
        airportNameEn: "Kullu Manali",
        airportNameFa: "فرودگاه بونتار (کولو)",
        airportCode: "KUU",
      },
    ],
    cityNameFa: "بنتار کول",
    cityNameEn: "Bhuntar Kullu.",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  LDA: {
    airports: [
      {
        airportNameEn: "Malda",
        airportNameFa: "فرودگاه مالدا",
        airportCode: "LDA",
      },
    ],
    cityNameFa: "ملدا",
    cityNameEn: "Malda",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  LKO: {
    airports: [
      {
        airportNameEn: "Amausi",
        airportNameFa: "فرودگاه اماوسی",
        airportCode: "LKO",
      },
    ],
    cityNameFa: "لکنو",
    cityNameEn: "Lucknow",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  LUH: {
    airports: [
      {
        airportNameEn: "Amritsar",
        airportNameFa: "فرودگاه سهنول",
        airportCode: "LUH",
      },
    ],
    cityNameFa: "لودهیانا",
    cityNameEn: "Ludhiana",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  MAA: {
    airports: [
      {
        airportNameEn: "Madras Intl.",
        airportNameFa: "فرودگاه بین‌المللی چنای (مادراس)",
        airportCode: "MAA",
      },
    ],
    cityNameFa: "چننی/مادراس",
    cityNameEn: "Chennai/Madras",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  MYQ: {
    airports: [
      {
        airportNameEn: "Mysore",
        airportNameFa: "فرودگاه مایسور مانداکالی",
        airportCode: "MYQ",
      },
    ],
    cityNameFa: "میسور",
    cityNameEn: "Mysore",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  MZU: {
    airports: [
      {
        airportNameEn: "Muzaffarpur",
        airportNameFa: "فرودگاه مظفرپور",
        airportCode: "MZU",
      },
    ],
    cityNameFa: "مظفرپور",
    cityNameEn: "Muzaffarpur",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  NDC: {
    airports: [
      {
        airportNameEn: "Nanded",
        airportNameFa: "فرودگاه ناندد",
        airportCode: "NDC",
      },
    ],
    cityNameFa: "ناندد",
    cityNameEn: "Nanded",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  NMB: {
    airports: [
      {
        airportNameEn: "Daman",
        airportNameFa: "فرودگاه دامان",
        airportCode: "NMB",
      },
    ],
    cityNameFa: "دامن",
    cityNameEn: "Daman",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  NVY: {
    airports: [
      {
        airportNameEn: "Neyveli",
        airportNameFa: "فرودگاه نیولی",
        airportCode: "NVY",
      },
    ],
    cityNameFa: "نیوولی",
    cityNameEn: "Neyveli",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  PAB: {
    airports: [
      {
        airportNameEn: "Bilaspur",
        airportNameFa: "فرودگاه بیلاسپور",
        airportCode: "PAB",
      },
    ],
    cityNameFa: "بیلاسپور",
    cityNameEn: "Bilaspur",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  PAT: {
    airports: [
      {
        airportNameEn: "Patna",
        airportNameFa: "فرودگاه لوک نایاک جایاپراکاش",
        airportCode: "PAT",
      },
    ],
    cityNameFa: "پاتنا",
    cityNameEn: "Patna",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  PBD: {
    airports: [
      {
        airportNameEn: "Porbandar",
        airportNameFa: "فرودگاه پربندر",
        airportCode: "PBD",
      },
    ],
    cityNameFa: "پوربندر",
    cityNameEn: "Porbandar",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  PGH: {
    airports: [
      {
        airportNameEn: "Pantnagar",
        airportNameFa: "فرودگاه پانتناگار",
        airportCode: "PGH",
      },
    ],
    cityNameFa: "پنتنگر",
    cityNameEn: "Pantnagar",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  PNQ: {
    airports: [
      {
        airportNameEn: "Lohegaon",
        airportNameFa: "فرودگاه پون",
        airportCode: "PNQ",
      },
    ],
    cityNameFa: "پونه",
    cityNameEn: "Pune",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  PNY: {
    airports: [
      {
        airportNameEn: "Pondicherry",
        airportNameFa: "فرودگاه پاندیچری",
        airportCode: "PNY",
      },
    ],
    cityNameFa: "پوندیچری",
    cityNameEn: "Pondicherry",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  PUT: {
    airports: [
      {
        airportNameEn: "Puttaprathe",
        airportNameFa: "فرودگاه پوتاپراته",
        airportCode: "PUT",
      },
    ],
    cityNameFa: "پاتاپارتی",
    cityNameEn: "Puttaparthi",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  PYB: {
    airports: [
      {
        airportNameEn: "Jeypore",
        airportNameFa: "فرودگاه جیپور",
        airportCode: "PYB",
      },
    ],
    cityNameFa: "جیپر",
    cityNameEn: "Jeypore",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  RAJ: {
    airports: [
      {
        airportNameEn: "Civil",
        airportNameFa: "فرودگاه راجکوت",
        airportCode: "RAJ",
      },
    ],
    cityNameFa: "راجکات",
    cityNameEn: "Rajkot",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  RGH: {
    airports: [
      {
        airportNameEn: "Balurghat",
        airportNameFa: "فرودگاه بالورقات",
        airportCode: "RGH",
      },
    ],
    cityNameFa: "بالورقات",
    cityNameEn: "Balurghat",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  RJA: {
    airports: [
      {
        airportNameEn: "Rajahmundry",
        airportNameFa: "فرودگاه راجاماهندری",
        airportCode: "RJA",
      },
    ],
    cityNameFa: "راجاماهندری",
    cityNameEn: "Rajahmundry",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  RJI: {
    airports: [
      {
        airportNameEn: "Rajouri",
        airportNameFa: "فرودگاه راجوری",
        airportCode: "RJI",
      },
    ],
    cityNameFa: "راجوری",
    cityNameEn: "Rajouri",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  RPR: {
    airports: [
      {
        airportNameEn: "Raipur",
        airportNameFa: "فرودگاه راجپور",
        airportCode: "RPR",
      },
    ],
    cityNameFa: "رایپور",
    cityNameEn: "Raipur",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  RTC: {
    airports: [
      {
        airportNameEn: "Ratnagiri",
        airportNameFa: "فرودگاه رانتاگیری",
        airportCode: "RTC",
      },
    ],
    cityNameFa: "رتنگیری",
    cityNameEn: "Ratnagiri",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  RUP: {
    airports: [
      {
        airportNameEn: "Rupsi",
        airportNameFa: "فرودگاه راپسی",
        airportCode: "RUP",
      },
    ],
    cityNameFa: "روپسی",
    cityNameEn: "Rupsi",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  SHL: {
    airports: [
      {
        airportNameEn: "Barapani",
        airportNameFa: "فرودگاه شیلانگ",
        airportCode: "SHL",
      },
    ],
    cityNameFa: "شیلونگ",
    cityNameEn: "Shillong",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  SLV: {
    airports: [
      {
        airportNameEn: "Simla",
        airportNameFa: "فرودگاه شیملا",
        airportCode: "SLV",
      },
    ],
    cityNameFa: "سیملا",
    cityNameEn: "Simla",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  SSE: {
    airports: [
      {
        airportNameEn: "Sholapur",
        airportNameFa: "فرودگاه سولاپور",
        airportCode: "SSE",
      },
    ],
    cityNameFa: "شولاپور",
    cityNameEn: "Sholapur",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  STV: {
    airports: [
      {
        airportNameEn: "Surat",
        airportNameFa: "فرودگاه سورات",
        airportCode: "STV",
      },
    ],
    cityNameFa: "سورات",
    cityNameEn: "Surat",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  SXR: {
    airports: [
      {
        airportNameEn: "Srinagar",
        airportNameFa: "فرودگاه سرینگر",
        airportCode: "SXR",
      },
    ],
    cityNameFa: "سریناگار",
    cityNameEn: "Srinagar",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  SXV: {
    airports: [
      {
        airportNameEn: "Salem",
        airportNameFa: "فرودگاه سالم (هند)",
        airportCode: "SXV",
      },
    ],
    cityNameFa: "سالم",
    cityNameEn: "Salem",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  TEI: {
    airports: [
      {
        airportNameEn: "Tezu",
        airportNameFa: "فرودگاه تزو",
        airportCode: "TEI",
      },
    ],
    cityNameFa: "تزو",
    cityNameEn: "Tezu",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  TEZ: {
    airports: [
      {
        airportNameEn: "Salonibari",
        airportNameFa: "فرودگاه تزپور",
        airportCode: "TEZ",
      },
    ],
    cityNameFa: "تزپور",
    cityNameEn: "Tezpur",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  TIR: {
    airports: [
      {
        airportNameEn: "Tirupati",
        airportNameFa: "فرودگاه تیروپاتی",
        airportCode: "TIR",
      },
    ],
    cityNameFa: "تیروپاتی",
    cityNameEn: "Tirupati",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  TNI: {
    airports: [
      {
        airportNameEn: "Satna",
        airportNameFa: "فرودگاه ساتنا",
        airportCode: "TNI",
      },
    ],
    cityNameFa: "ساتنا",
    cityNameEn: "Satna",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  TRV: {
    airports: [
      {
        airportNameEn: "Thiruvananthapuram Intl.",
        airportNameFa: "فرودگاه بین‌المللی تریواندروم",
        airportCode: "TRV",
      },
    ],
    cityNameFa: "تریواندروم",
    cityNameEn: "Trivandrum",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  TRZ: {
    airports: [
      {
        airportNameEn: "Tiruchchirappalli",
        airportNameFa: "فرودگاه تیروچیراپالی",
        airportCode: "TRZ",
      },
    ],
    cityNameFa: "تیروچیراپالی",
    cityNameEn: "Tiruchchirappalli",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  UDR: {
    airports: [
      {
        airportNameEn: "Dabok",
        airportNameFa: "فرودگاه اودی‌پور",
        airportCode: "UDR",
      },
    ],
    cityNameFa: "اودیپور",
    cityNameEn: "Udaipur",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  VGA: {
    airports: [
      {
        airportNameEn: "Vijayawada",
        airportNameFa: "فرودگاه ویجیاوادا",
        airportCode: "VGA",
      },
    ],
    cityNameFa: "ویجیودا",
    cityNameEn: "Vijayawada",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  VTZ: {
    airports: [
      {
        airportNameEn: "Vishakhapatnam",
        airportNameFa: "فرودگاه ویساکاپاتنام",
        airportCode: "VTZ",
      },
    ],
    cityNameFa: "ویشاخاپاتنام",
    cityNameEn: "Vishakhapatnam",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  WGC: {
    airports: [
      {
        airportNameEn: "Warangal",
        airportNameFa: "فرودگاه واراناگل",
        airportCode: "WGC",
      },
    ],
    cityNameFa: "واراناگل",
    cityNameEn: "Warangal",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  ZER: {
    airports: [
      {
        airportNameEn: "Zero",
        airportNameFa: "فرودگاه زیرو",
        airportCode: "ZER",
      },
    ],
    cityNameFa: "زیرو",
    cityNameEn: "Zero",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  AGR: {
    airports: [
      {
        airportNameEn: "Kheria",
        airportNameFa: "فرودگاه آگرا/آگرا ایر فورس استیشن",
        airportCode: "AGR",
      },
    ],
    cityNameFa: "آگرا",
    cityNameEn: "Agra",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  AMD: {
    airports: [
      {
        airportNameEn: "Ahmedabad",
        airportNameFa: "فرودگاه بین‌المللی سردار ولابهبهی پتل",
        airportCode: "AMD",
      },
    ],
    cityNameFa: "احمدآباد",
    cityNameEn: "Ahmedabad",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  BHJ: {
    airports: [
      {
        airportNameEn: "Rudra Mata",
        airportNameFa: "فرودگاه بوج / پایگاه هوایی رودرا ماتا بوج",
        airportCode: "BHJ",
      },
    ],
    cityNameFa: "بوج",
    cityNameEn: "Bhuj",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  BLR: {
    airports: [
      {
        airportNameEn: "Bangalore Intl. Arpt.",
        airportNameFa: "فرودگاه بین‌المللی بنگالورو (فرودگاه بین‌المللی هل بنگلر)",
        airportCode: "BLR",
      },
    ],
    cityNameFa: "بنگلور",
    cityNameEn: "Bangalore",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  GAU: {
    airports: [
      {
        airportNameEn: "Borjhar",
        airportNameFa: "فرودگاه بین‌المللی لوکپریرا گوپیناز بوردولوئی",
        airportCode: "GAU",
      },
    ],
    cityNameFa: "گاواهاتی",
    cityNameEn: "Gawahati",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXI: {
    airports: [
      {
        airportNameEn: "Lilabari",
        airportNameFa: "فرودگاه لیلاباری (نورث لاخیمپور)",
        airportCode: "IXI",
      },
    ],
    cityNameFa: "لیلاباری",
    cityNameEn: "Lilabari",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  IXU: {
    airports: [
      {
        airportNameEn: "Chikkalthana",
        airportNameFa: "فرودگاه اورنگ‌آباد (چیکالتانا)",
        airportCode: "IXU",
      },
    ],
    cityNameFa: "اورنگآباد",
    cityNameEn: "Aurangabad",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  JSA: {
    airports: [
      {
        airportNameEn: "Jaisalmer",
        airportNameFa: "فرودگاه جیزلمر",
        airportCode: "JSA",
      },
    ],
    cityNameFa: "جاسالمیر",
    cityNameEn: "Jaisalmer",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  NAG: {
    airports: [
      {
        airportNameEn: "Sonegaon",
        airportNameFa: "فرودگاه بین‌المللی دکتر باباساهب آمبدکار",
        airportCode: "NAG",
      },
    ],
    cityNameFa: "ناگپور",
    cityNameEn: "Nagpur",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  RRK: {
    airports: [
      {
        airportNameEn: "Rourkela",
        airportNameFa: "فرودگاه رورکلا",
        airportCode: "RRK",
      },
    ],
    cityNameFa: "رورکلا",
    cityNameEn: "Rourkela",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  TJV: {
    airports: [
      {
        airportNameEn: "Thanjavur",
        airportNameFa: "فرودگاه تانجاوور",
        airportCode: "TJV",
      },
    ],
    cityNameFa: "تانجاوور",
    cityNameEn: "Thanjavur",
    country: {
      countryCode: "IND",
      countryNameEn: "India",
      countryNameFa: "هند",
    },
  },
  KAM: {
    airports: [
      {
        airportNameEn: "Kamaran Is",
        airportNameFa: "فرودگاه کاماران",
        airportCode: "KAM",
      },
    ],
    cityNameFa: "کامران است",
    cityNameEn: "Kamaran Is",
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  AXK: {
    airports: [
      {
        airportNameEn: "Ataq",
        airportNameFa: "فرودگاه عتاق",
        airportCode: "AXK",
      },
    ],
    cityNameFa: "عتاق",
    cityNameEn: "Ataq",
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  BHN: {
    airports: [
      {
        airportNameEn: "Beihan",
        airportNameFa: "فرودگاه بیهن",
        airportCode: "BHN",
      },
    ],
    cityNameFa: "بیهان",
    cityNameEn: "Beihan",
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  BUK: {
    airports: [
      {
        airportNameEn: "Albuq",
        airportNameFa: "فرودگاه البوک",
        airportCode: "BUK",
      },
    ],
    cityNameFa: "البوق",
    cityNameEn: "Albuq",
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  EAB: {
    airports: [
      {
        airportNameEn: "Abbse Airport",
        airportNameFa: "فرودگاه آبسه",
        airportCode: "EAB",
      },
    ],
    cityNameFa: "ابسه",
    cityNameEn: "Abbse",
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  GXF: {
    airports: [
      {
        airportNameEn: "Seiyun",
        airportNameFa: "فرودگاه شهر سیئون",
        airportCode: "GXF",
      },
    ],
    cityNameFa: "سیئون",
    cityNameEn: "Seiyun",
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  HOD: {
    airports: [
      {
        airportNameEn: "Hodeidah Arpt",
        airportNameFa: "فرودگاه بین‌المللی هودیدا",
        airportCode: "HOD",
      },
    ],
    cityNameFa: "حدیده",
    cityNameEn: "Hodeidah",
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  IHN: {
    airports: [
      {
        airportNameEn: "Qishn",
        airportNameFa: "فرودگاه قیشن",
        airportCode: "IHN",
      },
    ],
    cityNameFa: "قیشن",
    cityNameEn: "Qishn",
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  MYN: {
    airports: [
      {
        airportNameEn: "Mareb",
        airportNameFa: "فرودگاه مأرب",
        airportCode: "MYN",
      },
    ],
    cityNameFa: "مارب",
    cityNameEn: "Mareb",
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  SAH: {
    airports: [
      {
        airportNameEn: "El Rahaba Arpt.",
        airportNameFa: "فرودگاه بین‌المللی صنعا",
        airportCode: "SAH",
      },
    ],
    cityNameFa: "صنعا",
    cityNameEn: "Sanaa",
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  SCT: {
    airports: [
      {
        airportNameEn: "Socotra",
        airportNameFa: "فرودگاه سقطرا",
        airportCode: "SCT",
      },
    ],
    cityNameFa: "سقطری",
    cityNameEn: "Socotra",
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  SYE: {
    airports: [
      {
        airportNameEn: "Sadah",
        airportNameFa: "فرودگاه صعده",
        airportCode: "SYE",
      },
    ],
    cityNameFa: "سادا",
    cityNameEn: "Sadah",
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  TAI: {
    airports: [
      {
        airportNameEn: "Al Janad",
        airportNameFa: "فرودگاه بین‌المللی تعز",
        airportCode: "TAI",
      },
    ],
    cityNameFa: "تعزیه",
    cityNameEn: "Taizz",
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  WDA: {
    airports: [
      {
        airportNameEn: "Wadi Ain",
        airportNameFa: "فرودگاه وادی العین",
        airportCode: "WDA",
      },
    ],
    cityNameFa: "وادی عین",
    cityNameEn: "Wadi Ain",
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  AAY: {
    airports: [
      {
        airportNameEn: "Al Ghaydah",
        airportNameFa: "فرودگاه الغیضه",
        airportCode: "AAY",
      },
    ],
    cityNameFa: "الغیضه",
    cityNameEn: "Al Ghaydah",
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  ADE: {
    airports: [
      {
        airportNameEn: "Intl.",
        airportNameFa: "فرودگاه بین‌المللی عدن",
        airportCode: "ADE",
      },
    ],
    cityNameFa: "آدن",
    cityNameEn: "Aden",
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  RIY: {
    airports: [
      {
        airportNameEn: "Riyan Mukalla",
        airportNameFa: "فرودگاه ریان موکالا",
        airportCode: "RIY",
      },
    ],
    cityNameFa: "رایان موکالا",
    cityNameEn: "Riyan Mukalla",
    country: {
      countryCode: "YEM",
      countryNameEn: "Yemen",
      countryNameFa: "یمن",
    },
  },
  DXB: {
    airports: [
      {
        airportNameEn: "Dubai",
        airportNameFa: "فرودگاه دبی",
        airportCode: "DXB",
      },
      {
        airportNameEn: "Al Maktoum International",
        airportNameFa: "فرودگاه دبی وورلد سنترال",
        airportCode: "DWC",
      },
      {
        airportNameEn: "Dubai Bus Station Airport",
        airportNameFa: "ایستگاه اتوبوس دبی",
        airportCode: "XNB",
      },
    ],
    cityNameFa: "دبی",
    cityNameEn: "Dubai",
    country: {
      countryCode: "ARE",
      countryNameEn: "United Arab Emirates",
      countryNameFa: "امارات متحده عربی",
    },
  },
  SHJ: {
    airports: [
      {
        airportNameEn: "Sharjah",
        airportNameFa: "فرودگاه بین‌المللی شارجه",
        airportCode: "SHJ",
      },
    ],
    cityNameFa: "شارجه",
    cityNameEn: "Sharjah",
    country: {
      countryCode: "ARE",
      countryNameEn: "United Arab Emirates",
      countryNameFa: "امارات متحده عربی",
    },
  },
  AUH: {
    airports: [
      {
        airportNameEn: "Abu Dhabi Intl.",
        airportNameFa: "فرودگاه بین‌المللی ابوظبی",
        airportCode: "AUH",
      },
      {
        airportNameEn: "Bateen",
        airportNameFa: "فرودگاه باتین",
        airportCode: "AZI",
      },
      {
        airportNameEn: "Al Dhafra Military Apt",
        airportNameFa: "فرودگاه الظفره",
        airportCode: "DHF",
      },
      {
        airportNameEn: "Abu Dhabi Bus Station",
        airportNameFa: "ایستگاه اتوبوس ابوظبی",
        airportCode: "ZVJ",
      },
    ],
    cityNameFa: "ابوظبی",
    cityNameEn: "Abu Dhabi",
    country: {
      countryCode: "ARE",
      countryNameEn: "United Arab Emirates",
      countryNameFa: "امارات متحده عربی",
    },
  },
  FJR: {
    airports: [
      {
        airportNameEn: "Fujairah Intl",
        airportNameFa: "فرودگاه بین‌المللی فجیره (کارگو اونلی)",
        airportCode: "FJR",
      },
    ],
    cityNameFa: "فوجیره",
    cityNameEn: "Al Fujairah",
    country: {
      countryCode: "ARE",
      countryNameEn: "United Arab Emirates",
      countryNameFa: "امارات متحده عربی",
    },
  },
  NHD: {
    airports: [
      {
        airportNameEn: "Minhad Ab",
        airportNameFa: "فرودگاه مینهاد ای بی",
        airportCode: "NHD",
      },
    ],
    cityNameFa: "مینهد آب",
    cityNameEn: "Minhad Ab",
    country: {
      countryCode: "ARE",
      countryNameEn: "United Arab Emirates",
      countryNameFa: "امارات متحده عربی",
    },
  },
  RKT: {
    airports: [
      {
        airportNameEn: "Ras Al Khaimah",
        airportNameFa: "فرودگاه بین‌المللی راس الخیمه",
        airportCode: "RKT",
      },
    ],
    cityNameFa: "راس الخیمه",
    cityNameEn: "Ras Al Khaimah",
    country: {
      countryCode: "ARE",
      countryNameEn: "United Arab Emirates",
      countryNameFa: "امارات متحده عربی",
    },
  },
  AAN: {
    airports: [
      {
        airportNameEn: "Al Ain",
        airportNameFa: "فرودگاه بین المللی العین",
        airportCode: "AAN",
      },
    ],
    cityNameFa: "العین",
    cityNameEn: "Al Ain",
    country: {
      countryCode: "ARE",
      countryNameEn: "United Arab Emirates",
      countryNameFa: "امارات متحده عربی",
    },
  },
  BAK: {
    airports: [
      {
        airportNameEn: "Heydar Aliyev Intl.",
        airportNameFa: "فرودگاه بین‌المللی حیدر علی‌اف (بینا) ",
        airportCode: "GYD",
      },
      {
        airportNameEn: "Zabrat",
        airportNameFa: "فرودگاه زبرات",
        airportCode: "ZXT",
      },
    ],
    cityNameFa: "باکو",
    cityNameEn: "Baku",
    country: {
      countryCode: "AZE",
      countryNameEn: "Azerbaijan",
      countryNameFa: "جمهوری آذربایجان",
    },
  },
  KVD: {
    airports: [
      {
        airportNameEn: "Gyandzha",
        airportNameFa: "فرودگاه بین‌المللی گنجه",
        airportCode: "KVD",
      },
    ],
    cityNameFa: "گنجه",
    cityNameEn: "Ganja",
    country: {
      countryCode: "AZE",
      countryNameEn: "Azerbaijan",
      countryNameFa: "جمهوری آذربایجان",
    },
  },
  NAJ: {
    airports: [
      {
        airportNameEn: "Nakhichevan",
        airportNameFa: "فرودگاه نخیچوان",
        airportCode: "NAJ",
      },
    ],
    cityNameFa: "نخجوان",
    cityNameEn: "Nakhichevan",
    country: {
      countryCode: "AZE",
      countryNameEn: "Azerbaijan",
      countryNameFa: "جمهوری آذربایجان",
    },
  },
  TBS: {
    airports: [
      {
        airportNameEn: "Tbilisi",
        airportNameFa: "فرودگاه تفلیس",
        airportCode: "TBS",
      },
    ],
    cityNameFa: "تفلیس",
    cityNameEn: "Tbilisi",
    country: {
      countryCode: "GEO",
      countryNameEn: "Georgia",
      countryNameFa: "گرجستان",
    },
  },
  BUS: {
    airports: [
      {
        airportNameEn: "Batumi",
        airportNameFa: "فرودگاه باتومی",
        airportCode: "BUS",
      },
    ],
    cityNameFa: "باتومی",
    cityNameEn: "Batumi",
    country: {
      countryCode: "GEO",
      countryNameEn: "Georgia",
      countryNameFa: "گرجستان",
    },
  },
  KUT: {
    airports: [
      {
        airportNameEn: "Kopitnari",
        airportNameFa: "فرودگاه بین‌المللی کوتایسی",
        airportCode: "KUT",
      },
    ],
    cityNameFa: "کوتایسی",
    cityNameEn: "Kutaisi",
    country: {
      countryCode: "GEO",
      countryNameEn: "Georgia",
      countryNameFa: "گرجستان",
    },
  },
  SUI: {
    airports: [
      {
        airportNameEn: "Babusheri",
        airportNameFa: "فرودگاه سوخومی درندا",
        airportCode: "SUI",
      },
    ],
    cityNameFa: "سوخومی",
    cityNameEn: "Sukhumi",
    country: {
      countryCode: "GEO",
      countryNameEn: "Georgia",
      countryNameFa: "گرجستان",
    },
  },
  SKD: {
    airports: [
      {
        airportNameEn: "Samarkand",
        airportNameFa: "فرودگاه سمرقند",
        airportCode: "SKD",
      },
    ],
    cityNameFa: "سمرقند",
    cityNameEn: "Samarkand",
    country: {
      countryCode: "UZB",
      countryNameEn: "Uzbekistan",
      countryNameFa: "ازبکستان",
    },
  },
  AFS: {
    airports: [
      {
        airportNameEn: "Zarafshan",
        airportNameFa: "فرودگاه زرافشان",
        airportCode: "AFS",
      },
    ],
    cityNameFa: "زرافشان",
    cityNameEn: "Zarafshan",
    country: {
      countryCode: "UZB",
      countryNameEn: "Uzbekistan",
      countryNameFa: "ازبکستان",
    },
  },
  AZN: {
    airports: [
      {
        airportNameEn: "Andizhan",
        airportNameFa: "فرودگاه اندیجان",
        airportCode: "AZN",
      },
    ],
    cityNameFa: "اندیژان",
    cityNameEn: "Andizhan",
    country: {
      countryCode: "UZB",
      countryNameEn: "Uzbekistan",
      countryNameFa: "ازبکستان",
    },
  },
  BHK: {
    airports: [
      {
        airportNameEn: "Bukhara",
        airportNameFa: "فرودگاه بین‌المللی بخارا",
        airportCode: "BHK",
      },
    ],
    cityNameFa: "بخارا",
    cityNameEn: "Bukhara",
    country: {
      countryCode: "UZB",
      countryNameEn: "Uzbekistan",
      countryNameFa: "ازبکستان",
    },
  },
  FEG: {
    airports: [
      {
        airportNameEn: "Fergana",
        airportNameFa: "فرودگاه فرغانه",
        airportCode: "FEG",
      },
    ],
    cityNameFa: "فرغانه",
    cityNameEn: "Fergana",
    country: {
      countryCode: "UZB",
      countryNameEn: "Uzbekistan",
      countryNameFa: "ازبکستان",
    },
  },
  NCU: {
    airports: [
      {
        airportNameEn: "Nukus",
        airportNameFa: "فرودگاه نوکوس",
        airportCode: "NCU",
      },
    ],
    cityNameFa: "نوکوس",
    cityNameEn: "Nukus",
    country: {
      countryCode: "UZB",
      countryNameEn: "Uzbekistan",
      countryNameFa: "ازبکستان",
    },
  },
  NMA: {
    airports: [
      {
        airportNameEn: "Namangan",
        airportNameFa: "فرودگاه نامنگان",
        airportCode: "NMA",
      },
    ],
    cityNameFa: "نمنگان",
    cityNameEn: "Namangan",
    country: {
      countryCode: "UZB",
      countryNameEn: "Uzbekistan",
      countryNameFa: "ازبکستان",
    },
  },
  TAS: {
    airports: [
      {
        airportNameEn: "Yuzhny",
        airportNameFa: "فرودگاه بین‌المللی تاشکند",
        airportCode: "TAS",
      },
    ],
    cityNameFa: "تاشکند",
    cityNameEn: "Tashkent",
    country: {
      countryCode: "UZB",
      countryNameEn: "Uzbekistan",
      countryNameFa: "ازبکستان",
    },
  },
  TMJ: {
    airports: [
      {
        airportNameEn: "Termez",
        airportNameFa: "فرودگاه ترمذ",
        airportCode: "TMJ",
      },
    ],
    cityNameFa: "ترمز",
    cityNameEn: "Termez",
    country: {
      countryCode: "UZB",
      countryNameEn: "Uzbekistan",
      countryNameFa: "ازبکستان",
    },
  },
  UGC: {
    airports: [
      {
        airportNameEn: "Urgench",
        airportNameFa: "فرودگاه اورگنچ",
        airportCode: "UGC",
      },
    ],
    cityNameFa: "اورگنچ",
    cityNameEn: "Urgench",
    country: {
      countryCode: "UZB",
      countryNameEn: "Uzbekistan",
      countryNameFa: "ازبکستان",
    },
  },
  KSQ: {
    airports: [
      {
        airportNameEn: "Khanabad",
        airportNameFa: "پایگاه هوایی کارشی خان‌آباد",
        airportCode: "KSQ",
      },
    ],
    cityNameFa: "کارشی",
    cityNameEn: "Karshi",
    country: {
      countryCode: "UZB",
      countryNameEn: "Uzbekistan",
      countryNameFa: "ازبکستان",
    },
  },
  EBM: {
    airports: [
      {
        airportNameEn: "El Borma",
        airportNameFa: "فرودگاه ال بورما",
        airportCode: "EBM",
      },
    ],
    cityNameFa: "ال بورما",
    cityNameEn: "El Borma",
    country: {
      countryCode: "TUN",
      countryNameEn: "Tunisia",
      countryNameFa: "تونس",
    },
  },
  DJE: {
    airports: [
      {
        airportNameEn: "Djerba-Zarzis",
        airportNameFa: "فرودگاه بین‌المللی دیربا–زارزیس",
        airportCode: "DJE",
      },
    ],
    cityNameFa: "جربا",
    cityNameEn: "Djerba",
    country: {
      countryCode: "TUN",
      countryNameEn: "Tunisia",
      countryNameFa: "تونس",
    },
  },
  GAF: {
    airports: [
      {
        airportNameEn: "Gafsa",
        airportNameFa: "فرودگاه بین‌المللی گافساکسار",
        airportCode: "GAF",
      },
    ],
    cityNameFa: "گفسا",
    cityNameEn: "Gafsa",
    country: {
      countryCode: "TUN",
      countryNameEn: "Tunisia",
      countryNameFa: "تونس",
    },
  },
  GAE: {
    airports: [
      {
        airportNameEn: "Gabes",
        airportNameFa: "فرودگاه بین‌المللی گابیس-ماتماتا",
        airportCode: "GAE",
      },
    ],
    cityNameFa: "گابس",
    cityNameEn: "Gabes",
    country: {
      countryCode: "TUN",
      countryNameEn: "Tunisia",
      countryNameFa: "تونس",
    },
  },
  MIR: {
    airports: [
      {
        airportNameEn: "Habib Bourguiba",
        airportNameFa: "فرودگاه بین‌المللی منستیر – حبیب بورقیبه",
        airportCode: "MIR",
      },
    ],
    cityNameFa: "منستیر",
    cityNameEn: "Monastir",
    country: {
      countryCode: "TUN",
      countryNameEn: "Tunisia",
      countryNameFa: "تونس",
    },
  },
  TBJ: {
    airports: [
      {
        airportNameEn: "Tabarka",
        airportNameFa: "فرودگاه بین‌المللی عین دراهم الدولی",
        airportCode: "TBJ",
      },
    ],
    cityNameFa: "تبرک",
    cityNameEn: "Tabarka",
    country: {
      countryCode: "TUN",
      countryNameEn: "Tunisia",
      countryNameFa: "تونس",
    },
  },
  TOE: {
    airports: [
      {
        airportNameEn: "Tozeur",
        airportNameFa: "فرودگاه بین‌المللی  توزر نفتا",
        airportCode: "TOE",
      },
    ],
    cityNameFa: "توزور",
    cityNameEn: "Tozeur",
    country: {
      countryCode: "TUN",
      countryNameEn: "Tunisia",
      countryNameFa: "تونس",
    },
  },
  TUN: {
    airports: [
      {
        airportNameEn: "Carthage",
        airportNameFa: "فرودگاه بین‌المللی تونس-کارتاژ",
        airportCode: "TUN",
      },
    ],
    cityNameFa: "تونس",
    cityNameEn: "Tunis",
    country: {
      countryCode: "TUN",
      countryNameEn: "Tunisia",
      countryNameFa: "تونس",
    },
  },
  SFA: {
    airports: [
      {
        airportNameEn: "Sfax Thyna",
        airportNameFa: "فرودگاه بین‌المللی سفاکس-تینا",
        airportCode: "SFA",
      },
    ],
    cityNameFa: "اسفاکس",
    cityNameEn: "Sfax",
    country: {
      countryCode: "TUN",
      countryNameEn: "Tunisia",
      countryNameFa: "تونس",
    },
  },
  EVN: {
    airports: [
      {
        airportNameEn: "Zvartnots",
        airportNameFa: "فرودگاه زوارتنوس",
        airportCode: "EVN",
      },
    ],
    cityNameFa: "ایروان",
    cityNameEn: "Yerevan",
    country: {
      countryCode: "ARM",
      countryNameEn: "Armenia",
      countryNameFa: "ارمنستان",
    },
  },
  LWN: {
    airports: [
      {
        airportNameEn: "Gyoumri",
        airportNameFa: "فرودگاه شیراک",
        airportCode: "LWN",
      },
    ],
    cityNameFa: "شیراک",
    cityNameEn: "Gyoumri",
    country: {
      countryCode: "ARM",
      countryNameEn: "Armenia",
      countryNameFa: "ارمنستان",
    },
  },
  BST: {
    airports: [
      {
        airportNameEn: "Bost",
        airportNameFa: "فرودگاه بوست",
        airportCode: "BST",
      },
    ],
    cityNameFa: "بوست",
    cityNameEn: "Bost",
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  CCN: {
    airports: [
      {
        airportNameEn: "Chakcharan",
        airportNameFa: "فرودگاه چغچران",
        airportCode: "CCN",
      },
    ],
    cityNameFa: "چغچران",
    cityNameEn: "Chakcharan",
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  DAZ: {
    airports: [
      {
        airportNameEn: "Darwaz",
        airportNameFa: "فرودگاه درواز",
        airportCode: "DAZ",
      },
    ],
    cityNameFa: "درواز",
    cityNameEn: "Darwaz",
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  FAH: {
    airports: [
      {
        airportNameEn: "Farah",
        airportNameFa: "فرودگاه فارا",
        airportCode: "FAH",
      },
    ],
    cityNameFa: "فرح",
    cityNameEn: "Farah",
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  FBD: {
    airports: [
      {
        airportNameEn: "Faizabad",
        airportNameFa: "فرودگاه فیض‌آباد ",
        airportCode: "FBD",
      },
    ],
    cityNameFa: "فیض آباد",
    cityNameEn: "Faizabad",
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  GRG: {
    airports: [
      {
        airportNameEn: "Gardez",
        airportNameFa: "فرودگاه گاردز",
        airportCode: "GRG",
      },
    ],
    cityNameFa: "گاردز",
    cityNameEn: "Gardez",
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  GZI: {
    airports: [
      {
        airportNameEn: "Ghazni",
        airportNameFa: "فرودگاه غنزی",
        airportCode: "GZI",
      },
    ],
    cityNameFa: "غزنی",
    cityNameEn: "Ghazni",
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  HEA: {
    airports: [
      {
        airportNameEn: "Herat",
        airportNameFa: "میدان هوایی بین‌المللی هرات",
        airportCode: "HEA",
      },
    ],
    cityNameFa: "هرات",
    cityNameEn: "Herat",
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  JAA: {
    airports: [
      {
        airportNameEn: "Jalalabad",
        airportNameFa: "فرودگاه جلال‌آباد",
        airportCode: "JAA",
      },
    ],
    cityNameFa: "جلال آباد",
    cityNameEn: "Jalalabad",
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  KBL: {
    airports: [
      {
        airportNameEn: "Khwaja Rawash",
        airportNameFa: "فرودگاه کابل",
        airportCode: "KBL",
      },
    ],
    cityNameFa: "کابل",
    cityNameEn: "Kabul",
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  KDH: {
    airports: [
      {
        airportNameEn: "Kandahar",
        airportNameFa: "میدان هوایی بین‌المللی قندهار",
        airportCode: "KDH",
      },
    ],
    cityNameFa: "قندهار",
    cityNameEn: "Kandahar",
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  KHT: {
    airports: [
      {
        airportNameEn: "Khost",
        airportNameFa: "فرودگاه صحرایی خوست",
        airportCode: "KHT",
      },
    ],
    cityNameFa: "خاوران(تبريز)",
    cityNameEn: "Khost",
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  KWH: {
    airports: [
      {
        airportNameEn: "Khwahan",
        airportNameFa: "فرودگاه خواهان",
        airportCode: "KWH",
      },
    ],
    cityNameFa: "خواهان",
    cityNameEn: "Khwahan",
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  LQN: {
    airports: [
      {
        airportNameEn: "Qala Nau",
        airportNameFa: "فرودگاه قلعه نو، افغانستان",
        airportCode: "LQN",
      },
    ],
    cityNameFa: "قلعه نو",
    cityNameEn: "Qala Nau",
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  MMZ: {
    airports: [
      {
        airportNameEn: "Maimana",
        airportNameFa: "فرودگاه میمنه",
        airportCode: "MMZ",
      },
    ],
    cityNameFa: "میمنه",
    cityNameEn: "Maimana",
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  SBF: {
    airports: [
      {
        airportNameEn: "Sardeh Band",
        airportNameFa: "فرودگاه سرده‌بند",
        airportCode: "SBF",
      },
    ],
    cityNameFa: "سارده بند",
    cityNameEn: "Sardeh Band",
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  SGA: {
    airports: [
      {
        airportNameEn: "Sheghnan",
        airportNameFa: "فرودگاه شقنن",
        airportCode: "SGA",
      },
    ],
    cityNameFa: "شقنن",
    cityNameEn: "Sheghnan",
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  TII: {
    airports: [
      {
        airportNameEn: "Tirinkot",
        airportNameFa: "فرودگاه ترین‌کوت",
        airportCode: "TII",
      },
    ],
    cityNameFa: "ترین کوت",
    cityNameEn: "Tirinkot",
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  TQN: {
    airports: [
      {
        airportNameEn: "Taluqan",
        airportNameFa: "فرودگاه تالقان",
        airportCode: "TQN",
      },
    ],
    cityNameFa: "تالقان",
    cityNameEn: "Taluqan",
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  UND: {
    airports: [
      {
        airportNameEn: "Kunduz",
        airportNameFa: "فرودگاه کندوز",
        airportCode: "UND",
      },
    ],
    cityNameFa: "کندوز",
    cityNameEn: "Kunduz",
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  URZ: {
    airports: [
      {
        airportNameEn: "Uruzgan",
        airportNameFa: "فرودگاه ارزگان",
        airportCode: "URZ",
      },
    ],
    cityNameFa: "اروزگان",
    cityNameEn: "Uruzgan",
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  ZAJ: {
    airports: [
      {
        airportNameEn: "Zaranj",
        airportNameFa: "فرودگاه زرنج",
        airportCode: "ZAJ",
      },
    ],
    cityNameFa: "زرنج",
    cityNameEn: "Zaranj",
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  BIN: {
    airports: [
      {
        airportNameEn: "Bamiyan",
        airportNameFa: "فرودگاه بامیان",
        airportCode: "BIN",
      },
    ],
    cityNameFa: "بامیان",
    cityNameEn: "Bamiyan",
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  MZR: {
    airports: [
      {
        airportNameEn: "Mazar-I-Sharif",
        airportNameFa: "میدان هوایی مزار شریف",
        airportCode: "MZR",
      },
    ],
    cityNameFa: "مزار شریف",
    cityNameEn: "Mazar-I-Sharif",
    country: {
      countryCode: "AFG",
      countryNameEn: "Afghanistan",
      countryNameFa: "افغانستان",
    },
  },
  GBQ: {
    airports: [
      {
        airportNameEn: "Muharraq",
        airportNameFa: "فرودگاه موهاراک",
        airportCode: "GBQ",
      },
    ],
    cityNameFa: "موهاراک",
    cityNameEn: "Muharraq",
    country: {
      countryCode: "BHR",
      countryNameEn: "Bahrain",
      countryNameFa: "بحرین",
    },
  },
  BAH: {
    airports: [
      {
        airportNameEn: "Bahrain Intl.",
        airportNameFa: "فرودگاه بین‌المللی بحرین",
        airportCode: "BAH",
      },
    ],
    cityNameFa: "منامه",
    cityNameEn: "Manama",
    country: {
      countryCode: "BHR",
      countryNameEn: "Bahrain",
      countryNameFa: "بحرین",
    },
  },
  GOZ: {
    airports: [
      {
        airportNameEn: "Gorna Oriahovitsa",
        airportNameFa: "فرودگاه گرنا اوریاهویتسا",
        airportCode: "GOZ",
      },
    ],
    cityNameFa: "گورنا اریهویتسا",
    cityNameEn: "Gorna Oriahovitsa",
    country: {
      countryCode: "BGR",
      countryNameEn: "Bulgaria",
      countryNameFa: "بلغارستان",
    },
  },
  HKV: {
    airports: [
      {
        airportNameEn: "Haskovo",
        airportNameFa: "فرودگاه هسکووو",
        airportCode: "HKV",
      },
    ],
    cityNameFa: "هسکووو",
    cityNameEn: "Haskovo",
    country: {
      countryCode: "BGR",
      countryNameEn: "Bulgaria",
      countryNameFa: "بلغارستان",
    },
  },
  JAM: {
    airports: [
      {
        airportNameEn: "Jambol",
        airportNameFa: "پایگاه هوایی بزمر",
        airportCode: "JAM",
      },
    ],
    cityNameFa: "جامبول",
    cityNameEn: "Jambol",
    country: {
      countryCode: "BGR",
      countryNameEn: "Bulgaria",
      countryNameFa: "بلغارستان",
    },
  },
  PDV: {
    airports: [
      {
        airportNameEn: "Plovdiv",
        airportNameFa: "فرودگاه پلوودیف",
        airportCode: "PDV",
      },
    ],
    cityNameFa: "پلودیو",
    cityNameEn: "Plovdiv",
    country: {
      countryCode: "BGR",
      countryNameEn: "Bulgaria",
      countryNameFa: "بلغارستان",
    },
  },
  PVN: {
    airports: [
      {
        airportNameEn: "Pleven",
        airportNameFa: "فرودگاه پلون",
        airportCode: "PVN",
      },
    ],
    cityNameFa: "پلون",
    cityNameEn: "Pleven",
    country: {
      countryCode: "BGR",
      countryNameEn: "Bulgaria",
      countryNameFa: "بلغارستان",
    },
  },
  SLS: {
    airports: [
      {
        airportNameEn: "Silistra",
        airportNameFa: "فرودگاه سیلیسترا",
        airportCode: "SLS",
      },
    ],
    cityNameFa: "سیلیسترا",
    cityNameEn: "Silistra",
    country: {
      countryCode: "BGR",
      countryNameEn: "Bulgaria",
      countryNameFa: "بلغارستان",
    },
  },
  SOF: {
    airports: [
      {
        airportNameEn: "Sofia",
        airportNameFa: "فرودگاه صوفیه",
        airportCode: "SOF",
      },
    ],
    cityNameFa: "صوفیه",
    cityNameEn: "Sofia",
    country: {
      countryCode: "BGR",
      countryNameEn: "Bulgaria",
      countryNameFa: "بلغارستان",
    },
  },
  SZR: {
    airports: [
      {
        airportNameEn: "Stara Zagora",
        airportNameFa: "فرودگاه استارا زاگورا",
        airportCode: "SZR",
      },
    ],
    cityNameFa: "استارا زاگورا",
    cityNameEn: "Stara Zagora",
    country: {
      countryCode: "BGR",
      countryNameEn: "Bulgaria",
      countryNameFa: "بلغارستان",
    },
  },
  TGV: {
    airports: [
      {
        airportNameEn: "Targovishte",
        airportNameFa: "فرودگاه ترگویشت",
        airportCode: "TGV",
      },
    ],
    cityNameFa: "تارگوویشته",
    cityNameEn: "Targovishte",
    country: {
      countryCode: "BGR",
      countryNameEn: "Bulgaria",
      countryNameFa: "بلغارستان",
    },
  },
  VAR: {
    airports: [
      {
        airportNameEn: "Varna",
        airportNameFa: "فرودگاه وارنا",
        airportCode: "VAR",
      },
    ],
    cityNameFa: "وارنا",
    cityNameEn: "Varna",
    country: {
      countryCode: "BGR",
      countryNameEn: "Bulgaria",
      countryNameFa: "بلغارستان",
    },
  },
  VID: {
    airports: [
      {
        airportNameEn: "Vidin",
        airportNameFa: "فرودگاه ویدین",
        airportCode: "VID",
      },
    ],
    cityNameFa: "ویدین",
    cityNameEn: "Vidin",
    country: {
      countryCode: "BGR",
      countryNameEn: "Bulgaria",
      countryNameFa: "بلغارستان",
    },
  },
  BOJ: {
    airports: [
      {
        airportNameEn: "Burgas Airport",
        airportNameFa: "فرودگاه بورگاس",
        airportCode: "BOJ",
      },
    ],
    cityNameFa: "بورگاس",
    cityNameEn: "Burgas",
    country: {
      countryCode: "BGR",
      countryNameEn: "Bulgaria",
      countryNameFa: "بلغارستان",
    },
  },
  DYU: {
    airports: [
      {
        airportNameEn: "Dushanbe",
        airportNameFa: "فرودگاه بین‌المللی دوشنبه",
        airportCode: "DYU",
      },
    ],
    cityNameFa: "دوشنبه",
    cityNameEn: "Dushanbe",
    country: {
      countryCode: "TJK",
      countryNameEn: "Tajikistan",
      countryNameFa: "تاجیکستان",
    },
  },
  LBD: {
    airports: [
      {
        airportNameEn: "Khudzhand",
        airportNameFa: "فرودگاه خجند",
        airportCode: "LBD",
      },
    ],
    cityNameFa: "خجند",
    cityNameEn: "Khudzhand",
    country: {
      countryCode: "TJK",
      countryNameEn: "Tajikistan",
      countryNameFa: "تاجیکستان",
    },
  },
  ASB: {
    airports: [
      {
        airportNameEn: "Ashgabat",
        airportNameFa: "فرودگاه عشق‌آباد",
        airportCode: "ASB",
      },
    ],
    cityNameFa: "عشق آباد",
    cityNameEn: "Ashgabad",
    country: {
      countryCode: "TKM",
      countryNameEn: "Turkmenistan",
      countryNameFa: "ترکمنستان",
    },
  },
  CRZ: {
    airports: [
      {
        airportNameEn: "Turkmenabad",
        airportNameFa: "فرودگاه ترکمن‌آباد",
        airportCode: "CRZ",
      },
    ],
    cityNameFa: "ترکمن آباد",
    cityNameEn: "Turkmenabad",
    country: {
      countryCode: "TKM",
      countryNameEn: "Turkmenistan",
      countryNameFa: "ترکمنستان",
    },
  },
  KRW: {
    airports: [
      {
        airportNameEn: "Turkmanbashi",
        airportNameFa: "فرودگاه ترکمنباشی",
        airportCode: "KRW",
      },
    ],
    cityNameFa: "ترکمن باشی",
    cityNameEn: "Turkmenbashi",
    country: {
      countryCode: "TKM",
      countryNameEn: "Turkmenistan",
      countryNameFa: "ترکمنستان",
    },
  },
  MYP: {
    airports: [
      {
        airportNameEn: "Mary",
        airportNameFa: "فرودگاه ماری",
        airportCode: "MYP",
      },
    ],
    cityNameFa: "مریم",
    cityNameEn: "Mary",
    country: {
      countryCode: "TKM",
      countryNameEn: "Turkmenistan",
      countryNameFa: "ترکمنستان",
    },
  },
  CMJ: {
    airports: [
      {
        airportNameEn: "Chi Mei",
        airportNameFa: "فرودگاه کیمی",
        airportCode: "CMJ",
      },
    ],
    cityNameFa: "چی‌ میر",
    cityNameEn: "Chi Mei",
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  CYI: {
    airports: [
      {
        airportNameEn: "Chiayi",
        airportNameFa: "فرودگاه چیایی",
        airportCode: "CYI",
      },
    ],
    cityNameFa: "چیایی",
    cityNameEn: "Chiayi",
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  GNI: {
    airports: [
      {
        airportNameEn: "Green Island",
        airportNameFa: "فرودگاه لیودائو (گرین آیسلند)",
        airportCode: "GNI",
      },
    ],
    cityNameFa: "جزیره سبز",
    cityNameEn: "Green Island",
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  HCN: {
    airports: [
      {
        airportNameEn: "Hengchun",
        airportNameFa: "فرودگاه هنگچون",
        airportCode: "HCN",
      },
    ],
    cityNameFa: "هنگچون",
    cityNameEn: "Hengchun",
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  HSZ: {
    airports: [
      {
        airportNameEn: "Hsinchu",
        airportNameFa: "فرودگاه هسینچو",
        airportCode: "HSZ",
      },
    ],
    cityNameFa: "هسینچو",
    cityNameEn: "Hsinchu",
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  HUN: {
    airports: [
      {
        airportNameEn: "Hualien",
        airportNameFa: "فرودگاه هوالین",
        airportCode: "HUN",
      },
    ],
    cityNameFa: "هوالین",
    cityNameEn: "Hualien",
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  KNH: {
    airports: [
      {
        airportNameEn: "Shang-Yi",
        airportNameFa: "فرودگاه کینمن",
        airportCode: "KNH",
      },
    ],
    cityNameFa: "کینمن",
    cityNameEn: "Kinmen",
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  KYD: {
    airports: [
      {
        airportNameEn: "Orchid Island",
        airportNameFa: "فرودگاه لانیو",
        airportCode: "KYD",
      },
    ],
    cityNameFa: "ارچید آیسلند",
    cityNameEn: "Orchid Island",
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  LZN: {
    airports: [
      {
        airportNameEn: "Nangan",
        airportNameFa: "فرودگاه ماتسو نانگان",
        airportCode: "LZN",
      },
    ],
    cityNameFa: "نانگان",
    cityNameEn: "Nangan",
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  MFK: {
    airports: [
      {
        airportNameEn: "Matsu",
        airportNameFa: "فرودگاه ماتسو",
        airportCode: "MFK",
      },
    ],
    cityNameFa: "ماتسو",
    cityNameEn: "Matsu",
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  MZG: {
    airports: [
      {
        airportNameEn: "Makung",
        airportNameFa: "فرودگاه ماگونگ",
        airportCode: "MZG",
      },
    ],
    cityNameFa: "ماکونگ",
    cityNameEn: "Makung",
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  PIF: {
    airports: [
      {
        airportNameEn: "Pingtung",
        airportNameFa: "فرودگاه پینگتونگ",
        airportCode: "PIF",
      },
    ],
    cityNameFa: "پینگتونگ",
    cityNameEn: "Pingtung",
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  TXG: {
    airports: [
      {
        airportNameEn: "Chingchuankang",
        airportNameFa: "فرودگاه تیچون",
        airportCode: "RMQ",
      },
      {
        airportNameEn: "Taichung",
        airportNameFa: "فرودگاه تیچون",
        airportCode: "TXG",
      },
    ],
    cityNameFa: "تایچونگ",
    cityNameEn: "Taichung",
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  TNN: {
    airports: [
      {
        airportNameEn: "Tainan",
        airportNameFa: "فرودگاه تاینان",
        airportCode: "TNN",
      },
    ],
    cityNameFa: "تاینان",
    cityNameEn: "Tainan",
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  TPE: {
    airports: [
      {
        airportNameEn: "Taipei Songshan",
        airportNameFa: "فرودگاه سونگشان تایپه",
        airportCode: "TSA",
      },
      {
        airportNameEn: "Taiwan Taoyuan Intl.",
        airportNameFa: "فرودگاه بین‌المللی تائویوان تایوان",
        airportCode: "TPE",
      },
    ],
    cityNameFa: "تایپی",
    cityNameEn: "Taipei",
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  TTT: {
    airports: [
      {
        airportNameEn: "Taitung",
        airportNameFa: "فرودگاه تایتونگ",
        airportCode: "TTT",
      },
    ],
    cityNameFa: "تایتونگ",
    cityNameEn: "Taitung",
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  WOT: {
    airports: [
      {
        airportNameEn: "Wonan",
        airportNameFa: "فرودگاه وانگ-آن",
        airportCode: "WOT",
      },
    ],
    cityNameFa: "وونان",
    cityNameEn: "Wonan",
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  KHH: {
    airports: [
      {
        airportNameEn: "Kaoshiung Intl. Arpt.",
        airportNameFa: "فرودگاه بین‌المللی گاوشیونگ",
        airportCode: "KHH",
      },
    ],
    cityNameFa: "کائوسیونگ",
    cityNameEn: "Kaohsiung",
    country: {
      countryCode: "TWN",
      countryNameEn: "Taiwan",
      countryNameFa: "تایوان",
    },
  },
  ATB: {
    airports: [
      {
        airportNameEn: "Atbara",
        airportNameFa: "فرودگاه آتبارا",
        airportCode: "ATB",
      },
    ],
    cityNameFa: "اتبارا",
    cityNameEn: "Atbara",
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  DNX: {
    airports: [
      {
        airportNameEn: "Galegu",
        airportNameFa: "فرودگاه گالیگو",
        airportCode: "DNX",
      },
    ],
    cityNameFa: "دیندر",
    cityNameEn: "Dinder",
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  DOG: {
    airports: [
      {
        airportNameEn: "Dongola",
        airportNameFa: "فرودگاه دنقلا",
        airportCode: "DOG",
      },
    ],
    cityNameFa: "دونگولا",
    cityNameEn: "Dongola",
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  EBD: {
    airports: [
      {
        airportNameEn: "El Obeid",
        airportNameFa: "فرودگاه ال اووبید",
        airportCode: "EBD",
      },
    ],
    cityNameFa: "العبید",
    cityNameEn: "El Obeid",
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  EDB: {
    airports: [
      {
        airportNameEn: "Eldebba",
        airportNameFa: "فرودگاه الدبه",
        airportCode: "EDB",
      },
    ],
    cityNameFa: "الدبا",
    cityNameEn: "Eldebba",
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  EGN: {
    airports: [
      {
        airportNameEn: "Geneina",
        airportNameFa: "فرودگاه جنینه",
        airportCode: "EGN",
      },
    ],
    cityNameFa: "جنینا",
    cityNameEn: "Geneina",
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  ELF: {
    airports: [
      {
        airportNameEn: "El Fasher",
        airportNameFa: "فرودگاه الفاشر",
        airportCode: "ELF",
      },
    ],
    cityNameFa: "ال فشر",
    cityNameEn: "El Fasher",
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  GBU: {
    airports: [
      {
        airportNameEn: "Khashm El Girba",
        airportNameFa: "فرودگاه خشم الجبرا",
        airportCode: "GBU",
      },
    ],
    cityNameFa: "خاشم الگیربا",
    cityNameEn: "Khashm El Girba",
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  GSU: {
    airports: [
      {
        airportNameEn: "Gedaref",
        airportNameFa: "فرودگاه القضارف",
        airportCode: "GSU",
      },
    ],
    cityNameFa: "گدارف",
    cityNameEn: "Gedaref",
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  JUB: {
    airports: [
      {
        airportNameEn: "Juba",
        airportNameFa: "فرودگاه جوبا",
        airportCode: "JUB",
      },
    ],
    cityNameFa: "جوبا",
    cityNameEn: "Juba",
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  KRT: {
    airports: [
      {
        airportNameEn: "Civil",
        airportNameFa: "فرودگاه بین‌المللی خارطوم",
        airportCode: "KRT",
      },
    ],
    cityNameFa: "خارطوم",
    cityNameEn: "Khartoum",
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  KSL: {
    airports: [
      {
        airportNameEn: "Kassala",
        airportNameFa: "فرودگاه کسلا",
        airportCode: "KSL",
      },
    ],
    cityNameFa: "کاسالا",
    cityNameEn: "Kassala",
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  KST: {
    airports: [
      {
        airportNameEn: "Kosti",
        airportNameFa: "فرودگاه کوستی",
        airportCode: "KST",
      },
    ],
    cityNameFa: "کوستی",
    cityNameEn: "Kosti",
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  MAK: {
    airports: [
      {
        airportNameEn: "Malakal",
        airportNameFa: "فرودگاه مالاکال",
        airportCode: "MAK",
      },
    ],
    cityNameFa: "مالاکال",
    cityNameEn: "Malakal",
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  MWE: {
    airports: [
      {
        airportNameEn: "Merowe",
        airportNameFa: "فرودگاه مروی",
        airportCode: "MWE",
      },
    ],
    cityNameFa: "مرو",
    cityNameEn: "Merowe",
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  NHF: {
    airports: [
      {
        airportNameEn: "New Halfa",
        airportNameFa: "فرودگاه نیو هالفا",
        airportCode: "NHF",
      },
    ],
    cityNameFa: "نیو هالفا",
    cityNameEn: "New Halfa",
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  NUD: {
    airports: [
      {
        airportNameEn: "En Nahud",
        airportNameFa: "فرودگاه ان ناهود",
        airportCode: "NUD",
      },
    ],
    cityNameFa: "النهود",
    cityNameEn: "En Nahud",
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  PZU: {
    airports: [
      {
        airportNameEn: "Port Sudan",
        airportNameFa: "فرودگاه بین‌المللی پورت سودان",
        airportCode: "PZU",
      },
    ],
    cityNameFa: "پورت سودان",
    cityNameEn: "Port Sudan",
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  RSS: {
    airports: [
      {
        airportNameEn: "Roseires",
        airportNameFa: "فرودگاه رسیرس",
        airportCode: "RSS",
      },
    ],
    cityNameFa: "رسیرس",
    cityNameEn: "Roseires",
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  UYL: {
    airports: [
      {
        airportNameEn: "Nyala",
        airportNameFa: "فرودگاه نیالا",
        airportCode: "UYL",
      },
    ],
    cityNameFa: "نیالا",
    cityNameEn: "Nyala",
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  WHF: {
    airports: [
      {
        airportNameEn: "Wadi Halfa",
        airportNameFa: "فرودگاه ودی حلفا",
        airportCode: "WHF",
      },
    ],
    cityNameFa: "وادی حلفا",
    cityNameEn: "Wadi Halfa",
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  WUU: {
    airports: [
      {
        airportNameEn: "Wau",
        airportNameFa: "فرودگاه وآو",
        airportCode: "WUU",
      },
    ],
    cityNameFa: "وو",
    cityNameEn: "Wau",
    country: {
      countryCode: "SDN",
      countryNameEn: "Sudan",
      countryNameFa: "سودان",
    },
  },
  DAM: {
    airports: [
      {
        airportNameEn: "Damascus",
        airportNameFa: "فرودگاه دمشق",
        airportCode: "DAM",
      },
    ],
    cityNameFa: "دمشق",
    cityNameEn: "Damascus",
    country: {
      countryCode: "SYR",
      countryNameEn: "Syria",
      countryNameFa: "سوریه",
    },
  },
  DEZ: {
    airports: [
      {
        airportNameEn: "Al Jafrah",
        airportNameFa: "فرودگاه دیرالزور",
        airportCode: "DEZ",
      },
    ],
    cityNameFa: "دیرزور",
    cityNameEn: "Deirezzor",
    country: {
      countryCode: "SYR",
      countryNameEn: "Syria",
      countryNameFa: "سوریه",
    },
  },
  KAC: {
    airports: [
      {
        airportNameEn: "Kameshli",
        airportNameFa: "فرودگاه قامشلی",
        airportCode: "KAC",
      },
    ],
    cityNameFa: "کامشلی",
    cityNameEn: "Kameshli",
    country: {
      countryCode: "SYR",
      countryNameEn: "Syria",
      countryNameFa: "سوریه",
    },
  },
  LTK: {
    airports: [
      {
        airportNameEn: "Latakia",
        airportNameFa: "فرودگاه بین‌المللی باسل الاسد",
        airportCode: "LTK",
      },
    ],
    cityNameFa: "لاذقیه",
    cityNameEn: "Latakia",
    country: {
      countryCode: "SYR",
      countryNameEn: "Syria",
      countryNameFa: "سوریه",
    },
  },
  PMS: {
    airports: [
      {
        airportNameEn: "Palmyra",
        airportNameFa: "فرودگاه پالمیرا",
        airportCode: "PMS",
      },
    ],
    cityNameFa: "پالمیرا",
    cityNameEn: "Palmyra",
    country: {
      countryCode: "SYR",
      countryNameEn: "Syria",
      countryNameFa: "سوریه",
    },
  },
  ALP: {
    airports: [
      {
        airportNameEn: "Nejrab",
        airportNameFa: "فرودگاه بین‌المللی حلب (نجرب)",
        airportCode: "ALP",
      },
    ],
    cityNameFa: "حلب",
    cityNameEn: "Aleppo",
    country: {
      countryCode: "SYR",
      countryNameEn: "Syria",
      countryNameFa: "سوریه",
    },
  },
  AHB: {
    airports: [
      {
        airportNameEn: "Abha",
        airportNameFa: "فرودگاه منطقه‌ای ابها",
        airportCode: "AHB",
      },
    ],
    cityNameFa: "ابها",
    cityNameEn: "Abha",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  AJF: {
    airports: [
      {
        airportNameEn: "Jouf",
        airportNameFa: "فرودگاه داخلی الجوف",
        airportCode: "AJF",
      },
    ],
    cityNameFa: "سککا ال جوف",
    cityNameEn: "Sakaka Al Jouf",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  AKH: {
    airports: [
      {
        airportNameEn: "Prince Sultan Air Base",
        airportNameFa: "پایگاه هوایی پرنس سلطان",
        airportCode: "AKH",
      },
    ],
    cityNameFa: "الخرج",
    cityNameEn: "Al Kharj",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  AQI: {
    airports: [
      {
        airportNameEn: "Qaisumah",
        airportNameFa: "فرودگاه محلی قیصومه",
        airportCode: "AQI",
      },
    ],
    cityNameFa: "قیسومه",
    cityNameEn: "Qaisumah",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  BHH: {
    airports: [
      {
        airportNameEn: "Bisha",
        airportNameFa: "فرودگاه داخلی بیشه",
        airportCode: "BHH",
      },
    ],
    cityNameFa: "بیشا",
    cityNameEn: "Bisha",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  DHA: {
    airports: [
      {
        airportNameEn: "Dhahran",
        airportNameFa: "فرودگاه بین المللی ظهران",
        airportCode: "DHA",
      },
    ],
    cityNameFa: "ظهران",
    cityNameEn: "Dhahran",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  DMM: {
    airports: [
      {
        airportNameEn: "King Fahd Intl. Arpt.",
        airportNameFa: "فرودگاه دمام",
        airportCode: "DMM",
      },
    ],
    cityNameFa: "دمام",
    cityNameEn: "Dammam",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  DWD: {
    airports: [
      {
        airportNameEn: "Dawadmi",
        airportNameFa: "فرودگاه داخلی دوادمی",
        airportCode: "DWD",
      },
    ],
    cityNameFa: "داودمی",
    cityNameEn: "Dawadmi",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  EAM: {
    airports: [
      {
        airportNameEn: "Nejran",
        airportNameFa: "فرودگاه محلی نجران",
        airportCode: "EAM",
      },
    ],
    cityNameFa: "نجران",
    cityNameEn: "Nejran",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  EJH: {
    airports: [
      {
        airportNameEn: "Wedjh",
        airportNameFa: "فرودگاه وژ",
        airportCode: "EJH",
      },
    ],
    cityNameFa: "ویج",
    cityNameEn: "Wedjh",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  GIZ: {
    airports: [
      {
        airportNameEn: "Jazan",
        airportNameFa: "فرودگاه شاهزاده عبدالله بن عبدالعزیز (گیزان) ",
        airportCode: "GIZ",
      },
    ],
    cityNameFa: "جازان",
    cityNameEn: "Jazan",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  HAS: {
    airports: [
      {
        airportNameEn: "Hail",
        airportNameFa: "فرودگاه منطقه‌ای هائیل",
        airportCode: "HAS",
      },
    ],
    cityNameFa: "تگرگ",
    cityNameEn: "Hail",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  JED: {
    airports: [
      {
        airportNameEn: "Jeddah",
        airportNameFa: "فرودگاه جده",
        airportCode: "JED",
      },
    ],
    cityNameFa: "جده",
    cityNameEn: "Jeddah",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  KMC: {
    airports: [
      {
        airportNameEn: "King Khalid Military",
        airportNameFa: "فرودگاه کینگ خالد میلیتری سیتی",
        airportCode: "KMC",
      },
    ],
    cityNameFa: "شاه خالد میل. شهر",
    cityNameEn: "King Khalid Mil. City",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  KMX: {
    airports: [
      {
        airportNameEn: "Khamis Mushait",
        airportNameFa: "فرودگاه شاه خالد ایر بیس",
        airportCode: "KMX",
      },
    ],
    cityNameFa: "خمیس ​​مشیط",
    cityNameEn: "Khamis Mushait",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  MED: {
    airports: [
      {
        airportNameEn: "Madinah",
        airportNameFa: "فرودگاه مدینه",
        airportCode: "MED",
      },
    ],
    cityNameFa: "مدینه",
    cityNameEn: "Madinah",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  RAE: {
    airports: [
      {
        airportNameEn: "Arar",
        airportNameFa: "فرودگاه آرار",
        airportCode: "RAE",
      },
    ],
    cityNameFa: "آرار",
    cityNameEn: "Arar",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  RAH: {
    airports: [
      {
        airportNameEn: "Rafha",
        airportNameFa: "فرودگاه رفها",
        airportCode: "RAH",
      },
    ],
    cityNameFa: "رافها",
    cityNameEn: "Rafha",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  RUH: {
    airports: [
      {
        airportNameEn: "King Khaled Intl",
        airportNameFa: "فرودگاه بین‌المللی ملک خالد",
        airportCode: "RUH",
      },
    ],
    cityNameFa: "ریاض",
    cityNameEn: "Riyadh",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  SHW: {
    airports: [
      {
        airportNameEn: "Sharurah",
        airportNameFa: "فرودگاه شروره",
        airportCode: "SHW",
      },
    ],
    cityNameFa: "شروره",
    cityNameEn: "Sharurah",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  SLF: {
    airports: [
      {
        airportNameEn: "Sulayel",
        airportNameFa: "فرودگاه سولیل",
        airportCode: "SLF",
      },
    ],
    cityNameFa: "سلیمان",
    cityNameEn: "Sulayel",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  TIF: {
    airports: [
      {
        airportNameEn: "Taif",
        airportNameFa: "فرودگاه محلی طائف",
        airportCode: "TIF",
      },
    ],
    cityNameFa: "طائف",
    cityNameEn: "Taif",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  TUI: {
    airports: [
      {
        airportNameEn: "Turaif",
        airportNameFa: "فرودگاه توریف",
        airportCode: "TUI",
      },
    ],
    cityNameFa: "توریف",
    cityNameEn: "Turaif",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  TUU: {
    airports: [
      {
        airportNameEn: "Tabuk",
        airportNameFa: "فرودگاه محلی تبوک",
        airportCode: "TUU",
      },
    ],
    cityNameFa: "تبوک",
    cityNameEn: "Tabuk",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  WAE: {
    airports: [
      {
        airportNameEn: "Wadi Ad Dawasir",
        airportNameFa: "فرودگاه وادی اد الدواسر",
        airportCode: "WAE",
      },
    ],
    cityNameFa: "وادی آگهی الدواسر",
    cityNameEn: "Wadi Ad Dawasir",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  YNB: {
    airports: [
      {
        airportNameEn: "Yanbu",
        airportNameFa: "فرودگاه ینبع",
        airportCode: "YNB",
      },
    ],
    cityNameFa: "یانبو",
    cityNameEn: "Yanbu",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  ZUL: {
    airports: [
      {
        airportNameEn: "Zilfi",
        airportNameFa: "فرودگاه زیلفی",
        airportCode: "ZUL",
      },
    ],
    cityNameFa: "زیلفی",
    cityNameEn: "Zilfi",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  ABT: {
    airports: [
      {
        airportNameEn: "Al-Aqiq",
        airportNameFa: "فرودگاه داخلی الباحه",
        airportCode: "ABT",
      },
    ],
    cityNameFa: "ال‌بها",
    cityNameEn: "Al-Baha",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  ELQ: {
    airports: [
      {
        airportNameEn: "Gassim Regional Arpt.",
        airportNameFa: "فرودگاه محلی قصیم",
        airportCode: "ELQ",
      },
    ],
    cityNameFa: "بریده",
    cityNameEn: "Buraidah",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  URY: {
    airports: [
      {
        airportNameEn: "Gurayat",
        airportNameFa: "فرودگاه گورایات",
        airportCode: "URY",
      },
    ],
    cityNameFa: "اروگوئه",
    cityNameEn: "Gurayat",
    country: {
      countryCode: "SAU",
      countryNameEn: "Saudi Arabia",
      countryNameFa: "عربستان سعودی",
    },
  },
  BEG: {
    airports: [
      {
        airportNameEn: "Batajnica",
        airportNameFa: "پایگاه هوایی باتاینیکا",
        airportCode: "BJY",
      },
      {
        airportNameEn: "Nikola Tesla",
        airportNameFa: "فرودگاه بلگراد نیکولا تسلا",
        airportCode: "BEG",
      },
    ],
    cityNameFa: "بلگراد",
    cityNameEn: "Belgrade",
    country: {
      countryCode: "SRB",
      countryNameEn: "Serbia",
      countryNameFa: "صربستان",
    },
  },
  PRN: {
    airports: [
      {
        airportNameEn: "Prishtina Intl. Arpt.",
        airportNameFa: "فرودگاه بین‌المللی پریشتینا",
        airportCode: "PRN",
      },
    ],
    cityNameFa: "پریشتینا",
    cityNameEn: "Prishtina",
    country: {
      countryCode: "SRB",
      countryNameEn: "Serbia",
      countryNameFa: "صربستان",
    },
  },
  INI: {
    airports: [
      {
        airportNameEn: "Constantine The Great Intl.",
        airportNameFa: "فرودگاه کنستانتین بزرگ در نیش",
        airportCode: "INI",
      },
    ],
    cityNameFa: "نیس",
    cityNameEn: "Nis",
    country: {
      countryCode: "SRB",
      countryNameEn: "Serbia",
      countryNameFa: "صربستان",
    },
  },
  ALA: {
    airports: [
      {
        airportNameEn: "Almaty",
        airportNameFa: "فرودگاه آلماتی",
        airportCode: "ALA",
      },
    ],
    cityNameFa: "آلماتی",
    cityNameEn: "Almaty",
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  ATX: {
    airports: [
      {
        airportNameEn: "Atbasar",
        airportNameFa: "فرودگاه آتباسار",
        airportCode: "ATX",
      },
    ],
    cityNameFa: "اتبسر",
    cityNameEn: "Atbasar",
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  BXH: {
    airports: [
      {
        airportNameEn: "Balhash",
        airportNameFa: "فرودگاه بالقاش",
        airportCode: "BXH",
      },
    ],
    cityNameFa: "بالهاش",
    cityNameEn: "Balhash",
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  BXJ: {
    airports: [
      {
        airportNameEn: "Burundai",
        airportNameFa: "فرودگاه آلماتی بوروندای",
        airportCode: "BXJ",
      },
    ],
    cityNameFa: "بوروندای",
    cityNameEn: "Burundai",
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  CIT: {
    airports: [
      {
        airportNameEn: "Shymkent",
        airportNameFa: "فرودگاه بین‌المللی چیمکند",
        airportCode: "CIT",
      },
    ],
    cityNameFa: "چیمکند",
    cityNameEn: "Shymkent",
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  DMB: {
    airports: [
      {
        airportNameEn: "Zhambyl",
        airportNameFa: "فرودگاه تراز",
        airportCode: "DMB",
      },
    ],
    cityNameFa: "ژامبیل",
    cityNameEn: "Zhambyl",
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  DZN: {
    airports: [
      {
        airportNameEn: "Zhezhazgan",
        airportNameFa: "فرودگاه ژزقازغان",
        airportCode: "DZN",
      },
    ],
    cityNameFa: "ژزکازگان",
    cityNameEn: "Zhezkazgan",
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  GUW: {
    airports: [
      {
        airportNameEn: "Atyrau Intl.",
        airportNameFa: "فرودگاه آتیرائو",
        airportCode: "GUW",
      },
    ],
    cityNameFa: "آتیراو",
    cityNameEn: "Atyrau",
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  HRC: {
    airports: [
      {
        airportNameEn: "Zhairem",
        airportNameFa: "فرودگاه ژیرم",
        airportCode: "HRC",
      },
    ],
    cityNameFa: "ژائرم",
    cityNameEn: "Zhairem",
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  KOV: {
    airports: [
      {
        airportNameEn: "Kokshetau",
        airportNameFa: "فرودگاه کوکشتائو",
        airportCode: "KOV",
      },
    ],
    cityNameFa: "ککشتو",
    cityNameEn: "Kokshetau",
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  KSN: {
    airports: [
      {
        airportNameEn: "Kostanay",
        airportNameFa: "فرودگاه قوستانای (نریمانوکا)",
        airportCode: "KSN",
      },
    ],
    cityNameFa: "کستانای",
    cityNameEn: "Kostanay",
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  KZO: {
    airports: [
      {
        airportNameEn: "Kzyl-Orda",
        airportNameFa: "فرودگاه قیزیل‌اوردا",
        airportCode: "KZO",
      },
    ],
    cityNameFa: "کزیل‌",
    cityNameEn: "Kzyl-Orda",
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  PPK: {
    airports: [
      {
        airportNameEn: "Petropavlovsk",
        airportNameFa: "فرودگاه پتروپافل",
        airportCode: "PPK",
      },
    ],
    cityNameFa: "پتروپالاسک",
    cityNameEn: "Petropavlovsk",
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  PWQ: {
    airports: [
      {
        airportNameEn: "Pavlodar",
        airportNameFa: "فرودگاه پاولودار",
        airportCode: "PWQ",
      },
    ],
    cityNameFa: "پاولودار",
    cityNameEn: "Pavlodar",
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  SCO: {
    airports: [
      {
        airportNameEn: "Shevchenko",
        airportNameFa: "فرودگاه آقتائو قزاقستان",
        airportCode: "SCO",
      },
    ],
    cityNameFa: "آکتائو",
    cityNameEn: "Aktau",
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  TDK: {
    airports: [
      {
        airportNameEn: "Taldy-Kurgan",
        airportNameFa: "فرودگاه تالدیقورغان",
        airportCode: "TDK",
      },
    ],
    cityNameFa: "تالدی- کورگان",
    cityNameEn: "Taldy-Kurgan",
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  TSE: {
    airports: [
      {
        airportNameEn: "Astana",
        airportNameFa: "فرودگاه بین‌المللی آستانه",
        airportCode: "TSE",
      },
    ],
    cityNameFa: "آستانه",
    cityNameEn: "Astana",
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  UKK: {
    airports: [
      {
        airportNameEn: "Ust-Kamenogorsk",
        airportNameFa: "فرودگاه اوسکمن",
        airportCode: "UKK",
      },
    ],
    cityNameFa: "اوست- کامنوگوروسک",
    cityNameEn: "Ust-Kamenogorsk",
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  URA: {
    airports: [
      {
        airportNameEn: "Uralsk / Podstepnyy",
        airportNameFa: "فرودگاه اورال آک ژول",
        airportCode: "URA",
      },
    ],
    cityNameFa: "اورالسک",
    cityNameEn: "Uralsk",
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  NQZ: {
    airports: [
      {
        airportNameEn: "Nursultan Nazarbayev",
        airportNameFa: "فرودگاه نورالسلطان",
        airportCode: "NQZ",
      },
    ],
    cityNameFa: "نورالسطان",
    cityNameEn: "Nur Sultan",
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  AKX: {
    airports: [
      {
        airportNameEn: "Aktyubinsk",
        airportNameFa: "فرودگاه آقتوبه",
        airportCode: "AKX",
      },
    ],
    cityNameFa: "آکتیوبینسک",
    cityNameEn: "Aktyubinsk",
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  AYK: {
    airports: [
      {
        airportNameEn: "Arkalyk",
        airportNameFa: "فرودگاه آرقالیق",
        airportCode: "AYK",
      },
    ],
    cityNameFa: "آرکالیک",
    cityNameEn: "Arkalyk",
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  EKB: {
    airports: [
      {
        airportNameEn: "Ekibastuz",
        airportNameFa: "فرودگاه اکیباستوز",
        airportCode: "EKB",
      },
    ],
    cityNameFa: "اکیباستوز",
    cityNameEn: "Ekibastuz",
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  KGF: {
    airports: [
      {
        airportNameEn: "Karaganda",
        airportNameFa: "فرودگاه سری‌ارکا",
        airportCode: "KGF",
      },
    ],
    cityNameFa: "کاراگاندا",
    cityNameEn: "Karaganda",
    country: {
      countryCode: "KAZ",
      countryNameEn: "Kazakhstan",
      countryNameFa: "قزاقستان",
    },
  },
  DOH: {
    airports: [
      {
        airportNameEn: "Doha",
        airportNameFa: "فرودگاه بین المللی دوحه",
        airportCode: "DOH",
      },
      {
        airportNameEn: "Doha International",
        airportNameFa: "فرودگاه بین المللی دوحه",
        airportCode: "DIA",
      },
    ],
    cityNameFa: "دوحه",
    cityNameEn: "Doha",
    country: {
      countryCode: "QAT",
      countryNameEn: "Qatar",
      countryNameFa: "قطر",
    },
  },
  ECN: {
    airports: [
      {
        airportNameEn: "Ercan",
        airportNameFa: "فرودگاه ارجان",
        airportCode: "ECN",
      },
    ],
    cityNameFa: "ارجان",
    cityNameEn: "Ercan",
    country: {
      countryCode: "CYP",
      countryNameEn: "Cyprus",
      countryNameFa: "قبرس",
    },
  },
  GEC: {
    airports: [
      {
        airportNameEn: "Gecitkale",
        airportNameFa: "فرودگاه لفکونیکا",
        airportCode: "GEC",
      },
    ],
    cityNameFa: "گسیتکال",
    cityNameEn: "Gecitkale",
    country: {
      countryCode: "CYP",
      countryNameEn: "Cyprus",
      countryNameFa: "قبرس",
    },
  },
  LCA: {
    airports: [
      {
        airportNameEn: "Larnaca",
        airportNameFa: "فرودگاه لارناکا",
        airportCode: "LCA",
      },
    ],
    cityNameFa: "لارناکا",
    cityNameEn: "Larnaca",
    country: {
      countryCode: "CYP",
      countryNameEn: "Cyprus",
      countryNameFa: "قبرس",
    },
  },
  PFO: {
    airports: [
      {
        airportNameEn: "Paphos Intl.",
        airportNameFa: "فرودگاه بین‌المللی پافوس",
        airportCode: "PFO",
      },
    ],
    cityNameFa: "پافوس",
    cityNameEn: "Paphos",
    country: {
      countryCode: "CYP",
      countryNameEn: "Cyprus",
      countryNameFa: "قبرس",
    },
  },
  FRU: {
    airports: [
      {
        airportNameEn: "Manas",
        airportNameFa: "فرودگاه بیشکاک",
        airportCode: "FRU",
      },
    ],
    cityNameFa: "بیشکک",
    cityNameEn: "Bishkek",
    country: {
      countryCode: "KGZ",
      countryNameEn: "Kyrgyzstan",
      countryNameFa: "قرقیزستان",
    },
  },
  OSS: {
    airports: [
      {
        airportNameEn: "Osh Intl. Arpt.",
        airportNameFa: "فرودگاه اوش",
        airportCode: "OSS",
      },
    ],
    cityNameFa: "اوش",
    cityNameEn: "Osh",
    country: {
      countryCode: "KGZ",
      countryNameEn: "Kyrgyzstan",
      countryNameFa: "قرقیزستان",
    },
  },
  KWI: {
    airports: [
      {
        airportNameEn: "Kuwait Intl.",
        airportNameFa: "فرودگاه کویت",
        airportCode: "KWI",
      },
    ],
    cityNameFa: "کویت",
    cityNameEn: "Kuwait",
    country: {
      countryCode: "KWT",
      countryNameEn: "Kuwait",
      countryNameFa: "کویت",
    },
  },
  XIJ: {
    airports: [
      {
        airportNameEn: "Ahmed Al Jaber",
        airportNameFa: "فرودگاه احمد الجابر",
        airportCode: "XIJ",
      },
    ],
    cityNameFa: "احمد الجابر",
    cityNameEn: "Ahmed Al Jaber",
    country: {
      countryCode: "KWT",
      countryNameEn: "Kuwait",
      countryNameFa: "کویت",
    },
  },
  BEY: {
    airports: [
      {
        airportNameEn: "Beirut Rafic Hariri Arpt.",
        airportNameFa: "فرودگاه بیروت",
        airportCode: "BEY",
      },
    ],
    cityNameFa: "بیروت",
    cityNameEn: "Beirut",
    country: {
      countryCode: "LBN",
      countryNameEn: "Lebanon",
      countryNameFa: "لبنان",
    },
  },
  KYE: {
    airports: [
      {
        airportNameEn: "Kleyate",
        airportNameFa: "پایگاه هوایی رنه مواواد(فرودگاه کلیات)",
        airportCode: "KYE",
      },
    ],
    cityNameFa: "تریپولی",
    cityNameEn: "Tripoli",
    country: {
      countryCode: "LBN",
      countryNameEn: "Lebanon",
      countryNameFa: "لبنان",
    },
  },
  BUD: {
    airports: [
      {
        airportNameEn: "Ferihegy",
        airportNameFa: "فرودگاه بین‌المللی بوداپست",
        airportCode: "BUD",
      },
      {
        airportNameEn: "Keleti Palyaudvar",
        airportNameFa: "ایستگاه راه‌آهن شرقی بوداپست",
        airportCode: "XXQ",
      },
    ],
    cityNameFa: "بوداپست",
    cityNameEn: "Budapest",
    country: {
      countryCode: "HUN",
      countryNameEn: "Hungary",
      countryNameFa: "مجارستان",
    },
  },
  DEB: {
    airports: [
      {
        airportNameEn: "Debrecen",
        airportNameFa: "فرودگاه بین‌المللی دبرسن",
        airportCode: "DEB",
      },
    ],
    cityNameFa: "دبرسن",
    cityNameEn: "Debrecen",
    country: {
      countryCode: "HUN",
      countryNameEn: "Hungary",
      countryNameFa: "مجارستان",
    },
  },
  MCQ: {
    airports: [
      {
        airportNameEn: "Miskolc",
        airportNameFa: "فرودگاه میشکولتس",
        airportCode: "MCQ",
      },
    ],
    cityNameFa: "میسکولک",
    cityNameEn: "Miskolc",
    country: {
      countryCode: "HUN",
      countryNameEn: "Hungary",
      countryNameFa: "مجارستان",
    },
  },
  PEV: {
    airports: [
      {
        airportNameEn: "Pogany",
        airportNameFa: "فرودگاه پوگانی",
        airportCode: "PEV",
      },
    ],
    cityNameFa: "پکس",
    cityNameEn: "Pecs",
    country: {
      countryCode: "HUN",
      countryNameEn: "Hungary",
      countryNameFa: "مجارستان",
    },
  },
  QGY: {
    airports: [
      {
        airportNameEn: "Gyor-Per",
        airportNameFa: "فرودگاه گیور- پر",
        airportCode: "QGY",
      },
    ],
    cityNameFa: "پر",
    cityNameEn: "Per",
    country: {
      countryCode: "HUN",
      countryNameEn: "Hungary",
      countryNameFa: "مجارستان",
    },
  },
  SOB: {
    airports: [
      {
        airportNameEn: "Saarmelleek/Balaton",
        airportNameFa: "فرودگاه بین‌المللی سالفرملیک",
        airportCode: "SOB",
      },
    ],
    cityNameFa: "سارملیک",
    cityNameEn: "Saarmelleek",
    country: {
      countryCode: "HUN",
      countryNameEn: "Hungary",
      countryNameFa: "مجارستان",
    },
  },
  ABS: {
    airports: [
      {
        airportNameEn: "Abu Simbel",
        airportNameFa: "فرودگاه ابو سمبل",
        airportCode: "ABS",
      },
    ],
    cityNameFa: "ابوسمبل",
    cityNameEn: "Abu Simbel",
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  ALY: {
    airports: [
      {
        airportNameEn: "El Nohza",
        airportNameFa: "فرودگاه بین‌المللی اسکندریه (مصر)",
        airportCode: "ALY",
      },
      {
        airportNameEn: "Amiryah West",
        airportNameFa: "فرودگاه برج‌العرب",
        airportCode: "HBE",
      },
    ],
    cityNameFa: "اسکندریه",
    cityNameEn: "Alexandria",
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  ASW: {
    airports: [
      {
        airportNameEn: "Aswan",
        airportNameFa: "فرودگاه بین‌المللی اسوان",
        airportCode: "ASW",
      },
    ],
    cityNameFa: "اسوان",
    cityNameEn: "Aswan",
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  ATZ: {
    airports: [
      {
        airportNameEn: "Assiut",
        airportNameFa: "فرودگاه اسیوط",
        airportCode: "ATZ",
      },
    ],
    cityNameFa: "اسیوت",
    cityNameEn: "Assiut",
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  AUE: {
    airports: [
      {
        airportNameEn: "Abu Rudeis Airport",
        airportNameFa: "فرودگاه ابو رودیس",
        airportCode: "AUE",
      },
    ],
    cityNameFa: "ابورودیس",
    cityNameEn: "Abu Rudeis",
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  CAI: {
    airports: [
      {
        airportNameEn: "Cairo Intl.",
        airportNameFa: "فرودگاه بین‌المللی قاهره",
        airportCode: "CAI",
      },
    ],
    cityNameFa: "قاهره",
    cityNameEn: "Cairo",
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  DAK: {
    airports: [
      {
        airportNameEn: "Dakhla",
        airportNameFa: "فرودگاه داخلا اوسیس",
        airportCode: "DAK",
      },
    ],
    cityNameFa: "دخلا اوسیس",
    cityNameEn: "Dakhla Oasis",
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  DBB: {
    airports: [
      {
        airportNameEn: "Alalamain Intl.",
        airportNameFa: "فرودگاه بین المللی العالمین",
        airportCode: "DBB",
      },
    ],
    cityNameFa: "شهر دابا",
    cityNameEn: "Dabaa City",
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  ELT: {
    airports: [
      {
        airportNameEn: "Tour Sinai City",
        airportNameFa: "فرودگاه تور سینا سیتی",
        airportCode: "ELT",
      },
    ],
    cityNameFa: "تور سینای سیتی",
    cityNameEn: "Tour Sinai City",
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  EMY: {
    airports: [
      {
        airportNameEn: "El Minya",
        airportNameFa: "فرودگاه ال منیا",
        airportCode: "EMY",
      },
    ],
    cityNameFa: "ال منیا",
    cityNameEn: "El Minya",
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  HRG: {
    airports: [
      {
        airportNameEn: "Hurghada",
        airportNameFa: "فرودگاه بین‌المللی غردقه",
        airportCode: "HRG",
      },
    ],
    cityNameFa: "هورقدا",
    cityNameEn: "Hurghada",
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  LXR: {
    airports: [
      {
        airportNameEn: "Luxor",
        airportNameFa: "فرودگاه بین‌المللی لوکسار",
        airportCode: "LXR",
      },
    ],
    cityNameFa: "اقصر",
    cityNameEn: "Luxor",
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  MFO: {
    airports: [
      {
        airportNameEn: "Manguna",
        airportNameFa: "فرودگاه مانگونا",
        airportCode: "MFO",
      },
    ],
    cityNameFa: "مانگونا",
    cityNameEn: "Manguna",
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  PSD: {
    airports: [
      {
        airportNameEn: "Port Said",
        airportNameFa: "فرودگاه پورت سعید",
        airportCode: "PSD",
      },
    ],
    cityNameFa: "پورت سعید",
    cityNameEn: "Port Said",
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  SEW: {
    airports: [
      {
        airportNameEn: "Siwa",
        airportNameFa: "فرودگاه سیوا",
        airportCode: "SEW",
      },
    ],
    cityNameFa: "سیوا",
    cityNameEn: "Siwa",
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  SKV: {
    airports: [
      {
        airportNameEn: "Mount Sinai",
        airportNameFa: "فرودگاه بین‌المللی سنت کاترین",
        airportCode: "SKV",
      },
    ],
    cityNameFa: "سانتا کاتارینا",
    cityNameEn: "Santa Katarina",
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  SSH: {
    airports: [
      {
        airportNameEn: "Ophira Intl.",
        airportNameFa: "فرودگاه بین‌المللی شرم‌الشیخ",
        airportCode: "SSH",
      },
    ],
    cityNameFa: "شرم الشیخ",
    cityNameEn: "Sharm El Sheikh",
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  TCP: {
    airports: [
      {
        airportNameEn: "Taba Intl.",
        airportNameFa: "فرودگاه بین‌المللی طابا",
        airportCode: "TCP",
      },
    ],
    cityNameFa: "تابا",
    cityNameEn: "Taba",
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  UVL: {
    airports: [
      {
        airportNameEn: "Kharga",
        airportNameFa: "فرودگاه خارگا",
        airportCode: "UVL",
      },
    ],
    cityNameFa: "خرگا",
    cityNameEn: "Kharga",
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  AAC: {
    airports: [
      {
        airportNameEn: "Al Arish Intl. Arpt.",
        airportNameFa: "فرودگاه بین‌المللی العریش",
        airportCode: "AAC",
      },
    ],
    cityNameFa: "ال اریش",
    cityNameEn: "Al Arish",
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  GSQ: {
    airports: [
      {
        airportNameEn: "Shark Elowainat",
        airportNameFa: "فرودگاه شرق ال‌اوینت",
        airportCode: "GSQ",
      },
    ],
    cityNameFa: "کوسه ایلواینات",
    cityNameEn: "Shark Elowainat",
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  MUH: {
    airports: [
      {
        airportNameEn: "Mersa Matruh",
        airportNameFa: "فرودگاه مرسی مطروح",
        airportCode: "MUH",
      },
    ],
    cityNameFa: "مرسا ماتروه",
    cityNameEn: "Mersa Matruh",
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
  RMF: {
    airports: [
      {
        airportNameEn: "Marsa Alam Intl",
        airportNameFa: "مرسی علم",
        airportCode: "RMF",
      },
    ],
    cityNameFa: "مرصع علم",
    cityNameEn: "Marsa Alam",
    country: {
      countryCode: "EGY",
      countryNameEn: "Egypt",
      countryNameFa: "مصر",
    },
  },
} as const;
