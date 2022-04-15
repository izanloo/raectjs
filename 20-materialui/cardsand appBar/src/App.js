
import './App.css';
import AppBar from './AppBar';
import RecipeReviewCard from './Card';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
function App() {
  return (
    <>
    <AppBar/>
    <Container >
    <Box container sx={{ flexGrow: 1, m:2}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
             <RecipeReviewCard/>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
    
   
    </>
   

  );
}

export default App;
