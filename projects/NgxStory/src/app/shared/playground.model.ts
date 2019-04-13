export interface NgxStoryStory {
  entryComponent: Function;
  module: Function;
  route: string;
}

export interface SelectOptionValuesInterface {
  value: string | number | any;
  viewValue: string | number;
}

export enum DeviceOrientation {
  LANDSCAPE = 'landscape',
  PORTRAIT = 'portrait'
}

/** File node data with possible child nodes. */
export interface StoriesSideNavInterface {
  children?: StoriesSideNavInterface[];
  name: string;
  route?: string;
  type: 'folder' | 'file' | string;
}

/**
 * Flattened tree node that has been created from a FileNode through the flattener. Flattened
 * nodes include level index and whether they can be expanded or not.
 */
export interface FlatStoriesSideNavInterface {
  name: string;
  type: string;
  level: number;
  expandable: boolean;
}


export interface DeviceViewportInterface {
  height: string;
  width: string;
  name: string;
  orientationHorizontal?: boolean;
}
export interface IframeViewportInterface {
  device?: DeviceViewportInterface
  height: string;
  width: string;
  name: string;
  orientationHorizontal?: boolean;
}

