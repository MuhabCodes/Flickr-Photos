from time import sleep
import pytest

from common.sel_helper import SelHelper
from pageobject.mainpage.mainpage import MainPage, MainPageLocator
from pageobject.generalmethods.general_methods import GeneralMethods


class TestMainPageLinks(object):
    helper = SelHelper()
    main_page = MainPage(helper)
    mock_methods = GeneralMethods(helper)
    LOCATOR_LIST = main_page.LOCATOR_LIST
    driver = None

    @pytest.fixture()
    def setup(self):
        driver = self.helper.init_chrome_driver()
        driver.maximize_window()
        self.helper.implicit_wait(30)
        self.mock_methods.login()
        sleep(10)
        yield
        self.helper.quit()

    # @pytest.mark.skip
    def test_driver(self, setup):
        pass

    # @pytest.mark.skip
    @pytest.mark.parametrize(
        "list_locator, list_dict",
        [
            (MainPageLocator.YOU_LIST,
             main_page.utils.get_value(LOCATOR_LIST, "YOU")),
            (MainPageLocator.EXPLORE_LIST,
             main_page.utils.get_value(LOCATOR_LIST, "EXPLORE"))
        ]
    )
    def test_clicking_nav_dropdowns(self, setup, list_locator, list_dict):
        assert self.main_page.click_nav_dropdown_subitem(
            list_locator, list_dict
        )

    # @pytest.mark.skip
    def test_nav_links(self, setup):
        assert self.main_page.test_nav_links()

    # @pytest.mark.skip
    @pytest.mark.parametrize(
        "menu_locator, view_locator, el_menu, el_view",
        [
            (MainPageLocator.NOTIF_MENU, MainPageLocator.NOTIF_MENU_VIEW,
             "Notification_menu", "Notification_view"),
            (MainPageLocator.ACCOUNT_MENU, MainPageLocator.ACCOUNT_MENU_VIEW,
             "Account_menu", "Account_view")
        ]
    )
    def test_menus(self, setup, menu_locator,
                   view_locator, el_menu, el_view):
        print("\n", el_menu, "\n")
        assert self.main_page.test_clicking_menu(
            menu_locator, view_locator,
            el_menu, el_view)
        sleep(3)
