# NODE.js REST API

## Install
`npm install`

## Start
`node server.js`

Or using nodemon: 

`nodemon server.js` 

## Database
We're using [SQLITE3](https://www.sqlite.org/draft/version3.html) as a database. 

### Example Products database:
| id  | item     | price |
| ----|:--------:| -----:|
| 1   | monitor  | 699   |
| 2   | laptop   | 1799  |
| 3   | shoe     | 34    |


### Example Payload for inserting a product 
{
	"item": "laptop",
	"price": 1355
}
