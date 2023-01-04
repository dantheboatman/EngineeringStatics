#!/usr/bin/env python3
import fnmatch
import os
import shutil

images = ['*.pdf', '*.png', '*.jpg', '*.svg', '*.ggb']


def flatten(match_patterns, source, dest):
    print(f"\tFlattening {match_patterns} in {source} to {dest}.")

    def pattern_filter(path):
        for pattern in match_patterns:
            if fnmatch.fnmatch(path.lower(), pattern):
               return path

    # setup
    if os.path.exists(dest):
        shutil.rmtree(dest)
    os.makedirs(dest)

    # flatten source to dest
    for root, dirs, files in os.walk(source):
        for file in filter(pattern_filter, files):
            this_file = os.path.join(root, file)
            target = os.path.join(dest, file)
            if '/_' in root: continue  # Skip any files in directories starting with underscore.
            if os.path.exists(target):  # Warn if this filename has been seen before.
                print(f"\tWarning: Duplicate filename. \"{file}\" shadows a file with same name in source folder.")
            shutil.copy2(this_file, target)

def copy_and_overwrite(source, dest):
    print(f"\tCopying {source} to {dest}.")
    if os.path.exists(dest):
        shutil.rmtree(dest)
    shutil.copytree(source, dest)

print(f"\nmove_externals.py\n\tWorking dir: {os.getcwd()}")

flatten(images, 'resources', '../output/external/images')
copy_and_overwrite('resources/_Numbas', '../output/external/numbas')
copy_and_overwrite('resources/common/_favicon', '../output/external/favicon')
copy_and_overwrite('resources/_css', '../output/external/css')
copy_and_overwrite('resources/_code', '../output/external/code')
print()
