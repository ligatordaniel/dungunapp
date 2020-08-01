import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente003',
  templateUrl: '../../components/player/player.component.html',
  styleUrls: ['../../components/player/player.component.scss']
})
export class Cliente003Component implements OnInit {
  showPlayButton = true;  /*para crear el toggle de play y stop*/
  showStopButton = false; /*para crear el toggle de play y stop*/
  url = 'https://radiostreaming.cloudserverlatam.com/8102/stream';   /*otro streming*/

  constructor() { }

  ngOnInit(): void {
  }

}
//https://av03.upstream-media.ch/canal3francais-192.mp3
//https://radiostreaming.cloudserverlatam.com/8102/stream
