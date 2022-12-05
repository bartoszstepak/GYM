import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Avatar, CardHeader, IconButton } from "@mui/material";

class ClinetsBoxesComponent extends React.Component<any, any> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {};
  }

  render() {
    const cards = [
      {
        name: 'grafik',
        imgURL: 'grafik.png'
      }, 
      {
        name: 'cwiczenia',
        imgURL: 'cwiczenia.png'
      }, 
      {
        name: 'podopieczni',
        imgURL: 'podopieczni.png'
      }, 
      {
        name: 'szablony',
        imgURL: 'szablony.png'
      }, 
      {
        name: 'ustawienia',
        imgURL: 'ustawienia.png'
      }, 
      {
        name: 'notatnik',
        imgURL: 'notatnik.png'
      }, 
      

    ];

    const theme = createTheme();
    return (
      <div className="widgete-tool-container">
        return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <main>
            <Container maxWidth="xl"  sx={{ py: 8 }}>
              <Grid
                container
                spacing={4}
                sx={{ padding: "0px", display: "flex" }}
              >
                {cards.map((card) => (
                  <Grid item key={card.name} xs={6} sm={4} md={3}>
                    <div className="box" >
                    <Card   sx={{  backgroundColor: "white"}}>
                      <CardMedia
                        className="card-media-custom"
                        component="img"
                        image={require("../../static/"+card.imgURL)}
                        alt="random"
                      />
                    </Card>

                    </div>
                    
                  </Grid>
                ))}
              </Grid>
            </Container>
          </main>
        </ThemeProvider>
      </div>
    );
  }
}

export default ClinetsBoxesComponent;
