#!/usr/bin/env python3
import fnmatch
import os
import shutil

match_patterns = ['*.pdf', '*.png', '*.jpg', '*.svg', '*.ggb', '.ico']


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

    # flatten source directories
    for root, dirs, files in os.walk(source):
        for file in filter(pattern_filter, files):
            a_file = os.path.join(root, file)
            target = os.path.join(dest, file)
            if os.path.exists(target):
                print(f"\tWarning: Duplicate filename. \"{file}\" shadows a file with same name in source folder.")
            shutil.copy(a_file, target)


def copy_and_overwrite(source, dest):
    print(f"Copying {source} to {dest}.")
    if os.path.exists(dest):
        shutil.rmtree(dest)
    shutil.copytree(source, dest)


print("working dir:", os.getcwd())

flatten('resources', '../build/external/images')
copy_and_overwrite('numbas', '../build/external/numbas')
copy_and_overwrite('resources/common/favicon', '../build/external/favicon')
