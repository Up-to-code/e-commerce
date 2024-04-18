import Logo from "../../../assets/cart.svg?react"
import style from "./style.module.css"
const {cont,num_of_soping_pascet,icone}= style
function Shoping_card_pascet() {
    return (
        <div className={cont}>
            <div className={num_of_soping_pascet}>
                0
            </div>
            <Logo  className={icone} />
        </div>
    )
}

export default Shoping_card_pascet