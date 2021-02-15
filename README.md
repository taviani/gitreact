[![Codacy Badge](https://api.codacy.com/project/badge/Grade/add60ff90cce4aca970c7e716691f3d8)](https://app.codacy.com/app/devops_17/gitreact?utm_source=github.com&utm_medium=referral&utm_content=taviani/gitreact&utm_campaign=Badge_Grade_Dashboard)
[![Build Status](https://travis-ci.org/taviani/gitreact.svg?branch=master)](https://travis-ci.org/taviani/gitreact) [![Known Vulnerabilities](https://snyk.io/test/github/taviani/gitreact/badge.svg)](https://snyk.io/test/github/taviani/gitreact)

C'est juste une version de [Create React App](https://github.com/facebook/create-react-app) dont j'ai modifié la couleur de fond.

Toute l'astuce réside dans le fichier Dockerfile et dans le lien entre mon compte Github et hub.docker.com.

Les autres fichiers interessants sont .gitignore et .dockerignore

Ainsi, à chaque commit, le fichier Dockerfile est exécuté et l'appli est buildée puis servie dans un conteneur.

C'est pratique pour le déploiement, il suffit de demander l'image toute prête à Docker.

Je suis content de mon premier dépot Github. J'aime quand ça marche !

`docker run -d -p 3000:80 dockedlac/gitreact:latest`
