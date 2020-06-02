import React from 'react';
import styles from './cards.modules.scss';
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import CountUp from 'react-countup';

const Cards = ({data: { confirmed, recovered, deaths, lastUpdate }}) => {

   if(!confirmed) {
    return 'Loading...';
   } 
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid xs={12}  md={3} item component={Card} className="card infected">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>INFECTED</Typography>
                        <Typography variant="h5">
                            <CountUp
                            start={0}
                            end={confirmed.value} 
                            duration={2.5}
                            separtor=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2"> Number of acitve cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid xs={12}  md={3} item component={Card} className="card recovered">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>RECOVERED</Typography>
                        <Typography variant="h5">
                            <CountUp
                            start={0}
                            end={recovered.value} 
                            duration={2.5}
                            separtor=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2"> Number of recoverded from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid xs={12} md={3} item component={Card} className="card deaths">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>DEATHS</Typography>
                        <Typography variant="h5">
                            <CountUp
                            start={0}
                            end={deaths.value} 
                            duration={2.5}
                            separtor=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2"> Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
