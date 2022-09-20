import { Box, Typography } from '@mui/material';
import React from 'react';

const About = () => {
    const instrument = [
        "React", "JavaScript", "TypeScript", "Material UI", "HTML", "CSS"
    ]
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <Typography>Данное приложение "Переводчик" сделанно в рамках курсовой работы по предмету "Объектно-ориентированное программирование"</Typography>
            <Box>
                <Typography>Использованные инструменты:</Typography>
                <Box>
                {
                        instrument.map((v) => 
                            <li>{v}</li>
                        )
                    }
                </Box>
            </Box>
        </Box>
    );
};

export default About;