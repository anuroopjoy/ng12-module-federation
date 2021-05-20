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

    public loadModule() {
        const cdnUrl = 'http://localhost:8080';
        const module = 'RemoteModule';
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
            })
    }

    public loadComponent(viewContainerRef: ViewContainerRef) {
        const cdnUrl = 'http://localhost:8080';
        const component = 'RemoteComponent';
        const appDetail = {
            path: '/remote/remoteEntry.js',
            name: 'remote',
            component: `./${component}`
        }
        loadRemoteModule({
            remoteEntry: `${cdnUrl}${appDetail.path}`,
            remoteName: appDetail.name,
            exposedModule: appDetail.component
        })
            .then(m => {
                const componentFactory = this.componentFactoryResolver.resolveComponentFactory(m[component]);
                viewContainerRef.clear();
                return viewContainerRef.createComponent(componentFactory);
            })
    }
}