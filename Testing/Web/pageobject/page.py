from common.sel_helper import SelHelper
from common.utils import Utils
from pageobject.page_helper import PageHelper


class Page(object):
    """ Base class for pageobject classes."""
    def __init__(self, helper: SelHelper,
                 time_to_wait: float = 100,
                 filter_exists: bool = True,
                 layout_exists: bool = True):
        self.helper = helper
        self.time_to_wait = time_to_wait
        self.page_helper = PageHelper(helper, self.time_to_wait)
        self.utils = Utils()
        self.filter_exists = filter_exists
        self.layout_exists = layout_exists

    @property
    def has_filter(self):
        """ Check if the page has filter selection.

        :return: boolean indicating if the page has filter selection.
        """
        return self.filter_exists

    @property
    def has_layout(self):
        """ Check if the page has layout selection.

        :return: boolean indicating if the page has layout selection.
        """
        return self.layout_exists
