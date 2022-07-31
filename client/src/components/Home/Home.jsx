import React, { useEffect, useState } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { getPosts } from '../../actions/posts'

const Home = () => {


    const dispatch = useDispatch();

    useEffect(() => {
        // console.log("here");
        dispatch(getPosts());
    }, [])

    const [currentId, setCurrentId] = useState(null);
    return (
        <div><Grow in>
            <Container>
                <Grid justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow></div>
    )
}

export default Home