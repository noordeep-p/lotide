const assertEqual = require('./../assertEqual');
const head = require('./../head');

assertEqual(head([1]), 1);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");