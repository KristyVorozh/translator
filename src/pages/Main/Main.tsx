import { Autocomplete, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DictionaryListType } from "../../types/types";

const Main = () => {
    const baseUrl = window.location.origin;
    const [russian, setRussian] = useState("");
    const [english, setEnglish] = useState("");
    const [dictionaryList, setDictionaryList] = useState<DictionaryListType[]>([])

    useEffect(() => {
        axios.get(`${baseUrl}/dictionary`).then((response) => {
            setDictionaryList(response.data)
        });
    }, [baseUrl]);

    const translation = () => {
        dictionaryList.forEach((v) => {
            if (v.eng.toLocaleUpperCase() === english.toLocaleUpperCase()) {
                setRussian(v.rus)
            } else if (v.rus.toLocaleUpperCase() === russian.toLocaleUpperCase()) {
                setEnglish(v.eng)
            }
            console.log(v.eng, english, v.rus, russian)
        })
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
                <Autocomplete 
                freeSolo
                sx={{width: "350px", mr: "20px"}}
                inputValue={russian}
                getOptionLabel={(option) => option}
                onInputChange={(event, newInputValue) => {
                    setRussian(newInputValue);
                  }}
                renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Русский"
                    />
                  )}
                options={dictionaryList.map((option) => option.rus)}
                />
                <Autocomplete 
                sx={{width: "350px"}}
                inputValue={english}
                getOptionLabel={(option) => option}
                freeSolo
                onInputChange={(event, newInputValue) => {
                    setEnglish(newInputValue);
                  }}
                renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Английский"
                    />
                  )}
                options={dictionaryList.map((option) => option.eng)}
                />
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