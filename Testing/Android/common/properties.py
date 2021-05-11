

class PropertiesMiA1(object):
    """ Mobile properties and desired capabilities."""
    APP_PATH = "E:\\Downloads\\flickr-4-16-3.apk"
    APP_PACKAGE = "com.flickr.android"
    APP_WELCOME_ACTIVITY = "com.yahoo.mobile.client.android.flickr" \
                           ".activity.WelcomeActivity"

    desired_caps = {"platformName": "Android",
                    "deviceName": "820597aa0804",
                    "newCommandTimeout": "1000",
                    "simpleIsVisibleCheck": True,
                    "useJSONSource": True,
                    "appPackage": APP_PACKAGE,
                    "appWaitActivity": APP_WELCOME_ACTIVITY,
                    "app": APP_PATH
                    }
    WIDTH = 1080
    HEIGHT = 1920
