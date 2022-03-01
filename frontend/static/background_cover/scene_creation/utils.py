from math import random
from .params import out_of_bounds, planets, screen_size


# returns a random size for image
def rand_size(mn, mx):
    return random.randint(mn, mx) 


# returns a random amount of images for cover
def rand_amount(mn, mx):
    return random.randint(mn, mx)


# returns a random orientation for image on cover  
def rand_orient():
    return random.randrange(0, 360, (360/16)) 


# randomly generate planets whilst not interfering with
# other key elements 
def gen_planet_position():
    position_checked = False
    w, h = screen_size
    while not position_checked:
        rand_position = (
            random.randint(0, w), random.randint(0, h)
        )
        for start, end in out_of_bounds:
            if start[0] <= rand_position[0] <= end[0] or 
               start[1] <= rand_position[1] <= end[1]:
                break
        else:
            position_checked = True
    return rand_position

