import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import base_url from "../../api/bootapi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./traffic.scss";

const Traffic = (props) => {
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(false);

  const activeDanger = "btn-danger btn";
  const activeSuccess = "btn-success btn";
  const direction = localStorage.getItem("direction");
  let interval = localStorage.getItem("interval");

  let [currentActive, setCurrentActive] = useState();
  let [nextActive, setNextActive] = useState();
  let [initial, setInitial] = useState(0);
  let [remaining, setRemaining] = useState(interval);

  let [flag, setFlag] = useState(false);
  let [emergency, setEmergency] = useState();

  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(1);

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

  const startFrom = (value) => {
    setEmergency(value);
    setFlag(true);
  };

  let directions = [];
  if (direction == "Clockwise") {
    directions.push("A");
    directions.push("B");
    directions.push("C");
    directions.push("D");
  } else if (direction == "Anti-Clockwise") {
    directions.push("A");
    directions.push("D");
    directions.push("C");
    directions.push("B");
  } else if (direction == "Up-Down") {
    directions.push("A");
    directions.push("C");
    directions.push("A");
    directions.push("C");
  } else {
    directions.push("B");
    directions.push("D");
    directions.push("B");
    directions.push("D");
  }

  useEffect(() => {
    setCurrentActive(directions[count]);
    setNextActive(directions[count1]);
  });

  useEffect(() => {
    let timer = setInterval(() => {
      if (flag) {
        for (let i = 0; i < 4; i++) {
          if (directions[i] == emergency) {
            setCount(i);
            if (i == 3) setCount1(0);
            else setCount1(i + 1);
            break;
          }
        }

        setCurrentActive(directions[count]);
        setNextActive(directions[count1]);
        setInitial(0);
        setRemaining(interval);
        setFlag(false);
        console.log(count + " " + count1);
      } else {
        if (initial >= interval) {
          setCurrentActive(directions[count]);
          setNextActive(directions[count1]);
          setInitial(0);
          setRemaining(interval);

          if (count == 3) {
            setCount(0);
          } else {
            setCount((prev) => prev + 1);
          }

          if (count1 >= 3) {
            setCount1(0);
          } else {
            setCount1((prev) => prev + 1);
          }
          console.log(count + " " + count1);
        } else {
          setInitial((prev) => prev + 1);
          setRemaining((remaining) => remaining - 1);
        }
      }
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  });

  return (
    <div className="cnt">
      <h2 style={{ color: "#FFF" }}>Traffic Analyzer</h2>
      {loginStatus ? (
        <div className="allItems">
          <Row style={{ paddingBottom: "3%" }}>
            <Col></Col>
            <Col style={{ textAlign: "end" }}>
              <Link className="btn btn-primary" to="/login/globalConfig">
                Settings
              </Link>
            </Col>
          </Row>

          <div className="row">
            <div className="col1">Time</div>
            <div className="col2">{initial}</div>
          </div>
          <div className="row">
            <div className="col1">
              <label>Current Open</label>
            </div>
            <div className="col2">{currentActive}</div>
          </div>

          <div className="row">
            <div className="col1">
              <label>Next Open</label>
            </div>
            <div className="col2">{nextActive}</div>
          </div>
          <div className="row">
            <div className="col1">
              <label>Direction</label>
            </div>
            <div className="col2">{direction}</div>
          </div>

          <div className="trafficCnt">
            <Row className="space">
              <Col></Col>
              <Col></Col>
              <Col>
                <button className={activeDanger} onClick={() => startFrom("A")}>
                  AA
                </button>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
            <Row className="space">
              <Col></Col>
              <Col></Col>
              <Col>
                <div
                  className={
                    currentActive == "A" ? activeSuccess : activeDanger
                  }
                >
                  A
                </div>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
            <Row className="space">
              <Col>
                <button className={activeDanger} onClick={() => startFrom("D")}>
                  AD
                </button>
              </Col>
              <Col>
                <div
                  className={
                    currentActive == "D" ? activeSuccess : activeDanger
                  }
                >
                  D
                </div>
              </Col>
              <Col></Col>
              <Col>
                <div
                  className={
                    currentActive == "B" ? activeSuccess : activeDanger
                  }
                >
                  B
                </div>
              </Col>
              <Col>
                <button className={activeDanger} onClick={() => startFrom("B")}>
                  AB
                </button>
              </Col>
            </Row>
            <Row className="space">
              <Col></Col>
              <Col></Col>
              <Col>
                <div
                  className={
                    currentActive == "C" ? activeSuccess : activeDanger
                  }
                >
                  C
                </div>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
            <Row className="space">
              <Col></Col>
              <Col></Col>
              <Col>
                <button className={activeDanger} onClick={() => startFrom("C")}>
                  AC
                </button>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
          </div>

          <div className="row" style={{ marginTop: "5%" }}>
            <div className="col1">Remaining Time</div>
            <div className="col2">{remaining}</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Traffic;
