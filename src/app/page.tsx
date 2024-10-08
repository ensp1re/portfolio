import { StateProvider } from "./context/StateContext";
import Home from "./pages/Home";

export default function Page() {
  return (
    <StateProvider>
      <Home />
    </StateProvider>
  );
}
