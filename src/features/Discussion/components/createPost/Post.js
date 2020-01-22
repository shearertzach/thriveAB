import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import Input from '../../../../shared/components/Input'
import Button from '../../../../shared/components/Button'

class discussionPost extends PureComponent {
    
    constructor(props) { 
        super(props)
        this.state = {
            placeholder: 'placeholder',
            postTitle: '',
            postText: '',
            canPost: true, //Spam filter. 5 minute timer
            uid: this.props.userID
        }
        this.handleTitle = this.handleTitle.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            // postData object for submission WIP
            var postData = {
                user: this.state.uid,
                postID: 420,
                postDateTime: ''
            }
            if (this.state.canPost = true && this.state.postTitle != '') {
                //REMOVE console.log('Title: ' + this.state.postTitle);
                //REMOVE console.log('Text: ' + this.state.postText);
                //REMOVE console.log('User: ' + this.state.uid); 
            }
            else { console.log('User can not post.') }
        }
        
    render() {
        return(
            <div>
                <Input id='Post-Title' onChange={this.handleTitle} />
                <Input id= 'Post-Text' onChange={this.handleText} />
                <Button onClick={this.handleSubmit} value='Submit' />
            </div>
        )
    }

}

const mapStateToProps = ({ authorization }) => {
    const { meta } = authorization
    const { error, loggingIn } = meta
    return { error, loggingIn }
}

export default connect(mapStateToProps)(discussionPost);