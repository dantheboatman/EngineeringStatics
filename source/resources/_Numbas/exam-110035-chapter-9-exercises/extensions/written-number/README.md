# Written number

Provides a function `written_number` which converts numbers to words.

Based on [js-written-number]() by Pedro Tacla Yamada and others, used under the terms of the MIT license.

The following languages are supported:

| Language | code |
|---------|--------|
| English | `en` |
| US English | `en-us` |
| English (Indian) | `en-in` |
| Portuguese (Brazil) | `pt` |
| Portuguese (Portugal) | `pt-br` |
| Spanish | `es` |
| French | `fr` |
| Esperanto | `eo` |
| Vietnamese | `vi` |
| Arabic | `ar` |
| Azerbaijan | `az` |
| Turkish | `tr` |
| Ukrainian | `uk` |
| Indonesian | `id` |
| Russian | `ru` |

## Usage

### `written_number(n)`

Converts the given number to words, in the exam's preferred language (or English by default).

### `written_number(n,language_code)`

Converts the given number to words in the given language.