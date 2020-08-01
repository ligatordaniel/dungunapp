import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente001',
  templateUrl: '../../components/player/player.component.html',
  styleUrls: ['../../components/player/player.component.scss']
})
export class Cliente001Component implements OnInit {
  showPlayButton = true;  /*para crear el toggle de play y stop*/
  showStopButton = false; /*para crear el toggle de play y stop*/
  url = 'https://radiostreaming.cloudserverlatam.com/8102/stream';   /*streaming actual*/

  constructor() { }

  ngOnInit(): void {
  }

}
