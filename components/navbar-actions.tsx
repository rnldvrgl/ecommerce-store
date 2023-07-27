"use client"
import { useState, useEffect } from "react"
import Button from "@/components/ui/button"
import { ShoppingBag } from "lucide-react";

const NavbarActions = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null;
    }

    return (
        <div className="flex items-center ml-auto gap-x-4">
            <Button className="flex justify-center px-4 py-2 bg-black rounded-full item-center ">
                <ShoppingBag size={20} color="white" />
                <span className="ml-2 text-sm font-medium text-white">
                    0
                </span>
            </Button>
        </div>
    );
}

export default NavbarActions;