import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getDiscussionList } from '../../redux/discussionActions'

class PostList extends PureComponent{

    render(){
        
        const { getDiscussionList } = this.props;
        getDiscussionList();

        return(
            <div>
                <ul className="postList">

                </ul>
            </div>
    )
}
}

const mapStateToProps = ({ authorization }) => {
    const { meta } = authorization
    const { error, loggingIn } = meta
    return { error, loggingIn }
}

export default connect(mapStateToProps, { getDiscussionList })(PostList);