#!/bin/bash
f=$1
awk '{ gsub(/[A-Za-z0-9_\.\/-]*[0-9]+\.txt:[A-Za-z0-9_\.\/-]*/, /[0-9]+\.txt:/, $1) ; print $1}' "$f"
