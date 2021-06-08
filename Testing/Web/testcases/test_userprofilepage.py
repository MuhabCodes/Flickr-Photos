import pytest
from pages.userprofilepage.userprofilepage import UserProfilePage
from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
from time import sleep
from pages.loginpage.loginpage import LoginPage


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
        print("\nAbout tab is working")

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
        print("\nEditing description in About")

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
        print("\nEditing profile information in About")

    def test_photostream_label(self, setup):
        action = webdriver.ActionChains(self.driver)
        action.move_by_offset(10, 0)
        action.perform()
        self.userprofilePage.click(self.userprofilePage.PHOTOSTREAM_LABEL)
        sleep(2)
        assert "photos" in self.userprofilePage.page_url()
        sleep(2)
        print("\nPhotostream tab is working")

    def test_albums_label(self, setup):
        action = webdriver.ActionChains(self.driver)
        action.move_by_offset(10, 0)
        action.perform()
        self.userprofilePage.click(self.userprofilePage.ALBUMS_LABEL)
        sleep(2)
        assert "albums" in self.userprofilePage.page_url()
        sleep(2)
        print("\nAlbums tab is working")

    def test_faves_label(self, setup):
        self.userprofilePage.click(self.userprofilePage.FAVES_LABEL)
        sleep(2)
        assert "favorites" in self.userprofilePage.page_url()
        sleep(2)
        print("\nFavourites tab is working")

    def test_galleries_label(self, setup):
        self.userprofilePage.click(self.userprofilePage.GALLERIES_LABEL)
        sleep(2)
        assert "galleries" in self.userprofilePage.page_url()
        sleep(2)
        print("\nGalleries tab is working")

    def test_add_new_gallery(self, setup):
        self.userprofilePage.click(self.userprofilePage.GALLERIES_LABEL)
        if self.userprofilePage.element_clickable(self.userprofilePage.ADD_NEW_GALLERY_BUTTON):
            self.userprofilePage.click(self.userprofilePage.ADD_NEW_GALLERY_BUTTON)
            sleep(2)
            self.userprofilePage.send(self.userprofilePage.GALLERY_NAME_FIELD, "Test12345")
            self.userprofilePage.send(self.userprofilePage.GALLERY_DESC_FIELD, "This is a test")
            self.userprofilePage.click(self.userprofilePage.SAVE_GALLERY_BUTTON)
            sleep(2)
        else:
            if self.userprofilePage.element_clickable(self.userprofilePage.PLUS_NEW_GALLERY_BUTTON):
                self.userprofilePage.click(self.userprofilePage.PLUS_NEW_GALLERY_BUTTON)
                sleep(2)
                self.userprofilePage.send(self.userprofilePage.GALLERY_NAME_FIELD, "Test125")
                self.userprofilePage.send(self.userprofilePage.GALLERY_DESC_FIELD, "This is a second test")
                self.userprofilePage.click(self.userprofilePage.SAVE_GALLERY_BUTTON)

        sleep(2)
        print("\nCreated new gallery")

    def test_delete_gallery(self, setup):
        self.userprofilePage.click(self.userprofilePage.GALLERIES_LABEL)
        sleep(2)
        if self.userprofilePage.element_clickable(self.userprofilePage.EXAMPLE_GALLERY):
            self.userprofilePage.click(self.userprofilePage.EXAMPLE_GALLERY)
            sleep(2)
            self.userprofilePage.click(self.userprofilePage.EDIT_GALLERY_ICON)
            sleep(2)
            self.userprofilePage.click(self.userprofilePage.DELETE_GALLERY_BUTTON)
            sleep(2)
            self.userprofilePage.click(self.userprofilePage.DELETE_CONFIRMATION_BUTTON)
            sleep(2)
            print("\nDeleted Gallery")
        else:
            print("\nNo Galleries to delete")

    def test_groups_label(self, setup):
        self.userprofilePage.click(self.userprofilePage.GROUPS_LABEL)
        sleep(2)
        assert "groups" in self.userprofilePage.page_url()
        sleep(2)
        print("\nGroups tab is working")

    def test_stats_label(self, setup):
        self.userprofilePage.click(self.userprofilePage.STATS_LABEL)
        sleep(2)
        assert "stats" in self.userprofilePage.page_url()
        sleep(2)
        print("\nStats tab is working")

    def test_cameraroll_label(self, setup):
        self.userprofilePage.click(self.userprofilePage.CAMERAROLL_LABEL)
        sleep(2)
        assert "cameraroll" in self.userprofilePage.page_url()
        sleep(2)
        print("\nCameraroll tab is working")

    def test_followers_link(self, setup):
        action = webdriver.ActionChains(self.driver)
        action.move_by_offset(10, 0)
        action.perform()
        self.userprofilePage.click(self.userprofilePage.FOLLOWERS_LINK)
        sleep(2)
        assert "rev" and "contacts" in self.userprofilePage.page_url()
        sleep(2)
        print("\nFollowers link is working and redirects to followers page")

    def test_following_link(self, setup):
        action = webdriver.ActionChains(self.driver)
        action.move_by_offset(10, 0)
        action.perform()
        self.userprofilePage.click(self.userprofilePage.FOLLOWING_LINK)
        sleep(2)
        assert "contacts" in self.userprofilePage.page_url() and "rev" not in self.userprofilePage.page_url()
        print("\nFollowing link is working and redirects to people followed by the user page")

