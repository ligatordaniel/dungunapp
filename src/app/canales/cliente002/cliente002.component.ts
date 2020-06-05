import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente002',
  templateUrl: './cliente002.component.html',
  styleUrls: ['./cliente002.component.scss']
})
export class Cliente002Component implements OnInit {
  showPlayButton = true;  /*para crear el toggle de play y stop*/
  showStopButton = false; /*para crear el toggle de play y stop*/
  /*url = 'https://radio.cloudserver.cl:7035/stream';*/   /*mi streming*/
  /*url = 'http://190.96.82.67:8000/radio.ogg';*/   /*otro streming*/
  /*url = 'https://av03.upstream-media.ch/canal3francais-192.mp3';*/   /*radioTest*/
  url = 'http://190.96.82.67:8000/radio.ogg';   /*streaming actual*/

  constructor() { }

  ngOnInit(): void {
  }

}
