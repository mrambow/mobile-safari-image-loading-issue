import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { concat, from, map, Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;  
  arr: number[];
  constructor(public http: HttpClient, private sanitizer: DomSanitizer) {
this.arr = [...Array(500).keys()]
  }

  something(){
    const image = this.http.get()
  }
}
