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
                 https://african-marketplace2.herokuapp.com/api/auth/register
            A POST request to this route will allow a new user to register for membership on the site.
             Required Fields:
                username,
                password,
                firstname,
                lastname,
                email
                role (Optional)
    <h3> * Login </h3>
                 https://african-marketplace2.herokuapp.com/api/auth/login
            A POST request to this route will allow a member to login onto the site.
              Required Fields:
                username,
                password
    <h3> * Users List </h3>
                 https://african-marketplace2.herokuapp.com/api/users
            A GET request to this route will allow a logged in member to get a list of all members.
    <h3> * Individual User </h3>
                https://african-marketplace2.herokuapp.com/api/users/:id
            A GET request to this route will allow a logged in member to get information for a specific user based upon the id requested.
    <h3> * Products List </h3>
                https://african-marketplace2.herokuapp.com/api/products
            A GET request to this route will allow a logged in  member to get a list of all products listed on the site.
    <h3> * Individual Product </h3>
                https://african-marketplace2.herokuapp.com/api/products/:id
            A GET request to this route will allow a member to get information about a specific product based upon the id requested.
    <h3> * Categories List </h3>
                https://african-marketplace2.herokuapp.com/api/categories
            A GET request to this endpoint will allow a  logged in member to get a list of all inventory categories
    <h3> * User Products </h3>
                https://african-marketplace2.herokuapp.com/api/users/:id/products
            A GET request to this route will allow a member to get a list of all products that are being sold by a specific user based upon the id requested.
    <h3> * Edit User </h3>
                https://african-marketplace2.herokuapp.com/api/users/:id
            A PUT request to this route will allow a logged in member to edit their user information.
                 Required Fields:
                    username,
                    password,
                    firstname,
                    lastname,
                    email
                    role (Optional)
    <h3> * Edit Products </h3>
                https://african-marketplace2.herokuapp.com/api/products/:id
            A PUT request to this route wiil allow a logged in member to edit information for the specific product based upon the id requested.
                Required Fields:
                    productName,
                    category_id,
                    sub_category(Optional),
                    user_id,
                    price,
                    country
    <h3> * Add Product </h3>
                https://african-marketplace2.herokuapp.com/api/products
            A POST request to this route will allow a logged in user to add a product to their inventory.
             Required Fields:
                productName,
                    category_id,
                    sub_category(Optional),
                    user_id,
                    price,
                    country
    <h3> * Delete User </h3>
                https://african-marketplace2.herokuapp.com/api/users/:id
            A DELETE request to this route will allow a logged in user to delete the specific user based upon the id request.
    <h3> * Delete Product </h3>
                https://african-marketplace2.herokuapp.com/api/products/:id
             A DELETE request to this route will allow a logged in user to delete the specific product based upon the id request.
  --------------------------------------------------------------------

  Heroku Git URL
https://african-marketplace2.herokuapp.com/

------------------------------------------------------------------------
  
<h2>Users and their Login Information:</h2>

        "id": 7,
        "username": "alicealdo",
        "password": "password",
        "firstname": "alice",
        "lastname": "aldo",
        "email": "aaldo@gmail.com",
        "role": null
    
        "id": 8,
        "username": "benbobbins",
        "password": "password",
        "firstname": "ben",
        "lastname": "bobbins",
        "email": "bbobbins@gmail.com",
        "role": null

       "id": 9,
        "username": "carolcolton",
        "password": "password",
        "firstname": "carol",
        "lastname": "colton",
        "email": "ccoltons@gmail.com",
        "role": null
    
        "id": 10,
        "username": "dandavies",
        "password": "password",
        "firstname": "dan",
        "lastname": "davies",
        "email": "ddavies@gmail.com",
        "role": null
    
        "id": 11,
        "username": "ericaeverest",
        "password": "password",
        "firstname": "erica",
        "lastname": "everest",
        "email": "eeverest@gmail.com",
        "role": null
    
        "id": 12,
        "username": "frankfox",
        "password": "password",
        "firstname": "frank",
        "lastname": "fox",
        "email": "ffox@gmail.com",
        "role": null
--------------------------------------------------------------------------------

<h2>Categories </h2>

        "id": 1,
        "categoryName": "animal products"
   
        "id": 2,
        "categoryName": "cereals"
    
        "id": 3,
        "categoryName": "fruits"
   
        "id": 4,
        "categoryName": "vegetables"
   
        "id": 5,
        "categoryName": "seeds and nuts"
    
        "id": 6,
        "categoryName": "other"
 
 ----------------------------------------------------------------------------
 <h2> Products </h2>

        "id": 5,
        "productName": "chicken eggs",
        "category_id": 1,
        "sub_category": null,
        "user_id": 7,
        "price": "$0.25 each",
        "country": "ken"
   
        "id": 6,
        "productName": "wheat",
        "category_id": 2,
        "sub_category": null,
        "user_id": 8,
        "price": "$1.25/lb.",
        "country": "rwa"
    
        "id": 7,
        "productName": "limes",
        "category_id": 3,
        "sub_category": null,
        "user_id": 9,
        "price": "$0.75 each",
        "country": "uga"
   
        "id": 8,
        "productName": "onions",
        "category_id": 4,
        "sub_category": null,
        "user_id": 10,
        "price": "$0.45 each",
        "country": "ken"
    
        "id": 9,
        "productName": "groundnuts",
        "category_id": 5,
        "sub_category": null,
        "user_id": 11,
        "price": "$1.00/lb.",
        "country": "rwa"
   
        "id": 10,
        "productName": "tobacco",
        "category_id": 6,
        "sub_category": null,
        "user_id": 12,
        "price": "$3.00/lb.",
        "country": "uga"
 