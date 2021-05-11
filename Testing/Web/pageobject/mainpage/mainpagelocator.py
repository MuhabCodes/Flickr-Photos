from selenium.webdriver.common.by import By


class MainPageLocator(object):
    """ Class for user main page WebElement locators."""
    ####################################################
    #                   Navigation bar                 #
    ####################################################
    FLICKER_LOGO_LINK = (By.CSS_SELECTOR, 'a[href="/"]')
    GET_PRO_LINK = (By.CSS_SELECTOR, 'a[data-track="gnGetProMainClick"]')
    UPLOAD_LINK = (By.CSS_SELECTOR, 'a[aria-label="Upload"]')

    # Navigation bar - You list
    ############################
    YOU_LIST = (By.CSS_SELECTOR, 'li[data-context="you"]')
    YOU_LINK = (By.CSS_SELECTOR, 'a[data-track="gnYouMainClick"]')
    YOU = {
        "YOU_ABOUT": (By.CSS_SELECTOR, 'a[data-track="gnYouAboutClick"]'),
        "YOU_PHOTOSTREAM": (By.CSS_SELECTOR,
                            'a[data-track="gnYouPhotostreamClick"]'),
        "YOU_ALBUMS": (By.CSS_SELECTOR,
                       'a[data-track="gnYouSetsClick"]'),
        "YOU_FAVS": (By.CSS_SELECTOR,
                     'a[data-track="gnYouFavoritesClick"]'),
        "YOU_GALLERIES": (By.CSS_SELECTOR,
                          'a[data-track="gnYouGalleriesClick"]'),
        "YOU_GROUPS": (By.CSS_SELECTOR,
                       'a[data-track="gnYouGroupsClick"]'),
        "YOU_CAMERA_ROLL": (By.CSS_SELECTOR,
                            'a[data-track="gnYouCameraRollClick"]'),
        "YOU_RECENT_ACTIVITY": (By.CSS_SELECTOR,
                                'a[data-track="gnYouRecentActivityClick"]'),
        "YOU_PEOPLE": (By.CSS_SELECTOR,
                       'a[data-track="gnYouPeopleClick"]'),
        "YOU_ORGANIZE": (By.CSS_SELECTOR,
                         'a[data-track="gnYouOrganizeClick"]')
    }

    # Navigation bar - Explore list
    ###############################
    EXPLORE_LIST = (By.CSS_SELECTOR, 'li[data-context="explore"]')
    EXPLORE_LINK = (By.CSS_SELECTOR, 'a[data-track="gnExploreMainClick"]')
    EXPLORE = {
        "EXPLORE_RECENT_PHOTOS": (By.CSS_SELECTOR,
                                  'a['
                                  'data-track="gnExploreRecentPhotosClick"]'),
        "EXPLORE_TRENDING": (By.CSS_SELECTOR,
                             'a[data-track="gnExploreTagsClick"]'),
        "EXPLORE_EVENTS": (By.CSS_SELECTOR,
                           'a[data-track="gnExploreEventsClick"]'),
        "EXPLORE_THE_COMMONS": (By.CSS_SELECTOR,
                                'a[data-track="gnExploreTheCommonsClick"]'),
        "EXPLORE_FLICKR_GALLERIES": (By.CSS_SELECTOR,
                                     'a['
                                     'data-track="gnExploreGalleriesClick"]'),
        "EXPLORE_WORLD_MAP": (By.CSS_SELECTOR,
                              'a[data-track="gnExploreWorldMapClick"]'),
        "EXPLORE_CAMERA_FINDER": (By.CSS_SELECTOR,
                                  'a['
                                  'data-track="gnExploreCameraFinderClick"]'),
        "EXPLORE_FLICKR_BLOG": (By.CSS_SELECTOR,
                                'a[data-track="gnExploreFlickrBlogClick"]')
    }

    # Navigation bar - Prints list
    ###############################
    PRINTS_LIST = (By.CSS_SELECTOR, 'li[data-context="create"]')
    PRINTS_LINK = (By.CSS_SELECTOR, 'a[data-track="gnCreateMainClick"]')
    PRINTS = {
        "PRINTS_PHOTO_BOOKS": (By.CSS_SELECTOR, 'a[href="/create"]'),
        "PRINTS_WALL_ARTS": (By.CSS_SELECTOR,
                             'a[aria-label="Prints & Wall Art"]')
    }

    # Navigation bar - Notification
    ################################
    NOTIF_MENU = (
        By.XPATH,
        '/html/body/div[1]/div/div[1]/div/div[3]/div/ul[2]/li[3]/div'
    )
    NOTIF_MENU_VIEW = (
        By.XPATH,
        '//div[contains(@class,"notifications-panel-view") '
        'and contains(@class,"view")]'
    )

    # Navigation bar - Account menu
    ################################
    ACCOUNT_MENU = (
        By.XPATH,
        'html/body/div[1]/div/div[1]/div/div[3]/div/ul[2]/li[4]/div'
    )
    ACCOUNT_MENU_VIEW = (
        By.XPATH,
        '//div[contains(@class,"user-account-card-view") '
        'and contains(@class,"view")]'
    )

    ####################################################
    #                   Feed Column                    #
    ####################################################

    # Filter container
    ################################

    FILTER_BUTTON = (By.CLASS_NAME, "filter-menu-button")
    FILTER_BUTTON_SPAN = (By.XPATH,
                          '//div[@class="filter-menu-button"]'
                          '/span[@class="filter-menu-text"]')

    filter_droparound_menu_xpath = '//div[contains(@class,"droparound") ' \
                                   'and contains(@class,"menu")]'
    FILTER = {
        "FILTER_ALL_ACTIVITY": (By.XPATH,
                                filter_droparound_menu_xpath +
                                '/div[2]/div/ul/li[1]'),
        "FILTER_PEOPLE": (By.XPATH,
                          filter_droparound_menu_xpath +
                          '/div[2]/div/ul/li[2]'),
        "FILTER_GROUPS": (By.XPATH,
                          filter_droparound_menu_xpath +
                          '/div[2]/div/ul/li[3]'),
        "FILTER_FRIENDS_FAMILY": (By.XPATH,
                                  filter_droparound_menu_xpath +
                                  '/div[2]/div/ul/li[4]')
    }

    # Layout tabs container
    ################################
    LAYOUT_COMPACT = (By.CSS_SELECTOR, 'a[data-layout-type="compact"]')
    LAYOUT_MEDIUM = (By.CSS_SELECTOR, 'a[data-layout-type="medium"]')
    LAYOUT_LARGE = (By.CSS_SELECTOR, 'a[data-layout-type="large"]')

    # FEED LOAD ERROR container
    ################################
    # FEED_LOAD_ERROR = (By.CLASS_NAME, "feed-load-error-container")
    FEED_LOAD_ERROR = (By.XPATH,
                       '//div[contains(@class,"feed-load-error-container")]')
    FEED_LOAD_ERRMSG = (By.XPATH,
                        '//div[@class="feed-load-error-container"]/div/h2')

    # feed column content
    ################################
    feed_column_content_xpath = '//div[@class="feed-column-content"]'

    # //div[feed-column-content]/div[feed-layout] (multiple)
    feed_layout_sub_xpath = '/div[@class="feed-layout"]'
    feed_layout_xpath = feed_column_content_xpath + feed_layout_sub_xpath
    # feed_layout_full_xpath = 'div/div'

    # //div[feed-column-content]/div[feed-layout]/div[feed_item] (multiple)
    feed_item_sub_xpath = '/div[@class="feed-item"]'
    feed_item_xpath = feed_layout_sub_xpath + feed_item_sub_xpath

    # //div[feed-column-content]/div[feed-layout]/div[feed_item]/div
    # /div[photo-card layout-medium]/
    photo_card_layout_sub_xpath = '/div/div'
    photo_card_layout_xpath = feed_item_xpath + photo_card_layout_sub_xpath

    # ---- Feed Post Header -----

    # //div[feed-column-content]/div[feed_layout]/div[feed-item]/div
    # /div[photo-card layout-medium]/header/div
    # /div[view photo-card-header-view flickr-view-root-view]
    # /div[photo-card-header   ]
    photo_card_header_sub_xpath = \
        photo_card_layout_sub_xpath\
        + '/header/div/div/div'

    # ... /div[photo-card-header   ]/div[left_container]
    photo_card_header_left_sub_xpath = \
        photo_card_header_sub_xpath + '/div[@class="left-container"]'

    # ... /div[photo-card-header   ]/div[left_container]/a
    photo_card_icon_sub_xpath = \
        photo_card_header_left_sub_xpath + '/a'

    # ... /div[photo-card-header   ]/div[left_container]/
    # div[attribution]/div[title_container]/a
    photo_card_poster_sub_xpath = \
        photo_card_header_left_sub_xpath +\
        '/div/div[@class="title-container"]/a'

    # ---- For Groups or compact layout photos -----

    # ... /div[feed-item]/div
    # /div[photo-card compact-large]/div[photo-card-content]
    # /div[card-batch-layout]/div[card-batch-photo-item] (multiple)
    group_batch_item_sub_xpath = \
        photo_card_layout_sub_xpath\
        + '/div[@class="photo-card-content"]' \
          '/div[@class="card-batch-layout"]/div'

    # ... /div[card-batch-photo-item]/div/div/div[photo-card-content]
    # /div[photo-card-photo]/div[photo]/a
    group_photo_link_sub_xpath = '/div/div/div/div/div[@class="photo"]/a'

    # ---- For Medium/Large photos ----

    # ... /div[feed-item]/div
    # /div[photo-card compact-large]/div[photo-card-content]
    # /div[photo-card-photo]/div[photo]/a
    photo_link_sub_xpath = \
        photo_card_layout_xpath + \
        '/div[@class="photo-card-content"/div/div/a]'

    ####################################################
    #                   Info Column                    #
    ####################################################

    # Slim Footer
    ################################
    FOOTER = {
        "FOOTER_ABOUT": (By.CSS_SELECTOR, 'a[data-track="footer-about"]'),
        "FOOTER_JOBS": (By.CSS_SELECTOR, 'a[data-track="footer-jobs"]'),
        "FOOTER_BLOG": (By.CSS_SELECTOR, 'a[data-track="footer-blog"]'),
        "FOOTER_DEVELOPERS": (By.CSS_SELECTOR,
                              'a[data-track="footer-developers"]'),
        "FOOTER_GUIDELINES": (By.CSS_SELECTOR,
                              'a[data-track="footer-developers"]'),
        "FOOTER_HELP": (By.CSS_SELECTOR, 'a[data-track="footer-help"]'),
        "FOOTER_FORUM": (By.CSS_SELECTOR, 'a[data-track="footer-forum"]'),
        "FOOTER_PRIVACY": (By.CSS_SELECTOR, 'a[data-track="footer-privacy"]'),
        "FOOTER_TERMS": (By.CSS_SELECTOR, 'a[data-track="footer-terms"]'),
        "FOOTER_COOKIES": (By.CSS_SELECTOR, 'a[href="/help/cookies"]')
    }
