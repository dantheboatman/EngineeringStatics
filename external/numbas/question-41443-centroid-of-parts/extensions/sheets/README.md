# Numbas spreadsheets extension

## About

This extension adds a data type, `spreadsheet`, representing a 2D grid of text cells with styling information, similar to a spreadsheet in a program such as Microsoft Excel.

In the Numbas question editor, this extension adds a "Spreadsheet" variable template type which allows you to load a spreadsheet from an uploaded `.xlsx` file.

Internally, [SheetJS](https://sheetjs.com/) is used to interpret spreadsheet files. Any format understood by SheetJS can be used, but style information is only loaded from `.xlsx` files.

When inserted into content areas, `spreadsheet` values are rendered as non-editable grids.

This extension adds a "Spreadsheet" answer input method for custom part types. The "expected answer" and "initial sheet" settings should be `spreadsheet` values with the same dimensions.

The file `spreadsheet.npt` defines a "Spreadsheet" custom part type which asks the student to enter values into a given spreadsheet and compares entries against a completed spreadsheet given by the question author.

## What it doesn't do

* Number formats such as currency, percentage, time

## JME functions

### `spreadsheet(cells)`

Construct a spreadsheet object from a 2D array of cell contents.

**Example:** `spreadsheet([["Name","Points"], ["Alice", 1], ["Harrison", 5]])`

### `spreadsheet_from_base64_file(filename, data)`

Construct a spreadsheet from a `.xlsx` file whose contents have been encoded in base64. 
This function is used by the "spreadsheet" variable template type; it's unlikely you'll ever use it in any other context.

### `update_range(spreadsheet, range, changes)`

Update the cells in the given range, following the settings in the dictionary `changes`.
The `changes` dictionary can be constructed using the styling functions below.

**Example:** `update_range(sheet, "B2:D2", border("bottom","thick"))`

### `disable_cells(spreadsheet, ranges)`

Disable cells in the given ranges, so they can't be edited by the student.

**Example:** `disable_cells(sheet, ["A1", "C2", "B3:D5"])`

### `fill_range(spreadsheet, range, contents)`

Fill in the text contents of the cells in the given range with the values from the 2D array `contents`.

If the range is a single cell or all the cells are in a single row or column, `contents` can be a sim[ple list.

**Examples:** 

* `fill_range(sheet, "A1:D2", [["a","b","c","d"],[1,2,3,4]])`
* `fill_range(sheet, "A1:C1", ["a", "b", "c"])`

### `parse_range(range)`

Interpret a string representing a range, and return a list of the addresses of the cells it contains.

**Example:** `parse_range("A1:B3")` → `[ "A1", "B1", "A2", "B2", "A3", "B3" ]`

### `slice(spreadsheet,range)`

Make a copy of the given spreadsheet, containing only the cells in the given range.

**Example:** `slice(sheet, "B2:D5")`

### `spreadsheet[range]`

Return the contents of the cells in the given range, or the contents of the cell at the given address.
The contents are always returned as strings.
The empty string is used for empty cells.

**Examples:**

* `sheet["A1:B3"]` → `[["a","b"],["1","2"],["","3"]]`
* `sheet["A1"]` → `"a"`

### `encode_range(start_column, start_row, end_column, end_row)`

Given the numerical indices of the top-left and bottom-right corners of a range, return a string representing that range.
The rows and columns are both numbered starting from 0.

**Example:** `encode_range(0,0,3,2)` → `"A1:D3"`

### Cell styling functions

The following functions can be used with the `update_range` function to change the appearance of cells in a spreadsheet.

These functions can be chained together using the `|>` pipe operator.
For example: `font_style("bold") |> fill("lightgreen")`

Functions that specify a colour can take any valid [CSS color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).

You can easily cause accessibility problems when using colour. Try not to use colour as the sole means of conveying information, or to use colour combinations that can't be easily distinguished by colourblind people.

#### `border(sides, styles)`

Set cell border styles.

`sides` is a space-separated string giving the sides to style. The sides are named `"top"`, `"left"`, `"bottom"` and`"right"`.

`styles` is a space-separated string giving the style information, in the format `thickness color`. `thickness` is one of `thin`, `medium` or `thick`.

**Example:** `border("top bottom", "thin blue")`

#### `font_style(styles)`

Style the text content of cells.

`styles` is a space-separated list of style names. The understood styles are `bold`, `italic` and `underline`.

**Example:** `font_style("bold underline")`

#### `font_size(size)`

Set the size of text in cells, as a multiple of the default size.

A size smaller than `1` can cause accessibility problems by making text hard to read; try to only make text the default size or bigger.

**Example:** `font_size(1.2)`

#### `font_color(color)`

Set the color of text in cells.

**Example:** `font_color("blue")`

#### `bg_color(color)`

Set the background colour of cells.

**Example:** `bg_color("black")`

#### `horizontal_alignment(alignment)`

Set the horizontal alignment of text inside cells.

Any value accepted by [the CSS `text-align` property](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align) is understood.

**Example:** `horizontal_alignment("center")`

#### `vertical_alignment(alignment)`

Set the vertical alignment of text inside cells.

Any value accepted by [the CSS `vertical-align` property](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align) is understood.

**Example:** `vertical_alignment("middle")`

#### `cell_type(type)`

Set the type of cells. Among other things, this determines which keyboard mode is displayed for touch-screen users.

`type` can be `"text"` or `"number"`.

**Example:** `cell_type("number")`