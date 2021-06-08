from info.info import TestData
from pages.basepage import BasePage
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys


class HomePage(BasePage):
    """Locators"""
    LOGIN_BUTTON = (By.XPATH, '/html/body/div/div/div/nav/button[2]')
    SIGNUP_BUTTON = (By.XPATH, '/html/body/div/div/div/nav/button[3]')

    def __init__(self, driver):
        super().__init__(driver)
        self.driver.get(TestData.MAIN_URL)

    def fill_search_field(self, text):
        self.send(self.SEARCH_FIELD, text)
