import { Component, input } from '@angular/core';

import { CUSTOM_MODULES, EXTERNAL_MODULES, NG_MODULES } from './card-item.imports';
import type { Appointment } from '@modules/dashboard/interfaces/appointments.interface';

@Component({
  selector: 'app-card-item',
  imports: [...NG_MODULES, ...CUSTOM_MODULES, ...EXTERNAL_MODULES],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss',
})
export class CardItemComponent {
  // LOCALE
  appointment = input.required<Appointment>();
}
