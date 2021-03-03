#!/bin/bash

if [ "$#" = "0" ]; then
    read -p "Please provide a .jar"
else
    FILE_TO_RUN="$1"
    java -jar ${FILE_TO_RUN} & echo $! > ./pid.file &
fi
