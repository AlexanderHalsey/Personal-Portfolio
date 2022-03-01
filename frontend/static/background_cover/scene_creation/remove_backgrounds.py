from pathlib import Path
from PIL import Image


# removing backgrounds from individual images


# path and extensions to match
BASE_DIR = Path("../clip_art")
EXTENSIONS = [".jpg", ".jpeg", ".png"]


# backgrounds to remove
white_background = [
    'earth.', 'meteor.', 'mars_2', 'neptune.', 'neptune_2',
    'neptune_3', 'saturn_2', 'saturn_3', 'uranus_2', 
    'rocket_ship.', 'rocket_ship_3'
]
black_background = ['mercury.']

# stars to add to background key phrases
for i in range(1,22):
    if i in [7,9,16,21]:
        continue
    elif i in [11,17,19]:
        black_background.append(f"star_{i}.")
    else:
        white_background.append(f"star_{i}.")


# remove white and black backgrounds 
for file in BASE_DIR.glob('**/*'):
    if file.suffix in EXTENSIONS:
        image = Image.open(file)
        image = image.convert("RGBA")

        for key_phrase in white_background:
            if key_phrase in str(file):
                new_data = []
                for r,g,b,a in image.getdata():
                    if r > 250 and g > 250 and b > 250 and a > 250:
                        new_data.append((0,0,0,0))
                    else:
                        new_data.append((r,g,b,a))
                image.putdata(new_data)
                image.save(str(file), 'PNG')
                break

        for key_phrase in black_background:
            if key_phrase in (str(file)):
                new_data = []
                for r,g,b,a in image.getdata():
                    if (r,g,b,a) == (0,0,0,255):
                        new_data.append((0,0,0,0))
                    else:
                        new_data.append((r,g,b,a))
                image.putdata(new_data)
                image.save(str(file), 'PNG')
                break


# remove blue background from galaxy image
for file in BASE_DIR.glob('**/galaxy.png'):
    image = Image.open(file)
    image = image.convert("RGBA")
    new_data = []
    blue = (10,33,50,255)
    for r,g,b,a, in image.getdata():
        if (r,g,b,a) == blue:
            new_data.append((0,0,0,0))
        else:
            new_data.append((r,g,b,a))
    image.putdata(new_data)
    image.save(str(file), 'PNG')
