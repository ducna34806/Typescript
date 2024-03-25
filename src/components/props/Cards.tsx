const Cards = (props: {
  name: string;
  img: string;
  price: string;
  bgColor: string;
}) => {
  return (
    <div>
      {/* end */}
      <img src={props.img} alt="" />
      <div className={`pt-5 pb-10 backdrop:rounded-b-sm py-3 ${props.bgColor}`}>
        <a className="text-white font-semibold ml-2" href="">
          {props.name}
        </a>
        <p className="text-white text-sm ml-2">{props.price}</p>
      </div>
      {/* end */}
    </div>
  );
};

export default Cards;
