import { Box, Button, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";
import { DictionaryListType } from "../../types/types";

const Translator = () => {
    const baseUrl = window.location.origin;
    const [russian, setRussian] = useState("");
    const [english, setEnglish] = useState("");
    const [dictionaryList, setDictionaryList] = useState<DictionaryListType[]>([])

    const addDictionary = () => {
        const newDictionaryList = [...dictionaryList]
        let checkDictionary = false;
        dictionaryList.forEach((v) => {
            if (v.eng === english) {
                checkDictionary = true
            } else
            if (v.rus === russian) {
                checkDictionary = true
            }
        });
        if (checkDictionary) {
            toast.error("Слово уже есть в словаре")
        } else
        if (russian === "") {
            toast.error("Добавьте русское слово")
        } else if (english === "") {
            toast.error("Добавьте английское слово")
        } else {
        axios.post(`${baseUrl}/dictionary`, {
            id: Math.random(),
            rus: russian,
            eng: english
        }).then(resp => {
            toast.success("Слово успешно добавлено в словарь")
            setEnglish("");
            setRussian("");
        });
        newDictionaryList.push({
            rus: russian,
            eng: english,
        });
        setDictionaryList(newDictionaryList)
        }
    }
    useEffect(() => {
        axios.get(`${baseUrl}/dictionary`).then((response) => {
            setDictionaryList(response.data)
            console.log(response.data);
        });
    }, [baseUrl])
    
    return (
        <Box >
            <ToastContainer />
            {
                dictionaryList.map((v) => 
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                        <Typography>{`${v.rus} - ${v.eng}`}</Typography>
                    </Box>
                )
            }
            <Box 
                sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        mt: "20px"
            }}>
                <Box>
                    <TextField sx={{mr: "20px"}} label="Русский" value={russian} onChange={(e) => setRussian(e.target.value)}/>
                    <TextField label="Английский" value={english} onChange={(e) => setEnglish(e.target.value)}/>
                </Box>
                <Button sx={{mt: "20px"}} onClick={addDictionary}>Добавить</Button>
            </Box>
        </Box>
    );
};

export default Translator;