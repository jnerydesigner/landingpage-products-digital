#!/bin/bash
set -e # Faz o script parar no primeiro erro

echo "🚀 Iniciando deploy..."

npm ci

# Constrói a aplicação
npm run build

echo "✅ Deploy concluído com sucesso!"
