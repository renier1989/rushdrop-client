# RushDrop
Practica Fulltack desarrollada con :  RactJs + Express + MongoDB + DropZone y más..

![main1](https://raw.githubusercontent.com/renier1989/rushdrop-client/main/public/portada.jpg)


# Descripción

Este es un proyecto Fullstack MERN, con el que podrás compartir fácil y rápidamente archivos con otras personas, estos archivos están cifrados de extremo a extremo y serán eliminados una vez se haya descargado. Si deseas expandir las opciones que te ofrece esta aplicación, como proteger lo que compartes con una contraseña, aumentar el tamaño de los archivos que compartes o incluso permitir más descargas, puedes crear una cuenta y disfrutar de estos beneficios.


### Características:

- Registro de nuevos usuarios
- Subir/Arrastrar archivos al DropZone
- Compartir archivos con un enlace
- inicio de Sesión con JWT
- Administrar tus enlaces con un usuario
- Proteger tus archivos con un password



# Demo

Puedes darle un vistazo al proyecto en ejecución [aqui](https://rushdrop-client-renier1989.vercel.app/)


# Tecnologías

**Frontend:** React, TailwindCSS, Context Api, Reducers, DropZone, Next.Js, Axios,formik, Vite.

**Backend:** NodeJs, Express, MongoDB, Multer,Bcrypt, JWT.


# ⚙ Instalación

Necesitas Node.js (^18) y Vite.js(^5)

Clona el repositorio con (https):
```
git clone https://github.com/renier1989/rushdrop-client.git 
```

Debes modificar las variables de entonces que podrás encontrar en el archivo "next.config.js" y asignar las rutas de tus proyectos tanto del backend como del frontend, este paso es importante para poder permitir la correcta descarga y acceso a los archivos compartidos.

Si harás un despliegue en algún servidor en la nube, no olvides ajustar estas rutas.

```
module.exports = {
    env: {
        backendURL: 'http://localhost:4000',
        frontendURL: 'http://localhost:3000'
    }
}
```


```
  cd rushdrop-client
  npm install or npm i
  npm run dev
```
    
# Instalación del Backend

para la instalación del Backend puedes ingresar al siguiente repositorio y seguir los pasos de instalación:

[https://github.com/renier1989/rushdrop-server.git](https://github.com/renier1989/rushdrop-server.git)


# 💻 About Me
Soy Fullstack Developer,
Puedes conocerme ingresando a mi pagina web personal [🔗](http://reniervargas.com/)