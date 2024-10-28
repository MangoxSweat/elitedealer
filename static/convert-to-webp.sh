#!/bin/zsh

# Prevent zsh from throwing an error if no files match
setopt NULL_GLOB

# Loop through all PNG, JPEG, and JPG files in the directory
for file in *.(png|jpeg|jpg); do
  # Check if the file exists to avoid errors
  if [ -f "$file" ]; then
    # Get the filename without the extension
    filename="${file%.*}"
    
    # Convert the image to .webp format with a quality setting of 80
    cwebp -q 80 "$file" -o "${filename}.webp"
    
    # Optionally, print a message for each converted file
    echo "Converted $file to ${filename}.webp"
  fi
done
