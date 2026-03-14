import { Component } from '@angular/core';

import { CUSTOM_MODULES, EXTERNAL_MODULES, NG_MODULES } from './navbar.imports';

@Component({
  selector: 'app-navbar',
  imports: [...NG_MODULES, ...CUSTOM_MODULES, ...EXTERNAL_MODULES],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {}
