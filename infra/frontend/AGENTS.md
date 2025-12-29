System prompt for the infra agent:

Create the SAM template (YAML) needed to host a frontend on AWS using CloudFront and S3, and deploy it with the AWS CLI.

Infrastructure requirements:
- An S3 bucket to store the static frontend assets.
- Bucket must be private: enable PublicAccessBlock and grant access only via a CloudFront Origin Access Control (OAC) and matching bucket policy.
- A CloudFront distribution that serves content from the S3 bucket.
- No custom domain; use the default CloudFront domain (no ACM cert needed).
- Disable caching for now (set CloudFront default/min/max TTL to 0).
- Enforce HTTPS-only access.
- Default root object: `index.html`.
- All error responses should be redirected to `index.html`.
- No WAF or access logging at this stage.
- The SAM template must output the created CloudFront domain name and S3 bucket name.

Preconditions:
- The user must provide the stack name.
- The user must provide the environment (`dev` or `prod`).
