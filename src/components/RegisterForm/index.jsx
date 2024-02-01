import styles from './styles.module.css';
import { useState } from 'react';
import { PROFILE_DATA_KEY } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();

  const initalFormData = {
    name: '',
    username: '',
    email: '',
    mobile: '',
    terms: false,
  };

  const [formData, setFormData] = useState(initalFormData);

  const [errors, setErrors] = useState({
    name: '',
    username: '',
    email: '',
    mobile: '',
    terms: '',
  });

  function handleInputField(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function validateForm(inputValues) {
    let validationErrors = {
      name: '',
      username: '',
      email: '',
      mobile: '',
      terms: '',
    };

    if (inputValues.name === '') {
      validationErrors.name = 'Field is required';
    } else {
      validationErrors.name = '';
    }
    if (inputValues.username === '') {
      validationErrors.username = 'Field is required';
    } else {
      validationErrors.username = '';
    }
    if (inputValues.email === '') {
      validationErrors.email = 'Field is required';
    } else {
      validationErrors.email = '';
    }
    if (inputValues.mobile === '') {
      validationErrors.mobile = 'Field is required';
    } else {
      validationErrors.mobile = '';
    }
    if (inputValues.terms === false) {
      validationErrors.terms = 'Check this box if you want to proceed';
    } else {
      validationErrors.terms = '';
    }

    setErrors(validationErrors);
    const isValid = Object.values(inputValues).every(
      (error) => Boolean(error) === true
    );

    return isValid;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isFormValid = validateForm(formData);

    if (isFormValid) {
      localStorage.setItem(PROFILE_DATA_KEY, JSON.stringify(formData));
      setFormData(initalFormData);
      navigate('/categories');
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <div className={styles.formField}>
          <input
            className={`${styles.formInput} ${errors.name ? styles.error : ''}`}
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputField}
          />
          <p className={styles.fieldError}>{errors.name}</p>
        </div>
        <div className={styles.formField}>
          <input
            className={`${styles.formInput} ${
              errors.username ? styles.error : ''
            }`}
            type="text"
            placeholder="UserName"
            name="username"
            value={formData.username}
            onChange={handleInputField}
          />
          <p className={styles.fieldError}>{errors.username}</p>
        </div>
        <div className={styles.formField}>
          <input
            className={`${styles.formInput} ${
              errors.email ? styles.error : ''
            }`}
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputField}
          />
          <p className={styles.fieldError}>{errors.email}</p>
        </div>
        <div className={styles.formField}>
          <input
            className={`${styles.formInput} ${
              errors.mobile ? styles.error : ''
            }`}
            type="tel"
            placeholder="Mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputField}
          />
          <p className={styles.fieldError}>{errors.mobile}</p>
        </div>
        <div className={styles.formField}>
          <label htmlFor="terms">
            <input
              className={`${errors.terms ? styles.error : ''}`}
              type="checkbox"
              name="terms"
              id="terms"
              checked={formData.terms}
              onChange={handleInputField}
            />
            Share my registration data with Superapp
          </label>
          <p className={styles.fieldError}>{errors.terms}</p>
        </div>
        <button className={styles.formButton}>SIGN UP</button>
      </form>

      <div className={styles.registerRightBottom}>
        <p>
          By clicking on Sign up. you agree to Superapp{' '}
          <span>Terms and Conditions of Use</span>
        </p>
        <p>
          To learn more about how Superapp collects, uses, shares and protects
          your personal data please head Superapp <span>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
