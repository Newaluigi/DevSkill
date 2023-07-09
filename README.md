# WCS EXERCISE [Angular 07 - Communication entre les composants : @Input] 

## Result

![Capture d’écran 2023-07-09 035108](https://github.com/Newaluigi/DevSkill/assets/108535805/1a21dbd2-213b-46db-9306-0528265fae98)

## Challenge 💪
C'est une bonne situation ça, développeur ? 🤓

Tu vas créer 2 composants avec une hiérarchie parent/enfant :

* Le component parent (DeveloperComponent) sera chargé d'afficher les informations d'un développeur : son nom, son prénom, son âge ainsi que sa biographie.
* Il devra aussi posséder au minimum 2 compétences. Chaque compétence sera affichée dans un autre composant (SkillComponent).

Modèle de données de la classe Developer :

* lastName de type string
* firstName de type string
* age de type number
* gender de type string
* bio de type string
* skills est un tableau de type Skill

Modèle de données de la classe Skill :

* name de type string
* logo de type string
* site de type string

Structure du répertoire src/app :

app

├── ...

├── models

│   ├── developer.model.ts

│   └── skill.model.ts

├── developer

│   ├── developer.component.css

│   ├── developer.component.html

│   ├── developer.component.spec.ts

│   └── developer.component.ts

└── skill

    ├── skill.component.css

    ├── skill.component.html

    ├── skill.component.spec.ts

    └── skill.component.ts

Les dossier models, developer et skill doivent être au même niveau.

Certains répertoires (générés automatiquement par ng) ont volontairement été omis. Les fichiers *.spec.ts ne sont pas obligatoires.

Poste l'url de ta Sandbox comme solution.

Pour réaliser ce challenge, tu devras :

* Créer une classe Developer (developer.model.ts) représentant le modèle de données d'un développeur.
* Créer une classe Skill (skill.model.ts) représentant le modèle de données d'une compétence.
* Générer un composant <app-developer> (DeveloperComponent), qui sera chargé d'afficher les informations globales du développeur (nom, prénom, âge, sexe, biographie).
* Générer un composant <app-skill> (SkillComponent), qui sera chargé d'afficher une des compétences du développeur (nom de la technologie, logo et lien vers le site officiel).
* Le composant <app-developer> utilisera la directive *ngFor pour afficher autant de composants <app-skill> qu'il y a de compétences pour le développeur. C'est-à-dire qu'il n'y aura qu'un seul composant <app-skill> déclaré dans le HTML du composant <app-developer>
* Les deux composants <app-developer> et <app-skill> doivent être au même niveau hiérarchique dans le dossier projet (voir structure du projet).
* D'un point de vue structure HTML, <app-skill> est un composant enfant de <app-developer> et <app-developer> est un enfant de <app-root>.
* La compétence qui sera affichée par le composant <app-skill> lui sera transmise via binding [ ] grace au @Input().

### Critères de validation ✅

* La structure du projet est respectée.
* Les modèles de données Developer et Skill sont respectés.
* Les noms des composants et leurs propriétés sont respectés.
* Toutes les variables sont correctement typées et initialisées
* Les compétences sont transmises de <app-developer> vers <app-skill> en utilisant @Input.

<br>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
