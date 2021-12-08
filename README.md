# next-nest-graphql

- template for next-nest-graphql

## Technologies

### Common

- Docker
- ESLint
- Firebase Authentication
- GraphQL
- Prettier
- TypeScript

### Backend

- Apollo Server
- Nest.js
- Passport.js
- Prisma

### Frontend

- Apollo Client
- MUI
- Next.js
- React Hook Form

## Getting Started

1. execute command
- for docker

```shell
make install-docker
```

- for local

```shell
make install-local
```

2. set up firebase
- set firebase adminsdk as filename "firebase-adminsdk.json" in the src/auth folder(backend)
- set firebase key in the .env file(frontend)

3. start the server

**with docker**

```shell
docker compose up
```

**local**

```shell
cd backend
yarn dev
```

```shell
cd frontend
yarn dev
```



## Migration

- in backend
- for docker execute this command inside backend container

```shell
yarn prisma db push
```



## Production(Docker)

- change docker-compose target to 'production'
