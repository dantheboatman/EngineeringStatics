#!/usr/bin/env python3
import fnmatch
import os
import shutil

match_patterns = ['*.pdf', '*.png', '*.jpg', '*.svg', '*.ggb']


def flatten(source, dest):
    print(f"Flattening {source} to {dest}.")

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
            shutil.copy(this_file, target)

def copy_and_overwrite(source, dest):
    print(f"Copying {source} to {dest}.")
    if os.path.exists(dest):
        shutil.rmtree(dest)
    shutil.copytree(source, dest)

print("working dir:", os.getcwd())

flatten('src/resources', 'build/external/images')
copy_and_overwrite('src/resources/_Numbas', 'build/external/numbas')
copy_and_overwrite('src/resources/common/_favicon', 'build/external/favicon')
copy_and_overwrite('src/resources/_css', 'build/external/css')
