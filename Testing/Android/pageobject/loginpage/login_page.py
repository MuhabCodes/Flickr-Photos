from time import sleep

from appium.webdriver.webdriver import WebDriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from pageobject.page import Page
from pageobject.locator.locator import Locator


class LoginPage(Page):
    """ Class containing login page methods."""
    def __init__(self, driver: WebDriver = None):
        Page.__init__(self, driver)
    current_activity = \
        'com.yahoo.mobile.client.android.flickr.activity.LoginActivity'

    def input_email(self, email: str = "sasasabry290@gmail.com"):
        """ Enter email in login page.

        :param email: Flickr account email
        :return: boolean indicating if the operation is successful
        """
        email_field = self.driver.find_element_by_xpath(
            Locator.email_field_xpath)
        email_field.send_keys(email)
        return True

    def check_email_empty(self, time_to_wait: float = 10):
        WebDriverWait(self.driver, time_to_wait).until(
            EC.visibility_of_element_located(
                (By.XPATH, Locator.email_empty_xpath)
            )
        )
        return True

    def check_email_popup(self, time_to_wait: float = 10):
        """ Check if invalid-email popup has appeared.

        :param time_to_wait: maximum waiting time
        :return: boolean indicating if the operation is successful
        """
        WebDriverWait(self.driver, time_to_wait).until(
            EC.presence_of_element_located(
                (By.XPATH, Locator.email_popup_xpath)
            )
        )
        return True

    def click_email_popup(self, time_to_wait: float = 10):
        """ Click on try again in invalid-email popup.

        :param time_to_wait: Maximum waiting time
        :return: boolean indicating if the operation is successful
        """
        if not self.check_email_popup(time_to_wait):
            return False
        self.driver.find_element_by_xpath(
            Locator.email_popup_button_xpath).click()
        return True

    # def  check_password_field(self):

    def input_password(self, password: str = "C%D5KBSN?$w&QKv"):
        """ Enter password in login page.

        :param password: Flickr account password
        :return: boolean indicating if the operation is successful
        """
        password_field = self.driver.find_element_by_xpath(
            Locator.password_field_xpath)
        password_field.send_keys(password)
        return True

    def check_password_field(self, time_to_wait: float = 10):
        """ Check if password field is visible.

        :param time_to_wait: Maximum waiting time
        :return: boolean indicating if password field is visible
        """
        WebDriverWait(self.driver, time_to_wait).until(
            EC.visibility_of_element_located(
                (By.XPATH, Locator.password_field_xpath)
            )
        )
        return True

    # @property
    # def password_text(self):
    #     """ return password textbox text.
    #
    #     :return: string password
    #     """
    #     password_field = self.driver.find_element_by_xpath(
    #         Locator.password_field_xpath)
    #     return password_field.get_attribute("value")

    def click_show_password(self):
        """ click on show password.

        :return: boolean indicating if the operation is successful
        """
        self.driver.find_element_by_xpath(
            Locator.password_show_xpath).click()
        return True

    @property
    def password_visibility(self):
        """ Check if the password is visible.

        :return: boolean indicating the visibility of input password
        """
        password_visible = self.driver.find_element_by_xpath(
            Locator.password_field_xpath).get_attribute("type")
        if password_visible == "text":
            return True
        return False

    def check_password_error(self, time_to_wait: float = 10):
        """ Check if password-error is visible

        :param time_to_wait: Maximum waiting time
        :return: boolean indicating if the operation is successful
        """
        WebDriverWait(self.driver, time_to_wait).until(
            EC.visibility_of_element_located(
                (By.XPATH, Locator.password_error_xpath)
            )
        )
        return True

    def click_next(self):
        """ Press next or sign-in in login page.

        :return: boolean indicating if the operation is successful
        """
        self.driver.find_element_by_xpath(
            Locator.proceed_button_xpath).click()
        return True

    def open_login_page(self):
        self.driver.find_element_by_id(Locator.getting_started_id).click()
        sleep(2)
        self.driver.switch_to.context(Locator.login_webview_context)
        return True
