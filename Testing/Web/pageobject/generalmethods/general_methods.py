import sys
import traceback
from time import sleep

from selenium.common.exceptions import TimeoutException
from selenium.common.exceptions import ElementNotInteractableException
from common.sel_helper import SelHelper
from pageobject.page import Page
from pageobject.generalmethods.general_methods_locator import\
    GeneralMethodsLocator
from pageobject.links import Links


class GeneralMethods(Page):
    """ Class contains general methods."""
    def __init__(self, helper: SelHelper, time_to_wait: float = 100):
        Page.__init__(self, helper, time_to_wait)

    def login(self, email: str = "sasasabry290@gmail.com",
              password: str = "C%D5KBSN?$w&QKv"):
        """ log in flickr with input credential.

        :param email: Email of Flickr account
        :param password: Password of Flickr account
        :return: boolean to check if Log-In operation is complete
        """
        try:
            self.helper.go_to(Links.LOGIN_URL)

            self.page_helper.safe_fill_element(
                GeneralMethodsLocator.EMAIL_FIELD, email,
                self.time_to_wait, "EMAIL_FIELD"
            )

            self.page_helper.safe_click(
                GeneralMethodsLocator.NEXT_BUTTON, self.time_to_wait)

            sleep(3)
            self.page_helper.safe_fill_element(
                GeneralMethodsLocator.PASSWORD_FIELD, password,
                self.time_to_wait, "PASSWORD_FIELD"
            )

            self.page_helper.safe_click(
                GeneralMethodsLocator.NEXT_BUTTON, self.time_to_wait)

            return True
        except (TimeoutException, ElementNotInteractableException) as e:
            traceback.print_exception(*sys.exc_info())
            raise e
