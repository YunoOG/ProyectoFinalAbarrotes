
Abarrotes Olan
Abarrotes Olan es un proyecto de gestión y ventas desarrollado utilizando Laravel y React. Este README contiene las instrucciones necesarias para instalar y configurar el proyecto en tu entorno local.

Requisitos previos
Antes de comenzar, asegúrate de tener instalados los siguientes componentes en tu sistema:

Node.js (versión recomendada: última versión LTS)
Composer
PHP
MySQL
Git (opcional)
Instalación
Sigue los siguientes pasos para instalar y configurar el proyecto:

Clona el repositorio:

bash
Copiar código
git clone <url-del-repositorio>
cd nombre-del-repositorio
Instala las dependencias de npm:

bash
Copiar código
npm install
npm install react@latest react-dom@latest
npm install i @vitejs/plugin-react
Actualiza las dependencias de Composer:

bash
Copiar código
composer update
Instala las dependencias de Composer:

bash
Copiar código
composer install
Configura el archivo .env:

En el directorio raíz, encontrarás el archivo .env.example.

Duplícalo y renombra la copia como .env.

Modifica el archivo .env según las configuraciones de tu proyecto. Un ejemplo de configuración de base de datos:

env
Copiar código
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=dbsistemaventas
DB_USERNAME=root
DB_PASSWORD=
Genera la clave de seguridad de la aplicación:

bash
Copiar código
php artisan key:generate
Crea la base de datos:

Accede a PHPMyAdmin y crea una nueva base de datos.
Puedes nombrarla como desees, pero por defecto se recomienda usar dbsistemaventas.
Ejecuta las migraciones:

bash
Copiar código
php artisan migrate
Ejecuta los seeders:

Esto creará un usuario administrador en la base de datos.
Puedes revisar las credenciales del usuario en el archivo database/seeders/UserSeeder.
bash
Copiar código
php artisan db:seed
Inicia el servidor de desarrollo:

bash
Copiar código
php artisan serve
npm run dev
