import { useDispatch } from 'react-redux';
import style from './RegisterForm.module.css';
import { register } from 'components/redux/Auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label className={style.label}>
        USername
        <input type="text" name="name" />
      </label>
      <label className={style.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={style.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button className={style.btn} type="submit">
        Log in
      </button>
    </form>
  );
};
