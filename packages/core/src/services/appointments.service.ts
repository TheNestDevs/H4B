import { gql } from "graphql-request";
import { client } from "../utils/gql_client";

export default class AppointmentService {
    createAppointment = async (data: any): Promise<any> => {
        const query = gql`
            mutation create($data: appointments_insert_input!) {
                insert_appointments_one(object: $data) {
                    id
                    apt_doctor
                    apt_patient
                    isComplete
                    isTranscript_av
                    pres_id
                    transcriptURL
                    apt_start
                    apt_end                    
                    created_at
                    updated_at
                }
            }
        `;
        const response : any = await client.request(query, {
            data
        })
        return response.insert_appointments_one
    }

    updateAppointment = async (id: string, data: any): Promise<any> => {
        const query = gql`
            mutation ($id: uuid!, $data: appointments_set_input!) {
                update_appointments_by_pk(pk_columns: {id: $id}, _set: $data) {
                    id
                    apt_doctor
                    apt_patient
                    isComplete
                    isTranscript_av
                    pres_id
                    transcriptURL
                    apt_start
                    id
                    apt_end
                    created_at
                    updated_at
                }
        }`;
        const response : any = await client.request(query, {
            id,
            data
        });
        return response.update_appointments_by_pk;
    }

    getAppointment = async (id: string): Promise<any> => {
        const query = gql`
            query get {
                appointments_by_pk(id: "${id}") {
                    id
                    apt_doctor
                    apt_patient
                    isComplete
                    isTranscript_av
                    pres_id
                    transcriptURL
                    apt_start
                    apt_end
                    created_at
                    updated_at
                }
            }
        `;

        const response : any = await client.request(query)
        return response.appointments_by_pk
    }

    getAllAppointments = async (): Promise<any> => {
        const query = gql`
            query getAll {
                appointments {
                    id
                    apt_doctor
                    apt_patient
                    isComplete
                    isTranscript_av
                    pres_id
                    transcriptURL
                    apt_start
                    apt_end
                    created_at
                    updated_at
                }
            }
        `;

        const response : any = await client.request(query)
        // response.appointments.forEach((element: any) => {
        //     return element.pres_id = ""
        // });
        return response.appointments
    }

    deleteAppointment = async (id: string): Promise<any> => {
        const query = gql`
            mutation {
                delete_appointments_by_pk(id: "${id}") {
                    id
                    apt_doctor
                    apt_patient
                    isComplete
                    isTranscript_av
                    pres_id
                    transcriptURL
                    apt_start
                    apt_end
                    created_at
                    updated_at
                }
            }
        `;

        const response : any = await client.request(query)
        return response.delete_appointments_by_pk
    }
}