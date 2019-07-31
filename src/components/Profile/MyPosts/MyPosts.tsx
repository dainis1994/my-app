import React from 'react';
import Post, {IPost} from "./Post/Post";

class MyPosts extends React.Component {
    private posts: IPost[] = [
        {
            message: 'Hi, how are you?',
            img: 'https://i.ytimg.com/vi/pY_9y7QKoVg/maxresdefault.jpg'
        }
    ];

    render() {
        return <div>
            my posts

            <div className="new-post">
                <textarea name=""></textarea>
                <button>Add Post</button>
            </div>

            <div>
                New post
            </div>

            <div>
                <Post message='Hi, how are you?'/>
                <Post message="It's my first Post!"/>
                {/*<Post message="Hi, how are you?"/>*/}
            </div>
        </div>;
    }
}

export default MyPosts;
