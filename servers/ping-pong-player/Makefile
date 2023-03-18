IMAGE_NAME=ping-pong-player
DOCKERFILE_LOCATION=docker/Dockerfile
APP_SERVER_PORT=3456

build_docker_image:
	docker build . -t $(IMAGE_NAME) -f $(DOCKERFILE_LOCATION)

build_docker_image_no_cache:
	docker build . -t $(IMAGE_NAME) -f $(DOCKERFILE_LOCATION) --no-cache

run_docker_image:
	docker run -d -p $(APP_SERVER_PORT):$(APP_SERVER_PORT) $(IMAGE_NAME)