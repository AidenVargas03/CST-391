import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PcService } from '../../services/pc.service';
import { PC } from '../../models/pc';

@Component({
  selector: 'app-pc-create',
  templateUrl: './pc-create.component.html'
})
export class PcCreateComponent {
  pc: PC = { name: '', owner: '' };

  constructor(private pcService: PcService, private router: Router) {}

  addPC(): void {
    if (!this.pc.name || !this.pc.owner) {
      alert('Name and Owner are required!');
      return;
    }
    this.pcService.addPC(this.pc).subscribe(() => {
      alert('PC created!');
      this.router.navigate(['/pcs']);
    });
  }
}
