import React from 'react';

import styles from './Post.module.scss';

class Post extends React.Component<IPost> {
    render() {
        return <div className={styles.item}>
            <img src="https://i.ytimg.com/vi/pY_9y7QKoVg/maxresdefault.jpg" alt=""/>
            {this.props.message}
            <div>
                <span>like</span>
            </div>
        </div>;
    }
}

export interface IPost {
    message: string;
    img?: string;
}

export default Post;
