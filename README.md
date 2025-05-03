# Todo Service

A simple Todo service built with Express.js that provides CRUD operations for managing todos.

## Features

- Create, read, update, and delete todos
- In-memory storage (data will be reset when server restarts)
- RESTful API endpoints
- CORS enabled
- JSON response format
- Docker support

## Setup

### Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

For development with auto-reload:

```bash
npm run dev
```

### Docker Setup

1. Build and run using Docker Compose:

```bash
docker-compose up --build
```

2. Or build and run using Docker directly:

```bash
# Build the image
docker build -t todo-service .

# Run the container
docker run -p 3000:3000 todo-service
```

## API Endpoints

- `GET /api/todos` - Get all todos
- `GET /api/todos/:id` - Get a specific todo
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

## Example Todo Object

```json
{
  "id": 1,
  "title": "Complete project",
  "description": "Finish the todo service implementation",
  "completed": false,
  "createdAt": "2024-03-21T12:00:00.000Z"
}
```

## Environment Variables

- `PORT` - Server port (default: 3000)
# todoEcs
