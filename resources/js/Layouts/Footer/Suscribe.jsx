import InputError from "@/Components/Form/InputError"
import PrimaryButton from "@/Components/PrimaryButton"
import TextInput from "@/Components/Form/TextInput"
import { useForm, usePage } from "@inertiajs/react"



const Suscribe = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
    })

    function handleSubmit(e) {
        e.preventDefault()
        post('/subscribe', {
            preserveScroll: true,
            onSuccess: () => reset('email'),
        })
    }

    return (
        <div className="bg-primary-50 p-6 lg:p-16 rounded-lg  ">
            <div className="flex flex-col lg:flex-row  gap-y-8 lg:gap-y-0 gap-x-0 md:gap-x-16  lg:items-center lg:justify-between">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-2 lg:mb-4">
                        ¡No te pierdas nuestras últimas noticias y ofertas!
                    </h3>
                    <p className="lg:text-base">Suscríbete a nuestro boletín para recibir actualizaciones exclusivas, promociones especiales y más directamente en tu correo electrónico.</p>
                </div>
                <div className="lg:w-1/2 ">
                    <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 gap-x-0 lg:gap-x-3">
                        <div className="grow w-full">
                            <TextInput
                                onChange={e => setData('email', e.target.value)}
                                type="text"

                                placeholder="Escriba su email aqui"
                                value={data.email}
                            />


                        </div>
                        <PrimaryButton className="justify-center bg-[#314528] hover:bg-[#2a3d21]" disabled={processing} isLoading={processing}>
                            Enviar</PrimaryButton>
                    </form>
                    <InputError className="mt-1.5 " message={errors.email} />

                </div>
            </div>
        </div>
    )
}

export default Suscribe
