#!/bin/bash
# first parameter - input file
# second parameter - output file
awk 'NR == 1 { gsub(/[A-Za-z0-9_\.\/-]*[0-9]+\.txt:[A-Za-z0-9_\.\/-]*/, "Case", $1); print}; NR%2==0 { gsub(/[A-Za-z0-9_\.\/-]*[0-9]+\.txt:[A-Za-z0-9_\.\/-]*/, NR/2, $1); print}' OFS="," "$1" > "$2"