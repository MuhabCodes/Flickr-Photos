from time import sleep

from appium.webdriver.webdriver import WebDriver
from appium import webdriver
from pageobject.page import Page
from pageobject.locator import Locator


class GeneralMethods(Page):
    """ Class contains general methods. """
    def __init__(self, driver: WebDriver = None):
        Page.__init__(self, driver)

    def login(self, email: str = "sasasabry290@gmail.com",
              password: str = "C%D5KBSN?$w&QKv"):
        """ log in flickr using input credentials.

        :param email: Flickr Account email
        :param password: Flickr Account password
        :return:
        """
        self.driver.find_element_by_id(
            Locator.getting_started_id).click()

        sleep(2)
        self.driver.switch_to.context(
            Locator.login_webview_context)

        email_field = self.driver.find_element_by_xpath(
            Locator.email_field_xpath)
        email_field.send_keys(email)

        self.driver.find_element_by_xpath(
            Locator.proceed_button_xpath).click()

        sleep(2)
        password_field = self.driver.find_element_by_xpath(
            Locator.password_field_xpath)
        password_field.send_keys(password)

        self.driver.find_element_by_xpath(
            Locator.proceed_button_xpath).click()

        self.driver.switch_to.context('NATIVE_APP')
