import NewUser from "@pages/auth-page/NewUser";
import ReturnedUser from "@pages/auth-page/ReturnedUser";
import { useState } from "react";

const Auth = () => {
    const [isLoginInterface, setIsLoginInterface] = useState(true);

    const handleInterface = () => {
        setIsLoginInterface((prevState) => !prevState);
    };

    return (
        <div className='h-[60dvh] w-[100%] flex items-center justify-center'>
            {isLoginInterface ? (
                <ReturnedUser handleInterface={handleInterface} />
            ) : (
                <NewUser handleInterface={handleInterface} />
            )}
        </div>
    );
};

export default Auth;
