import style from './home.module.css';
import imageHome from '../../../images/phonebook.svg';
export const Home = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Contacts Comunity</h1>
      <div className={style.imageWrapper}>
        <img src={imageHome} width="400px" alt="network-people" />
      </div>
    </div>
  );
};

export default Home;
