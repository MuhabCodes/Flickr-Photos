from time import sleep

from appium.webdriver.webdriver import WebDriver
from selenium.webdriver.common.by import By

from pageobject.page import Page
from pageobject.locator.locator import Locator
from pageobject.generalmethods.general_methods import GeneralMethods


class CameraPage(Page):
    def __init__(self, driver: WebDriver = None):
        Page.__init__(self, driver)
        self.general_methods = GeneralMethods(driver)

    def set_driver(self, driver: WebDriver):
        self.driver = driver
        self.general_methods.set_driver(driver)

    def open_camera_page(self):
        self.general_methods.login()
        sleep(3)
        self.driver.find_element_by_id(Locator.nav_cam_id).click()
        for i in range(3):
            self.general_methods.allow_permission()
            sleep(1)

    def configure_photo(self, title: str = "test_photo",
                        description: str = "this is a test",
                        privacy: int = 1):
        """ Add  uploaded photo data, current privacy modes are
            - PUBLIC (privacy = 1)
            - PRIVATE(privacy = 2)

        :param title: photo title
        :param description: photo description
        :param privacy: privacy mode (1-PUBLIC, 2-PRIVATE)
        :return:
        """
        self.driver.find_element_by_id(
            Locator.camera_title_editbox_id).send_keys(title)

        self.driver.find_element_by_id(
            Locator.camera_descrip_editbox_id).send_keys(description)

        if privacy == 1 or privacy == 2:
            self.driver.find_element_by_id(
                Locator.camera_config_privacy_btn_id).click()
            privacy_list = self.driver.find_elements_by_xpath(
                Locator.camera_config_privacy_textview_xpath)
            if privacy == 1:
                privacy_list[0].click()
            else:
                privacy_list[3].click()

            self.driver.find_element_by_id(Locator.camera_post_btn_id).click()

            return True

    def upload_photo(self, index: int = 0, num_of_img: int = 1):
        self.driver.find_element_by_id(Locator.camera_gallery_btn_id).click()
        self.general_methods.upload_photo(index, num_of_img)

    def capture_photo(self):
        flash = self.driver.find_element_by_id(
            Locator.camera_flash_setting_id)
        flash.click()
        flash.click()

        sleep(1)
        self.driver.find_element_by_id(Locator.camera_capture_btn_id).click()

        self.general_methods.element_located(
            By.ID, Locator.camera_next_btn_id)
        self.driver.find_element_by_id(Locator.camera_next_btn_id).click()
        return True

    def check_upload_photo_only(self, op: int = 1, photo_info: dict = None):
        """ Check uploading/capturing a photo

        :param op: operation type (1- upload, 2- capture)
        :param photo_info: name, description and title of the photo
        :return: boolean to check if the operation is successful
        """
        if photo_info is None:
            title = "test_photo"
            description = "this is a test"
            privacy = 1

        else:
            title = photo_info["title"]
            description = photo_info["description"]
            privacy = photo_info["privacy"]

        frame_index = 0

        if op == 1:
            self.upload_photo()
        else:
            print(self.capture_photo())

        self.configure_photo(title, description, privacy)

        sleep(20)
        self.general_methods.open_roll_latest_photo(frame_index)
        sleep(1)
        self.general_methods.tap_roll_photo_info()

        photo_title = self.driver.find_element_by_id(
            Locator.you_photo_info_title_id).get_attribute("text")
        print(photo_title)

        photo_descrip = self.driver.find_element_by_id(
            Locator.you_photo_info_descrip_id).text

        if photo_title == title and photo_descrip == description:
            return True
        return False


if __name__ == '__main__':
    pass
