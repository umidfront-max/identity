export const PRODUCTS = [

/* ---------------------------------------------------------------- 1 */
{ slug:'custom-development', code:'DEV', page:'custom-development.html',
  uz:{
    name:'Buyurtma asosida ishlab chiqish',
    short:"Xavfsizlik va identifikatsiya sohasida o'z talabingiz bo'yicha tizim yaratamiz.",
    intro:"Tayyor mahsulot vazifangizni to'liq qoplamasa — modulni noldan yoki mavjud yechim ustiga quramiz: integratsiya, ML-modellar, portallar va mobil ilovalar.",
    tasks:["Tayyor yechimlarni mavjud IT-landshaftga ulash","Vendor mahsulotlari qoplamagan biznes-mantiqni yopish","Ma'lumotlarni yig'ish, boyitish va vizualizatsiya qilish","Xavfsizlik tizimlarini yagona interfeysga jamlash"],
    cases:[{t:'Bank uchun integratsion shina',d:"ABS, protsessing va antifrod o'rtasida real vaqt rejimida ma'lumot almashinuvi."},
           {t:'Operator ish o\'rni',d:"Hodisalar bilan ishlash, tekshirish va hisobot uchun yagona veb-panel."},
           {t:'Mobil SDK',d:"Ilovaga biometriya va qurilma barmoq izini o'rnatish uchun kutubxona."}],
    adv:[{t:'Ehtiyojga aniq moslik',d:"Ortiqcha litsenziya emas, aynon kerakli funksiya."},
         {t:'Kodga egalik',d:"Manba kodi va hujjatlar buyurtmachiga topshiriladi."},
         {t:'Bosqichma-bosqich yetkazish',d:"MVP dan boshlab har 2 haftada ko'rsatib boramiz."},
         {t:'Keyingi hamrohlik',d:"SLA asosida qo'llab-quvvatlash va rivojlantirish."}],
    delivery:["Loyiha (fixed price)","Jamoa autstaffingi (time & material)","Mavjud tizimni qo'llab-quvvatlash va rivojlantirish"]
  },
  ru:{
    name:'Заказная разработка',
    short:'Создаём системы безопасности и идентификации под ваши требования.',
    intro:'Если готовый продукт закрывает задачу не полностью — строим модуль с нуля или поверх существующего решения: интеграции, ML-модели, порталы и мобильные приложения.',
    tasks:['Подключение готовых решений к текущему ИТ-ландшафту','Закрытие бизнес-логики, которую не покрывают продукты вендоров','Сбор, обогащение и визуализация данных','Сведение систем безопасности в единый интерфейс'],
    cases:[{t:'Интеграционная шина для банка',d:'Обмен данными между АБС, процессингом и антифродом в реальном времени.'},
           {t:'Рабочее место оператора',d:'Единая веб-панель для разбора инцидентов, проверок и отчётности.'},
           {t:'Мобильный SDK',d:'Библиотека для встраивания биометрии и отпечатка устройства в приложение.'}],
    adv:[{t:'Точное попадание в задачу',d:'Не лишние лицензии, а именно нужная функциональность.'},
         {t:'Права на код',d:'Исходный код и документация передаются заказчику.'},
         {t:'Поэтапная поставка',d:'Начинаем с MVP и показываем результат каждые две недели.'},
         {t:'Дальнейшее сопровождение',d:'Поддержка и развитие по SLA.'}],
    delivery:['Проект с фиксированной стоимостью','Аутстаффинг команды (time & material)','Поддержка и развитие существующей системы']
  },
  en:{
    name:'Custom development',
    short:'We build security and identification systems to your requirements.',
    intro:'When an off-the-shelf product does not fully cover the task, we build a module from scratch or on top of an existing solution: integrations, ML models, portals and mobile apps.',
    tasks:['Connecting ready-made solutions to your IT landscape','Covering business logic that vendor products miss','Collecting, enriching and visualising data','Bringing security systems into one interface'],
    cases:[{t:'Integration bus for a bank',d:'Real-time data exchange between core banking, processing and antifraud.'},
           {t:'Operator workplace',d:'A single web console for incident triage, checks and reporting.'},
           {t:'Mobile SDK',d:'A library that embeds biometrics and device fingerprinting into your app.'}],
    adv:[{t:'Exact fit',d:'The functionality you need instead of unused licences.'},
         {t:'You own the code',d:'Source code and documentation are handed over to the customer.'},
         {t:'Incremental delivery',d:'We start with an MVP and demo every two weeks.'},
         {t:'Ongoing support',d:'Maintenance and development under an SLA.'}],
    delivery:['Fixed-price project','Team outstaffing (time & material)','Support and development of an existing system']
  }
},

/* ---------------------------------------------------------------- 2 */
{ slug:'faceid', code:'FACE', page:'faceid.html',
  uz:{
    name:'FaceID — biometrik identifikatsiya',
    short:"Biometrik identifikatsiya (1:N) va verifikatsiya (1:1), liveness va hujjat bilan solishtirish.",
    intro:"Mijozni masofadan yoki obyektda soniyalarda tanish: yuz vektorlarini solishtirish, jonlilik (liveness) tekshiruvi va pasport fotosurati bilan moslashtirish.",
    tasks:["Masofaviy onboardingda mijoz shaxsini tasdiqlash","Hujjatdagi surat bilan jonli yuzni solishtirish","Ofis va obyektlarga kirishni boshqarish","Qora ro'yxatdagi shaxslarni aniqlash"],
    cases:[{t:'Bank onboardingi',d:"Ilovada selfi + hujjat orqali hisob ochish, operator ishtirokisiz."},
           {t:'Kirish nazorati',d:"Turniket va eshiklarda karta o'rniga yuz bo'yicha o'tkazish."},
           {t:'Takroriy ariza filtri',d:"Bir shaxsning boshqa ma'lumotlar bilan qayta ro'yxatdan o'tishini aniqlash."}],
    adv:[{t:'Yuqori aniqlik',d:"Zamonaviy neyron tarmoq modellari, past FAR/FRR ko'rsatkichlari."},
         {t:'Liveness himoyasi',d:"Foto, video va niqob orqali aldashga qarshi passiv va faol tekshiruv."},
         {t:'Tez javob',d:"Bitta solishtirish — soniyaning ulushi, katta bazalarda ham."},
         {t:'Oson integratsiya',d:"REST API va mobil SDK orqali mavjud ilovaga ulanadi."}],
    delivery:["Buyurtmachi serverlarida (on-premise)","Xususiy bulutda","API sifatida (SaaS)"],
    compliance:["Shaxsiy ma'lumotlarni qayta ishlash talablari","Biometrik shablonlarni shifrlangan holda saqlash","Barcha tekshiruvlar bo'yicha audit jurnali"]
  },
  ru:{
    name:'FaceID — биометрическая идентификация',
    short:'Биометрическая идентификация (1:N) и верификация (1:1), liveness и сверка с документом.',
    intro:'Распознаём клиента удалённо или на объекте за секунды: сравнение векторов лица, проверка живости (liveness) и сверка с фотографией в документе.',
    tasks:['Подтверждение личности при удалённом онбординге','Сверка живого лица с фотографией в документе','Контроль доступа в офисы и на объекты','Выявление лиц из чёрного списка'],
    cases:[{t:'Онбординг в банке',d:'Открытие счёта по селфи и документу в приложении, без участия оператора.'},
           {t:'Контроль доступа',d:'Проход по лицу вместо карты на турникетах и дверях.'},
           {t:'Фильтр повторных заявок',d:'Выявление повторной регистрации одного человека с другими данными.'}],
    adv:[{t:'Высокая точность',d:'Современные нейросетевые модели, низкие показатели FAR/FRR.'},
         {t:'Защита от подмены',d:'Пассивная и активная проверка liveness против фото, видео и масок.'},
         {t:'Быстрый отклик',d:'Одно сравнение — доли секунды даже на больших базах.'},
         {t:'Простая интеграция',d:'Подключение через REST API и мобильный SDK.'}],
    delivery:['На серверах заказчика (on-premise)','В частном облаке','Как сервис по API (SaaS)'],
    compliance:['Требования к обработке персональных данных','Хранение биометрических шаблонов в зашифрованном виде','Журнал аудита по всем проверкам']
  },
  en:{
    name:'FaceID — biometric identification',
    short:'Biometric identification (1:N) and verification (1:1), liveness and document matching.',
    intro:'Recognise a customer remotely or on site in seconds: face vector matching, liveness detection and comparison with the photo in an ID document.',
    tasks:['Verifying identity during remote onboarding','Matching a live face against a document photo','Access control for offices and facilities','Detecting people on a watch list'],
    cases:[{t:'Bank onboarding',d:'Account opening from a selfie and an ID in the app, with no operator involved.'},
           {t:'Access control',d:'Face entry instead of cards on turnstiles and doors.'},
           {t:'Duplicate application filter',d:'Detecting the same person re-registering under different data.'}],
    adv:[{t:'High accuracy',d:'Modern neural network models with low FAR/FRR.'},
         {t:'Spoofing protection',d:'Passive and active liveness checks against photos, video and masks.'},
         {t:'Fast response',d:'A match takes a fraction of a second, even on large databases.'},
         {t:'Easy integration',d:'Connects through a REST API and a mobile SDK.'}],
    delivery:['On customer servers (on-premise)','In a private cloud','As an API service (SaaS)'],
    compliance:['Personal data processing requirements','Encrypted storage of biometric templates','Full audit log of every check']
  }
},

/* ---------------------------------------------------------------- 3 */
{ slug:'video-analytics', code:'VIS', page:'video-analytics.html', pilot:true,
  uz:{
    name:'Videoanalitika',
    short:"Kameralardan olingan tasvirni avtomatik tahlil qilish va hodisalarni aniqlash.",
    intro:"Mavjud videokuzatuv tizimini analitika platformasiga aylantiramiz: odam, transport va vaziyatlarni aniqlash, operatorga real vaqtda alert yuborish.",
    tasks:["Operator ko'rmay qoladigan hodisalarni avtomatik aniqlash","Xavfsizlik qoidalarining buzilishini qayd etish","Mijozlar oqimi va navbatlar statistikasini yig'ish","Arxivdan kerakli epizodni tez topish"],
    cases:[{t:'Bank filiali',d:"Navbat uzunligi, kassa oldidagi vaziyat va qoldirilgan buyumlar nazorati."},
           {t:'Ishlab chiqarish',d:"Himoya vositalari (kaska, jilet) kiyilganini tekshirish."},
           {t:'Savdo markazi',d:"Tashrifchilar oqimi, issiqlik xaritasi va shubhali xatti-harakatlar."}],
    adv:[{t:'Mavjud kameralar bilan ishlaydi',d:"Aksariyat IP-kameralar va VMS tizimlariga ulanadi."},
         {t:'Modulli detektorlar',d:"Faqat kerakli detektorlarni yoqasiz va to'laysiz."},
         {t:'Kam soxta alertlar',d:"Sahna sharoitiga sozlanadigan modellar va filtrlar."},
         {t:'Markazlashgan monitoring',d:"Barcha obyektlar bitta panelda."}],
    detectors:["Odam va transportni aniqlash","Qoldirilgan buyum","Belgilangan hududga kirish","Yiqilish va janjal","Himoya vositalarini kiyish nazorati","Avtomobil raqamini o'qish","Navbat va odamlar sonini hisoblash","Yuz bo'yicha qidiruv"],
    delivery:["Obyektdagi serverda","Markaziy ma'lumot markazida","Gibrid sxema (edge + markaz)"]
  },
  ru:{
    name:'Видеоаналитика',
    short:'Автоматический анализ видеопотока и выявление событий.',
    intro:'Превращаем существующее видеонаблюдение в аналитическую платформу: распознавание людей, транспорта и ситуаций, алерты оператору в реальном времени.',
    tasks:['Автоматическое выявление событий, которые пропускает оператор','Фиксация нарушений правил безопасности','Сбор статистики по потоку клиентов и очередям','Быстрый поиск нужного эпизода в архиве'],
    cases:[{t:'Отделение банка',d:'Контроль длины очереди, обстановки у кассы и оставленных предметов.'},
           {t:'Производство',d:'Проверка использования средств защиты — каски, жилета, перчаток.'},
           {t:'Торговый центр',d:'Поток посетителей, тепловые карты и подозрительное поведение.'}],
    adv:[{t:'Работает с текущими камерами',d:'Подключается к большинству IP-камер и VMS-систем.'},
         {t:'Модульные детекторы',d:'Включаете и оплачиваете только нужные детекторы.'},
         {t:'Мало ложных срабатываний',d:'Модели и фильтры настраиваются под конкретную сцену.'},
         {t:'Централизованный мониторинг',d:'Все объекты в одной панели.'}],
    detectors:['Обнаружение людей и транспорта','Оставленный предмет','Вход в запретную зону','Падение и драка','Контроль средств защиты','Распознавание автомобильных номеров','Подсчёт людей и очередей','Поиск по лицу'],
    delivery:['Сервер на объекте','Центральный дата-центр','Гибридная схема (edge + центр)']
  },
  en:{
    name:'Video analytics',
    short:'Automatic video stream analysis and event detection.',
    intro:'We turn existing CCTV into an analytics platform: detection of people, vehicles and situations, with real-time alerts for operators.',
    tasks:['Automatic detection of events operators miss','Recording safety rule violations','Collecting statistics on customer flow and queues','Finding the right episode in the archive quickly'],
    cases:[{t:'Bank branch',d:'Queue length, situation at the teller desk and objects left behind.'},
           {t:'Manufacturing',d:'Checking that protective equipment — helmets, vests, gloves — is worn.'},
           {t:'Shopping centre',d:'Visitor flow, heat maps and suspicious behaviour.'}],
    adv:[{t:'Works with your cameras',d:'Connects to most IP cameras and VMS platforms.'},
         {t:'Modular detectors',d:'Enable and pay for only the detectors you need.'},
         {t:'Few false positives',d:'Models and filters tuned to each specific scene.'},
         {t:'Central monitoring',d:'All sites in a single console.'}],
    detectors:['People and vehicle detection','Object left behind','Restricted area entry','Falls and fights','Protective equipment control','Licence plate recognition','People and queue counting','Face search'],
    delivery:['Server on site','Central data centre','Hybrid setup (edge + centre)']
  }
},

/* -------------------------------------------------------------- 3.5 */
{ slug:'nocode-video', code:'NCV', page:'nocode-video.html', pilot:true,
  uz:{
    name:'No-code videoanalitika',
    short:"Kompyuter ko'rish modellarini kod yozmasdan yaratish, o'qitish va ishga tushirish platformasi.",
    intro:"Buyurtmachi jamoasi o'z vazifasi uchun detektorni mustaqil yig'adi: kadrlarni belgilaydi, modelni o'qitadi va mavjud kameralarda ishga tushiradi — dasturchi va vendorsiz.",
    tasks:["O'z stsenariylari uchun detektorlarni mustaqil yaratish","Modelni o'z obyektidagi yozuvlarda o'qitish","Yangi vazifani kunlar ichida ishga tushirish","Vendorga bog'liqliksiz tajriba o'tkazish va takomillashtirish"],
    cases:[{t:"Savdo tarmog'i",d:"Merchandayzing nazorati: javondagi tovar joylashuvi bo'yicha o'z detektorini yig'ish."},
           {t:'Ishlab chiqarish',d:"Uchastkaga xos xavfsizlik qoidalari buzilishini aniqlashga model o'qitish."},
           {t:'Agrosanoat',d:"Texnika va chorva harakatini kuzatish uchun maxsus stsenariylar."}],
    adv:[{t:'Kod talab qilinmaydi',d:"Belgilashdan ishga tushirishgacha — vizual interfeys orqali."},
         {t:"Ma'lumotlar o'zingizda qoladi",d:"O'qitish buyurtmachi konturida, yozuvlar tashqariga chiqmaydi."},
         {t:"G'oyadan modelgacha — kunlar",d:"Tayyor arxitekturalar va avto-o'qitish jarayonni tezlashtiradi."},
         {t:'Mavjud kameralar bilan',d:"IP-kameralar va VMS tizimlariga ulanadi, maxsus uskuna shart emas."}],
    delivery:["Buyurtmachi serverlarida (on-premise)","Xususiy bulutda","Boshqariladigan xizmat sifatida"]
  },
  ru:{
    name:'No-code видеоаналитика',
    short:'Платформа для создания, обучения и запуска моделей компьютерного зрения без программирования.',
    intro:'Команда заказчика самостоятельно собирает детектор под свою задачу: размечает кадры, обучает модель и запускает её на существующих камерах — без разработчиков и вендора.',
    tasks:['Самостоятельно создавать детекторы под свои сценарии','Обучать модель на записях со своего объекта','Запускать новую задачу за считанные дни','Экспериментировать и улучшать без зависимости от вендора'],
    cases:[{t:'Розничная сеть',d:'Контроль мерчандайзинга: собственный детектор выкладки товара на полке.'},
           {t:'Производство',d:'Обучение модели выявлению нарушений техники безопасности, специфичных для участка.'},
           {t:'Агросектор',d:'Специальные сценарии наблюдения за движением техники и скота.'}],
    adv:[{t:'Код не требуется',d:'От разметки до запуска — через визуальный интерфейс.'},
         {t:'Данные остаются у вас',d:'Обучение идёт в контуре заказчика, записи не покидают его.'},
         {t:'От идеи до модели — дни',d:'Готовые архитектуры и автообучение ускоряют процесс.'},
         {t:'Работает с текущими камерами',d:'Подключается к IP-камерам и VMS, специальное оборудование не нужно.'}],
    delivery:['На серверах заказчика (on-premise)','В частном облаке','Как управляемый сервис']
  },
  en:{
    name:'No-code video analytics',
    short:'A platform for building, training and launching computer vision models without programming.',
    intro:'The customer team assembles a detector for its own task: labels frames, trains the model and launches it on existing cameras — with no developers or vendor involved.',
    tasks:['Building detectors for your own scenarios','Training models on footage from your own site','Launching a new task within days','Experimenting and improving without vendor lock-in'],
    cases:[{t:'Retail chain',d:'Merchandising control: an in-house detector for shelf layout.'},
           {t:'Manufacturing',d:'Training a model to spot site-specific safety violations.'},
           {t:'Agriculture',d:'Custom scenarios for tracking machinery and livestock movement.'}],
    adv:[{t:'No code required',d:'From labelling to launch through a visual interface.'},
         {t:'Your data stays with you',d:'Training runs inside the customer perimeter; footage never leaves it.'},
         {t:'Idea to model in days',d:'Ready-made architectures and auto-training speed things up.'},
         {t:'Works with current cameras',d:'Connects to IP cameras and VMS; no special hardware needed.'}],
    delivery:['On customer servers (on-premise)','In a private cloud','As a managed service']
  }
},

/* ---------------------------------------------------------------- 4 */
{ slug:'antifraud', code:'FRD', page:'antifraud.html',
  files:[{href:'assets/files/identity-antifraud.pdf'}],
  uz:{
    name:'Antifrod (Fuzzy)',
    short:"Sessiya, tranzaksiya va ichki firibgarlikka qarshi uch qatlamli himoya.",
    intro:"Fuzzy platformasi mijoz seansi, to'lov oqimi va xodimlar harakatlarini bir vaqtda kuzatadi: qoidalar, skoring modellari va xulq-atvor tahlili birgalikda ishlaydi.",
    tasks:["Firibgarlik operatsiyasini amalga oshirilishidan oldin to'xtatish","Ijtimoiy muhandislik va hisob egallab olinishini aniqlash","Xodimlar tomonidan suiiste'molni fosh etish","Regulyator hisobotlari uchun dalillar bazasini yuritish"],
    tabs:[
      {t:'Sessiyaviy antifrod',d:"Mijozning ilova va internet-bankdagi xatti-harakatini kuzatadi.",list:["Qurilma barmoq izi va geolokatsiya","Klaviatura, sichqoncha va sensor xulqi","Masofaviy boshqaruv va emulyatorlarni aniqlash","Sessiya davomida uzluksiz autentifikatsiya"]},
      {t:'Tranzaksion antifrod',d:"Har bir to'lovni real vaqtda baholaydi va qaror qabul qiladi.",list:["Millisekundlarda skoring va qaror (allow / review / block)","Mijoz profilidan chetlanishlarni aniqlash","Qabul qiluvchilar va kartalar bo'yicha graf tahlil","Cross-channel: kartalar, o'tkazmalar, QR va tezkor to'lovlar"]},
      {t:'Ichki antifrod',d:"Xodimlar va imtiyozli foydalanuvchilar harakatlarini nazorat qiladi.",list:["Mijoz ma'lumotlariga g'ayrioddiy murojaatlar","Hisob va tariflarni qo'lda o'zgartirish","Kassa va bek-ofis operatsiyalari korrelyatsiyasi","Xavf darajasi bo'yicha xodimlar reytingi"]}
    ],
    adv:[{t:'Uch qatlam bitta platformada',d:"Sessiya, tranzaksiya va ichki hodisalar bir kontekstda birlashadi."},
         {t:'Tahlilchi uchun tushunarli',d:"Har bir qaror qanday qoida va omillar asosida chiqarilgani ko'rinadi."},
         {t:"Qoidalarni o'zingiz sozlaysiz",d:"Vendorga murojaat qilmasdan yangi qoida va limitlar qo'shiladi."},
         {t:'Yuqori yuklamaga chidamli',d:"Sekundiga minglab tranzaksiyani gorizontal masshtablash bilan."}],
    delivery:["On-premise — buyurtmachi infratuzilmasida","Xususiy bulutda","Boshqariladigan xizmat (bizning monitoringimiz bilan)"],
    compliance:["To'lov tizimlari va regulyator talablari","PCI DSS bo'yicha ma'lumotlarni saqlash tamoyillari","Hodisalar bo'yicha to'liq audit izi","Rolga asoslangan kirish va ma'lumotlarni maskalash"]
  },
  ru:{
    name:'Антифрод (Fuzzy)',
    short:'Трёхслойная защита: сессионный, транзакционный и внутренний фрод.',
    intro:'Платформа Fuzzy одновременно контролирует сессию клиента, платёжный поток и действия сотрудников: правила, скоринговые модели и поведенческий анализ работают вместе.',
    tasks:['Остановить мошенническую операцию до её исполнения','Выявлять социальную инженерию и захват учётных записей','Вскрывать злоупотребления со стороны сотрудников','Вести доказательную базу для отчётности регулятору'],
    tabs:[
      {t:'Сессионный антифрод',d:'Отслеживает поведение клиента в приложении и интернет-банке.',list:['Отпечаток устройства и геолокация','Поведение клавиатуры, мыши и сенсора','Выявление удалённого управления и эмуляторов','Непрерывная аутентификация в течение сессии']},
      {t:'Транзакционный антифрод',d:'Оценивает каждый платёж в реальном времени и принимает решение.',list:['Скоринг и решение за миллисекунды (allow / review / block)','Выявление отклонений от профиля клиента','Графовый анализ получателей и карт','Cross-channel: карты, переводы, QR и быстрые платежи']},
      {t:'Внутренний антифрод',d:'Контролирует действия сотрудников и привилегированных пользователей.',list:['Нетипичные обращения к данным клиентов','Ручные изменения счетов и тарифов','Корреляция кассовых и бэк-офисных операций','Рейтинг сотрудников по уровню риска']}
    ],
    adv:[{t:'Три слоя на одной платформе',d:'Сессия, транзакция и внутренние события объединяются в одном контексте.'},
         {t:'Прозрачно для аналитика',d:'Видно, на основании каких правил и факторов принято решение.'},
         {t:'Правила настраиваете сами',d:'Новые правила и лимиты добавляются без обращения к вендору.'},
         {t:'Держит нагрузку',d:'Тысячи транзакций в секунду с горизонтальным масштабированием.'}],
    delivery:['On-premise — в инфраструктуре заказчика','В частном облаке','Управляемый сервис с нашим мониторингом'],
    compliance:['Требования платёжных систем и регулятора','Принципы хранения данных по PCI DSS','Полный аудиторский след по инцидентам','Ролевой доступ и маскирование данных']
  },
  en:{
    name:'Antifraud (Fuzzy)',
    short:'Three layers of protection: session, transaction and internal fraud.',
    intro:'The Fuzzy platform watches the customer session, the payment flow and employee actions at the same time: rules, scoring models and behavioural analysis work together.',
    tasks:['Stopping a fraudulent operation before it is executed','Detecting social engineering and account takeover','Uncovering abuse by employees','Maintaining evidence for regulatory reporting'],
    tabs:[
      {t:'Session antifraud',d:'Tracks customer behaviour in the mobile app and internet bank.',list:['Device fingerprinting and geolocation','Keyboard, mouse and touch behaviour','Detection of remote control tools and emulators','Continuous authentication throughout the session']},
      {t:'Transaction antifraud',d:'Scores every payment in real time and returns a decision.',list:['Scoring and decision in milliseconds (allow / review / block)','Detection of deviations from the customer profile','Graph analysis of payees and cards','Cross-channel: cards, transfers, QR and instant payments']},
      {t:'Internal antifraud',d:'Controls the actions of employees and privileged users.',list:['Unusual access to customer data','Manual changes to accounts and tariffs','Correlation of teller and back-office operations','Employee risk rating']}
    ],
    adv:[{t:'Three layers, one platform',d:'Session, transaction and internal events share a single context.'},
         {t:'Transparent for analysts',d:'You can see which rules and factors produced each decision.'},
         {t:'You own the rules',d:'New rules and limits are added without contacting the vendor.'},
         {t:'Built for load',d:'Thousands of transactions per second with horizontal scaling.'}],
    delivery:['On-premise, in the customer infrastructure','In a private cloud','Managed service with our monitoring'],
    compliance:['Payment system and regulator requirements','PCI DSS data storage principles','Full audit trail for incidents','Role-based access and data masking']
  }
},

/* ---------------------------------------------------------------- 5 */
{ slug:'edr', code:'EDR', page:'edr.html',
  uz:{
    name:'EDR — ish stansiyalari himoyasi',
    short:"Xostlardagi hujumlarni aniqlash, tekshirish va to'xtatish.",
    intro:"EDR antivirus ko'rmaydigan hujumlarni ko'radi: jarayonlar zanjiri, anomal xulq va lateral harakatni qayd etadi hamda hostni masofadan izolyatsiya qilish imkonini beradi.",
    tasks:["Ransomware va fayllsiz hujumlarni erta aniqlash","Hodisa zanjirini boshidan oxirigacha tiklash","Zararlangan hostni tarmoqdan ajratish","Threat hunting uchun telemetriya yig'ish"],
    tabs:[
      {t:'Solar EDR',d:"Xostlar telemetriyasi va hodisalarga javob berish platformasi.",list:["Jarayon, tarmoq va fayl hodisalari telemetriyasi","Indikatorlar va xulq qoidalari bo'yicha aniqlash","Masofaviy javob: izolyatsiya, jarayonni to'xtatish, karantin","SIEM va SOC jarayonlariga integratsiya"]},
      {t:'PT MaxPatrol EDR',d:"Positive Technologies ekotizimidagi xost himoyasi moduli.",list:["Bir nechta aniqlash dvigateli bir agentda","MaxPatrol SIEM bilan yagona kontekst","Kengaytiriladigan javob ssenariylari","Turli OT uchun agentlar"]}
    ],
    cases:[{t:'Ransomware to\'xtatildi',d:"Ommaviy shifrlash boshlanishida jarayon to'xtatildi va host izolyatsiya qilindi."},
           {t:'Imtiyozli hisob suiiste\'moli',d:"Administrator huquqlaridan g'ayrioddiy foydalanish aniqlandi."},
           {t:'Tergov',d:"Hujum kirish nuqtasi va tarqalish yo'li tiklandi."}],
    adv:[{t:'Chuqur ko\'rinuvchanlik',d:"Har bir hostda nima sodir bo'lganini qayta tiklash mumkin."},
         {t:'Tez javob',d:"Bir tugma bilan izolyatsiya va zararli jarayonni to'xtatish."},
         {t:'SOC bilan ishlaydi',d:"Hodisalar SIEM va IRP jarayonlariga tushadi."},
         {t:'Kam resurs sarfi',d:"Agent foydalanuvchi ishiga sezilarli ta'sir qilmaydi."}],
    delivery:["On-premise boshqaruv serveri","Boshqariladigan xizmat (bizning SOC)","Gibrid: siz — infratuzilma, biz — monitoring"]
  },
  ru:{
    name:'EDR — защита рабочих станций',
    short:'Обнаружение, расследование и остановка атак на хостах.',
    intro:'EDR видит то, что пропускает антивирус: цепочки процессов, аномальное поведение и горизонтальное перемещение, и позволяет изолировать хост удалённо.',
    tasks:['Раннее обнаружение шифровальщиков и бесфайловых атак','Восстановление цепочки инцидента от начала до конца','Изоляция заражённого хоста от сети','Сбор телеметрии для threat hunting'],
    tabs:[
      {t:'Solar EDR',d:'Платформа телеметрии хостов и реагирования на инциденты.',list:['Телеметрия процессов, сети и файловых операций','Обнаружение по индикаторам и поведенческим правилам','Удалённое реагирование: изоляция, остановка процесса, карантин','Интеграция с SIEM и процессами SOC']},
      {t:'PT MaxPatrol EDR',d:'Модуль защиты хостов в экосистеме Positive Technologies.',list:['Несколько движков обнаружения в одном агенте','Единый контекст с MaxPatrol SIEM','Расширяемые сценарии реагирования','Агенты для разных операционных систем']}
    ],
    cases:[{t:'Остановленный шифровальщик',d:'Процесс прерван в начале массового шифрования, хост изолирован.'},
           {t:'Злоупотребление привилегиями',d:'Выявлено нетипичное использование прав администратора.'},
           {t:'Расследование',d:'Восстановлены точка входа и путь распространения атаки.'}],
    adv:[{t:'Глубокая видимость',d:'Можно восстановить, что именно происходило на каждом хосте.'},
         {t:'Быстрое реагирование',d:'Изоляция и остановка вредоносного процесса в один клик.'},
         {t:'Работает вместе с SOC',d:'Инциденты попадают в процессы SIEM и IRP.'},
         {t:'Экономный агент',d:'Не мешает работе пользователя.'}],
    delivery:['Сервер управления on-premise','Управляемый сервис на базе нашего SOC','Гибрид: инфраструктура ваша, мониторинг наш']
  },
  en:{
    name:'EDR — endpoint protection',
    short:'Detecting, investigating and stopping attacks on hosts.',
    intro:'EDR sees what antivirus misses: process chains, anomalous behaviour and lateral movement, and lets you isolate a host remotely.',
    tasks:['Early detection of ransomware and fileless attacks','Reconstructing the full incident chain','Isolating a compromised host from the network','Collecting telemetry for threat hunting'],
    tabs:[
      {t:'Solar EDR',d:'A host telemetry and incident response platform.',list:['Process, network and file operation telemetry','Detection by indicators and behavioural rules','Remote response: isolation, process termination, quarantine','Integration with SIEM and SOC processes']},
      {t:'PT MaxPatrol EDR',d:'The endpoint protection module of the Positive Technologies ecosystem.',list:['Several detection engines in one agent','Shared context with MaxPatrol SIEM','Extensible response scenarios','Agents for different operating systems']}
    ],
    cases:[{t:'Ransomware stopped',d:'The process was killed as mass encryption started and the host was isolated.'},
           {t:'Privilege abuse',d:'Unusual use of administrator rights was detected.'},
           {t:'Investigation',d:'The entry point and lateral movement path were reconstructed.'}],
    adv:[{t:'Deep visibility',d:'You can reconstruct exactly what happened on every host.'},
         {t:'Fast response',d:'One click to isolate a host and stop a malicious process.'},
         {t:'Works with your SOC',d:'Incidents flow into SIEM and IRP processes.'},
         {t:'Lightweight agent',d:'No noticeable impact on user work.'}],
    delivery:['On-premise management server','Managed service run by our SOC','Hybrid: your infrastructure, our monitoring']
  }
},

/* ---------------------------------------------------------------- 6 */
{ slug:'dlp', code:'DLP', page:'dlp.html',
  uz:{
    name:"DLP — ma'lumot chiqib ketishining oldini olish",
    short:"Maxfiy ma'lumotlarning kompaniyadan tashqariga chiqishini nazorat qilish.",
    intro:"DLP pochta, messenjerlar, bulut xizmatlari, USB va chop etish kanallarini kuzatadi: qaysi hujjat, kim tomonidan va qayerga jo'natilayotganini ko'rsatadi hamda bloklaydi.",
    tasks:["Mijoz bazasi va shartnomalar chiqib ketishini to'xtatish","Xodimlarning xavfli xatti-harakatlarini aniqlash","Ichki tergovlar uchun dalil to'plash","Ma'lumot bilan ishlash siyosatini amalda qo'llash"],
    tabs:[
      {t:'Solar Dozor',d:"Kanallarni keng qamrab oluvchi DLP tizimi va xodim xulqi tahlili.",list:["Pochta, messenjer, bulut, USB va chop etish nazorati","Kontent tahlili: shablonlar, lug'atlar, raqamli barmoq izlari","Xodimlar aloqalari va xulqi tahlili (UBA)","Hodisalar arxivi va tergov ish o'rni"]}
    ],
    cases:[{t:'Mijoz bazasi',d:"Ishdan bo'shayotgan xodim tomonidan bazani shaxsiy pochtaga jo'natish urinishi bloklandi."},
           {t:'Moliyaviy hujjatlar',d:"Tashqi bulutga yuklangan maxfiy hisobot aniqlandi."},
           {t:'Ichki tergov',d:"Sizib chiqishning manbai va vaqti hujjatlashtirildi."}],
    adv:[{t:'Barcha asosiy kanallar',d:"Bitta tizimda pochtadan USB gacha."},
         {t:'Kuzatuv yoki bloklash',d:"Har bir siyosat uchun rejimni alohida tanlaysiz."},
         {t:'Dalil bazasi',d:"Hodisa bo'yicha to'liq nusxa va xronologiya saqlanadi."},
         {t:'Xodim xulqi tahlili',d:"Xavf ostidagi guruhlarni oldindan ko'rish imkoni."}],
    delivery:["On-premise","Xususiy bulutda","Bosqichma-bosqich joriy etish: avval monitoring, keyin bloklash"]
  },
  ru:{
    name:'DLP — предотвращение утечек данных',
    short:'Контроль передачи конфиденциальной информации за пределы компании.',
    intro:'DLP следит за почтой, мессенджерами, облаками, USB и печатью: показывает, какой документ, кто и куда отправляет, и блокирует нарушение.',
    tasks:['Остановить утечку клиентской базы и договоров','Выявлять рискованное поведение сотрудников','Собирать доказательства для внутренних расследований','Применять политику работы с данными на практике'],
    tabs:[
      {t:'Solar Dozor',d:'DLP-система с широким охватом каналов и анализом поведения сотрудников.',list:['Контроль почты, мессенджеров, облаков, USB и печати','Контентный анализ: шаблоны, словари, цифровые отпечатки','Анализ связей и поведения сотрудников (UBA)','Архив инцидентов и рабочее место для расследований']}
    ],
    cases:[{t:'Клиентская база',d:'Заблокирована попытка увольняющегося сотрудника отправить базу на личную почту.'},
           {t:'Финансовые документы',d:'Обнаружена загрузка конфиденциального отчёта во внешнее облако.'},
           {t:'Внутреннее расследование',d:'Документированы источник и время утечки.'}],
    adv:[{t:'Все основные каналы',d:'От почты до USB в одной системе.'},
         {t:'Наблюдение или блокировка',d:'Режим выбирается отдельно для каждой политики.'},
         {t:'Доказательная база',d:'Сохраняются полная копия и хронология инцидента.'},
         {t:'Анализ поведения',d:'Группы риска видны заранее.'}],
    delivery:['On-premise','В частном облаке','Поэтапное внедрение: сначала мониторинг, затем блокировка']
  },
  en:{
    name:'DLP — data loss prevention',
    short:'Control over confidential information leaving the company.',
    intro:'DLP watches email, messengers, cloud services, USB and printing: it shows which document is being sent, by whom and where, and blocks the violation.',
    tasks:['Stopping leaks of customer databases and contracts','Detecting risky employee behaviour','Collecting evidence for internal investigations','Enforcing the data handling policy in practice'],
    tabs:[
      {t:'Solar Dozor',d:'A DLP system with broad channel coverage and employee behaviour analysis.',list:['Control of email, messengers, cloud, USB and printing','Content analysis: templates, dictionaries, digital fingerprints','Analysis of employee connections and behaviour (UBA)','Incident archive and an investigation workplace']}
    ],
    cases:[{t:'Customer database',d:'A departing employee was blocked from sending the database to a personal mailbox.'},
           {t:'Financial documents',d:'A confidential report uploaded to an external cloud was detected.'},
           {t:'Internal investigation',d:'The source and timing of a leak were documented.'}],
    adv:[{t:'All key channels',d:'From email to USB in a single system.'},
         {t:'Monitor or block',d:'The mode is chosen per policy.'},
         {t:'Evidence base',d:'A full copy and timeline of each incident is stored.'},
         {t:'Behaviour analysis',d:'Risk groups become visible in advance.'}],
    delivery:['On-premise','In a private cloud','Staged rollout: monitoring first, blocking later']
  }
},

/* ---------------------------------------------------------------- 7 */
{ slug:'ips-ids', code:'IDS', page:'ips-ids.html',
  uz:{
    name:'IPS / IDS va tarmoq himoyasi',
    short:"Tarmoq trafigidagi hujumlarni aniqlash va to'sish.",
    intro:"Perimetr va ichki segmentlardagi trafikni tahlil qilamiz: hujum imzolari, anomaliyalar va yashirin kanallarni aniqlab, ularni real vaqtda bloklaymiz.",
    tasks:["Perimetr va segmentlar orasidagi hujumlarni to'xtatish","Zararli tarmoq faolligini aniqlash","Tarmoqni segmentlash siyosatini qo'llash","Trafik bo'yicha ko'rinuvchanlikni ta'minlash"],
    tabs:[
      {t:'Solar NGFW',d:"Yangi avlod tarmoqlararo ekrani va IPS moduli.",list:["Ilova darajasida trafikni nazorat qilish","O'rnatilgan IPS va imzolar bazasi","Foydalanuvchi va guruhlar bo'yicha siyosatlar","Yuqori o'tkazuvchanlik va klasterlash"]},
      {t:'PT NGFW',d:"Positive Technologies yangi avlod tarmoq himoyasi.",list:["Chuqur trafik tahlili va aniqlash ekspertizasi","PT ekotizimi bilan yagona kontekst","Markazlashgan siyosat boshqaruvi","Yuqori yuklamali muhitlar uchun arxitektura"]}
    ],
    cases:[{t:'Perimetr hujumi',d:"Tashqaridan zaifliklarni skanerlash va ekspluatatsiya urinishi to'sildi."},
           {t:'Segmentlararo harakat',d:"Ichki tarmoqda ruxsatsiz ulanish urinishlari aniqlandi."},
           {t:'Yashirin kanal',d:"DNS orqali ma'lumot chiqarish urinishi qayd etildi."}],
    adv:[{t:'Aniqlash + bloklash',d:"IDS rejimidan IPS rejimiga bosqichma-bosqich o'tish."},
         {t:"Trafikka ko'rinuvchanlik",d:"Qaysi ilova va foydalanuvchi qancha trafik yaratayotgani ko'rinadi."},
         {t:'Yagona siyosat',d:"Barcha nuqtalar uchun markazlashgan qoidalar."},
         {t:'SOC ga integratsiya',d:"Hodisalar SIEM ga standart formatda uzatiladi."}],
    delivery:["Apparat platformasi","Virtual mashina","Klaster (yuqori mavjudlik)"]
  },
  ru:{
    name:'IPS / IDS и сетевая защита',
    short:'Обнаружение и блокировка атак в сетевом трафике.',
    intro:'Анализируем трафик периметра и внутренних сегментов: выявляем сигнатуры атак, аномалии и скрытые каналы и блокируем их в реальном времени.',
    tasks:['Остановка атак на периметре и между сегментами','Выявление вредоносной сетевой активности','Применение политики сегментации сети','Обеспечение видимости трафика'],
    tabs:[
      {t:'Solar NGFW',d:'Межсетевой экран нового поколения со встроенным IPS.',list:['Контроль трафика на уровне приложений','Встроенный IPS и база сигнатур','Политики по пользователям и группам','Высокая пропускная способность и кластеризация']},
      {t:'PT NGFW',d:'Сетевая защита нового поколения от Positive Technologies.',list:['Глубокий анализ трафика и экспертиза обнаружения','Единый контекст с экосистемой PT','Централизованное управление политиками','Архитектура для высоконагруженных сред']}
    ],
    cases:[{t:'Атака на периметр',d:'Заблокированы сканирование и попытка эксплуатации уязвимости извне.'},
           {t:'Перемещение между сегментами',d:'Выявлены попытки несанкционированных подключений внутри сети.'},
           {t:'Скрытый канал',d:'Зафиксирована попытка вывода данных через DNS.'}],
    adv:[{t:'Обнаружение и блокировка',d:'Плавный переход из режима IDS в режим IPS.'},
         {t:'Видимость трафика',d:'Видно, какое приложение и пользователь создают нагрузку.'},
         {t:'Единая политика',d:'Централизованные правила для всех точек.'},
         {t:'Интеграция с SOC',d:'События передаются в SIEM в стандартном формате.'}],
    delivery:['Аппаратная платформа','Виртуальная машина','Кластер высокой доступности']
  },
  en:{
    name:'IPS / IDS and network security',
    short:'Detecting and blocking attacks in network traffic.',
    intro:'We analyse perimeter and internal traffic: attack signatures, anomalies and covert channels are detected and blocked in real time.',
    tasks:['Stopping attacks at the perimeter and between segments','Detecting malicious network activity','Enforcing network segmentation policy','Providing traffic visibility'],
    tabs:[
      {t:'Solar NGFW',d:'A next-generation firewall with a built-in IPS.',list:['Application-level traffic control','Built-in IPS and signature database','Policies by user and group','High throughput and clustering']},
      {t:'PT NGFW',d:'Next-generation network protection from Positive Technologies.',list:['Deep traffic analysis and detection expertise','Shared context with the PT ecosystem','Central policy management','Architecture for high-load environments']}
    ],
    cases:[{t:'Perimeter attack',d:'External scanning and an exploitation attempt were blocked.'},
           {t:'Lateral movement',d:'Unauthorised connection attempts inside the network were detected.'},
           {t:'Covert channel',d:'An attempt to exfiltrate data over DNS was recorded.'}],
    adv:[{t:'Detect and block',d:'A smooth path from IDS mode to IPS mode.'},
         {t:'Traffic visibility',d:'You can see which application and user generate the load.'},
         {t:'One policy',d:'Central rules for every enforcement point.'},
         {t:'SOC integration',d:'Events are delivered to SIEM in a standard format.'}],
    delivery:['Hardware appliance','Virtual machine','High-availability cluster']
  }
},

/* ---------------------------------------------------------------- 8 */
{ slug:'waf-antiddos', code:'WAF', page:'waf-antiddos.html',
  uz:{
    name:'WAF va AntiDDoS',
    short:"Veb-ilovalar va API larni hujumlar hamda DDoS dan himoya qilish.",
    intro:"Sayt, internet-bank va API oldida himoya qatlami: OWASP hujumlarini filtrlaydi, botlarni ajratadi va DDoS to'lqinini ilova serveriga yetib bormasdan so'ndiradi.",
    tasks:["Veb-ilova va API ga hujumlarni to'sish","Xizmatning DDoS paytida ishlashini ta'minlash","Parol tanlash va bot faolligini cheklash","Zaiflik yopilgunicha vaqtinchalik himoya (virtual patching)"],
    tabs:[
      {t:'Solar Space',d:"Bulutli veb-himoya: WAF, AntiDDoS va bot himoyasi.",list:["Ilova darajasidagi hujumlardan filtr","Volumetrik DDoS ni bulutda so'ndirish","Bot va parsing faolligini cheklash","Tez ulanish — infratuzilmani o'zgartirmasdan"]},
      {t:'PT Application Firewall PRO',d:"Yuqori yuklamali ilovalar uchun WAF.",list:["Ilova mantiqini o'rganib, anomaliyalarni aniqlash","API va mikroservislarni himoyalash","Virtual patching orqali zaifliklarni yopish","Skanerlar va SOC bilan integratsiya"]}
    ],
    cases:[{t:'Internet-bankga hujum',d:"Avtomatlashtirilgan parol tanlash urinishlari bloklandi."},
           {t:'DDoS to\'lqini',d:"Yuz gigabitlik hujum paytida xizmat ishlashda davom etdi."},
           {t:'API suiiste\'moli',d:"Ma'lumotlarni ommaviy yuklab olayotgan botlar cheklandi."}],
    adv:[{t:'Ikki qatlam',d:"Volumetrik va ilova darajasidagi hujumlar bir yechimda."},
         {t:'Tez ishga tushirish',d:"Bulutli sxemada bir necha soatda himoya yoqiladi."},
         {t:"Kam noto'g'ri bloklash",d:"Ilova xulqini o'rganib, qoidalar avtomatik sozlanadi."},
         {t:"Ko'rinuvchanlik",d:"Hujumlar va trafik bo'yicha batafsil hisobotlar."}],
    delivery:["Bulutli himoya (tez ulanish)","On-premise WAF","Gibrid: bulutda DDoS, o'zida WAF"]
  },
  ru:{
    name:'WAF и AntiDDoS',
    short:'Защита веб-приложений и API от атак и DDoS.',
    intro:'Слой защиты перед сайтом, интернет-банком и API: фильтрует атаки OWASP, отсекает ботов и гасит DDoS до того, как он дойдёт до серверов приложения.',
    tasks:['Блокировка атак на веб-приложения и API','Сохранение доступности сервиса во время DDoS','Ограничение перебора паролей и активности ботов','Временная защита до закрытия уязвимости (virtual patching)'],
    tabs:[
      {t:'Solar Space',d:'Облачная веб-защита: WAF, AntiDDoS и антибот.',list:['Фильтрация атак уровня приложения','Гашение волюметрического DDoS в облаке','Ограничение ботов и парсинга','Быстрое подключение без изменения инфраструктуры']},
      {t:'PT Application Firewall PRO',d:'WAF для высоконагруженных приложений.',list:['Изучение логики приложения и выявление аномалий','Защита API и микросервисов','Закрытие уязвимостей через virtual patching','Интеграция со сканерами и SOC']}
    ],
    cases:[{t:'Атака на интернет-банк',d:'Заблокированы автоматизированные попытки перебора паролей.'},
           {t:'Волна DDoS',d:'Сервис продолжил работу во время атаки в сотни гигабит.'},
           {t:'Злоупотребление API',d:'Ограничены боты, массово выгружавшие данные.'}],
    adv:[{t:'Два уровня защиты',d:'Волюметрические и прикладные атаки в одном решении.'},
         {t:'Быстрый запуск',d:'В облачной схеме защита включается за несколько часов.'},
         {t:'Мало ложных блокировок',d:'Правила настраиваются по поведению приложения.'},
         {t:'Прозрачность',d:'Подробные отчёты по атакам и трафику.'}],
    delivery:['Облачная защита (быстрое подключение)','WAF on-premise','Гибрид: DDoS в облаке, WAF у себя']
  },
  en:{
    name:'WAF and AntiDDoS',
    short:'Protection for web applications and APIs against attacks and DDoS.',
    intro:'A protection layer in front of your site, internet bank and APIs: it filters OWASP attacks, separates bots and absorbs DDoS before it reaches application servers.',
    tasks:['Blocking attacks on web applications and APIs','Keeping services available during DDoS','Limiting credential stuffing and bot activity','Temporary cover until a vulnerability is patched (virtual patching)'],
    tabs:[
      {t:'Solar Space',d:'Cloud web protection: WAF, AntiDDoS and bot management.',list:['Filtering of application-layer attacks','Volumetric DDoS absorbed in the cloud','Bot and scraping rate limiting','Fast onboarding with no infrastructure changes']},
      {t:'PT Application Firewall PRO',d:'A WAF for high-load applications.',list:['Learns application logic and detects anomalies','Protection for APIs and microservices','Closing vulnerabilities through virtual patching','Integration with scanners and SOC']}
    ],
    cases:[{t:'Attack on an internet bank',d:'Automated password guessing attempts were blocked.'},
           {t:'DDoS wave',d:'The service stayed available during a multi-hundred-gigabit attack.'},
           {t:'API abuse',d:'Bots bulk-downloading data were rate limited.'}],
    adv:[{t:'Two layers',d:'Volumetric and application attacks in one solution.'},
         {t:'Quick start',d:'Cloud protection can be switched on within hours.'},
         {t:'Few false blocks',d:'Rules adapt to the behaviour of the application.'},
         {t:'Transparency',d:'Detailed reports on attacks and traffic.'}],
    delivery:['Cloud protection (fast onboarding)','On-premise WAF','Hybrid: DDoS in the cloud, WAF on site']
  }
},

/* ---------------------------------------------------------------- 9 */
{ slug:'sast-dast', code:'AST', page:'sast-dast.html',
  uz:{
    name:'Kod analizatori (SAST / DAST)',
    short:"Kodni va ishlayotgan ilovani zaifliklarga tekshirish.",
    intro:"Statik tahlil kod ichidagi xatolarni, dinamik tahlil esa ishlayotgan ilovadagi haqiqiy zaifliklarni topadi. Ikkalasi CI/CD ga ulanadi va relizni to'xtatmaydi.",
    tasks:["Zaiflikni ishlab chiqish bosqichida topish","Ochiq kutubxonalar va sirlarni tekshirish","Reliz oldidan xavfsizlik darvozasini o'rnatish","Dasturchilarga tuzatish bo'yicha aniq ko'rsatma berish"],
    tabs:[
      {t:'Solar appScreener (SAST)',d:"Manba kodi va binar fayllar statik tahlili.",list:["Ko'plab dasturlash tillarini qo'llab-quvvatlash","Manba kodisiz — binar fayllarni tahlil qilish","CI/CD ga integratsiya va sifat darvozasi","Tuzatish bo'yicha tavsiyalar bilan hisobot"]},
      {t:'PT BlackBox (DAST)',d:"Ishlayotgan veb-ilovani tashqaridan tekshirish.",list:["Kodga kirishsiz qora quti tekshiruvi","Autentifikatsiyadan keyingi sahifalarni skanerlash","Zaiflikni tasdiqlash va takrorlash qadamlari","Muntazam avtomatik skanerlash jadvali"]}
    ],
    cases:[{t:'Reliz oldidan tekshiruv',d:"Kritik zaiflik ishlab chiqarishga chiqishidan oldin yopildi."},
           {t:'Meros kod',d:"Manba kodi yo'q ilova binar tahlil orqali tekshirildi."},
           {t:'Muvofiqlik',d:"Regulyator talab qilgan xavfsizlik tekshiruvi hisoboti tayyorlandi."}],
    adv:[{t:'SAST va DAST birgalikda',d:"Kod ichidagi va ishlash paytidagi zaifliklar bir hisobotda."},
         {t:'CI/CD ga mos',d:"Tekshiruv pipeline ichida avtomatik ishlaydi."},
         {t:'Kam shovqin',d:"Xatolar ustuvorlik bo'yicha saralanadi."},
         {t:'Dasturchi tiliga tushunarli',d:"Har bir topilma uchun kod satri va tuzatish namunasi."}],
    delivery:["On-premise platforma","Bulutli skanerlash","Bir martalik audit (xizmat sifatida)"]
  },
  ru:{
    name:'Анализатор кода (SAST / DAST)',
    short:'Проверка кода и работающего приложения на уязвимости.',
    intro:'Статический анализ находит ошибки в коде, динамический — реальные уязвимости в работающем приложении. Оба подключаются к CI/CD и не тормозят релизы.',
    tasks:['Находить уязвимости на этапе разработки','Проверять открытые библиотеки и секреты в коде','Ставить security gate перед релизом','Давать разработчикам конкретные инструкции по исправлению'],
    tabs:[
      {t:'Solar appScreener (SAST)',d:'Статический анализ исходного кода и бинарных файлов.',list:['Поддержка большого числа языков программирования','Анализ бинарных файлов без исходного кода','Интеграция в CI/CD и gate качества','Отчёт с рекомендациями по исправлению']},
      {t:'PT BlackBox (DAST)',d:'Проверка работающего веб-приложения снаружи.',list:['Тестирование методом чёрного ящика без доступа к коду','Сканирование страниц за авторизацией','Подтверждение уязвимости и шаги воспроизведения','Регулярные автоматические запуски по расписанию']}
    ],
    cases:[{t:'Проверка перед релизом',d:'Критическая уязвимость закрыта до выхода в продуктив.'},
           {t:'Унаследованный код',d:'Приложение без исходников проверено бинарным анализом.'},
           {t:'Соответствие требованиям',d:'Подготовлен отчёт о проверке защищённости для регулятора.'}],
    adv:[{t:'SAST и DAST вместе',d:'Уязвимости в коде и в рантайме — в одном отчёте.'},
         {t:'Готово к CI/CD',d:'Проверка выполняется автоматически внутри пайплайна.'},
         {t:'Меньше шума',d:'Находки приоритизируются по критичности.'},
         {t:'Понятно разработчику',d:'Для каждой находки — строка кода и пример исправления.'}],
    delivery:['Платформа on-premise','Облачное сканирование','Разовый аудит как услуга']
  },
  en:{
    name:'Code analyzer (SAST / DAST)',
    short:'Testing source code and running applications for vulnerabilities.',
    intro:'Static analysis finds flaws in the code, dynamic analysis finds real vulnerabilities in the running application. Both plug into CI/CD without slowing releases.',
    tasks:['Finding vulnerabilities during development','Checking open-source libraries and secrets in code','Setting a security gate before release','Giving developers concrete remediation steps'],
    tabs:[
      {t:'Solar appScreener (SAST)',d:'Static analysis of source code and binaries.',list:['Support for a wide range of programming languages','Binary analysis when no source code is available','CI/CD integration and quality gate','Reports with remediation guidance']},
      {t:'PT BlackBox (DAST)',d:'External testing of a running web application.',list:['Black-box testing without access to the code','Scanning of pages behind authentication','Vulnerability confirmation with reproduction steps','Regular scheduled automated scans']}
    ],
    cases:[{t:'Pre-release check',d:'A critical vulnerability was fixed before going to production.'},
           {t:'Legacy code',d:'An application without sources was checked through binary analysis.'},
           {t:'Compliance',d:'A security assessment report was prepared for the regulator.'}],
    adv:[{t:'SAST and DAST together',d:'Code and runtime vulnerabilities in one report.'},
         {t:'CI/CD ready',d:'Scans run automatically inside the pipeline.'},
         {t:'Less noise',d:'Findings are prioritised by severity.'},
         {t:'Developer friendly',d:'Every finding points to the code line with a fix example.'}],
    delivery:['On-premise platform','Cloud scanning','One-off audit as a service']
  }
}
];
