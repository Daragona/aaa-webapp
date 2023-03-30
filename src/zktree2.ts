import * as crypto from 'crypto'
import * as circomlibjs from 'circomlibjs';

import { BigNumberish, BigNumber, Contract } from "ethers";


export async function generateCommitment() {
    //const mimc = await circomlibjs.buildMimcSponge();
   /* const nullifier = BigNumber.from(crypto.randomBytes(31)).toString()
    const secret = BigNumber.from(crypto.randomBytes(31)).toString()
    const commitment = mimc.F.toString(mimc.multiHash([nullifier, secret]))
    const nullifierHash = mimc.F.toString(mimc.multiHash([nullifier]))
    return {
        nullifier: nullifier,
        secret: secret,
        commitment: commitment,
        nullifierHash: nullifierHash
    }*/
}