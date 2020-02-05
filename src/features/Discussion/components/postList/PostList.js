import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getALLDiscussionList } from '../../redux/discussionActions'
import Input from '../../../../shared/components/Input';
import Button from '../../../../shared/components/Button';
import './PostList.css'

class PostList extends PureComponent{

    constructor(props){
        super(props);
    }

    componentDidMount() {

        const { getALLDiscussionList } = this.props;
        const data = getALLDiscussionList();
        data.map(function(postTitle, i) {
            console.log(postTitle)
            return (<li>
                        <span>
                            test {i}
                        </span>
                    </li>
                    )
        }
        );

    }

    render(){
        
        return(
            <div>
                <div className='discussionBanner'>
                    <Input className='searchInput' />
                    <Button className='searchBtn' />
                </div>
                <ul className="postList">
                    {}
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