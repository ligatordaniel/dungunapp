import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hellodemo',
  templateUrl: './hellodemo.component.html',
  styleUrls: ['./hellodemo.component.scss']
})
export class HellodemoComponent implements OnInit {
  showPlayButton = true;  /*para crear el toggle de play y stop*/
  showStopButton = false; /*para crear el toggle de play y stop*/
  /*url = 'https://radio.cloudserver.cl:7035/stream';*/   /*mi streming*/
  /*url = 'https://radio.acktib.com:8443/radio.ogg';*/   /*otro streming*/
  /*url = 'https://av03.upstream-media.ch/canal3francais-192.mp3';*/   /*radioTest*/
  url = '../../assets/media/audioPrueba1.mp3';   /*streaming actual*/

  constructor() { }

  ngOnInit(): void {
  }

}
