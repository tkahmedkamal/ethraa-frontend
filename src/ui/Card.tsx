import { ICard } from "../interfaces";

const Card: React.FC<ICard> = ({ outlined, children }) => {
  return (
    <section className={`${!outlined ? "card" : "card-outlined"}`}>
      {children}
    </section>
  );
};

export default Card;
