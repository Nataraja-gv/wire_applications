import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Google from "../../assets/google_logo.svg.png";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import ReviewCard from "../../components/review-card/ReviewCard"; // Correct import path


const StyledDiv = styled('div')({
    backgroundImage: `url('https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-black-meat-western-food-banner-background-image_194600.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '700px',
    width: "100%",
    opacity: 0.9,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'goldenrod',
});

function Review() {
    const rating = 4.8;

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        stars.push(<StarIcon key={`star-${i}`} fontSize="large" />);
    }

    // Add half star if necessary
    if (hasHalfStar) {
        stars.push(<StarHalfIcon key="half-star" fontSize="large" />);
    }

    return (
        <Box width="100%" margin="50px auto 0px">
            <StyledDiv>
                <Box component="img" src={Google} sx={{ width: "350px", height: "110px", marginBottom: '5px' }} />

                <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '30px', fontWeight: 'bold' }}>
                    <span style={{ marginRight: '5px', fontWeight: "bold" }}>{rating}</span>
                    {stars.map((star, index) => (
                        <span key={index}>{star}</span>
                    ))}
                </Box>
                <Box>

                    <ReviewCard />

                </Box>
            </StyledDiv>
        </Box>
    );
}

export default Review;
