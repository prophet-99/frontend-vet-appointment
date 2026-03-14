import { Component } from '@angular/core';

import { NG_MODULES, EXTERNAL_MODULES, CUSTOM_MODULES } from './dashboard.imports';

@Component({
  selector: 'app-dashboard',
  imports: [...NG_MODULES, ...CUSTOM_MODULES, ...EXTERNAL_MODULES],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
