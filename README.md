<h1>PT AfricanMarketPlace2 Backend</h1>
<p>  Role: Backend Developer(Node)</p>

---------------------------------------------------------------

<h2> Project Overview</h2>

    * Sauti Africa empowers small business owners, particularly women, to improve their business 
        and economic opportunities to grow out of poverty.

    The use of this app will:

    + enable these users (business owners) to create a listing for items they have for sale.

    + allow a user to log onto the site and see various categories to help them set their 
        own prices.

    + allow the user to make listings for what they want to sell, which can be seen by all 
        users.

    + allow the user to add a new item by selecting their makrket location and then typing 
        in their item name, description and price.

---------------------------------------------------------------

<h2> Objectives:</h2>

    * The API should provide the endpoints that the front end needs to complete client 
        requirements and demonstrate your proficiency in the skills you've learned so far.

    * The API should be built using the REST architectural pattern, provide data persistence,
         incorporate authentication, include automated tests and be deployed to a hosting 
         platform of your choice.

---------------------------------------------------------------


<h2> Backend Built Using: </h2>

    * Nodejs
    * Express
    * Middleware:
        * Cors
        * Helmet
        * Bcrypt
        * Json Web Token
        * Authenticate

<h2> Routes: </h2>
    <h3> * Register </h3>
        A POST request to this route will lead to a register page where users can register to join the African MarketPlace site to begin use
    <h3> * Login </h3>
        A POST
    <h3> * Users List </h3>
        A GET
    <h3> * Individual User </h3>
    A GET
    <h3> * Products List </h3>
    <h3> * Individual Product </h3>
    <h3> * Categories List </h3>
    <h3> * User Products </h3>
    <h3> * Edit User </h3>
    <h3> * Edit Products </h3>
    <h3> * Add Product </h3>
    <h3> * Delete User </h3>
    <h3> * Delete Product </h3>
  --------------------------------------------------------------------

  Heroku Git URL
https://african-marketplace2.herokuapp.com/

------------------------------------------------------------------------
  
<h2>Users and their Login Information:</h2>

[
    {
        "id": 1,
        "username": "alicealdo",
        "password": "password",
        "firstname": "alice",
        "lastname": "aldo",
        "email": "aaldo@gmail.com",
        "role": null
    },
    {
        "id": 2,
        "username": "benbobbins",
        "password": "password",
        "firstname": "ben",
        "lastname": "bobbins",
        "email": "bbobbins@gmail.com",
        "role": null
    },
    {
        "id": 3,
        "username": "carolcolton",
        "password": "password",
        "firstname": "carol",
        "lastname": "colton",
        "email": "ccoltons@gmail.com",
        "role": null
    },
    {
        "id": 4,
        "username": "dandavies",
        "password": "password",
        "firstname": "dan",
        "lastname": "davies",
        "email": "ddavies@gmail.com",
        "role": null
    },
    {
        "id": 5,
        "username": "ericaeverest",
        "password": "password",
        "firstname": "erica",
        "lastname": "everest",
        "email": "eeverest@gmail.com",
        "role": null
    },
    {
        "id": 6,
        "username": "frankfox",
        "password": "password",
        "firstname": "frank",
        "lastname": "fox",
        "email": "ffox@gmail.com",
        "role": null
    }
]

