screen_size = (1005, 639)

# total - total number of time object appears on cover
# variety - variety of different images of the object
# size - a range on how big the object should be - a tuple 
#      - of two numbers each defining min and max width
#      - aspect ratio of heights are preserved in code
# position - position of top-lefthand corner of object
#          - auto generated if empty string

stars = {
    'total': 50,
    'variety': 21,
    'size': (20, 100),
    'position': None
}

sun = {
    'total': 1,
    'variety': 1,
    'size': (400, 400),
    'position': (30, 500)
}

ufo = {
    'total': 1,
    'variety': 1,
    'size': (300, 300),
    'position': (500, 40)
}

rocket_ship = {
    'total': 1,
    'variety': 3,
    'size': (400, 500),
    'position': (200, 600)
}

planets = {
    'total': 6,
    'variety': 14,
    'size': (200, 500),
    'position': None
}

galaxy = {
    'total': 1,
    'variety': 1,
    'size': (200, 200),
    'position': (600, 600)
}

meteors = {
    'total': 1,
    'variety': 2,
    'size': (200, 300),
    'position': (20, 20)
}

astronaut = {
    'total': 1,
    'variety': 1,
    'size': (700, 700),
    'position': (400, 200)
}

alien = {
    'total': 1,
    'variety': 1,
    'size': (300, 300),
    'position': (400, 600)
}

earth = {
    'total': 1,
    'variety': 1,
    'size': (500, 500),
    'position': (300, 500)
}

# coordinate ranges not to be used for planet generations
out_of_bounds = []

for element in [sun, ufo, rocket_ship, galaxy, astronaut, 
                alien, earth]:
    pw, ph = element["position"][0], element["position"][1]
    s = element["size"][0]
    out_of_bounds.append((
        (pw, ph), (pw + s, ph + s)
    ))
