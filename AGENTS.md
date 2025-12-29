# AGENTS

This repository is organized around three main areas:

- `frontend/` – Single Page Application (SPA) and UI/UX.
- `backend/` – APIs, business logic, data access.
- `infra/` – Infrastructure, deployment, CI/CD, IaC.

Use this file to **route tasks** to the correct folder and agent.

---

## 1. Routing rules

When you receive a task, route it as follows:

### 1.1 Frontend tasks → `frontend/`

Route here if the task is about:

- User interface, layout or visual design.
- Components (React/Vue/Angular/etc.).
- State management on the client side.
- Navigation/routing on the client.
- Forms, validation in the browser, input handling.
- Responsive design, accessibility, animations.

**Directory:**  
`./frontend`

**Examples:**

- “Create a modern SPA landing page for the product.”  
- “Add a dashboard view with charts and filters.”  
- “Improve the responsive design on mobile devices.”

---

### 1.2 Backend tasks → `backend/`

Route here if the task is about:

- REST/GraphQL APIs or endpoints.
- Business logic and application services.
- Authentication and authorization (tokens, sessions, roles).
- Integration with databases, caches, queues, external services.
- Data models, DTOs, serialization/deserialization.
- Performance, security, logging on the server side.

**Directory:**  
`./backend`

**Examples:**

- “Create endpoints for user registration and login.”  
- “Implement a service to manage orders and payments.”  
- “Add pagination and filtering to the list API.”

---

### 1.3 Infrastructure tasks → `infra/`

Route here if the task is about:

- Cloud infrastructure (AWS, GCP, Azure, etc.).
- IaC (Terraform, Pulumi, CloudFormation, etc.).
- Containerization and orchestration (Docker, Kubernetes).
- CI/CD pipelines (GitHub Actions, GitLab CI, etc.).
- Environments (dev/stage/prod) and configuration.
- Networking, DNS, load balancers, certificates.

**Directory:**  
`./infra`

**Examples:**

- “Create Terraform configs to deploy the app.”  
- “Define a CI/CD pipeline to build, test and deploy frontend and backend.”  
- “Add Kubernetes manifests for the services and ingress.”

---

## 2. Coordination between agents

When a task spans multiple areas, split it:

1. **Frontend agent (in `frontend/`)**
   - Defines how the UI consumes APIs (endpoints, payloads, error handling).
   - Documents required contracts (e.g., `/api/users`, expected JSON).

2. **Backend agent (in `backend/`)**
   - Implements the APIs and business logic matching those contracts.
   - Documents environment variables, ports, health checks.

3. **Infra agent (in `infra/`)**
   - Provides infrastructure to run frontend and backend (containers, services, pipelines).
   - Ensures deployment configuration matches ports, env vars, health checks.

Each agent should **only modify files in its own folder** unless the task explicitly says otherwise.

---
