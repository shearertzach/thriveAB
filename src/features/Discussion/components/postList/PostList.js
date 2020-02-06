import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getALLDiscussionList } from '../../redux/discussionActions'
import Input from '../../../../shared/components/Input';
import Button from '../../../../shared/components/Button';
import './PostList.css'

class PostList extends PureComponent{

    constructor(props){
        super(props);
        this.state = { posts: null}
    }

    componentDidMount() {

        this.fetchPosts();

    }

    async fetchPosts() {
        
        const { getALLDiscussionList } = this.props;

        try {
            const data = await getALLDiscussionList();
            console.log(data);
        }
        catch(error) {
            console.log(error);
        }

    }
    
    mapPosts() {
        if (!this.state.posts) {
            console.log("No data")
        } else {
            this.state.posts.map((post) => (
                console.log(post)
            ))
        }
    }

    render(){
        
        const allPosts = this.state.posts;

        return(
            <div>
                {/* <div className='discussionBanner'>
                    <Input className='searchInput' />
                    <Button className='searchBtn' />
                </div> */}
                <ul className="postList">
                    <li className="postList-fullPost">
                        <p className="postList-postUser">Mary K.</p>

                        <p className="postList-postDate">3 minutes ago</p>

                        <span className= "postList-postTitle">
                        Is it natural to feel lonely when kids are at school?
                        </span>
                        <span className="postList-postDescription">
                            I often feel this way.. anyone else?
                        </span>
                    </li>
                    <br>
                    </br>
                    <li className="postList-fullPost">
                        <p className="postList-postUser">Susan H.</p>

                        <p className="postList-postDate">5 minutes ago</p>

                        <span className= "postList-postTitle">
                        My recent visit was immensely helpful
                        </span>
                        <span className="postList-postDescription">
                            What a comfort it is to know that others are in similar positions as me.
                        </span>
                    </li>
                    {this.mapPosts()}
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

export default connect(mapStateToProps, { getALLDiscussionList })(PostList);