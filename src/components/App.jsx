import React from "react";
import emojis from "../emojis";
import EmojiEscope from "./EmojiEscope"
import Title from "../components/Title"

function criarEmoji(emoji) {
  return (

    <div>
      <EmojiEscope
        key={emoji.id}
        id={emoji.id}
        emoji={emoji.emoji}
        nome={emoji.nome}
        significado={emoji.significado}
      />
    </div>
  )
}

function App() {
  return (

    <div>
      <div className="fundo">
        <p><Title /></p>
      </div>
      <div className="flex">
        {emojis.map(criarEmoji)}
      </div>
    </div>
  )
}
export default App;