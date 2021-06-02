import pytest
from time import sleep
from pages.homepage.homepage import HomePage
from webdriver_manager.chrome import ChromeDriverManager
from info.info import TestData
from selenium import webdriver


class TestHomePage(object):
    @pytest.fixture()
    def setup(self):
        self.driver = webdriver.Chrome(ChromeDriverManager().install())
        self.homePage = HomePage(self.driver)
        self.homePage.driver.maximize_window()
        yield
        self.homePage.driver.quit()

    def test_click_start_for_free_button(self, setup):
        if self.homePage.element_clickable(self.homePage.START_FOR_FREE_BUTTON) == 1:
            self.homePage.click(self.homePage.START_FOR_FREE_BUTTON)
            sleep(5)
            assert self.homePage.page_url() == TestData.SIGNUP_URL
            print("\nStart for free button is enabled and redirects to signup page")

    def test_click_login_button(self, setup):
        if self.homePage.element_clickable(self.homePage.LOGIN_BUTTON) == 1:
            self.homePage.click(self.homePage.LOGIN_BUTTON)
            sleep(5)
            assert TestData.LOGIN_URL in self.homePage.page_url()
        print("\nLogin button is enabled and redirects to Login page")

    def test_click_signup_button(self, setup):
        self.homePage.click(self.homePage.SIGNUP_BUTTON)
        sleep(5)
        assert self.homePage.page_url() == TestData.SIGNUP_URL
        print("\nRedirects to signup page")

    def test_search_field(self, setup):
        if self.homePage.element_clickable(self.homePage.SEARCH_FIELD) == 1:
            self.homePage.search("dog")
            sleep(5)
            assert "dog" in self.homePage.page_url()
            print("\nSearch field is enabled and searching")

    def test_check_bottom_links1(self, setup):
        if self.homePage.element_clickable(self.homePage.ABOUT_LINK, 5) == 1:
            self.homePage.click(self.homePage.ABOUT_LINK)
            sleep(5)
            assert self.homePage.page_url() == TestData.ABOUT_URL
        print("\nAbout link is enabled and redirects to About page")

    def test_check_bottom_links2(self, setup):
        if self.homePage.element_clickable(self.homePage.JOBS_LINK, 5) == 1:
            self.homePage.click(self.homePage.JOBS_LINK)
            assert self.homePage.page_url() == TestData.JOBS_URL
        print("\nJobs link is enabled and redirects to Jobs page")

    def test_check_bottom_links3(self, setup):
        if self.homePage.element_clickable(self.homePage.BLOG_LINK, 5) == 1:
            self.homePage.click(self.homePage.BLOG_LINK)
            assert self.homePage.page_url() == TestData.BLOG_URL
        print("\nBlog link is enabled and redirects to Blog page")

    def test_check_bottom_links4(self, setup):
        if self.homePage.element_clickable(self.homePage.DEVELOPERS_LINK, 5) == 1:
            self.homePage.click(self.homePage.DEVELOPERS_LINK)
            assert self.homePage.page_url() == TestData.DEVELOPERS_URL
        print("\nDevelopers link is enabled and redirects to Developers page")

    def test_check_bottom_links5(self, setup):
        if self.homePage.element_clickable(self.homePage.GUIDELINES_LINK, 5) == 1:
            self.homePage.click(self.homePage.GUIDELINES_LINK)
            assert self.homePage.page_url() == TestData.GUIDELINES_URL
        print("\nGuidelines link is enabled and redirects to Guidelines page")

    def test_check_bottom_links6(self, setup):
        if self.homePage.element_clickable(self.homePage.HELP_LINK, 5) == 1:
            self.homePage.click(self.homePage.HELP_LINK)
            assert self.homePage.page_url() == TestData.HELP_URL
        print("\nHelp link is enabled and redirects to Help page")

    def test_check_bottom_links7(self, setup):
        if self.homePage.element_clickable(self.homePage.HELP_FORUM_LINK, 5) == 1:
            self.homePage.click(self.homePage.HELP_FORUM_LINK)
            assert self.homePage.page_url() == TestData.HELP_FORUM_URL
        print("\nHelp forum link is enabled and redirects to Help forum page")

    def test_check_bottom_links8(self, setup):
        if self.homePage.element_clickable(self.homePage.PRIVACY_LINK, 5) == 1:
            self.homePage.click(self.homePage.PRIVACY_LINK)
            assert self.homePage.page_url() == TestData.PRIVACY_URL
        print("\nPrivacy link is enabled and redirects to Privacy page")

    def test_check_bottom_links9(self, setup):
        if self.homePage.element_clickable(self.homePage.TERMS_LINK, 5) == 1:
            self.homePage.click(self.homePage.TERMS_LINK)
            assert self.homePage.page_url() == TestData.TERMS_URL
        print("\nTerms link is enabled and redirects to Terms page")

    def test_check_bottom_links10(self, setup):
        if self.homePage.element_clickable(self.homePage.COOKIES_LINK, 5) == 1:
            self.homePage.click(self.homePage.COOKIES_LINK)
            assert self.homePage.page_url() == TestData.COOKIES_URL
        print("\nCookies link is enabled and redirects to Cookies page")
