from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.keys import Keys
# Base class for all pages
# Important functions used in multiple pages


class BasePage(object):
    def __init__(self, driver):
        self.driver = driver

    def page_url(self):
        return str(self.driver.current_url)

    def click(self, locator):
        WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located(locator)).click()

    def send(self, locator, value):
        WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located(locator)).send_keys(value)

    def element_located(self, locator, max_time: float = 10):
        try:
            WebDriverWait(self.driver, max_time).until(EC.presence_of_element_located(locator))
            return True
        except TimeoutException:
            return False

    def element_clickable(self, locator, max_time: float = 10):
        try:
            WebDriverWait(self.driver, max_time).until(EC.element_to_be_clickable(locator))
            return True
        except TimeoutException:
            return False

    def get_page_title(self):
        return str(self.driver.title)

    def clear_field(self, locator):
        WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located(locator)).send_keys(Keys.CONTROL + "a")
        WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located(locator)).send_keys(Keys.DELETE)
