# E-commerce-Back-End

## Table of Contents 
- [Description](#description)
- [Usage](#usage)
- [Visuals](#visuals)
- [Resources](#resources)

## Description

This app utilizes multiple modules to provide a back-end for an e-commerce business. You can connect to the database using Sequelize. Adding test data is as easy as entering the schema and seed commands. When you start your server then you can test all the CRUD operations in Insomnia where all the data will be presented in well formated JSON.

## Usage

I used the MySQL2 and Sequelize packages to connect my Express.js API to a MySQL database and the dotenv package to use environment variables to store sensitive data, like my MySQL username, password, and database name.

## Visuals

[E-commerce Back-End Walkthrough](https://www.awesomescreenshot.com/video/9742723?key=6d9e2df26b921940f931a1dcb04376fe)

This video will show the server.js and the connection.js files on open to display the programs pulled in. You will see me type mysql -u root to open up the shell where I will run the source db/schema.sql; command to create the database. Following the exit of the shell I will seed the database with the command npm run seed and then the nodemon command to start my server. Once the serve is up we will go over to Insomnia to check the routes. First we will check all the Get All routes, then we will check the Get Single routes for all routes. After seeing these work as they should, we will check the Post routes by creating a new category, product, and tag. I will then show you the Get All again to demonstrate their creation as successful. Next up we will update our routes with the Puts which I will again show you their completion with Get All. Finally, I will show you the delete routes and demonstrate their completion with the Get All. 

## Resources

- [Repository](https://github.com/grilledcheeseplease/E-commerce-Back-End)