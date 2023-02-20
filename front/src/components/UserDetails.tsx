import authServices from "../services/authServices";

export default function UserDetails() {
  const currentUser = authServices.getCurrentUser();

  return (
    <>
      <h1 className="font-bold underline">User infos</h1>
      <div className="flex">
        <h3 className="font-bold">Firstname:</h3>
        <p>{currentUser.firstname}</p>
      </div>
      <div className="flex">
        <h3 className="font-bold">Lastname:</h3>
        <p>{currentUser.lastname}</p>
      </div>
      <div className="flex">
        <h3 className="font-bold">Email:</h3>
        <p>{currentUser.email}</p>
      </div>
    </>
  );
}
