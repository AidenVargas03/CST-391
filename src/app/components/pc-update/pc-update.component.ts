import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PcService } from '../../services/pc.service';
import { PC } from '../../models/pc';

@Component({
  selector: 'app-pc-update',
  templateUrl: './pc-update.component.html'
})
export class PcUpdateComponent implements OnInit {
  pc: PC = { name: '', owner: '' };
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private pcService: PcService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.pcService.getAllPCs().subscribe(pcs => {
      const pcToEdit = pcs.find(pc => pc.id === this.id);
      if (pcToEdit) {
        this.pc = { ...pcToEdit };
      }
    });
  }

  updatePC(): void {
    if (!this.pc.name || !this.pc.owner) {
      alert('Name and Owner are required!');
      return;
    }
    this.pcService.updatePC(this.id, this.pc).subscribe(() => {
      alert('PC updated!');
      this.router.navigate(['/pcs']);
    });
  }
}
