from time import sleep

import pytest
from appium import webdriver
from common.properties import PropertiesMiA1
from pageobject.youpage.you_page import YouPage


class TestYouPage(object):
    driver = None
    desired_caps = PropertiesMiA1.desired_caps
    you_page = YouPage()
    link = "http://localhost:4723/wd/hub"

    @pytest.fixture
    def setup(self):
        self.driver = webdriver.Remote(
            command_executor=self.link,
            desired_capabilities=self.desired_caps
        )
        self.driver.implicitly_wait(5)
        self.you_page.set_driver(self.driver)
        self.you_page.open_you_page()

    def test_driver(self, setup):
        # pass
        self.you_page.open_camera_roll()
        self.you_page.check_roll_empty()
