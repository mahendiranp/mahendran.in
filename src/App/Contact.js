import React, {Component} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Firebase from 'firebase';
import './../Style/Contact.scss'

const firebaseConfig = {
    apiKey: "AIzaSyBFtFimwGqEAGa1_VgIORnf2WxnfE3Fb7A",
    authDomain: "mahendran-25c05.firebaseapp.com",
    databaseURL: "https://mahendran-25c05.firebaseio.com",
    projectId: "mahendran-25c05",
    storageBucket: "",
    messagingSenderId: "1028804009445",
    appId: "1:1028804009445:web:636ace53b8b01284",
    "provider": "anonymous",
  "uid": "afb6c993-9df2-4614-9b05-355069c9569b"
  };

class Contact extends React.Component {
    constructor(props){
        super(props)
        
    }
    render(){

        const SignupSchema = Yup.object().shape({
            name: Yup.string()
              .required('name is required'),
            email: Yup.string()
            .email('invalid email')
              .required('email is required'),
            message: Yup.string()
              .required('message is required'),
          });

        const Basic = () => (
            
              <Formik
                initialValues={{ email: '', name: '', message: '' }}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                  Firebase.initializeApp(firebaseConfig);
                  const details = {
                      name: values.name,
                      email: values.email,
                      message: values.message
                  }
                  Firebase.database().ref('/datas').push(details);
                }}
              >
                {({ isSubmitting, errors, touched }) => (
                    
                  <Form>
                  <div className='row'>
                  <div className={errors.name && touched.name ? 'col-md-6 form-group is-invalid': 'col-md-6 form-group' }>
                    <Field type="name" name="name" className='form-control' placeholder='name'/>
                    <ErrorMessage name="name" component="div" />
                  </div>
                  <div className={errors.email && touched.email ? 'col-md-6 form-group is-invalid': 'col-md-6 form-group' }>
                    <Field type="email" name="email" className='form-control'  placeholder='email'/>
                    <ErrorMessage name="email" component="div" />
                  </div></div>
                  <div className='row'>
                    <div className={errors.message && touched.message ? 'col-md-12 form-group is-invalid': 'col-md-12 form-group' }>
                    <Field component="textarea" name="message" className='form-control'  placeholder='message'/>
                        <ErrorMessage name="message" component="div" />
                    </div>
                    </div>
                    <div className='row '>
                    <div className='col-12 text-center'>
                    <button type="submit" className='text-center' disabled={isSubmitting}>
                      Submit
                    </button></div>
                    </div>
                    
                  </Form>
                  
                )}
              </Formik>
            
          );
          

        return(
            <section className='container fabon-contact-area'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='site-heading'>
                        <h2>Get In Touch</h2>
                        </div>
                    </div>
                </div>
                <div className="row"><div className='col-md-10 offset-md-1'>
                <Basic/>
                </div></div>
            </section>
        )
    }

}



export default Contact