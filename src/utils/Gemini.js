import {GoogleGenAI} from '@google/genai';
import { GEMINI_API } from './constant';


const GEMINI_API_KEY = GEMINI_API ;

const ai = new GoogleGenAI({apiKey:GEMINI_API_KEY});


export default ai ;


// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { GEMINI_API } from "./constant";

// export const genAI = new GoogleGenerativeAI(GEMINI_API);