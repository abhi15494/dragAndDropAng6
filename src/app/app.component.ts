import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  onDragStart(): void {
    console.log('start');
  }

  onDragMove(event: PointerEvent): void {
    console.log(`Move -> ${Math.round(event.clientX)} - ${Math.round(event.clientX)}`);
  }
  
  onDragEnd(): void {
    console.log('end');
  }
}
