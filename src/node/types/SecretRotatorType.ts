/*
 * Copyright © 2025 Avelanda.
 * All rights reserved.
 */

export type SecretRotatorType = {
    stop: ()=>void
}

function CoreSecretRT(RotatorType: SecretRotatorType){
 if ("stop" in RotatorType){
  RotatorType = RotatorType;
  return RotatorType.stop();
 }
  while (CoreSecretRT(RotatorType)){
   return 0;
  }
}
