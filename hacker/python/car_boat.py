#!/bin/python

import math
import os
import random
import re
import sys


class Car:
    def __init__(self,max_speed,units):
        self.max_speed = max_speed;
        self.units = units
    
    string = "Car has a maximum speed of" + self.max_speed + " " + self.units
    print(string)
        

class Boat:
    def __init__(self, max_speed):
        self.max_speed = max_speed
        
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')
    q = int(raw_input())
    queries = []
    for _ in xrange(q):
        args = raw_input().split()
        vehicle_type, params = args[0], args[1:]
        if vehicle_type == "car":
            max_speed, speed_unit = int(params[0]), params[1]
            vehicle = Car(max_speed, speed_unit)
        elif vehicle_type == "boat":
            max_speed = int(params[0])
            vehicle = Boat(max_speed)
        else:
            raise ValueError("invalid vehicle type")
        fptr.write("%s\n" % vehicle)
    fptr.close()
