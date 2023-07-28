interface ProductPageProps {
    params: {
        productId: string;

    }
}


const ProductPage: React.FC<ProductPageProps> = ({
    params
}) => {
    return (
        <div>
            {params.productId}
        </div>
    );
}

export default ProductPage;