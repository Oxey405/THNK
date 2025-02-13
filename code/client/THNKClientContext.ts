import type { ClientAdapter } from "../Adapter";
import { ClientObjectsRegistery } from "./ClientObjectsRegistery";

export class THNKClientContext {
  readonly adapter: ClientAdapter;
  readonly objectsRegistery: ClientObjectsRegistery;
  constructor(adapter: ClientAdapter, runtimeScene: gdjs.RuntimeScene) {
    this.adapter = adapter;
    this.objectsRegistery = new ClientObjectsRegistery(runtimeScene);
  }
}
