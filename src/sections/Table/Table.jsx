import { Grid, Container } from "@mui/material";
import { styled } from "@mui/system";
import Book from "../../components/book-table/Book";
import rectangle from "../../assets/table/reactangle.png"; // Corrected import path

export default function Table() {
  const StyledDiv = styled('div')({
    position: 'relative',
    backgroundImage: `url(${rectangle})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'auto',
    width: "100%",
    opacity: 0.9,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'end',
    color: 'goldenrod',
    overflow: 'hidden',
    
  });

  // Styled component for the blurred overlay
  const BlurOverlay = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    filter: 'blur(8px)', // Adjust blur strength as needed
    backgroundImage: `url(${rectangle})`, // Background image path (same as StyledDiv)
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  });

  return (
    <StyledDiv>
      <Container width="100%"  >
        <Grid container spacing={0} padding="60px 0px ">
          {/* Grid item for the left column */}
          <Grid item xs={12} sm={7} md={5} lg={5} position="relative">
            {/* Blur overlay */}
            <BlurOverlay />
            {/* Book component */}
            <Book />
          </Grid>
          {/* Grid item for the right column */}
          <Grid item xs={12} sm={5} md={5} lg={5}>

          </Grid>
        </Grid>
      </Container>
    </StyledDiv>
  );
}
