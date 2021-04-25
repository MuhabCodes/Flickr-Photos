from selenium.webdriver.common.by import By
from common.selhelper import SelHelper
from time import sleep


class LoginPageLocator(object):
    """ Class contains locators for Flickr Login page."""
    EMAIL_FIELD = (By.ID, "login-email")
    NEXT_BUTTON = (By.XPATH,
                   '//*[@id="login-form"]/button')
    PASSWORD_FIELD = (By.ID, "login-password")
    FLICKER_LOGO = (By.CSS_SELECTOR,
                    'a[title="Flickr logo. If you click it, you\'ll go home"]')


class LoginPage(object):

    def __init__(self, helper: SelHelper):
        self.helper: SelHelper = helper

    @property
    def check_email_field(self):
        return self.helper.element_clickable(*LoginPageLocator.EMAIL_FIELD)

    def fill_email_field(self, email: str):
        element = self.helper.find_element(*LoginPageLocator.EMAIL_FIELD)
        self.helper.clear_element(element)
        self.helper.fill_element(element, email)

    @property
    def check_proceed_button(self):
        return self.helper.element_clickable(*LoginPageLocator.NEXT_BUTTON)

    def click_proceed_button(self):
        element = self.helper.find_element(*LoginPageLocator.NEXT_BUTTON)
        self.helper.click(element)

    @property
    def check_password_field(self):
        result: bool = self.helper.element_clickable(
            *LoginPageLocator.PASSWORD_FIELD
        )
        result2: bool = self.helper.element_interactable(
            *LoginPageLocator.PASSWORD_FIELD
        )
        return result & result2

    def fill_password_field(self, password: str):
        element = self.helper.find_element(*LoginPageLocator.PASSWORD_FIELD)
        self.helper.clear_element(element)
        self.helper.fill_element(element, password)

    def mock_login(self):
        try:
            assert self.check_email_field
            self.fill_email_field("sasasabry290@gmail.com")

            assert self.check_proceed_button
            self.click_proceed_button()

            assert self.check_password_field
            self.fill_password_field("C%D5KBSN?$w&QKv")

            assert self.check_proceed_button
            self.click_proceed_button()

            sleep(5)
            assert "Home | Flickr" == self.helper.page_title

            return True
        except AssertionError:
            return False
