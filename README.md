# zen_educate_api_italom
An endpoint that sorts (alphabetically) and returns a few instances of a class (in json) for a list of names

# Architecture
Node.js with express

# To start
npm install

# To Run Tests
npm run test

# To Run the Server (Default port 3001)
npm run dev

endpoint: /sort-names

request body expected:
{
	"names": [ "James", "Jono", "John", "Radu", "Cole", "Italo" ]
}

response body: 
[
    { name: 'test' }
]
