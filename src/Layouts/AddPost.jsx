import React, { useState } from "react";
import TopNav from "../Components/TopNav";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Layout Components/Footer";

const AddPost = () => {
    const [post, setPost] = useState({
        title: "",
        content: "",
        category: "",
        image: null,
    });

    const categories = [
        { id: "01", name: "ব্রেকিং নিউজ" },
        { id: "02", name: "নিয়মিত সংবাদ" },
        { id: "03", name: "আন্তর্জাতিক সংবাদ" },
        { id: "04", name: "খেলাধুলা" },
        { id: "05", name: "বিনোদন" },
        { id: "06", name: "সংস্কৃতি" },
        { id: "07", name: "কলা" },
        { id: "08", name: "সব খবর" },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setPost((prev) => ({ ...prev, image: file }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Post Data:", post);
        // Add your backend submission logic here
    };

    return (
        <div className="bg-rose-100">
            <header>
                <TopNav />
                <Navbar />
            </header>
            <div className="max-w-4xl mx-auto p-6  bg-rose-50 rounded-lg my-10">
                <h1 className="text-3xl font-bold mb-6 text-rose-600 text-center">নতুন পোস্ট লিখুন</h1>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-white p-6 rounded-lg  border border-rose-300"
                >
                    <div>
                        <label
                            className="block text-sm font-medium text-rose-700 mb-1"
                            htmlFor="title"
                        >
                            শিরোনাম
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={post.title}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border rounded-md border-rose-300 focus:ring-2 focus:ring-rose-400 outline-none"
                        />
                    </div>

                    <div>
                        <label
                            className="block text-sm font-medium text-rose-700 mb-1"
                            htmlFor="content"
                        >
                            বিবরণ
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            value={post.content}
                            onChange={handleChange}
                            required
                            rows="5"
                            className="w-full p-3 border rounded-md border-rose-300 focus:ring-2 focus:ring-rose-400 outline-none"
                        ></textarea>
                    </div>

                    <div>
                        <label
                            className="block text-sm font-medium text-rose-700 mb-1"
                            htmlFor="category"
                        >
                            ক্যাটেগরি
                        </label>
                        <select
                            id="category"
                            name="category"
                            value={post.category}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border rounded-md border-rose-300 focus:ring-2 focus:ring-rose-400 outline-none"
                        >
                            <option value="">একটি ক্যাটেগরি নির্বাচন করুন</option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.name}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label
                            className="block text-sm font-medium text-rose-700 mb-1"
                            htmlFor="image"
                        >
                            ছবি আপলোড করুন
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full p-3 border rounded-md border-rose-300 focus:ring-2 focus:ring-rose-400 outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-rose-500 text-white px-4 py-3 rounded-md text-lg font-semibold hover:bg-rose-600 transition-all"
                    >
                        পোষ্ট করুন
                    </button>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddPost;
