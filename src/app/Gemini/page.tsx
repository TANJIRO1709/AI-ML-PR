"use client";
import TypewriterEffect from "@/components/ui/Typewriter";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const GeminiAi = () => {
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<string>("");
    const [noOfResponses, setNoOfResponses] = useState(0);
    const [disable, setDisable] = useState(false);

    async function getResponse(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!prompt) {
            setResponse("");
            return;
        }
        setLoading(true);
        setResponse("");
        setDisable(true);

        try {
            const result = await axios.post(
                process.env.NEXT_PUBLIC_BASE_API_URL + "/api/MakeadreamAI",
                {
                    prompt: prompt,
                }
            );

            setResponse(result.data.response);
            setNoOfResponses(noOfResponses + 1);
        } catch (e: any) {
            console.error(e);
            setNoOfResponses(0);
            setDisable(false);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-blue-100">
            <motion.section 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="font-lato bg-white shadow-lg rounded-lg p-8 w-[90vw] max-w-2xl"
            >
                <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-blue-800">
                    Welcome to Gemini AI
                </h1>
                <p className="text-center text-gray-600 mb-6">
                    Ask your questions and get instant responses!
                </p>
                <form
                    onSubmit={getResponse}
                    className="flex flex-col gap-4 mb-6"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Input
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Start Asking..."
                            id="webwizAI"
                            name="prompt"
                            className="border-2 border-black rounded-md p-2 focus:outline-none focus:ring-4 focus:ring-blue-400 transition-all"
                        />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="self-center"
                    >
                        <Button
                            type="submit"
                            className="h-10 bg-blue-600 text-black rounded-md hover:bg-blue-700 hover:shadow-lg transition-all"
                            disabled={loading || disable}
                        >
                            {loading ? "Thinking..." : "Ask"}
                        </Button>
                    </motion.div>
                </form>

                <AnimatePresence>
                    {noOfResponses > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.5 }}
                            className="bg-black bg-opacity-60 rounded-xl py-4 px-6 shadow-md"
                        >
                            {response && (
                                <TypewriterEffect
                                    text={response}
                                    setDisable={setDisable}
                                />
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.section>
        </div>
    );
};

export default GeminiAi;