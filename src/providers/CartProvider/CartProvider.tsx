import React, { createContext, ReactNode, useState } from "react";

export const CartContext = createContext({ cartItems: { items: [], totalPrice: 0, totalItems: 0 }, setCartItems: () => {} });

export type Product = {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    category: string;
    itemInCart: number;
};

export type Cart = {
    items: Product[];
    totalPrice: number;
    totalItems: number;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<Cart>({ items: [], totalPrice: 0, totalItems: 0 });


    const addItemToCart = (item) => {
        setCartItems
    }

    return (
        <CartContext.Provider
            value={{
                cartItems,
                setCartItems
            }}
        >
            {children}
        </CartContext.Provider>
    );
};