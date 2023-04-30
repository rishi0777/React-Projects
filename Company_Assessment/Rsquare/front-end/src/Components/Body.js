import React from "react";
import { CgMediaLive } from "react-icons/cg";
import { BsHourglassSplit, BsFillFunnelFill } from "react-icons/bs";
import { TbCalendarEvent } from "react-icons/tb";
import { MdSearch, MdCalendarToday } from "react-icons/md";
import { IoCheckmarkDoneSharp, IoEllipsisVertical } from "react-icons/io5";
import profile from "../assets/profile.jpg";
import "./Body.scss";

const Body = () => {
  return (
    <div className="Body">
      <div className="bodySearchbar">
        <div className="searchIconCnt">
          <MdSearch className="searchIcon" />
        </div>
        <input
          type="text"
          className="searchBar"
          placeholder="Search for projects"
        />
      </div>
      <div className="bodyContent">
        <div className="progressBar">
          <div>
            <h3>Welcome back, Andrew!</h3>
          </div>
          <div style={{ color: "#8a94a1" }}>
            Have a look at the Quick Progess Bar.
          </div>

          <div className="cards">
            <div className="card1">
              <div className="heading">
                <div className="cnt">
                  <CgMediaLive style={{ marginRight: "1rem" }} />
                  <span className="content">Live Projects</span>
                </div>
                <div
                  className="cnt"
                  style={{ paddingLeft: "1rem", width: "6rem" }}
                >
                  <span className="content">View All</span>
                </div>
              </div>
              <div className="body">56</div>
              <div className="foot">
                <div className="content">
                  Currently, the projects in progress
                </div>
              </div>
            </div>
            <div className="card2">
              <div className="heading">
                <div className="cnt">
                  <BsHourglassSplit
                    style={{ color: "#FFF", marginRight: "1rem" }}
                  />
                  <span className="content">Completed</span>
                </div>
              </div>
              <div className="body">124</div>
              <div className="foot">
                <div className="content">Projects in progress</div>
              </div>
            </div>
            <div className="card3">
              <div className="heading">
                <div className="cnt">
                  <IoCheckmarkDoneSharp style={{ marginRight: "1rem" }} />
                  <span className="content">Completed</span>
                </div>
              </div>
              <div className="body">24</div>
              <div className="foot">
                <div className="content">Completed projects</div>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="projectHeading">
            <h3>Current Projects</h3>
            <div className="sideIcons">
              <div className="filter">
                Fliter &nbsp;
                <BsFillFunnelFill />
              </div>
              <div className="ellipsis">
                <IoEllipsisVertical />
              </div>
            </div>
          </div>

          <div style={{ color: "#8a94a1" }}>
            Projects that are currently in progress
          </div>

          <div className="cards">
            <div className="card1">
              <div className="heading">
                <h5>
                  <b>Construction Project</b>
                </h5>
              </div>
              <div className="subheading">Property Name</div>
              <div className="cnt">
                <div className="cost">
                  <b>$&nbsp;</b>100-800
                </div>
                <div className="deadline">
                  <TbCalendarEvent style={{ marginRight: "0.5rem" }} />
                  Deadline- <b>25 May</b>
                </div>
              </div>
              <div className="workDone">
                <div className="workProgress">
                  <div className="completed"></div>
                </div>
                <div
                  className="progressInfo"
                  style={{ color: "#8a94a1", fontSize: "0.9rem" }}
                >
                  <div>Progress Bar</div>
                  <div>80%</div>
                </div>
              </div>
              <div className="vendorDetails">
                <div className="vendorProfile">
                  <img className="vendorPhoto" src={profile} />
                  <div className="name">Vendor's Name</div>
                </div>

                <div className="view">View</div>
              </div>
            </div>
            <div className="card1">
              <div className="heading">
                <h5>
                  <b>Construction Project</b>
                </h5>
              </div>
              <div className="subheading">Property Name</div>
              <div className="cnt">
                <div className="cost">
                  <b>$&nbsp;</b>100-800
                </div>
                <div className="deadline">
                  <TbCalendarEvent style={{ marginRight: "0.5rem" }} />
                  Deadline- <b>25 May</b>
                </div>
              </div>
              <div className="workDone">
                <div className="workProgress">
                  <div className="completed"></div>
                </div>
                <div
                  className="progressInfo"
                  style={{ color: "#8a94a1", fontSize: "0.9rem" }}
                >
                  <div>Progress Bar</div>
                  <div>80%</div>
                </div>
              </div>
              <div className="vendorDetails">
                <div className="vendorProfile">
                  <img className="vendorPhoto" src={profile} />
                  <div className="name">Vendor's Name</div>
                </div>

                <div className="view">View</div>
              </div>
            </div>
            <div className="card1">
              <div className="heading">
                <h5>
                  <b>Construction Project</b>
                </h5>
              </div>
              <div className="subheading">Property Name</div>
              <div className="cnt">
                <div className="cost">
                  <b>$&nbsp;</b>100-800
                </div>
                <div className="deadline">
                  <TbCalendarEvent style={{ marginRight: "0.5rem" }} />
                  Deadline- <b>25 May</b>
                </div>
              </div>
              <div className="workDone">
                <div className="workProgress">
                  <div className="completed"></div>
                </div>
                <div
                  className="progressInfo"
                  style={{ color: "#8a94a1", fontSize: "0.9rem" }}
                >
                  <div>Progress Bar</div>
                  <div>80%</div>
                </div>
              </div>
              <div className="vendorDetails">
                <div className="vendorProfile">
                  <img className="vendorPhoto" src={profile} />
                  <div className="name">Vendor's Name</div>
                </div>

                <div className="view">View</div>
              </div>
            </div>
          </div>
        </div>

        <div className="invoice">
          <div className="invoiceHeading">
            <h3>Pending Invoice</h3>

            <div className="ellipsis">
              <IoEllipsisVertical />
            </div>
          </div>

          <div style={{ color: "#8a94a1" }}>
            Invoices that are currently pending
          </div>

          <div className="cards">
            <div className="card1">
              <div className="amount">
                <h5>
                  <b>$137.00</b>
                </h5>
              </div>
              <div className="amountOptions">
                <div>Amount</div>

                <div className="approved">Approved</div>
              </div>
              <div className="profile">
                <img className="profilePhoto" src={profile} />

                <div className="profileDetails">
                  <div className="name">
                    <strong>Erin Gonzales</strong>
                  </div>
                  <span>
                    #5531 &nbsp;&nbsp;&nbsp;
                    <span style={{ color: "#8a94a1" }}>Date-25 May</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="card1">
              <div className="amount">
                <h5>
                  <b>$137.00</b>
                </h5>
              </div>
              <div className="amountOptions">
                <div>Amount</div>

                <div className="pending">Pending</div>
              </div>
              <div className="profile">
                <img className="profilePhoto" src={profile} />

                <div className="profileDetails">
                  <div className="name">
                    <strong>Erin Gonzales</strong>
                  </div>
                  <span>
                    #5531 &nbsp;&nbsp;&nbsp;
                    <span style={{ color: "#8a94a1" }}>Date-25 May</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="card1">
              <div className="amount">
                <h5>
                  <b>$137.00</b>
                </h5>
              </div>
              <div className="amountOptions">
                <div>Amount</div>

                <div className="pending">Pending</div>
              </div>
              <div className="profile">
                <img className="profilePhoto" src={profile} />

                <div className="profileDetails">
                  <div className="name">
                    <strong>Erin Gonzales</strong>
                  </div>
                  <span>
                    #5531 &nbsp;&nbsp;&nbsp;
                    <span style={{ color: "#8a94a1" }}>Date-25 May</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
