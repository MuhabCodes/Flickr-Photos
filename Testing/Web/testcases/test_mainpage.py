import pytest
from pages.mainpage.mainpage import MainPage
from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
from time import sleep
from pages.loginpage.loginpage import LoginPage
from info.info import TestData


class TestMainPage(object):
    @pytest.fixture()
    def setup(self):
        self.driver = webdriver.Chrome(ChromeDriverManager().install())
        self.mainPage = MainPage(self.driver)
        self.mockLogin = LoginPage(self.driver)
        self.mockLogin.log_in("george_joseph99@hotmail.com", "ejnHG3v35gueXhE")
        self.mainPage.driver.maximize_window()
        yield
        self.mainPage.driver.quit()

    def test_mail_link(self, setup):
        self.mainPage.click_profile_icon()
        self.mainPage.click(self.mainPage.FLICKR_MAIL_LABEL)
        sleep(2)
        assert self.mainPage.page_url() == TestData.FLICKR_MAIL_URL
        sleep(2)

    def test_settings_link(self, setup):
        self.mainPage.click_profile_icon()
        self.mainPage.click(self.mainPage.SETTINGS_LABEL)
        sleep(2)
        assert self.mainPage.page_url() == TestData.ACCOUNT_URL
        sleep(2)

    def test_help_link(self, setup):
        self.mainPage.click_profile_icon()
        self.mainPage.click(self.mainPage.HELP_LABEL)
        sleep(2)
        assert self.mainPage.page_url() == TestData.HELP_URL
        sleep(2)

    def test_logout_link(self, setup):
        self.mainPage.click_profile_icon()
        self.mainPage.click(self.mainPage.LOGOUT_LABEL)
        sleep(2)
        assert self.mainPage.page_url() != TestData.MAIN_URL
        sleep(2)

    def test_notification_icon(self, setup):
        self.mainPage.click(self.mainPage.NOTIFICATION_ICON)
        sleep(2)
        self.mainPage.click(self.mainPage.RECENT_ACTIVITY_LABEL)
        sleep(2)
        assert self.mainPage.page_url() == TestData.RECENT_ACTIVITY_URL
        sleep(2)

    def test_upload(self, setup):
        self.mainPage.click_upload_icon()
        remove_hidden_class = "document.getElementById('choose-photos-and-videos').classList.remove('browse-button'," \
                              "'browse-button-choose-files','choose-from-client')"
        self.driver.execute_script(remove_hidden_class)
        self.mainPage.send(self.mainPage.UPLOAD_FILE, self.mainPage.IMAGE_LOCAL_URL)
        sleep(5)
        self.mainPage.click(self.mainPage.UPLOAD_BUTTON)
        self.mainPage.click(self.mainPage.CONFIRM_UPLOAD)
        sleep(10)
        assert "photos" in self.mainPage.page_url()
        sleep(2)
