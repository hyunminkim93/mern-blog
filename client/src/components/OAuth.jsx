import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { app } from "../firebase";


export default function OAuth() {
    const auth = getAuth(app);

    const handleGoogleClick = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: "select_account" });

        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider);

            console.log(resultsFromGoogle)
            // const res = await fetch("/api/auth/google", {
            //     method: "POST",
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({

            //     }),
            // });
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="flex justify-center space-x-4">
            <button
                className="p-2 rounded-full bg-green-600 text-xl text-white"

            >
                <SiNaver className="w-6" />
            </button>
            <button className="p-2 rounded-full bg-yellow-300 text-2xl text-black"><RiKakaoTalkFill className="w-6" /></button>
            <button
                className="p-2 rounded-full bg-slate-200 text-2xl"
                onClick={handleGoogleClick}
            ><FcGoogle className="w-6" /></button>
            <button className="p-2 rounded-full bg-black text-white text-2xl"><FaApple className="w-6" /></button>
        </div>
    )
}