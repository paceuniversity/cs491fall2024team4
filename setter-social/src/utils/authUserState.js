import { useEffect, useState } from "react";

import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export function UserState() {
    const [ user, setUser ] = useState(null);
    console.log("Current User: ", user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("Unsubscribe clicked. Current User: ", user);
        });

        return () => unsubscribe();
    }, []);
}