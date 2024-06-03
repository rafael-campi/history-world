FROM node:21.7.0-alpine

WORKDIR /back-end

COPY package*.json .

RUN apk update && apk add tzdata && apk add --no-cache bash && \
    npm install -g @nestjs/cli && npm install -g yarn@latest /back-end

ENTRYPOINT echo "A data do servidor é: $(date +'%d/%m/%Y %H:%m:%S')"

USER node
