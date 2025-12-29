# AGENTS (Backend - AWS Chalice)

These instructions apply to all backend work in this repository.

## Scope
- All backend changes must be made only inside `backend/`.
- Do not edit `frontend/` or `infra/` unless explicitly requested.

## Stack
- AWS Chalice (Python) for serverless APIs on AWS Lambda and API Gateway.
- Use a `requirements.txt` for dependencies.

## Conventions
- Keep handlers small and delegate business logic to service modules.
- Validate input early and return clear JSON error messages.
- Prefer JSON responses with explicit status codes.
- Centralize configuration via environment variables.
- Avoid hardcoding AWS resource names or ARNs.

## Structure (suggested)
- `app.py`: Chalice app, routes, middleware, error handlers.
- `services/`: business logic and integrations.
- `models/`: data models / DTOs.
- `utils/`: shared helpers (logging, validation, etc.).
- `tests/`: unit tests for handlers and services.

## AWS Guidance
- Use IAM roles with least privilege.
- Use AWS SDK (boto3) via explicit clients where needed.
- Handle AWS errors and map them to safe API responses.
- Keep functions stateless and idempotent when possible.

## API Design
- Use RESTful routes and predictable JSON payloads.
- Document request/response schemas in docstrings or comments near routes.
- Include basic health check route (e.g., `/health`).

## Local Dev
- Use `chalice local` for local testing.
- Keep secrets out of the repo; use a `.env` file for environment variables.
