from time import sleep
import sys
import traceback

from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.remote.webdriver import WebDriver
from selenium.webdriver.remote.webelement import WebElement
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import TimeoutException, NoSuchElementException
from selenium.common.exceptions import StaleElementReferenceException
from selenium.common.exceptions import ElementNotInteractableException
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.firefox import GeckoDriverManager


class SelHelper(object):
    """ A class contains the most frequently used methods inside Selenium for:
        - Initializing driver
        - Finding WebElement elements
        - Filling and clearing WebElement elements
        - clicking WebElement elements
        - Closing browser
        - ...etc
    """
    def __init__(self):
        """ Initialize Helper object's driver to None."""
        self.driver: WebDriver = None

    def set_driver(self, driver):
        """ Set Helper object's driver with the input driver.

        :param driver: the driver used to set Helper object's driver.
        """
        self.driver = driver

    @property
    def get_driver(self):
        """ Returns Helper object's driver.

        :return: Helper object's driver
        """
        return self.driver

    def go_to(self, url: str):
        """ Open the given URL in browser.
        :param url: String URL
        """
        self.driver.get(url)

    def init_chrome_driver(self):
        """ Initialize Helper object's driver with chromedriver.

        :return: Helper object's driver
        """
        self.driver = webdriver.Chrome(
            executable_path=ChromeDriverManager().install()
        )
        return self.driver

    def init_firefox_driver(self):
        """ Initialize Helper object's driver with chromedriver.

        :return: Helper object's driver
        """
        self.driver = webdriver.Firefox(
            executable_path=GeckoDriverManager().install()
        )
        return self.driver

    def implicit_wait(self, time_to_wait: float = 30):
        """ Sets a sticky timeout to implicitly wait for an element to be
        found, or a command to complete. This method only needs to be called
        one time per session.

        :param time_to_wait:  float waiting time
        """
        self.driver.implicitly_wait(time_to_wait)

    def element_located(self, by: By, identifier: str, max_time: float = 100):
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

    def element_clickable(self, by: By,
                          identifier: str, max_time: float = 100):
        """ Check if the element is visible and enabled such that you
        can click it.

        :param by: Locator strategy example: ID, NAME,.....etc
        :param identifier: string to identify element
        :param max_time: Maximum waiting time
        :return: A boolean to check if the element is present and clickable
        """
        try:
            WebDriverWait(self.driver, max_time).until(
                EC.element_to_be_clickable((by, identifier))
            )
            return True
        except TimeoutException:
            return False

    def element_interactable(self, by: By, identifier: str):
        """ Check if the text box element is interactiable (can change it's
        value).

        :param by: Locator strategy example: ID, NAME,.....etc
        :param identifier: string to identify element
        :return:A boolean to check if the element is present
        """
        try:
            element = self.driver.find_element(by, identifier)
            element.clear()
            return True
        except (NoSuchElementException, StaleElementReferenceException,
                ElementNotInteractableException):
            traceback.print_exception(*sys.exc_info())
            return False

    def find_element(self, by: By, identifier: str):
        """ Find an element with the given locator.

        :param by: Locator strategy example: ID, NAME,.....etc
        :param identifier: string to identify element
        :return: a WebDriver element associated with the given locator
        """
        try:
            element: WebElement = self.driver.find_element(by, identifier)
            return element
        except NoSuchElementException:
            traceback.print_exception(*sys.exc_info())
            return None

    def find_elements(self, by: By, identifier: str):
        """ Find elements with the given locator.

        :param by: Locator strategy example: ID, NAME,.....etc
        :param identifier: string to identify element
        :return: a list containing WebDriver elements
        """
        try:
            elements = self.driver.find_elements(by, identifier)
            return elements
        except NoSuchElementException:
            traceback.print_exception(*sys.exc_info())
            return None

    def clear_element(self, element: WebElement):
        """ Clear the given element.

        :param element: WebDriver element to be cleared
        :return: Boolean to indicate if the process was successful
        """
        try:
            element.clear()
            return True
        except (NoSuchElementException, StaleElementReferenceException):
            traceback.print_exception(*sys.exc_info())
            return False

    def send_key(self, element: WebElement,
                 key: Keys = Keys.RETURN):
        """ Send Key to the given WebElement element.

        :param element: WebDriver element to interact with
        :param key: key to be pressed
        """
        element.send_keys(key)

    def fill_element(self, element: WebElement, text: str):
        """ Fill the given element with text

        :param element: WebDriver element to be filled
        :param text: string to fill element
        :return: Boolean to indicate if the process was successful
        """
        try:
            element.send_keys(text)
            return True
        except (NoSuchElementException, StaleElementReferenceException):
            traceback.print_exception(*sys.exc_info())
            return False

    def click(self, button: WebElement):
        """ Click on the given WebElement.

        :param button: Webdriver Element to be clicked
        """
        button.click()

    def forward(self, wait_before: float = None, wait_after: float = 5):
        """ Go Forward.

        :param wait_before: Time to wait before going Forward
        :param wait_after: Time to wait after going Forward
        """
        if wait_before is not None:
            sleep(wait_before)
        self.driver.forward()
        sleep(wait_after)

    def back(self, wait_before: float = None, wait_after: float = 5):
        """ Go Back.

        :param wait_before: Time to wait before going Back
        :param wait_after: Time to wait after going Back
        """
        if wait_before is not None:
            sleep(wait_before)
        self.driver.back()
        sleep(wait_after)

    def close(self):
        """ Close the current window."""
        self.driver.close()

    def action_chains(self):
        """ Create an ActionChains object and return it.

        :return: ActionChains object
        """
        actions: ActionChains = ActionChains(self.driver)
        return actions

    @property
    def page_title(self):
        """ Return the page title.

        :return: String page title
        """
        return self.driver.title

    @property
    def page_URL(self):
        """ get current page URL.

        :return: String page URL
        """
        return str(self.driver.current_url)

    def scroll_window(self, x: int = 0):
        """ Move windows by x pixels

        :param x: number of pixels
        """
        script = "window.scrollBy(0," + str(x) + ")"
        self.driver.execute_script(script, "")

    def scroll_to_element(self, element: WebElement):
        """ Scroll until WebElement element appears on view

        :param element: WebElement element
        """
        self.driver.execute_script(
            "arguments[0].scrollIntoView();",
            element
        )

    def quit(self):
        """ Close the browser."""
        self.driver.quit()
