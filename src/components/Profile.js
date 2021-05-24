import React from "react";
import CoverPhoto from "./CoverPhoto.jpeg";

import ProfileImage from "./ProfileImage.jpeg";

import { CgMoreO } from "react-icons/cg";
import { HiOutlineLocationMarker, HiOutlineCalendar } from "react-icons/hi";

import styles from "./Profile.module.css";

function Profile({ user }) {
  return (
    <div className={styles.userContainer}>
      <div>
        <div>
          <img
            src={CoverPhoto}
            className={styles.CoverPhoto}
            alt="CoverPhoto"
          />
        </div>
        <div className={styles.profileImageContainer}>
          <div>
            <img
              src={ProfileImage}
              className={styles.profileImage}
              alt="ProfileImage"
            />
          </div>
          <div className={styles.OptionAndFollow}>
            <div>
              <CgMoreO className={styles.moreOption} />
            </div>
            <div>
              <button className={styles.followButton}>Follow</button>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.name}>{user.name}</div>
          <div className={styles.username}>@ {user.username} </div>
          <div className={styles.bio}>
            National Parks 🏞️ “Life's most persistent and urgent question is,
            'What are you doing for others?'”
          </div>
          <div className={styles.locationAndDate}>
            <span>
              <HiOutlineLocationMarker /> Cupertino
            </span>
            <span className={styles.calander}>
              <HiOutlineCalendar /> Joined August 2013
            </span>
          </div>
          <div className={styles.follow}>
            <span>
              <strong>70</strong> Followers
            </span>{" "}
            <span className={styles.following}>
              <strong>12.9M </strong> Following{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
