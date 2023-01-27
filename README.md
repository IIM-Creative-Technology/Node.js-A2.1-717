# Node.js-A2.1-717

## Dépendances :

Le projet utilise 3 librairies de Node.js:

- Cors
- Express 
- Socket.io

## Comment installer le projet ? :

- Vous avez simplement à télécharger le zip
- Ouvrir un terminal dans le dossier
- Exécuter ```npm install```
- Puis lancer ```npm run dev```
- Enfin cliquer simplement sur le lien renvoyer dans le terminal.

## Documentation API (Swagger) : 

- ```/api/user``` : Gestion des Utilisateurs
    - GET ```/api/user```  : informations de l’utilisateur (sans le mot de passe !)
    - POST ```/api/user``` ou ```/api/user/signup``` : Crée un utilisateur
    - DELETE ```/api/user``` : Supprime un utilisateur (à valider)
    - POST ```/api/user/login```  : Log l’utilisateur
    - GET ```/api/user/logout``` : Deconnecter l’utilisateur
- ```/api/chat``` : Gestion du chat (lier au Websocket)
    - GET ```/api/chat``` : Récupere tous les message
    - GET ```/api/chat/:userid``` : Récupere tous les message pour un utilisateur (userid)
    - POST ```/api/chat``` : Envoie un message

## Consignes :

#### _Règles :_

- Projet à 4
- Créer une API avec une stack Node.js et consommer via un frontend*
- Projet sur GitHub classroom
- Présentation vendredi fin de séance
- Fin du projet dimanche 23h
- Le Back-end et le front-end sont séparés. Echange via API.

#### _Objectifs :_

| Taches  | Descriptions | Finit ? |
| ------------- |:-------------:|:-------------:|
| Créer un serveur Express | Mettre en place la création d’un serveur | 🧑‍💻 |
| Implémenter socket.io | Lier plusieurs clients entre eux afin de communiquer en temps réel | 🧑‍💻 |
| Routes | Gestion CRUD | 🧑‍💻 |
| Gérer CORS | Gestion de CORS pour les routes API et les sockets | 🧑‍💻 |
| Lier à une base de données | Connexion, et gestion CRUD | 🧑‍💻 |
| Documentation | API, installation et autres | 🧑‍💻 |
| Faire des tests | Vérifier son code | 🧑‍💻 |
| Authentification | Gestion des utilisateurs (token) | 🧑‍💻 |
| Clean code | Patron de conception, refactorisation … | 🧑‍💻 |
| Feature : Chat | Echange de message entres utilisateurs | 🧑‍💻 |
| Pour aller plus loin | Fonctionnalité en temps réel | 🧑‍💻 |

#### _Satcks Obligatoires :_

- Node.js
- Express
- Socket.io
- Frontend (html/js) (framework possible)
- Base de données MongoDB

#### _Clean code obligatoire :_

- README détaillé
- Utilisation de l’api
- Gestion de git propre
- Données sensibles non dévoilées
- ```Gitignore``` intelligent (Pas de node_modules !)

#### _Fonctionnalités obligatoires :_

- Creation de compte
- Connexion à un compte
- Deconnexion de compte
- Suppression de compte
- Echange de message
- Reception de message en temps réel