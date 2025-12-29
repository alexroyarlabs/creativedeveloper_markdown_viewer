import boto3

SECTION_KEYS = (
    ("idea", "IDEA"),
    ("mvp", "MVP"),
    ("frontendInstructions", "FRONTEND_INSTRUCTIONS"),
    ("backendInstructions", "BACKEND_INSTRUCTIONS"),
)


def fetch_project_sections(project_id, settings):
    table = boto3.resource("dynamodb", region_name=settings.region).Table(
        settings.table_name
    )
    result = {}

    for field_name, sort_key in SECTION_KEYS:
        response = table.get_item(
            Key={"itemId": project_id, "sortKey": sort_key}
        )
        item = response.get("Item") if response else None
        result[field_name] = item.get(settings.content_attribute) if item else None

    return result
