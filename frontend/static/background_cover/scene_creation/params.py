# screen sizes to use 
screen_sizes = {
    "xl": (1536, 639)
}


# total - total number of time object appears on cover
# size - a range on how big the object should be - a tuple 
#      - of two numbers each defining min and max width
#      - aspect ratio of heights are preserved in code
# position - position of top-lefthand corner of object
#          - auto generated if empty string
# orientation - orientation of image relative to canvas

stars = {
    'total': 50,
    'size': (10, 20),
}

planets = {
    'total': 6,
    'size': (50, 80),
}

sun = {
    'name': 'sun',
    'size': 100,
    'position': (70, 50),
    'orientation': None,
}

ufo = {
    'name': 'ufo',
    'size': 50,
    'position': (850, 20),
    'orientation': None,
}

rocket_ship = {
    'name': 'rocket_ship',
    'size': 130,
    'position': (600, 500),
    'orientation': None,
}

galaxy = {
    'name': 'galaxy',
    'size': 100,
    'position': (850, 520),
    'orientation': None,
}

meteors = {
    'name': 'meteors',
    'size': 100,
    'position': (20, 200),
    'orientation': None,
}

astronaut = {
    'name': 'astronaut',
    'size': 120,
    'position': (500, 200),
    'orientation': None,
}

alien = {
    'name': 'alien',
    'size': 80,
    'position': (30, 500),
    'orientation': None,
}

earth = {   
    'name': 'earth',
    'size': 80,
    'position': (620, 200),
    'orientation': None,
}


# coordinate ranges not to be used for planet generations
out_of_bounds = []

for element in [sun, ufo, rocket_ship, galaxy, astronaut, 
                alien, earth]:
    pw, ph = element["position"][0], element["position"][1]
    s = element["size"]
    out_of_bounds.append((
        (pw, ph), (pw + s, ph + s)
    ))
