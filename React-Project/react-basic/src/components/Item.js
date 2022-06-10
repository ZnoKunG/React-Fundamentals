const Item = (props) => {
    return (
    <div>
    <li>{props.title} <span>{props.rate}</span></li>
    </div>
    )
}

export default Item