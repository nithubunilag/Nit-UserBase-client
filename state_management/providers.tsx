"use client";

import { PageLoader } from "@/components/custom-ui";
import { QueryProvider } from "@/libs/react-query"
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";

export const CustomProvider = (props: React.PropsWithChildren) => {
    return (
        <QueryProvider>
            <PersistGate persistor={persistor} loading={<PageLoader />}>
                <Provider store={store}>
                    <Toaster />
                    {props.children}
                </Provider>
            </PersistGate>
        </QueryProvider>
    );
};
