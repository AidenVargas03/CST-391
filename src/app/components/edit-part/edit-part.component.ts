import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartService } from '../../services/part.service';
import { Part } from '../../models/part';

@Component({
  selector: 'app-edit-part',
  templateUrl: './edit-part.component.html'
})
export class EditPartComponent implements OnInit {
  part: Part = { pcId: 1, name: '', type: '', price: 0, quantity: 0 };

  constructor(
    private route: ActivatedRoute,
    private svc: PartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) return;
    this.svc.getPartById(id).subscribe({
      next: p => {
        this.part = p;
      },
      error: err => {
        console.error(err);
        alert('Error loading part');
      }
    });
  }

  update(): void {
    if (!this.part || !this.part.id) return;
    this.svc.updatePart(this.part.id, this.part).subscribe({
      next: () => this.router.navigate(['/parts']),
      error: err => {
        console.error(err);
        alert('Error updating part.');
      }
    });
  }
}
