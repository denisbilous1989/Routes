import * as yup from 'yup';


const validateSchema = yup.object().shape({
  title: yup
  .string()
  .required('Required'),
  body: yup
  .string()
  .min(5)
  .required('Required'),
  userId: yup
  .string()
  .oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])
  .required()
})

export default validateSchema;