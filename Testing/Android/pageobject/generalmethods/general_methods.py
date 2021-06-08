from time import sleep

from appium import webdriver
from appium.webdriver.webdriver import WebDriver
from appium.webdriver.webelement import WebElement
from appium.webdriver.common.touch_action import TouchAction
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
from pageobject.page import Page
from pageobject.locator import Locator
from pageobject.loginpage.login_page import LoginPage


class GeneralMethods(Page):
    """ Class contains general methods. """
    def __init__(self, driver: WebDriver = None):
        Page.__init__(self, driver)

    def press_enter(self):
        self.driver.press_keycode(66)

    def element_located(self, by: By, identifier: str, max_time: float = 5):
        """ Detect if an element is present in the page.

        :param by: Locator strategy example: ID, NAME,.....etc
        :param identifier: string to identify element
        :param max_time: Maximum waiting time
        :return: A boolean to check if the element is present
        """
        try:
            WebDriverWait(self.driver, max_time).until(
                EC.presence_of_element_located((by, identifier))
            )
            return True
        except TimeoutException:
            return False

    def login(self, email: str = "sasasabry290@gmail.com",
              password: str = "C%D5KBSN?$w&QKv"):
        """ log in flickr using input credentials.

        :param email: Flickr Account email
        :param password: Flickr Account password
        :return:
        """
        self.driver.find_element_by_id(
            Locator.getting_started_id).click()

        sleep(2)
        print(self.driver.contexts)
        self.driver.switch_to.context(
            Locator.login_webview_context)

        email_field = self.driver.find_element_by_xpath(
            Locator.email_field_xpath)
        email_field.send_keys(email)

        self.driver.find_element_by_xpath(
            Locator.proceed_button_xpath).click()

        sleep(2)
        password_field = self.driver.find_element_by_xpath(
            Locator.password_field_xpath)
        password_field.send_keys(password)

        self.driver.find_element_by_xpath(
            Locator.proceed_button_xpath).click()

        self.driver.switch_to.context('NATIVE_APP')

    def login_alt(self, email: str = "sasasabry290@gmail.com",
                  password: str = "C%D5KBSN?$w&QKv"):
        self.driver.find_element_by_id(
            Locator.getting_started_id).click()

        sleep(2)
        self.driver.switch_to.context(Locator.login_webview_context)

    def allow_permission(self):

        self.driver.find_element_by_id(
            Locator.permission_allow_button_id).click()
        return True

    def get_fave_count(self):
        """ Get the favourite count of a photo
        :return: String favourite count
        """

        fave_count = self.driver.find_element_by_id(
            Locator.fave_count_id)
        return fave_count.text

    def get_comments_count(self):
        """ Get the comment count of a comment

        :return: String comment count
        """
        comment_count = self.driver.find_element_by_id(
            Locator.comment_count_id)
        return comment_count.text

    def tap_fave(self):
        """ Tap on fave button inside a photo. """
        post_activity_footer = self.driver.find_element_by_id(
            Locator.post_activity_footer_id
        )
        footer_width = 576
        footer_height = 84

        action = TouchAction(self.driver)
        x1 = int(footer_width/8)
        y1 = int(footer_height/2)
        action.tap(post_activity_footer, x=x1, y=y1).perform()

    def tap_comments(self):
        """ Open comment section."""
        post_activity_footer = self.driver.find_element_by_id(
            Locator.post_activity_footer_id
        )
        footer_width = 576
        footer_height = 84

        action = TouchAction(self.driver)
        x1 = int((footer_width/4) + (footer_width/8))
        y1 = int(footer_height / 2)
        action.tap(post_activity_footer, x=x1, y=y1).perform()

    def exit_comments(self):
        """ Exit comments section"""
        self.driver.find_element_by_id(
            "com.flickr.android:id/fragment_header_back"
        ).click()

    def get_comment_tabs_list(self):
        tab_list = self.driver.find_elements_by_id(
            Locator.comment_sliding_tabs_id)
        return tab_list

    def get_comment_fave_list(self):
        tab_list = self.get_comment_tabs_list()
        tab_list[0].click()
        fave_list = self.driver.find_elements_by_xpath(
            Locator.comment_fave_relativelayout_xpath)
        return fave_list

    def check_comment_fave(self, name: str = "Mostafa Sabry"):
        self.tap_comments()
        fave_list = self.get_comment_fave_list()
        if len(fave_list) == 0:
            self.exit_comments()
            return False

        fave_name = fave_list[0].find_element_by_id(
            Locator.list_people_name_id).get_attribute("text")
        self.exit_comments()

        if fave_name == name:
            return True
        return False

    def send_comment(self, text: str):
        """ Add comment to photo.

        :param text: string comment
        """
        comment_field: WebElement = WebDriverWait(self.driver, 60).until(
            EC.element_to_be_clickable(
                (By.ID, Locator.add_comment_field_id)
            )
        )
        comment_field.send_keys(text)
        self.driver.hide_keyboard()

        self.driver.find_element_by_id(
            Locator.comment_post_button_id).click()

    def get_you_name(self):
        self.driver.find_element_by_id(Locator.nav_profile_id).click()
        name = self.driver.find_element_by_id(
            Locator.profile_name_id).get_attribute("text")
        return name

    def open_roll_latest_photo(self, frame_intex: int = 0):
        roll_framelayout_list = self.driver.find_elements_by_xpath(
            Locator.roll_recyclerview_xpath
        )
        photo_list = \
            roll_framelayout_list[frame_intex].find_elements_by_xpath(
                './' + Locator.photo_sub_xpath
            )
        photo_list[0].click()

    def tap_roll_photo_info(self):
        activity_footer = self.driver.find_element_by_id(
            Locator.photo_activity_footer_id)

        footer_width = 576
        footer_height = 84

        action = TouchAction(self.driver)
        x1 = int(3*(footer_width/4) + (footer_width/8))
        y1 = int(footer_height / 2)
        action.tap(activity_footer, x=x1, y=y1).perform()
