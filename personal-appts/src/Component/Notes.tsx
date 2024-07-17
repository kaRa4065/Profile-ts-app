import * as React from "react";
import { Errors } from "../models/type";
import axios from "axios";
import apiCall from "../models/service";
import { BsThreeDotsVertical } from "react-icons/bs";
import EditPage from "./EditPage";
import { EditData } from "../models/type";

interface INotesProps {}

const Notes: React.FunctionComponent<INotesProps> = (props) => {
  const [noteDet, setNoteDet] = React.useState<any>({
    title: "",
    text: "",
  });
  const [error, setError] = React.useState<Errors>({
    titleerror: "",
    texterror: "",
  });
  const [editData, setEditData] = React.useState<EditData>({
    id: null,
    title: "",
    text: "",
  });
  const [fetchNotes, setFetchNotes] = React.useState<any>([]);
  const [selectedNote, setselectedNote] = React.useState<number | null>(null);
  const [editPageshow, seteditPageshow] = React.useState<boolean>(false);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    try {
      apiCall.get("http://localhost:3001/notes", (resp: any) => {
        if (resp) {
          setFetchNotes(resp);
          //created array for display dynamic option popup
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e: any): void => {
    const { name, value } = e.target;
    setNoteDet((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    const errors: Errors = { texterror: "", titleerror: "" };
    if (noteDet.text === "") {
      errors.texterror = "Please write something";
    }
    if (noteDet.title === "") {
      errors.titleerror = "Please add a valid title";
    }
    setError(errors);

    if (noteDet.text.trim() !== "" && noteDet.title.trim() !== "") {
      const postValue = { title: noteDet.title, text: noteDet.text };
      if (!postValue) return;
      try {
        axios.post("http://localhost:3001/Notes", postValue).then((resp) => {
          if (resp) {
            const emptyField: any = { title: "", text: "" };
            setNoteDet(emptyField);
            setFetchNotes((prevNotes: any) => [...prevNotes, resp.data]);
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handlePopUp = (index: number) => {
    console.log(index);
    setselectedNote(index === selectedNote ? null : index);
  };
  const handleDelete = (id: number) => {
    const deletedItem = fetchNotes.filter((notes: any) => notes.id !== id);
    try {
      axios.delete(`http://localhost:3001/Notes/${id}`);
      setselectedNote(null);
      if (fetchNotes.length === 1) {
      }

      setFetchNotes(deletedItem);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditPage = (id: number) => {
    const selectedNote = fetchNotes.filter((note: any) => note.id === id);
    const editData: any = {
      id: id,
      title: selectedNote[0].title,
      text: selectedNote[0].text,
    };
    setEditData(editData);
    seteditPageshow(!editPageshow);
    setselectedNote(null);
  };

  return (
    <div className="Addnotes">
      <form className="Main-Form" onSubmit={(e) => e.preventDefault()}>
        <div className="title-box">
          <label htmlFor="title">Title</label>
          <input
            onChange={handleInputChange}
            value={noteDet.title}
            name="title"
            className="title-input"
            type="text"
            id="title"
            maxLength={20}
          ></input>
          {error.titleerror && <div className="error">{error.titleerror}</div>}
        </div>
        <div className="input-box">
          <label htmlFor="text">Whatsup!!! Write Down Bro</label>
          <textarea
            value={noteDet.text}
            name="text"
            onChange={handleInputChange}
            className="textarea-input"
            style={{}}
            id="text"
          ></textarea>
          {error.texterror && <div className="error">{error.texterror}</div>}
        </div>
        <div className="butt-div">
          <button onClick={handleAdd} className="Add-button">
            Add this
          </button>
        </div>
      </form>
      <table className="notes-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Note</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody className="notes-tbody">
          {fetchNotes.map((notes: any, index: number) => (
            <tr key={notes.id}>
              <td>{notes.title}</td>
              <td>{notes.text}</td>
              <td className="position">
                <button
                  onClick={() => handlePopUp(index)}
                  className="three-dot"
                >
                  <BsThreeDotsVertical />
                </button>
                {selectedNote === index && (
                  <div className="popup-menu">
                    <p onClick={() => handleEditPage(notes.id)}>Edit</p>
                    <p onClick={() => handleDelete(notes.id)}>Delete</p>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>{" "}
      {editPageshow && (
        <EditPage
          editData={editData}
          setEditData={setEditData}
          seteditPageshow={seteditPageshow}
          editPageshow={editPageshow}
          fetchNotes={fetchNotes}
          setFetchNotes={setFetchNotes}
        />
      )}
    </div>
  );
};

export default Notes;
