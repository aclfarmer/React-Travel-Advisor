import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography} from '@material-ui/core';

import useStyles from './styles';

const WebcamList = ({webcamData, isLoading}) => {
    const classes = useStyles();
    const [elRefs, setElRefs] = useState([]);
    const webCamListArray = webcamData[0];

    useEffect (() => {
        const refs = Array(webcamData?.length).fill().map((_,i) => elRefs[i] || createRef());

        setElRefs(refs);
    }, [webcamData]);
    console.log(webCamListArray);
    return (
        <div className={classes.container} >
            
            <div style={{textAlign: 'center'}}><Typography variant="h4">Webcams Around You</Typography></div>
                <>
                {webCamListArray?  (
                                <Grid container spacing={1} style={{width: '100%'}}>
                                {webCamListArray?.map((webcam, i) => (
                                    <Grid style={{width: '25%'}} key={i} item xs={4}>
                                        <Typography  variant="h5">Webcam {i+1}</Typography>
                                        <hr></hr>
                                        <img src ={webcam.image.current.preview} alt='webcam image'/>
                                        <Typography  variant="subtitle2">{webcam.title}</Typography>
                                        <Typography  variant="subtitle2">ID: {webcam.id} </Typography>
                                        <Typography  variant="subtitle1">Status: {webcam.status}</Typography>
                                        <br></br>
                                        <Typography variant="subtitle1">Location: {webcam.location.city}, {webcam.location.region}</Typography>
                                        <br></br>
                                    </Grid>
                                ))}
                            </Grid>
                ) : (
            <Typography  variant="h5">There are no webcams here</Typography>

            )}
            </>
        </div>
        );
    }
export default WebcamList;