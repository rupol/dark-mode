import { useEffect } from "react";

import useLocalStorage from "./useLocalStorage";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", "false");

  useEffect(() => {
    const body = document.getElementsByTagName("body");
    if (darkMode) {
      body.classlist.add("dark-mode");
    } else {
      body.classlist.remove("dark-mode");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
}
