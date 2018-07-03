# Contributing Guide

## Table of Contents

* [Ways to Contribute](#ways-to-contribute)
* [Quick Start](#quick-start)
* [Detailed Start](#detailed-start)
  * [Tech Requirements](#tech-requirements)
  * [Using Github](#using-github)
  * [Installing the Project](#installing-the-project)
  * [Making Your Changes](#making-your-changes)
* [Project Features](#project-features)
* [Project Details](#project-details)
  * [Entry Point](#entry-point)
  * [Base Configuration](#base-configuration)
  * [File Directories](#file-directories)
  * [Other Useful Files](#other-useful-files)
* [Read our Code of Conduct](CODE-OF-CONDUCT.md)
* [Return to README](README.md)

## Ways to Contribute

* [Submit an Issue](https://github.com/King-Mob/techno-syndicalism/issues)
  * Issues can be created in the form of bug reports or helpful suggestions
* Update our documentation
  * If you see anything missing from our [README](README.md) or [CONTRIBUTING](CONTRIBUTING.md) docs that should be included, feel free to add it
* Write more tests
  * [About testing with Jest](https://facebook.github.io/jest/)
  * [About testing with Enzyme](https://github.com/airbnb/enzyme)
* Write more stories to our UI Explorer
  * [About creating stories](https://storybook.js.org/)
* Fix bugs or build new features
  * Please identify what you would like to work on in Github Issues first (so as to prevent duplication of effort)
* Please use the app, and provide us feedback!

## Quick Start

* `git clone https://github.com/King-Mob/techno-syndicalism`
* `cd techno-syndicalism`
* `yarn install`
* `yarn start`

## Detailed Start

### Tech Requirements

* [Node](https://nodejs.org/en/download/)
* [yarn](https://yarnpkg.com/en/docs/install)
* A command line interface (such as [Git Bash](https://git-scm.com/downloads) for Windows)

### Using Github

* [Github Basics](https://guides.github.com/activities/hello-world/)
* [Understanding the Git Flow](https://guides.github.com/introduction/flow/)
* [Forking a Repository](https://guides.github.com/activities/forking/)
* [Making a Pull Request](https://yangsu.github.io/pull-request-tutorial/)

### Installing the Project

* Clone the Repository (see "Forking a Repository" above)
  * `git clone https://github.com/Wobbly-App/techno-syndicalism`
* Change into the directory with: `cd techno-syndicalism`
* Install the packages with: `yarn install`
* Run the project in Developer Mode with: `yarn start`

### Making Your Changes

* Use the project's [storybook](https://github.com/storybooks/storybook) to visually see the effect that your changes are making
  * To run: `yarn storybook`
* Ensure that your changes don't break any tests wRun the project's tests
  * To run: `yarn test`
* Ask questions on the project's [Issues](https://github.com/King-Mob/techno-syndicalism/issues) page if you run into any problems
* When you're ready, make a [Pull Request](https://yangsu.github.io/pull-request-tutorial) with your suggested changes

## Project Features

* Hot Module Replacement with [Webpack](https://webpack.js.org/concepts/hot-module-replacement/)
* Ability to explore the UI visually with [Storybook](https://github.com/storybooks/storybook)
* Automatic Code Linting with [ESLint](https://eslint.org/)
* Automatic Style Formatting with [Prettier](https://github.com/prettier/prettier)
* Absolute file paths from the `/src` directory

## Project Details

### Entry Point

Javascript execution begins with the `/src/index.js` file.

This file imports the React & ReactDOM libraries, imports the top-level data providers, and configures Hot Module Replacement (see [Webpack](https://webpack.js.org/concepts/hot-module-replacement/)).

The first developer-built component is `<App>`, located at `/src/App/index.jsx`. All other developer-built components should be children to this `<App>` component.

### Base Configuration

This project has been bootstrapped with Create React App, which comes with a number of features and configuration options out of the box.

Check out the [CRA User Guide](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md) to find out more.

### File Directories

### Note about File Paths

This project is configured to allow absolute file paths within the `src` folder.

So, instead of having to figure out where two files are in relation to each other (i.e., `../../../state/context/app`) when importing them, file paths can now be written from their absolute path from `src/` (i.e., `state/context/app`).

Relative file paths will still work normally.

#### `/src/App`

The first top-level, developer-built component called by the app.

#### `/src/assets`

Contains any non-Javascript, non-CSS files that should be processed by Webpack.

This includes images, fonts, and svg files.

#### `/src/components`

Contains the main app code. Most of the main development should occur within this directory.

It is currently sub-divided into an [Atomic-like](http://bradfrost.com/blog/post/atomic-web-design/) file structure.

* `/atoms/` for basic, reusable components
* `/molecules/` reusable combinations of atoms
* `/organisms/` for unique, distinct UI features
* `/screens/` for laying the above components into any given complete UI

#### `/src/state`

For managing app data.

Currently utilizes the [Context API](https://reactjs.org/docs/context.html).

#### `/src/util`

Contains useful functions & abstractions.

#### `/.storybook`

Contains the configuration files for [Storybook](https://storybook.js.org/).

Should only be updated when configuring new Storybook addons.

#### `/build`

Contains the [minified, bundled](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-build) version of the app.

Do not edit or check into `git`.

#### `/node_modules`

Do not edit or check into `git`.

#### `/public`

Includes asset files that should _not_ be processed by Webpack.

This directory should rarely be edited or added to.

#### `/.vscode`

[Personal workplace settings](https://code.visualstudio.com/docs/getstarted/settings) for the [Visual Studio Code](https://code.visualstudio.com/) editor.

If you wish to configure VS Code to use your own settings instead of the project's defaults, rename `settings.DEFAULT.json` to `settings.json` and include the changes here.

`settings.json` is already set to be ignored by `git`, so as to prevent personal settings from being pushed to the repository.

### Other Useful Files

#### `/theme.js`

Includes top-level CSS styling.

#### `/src/setupTests.js`

Required for Enzyme to work properly with React.

Can be updated to include anything that should run during test execution.

---

Read our [Code of Conduct](CODE-OF-CONDUCT.md).

Return to the [README](README.md).
