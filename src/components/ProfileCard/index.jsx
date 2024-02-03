import styles from './styles.module.css';
import { PROFILE_DATA_KEY, MOVIE_CATEGORY_KEY } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';

const ProfileCard = () => {
  let profileData = localStorage.getItem(PROFILE_DATA_KEY);
  let movieData = localStorage.getItem(MOVIE_CATEGORY_KEY);

  const navigate = useNavigate();

  if (profileData && movieData) {
    profileData = JSON.parse(profileData);
    movieData = JSON.parse(movieData);
  } else {
    navigate('/register');
  }

  const userMovieCategories = movieData?.map((category) => (
    <p key={category.id}>{category.name}</p>
  ));

  return (
    <div className={styles.profileCard}>
      <div className={styles.profilePictureContainer}>
        <img
          className={styles.profilePicture}
          src="/src/assets/images/profile_picture.png"
          alt="profile picture"
        />
      </div>
      <div className={styles.profileDetails}>
        <div className={styles.userDetails}>
          <p>{profileData?.name}</p>
          <p>{profileData?.email}</p>
          <p>{profileData?.username}</p>
        </div>
        <div className={styles.categoriesContainer}>{userMovieCategories}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
