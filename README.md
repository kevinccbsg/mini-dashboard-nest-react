## Ucademy dashboard

In this webpage you can display some use info and create a new one. This repository has a Nestjs API with a MongoDB database and a react SPA page.

### How to execute

To execute this exercise in your local machine you need [docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/) installed. 

You need a `.env` file similar to the `.env.example`.

```
MONGO_TEST_CONNECTION=mongodb://localhost:27017/ucademy
MONGO_CONNECTION=mongodb://localhost:27017/ucademy
NODE_ENV=test
```

And you have to run these commands.

```bash
# create basic docker container
npm run docker
# provisionate the DB
npm run db:provisionate
```

If you want to run the APP you will have to run these commands in separated terminals:

```
npm run start:frontend
npm run start:backend
```

you can check API docs in [http://localhost:3333/api](http://localhost:3333/api), and the frontend (responsive) in [http://localhost:4200/](http://localhost:4200/).

**Recommended:** If you want to run API tests you can execute this command.

```
npm run test:backend
```

**Recommended:** If you want to run frontend tests you can use these commands.

```bash
# watch mode
npm run e2e:tests:open
# headless mode
npm run e2e:tests:run
```

## Future development

1. Add CI/CD script to execute tests and deploy application.
2. Improve frontend handling errors using [react-tostify](https://github.com/fkhadra/react-toastify);
3. Include more test scenarios in the API and the frontend.
4. Add intl with [i18next](https://www.i18next.com/).

# Some App/API screenshots

![ucademy api](https://raw.githubusercontent.com/kevinccbsg/mini-dashboard-nest-react/main/images/backend_swagger.png "ucademy api")
![page_desktop](https://raw.githubusercontent.com/kevinccbsg/mini-dashboard-nest-react/main/images/page_desktop.png "page_desktop")
![page_desktop_new_user](https://raw.githubusercontent.com/kevinccbsg/mini-dashboard-nest-react/main/images/page_desktop_new_user.png "page_desktop_new_user")
![page_desktop_profile](https://raw.githubusercontent.com/kevinccbsg/mini-dashboard-nest-react/main/images/page_desktop_profile.png "page_desktop_profile")
![mobile_version](https://raw.githubusercontent.com/kevinccbsg/mini-dashboard-nest-react/main/images/mobile_version.png "mobile_version")
![mobile_version_profile](https://raw.githubusercontent.com/kevinccbsg/mini-dashboard-nest-react/main/images/mobile_version_profile.png "mobile_version_profile")

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



