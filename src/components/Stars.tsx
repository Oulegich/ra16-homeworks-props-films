import Star from "./Star";

const Stars = ({ count = 0 }: IStars) => {

    if (count < 1 || count > 5 || !Number.isInteger(count)) return (<></>)

    return (
        <ul className="stars-list">
            {Array.from({ length: count }, (_, i) => i + 1).map(star => (<li className="star-elem" key={star}>
                <Star />
            </li>))}
        </ul>
    )
}

export default Stars;