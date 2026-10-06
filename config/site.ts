export const site = {
  name: "Turk.edu",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  description:
    "Поступление в Турцию из Казахстана: 10 университетов, стоимость, даты, документы и студенческий ВНЖ.",
  checkedAt: "30 сентября 2026",
  phone: "+7 771 585 2661",
  tel: "tel:+77715852661",
  telegram: "https://t.me/limyrqq",
  whatsapp:
    "https://wa.me/77715852661?text=" +
    encodeURIComponent(
      "Здравствуйте! Хочу поступить в университет Турции из Казахстана.",
    ),
  navigation: [
    { label: "Университеты", href: "/universities" },
    { label: "Поступление", href: "/guide" },
    { label: "Бюджет", href: "/#budget" },
    { label: "ВНЖ", href: "/residence" },
  ],
};
