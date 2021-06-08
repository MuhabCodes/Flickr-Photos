from time import sleep

from appium import webdriver
from appium.webdriver.common.touch_action import TouchAction
from appium.webdriver.webdriver import WebDriver
from selenium.common.exceptions import NoSuchElementException

from common.properties import PropertiesMiA1
from pageobject.page import Page
from pageobject.locator import Locator
from pageobject.generalmethods.general_methods import GeneralMethods


class YouPage(Page):
    def __init__(self, driver: WebDriver = None):
        Page.__init__(self, driver)
        self.general_methods = GeneralMethods(driver)
        self.about_bio_dic = {
            "Photo": "Photo",
            "Description": "Description",
            "Occupation": "Occupation",
            "Current City": "Current City",
            "Hometown": "Hometown",
            "Website": "Website",
            "Tumblr": "Tumblr",
            "Facebook": "Facebook",
            "Twitter": "Twitter",
            "Instagram": "Instagram",
            "Pinterest": "Pinterest",
            "Email": "Email",
            "Date Joined": "Date Joined"
        }

    def set_driver(self, driver: WebDriver):
        self.driver = driver
        self.general_methods.set_driver(driver)

    def open_you_page(self):
        self.general_methods.login()
        sleep(1)
        self.driver.find_element_by_id(Locator.nav_profile_id).click()

    def open_about(self):
        nav_list = self.driver.find_elements_by_xpath(
            Locator.you_nav_list_xpath)

        nav_list[0].click()

    def get_about_bio_item(self, text: str):
        nav_list = self.driver.find_elements_by_id(
            Locator.you_about_bio_info_item_id)

        while True:
            for i in range(0, len(nav_list)):
                try:
                    nav_list = self.driver.find_elements_by_id(
                        Locator.you_about_bio_info_item_id)

                    label = nav_list[i].find_element_by_id(
                        Locator.you_about_bio_item_label_id
                    ).get_attribute("text")
                    if text in label:
                        return nav_list[i]
                except NoSuchElementException:
                    pass
            self.driver.scroll(nav_list[len(nav_list) - 1], nav_list[0])
            nav_list = self.driver.find_elements_by_id(
                Locator.you_about_bio_info_item_id)

    def check_textbox_bio_items_1(self):
        """ Check if the text outside is the same inside"""
        self.open_about()
        about_bio_dic = {
            "Description": self.about_bio_dic["Description"],
            "Occupation": self.about_bio_dic["Occupation"],
            "Current City": self.about_bio_dic["Current City"],
            "Hometown": self.about_bio_dic["Hometown"],
            "Website": self.about_bio_dic["Website"],
            "Tumblr": self.about_bio_dic["Tumblr"],
            "Facebook": self.about_bio_dic["Facebook"],
            "Twitter": self.about_bio_dic["Twitter"],
            "Instagram": self.about_bio_dic["Instagram"],
            "Pinterest": self.about_bio_dic["Pinterest"]
        }
        for bio_label in about_bio_dic:
            bio_item = self.get_about_bio_item(bio_label)
            print("\n-------------------\n" + bio_label)
            # hint_out = bio_item.find_element_by_id(
            #     Locator.you_about_bio_item_hint_id).get_attribute("text")
            hint_out = bio_item.find_element_by_xpath(
                './' + Locator.you_about_bio_item_hint_sub_xpath
            ).get_attribute("text")
            print(bio_label)
            print("-------------------")
            bio_item.click()

            sleep(1)
            hint_editbox = self.driver.find_element_by_id(
                Locator.you_about_item_inside_text_id)
            hint_in = self.driver.find_element_by_id(
                Locator.you_about_item_inside_text_id).get_attribute("text")

            if hint_out not in hint_in:
                # raise AssertionError("ERROR IN " + bio_label)
                raise AssertionError(hint_in + "|" + hint_out)

            self.driver.find_element_by_id(
                Locator.header_back_button_id).click()

    def check_textbox_bio_items_2(self):
        """ Add text and check if it will appear outside. """
        self.open_about()
        about_bio_dic = {
            "Description": self.about_bio_dic["Description"],
            "Occupation": self.about_bio_dic["Occupation"],
            "Current City": self.about_bio_dic["Current City"],
            "Hometown": self.about_bio_dic["Hometown"],
        }
        for bio_label in about_bio_dic:
            bio_item = self.get_about_bio_item(bio_label)
            bio_item.click()

            content_editbox = self.driver.find_element_by_id(
                Locator.you_about_item_inside_text_id)
            content_editbox.click()

            content_editbox = self.driver.find_element_by_id(
                Locator.you_about_item_inside_text_id)
            content_editbox.clear()
            content_editbox.send_keys(self.utils.generate_random_string(10))
            hint_in = content_editbox.get_attribute("text")
            self.driver.find_element_by_id(
                Locator.you_about_item_inside_done_id).click()

            bio_item = self.get_about_bio_item(bio_label)
            hint_out = bio_item.find_element_by_xpath(
                './' + Locator.you_about_bio_item_hint_sub_xpath
            ).get_attribute("text")

            if hint_out not in hint_in:
                # raise AssertionError("ERROR IN " + bio_label)
                raise AssertionError(hint_in + "|" + hint_out)
        return True


if __name__ == '__main__':
    link = "http://localhost:4723/wd/hub"
    driver = webdriver.Remote(
        command_executor=link,
        desired_capabilities=PropertiesMiA1.desired_caps
    )
    driver.implicitly_wait(5)
    you_page = YouPage(driver)
    you_page.open_you_page()
