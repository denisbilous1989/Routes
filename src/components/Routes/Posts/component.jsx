import React from 'react';
import { Form, Formik } from 'formik';
import { useState } from "react";

import validateSchema from '../../schemas'


import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';
import CustomTextarea from './CustomTextarea';
import Post from './Post';

import './style.scss'


const Posts =() => {

  const [posts, setPosts] = useState([]);

  const onSubmit = (values, actions) => {

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
       .then(res => res.json())
       .then(data => setPosts([...posts, data]))
       .catch(error => console.log(error));


    actions.resetForm();
  }

  return (
    <>
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
     {posts.length === 0 ? <div>Empty list</div> : 
     <ul className='cards'>
        {posts.map(({ userId, title, body }) => (
          <Post 
            key={userId}
            className='card-item'
            title={title}
            body={body}
            userId={userId}
          />
        ))}
      </ul>
     }
     </>
  )
}

export default Posts;