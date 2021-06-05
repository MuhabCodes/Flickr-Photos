from info.info import TestData
from pages.basepage import BasePage
from selenium.webdriver.common.by import By


class UserProfilePage(BasePage):
    """Locators"""
    ABOUT_LABEL = (By.XPATH, '/html/body/div[1]/div/div[3]/div/div/div/div[1]/ul/li[1]/a')
    PHOTOSTREAM_LABEL = (By.XPATH, '/html/body/div[1]/div/div[3]/div/div/div/div[1]/ul/li[2]/a')
    #PHOTOSTREAM_LABEL = (By.ID, "photostream")
    ALBUMS_LABEL = (By.XPATH, '/html/body/div[1]/div/div[3]/div/div/div/div[1]/ul/li[3]/a')
    FAVES_LABEL = (By.XPATH, '/html/body/div[1]/div/div[3]/div/div/div/div[1]/ul/li[4]/a')
    GALLERIES_LABEL = (By.XPATH, '/html/body/div[1]/div/div[3]/div/div/div/div[1]/ul/li[5]/a')
    GROUPS_LABEL = (By.XPATH, '/html/body/div[1]/div/div[3]/div/div/div/div[1]/ul/li[6]/a')
    STATS_LABEL = (By.XPATH, '/html/body/div[1]/div/div[3]/div/div/div/div[1]/ul/li[7]/a')
    CAMERAROLL_LABEL = (By.XPATH, '/html/body/div[1]/div/div[3]/div/div/div/div[1]/ul/li[8]/a')
    FOLLOWERS_LINK = (By.XPATH, '/html/body/div[1]/div/div[2]/div/div[4]/div[3]/div[2]/p[2]/a[1]')
    FOLLOWING_LINK = (By.XPATH, '/html/body/div[1]/div/div[2]/div/div[4]/div[3]/div[2]/p[2]/a[2]')
    YOU_LINK = (By.XPATH, '/html/body/div[1]/div/div[1]/div/div[3]/div/ul[1]/li[1]/a')

    def __init__(self, driver):
        super().__init__(driver)
        self.driver.get(TestData.LOGIN_URL)
