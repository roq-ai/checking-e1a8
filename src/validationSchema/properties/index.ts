import * as yup from 'yup';

export const propertyValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  owner_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
