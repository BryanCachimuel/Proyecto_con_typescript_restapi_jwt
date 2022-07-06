/* 
    este archivo va a servir para extender la interdaz Request
    para la variable userId que esta descrita en el archivo
    verifyToken.ts
*/

declare namespace Express {
    export interface Request {
        userId: string
    }
}