import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterForm } from "../types/user";
import authServices from "../services/authServices";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<RegisterForm> = (formData) => {
    authServices
      .register(formData)
      .then((response) => {
        if (response.status === 201) {
          navigate("/login");
          toast.success("User was registered !", { duration: 3000 });
        }
      })
      .catch((err) => {
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
        placeholder="Firstname"
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

      <input
        className="border p-2 m-5"
        type="password"
        {...register("password", {
          minLength: 6,
          required: { value: true, message: "This is required" },
        })}
        placeholder="Please enter password"
      />
      {errors.password && <p>Password is not valide</p>}
      <input
        className="border p-2 m-5"
        type="password"
        {...register("confirmPassword", {
          minLength: 6,
          required: { value: true, message: "This is required" },
        })}
        placeholder="Please confirm password"
      />
      
      {errors.confirmPassword && <p>Password is not valide min 6 caracters</p>}

      <input type="submit" />
    </form>
  );
}
