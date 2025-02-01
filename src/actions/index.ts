import { redirect } from "react-router-dom";
import customFetch from "../axios/custom";

interface FormRequest {
  request: {
    formData: () => Promise<FormData>;
  };
}

export const searchAction = async ({ request }: FormRequest) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  return redirect(`/search?query=${data?.searchInput || ""}`);
};

export const checkoutAction = async ({ request }: FormRequest) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post("/orders", data);
    console.log(`Order response status: ${response.status}`);
  } catch (error) {
    console.error("Error processing order:", error);
  }

  return redirect('/');
};
