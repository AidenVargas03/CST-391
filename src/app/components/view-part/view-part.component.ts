import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartService } from '../../services/part.service';
import { Part } from '../../models/part';

@Component({
  selector: 'app-view-part',
  templateUrl: './view-part.component.html'
})
export class ViewPartComponent implements OnInit {
  part: Part | null = null;

  constructor(private route: ActivatedRoute, private svc: PartService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) return;
    this.svc.getPartById(id).subscribe({
      next: p => this.part = p,
      error: err => {
        console.error(err);
        alert('Error loading part');
      }
    });
  }
}
