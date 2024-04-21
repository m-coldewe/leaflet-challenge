# Earthquakes Leaflet Visualization

## Overview
The United States Geological Survey, or USGS for short, provides scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. This project seeks to visualize the USGS data in a way that will allow them to better educate the public and other government organizations on issues facing our planet, specifically relating to earthquakes.

Utilizes Javascript, CSS, and HTML languages, as well as the Leaflet mapping library.

## Purpose
To visualize the data using Leaflet, the program:
- sets the url to be used for the json data call
- sets the inital map view and zoom level
- sets the map titlelayer using openstreetmap with attribution
- creates the legend to display with the relevant depth values and associated colors
- and calls the function to get the earthquake data

Within the function, the program:
- retrieves the data from the API
- loops through the data for the specific values I want and assign them to values for easier manipulation and readability later in the function
- assigns the marker size and color for each earthquake instance
- creates the markers by setting their location, size, and color
- and finally creates and binds the popup to display relevant information

I opted to generate the data entirely within the function for ease and simplicity. However, due to the fact that it uses a large dataset, the markers do take a few minutes to generate. Manipulating the browser window contents before the page has finished loading (and the markers have appeared) can cause the webpage to become unresponsive.

I consulted the Leaflet documentation for how to create the map and legend, and youTube videos by The Coding Train for querying the json API, and received help sorting out by CSS stumblings from my instruction, Haroon, and my classmate, Harsh.

## Result
#### North America
![north_america](https://github.com/m-coldewe/leaflet-challenge/assets/152045367/2f4b5bba-a5b2-4ad0-8fae-ce814d677005)

#### South America
![souther_america](https://github.com/m-coldewe/leaflet-challenge/assets/152045367/85942607-9e1e-4345-862f-16e058b70e80)

#### Europe and East
![europe _and_east](https://github.com/m-coldewe/leaflet-challenge/assets/152045367/5a92ac24-239a-4428-80db-48b898935ac7)

## Summary
Whie the data is updated continuously, you can see that, at the time this data was pulled, for the previous seven days, the earthquakes registered in North America tended to be smaller magnitude with a depth between -10 to 10 kilometers. The earthquakes registered around the rest of the world tended to be fewer and less clustered, but higher magnitude, with more variation in dept. And that while more earthquakes tended to register around the fault lines caused by shifting tectonic plates, earthquakes further inland are not uncommon.
