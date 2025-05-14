#!/bin/bash
# Script de instalação para o projeto Focus On

echo "=== Instalando dependências do projeto Focus On ==="

# Verifica se o Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "Node.js não encontrado. Por favor, instale o Node.js para continuar."
    echo "Visite https://nodejs.org/ para instruções de instalação."
    exit 1
fi

# Instala dependências
echo "Instalando dependências..."
npm install

# Verifica se live-server está instalado
if ! command -v live-server &> /dev/null; then
    echo "Instalando live-server globalmente..."
    npm install -g live-server
fi

# Cria diretório de ícones se não existir
if [ ! -d "icons" ]; then
    echo "Criando diretório de ícones..."
    mkdir -p icons
fi

echo ""
echo "=== Instalação concluída! ==="
echo ""
echo "Para iniciar o aplicativo, execute:"
echo "npm start"
echo ""
echo "Para preparar como extensão do Chrome:"
echo "1. Abra o Chrome e digite chrome://extensions/"
echo "2. Ative o modo de desenvolvedor"
echo "3. Clique em 'Carregar sem compactação' e selecione a pasta deste projeto"
echo ""
