"use client"

import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../state_management";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
