import Container from "@/components/ui/container"
import Billboard
    from "@/components/billboard";
const HomePage = () => {
    return (
        <Container>
            <div className="pb-10 space-y-10">
                <Billboard />
            </div>
        </Container>
    )
}

export default HomePage;