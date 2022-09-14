import { Box, Button, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import {dictionary} from "../../translation/dictionary"
import axios from "axios";

const Translator = () => {
    const dictionaryList = JSON.parse(localStorage.getItem("translation") || "[]");
    const [russian, setRussian] = useState("");
    const [english, setEnglish] = useState("");
    // useEffect(() => {
    //     localStorage.setItem("translation", JSON.stringify(dictionary));

        // let checkDictionaryList = false;
        // dictionaryList.forEach((v) => {
        //     dictionary.forEach((val) => {
        //         if (v.eng === val.eng && v.rus === val.rus) {
        //             checkDictionaryList = true;
        //         }
        //     })
        // });
        // if (checkDictionaryList) {
        // }
    // }, [])
    const addDictionary = () => {
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
        const lo = {
            rus: russian,
            eng: english
        }
        dictionaryList.push(lo)
        axios
        .post("http://localhost:3004/dictionary", {
            rus: russian,
            if: Math.random(),
            eng: english
        })
        .then((response) => {
            console.log(response.data)
        });
        // axios.post("http://localhost:3004/dictionary").then((response) => {
        //     lo
        // });
        // localStorage.setItem("translation", JSON.stringify(dictionaryList))
        toast.success("Слово успешно добавлено в словарь")
        setEnglish("");
        setRussian("");
        }
    }
    useEffect(() => {
        axios.get("https://translator-irlwfoe8p-kristyvorozh.vercel.app/api/dictionary").then((response) => {
            console.log(response.data);
        });
    }, [])
    
    return (
        <Box >
            <ToastContainer />
            {/* {
                dictionaryList.map((v) => 
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                        <Typography>{`${v.rus} - ${v.eng}`}</Typography>
                    </Box>
                )
            } */}
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