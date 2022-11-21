import { useField } from 'formik';

import './style.scss'

const CustomTextarea = ({label, ...props }) => {

  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <textarea 
        {...field}
        {...props}
        rows='10'
        className={meta.touched && meta.error ? 'error' : ''}
      ></textarea>
      {meta.touched && meta.error && <p className='show-error'>{meta.error}</p>}
    </>
  )
}

export default CustomTextarea;