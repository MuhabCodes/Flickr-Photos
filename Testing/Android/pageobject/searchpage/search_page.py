from time import sleep

from appium import webdriver
from appium.webdriver.webdriver import WebDriver
from appium.webdriver.webelement import WebElement
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException, NoSuchElementException

from common.properties import PropertiesMiA1
from pageobject.page import Page
from pageobject.locator import Locator
from pageobject.generalmethods.general_methods import GeneralMethods


class SearchPage(Page):
    """ Class containing search page methods."""
    def __init__(self, driver: WebDriver = None):
        Page.__init__(self, driver)
        self.general_methods = GeneralMethods(driver)

    def set_driver(self, driver: WebDriver):
        self.driver = driver
        self.general_methods.set_driver(driver)

    def open_search_page(self):
        self.general_methods.login()
        self.driver.find_element_by_id(Locator.nav_search_id).click()

    def check_search_found(self):
        if self.general_methods.element_located(
                By.XPATH, Locator.search_not_found_xpath, 5):
            return False
        else:
            return True

    def search(self, text: str = "hello", search_type: int = 1):
        """ Search in flickr application, current search types are:
            -  Photos (search_type=1)
            -  People (search_type=2)
            -  Groups (search_type=3)

        :param text: search text
        :param search_type: type of search
        :return: boolean indicating if the operation is successful
        """
        self.driver.find_element_by_id(Locator.search_textbox_id).click()
        self.driver.find_element_by_id(
            Locator.search_textbox_id).send_keys(text)

        tab_xpath = None
        if search_type == 1:
            tab_xpath = Locator.search_photos_tab_xpath
        elif search_type == 2:
            tab_xpath = Locator.search_people_tab_xpath
        elif search_type == 3:
            tab_xpath = Locator.search_groups_tab_xpath

        self.driver.find_element_by_xpath(tab_xpath).click()

        self.general_methods.press_enter()

        return self.check_search_found()

    def open_photo(self):
        linearlayout_i = 0
        photo_i = 0

        photo_linearlayout_list = self.driver.find_elements_by_xpath(
            Locator.search_photo_linearlayout_xpath
        )
        if len(photo_linearlayout_list) < linearlayout_i:
            raise IndexError(
                "linearlayout_i is out of photo_linearlayout_list range")

        photo_list = \
            photo_linearlayout_list[linearlayout_i].find_elements_by_xpath(
                './' + Locator.search_photo_sub_xpath
            )
        if len(photo_list) < photo_i:
            raise IndexError(
                "photo_i is out of photo_list range")

        photo_list[photo_i].click()
        return True

    def get_people_relativelayout_list(self):
        people_relativelayout_list = self.driver.find_elements_by_xpath(
            Locator.search_people_relativelayout_xpath
        )
        return people_relativelayout_list

    def people_followed(self, people_element: WebElement):
        try:
            people_element.find_element_by_id(
                Locator.people_follow_text_id)
            return False
        except NoSuchElementException:
            return True

    def check_people_follow(self, index: int = 0):
        people_list = self.get_people_relativelayout_list()

        followed_old = self.people_followed(people_list[index])
        people_list[index].find_element_by_id(
            Locator.people_follow_id).click()

        sleep(1)
        followed_new = self.people_followed(people_list[index])

        if followed_new and not followed_new:
            return True
        elif followed_new and not followed_old:
            people_list[index].find_element_by_id(
                Locator.people_follow_id).click()
            return True

    def check_people_name(self, index: int = 0):
        people_list = self.get_people_relativelayout_list()
        name = people_list[index].find_element_by_id(
            Locator.list_people_name_id).get_attribute("text")

        people_list[index].find_element_by_id(
            Locator.list_people_icon_id).click()

        sleep(1)
        name_new = self.driver.find_element_by_id(
            Locator.profile_name_id).get_attribute("text")
        self.driver.find_element_by_id(Locator.profile_back_id).click()

        if name_new == name:
            return True
        return False

    def open_interesting_photo(self):
        linearlayout_i = 0
        photo_i = 0

        photo_linearlayout_list = self.driver.find_elements_by_xpath(
            Locator.search_interesting_linearlayout_xpath
        )
        if len(photo_linearlayout_list) < linearlayout_i:
            raise IndexError(
                "linearlayout_i is out of photo_linearlayout_list range")

        photo_list = \
            photo_linearlayout_list[linearlayout_i].find_elements_by_xpath(
                './' + Locator.search_interesting_photo_sub_xpath
            )
        if len(photo_list) < photo_i:
            raise IndexError(
                "photo_i is out of photo_list range")

        photo_list[photo_i].click()
        return True

    def check_group_name(self, index: int = 0):
        groups_gridview = self.driver.find_element_by_id(
            Locator.search_groups_gridview_id)

        groups_framelayout_list = groups_gridview.find_elements_by_xpath(
            './' + Locator.search_groups_framelayout_sub_xpath
        )
        group = groups_framelayout_list[index].find_element_by_id(
            Locator.search_groups_name_id
        )
        name = group.get_attribute("name")
        group.click()

        sleep(1)
        name_new = self.driver.find_element_by_id(
            Locator.group_name_id).get_attribute("text")
        self.driver.find_element_by_id(Locator.group_back_id).click()

        if name_new == name:
            return True
        return False

    def check_search(self, text: str = "sss"):
        pass


if __name__ == '__main__':
    link = "http://localhost:4723/wd/hub"
    driver = webdriver.Remote(
        command_executor=link,
        desired_capabilities=PropertiesMiA1.desired_caps
    )
    driver.implicitly_wait(5)
    search_page = SearchPage(driver)
    search_page.open_search_page()

    search_page.search("sss", 3)
    print(search_page.check_group_name(0))
    # SUCCESS
    # searchpage.open_interesting_photo()

    # SUCCESS
    # searchpage.search("sss", 2)
    # print(searchpage.check_people_name(0))

    # SUCCESS
    # searchpage.search("sss", 2)
    # print(searchpage.check_people_follow(0))

    # SUCCESS
    # searchpage.search("sss", 1)
    # searchpage.open_photo()
