import RegisterForm from '../../components/RegisterForm';
import styles from './styles.module.css';

const Register = () => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.registerLeft}>
        <h1>Discover new things on superapp</h1>
      </div>
      <div className={styles.registerRight}>
        <div className={styles.registerRightTop}>
          <h2>Super app</h2>
          <h3>Create your new account</h3>
        </div>
        <div className={styles.formContainer}>
          <RegisterForm />
          
        </div>
      </div>
    </div>
  );
};

export default Register;
