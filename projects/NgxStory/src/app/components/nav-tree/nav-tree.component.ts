import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { of as observableOf } from 'rxjs';
import { FlatTreeControl } from '@angular/cdk/tree';
import { storiesSideNav } from '../../../stories.config';
import { FlatStoriesSideNavInterface, StoriesSideNavInterface } from '../../shared/playground.model';
import { AppCommunicationService } from '../../shared/services/app-communication.service';

@Component({
  selector: 'ngx-story-nav-tree',
  templateUrl: './nav-tree.component.html',
  styleUrls: ['./nav-tree.component.scss']
})
export class NavTreeComponent {
  /** The TreeControl controls the expand/collapse state of tree nodes.  */
  treeControl: FlatTreeControl<FlatStoriesSideNavInterface>;

  /** The TreeFlattener is used to generate the flat list of items from hierarchical data. */
  treeFlattener: MatTreeFlattener<StoriesSideNavInterface, FlatStoriesSideNavInterface>;

  /** The MatTreeFlatDataSource connects the control and flattener to provide data. */
  dataSource: MatTreeFlatDataSource<StoriesSideNavInterface, FlatStoriesSideNavInterface>;

  constructor(private appCommunicationService: AppCommunicationService) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);

    this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    this.dataSource.data = storiesSideNav;
  }

  /** Transform the data to something the tree can read. */
  transformer(node: StoriesSideNavInterface, level: number) {
    return {
      name: node.name,
      type: node.type,
      route: node.route,
      level: level,
      expandable: !!node.children
    };
  }

  /** Get the level of the node */
  getLevel(node: FlatStoriesSideNavInterface) {
    return node.level;
  }

  /** Get whether the node is expanded or not. */
  isExpandable(node: FlatStoriesSideNavInterface) {
    return node.expandable;
  }

  /** Get whether the node has children or not. */
  hasChild(index: number, node: FlatStoriesSideNavInterface) {
    return node.expandable;
  }

  /** Get the children for the node. */
  getChildren(node: StoriesSideNavInterface) {
    return observableOf(node.children);
  }

  setRouteInIframe(route: string): void {
    this.appCommunicationService.setStoryRoute(route);
  }
}
