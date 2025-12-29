from dataclasses import dataclass
import os


@dataclass(frozen=True)
class Settings:
    table_name: str
    region: str
    content_attribute: str


def get_settings():
    table_name = os.environ.get("DDB_TABLE_NAME") or "creativedeveloper.data"
    region = os.environ.get("AWS_REGION") or "eu-west-1"
    content_attribute = os.environ.get("DDB_CONTENT_ATTRIBUTE") or "content"

    return Settings(
        table_name=table_name,
        region=region,
        content_attribute=content_attribute,
    )
