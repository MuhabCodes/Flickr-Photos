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

    def test_search_photos(self, setup):
        self.mainPage.search(self.mainPage.TEXT_TO_SEARCH)
        sleep(2)
        self.mainPage.click(self.mainPage.PHOTOS_LABEL)
        sleep(2)
        assert "search" and self.mainPage.TEXT_TO_SEARCH in self.mainPage.page_url()
        sleep(2)

    def test_search_people(self, setup):
        self.mainPage.search(self.mainPage.TEXT_TO_SEARCH)
        sleep(2)
        self.mainPage.click(self.mainPage.PEOPLE_LABEL)
        sleep(2)
        assert "username=" + self.mainPage.TEXT_TO_SEARCH in self.mainPage.page_url()
        sleep(2)

    def test_search_groups(self, setup):
        self.mainPage.search(self.mainPage.TEXT_TO_SEARCH)
        sleep(2)
        self.mainPage.click(self.mainPage.GROUPS_LABEL)
        sleep(2)
        assert "groups" and self.mainPage.TEXT_TO_SEARCH in self.mainPage.page_url()
        sleep(2)

    def test_fav_and_comment_photo(self, setup):
        self.mainPage.search_and_click_photo(self.mainPage.TEXT_TO_SEARCH)
        self.mainPage.click(self.mainPage.FAV_PHOTO)
        sleep(2)
        self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        self.mainPage.clear_field(self.mainPage.COMMENT_FIELD)
        self.mainPage.send(self.mainPage.COMMENT_FIELD, "Nice")
        self.mainPage.click(self.mainPage.COMMENT_BUTTON)
        sleep(2)

    @pytest.mark.skip
    def test_add_to_gallery_photo(self, setup):
        self.mainPage.search_and_click_photo(self.mainPage.TEXT_TO_SEARCH)
        sleep(2)
        self.mainPage.click(self.mainPage.ADD_PHOTO_TO)
        sleep(2)
