from time import sleep

import pytest
from appium import webdriver
from common.properties import PropertiesMiA1
from common.utils import Utils
from pageobject.camerapage.camera_page import CameraPage


class TestCameraPage(object):
    driver = None
    desired_caps = PropertiesMiA1.desired_caps
    camera_page = CameraPage()
    utils = Utils()
    link = "http://localhost:4723/wd/hub"

    @pytest.fixture
    def setup(self):
        self.driver = webdriver.Remote(
            command_executor=self.link,
            desired_capabilities=self.desired_caps
        )
        self.driver.implicitly_wait(5)
        self.camera_page.set_driver(self.driver)
        self.camera_page.open_camera_page()

    def test_driver(self, setup):
        pass

    def test_upload_photo(self, setup):
        photo_info = {
            "title": self.utils.generate_random_string(),
            "description": self.utils.generate_time_string(),
            "privacy": 1
        }
        self.camera_page.check_upload_photo_only(1, photo_info)

    def test_capture_photo(self, setup):

        photo_info = {
            "title": self.utils.generate_random_string(),
            "description": self.utils.generate_time_string(),
            "privacy": 1
        }
        self.camera_page.check_upload_photo_only(2, photo_info)
