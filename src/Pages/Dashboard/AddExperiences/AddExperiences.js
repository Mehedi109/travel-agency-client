import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddExperiences = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [rent, setRent] = useState();
  const [rating, setRating] = useState();
  const [description, setDescription] = useState();
  const [img, setImg] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!img) {
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("rent", rent);
    formData.append("rating", rating);
    formData.append("description", description);
    formData.append("image", img);
    console.log(formData);
    fetch("http://localhost:5000/addHouse", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    alert("data added");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{ padding: "5px", margin: "5px", width: "30%" }}
          {...register("name")}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />{" "}
        <br />
        <input
          style={{ padding: "5px", margin: "5px", width: "30%" }}
          {...register("date")}
          placeholder="Date"
          onChange={(e) => setDate(e.target.value)}
          required
        />{" "}
        <br />
        <input
          style={{ padding: "5px", margin: "5px", width: "30%" }}
          {...register("time")}
          placeholder="Time"
          onChange={(e) => setTime(e.target.value)}
          required
        />{" "}
        <br />
        <input
          style={{ padding: "5px", margin: "5px", width: "30%" }}
          {...register("rent", { required: true })}
          placeholder="Expense"
          onChange={(e) => setRent(e.target.value)}
          required
        />{" "}
        <br />
        <input
          style={{ padding: "5px", margin: "5px", width: "30%" }}
          {...register("rating", { required: true })}
          placeholder="Rating"
          onChange={(e) => setRating(e.target.value)}
          required
        />{" "}
        <br />
        <textarea
          rows="4"
          cols="6"
          style={{ padding: "5px", margin: "5px", width: "30%" }}
          {...register("description", { required: true })}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          required
        />{" "}
        <br />
        <input
          accept="image/*"
          multiple
          type="file"
          style={{ padding: "5px", margin: "5px", width: "30%" }}
          {...register("image", { required: true })}
          placeholder="Image"
          onChange={(e) => setImg(e.target.files[0])}
          required
        />{" "}
        <Button variant="primary" type="submit">
          Add
        </Button>
        <br />
        {errors.exampleRequired && <span>This field is required</span>}
      </form>
    </div>
  );
};

export default AddExperiences;
