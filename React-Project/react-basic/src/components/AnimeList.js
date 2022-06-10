import Item from "./Item"
import './AnimeList.css'

const AnimeList = () => {
    return (
        <ul className="item-list">
            <Item title="Kaguya Sama : Love is War" rate="4.9"/>
            <Item title="Paripi Koumei" rate="4.8"/>
            <Item title="Tate no Yuusha : Shield Hero" rate="4.6"/>
        </ul>
    )
}

export default AnimeList