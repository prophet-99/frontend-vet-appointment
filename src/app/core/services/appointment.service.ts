import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  // DI
  private readonly httpClient = inject(HttpClient);
  // LOCALE
  private readonly API_URL = `${environment.BASE_API}/appointments`;
}
