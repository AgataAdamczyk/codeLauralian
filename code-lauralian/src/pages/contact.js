import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import Button from 'components/Button/Button';

const PageWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const Title = styled.h1`
  width: 50%;
  text-align: center;
`;

const Paragraph = styled.p`
  width: 50%;
  text-align: center;
  line-height: 1.8;
`;

const Decor = styled.span`
  font-size: 30px;
  color: ${({theme}) => theme.colors.lemon};
  margin: 10px;
`;

const StyledInput = styled.input`
  display: block;
  border: 2px solid black;
  background: none;
  font-size: 20px;
  height: ${({as}) => as ? '200px' : 'auto'};
  width: ${({as}) => as ? '500px' : '300px'};
  margin-bottom: ${({as}) => as && '40px'};
`;

const StyledLabel = styled.label`
  margin: 30px 0 10px;
  display: block;
  font-size: 14px;
  font-weight: bold;
`;

const ContactPage = () => (
  <PageWrapper>
    <Title>Kontakt</Title>
    <Decor>. . .</Decor>
    <Paragraph>Jak mogę Ci pomóc ?</Paragraph>
    <Formik
       initialValues={{ name: '', email: '', message: '' }}
      //  validate={values => {
      //    const errors = {};
      //    if (!values.email) {
      //      errors.email = 'Required';
      //    } else if (
      //      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //    ) {
      //      errors.email = 'Invalid email address';
      //    }
      //    return errors;
      //  }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           console.log(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
        //  errors,
        //  touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
        <form onSubmit={handleSubmit}>
          <StyledLabel htmlFor="name">Imię</StyledLabel>
          <StyledInput
            id="name" 
            type="text" 
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name} 
          />
          <StyledLabel htmlFor="e-mail">E-mail</StyledLabel>
          <StyledInput
            id="email" 
            type="e-mail" 
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email} 
          />
          <StyledLabel htmlFor="name">Wiadomość</StyledLabel>
          <StyledInput 
            as="textarea"
            id="message"
            type="text" 
            name="message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email} 
          />
          <Button type="submit " disabled={isSubmitting}>Wyślij</Button>
         </form>
       )}
     </Formik>
  </PageWrapper>
);

export default ContactPage;