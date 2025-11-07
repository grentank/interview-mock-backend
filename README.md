# Mock Server для интервью

Моковый сервер на Node.js с REST API для демонстрации работы с клиентами, задачами и комментариями.

## Описание

Сервер предоставляет три эндпоинта для работы с моковыми данными:
- Поиск клиентов
- Получение задач клиента
- Получение комментариев к задаче

## Технологии

- Node.js
- Express.js
- CORS

## Установка и запуск

### 1. Клонирование репозитория

```bash
git clone git@github.com:grentank/interview-mock-backend.git
cd interview-mock-backend
```

### 2. Установка зависимостей

```bash
npm install
```

### 3. Запуск сервера

```bash
npm start
```

Сервер запустится на `http://localhost:3000`

## API Эндпоинты

### 1. Поиск клиентов

**GET** `/api/v1/clients`

Поиск клиентов по имени, фамилии, email, компании или телефону.

**Параметры запроса:**
- `search` (string, optional) - строка для поиска
- `limit` (number, optional, default: 10) - максимальное количество результатов

**Пример запроса:**
```bash
curl "http://localhost:3000/api/v1/clients?search=Иванов&limit=5"
```

**Пример ответа:**
```json
{
  "success": true,
  "data": [
    {
      "id": 2196574,
      "firstName": "Иван",
      "lastName": "Иванов",
      "email": "ivanov@example.com",
      "phone": "+7 (999) 123-45-67",
      "company": "ООО Рога и Копыта",
      "status": "active",
      "registrationDate": "2023-01-15",
      "balance": 150000
    }
  ],
  "meta": {
    "total": 2,
    "limit": 5,
    "returned": 2
  }
}
```

### 2. Получение задач клиента

**GET** `/api/v1/tasks`

Получение задач конкретного клиента, отсортированных по дате создания (последние первыми).

**Параметры запроса:**
- `client_id` (number, **required**) - ID клиента
- `limit` (number, optional, default: 10) - максимальное количество результатов

**Пример запроса:**
```bash
curl "http://localhost:3000/api/v1/tasks?client_id=2196574&limit=3"
```

**Пример ответа:**
```json
{
  "success": true,
  "data": [
    {
      "id": 460,
      "clientId": 2196574,
      "title": "Тестирование функционала",
      "description": "Провести полное тестирование системы",
      "status": "pending",
      "priority": "medium",
      "createdAt": "2024-11-04T16:45:00Z",
      "dueDate": "2024-11-25"
    },
    {
      "id": 459,
      "clientId": 2196574,
      "title": "Миграция данных",
      "description": "Перенести данные из старой системы",
      "status": "in_progress",
      "priority": "critical",
      "createdAt": "2024-11-03T14:20:00Z",
      "dueDate": "2024-11-10"
    },
    {
      "id": 457,
      "clientId": 2196574,
      "title": "Обучение сотрудников",
      "description": "Провести обучение по новой системе",
      "status": "pending",
      "priority": "medium",
      "createdAt": "2024-11-02T11:30:00Z",
      "dueDate": "2024-11-20"
    }
  ],
  "meta": {
    "clientId": 2196574,
    "clientName": "Иван Иванов",
    "total": 5,
    "limit": 3,
    "returned": 3
  }
}
```

### 3. Получение комментариев к задаче

**GET** `/api/v1/tasks/:taskId/comments`

Получение всех комментариев к конкретной задаче.

**Параметры пути:**
- `taskId` (number, **required**) - ID задачи

**Пример запроса:**
```bash
curl "http://localhost:3000/api/v1/tasks/456/comments"
```

**Пример ответа:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "taskId": 456,
      "author": "Менеджер Алексей",
      "text": "Начали работу над интеграцией",
      "createdAt": "2024-11-01T11:00:00Z"
    },
    {
      "id": 2,
      "taskId": 456,
      "author": "Разработчик Игорь",
      "text": "API ключи получены, можно продолжать",
      "createdAt": "2024-11-02T09:30:00Z"
    }
  ],
  "meta": {
    "taskId": 456,
    "taskTitle": "Настройка CRM системы",
    "total": 2
  }
}
```

## Структура данных

### Клиент (Client)
```typescript
{
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  status: "active" | "inactive";
  registrationDate: string;
  balance: number;
}
```

### Задача (Task)
```typescript
{
  id: number;
  clientId: number;
  title: string;
  description: string;
  status: "pending" | "in_progress" | "completed";
  priority: "low" | "medium" | "high" | "critical";
  createdAt: string;
  dueDate: string;
}
```

### Комментарий (Comment)
```typescript
{
  id: number;
  taskId: number;
  author: string;
  text: string;
  createdAt: string;
}
```

## Моковые данные

Сервер содержит:
- **10 клиентов** с различными статусами и данными
- **50 задач** (по 5 задач на каждого клиента)
- **42 комментария** (0, 1 или 2 комментария к каждой задаче)

## Коды ответов

- `200` - Успешный запрос
- `400` - Неверные параметры запроса
- `404` - Ресурс не найден
- `500` - Внутренняя ошибка сервера

## Примеры использования

### JavaScript (fetch)

```javascript
// Поиск клиентов
fetch('http://localhost:3000/api/v1/clients?search=Иванов&limit=5')
  .then(response => response.json())
  .then(data => console.log(data));

// Получение задач
fetch('http://localhost:3000/api/v1/tasks?client_id=2196574&limit=3')
  .then(response => response.json())
  .then(data => console.log(data));

// Получение комментариев
fetch('http://localhost:3000/api/v1/tasks/456/comments')
  .then(response => response.json())
  .then(data => console.log(data));
```

### Python (requests)

```python
import requests

# Поиск клиентов
response = requests.get('http://localhost:3000/api/v1/clients', 
                       params={'search': 'Иванов', 'limit': 5})
print(response.json())

# Получение задач
response = requests.get('http://localhost:3000/api/v1/tasks',
                       params={'client_id': 2196574, 'limit': 3})
print(response.json())

# Получение комментариев
response = requests.get('http://localhost:3000/api/v1/tasks/456/comments')
print(response.json())
```

## Структура проекта

```
interview-mock-backend/
├── server.js          # Основной файл сервера
├── mockData.js        # Моковые данные
├── package.json       # Зависимости проекта
├── .gitignore        # Git ignore файл
└── README.md         # Документация
```

## Разработка

Сервер использует Express.js и поддерживает CORS для возможности использования из браузера.

### Логирование

Все запросы логируются в консоль в формате:
```
2024-11-07T10:30:00.000Z - GET /api/v1/clients?search=Иванов&limit=5
```

## Лицензия

ISC

## Автор

Создано для интервью

