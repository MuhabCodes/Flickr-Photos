from appium.webdriver.webdriver import WebDriver
from common.utils import Utils


class Page(object):
    """ Base Class for all pageobject classes. """
    def __init__(self, driver: WebDriver):
        self.driver = driver
        self.utils = Utils()

    def set_driver(self, driver: WebDriver):
        """ Set class attribute driver with the input WebDriver element
        :param driver: WebDriver element
        """
        self.driver = driver
