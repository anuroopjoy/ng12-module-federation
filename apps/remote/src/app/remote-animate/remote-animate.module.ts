import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RemoteAnimateComponent } from './remote-animate.component';
import { REMOTE_ROUTES } from './remote.routes';

@NgModule({
    declarations: [RemoteAnimateComponent],
    imports: [
        RouterModule.forChild(REMOTE_ROUTES)
    ],
    providers: [],
    exports: [RemoteAnimateComponent],
})
export class RemoteAnimateModule { }
