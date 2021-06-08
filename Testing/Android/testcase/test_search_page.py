from time import sleep

import pytest
from appium import webdriver
from common.properties import PropertiesMiA1
from pageobject.searchpage.search_page import SearchPage


class TestSearchPage(object):
    driver = None
    desired_caps = PropertiesMiA1.desired_caps
    search_page = SearchPage()
    link = "http://localhost:4723/wd/hub"

    @pytest.fixture()
    def setup(self):
        self.driver = webdriver.Remote(
            command_executor=self.link,
            desired_capabilities=self.desired_caps
        )
        self.driver.implicitly_wait(5)
        self.search_page.set_driver(self.driver)
        self.search_page.open_search_page()

    def test_driver(self, setup):
        pass

    def test_search_not_found(self, setup):
        assert not self.search_page.search("-!>u4A?FrF(!d&Jr")

    def test_click_interesting_photos(self, setup):
        assert self.search_page.open_interesting_photo()

    def test_search_photo(self, setup):
        assert self.search_page.search("sss", 1)
        assert self.search_page.open_photo()

    def test_search_people(self, setup):
        assert self.search_page.search("sss", 2)
        assert self.search_page.check_people_name()

    def test_search_group(self, setup):
        assert self.search_page.search("sss", 3)
        assert self.search_page.check_group_name()
