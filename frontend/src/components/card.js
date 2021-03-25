const Card = ({title, description, link, dato}) => {
    const total = dato + 4;

    return (
      <a href={link} className="card">
        <h3>{title} &rarr;</h3>
        <p>{description}</p>
        <p>{total}</p>
      </a>
    )
  }

export default Card;