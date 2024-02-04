import { Link, useNavigate } from 'react-router-dom';
import { MOVIE_CATEGORY_KEY, PROFILE_DATA_KEY } from '../../utils/constants';
import styles from './styles.module.css';

import profilePicture from '/src/assets/images/profile_picture.png';

const ProfileCard = () => {
  let profileData = localStorage.getItem(PROFILE_DATA_KEY);
  let movieData = localStorage.getItem(MOVIE_CATEGORY_KEY);

  const navigate = useNavigate();

  if (!profileData) {
    navigate('/register');
  } else {
    profileData = JSON.parse(profileData);
    movieData = JSON.parse(movieData);
  }

  const userMovieCategories = movieData?.map((category) => (
    <p key={category.id}>{category.name}</p>
  ));

  return (
    <div className={styles.profileCard}>
      <div className={styles.profilePictureContainer}>
        <img
          className={styles.profilePicture}
          src={profilePicture}
          alt="profile picture"
        />
      </div>
      <div className={styles.profileDetails}>
        <div className={styles.userDetails}>
          <p>{profileData?.name}</p>
          <p>{profileData?.email}</p>
          <p>{profileData?.username}</p>
        </div>
        <div className={styles.categoriesContainer}>
          {userMovieCategories ?? (
            <Link to="/categories">Select categories</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
