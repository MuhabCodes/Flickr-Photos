import pytest
from pages.accountsettingspage.accountsettingspage import AccountSettingsPage
from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
from time import sleep
from pages.loginpage.loginpage import LoginPage
from info.info import TestData


class TestAccountSettingsPage(object):
    @pytest.fixture()
    def setup(self):
        self.driver = webdriver.Chrome(ChromeDriverManager().install())
        self.accountsettingsPage = AccountSettingsPage(self.driver)
        self.mockLogin = LoginPage(self.driver)
        self.mockLogin.log_in("george_joseph99@hotmail.com", "ejnHG3v35gueXhE")
        self.driver.get(TestData.ACCOUNT_URL)
        self.accountsettingsPage.driver.maximize_window()
        yield
        self.accountsettingsPage.driver.quit()

    def test_change_password_link(self, setup):
        self.accountsettingsPage.click_change_password_link()
        sleep(2)
        assert self.accountsettingsPage.page_url() == TestData.PASSWORD_CHANGE_URL

    def test_change_password1(self, setup):
        self.accountsettingsPage.click_change_password_link()
        self.accountsettingsPage.change_password("ejnHG3v35gueXhE", "1")
        sleep(2)
        assert self.accountsettingsPage.page_url() == TestData.PASSWORD_CHANGE_URL
        sleep(2)
        print("\nInvalid pass (less than 12 chars")

    def test_change_password2(self, setup):
        self.accountsettingsPage.click_change_password_link()
        self.accountsettingsPage.change_password("ejnHG3v35gueXhE", "")
        sleep(2)
        assert self.accountsettingsPage.page_url() == TestData.PASSWORD_CHANGE_URL
        sleep(2)
        print("\nInvalid pass (blank)")

    def test_change_password3(self, setup):
        self.accountsettingsPage.click_change_password_link()
        self.accountsettingsPage.change_password("ejnHG3v35gueXhE", " qwertyuiopasdf")
        sleep(2)
        assert self.accountsettingsPage.page_url() == TestData.PASSWORD_CHANGE_URL
        sleep(2)
        print("\nInvalid pass (Leading space)")

    def test_change_password4(self, setup):
        self.accountsettingsPage.click_change_password_link()
        self.accountsettingsPage.change_password("ejnHG3v35gueXhE", "ejnHG3v35gueXhE")
        sleep(2)
        assert self.accountsettingsPage.page_url() == TestData.PASSWORD_CHANGE_SUCCESS_URL
        sleep(2)
        print("\nPass is valid")

    def test_help_link(self, setup):
        self.accountsettingsPage.click(self.accountsettingsPage.HELP_LINK)
        sleep(2)
        assert self.accountsettingsPage.page_url() == TestData.HELP_URL
        print("\nHelp link is working and redirects to help page")

    def test_delete_account(self, setup):
        self.accountsettingsPage.click(self.accountsettingsPage.DELETE_ACCOUNT)
        sleep(2)
        assert self.accountsettingsPage.page_url() == TestData.ACCOUNT_DELETE_URL
        print("\n Delete link is working and redirects to delete account page")

    def test_change_real_name(self, setup):
        self.accountsettingsPage.click(self.accountsettingsPage.REAL_NAME_CHANGE)
        sleep(2)
        assert self.accountsettingsPage.page_url() == TestData.PROFILE_EDIT_URL
        print("\n Change real name link is working and redirects to profile edit page")

    def test_change_display_name(self, setup):
        self.accountsettingsPage.click(self.accountsettingsPage.DISPLAY_NAME_CHANGE)
        sleep(2)
        assert self.accountsettingsPage.page_url() == TestData.DISPLAY_NAME_URL
        print("\n Change display link is working and redirects to screen name edit page")
