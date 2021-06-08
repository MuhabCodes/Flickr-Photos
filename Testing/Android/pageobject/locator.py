

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
    # navigation bar
    nav_activity_id = 'com.flickr.android:id/fragment_navigation_feed'
    nav_search_id = 'com.flickr.android:id/fragment_navigation_search'
    nav_profile_id = 'com.flickr.android:id/fragment_navigation_profile'
    nav_notif_id = 'com.flickr.android:id/fragment_navigation_notifications'
    nav_cam_id = 'com.flickr.android:id/fragment_navigation_camera'

    # main page
    flickr_view_id = "com.flickr.android:id/fragment_explore_photo_list"
    post_xpath = '//android.widget.RelativeLayout'
    photo_group_id = "com.flickr.android:id/photo_card_grid"

    ####################################################
    #                  Search page                     #
    ####################################################
    search_textbox_id = \
        "com.flickr.android:id/search_view_autocompl_textview"

    search_photos_tab_xpath = '//android.widget.TextView[@text="Photos"]'
    search_people_tab_xpath = '//android.widget.TextView[@text="People"]'
    search_groups_tab_xpath = '//android.widget.TextView[@text="Groups"]'

    search_not_found_xpath = \
        '//android.widget.TextView[@text="No Results Found"]'

    # ---- search interesting photos ----

    search_interesting_viewgroup_id = \
        'com.flickr.android:id/fragment_interesting_list'
    search_interesting_viewgroup_xpath = \
        '//android.view.ViewGroup[@resource-id="'\
        + search_interesting_viewgroup_id\
        + '"]'

    # multiple
    search_interesting_linearlayout_sub_xpath = \
        '/android.widget.ListView/android.widget.LinearLayout'
    search_interesting_linearlayout_xpath =\
        search_interesting_viewgroup_xpath\
        + search_interesting_linearlayout_sub_xpath

    # multiple
    search_interesting_photo_sub_xpath = '/android.view.View'

    # ---- photos ----

    search_photos_viewgroup_id = \
        'com.flickr.android:id/fragment_unified_search_all_photos_list'
    search_photos_viewgroup_xpath = \
        '//android.view.ViewGroup[@resource-id="'\
        + search_photos_viewgroup_id\
        + '"]'

    # multiple
    search_photo_linearlayout_sub_xpath = \
        '/android.widget.ListView/android.widget.LinearLayout'
    search_photo_linearlayout_xpath = \
        search_photos_viewgroup_xpath + search_photo_linearlayout_sub_xpath
    # Multiple
    search_photo_sub_xpath = '/android.view.View'

    # ---- people -----

    search_people_listview_id = \
        'com.flickr.android:id/fragment_unified_people_search_list'
    search_people_listview_xpath = \
        '//android.widget.ListView[@resource-id="' \
        + search_people_listview_id \
        + '"]'

    # multiple
    search_people_relativelayout_xpath = \
        search_people_listview_xpath + '/android.widget.RelativeLayout'

    list_people_icon_id = "com.flickr.android:id/people_list_item_icon"
    list_people_name_id = "com.flickr.android:id/people_list_item_name"

    # ---- groups ----
    search_groups_viewgroup_id = \
        'com.flickr.android:id/fragment_unified_group_search_drawer'

    search_groups_gridview_id = 'com.flickr.android:id/gridview'

    # multiple
    search_groups_framelayout_sub_xpath = '/android.widget.FrameLayout'

    search_groups_name_id = \
        'com.flickr.android:id/profile_group_list_item_title'

    ####################################################
    #                  Other profile                   #
    ####################################################
    profile_name_id = "com.flickr.android:id/profile_avatar_bar_realname_tv"
    profile_back_id = "com.flickr.android:id/profile_header_up"

    ####################################################
    #                  Group profile                   #
    ####################################################
    group_name_id = "com.flickr.android:id/group_header_name"
    group_back_id = "com.flickr.android:id/group_header_up"

    ####################################################
    #                  you profile                     #
    ####################################################

    # ---- navigation bar ----
    you_nav_list_xpath = \
        '//android.widget.HorizontalScrollView[@resource-id="'\
        + 'com.flickr.android:id/profile_header_navigation_bar'\
        + '"]/android.widget.LinearLayout/android.widget.TextView'

    # --- about ----
    you_about_bio_info_item_id = 'com.flickr.android:id/bio_info_item_layout'
    you_about_bio_item_label_id = 'com.flickr.android:id/profile_bio_label'
    you_about_bio_item_hint_id = 'com.flickr.android:id/profile_bio_hint'
    you_about_bio_item_hint_sub_xpath = \
        '/android.widget.TextView[@index=1]'
    you_about_bio_item_content_id = 'com.flickr.android:id/profile_bio_content'

    you_about_item_inside_text_id = 'com.flickr.android:id/info_edit_text'
    you_about_item_inside_done_id = \
        "com.flickr.android:id/fragment_header_action"

    # ----- Camera Roll -----
    roll_recyclerview_id = \
        "com.flickr.android:id/fragment_camera_roll_recycler_view"
    roll_recyclerview_xpath = \
        '//androidx.recyclerview.widget.RecyclerView[@resource-id="' \
        + roll_recyclerview_id \
        + '"]'

    # multiple
    roll_framelayout_xpath = \
        roll_recyclerview_xpath + '/android.widget.FrameLayout'

    photo_sub_xpath = '/android.view.View'
    photo_activity_footer_id = \
        'com.flickr.android:id/activity_lightbox_footer'

    you_photo_info_title_id = 'com.flickr.android:id/photoinfo_photo_title'
    you_photo_info_descrip_id = \
        'com.flickr.android:id/photoinfo_photo_description'
    ####################################################
    #                  camera page                     #
    ####################################################

    camera_cancel_btn_id = "com.flickr.android:id/activity_camera_cancel"
    camera_flash_setting_id = "com.flickr.android:id/camera_btn_flash_setting"
    camera_gallery_btn_id = "com.flickr.android:id/activity_camera_gallery_btn"
    camera_capture_btn_id = "com.flickr.android:id/activity_camera_capture_btn"

    upload_download_dir_xpath = '//android.widget.TextView[@text="Download"]'

    # multiple
    upload_folder_framelayout_xpath = \
        '//android.widget.GridView/android.widget.FrameLayout'

    upload_done_btn_id = "com.flickr.android:id/actionbar_button"
    camera_next_btn_id = "com.flickr.android:id/activity_image_editor_next"
    camera_post_btn_id = "com.flickr.android:id/fragment_header_action"
    camera_title_editbox_id = \
        "com.flickr.android:id/activity_media_upload_title"
    camera_descrip_editbox_id = \
        "com.flickr.android:id/activity_media_upload_description"
    camera_config_privacy_btn_id = \
        "com.flickr.android:id/activity_media_upload_privacy"

    camera_config_privacy_listview_id = \
        "com.flickr.android:id/fragment_edit_photos_popup_option_container"
    camera_config_privacy_listview_xpath = \
        '//android.widget.ListView[@resource-id="' \
        + camera_config_privacy_listview_id \
        + '"]'

    # multiple
    camera_config_privacy_textview_xpath = \
        camera_config_privacy_listview_xpath + '/android.widget.TextView'

    ####################################################
    #                      GENERIC                     #
    ####################################################
    header_back_button_id = "com.flickr.android:id/fragment_header_back"

    # ---- follow button -----
    people_follow_id = "com.flickr.android:id/follow_btn_container"
    people_follow_text_id = "com.flickr.android:id/follow_btn_text"

    # ---- inside a photo ----
    fave_count_id = "com.flickr.android:id/activity_lightbox_fav_count_left"
    post_activity_footer_id = "com.flickr.android:id/activity_lightbox_footer"
    comment_count_id = \
        "com.flickr.android:id/activity_lightbox_comment_count_left"
    # Inside comment view
    add_comment_field_id = "com.flickr.android:id/add_comment_content"
    comment_post_button_id = "com.flickr.android:id/add_comment_post"
    comment_back_button_id = "com.flickr.android:id/fragment_header_back"

    # multiple
    comment_sliding_tabs_id = 'com.flickr.android:id/sliding_tab_title'

    comment_fave_list_id = "com.flickr.android:id/fragment_faves_list"
    comment_fave_list_xpath = \
        '//android.widget.ListView[@resource-id="' \
        + comment_fave_list_id \
        + '"]'

    # multiple
    comment_fave_relativelayout_xpath = \
        comment_fave_list_xpath + '/android.widget.RelativeLayout'

    # ---- system permissions -----
    permission_allow_button_id = \
        "com.android.permissioncontroller:id/permission_allow_button"
