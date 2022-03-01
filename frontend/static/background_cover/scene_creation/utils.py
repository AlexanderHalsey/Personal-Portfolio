import random
from params import out_of_bounds, screen_sizes


# randomly generate planets whilst not interfering with
# other key elements 
def gen_planet_position():
    position_checked = False
    w, h = screen_sizes.get("xl")
    while not position_checked:
        rand_position = (
            random.randint(0, w), random.randint(0, h)
        )
        for start, end in out_of_bounds:
            if start[0] <= rand_position[0] <= end[0] or \
               start[1] <= rand_position[1] <= end[1]:
                break
        else:
            position_checked = True
    return rand_position
