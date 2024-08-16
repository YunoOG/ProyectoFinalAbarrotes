import { Link } from "@inertiajs/react";
import NewLogo from "./tiendita";

export default function ApplicationLogo(className, props) {
    return (
        <Link href="/" >
            <div className="flex items-center gap-x-3">
                <div className="">
                    <NewLogo className="w-full h-full text-white" />
                </div>
                <div className="text-primary-600 text-lg text-center whitespace-nowrap font-semibold">
                    Abarrotes Olán
                </div>
            </div>
        </Link >
    );
}
