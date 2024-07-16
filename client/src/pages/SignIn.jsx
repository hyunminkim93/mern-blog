import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice"

export default function SignIn() {
    const [formData, setFormData] = useState();
    const { loading, error: errorMessage } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        // console.log(e.target.value);
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };

    // console.log(formData);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            dispatch(signInFailure("모든 영역을 채워주세요!"));
        }

        // 유효성 검사

        try {
            dispatch(signInStart());

            const res = await fetch("/api/auth/signIn", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if (data.success == false) {
                dispatch(signInFailure(data.message));
            }

            if (res.ok) {
                dispatch(signInSuccess(data))
                navigate("/");
            }

        } catch (error) {
            dispatch(signInFailure(error.message))
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">로그인</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            이메일
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700"
                            placeholder="이메일을 입력하세요"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            비밀번호
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 "
                            placeholder="비밀번호를 입력하세요"
                            onChange={handleChange}
                        />
                    </div>
                    {errorMessage && (
                        <div className="text-center p-2 mb-4 mt-5 text-red-500  bg-red-200">
                            {errorMessage}
                        </div>
                    )}
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full flex items-center justify-center"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? (
                            <span className="p-2">Loading...</span>
                        ) : (
                            "하기"
                        )}
                    </button>
                    <div className="flex items-center justify-center">

                        <div className="flex mt-10">
                            <span>계정이 없나요?</span>
                            <Link to="/signUp" className="text-blue-500">
                                회원가입하기
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
