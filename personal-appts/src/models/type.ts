export interface LoginCredentials {
  email: String;
  password: String;
}
export interface NoteDetails {
  title: String;
  text: String;
}

export interface Errors {
  titleerror: string;
  texterror: string;
}
export interface EditData {
  id: null | number;
  title: "";
  text: "";
}
