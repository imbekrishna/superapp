import styles from './styles.module.css';
import { PROFILE_DATA_KEY, MOVIE_CATEGORY_KEY } from '../../utils/constants';
import { useState } from 'react';
import { useEffect } from 'react';

const ProfileCard = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    let profileData = localStorage.getItem(PROFILE_DATA_KEY);
    let movieData = localStorage.getItem(MOVIE_CATEGORY_KEY);

    if (profileData && movieData) {
      profileData = JSON.parse(profileData);
      setUserData((prev) => ({ ...prev, ...profileData }));
      movieData = JSON.parse(movieData);
      setUserData((prev) => ({ ...prev, movieData }));
    }
  }, []);

  const userMovieCategories = userData?.movieData?.map((category) => (
    <p key={category}>{category}</p>
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
          <p>{userData?.name}</p>
          <p>{userData?.email}</p>
          <p>{userData?.username}</p>
        </div>
        <div className={styles.categoriesContainer}>{userMovieCategories}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
