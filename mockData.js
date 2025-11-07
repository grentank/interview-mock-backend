// Моковые данные для сервера

// Клиенты
const clients = [
  {
    id: 2196574,
    firstName: "Иван",
    lastName: "Иванов",
    email: "ivanov@example.com",
    phone: "+7 (999) 123-45-67",
    company: "ООО Рога и Копыта",
    status: "active",
    registrationDate: "2023-01-15",
    balance: 150000,
  },
  {
    id: 2196575,
    firstName: "Петр",
    lastName: "Петров",
    email: "petrov@example.com",
    phone: "+7 (999) 234-56-78",
    company: "ИП Петров",
    status: "active",
    registrationDate: "2023-02-20",
    balance: 75000,
  },
  {
    id: 2196576,
    firstName: "Сергей",
    lastName: "Сидоров",
    email: "sidorov@example.com",
    phone: "+7 (999) 345-67-89",
    company: "ЗАО Сидоров и Партнеры",
    status: "inactive",
    registrationDate: "2023-03-10",
    balance: 0,
  },
  {
    id: 2196577,
    firstName: "Мария",
    lastName: "Иванова",
    email: "m.ivanova@example.com",
    phone: "+7 (999) 456-78-90",
    company: "ООО Мария",
    status: "active",
    registrationDate: "2023-04-05",
    balance: 250000,
  },
  {
    id: 2196578,
    firstName: "Анна",
    lastName: "Смирнова",
    email: "smirnova@example.com",
    phone: "+7 (999) 567-89-01",
    company: "ИП Смирнова А.В.",
    status: "active",
    registrationDate: "2023-05-12",
    balance: 180000,
  },
  {
    id: 2196579,
    firstName: "Дмитрий",
    lastName: "Кузнецов",
    email: "kuznetsov@example.com",
    phone: "+7 (999) 678-90-12",
    company: "ООО Кузница",
    status: "active",
    registrationDate: "2023-06-18",
    balance: 95000,
  },
  {
    id: 2196580,
    firstName: "Елена",
    lastName: "Попова",
    email: "popova@example.com",
    phone: "+7 (999) 789-01-23",
    company: "ЗАО Попова",
    status: "inactive",
    registrationDate: "2023-07-22",
    balance: 0,
  },
  {
    id: 2196581,
    firstName: "Александр",
    lastName: "Соколов",
    email: "sokolov@example.com",
    phone: "+7 (999) 890-12-34",
    company: "ИП Соколов",
    status: "active",
    registrationDate: "2023-08-30",
    balance: 120000,
  },
  {
    id: 2196582,
    firstName: "Ольга",
    lastName: "Лебедева",
    email: "lebedeva@example.com",
    phone: "+7 (999) 901-23-45",
    company: "ООО Лебедь",
    status: "active",
    registrationDate: "2023-09-15",
    balance: 200000,
  },
  {
    id: 2196583,
    firstName: "Николай",
    lastName: "Козлов",
    email: "kozlov@example.com",
    phone: "+7 (999) 012-34-56",
    company: "ИП Козлов Н.И.",
    status: "active",
    registrationDate: "2023-10-01",
    balance: 85000,
  },
];

