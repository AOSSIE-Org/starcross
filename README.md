# Starcross

* **Mobile** (Android and iOS) Native App build with React Native

## Core Structure

    code
      ├── src (Android, iOS)
      │   ├
      │   ├── src
      │   │   ├── components
      │   │   ├── redux
      │   │   ├── screens
      │   │   ├── utils
      │   │   ├── MainApp.js (entry point)
      │   │
      │   │
      │   └── package.json
      │
      ├── .gitignore
      └── README.md

## Setup and Running

* Clone repo `git clone git@gitlab.com:aossie/starcross.git`
* Switch to `starcross` directory `cd starcross`
* Run `npm install` or `yarn` to install the dependecies

## Running on IOS

* Run `npm run ios` for the default ios iPhone
* Run `npm run ios-min` for small ios device
* Run `npm run ios-mid` for iPhone 8 plus
* Run `npm run ios-max` for iPhone X
* Run `npm run ipad` for iPad Air

## Running on ANDROID

* Make Sure there is correct Java JDK path in android/gradle.properties
* Run `npm run android-min` for a smaller size android device
* Run `npm run android-max` for a bigger size android device
* Run `npm run build:android` for android build

## Reinstall node modules

* Run `npm run reinstall` to clean cache, delete the node modules and install again

## :no_entry_sign: Standard Compliant

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
This project adheres to Standard. Our CI enforces this, so we suggest you enable linting to keep your project compliant during development.

**To Lint on Commit**

This is implemented using [ghooks](https://github.com/gtramontina/ghooks). There is no additional setup needed.

**Bypass Lint**

If you have to bypass lint for a special commit that you will come back and clean (pushing something to a branch etc.) then you can bypass git hooks with adding `--no-verify` to your commit command.

**Understanding Linting Errors**

The linting rules are from JS Standard and React-Standard. [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).
