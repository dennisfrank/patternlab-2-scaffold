# Pattern Lab 2 Scaffold

**[Pattern Lab Node](https://github.com/pattern-lab/patternlab-node) + custom StarterKit and [inuitcss](https://github.com/inuitcss).**

Before you go on, make sure you've [made yourself familiar with Pattern Lab](http://patternlab.io). And check out [inuitcss](https://github.com/inuitcss) for (S)CSS.

------

## Requirements

- [Node.js](http://nodejs.org/) (version 4 or higher)
- [grunt.js](http://gruntjs.com/)
- [Bower](http://bower.io/)
- [Git](http://git-scm.com/)

## Prerequisites

This project uses [Node](https://nodejs.org) for core processing, [npm](https://www.npmjs.com/) and [Bower](http://bower.io/) to manage project dependencies, and [grunt.js](http://gruntjs.com/) to run tasks and interface with the core library. Node version 4 or higher suffices. You can follow the directions for [installing Node](https://nodejs.org/en/download/) on the Node website if you haven't done so already. Installation of Node will include npm.

It's also highly recommended that you [install grunt](http://gruntjs.com/getting-started) globally.

## Updating Pattern Lab

To update Pattern Lab please refer to each component's GitHub repository, and the [master instructions for core](https://github.com/pattern-lab/patternlab-node/wiki/Upgrading). The components are listed at the top of the README.

## Setup

1\. Install NPM dependencies

```
$ npm install
```

2\. Install Bower packages

```
$ bower install
```

Now you are ready to run Pattern Lab Node via Grunt and other Grunt tasks.

The Grunt wrapper around [Pattern Lab Node Core](https://github.com/pattern-lab/patternlab-node), providing tasks to interact with the core library and move supporting frontend assets.

## Getting started

### Quick start

Run `grunt serve` from the command line and work in `source/` **only**. Open [http://localhost:8000](http://localhost:8000) in your browser to see the current state of the project.

### Helpful Commands

These are some helpful commands you can use on the command line.

#### Default task

    grunt

Generate a fresh Pattern Lab in `public/` and compile, copy and optimize assets from `source/` (scss/css, js, fonts, images, icons) to `public/`.

#### Start local server and watch for changes

    grunt serve    

Run default grunt task but also start BrowserSync (should open [http://localhost:8000](http://localhost:8000) in your browser) and watch for file changes.

#### Generate optimized assets

    grunt dist

Run default grunt task but also copy and optimize assets (concat and minimize js scripts) to `dist/` while excluding Pattern Lab and content files. The assets in `dist/` are meant for further use (e.g. in a CMS).

#### Sass Linting

    grunt lint

Lint your SCSS files according to [stylelint](http://stylelint.io/).

#### Export optimized Pattern Lab project

    grunt export

Run default and `dist` grunt tasks and copy Pattern Lab, content files and optimized assets from `dist/` to `export/`.

#### Export assets to CMS

    grunt cms

Run `dist` grunt task and sync assets from `dist/` to the CMS assets directory as defined in Gruntfile.js (`globalConfig.cms.assets`)

#### Deploy

    grunt deploy

Run default grunt task and deploy `public/` to a staging server as defined in Gruntfile.js (`globalConfig.stage.host` and `globalConfig.stage.dest`)


#### Deploy Export

    grunt deploy:export

Run `export` grunt task and deploy optimized `export/` to a staging server as defined in Gruntfile.js (`globalConfig.stage.host` and `globalConfig.stage.dest`)

