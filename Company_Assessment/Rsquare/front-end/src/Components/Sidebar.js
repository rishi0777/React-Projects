import { FaGreaterThan } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import "./Sidebar.scss";
import profile from "../assets/profile.jpg";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="sideInfo">
        <img className="profilePhoto" src={profile} />
        <div className="profileContent">
          <span className="mainHeading">Oliver Smith</span>
          <span>Vendor</span>
        </div>
        <div className="profileOption">
          <FaGreaterThan />
        </div>
      </div>

      <div className="sideContent">
        <div className="sideUpcomingMeeting">
          <div className="sideContentHeading">
            <span>Upcoming Meeting</span>
            <IoEllipsisVertical />
          </div>
          <hr />

          <div className="todaysMeetings">
            <div className="sideUpcomingHeading">
              <span>Todays's Meetings</span>
              <HiChevronDown />
            </div>

            <div className="meetingContent">
              <div className="meetingContentHeading">
                <span style={{ color: "#14A9F9" }}>
                  30 minute call with clients
                </span>
                <IoEllipsisVertical />
              </div>
              <span>
                <b style={{ fontSize: "1.1rem" }}>Project Discovery Call</b>
              </span>
              <div className="meetingContentBody">
                <span>
                  <span style={{ color: "#8a94a1" }}>Due Soon </span>
                  <b>09:20 am</b>
                </span>
                <div className="cnt">
                  <div className="meetingParticipant">
                    <img className="participantPhoto" src={profile} />
                    <img className="participantPhoto" src={profile} />
                    <img className="participantPhoto" src={profile} />
                    <span style={{ color: "#8a94a1", fontSize: "0.8rem" }}>
                      5+
                    </span>
                  </div>
                  <div className="inviteParticipants">+ &nbsp;&nbsp;Invite</div>
                </div>
              </div>
            </div>

            <div className="meetingContent">
              <div className="meetingContentHeading">
                <span style={{ color: "#14A9F9" }}>
                  30 minute call with clients
                </span>
                <IoEllipsisVertical />
              </div>
              <span>
                <b style={{ fontSize: "1.1rem" }}>Project Discovery Call</b>
              </span>
              <div className="meetingContentBody">
                <span>
                  <span style={{ color: "#8a94a1" }}>Due Soon </span>
                  <b>09:20 am</b>
                </span>
                <div className="cnt">
                  <div className="meetingParticipant">
                    <img className="participantPhoto" src={profile} />
                    <img className="participantPhoto" src={profile} />
                    <img className="participantPhoto" src={profile} />
                    <span style={{ color: "#8a94a1", fontSize: "0.8rem" }}>
                      5+
                    </span>
                  </div>
                  <div className="inviteParticipants">+ &nbsp;&nbsp;Invite</div>
                </div>
              </div>
            </div>
          </div>

          <div className="scheduleMeetings">
            <div className="sideUpcomingHeading">
              <span>Schedule Meetings</span>
              <HiChevronUp />
            </div>
          </div>
          <hr />
        </div>

        <div className="sideRecentActivity">
          <div className="sideContentHeading">
            <span>Recent Activity</span>
            <IoEllipsisVertical />
          </div>
          <div className="recentNotifications">
            <div className="notification">
              <div className="notificationDot">
                <div className="dot"></div>
              </div>

              <div className="notificationContent">
                <b>Thankyou for booking meeting with JJ.</b>
                <div className="name">Kevin Dukkon</div>
                <div className="date" style={{ color: "#8a94a1" }}>
                  Jun 14, 2022 at 5:31 PM
                </div>
              </div>
              <div className="image">
                <img className="notificantPhoto" src={profile} />
              </div>
            </div>

            <div className="notification">
              <div className="notificationDot">
                <div className="dot"></div>
              </div>

              <div className="notificationContent">
                <b>Thankyou for booking meeting with JJ.</b>
                <div className="name">Kevin Dukkon</div>
                <div className="date" style={{ color: "#8a94a1" }}>
                  Jun 14, 2022 at 5:31 PM
                </div>
              </div>
              <div className="image">
                <img className="notificantPhoto" src={profile} />
              </div>
            </div>

            <div className="notification">
              <div className="notificationDot">
                <div className="dot"></div>
              </div>

              <div className="notificationContent">
                <b>Thankyou for booking meeting with JJ.</b>
                <div className="name">Kevin Dukkon</div>
                <div className="date" style={{ color: "#8a94a1" }}>
                  Jun 14, 2022 at 5:31 PM
                </div>
              </div>
              <div className="image">
                <img className="notificantPhoto" src={profile} />
              </div>
            </div>

            <div className="notification">
              <div className="notificationDot">
                <div className="dot"></div>
              </div>

              <div className="notificationContent">
                <b>Thankyou for booking meeting with JJ.</b>
                <div className="name">Kevin Dukkon</div>
                <div className="date" style={{ color: "#8a94a1" }}>
                  Jun 14, 2022 at 5:31 PM
                </div>
              </div>
              <div className="image">
                <img className="notificantPhoto" src={profile} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
