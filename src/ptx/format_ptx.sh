#!/bin/bash

for x in *.ptx
 do
   echo $x
   xmllint --format -o $x $x
 done