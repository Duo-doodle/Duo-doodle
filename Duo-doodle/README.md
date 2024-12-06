## Database breakdown
**User table**:
- required: email, username, and password
<!-- TODO: - game and games field: please explain code. From what I can see, its stating each user can only be associated with one game -->
- each user can have multiple:
  - games
  - drawings
  - guesses

**enum GameStatus** <!-- TODO: is this for the list of lobbies? -->
- pending, in_progess, completed

<!-- Do we also want a role enum so we can set one person as the artist and one as the guesser? -->

  **game table**
- required: name, string, host <!-- TODO: is host needed? -->
- each game will have players and rounds

**Round table**
- required: Id, roundNumber, and game.
<!-- TODO: confirm drawing should just have a ? -->
- each round is associated with one drawing and can have multiple guesses.

**Drawing Table**
- required: id, imgurl, user
- each drawing is associated with one round

**Guess Table**
- required: Id, guessText, isCorrect
- each guess is assocaited with one round and one user