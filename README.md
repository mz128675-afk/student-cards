# Student Cards

A small responsive page that displays student cards built from a JavaScript array.

## What it is

One array of students is turned into Bootstrap cards using `map()` — no card is
written by hand in the HTML. The page itself only holds an empty container;
JavaScript fills it in.

## Features

- Cards generated from a single JS array with `map()`
- Initials avatar generated from each student's name
- Responsive grid: 1 card per row on phones, 2 on tablets, 3 on desktops

## Tech used

- HTML, CSS, Bootstrap 5
- JavaScript: arrays, functions, `map()`, template literals

## How to run

Open `index.html` in any browser — no build step or server needed. To add a
student, add one object to the `students` array in `script.js`.
