# Memberclient Customization
(in developement)

This repo contains all files to customize and extend the memberclient. It should be pulled in to the src/extensions folder of the memberclient. The extensions folder should be added to your gitignore file (by default).

## branding
You can change the default colors or add more color schemes in the branding/color_schemes folder. You need to register additional schemes in the index.js file. You can generate and download your custom scheme file by enabling the "dev tools" on the settings page. The logos for the memberclient will be pulled in from branding/images/logos. Be aware that the file names matter.

![image](https://user-images.githubusercontent.com/44613132/55157729-6c29d500-515d-11e9-88cf-6b6287885dd2.png)


## i18n: Add or change language strings
In the i18n folder you could customize or add language strings. If you add strings with the same key they will overwrite the defaults that come with the memberclient.

## pages, components and menu
Put your custom pages and components in the representative folders. Add your menu items to components/menu

## routes: add custom routes
Use the routes.js file to add your own routes pointing to your custom pages.

## store
initialize your vuex stores and/or create persistant states (locale storage).




