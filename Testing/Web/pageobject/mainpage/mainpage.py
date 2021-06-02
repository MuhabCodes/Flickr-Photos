import sys
import traceback
from time import sleep

from selenium.webdriver.remote.webelement import WebElement
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from common.sel_helper import SelHelper
from pageobject.page import Page
from pageobject.links import Links
from pageobject.mainpage.mainpage_locator import MainPageLocator


class MainPage(Page):
    """ Class that contains methods interacting with WebElement objects in
    Main page "https://www.flickr.com/" after signing in.
    """
    def __init__(self, helper: SelHelper,
                 time_to_wait: float = 100,
                 filter_exists: bool = True,
                 layout_exists: bool = True):
        Page.__init__(self, helper, time_to_wait,
                      filter_exists, layout_exists)
        self.LOCATOR_LIST = self.utils.get_locators_list(MainPageLocator)
        self.link = Links.MAIN_URL
        self.title = "Home | Flickr"

    def get_feed_layout_list(self, time_to_wait: float = None):
        """ Get a list of feed-layout elements.

        :param time_to_wait: Maximum waiting time
        :return: List of feed-layout elements
        """
        if time_to_wait is None:
            time_to_wait = self.time_to_wait
        try:
            feed_layout_list = self.page_helper.safe_find_elements(
                (By.XPATH, MainPageLocator.feed_layout_xpath),
                "feed_layout_list",
                time_to_wait
            )
            return feed_layout_list
        except (TimeoutException, IndexError) as e:
            traceback.print_exception(*sys.exc_info())
            raise e

    def get_feed_item_list(self, feed_layout: WebElement):
        """ Get a list of feed-item elements.

        :param feed_layout: parent feed-layout element
        :return: List of feed-item elements
        """
        try:
            feed_item_list = \
                self.page_helper.find_elements_by_el(
                    (By.XPATH, './'
                     + MainPageLocator.feed_item_sub_xpath),
                    feed_layout,
                    "feed_item_list"
                )
            return feed_item_list
        except IndexError as e:
            traceback.print_exception(*sys.exc_info())
            raise e

    def get_poster_icon(self, feed_item: WebElement):
        """ Get poster avatar.

        :param feed_item: feed-item element
        :return: poster avatar image
        """
        try:
            post_icon_xpath = MainPageLocator.photo_card_icon_sub_xpath
            post_icon = self.page_helper.find_element_by_el(
                (By.XPATH, './' + post_icon_xpath),
                feed_item,
                "post_icon"
            )
            return post_icon
        except TypeError as e:
            traceback.print_exception(*sys.exc_info())
            raise e

    def get_poster_link(self, feed_item: WebElement):
        """ Get Post Poster link.

        :param feed_item: feed-item element
        :return: Post Poster link
        """
        try:
            post_poster_xpath = MainPageLocator.photo_card_poster_sub_xpath
            post_icon = self.page_helper.find_element_by_el(
                (By.XPATH, './' + post_poster_xpath),
                feed_item,
                "post_icon"
            )
            return post_icon
        except TypeError as e:
            traceback.print_exception(*sys.exc_info())
            raise e

    def get_group_photo_batch_list(self, feed_item: WebElement):
        """ Get list of card-batch-photo-item div elements

        :param feed_item: feed-item div element
        :return: List of card-batch-photo-item div elements
        """
        try:
            photo_batch_xpath = MainPageLocator.group_batch_item_sub_xpath
            photo_batch_list = self.page_helper.find_elements_by_el(
                (By.XPATH, './' + photo_batch_xpath),
                feed_item,
                "photo_batch_list"
            )
            return photo_batch_list
        except IndexError as e:
            traceback.print_exception(*sys.exc_info())
            raise e

    def get_group_photo_link(self, batch_item: WebElement):
        """ Return group-photo link element"""
        try:
            photo_card_xpath = MainPageLocator.group_photo_link_sub_xpath
            photo_link = self.page_helper.find_element_by_el(
                (By.XPATH, './' + photo_card_xpath),
                batch_item,
                "group_photo_link"
            )
            return photo_link
        except TypeError as e:
            traceback.print_exception(*sys.exc_info())
            raise e

    def get_person_photo_link(self, feed_item: WebElement):
        """ UNDER DEVELOPEMENT. """
        try:
            pass
            # photo_card_xpath =
        except TypeError as e:
            traceback.print_exception(*sys.exc_info())
            raise e

    def click_nav_dropdown_subitem(
            self, list_locator: tuple,
            list_dict: dict, time_to_wait: float = None):
        """ Check dropdown items in Flickr navigation bar

        :param list_locator: list locator
        :param list_dict: list of list-item locators
        :param time_to_wait: Maximum waiting time
        :return: boolean to check if the operation is complete
        """
        try:
            if time_to_wait is None:
                time_to_wait = self.time_to_wait

            for item in list_dict:
                self.page_helper.click_menu_subitem(
                    main_locator=list_locator,
                    sub_locator=list_dict[item],
                    el_main=self.utils.get_key(
                        self.LOCATOR_LIST, list_locator),
                    el_sub=item,
                    time_to_wait=time_to_wait
                )
                self.helper.back(4, 4)
            return True
        except (TimeoutException, TypeError) as e:
            traceback.print_exception(*sys.exc_info())
            raise e

    def test_nav_links(self, time_to_wait: float = None):
        """ Check links and items in navigation bar.

        :param time_to_wait: Maximum waiting time
        :return: boolean to check if the operation is complete
        """
        if time_to_wait is None:
            time_to_wait = self.time_to_wait
        try:
            link_list = self.utils.get_all_values(self.LOCATOR_LIST, "_LINK")
            if len(link_list) == 0:
                raise IndexError("link_list is empty")

            for item in link_list:
                # print("Trying to click:",
                #       self.utils.get_key(self.LOCATOR_LIST, item))

                if self.helper.page_title == self.title:
                    self.page_helper.safe_click(
                        locator=item,
                        time_to_wait=time_to_wait,
                        el_name=self.utils.get_key(
                            self.LOCATOR_LIST, item)
                    )
                    sleep(3)

                if self.helper.page_title != self.title:
                    # print("returning")
                    self.helper.back(4, 4)
            return True
        except (TimeoutException, TypeError, IndexError) as e:
            traceback.print_exception(*sys.exc_info())
            raise e

    def test_clicking_menu(self, menu_locator: tuple,
                           view_locator: tuple,
                           el_menu_name: str = "element_menu",
                           el_view_name: str = "element_view",
                           time_to_wait: float = None):
        """ Check opening menus e.g notification menu.

        :param menu_locator: menu open locator
        :param view_locator: menu-view locator
        :param el_menu_name: String name of menu
        :param el_view_name: String name 0f menu-view
        :param time_to_wait: Maximum waiting time
        :return: boolean to check if the operation is complete
        """
        if time_to_wait is None:
            time_to_wait = self.time_to_wait
        try:
            self.page_helper.safe_click(
                locator=menu_locator,
                time_to_wait=time_to_wait,
                el_name=el_menu_name
            )
            if not self.helper.element_located(*view_locator, time_to_wait):
                raise TimeoutException(el_view_name, " is not located")
            return True
        except (TimeoutException, TypeError) as e:
            traceback.print_exception(*sys.exc_info())
            raise e

    def select_filter(self, filter_name: str, time_to_wait: float = None):
        """ Select Feed filter, current available filters are:
            - FILTER_ALL_ACTIVITY
            - FILTER_PEOPLE
            - FILTER_GROUPS
            - FILTER_FRIENDS_FAMILY

        :param filter_name: Filter name
        :param time_to_wait: Maximum waiting time
        :return: boolean to check if the operation is complete
        """
        if time_to_wait is None:
            time_to_wait = self.time_to_wait
        try:
            filters = self.utils.get_value(self.LOCATOR_LIST, "FILTER")
            if len(filters) == 0:
                raise IndexError("FILTER_LIST is empty")

            self.page_helper.safe_click(
                MainPageLocator.FILTER_BUTTON,
                time_to_wait,
                "FILTER_BUTTON"
            )
            self.page_helper.safe_click(
                filters[filter_name],
                time_to_wait,
                filter_name
            )
            return True
        except (TimeoutException, TypeError, IndexError) as e:
            traceback.print_exception(*sys.exc_info())
            raise e

    def check_feed_filters(self, time_to_wait: float = None):
        """ Check if feed filters are operational.

        :param time_to_wait: Maximum waiting time
        :return: boolean to check if the operation is complete
        """
        if time_to_wait is None:
            time_to_wait = self.time_to_wait
        try:
            filters = self.utils.get_value(self.LOCATOR_LIST, "FILTER")
            if len(filters) == 0:
                raise IndexError("FILTER_LIST is empty")

            for filter_item in filters:
                self.page_helper.safe_click(
                    MainPageLocator.FILTER_BUTTON,
                    time_to_wait,
                    "FILTER_BUTTON"
                )

                if not self.helper.element_located(
                        *filters[filter_item], time_to_wait):
                    raise TimeoutException(filter_item + " was not located")

                filter_element = self.helper.find_element(
                    *filters[filter_item])
                filter_text = filter_element.text
                self.helper.click(filter_element)

                sleep(3)
                filter_button_span_loc = self.utils.get_value(
                    self.LOCATOR_LIST, "FILTER_BUTTON_SPAN"
                )
                if not self.helper.element_located(
                        *filter_button_span_loc, time_to_wait):
                    raise TimeoutException(
                        "FILTER_BUTTON_SPAN was not located")
                filter_button_span = self.helper.find_element(
                    *filter_button_span_loc)

                if filter_text != filter_button_span.text:
                    raise AssertionError(
                        filter_text + "is not equal " + filter_button_span.text
                    )
            return True
        except (TimeoutException, TypeError, IndexError, AssertionError) as e:
            traceback.print_exception(*sys.exc_info())
            raise e

    def select_layout(self, layout_name: str, time_to_wait: float = None):
        """ Select feed layout, current available layouts:
            - LAYOUT_COMPACT
            - LAYOUT_MEDIUM
            - LAYOUT_LARGE

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

    def check_layouts(self, time_to_wait: float = None):
        """ Check if feed layouts are operational.

        :param time_to_wait: Maximum waiting time
        :return: boolean to check if the operation is complete
        """
        if time_to_wait is None:
            time_to_wait = self.time_to_wait
        try:
            self.select_filter("FILTER_ALL_ACTIVITY")
            sleep(5)
            if not self.check_feed_empty():
                raise AssertionError("Feed is empty")

            layout = self.utils.get_all_values(self.LOCATOR_LIST, "LAYOUT_")
            if len(layout) == 0:
                raise IndexError("layout_list is empty")

            layout_text = {"LAYOUT_COMPACT": "layout-compact",
                           "LAYOUT_MEDIUM": "layout-medium",
                           "LAYOUT_LARGE": "layout-large"}
            for item in layout:
                self.page_helper.safe_click(
                    item,
                    time_to_wait,
                    self.utils.get_key(self.LOCATOR_LIST, item)
                )

                sleep(5)
                feed_layout_list = self.helper.find_elements(
                    By.XPATH, MainPageLocator.feed_layout_xpath
                )
                if len(feed_layout_list) == 0:
                    raise IndexError("feed_layout_list is empty")

                feed_item_list = feed_layout_list[0].find_elements(
                    By.XPATH, './' + MainPageLocator.feed_item_sub_xpath
                )
                if len(feed_item_list) == 0:
                    raise IndexError("feed_item_list is empty")

                photo_card_layout = feed_item_list[0].find_element(
                    By.XPATH,
                    './' + MainPageLocator.photo_card_layout_sub_xpath
                )
                text = photo_card_layout.get_attribute("class")
                layout_key = self.utils.get_key(self.LOCATOR_LIST, item)
                if not layout_text[layout_key] in text:
                    raise AssertionError(layout_key + " IS INCORRECT")
            return True
        except (TimeoutException, TypeError, IndexError, AssertionError) as e:
            traceback.print_exception(*sys.exc_info())
            raise e

    def check_feed_empty(self, time_to_wait: float = None):
        """ Check if Flickr feed is empty.

        :param time_to_wait: Maximum waiting time
        :return: boolean to check if the operation is complete
        """
        if time_to_wait is None:
            time_to_wait = self.time_to_wait
        try:
            if not self.helper.element_located(
                    *MainPageLocator.FEED_LOAD_ERROR, time_to_wait):
                raise TimeoutException("ERROR IN LOCATING FEED_LOAD_ERROR")

            feed_error_container = self.helper.find_element(
                *MainPageLocator.FEED_LOAD_ERROR)
            if feed_error_container is None:
                raise TypeError("feed_error_container is None")

            if "hidden" in feed_error_container.get_attribute("class"):
                return True
            return False
        except (TimeoutException, TypeError) as e:
            traceback.print_exception(*sys.exc_info())
            raise e

    # def check_open_photos(self, time_to_wait: float = None):
    #     if time_to_wait is None:
    #         time_to_wait = self.time_to_wait
    #     try:
    #         if not self.helper.element_located(
    #                 *MainPageLocator.FEED_LOAD_ERROR, time_to_wait):
    #             raise TimeoutException("ERROR IN LOCATING FEED_LOAD_ERROR")

    def check_click_icon(self, time_to_wait: float = None):
        """ Test clicking poster Avatar.

        :param time_to_wait: Maximum waiting time
        :return: boolean to check if the operation is successful
        """
        if time_to_wait is None:
            time_to_wait = self.time_to_wait
            try:
                feed_layout_list = self.get_feed_layout_list(time_to_wait)

                feed_item_list = self.get_feed_item_list(feed_layout_list[0])

                post_icon = self.get_poster_icon(feed_item_list[0])
                post_icon.click()
                return True
            except (TimeoutException, TypeError, IndexError) as e:
                traceback.print_exception(*sys.exc_info())
                raise e

    def check_poster_link(self, time_to_wait: float = None):
        """ Test clicking poster name.

        :param time_to_wait: Maximum waiting time
        :return: boolean to check if the operation is successful
        """
        if time_to_wait is None:
            time_to_wait = self.time_to_wait
            try:
                feed_layout_list = self.get_feed_layout_list(time_to_wait)

                feed_item_list = self.get_feed_item_list(feed_layout_list[0])

                poster_link = self.get_poster_link(feed_item_list[0])
                poster_link.click()
                return True
            except (TimeoutException, TypeError, IndexError) as e:
                traceback.print_exception(*sys.exc_info())
                raise e

    def check_click_group_photo(self, time_to_wait: float = None):
        """ Test clicking group photo.

        :param time_to_wait: Maximum waiting time
        :return: boolean to check if the operation is successful
        """
        if time_to_wait is None:
            time_to_wait = self.time_to_wait
            try:
                feed_layout_list = self.get_feed_layout_list(time_to_wait)

                feed_item_list = self.get_feed_item_list(feed_layout_list[0])

                batch_list = self.get_group_photo_batch_list(feed_item_list[1])
                photo_link = self.get_group_photo_link(batch_list[1])

                # self.page_helper.remove_footer_banner()
                self.helper.scroll_to_element(photo_link)
                photo_link.click()
                return True
            except (TimeoutException, TypeError, IndexError) as e:
                traceback.print_exception(*sys.exc_info())
                raise e