// Задачи (по 5 задач для каждого клиента)
const tasks = [
  // Задачи для клиента 2196574 (Иванов)
  {
    id: 456,
    clientId: 2196574,
    title: "Настройка CRM системы",
    description: "Необходимо настроить интеграцию с CRM",
    status: "in_progress",
    priority: "high",
    createdAt: "2024-11-01T10:00:00Z",
    dueDate: "2024-11-15",
  },
  {
    id: 457,
    clientId: 2196574,
    title: "Обучение сотрудников",
    description: "Провести обучение по новой системе",
    status: "pending",
    priority: "medium",
    createdAt: "2024-11-02T11:30:00Z",
    dueDate: "2024-11-20",
  },
  {
    id: 458,
    clientId: 2196574,
    title: "Подготовка отчетности",
    description: "Сформировать квартальный отчет",
    status: "completed",
    priority: "high",
    createdAt: "2024-10-15T09:00:00Z",
    dueDate: "2024-10-31",
  },
  {
    id: 459,
    clientId: 2196574,
    title: "Миграция данных",
    description: "Перенести данные из старой системы",
    status: "in_progress",
    priority: "critical",
    createdAt: "2024-11-03T14:20:00Z",
    dueDate: "2024-11-10",
  },
  {
    id: 460,
    clientId: 2196574,
    title: "Тестирование функционала",
    description: "Провести полное тестирование системы",
    status: "pending",
    priority: "medium",
    createdAt: "2024-11-04T16:45:00Z",
    dueDate: "2024-11-25",
  },

  // Задачи для клиента 2196575 (Петров)
  {
    id: 461,
    clientId: 2196575,
    title: "Разработка дизайна",
    description: "Создать макеты для нового сайта",
    status: "in_progress",
    priority: "high",
    createdAt: "2024-11-01T08:00:00Z",
    dueDate: "2024-11-12",
  },
  {
    id: 462,
    clientId: 2196575,
    title: "Контент для сайта",
    description: "Подготовить тексты и изображения",
    status: "pending",
    priority: "medium",
    createdAt: "2024-11-02T10:15:00Z",
    dueDate: "2024-11-18",
  },
  {
    id: 463,
    clientId: 2196575,
    title: "SEO оптимизация",
    description: "Настроить SEO параметры",
    status: "pending",
    priority: "low",
    createdAt: "2024-11-03T13:30:00Z",
    dueDate: "2024-11-30",
  },
  {
    id: 464,
    clientId: 2196575,
    title: "Настройка хостинга",
    description: "Выбрать и настроить хостинг",
    status: "completed",
    priority: "high",
    createdAt: "2024-10-20T09:00:00Z",
    dueDate: "2024-10-25",
  },
  {
    id: 465,
    clientId: 2196575,
    title: "Регистрация домена",
    description: "Зарегистрировать доменное имя",
    status: "completed",
    priority: "high",
    createdAt: "2024-10-18T10:00:00Z",
    dueDate: "2024-10-19",
  },

  // Задачи для клиента 2196576 (Сидоров)
  {
    id: 466,
    clientId: 2196576,
    title: "Аудит безопасности",
    description: "Провести аудит безопасности системы",
    status: "pending",
    priority: "critical",
    createdAt: "2024-11-01T12:00:00Z",
    dueDate: "2024-11-08",
  },
  {
    id: 467,
    clientId: 2196576,
    title: "Обновление ПО",
    description: "Обновить все системное ПО",
    status: "pending",
    priority: "high",
    createdAt: "2024-11-02T14:00:00Z",
    dueDate: "2024-11-10",
  },
  {
    id: 468,
    clientId: 2196576,
    title: "Резервное копирование",
    description: "Настроить систему бэкапов",
    status: "in_progress",
    priority: "high",
    createdAt: "2024-11-03T15:30:00Z",
    dueDate: "2024-11-12",
  },
  {
    id: 469,
    clientId: 2196576,
    title: "Документация",
    description: "Создать техническую документацию",
    status: "pending",
    priority: "medium",
    createdAt: "2024-11-04T11:00:00Z",
    dueDate: "2024-11-20",
  },
  {
    id: 470,
    clientId: 2196576,
    title: "Мониторинг системы",
    description: "Настроить мониторинг серверов",
    status: "completed",
    priority: "high",
    createdAt: "2024-10-25T09:30:00Z",
    dueDate: "2024-10-30",
  },

  // Задачи для клиента 2196577 (Иванова)
  {
    id: 471,
    clientId: 2196577,
    title: "Маркетинговая кампания",
    description: "Запустить рекламную кампанию",
    status: "in_progress",
    priority: "high",
    createdAt: "2024-11-01T09:00:00Z",
    dueDate: "2024-11-15",
  },
  {
    id: 472,
    clientId: 2196577,
    title: "Анализ конкурентов",
    description: "Провести анализ рынка",
    status: "completed",
    priority: "medium",
    createdAt: "2024-10-28T10:00:00Z",
    dueDate: "2024-11-05",
  },
  {
    id: 473,
    clientId: 2196577,
    title: "Email-рассылка",
    description: "Создать и запустить email-кампанию",
    status: "pending",
    priority: "medium",
    createdAt: "2024-11-02T13:00:00Z",
    dueDate: "2024-11-18",
  },
  {
    id: 474,
    clientId: 2196577,
    title: "SMM стратегия",
    description: "Разработать стратегию в соц. сетях",
    status: "in_progress",
    priority: "high",
    createdAt: "2024-11-03T10:30:00Z",
    dueDate: "2024-11-20",
  },
  {
    id: 475,
    clientId: 2196577,
    title: "Контент-план",
    description: "Составить контент-план на месяц",
    status: "pending",
    priority: "medium",
    createdAt: "2024-11-04T14:00:00Z",
    dueDate: "2024-11-10",
  },

  // Задачи для клиента 2196578 (Смирнова)
  {
    id: 476,
    clientId: 2196578,
    title: "Разработка API",
    description: "Создать REST API для приложения",
    status: "in_progress",
    priority: "critical",
    createdAt: "2024-11-01T11:00:00Z",
    dueDate: "2024-11-14",
  },
  {
    id: 477,
    clientId: 2196578,
    title: "Тестирование API",
    description: "Написать тесты для API",
    status: "pending",
    priority: "high",
    createdAt: "2024-11-02T12:30:00Z",
    dueDate: "2024-11-16",
  },
  {
    id: 478,
    clientId: 2196578,
    title: "Документация API",
    description: "Создать документацию Swagger",
    status: "pending",
    priority: "medium",
    createdAt: "2024-11-03T14:00:00Z",
    dueDate: "2024-11-18",
  },
  {
    id: 479,
    clientId: 2196578,
    title: "Деплой на продакшн",
    description: "Развернуть приложение на боевом сервере",
    status: "pending",
    priority: "high",
    createdAt: "2024-11-04T15:30:00Z",
    dueDate: "2024-11-22",
  },
  {
    id: 480,
    clientId: 2196578,
    title: "Мобильное приложение",
    description: "Разработать мобильную версию",
    status: "in_progress",
    priority: "medium",
    createdAt: "2024-11-05T10:00:00Z",
    dueDate: "2024-12-01",
  },

  // Задачи для клиента 2196579 (Кузнецов)
  {
    id: 481,
    clientId: 2196579,
    title: "Консультация",
    description: "Провести консультацию по бизнес-процессам",
    status: "completed",
    priority: "medium",
    createdAt: "2024-10-30T09:00:00Z",
    dueDate: "2024-11-01",
  },
  {
    id: 482,
    clientId: 2196579,
    title: "Оптимизация процессов",
    description: "Оптимизировать рабочие процессы",
    status: "in_progress",
    priority: "high",
    createdAt: "2024-11-01T10:30:00Z",
    dueDate: "2024-11-15",
  },
  {
    id: 483,
    clientId: 2196579,
    title: "Внедрение CRM",
    description: "Внедрить CRM систему",
    status: "pending",
    priority: "high",
    createdAt: "2024-11-02T11:00:00Z",
    dueDate: "2024-11-20",
  },
  {
    id: 484,
    clientId: 2196579,
    title: "Обучение персонала",
    description: "Обучить сотрудников работе с CRM",
    status: "pending",
    priority: "medium",
    createdAt: "2024-11-03T13:30:00Z",
    dueDate: "2024-11-25",
  },
  {
    id: 485,
    clientId: 2196579,
    title: "Аналитика продаж",
    description: "Настроить аналитику и отчеты",
    status: "pending",
    priority: "low",
    createdAt: "2024-11-04T15:00:00Z",
    dueDate: "2024-11-30",
  },

  // Задачи для клиента 2196580 (Попова)
  {
    id: 486,
    clientId: 2196580,
    title: "Юридическая консультация",
    description: "Провести консультацию по договорам",
    status: "completed",
    priority: "high",
    createdAt: "2024-10-28T10:00:00Z",
    dueDate: "2024-10-30",
  },
  {
    id: 487,
    clientId: 2196580,
    title: "Подготовка договора",
    description: "Подготовить договор на услуги",
    status: "completed",
    priority: "high",
    createdAt: "2024-10-29T11:00:00Z",
    dueDate: "2024-11-02",
  },
  {
    id: 488,
    clientId: 2196580,
    title: "Проверка документов",
    description: "Проверить учредительные документы",
    status: "pending",
    priority: "medium",
    createdAt: "2024-11-01T09:00:00Z",
    dueDate: "2024-11-10",
  },
  {
    id: 489,
    clientId: 2196580,
    title: "Регистрация ИП",
    description: "Помочь с регистрацией ИП",
    status: "pending",
    priority: "high",
    createdAt: "2024-11-02T10:30:00Z",
    dueDate: "2024-11-15",
  },
  {
    id: 490,
    clientId: 2196580,
    title: "Налоговая оптимизация",
    description: "Консультация по налогам",
    status: "pending",
    priority: "medium",
    createdAt: "2024-11-03T12:00:00Z",
    dueDate: "2024-11-20",
  },

  // Задачи для клиента 2196581 (Соколов)
  {
    id: 491,
    clientId: 2196581,
    title: "Бухгалтерское сопровождение",
    description: "Ведение бухгалтерии за октябрь",
    status: "completed",
    priority: "high",
    createdAt: "2024-10-01T09:00:00Z",
    dueDate: "2024-10-31",
  },
  {
    id: 492,
    clientId: 2196581,
    title: "Сдача отчетности",
    description: "Подготовка и сдача отчетов в ИФНС",
    status: "in_progress",
    priority: "critical",
    createdAt: "2024-11-01T10:00:00Z",
    dueDate: "2024-11-10",
  },
  {
    id: 493,
    clientId: 2196581,
    title: "Расчет зарплаты",
    description: "Расчет зарплаты сотрудникам",
    status: "pending",
    priority: "high",
    createdAt: "2024-11-02T11:30:00Z",
    dueDate: "2024-11-15",
  },
  {
    id: 494,
    clientId: 2196581,
    title: "Инвентаризация",
    description: "Провести инвентаризацию склада",
    status: "pending",
    priority: "medium",
    createdAt: "2024-11-03T13:00:00Z",
    dueDate: "2024-11-25",
  },
  {
    id: 495,
    clientId: 2196581,
    title: "Финансовый анализ",
    description: "Провести финансовый анализ деятельности",
    status: "pending",
    priority: "low",
    createdAt: "2024-11-04T14:30:00Z",
    dueDate: "2024-11-30",
  },

  // Задачи для клиента 2196582 (Лебедева)
  {
    id: 496,
    clientId: 2196582,
    title: "Дизайн логотипа",
    description: "Разработать фирменный стиль",
    status: "completed",
    priority: "high",
    createdAt: "2024-10-20T10:00:00Z",
    dueDate: "2024-10-31",
  },
  {
    id: 497,
    clientId: 2196582,
    title: "Брендбук",
    description: "Создать брендбук компании",
    status: "in_progress",
    priority: "high",
    createdAt: "2024-11-01T11:00:00Z",
    dueDate: "2024-11-15",
  },
  {
    id: 498,
    clientId: 2196582,
    title: "Визитки и листовки",
    description: "Разработать макеты визиток",
    status: "pending",
    priority: "medium",
    createdAt: "2024-11-02T12:00:00Z",
    dueDate: "2024-11-18",
  },
  {
    id: 499,
    clientId: 2196582,
    title: "Упаковка продукции",
    description: "Дизайн упаковки",
    status: "pending",
    priority: "medium",
    createdAt: "2024-11-03T13:30:00Z",
    dueDate: "2024-11-22",
  },
  {
    id: 500,
    clientId: 2196582,
    title: "Презентация",
    description: "Создать презентацию для инвесторов",
    status: "pending",
    priority: "high",
    createdAt: "2024-11-04T15:00:00Z",
    dueDate: "2024-11-12",
  },

  // Задачи для клиента 2196583 (Козлов)
  {
    id: 501,
    clientId: 2196583,
    title: "Настройка сервера",
    description: "Настроить VPS сервер",
    status: "completed",
    priority: "high",
    createdAt: "2024-10-25T09:00:00Z",
    dueDate: "2024-10-28",
  },
  {
    id: 502,
    clientId: 2196583,
    title: "Установка SSL",
    description: "Установить SSL сертификат",
    status: "completed",
    priority: "high",
    createdAt: "2024-10-26T10:00:00Z",
    dueDate: "2024-10-29",
  },
  {
    id: 503,
    clientId: 2196583,
    title: "Миграция сайта",
    description: "Перенести сайт на новый хостинг",
    status: "in_progress",
    priority: "critical",
    createdAt: "2024-11-01T11:30:00Z",
    dueDate: "2024-11-08",
  },
  {
    id: 504,
    clientId: 2196583,
    title: "Оптимизация БД",
    description: "Оптимизировать базу данных",
    status: "pending",
    priority: "medium",
    createdAt: "2024-11-02T13:00:00Z",
    dueDate: "2024-11-15",
  },
  {
    id: 505,
    clientId: 2196583,
    title: "Настройка CDN",
    description: "Подключить CDN для ускорения сайта",
    status: "pending",
    priority: "low",
    createdAt: "2024-11-03T14:30:00Z",
    dueDate: "2024-11-20",
  },
];

