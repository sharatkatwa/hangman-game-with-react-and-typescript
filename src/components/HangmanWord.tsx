import React from 'react'
const word = 'test'
const guessedLetters = ['t', 'e']
function HangmanWord() {
  return <div style={{
    display: 'flex',
    gap: '.25em',
    fontSize: '6rem',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    textTransform: 'uppercase'
  }}>
    {word.split('').map((letter, index) => (
      <span style={{ borderBottom: '.1em solid black' }} key={index}>
        <span style={{ visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden' }}>
          {letter}
         </span>
      </span>
    ))}
  </div>
}

export default HangmanWord