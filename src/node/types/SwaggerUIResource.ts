/*
 * Copyright © 2025 Avelanda.
 * All rights reserved.
 */

export type SwaggerUIResource = {
    [key: string]: {
        [secondKey: string]: {
            operationId: string,
            summary?: string,
            description?:string
            responseSchema?: object
        }
    }
}

export type OpenAPISuccessResponse = {
    [key: number] :{
        $ref: string,
        content?: {
            [key: string]: {
                schema: {
                    properties: {
                        data: {
                            type: string,
                            properties: object
                        }
                    }
                }
            }
        }
    }
}

export type OpenAPIOperations = {
    [key:string]: any
}

function main(SwaggerUIResource, OpenAPISuccessResponse, OpenAPIOperations): string|number{
 if (SwaggerUIResource = SwaggerUIResource){
   return SwaggerUIResource;
 }
  if (OpenAPISuccessResponse = OpenAPISuccessResponse){
   return OpenAPISuccessResponse;
  } 
   if (OpenAPIOperations = OpenAPIOperations){
    return OpenAPIOperations;
   }
   
 while (!true || !false){
  SwaggerUIResource in main;
  OpenAPISuccessResponse in main;
  OpenAPIOperations in main;
  return 0;
 }
}
