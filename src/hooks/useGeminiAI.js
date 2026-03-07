import { GoogleGenAI } from "@google/genai";
import { useSelector } from "react-redux";

const useGeminiAI = () => {
  const apiKey = useSelector((store) => store.gpt?.api);

  if (!apiKey) return null;

  return new GoogleGenAI({ apiKey });
};

export default useGeminiAI;