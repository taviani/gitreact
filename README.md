C'est juste une version de [Create React App](https://github.com/facebook/create-react-app) dont j'ai modifié la couleur de fond.

Toute l'astuce réside dans le fichier Dockerfile et dans le lien entre mon compte Github et hub.docker.com.

Les autres fichiers interessants sont .gitignore et .dockerignore

Ainsi, à chaque commit, le fichier Dockerfile est exécuté et l'appli est buildée puis servie dans un conteneur.

C'est pratique pour le déploiement, il suffit de demander l'image toute prête à Docker.

Je suis content de mon premier dépot Github. J'aime quand ça marche !
