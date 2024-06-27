import { Grid, Container } from "@mui/material";
import { styled } from "@mui/system";
import Book from "../../components/book-table/Book";
import rectangle from "../../assets/table/reactangle.png"; // Corrected import

export default function Table() {
  const StyledDiv = styled('div')({
    backgroundImage: `url(${rectangle})`, // Corrected backgroundImage usage
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '650px',
    width: "100%",
    opacity: 0.9,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'end',
    color: 'goldenrod',
  });

  return (
    <StyledDiv>
      <Container width="100%">
        <Grid container spacing={0} sx={{}}>
          <Grid item xs={12} sm={7} md={5} lg={5}>
            <Book />
          </Grid>
          <Grid item xs={12} sm={5} md={5} lg={5}>
            {/* Other content for the second column */}
            {/* <Book /> */}

          </Grid>
        </Grid>
      </Container>
    </StyledDiv>
  );
}
