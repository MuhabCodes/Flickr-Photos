from info.info import TestData
from pages.basepage import BasePage
from selenium.webdriver.common.by import By


class UserProfilePage(BasePage):
    """LOCATORS"""
    """NAVIGATION BAR"""
    YOU_LINK = (By.XPATH, '/html/body/div[1]/div/div[1]/div/div[3]/div/ul[1]/li[1]/a')
    """USER PROFILE PAGE"""
    ABOUT_LABEL = (By.XPATH, '/html/body/div[1]/div/div[3]/div/div/div/div[1]/ul/li[1]/a')
    PHOTOSTREAM_LABEL = (By.XPATH, '/html/body/div[1]/div/div[3]/div/div/div/div[1]/ul/li[2]/a')
    ALBUMS_LABEL = (By.XPATH, '/html/body/div[1]/div/div[3]/div/div/div/div[1]/ul/li[3]/a')
    FAVES_LABEL = (By.XPATH, '/html/body/div[1]/div/div[3]/div/div/div/div[1]/ul/li[4]/a')
    GALLERIES_LABEL = (By.XPATH, '/html/body/div[1]/div/div[3]/div/div/div/div[1]/ul/li[5]/a')
    GROUPS_LABEL = (By.XPATH, '/html/body/div[1]/div/div[3]/div/div/div/div[1]/ul/li[6]/a')
    STATS_LABEL = (By.XPATH, '/html/body/div[1]/div/div[3]/div/div/div/div[1]/ul/li[7]/a')
    CAMERAROLL_LABEL = (By.XPATH, '/html/body/div[1]/div/div[3]/div/div/div/div[1]/ul/li[8]/a')
    FOLLOWERS_LINK = (By.XPATH, '/html/body/div[1]/div/div[2]/div/div[4]/div[3]/div[2]/p[2]/a[1]')
    FOLLOWING_LINK = (By.XPATH, '/html/body/div[1]/div/div[2]/div/div[4]/div[3]/div[2]/p[2]/a[2]')
    """ABOUT PAGE"""
    EDIT_DESC = (By.CLASS_NAME, 'toggle-edit-description')
    EDIT_DESC_FIELD = (By.XPATH, '/html/body/div[1]/div/div[4]/div[1]/div/div[1]/div/textarea')
    SAVE_DESC = (By.XPATH, '/html/body/div[1]/div/div[4]/div[1]/div/div[1]/div/div/button[1]')
    EDIT_PROFILE_INFO = (By.CLASS_NAME, 'toggle-edit-infos')
    OCCUPATION_FIELD = (By.NAME, 'occupation')
    HOMETOWN_FIELD = (By.NAME, 'hometown')
    CURRENT_CITY_FIELD = (By.NAME, 'city')
    COUNTRY_FIELD = (By.NAME, 'country')
    WEBSITE_FIELD = (By.NAME, 'website')
    FACEBOOK_FEILD = (By.NAME, 'facebook')
    TWITTER_FIELD = (By.NAME, 'twitter')
    INSTAGRAM_FIELD = (By.NAME, 'instagram')
    PINTEREST_FIELD = (By.NAME, 'pinterest')
    TUMBLR_FIELD = (By.NAME, 'tumblr')
    DONE_BUTTON = (By.XPATH, '/html/body/div[1]/div/div[4]/div[1]/div/div[3]/div/div/ul[2]/li[7]/span[2]/button')
    """GALLERY PAGE"""
    ADD_NEW_GALLERY_BUTTON = (By.XPATH, '/html/body/div[1]/div/div[5]/div[1]/button')  #first gallery created
    GALLERY_NAME_FIELD = (By.XPATH, '/html/body/div[6]/div/div/div/div/div/div[1]/input')
    GALLERY_DESC_FIELD = (By.XPATH, '/html/body/div[6]/div/div/div/div/div/textarea')
    SAVE_GALLERY_BUTTON = (By.CSS_SELECTOR, 'button.mini.button-action')
    PLUS_NEW_GALLERY_BUTTON = (By.XPATH, '/html/body/div[1]/div/div[4]/div[1]/div/a')
    EXAMPLE_GALLERY = (By.XPATH, '/html/body/div[1]/div/div[4]/div[2]/div[1]/div/div[1]/a')
    EDIT_GALLERY_ICON = (By.XPATH, '/html/body/div[1]/div/div[2]/div/div[2]/a[1]')
    DELETE_GALLERY_BUTTON = (By.XPATH, '/html/body/div[6]/div/div/div/div/div[1]/div[4]/a')
    DELETE_CONFIRMATION_BUTTON = (By.XPATH, '/html/body/div[6]/div/div/div/div/div[2]/div/button[2]')

    def __init__(self, driver):
        super().__init__(driver)

    def clear_profile_info_fields(self):
        self.clear_field(self.OCCUPATION_FIELD)
        self.clear_field(self.HOMETOWN_FIELD)
        self.clear_field(self.CURRENT_CITY_FIELD)
        self.clear_field(self.COUNTRY_FIELD)
        self.clear_field(self.WEBSITE_FIELD)
        self.clear_field(self.FACEBOOK_FEILD)
        self.clear_field(self.TWITTER_FIELD)
        self.clear_field(self.INSTAGRAM_FIELD)
        self.clear_field(self.PINTEREST_FIELD)
        self.clear_field(self.TUMBLR_FIELD)
