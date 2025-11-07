const express = require('express');
const cors = require('cors');
const { clients, tasks, comments } = require('./mockData');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Логирование запросов
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Корневой эндпоинт
app.get('/', (req, res) => {
  res.json({
    message: 'Mock Server API для интервью',
    version: '1.0.0',
    endpoints: [
      'GET /api/v1/clients?search=Иванов&limit=5',
      'GET /api/v1/tasks?client_id=2196574&limit=3',
      'GET /api/v1/tasks/:taskId/comments'
    ]
  });
});

// 1. Эндпоинт поиска клиентов
app.get('/api/v1/clients', (req, res) => {
  try {
    const { search = '', limit = 10 } = req.query;
    
    // Фильтрация клиентов по строке поиска
    let filteredClients = clients;
    
    if (search) {
      const searchLower = search.toLowerCase();
      filteredClients = clients.filter(client => 
        client.firstName.toLowerCase().includes(searchLower) ||
        client.lastName.toLowerCase().includes(searchLower) ||
        client.email.toLowerCase().includes(searchLower) ||
        client.company.toLowerCase().includes(searchLower) ||
        client.phone.includes(search)
      );
    }
    
    // Применение лимита
    const limitNum = parseInt(limit);
    const resultClients = filteredClients.slice(0, limitNum);
    
    res.json({
      success: true,
      data: resultClients,
      meta: {
        total: filteredClients.length,
        limit: limitNum,
        returned: resultClients.length
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Ошибка при поиске клиентов',
      message: error.message
    });
  }
});

// 2. Эндпоинт получения задач клиента
app.get('/api/v1/tasks', (req, res) => {
  try {
    const { client_id, limit = 10 } = req.query;
    
    if (!client_id) {
      return res.status(400).json({
        success: false,
        error: 'Параметр client_id обязателен'
      });
    }
    
    const clientIdNum = parseInt(client_id);
    
    // Проверка существования клиента
    const client = clients.find(c => c.id === clientIdNum);
    if (!client) {
      return res.status(404).json({
        success: false,
        error: 'Клиент не найден'
      });
    }
    
    // Фильтрация задач по client_id и сортировка по дате создания (последние первыми)
    let clientTasks = tasks
      .filter(task => task.clientId === clientIdNum)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    // Применение лимита
    const limitNum = parseInt(limit);
    const resultTasks = clientTasks.slice(0, limitNum);
    
    res.json({
      success: true,
      data: resultTasks,
      meta: {
        clientId: clientIdNum,
        clientName: `${client.firstName} ${client.lastName}`,
        total: clientTasks.length,
        limit: limitNum,
        returned: resultTasks.length
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Ошибка при получении задач',
      message: error.message
    });
  }
});

// 3. Эндпоинт получения комментариев к задаче
app.get('/api/v1/tasks/:taskId/comments', (req, res) => {
  try {
    const { taskId } = req.params;
    const taskIdNum = parseInt(taskId);
    
    // Проверка существования задачи
    const task = tasks.find(t => t.id === taskIdNum);
    if (!task) {
      return res.status(404).json({
        success: false,
        error: 'Задача не найдена'
      });
    }
    
    // Получение комментариев для задачи
    const taskComments = comments
      .filter(comment => comment.taskId === taskIdNum)
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    
    res.json({
      success: true,
      data: taskComments,
      meta: {
        taskId: taskIdNum,
        taskTitle: task.title,
        total: taskComments.length
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Ошибка при получении комментариев',
      message: error.message
    });
  }
});

// Обработка несуществующих маршрутов
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Эндпоинт не найден',
    availableEndpoints: [
      'GET /api/v1/clients?search=Иванов&limit=5',
      'GET /api/v1/tasks?client_id=2196574&limit=3',
      'GET /api/v1/tasks/:taskId/comments'
    ]
  });
});

// Обработка ошибок
app.use((err, req, res, next) => {
  console.error('Ошибка сервера:', err);
  res.status(500).json({
    success: false,
    error: 'Внутренняя ошибка сервера',
    message: err.message
  });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════════════╗
║  Mock Server для интервью запущен!                         ║
║  URL: http://localhost:${PORT}                               ║
╚════════════════════════════════════════════════════════════╝

Доступные эндпоинты:

1️⃣  Поиск клиентов:
   GET http://localhost:${PORT}/api/v1/clients?search=Иванов&limit=5

2️⃣  Задачи клиента:
   GET http://localhost:${PORT}/api/v1/tasks?client_id=2196574&limit=3

3️⃣  Комментарии к задаче:
   GET http://localhost:${PORT}/api/v1/tasks/456/comments

Примеры запросов:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
curl "http://localhost:${PORT}/api/v1/clients?search=Иванов&limit=5"
curl "http://localhost:${PORT}/api/v1/tasks?client_id=2196574&limit=3"
curl "http://localhost:${PORT}/api/v1/tasks/456/comments"
  `);
});

module.exports = app;

