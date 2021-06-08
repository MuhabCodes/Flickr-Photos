from time import sleep
import sys
import traceback


from selenium.webdriver.remote.webelement import WebElement
from selenium.common.exceptions import TimeoutException
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import ElementNotInteractableException
from selenium.webdriver.common.by import By
from common.sel_helper import SelHelper
from common.utils import Utils


class PageHelper(object):
    """ Class contains methods that help pageobject classes."""
    def __init__(self, helper: SelHelper, time_to_wait=100):
        self.helper = helper
        self.time_to_wait = time_to_wait
        self.utils = Utils()

    def safe_click(self, locator: tuple,
                   time_to_wait: float = None,
                   el_name: str = "element"):
        """ Click on given WebDriver element safely using its locator.

        :param locator: WebElement locator ex. (By.XPATH, XPATH)
        :param time_to_wait: Maximum waiting time
        :param el_name: name of WebElement element
        :return: boolean to check if the clicking operation is complete
        """
        if time_to_wait is None:
            time_to_wait = self.time_to_wait

        result = self.helper.element_clickable(*locator, time_to_wait)
        if not result:
            # traceback.print_exception(*sys.exc_info())
            raise TimeoutException(el_name + " can not be clicked.")

        element = self.helper.find_element(*locator)
        if element is None:
            raise TypeError(el_name + " is None.")

        self.helper.click(element)
        return True

    def safe_clear_element(self, locator: tuple,
                           time_to_wait: float = None,
                           el_name: str = "element"):
        """ Clear WebElement element safely.

        :param locator: WebElement locator ex. (By.XPATH, XPATH)
        :param time_to_wait: Maximum waiting time
        :param el_name: name of WebElement element
        :return: WebElement element
        """
        if time_to_wait is None:
            time_to_wait = self.time_to_wait

        result = self.helper.element_located(*locator, time_to_wait)
        result2 = self.helper.element_interactable(*locator)

        if not result:
            traceback.print_exception(*sys.exc_info())
            raise TimeoutException(el_name + " is not located.")
        elif not result2:
            traceback.print_exception(*sys.exc_info())
            raise ElementNotInteractableException(
                el_name + " is not interactiable")

        element = self.helper.find_element(*locator)
        self.helper.clear_element(element)
        return element

    def safe_fill_element(self, locator: tuple,
                          text: str,
                          time_to_wait: float = None,
                          el_name: str = "element"):
        if time_to_wait is None:
            time_to_wait = self.time_to_wait

        """ Fill WebElement element safely.

        :param locator: WebElement locator ex. (By.XPATH, XPATH)
        :param text: string to fill element
        :param time_to_wait: Maximum waiting time
        :param el_name: name of WebElement element
        :return: boolean to check if the filling element operation is complete
        """
        try:
            element = self.safe_clear_element(
                locator,
                time_to_wait, el_name)

            self.helper.fill_element(element, text)

            return True
        except (TimeoutException, ElementNotInteractableException) as e:
            traceback.print_exception(*sys.exc_info())
            raise e

    def click_menu_subitem(self, main_locator: tuple,
                           sub_locator: tuple,
                           el_main: str = "Main_WebElement",
                           el_sub: str = "Sub_WebElement",
                           time_to_wait: float = None):
        """ Click on a drop menu item

        :param main_locator: drop-menu list locator
        :param sub_locator: drop-menu list-item locator
        :param el_main: list name
        :param el_sub: list-item name
        :param time_to_wait: Maximum waiting time
        :return: boolean to check if clicking list item operation is complete
        """
        if time_to_wait is None:
            time_to_wait = self.time_to_wait

        try:
            if not self.helper.element_clickable(*main_locator):
                raise TimeoutException(el_main + " is not clickable")

            main_element = self.helper.find_element(*main_locator)
            if main_element is None:
                raise TypeError(el_main + " is None")

            sub_element = self.helper.find_element(*sub_locator)
            if sub_element is None:
                raise TypeError(el_sub + " is None")

            actions = self.helper.action_chains()
            actions.move_to_element(main_element).perform()

            sleep(1)
            if not self.helper.element_clickable(*sub_locator, time_to_wait):
                raise TimeoutException(el_main + " is not clickable")

            actions.move_to_element(sub_element).click().perform()
            return True
        except (TimeoutException, TypeError) as e:
            traceback.print_exception(*sys.exc_info())
            raise e

    def safe_find_element(self, locator: tuple,
                          el_name: str = "element",
                          time_to_wait: float = None):
        """ Check if WebElement object is present in page then return it

        :param locator: WebElement object locator
        :param el_name: WebElement object name
        :param time_to_wait: Maximum waiting time
        :return: WebElement object
        """
        if time_to_wait is None:
            time_to_wait = self.time_to_wait
        try:
            if not self.helper.element_located(*locator, time_to_wait):
                raise TimeoutException(el_name + " not found")

            element = self.helper.find_element(*locator)
            if element is None:
                raise TypeError(el_name + " is None")
            return element
        except (TimeoutException, TypeError) as e:
            traceback.print_exception(*sys.exc_info())
            raise e

    def find_element_by_el(self, locator: tuple,
                           main_element: WebElement,
                           el_name: str = "sub_element"):
        """ return child WebElement from input parent WebElement.

        :param locator: child WebElement object locator
        :param main_element: parent WebElement
        :param el_name: child WebElement object name
        :return: child WebElement
        """
        try:
            sub_element = main_element.find_element(*locator)
            if sub_element is None:
                raise TypeError(el_name + " is None")
            return sub_element
        except (TypeError, NoSuchElementException) as e:
            traceback.print_exception(*sys.exc_info())
            raise e

    def safe_find_elements(self, locator: tuple,
                           el_name: str = "element",
                           time_to_wait: float = None):
        """ Check if WebElement objects are present in page then return them

        :param locator: WebElement object locator
        :param el_name: WebElement object name
        :param time_to_wait: Maximum waiting time
        :return: List of WebElement object
        """
        if time_to_wait is None:
            time_to_wait = self.time_to_wait
        try:
            if not self.helper.element_located(*locator, time_to_wait):
                raise TimeoutException(el_name + " not found")

            element_list = self.helper.find_elements(*locator)
            if len(element_list) == 0:
                raise IndexError(el_name + " is empty")
            return element_list
        except (TimeoutException, IndexError) as e:
            traceback.print_exception(*sys.exc_info())
            raise e

    def find_elements_by_el(self, locator: tuple,
                            main_element: WebElement,
                            el_name: str = "sub_element"):
        try:
            sub_element_list = main_element.find_elements(*locator)
            if len(sub_element_list) == 0:
                raise IndexError(el_name + " is empty")
            return sub_element_list
        except IndexError as e:
            # traceback.print_exception(*sys.exc_info())
            raise e

    def remove_footer_banner(self):
        driver = self.helper.get_driver
        el_el = driver.find_element_by_xpath(
            '//div[contains(@class,"foot-banner-holder-view")]'
        )
        text = str(el_el.get_attribute("id"))
        js_string = "var element = document.getElementById('"\
                    + text\
                    + "');element.remove();"
        driver.execute_script(js_string)

    def select_layout(self, locator_list: list,
                      layout_name: str,
                      time_to_wait: float = None):
        if time_to_wait is None:
            time_to_wait = self.time_to_wait
        try:
            layout = self.utils.get_value(locator_list, layout_name)
            self.safe_click(
                layout,
                time_to_wait,
                self.utils.get_key(locator_list, layout_name)
            )
            return True
        except (TimeoutException, TypeError) as e:
            traceback.print_exception(*sys.exc_info())
            raise e
