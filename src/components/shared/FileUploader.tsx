import {useState} from "react";
import s from './file_uploader.module.css'

export const FileUploader = ({onFileSelectSuccess, onFileSelectError}: any) => {
    const [fileURL, setFileURL] = useState("");

    const handleFileInput = (e: any ) => {
        const file = e.target.files[0];
        if (file.size > 1024 * 1024) {
            onFileSelectError({ error: "File size cannot exceed more than 1MB" });
        } else {
            setFileURL(URL.createObjectURL(file));
            onFileSelectSuccess(file);
        }
    };

    return (
        <div className="file-uploader">
            <label className={`${s.customFileUpload}`}>
                <input className={s.inputTypeFile} type="file" onChange={handleFileInput} />
                Add Avatar
            </label>
            <img src={fileURL} className={s.userPhoto}/>
        </div>
    );
}