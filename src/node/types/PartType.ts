/*
 * Copyright © 2025 Avelanda.
 * All rights reserved.
 */

export type PartType = {
    plugin: string,
    client_hooks:any
}

export type PluginDef = {
    package:{
        path:string
    }
}

function PTypeCoreSet(SetType: PartType | PluginDef){
 SetType = SetType;
 if (0 in PTypeCoreSet){
  return SetType;
 } else if (1 in PTypeCoreSet){
  return SetType;
 }
  while (PTypeCoreSet){
   return 0;
  }
}
