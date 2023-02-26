## Ucademy dashboard

In this webpage you can display some use info and create a new one. This repository has a Nestjs API with a MongoDB database and a react SPA page.

### How to execute

To execute this in local you need docker and docker-compose installed. You will have to run these commands.

```bash
# create basic docker container
npm run docker
# provisionate the DB
npm run db:provisionate
```

You will also need a `.env` file similar to the `.env.example`.

```
MONGO_TEST_CONNECTION=mongodb://localhost:27017/ucademy
MONGO_CONNECTION=mongodb://localhost:27017/ucademy
NODE_ENV=test
```

If you want to run the APP you will have to run these commands in separated terminals:

```
npm run start:frontend
npm run start:backend
```

you can check API docs in [http://localhost:3333/api](http://localhost:3333/api).

**Recommended:** If you want to run tests in the API you can execute this command.

```
npm run test:backend
```

# Prueba técnica

## Contexto y requerimientos:

Estamos desarrollando software para academias. Para estas la gestión de usuarios es primordial.
Las listas de usuarios son grandes y contienen muchísimos datos sobre el usuario,
por lo que deben ser muy performantes. En la prueba técnica deberás implementar la interfaz proporcionada y
usar los datos del JSON como una base de datos mockeada, este JSON esta situado en la raíz del repositorio (DB.json)

Proporcionamos en este repositorio un boilerplate con un stack similar al utilizado en Ucademy, NestJS para el backend y React para
el frontend.

`git clone git@github.com:Jeff909Dev/technical-assessment.git`

`npm install`

`npm run start:backend`

`npm run start:fronted`

## Enlaces:

[Interfaz de usuario](https://www.figma.com/file/n7HkjhcVD6dZISm9fu5FNG/Prueba-T%C3%A9cnica?node-id=0%3A1)

- No se proporciona una versión para dispositivos móviles pero si se implementa será valorada positivamente.
- El uso de Styled components será valorado.
- El uso de Redux / Zustand será valorado.


PD: El objetivo de la prueba es simplemente valorar las desiciones que toma el candidato a la hora de realizar la implementación. Hay muchas soluciones válidas a lo que aquí se plantea.

Happy hacking! 
:D
