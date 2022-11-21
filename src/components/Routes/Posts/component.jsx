import React from 'react';
import { Form, Formik } from 'formik';

import validateSchema from '../../schemas'

import CustomInput from './CustomInput/component';
import CustomSelect from './CustomSelect/component';
import CustomTextarea from './CustomTextarea/component';

import './style.scss'


const onSubmit = (values, actions) => {
  console.log(values, 'values');

  fetch('https://js1onplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
     .then(res => res.json())
     .then(data => console.log('data', data))
     .catch(error => console.log(error, 'error'))
  actions.resetForm();
}


const Posts =() => {

  return (
    <Formik initialValues={{ 
      title: '',
      body: '',
      userId: '',
      }} 
      validationSchema={validateSchema}
      onSubmit={onSubmit}
    >
       {({isSubmitting}) => (
         <Form>
          <CustomInput
            label='ID'
            name='title'
            type='text'
            placeholder='Enter ID'
          />
          <CustomTextarea 
            label='Body'
            name='body'
            placeholder='enter text'
          />
          <CustomSelect 
            label='User Id'
            name='userId'
            placeholder='Select ID'
          >
            <option value=''>Select Id</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </CustomSelect>
           <button disabled={isSubmitting} type="submit">Submit</button>
         </Form>
       )}
     </Formik>
  )
}

export default Posts;