from info.info import TestData
from pages.basepage import BasePage
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from time import sleep


class MainPage(BasePage):
    """Locators"""
    PROFILE_ICON = (By.XPATH, '/html/body/div[1]/div/div[1]/div/div[3]/div/ul[2]/li[4]/div')
    SETTINGS_LABEL = (By.XPATH, '/html/body/div[5]/div/div[2]/div/div/div/section[3]/ul/li[2]')

    def __init__(self, driver):
        super().__init__(driver)
        self.driver.get(TestData.LOGIN_URL)

    def click_settings_label(self):
        if self.element_clickable(self.PROFILE_ICON):
            self.click(self.PROFILE_ICON)
            sleep(2)
            self.click(self.SETTINGS_LABEL)

