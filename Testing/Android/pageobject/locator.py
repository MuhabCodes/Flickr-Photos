

class Locator(object):
    """ Class containing all the locators."""
    ####################################################
    #                Getting started                   #
    ####################################################
    getting_started_id = "com.flickr.android:id/activity_welcome_sign_button"

    ####################################################
    #                   Login page                     #
    ####################################################
    login_webview_context = 'WEBVIEW_com.flickr.android'
    email_field_xpath = '//input[@id="login-email"]'
    email_empty_xpath = '//*[@id="login-form"]/div[2]/div[2]/p'
    email_popup_xpath = '/html/body/div/div[2]'
    email_popup_button_xpath = '/html/body/div/div[2]/div/div/div/button[2]'
    proceed_button_xpath = '//form[@id="login-form"]/button'
    password_field_xpath = '//input[@id="login-password"]'
    password_show_xpath = '//*[@id="login-form"]/div[3]/div/div/div/div'
    password_error_xpath = '//*[@id="login-form"]/div[3]/div/div[2]/p'

    ####################################################
    #                   Main page                      #
    ####################################################
    flickr_view_id = "com.flickr.android:id/fragment_explore_photo_list"
    post_xpath = '//android.widget.RelativeLayout'
    photo_group_id = "com.flickr.android:id/photo_card_grid"

    # inside a photo
    fave_count_id = "com.flickr.android:id/activity_lightbox_fav_count_left"
    post_activity_footer_id = "com.flickr.android:id/activity_lightbox_footer"
    comment_count_id = \
        "com.flickr.android:id/activity_lightbox_comment_count_left"
    # Inside comment view
    add_comment_field_id = "com.flickr.android:id/add_comment_content"
    comment_post_button_id = "com.flickr.android:id/add_comment_post"
    comment_back_button_id = "com.flickr.android:id/fragment_header_back"
