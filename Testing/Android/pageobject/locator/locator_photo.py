

class Locator(object):
    """ Class containing all project locators."""
    ####################################################
    #                Getting started                   #
    ####################################################
    getting_started_accessibility_id = "Get started"

    ####################################################
    #                   Login page                     #
    ####################################################
    login_signup_accessibility_id = " Sign up here."
    login_email_xpath = '//android.widget.EditText[@index=2]'
    login_proceed_button_accessibility_id = "Next"
    login_password_xpath = '/android.widget.EditText[@index=4]'
    login_show_password_button_xpath = \
        login_password_xpath + '/android.widget.Button'
    login_login_button_accessibility_id = "Sign in"

    signup_imageview_accessibility_id = "Sign up for Flickr"

    # multiple
    signup_edittext_sub_xpath = '/android.widget.EditText'
    signup_edittext_xpath = \
        '//android.widget.ImageView'\
        + '/android.widget.EditText'

    signup_show_password_button_sub_xpath = '/android.widget.Button'

    signup_required_accessibility_id = "Required!"
    signup_invalid_email_accessibility_id = "please enter email correctly"
    signup_view_password_sub_xpath = "/android.widget.Button"
    signup_button_accessibility_id = "Sign up"

    signup_confirm_button_accessibility_id = "Resend email"
    signup_confirm_button_xpath = \
        '//android.widget.Button[@content-desc="'\
        + signup_confirm_button_accessibility_id\
        + '"]'
