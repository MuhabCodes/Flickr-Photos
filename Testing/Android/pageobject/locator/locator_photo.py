

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

    signup_imageview_accessibility_id = "Sign up for Flickr"

    # multiple
    signup_edittext_sub_xpath = '/android.widget.EditText'
    signup_edittext_xpath = \
        '//android.widget.ImageView'\
        + '/android.widget.EditText'

    signup_required_accessibility_id = "Required!"
    signup_invalid_email_accessibility_id = "please enter email correctly"
    signup_view_password_sub_xpath = "/android.widget.Button"
    signup_button_accessibility_id = "Sign up"

    signup_confirm_button_accessibility_id = "Resend email"
    signup_confirm_button_xpath = \
        '//android.widget.Button[@content-desc="'\
        + signup_confirm_button_accessibility_id\
        + '"]'
