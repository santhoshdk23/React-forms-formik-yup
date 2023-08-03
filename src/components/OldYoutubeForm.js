import React from 'react'
import {Formik, useFormik} from 'formik'
import * as Yup from 'yup'
// import { emailReg } from './Utlis/utils';
// import { emailReg } from './Utlis/utils';

const initialValues= {
    name:'',
    email:'',
    channel:''
}
const onSubmit=values=>{
    console.log('form data',values);
}
const validate=values=>{
    //values.name should be equal to errors.name any way this should corresponds to name attribute in i/p form
    // let errors={}

    // if(!values.name){
    //     errors.name='*required'
    // }

    // if(!values.email){
    //     errors.email='*required'
    // }else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(values.email)){
    //     errors.email="Invalid Email"
    // }

    // if(!values.channel){
    //     errors.channel='*required'
    // }

    // return errors

    //above code is validation using formik
    
}
const validationSchema=Yup.object({
    name:Yup.string().required('Required'),
    email:Yup.string()
         .email('invalid email format')
         .required('Required'),
    channel:Yup.string().required("Required")     
})

const OldYoutubeForm = () => {

    const formik=useFormik({
        initialValues,
        onSubmit,
        // validate
        validationSchema
    }) // hook stores object in formik 
    console.log('visited',formik.touched);
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <div className="form-control">
            <label htmlFor="name">Name:</label>
            <input type="text" id='name' name='name' placeholder='Enter your name' 
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}/>
            {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div>: null}
            <br></br>
            </div>

            <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input type="text" id='email' name='email' placeholder='Enter your email' 
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
            {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div>: null}
            <br />
            </div>

            <div className="form-control">
            <label htmlFor="Channel">Channel:</label>
            <input type="text" id='channel' name='channel' placeholder='Enter your channel' 
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.channel}/>
            {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div>: null}
<br /></div>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default OldYoutubeForm