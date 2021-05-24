import React from "react";
import {
  RiHome7Line,
  // RiHashtag,
  RiBookmarkLine,
  RiFileList2Line,
} from "react-icons/ri";
import { IoNotificationsOutline, IoPersonOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { CgMoreO } from "react-icons/cg";
import styles from "./Sidebar.module.css";

import birdlogo from "./birdlogo.png";
import ProfileImage from "./ProfileImage.jpeg";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div>
        <img src={birdlogo} alt="Twitterbirdlogo" />
      </div>
      <div>
        <RiHome7Line />
        Home
      </div>
      <div>
        {/* <RiHashtag /> */}
        Explore
      </div>
      <div>
        <IoNotificationsOutline />
        Notifications
      </div>
      <div>
        <AiOutlineMail />
        Messages
      </div>
      <div>
        <RiBookmarkLine />
        Bookmarks
      </div>
      <div>
        <RiFileList2Line />
        Lists
      </div>
      <div>
        <IoPersonOutline />
        Profile
      </div>
      <div>
        <CgMoreO />
        more
      </div>
      <div>
        <button>Tweeet</button>
      </div>

      <div className={styles.userDetails}>
        <div>
          <img
            className={styles.profileImage}
            src={ProfileImage}
            alt="profiileimage"
          />
        </div>
        <div className={styles.username}>
          <div>Ravi</div>
          <div>@Ravikrishnudu</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
