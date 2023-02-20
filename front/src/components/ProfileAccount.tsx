import { useForm, SubmitHandler } from "react-hook-form";
import { FormAccount, User } from "../types/user";
import authServices from "../services/authServices";
import toast from "react-hot-toast";
import UserDetails from "./UserDetails";
import userServices from "../services/userServices";
import { useEffect, useState } from "react";
function Profile() {

  const [user, setUser] = useState<User>();
  const currentUser = authServices.getCurrentUser();

  const id = currentUser.id;

useEffect(() => {

  setUser(currentUser);
}, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormAccount>({
    defaultValues: {
      firstname: "",
      lastname: "",
    },
  });

  const onSubmit: SubmitHandler<FormAccount> = (modifyData) => {
    userServices
      .updateUser(id, modifyData)
      .then((response) => {
        if (response.status === 200) {
          toast.success("User was updated !", { duration: 3000 });
        }
      })
      .catch((err) => {
        toast.error("Error retry!", { duration: 3000 });
      });
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {/* Form Update user's infos */}
        <form
          className="flex flex-col border p-5 m-5 items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1>Update your account here</h1>
          <input
            className="border p-2 m-5"
            {...register("firstname", {
              minLength: 2,
              required: { value: true, message: "This is required" },
            })}
            placeholder={user?.firstname}
          />
          {errors.firstname && <p>Firstname is not valide</p>}

          <input
            className="border p-2 m-5"
            {...register("lastname", {
              required: { value: true, message: "This is required" },
            })}
            placeholder={currentUser.lastname}
          />
          {errors.lastname && <p>Lastname is not valide</p>}

          <input type="submit" />
        </form>

        {/* USER DETAILS */}
        <div className="mx-5 flex flex-col border p-5 items-center">
          <UserDetails />
        </div>
      </div>
    </div>
  );
}

export default Profile;
