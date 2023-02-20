import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { Product } from "../types/product";
import productService from "../services/productService";
import { useState } from "react";

export default function SearchProduct() {
  const [product, setProduct] = useState<any>();
  const [code, setCode] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();

  const onSubmit: SubmitHandler<Product> = async (dataForm) => {
    productService
      .getOne(dataForm.code)
      .then((response) => {
        if (response.status === 200) {
          setProduct(response.data.product);
          setCode(response.data.code);
          console.log(
            "🚀 ~ file: SearchProduct.tsx:26 ~ .then ~ response.data:",
            response.data
          );
        }
      })
      .catch((err) => {
        toast.error("Product not found !", { duration: 3000 });
      });
  };

  return (
    <>
      <h1 className="text-center">Search Product with barCode</h1>

      <form
        className="flex flex-col border p-5 m-5 items-center w-[50%] mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="email">Product</label>
        <input
          className="border p-2 m-5"
          id="barCode"
          {...register("code", {
            required: "required",
          })}
          type="text"
        />

        <button type="submit">Search</button>
      </form>

      {product && (
        <div className="flex flex-col border p-5 m-5 items-center w-[50%] mx-auto">
          <h1>{product.generic_name}</h1>
          <img src={product.image_front_url} />
        </div>
      )}
    </>
  );
}
