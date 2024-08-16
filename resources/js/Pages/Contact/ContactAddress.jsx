import SectionTitle from '@/Components/Sections/SectionTitle'
import { MagnifyingGlassIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { usePage } from '@inertiajs/react';

const ContactAddress = () => {
	const { settings } = usePage().props;

    const updatedSettings = {
		...settings,
		company: {
			...settings.company,
			email: 'abarrotesolan@gmail.com',
			address: 'Lotificación Santa Lucía 133, Jose Maria Pino Suarez, Villahermosa, Tabasco',
			phone: '+52 993 456 7890',
		},
	};
	return (
		<div className="lg:border border-gray-200 rounded-md lg:p-6 space-y-6 lg:text-sm ">

			<SectionTitle className="text-custom-verd" title="Encuéntranos aquí"></SectionTitle>
			<div className="flex items-stretch space-x-2 text-sm ">
				<div className="text-gray-600 border border-gray-200 rounded-md p-2 flex items-center h-10 w-10">
					<MapPinIcon className="h-full w-full" />
				</div>
				<div className="">
					<div className="font-medium">Email</div>
					<div className="font-light">{updatedSettings.company.email}</div>
				</div>
			</div>
			<div className="flex items-stretch space-x-2 text-sm">
				<div className="text-gray-600 border border-gray-200 rounded-md p-2 flex items-center h-10 w-10">
					<MagnifyingGlassIcon className="h-full w-full" />
				</div>
				<div className="">
					<div className="font-medium">Direccion</div>
					<div className="font-light">{updatedSettings.company.address}</div>
				</div>
			</div>
			<div className="flex items-stretch space-x-2 text-sm">
				<div className="text-gray-600 border border-gray-200 rounded-md p-2 flex items-center h-10 w-10">
					<PhoneIcon className="h-full w-full" />
				</div>
				<div className="">
					<div className="font-medium">Telefono</div>
					<div className="font-light">{updatedSettings.company.phone}</div>
				</div>
			</div>
			<div>
				<img src="img/contact-us/map.png" className="rounded-md" />
			</div>
		</div>
	)
}

export default ContactAddress
