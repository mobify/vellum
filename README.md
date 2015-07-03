# Vellum

**Default Sass styles and variables for a mobile-first site build using [Spline](http://github.com/mobify/spline).**

### Efficient

Vellum is written to help designers and developers of mobile-first projects get started quickly by defining a set of variables, typographic hierarchy, and default styles.

### Customizable

This is just the beginning. Vellum is made to be customized for your project. Think of Vellum like tracing paper: it gets you started but the lines are all your own.

### Extensible

Vellum comes with an easy to comprehend variable naming system so you can easily extend it with new elements and new styles. Think you’ve added something every project needs? Commit it back into the project.

## The Idea

Vellum is built to get [Mobify](http://www.mobify.com) Adaptive.js projects off the ground quickly. It provides variable definitions, base typographic and form styles, and mobile-first defaults. It’s based on our mixin library, [Spline](https://www.github.com/mobify/spline) and relies on [Autoprefixer](https://github.com/ai/autoprefixer) for prefixing.

Vellum is made to be as unopinionated as possible while still providing a bunch of sane defaults you can use for your projects. Install it in your Sass directory and bend it to your whim. Feel free to change anything and everything to match your project’s needs.

## Requirements

* [Sass](http://sass-lang.com/)
* [Spline](http://github.com/mobify/spline)
* [Autoprefixer](https://github.com/postcss/autoprefixer)

## Installation

We don’t provide Vellum through a package manager because it’s made to be edited.

1. Install [Spline](https://www.github.com/mobify/spline).

    ```bower install spline```

2. Clone this repository and copy everything in the `dist` folder into your Sass folder.
3. Install some form of [Autoprefixer](https://github.com/ai/autoprefixer). We use Grunt so we recommend [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer).
4. As the first thing in your main `scss` file, import Vellum’s variables. Then, after Spline and Normalize, import Vellum’s base styles. Any additional stylesheets should be included after base styles.

    ```
    @import "variables"; // Import variables first
    @import "bower_components/spline/dist/spline";
    @import "bower_components/modularized-normalize-scss/normalize";
    @import "base"; // Import base styles after Sass libraries and normalize
    ```

## Using Vellum

### Folder
`/base/`

You should treat Vellum’s `base` folder as your project base styles – that is, global styles for built-in HTML elements. Edit, update, add, or remove code from the existing files and/or add new ones to the directory.

### Main File
`_base.scss`

This is the main import file. It explains each of the different files being imported as well as gives you a place to add more files.

### Variables
`_variables.scss`

The variables file is where we set the majority of default values used throughout Vellum and your project. Follow these rules to get a better understanding of how the variable section is structured.

Variables are formatted using the following rules:
 - Names should be lowercase and dash-separated;
 - Qualifiers should be added to the beginning of related variables: use
   `$small-font-size`, not `$font-size-small`;
 - Numeric scales should use increments of 10; these numbers are arbitrary and
   should not map to actual values. If really necessary, additional values can
  be added in between, e.g. $neutral-15 between 10 and 20.

### Layout
Core values for maintaining consistent sizing, spacing and layout throughout a project. We define `$unit` as the basic unit for sizing and alignment, and `$tap-size` as the minimum tap-target size, useful for sizing actionable elements.

If you prefer several distinct variables for spacing, such as `$v-space` or `$h-space`, add these here. In general these should be derived from `$unit`.

#### Typography
Standard font families and typographic settings are set in this section.

#### Colour Palette
Set up the set of core colours for your project here.

#### Gradients
Variables containing frequently-used gradients.
e.g. `background-image: $light-grey-gradient;`

To reverse a gradient, you can use the Spline function `reverse-gradient()`
e.g. `background-image: reverse-gradient($grey-gradient);`

#### Appearance
Any variable pertaining to default appearance should be declared here, including default colors for text, border styles and input/form styles.

#### Z-Index
Organizes z-index usage by providing a set of named layers. Values can be incremented/decremented slightly as necessary. eg. `$stage-layer + 1`;

1. `$backdrop-layer` should be used for purposefully placing an item behind a staged item. Likely an element that is used as a background.
2. `$stage-layer` should be your first choice for moving an item in front of others. Likely an icon or an interface element.
3. `$orchestra-layer` should be used to explicitly place content in front of the stage. Likely a modal shield.
4. `$frontrow-layer` is your last resort for moving content forward. Likely a modal dialog.

#### Shorthand Variables
This is a place to collect quick ways to write certain properties that you re-use often.

## The Mobify CSS Triforce ![Triforce](http://img4.wikia.nocookie.net/__cb20091113050618/zelda/images/1/1a/Obtained_Triforce_Piece.gif)

Vellum is part of the _Mobify CSS Triforce_: a collection of three UI Development projects built for making mobile e-commerce builds easier.

- [**Spline**](http://github.com/mobify/spline): A mobile-first mixin and function library for Sass.
- **Vellum**: A set of default styles for mobile-first builds.
- [**Stencil**](http://github.com/mobify/stencil): A library of common UI patterns for mobile e-commerce builds.

## Special Thanks

Vellum was built with a whole lot of care by [Mobify](http://www.mobify.com). If you’ve got things you’d like to see added or removed, please submit an issue or PR on GitHub.

We also owe a lot of thanks to [Thoughtbot’s bitters](http://www.github.com/thoughtbot/bitters) which Vellum was inspired by and draws a lot of its work from.

## License

*MIT License. Vellum is Copyright © 2014 Mobify. It is free software and may be redistributed under the terms specified in the LICENSE file.*
