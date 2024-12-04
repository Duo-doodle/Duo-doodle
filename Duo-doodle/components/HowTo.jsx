const HowTo = () => {
  return (
  <>
    <h1>Welcome to Duo-Doodle!</h1>

    
      <h2>Artist</h2>
      <p>
        As the artist, you will be given a prompt. It is your job to make each prompt
        come to life using only your drawing skills! Learn how well you did by
        submitting your drawing. You will know if you created a good representation
        of the prompt if others can guess correctly. Being an artist is fun,
        but no worries, you'll also have the chance to be the guesser.
      </p>
      {/*TODO: add img link */}
      <img alt="gif of user submitting their drawing"/>

      <h2>Guesser</h2>
      <p>
        As the guesser, you will let the artist know how well they did! A correct guess means the artist did a great job. But, Hurry! Submit your guess 
        using the submit button before the other guessers have a chance or the timer runs out. The first person to guess correctly wins the round.
        Guessing is fun, but no worries, you'll also have the chance to be the artist.
      </p>
      {/*TODO: add img link */}
      <img alt="gif of user submitting their guess"/>
  </>
  )
}
export default HowTo