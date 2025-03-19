"use client";

import { useState } from "react";
import { encrypt, decrypt } from "@/utils/encrypt";

export default function EncryptDecrypt() {
  const [mode, setMode] = useState("encrypt"); // Toggle between "encrypt" & "decrypt"
  const [jsonInput, setJsonInput] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedJson, setDecryptedJson] = useState("");

  const handleEncrypt = () => {
    try {
      const parsedJson = JSON.parse(jsonInput);
      const encrypted = encrypt(parsedJson);
      setEncryptedText(encrypted);
    } catch (error) {
      alert("Invalid JSON format");
    }
  };

  const handleDecrypt = async () => {
    try {
      const decrypted = await decrypt(encryptedText);
      setDecryptedJson(JSON.stringify(decrypted, null, 2));
    } catch (error) {
      alert("Decryption failed");
    }
  };

  const handleClear = (type) => {
    setMode(type);
    setJsonInput("");
    setEncryptedText("");
    setDecryptedJson("");
  };

  return (
    <div className="max-w-xl w-[800px] mt-10 mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-xl font-semibold mb-4">Encryption Decryption</h1>

      {/* Toggle Buttons for Encryption & Decryption */}
      <div className="flex space-x-4 mb-4">
        <button
          className={`w-1/2 py-2 rounded ${
            mode === "encrypt" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setMode("encrypt")}
        >
          Encrypt
        </button>
        <button
          className={`w-1/2 py-2 rounded ${
            mode === "decrypt" ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setMode("decrypt")}
        >
          Decrypt
        </button>
      </div>

      {/* Encryption Mode */}
      {mode === "encrypt" && (
        <>
          <label className="block font-medium">JSON Input:</label>
          <textarea
            className="w-full p-2 border rounded mt-2"
            rows="4"
            placeholder='{"name": "John", "age": 30}'
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
          ></textarea>

          <button
            onClick={handleEncrypt}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-3 w-full"
          >
            Encrypt
          </button>

          {encryptedText && (
            <>
              <div className="mt-4">
                <label className="block font-medium">Encrypted Text:</label>
                <textarea
                  className="w-full p-2 border rounded mt-2"
                  rows="3"
                  value={encryptedText}
                  readOnly
                ></textarea>
              </div>
              <button
                onClick={() => handleClear("encrypt")}
                className="bg-red-500 text-white px-4 py-2 rounded mt-3 w-[200px]"
              >
                Clear
              </button>
            </>
          )}
        </>
      )}

      {/* Decryption Mode */}
      {mode === "decrypt" && (
        <>
          <label className="block font-medium">Encrypted Text:</label>
          <textarea
            className="w-full p-2 border rounded mt-2"
            rows="3"
            placeholder="Paste encrypted text here..."
            value={encryptedText}
            onChange={(e) => setEncryptedText(e.target.value)}
          ></textarea>

          <button
            onClick={handleDecrypt}
            className="bg-green-500 text-white px-4 py-2 rounded mt-3 w-full"
          >
            Decrypt
          </button>

          {decryptedJson && (
            <>
              <div className="my-4">
                <label className="block font-medium">Decrypted JSON:</label>
                <pre className="w-full p-2 border rounded bg-gray-100 mt-2 text-sm">
                  {decryptedJson}
                </pre>
              </div>

              <button
                onClick={() => handleClear("decrypt")}
                className="bg-red-500 text-white px-4 py-2 rounded mt-3 w-[200px]"
              >
                Clear
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}
