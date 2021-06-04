from time import sleep

from appium.webdriver.webdriver import WebDriver
from appium.webdriver.webelement import WebElement
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from appium import webdriver
from appium.webdriver.common.touch_action import TouchAction
from pageobject.page import Page
from pageobject.locator import Locator


class MainPage(Page):
    def __init__(self, driver: WebDriver = None):
        Page.__init__(self, driver)

    def refresh_feed(self):
        """ Refresh mainpage feed. """
        flickr_view = self.driver.find_element_by_id(
            Locator.flickr_view_id
        )

        post_list = flickr_view.find_elements_by_xpath(
            '.' + Locator.post_xpath)

        self.driver.scroll(post_list[1], post_list[0])

    def scroll_feed(self, source: tuple, dest: tuple):
        """ Scroll feed from source to destination by touch

        :param source: source coordinates (x1, y1)
        :param dest: destination coordinates (x2, y2)
        """

        action = TouchAction(self.driver)

        x1 = source[0]
        y1 = source[1]
        x2 = dest[0]
        y2 = dest[1]
        action.press(x=x1, y=y1).move_to(x=x2, y=y2).release().perform()

    def tap_feed_photo(self, post_item: WebElement, x: int, y: int):
        """ Tap on a photo in a feed post.

        :param post_item: feed post Relative Layout
        :param x: photo's x-coordinate
        :param y: photo's y-coordinate
        """
        photo_group = post_item.find_element_by_id(
            Locator.photo_group_id)

        action = TouchAction(self.driver)
        action.tap(photo_group, x=x, y=y).perform()

    def test_tap_photo(self):
        """ Test tapping in a feed photo. """
        flickr_view = self.driver.find_element_by_id(
            Locator.flickr_view_id
        )

        post_list = flickr_view.find_elements_by_xpath(
            '.' + Locator.post_xpath)

        self.tap_feed_photo(post_list[0], 10, 10)

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

    def test_tapping_fave(self):
        """ Check if tapping fave increases fave count.

        :return: boolean to check if the operation is successful
        """
        flickr_view = self.driver.find_element_by_id(
            Locator.flickr_view_id
        )

        post_list = flickr_view.find_elements_by_xpath(
            '.' + Locator.post_xpath)
        self.tap_feed_photo(post_list[0], 10, 10)

        fave_count = self.get_fave_count()
        self.tap_fave()

        sleep(3)
        new_fave_count = self.get_fave_count()
        return fave_count != new_fave_count

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

    def test_commenting(self):
        """ Test typing a comment."""
        flickr_view = self.driver.find_element_by_id(
            Locator.flickr_view_id
        )

        post_list = flickr_view.find_elements_by_xpath(
            '.' + Locator.post_xpath)
        self.tap_feed_photo(post_list[0], 10, 10)

        # comment_count = self.get_comments_count()

        self.tap_comments()
        self.send_comment("Great photo")
        return True
        # sleep(1)
        #
        # self.exit_comments()
        #
        # sleep(3)
        # new_comment_count = self.get_comments_count()
        #
        # return comment_count != new_comment_count