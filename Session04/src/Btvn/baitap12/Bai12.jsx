import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./bai12.css";
import { Button, Form, Input, Space, Table, Tag } from "antd";

export default function Bai12() {
  const [jobs, setJobs] = useState(
    () => JSON.parse(localStorage.getItem("jobs")) || []
  );
  const [dataInput, setDataInput] = useState("");
  const [action, setAction] = useState("add");
  const [success, setSuccess] = useState(() => {
    return jobs.filter((job) => job.status === true).length;
  });
  const [totalJob, setTotalJob] = useState(jobs.length);
  const [error, setError] = useState("");
  const [jobUpdate, setJobUpdate] = useState(null);

  /**
   * xử lý onchange khi người dùng nhập data
   * @param {*} event
   * author : Nguyễn Công Hưởng <26/11/2024>
   */
  const handleChangeInput = (event) => {
    setDataInput(event.target.value.trim());
  };

  /**
   * lưu lại data trên localStorege
   * @param {*} jobs
   * author : Nguyễn Công Hưởng <26/11/2024>
   */
  const saveJobs = (jobs) => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  };

  const updateJobSucess = (jobs) => {
    setSuccess(jobs.filter((job) => job.status === true).length);
  };

  const updateTotalJobs = (jobs) => {
    setTotalJob(jobs.length);
  };

  /**
   * xử lý checkbox đánh dấu hoàn thành job và ngược lại
   * @param {*} job
   * author : Nguyễn Công Hưởng <26/11/2024>
   */
  const handleCheckboxChange = (job) => {
    const newJobs = jobs.map((jb) => {
      if (jb.key === job.key) {
        return {
          ...jb,
          status: !jb.status,
        };
      } else {
        return jb;
      }
    });
    setJobs(newJobs);
    saveJobs(newJobs);
    updateJobSucess(newJobs);
  };

  /**
   * xử lý add or edit job và lưu localStorage
   * @param {*} event
   * author : Nguyễn Công Hưởng <26/11/2024>
   */
  const handleAddOrDelete = (event) => {
    event.preventDefault();
    if (action === "add") {
      const checkExist = jobs.findIndex((job) => job.jobName === dataInput);
      if (checkExist >= 0) {
        setError("Tên công việc đã tồn tại");
      } else {
        const newKey = uuidv4();
        const newJob = {
          key: newKey,
          stt: newKey,
          jobName: dataInput,
          status: false,
        };
        const newJobs = [...jobs, newJob];
        setJobs(newJobs);
        setDataInput("");
        saveJobs(newJobs);
        updateTotalJobs(newJobs);
      }
    } else {
      let indexJob = jobs.findIndex((job) => job.jobName === dataInput);

      if (indexJob >= 0) {
        if (dataInput === jobUpdate.jobName) {
          indexJob = -1;
        }
      }
      if (indexJob >= 0) {
        setError("Tên công việc đã tồn tại");
      } else {
        const newJobs = jobs.map((job) => {
          if (job.key === jobUpdate.key) {
            return { ...job, jobName: dataInput };
          } else {
            return job;
          }
        });
        setJobs(newJobs);
        setDataInput("");
        saveJobs(newJobs);
        setJobUpdate(null);
      }
    }
  };

  const handleActionDelete = (key) => {
    const newJobs = jobs.filter((job) => job.key !== key);
    setJobs(newJobs);
    saveJobs(newJobs);
    updateJobSucess(newJobs);
    updateTotalJobs(newJobs);
  };

  const handleActionUpdate = (key) => {
    setAction("update");
    const indexJob = jobs.findIndex((job) => job.key === key);
    if (indexJob >= 0) {
      setDataInput(jobs[indexJob].jobName);
      setJobUpdate(jobs[indexJob]);
    }
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "stt",
      key: "stt",
      render: (text, record) => (
        <div className="flex">
          <input
            checked={record.status ? true : false}
            className="mr-2"
            type="checkbox"
            onChange={() => handleCheckboxChange(record)}
          />
          <p>{record.stt}</p>
        </div>
      ),
    },
    {
      title: "Job Name",
      dataIndex: "jobName",
      key: "jobName",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text, record) => <p>{record.status ? "success" : "pending"}</p>,
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <>
          <Button type="primary" onClick={() => handleActionUpdate(record.key)}>
            Edit
          </Button>
          <Button
            className="bg-red-500 text-white"
            type="default"
            onClick={() => handleActionDelete(record.key)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];
  return (
    <div>
      <h1>Đây là bài tập 12 TodoList</h1>
      <br />
      <div>
        <div className="flex">
          <form
            className="flex w-[800px]"
            onSubmit={(event) => handleAddOrDelete(event)}
          >
            <Input
              value={dataInput}
              onChange={(event) => handleChangeInput(event)}
              type="text"
              className="mr-4"
              placeholder="Nhập tên công việc"
            />

            {action === "add" ? (
              <Button htmlType="submit" type="primary">
                Add
              </Button>
            ) : (
              <Button htmlType="submit" type="primary">
                Save
              </Button>
            )}
          </form>
        </div>
        {error ? <h5 className="text-red-600">{error}</h5> : <></>}
      </div>
      <Table className="mt-4" dataSource={jobs} columns={columns} />
      <h3>
        Số lượng công việc hoàn thành : {success}/{totalJob}
      </h3>
      <br />
      <hr />
    </div>
  );
}
