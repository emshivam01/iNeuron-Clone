function Card(props) {
  return (
    <div className="flex flex-col items-center ">
      <img className="w-36 h-36 mb-8" src={props.imgUrl} alt={props.altText} />
      <p className="text-3xl font-bold mb-6">{props.count}</p>
      <p className="text-3xl font-semibold">{props.cardName}</p>
    </div>
  );
}

export default Card;
