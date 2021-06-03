import pytest
from pages.mainpage.mainpage import MainPage
from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
from time import sleep
from pages.loginpage.loginpage import LoginPage
from info.info import TestData


class TestMainPage(object):
    @pytest.fixture()
    def setup(self):
        self.driver = webdriver.Chrome(ChromeDriverManager().install())
        self.mainPage = MainPage(self.driver)
        self.mockLogin = LoginPage(self.driver)
        self.mockLogin.log_in("george_joseph99@hotmail.com", "ejnHG3v35gueXhE")
        self.mainPage.driver.maximize_window()
        yield
        self.mainPage.driver.quit()

    def test_profile_icon(self, setup):
        if self.mainPage.element_clickable(self.mainPage.PROFILE_ICON):
            self.mainPage.click_profile_icon()
            sleep(2)
            if self.mainPage.element_clickable(self.mainPage.SETTINGS_LABEL):
                self.mainPage.click(self.mainPage.SETTINGS_LABEL)
                sleep(2)

