import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const Chatbot = () => (
    <Card small className="mb-3">
        <CardBody>
            <iframe
                src="http://localhost:8501/" // put link for chatbot in here (src\components\add-new-post\Chatbot.js)
                width="950" 
                height="750"
            ></iframe>
        </CardBody>
    </Card>
);

export default Chatbot;
