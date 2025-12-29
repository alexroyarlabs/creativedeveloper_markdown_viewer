# Backend (Chalice)

## Endpoint

- `GET /projects/{projectId}`
- Response:
  - `idea`: markdown string or `null`
  - `mvp`: markdown string or `null`
  - `frontendInstructions`: markdown string or `null`
  - `backendInstructions`: markdown string or `null`

## Environment variables

- `DDB_TABLE_NAME`: DynamoDB table name (default: `creativedeveloper.data`)
- `AWS_REGION`: AWS region (default: `eu-west-1`)
- `DDB_CONTENT_ATTRIBUTE`: attribute name that stores markdown (default: `content`)

## Local development

```bash
pip install -r requirements.txt
chalice local
```
