import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const stylesField = {
    mr: "40px",
}
const Main = () => {
    const [russian, setRussian] = useState("");
    const [english, setEnglish] = useState("");
    const dictionaryList = JSON.parse(localStorage.getItem("translation") || "[]");

    const translation = () => {
        let dictionaryCheck = false;
        dictionaryList.forEach((v) => {
            if (v.eng === english) {
                setRussian(v.rus)
                dictionaryCheck = false;
            } else if (v.rus === russian) {
                setEnglish(v.eng)
                dictionaryCheck = false;
            } else {
                dictionaryCheck = true;
            }
        })
        if (dictionaryCheck) {
            toast.error("Такого слова нет в словаре")
            setEnglish("");
            setRussian("");
        }
    }
    const clearTranslation = () => {
        setRussian("");
        setEnglish("");
    }
    return (
        <Box sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
        }}>
            <ToastContainer />
            <Box sx={{
            justifyContent: "center",
            display: "flex",
        }}>
                <TextField value={russian} onChange={(e) => setRussian(e.target.value)} sx={{...stylesField}} label="Русский"/>
                <TextField value={english} onChange={(e) => setEnglish(e.target.value)} sx={{...stylesField}} label="Агнлийский"/>
            </Box>
            <Button onClick={translation} variant="contained" sx={{
                width: "200px",
                margin: "20px auto",
            }}>Перевести</Button>
             <Button onClick={clearTranslation} variant="contained" sx={{
                width: "200px",
                margin: "10px auto",
            }}>Очистить</Button>
        </Box>
    );
};

export default Main;