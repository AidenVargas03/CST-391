import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PartService } from '../../services/part.service';
import { Part } from '../../models/part';

@Component({
  selector: 'app-part-form',
  templateUrl: './part-form.component.html'
})
export class PartFormComponent {
  // default pcId = 1; change if you allow selecting PC
  part: Part = { pcId: 1, name: '', type: '', price: 0, quantity: 0 };

  constructor(private svc: PartService, private router: Router) {}

  add(): void {
    // simple validation
    if (!this.part.name || !this.part.type) {
      alert('Name and type required');
      return;
    }
    this.svc.addPart(this.part.pcId, this.part).subscribe({
      next: () => {
        // go to parts list
        this.router.navigate(['/parts']);
      },
      error: (err) => {
        console.error(err);
        alert('Error adding part');
      }
    });
  }
}
