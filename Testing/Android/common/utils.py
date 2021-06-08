from datetime import datetime
import random
import string


class Utils(object):
    """ Class containing other non-testing related general methods"""

    def generate_time_string(self):
        """ Generate string based on current time in format "dd-mm-yyyy H:M:S".

        :return: generated string
        """
        now = datetime.now()
        # dd-mm-YY H:M:S
        return now.strftime("%d-%m-%Y %H:%M:%S")

    def generate_random_string(self, size: int = 10):
        """ Generate random string. """
        # printing letters
        letters = string.ascii_letters
        return ''.join(random.choice(letters) for i in range(size))
