from time import sleep
import pytest

from common.selhelper import SelHelper
from pageobject.mainpage.mainpage import MainPage
from pageobject.mockmethods.mockmethods import MockMethods

TIME_TO_WAIT = 30


class TestMainPageFeedTools(object):
    helper = SelHelper()
    main_page = MainPage(helper, TIME_TO_WAIT)
    mock_methods = MockMethods(helper)
    LOCATOR_LIST = main_page.LOCATOR_LIST
    driver = None

    @pytest.fixture()
    def setup(self):
        driver = self.helper.init_chrome_driver()
        driver.maximize_window()
        self.helper.implicit_wait(30)
        self.mock_methods.mock_login()
        sleep(10)
        yield
        self.helper.quit()

    # @pytest.mark.skip
    def test_filters(self, setup):
        assert self.main_page.check_feed_filters()

    # @pytest.mark.skip
    def test_layout(self, setup):
        assert self.main_page.check_layouts()

    # @pytest.mark.skip
    def test_select_filter(self, setup):
        assert self.main_page.select_filter("FILTER_PEOPLE")

    # @pytest.mark.skip
    def test_select_layout(self, setup):
        assert self.main_page.select_layout("LAYOUT_COMPACT")

    # @pytest.mark.skip
    def test_error_load(self, setup):
        assert self.main_page.check_feed_empty() is True

    # @pytest.mark.skip
    def test_click_post_icon(self, setup):
        assert self.main_page.check_feed_empty() is True
        assert self.main_page.select_filter("FILTER_ALL_ACTIVITY")

        sleep(10)
        assert self.main_page.check_click_icon()
        sleep(10)

    # @pytest.mark.skip
    def test_click_poster_link(self, setup):
        assert self.main_page.check_feed_empty() is True
        assert self.main_page.select_filter("FILTER_ALL_ACTIVITY")

        sleep(10)
        assert self.main_page.check_poster_link()
        sleep(10)

    # @pytest.mark.skip
    def test_click_group_photo(self, setup):
        assert self.main_page.check_feed_empty() is True
        assert self.main_page.select_filter("FILTER_ALL_ACTIVITY")

        sleep(5)
        assert self.main_page.select_layout("LAYOUT_COMPACT")

        sleep(10)
        assert self.main_page.check_click_group_photo()
