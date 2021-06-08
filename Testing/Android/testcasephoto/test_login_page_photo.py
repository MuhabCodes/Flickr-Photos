from time import sleep

import pytest
from selenium.common.exceptions import NoSuchElementException
from appium import webdriver
from appium.webdriver.webelement import WebElement
from common.properties import PropertiesMiA1
from pageobject.loginpage.login_page_photo import LoginPage
from pageobject.locator.locator_photo import Locator


class TestLoginPagePhoto(object):
    driver = None
    desired_caps = PropertiesMiA1.desired_caps_2
    login_page = LoginPage()
    link = "http://localhost:4723/wd/hub"

    def general_setup(self):
        self.driver = webdriver.Remote(
            command_executor=self.link,
            desired_capabilities=self.desired_caps
        )
        self.driver.implicitly_wait(5)
        self.login_page.set_driver(self.driver)
        self.login_page.open_login_page()

    @pytest.fixture()
    def setup(self):
        self.general_setup()

    @pytest.fixture(scope="class")
    def setup_signup_neg(self):
        self.general_setup()
        self.login_page.open_signup_page()
        self.login_page.signup_fill_empty_all(0)

    @pytest.fixture(scope="class")
    def setup_signup_pos(self):
        self.general_setup()
        self.login_page.open_signup_page()
        self.login_page.signup_fill_empty_all(1)

    # @pytest.mark.skip
    def test_driver(self, setup):
        pass

    @pytest.mark.parametrize("edittext_i", [0, 1, 2, 3, 4])
    def test_signup_empty(self, setup_signup_neg, edittext_i):
        self.login_page.check_signup_empty(edittext_i)

    def test_signup_invalid_email(self, setup_signup_neg):
        self.login_page.check_signup_invalid_email()

    @pytest.mark.parametrize(
        "edittext_i,edittext_text", [
            (0, "mostafa"),
            (1, "mohamed"),
            (2, "18"),
            (3, "acunity1234l@gmail.com"),
            (4, "12345678901234")
        ]
    )
    def test_signup_valid(self, setup_signup_pos,
                          edittext_i, edittext_text):
        self.login_page.check_signup_valid_entry(
            edittext_i, edittext_text)

    @pytest.mark.skip
    def test_signup_invalid_password(self, setup):
        self.login_page.open_signup_page()

    def test_signup_new(self, setup):
        self.login_page.open_signup_page()
        self.login_page.check_signup_new()

    def test_signup_already(self, setup):
        self.login_page.open_signup_page()
        self.login_page.check_signup_already()
