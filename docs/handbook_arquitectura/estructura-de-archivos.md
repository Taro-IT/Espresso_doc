# Estructura de Archivos

A continuación describiremos los directorios y archivos más importantes para facilitar el entendimiento del funcionamiento del proyecto.


![alt text](https://manuais.iessanclemente.net/images/f/f1/Estructura-archivos-laravel.jpg)

## El directorio App

El directorio app contiene el código central de la aplicación. Casi todas las clases de la aplicación estarán en este directorio.

## El directorio Bootstrap

El directorio bootstrap contiene el archivo app.php, que inicia el marco. Este directorio también alberga un directorio de cache que contiene los archivos generados por el marco para la optimización del rendimiento, como los archivos de caché de rutas y servicios.

## El directorio Config

El directorio config, como su nombre indica, contiene todos los archivos de configuración de la aplicación.

## El directorio Database

El directorio database contiene las migraciones de bases de datos, fábricas de modelos y semillas.

## El directorio Public

El directorio public contiene el archivo index.php, el cual es el punto de entrada para todas las peticiones entrando a la aplicación, además de configurar el autoloading. Este directorio también contiene los assets, tales como imágenes JavaScript y CSS.

## El directorio Resources

El directorio resources contiene las vistas, así como los activos crudos no compilados como LESS, SASS o JavaScript. Este directorio también alberga todos los archivos de tu idioma.

## El Directorio Routes

El diretorio routes contiene todas las definiciones de rutas para la aplicación. Por defecto, se incluyen varios archivos de rutas con Larave: web.php, api.php, console.php y channels.php.

El archivo web.php contiene las rutas que el RouteServiceProvider coloca en el grupo de middleware web, que proporciona el estado de sesión, la protección CSRF y la encriptación de cookies. Debdio a que la aplicación no ofrece una API sin estado, RESTful, lo más probable es que todas las rutas estén definidas en el archivo web.php.

El archivo api.php contiene las rutas que el RouteServiceProvider coloca en el grupo de middleware api, que proporciona la limitación de la tasa. Estas rutas están pensadas para ser apátridas, por lo que las solicitudes que entren en la aplicación a través de estas rutas están pensadas para ser autenticadas mediante tokens y no tendrán acceso al estado de sesión.

El archivo console.php es donde se pueden definir todos los comandos de consola basados en el cierre. Cada Closure está ligado a una instancia de comando permitiendo un enfoque simple para interactuar con los métodos IO de cada comando. Aunque este archivo no define rutas HTTP, define puntos de entrada (rutas) basados en la consola en la aplicación.

El archivo channels.php es donde se pueden registrar todos los canales de difusión de eventos que la aplicación soporta.

## El directorio Storage

El directorio storage contiene las plantillas Blade compiladas, sesiones basadas en archivos, cachés de archivos y otros archivos generados por el framework. Este directorio está segregado en los directorios app, framework, y logs. El directorio app puede utilizarse para almacenar cualquier archivo generado por la aplicación. El directorio framework se utiliza para almacenar los archivos generados por el framework y los cachés. Por último, el directorio logs contiene los archivos de registro de la aplicación.

## El directorio Tests

El directorio tests contiene las pruebas automatizadas. Un ejemplo de prueba PHPUnit se proporciona fuera de la caja. Cada clase de prueba debe ser sufijada con la palabra Test. Puede ejecutar las pruebas usando los comandos phpunit o php vendor/bin/phpunit.

## El directorio Vendor

El directorio vendor contiene las dependencias de Composer.
