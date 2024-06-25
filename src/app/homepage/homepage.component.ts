import { Component, OnInit } from '@angular/core';
import { citationInterface } from '../shared/entities';
import { citationMock } from '../shared/mockCitation';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgFor],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  
  citations: citationInterface[]=[];

  ngOnInit(): void {
    this.fetchAll();
  }

  fetchAll(){
    this.citations= citationMock
  }

}
