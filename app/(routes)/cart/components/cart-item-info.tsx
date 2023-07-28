interface CartItemInfoProps {
    product: Record<string, any>;
}

const CartItemInfo: React.FC<CartItemInfoProps> = ({
    product
}) => {
    return (
        <div>
            <div className="flex justify-between">
                <p className="text-sm font-semibold text-black ">
                    {product.name}
                </p>
            </div>

            <div className="flex mt-1 text-sm">
                <p className="text-gray-500">{product.color}</p>
                <p className="pl-4 ml-4 text-gray-500 border-l border-gray-200">{product.size}</p>
            </div>
            <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
        </div>
    );
}

export default CartItemInfo;