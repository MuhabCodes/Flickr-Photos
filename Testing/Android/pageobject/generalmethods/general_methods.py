from time import sleep

from appium.webdriver.webdriver import WebDriver
from appium import webdriver
from pageobject.page import Page


class MockMethodsLocator(object):
    """ Class contains locator for behaviour mocking methods. """
    getting_started_id = "com.flickr.android:id/activity_welcome_sign_button"
    login_webview_context = 'WEBVIEW_com.flickr.android'
    email_field_xpath = '//input[@id="login-email"]'
    proceed_button_xpath = '//form[@id="login-form"]/button'
    password_field_xpath = '//input[@id="login-password"]'


class MockMethods(Page):
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
            MockMethodsLocator.getting_started_id).click()

        sleep(2)
        self.driver.switch_to.context(
            MockMethodsLocator.login_webview_context)

        email_field = self.driver.find_element_by_xpath(
            MockMethodsLocator.email_field_xpath)
        email_field.send_keys(email)

        self.driver.find_element_by_xpath(
            MockMethodsLocator.proceed_button_xpath).click()

        sleep(2)
        password_field = self.driver.find_element_by_xpath(
            MockMethodsLocator.password_field_xpath)
        password_field.send_keys("C%D5KBSN?$w&QKv")

        self.driver.find_element_by_xpath(
            MockMethodsLocator.proceed_button_xpath).click()

        self.driver.switch_to.context('NATIVE_APP')
        self.driver.contexts
