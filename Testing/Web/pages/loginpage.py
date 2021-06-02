from info.info import TestData
from pages.basepage import BasePage
from selenium.webdriver.common.by import By
from time import sleep


class LoginPage(BasePage):
    """Locators"""
    EMAIL_FIELD = (By.ID, "login-email")
    PASSWORD_FIELD = (By.ID, "login-password")
    NEXT_BUTTON = (By.XPATH, '//*[@id="login-form"]/button')
    SIGNUP_LINK = (By.LINK_TEXT, "Sign up here.")
    TRYAGAIN_BUTTON = (By.XPATH, '/html/body/div/div[2]/div/div/div/button[2]')
    YAHOO_BUTTON = (By.XPATH, '/html/body/div/div[2]/div/div/div/button[1]/span')
    HELP_LINK = (By.LINK_TEXT, "Help")
    PRIVACY_LINK = (By.LINK_TEXT, "Privacy")
    TERMS_LINK = (By.LINK_TEXT, "Terms")

    def __init__(self, driver):
        super().__init__(driver)
        self.driver.get(TestData.LOGIN_URL)

    def fill_email_field(self, email):
        self.send(self.EMAIL_FIELD, email)

    def click_next_button(self):
        self.click(self.NEXT_BUTTON)

    def click_help_link(self):
        self.click(self.HELP_LINK)

    def click_privacy_link(self):
        self.click(self.PRIVACY_LINK)

    def click_terms_link(self):
        self.click(self.TERMS_LINK)

    def fill_password_field(self, password):
        self.send(self.PASSWORD_FIELD, password)

    def click_signup_link(self):
        self.click(self.SIGNUP_LINK)

    def try_again_button(self):
        if self.element_located(self.TRYAGAIN_BUTTON, 10) & self.element_clickable(self.TRYAGAIN_BUTTON, 10):
            self.click(self.TRYAGAIN_BUTTON)

    def yahoo_button(self):
        if self.element_located(self.YAHOO_BUTTON, 10) & self.element_clickable(self.YAHOO_BUTTON, 10):
            self.click(self.YAHOO_BUTTON)

    def log_in(self, email, password):
        self.fill_email_field(email)
        self.click_next_button()
        result: bool = self.element_located(self.PASSWORD_FIELD)
        if result:
            self.element_clickable(self.PASSWORD_FIELD)
            self.fill_password_field(password)
            self.click_next_button()
            sleep(5)
            return result
        else:
            result = False
            return result
