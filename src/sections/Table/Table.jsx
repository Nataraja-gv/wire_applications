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
      <Container  >
        <Grid container spacing={0} sx={{}}>
          <Grid item xs={12} lg={5}>
            <Book />
          </Grid>
          <Grid item xs={12} lg={7}>
            {/* Other content for the second column */}
          </Grid>
        </Grid>
      </Container>
    </StyledDiv>
  );
}
