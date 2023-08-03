import React from 'react'
import {Formik,Form,Field,ErrorMessage,FieldArray,FastField} from 'formik'
import * as Yup from 'yup'
// import { emailReg } from './Utlis/utils';
// import { emailReg } from './Utlis/utils';

const initialValues= {
    name:'',
    email:'',
    channel:'',
    comments:'',
    address:'',
    social:{ //nested obj
        facebook:'',
        twitter:''
    },
    phonenumbers:['',''],
    phNumbers:['']
}
const validationSchema=Yup.object({
    name:Yup.string().required('Required'),
    email:Yup.string()
    .email('invalid email format')
    .required('Required'),
    channel:Yup.string().required("Required"),
    comments:Yup.string().required("Required") ,
    address:Yup.string().required("Required") ,
})

const onSubmit=(values)=>{
    console.log('form data',values);
}
const YoutubeForm = () => {

  
  return (
    <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}>
        <Form>
            <div className="form-control">
            <label htmlFor="name">Name:</label>
            <Field type="text" id='name' name='name' placeholder='Enter your name' 
            />
            <ErrorMessage name='name'/>
            <br></br>
            </div>

            <div className="form-control">
            <label htmlFor="email">Email:</label>
            <Field type="text" id='email' name='email' placeholder='Enter your email' 
            />
            <ErrorMessage name='email'/>
            <br />
            </div>

            <div className="form-control">
            <label htmlFor="Channel">Channel:</label>
            <Field type="text" id='channel' name='channel' placeholder='Enter your channel' 
            />
            <ErrorMessage name='channel'/>
            <br />
            </div>

            <div className="form-control">
            <label htmlFor="comments">Comments:</label>
            <Field as='textarea' id='comments' name='comments' placeholder='Enter your comments' 
            />
            <ErrorMessage name='comments'/>
            <br></br>
            </div>

            <div className="form-control">
            <label htmlFor="address">Address:</label>
            <FastField id='name' name='address' >
                {
                    (props)=>{
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
            <label htmlFor="facebook">Facebook:</label>
            <Field type="text" id='facebook' name='social.facebook' placeholder='facebook' 
            />
            <br />
            <label htmlFor="twitter">Twitter:</label>
            <Field type="text" id='Twitter' name='social.twitter' placeholder='twitter' 
            />
            <br></br>
            </div>
            
            <div className="form-control">
            <label htmlFor="phonenumbers">Primary phone Numbers :</label>
            <Field type="text"  name='phonenumbers[0]' 
            placeholder='primary' 
            />
            <br />
            </div>
            <div className="form-control">
            <label htmlFor="phonenumbers">Secondary phone Numbers:</label>
            <Field type="text"  name='phonenumbers[1]'
             placeholder='secondary' 
            />
            <br />
            </div>

            <div className="form-control">
            <label htmlFor="phNumbers">list of ph no</label>
            <FieldArray type="text" id='channel' name='phNumbers'
             placeholder='list'>
                {
                    (fieldArrayProps)=>{
                        // console.log(fieldArrayProps);
                        const {push,remove,form}=fieldArrayProps
                        const {values}= form
                        const {phNumbers}=values
                        return (
                        <div>
                            {phNumbers.map((ph,index)=>(
                               <div key={index}>
                                <Field name={`phNumbers[${index}]`} />
                                {
                                     index>0 && (
                                
                                <button type='button' onClick={()=> remove(index)}>-</button>)}
                                <button type='button'onClick={()=> push('')}>+</button>
                               </div>
                            ))}
                        </div>
                        )
                    }
                }
             </FieldArray>
            <br />
            </div>

            

          <button type='submit'>Submit</button>
        </Form>
    </Formik>
  )
}

export default YoutubeForm