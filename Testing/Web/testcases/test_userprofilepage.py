import pytest
from pages.userprofilepage.userprofilepage import UserProfilePage
from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
from time import sleep
from pages.loginpage.loginpage import LoginPage
from info.info import TestData
from selenium.webdriver.common.action_chains import ActionChains


class TestUserProfilePage(object):
    @pytest.fixture()
    def setup(self):
        self.driver = webdriver.Chrome(ChromeDriverManager().install())
        self.userprofilePage = UserProfilePage(self.driver)
        self.mockLogin = LoginPage(self.driver)
        self.mockLogin.log_in("george_joseph99@hotmail.com", "ejnHG3v35gueXhE")
        self.userprofilePage.driver.maximize_window()
        self.userprofilePage.click(self.userprofilePage.YOU_LINK)
        yield
        self.userprofilePage.driver.quit()

    def test_about_label(self, setup):
        self.userprofilePage.click(self.userprofilePage.ABOUT_LABEL)
        sleep(2)
        assert "people" in self.userprofilePage.page_url()
        sleep(2)

    def test_edit_description(self, setup):
        self.userprofilePage.click(self.userprofilePage.ABOUT_LABEL)
        sleep(2)
        self.userprofilePage.click(self.userprofilePage.EDIT_DESC)
        sleep(2)
        self.userprofilePage.clear_field(self.userprofilePage.EDIT_DESC_FIELD)
        self.userprofilePage.send(self.userprofilePage.EDIT_DESC_FIELD, "Hi")
        self.userprofilePage.click(self.userprofilePage.SAVE_DESC)
        sleep(2)
        assert self.userprofilePage.element_located(self.userprofilePage.EDIT_DESC)
        sleep(2)

    def test_edit_profile_info(self, setup):
        self.userprofilePage.click(self.userprofilePage.ABOUT_LABEL)
        sleep(2)
        self.driver.execute_script("window.scrollTo(0, 700);")
        self.userprofilePage.click(self.userprofilePage.EDIT_PROFILE_INFO)
        self.userprofilePage.clear_profile_info_fields()
        self.userprofilePage.send(self.userprofilePage.OCCUPATION_FIELD, "Student")
        self.userprofilePage.send(self.userprofilePage.HOMETOWN_FIELD, "Cairo")
        self.userprofilePage.send(self.userprofilePage.CURRENT_CITY_FIELD, "Giza")
        self.userprofilePage.send(self.userprofilePage.COUNTRY_FIELD, "Egypt")
        self.userprofilePage.send(self.userprofilePage.WEBSITE_FIELD, "")
        self.userprofilePage.send(self.userprofilePage.FACEBOOK_FEILD, "George.Joseph")
        self.userprofilePage.send(self.userprofilePage.TWITTER_FIELD, "George_Joseph")
        self.userprofilePage.send(self.userprofilePage.INSTAGRAM_FIELD, "George_Joseph")
        self.userprofilePage.send(self.userprofilePage.PINTEREST_FIELD, "George_Joseph")
        self.userprofilePage.send(self.userprofilePage.TUMBLR_FIELD, "GeorgeJoseph")
        sleep(2)
        self.userprofilePage.click(self.userprofilePage.DONE_BUTTON)
        assert self.userprofilePage.element_located(self.userprofilePage.EDIT_PROFILE_INFO)
        sleep(2)

    def test_photostream_label(self, setup):
        action = webdriver.ActionChains(self.driver)
        action.move_by_offset(10, 0)
        action.perform()
        self.userprofilePage.click(self.userprofilePage.PHOTOSTREAM_LABEL)
        sleep(2)
        assert "photos" in self.userprofilePage.page_url()
        sleep(2)

    def test_albums_label(self, setup):
        action = webdriver.ActionChains(self.driver)
        action.move_by_offset(10, 0)
        action.perform()
        self.userprofilePage.click(self.userprofilePage.ALBUMS_LABEL)
        sleep(2)
        assert "albums" in self.userprofilePage.page_url()
        sleep(2)

    def test_faves_label(self, setup):
        self.userprofilePage.click(self.userprofilePage.FAVES_LABEL)
        sleep(2)
        assert "favorites" in self.userprofilePage.page_url()
        sleep(2)

    def test_galleries_label(self, setup):
        self.userprofilePage.click(self.userprofilePage.GALLERIES_LABEL)
        sleep(2)
        assert "galleries" in self.userprofilePage.page_url()
        sleep(2)

    def test_groups_label(self, setup):
        self.userprofilePage.click(self.userprofilePage.GROUPS_LABEL)
        sleep(2)
        assert "groups" in self.userprofilePage.page_url()
        sleep(2)

    def test_stats_label(self, setup):
        self.userprofilePage.click(self.userprofilePage.STATS_LABEL)
        sleep(2)
        assert "stats" in self.userprofilePage.page_url()
        sleep(2)

    def test_cameraroll_label(self, setup):
        self.userprofilePage.click(self.userprofilePage.CAMERAROLL_LABEL)
        sleep(2)
        assert "cameraroll" in self.userprofilePage.page_url()
        sleep(2)

    def test_followers_link(self, setup):
        action = webdriver.ActionChains(self.driver)
        action.move_by_offset(10, 0)
        action.perform()
        self.userprofilePage.click(self.userprofilePage.FOLLOWERS_LINK)
        sleep(2)
        assert "rev" and "contacts" in self.userprofilePage.page_url()
        sleep(2)

    def test_following_link(self, setup):
        action = webdriver.ActionChains(self.driver)
        action.move_by_offset(10, 0)
        action.perform()
        self.userprofilePage.click(self.userprofilePage.FOLLOWING_LINK)
        sleep(2)
        assert "contacts" in self.userprofilePage.page_url() and "rev" not in self.userprofilePage.page_url()
