# API

## Creating and Joining a Game

### GET  -> game/:name

- will return the game instance for a given user
- if there is no session, a prompt will be displayed asking user to enter name to join
- if creator, a prompt will be displayed prompting user to copy url to join

### POST -> game/:name

- will create a new instance game with that name
- on success will redirect to GET game/:name
- on fail prompt shown to user stating error
- will not create the game if it already exists


## Joining Game Interation API

### PUT -> game/:name/join/:user

- Adds the user to the game
- Validates user with same name not in game


