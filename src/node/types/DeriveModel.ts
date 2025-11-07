/*
 * Copyright © 2025 Avelanda.
 * All rights reserved.
 */

export type DeriveModel = {
    digest: string,
    secret: string,
    salt: string,
    keyLen: number
}

class DeriveModelSet <DeriveModel> {
 CoreDMset: (number, string) => DeriveModel;
};
