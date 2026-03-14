import { Component } from '@angular/core';

import { CUSTOM_MODULES, EXTERNAL_MODULES, NG_MODULES } from './management.imports';

@Component({
  selector: 'app-management',
  imports: [...NG_MODULES, ...CUSTOM_MODULES, ...EXTERNAL_MODULES],
  templateUrl: './management.html',
  styleUrl: './management.scss',
})
export class Management {}
