include .env

COMPOSE = docker compose
UP = $(COMPOSE) up
RUN_BACK = $(COMPOSE) run back
RUN_FRONT = $(COMPOSE) run front

.env: ## copy .env file
	cp .env.example .env

up: ## Launch all containers
	$(UP)
up-prod: ## up production containers
	$(COMPOSE) -f production.yml up
back: ## backend and db
	$(UP) back
db: ## only db
	$(UP) db
build: ## build containers
	$(COMPOSE) build
build-prod: ## production build
	$(COMPOSE) -f production.yml build
mysql: ## go into db container
	docker compose exec db bash -c 'mysql -u $(DB_USERNAME) -p$(DB_PASSWORD) $(DB_DATABASE)'
down: ## down containers
	docker compose down -v --rmi local

install: ## install command
	cp .env.example .env
	cp frontend/.env.example frontend/.env
	cp backend/.env.example backend/.env
	cd frontend && yarn install
	cd backend && yarn install
build: ## build docker images
	docker compose build

help: ## help
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
