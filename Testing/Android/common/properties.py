

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
    APP_PATH_2 = "E:\\College\\SPRING 2021\\CMPN203\\project" \
                 "\\Flickr-Photos\\Flickr-Photos\\Testing" \
                 "\\Android\\android_app\\app-release.apk"
    desired_caps_2 = {"platformName": "Android",
                      "deviceName": "192.168.1.6:5555",
                      "newCommandTimeout": "1000",
                      "simpleIsVisibleCheck": True,
                      "useJSONSource": True,
                      "app": APP_PATH_2
                      }
    WIDTH = 1080
    HEIGHT = 1920


class PropertiesNox(object):
    APP_PATH = "E:\\Downloads\\flickr-4-16-3.apk"
    APP_PACKAGE = "com.flickr.android"
    APP_WELCOME_ACTIVITY = "com.yahoo.mobile.client.android.flickr" \
                           ".activity.WelcomeActivity"
    desired_caps = {"platformName": "Android",
                    "deviceName": "127.0.0.1:62001",
                    "newCommandTimeout": "1000",
                    "simpleIsVisibleCheck": True,
                    "useJSONSource": True,
                    "appPackage": APP_PACKAGE,
                    "appWaitActivity": APP_WELCOME_ACTIVITY,
                    "app": APP_PATH
                    }
