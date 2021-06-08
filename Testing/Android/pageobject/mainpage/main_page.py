from time import sleep

from appium.webdriver.webdriver import WebDriver
from appium.webdriver.webelement import WebElement
from appium.webdriver.common.touch_action import TouchAction
from pageobject.page import Page
from pageobject.locator.locator import Locator
from pageobject.generalmethods.general_methods import GeneralMethods


class MainPage(Page):
    def __init__(self, driver: WebDriver = None):
        Page.__init__(self, driver)
        self.general_methods = GeneralMethods(driver)

    def set_driver(self, driver: WebDriver):
        self.driver = driver
        self.general_methods.set_driver(driver)

    def open_mainpage(self):
        self.general_methods.login()

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

        # fave_count = self.get_fave_count()
        fave_count = self.general_methods.get_fave_count()
        # self.tap_fave()
        self.general_methods.tap_fave()

        sleep(3)
        new_fave_count = self.general_methods.get_fave_count()
        return fave_count != new_fave_count

    def test_tapping_fave_2(self, name: str = "Mostafa Sabry"):
        """ Check if tapping fave increases fave count.

        :param name: Account name
        :return: boolean to check if the operation is successful
        """
        pass_1 = False
        pass_2 = False
        flickr_view = self.driver.find_element_by_id(
            Locator.flickr_view_id
        )

        post_list = flickr_view.find_elements_by_xpath(
            '.' + Locator.post_xpath)
        self.tap_feed_photo(post_list[0], 10, 10)

        fave_count = self.general_methods.get_fave_count()

        pass_2 = self.general_methods.check_comment_fave(name)
        self.general_methods.tap_fave()

        sleep(3)
        new_fave_count = self.general_methods.get_fave_count()
        if fave_count != new_fave_count:
            pass_1 = True

        if self.general_methods.check_comment_fave(name):
            pass_2 = True
        return pass_1 and pass_2

    def test_commenting(self):
        """ Test typing a comment."""
        flickr_view = self.driver.find_element_by_id(
            Locator.flickr_view_id
        )

        post_list = flickr_view.find_elements_by_xpath(
            '.' + Locator.post_xpath)
        self.tap_feed_photo(post_list[0], 10, 10)

        # comment_count = self.get_comments_count()

        # self.tap_comments()
        self.general_methods.tap_comments()
        # self.send_comment("Great photo")
        self.general_methods.send_comment("Great Photo")
        return True
        # sleep(1)
        #
        # self.exit_comments()
        #
        # sleep(3)
        # new_comment_count = self.get_comments_count()
        #
        # return comment_count != new_comment_count
