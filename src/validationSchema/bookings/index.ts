import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  property_id: yup.string().nullable(),
  customer_id: yup.string().nullable(),
  booking_manager_id: yup.string().nullable(),
});
