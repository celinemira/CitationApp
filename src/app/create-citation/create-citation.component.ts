import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-citation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-citation.component.html',
  styleUrl: './create-citation.component.css',
  template: 
  `<form>
  <label>Autheur:</label>
  <input type="text" [(ngModel)]="author" name="author">
  <br>
  <label>Citation:</label>
  <textarea [(ngModel)]="citation" name="citation"></textarea>
  <br>
  <label>Image:</label>
  <input type="text" [(ngModel)]="img" name="img">
  <br>
  <button type="submit" (click)="onSubmit()">Soumettre</button>
  </form> 
  `,
  styles:[]
})

export class FormComponent {
  author: string = '';
  citation: string = '';
  img: string = '';

  onSubmit() {
    console.log(`Autheur: ${this.author}`);
    console.log(`Citation: ${this.citation}`);
    console.log(`Image: ${this.img}`);
  }
}


export class CreateCitationComponent {

}
