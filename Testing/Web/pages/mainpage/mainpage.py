from info.info import TestData
from pages.basepage import BasePage
from selenium.webdriver.common.by import By


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

    def __init__(self, driver):
        super().__init__(driver)
        self.driver.get(TestData.LOGIN_URL)

    def click_profile_icon(self):
        if self.element_clickable(self.PROFILE_ICON):
            self.click(self.PROFILE_ICON)

    def click_upload_icon(self):
        if self.element_clickable(self.UPLOAD_ICON):
            self.click(self.UPLOAD_ICON)
