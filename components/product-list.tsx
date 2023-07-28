import { Product } from "@/types";
import NoResults from "./ui/no-results";

interface ProductListProps {
    title: string;
    items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({
    title,
    items
}) => {
    return (
        <div className="space-y-4">
            <h3 className="text-3xl font-bold">{title}</h3>
            {items.length === 0 && (
                <NoResults />
            )}
            <div>

            </div>
        </div>
    );
}

export default ProductList;