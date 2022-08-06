import { COMMENT, FETCH_POST, START_LOADING, END_LOADING, FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH_BY_SEARCH } from '../constants/actionTypes';
import * as api from '../api';


export const getPost = (id) => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchPost(id);

        dispatch({
            type: FETCH_POST,
            payload: data
        });

        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }

}

export const getPosts = (page) => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchPosts(page);

        dispatch({
            type: FETCH_ALL,
            payload: data
        });

        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }

}

export const getPostsBySearch = (searchQuery) => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchPostsBySearch(searchQuery);

        console.log(data);

        dispatch({
            type: FETCH_BY_SEARCH,
            payload: data
        });
        dispatch({ type: END_LOADING });

    } catch (error) {
        console.log(error);

    }


}


export const createPost = (post, navigate) => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING });
        // data has that same post if saving to database was successfull
        const { data } = await api.createPost(post);
        navigate(`/posts/${data._id}`);
        dispatch({
            type: CREATE,
            payload: data
        });
        dispatch({ type: END_LOADING });

    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post, navigate) => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.updatePost(id, post);
        navigate(`/posts/${data._id}`);
        dispatch({ type: UPDATE, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {

    try {
        await api.deletePost(id);

        dispatch({ type: DELETE, payload: id })
    }
    catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {

    try {
        const { data } = await api.likePost(id);

        dispatch({ type: LIKE, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const commentPost = (finalComment, _id) => async (dispatch) => {
    try {
        const { data } = await api.commentPost(_id, finalComment);

        dispatch({ type: DELETE, payload: data })
    }
    catch (error) {
        console.log(error);
    }
}