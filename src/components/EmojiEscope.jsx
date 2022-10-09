import React from "react";

function Emoji_escope(props) {
  return (
    <div className="itens">
      <div className="emoji">
        {props.emoji}
      </div>
      <div className="nome">
        {props.nome}
      </div>
      <div className="significado">
        {props.significado}
      </div>
    </div>
  )
}
export default Emoji_escope;