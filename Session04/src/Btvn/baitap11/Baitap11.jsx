import React, { useState } from "react";

export default function Baitap11() {
  let [job, setJob] = useState("");
  const [listJob, setListJob] = useState(
    () => JSON.parse(localStorage.getItem("listJob")) || []
  );
  const [listCheck, setListCheck] = useState(
    JSON.parse(localStorage.getItem("listCheck")) || []
  );

  const addJob = () => {
    if (!job) {
      alert("Can not blank !");
    } else if (listJob?.includes(job)) {
      alert("job existed !");
    } else {
      const newList = [...listJob, job];
      setListJob(newList);
      localStorage.setItem("listJob", JSON.stringify(newList));
      setJob("");
    }
  };

  const editJob = (job) => {
    setJob(job);
  };

  const deleteJob = (job) => {
    if (listJob?.includes(job)) {
      const newJops = listJob.filter((jb) => jb !== job);

      setListJob(newJops);
      localStorage.setItem("listJob", JSON.stringify(newJops));
    } else {
      alert("not found job");
    }
  };

  const handleClick = (job) => {
    if (listCheck?.includes(job)) {
      const lc = listCheck.filter((job) => job !== job);
      setListCheck(lc);
      localStorage.setItem("listCheck", JSON.stringify(lc));
    } else {
      const lc = [...listCheck, job];
      setListCheck(lc);
      localStorage.setItem("listCheck", JSON.stringify(lc));
    }
  };

  let totalJob = listJob?.length;
  let jobSuccess = listCheck?.length;
  return (
    <div>
      <h1>Bài tập 11</h1>
      <div style={{ textAlign: "center", width: 800, height: 500 }}>
        <h2>Danh sách công việc</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            width: 800,
          }}
        >
          <input
            value={job}
            type="text"
            placeholder="Nhập tên công việc"
            style={{ flex: 1 }}
            onChange={(event) => setJob(event.target.value)}
          />
          <button onClick={addJob}>Thêm</button>
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th>Status</th>
                <th style={{ marginLeft: 20, marginRight: 100 }}>Job name</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {listJob?.map((jb, index) => (
                <tr
                  key={index}
                  style={{
                    width: 800,
                  }}
                >
                  <td>
                    <input
                      onChange={() => handleClick(jb)}
                      type="checkbox"
                      checked={listCheck.includes(jb) && true}
                    />
                  </td>
                  <td>{jb}</td>
                  <td>
                    <button
                      onClick={() => editJob(jb)}
                      style={{ color: "blue" }}
                    >
                      Sửa
                    </button>
                    <button
                      onClick={() => deleteJob(jb)}
                      style={{ color: "red" }}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>
            Công việc đã hoàn thành : {jobSuccess}/{totalJob}
          </h3>
        </div>
      </div>
      <hr />
    </div>
  );
}
