import React, { useState } from 'react';
import './Report.css';
import Pdp from '../analytics/Pdp'
import Apti from '../analytics/Apti'

function Report() {
  const [entriesPerPage, setEntriesPerPage] = useState(5);

  const handleEntriesPerPageChange = (event) => {
    setEntriesPerPage(parseInt(event.target.value, 10));
  };

  return (
    <div className="mainClass container">
      <div className="heading">
        <h2>
          Total Questions <span>40</span> <span>Maximum Time <span>60 Minutes</span></span>
        </h2>
      </div>

      <div className=" SELECT">
        <label htmlFor="entries">Show</label>
        <select id="entries" name="entries" value={entriesPerPage} onChange={handleEntriesPerPageChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
        <label htmlFor="entries">entries</label>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">RANK</th>
            <th scope="col">NAME</th>
            <th scope="col">MARK OBTAINED</th>
            <th scope="col">CORRECT</th>
            <th scope="col">INCORRECT</th>
            <th scope="col">SKIPPED</th>
            <th scope="col">TOTAL TIME</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Ram kumar</td>
            <td>68</td>
            <td>25</td>
            <td>11</td>
            <td>5</td>
            <td>45<span>m</span></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Mohan</td>
            <td>70</td>
            <td>24</td>
            <td>22</td>
            <td>5</td>
            <td>40<span>m</span></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Sohan</td>
            <td>80</td>
            <td>23</td>
            <td>11</td>
            <td>4</td>
            <td>39<span>m</span></td>
          </tr>
        </tbody>
      </table>
      <div className="container1">
        <div className="left">
          <Pdp />
        </div>
        <div className="right">
          <Apti />
        </div>
      </div>



      <table className="table">
        <thead>
          <tr>
            <th scope="col">RANK</th>
            <th scope="col">NAME</th>
            <th scope="col">MARK OBTAINED</th>
            <th scope="col">CORRECT</th>
            <th scope="col">INCORRECT</th>
            <th scope="col">SKIPPED</th>
            <th scope="col">TOTAL TIME</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Ram kumar</td>
            <td>68</td>
            <td>25</td>
            <td>11</td>
            <td>5</td>
            <td>45<span>m</span></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Mohan</td>
            <td>70</td>
            <td>24</td>
            <td>22</td>
            <td>5</td>
            <td>40<span>m</span></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Sohan</td>
            <td>80</td>
            <td>23</td>
            <td>11</td>
            <td>4</td>
            <td>39<span>m</span></td>
          </tr>
        </tbody>
      </table>
      </div>
  );
}

export default Report;
