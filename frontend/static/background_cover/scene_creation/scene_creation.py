from PIL import Image
from pathlib import Path
import random

from params import screen_sizes, stars, planets
from params import sun, ufo, rocket_ship, galaxy
from params import astronaut, alien, earth, meteors
from utils import gen_planet_position


# initially create for just xl screen

# paths
INPUT = Path("../clip_art")
OUTPUT = Path("../scenes/")
EXTENSIONS = ["jpeg", "jpg", "png"]


# function for planets and stars
def paste_random_objects(canvas, obj, obj_name):
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
        if obj_name == "planets":
            rand_position = gen_planet_position()
            canvas.alpha_composite(image, rand_position)
        else:
            canvas.alpha_composite(image, (
                random.randint(0, canvas.width-image.width), 
                random.randint(0, canvas.height-image.height)
            ))


# function for the other objects with positions
def paste_positioned_object(canvas, obj, obj_name):
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

    # add stars and planets
    paste_random_objects(canvas, stars, "stars")
    paste_random_objects(canvas, planets, "planets")

    # add positioned objects
    for obj in [sun, ufo, rocket_ship, galaxy, astronaut,
                alien, earth]:
        paste_positioned_object(canvas, obj, obj.get("name"))

    canvas.save(str(OUTPUT)+f"/{k}_screen.png", "PNG")
