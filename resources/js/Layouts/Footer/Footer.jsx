import { Link, usePage } from "@inertiajs/react"
import Suscribe from "./Suscribe"
import ApplicationLogo from "@/Components/ApplicationLogo"
import NewLogo from "@/components/NewLogo";
import Tiendita from "@/components/Tiendita";

const Footer = () => {
    const { settings } = usePage().props;
    const updatedSettings = {
        ...settings,
        company: {
            ...settings.company,
            email: 'abarrotesolan@gmail.com',
            address: 'Lotificación Santa Lucía 133, Jose Maria Pino Suarez, Villahermosa, Tabasco',
            phone: '+52 993 456 7890',
            name: 'Abarrotes Olan by Tilines',
            entry: 'En el corazón de Tabasco, Abarrotes Olan es más que una tienda; somos parte de la comunidad. Ofrecemos una gran variedad de productos con la calidez y atención que solo una tienda local puede brindar. ',

        },
    };
    return (
        <>
            <div className="container py-content">
                <Suscribe />
            </div>

            <footer className=" border-t border-gray-100 ">
                <div className="container  ">
                    <div className="py-content grid grid-cols-2 lg:grid-cols-5 gap-8">
                        <div className="col-span-2 ">
                            <div >
                                <div className="flex items-center gap-x-3">
                                    <div className="text-custom-color4 text-lg text-center whitespace-nowrap font-semibold">
                                        Abarrotes Olán
                                    </div>

                                </div>
                            </div>
                            <p className="text-sm leading-6 mt-2 text-gray-600">
                            {updatedSettings.company.entry}
                            </p>
                        </div>

                        <div className="text-sm">
                            <Link href="/contact-us" className="block">
                                <h4 className="font-medium font-semibold">
                                    Contacto
                                </h4>
                            </Link>
                            <div className="mt-2 space-y-2 text-sm font-light">
                                <div className="font-light">{updatedSettings.company.email}</div>
                                <div className="font-light">{updatedSettings.company.address}</div>
                                <div className="font-light">{updatedSettings.company.phone}</div>
                            </div>
                        </div>

                        <div className="text-sm">
                            <h4 className="font-medium font-semibold">
                                Porque elegirnos
                            </h4>
                            <h4 className="font-medium text-lg  "></h4>
                            <div className="mt-2 space-y-2 font-light">
                                <Link href="/shipping-delivery" className="block">
                                    Envío y Entrega
                                </Link>
                                <Link href="/return-exchanges" className="block">
                                    Devoluciones y cambios
                                </Link>

                                <Link href="/faq" className="block">
                                    Preguntas frecuentes y ayudas
                                </Link>
                            </div>
                        </div>

                        <div className="text-sm">
                            <h4 className="font-medium font-semibold ">Top Categorias</h4>
                            <div className="mt-2 space-y-2  font-light">
                                <Link href={route('search', { 'categories[]': "teclados" })} className="block">
                                    Bebidas
                                </Link>
                                <Link href={route('search', { 'categories[]': "mouses" })} className="block">
                                    Alimentos
                                </Link>
                                <Link href={route('search', { 'categories[]': "procesadores" })} className="block">
                                    Hogar y limpieza
                                </Link>
                                <Link href={route('search', { 'categories[]': "ram" })} className="block">
                                    Higiene
                                </Link>
                                {/* <Link href={route('search', { 'categories[]': "almacenamiento" })} className="block">
									Ssd
								</Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="border-t py-6">
                        <div className="flex items-center justify-between text-sm text-gray-500">
                            <p>
                                © 2024 {updatedSettings.company.name}. Reservados todos los derechos.
                            </p>
                            <div className="flex items-center gap-5">
                                <a href={settings.social.facebook} target="_blank">
                                    <img className="w-6 transition hover:scale-110" src="/img/footer/facebook-icon.png" alt="facebook" />
                                </a>
                                <a href={settings.social.instagram} target="_blank">
                                    <img className="w-6 transition hover:scale-110" src="/img/footer/instagram-icon.png" alt="instagram" />
                                </a>
                                <a href={settings.social.twitter} target="_blank">
                                    <img className="w-6 transition hover:scale-110" src="/img/footer/twt-icon.png" alt="tw" />
                                </a>
                                <a href={settings.social.ws} target="_blank">
                                    <img className="w-6 transition hover:scale-110" src="/img/footer/ws-icon.png" alt="ws" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer
