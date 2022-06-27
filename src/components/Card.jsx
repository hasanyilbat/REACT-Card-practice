import Button from "./Button";
import "../scss/Card.scss";
const Card = ({ data }) => {
  return data.map((item) => {
    const { id, name, job, comment, img } = item;
    return (
      <div className="card" key={id}>
        <h1>{name}</h1>
        <h3>{job}</h3>
        <p>{comment}</p>
        <img src={img} alt="" />
        <Button />
      </div>
    );
  });
};

export default Card;
