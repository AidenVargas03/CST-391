import { Component, OnInit } from '@angular/core';
import { PcService, PC } from '../../services/pc.service';

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html'
})
export class PcListComponent implements OnInit {
  pcs: PC[] = [];

  constructor(private pcService: PcService) {}

  ngOnInit(): void {
    this.loadPCs();
  }

  loadPCs(): void {
    this.pcService.getAllPCs().subscribe(data => {
      console.log('PC data:', data); // For debugging
      this.pcs = data;
    });
  }
}
