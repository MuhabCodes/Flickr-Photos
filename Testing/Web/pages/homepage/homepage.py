from info.info import TestData
from pages.basepage import BasePage
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys


class HomePage(BasePage):
    """Locators"""
    START_FOR_FREE_BUTTON = (By.XPATH, '/html/body/div[1]/div/div[2]/div[3]/div/a')
    LOGIN_BUTTON = (By.XPATH, '/html/body/div[1]/div/div[1]/div/div[3]/div/ul[2]/li[2]/a')
    SIGNUP_BUTTON = (By.XPATH, '/html/body/div[1]/div/div[1]/div/div[3]/div/ul[2]/li[3]/a')
    SEARCH_FIELD = (By.ID, "search-field")
    ABOUT_LINK = (By.LINK_TEXT, "About")
    JOBS_LINK = (By.LINK_TEXT, "Jobs")
    BLOG_LINK = (By.LINK_TEXT, "Blog")
    DEVELOPERS_LINK = (By.LINK_TEXT, "Developers")
    GUIDELINES_LINK = (By.LINK_TEXT, "Guidelines")
    HELP_LINK = (By.XPATH, '/html/body/div[1]/div/div[3]/footer/div[1]/div[1]/ul/li[8]/a')
    HELP_FORUM_LINK = (By.XPATH, '/html/body/div[1]/div/div[3]/footer/div[1]/div[1]/ul/li[10]/a')
    PRIVACY_LINK = (By.LINK_TEXT, "Privacy")
    TERMS_LINK = (By.LINK_TEXT, "Terms")
    COOKIES_LINK = (By.LINK_TEXT, "Cookies")

    def __init__(self, driver):
        super().__init__(driver)
        self.driver.get(TestData.MAIN_URL)

    def click_star_for_free_button(self):
        self.click(self.START_FOR_FREE_BUTTON)

    def click_login_button(self):
        self.click(self.LOGIN_BUTTON)

    def click_signup_button(self):
        self.click(self.SIGNUP_BUTTON)

    def fill_search_field(self, text):
        self.send(self.SEARCH_FIELD, text)

    def search(self, text):
        self.send(self.SEARCH_FIELD, text)
        self.send(self.SEARCH_FIELD, Keys.RETURN)
