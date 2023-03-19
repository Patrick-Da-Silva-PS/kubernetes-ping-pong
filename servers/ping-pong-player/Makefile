IMAGE_NAME=ping-pong-player
DOCKERFILE_LOCATION=docker/Dockerfile
APP_SERVER_PORT=3456
PATH_TO_ENV_FILE=./env_vars/production
PATH_TO_CONTAINER_ENV_FILE=/usr/app/env_vars/production

build_docker_image:
	docker build . -t $(IMAGE_NAME) -f $(DOCKERFILE_LOCATION)

build_docker_image_no_cache:
	docker build . -t $(IMAGE_NAME) -f $(DOCKERFILE_LOCATION) --no-cache

run_docker_image:
	docker run -d --volume $(PATH_TO_ENV_FILE):$(PATH_TO_CONTAINER_ENV_FILE) -p 80:$(APP_SERVER_PORT) $(IMAGE_NAME)

kill_docker_container:
	docker kill $$(docker ps -qf "ancestor=$(IMAGE_NAME)")