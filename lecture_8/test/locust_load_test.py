import os

from locust import HttpUser, task, between


class WebsiteTest(HttpUser):
    wait_time = between(1, 2)
    host = os.getenv("LOCUST_HOST")  # set from docker-compose

    @task
    def test_homepage(self):
        self.client.get("/api/getData")
