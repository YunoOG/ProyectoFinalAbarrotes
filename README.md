# Abarrotes Olan

**Abarrotes Olan** es un proyecto de gestión y ventas desarrollado utilizando Laravel y React. Este README contiene las instrucciones necesarias para instalar y configurar el proyecto en tu entorno local.

![Abarrotes Olan Banner](https://via.placeholder.com/800x300.png?text=Abarrotes+Olan)

## 📋 Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes en tu sistema:

- Node.js (versión recomendada: última versión LTS)
- Composer
- PHP
- MySQL
- Git (opcional)

## 🛠️ Instalación

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd nombre-del-repositorio
```

### 2. Instalar dependencias de npm

```bash
npm install
npm install react@latest react-dom@latest
npm install i @vitejs/plugin-react
```

### 3. Actualizar dependencias de Composer

```bash
composer update
```

### 4. Instalar dependencias de Composer

```bash
composer install
```

### 5. Configurar el archivo `.env`

En el directorio raíz, encontrarás el archivo `.env.example`. Duplícalo y renómbralo como `.env`. Luego, modifica el archivo `.env` según las configuraciones de tu proyecto:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=dbsistemaventas
DB_USERNAME=root
DB_PASSWORD=
```

### 6. Generar la clave de seguridad

```bash
php artisan key:generate
```

### 7. Ejecutar las migraciones

```bash
php artisan migrate
```

### 8. Ejecutar los seeders

Esto creará un usuario administrador en la base de datos. Puedes revisar las credenciales del usuario en el archivo `database/seeders/UserSeeder`.

```bash
php artisan db:seed
```

### 9. Iniciar el servidor de desarrollo(los dos al mismo tiempo en diferente terminales)

```bash
php artisan serve
npm run dev
```

## 🤝 Equipo

Crea un fork del repositorio, realiza tus cambios y envía un pull request. 


