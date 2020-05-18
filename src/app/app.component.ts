import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';

  ngOnInit() {
    const send$ = fromEvent(document.getElementById('send'), 'click');
    const stop$ = fromEvent(document.getElementById('stop'), 'click');
  
    const logging$ = send$.pipe(
      tap((event) => console.log('Time: ', new Date()))
    );
    
    logging$.pipe(
      takeUntil(stop$)
    ).subscribe();
  }
}
