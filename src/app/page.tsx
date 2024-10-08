import { StateProvider } from "@src/app/context/StateContext";
import Home from "@src/app/pages/Home";

export default function Page() {
  return (
    <StateProvider>
      <Home />
    </StateProvider>
  );
}
