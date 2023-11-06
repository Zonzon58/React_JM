const Pokemoncard = ({ pokemon }) => {
    const { imgSrc, name } = pokemon;
    return (
      <figure>
        {imgSrc ? <img src={imgSrc} /> : <p>???</p>}
          <figcaption>{name}</figcaption>
      </figure>
    );
  };
  export default Pokemoncard;