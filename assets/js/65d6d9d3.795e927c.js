"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[344],{3905:function(e,r,o){o.d(r,{Zo:function(){return d},kt:function(){return m}});var a=o(7294);function t(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function i(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,a)}return o}function n(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?i(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function c(e,r){if(null==e)return{};var o,a,t=function(e,r){if(null==e)return{};var o,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],r.indexOf(o)>=0||(t[o]=e[o]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var s=a.createContext({}),l=function(e){var r=a.useContext(s),o=r;return e&&(o="function"==typeof e?e(r):n(n({},r),e)),o},d=function(e){var r=l(e.components);return a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var o=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(o),m=t,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return o?a.createElement(h,n(n({ref:r},d),{},{components:o})):a.createElement(h,n({ref:r},d))}));function m(e,r){var o=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=o.length,n=new Array(i);n[0]=p;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,n[1]=c;for(var l=2;l<i;l++)n[l]=o[l];return a.createElement.apply(null,n)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},8076:function(e,r,o){o.r(r),o.d(r,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var a=o(7462),t=o(3366),i=(o(7294),o(3905)),n=["components"],c={},s="Estructura de Archivos",l={unversionedId:"handbook_arquitectura/estructura-de-archivos",id:"handbook_arquitectura/estructura-de-archivos",isDocsHomePage:!1,title:"Estructura de Archivos",description:"A continuaci\xf3n describiremos los directorios y archivos m\xe1s importantes para facilitar el entendimiento del funcionamiento del proyecto.",source:"@site/docs/handbook_arquitectura/estructura-de-archivos.md",sourceDirName:"handbook_arquitectura",slug:"/handbook_arquitectura/estructura-de-archivos",permalink:"/Espresso_doc/handbook_arquitectura/estructura-de-archivos",editUrl:"https://github.com/Taro-IT/Espresso_doc/edit/main/docs/handbook_arquitectura/estructura-de-archivos.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Diagrama de despliegue",permalink:"/Espresso_doc/handbook_arquitectura/diagrama-despliegue"},next:{title:"Stack de Tecnolog\xedas",permalink:"/Espresso_doc/handbook_arquitectura/stack-tecnologias"}},d=[{value:"El directorio App",id:"el-directorio-app",children:[]},{value:"El directorio Bootstrap",id:"el-directorio-bootstrap",children:[]},{value:"El directorio Config",id:"el-directorio-config",children:[]},{value:"El directorio Database",id:"el-directorio-database",children:[]},{value:"El directorio Public",id:"el-directorio-public",children:[]},{value:"El directorio Resources",id:"el-directorio-resources",children:[]},{value:"El Directorio Routes",id:"el-directorio-routes",children:[]},{value:"El directorio Storage",id:"el-directorio-storage",children:[]},{value:"El directorio Tests",id:"el-directorio-tests",children:[]},{value:"El directorio Vendor",id:"el-directorio-vendor",children:[]}],u={toc:d};function p(e){var r=e.components,o=(0,t.Z)(e,n);return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"estructura-de-archivos"},"Estructura de Archivos"),(0,i.kt)("p",null,"A continuaci\xf3n describiremos los directorios y archivos m\xe1s importantes para facilitar el entendimiento del funcionamiento del proyecto."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://manuais.iessanclemente.net/images/f/f1/Estructura-archivos-laravel.jpg",alt:"alt text"})),(0,i.kt)("h2",{id:"el-directorio-app"},"El directorio App"),(0,i.kt)("p",null,"El directorio app contiene el c\xf3digo central de la aplicaci\xf3n. Casi todas las clases de la aplicaci\xf3n estar\xe1n en este directorio."),(0,i.kt)("h2",{id:"el-directorio-bootstrap"},"El directorio Bootstrap"),(0,i.kt)("p",null,"El directorio bootstrap contiene el archivo app.php, que inicia el marco. Este directorio tambi\xe9n alberga un directorio de cache que contiene los archivos generados por el marco para la optimizaci\xf3n del rendimiento, como los archivos de cach\xe9 de rutas y servicios."),(0,i.kt)("h2",{id:"el-directorio-config"},"El directorio Config"),(0,i.kt)("p",null,"El directorio config, como su nombre indica, contiene todos los archivos de configuraci\xf3n de la aplicaci\xf3n."),(0,i.kt)("h2",{id:"el-directorio-database"},"El directorio Database"),(0,i.kt)("p",null,"El directorio database contiene las migraciones de bases de datos, f\xe1bricas de modelos y semillas."),(0,i.kt)("h2",{id:"el-directorio-public"},"El directorio Public"),(0,i.kt)("p",null,"El directorio public contiene el archivo index.php, el cual es el punto de entrada para todas las peticiones entrando a la aplicaci\xf3n, adem\xe1s de configurar el autoloading. Este directorio tambi\xe9n contiene los assets, tales como im\xe1genes JavaScript y CSS."),(0,i.kt)("h2",{id:"el-directorio-resources"},"El directorio Resources"),(0,i.kt)("p",null,"El directorio resources contiene las vistas, as\xed como los activos crudos no compilados como LESS, SASS o JavaScript. Este directorio tambi\xe9n alberga todos los archivos de tu idioma."),(0,i.kt)("h2",{id:"el-directorio-routes"},"El Directorio Routes"),(0,i.kt)("p",null,"El diretorio routes contiene todas las definiciones de rutas para la aplicaci\xf3n. Por defecto, se incluyen varios archivos de rutas con Larave: web.php, api.php, console.php y channels.php."),(0,i.kt)("p",null,"El archivo web.php contiene las rutas que el RouteServiceProvider coloca en el grupo de middleware web, que proporciona el estado de sesi\xf3n, la protecci\xf3n CSRF y la encriptaci\xf3n de cookies. Debdio a que la aplicaci\xf3n no ofrece una API sin estado, RESTful, lo m\xe1s probable es que todas las rutas est\xe9n definidas en el archivo web.php."),(0,i.kt)("p",null,"El archivo api.php contiene las rutas que el RouteServiceProvider coloca en el grupo de middleware api, que proporciona la limitaci\xf3n de la tasa. Estas rutas est\xe1n pensadas para ser ap\xe1tridas, por lo que las solicitudes que entren en la aplicaci\xf3n a trav\xe9s de estas rutas est\xe1n pensadas para ser autenticadas mediante tokens y no tendr\xe1n acceso al estado de sesi\xf3n."),(0,i.kt)("p",null,"El archivo console.php es donde se pueden definir todos los comandos de consola basados en el cierre. Cada Closure est\xe1 ligado a una instancia de comando permitiendo un enfoque simple para interactuar con los m\xe9todos IO de cada comando. Aunque este archivo no define rutas HTTP, define puntos de entrada (rutas) basados en la consola en la aplicaci\xf3n."),(0,i.kt)("p",null,"El archivo channels.php es donde se pueden registrar todos los canales de difusi\xf3n de eventos que la aplicaci\xf3n soporta."),(0,i.kt)("h2",{id:"el-directorio-storage"},"El directorio Storage"),(0,i.kt)("p",null,"El directorio storage contiene las plantillas Blade compiladas, sesiones basadas en archivos, cach\xe9s de archivos y otros archivos generados por el framework. Este directorio est\xe1 segregado en los directorios app, framework, y logs. El directorio app puede utilizarse para almacenar cualquier archivo generado por la aplicaci\xf3n. El directorio framework se utiliza para almacenar los archivos generados por el framework y los cach\xe9s. Por \xfaltimo, el directorio logs contiene los archivos de registro de la aplicaci\xf3n."),(0,i.kt)("h2",{id:"el-directorio-tests"},"El directorio Tests"),(0,i.kt)("p",null,"El directorio tests contiene las pruebas automatizadas. Un ejemplo de prueba PHPUnit se proporciona fuera de la caja. Cada clase de prueba debe ser sufijada con la palabra Test. Puede ejecutar las pruebas usando los comandos phpunit o php vendor/bin/phpunit."),(0,i.kt)("h2",{id:"el-directorio-vendor"},"El directorio Vendor"),(0,i.kt)("p",null,"El directorio vendor contiene las dependencias de Composer."))}p.isMDXComponent=!0}}]);