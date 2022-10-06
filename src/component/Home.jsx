import React from "react";
import "../component/home.css";

const data = [
  { RollNo: 1, Name: "Gokul", Subject: "React", Mark: 68 },
  { RollNo: 2, Name: "Raj", Subject: "Node", Mark: 78 },
  { RollNo: 3, Name: "Mani", Subject: "Mongo", Mark: 88 },
  { RollNo: 4, Name: "Vel", Subject: "Javascript", Mark: 88 },
  { RollNo: 5, Name: "Sakthi", Subject: "DOM", Mark: 98 },
];

const Home = () => {
  return (
    <div className="home_container">
      <h1>Student Name</h1>
      <table border="2">
        <thead>
          <tr>
            <th>Reg.No</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Mark</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, key) => (
            <tr key={key}>
              <td>{value.RollNo}</td>
              <td>{value.Name}</td>
              <td>{value.Subject}</td>
              <td>{value.Mark}</td>
            </tr>
          ))}

          {/* <tr>
            <td>1</td>
            <td>Raj</td>
            <td>React</td>
            <td>78</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Mani</td>
            <td>Node</td>
            <td>88</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Vel</td>
            <td>Mongo</td>
            <td>98</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Gokul</td>
            <td>Javascript</td>
            <td>78</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Sakthi</td>
            <td>DOM</td>
            <td>68</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
