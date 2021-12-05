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

1. Install packages

```shell
# terminal 1
cd backend
yarn install
```

```shell
# terminal 2
cd frontend
yarn install
```

2. create .env files and set up firebase

- set firebase adminsdk as filename "firebase-adminsdk.json" in the src/auth folder

```shell
# terminal 1
cp .env.example .env
```

- set firebase key in the .env file

```shell
# terminal 2
cp .env.example .env
```

3. start the server

**with docker**

```shell
docker compose build
docker compose up
```

**local**

```shell
# terminal 1
yarn dev
```

```shell
# terminal 2
yarn dev
```

TODO

- [ ] プロダクション時の挙動確認
- [ ] プロジェクトの初期設定をまとめて試す
- [ ] バックエンドの API をまとめておく
