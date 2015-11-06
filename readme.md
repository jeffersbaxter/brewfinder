Brew Search

User Stories
Beer aficionados would use my site to learn more about new beers.

Wireframe: https://generalassembly.mybalsamiq.com/projects/wdi-sea-04/Beer%20DB

Technologies Used
BreweryDB (API) - used for the search and beer:id features

Google Fonts - changed the default Bootstrap font to (font-family: 'Playfair Display')

Font Awesome - used for the beer vector on the index page

Bootstrap - changed most of the visual elements, used "well" classes

Approach Taken
I created a wireframe and ERDs for Brew Search. I initially wanted to consolidate retail locations for specific products. After conducting research, I realized that this wasn't feasible. The general premise of the site is to allow users to discover new beers that they have heard of but don't know specific details.

I prioritized the quality of both the authentication form as well as the search field. I wanted irrelevant inputs to render the page again, rather than display an ugly error screen.

Installation
Node_Modules: .bin, bcrypt, body-parser, connect-flash, ejs, express, express-ejs-layouts, express-passport-logout, express-session, node-env-file, passport, passport-local, pg, pg-hstore, request, sequelize, sequelize-cli

Unsolved Problems
I will incorporate a comments section and sort functionality that allows you to sort results by abv, ibu or type.