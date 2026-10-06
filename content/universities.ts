export type University = {
  id: string;
  name: string;
  fullName: string;
  city: "Анкара" | "Стамбул" | "Измир";
  type: "Государственный" | "Частный";
  languages: string;
  fields: string[];
  tagline: string;
  analysis: string;
  caution: string;
  admission: string;
  fee: string;
  feeNote: string;
  annualUsd: number | null;
  deadline: string;
  deadlineEnd?: string;
  admissionUrl: string;
  feeUrl: string;
  accent: string;
};
export const universities: University[] = [
  {
    id: "metu",
    name: "METU / ODTÜ",
    fullName: "Middle East Technical University",
    city: "Анкара",
    type: "Государственный",
    languages: "Английский",
    fields: ["IT и инженерия", "Бизнес", "Наука"],
    tagline: "Технологии, которые меняют мир.",
    analysis:
      "Выбор для инженерии и естественных наук на английском. Сильный вариант при ограниченном бюджете; оценивать нужно конкретную программу и конкурс.",
    caution:
      "Кампус Ankara: тарифы Northern Cyprus отличаются. Минимальный балл не гарантирует поступление.",
    admission:
      "Проверить список допустимых экзаменов и дипломов: SAT, TR-YÖS и другие квалификации — по действующим правилам. Подать аттестат, оценки и экзамен; подтвердить английский или пройти подготовку.",
    fee: "$1 600–2 400",
    feeNote:
      "2026/27, год из двух семестров. $800/семестр — часть социальных программ; $1 200 — инженерия, архитектура и естественные науки. Оплата в TRY по правилам вуза.",
    annualUsd: 2400,
    deadline: "1 июня — 12 июля 2026",
    deadlineEnd: "2026-07-12",
    admissionUrl: "https://iso.metu.edu.tr/en/application-dates",
    feeUrl:
      "https://iso.metu.edu.tr/en/system/files/2026-2027_tuition_fees_14092026.pdf",
    accent: "mint",
  },
  {
    id: "itu",
    name: "İTÜ",
    fullName: "Istanbul Technical University",
    city: "Стамбул",
    type: "Государственный",
    languages: "Английский / турецкий",
    fields: ["IT и инженерия", "Архитектура"],
    tagline: "Инженерное мышление. Большой город.",
    analysis:
      "Подходит для инженерии и архитектуры. Проверяйте долю английского в программе, кампус и стоимость жилья в Стамбуле.",
    caution:
      "В объявлении второго набора 2026 требуется студенческая виза для въезда и регистрации. Не заменяйте её туристическим безвизовым въездом.",
    admission:
      "Принимаемые экзамены, квоты и пороги указаны в объявлении. Во втором наборе разрешено до пяти предпочтений; учитываются экзамен, оценки и мотивация.",
    fee: "79 000–264 000 ₺",
    feeNote:
      "2026/27, год, international quota. Engineering / Architecture — 94 500 TRY; Management — 86 500; Arts & Sciences — 79 000; Conservatory — 264 000. Два равных платежа. Совместные программы отдельно.",
    annualUsd: null,
    deadline: "21–26 августа 2026 · второй набор",
    deadlineEnd: "2026-08-26",
    admissionUrl:
      "https://www.sis.itu.edu.tr/duyuru_ekler/yabanci/202711/EN/202711.php",
    feeUrl:
      "https://www.sis.itu.edu.tr/EN/student/tuition-fee/fees/20271020/tutionfees.php",
    accent: "blue",
  },
  {
    id: "koc",
    name: "Koç",
    fullName: "Koç University",
    city: "Стамбул",
    type: "Частный",
    languages: "Английский / отдельные исключения",
    fields: ["Бизнес", "IT и инженерия", "Медицина"],
    tagline: "Исследования с международным горизонтом.",
    analysis:
      "Рассмотрите для бизнеса, инженерии и исследований. Высокий базовый тариф делает решение о стипендии важной частью выбора.",
    caution:
      "Приведена цена BA International Relations. Для медицины и других программ откройте отдельную карточку; условия стипендии индивидуальны.",
    admission:
      "Онлайн-портал: аттестат и оценки на английском/турецком, допустимая квалификация, языковое подтверждение. Для International Relations запрашиваются минимум две рекомендации.",
    fee: "$38 000",
    feeNote:
      "Карточка BA International Relations, набор 2026/27, за год до стипендии. Application fee 1 000 TRY; депозит $1 500 — по условиям портала.",
    annualUsd: 38000,
    deadline: "До 15 июля 2026 · International Relations",
    deadlineEnd: "2026-07-15",
    admissionUrl:
      "https://apply.ku.edu.tr/courses/course/16-ba-international-relations",
    feeUrl:
      "https://apply.ku.edu.tr/courses/course/16-ba-international-relations",
    accent: "rose",
  },
  {
    id: "sabanci",
    name: "Sabancı",
    fullName: "Sabancı University",
    city: "Стамбул",
    type: "Частный",
    languages: "Английский",
    fields: ["IT и инженерия", "Бизнес", "Дизайн"],
    tagline: "Пространство для своего направления.",
    analysis:
      "Подходит тем, кто хочет междисциплинарный путь. Сравнивайте учебный план, правила выбора специальности и итоговую цену после решения по стипендии.",
    caution:
      "Стипендию определяет университет по достижениям. Консультант не может гарантировать её процент.",
    admission:
      "Подать допустимый экзамен/диплом, школьные оценки и подтверждения достижений. Кандидатов автоматически рассматривают на стипендию; отдельная заявка не нужна.",
    fee: "$36 500",
    feeNote:
      "2026/27, год бакалавриата до скидки. В опубликованных вариантах tuition waiver: 25%, 40%, 50%, 60%, 75%; проживание отдельно.",
    annualUsd: 36500,
    deadline: "До 28 августа 2026",
    deadlineEnd: "2026-08-28",
    admissionUrl: "https://iro.sabanciuniv.edu/en/application-requirements",
    feeUrl: "https://iro.sabanciuniv.edu/en/tuition-fee",
    accent: "violet",
  },
  {
    id: "bilkent",
    name: "Bilkent",
    fullName: "Bilkent University",
    city: "Анкара",
    type: "Частный",
    languages: "Английский / отдельные исключения",
    fields: ["IT и инженерия", "Бизнес", "Дизайн"],
    tagline: "Академический кампус. Твой фокус.",
    analysis:
      "Вариант для англоязычного образования в Анкаре. Важная особенность для Казахстана: ЕНТ входит в список рассматриваемых квалификаций.",
    caution:
      "Сверьте действующий порог ЕНТ в национальных квалификациях. Для искусства и музыки возможны творческие испытания.",
    admission:
      "SAT, IB, A-level, ЕНТ и другие квалификации из списка. Аттестат, транскрипт и переводы; оригиналы потребуются после допуска. Минимум не равен гарантии.",
    fee: "$18 400",
    feeNote:
      "2026/27, год, включая 10% VAT; по официальному Registration Guide. Жильё, личные расходы и возможный подготовительный год считать отдельно.",
    annualUsd: 18400,
    deadline: "2 февраля — 12 июля 2026",
    deadlineEnd: "2026-07-12",
    admissionUrl: "https://w3.bilkent.edu.tr/international/how-to-apply/",
    feeUrl:
      "https://w3.bilkent.edu.tr/international/wp-content/uploads/sites/7/2026/04/Registration_Guide_2026-2027.pdf",
    accent: "amber",
  },
  {
    id: "bogazici",
    name: "Boğaziçi",
    fullName: "Boğaziçi University",
    city: "Стамбул",
    type: "Государственный",
    languages: "Английский / проверить программу",
    fields: ["IT и инженерия", "Бизнес", "Наука"],
    tagline: "Новый взгляд с берегов Босфора.",
    analysis:
      "Рассмотрите английские программы инженерии, науки и экономики. Государственный статус не означает низкую цену для иностранного студента.",
    caution:
      "Официальная страница сообщает, что собственной финансовой помощи иностранным студентам нет. Проверяйте отдельные дополнительные наборы.",
    admission:
      "Допустимый экзамен с порогом конкретной программы, школьные документы и английский. SAT-результат должен быть отправлен официально, код 0796.",
    fee: "$8 000–10 000",
    feeNote:
      "Годовые тарифы на официальной странице, проверены 30.09.2026. Engineering / Economics — $10 000; Education / Science / Law — $8 000. Подготовка — $10 000.",
    annualUsd: 10000,
    deadline: "6 апреля — 5 июня 2026 · основной набор",
    deadlineEnd: "2026-06-05",
    admissionUrl:
      "https://globalstudents.bogazici.edu.tr/en/pages/application-process/6014",
    feeUrl: "https://globalstudents.bogazici.edu.tr/en/pages/tuition-fees/3022",
    accent: "blue",
  },
  {
    id: "hacettepe",
    name: "Hacettepe",
    fullName: "Hacettepe University",
    city: "Анкара",
    type: "Государственный",
    languages: "Турецкий / английский по программе",
    fields: ["Медицина", "Наука", "IT и инженерия"],
    tagline: "Наука о жизни. Сильная база.",
    analysis:
      "Включён в подборку для медицинских и естественно-научных направлений. Учитывайте язык клинической практики и признание диплома в Казахстане.",
    caution:
      "Даты и стоимость 2026/27 не извлечены из доступного объявления. Не используем цены магистратуры как тариф бакалавриата.",
    admission:
      "Проверить руководство international admission, допустимые экзамены и пороги факультета. TR-YÖS упомянут на официальном сайте; заявку кандидат подаёт лично.",
    fee: "Уточнить у вуза",
    feeNote:
      "Точный тариф бакалавриата 2026/27 не подтверждён в доступном источнике. Запросите таблицу выбранного факультета: int.stu@hacettepe.edu.tr.",
    annualUsd: null,
    deadline: "Точные даты требуют проверки",
    admissionUrl: "https://internationalstudent.hacettepe.edu.tr/",
    feeUrl: "https://internationalstudent.hacettepe.edu.tr/",
    accent: "rose",
  },
  {
    id: "ankara",
    name: "Ankara",
    fullName: "Ankara University",
    city: "Анкара",
    type: "Государственный",
    languages: "Турецкий / английский по программе",
    fields: ["Медицина", "Бизнес", "Наука"],
    tagline: "Столичный выбор. Много маршрутов.",
    analysis:
      "Широкий набор направлений. Сравнивайте турецкую и английскую версии: язык заметно меняет стоимость одной специальности.",
    caution:
      "В правилах вуза заявки подаются кандидатом лично; посредник не должен подавать их вместо вас. Проверяйте признание регулируемых профессий.",
    admission:
      "TR-YÖS и допустимые эквиваленты: IB, Abitur, SAT и другие по списку. Подать документы и предпочтения через официальный портал.",
    fee: "$2 700–14 850",
    feeNote:
      "Примеры 2026/27 за год: Economics 30% English — $2 700; Business English — $4 050; Medicine Turkish — $9 900; Medicine English — $14 850. Это не полный диапазон всех программ.",
    annualUsd: 4050,
    deadline: "22 мая — 26 июня 2026 · основной набор",
    deadlineEnd: "2026-06-26",
    admissionUrl:
      "https://isoidb.ankara.edu.tr/wp-content/uploads/sites/381/2026/05/2026-1.TERCIH-ILAN-INGILIZCE.pdf",
    feeUrl:
      "https://isoidb.ankara.edu.tr/wp-content/uploads/sites/381/2026/08/TRY-2026-2027-Katki-Payi-Ucretleri.pdf",
    accent: "amber",
  },
  {
    id: "istanbul",
    name: "İstanbul",
    fullName: "Istanbul University",
    city: "Стамбул",
    type: "Государственный",
    languages: "Турецкий / английский по программе",
    fields: ["Медицина", "Бизнес", "Наука"],
    tagline: "История, которая продолжается тобой.",
    analysis:
      "Выбор для широкого академического поиска в Стамбуле. На дату проверки найден дополнительный приём, но он ограничен экзаменами.",
    caution:
      "Дополнительный набор 28.09–02.10.2026: TR-YÖS; GCE-AL только для граждан Северного Кипра. SAT из общего списка не означает допуск в этот набор.",
    admission:
      "Основной и дополнительный наборы имеют разные основания. Гражданину Казахстана для найденного дополнительного набора нужен допустимый TR-YÖS и выполнение условий программы.",
    fee: "По программе вуза",
    feeNote:
      "Точный тариф 2026/27 не подтверждён в прочитанном объявлении. Запросите цену, валюту и период оплаты в ISAD до платежа.",
    annualUsd: null,
    deadline: "28 сентября — 2 октября 2026 · дополнительный",
    deadlineEnd: "2026-10-02",
    admissionUrl:
      "https://isad.istanbul.edu.tr/tr/duyuru/uluslararasi-ogrenci-kabulu-ek-yerlestirme-410068002D005900440056004F004D004A006600440039007900700046006200610041004F003200370077003200",
    feeUrl: "https://isad.istanbul.edu.tr/tr",
    accent: "mint",
  },
  {
    id: "ege",
    name: "Ege",
    fullName: "Ege University",
    city: "Измир",
    type: "Государственный",
    languages: "Турецкий / английский по программе",
    fields: ["Медицина", "IT и инженерия", "Наука"],
    tagline: "Учиться. Исследовать. Жить у моря.",
    analysis:
      "Добавлен для выбора за пределами Анкары и Стамбула. Проверяйте кампус: часть программ расположена не в Bornova.",
    caution:
      "В таблицах есть разные годы зачисления и категории. Приведён пример Engineering Turkish для нового иностранного студента 2026.",
    admission:
      "Изучить руководство 2026 для иностранцев, TR-YÖS, квоты, язык и специальные условия. Наборы 2026: 22–26 июня, 3–5 августа, 7–9 сентября. Для кандидата из Казахстана проверьте допустимый TR-YÖS.",
    fee: "$3 450",
    feeNote:
      "2026/27, пример годового тарифа Engineering без программ на иностранном языке. Англоязычные программы и медицина могут стоить иначе.",
    annualUsd: 3450,
    deadline: "22–26 июня; 3–5 августа; 7–9 сентября 2026",
    deadlineEnd: "2026-09-09",
    admissionUrl:
      "https://oidb.ege.edu.tr/files/oidb/icerik/2026_eng_guide.pdf",
    feeUrl:
      "https://oidb.ege.edu.tr/files/oidb/icerik/2026_2027_onlisans_lisans_katki_payi_ogrenim_ucreti.pdf",
    accent: "violet",
  },
];
export function getUniversity(id: string) {
  return universities.find((u) => u.id === id);
}
