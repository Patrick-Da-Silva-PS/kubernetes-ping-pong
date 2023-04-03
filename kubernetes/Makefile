PING_PONG_CONFIGMAP_TEMPLATE_LOCATION=./templates/configmaps/ping-pong-player.yaml
PING_PONG_DEPLOYMENT_TEMPLATE_LOCATION=./templates/deployments/ping-pong-player.yaml
PING_PONG_SERVICE_TEMPLATE_LOCATION=./templates/services/ping-pong-player.yaml
PING_PONG_PLAYER_IMAGE_NAME=ping-pong-player
PING_PONG_SERVICE_NAME=ping-pong-player

start_minikube:
	minikube start --cpus 8
	minikube addons enable ingress

start_ping_pong_deployment: 
	kubectl apply -f $(PING_PONG_CONFIGMAP_TEMPLATE_LOCATION)
	kubectl apply -f $(PING_PONG_DEPLOYMENT_TEMPLATE_LOCATION)
	kubectl apply -f $(PING_PONG_SERVICE_TEMPLATE_LOCATION)

load_docker_images:
	minikube image load $(PING_PONG_PLAYER_IMAGE_NAME)

show_full_service_url:
	minikube service $(PING_PONG_SERVICE_NAME)

### ELK ###
ELK_NAMESPACE=elk
ELK_TEMPLATES_PATH=./templates/ELK

# ElasticSearch
ELASTICSEARCH_RELEASE_NAME=elasticsearch

elasticsearch_start:
	helm upgrade --install $(ELASTICSEARCH_RELEASE_NAME) $(ELK_TEMPLATES_PATH)/elasticsearch --namespace $(ELK_NAMESPACE)

elasticsearch_stop:
	helm uninstall $(ELASTICSEARCH_RELEASE_NAME) --namespace $(ELK_NAMESPACE)

elasticsearch_restart: 
	elasticsearch_stop
	elasticsearch_start

# Logstash
LOGSTASH_RELEASE_NAME=logstash

logstash_start:
	helm upgrade --install $(LOGSTASH_RELEASE_NAME) $(ELK_TEMPLATES_PATH)/logstash --namespace $(ELK_NAMESPACE)

logstash_stop:
	helm uninstall $(LOGSTASH_RELEASE_NAME) --namespace $(ELK_NAMESPACE)

logstash_restart: 
	logstash_stop
	logstash_start

# Filebeat
FILEBEAT_RELEASE_NAME=filebeat

filebeat_start:
	helm upgrade --install $(FILEBEAT_RELEASE_NAME) $(ELK_TEMPLATES_PATH)/filebeat --namespace $(ELK_NAMESPACE)

filebeat_stop:
	helm uninstall $(FILEBEAT_RELEASE_NAME) --namespace $(ELK_NAMESPACE)

filebeat_restart: 
	filebeat_stop
	filebeat_start

# Kibana
KIBANA_RELEASE_NAME=kibana

kibana_start:
	helm upgrade --install $(KIBANA_RELEASE_NAME) $(ELK_TEMPLATES_PATH)/kibana --namespace $(ELK_NAMESPACE)

kibana_stop:
	helm uninstall $(KIBANA_RELEASE_NAME) --namespace $(ELK_NAMESPACE)

kibana_restart: 
	kibana_stop
	kibana_start

# Whole stack
create_elk_namespace:
	kubectl create ns $(ELK_NAMESPACE)
	
elk_start:
	make elasticsearch_start
	make filebeat_start
	make logstash_start
	make kibana_start