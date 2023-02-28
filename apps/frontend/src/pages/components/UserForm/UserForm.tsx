import { Formik } from 'formik';
import { InputContainer, Label, Input, FormStyled, DoubleRow, ErrorMessageStyled } from './UserForm.styled';
import Button from '../../../components/Button/Button';
import { UserSchema } from '../../../schemas';

interface FormPayload {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  phone: string;
}

interface UserFormProps {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  phone: string;
  hideSubmit?: boolean;
  onSubmit: (payload: FormPayload) => void;
}

const UserForm = (props: UserFormProps) => {
  return (
    <Formik
      initialValues={{
        firstName: props.firstName,
        lastName: props.lastName,
        email: props.email,
        username: props.username,
        phone: props.phone,
      }}
      validationSchema={UserSchema}
      onSubmit={values => {
        props.onSubmit(values);
      }}
     >
      {({ handleSubmit, handleChange, handleBlur, values }) => (
        <FormStyled id={props.id} onSubmit={handleSubmit}>
          <DoubleRow>
            <InputContainer width={45}>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                data-cy="user-form-firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
              <ErrorMessageStyled
                data-cy="input-error-firstName" name="firstName" component="div"
              />
            </InputContainer>
            <InputContainer width={45}>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                data-cy="user-form-lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
              <ErrorMessageStyled
                data-cy="input-error-lastName" name="lastName" component="div"
              />
            </InputContainer>
          </DoubleRow>

          <InputContainer>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              data-cy="user-form-email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <ErrorMessageStyled
              data-cy="input-error-email" name="email" component="div"
            />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              type="username"
              data-cy="user-form-username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            <ErrorMessageStyled
              data-cy="input-error-username" name="username" component="div"
            />
          </InputContainer>
          <DoubleRow>
            <InputContainer width={45}>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="phone"
                data-cy="user-form-phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              <ErrorMessageStyled
                data-cy="input-error-phone" name="phone" component="div"
              />
            </InputContainer>
          </DoubleRow>
          {!props.hideSubmit && (
            <Button
              type="submit"
              theme="secondary"
              dataCy="user-form-submit"
            >
              Submit
            </Button>
          )}
        </FormStyled>
      )}
    </Formik>
  );
};

export default UserForm;
