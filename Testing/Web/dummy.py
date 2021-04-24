from common.selhelper import SelHelper
from selenium import webdriver
from selenium.webdriver.common.by import By

helper = SelHelper()
driver = helper.init_firefox_driver()

helper.go_to("https://identity.flickr.com/")

helper.element_clickable(By.ID, "login-email")
email_field = helper.find_element(By.ID, "login-email")
helper.fill_element(email_field, "sasasabry290@gmail.com")

proceed_locator = (By.XPATH,
                   '//*[@id="login-form"]/button')

helper.element_clickable(*proceed_locator)

proceed = helper.find_element(*proceed_locator)

helper.click(proceed)
