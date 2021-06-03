from info.info import TestData
from selenium.webdriver.common.by import By
from time import sleep
from pages.basepage import BasePage


class AccountSettingsPage(BasePage):
    """Locators"""
    PASSWORD_CHANGE = (By.XPATH, '/html/body/div[1]/div/div[4]/div/div[2]/div[1]/div[2]/div[1]/div/div[2]/p[2]/a')
    HELP_LINK = (By.XPATH, '/html/body/div[1]/div/div[4]/div/div[2]/div[1]/div[2]/div[2]/p/a[1]')
    DELETE_ACCOUNT = (By.XPATH, '/html/body/div[1]/div/div[4]/div/div[2]/div[1]/div[2]/div[2]/p/a[2]')
    REAL_NAME_CHANGE = (By.XPATH, '/html/body/div[1]/div/div[4]/div/div[2]/div[2]/div[2]/div[1]/div/div[2]/p[1]/a')
    DISPLAY_NAME_CHANGE = (By.XPATH, '/html/body/div[1]/div/div[4]/div/div[2]/div[2]/div[2]/div[1]/div/div[2]/p[2]/a')
    AVATAR_PHOTO_UPLOAD = (By.XPATH, '/html/body/div[1]/div/div[4]/div/div[2]/div[2]/div[2]/div[1]/div/div[1]/a/div')
    CURRENT_PASSWORD_FIELD = (By.ID, "current-password")
    NEW_PASSWORD_FIELD = (By.ID, "new-password")
    CHANGE_PASS_BUTTON = (By.XPATH, '/html/body/div/div/div[2]/div/div[2]/form/button/span')

    def __init__(self, driver):
        super().__init__(driver)
        self.driver.get(TestData.ACCOUNT_URL)

    def click_change_password_link(self):
        if self.element_clickable(self.PASSWORD_CHANGE):
            self.click(self.PASSWORD_CHANGE)

    def change_password(self, currentpass, newpass):
        if self.element_clickable(self.CURRENT_PASSWORD_FIELD):
            self.send(self.CURRENT_PASSWORD_FIELD, currentpass)
            if self.element_clickable(self.NEW_PASSWORD_FIELD):
                self.send(self.NEW_PASSWORD_FIELD, newpass)
                self.click(self.CHANGE_PASS_BUTTON)
