from appium.webdriver.webdriver import WebDriver


class Page(object):
    """ Base Class for all pageobject classes. """
    def __init__(self, driver: WebDriver):
        self.driver = driver

    def set_driver(self, driver: WebDriver):
        """ Set class attribute driver with the input WebDriver element
        :param driver: WebDriver element
        """
        self.driver = driver
