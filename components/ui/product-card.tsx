"use client"

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";

interface ProductCard {
    data: Product;
}

const ProductCard: React.FC<ProductCard> = ({
    data
}) => {
    return (
        <div className="p-3 space-y-4 bg-white border cursor-pointer group rounded-xl">
            {/* Images and Actions */}
            <div className="relative bg-gray-100 aspect-square rounded-xl">
                <Image
                    src={data?.images?.[0]?.url}
                    fill
                    alt="image"
                    className="object-cover rounded-md aspect-square"
                />
                <div className="absolute w-full px-6 transition opacity-0 group-hover:opacity-100 bottom-5">
                    <div className="flex justify-center gap-x-6">
                        <IconButton
                            onClick={() => { }}
                            icon={<Expand size={20} />}
                            className="text-gray-600"
                        />
                        <IconButton
                            onClick={() => { }}
                            icon={<ShoppingCart size={20} />}
                            className="text-gray-600"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;