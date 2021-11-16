# Ambiente de Producción

## Tecnologías

### Hosting - Digital Ocean

La aplicación está completamente alojada en Digital Ocean, dentro de un Droplet construido sobre el stack LAMP.

![alt text](https://www.grupobits.co/wp-content/uploads/2020/05/digital-ocean.png)

Una stack “LAMP” es un conjunto de aplicaciones de software de código abierto que se suelen instalar juntas para que un servidor pueda alojar aplicaciones y sitios web dinámicos escritos en PHP. Este término es en realidad un acrónimo que representa al sistema operativo Linux, con el servidor web Apache. Los datos del sitio se almacenan en una base de datos MySQL y el contenido dinámico se procesa mediante PHP.

Dicho droplet utiliza el plan Basic de Digital Ocean, con un costo de 5 USD al mes.

La siguiente [guia oficial] detalla el proceso para configurar un droplet LAMP idéntico al usado actualmente por la aplicación.

[guia oficial]: https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-20-04-es

### Integración - Facebook

La aplicación hace uso de la API [Oembed Page] de Facebook para mostrar el feed de la cuenta de Casa Loohl dentro de la página de inicio.

Para lograr tal integración, fue necesario crear una app en el [portal de desarrolladores de Facebook]. La cual hace uso del permiso Oembed Read para obtener e incrustar el portal de Facebook.

[Oembed Page]: https://developers.facebook.com/docs/graph-api/reference/oembed-page/
[portal de desarrolladores de Facebook]: https://developers.facebook.com/

### Integración - Medium

Para mostrarle los últimos artículos publicados a los usuarios que entran a la página de Casa Loohl, la apliacación hace uso de la API de Medium.

Los detalles sobre dicha API se encuentran en la [documentación oficial de Medium].

[documentación oficial de Medium]: https://github.com/Medium/medium-api-docs

### Motor de pagos - PayPal

Los pagos asociados a la venta de artículos y recibo de donaciones dentro de la página de Casa Loohl se resuelven a través de una integración con el servicio PayPal.

La siguiente [guia oficial] contiene los detalles específicos sobre el funcionamiento de tal integración.

[guia oficial]: https://developer.paypal.com/docs/paypal-payments-standard/integration-guide/pps-integration/