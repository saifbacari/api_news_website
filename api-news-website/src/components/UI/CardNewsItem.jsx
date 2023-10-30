import './CardNewsItem.css'

const CardNewsItem = (props) => {
        const classes = 'cardNewsItem ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default CardNewsItem