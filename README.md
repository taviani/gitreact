# GitReact

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/2daade0cbe8d42f08b8f83c74d3f559b)](https://www.codacy.com/gh/taviani/gitreact/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=taviani/gitreact&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.org/taviani/gitreact.svg?branch=master)](https://travis-ci.org/taviani/gitreact) [![Known Vulnerabilities](https://snyk.io/test/github/taviani/gitreact/badge.svg)](https://snyk.io/test/github/taviani/gitreact)

C'est juste une version de [Create React App](https://github.com/facebook/create-react-app) dont j'ai modifié la couleur de fond.

Toute l'astuce réside dans le fichier Dockerfile et dans le lien entre mon compte Github et hub.docker.com.

Les autres fichiers interessants sont .gitignore et .dockerignore

Ainsi, à chaque commit, le fichier Dockerfile est exécuté et l'appli est buildée puis servie dans un conteneur.

C'est pratique pour le déploiement, il suffit de demander l'image toute prête à Docker.

Je suis content de mon premier dépot Github. J'aime quand ça marche !

Sauf que ça ne marche plus :

-  travis-ci.org est arrêté

-  L'auto build de docker hub est devenu une feature payante

## Todo

-  remettre l'auto build sous forme de workflow : github action

## How to use

`docker run -d -p 3000:80 dockedlac/gitreact:latest`
