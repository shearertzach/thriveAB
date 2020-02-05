import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getALLDiscussionList } from '../../redux/discussionActions'
import Input from '../../../../shared/components/Input';
import Button from '../../../../shared/components/Button';
import './PostList.css'

class PostList extends PureComponent{

    constructor(props){
        super(props);
        this.state = { posts: []}
    }

    async wcomponentDidMount() {

        const { getALLDiscussionList } = this.props;

        try {
            const data = await getALLDiscussionList();
            console.log("dataFetched");
            this.setState({posts: data});
            console.log(this.state.posts)
        }
        catch(error) {
            console.log(error);
    
        }
    }

    mapPosts() {
        


    }
    
    render(){
        
        const allPosts = this.state.posts;

        return(
            <div>
                <div className='discussionBanner'>
                    <Input className='searchInput' />
                    <Button className='searchBtn' />
                </div>
                <ul className="postList">
                    { 
                        // data.map((post) => (
                        //     <li>test</li>
                        // )) 
                        allPosts.map((post) => (
                            console.log('test')
                        ))
                    }
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