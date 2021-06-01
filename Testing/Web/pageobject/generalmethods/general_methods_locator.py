from time import sleep

from selenium.webdriver.common.by import By


class GeneralMethodsLocator(object):
    """ Class contains locator for general methods."""
    EMAIL_FIELD = (By.ID, "login-email")
    NEXT_BUTTON = (By.XPATH,
                   '//*[@id="login-form"]/button')
    PASSWORD_FIELD = (By.ID, "login-password")
