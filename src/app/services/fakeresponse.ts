import { Employee } from "../models/Employee";
import { Response } from '../models/Response';

export const FAKE_RESPONSE: Response<Employee> = {
  data: {
    id: 1,
    firstName: "Jho0n",
    lastName: "Walker",
    shift: "Morning",
    isActive: true,
    createdDate: "11-11-2024",
    changedDate: "11-11-2024"
  },
  message: "",
  success: true
};

export const FAKE_RESPONSE_ARRAY: Response<Employee[]> = {
  data: [{
    id: 1,
    firstName: "Jho0n",
    lastName: "Walker",
    shift: "Morning",
    isActive: true,
    createdDate: "11-11-2024",
    changedDate: "11-11-2024",
  },{
    id: 2,
    firstName: "Jesica",
    lastName: "Smith",
    shift: "Afternoon",
    isActive: true,
    createdDate: "10-10-2024",
    changedDate: "1-1-2024",
  },{
    id: 3,
    firstName: "Mah",
    lastName: "Gand",
    shift: "Nigth",
    isActive: true,
    createdDate: "3-3-2024",
    changedDate: "3-3-2024",
  }],
  message: "",
  success: true
};
