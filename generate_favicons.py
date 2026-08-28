#!/usr/bin/env python3
"""
Generate favicon assets from the existing favicon.ico
"""
from PIL import Image
import os

def generate_favicons():
    # Source favicon (should be 256x256 or larger)
    source_path = "/home/antonypeter/Projects/simplyfemininenetwork/public/favicon.ico"
    public_dir = "/home/antonypeter/Projects/simplyfemininenetwork/public/"

    # Open the source image
    img = Image.open(source_path)

    # Convert to RGBA if not already
    if img.mode != 'RGBA':
        img = img.convert('RGBA')

    # Define required sizes
    sizes = [
        (16, 16, "favicon-16x16.png"),
        (32, 32, "favicon-32x32.png"),
        (180, 180, "apple-touch-icon.png"),  # Recommended size for apple touch icon
        (192, 192, "android-chrome-192x192.png"),
        (512, 512, "android-chrome-512x512.png")
    ]

    # Generate each size
    for width, height, filename in sizes:
        # Resize maintaining aspect ratio, then crop to exact size if needed
        resized_img = img.copy()
        resized_img.thumbnail((width, height), Image.Resampling.LANCZOS)

        # Create a new image with exact dimensions and paste resized image centered
        final_img = Image.new('RGBA', (width, height), (0, 0, 0, 0))
        paste_x = (width - resized_img.width) // 2
        paste_y = (height - resized_img.height) // 2
        final_img.paste(resized_img, (paste_x, paste_y))

        # Save the file
        output_path = os.path.join(public_dir, filename)
        final_img.save(output_path, format='PNG')
        print(f"Generated: {output_path} ({width}x{height})")

    # Also ensure we have a proper favicon.ico with multiple sizes
    # Create a multi-size ICO file
    ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
    ico_images = []

    for size in ico_sizes:
        resized = img.copy()
        resized.thumbnail(size, Image.Resampling.LANCZOS)
        # Create exact size image
        exact_img = Image.new('RGBA', size, (0, 0, 0, 0))
        paste_x = (size[0] - resized.width) // 2
        paste_y = (size[1] - resized.height) // 2
        exact_img.paste(resized, (paste_x, paste_y))
        ico_images.append(exact_img)

    # Save multi-size ICO
    ico_path = os.path.join(public_dir, "favicon.ico")
    ico_images[0].save(ico_path, format='ICO', sizes=[(img.width, img.height) for img in ico_images])
    print(f"Updated multi-size favicon.ico: {ico_path}")

    print("\nFavicon generation complete!")

if __name__ == "__main__":
    generate_favicons()