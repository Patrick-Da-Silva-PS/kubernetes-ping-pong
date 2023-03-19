PING_PONG_CONFIGMAP_TEMPLATE_LOCATION=./templates/configmaps/ping-pong-player.yaml
PING_PONG_DEPLOYMENT_TEMPLATE_LOCATION=./templates/deployments/ping-pong-player.yaml
PING_PONG_SERVICE_TEMPLATE_LOCATION=./templates/services/ping-pong-player.yaml
PING_PONG_PLAYER_IMAGE_NAME=ping-pong-player
PING_PONG_SERVICE_NAME=ping-pong-player

start_minikube:
	minikube start

start_ping_pong_deployment: 
	kubectl apply -f $(PING_PONG_CONFIGMAP_TEMPLATE_LOCATION)
	kubectl apply -f $(PING_PONG_DEPLOYMENT_TEMPLATE_LOCATION)
	kubectl apply -f $(PING_PONG_SERVICE_TEMPLATE_LOCATION)

load_docker_images:
	minikube image load $(PING_PONG_PLAYER_IMAGE_NAME)

show_full_service_url:
	minikube service $(PING_PONG_SERVICE_NAME)