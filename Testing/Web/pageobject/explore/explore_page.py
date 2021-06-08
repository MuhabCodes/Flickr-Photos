import sys
import traceback
from time import sleep

from selenium.webdriver.remote.webelement import WebElement
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from common.sel_helper import SelHelper
from pageobject.page import Page
from pageobject.links import Links
from pageobject.explore.explore_page_locator import ExplorePageLocator
from pageobject.mainpage.mainpage_locator import MainPageLocator


class Explore(Page):
    """ Class that contains methods interacting with WebElement objects in
    Explore page.
    """
    def __init__(self, helper:  SelHelper,
                 time_to_wait: float = 100,
                 filter_exists: bool = True,
                 layout_exists: bool = True):
        Page.__init__(self, helper, time_to_wait,
                      filter_exists, layout_exists)
        self.LOCATOR_LIST = self.utils.get_locators_list(ExplorePageLocator)
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
                (By.XPATH, ExplorePageLocator.photo_list_item_xpath),
                "explore_photo_list",
                time_to_wait
            )
            return photo_list
        except (TimeoutException, IndexError) as e:
            traceback.print_exception(*sys.exc_info())
            raise e

    def get_photo_link(self, photo_item: WebElement):
        """ Return photo-link element."""
        try:
            photo_xpath = ExplorePageLocator.photo_sub_xpath
            photo_link = self.page_helper.find_element_by_el(
                (By.XPATH, './' + photo_xpath),
                photo_item,
                "photo_link"
            )
            return photo_link
        except TypeError as e:
            traceback.print_exception(*sys.exc_info())
            raise e

    def check_click_photo_link(self, time_to_wait: float = None):
        """ Test clicking photo.

        :param time_to_wait: Maximum waiting time
        :return: boolean to check if the operation is successful
        """
        if time_to_wait is None:
            time_to_wait = self.time_to_wait
        try:
            photo_list = self.get_explore_photo_list(time_to_wait)
            photo_link = self.get_photo_link(photo_list[0])

            self.helper.scroll_to_element(photo_link)
            photo_link.click()
            return True
        except (TimeoutException, TypeError, IndexError) as e:
            traceback.print_exception(*sys.exc_info())
            raise e

    def check_fave(self, time_to_wait: float = None):
        if time_to_wait is None:
            time_to_wait = self.time_to_wait

        photo_list = self.get_explore_photo_list(time_to_wait)
        fave_xpath = ExplorePageLocator.photo_fave_sub_xpath
        fave = self.page_helper.find_element_by_el(
            (By.XPATH, './' + fave_xpath),
            photo_list[0],
            "photo_fave"
        )
        old_class = fave.get_attribute("class")

        self.helper.scroll_to_element(fave)
        self.helper.scroll_window(-10 * fave.size["height"])

        actions = self.helper.action_chains()
        actions.move_to_element(fave).click().perform()
        sleep(1)
        new_class = fave.get_attribute("class")

        if "faved" in old_class and "faved" not in new_class:
            return True
        elif "faved" in new_class and "faved" not in old_class:
            return True
        return False

    def check_comment(self, text: str = "Good Pic!",
                      time_to_wait: float = None):
        if time_to_wait is None:
            time_to_wait = self.time_to_wait

        pass_1 = False
        pass_2 = False
        pass_3 = False

        photo_list = self.get_explore_photo_list(time_to_wait)
        comment_xpath = ExplorePageLocator.photo_comment_sub_xpath
        comment = self.page_helper.find_element_by_el(
            (By.XPATH, './' + comment_xpath),
            photo_list[0],
            "photo_comment"
        )

        self.helper.scroll_to_element(comment)
        self.helper.scroll_window(-10 * comment.size["height"])
        actions = self.helper.action_chains()
        actions.move_to_element(comment).click().perform()
        sleep(1)

        self.page_helper.safe_find_element(
            (By.XPATH, MainPageLocator.comments_section_xpath),
            "comments_section",
            time_to_wait
        )

        # Test Add Comment
        comments_list = self.helper.find_elements(
            By.XPATH, MainPageLocator.comments_xpath)
        comments_size = len(comments_list)

        self.page_helper.safe_fill_element(
            locator=(By.XPATH, MainPageLocator.add_comment_box_xpath),
            text=text,
            time_to_wait=time_to_wait,
            el_name="add_comment_box"
        )

        self.page_helper.safe_click(
            locator=(By.XPATH, MainPageLocator.add_comment_button_xpath)
        )

        sleep(5)
        comments_list = self.helper.find_elements(
            By.XPATH, MainPageLocator.comments_xpath)
        comment_reply = self.page_helper.find_element_by_el(
            locator=(By.XPATH, './' + MainPageLocator.comment_text_sub_xpath),
            main_element=comments_list[-1],
            el_name="comment_text"
        )
        if comment_reply.text == text:
            pass_1 = True

        comment_header_button = self.page_helper.find_element_by_el(
            locator=(
                By.XPATH,
                './' + MainPageLocator.comment_header_button_sub_xpath
            ),
            main_element=comments_list[-1],
            el_name="comment_header_button"
        )
        comment_header_button.click()

        # Test Edit
        sleep(1)
        self.page_helper.safe_click(
            locator=(By.XPATH, ExplorePageLocator.comment_header_edit_xpath),
            time_to_wait=time_to_wait,
            el_name="comment_header_edit"
        )
        self.page_helper.safe_fill_element(
            locator=(By.XPATH, MainPageLocator.add_comment_box_xpath),
            text="test is successful",
            time_to_wait=time_to_wait,
            el_name="add_comment_box"
        )
        self.page_helper.safe_click(
            locator=(By.XPATH, MainPageLocator.add_comment_button_xpath)
        )

        sleep(1)
        comments_list = self.helper.find_elements(
            By.XPATH, MainPageLocator.comments_xpath)
        comment_reply = self.page_helper.find_element_by_el(
            locator=(By.XPATH, './' + MainPageLocator.comment_text_sub_xpath),
            main_element=comments_list[-1],
            el_name="comment_text"
        )
        if comment_reply.text == "test is successful":
            pass_2 = True

        # Test Delete
        sleep(1)
        comments_list = self.helper.find_elements(
            By.XPATH, MainPageLocator.comments_xpath)
        comments_size = len(comments_list)
        comment_header_button = self.page_helper.find_element_by_el(
            locator=(
                By.XPATH,
                './' + MainPageLocator.comment_header_button_sub_xpath
            ),
            main_element=comments_list[-1],
            el_name="comment_header_button"
        )
        comment_header_button.click()
        sleep(1)
        self.page_helper.safe_click(
            locator=(By.XPATH, ExplorePageLocator.comment_header_delete_xpath),
            time_to_wait=time_to_wait,
            el_name="comment_header_delete"
        )
        comments_list = self.helper.find_elements(
            By.XPATH, MainPageLocator.comments_xpath)
        comments_size_new = len(comments_list)

        if comments_size_new < comments_size:
            pass_3 = True

        return pass_1 and pass_2 and pass_3
