import React, { useState, useEffect } from 'react';
// import UploadImage from '../components/UploadImage';
import PetCard from '../components/PetCard';
import PetForm from '../components/PetForm';
import PetButton from '../components/PetButton';
import Footer from '../components/Footer/Footer';
// import AddRoundedIcon from '@mui/icons-material/AddRounded';
// import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import './style.css';
import PetPeek1 from '../images/peeking1.png';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import Divider from '@mui/material/Divider';
import { useQuery } from '@apollo/client';
import { QUERY_PETS } from '../utils/queries';


export default function Dashboard() {
  const [numCard, setNumCard] = useState(0);
  // have array of pets here and map it in the petCard
  const [petArray, setPetArray] = useState([]);
  const [petData, setPetData] = useState([])

  const { data } = useQuery(QUERY_PETS);
  const pets = data?.pets || [];

  useEffect(() => {
    setPetData(data?.pets)
  }, [data])

  return (
    <div>
      <div className='petPeeking'>
        <img
          src={PetPeek1}
          alt='peeking'
        />
      </div>
      <Container className='dashboardContainer'>
        <h1 className='dashboardHead'>Dashboard</h1>
        <Box sx={{
          flexGrow: 1,
          maxWidth: '95%',
          // justifyContent: 'center', 
          // alignItems: 'center',
          // paddingLeft: '1em',
          // paddingRight: '1em',
        }}>
          <Grid container spacing={1}>
            <Grid item xs={5}>
              <h1 className='userH1'>Human</h1>
              <Box className='dashboardDetailsBox'>
                <h3>Placeholder box for human</h3>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <p> </p>
            </Grid>
            <Grid item xs={5}>
              <h1 className='userH1'>Furry</h1>
              <Box className='dashboardDetailsBox'>
                <h3>Some other info</h3>
                <div className="imageContainer" id='addPetContainer'>
                  {/* map through card info
                  {/* Tutor Patrick Lake helped me with this map function */}

                  {/* <PetCard />  */}
                  {pets.map((item, i) => <PetCard petData={item} key={i} />)}
                  {[...Array(numCard)].map((_, i) => <PetForm petArray={petArray} setPetArray={setPetArray} key={i} />)}
                  {/* <PetButton setShowCard={setNumCard}/> */}
                  <PetButton
                    setShowCard={setNumCard}
                    variant='text'
                    className='changeBtn'
                  >
                  </PetButton>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* <button onClick={(image) => setImage(image)}>Save</button> */}
      </Container>
      <Footer />
    </div>
  )
}
