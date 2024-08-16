import { Link } from "@inertiajs/react";

export default function NewLogo(className) {
    return (
        <Link href="/">
            <div className="logo-container">
                <img
                    src="img/logos.png" // Reemplaza con la ruta de tu logo
                    alt="Logo"

                />
            </div>

        </Link>
    );
}


