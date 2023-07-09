import { gql } from "graphql-request";
import { client } from "../utils/gql_client";

export default class PrescriptionService {
    createPrescription = async (data: any): Promise<any> => {
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
        return response.insert_prescriptions_one
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

}