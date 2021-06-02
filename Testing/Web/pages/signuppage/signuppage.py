from info.info import TestData
from pages.basepage import BasePage
from selenium.webdriver.common.by import By


class SignUpPage(BasePage):
    """Locators"""
    FIRST_NAME_FIELD = (By.ID, "sign-up-first-name")
    LAST_NAME_FIELD = (By.ID, "sign-up-last-name")
    AGE_FIELD = (By.ID, "sign-up-age")
    EMAIL_FIELD = (By.ID, "sign-up-email")
    PASSWORD_FIELD = (By.ID, "sign-up-password")
    SIGNUP_BUTTON = (By.XPATH, '/html/body/div[1]/div/div[2]/div/div[1]/form/button/span')
    LOGIN_LINK = (By.LINK_TEXT, "Log in here.")
    TERMS_LINK = (By.LINK_TEXT, "Terms")
    PRIVACY_LINK = (By.LINK_TEXT, "Privacy")
    HELP_LINK = (By.LINK_TEXT, "Help")

    def __init__(self, driver):
        super().__init__(driver)
        self.driver.get(TestData.SIGNUP_URL)

    def register(self, fname, lnmame, age, email, password):
        if (self.element_clickable(self.FIRST_NAME_FIELD, 2) and self.element_clickable(self.LAST_NAME_FIELD, 2) and
                self.element_clickable(self.AGE_FIELD, 2) and self.element_clickable(self.EMAIL_FIELD, 2) and
                self.element_clickable(self.PASSWORD_FIELD)):
            self.send(self.FIRST_NAME_FIELD, fname)
            self.send(self.LAST_NAME_FIELD, lnmame)
            self.send(self.AGE_FIELD, age)
            self.send(self.EMAIL_FIELD, email)
            self.send(self.PASSWORD_FIELD, password)

    def click_signup_button(self):
        self.click(self.SIGNUP_BUTTON)

    def click_terms_link(self):
        self.click(self.TERMS_LINK)

    def click_privacy_link(self):
        self.click(self.PRIVACY_LINK)

    def click_login(self):
        self.click(self.LOGIN_LINK)

    def click_help_link(self):
        self.click(self.HELP_LINK)
