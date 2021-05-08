import inspect

from common.selhelper import SelHelper


class Utils(object):
    """ Class contains other helper methods that don't deal directly with
    selenium web driver.
    """
    def get_value(self, lst: list, key: str):
        """ Get the second member (value) of a tuple in a list using the
        tuple's first member (key).

        :param lst: the list to get value from e.g. [(key1, value1),(key2,
                    value2),....]
        :param key: the key associated with the required value
        :return: the value associated with the given key
        """
        for item in lst:
            if item[0] == key:
                return item[1]
        return None

    def get_all_values(self, lst: list, partial_key: str):
        """ Get a list of second members (values) in all the tuples that
        have the string argument (partial_key) present in their first
        members (keys).

        :param lst: the list to get the values from e.g. [(key1, value1),(key2,
                    value2),....]
        :param partial_key: the string that should be present in the keys
        :return: A list of values associated with the keys that have
                partial_key as part of them.
        """
        locator_list = []
        for item in lst:
            if partial_key in item[0]:
                locator_list.append(item[1])
        return locator_list

    def get_key(self, lst: list, value):
        """ Get the first member (key) of a tuple in a list using the
        tuple's second member (value).

        :param lst: the list to get value from e.g. [(key1, value1),(key2,
                    value2),....]
        :param value: the value associated with the required key
        :return: the key associated with the given value
        """
        for item in lst:
            if item[1] == value:
                return item[0]
        return None

    def get_locators_list(self, class_name):
        """ Return Class attributes as tuples in a list.

        :param class_name: String name of the class
        :return: List of the class attributes
        """
        attribute_list: list = inspect.getmembers(
            class_name, lambda a: not (inspect.isroutine(a)))
        return attribute_list
