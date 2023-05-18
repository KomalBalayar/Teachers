import "./App.css";
import React from 'react'

import {FaLandmark,FaUserTie,FaRegIdCard,FaMoneyCheck,FaAtom,FaFileInvoice} from "react-icons/fa"







function App() {
  return (
    <div className="App">
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-primary">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a
                href="/"
                class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-light text-decoration-none"
              >
                <span class="fs-5 d-none d-sm-inline">Udemy Inter School</span>
              </a>
              <ul
                class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li class="nav-item ">
           
                  <a href="#" class="nav-link align-middle px-0">
                    
                    <span class="ms-1 d-none d-sm-inline text-light">
                   <span className="mx-2"> <FaLandmark /> </span>   Dashboard
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#submenu1"
                    data-bs-toggle="collapse"
                    class="nav-link px-0 align-middle"
                  >
                    <i class="fs-4 bi-speedometer2"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline text-light">
                   <span className="mx-2"> <FaUserTie /></span> Teachers
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0 align-middle">
                    <i class="fs-4 bi-table"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline text-light">
                    <span className="mx-2"> <FaRegIdCard /> </span> Students/ classes
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#submenu2"
                    data-bs-toggle="collapse"
                    class="nav-link px-0 align-middle "
                  >
                    <i class="fs-4 bi-bootstrap"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline text-light">
                    <span className="mx-2"> <FaMoneyCheck /></span> Billing
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#submenu3"
                    data-bs-toggle="collapse"
                    class="nav-link px-0 align-middle"
                  >
                    <i class="fs-4 bi-grid"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline text-light">
                    <span className="mx-2"> <FaAtom /></span>  Settings & Profile
                    </span>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0 align-middle">
                    <i class="fs-4 bi-people"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline text-light">
                    <span className="mx-2"> <FaFileInvoice /></span> Exam</span>{" "}
                  </a>
                </li>
              </ul>
              <hr />
              <div class="dropdown pb-4">
                <a
                  href="#"
                  class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="hugenerd"
                    width="30"
                    height="30"
                    class="rounded-circle"
                  />
                  <span class="d-none d-sm-inline mx-1">Features (New)</span>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-dark text-small shadow"
                  aria-labelledby="dropdownUser1"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      New project...
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col py-3">
            <nav class="navbar navbar-light bg-light">
              <form class="form-inline">
                <button type="button" class="btn btn-outline-primary rounded-0">
                  Export CSV
                </button>
                <button type="button" class="btn btn-primary rounded-0 mx-3">
                  Add Teachers
                </button>

           
                <div class="position-absolute top-0 end-0">
                  <button type="button" class="btn btn-outline-dark my-2">
                    Log out
                  </button>
                </div>
              </form>
            </nav>
            <div>
      <table class="table my-5">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Subject</th>
      <th scope="col">Class</th>
      <th scope="col">Gmail Id</th>
      <th scope='col'>Gender</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">shalini</th>
      <td>Maths</td>
      <td>9th</td>
      <td>shalini123@gmail.com</td>
      <td>Female</td>
    </tr>
    <tr>
      <th scope="row">shobha</th>
      <td>science</td>
      <td>10th</td>
      <td>shobha111@gmail.com</td>
      <td>Female</td>
    </tr>
    <tr>
      <th scope="row">deven</th>
      <td>sports</td>
      <td>11th</td>
      <td>deven123@gmail.com</td>
      <td>Male</td>
    </tr>
    <tr>
      <th scope="row">rajan</th>
      <td>english</td>
      <td>12th</td>
      <td>rajan55@gmail.com</td>
      <td>Male</td>
    </tr>
    <tr>
      <th scope="row">shalini</th>
      <td>Maths</td>
      <td>9th</td>
      <td>shalini123@gmail.com</td>
      <td>Female</td>
    </tr>
    <tr>
      <th scope="row">shobha</th>
      <td>science</td>
      <td>10th</td>
      <td>shobha111@gmail.com</td>
      <td>Female</td>
    </tr>
    <tr>
      <th scope="row">deven</th>
      <td>sports</td>
      <td>11th</td>
      <td>deven123@gmail.com</td>
      <td>Male</td>
    </tr>
    <tr>
      <th scope="row">rajan</th>
      <td>english</td>
      <td>12th</td>
      <td>rajan55@gmail.com</td>
      <td>Male</td>
    </tr>
    <tr>
      <th scope="row">shalini</th>
      <td>Maths</td>
      <td>9th</td>
      <td>shalini123@gmail.com</td>
      <td>Female</td>
    </tr>
    <tr>
      <th scope="row">shobha</th>
      <td>science</td>
      <td>10th</td>
      <td>shobha111@gmail.com</td>
      <td>Female</td>
    </tr>
    <tr>
      <th scope="row">deven</th>
      <td>sports</td>
      <td>11th</td>
      <td>deven123@gmail.com</td>
      <td>Male</td>
    </tr>
    <tr>
      <th scope="row">rajan</th>
      <td>english</td>
      <td>12th</td>
      <td>rajan55@gmail.com</td>
      <td>Male</td>
    </tr>
  </tbody>
</table>
    </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default App;
