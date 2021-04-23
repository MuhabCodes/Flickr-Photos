from selenium import webdriver
from selenium.webdriver.remote.webelement import WebElement
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import TimeoutException, NoSuchElementException
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.firefox import GeckoDriverManager


class Helper(object):
    """ A class contains the most frequently used methods inside Selenium for:
        - Initializing driver
        - Finding WebElement elements
        - Filling and clearing WebElement elements
        - clicking WebElement elements
        - Closing browser
    """
    def __init__(self):
        """ Initialize Helper object's driver to None."""
        self.driver = None

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

    def element_located(self, by: By, identifier: str, max_time: float = 100):
        """ Detect if an element is present in the page.

        :param by: Locator strategy example: ID, NAME,.....etc
        :param identifier: string
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

    def element_clickable(self, by: By, identifier: str, max_time: float = 100):
        """ Check if the element is visible and enabled such that you
        can click it.

        :param by: Locator strategy example: ID, NAME,.....etc
        :param identifier: string
        :param max_time: Maximum waiting time
        :return: A boolean to check if the element is present
        """
        try:
            WebDriverWait(self.driver, max_time).until(
                EC.element_to_be_clickable((by, identifier))
            )
            return True
        except TimeoutException:
            return False

    def find_element(self, by: By, identifier: str):
        """ Find an element with the given locator.

        :param by: Locator strategy example: ID, NAME,.....etc
        :param identifier: string
        :return: a WebDriver element associated with the given locator
        """
        try:
            element = self.driver.find_element(by, identifier)
            return element
        except NoSuchElementException:
            return None

    def find_elements(self, by: By, identifier: str):
        """ Find elements with the given locator.

        :param by: Locator strategy example: ID, NAME,.....etc
        :param identifier: string
        :return: a list containing WebDriver elements
        """
        try:
            elements = self.driver.find_elements(by, identifier)
            return elements
        except NoSuchElementException:
            return None

    def clear_element(self, element: WebElement):
        """ Clear the given element.

        :param element: WebDriver element
        :return: Boolean to indicate if the process was successful
        """
        try:
            element.clear()
            return True
        except:
            return False

    def send_key(self, element: WebElement,
                 key: Keys = Keys.RETURN):
        """ Send Key to the given WebElement element.

        :param element: WebDriver element
        :param key: key to be pressed
        """
        element.send_keys(key)

    def fill_element(self, element: WebElement, text: str):
        """ Fill the given element with text

        :param element: WebDriver element
        :param text: string to fill element
        :return: Boolean to indicate if the process was successful
        """
        try:
            element.send_keys(text)
            return True
        except:
            return False

    def click(self, button: WebElement):
        """ Click on the given WebElement.

        :param button: Webdriver Element
        """
        button.click()

    def close(self):
        """ Close the current window."""
        self.driver.close()

    def quit(self):
        """ Close the browser."""
        self.driver.quit()
