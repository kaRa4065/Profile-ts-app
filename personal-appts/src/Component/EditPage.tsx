import axios from "axios";
import * as React from "react";
import { EditData } from "../models/type";

interface IEditPageProps {
  editData: EditData;
  setEditData: React.Dispatch<React.SetStateAction<EditData>>;
  seteditPageshow: React.Dispatch<React.SetStateAction<boolean>>;
  editPageshow: boolean;
  fetchNotes: any;
  setFetchNotes: any;
}

const EditPage: React.FunctionComponent<IEditPageProps> = ({
  editData,
  setEditData,
  seteditPageshow,
  editPageshow,
  setFetchNotes,
  fetchNotes,
}) => {
  const handleInputChange = (e: any): void => {
    const { name, value } = e.target;
    setEditData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleCancelEdit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    const editData: any = { title: "", text: "" };
    setEditData(editData);
    seteditPageshow(!editPageshow);
  };
  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const updatedData = {
      title: editData.title,
      text: editData.text,
    };
    try {
      axios.patch(`http://localhost:3001/Notes/${editData.id}`, updatedData);
      seteditPageshow(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="Edit-page" onSubmit={(e) => e.preventDefault()}>
      <div className="Edit-title">
        <label htmlFor="title">Title</label>
        <input
          value={editData.title}
          onChange={handleInputChange}
          type="text"
          id="title"
          name="title"
          maxLength={20}
        ></input>
      </div>
      <div className="text-title">
        <label htmlFor="text">Whatsup!!! Write Down Bro</label>
        <textarea
          value={editData.text}
          onChange={handleInputChange}
          name="text"
          id="text"
        ></textarea>
      </div>

      <div className="butt-divs">
        <button className="update-button" onClick={(e) => handleUpdate(e)}>
          Update
        </button>
        <button className="update-button" onClick={(e) => handleCancelEdit(e)}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditPage;
