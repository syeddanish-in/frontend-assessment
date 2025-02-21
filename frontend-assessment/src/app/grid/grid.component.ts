import { Component } from '@angular/core';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    standalone: true,
})
export class GridComponent {
  boxes: string[] = Array(9).fill('white'); // Track box colors
  clickOrder: number[] = []; // Track the order of clicks

  // Handle box click
  handleBoxClick(index: number): void {
    if (this.boxes[index] === 'white') {
      this.boxes[index] = 'black';
      this.clickOrder.push(index); // Add clicked box index to order
    }
  }

  // Handle reset button click
  handleReset(): void {
    let delay = 0;
    this.clickOrder.forEach((index) => {
      setTimeout(() => {
        this.boxes[index] = 'white';
      }, delay);
      delay += 300; // Add a 300ms delay between each reset
    });
    this.clickOrder = []; // Clear the click order
  }
}