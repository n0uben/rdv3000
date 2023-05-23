# Examen 2022-2023
Benjamin Noureux

## Questionnaire

1. __Qu’est-ce que maven?__

Maven est un outil très pratique pour gérer les projets de développement d'application.
Il automatise plein de choses :
- la gestion des dépendances (un peu comme npm en js)
- la compilation du code (mvn compile/package)
- l'execution des tests (avec une gestion de dépendances pour les tests uniquement avec le <scope>)
Cela facilite grandement la gestion de projets Java et tout cela est géré dans un fichier : le POM.xml

2. __Quelle est l’arborescence d’un projet d’une application web utilisant maven ?__

```
nom_du_projet/
- src
---- main
-------- java (code source de l'app)
-------- resources (fichiers de resources)
-------- webapp (cfichiers web)
------------ web-inf (configuration pour JEE)
------------ ... (fichiers html, css...)
---- test (code source des tests unitaires et intégration)
-------- java
-------- resources
- POM.xml (fichier de config maven)
```

3. __Indiquer les 3 attributs nécessaires pour décrire un artefact maven__

Les 3 attributs nécessaires pour décrire un artefact maven sont :
- le groupip : le namespace de l'organisation qui a développé l'artefact (org.apache, org.slf4j, fr.iut, etc)
- l'artifactid : le nom de l'artefact tout simplement. Il doit etre écrits sans espaces
- la version de l'artefact : cela évitera des conflits ou des comportements inattendus

4. __Citer 2 autres outils «concurrents» de maven__

Les outils concurrents de maven :
- gradle : le principal concurrent de maven, basé sur groovy
- ant : autre outil, basé sur xml comme maven

5. __Qu’est-ce que le «TDD» ?__

Le TDD est le test driven development. 
C'est une manière de développer où l'on écrit d'abord les tests unitaires avant de coder réellement.
Ensuite, on code pour essayer de passer les tests un à un.

6. __Quels sont les principes «SOLID» ?__
Les principes SOLID sont des principes pour développer un code propre et évolutif.
- S : Single responsibility : le code (une classe, une methode) doit faire une et une seule chose
- O : Open / closed : on peut ajouter des fonctionnalités/fonctions mais on ne modifie pas le code existant
- L : substitution de Liskov : les objets doivent pouvoir etre remplacés par une autre classe étendant leur classe parent sans casser le programme
- I : Ségrégation des interfaces : les interfaces doivent être spécifiques à un besoin, et on doit préférer plusieurs interfaces à une seule générique + ne pas avoir d'interfaces non utilisées
- D : Inversion de dépendances : on doit dépendre des abstractions (des interfaces) et non des implémentations concrètes

Ces principes sont à la base du framework spring notamment.

7. __Citer 3 serveurs d’applications java__

- Tomcat (apache)
- websphere (IBM)
- JBoss (red hat)

8. __Dans quel fichier se trouve la configuration des servlets d’une application web ?__

La configuration des servlets d'une application web en Java est généralement définie dans le fichier "web.xml". 
Ce fichier est situé dans le répertoire "WEB-INF" de l'application web.

9. __Quelles sont les 3 directives spécifiées par les spécifications des JSP ? (les citer et indiquer leurs rôles)__

Les 3 directives spécifiées par les spécifications des JSP sont les suivantes :

- Directive de page (<%@ page ... %>) : Cette directive est utilisée pour spécifier les attributs et les paramètres de configuration pour une page JSP, comme le langage utilisé, les dépendances, les attributs de session, etc.

- Directive d'inclusion (<%@ include ... %>) : Cette directive est utilisée pour inclure le contenu d'un autre fichier JSP dans la page courante.

- Directive de taglib (<%@ taglib ... %>) : Cette directive est utilisée pour importer et déclarer des balises personnalisées (taglibs) dans une page JSP

10. __Donner une rapide définition de docker__

Docker, c'est un outil qui permet de mettre nos applications dans des conteneurs.
Ça nous évite de nous compliquer avec les différences entre les ordinateurs où l'application tourne. On peut emballer notre application avec tout ce dont elle a besoin et la faire tourner partout, que ce soit sur nos propres ordinateurs, sur des serveurs ou même dans le cloud. C'est super pratique et ça rend le déploiement des applications beaucoup plus facile et rapide.