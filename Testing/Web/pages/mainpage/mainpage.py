import time
from info.info import TestData
from pages.basepage import BasePage
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium import webdriver


class MainPage(BasePage):
    """Locators"""
    PROFILE_ICON = (By.XPATH, '/html/body/div[1]/div/div[1]/div/div[3]/div/ul[2]/li[4]/div')
    FLICKR_MAIL_LABEL = (By.XPATH, '/html/body/div[5]/div/div[2]/div/div/div/section[3]/ul/li[1]/a')
    SETTINGS_LABEL = (By.XPATH, '/html/body/div[5]/div/div[2]/div/div/div/section[3]/ul/li[2]')
    HELP_LABEL = (By.XPATH, '/html/body/div[5]/div/div[2]/div/div/div/section[3]/ul/li[3]/a')
    LOGOUT_LABEL = (By.XPATH, '/html/body/div[5]/div/div[2]/div/div/div/section[3]/ul/li[4]/a')
    UPLOAD_ICON = (By.XPATH, '/html/body/div[1]/div/div[1]/div/div[3]/div/ul[2]/li[2]/a/i')
    NOTIFICATION_ICON = (By.XPATH, '/html/body/div[1]/div/div[1]/div/div[3]/div/ul[2]/li[3]/div/a')
    RECENT_ACTIVITY_LABEL = (By.XPATH, '/html/body/div[5]/div/div[2]/div/div/div/a')
    UPLOAD_FILE = (By.ID, "choose-photos-and-videos")
    UPLOAD_BUTTON = (By.XPATH, '/html/body/div[4]/div[1]/div[2]/div/div/div[4]/div[1]/div[1]/input')
    CONFIRM_UPLOAD = (By.XPATH, '/html/body/div[14]/div/div/div/div[2]/div[2]/div[2]/input[1]')
    IMAGE_LOCAL_URL = r"C:\Users\George\Desktop\image2.jpg"
    SEARCH_FIELD = (By.ID, "search-field")
    TEXT_TO_SEARCH = "cat"
    PHOTOS_LABEL = (By.XPATH, '/html/body/div[1]/div/div[2]/div/div/div/ul[1]/li[1]')
    PEOPLE_LABEL = (By.XPATH, '/html/body/div[1]/div/div[2]/div/div/div/ul[1]/li[2]')
    GROUPS_LABEL = (By.XPATH, '/html/body/div[1]/div/div[2]/div/div/div/ul[1]/li[3]')
    EXAMPLE_PHOTO_XPATH = '/html/body/div[1]/div/main/div[1]/div/div/div[1]/div/div/a'
    FAV_PHOTO = (By.XPATH, '/html/body/div[1]/div/div[2]/div/div[5]/div[1]/div')
    ADD_PHOTO_TO = (By.XPATH, '/html/body/div[1]/div/div[2]/div/div[5]/span')
    COMMENT_FIELD = (By.XPATH, '/html/body/div[1]/div/div[3]/div/div/div[1]/div[4]/div/div[2]/div[2]/textarea[1]')
    COMMENT_BUTTON = (By.XPATH, '/html/body/div[1]/div/div[3]/div/div/div[1]/div[4]/div/button')
    #ADD_TO_GALLERY = (By.XPATH, '/html/body/div[5]/div/div[2]/div/div/div/div[1]/ul/li[1]')
    #ADD_TO_GROUP = (By.XPATH, '/html/body/div[5]/div/div[2]/div/div/div/div[1]/ul/li[2]')

    def __init__(self, driver):
        super().__init__(driver)

    def click_profile_icon(self):
        if self.element_clickable(self.PROFILE_ICON):
            self.click(self.PROFILE_ICON)

    def click_upload_icon(self):
        if self.element_clickable(self.UPLOAD_ICON):
            self.click(self.UPLOAD_ICON)

    def search(self, text):
        self.send(self.SEARCH_FIELD, text)
        self.send(self.SEARCH_FIELD, Keys.RETURN)

    def search_and_click_photo(self, text):
        self.search(text)
        time.sleep(2)
        self.click(self.PHOTOS_LABEL)
        time.sleep(2)
        action = webdriver.ActionChains(self.driver)
        element = self.driver.find_element_by_xpath(self.EXAMPLE_PHOTO_XPATH)
        action.move_to_element(element).click().perform()
        time.sleep(2)
