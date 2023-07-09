import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent implements OnInit {
  developer!: Developer;

  constructor() {}

  ngOnInit() {
    const skills: Skill[] = [
      new Skill(
        'Angular',
        'https://miro.medium.com/v2/resize:fit:256/1*8HndWtUBXmokgvrEaOpirw.png',
        'https://angular.io'
      ),
      new Skill(
        'React',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
        'https://react.dev/'
      ),
      new Skill(
        'Express',
        'https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.png',
        'https://expressjs.com/fr/'
      ),
      new Skill(
        'Spring',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXnCKu1a97PCQjo4_5Zd39xvsXCE6EM4uBdgVe6Zo_zpAK_7C_w4CJ6SlII1Ml23wVlf4&usqp=CAU',
        'https://spring.io/'
      ),
    ];

    this.developer = new Developer(
      'Levillain',
      'Alexandre',
      34,
      'Male',
      'Je suis chef de guerre moi, je suis pas là pour secouer des drapeaux et jouer de la trompette. Ah ben c’est sûr que c’est pas Jo l’rigolo. Ben quoi? C’est pas si grave que ça! Non mais maintenant il faut se tirer dans l’autre sens. Mais ils ont pas le droit de décider de la retraite eux-mêmes! On l’a dit et redit ça! On construit un barrage, après on lance de la caillasse de l’autre côté de la rivière pour faire croire aux autres qu’on a traversé dans l’autre sens, une fois qu’ils sont au milieu, on casse le barrage et on les noie. Faut faire comme avec les scorpions qui se suicident quand ils sont entourés par le feu. ',
      skills
    );
  }
}
