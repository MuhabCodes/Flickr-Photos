from time import sleep

from selenium.common.exceptions import TimeoutException, NoSuchElementException
from appium.webdriver.webdriver import WebDriver
from appium.webdriver.webelement import WebElement
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from pageobject.page import Page
from pageobject.locator.locator_photo import Locator


class LoginPage(Page):
    """ Class containing login page methods."""
    def __init__(self, driver: WebDriver = None):
        Page.__init__(self, driver)
        self.edittext_name_list = [
            "First name",
            "Last name",
            "Your Age",
            "Email Address",
            "Password"
        ]
        self.edittext_valid_value = [
            "Mostafa",
            "Mohamed",
            "23",
            "sasasabry290@gmail.com",
            "1234567890123"
        ]
        self.edittext_valid_random_value = [
            "Mostafa",
            "Mohamed",
            "23",
            self.utils.generate_random_email(),
            "1234567890123"
        ]

    def element_located(self, by: By, identifier: str, max_time: float = 5):
        """ Detect if an element is present in the page.

        :param by: Locator strategy example: ID, NAME,.....etc
        :param identifier: string to identify element
        :param max_time: Maximum waiting time
        :return: A boolean to check if the element is present
        """
        try:
            WebDriverWait(self.driver, max_time).until(
                EC.presence_of_element_located((by, identifier))
            )
            return True
        except TimeoutException:
            return False

    def open_login_page(self):
        self.driver.find_element_by_accessibility_id(
            Locator.getting_started_accessibility_id).click()
        sleep(2)
        return True

    def open_signup_page(self):
        self.driver.find_element_by_accessibility_id(
            Locator.login_signup_accessibility_id).click()
        return True

    def signup_scroll(self, direction: int):
        """ Scroll in Signup page

        :param direction: Scroll direction (0-downward, 1-Upwards)
        """
        edittext_list = self.driver.find_elements_by_xpath(
            Locator.signup_edittext_xpath)

        if direction == 0:
            self.driver.scroll(
                edittext_list[len(edittext_list)-1], edittext_list[0])
        else:
            self.driver.scroll(
                edittext_list[0], edittext_list[len(edittext_list)-1])

    def required_visible(self, main_element: WebElement):
        try:
            main_element.find_element_by_accessibility_id(
                Locator.signup_required_accessibility_id)
            return True
        except NoSuchElementException:
            return False

    def signup_fill_edittext(self, main_element: WebElement, text: str):

        main_element.click()
        main_element.clear()
        main_element.send_keys(text)
        # Keycode ENTER
        self.driver.press_keycode(66)

    def signup_fill_edittext_enter(self, edittext_i: int, text: str):
        edittext_list = self.driver.find_elements_by_xpath(
            Locator.signup_edittext_xpath)

        self.signup_fill_edittext(edittext_list[edittext_i], text)
        self.signup_scroll(0)

        self.driver.find_element_by_accessibility_id(
            Locator.signup_button_accessibility_id).click()
        self.signup_scroll(1)

    def signup_fill_empty_all(self, op: int = 0):
        self.signup_scroll(1)
        edittext_list = self.driver.find_elements_by_xpath(
            Locator.signup_edittext_xpath)
        if op == 0:
            self.signup_fill_edittext(edittext_list[0], "Mostafa")
            self.signup_fill_edittext(edittext_list[1], "Mohamed")
            self.signup_fill_edittext(edittext_list[2], "18")
            self.signup_fill_edittext(edittext_list[3], "acunity@gmail.com")
            self.signup_fill_edittext(edittext_list[4], "12345678910121")
        else:
            for i in range(5):
                self.signup_fill_edittext(edittext_list[i], "")
        self.signup_scroll(1)

    def check_signup_empty(self, edittext_i: int):
        self.signup_fill_edittext_enter(edittext_i, "")
        edittext_list = self.driver.find_elements_by_xpath(
            Locator.signup_edittext_xpath)

        if not self.required_visible(edittext_list[edittext_i]):
            raise AssertionError(
                "REQUIRED NOT VISIBLE FOR : " + self.edittext_name_list[
                    edittext_i])
        self.signup_fill_edittext(
            edittext_list[edittext_i],
            self.edittext_valid_value[edittext_i])

    def check_signup_valid_entry(self, edittext_i: int, text: str):
        self.signup_fill_edittext_enter(edittext_i, text)
        edittext_list = self.driver.find_elements_by_xpath(
            Locator.signup_edittext_xpath)

        if self.required_visible(edittext_list[edittext_i]):
            raise AssertionError(
                "REQUIRED VISIBLE FOR: " + self.edittext_name_list[
                    edittext_i])
        self.signup_fill_edittext(edittext_list[edittext_i], "")

    def check_signup_invalid_email(self):
        edittext_i = 3
        self.signup_fill_edittext_enter(edittext_i, "fasfasfasfas")
        edittext_list = self.driver.find_elements_by_xpath(
            Locator.signup_edittext_xpath)

        try:
            edittext_list[edittext_i].find_element_by_accessibility_id(
                Locator.signup_invalid_email_accessibility_id)

            self.signup_fill_edittext(
                edittext_list[edittext_i],
                self.edittext_valid_value[edittext_i]
            )
        except NoSuchElementException:
            raise AssertionError(
                "REQUIRED NOT VISIBLE FOR : "
                + self.edittext_name_list[edittext_i]
            )

    def signup_all_valid(self, valid_value_list: list):
        self.signup_scroll(1)
        edittext_list = self.driver.find_elements_by_xpath(
            Locator.signup_edittext_xpath)

        self.signup_fill_edittext(
            edittext_list[0], valid_value_list[0])
        self.signup_fill_edittext(
            edittext_list[1], valid_value_list[1])
        self.signup_fill_edittext(
            edittext_list[2], valid_value_list[2])
        self.signup_fill_edittext(
            edittext_list[3], valid_value_list[3])
        self.signup_fill_edittext(
            edittext_list[4], valid_value_list[4])

        self.driver.find_element_by_accessibility_id(
            Locator.signup_button_accessibility_id).click()

    def check_signup_already(self):
        self.signup_all_valid(self.edittext_valid_value)

        sleep(1)
        if not self.element_located(By.XPATH, Locator.signup_edittext_xpath):
            raise AssertionError("ERROR IN ALREADY SIGNUP")

    def check_signup_new(self):
        self.signup_all_valid(self.edittext_valid_random_value)

        sleep(1)
        if not self.element_located(
                By.XPATH, Locator.signup_confirm_button_xpath):
            raise AssertionError("ERROR IN NEW SIGNUP")

    def check_signup_show_password(self):
        pass_1 = False
        pass_2 = False
        password = "afafasgasasggag"

        edittext_list = self.driver.find_elements_by_xpath(
            Locator.signup_edittext_xpath)
        self.signup_fill_edittext(edittext_list[4], password)

        show_password = edittext_list[4].find_element_by_xpath(
            './' + Locator.signup_show_password_button_sub_xpath
        )
        password_string = edittext_list[4].get_attribute("text")
        password_string = password_string[:-10]

        if password_string != password:
            pass_1 = True

        show_password.click()
        sleep(1)
        password_string = edittext_list[4].get_attribute("text")
        password_string = password_string[:-10]

        if password_string == password:
            pass_2 = True

        self.signup_fill_edittext(edittext_list[4], "")
        self.signup_scroll(1)
        return pass_1 and pass_2
