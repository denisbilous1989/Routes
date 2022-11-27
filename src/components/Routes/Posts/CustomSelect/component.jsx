import { useField } from 'formik';

import './style.scss'

const CustomSelect = ({label, ...props }) => {

  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <select 
        {...field}
        {...props}
        className={meta.touched && meta.error ? 'error' : ''}
      />
      {meta.touched && meta.error && <p className='show-error'>{meta.error}</p>}
    </>
  )
}

export default CustomSelect;