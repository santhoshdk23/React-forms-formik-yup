import React from 'react'
import {Formik,Form,Field,ErrorMessage,FastField} from 'formik'
import * as Yup from 'yup'
// import FormikControl from './FormikControl'
import { IoIosContact } from 'react-icons/io';
import {AiOutlineMail} from 'react-icons/ai';
import {RiLockPasswordFill} from 'react-icons/ri'
import {ImPhone} from 'react-icons/im'
import {BiLocationPlus} from 'react-icons/bi'


const initialValues= {
    name:'',
    email:'',
    address:'',
    password:'',
    confirmPassword:'',
    phonenumbers:['','']
}

const validationSchema=Yup.object({
    name:Yup.string().required('Required'),
    email:Yup.string()
    .email('invalid email format')
    .required('Required'),
    address:Yup.string().required("Required") ,
    password:Yup.string().required('Required'),
    confirmPassword:Yup.string().oneOf([Yup.ref('password'),''],'Password must match').required('Required')
})


const validatePhone=value=>{ //field level validation for comment field
    let error
    if(!value){
        error='Required'
    }
    return error
}
const onSubmit=(values,action)=>{
    console.log('form data',values);
    alert("Registration Successful")
    localStorage.setItem("data",JSON.stringify(values))
    action.resetForm()
}
const YoutubeForm = () => {

    
  
  return (
    <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit} 
    >    
        {
            formik=> { //func as children for formik component which returns form jsx
               console.log(formik);
               return (
            <div className="main">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <hr/>  
         <div class="container">
            <div className="left">
             <img src="https://static.naukimg.com/s/7/104/assets/images/white-boy.a0d2814a.png" alt="naukri" />
             <h4>On registering, you can</h4>
             <ul>
                <li>Build your profile and let recruiters find you</li>
                <li>Get job postings delivered right to your email</li>
                <li>Find a job and grow your career</li>
             </ul>
                
            </div>    

            <Form className='form'>
            <div className="form-control">
            <label htmlFor="name" ><IoIosContact/> Name:</label>
            <Field type="text" id='name' name='name' placeholder='Enter your name' 
            />
            <ErrorMessage name='name' className='error'/>
            <br></br>
            </div>

            <div className="form-control">
            <label htmlFor="email"><AiOutlineMail/>Email:</label>
            <Field type="text" id='email' name='email' placeholder='Enter your email' 
            />
            <ErrorMessage name='email'/>
            <br />
            </div>

            <div className="form-control">
            <label htmlFor="address"><BiLocationPlus/>Address:</label>
            <FastField id='name' name='address' >
                {
                    (props)=>{ //func as a children
                        console.log('Field render');
                        const {field,form,meta}=props
                        console.log(props);
                        return(
                        <div>
                            <input id='address' type='text' placeholder='Enter your address' {...field}/>
                            {meta.touched && meta.error ? <div>{meta.error}</div> : null} 
                        </div> 
                        )   
                    }
                    
                }
            </FastField>
            {/* <ErrorMessage name='address'/> */}
            <br></br>
            </div>

            <div className="form-control">
            <label htmlFor="password"><RiLockPasswordFill/>Password:</label>
            <Field type="password" id='password' name='password' placeholder='Set password' 
            /> 
            <ErrorMessage name='password'/>
            <br></br>
            </div>

            <div className="form-control">
            <label htmlFor="confirmPassword"><RiLockPasswordFill/>Confirm Password:</label>
            <Field type="password" id='confirmPassword' name='confirmPassword' placeholder='Confirm your password' 
            /> 
            <ErrorMessage name='confirmPassword'/>
            <br></br>
            </div>
            
            <div className="form-control">
            <label htmlFor="phonenumbers"><ImPhone/>Primary phone Numbers :</label>
            <Field type="text"  name='phonenumbers[0]' 
            placeholder='primary' validate={validatePhone}
            />
            <ErrorMessage name='phonenumbers[0]'/>
            <br></br>
            </div>

            <div className="form-control">
            <label htmlFor="phonenumbers"><ImPhone/>Secondary phone Numbers:</label>
            <Field type="text"  name='phonenumbers[1]'
             placeholder='secondary' validate={validatePhone}
            />
            <ErrorMessage name='phonenumbers[1]'/>
            <br></br>
            </div>
            
        <div className="btn">
        <button type='reset' className='resetbtn'>Reset</button>
        <button type='submit' disabled={!formik.isValid } className='signupbtn'>Submit</button>
        </div>
        
        </Form>
        </div>
        
        <div className="info">
        <p><span>Microsoft Country Partner of the Year 2019 & 2020</span>
            <hr />
            <br />
        G7 CR Technologies is honored to accept the Microsoft 
           Country Partner of the Year 2019 & 2020 award. <br></br>
           <br />
            This award recognizes G7CR Technologies as demonstrating 
            outstanding business excellence in delivering Microsoft solutions 
            to customers, while showcasing innovation and business
            impact, driving customer satisfaction.</p>
            <img src="https://g7cr.ae/images/certificate.png" alt="y" />
        </div>
        </div>
                )
            }
        }
        
    </Formik>
  )
}

export default YoutubeForm