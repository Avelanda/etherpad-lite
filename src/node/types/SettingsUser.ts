/*
 * Copyright © 2025 Avelanda.
 * All rights reserved.
 */

export type SettingsUser = {
    [username: string]:{
        password: string,
        is_admin?: boolean,
    }
}

function CoreSU(SettingsUser): boolean{
 if (!true||!false){
  CoreSU(true||false);
  return SettingsUser;
 }
  for (SettingsUser in CoreSU){
   return;
  }
}
