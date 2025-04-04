# Engineering Statics

This is the source repository for [*Engineering Statics*: Open and Interactive](https://engineeringstatics.org), a free, open-source, university-level OER textbook.  The book is produced using [PreText](https://pretextbook.org).

The online  version  is available at [https://engineeringstatics.org](https://engineeringstatics.org), and a pdf version at [https://engineeringstatics.org/pdf/statics.pdf](https://engineeringstatics.org/pdf/statics.pdf) for print or tablet use.

A [Google Group](https://groups.google.com/g/engineering-statics-oer-text) is available for discussion about the textbook.  Please 
direct any comments, suggestions or errors to this group, or directly to [William Haynes](mailto:whaynes@maritime.edu).  

If you would like to contribute content to the textbook, contact the project coordinator and lead author, [Dr. Dan Baker](mailto:dan.baker@colostate.edu).  We are particularly interested in adding more example problems to all chapters.  

## Authoring and deployment instructions
### Whitespace

This project uses [pretext-formatter](https://github.com/skiadas/ptx-formatter)  to maintain whitespace consistency in the PreTeXt source.  After making changes to any  .ptx files, issue the command command below from the  `statics/source/ptx` directory to normalize the whitespace and make changes easier to identify.  

`ptx-format -c statics-format.cfg -pr .`



This command will format all the ptx files found in the source directory, the  `-c` means use the specified config file to set the formatting options.  `-p` tells the script to make the changes in place, i.e. overwrite the PreTeXt files, and  the `-r` means recursive, i.e. format all ptx files in the directory.

### Asset management

The source for several assets may be found at `source/resources`. These output files must have unique names, and must be copied into the gitignored `assets`  where they can be seen by PreTeXt, using the `update_assets.py` script:

```bash
python scripts/update_assets.py
```

This process must be done once when the project is cloned from Git, and repeated
each time an asset in `source/resources` is updated.

### Building

To build HTML and PDF versions of the book using the CLI after managing assets
(see above):

```bash
pretext build web --clean
pretext build print --clean
```
To update the landing page,
1. `cd` to` /statics/source/jekyll` and edit
2. run `bundle exec jekyll build` to render the content into `/statics/site`.  

### Deploying

To preview how this book will appear upon a deploy to `engineeringstatics.org`:

```bash
rm -rf output/stage # to remove cached files
pretext deploy --stage-only
pretext view # open /output/stage in your browser
```

To deploy updates to `engineeringstatics.org`:

```bash
## after adding/commiting everything with Git
rm -rf output/stage # to remove cached files
pretext deploy
```

