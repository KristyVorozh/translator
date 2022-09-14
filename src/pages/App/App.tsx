import React from 'react';
import Link from '@mui/material/Link';
import { Box, makeStyles } from '@mui/material';

const useStyles = {
  link: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    fontSize: "20px",
    mr: "20px",
    padding: '10px 30px',
    textDecoration: "none"
  },
};
function App() {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      my: "30px"
    }}> 
      <Link
      href="/"
      sx={{...useStyles.link}}
    >      Переводчик
    </Link>
    <Link
      href="/translator"
      sx={{...useStyles.link}}
    >      Словарь
    </Link>
    <Link
      href="/about"
      sx={{...useStyles.link}}
    >      О приложении
    </Link>
    <Link
      href="/developer"
      sx={{...useStyles.link}}
    >      О разработчике
    </Link>
    </Box>
  );
}

export default App;
