from info.info import TestData
from pages.basepage import BasePage
from selenium.webdriver.common.by import By


class LoginPage(BasePage):
    """Locators"""
    EMAIL_FIELD = (By.NAME, 'email')
    PASSWORD_FIELD = (By.NAME, 'password')
    SIGN_IN_BUTTON = (By.XPATH, '/html/body/div/div/div/div[1]/div/form/button/span[1]')
    FORGOT_PASSWORD = (By.XPATH, '/html/body/div/div/div/div[1]/div/a')
    SIGNUP_LINK = (By.LINK_TEXT, "Sign up here.")
    FORGOT_PASSWORD_SEND_EMAIL = (By.XPATH, '/html/body/div/div/div/div[1]/div/form/button/span[1]')
    ABOUT_LINK = (By.LINK_TEXT, "About")
    JOBS_LINK = (By.LINK_TEXT, "Jobs")
    BLOG_LINK = (By.LINK_TEXT, "Blog")
    DEVELOPERS_LINK = (By.LINK_TEXT, "Developers")
    GUIDELINES_LINK = (By.LINK_TEXT, "Guidelines")
    HELP_LINK = (By.LINK_TEXT, 'Help')
    PRIVACY_LINK = (By.LINK_TEXT, "Privacy")
    TERMS_LINK = (By.LINK_TEXT, "Terms")
    COOKIES_LINK = (By.LINK_TEXT, "Cookies")
    TEST_EMAIL = "kennedi.vonrueden@yahoo.com"
    TEST_PASSWORD = "12345678"

    def __init__(self, driver):
        super().__init__(driver)
        self.driver.get(TestData.LOGIN_URL)

    def fill_email_field(self, email):
        self.send(self.EMAIL_FIELD, email)

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

    def log_in(self, email, password):
        self.fill_email_field(email)
        self.fill_password_field(password)
        self.click(self.SIGN_IN_BUTTON)

    def scroll_to_bottom(self):
        self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
