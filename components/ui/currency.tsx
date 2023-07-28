import { formatter } from "@/lib/utils";

interface CurrencyProps {
    value: string | number
}

const Currency: React.FC<CurrencyProps> = ({
    value
}) => {
    return (
        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
    );
}

export default Currency;