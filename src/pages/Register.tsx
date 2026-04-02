import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../stores/useAuthStore";

const Register = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    });

    const { setAuth } = useAuthStore();

    const mutation = useMutation({
        mutationFn: async (data: any) => {
            const res = await axios.post("http://localhost:3000/register", data);
            return res.data;
        },

        onSuccess: (data) => {
            setAuth(data.user, data.accessToken); 
            alert("Đăng ký thành công!");
        },

        onError: () => {
            alert("Đăng ký thất bại!");
        },
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        mutation.mutate(form);
    };

    return (
        <form onSubmit={handleSubmit} className="p-5 space-y-3">
            <input
                placeholder="Username"
                onChange={(e) =>
                    setForm({ ...form, username: e.target.value })
                }
            />
            <input
                placeholder="Email"
                onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                }
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                }
            />

            <button className="bg-blue-500 text-white px-3 py-1">
                Register
            </button>
        </form>
    );
};

export default Register;