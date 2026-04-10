import React, { useState } from "react";
import { fetchRandomUser } from "./Api";
import "./styles.css";
import {
  Name,
  Email,
  Gender,
  Location,
  Phone,
  LoginDetails,
  Picture,
  TimeZone,
} from "./userDetails";

/**
 * Debugging in React - Exercise 1
 * We are using a free API 'https://randomuser.me/api'
 * to fetch random user details on each click.
 * We have intentionally added a few bugs
 * and now data is not displaying correctly.
 * Fix the bugs to display all the details correctly.
 * Use React components tool for troubleshooting.
 * The codesandbox's React DevTools has certain limitation.
 * To use all the features available
 * on the React component tool,
 * please open the URL https://fyyir.csb.app in a new tab.
 */

export default function App() {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({});

  const handleClick = async (_) => {
    if (!loading) {
      setLoading(true);
      const response = await fetchRandomUser();
      console.log(response.data.results[0]);
      setUserData(response.data.results[0]);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <button className="button" onClick={handleClick}>
        {loading ? "Loading..." : "Click to load user details"}
      </button>
      {userData && Object.keys(userData).length > 0 && (
        <div className="user-details">
          <Name name={userData.name} />
          <Email email={userData.gender} />
          <Gender gender={userData.email} />
          <Location location={userData.location} />
          <Phone phone={userData.phone} />
          <TimeZone
            offset={userData.location?.timezone?.offset}
            description={userData.location?.timezone.description}
          />
          <LoginDetails login={userData.login} />
          <Picture picture={userData.picture} />
        </div>
      )}
    </div>
  );
}
