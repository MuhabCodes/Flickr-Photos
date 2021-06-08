from time import sleep

import pytest
from appium import webdriver
from common.properties import PropertiesMiA1, PropertiesNox
from pageobject.generalmethods.general_methods import GeneralMethods
from pageobject.mainpage.main_page import MainPage


class TestMainPage(object):
    driver = None
    desired_caps = PropertiesMiA1.desired_caps
    # desired_caps = PropertiesNox.desired_caps
    general_methods = GeneralMethods()
    main_page = MainPage()
    link = "http://localhost:4723/wd/hub"

    @pytest.fixture
    def setup(self):
        self.driver = webdriver.Remote(
            command_executor=self.link,
            desired_capabilities=self.desired_caps
        )
        self.driver.implicitly_wait(30)

        self.main_page.set_driver(self.driver)
        self.main_page.open_mainpage()
        # sleep(5)

    # @pytest.mark.skip
    def test_driver(self, setup):
        pass

    # @pytest.mark.skip
    def test_refresh_feed(self, setup):
        self.main_page.refresh_feed()

    # @pytest.mark.skip
    def test_scrolling(self, setup):
        self.main_page.scroll_feed(
            (10, 854), (10, 270))

    # @pytest.mark.skip
    def test_tap_photo(self, setup):
        self.main_page.test_tap_photo()

    # @pytest.mark.skip
    def test_tapping_fave(self, setup):
        assert self.main_page.test_tapping_fave()

    def test_tapping_fave_2(self, setup):
        assert self.main_page.test_tapping_fave_2()

    # @pytest.mark.skip
    def test_commenting(self, setup):
        assert self.main_page.test_commenting()
