import axios from "axios";
import React, { useLayoutEffect, useState } from "react";
import base_url from "../../api/bootapi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./GlobalConfig.scss";

const GlobalConfig = () => {
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(false);
  const [data, setData] = useState();

  // const setInterval(() => {

  // }, interval);

  useLayoutEffect(() => {
    axios.get(`${base_url}/login`).then(
      (response) => {
        if (response.data === 1) {
          setLoginStatus(true);
        } else {
          setLoginStatus(false);
          navigate(`/`);
          toast.warning("Not Authenticated, Login Again", {
            position: "bottom-right",
            autoClose: 1500,
          });
        }
      },
      (error) => {
        setLoginStatus(false);
        navigate(`/`);
        toast.error("Something Went Wrong", {
          position: "bottom-right",
          autoClose: 1500,
        });
        console.log("error" + error);
      }
    );
  }, []);

  const handleSubmit = () => {
    const interval = document.getElementById("interval").value;
    if (interval === "") {
      toast.error("Put the value of interval", {
        position: "bottom-right",
        autoClose: 1500,
      });
    } else {
      if (data.direction == undefined) data.direction = "Clockwise";
      localStorage.setItem("direction", data.direction);
      localStorage.setItem("interval", data.interval);
      navigate(`/login/traffic`);
    }
  };
  return (
    <div className="cnt">
      {loginStatus ? (
        <>
          <div className="mainForm">
            <h1 className="caption">Global Configuration</h1>

            <div className="row">
              <div className="col1">Direction</div>
              <div className="col2">
                <select
                  name="direction"
                  id="direction"
                  onChange={(e) => {
                    setData({ ...data, direction: e.target.value });
                  }}
                >
                  <option value="Clockwise">Clockwise</option>
                  <option value="Anti-Clockwise">Anti-Clockwise</option>
                  <option value="Up-Down">Up-Down</option>
                  <option value="Right-Left">Right-Left</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col1">
                <label>Interval</label>
              </div>
              <div className="col2">
                <input
                  id="interval"
                  type="number"
                  placeholder="input the time interval (in seconds)"
                  onChange={(e) => {
                    setData({ ...data, interval: e.target.value });
                  }}
                ></input>
              </div>
            </div>

            <div className="row">
              <button id="submitbtn" onClick={handleSubmit}>
                {" "}
                Save/Update{" "}
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default GlobalConfig;
