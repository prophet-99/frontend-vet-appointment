import { Component, computed, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';

import { NG_MODULES, EXTERNAL_MODULES, CUSTOM_MODULES } from './dashboard.imports';
import { environment } from '@env/environment.development';
import {
  AppointmentResponseSchema,
  type AppointmentResponse,
} from './interfaces/appointments.interface';

@Component({
  selector: 'app-dashboard',
  imports: [...NG_MODULES, ...CUSTOM_MODULES, EXTERNAL_MODULES],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  // LOCALE
  currentDate = signal(new Date()).asReadonly();
  currentDateFormatted = computed(() => {
    const date = this.currentDate();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  });
  appointments = httpResource<AppointmentResponse>(
    () => ({
      url: `${environment.BASE_API}/appointments/date/${this.currentDateFormatted()}`,
      method: 'GET',
    }),
    {
      parse: AppointmentResponseSchema.parse,
    }
  );

  reload() {
    this.appointments.reload();
  }
}
