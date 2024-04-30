import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import "./checkout.css"
import React from 'react'

const Checkout = () => {
    const { cart, orderTotalPrice, emptyCart, totalPrice, totalShipping, totalTax } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const submit = (data) => {
        console.log(data);
        emptyCart();
    }

    if (cart.length === 0) {
        return (
            <div className="orderGenerated">
                <h2 className="orderGeneratedTitle">Successfully generated order</h2>
                <p>Soon it will be shipped</p>
                <Link to="/" className="backHomeButton">Back to Home</Link>
            </div>
        )
    }

    return (
        <div>
            <div className="checkoutContainer">
                <div className="checkoutFormContainer">
                    <h1 className="checkoutTitle">Checkout</h1>
                    <form className="checkoutForm" onSubmit={handleSubmit(submit)}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" {...register("name")} />

                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" name="address" {...register("address")} />

                        <div className="addressDetailsContainer">
                            <div className="addressDetailsCity">
                                <label htmlFor="city">City:</label>
                                <input type="text" id="city" name="city" {...register("city")} />
                            </div>
                            <div className="addressDetailsState">
                                <label htmlFor="state">State:</label>
                                <input type="text" id="state" name="state" {...register("state")} />
                            </div>
                            <div className="addressDetailsCountry">
                                <label htmlFor="country">Country:</label>
                                <input type="text" id="country" name="country" {...register("country")} />
                            </div>
                        </div>

                        <label htmlFor="phone">Phone:</label>
                        <input type="phone" id="phone" name="phone" {...register("phone")} />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" {...register("email")} />

                        <button type="submit">Submit Order</button>
                    </form>
                </div>
                <div className="cartSummary">
                    <h2 className="cartSummaryTitle">Order Summary</h2>
                    <div className="cartSummarySubtotal">
                        <p className="cartSummaryText">Subtotal</p>
                        <p className="cartSummaryText">${totalPrice()}</p>
                    </div>
                    <div className="cartSummaryShipping">
                        <p className="cartSummaryText">Est. Shipping</p>
                        <p className="cartSummaryText">${totalShipping()}</p>
                    </div>
                    <div className="cartSummaryTax">
                        <p className="cartSummaryText">Est. Tax</p>
                        <p className="cartSummaryText">${totalTax()}</p>
                    </div>
                    <div className="cartSummaryOrderTotal">
                        <p className="cartSummaryTextTotal">Est. Order Total</p>
                        <p className="cartSummaryTextTotal">${orderTotalPrice()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout