import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import Input from '../../../../shared/components/Input'
import Button from '../../../../shared/components/Button'
import { submitDiscussionPost } from '../../redux/discussionActions';

class CreatePost extends PureComponent {
    
    constructor(props) { 
        super(props)
        this.state = {
            postTitle: '',
            postText: '',
            canPost: true //Spam filter. 5 minute timer. 
        }
        this.handleTitle = this.handleTitle.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount() {
          submitDiscussionPost('test', 'test');
      }

        handleTitle (event) {
             this.setState ({
                postTitle: event.target.value
            }) 
           
        }
        handleText (event) {
             this.setState ({
                postText: event.target.value
            }) 
            
        }

        handleSubmit () {

            const { submitDiscussionPost } = this.props;
            
            if (this.state.canPost = true && this.state.postTitle != '') {
                    // postTitle: this.state.postTitle,
                    // postText: this.state.postText
                    
                    let postTitle = this.state.postText;
                    let postText = this.state.postTitle;
                submitDiscussionPost(postTitle, postText);
            }
            else { console.log('User can not post.') }
        }
        
    render() {
        return(
            <div>
                <Input id='Post-Title' onChange={this.handleTitle} />
                <Input id= 'Post-Text' onChange={this.handleText} />
                <Button onClick={this.handleSubmit} /* Needs button text */ />
            </div>
        )
    }

}

const mapStateToProps = ({ authorization }) => {
    const { meta } = authorization
    const { error, loggingIn } = meta
    return { error, loggingIn }
}

export default connect(mapStateToProps, { submitDiscussionPost })(CreatePost);
