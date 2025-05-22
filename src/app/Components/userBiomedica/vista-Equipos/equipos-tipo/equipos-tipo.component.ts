import { Component, inject, OnInit } from '@angular/core';
import { EquiposService } from '../../../../Services/appServices/biomedicaServices/equipos/equipos.service';
import { TipoEquipoService } from '../../../../Services/appServices/general/tipoEquipo/tipo-equipo.service';
import { MenuItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
    selector: 'app-equipos-tipo',
    templateUrl: './equipos-tipo.component.html',
    styleUrl: './equipos-tipo.component.css',
    providers: [MessageService],
    standalone: false
})
export class EquiposTipoComponent implements OnInit {

  equipos!: any[];
  tipoEquipo!: any;
  equipoServices = inject(EquiposService);
  tipoEquipoServices = inject(TipoEquipoService);
  items: MenuItem[] | undefined;
  searchText: string = '';

  loading: boolean = false;


  constructor(
    private messageService: MessageService,
    private router: Router,
  ) { }

  async ngOnInit() {

     this.items = [
            {
                label: 'Add',
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                },
            },
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                },
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                },
            },
            {
                label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
                    this.router.navigate(['/fileupload']);
                },
            },
            {
                label: 'Website',
                icon: 'pi pi-external-link',
                command: () => {
                    window.open('https://angular.io/', '_blank');
                },
            },
        ];

    this.equipos = await this.equipoServices.getAllEquiposTipo(localStorage.getItem('idTipoEquipo'));
    this.tipoEquipo = await this.tipoEquipoServices.getTipoEquipo(localStorage.getItem('idTipoEquipo'));
  }


  filteredTiposEquipos() {
    return this.equipos.filter(equipo => {
      const search = this.searchText.toLowerCase();
      return (
        equipo.nombres.toLowerCase().includes(search) ||
        equipo.marca.toLowerCase().includes(search) ||
        equipo.modelo.toLowerCase().includes(search) ||
        equipo.serie.toLowerCase().includes(search)
      );
    });
  }
}
