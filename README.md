# next-nest-graphql

- template for next-nest-graphql

## Technologies

### Common

- Docker
- ESLint
- Firebase Authentication
- GraphQL
- Husky
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

```shell
make install
```

2. set up firebase

- set firebase adminsdk as filename "firebase-adminsdk.json" in the src/auth folder(backend)
- set firebase key in the .env file(frontend)

3. start the server

```shell
docker compose up
```

## Production(Docker)

1. build docker container

```shell
make build-prod
```

**to test**

```shell
make up-prod
```
