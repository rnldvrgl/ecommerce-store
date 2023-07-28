import Container from "@/components/ui/container"
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";

export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard('0821ef03-1c8d-4886-8847-79ffbe99f272');

    return (
        <Container>
            <div className="pb-10 space-y-10">
                <Billboard data={billboard} />
            </div>
        </Container>
    )
}

export default HomePage;