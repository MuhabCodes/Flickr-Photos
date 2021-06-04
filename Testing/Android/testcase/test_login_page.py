from time import sleep

import pytest
from appium import webdriver
from common.properties import PropertiesMiA1
from pageobject.loginpage.login_page import LoginPage


class TestLoginPage(object):
    driver = None
    desired_caps = PropertiesMiA1.desired_caps
    login_page = LoginPage()
    link = "http://localhost:4723/wd/hub"

    @pytest.fixture()
    def setup(self):
        self.driver = webdriver.Remote(
            command_executor=self.link,
            desired_capabilities=self.desired_caps
        )
        self.driver.implicitly_wait(30)
        self.login_page.set_driver(self.driver)
        self.login_page.open_login_page()

    def test_driver(self, setup):
        pass

    def test_successful_login(self, setup):
        self.login_page.input_email()
        self.login_page.click_next()
        sleep(2)
        self.login_page.input_password()
        self.login_page.click_next()
        sleep(5)
        assert self.driver.current_activity != self.login_page.current_activity

    def test_email_valid(self, setup):
        self.login_page.input_email()
        self.login_page.click_next()
        sleep(2)
        assert self.login_page.check_password_field()

    def test_email_empty(self, setup):
        # assert self.login_page.input_email("")
        self.login_page.click_next()
        sleep(1)
        assert self.login_page.check_email_empty()

    def test_email_invalid(self, setup):
        self.login_page.input_email("ssfafsfasfasfas")
        self.login_page.click_next()
        sleep(1)
        assert self.login_page.check_email_popup()

    def test_password_empty(self, setup):
        self.login_page.input_email()
        self.login_page.click_next()
        sleep(2)
        # assert self.login_page.input_password("")
        self.login_page.click_next()
        sleep(5)
        assert self.driver.current_activity == self.login_page.current_activity

    def test_password_invalid(self, setup):
        self.login_page.input_email()
        self.login_page.click_next()
        sleep(2)
        self.login_page.input_password("asfasfasfasfasfas")
        self.login_page.click_next()
        sleep(1)
        assert self.login_page.check_password_error()

    def test_show_password(self, setup):
        self.login_page.input_email()
        self.login_page.click_next()
        sleep(2)
        self.login_page.input_password()
        assert not self.login_page.password_visibility
        self.login_page.click_show_password()
        sleep(1)
        assert self.login_page.password_visibility
