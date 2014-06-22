# Vellum

### Default Sass styles and variables for a mobile-first site build using [Spline](http://github.com/mobify/spline).

Vellum is built to get [Mobify](http://www.mobify.com) Adaptive.js projects off the ground quickly. It provides variable definitions, base typographic and form styles, and mobile-first defaults. It’s based on our mixin library, [Spline](https://www.github.com/mobify/spline) and relies on [Autoprefixer](https://github.com/ai/autoprefixer) for prefixing.

Vellum is made to be as unopinionated as possible while still providing a bunch of sane defaults you can use for your projects. Install it in your Sass directory and bend it to your whim. Feel free to change anything and everything to match your project’s needs. 

## Requirements

* Sass 3.3.0+
* Spline 0.3.0+
* Autoprefixer 1.3.1+

## Installation

We don’t provide Vellum through a package manager because it’s made to be edited.

1. Install [Spline](https://www.github.com/mobify/spline).

    ```bower install spline``` 
2. Clone this repository and copy everything in the `dist` folder into your Sass folder.
3. Install some form of [Autoprefixer](https://github.com/ai/autoprefixer). We use Grunt so we recommend [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer).
4. Import Vellum after Normalize and Spline in your main `scss` file. Any additional stylesheets should be included after Vellum.

    ```
    @import "bower_components/modularized-normalize-scss/normalize";
    @import "bower_components/spline/dist/spline";
    @import "vellum";
    ``` 

## Using Vellum

### Folder
`/vellum/`

You should treat the Vellum folder as your global defaults folder for your project. Edit, update, add, or remove code from the existing files and/or add new ones to the directory.

### Main File
`_vellum.scss`

This is the main import file. It explains each of the different files being imported as well as gives you a place to add more files.

### Variables
`_variables.scss`

The variables file is where we set the majority of default values used throughout Vellum and your project. Follow these rules to get a better understanding of how the variable section is structured.

Variables are formatted using the following rules:
* Names must be lowercase and dash-separated (kebab-case).
* Names should represent properties or applications as closely as possible.
* Modifiers, qualifiers, or applications should be prepended to the variable name. e.g. `$form-family` (bad) vs. `$form-font-family` (better)
* Variables without a qualifier are considered “base” variables, i.e. the default value for that type, e.g. `$font-size`, `$brand-color`, `$grey-50`.
* Variables with qualifiers at the beginning are considered “variations” on a base variable, e.g. `$small-font-size`, `$light-brand-color`.
* Some variables use a predefined, loose scale: `$grey-10`, `-20`, `-30`, etc. These should be defined in multiples of 10, with actual values only approximate. This provides room to adjust values without changing variable names, but allows users to more precisely gauge the variable by name. Additional variables can be inserted between values with a variation prefix such as `$light-grey-10`.

#### Typography
Standard font families and typographic settings are set in this section.

#### Colours
A variety of default color variables are provided here. You'll probably want to change these to match your project's brand.

#### Gradients
Variables containing all of the gradients used in the site.
e.g. `background-image: $light-grey-gradient;`

To reverse a gradient, you can use the Spline function `reverse-gradient()`
e.g. `background-image: reverse-gradient($grey-gradient);`

#### Appearance
Any variable pertaining to default appearance should be declared here. We basically only set default `border-radius` in this section.

#### Layout
We define default horizontal spacing (`$h-space`) and vertical spacing (`$v-space`) in this section.

If you use a vertical rhythm, feel free to add variables for it here.

#### Z-Index
Organizes z-index usage by providing a set of named layers. Values can be incremented/decremented slightly as necessary. eg. `$stage-layer + 1`;
1. “backdrop” should be used for purposefully placing an item behind a staged item. Likely a background for an element.
2. "stage" should be your first choice for moving an item in front of others. Likely an icon or an interface element.
3. "orchestra" should be used to explicitly place content in front of the stage. Likely a modal shield.
4. "frontrow" is your last resort for moving content forward. Likely a modal dialog.

#### Shorthand Variables
This is a place to collect quick ways to write certain properties that you re-use often. We basically just declare a default `$border` here.

## Special Thanks

Vellum was built with a whole lot of care by [Jeff Kamo](http://www.twitter.com/jeffkamo), [Kyle Peatt](http://twitter.com/kpeatt), and [Ryan Frederick](http://twitter.com/ry5n). It is maintained and funded on [Mobify](http://www.mobify.com)'s dime. If you've got things you'd like to see added or removed, submit a PR or tweet at us.

## License

*MIT License. Vellum is Copyright © 2014 Mobify. It is free software and may be redistributed under the terms specified in the LICENSE file.*