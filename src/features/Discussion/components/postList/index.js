import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getALLDiscussionList } from '../../redux/discussionActions'
import Input from '../../../../shared/components/Input';
import Button from '../../../../shared/components/Button';
import style from './PostList.module.scss'

class PostList extends PureComponent{

    constructor(props){
        super(props);
    }

    componentDidMount() {
        const { getALLDiscussionList } = this.props;
        getALLDiscussionList();
    }

    render(){

        return(
            <div>
                <div className={style['discussionBanner']}>
                    <Input className={style['searchInput']} />
                    <Button className={style['searchBtn']} />
                </div>
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

export default connect(mapStateToProps, { getALLDiscussionList })(PostList);