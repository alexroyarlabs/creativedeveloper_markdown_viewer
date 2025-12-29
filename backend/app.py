import logging

from chalice import Chalice, Response
from botocore.exceptions import ClientError

from services.dynamodb_service import fetch_project_sections
from utils.config import get_settings

app = Chalice(__name__)
app.log.setLevel(logging.INFO)


@app.route("/health", methods=["GET"])
def health():
    return {"status": "ok"}


@app.route("/projects/{projectId}", methods=["GET"], cors=True)
def get_project(projectId):
    """GET /projects/{projectId} -> { idea, mvp, frontendInstructions, backendInstructions }."""
    if not projectId:
        return Response(
            body={"error": "projectId is required."},
            status_code=400,
            headers={"Content-Type": "application/json"},
        )

    settings = get_settings()
    try:
        project_id = projectId
        payload = fetch_project_sections(project_id, settings)
    except ClientError:
        app.log.exception("DynamoDB error while fetching project sections.")
        return Response(
            body={"error": "Failed to load project content."},
            status_code=502,
            headers={"Content-Type": "application/json"},
        )
    except Exception:
        app.log.exception("Unexpected error while fetching project sections.")
        return Response(
            body={"error": "Unexpected server error."},
            status_code=500,
            headers={"Content-Type": "application/json"},
        )

    return payload
