import { loadRemoteModule } from "@angular-architects/module-federation";
import { ComponentFactoryResolver, Injectable, ViewContainerRef } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class DynamicLoader {

    constructor(
        private router: Router,
        private componentFactoryResolver: ComponentFactoryResolver
    ) { }

    public loadModule({ module, path }: { module: string, path: string }) {
        const cdnUrl = 'http://localhost:8080';
        const appDetail = {
            path: '/remote/remoteEntry.js',
            name: 'remote',
            module: `./${module}`
        }
        loadRemoteModule({
            remoteEntry: `${cdnUrl}${appDetail.path}`,
            remoteName: appDetail.name,
            exposedModule: appDetail.module
        })
            .then(m => {
                const config = this.router.config;
                config.push({
                    path: '',
                    loadChildren: () => m[module]
                });
                this.router.resetConfig(config);
                this.router.navigateByUrl(path);
            })
    }

    public loadComponent(viewContainerRef: ViewContainerRef,
        appDetail: { path: string; name: string; component: string; remoteComponent: string; }) {
        const cdnUrl = 'http://localhost:8080';
        if (!appDetail) return;
        loadRemoteModule({
            remoteEntry: `${cdnUrl}${appDetail.path}`,
            remoteName: appDetail.name,
            exposedModule: `./${appDetail.component}`
        })
            .then(m => {
                const componentFactory = this.componentFactoryResolver.resolveComponentFactory(m[appDetail.component]);
                viewContainerRef.clear();
                return viewContainerRef.createComponent(componentFactory);
            })
    }
}