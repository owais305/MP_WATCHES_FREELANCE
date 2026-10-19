import os
from PIL import Image

base_dir = r"c:\abdulrehman\E COMMERCE STORE WATCH\PROJECT\assets\images\brands"

for root, dirs, files in os.walk(base_dir):
    for filename in files:
        if filename.lower().endswith(('.jpeg', '.jpg', '.png')):
            file_path = os.path.join(root, filename)
            try:
                with Image.open(file_path) as img:
                    width, height = img.size
                    
                    # For phone screenshots, the watch is usually in the middle section.
                    # We'll take a square from the center.
                    size = min(width, height)
                    
                    # Offset for phone screenshots (Shift crop slightly up if height > width)
                    # Because watches are usually in the upper half of an IG post screenshot
                    top_offset = 0
                    if height > width:
                        top_offset = (height - width) // 4 # Adjust as needed
                    
                    left = (width - size) // 2
                    top = (height - size) // 2 - top_offset
                    right = (width + size) // 2
                    bottom = (height + size) // 2 - top_offset
                    
                    # Clamp to image boundaries
                    top = max(0, top)
                    bottom = min(height, bottom)
                    
                    img_cropped = img.crop((left, top, right, bottom))
                    img_cropped.save(file_path) # Overwrite with cropped version
                    print(f"Cropped {file_path}")
            except Exception as e:
                print(f"Error cropping {filename}: {e}")

print("Cropping complete.")
