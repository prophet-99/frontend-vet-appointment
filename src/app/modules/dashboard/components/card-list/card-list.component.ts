import { Component, input } from '@angular/core';

import { NG_MODULES, EXTERNAL_MODULES, CUSTOM_MODULES } from './card-list.imports';
import type { AppointmentResponse } from '@modules/dashboard/interfaces/appointments.interface';

@Component({
  selector: 'app-card-list',
  imports: [NG_MODULES, EXTERNAL_MODULES, CUSTOM_MODULES],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent {
  // LOCALE
  rawAppointments = input.required<AppointmentResponse>();
}
