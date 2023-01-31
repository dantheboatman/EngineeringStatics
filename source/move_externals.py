#!/usr/bin/env python3
import fnmatch
import os
import shutil
import sys

images = ['*.pdf', '*.png', '*.jpg', '*.svg', '*.ggb']
# these command line arguments are set by the makefile
resource_dir = sys.argv[1]  #(RESOURCES)
external_dir = sys.argv[2]  #(EXTERNAL)

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
                print(f"\n***Quitting: Duplicate filename***  \n \"{file}\" shadows a file with same name somewhere else in the source folder.\n\n")
                sys.exit()
            shutil.copy2(this_file, target)

def copy_and_overwrite(source, dest):
    print(f"\tCopying {source} to {dest}.")
    if os.path.exists(dest):
        shutil.rmtree(dest)
    shutil.copytree(source, dest)

print(f"\nmove_externals.py\n\tWorking dir: {os.getcwd()}")
print(f"\tResource Directory {resource_dir}")
print(f"\tExternal Directory: {external_dir}\n")

flatten(images, resource_dir, external_dir + '/images')
copy_and_overwrite(resource_dir + '/_Numbas', external_dir + '/numbas')
copy_and_overwrite(resource_dir + '/common/_favicon', external_dir + '/favicon')
copy_and_overwrite(resource_dir + '/_css', external_dir + '/css')
copy_and_overwrite(resource_dir + '/_code', external_dir + '/code')
print()
