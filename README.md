# Rechargd

Your car: Rechargd, anywhere, anytime.

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

Climate change is the defining problem of our time. Transportation plays a major role in this problem, as the leading cause of rising greenhouse gas levels globally. While electric vehicles have been introduced as a greener transportation option to reduce carbon emissions, their uptake is very slow, due to barriers to recharging and limited driving range. There are not enough publicly available charging stations, and installing a home recharging station is too costly, making it very difficult for drivers to recharge their EV. Even those who install their own home charger are still limited to round trips from their house since they are unable to conveniently locate and use publicly available charging stations. In a recent survey conducted by ClimateWorks Australia, 43% of respondents would not consider buying an EV due to concerns about limited availability of charging infrastructure, high financial costs and range anxiety. 

### How can technology help?

Technology can help make the process of recharging an EV much more convenient, efficient and easy for drivers, which will incentivise greater uptake of EVs to effectively combat climate change. For instance, technology can help drivers locate nearby available and compatible charging stations, compare different stations based on costs and speed of charge and book a charging station to recharge their car, anywhere, anytime. Technology can also be used to increase the supply of charging stations, which will directly solve the issue of limited availability of charging infrastructure. At the moment, drivers can only access publicly available and corporate-owned charging stations, however, technology will enable drivers to connect to private household providers of charging stations. 

## Video

[![Rechargd: a proposed aid to climate change. Video edited and voiced by Connor Russell (University of Sydney).](./images/video-thumbnail.png)](https://youtube.com)
Video edited and voiced by Connor Russell (University of Sydney).

## The idea

The idea of Rechargd was born to ease the difficulties associated with recharging an EV. Rechargd is a convenient EV recharging solution which aims to increase the uptake of EVs to effectively combat climate change. This sharing platform connects household owners of charging stations to EV drivers wishing to recharge their car. Our sharing platform allows people to monetise their extra time or physical assets while consumers get cheaper and more available services through increased supply. Owners of charging stations can register their house as a recharging station on the Rechargd app, profit from and maximise their returns on their pre-existing asset; their home charging station. The income stream from charger rental services will offset the costs of owning an EV and installing a charging station, which incentivises greater EV uptake. The supply of charging stations will rise rapidly, increasing the availability and ease in accessing a charging station for all EV drivers. 

## How it works

The goal of the application is to provide a convenient EV recharging solution for all EV drivers, while enabling charging station owners to register on the app and earn a profit by renting out their charging station to other EV drivers.
 
A user has the option of registering as a “driver” or “provider” or as both. The user can choose to login as a driver or provider, and can easily switch between their two accounts at any time. 
 
As a driver, the user would be able to locate available nearby charging stations on the app’s live interactive map. When the driver clicks on their preferred station, they can see more details about the station (including a rating out of 5 stars), and can make a booking to charge their car at designated times. The driver will receive a reminder when it approaches the time they have booked. After recharging their car, the driver will have the option of rating the station provider out of 5 stars, and provide a short review of their charging experience.
 
As a provider, the user can list their charging station, including the availability times. After listing their station, other users will be able to locate their station on the app’s live interactive map, and make a booking during the available times. Providers can also manage their bookings on the app. Drivers and providers can message each other, enabling drivers to ask questions (such as about speed of charge, location etc.) prior to, during and after the charge. 
 
Payment will be made via the app. 

## Diagrams

![Rechargd architecture diagram](/images/architecture-diagram.png)

This solution is an all-in-one sharing platform, built on a React Native front-end and Node back-end, and integrating Google Maps, Auth0, Stripe and Twilio. It is hosted on the IBM Cloud.

1. The user launches the mobile app and can either list their station or rent out a station.
1. The user can either search their nearby vicinity, a specific location or en route to a location for charging stations. Furthermore, when listing stations they can be geocoded and reverse geocoded as needed.
1. The user can login securely, and trust that their details are in good hands.
1. The user can trust that their payment details are handled securely.
1. The user can message their renter easily in case of any issue, and can easily authenticate their account.

## Documents

- [ClimateWorks Australia “The State of Electric Vehicles in Australia” report](https://www.climateworksaustralia.org/wp-content/uploads/2018/06/climateworks_australia_state_of_electric_vehicles2_june_2018.pdf)
- [The Guardian “Electric cars produce less CO2 than petrol vehicles, study confirms” article](https://www.theguardian.com/environment/2020/mar/23/electric-cars-produce-less-co2-than-petrol-vehicles-study-confirms)
- [The Driven - “Norway horrified as new rates make ev charging prices higher than petrol” article](https://thedriven.io/2020/01/20/norway-horrified-as-new-rates-make-ev-charging-prices-higher-than-petrol/)

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

From a terminal:
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
