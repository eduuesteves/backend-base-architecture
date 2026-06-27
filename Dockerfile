FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependência primeiro (para usar cache do Docker)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o resto do código
COPY . .

# Só vira usuário node (sem permissões) após a linha 16
USER node

# Comando padrão para rodar a aplicação em modo dev
CMD ["npm", "run", "dev"]

