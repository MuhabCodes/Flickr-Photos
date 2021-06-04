import sys
from time import sleep
import pytest

# sys.path.append("E:\College\SPRING 2021\\CMPN203\\"
#                 "project\\Flickr-Photos\\Flickr-Photos\\Testing\\Web")

from common.sel_helper import SelHelper
from pageobject.mainpage.mainpage import MainPage
from pageobject.generalmethods.general_methods import GeneralMethods

TIME_TO_WAIT = 30
FILTER_EXISTS = True
LAYOUT_EXISTS = True


class TestMainPageFeedTools(object):
    helper = SelHelper()
    main_page = MainPage(helper, TIME_TO_WAIT, FILTER_EXISTS, LAYOUT_EXISTS)
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
    def test_filters(self, setup):
        if not self.main_page.filter_exists:
            pytest.skip("mainpage doesn't have filter selection")
        assert self.main_page.check_feed_filters()

    # @pytest.mark.skip
    def test_layout(self, setup):
        if not self.main_page.layout_exists:
            pytest.skip("mainpage doesn't have layout selection")

        assert self.main_page.check_layouts()

    # @pytest.mark.skip
    def test_select_filter(self, setup):
        if not self.main_page.filter_exists:
            pytest.skip("mainpage doesn't have filter selection")

        assert self.main_page.select_filter("FILTER_PEOPLE")

    # @pytest.mark.skip
    def test_select_layout(self, setup):
        if not self.main_page.layout_exists:
            pytest.skip("mainpage doesn't have layout selection")

        assert self.main_page.select_layout("LAYOUT_COMPACT")

    # @pytest.mark.skip
    def test_error_load(self, setup):
        assert self.main_page.check_feed_empty() is True

    # @pytest.mark.skip
    def test_click_post_icon(self, setup):
        assert self.main_page.check_feed_empty() is True
        if self.main_page.filter_exists:
            assert self.main_page.select_filter("FILTER_ALL_ACTIVITY")

        sleep(10)
        assert self.main_page.check_click_icon()
        sleep(10)

    # @pytest.mark.skip
    def test_click_poster_link(self, setup):
        assert self.main_page.check_feed_empty() is True
        if self.main_page.filter_exists:
            assert self.main_page.select_filter("FILTER_ALL_ACTIVITY")

        sleep(10)
        assert self.main_page.check_poster_link()
        sleep(10)

    # @pytest.mark.skip
    def test_click_group_photo(self, setup):
        assert self.main_page.check_feed_empty() is True

        if not self.main_page.filter_exists:
            assert self.main_page.select_filter("FILTER_ALL_ACTIVITY")

        sleep(5)
        if self.main_page.layout_exists:
            assert self.main_page.select_layout("LAYOUT_COMPACT")

        sleep(10)
        assert self.main_page.check_click_group_photo()
