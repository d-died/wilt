import React from "react";

const PostForm = () => {
    return(
        <form>
            <label> Post title:
                <input type='text' /> 
            </label>
            <label> What did you learn today?
                <input type='text' />
            </label>
        </form>
    )
}

export default PostForm