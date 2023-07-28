import Container from "@/components/ui/container"
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true });
    const billboard = await getBillboard('0821ef03-1c8d-4886-8847-79ffbe99f272');

    return (
        <Container>
            <div className="pb-10 space-y-10">
                <Billboard data={billboard} />
            </div>
            <div className="flex flex-col px-4 gap-y-8 sm:px-6 lg:px-8">
                <ProductList title="Feature Products" items={products} />
            </div>
        </Container>
    )
}

export default HomePage;