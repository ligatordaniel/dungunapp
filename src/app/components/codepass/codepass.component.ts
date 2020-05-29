import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-codepass',
  templateUrl: './codepass.component.html',
  styleUrls: ['./codepass.component.scss']
})
export class CodepassComponent implements OnInit {
  nombreEvento = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  validacion(text: string) {
    if (text === 'hellodemo') {
      this.router.navigateByUrl(text);
    } else if (text === 'cliente001') {
      this.router.navigateByUrl(text);
    }  else if (text === 'cliente002') {
      this.router.navigateByUrl(text);
    } else if (text === 'cliente003') {
      this.router.navigateByUrl(text);
    } else {
      alert('el codigo no existe');
    }
  }
}
