.PHONY: run stop clean help

CONTAINER_NAME := my-website-nginx
IMAGE := nginx
PORT_HOST := 3000
PORT_CONTAINER := 80

help:
	@echo "Available commands:"
	@echo "  make run    - Start nginx container with stitch directory mounted"
	@echo "  make stop   - Stop the running container"
	@echo "  make clean  - Remove the stopped container"

run:
	docker run -d --name $(CONTAINER_NAME) -p $(PORT_HOST):$(PORT_CONTAINER) \
		 -v $(PWD)/src:/usr/share/nginx/html $(IMAGE)
	
stop:
	docker stop $(CONTAINER_NAME) || true

clean: stop
	docker rm $(CONTAINER_NAME) || true
	@echo "Container removed"
