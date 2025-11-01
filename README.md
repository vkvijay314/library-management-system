# library-management-system
This is a library managment API Backend for the managment user and the books

# Routes and the Endpoints
## /user
GET: Get all the list of users in the system
POST: Create/Register a new user

## /user(id)
GET: Get a user by their ID
PUT: Updating a user by their ID
DELETE: Deleting a user by  their ID(check if the user still has an issued book) && (is there any fine/penality to be collected);

## /user/subscription-details/{id}

GET: get a user subscrption details.
    >> Date of subscription
    >> Valid Till
    >> Fine if any?

## /books
   GET: get all the books in the system
   POST: Add a new book to the system

## /books/{id}

    GET: Get a book by its id
    PUT: Update a book by its ID
    DELETE: Delete a book by ID

## /books/issued
   GET: Get all issued books with their fine amount

## Subscription Types

  >> basic: 300/month(3 months)
  >> standard: 200/month(6 months)
  >> premium: 100/month(12 months);

##   If a user missed the renewal date , then user should be collected with $100


## Commands:

npm init
npm i express
npm i nodemon --save-dev(since it is only for req for the devlopment no need for the user)

npm run dev

To restore node_modules and package-lock.json >> npm i / install
