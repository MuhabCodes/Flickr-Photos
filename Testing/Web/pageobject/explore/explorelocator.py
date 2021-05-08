from selenium.webdriver.common.by import By


class ExploreLocator(object):
    """ Class for explore locators. """
    # Sub navigation bar
    ############################
    EXPLORE_LINK = (By.XPATH, '//li[@id="explore"]/a')
    TAGS_LINK = (By.XPATH, '//li[@id="tags"]/a')
    EVENTS_LINK = (By.XPATH, '//li[@id="events"]/a')

    # Title row
    ############################
    TITLE_LABEL = (By.XPATH,
                   '//div[@role="main"]/div[@class="title-row"]/h3')

    LAYOUT_JUSTIFIED = (By.XPATH, '//button[@data-layout-style="justified"]')
    LAYOUT_STORY = (By.XPATH, '//button[@data-layout-style="story"]')

    MORE_BUTTON = (By.CLASS_NAME, "more-link")
    MORE = {
        "MORE_THE_COMMS": (By.XPATH,
                           '//div[@class="body"]'
                           '/div/div[@role=menu]/li[1]/a'),
        "MORE_GALLERIES": (By.XPATH,
                           '//div[@class="body"]'
                           '/div/div[@role=menu]/li[2]/a'),
        "MORE_WORLD_MAP": (By.XPATH,
                           '//div[@class="body"]'
                           '/div/div[@role=menu]/li[3]/a'),
        "MORE_APP_GARDEN": (By.XPATH,
                            '//div[@class="body"]'
                            '/div/div[@role=menu]/li[4]/a'),
        "MORE_CAMERA_FINDER": (By.XPATH,
                               '//div[@class="body"]'
                               '/div/div[@role=menu]/li[5]/a'),
        "MORE_WEEKLY_FLICKR": (By.XPATH,
                               '//div[@class="body"]'
                               '/div/div[@role=menu]/li[6]/a'),
        "MORE_FLICKR_GROUP": (By.XPATH,
                              '//div[@class="body"]'
                              '/div/div[@role=menu]/li[7]/a')
    }

    # Photo list
    ############################

    # div[main]/div[view photo-list-view]
    # /div[view photo-list-photo-view] (multiple)
    photo_list_item_xpath = \
        '//div[@role="main"]/div[contains(@class,"photo-list-view")]/div'

    # ... /div[view photo-list-photo-view]/div[interaction-view]
    # /div[photo-list-photo-interaction]
    photo_interact_sub_xpath = '/div[@class="interaction-view"]/div'

    # ... /div[view photo-list-photo-view]/div[interaction-view]
    # /div[photo-list-photo-interaction]/a
    photo_sub_xpath = photo_interact_sub_xpath + '/a'

    # ... /div[view photo-list-photo-view]/div[interaction-view]
    # /div[photo-list-photo-interaction]/div[interaction-bar]/
    # /div[text]/a[title]
    photo_footer_sub_xpath = \
        photo_interact_sub_xpath\
        + '/div/div[@class="text"]/a[@class="title"]'

    # ... /div[view photo-list-photo-view]/div[interaction-view]
    # /div[photo-list-photo-interaction]/div[interaction-bar]/
    # /div[text]/a[attribution]
    photo_poster_sub_xpath = \
        photo_interact_sub_xpath\
        + 'div/div[@class="text"]/a[@class="attribution"]'

    # ... /div[view photo-list-photo-view]/div[interaction-view]
    # /div[photo-list-photo-interaction]/div[interaction-bar]/
    # /div[engagement]/span[Add to Favorites]/
    photo_fave_sub_xpath = \
        photo_interact_sub_xpath\
        + 'div/div[@class="engagement"]/span[@aria-label="Add to Favorites"]'

    # ... /div[view photo-list-photo-view]/div[interaction-view]
    # /div[photo-list-photo-interaction]/div[interaction-bar]/
    # /div[engagement]/span[Add to Favorites]/span[engagement-count]
    photo_fave_count_sub_xpath = \
        photo_interact_sub_xpath\
        + 'div/div[@class="engagement"]/span[@aria-label="Add to Favorites"]'\
        + 'span[@class="engagement-count"]'