from time import sleep

from selenium.webdriver.common.by import By


class MockMethodsLocator(object):
    """ Class contains locator for mock methods."""
    EMAIL_FIELD = (By.ID, "login-email")
    NEXT_BUTTON = (By.XPATH,
                   '//*[@id="login-form"]/button')
    PASSWORD_FIELD = (By.ID, "login-password")
