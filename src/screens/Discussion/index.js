import React, { PureComponent } from 'react'
import CreatePost from '../../features/Discussion/components/CreatePost';
import PostList from '../../features/Discussion/components/PostList';

import style from './Discussion.module.scss'

class Discussion extends PureComponent {
    render() {
        return(
            <div>
                <CreatePost />
                <PostList />
            </div>
        )
    }
}

export default Discussion;

