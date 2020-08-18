import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clienteTesting',
  templateUrl: '../../components/player/player.component.html',
  styleUrls: ['../../components/player/player.component.scss']
})
export class ClienteTestingComponent implements OnInit {
  showPlayButton = true;  /*para crear el toggle de play y stop*/
  showStopButton = false; /*para crear el toggle de play y stop*/
  url = 'https://av03.upstream-media.ch/canal3francais-192.mp3';   /*otro streming*/

  constructor() { }

  ngOnInit(): void {
  }

}
//https://av03.upstream-media.ch/canal3francais-192.mp3
//https://radiostreaming.cloudserverlatam.com/8102/stream
//https://radiostreaming.cloudserverlatam.com/8104/demo
//https://av03.upstream-media.ch/canal3francais-192.mp3
//https://radiostreaming.cloudserverlatam.com/8102/stream

