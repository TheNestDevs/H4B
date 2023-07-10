import { gql } from "graphql-request";
import { client } from "../utils/gql_client";
import EnpCript from "../scripts/prepare";

const enp = new EnpCript("keys");
export default class PrescriptionService {
    createPrescription = async (data: any): Promise<any> => {
        data.sig_fingerprint = await enp.getkeyFingerprint("doctors");
        data.sig_fingerprint = data.sig_fingerprint.split(" ")[1]
        data.sig_fingerprint = data.sig_fingerprint.split(" ")[0]
    
        const query = gql`
            mutation create($data: pres_insert_input!) {
                insert_pres_one(object: $data) {
                    id
                    created_at
                    updated_at
                    meds
                    p_age
                    p_name
                    remarks
                    sig_fingerprint
                }
            }
        `;
        const response : any = await client.request(query, {
            data
        });
        return response.insert_pres_one
    }

    getPrescription = async (presID: string): Promise<any> =>{
        const query = gql`
            query($id: uuid!) {
                pres_by_pk(id: $id) {
                    id
                    created_at
                    updated_at
                    meds
                    p_age
                    p_name
                    remarks
                    sig_fingerprint
                }
            }
        `;

        const response : any = await client.request(query, {
            id: presID
        });
        return response.pres_by_pk;
    }

    verifyPrescription = async (): Promise<any> => {
        let decryptData : string = await enp.getkeyFingerprintPrivate("doctors") as string;
        decryptData = decryptData.split(" ")[1]
        decryptData = decryptData.split(" ")[0]
        return decryptData
    }
}