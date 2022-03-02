from PIL import Image
from pathlib import Path
import random

from params import screen_sizes
from params import venus, stars, mars, mercury, sun
from params import ufo, rocket_ship, galaxy, neptune, alien
from params import astronaut, earth, meteors, saturn, uranus


# initially create for just xl screen

# paths
INPUT = Path("../clip_art")
OUTPUT = Path("../scenes/")
EXTENSIONS = ["jpeg", "jpg", "png"]


# function for planets and stars
def paste_random_stars(canvas, obj, obj_name):
    options = [file for file in INPUT.glob(f"{obj_name}/*")]
    options = list(filter(
        lambda file: file.suffix, options
    ))

    for i in range(obj.get("total")):
        image = Image.open(options[i%len(options)])
        image = image.convert("RGBA")
        image = image.rotate(random.randrange(0,360,(360/24)))
        rand_size = random.randint(*obj.get("size"))
        image = image.resize((
            rand_size, int((rand_size/image.width)*image.height)
        ))

        canvas.alpha_composite(image, (
            random.randint(20, canvas.width-image.width), 
            random.randint(20, canvas.height-image.height)
        ))


# function for the other objects with positions
def paste_positioned_object(canvas, obj, obj_name):
    if obj_name in ["mars", "mercury", "neptune", "saturn", 
                    "uranus", "venus"]:
        for file in INPUT.glob(f"planets/*"):
            if obj_name in str(file):
                option = file
                break
    else:
        options = [file for file in INPUT.glob(f"{obj_name}/*")]
        option = list(filter(
            lambda file: file.suffix, options
        ))[0]

    image = Image.open(option)
    image = image.convert("RGBA")
    # image = image.rotate(obj.get("orientation"))
    new_size = obj.get("size")
    image = image.resize((
        new_size, int((new_size/image.width)*image.height)
    ))
    canvas.alpha_composite(image, obj.get("position"))


# create an empty canvas and fill with objects
for k, screen_size in screen_sizes.items():
    canvas = Image.new("RGBA", screen_size)

    # add stars
    paste_random_stars(canvas, stars, "stars")

    # add positioned objects
    for obj in [sun, ufo, rocket_ship, galaxy, astronaut,
                alien, earth, mars, mercury, neptune, saturn,
                uranus, venus]:
        paste_positioned_object(canvas, obj, obj.get("name"))

    canvas.save(str(OUTPUT)+f"/{k}_screen.png", "PNG")
