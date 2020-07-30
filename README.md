# Rechargd

This solution is tackling climate change by encouraging the uptake of electric vehicles.

## Author
Liam Mills - University of Sydney

## Contents

1. [Overview](#overview)
2. [Video](#video)
3. [The idea](#the-idea)
4. [How it works](#how-it-works)
5. [Diagrams](#diagrams)
6. [Documents](#documents)
7. [Technology](#technology)
8. [Getting started](#getting-started)
9. [Resources](#resources)
10. [License](#license)

## Overview

### What's the problem?

Kim to write

### How can technology help?

Kim to write

## Video

[![Rechargd: a proposed aid to climate change. Video edited and voiced by Connor Russell (University of Sydney).](./images/video-thumbnail.png)](https://youtube.com)
Rechargd: a proposed solution to aid in our battle against climate change. Video edited and voiced by Connor Russell (University of Sydney).

## The idea

Kim to write

## How it works

Kim to write

## Diagrams

![Rechargd architecture diagram](/images/architecture-diagram.png)

This solution is an all-in-one sharing platform, built on a React Native front-end and Node back-end, and integrating Google Maps, Auth0, Stripe and Twilio. It is hosted on the IBM Cloud.

1. The user launches the mobile app and can either list their station or rent out a station.
1. The user can either search their nearby vicinity, a specific location or en route to a location for charging stations. Furthermore, when listing stations they can be geocoded and reverse geocoded as needed.
1. The user can login securely, and trust that their details are in good hands.
1. The user can trust that their payment details are handled securely.
1. The user can message their renter easily in case of any issue, and can easily authenticate their account.

## Documents

Kim to write

## Technology

**IBM Cloud Services**
- [IBM Cloudant](https://www.ibm.com/au-en/cloud/cloudant)
- [IBM Cloud Foundry](https://www.ibm.com/au-en/cloud/cloud-foundry)

**Google Maps**
- [Google Maps API Key](https://console.cloud.google.com/google/maps-apis/start)
- [Google Maps Directions](https://developer.here.com/products/maps)
- [Google Routing Geocoding](https://developer.here.com/products/routing)

**Stripe Payments**
- [Stripe Connect (Express)](https://stripe.com/au/connect/express)
- [Stripe Radar](https://stripe.com/au/radar)

**Twilio**
- [Twilio Programmable Chat](https://www.twilio.com/chat)
- [Twilio Messaging](https://www.twilio.com/messaging)

**Auth0**
- [Auth0 Universal Login](https://auth0.com/universal-login/)

## Getting started

Use the following steps to get Rechargd up and running.

### Prerequisite

- Install and configure [Expo](https://docs.expo.io/get-started/installation/)
- Install [React Native CLI dependencies](https://reactnative.dev/docs/getting-started.html).
    - [Node.js](https://nodejs.org/en/)
    - [Watchman](https://facebook.github.io/watchman/docs/install)
    - **iOS only**
        - [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
        - [CocoaPods](https://guides.cocoapods.org/using/getting-started.html)
    - **Android only**
        - [Java Development Kit](https://www.oracle.com/java/technologies/javase-jdk8-downloads.html)
        - [Android Studio](https://developer.android.com/studio/index.html) - add Android 9 (Pie) SDK & configure `ANDROID_HOME`
        - [Create an Android Virtual Device (AVD)](https://developer.android.com/studio/run/managing-avds.html) - with Pie image (API Level 28)
- Clone the [repository](https://github.com/Call-for-Code/Solution-Starter-Kit-Disasters-2020).

### Run the mobile application on Expo

To run the mobile application (using the Xcode iOS Simulator or Android Studio Emulator):

1. From a terminal:
    1. Go to the root directory.
    1. Install the dependencies: `npm install`.
    1. **iOS only**: Go to the `ios` directory: `cd ios`.
    1. **iOS only**: Install pod dependencies: `pod install`.
    1. **iOS only**: Return to the `mobile-app` directory: `cd ../`.
    1. Launch the app in the simulator/emulator:
        - **iOS only**: `npm run ios`
            > **Note**: You should be running at least iOS 13.0. The first time you launch the simulator, you should ensure that you set a Location in the Features menu.
        - **Android only**: `npm run android`
            > **Note**: Your Android Studio needs to have the `Android 9 (Pie)` SDK and a `Pie API Level 28` virtual device.

## Resources

- [React Native](https://reactnative.dev/)
- [Node.js](https://nodejs.org/en/docs/)
- [IBM Cloud](https://www.ibm.com/cloud)
- [Google Maps](https://developers.google.com/maps/documentation/javascript/overview)
- [Stripe](https://developer.here.com/documentation)
- [Twilio](https://reactnative.dev/)
- [Auth0](https://reactnative.dev/)

## License

This solution starter is made available under the [Apache 2 License](LICENSE).
