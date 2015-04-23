#!/bin/bash
# first parameter - input file with LONI output table
# second parameter - output file, preserving originl index
while read -r line; do
	if [[ "$line" =~ .*File ]];
		then
			line="${line##*:}";
		else
			line="${line##*-}";
			index="${line%%.*}";
			line="${line#*[[:space:]]}";
			line="$index $line"
	fi;
	echo $line;
done < "$1" >> "$2"