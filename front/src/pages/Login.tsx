import { useForm, SubmitHandler } from "react-hook-form";
import authServices from "../services/authServices";
import toast from "react-hot-toast";
import { LoginForm } from "../types/user";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = async (dataForm) => {
    
    authServices
      .login(dataForm)
      .then((response) => {
        if (response.status === 201) {
          navigate("/");
        }
      })
      .catch((err) => {
        toast.error("Email or Password not found !", { duration: 3000 });
      });
    reset();
  };

  return (
    <>
      <h1 className="text-center">LOGIN</h1>

      <form
        className="flex flex-col border p-5 m-5 items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="email">email</label>
        <input
          className="border p-2 m-5"
          id="email"
          {...register("email", {
            required: "required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
          type="email"
        />
        {errors.email && <span role="alert">{errors.email.message}</span>}
        <label htmlFor="password">password</label>
        <input
          className="border p-2 m-5"
          id="password"
          {...register("password", {
            required: "required",
            minLength: {
              value: 5,
              message: "min length is 5",
            },
          })}
          type="password"
        />
        {errors.password && <span role="alert">{errors.password.message}</span>}
        <button type="submit">Connexion</button>
      </form>
    </>
  );
}
