# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @noordeep-p/lotide`

**Require it:**

`const _ = require('@noordeep-p/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `_.tail()`: Used to return a array with all elements in inputed array paramenter after the first element.
* `_.head()`: Used to return a array with first element in the inputed array parameter.
* `_.middle()`: Used to return a array with middle element(s) in the inputed array parameter.