import Box from '@mui/material/Box';
import { useContext } from 'react';
import { EventContext } from '../../context/tickets-context/context';
import MenuCard from '../../components/Menu/MenuCard';
import { Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Menu = () => {
    const { MenuData } = useContext(EventContext);
    const theme = useTheme();

    return (
        <Box width="90%" margin="50px auto 0">
            <Typography variant="h2" sx={{...theme.typography.title, marginBottom:"20px"}}>
                Menu
            </Typography>

            <Grid
                container
                spacing={3}
                justifyContent="center"
                >
                {MenuData.map((menu, index) => (
                    <Grid item xs={6} sm={6} md={3} key={index}>
                        <MenuCard
                            Image={menu.Image}
                            MenuName={menu.MenuName}
                            Pages={menu.Pages}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Menu;
