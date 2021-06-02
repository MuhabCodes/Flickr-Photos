import sys
from time import sleep
import pytest

# sys.path.append("E:\College\SPRING 2021\\CMPN203\\"
#                 "project\\Flickr-Photos\\Flickr-Photos\\Testing\\Web")

from common.sel_helper import SelHelper
from pageobject.explore.explore import ExploreLocator, Explore
from pageobject.generalmethods.general_methods import GeneralMethods

TIME_TO_WAIT = 30
FILTER_EXISTS = False
LAYOUT_EXISTS = True


class TestExploreLinks(object):
    helper = SelHelper()
    explore = Explore(helper, TIME_TO_WAIT, FILTER_EXISTS, LAYOUT_EXISTS)
    mock_methods = GeneralMethods(helper)
    LOCATOR_LIST = explore.LOCATOR_LIST
    driver = None

    @pytest.fixture()
    def setup(self):
        driver = self.helper.init_chrome_driver()
        driver.maximize_window()
        self.helper.implicit_wait(30)
        self.mock_methods.login()
        sleep(3)
        self.helper.go_to(self.explore.link)
        sleep(10)
        yield
        self.helper.quit()

    # @pytest.mark.skip
    def test_driver(self, setup):
        pass

    # @pytest.mark.skip
    def test_subnav_links(self, setup):
        assert self.explore.test_subnav_links(30)

    # @pytest.mark.skip
    def test_layout(self, setup):
        if not self.explore.layout_exists:
            pytest.skip("explore doesn't have layout selection")

        assert self.explore.select_layout("LAYOUT_STORY")
        sleep(5)

    # @pytest.mark.skip
    def test_click_photo(self, setup):
        assert self.explore.check_click_photo_link()
        sleep(5)
