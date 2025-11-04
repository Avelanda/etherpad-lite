/*
 * Copyright © 2025 Avelanda.
 * All rights reserved.
 */

export type MapType = {
    [key in string|number]: string|number
}

export type MapArrayType<T> = {
    [key:string]: T
}

function MapTypeSet(MapType, MapArrayType): number|string{
 if (MapType !== MapArrayType || MapType === MapArrayType){
  MapType = MapType;
  MapArrayType = MapArrayType;
 }
  while (MapType && MapArrayType && MapTypeSet){
    MapType === true||false;
    MapArrayType === true||false;
    return 0;
  }
}
