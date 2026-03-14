import { DatePipe } from '@angular/common';

import { TabsModule } from 'primeng/tabs';
import { CardListComponent } from '@modules/dashboard/components/card-list/card-list.component';

export const NG_MODULES = [DatePipe];
export const EXTERNAL_MODULES = [TabsModule];
export const CUSTOM_MODULES = [CardListComponent];
