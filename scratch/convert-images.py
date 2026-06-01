import os
import re
from PIL import Image

ROOT_DIR = "/Users/shahidshamir/Downloads/salon-new-main"
PUBLIC_DIR = os.path.join(ROOT_DIR, "public")
SRC_DIR = os.path.join(ROOT_DIR, "src")

# 1. Scan and convert all PNG files to WebP using Pillow
def convert_images():
    converted_files = []
    
    for dirpath, _, filenames in os.walk(PUBLIC_DIR):
        for filename in filenames:
            if filename.lower().endswith(".png"):
                input_path = os.path.join(dirpath, filename)
                output_filename = filename[:-4] + ".webp"
                output_path = os.path.join(dirpath, output_filename)
                
                # Check path name to decide on lossy vs lossless WebP
                # Photographic elements (images folder directly) use lossy
                # Logos, icons, tools use lossless to preserve absolute pixel-sharpness & alpha channel integrity
                is_lossy = False
                relative_dir = os.path.relpath(dirpath, PUBLIC_DIR)
                
                if relative_dir == "images":
                    # Directly under public/images are photographic pillars and founder images
                    is_lossy = True
                
                print(f"Converting {'(Lossy)' if is_lossy else '(Lossless)'} via PIL: {filename} -> {output_filename}")
                try:
                    with Image.open(input_path) as im:
                        if is_lossy:
                            im.save(output_path, "WEBP", quality=85)
                        else:
                            im.save(output_path, "WEBP", lossless=True)
                    converted_files.append((input_path, output_path))
                except Exception as e:
                    print(f"ERROR converting {input_path}: {e}")
                    
    return converted_files

# 2. Search and replace code-wide references from .png to .webp
def replace_references():
    ref_count = 0
    # Include all ts, tsx, css, and layout files
    extensions = (".ts", ".tsx", ".css", ".js", ".jsx")
    
    for dirpath, _, filenames in os.walk(SRC_DIR):
        for filename in filenames:
            if filename.endswith(extensions):
                filepath = os.path.join(dirpath, filename)
                
                with open(filepath, "r", encoding="utf-8") as f:
                    content = f.read()
                
                new_content = content
                # Find any remaining .png strings in quotes or paths
                # We want to match all possible files ending with .png
                matches = re.findall(r'[\w\-_\/]+\.png', content)
                
                if matches:
                    for match in set(matches):
                        new_match = match.replace(".png", ".webp")
                        new_content = new_content.replace(match, new_match)
                        print(f"Refactoring reference in {filename}: {match} -> {new_match}")
                        ref_count += 1
                
                if new_content != content:
                    with open(filepath, "w", encoding="utf-8") as f:
                        f.write(new_content)
                        
    return ref_count

if __name__ == "__main__":
    print("=== STARTING BATCH WEBP PIL TRANSITION & CODE REFACTORING ===")
    conversions = convert_images()
    print(f"\nSuccessfully converted {len(conversions)} files using Pillow.")
    
    print("\n=== STARTING CODEBASE REFERENCE REFACTORING ===")
    refs = replace_references()
    print(f"\nRefactored {refs} matching references across the codebase.")
    
    # 3. Clean up the original PNG files
    print("\n=== CLEANING UP LEGACY PNG FILES ===")
    for png_path, _ in conversions:
        print(f"Removing legacy file: {png_path}")
        try:
            os.remove(png_path)
        except Exception as e:
            print(f"Failed to remove {png_path}: {e}")
        
    print("\n=== BATCH PIL TRANSITION COMPLETE SUCCESSFULLY ===")
