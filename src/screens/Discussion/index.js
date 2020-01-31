import React, { PureComponent } from 'react'
import CreatePost from '../../features/Discussion/components/CreatePost'

class Discussion extends PureComponent {
    render() {
        return(
            <div>
                <CreatePost />
            </div>
        )
    }
}

export default Discussion;

