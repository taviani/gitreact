# GitReact

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/2daade0cbe8d42f08b8f83c74d3f559b)](https://www.codacy.com/gh/taviani/gitreact/dashboard?utm_source=github.com&utm_medium=referral&utm_content=taviani/gitreact&utm_campaign=Badge_Grade)
[![Known Vulnerabilities](https://snyk.io/test/github/taviani/gitreact/badge.svg)](https://snyk.io/test/github/taviani/gitreact})

C'est juste une version de [Create React App](https://github.com/facebook/create-react-app) dont j'ai modifié la couleur de fond et à laquelle j'ai rajouté un hook.

Toute l'astuce réside dans le fichier Dockerfile et dans le workflow Github action qui utilise le secret Github pour se connecter à hub.docker.com.

Les autres fichiers interessants sont .gitignore et .dockerignore

Ainsi, à chaque commit, le fichier Dockerfile est exécuté et l'appli est buildée puis servie dans un conteneur.

C'est pratique pour le déploiement, il suffit de demander l'image toute prête à Docker.

## How to use the image from docker hub

`docker run -d -p 3000:80 dockedlac/gitreact:latest`

## How to build and run locally manualy

`docker build -t latest . && docker run -it -d -p 3000:80 latest`

## How to push to dockerhub (you must be logged in and use your credentials) manualy

`docker push dockedlac/gitreact:latest`

## Les anciennes commandes de travis

`docker build . -t gitreact:latest`
`docker run -d -p 8080:80 gitreact`
