import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RemoteComponent } from './remote.component';
import { REMOTE_ROUTES } from './remote.routes';

@NgModule({
    declarations: [RemoteComponent],
    imports: [
        RouterModule.forChild(REMOTE_ROUTES)],
    providers: [],
    exports: [RemoteComponent],
})
export class RemoteModule { }
