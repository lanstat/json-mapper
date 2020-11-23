import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { SchemaBase } from 'src/app/core/SchemaBase';
import { AdDirective } from 'src/app/shared/directives/ad.directive';
import { ViewManagerService } from 'src/app/shared/services/view-manager.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @ViewChild(AdDirective, {static: true})
  adHost: AdDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewManager: ViewManagerService
  ) { }

  ngOnInit(): void {
    this.viewManager.currentViewChange().subscribe((view) => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory<SchemaBase>(view.component);
      const viewContainerRef = this.adHost.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent<SchemaBase>(componentFactory);
      componentRef.instance.currentSchema = view.schema;
    });
  }

}
