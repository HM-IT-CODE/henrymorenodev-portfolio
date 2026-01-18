# 🚀 Enterprise Microservices Architecture with NestJS & Next.js

> **Advanced Full Stack System** demonstrating the "Database-per-Service" pattern using **gRPC** for high-performance inter-service communication.

![Architecture Status](https://img.shields.io/badge/Architecture-Microservices-blue)
![NestJS](https://img.shields.io/badge/Backend-NestJS_v10-red)
![Next.js](https://img.shields.io/badge/Frontend-Next.js_15-black)
![gRPC](https://img.shields.io/badge/Communication-gRPC_Protobuf-green)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue)

## 🏗️ System Architecture

The system is composed of **4 independent microservices** and a modern **Next.js Frontend**.

```mermaid
graph TD
    Client[Next.js Frontend\n(Port 3002)] -->|HTTP/REST| Gateway[API Gateway\n(Port 3000)]
    
    subgraph "Internal Private Network (gRPC)"
        Gateway -->|gRPC| UserService[Users Microservice\n(Port 50051)]
        Gateway -->|gRPC| ProductService[Products Microservice\n(Port 50052)]
        Gateway -->|gRPC| OrderService[Orders Microservice\n(Port 50053)]
        
        OrderService -.->|gRPC Validation| UserService
        OrderService -.->|gRPC Stock Check| ProductService
    end
    
    UserService -->|TypeORM| DB1[(Postgres\nusers_db)]
    ProductService -->|TypeORM| DB2[(Postgres\nproducts_db)]
    OrderService -->|TypeORM| DB3[(Postgres\norders_db)]
```

---

## 🛠️ Technology Stack

### Backend (NestJS Ecosystem)
*   **Architecture**: Monorepo with NestJS CLI workspaces.
*   **Communication**: **gRPC** (Google Remote Procedure Call) with Protocol Buffers (`.proto`) for strictly typed, low-latency communication between microservices.
*   **Gateway**: NestJS API Gateway acting as an HTTP-to-gRPC proxy and aggregator.
*   **Database**: **PostgreSQL** (Local instance) with **TypeORM**.
*   **Pattern**: Database-per-service (Separate DBs for Users, Products, Orders to ensure loose coupling).

### Frontend (Modern React)
*   **Framework**: **Next.js 15** (App Router & Server Components).
*   **Language**: TypeScript (Strict mode).
*   **Styling**: **TailwindCSS** + **shadcn/ui** (Radix UI based).
*   **State Management**: **TanStack Query v5** (Server state & caching).
*   **Forms**: **React Hook Form** + **Zod** (Schema validation).

---

## 📦 Service Capabilities

### 1. API Gateway (`:3000`)
*   Central entry point.
*   Handles CORS and Request Validation.
*   **Swagger/OpenAPI** Documentation visible at `/api/docs`.

### 2. Users Service (`:50051`)
*   **gRPC Methods**: `CreateUser`, `GetUser`, `ListUsers`.
*   Manages Identity and Profile data.

### 3. Products Service (`:50052`)
*   **gRPC Methods**: `CreateProduct`, `GetProduct`, `DecreaseStock`.
*   Manages Inventory and Pricing.

### 4. Orders Service (`:50053`)
*   **Complex Orchestration**: Validates User existence and Product stock across services using gRPC calls *before* creating an order.
*   **Transactional Integrity**: Ensures orders are only created if business rules pass.

---

## 🚀 Getting Started

### Prerequisites
*   Node.js v18+
*   PostgreSQL installed and running locally.

### 1. Database Setup
Create the required databases in your local PostgreSQL:
```sql
CREATE DATABASE users_db;
CREATE DATABASE products_db;
CREATE DATABASE orders_db;
```

### 2. Install Dependencies
```bash
npm install
cd frontend && npm install
```

### 3. Start the Ecosystem
You need to run the services in separate terminals:

**Terminal 1 (Users)**
```bash
cd apps/users-service
npm run start
```

**Terminal 2 (Products)**
```bash
cd apps/products-service
npm run start
```

**Terminal 3 (Orders)**
```bash
cd apps/orders-service
npm run start
```

**Terminal 4 (Gateway)**
```bash
cd apps/gateway
npm run start
```

**Terminal 5 (Frontend)**
```bash
cd frontend
npm run dev
```

### 4. Access the Application
*   **Frontend Dashboard**: [http://localhost:3002](http://localhost:3002)
*   **API Documentation**: [http://localhost:3000/api/docs](http://localhost:3000/api/docs)

---

## 🌟 Key Achievements
*   **Full Type Safety**: Shared DTOs and Protobuf definitions ensure contracts are respected across the stack.
*   **High Performance**: gRPC is up to 7-10x faster than REST for internal communication.
*   **Scalability**: Each service can be deployed and scaled independently.
*   **Modern UX**: Optimistic updates and client-side caching provide a snappy user experience.

---

**Developed by Henry Moreno** | *Advanced Full Stack Portfolio*
