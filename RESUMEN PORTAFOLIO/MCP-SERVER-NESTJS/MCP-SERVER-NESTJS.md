# 🚀 MCP Server NestJS + PostgreSQL

<div align="center">

![NestJS](https://img.shields.io/badge/NestJS-10.0-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-5.22-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-Protocol-00D4AA?style=for-the-badge)

**A production-ready Model Context Protocol (MCP) server built with NestJS, Prisma ORM, and PostgreSQL.**

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Architecture](#-architecture) • [API](#-mcp-tools--resources)

</div>

---

## 🎯 Overview

This MCP Server enables AI assistants like **Claude Desktop**, **Cursor IDE**, and custom AI applications to interact with PostgreSQL databases through the standardized Model Context Protocol. It provides secure, read-only database access with tools for querying, listing tables, and describing schema.

### What is MCP?

The [Model Context Protocol](https://modelcontextprotocol.io) is an open standard that enables AI assistants to securely access external data sources and tools. This server implements the MCP specification to expose PostgreSQL databases to AI models.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔐 **Secure Queries** | Read-only SELECT queries only - no data modification |
| 🔄 **Dual Transport** | STDIO (desktop apps) and SSE (web clients) support |
| 📊 **Schema Discovery** | Automatic table and column introspection |
| 🏗️ **Production Ready** | TypeScript strict mode, proper error handling |
| 📝 **Query Logging** | Built-in logging for audit and debugging |
| ⚡ **Fast** | Prisma ORM with connection pooling |

---

## �️ Tech Stack

```
┌─────────────────────────────────────────────────────────┐
│                    MCP Server NestJS                    │
├─────────────────────────────────────────────────────────┤
│  Framework    │  NestJS 10 (Node.js)                    │
│  Language     │  TypeScript 5.0 (Strict Mode)           │
│  ORM          │  Prisma 5.22                            │
│  Database     │  PostgreSQL 17                          │
│  Protocol     │  Model Context Protocol (MCP)           │
│  Transports   │  STDIO, SSE                             │
└─────────────────────────────────────────────────────────┘
```

---

## 📦 Installation

### Prerequisites

- Node.js 18+
- PostgreSQL 14+ (running locally or remote)
- npm or yarn

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/mcp-server-nestjs.git
cd mcp-server-nestjs

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env
# Edit .env with your PostgreSQL credentials

# 4. Generate Prisma client & run migrations
npx prisma migrate dev --name init

# 5. Build the project
npm run build

# 6. Start the server
npm run start:dev
```

### Environment Configuration

```env
# .env
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
PORT=3000
NODE_ENV=development
```

---

## 🚀 Usage

### Development Mode

```bash
npm run start:dev
```

### Production Mode

```bash
npm run build
npm run start:prod
```

### STDIO Mode (for Claude Desktop)

```bash
npm run mcp:stdio
```

### Health Check

```bash
curl http://localhost:3000/mcp/health
```

---

## ⚙️ Claude Desktop Configuration

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "postgres-database": {
      "command": "node",
      "args": ["/path/to/mcp-server-nestjs/dist/main"],
      "env": {
        "DATABASE_URL": "postgresql://user:pass@localhost:5432/mydb"
      }
    }
  }
}
```

**Config file locations:**
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Linux**: `~/.config/Claude/claude_desktop_config.json`

---

## 🔧 MCP Tools & Resources

### Tools

| Tool | Description | Parameters |
|------|-------------|------------|
| `ejecutar_query_sql` | Execute SELECT queries | `query`: SQL string |
| `listar_tablas` | List all database tables | None |
| `describir_tabla` | Get table schema | `tabla`: Table name |

### Resources

| Resource URI | Description |
|--------------|-------------|
| `database://schema` | Complete database schema |
| `database://tables` | List of all tables |

### Example Prompts for AI

```
"Show me all tables in the database"
"Describe the structure of the users table"
"Get the first 10 records from the orders table"
```

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         MCP CLIENTS                              │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│   │ Claude       │  │ Cursor IDE   │  │ Custom AI Apps       │  │
│   │ Desktop      │  │              │  │                      │  │
│   └──────┬───────┘  └──────┬───────┘  └──────────┬───────────┘  │
│          │                 │                      │              │
│          └─────────────────┼──────────────────────┘              │
│                            │ MCP Protocol                        │
└────────────────────────────┼────────────────────────────────────┘
                             │
┌────────────────────────────┼────────────────────────────────────┐
│                            ▼                                     │
│   ┌────────────────────────────────────────────────────────┐    │
│   │              TRANSPORT LAYER (STDIO / SSE)              │    │
│   └────────────────────────────────────────────────────────┘    │
│                            │                                     │
│   ┌────────────────────────▼────────────────────────────────┐   │
│   │                    MCP SERVICE                           │   │
│   │  ┌─────────────────┐  ┌─────────────────────────────┐   │   │
│   │  │     TOOLS       │  │        RESOURCES            │   │   │
│   │  │ • ejecutar_sql  │  │ • database://schema         │   │   │
│   │  │ • listar_tablas │  │ • database://tables         │   │   │
│   │  │ • describir     │  │                             │   │   │
│   │  └─────────────────┘  └─────────────────────────────┘   │   │
│   └────────────────────────────────────────────────────────┘    │
│                            │                                     │
│   ┌────────────────────────▼────────────────────────────────┐   │
│   │                  PRISMA ORM                              │   │
│   └────────────────────────────────────────────────────────┘    │
│                            │                                     │
│                   MCP SERVER NESTJS                              │
└────────────────────────────┼────────────────────────────────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   PostgreSQL    │
                    │   Database      │
                    └─────────────────┘
```

---

## 📁 Project Structure

```
mcp-server-nestjs/
├── src/
│   ├── main.ts                 # Application entry point
│   ├── app.module.ts           # Root module
│   ├── mcp/
│   │   ├── mcp.module.ts       # MCP module
│   │   ├── mcp.service.ts      # MCP protocol implementation
│   │   └── mcp.controller.ts   # HTTP endpoints
│   └── prisma/
│       ├── prisma.module.ts    # Database module
│       └── prisma.service.ts   # Prisma client service
├── prisma/
│   ├── schema.prisma           # Database schema
│   └── migrations/             # Database migrations
├── dist/                       # Compiled output
├── node_modules/
├── .env                        # Environment variables
├── .env.example                # Example configuration
├── package.json
├── tsconfig.json
└── nest-cli.json
```

---

## 📊 Database Models

```prisma
// Query logging for audit
model QueryLog {
  id        Int      @id @default(autoincrement())
  query     String
  result    String?
  success   Boolean  @default(true)
  error     String?
  createdAt DateTime @default(now())
}

// Server configuration
model McpConfig {
  id        Int      @id @default(autoincrement())
  key       String   @unique
  value     String
  updatedAt DateTime @updatedAt
}

// Multi-database connections (optional)
model DatabaseConnection {
  id        Int      @id @default(autoincrement())
  name      String   @unique
  host      String
  port      Int
  database  String
  username  String
  password  String
  isActive  Boolean  @default(true)
}
```

---

## � Available Scripts

| Script | Description |
|--------|-------------|
| `npm run start:dev` | Start in development mode with hot reload |
| `npm run start:prod` | Start in production mode |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm run mcp:stdio` | Start in STDIO mode for desktop clients |
| `npm run mcp:sse` | Start in SSE mode for web clients |
| `npm run prisma:generate` | Generate Prisma client |
| `npm run prisma:migrate` | Run database migrations |
| `npm run prisma:studio` | Open Prisma Studio GUI |

---

## 🔒 Security

- **Read-Only**: Only SELECT queries are allowed
- **Query Validation**: All queries are validated before execution
- **Environment Variables**: Credentials stored in `.env` (not committed)
- **Type Safety**: Full TypeScript with strict mode

---

## �🔗 Links

- [Model Context Protocol](https://modelcontextprotocol.io)
- [MCP SDK Documentation](https://github.com/modelcontextprotocol/typescript-sdk)
- [NestJS Documentation](https://docs.nestjs.com)
- [Prisma Documentation](https://www.prisma.io/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

---

## 👤 Author

**Henry Moreno**  
Full Stack Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/YOUR_PROFILE)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=flat-square&logo=github)](https://github.com/YOUR_USERNAME)
[![Upwork](https://img.shields.io/badge/Upwork-Hire%20Me-6FDA44?style=flat-square&logo=upwork&logoColor=white)](https://upwork.com/YOUR_PROFILE)

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

</div>
