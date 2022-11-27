import { useField } from 'formik';

import './style.scss'

const CustomInput = ({label, ...props }) => {

  const [field, meta] = useField(props);
  return (
    <>
      <label>{label}</label>
      <input 
        {...field}
        {...props}
        className={meta.touched && meta.error ? 'error' : ''}
      />
      {meta.touched && meta.error && <p className='show-error'>{meta.error}</p>}
    </>
  )
}

export default CustomInput;