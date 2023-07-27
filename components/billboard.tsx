import { Billboard as BillboardType } from "@/types";
interface BillboardProps {
    data: BillboardType
}

const Billboard: React.FC<BillboardProps> = ({
    data
}) => {
    return (
        <div className="p-4 overflow-hidden sm:p-6 lg:p-8 rounded-xl">
            <div style={{ backgroundImage: `url(${data?.imageUrl})` }}>

            </div>
        </div>
    );
}

export default Billboard;