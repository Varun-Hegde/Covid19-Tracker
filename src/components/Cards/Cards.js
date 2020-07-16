import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import cx from 'classnames';
import CountUp from 'react-countup'; // used to start counting from 0 to required value in the cards display

import styles from './Cards.module.css';

const Cards = (props) => {
	if (!props.data.confirmed) {
		return 'Loading';
	}
	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify="center">
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Infected
						</Typography>
						<Typography variant="h5">
							<CountUp start={0} end={props.data.confirmed.value} duration={2.5} separator="," />
						</Typography>
						<Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
						<Typography variant="body2">Number of active cases of covid 19</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Recovered
						</Typography>
						<Typography variant="h5">
							<CountUp start={0} end={props.data.recovered.value} duration={2.5} separator="," />
						</Typography>
						<Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
						<Typography variant="body2">Number of recoveries of covid 19</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.death)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Deaths
						</Typography>
						<Typography variant="h5">
							<CountUp start={0} end={props.data.deaths.value} duration={2.5} separator="," />
						</Typography>
						<Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
						<Typography variant="body2">Number of deaths of covid 19</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};

export default Cards;
