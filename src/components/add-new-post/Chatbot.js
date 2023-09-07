import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const Chatbot = () => (
    <Card small className="mb-3">
        <CardBody>
            <iframe
                src="https://30days.streamlit.app/?embed=true" // put link for chatbot in here (src\components\add-new-post\Chatbot.js)
                width="750" 
                height="750"
            ></iframe>
        </CardBody>
    </Card>
);

export default Chatbot;
