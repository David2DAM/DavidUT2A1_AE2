import { Button, Container, Typography } from "@mui/material"


function Login() {

  return (
    <>
        <Container>
            <Typography variant="h1" color="primary">David</Typography>
            <br/>
            <Typography variant="h2" color="secondary">Rodriguez</Typography>
            <br/>
            <Typography variant="h3" color="warning">Castellano</Typography>                      
            
            <Button variant="text" color="error">Error enorme</Button>
            <Button variant="contained" color="secondary" disabled>deshabilitado</Button>
            <Button variant="outlined" color="primary">normal</Button>

        </Container>
    </>
  )
}

export default Login
