import { useState } from "react";

import styles from './fileUpload.module.css';

const FileUpload = () => {
    const [ file, setFile] = useState('');
    const [uploading, setUploading] = useState(false);

    const changeHandler = ( event ) => {
        setFile(event.target.files[0]);
    }

    const handleSubmission = (event) => {
        event.preventDefault();
        setUploading(true);
        //axios stuff
        setUploading(false);
    }

    return (
        <form className={styles.card}>
            <label for='upload'>Upload video :</label>
            <input type="file" name="upload" id='upload' className={styles.btn} onChange={changeHandler}/>
            <button onClick={handleSubmission} className={styles.btn}>Submit</button>
        </form>
    )
}

export default FileUpload;