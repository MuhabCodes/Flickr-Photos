import sys
import traceback
from time import sleep


from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
from selenium.common.exceptions import ElementNotInteractableException
from common.selhelper import SelHelper
from pageobject.page import Page
from pageobject.pagehelper import PageHelper
from pageobject.mockmethodslocator import MockMethodsLocator
from pageobject.links import Links


class MockMethods(Page):
    """ Class contains mocking-behaviour methods."""
    def __init__(self, helper: SelHelper, time_to_wait: float = 100):
        Page.__init__(self, helper, time_to_wait)

    def mock_login(self, email: str = "sasasabry290@gmail.com",
                   password: str = "C%D5KBSN?$w&QKv"):
        """ Mock login operation

        :param email: Email of Flickr account
        :param password: Password of Flickr account
        :return: boolean to check if Log-In operation is complete
        """
        try:
            self.helper.go_to(Links.LOGIN_URL)

            self.page_helper.safe_fill_element(
                MockMethodsLocator.EMAIL_FIELD, email,
                self.time_to_wait, "EMAIL_FIELD"
            )

            self.page_helper.safe_click(
                MockMethodsLocator.NEXT_BUTTON, self.time_to_wait)

            sleep(3)
            self.page_helper.safe_fill_element(
                MockMethodsLocator.PASSWORD_FIELD, password,
                self.time_to_wait, "PASSWORD_FIELD"
            )

            self.page_helper.safe_click(
                MockMethodsLocator.NEXT_BUTTON, self.time_to_wait)

            return True
        except (TimeoutException, ElementNotInteractableException) as e:
            traceback.print_exception(*sys.exc_info())
            raise e
