const PokemonCard = (props) => {
  const {name, imgSrc} = props.pokemon 
  return (
    <figure>
      {imgSrc  ? <img src={ imgSrc} /> : <p>???</p>}

      <figcaption>{name}</figcaption>
    </figure>
  );
};
export default PokemonCard;
