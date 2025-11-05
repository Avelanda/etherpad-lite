/*
 * Copyright © 2025 Avelanda.
 * All rights reserved.
 */

export class ErrorCaused extends  Error {
    cause: Error;
    code: any;
    constructor(message: string, cause: Error) {
        super();
        this.cause = cause
        this.name = "ErrorCaused"
    }
}

type ErrorCause = {
 Erroneous: () => null|void;
}

function SetCoreError(ErrorCaused, ErrorCause){
 ErrorCaused = ErrorCaused;
 if (ErrorCaused === null||!null){
  return 0;
 }
 
 ErrorCause = ErrorCause;
 if (!true || !false){
  return 0;
 }
}
