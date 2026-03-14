import { Component } from '@angular/core';

import { CUSTOM_MODULES, EXTERNAL_MODULES, NG_MODULES } from './app.imports';

@Component({
  selector: 'app-root',
  imports: [...NG_MODULES, ...CUSTOM_MODULES, ...EXTERNAL_MODULES],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
