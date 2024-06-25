import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Stack from '@mui/material/Stack';
import { Box } from "@mui/material";
import { theme } from "../../theme";





const MainCarousel = ({ image1, image2, image3, image4 }) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <Stack>
            <Carousel
                responsive={responsive}
                customTransition="all 2s ease in"
                keyBoardControl={true}
                renderDotsOutside={true}
                containerClass="carousel-container"
                infinite={true}
                // customDot={<CustomDot />}
                showDots={false}
                autoPlay={true}
                dotListClass={"react-multi-carousel-dot-list custom-dot-list-style"}
                autoPlaySpeed={2000}
                itemClass="carousel-item-padding-40-px itemimage"
                removeArrowOnDeviceType={["desktop", "mobile", "tablet"]}
            >
                <Box component="img" src={image1} sx={{
                    ...theme.carouselImages.width,
                    height: {
                        xs: '450px',
                        sm: '450px',
                        md: '550px',
                        lg: '600px',
                    }

                }} />
                <Box component="img" src={image2} sx={{
                    ...theme.carouselImages.width,
                    height: {
                        xs: '450px',
                        sm: '450px',
                        md: '550px',
                        lg: '600px',
                    }

                }} />
                <Box component="img" src={image3} sx={{

                    ...theme.carouselImages.width,
                    height: {
                        xs: '450px',
                        sm: '450px',
                        md: '550px',
                        lg: '600px',
                    }

                }} />


                <Box component="img" src={image4} sx={{
                    ...theme.carouselImages.width,
                    height: {
                        xs: '450px',
                        sm: '450px',
                        md: '550px',
                        lg: '600px',
                    }


                }} />

            </Carousel>

        </Stack>
    );
}

export default MainCarousel;
