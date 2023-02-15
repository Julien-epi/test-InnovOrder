import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterForm } from "../types/user";
import toast from "react-hot-toast";
import authServices from "../services/authServices";

export default function Register() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
    },
  });

  const onSubmit: SubmitHandler<RegisterForm> = (formData) => {
    authServices
      .register(formData)
      .then((response) => {
        if (response.status === 201) {
          toast.success("User was registered !", { duration: 3000 });
        }
      })
      .catch((err) => {
        console.log("🚀 ~ file: Register.tsx:31 ~ Register ~ err", err)
        toast.error("Email already exists !", { duration: 3000 });
      });
  };

  return (
    <form
      className="flex flex-col border p-5 m-5 items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="border p-2 m-5"
        {...register("firstname", {
          minLength: 2,
          required: { value: true, message: "This is required" },
        })}
        placeholder="First name"
      />
      {errors.firstname && <p>Firstname is not valide</p>}

      <input
        className="border p-2 m-5"
        {...register("lastname", {
          required: { value: true, message: "This is required" },
        })}
        placeholder="Lastname"
      />
      {errors.lastname && <p>Lastname is not valide</p>}

      <input
        className="border p-2 m-5"
        {...register("email", {
          required: { value: true, message: "This is required" },
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format",
          },
        })}
        placeholder="Email"
      />
      {errors.email && <p>Email is not valide</p>}

      <input type="submit" />
    </form>
  );
}
