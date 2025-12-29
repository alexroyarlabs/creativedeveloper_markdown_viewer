# AGENTS (Infra)

Use this file to route infrastructure and deployment tasks.

- Scope: work inside `infra/` on CI/CD, IaC, containers, environments, and deployment automation.
- For frontend deployments, follow the playbook in `./infra/frontend/AGENTS.md`.
- Do not change frontend or backend source files from here unless the task explicitly says so.
- Keep deployment configs reproducible and idempotent; document required env vars, ports, and health checks.
