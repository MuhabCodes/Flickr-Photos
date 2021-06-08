import pytest
from time import sleep
from pages.homepage.homepage import HomePage
from webdriver_manager.chrome import ChromeDriverManager
from info.info import TestData
from selenium import webdriver
from selenium.webdriver.common.keys import Keys


class TestHomePage(object):
    @pytest.fixture()
    def setup(self):
        self.driver = webdriver.Chrome(ChromeDriverManager().install())
        self.homePage = HomePage(self.driver)
        self.homePage.driver.refresh()
        self.homePage.driver.maximize_window()
        yield
        self.homePage.driver.quit()

    def test_click_login_button(self, setup):
        self.homePage.click(self.homePage.LOGIN_BUTTON)
        sleep(5)
        assert TestData.LOGIN_URL in self.homePage.page_url()
        print("\nLogin button is enabled and redirects to Login page")

    def test_click_signup_button(self, setup):
        self.homePage.click(self.homePage.SIGNUP_BUTTON)
        sleep(5)
        assert self.homePage.page_url() == TestData.SIGNUP_URL
        print("\nRedirects to signup page")
