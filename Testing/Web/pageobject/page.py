from common.selhelper import SelHelper
from common.utils import Utils
from pageobject.pagehelper import PageHelper


class Page(object):
    """ Base class for pageobject classes."""
    def __init__(self, helper: SelHelper, time_to_wait: float = 100):
        self.helper = helper
        self.time_to_wait = time_to_wait
        self.page_helper = PageHelper(helper, self.time_to_wait)
        self.utils = Utils()
