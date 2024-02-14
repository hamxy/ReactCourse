import './Card.css';

function Card({title, paragraph}) {
    return (
        <section className="card">
            <h3>{title}</h3>
            <p>{paragraph}</p>
        </section>
    )
}

export default Card;