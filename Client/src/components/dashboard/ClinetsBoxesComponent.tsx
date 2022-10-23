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
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const theme = createTheme();

    return (
      <div className="widgete-tool-container">
        return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <main>
            <Container  sx={{ py: 8 }}>
              <Grid container spacing={4} sx={{ padding: "0px" }}>
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card sx={{ wid: 'auto', minHeight: '150px' }}>
                      <CardHeader
                        avatar={
                          <Avatar sx={{}} aria-label="recipe">
                            JN
                          </Avatar>
                        }
                        title="Janasds Nowakasdasd"
                      />
                      <CardMedia
                        component="img"
                        height="194"
                        image="https://source.unsplash.com/random"
                        alt="random"
                      />
                    </Card>
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
