import { StateProvider } from "@src/app/context/StateContext";
import Home from "@src/app/pages/Home";
import { Toaster } from "react-hot-toast";

export default function Page() {
  return (
    <StateProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#0ea5e9",
            color: "#fff",
          },

          success: {
            duration: 3000,
          },
        }}
      />
      <Home />
    </StateProvider>
  );
}
