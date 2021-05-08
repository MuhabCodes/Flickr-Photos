import pytest
from time import sleep
from pages.mainpage import MainPage
from webdriver_manager.chrome import ChromeDriverManager
from info.info import TestData
from selenium import webdriver


class TestMainPage(object):
    @pytest.fixture()
    def setup(self):
        self.driver = webdriver.Chrome(ChromeDriverManager().install())
        self.mainPage = MainPage(self.driver)
        self.mainPage.driver.maximize_window()
        yield
        self.mainPage.driver.quit()

    def test_click_start_for_free_button(self, setup):
        if self.mainPage.element_clickable(self.mainPage.START_FOR_FREE_BUTTON) == 1:
            self.mainPage.click(self.mainPage.START_FOR_FREE_BUTTON)
            sleep(5)
            assert self.mainPage.page_url() == TestData.SIGNUP_URL
            print("\nStart for free button is enabled and redirects to signup page")

    def test_click_login_button(self, setup):
        if self.mainPage.element_clickable(self.mainPage.LOGIN_BUTTON) == 1:
            self.mainPage.click(self.mainPage.LOGIN_BUTTON)
            sleep(5)
            assert TestData.LOGIN_URL in self.mainPage.page_url()
        print("\nLogin button is enabled and redirects to Login page")

    def test_click_signup_button(self, setup):
        self.mainPage.click(self.mainPage.SIGNUP_BUTTON)
        sleep(5)
        assert self.mainPage.page_url() == TestData.SIGNUP_URL
        print("\nRedirects to signup page")

    def test_search_field(self, setup):
        if self.mainPage.element_clickable(self.mainPage.SEARCH_FIELD) == 1:
            self.mainPage.search("dog")
            sleep(5)
            assert "dog" in self.mainPage.page_url()
            print("\nSearch field is enabled and searching")

    def test_check_bottom_links1(self, setup):
        if self.mainPage.element_clickable(self.mainPage.ABOUT_LINK, 5) == 1:
            self.mainPage.click(self.mainPage.ABOUT_LINK)
            sleep(5)
            assert self.mainPage.page_url() == TestData.ABOUT_URL
        print("\nAbout link is enabled and redirects to About page")

    def test_check_bottom_links2(self, setup):
        if self.mainPage.element_clickable(self.mainPage.JOBS_LINK, 5) == 1:
            self.mainPage.click(self.mainPage.JOBS_LINK)
            assert self.mainPage.page_url() == TestData.JOBS_URL
        print("\nJobs link is enabled and redirects to Jobs page")

    def test_check_bottom_links3(self, setup):
        if self.mainPage.element_clickable(self.mainPage.BLOG_LINK, 5) == 1:
            self.mainPage.click(self.mainPage.BLOG_LINK)
            assert self.mainPage.page_url() == TestData.BLOG_URL
        print("\nBlog link is enabled and redirects to Blog page")

    def test_check_bottom_links4(self, setup):
        if self.mainPage.element_clickable(self.mainPage.DEVELOPERS_LINK, 5) == 1:
            self.mainPage.click(self.mainPage.DEVELOPERS_LINK)
            assert self.mainPage.page_url() == TestData.DEVELOPERS_URL
        print("\nDevelopers link is enabled and redirects to Developers page")

    def test_check_bottom_links5(self, setup):
        if self.mainPage.element_clickable(self.mainPage.GUIDELINES_LINK, 5) == 1:
            self.mainPage.click(self.mainPage.GUIDELINES_LINK)
            assert self.mainPage.page_url() == TestData.GUIDELINES_URL
        print("\nGuidelines link is enabled and redirects to Guidelines page")

    def test_check_bottom_links6(self, setup):
        if self.mainPage.element_clickable(self.mainPage.HELP_LINK, 5) == 1:
            self.mainPage.click(self.mainPage.HELP_LINK)
            assert self.mainPage.page_url() == TestData.HELP_URL
        print("\nHelp link is enabled and redirects to Help page")

    def test_check_bottom_links7(self, setup):
        if self.mainPage.element_clickable(self.mainPage.HELP_FORUM_LINK, 5) == 1:
            self.mainPage.click(self.mainPage.HELP_FORUM_LINK)
            assert self.mainPage.page_url() == TestData.HELP_FORUM_URL
        print("\nHelp forum link is enabled and redirects to Help forum page")

    def test_check_bottom_links8(self, setup):
        if self.mainPage.element_clickable(self.mainPage.PRIVACY_LINK, 5) == 1:
            self.mainPage.click(self.mainPage.PRIVACY_LINK)
            assert self.mainPage.page_url() == TestData.PRIVACY_URL
        print("\nPrivacy link is enabled and redirects to Privacy page")

    def test_check_bottom_links9(self, setup):
        if self.mainPage.element_clickable(self.mainPage.TERMS_LINK, 5) == 1:
            self.mainPage.click(self.mainPage.TERMS_LINK)
            assert self.mainPage.page_url() == TestData.TERMS_URL
        print("\nTerms link is enabled and redirects to Terms page")

    def test_check_bottom_links10(self, setup):
        if self.mainPage.element_clickable(self.mainPage.COOKIES_LINK, 5) == 1:
            self.mainPage.click(self.mainPage.COOKIES_LINK)
            assert self.mainPage.page_url() == TestData.COOKIES_URL
        print("\nCookies link is enabled and redirects to Cookies page")
