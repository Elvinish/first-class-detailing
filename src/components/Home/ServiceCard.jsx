import "./ServiceCard.css";

export default function ServiceCard({
  image,
  title,
  text,
  price,
  onImageClick,
}) {
  return (
    <article className="service-card">
      <div className="service-card__image-wrap">
        <img
          src={image}
          alt={title}
          onClick={() => onImageClick(image, title)}
        />
      </div>

      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__text">{text}</p>
      <p className="service-card__price">{price}</p>
    </article>
  );
}
