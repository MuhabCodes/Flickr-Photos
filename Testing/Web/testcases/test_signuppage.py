import pytest
from time import sleep
from pages.signuppage import SignUpPage
from webdriver_manager.chrome import ChromeDriverManager
from info.info import TestData
from selenium import webdriver


class TestSignUPage(object):
    @pytest.fixture()
    def setup(self):
        self.driver = webdriver.Chrome(ChromeDriverManager().install())
        self.signupPage = SignUpPage(self.driver)
        self.signupPage.driver.maximize_window()
        yield
        self.signupPage.driver.quit()

        """Age must be 13 or older"""
        """Password must have 12 chars (letters) at least"""
        """No field can be blank, all required"""

    @pytest.mark.skip
    def test_register1(self, setup):
        print("\nAll info correct")
        self.signupPage.register("Abdelrahman", "Tarek", "21", "abdelrahman-tarek@outlook.com", "qwertyuiopas123")
        sleep(30)
        self.signupPage.click_signup_button()
        sleep(10)
        assert self.signupPage.page_url() == TestData.CHECK_EMAIL_URL

    @pytest.mark.skip
    def test_register2(self, setup):
        print("\nAge below 13")
        self.signupPage.register("George", "Joseph", "12", "george.joseph2896@gmail.com", "georgejoseph12345")
        sleep(30)
        self.signupPage.click_signup_button()
        sleep(10)
        assert self.signupPage.page_url() == TestData.SIGNUP_URL

    @pytest.mark.skip
    def test_register3(self, setup):
        print("\nAge is 13 exactly")
        self.signupPage.register("George", "Joseph", "13", "george.joseph2896@gmail.com", "georgejoseph12345")
        sleep(50)
        self.signupPage.click_signup_button()
        sleep(10)
        assert self.signupPage.page_url() == TestData.CHECK_EMAIL_URL

    @pytest.mark.skip
    def test_register4(self, setup):
        print("\nAlredy used email")
        self.signupPage.register("George", "Joseph", "20", "george.joseph2896@gmail.com", "georgejoseph12345")
        sleep(30)
        self.signupPage.click_signup_button()
        sleep(10)
        assert self.signupPage.page_url() == TestData.SIGNUP_URL

    @pytest.mark.skip
    def test_register5(self, setup):
        print("\nPassword less than 12 chars")
        self.signupPage.register("George", "Joseph", "12", "george_eight@hotmail.com", "george12")
        sleep(30)
        self.signupPage.click_signup_button()
        sleep(10)
        assert self.signupPage.page_url() == TestData.SIGNUP_URL

    @pytest.mark.skip
    def test_register6(self, setup):
        print("\nBlank fields")
        self.signupPage.register("", "", "", "", "")
        sleep(30)
        self.signupPage.click_signup_button()
        sleep(10)
        assert self.signupPage.page_url() == TestData.SIGNUP_URL

    def test_terms_link(self, setup):
        if self.signupPage.element_clickable(self.signupPage.TERMS_LINK, 2):
            self.signupPage.click_terms_link()
            self.driver.switch_to.window(self.driver.window_handles[1])
            sleep(5)
            assert self.signupPage.page_url() == TestData.TERMS_URL
            print("\nOpens Terms of services page in a new tab")

    def test_privacy_link(self, setup):
        if self.signupPage.element_clickable(self.signupPage.PRIVACY_LINK, 2):
            self.signupPage.click_privacy_link()
            self.driver.switch_to.window(self.driver.window_handles[1])
            sleep(5)
            assert self.signupPage.page_url() == TestData.PRIVACY_URL
            print("\nOpens Privacy Policy page in a new tab")

    def test_help_link(self, setup):
        if self.signupPage.element_clickable(self.signupPage.HELP_LINK, 2):
            self.signupPage.click_help_link()
            self.driver.switch_to.window(self.driver.window_handles[1])
            sleep(5)
            assert self.signupPage.page_url() == TestData.HELP_URL
            print("\nOpens Help page in a new tab")

    def test_login_link(self, setup):
        if self.signupPage.element_clickable(self.signupPage.LOGIN_LINK, 2):
            self.signupPage.click_login()
            sleep(5)
            assert self.signupPage.page_url() in TestData.LOGIN_URL
            print("\nOpens sign in page")
