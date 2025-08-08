import { Component, OnInit } from '@angular/core';
import { PartService } from '../../services/part.service';
import { Part } from '../../models/part';
import { Router } from '@angular/router';

@Component({
  selector: 'app-part-list',
  templateUrl: './part-list.component.html'
})
export class PartListComponent implements OnInit {
  parts: Part[] = [];
  pcId = 4; // change if user chooses a PC

  constructor(private svc: PartService, private router: Router) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.svc.getPartsByPC(this.pcId).subscribe({
      next: data => this.parts = data || [],
      error: err => {
        console.error(err);
        alert('Error loading parts. Check backend.');
      }
    });
  }

  delete(id?: number): void {
    if (!id) return;
    if (!confirm('Delete this part?')) return;
    this.svc.deletePart(id).subscribe({
      next: () => this.load(),
      error: err => {
        console.error(err);
        alert('Error deleting part.');
      }
    });
  }

  edit(id?: number): void {
    if (!id) return;
    this.router.navigate(['/parts/edit', id]);
  }

  view(id?: number): void {
    if (!id) return;
    this.router.navigate(['/parts/view', id]);
  }
}
