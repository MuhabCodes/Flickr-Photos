import sys
import traceback
from time import sleep

from selenium.webdriver.remote.webelement import WebElement
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from common.selhelper import SelHelper
from pageobject.page import Page
from pageobject.links import Links
from pageobject.explore.explorelocator import ExploreLocator


class Explore(Page):
    """ Class that contains methods interacting with WebElement objects in
    Explore page.
    """
    def __init__(self, helper:  SelHelper, time_to_wait: float = 100):
        Page.__init__(self, helper, time_to_wait)
        self.LOCATOR_LIST = self.utils.get_locators_list(ExploreLocator)
        self.link = Links.EXPLORE_URL
        self.title = "Explore | Flickr"

    def test_subnav_links(self, time_to_wait: float = None):
        if time_to_wait is None:
            time_to_wait = self.time_to_wait
        try:
            subnav_list = self.utils.get_all_values(self.LOCATOR_LIST, "_LINK")
            if len(subnav_list) == 0:
                raise IndexError("subnav_list is empty")

            for item in subnav_list:
                if self.helper.page_title == self.title:
                    self.page_helper.safe_click(
                        locator=item,
                        time_to_wait=time_to_wait,
                        el_name=self.utils.get_key(self.LOCATOR_LIST, item)
                    )
                sleep(3)

                if self.helper.page_title != self.title:
                    self.helper.back(4, 4)
            return True
        except(TimeoutException, TypeError, IndexError) as e:
            traceback.print_exception(*sys.exc_info())
            raise e

    def select_layout(self, layout_name: str, time_to_wait: float = None):
        """ Select feed layout, current available layouts:
            - LAYOUT-JUSTIFIED
            - LAYOUT_STORY

        :param layout_name: String layout name
        :param time_to_wait: Maximum waiting time
        :return: boolean to check if the operation is complete
        """
        self.page_helper.select_layout(
            self.LOCATOR_LIST,
            layout_name,
            time_to_wait
        )
        return True

    def get_explore_photo_list(self, time_to_wait: float = None):
        """ Get a list of photo-list-photo elements.

        :param time_to_wait: Maximum waiting time
        :return: List of photo-list-photo elements
        """
        if time_to_wait is None:
            time_to_wait = self.time_to_wait
        try:
            photo_list = self.page_helper.safe_find_elements(
                (By.XPATH, ExploreLocator.photo_list_item_xpath),
                "feed_layout_list",
                time_to_wait
            )
            return photo_list
        except (TimeoutException, IndexError) as e:
            traceback.print_exception(*sys.exc_info())
            raise e

    # def get_photo_link(self, photo_item: WebElement):
    #     try:
    #         photo_link