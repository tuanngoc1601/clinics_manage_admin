import { createAxiosBaseUrl, createAxiosClient } from "../axios";

const axiosClient = createAxiosBaseUrl();

const axiosClientToken = createAxiosClient();

export const getBookingClinicService = (clinic_id) => {
    return axiosClientToken.get(`/api/v1/booking/get-booking/${clinic_id}`);
};

export const getPatientClinicService = (clinic_id) => {
    return axiosClientToken.get(`/api/v1/booking/get-patients/${clinic_id}`);
};

export const confirmBookingService = (booking_id) => {
    return axiosClientToken.put(
        `/api/v1/booking/confirm-booking/${booking_id}`
    );
};
