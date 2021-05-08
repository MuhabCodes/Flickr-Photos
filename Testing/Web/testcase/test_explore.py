from time import sleep
import pytest

from common.selhelper import SelHelper
from pageobject.explore.explore import ExploreLocator, Explore
from pageobject.mockmethods.mockmethods import MockMethods


class TestExploreLinks(object):
    helper = SelHelper()
    explore = Explore(helper)
    mock_methods = MockMethods(helper)
    LOCATOR_LIST = explore.LOCATOR_LIST
    driver = None

    @pytest.fixture()
    def setup(self):
        driver = self.helper.init_chrome_driver()
        driver.maximize_window()
        self.helper.implicit_wait(30)
        self.mock_methods.mock_login()
        sleep(3)
        self.helper.go_to(self.explore.link)
        sleep(10)
        yield
        # self.helper.quit()

    # @pytest.mark.skip
    def test_driver(self, setup):
        pass

    # @pytest.mark.skip
    def test_subnav_links(self, setup):
        assert self.explore.test_subnav_links(30)

    # @pytest.mark.skip
    def test_layout(self, setup):
        assert self.explore.select_layout("LAYOUT_STORY")

    def test_click_photo(self, setup):
        assert self.explore.check_click_photo_link()