// Комментарии (0, 1 или 2 комментария к каждой задаче)
const comments = [
  // Комментарии к задаче 456
  {
    id: 1,
    taskId: 456,
    author: "Менеджер Алексей",
    text: "Начали работу над интеграцией",
    createdAt: "2024-11-01T11:00:00Z",
  },
  {
    id: 2,
    taskId: 456,
    author: "Разработчик Игорь",
    text: "API ключи получены, можно продолжать",
    createdAt: "2024-11-02T09:30:00Z",
  },

  // Комментарии к задаче 457
  {
    id: 3,
    taskId: 457,
    author: "HR Мария",
    text: "Согласована дата обучения на 20 ноября",
    createdAt: "2024-11-02T12:00:00Z",
  },

  // Задача 458 без комментариев

  // Комментарии к задаче 459
  {
    id: 4,
    taskId: 459,
    author: "Администратор Сергей",
    text: "Бэкап старой системы создан",
    createdAt: "2024-11-03T15:00:00Z",
  },
  {
    id: 5,
    taskId: 459,
    author: "Разработчик Игорь",
    text: "Миграция на 50%, без критических ошибок",
    createdAt: "2024-11-04T10:00:00Z",
  },

  // Задача 460 без комментариев

  // Комментарии к задаче 461
  {
    id: 6,
    taskId: 461,
    author: "Дизайнер Анна",
    text: "Первые макеты готовы, жду обратной связи",
    createdAt: "2024-11-01T16:00:00Z",
  },
  {
    id: 43,
    taskId: 461,
    author: "Петров",
    text: "Это было ужасно, сервис никакущий. Дизайн совершенно не соответствует моим ожиданиям, меня не поняли",
    createdAt: "2024-11-02T10:00:00Z",
  },

  // Задача 462 без комментариев

  // Комментарии к задаче 463
  {
    id: 7,
    taskId: 463,
    author: "SEO-специалист Олег",
    text: "Подобрал список ключевых слов",
    createdAt: "2024-11-03T14:30:00Z",
  },
  {
    id: 8,
    taskId: 463,
    author: "Петров",
    text: "Отлично, согласовываю",
    createdAt: "2024-11-03T15:00:00Z",
  },

  // Задача 464 без комментариев

  // Комментарии к задаче 465
  {
    id: 9,
    taskId: 465,
    author: "Менеджер Алексей",
    text: "Домен успешно зарегистрирован",
    createdAt: "2024-10-19T11:00:00Z",
  },

  // Задача 466 без комментариев

  // Комментарии к задаче 467
  {
    id: 10,
    taskId: 467,
    author: "Администратор Сергей",
    text: "Составлен список ПО для обновления",
    createdAt: "2024-11-02T15:00:00Z",
  },
  {
    id: 11,
    taskId: 467,
    author: "Сидоров",
    text: "Когда можно начать?",
    createdAt: "2024-11-02T16:00:00Z",
  },

  // Комментарии к задаче 468
  {
    id: 12,
    taskId: 468,
    author: "Администратор Сергей",
    text: "Настроен ежедневный бэкап",
    createdAt: "2024-11-03T17:00:00Z",
  },

  // Задача 469 без комментариев

  // Комментарии к задаче 470
  {
    id: 13,
    taskId: 470,
    author: "DevOps Михаил",
    text: "Мониторинг работает стабильно",
    createdAt: "2024-10-30T12:00:00Z",
  },

  // Комментарии к задаче 471
  {
    id: 14,
    taskId: 471,
    author: "Маркетолог Елена",
    text: "Кампания запущена в Яндекс.Директ",
    createdAt: "2024-11-01T12:00:00Z",
  },
  {
    id: 15,
    taskId: 471,
    author: "Иванова",
    text: "Уже вижу первые результаты, спасибо!",
    createdAt: "2024-11-02T10:00:00Z",
  },

  // Задача 472 без комментариев

  // Комментарии к задаче 473
  {
    id: 16,
    taskId: 473,
    author: "Маркетолог Елена",
    text: "Подготовлен дизайн писем",
    createdAt: "2024-11-02T14:00:00Z",
  },

  // Задача 474 без комментариев

  // Комментарии к задаче 475
  {
    id: 17,
    taskId: 475,
    author: "SMM Дарья",
    text: "Черновик контент-плана готов",
    createdAt: "2024-11-04T15:00:00Z",
  },
  {
    id: 18,
    taskId: 475,
    author: "Иванова",
    text: "Посмотрю в течение дня",
    createdAt: "2024-11-04T16:00:00Z",
  },

  // Комментарии к задаче 476
  {
    id: 19,
    taskId: 476,
    author: "Backend-разработчик Владимир",
    text: "Основные эндпоинты реализованы",
    createdAt: "2024-11-01T15:00:00Z",
  },
  {
    id: 44,
    taskId: 476,
    author: "Смирнова",
    text: "У меня возникла огромная проблема, меня не поняли. API работает нестабильно, постоянно падает",
    createdAt: "2024-11-02T14:30:00Z",
  },

  // Задача 477 без комментариев

  // Комментарии к задаче 478
  {
    id: 20,
    taskId: 478,
    author: "Технический писатель Ирина",
    text: "Начала работу над документацией",
    createdAt: "2024-11-03T15:30:00Z",
  },
  {
    id: 21,
    taskId: 478,
    author: "Смирнова",
    text: "Нужен детальный API reference",
    createdAt: "2024-11-03T16:00:00Z",
  },

  // Задача 479 без комментариев

  // Комментарии к задаче 480
  {
    id: 22,
    taskId: 480,
    author: "Mobile-разработчик Антон",
    text: "Прототип готов для iOS",
    createdAt: "2024-11-05T14:00:00Z",
  },

  // Комментарии к задаче 481
  {
    id: 23,
    taskId: 481,
    author: "Консультант Павел",
    text: "Консультация проведена, выявлены узкие места",
    createdAt: "2024-11-01T12:00:00Z",
  },

  // Задача 482 без комментариев

  // Комментарии к задаче 483
  {
    id: 24,
    taskId: 483,
    author: "Менеджер Алексей",
    text: "Подобрали оптимальную CRM систему",
    createdAt: "2024-11-02T13:00:00Z",
  },
  {
    id: 25,
    taskId: 483,
    author: "Кузнецов",
    text: "Согласовано, начинаем внедрение",
    createdAt: "2024-11-02T14:00:00Z",
  },

  // Задача 484 без комментариев

  // Комментарии к задаче 485
  {
    id: 26,
    taskId: 485,
    author: "Аналитик Виктория",
    text: "Разработаны шаблоны отчетов",
    createdAt: "2024-11-04T16:00:00Z",
  },

  // Задача 486 без комментариев

  // Комментарии к задаче 487
  {
    id: 27,
    taskId: 487,
    author: "Юрист Екатерина",
    text: "Договор подготовлен и отправлен",
    createdAt: "2024-10-30T12:00:00Z",
  },

  // Задача 488 без комментариев

  // Комментарии к задаче 489
  {
    id: 28,
    taskId: 489,
    author: "Юрист Екатерина",
    text: "Собираем пакет документов",
    createdAt: "2024-11-02T11:30:00Z",
  },
  {
    id: 29,
    taskId: 489,
    author: "Попова",
    text: "Это просто кошмар! Сервис отвратительный, я очень недовольна. Ничего не работает как надо, у меня возникла огромная проблема",
    createdAt: "2024-11-02T13:00:00Z",
  },

  // Комментарии к задаче 490
  {
    id: 30,
    taskId: 490,
    author: "Налоговый консультант Андрей",
    text: "Подготовил рекомендации по оптимизации",
    createdAt: "2024-11-03T13:00:00Z",
  },

  // Задача 491 без комментариев

  // Комментарии к задаче 492
  {
    id: 31,
    taskId: 492,
    author: "Бухгалтер Светлана",
    text: "Отчеты практически готовы",
    createdAt: "2024-11-02T10:00:00Z",
  },

  // Задача 493 без комментариев

  // Комментарии к задаче 494
  {
    id: 32,
    taskId: 494,
    author: "Бухгалтер Светлана",
    text: "Согласовываем дату проведения",
    createdAt: "2024-11-03T14:00:00Z",
  },
  {
    id: 33,
    taskId: 494,
    author: "Соколов",
    text: "Можем провести 20-22 ноября",
    createdAt: "2024-11-03T15:00:00Z",
  },

  // Комментарии к задаче 495
  {
    id: 34,
    taskId: 495,
    author: "Финансовый аналитик Роман",
    text: "Собираю данные для анализа",
    createdAt: "2024-11-04T15:30:00Z",
  },

  // Задача 496 без комментариев

  // Комментарии к задаче 497
  {
    id: 35,
    taskId: 497,
    author: "Дизайнер Анна",
    text: "Брендбук на 70% готов",
    createdAt: "2024-11-02T14:00:00Z",
  },

  // Задача 498 без комментариев

  // Комментарии к задаче 499
  {
    id: 36,
    taskId: 499,
    author: "Дизайнер Анна",
    text: "Подготовила 3 варианта упаковки",
    createdAt: "2024-11-03T15:00:00Z",
  },
  {
    id: 37,
    taskId: 499,
    author: "Лебедева",
    text: "Понравился второй вариант",
    createdAt: "2024-11-03T16:00:00Z",
  },

  // Комментарии к задаче 500
  {
    id: 38,
    taskId: 500,
    author: "Презентатор Денис",
    text: "Первая версия готова к просмотру",
    createdAt: "2024-11-05T10:00:00Z",
  },

  // Задача 501 без комментариев

  // Комментарии к задаче 502
  {
    id: 39,
    taskId: 502,
    author: "Администратор Сергей",
    text: "SSL установлен и работает",
    createdAt: "2024-10-29T11:00:00Z",
  },

  // Задача 503 без комментариев

  // Комментарии к задаче 504
  {
    id: 40,
    taskId: 504,
    author: "DBA Георгий",
    text: "Проведен анализ, найдены медленные запросы",
    createdAt: "2024-11-02T14:00:00Z",
  },
  {
    id: 41,
    taskId: 504,
    author: "Козлов",
    text: "Когда можно провести оптимизацию?",
    createdAt: "2024-11-02T15:00:00Z",
  },

  // Комментарии к задаче 505
  {
    id: 42,
    taskId: 505,
    author: "DevOps Михаил",
    text: "Выбрал Cloudflare как CDN провайдера",
    createdAt: "2024-11-03T16:00:00Z",
  },
];

module.exports = {
  clients,
  tasks,
  comments,
};
