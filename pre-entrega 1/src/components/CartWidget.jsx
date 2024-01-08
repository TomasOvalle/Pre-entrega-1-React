import iconCart from "../assets/iconCart.svg";

const CartWidget = () => {
    return(
        <button type="button" class="btn btn-primary position-relative">
            <img src={iconCart} alt="Carrito" />
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    )
}

export default CartWidget;