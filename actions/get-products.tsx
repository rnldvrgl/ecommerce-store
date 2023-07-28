import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;;

const getProducts = async (): Promise<Category[]> => {
    const res = await fetch(URL);

    return res.json();
}

export default getProducts;