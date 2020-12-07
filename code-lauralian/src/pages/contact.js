import React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import media from 'utils/media';
import Button from 'components/Button/Button';
import PageInfo from 'components/PageInfo/PageInfo';

const pageData = {
  title: 'Kontakt',
  paragraph: 'Jak mogę Ci pomóc ?',
};

const StyledInput = styled.input`
  display: block;
  border: 1.7px solid black;
  border-radius: 5px;
  background: none;
  font-size: .8em;
  padding: .45em;
  height: ${({as}) => as ? '10vh' : 'auto'};
  width: ${({as}) => as ? '80vw' : '60vw'};

  ${media.desktop`
    font-size: 1em;
    height: ${({as}) => as ? '200px' : 'auto'};
    width: ${({as}) => as ? '500px' : '300px'};
    margin-bottom: ${({as}) => as && '40px'};
  `}
`;

const StyledLabel = styled.label`
  font-weight: ${({theme}) => theme.font.bold};
  margin: 30px 0 10px;
  display: block;
  font-size: .9em;
`;

const StyledForm = styled.form`
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 0 5vw;

  ${media.desktop`
    width: 40vw;
    padding: 0 40px; 
  `}
`;

const SubmitBtn = styled(Button)`
  width: 9em;
`;

const ContactPage = () => (
  <>
    <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
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
        <StyledForm onSubmit={handleSubmit}>
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
          <SubmitBtn type="submit" disabled={isSubmitting}>Wyślij</SubmitBtn>
         </StyledForm>
       )}
     </Formik>
  </>
);

export default ContactPage;