import pytest
import os
from fastapi.testclient import TestClient
from gateway.app import app


@pytest.fixture(scope="session")
def client():
    os.environ["DATABASE_URL"] = "postgresql://postgres:postgres@db:5432/simulation_ai"
    with TestClient(app) as c:
        yield c
