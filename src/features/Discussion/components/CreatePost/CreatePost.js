import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Input from "../../../../shared/components/Input";
import Button from "../../../../shared/components/Button";
import { submitDiscussionPost } from "../../redux/discussionActions";
import "./createPostModal.css";
import { throwStatement } from "@babel/types";


class CreatePost extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: "",
      postText: "",
      canPost: true, //Spam filter. 5 minute timer.
      isHidden: false
    };
    this.handleTitle = this.handleTitle.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitle(event) {
    this.setState({
      postTitle: event.target.value
    });
  }
  handleText(event) {
    this.setState({
      postText: event.target.value
    });
  }

  handleSubmit() {
    const { submitDiscussionPost } = this.props;

    if ((this.state.canPost = true && this.state.postTitle != "")) {
      // postTitle: this.state.postTitle,
      // postText: this.state.postText

      let postTitle = this.state.postText;
      let postText = this.state.postTitle;
      submitDiscussionPost(postTitle, postText);
    } else {
      console.log("User can not post.");
    }
  }

  render() {
    const { isHidden } = this.state;
    return (
        <div class="createPost">
            <br />
        <button
          class="trigger"
          onClick={() => this.setState({ isHidden: !isHidden })}
        >
          {"Click here to Create a Post"}
            </button>
            <br />
        <div style={{ display: isHidden ? "block" : "none" }} >
                <div >
                    {"Title"}
                    <br />
            <input id="Post-Title" onChange={this.handleTitle} class="title" />
                    <br />
                    {"Enter Post Text Here"}
                    <br />
                    
                    <input id="Post-Text" onChange={this.handleText} class="text" />
                    </div>
                <br />
                
          <button
            onClick={this.handleSubmit}
            class="close-button" /* Needs button text */
          >
            {" Submit Post"}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authorization }) => {
  const { meta } = authorization;
  const { error, loggingIn } = meta;
  return { error, loggingIn };
};

export default connect(
  mapStateToProps,
  { submitDiscussionPost }
)(CreatePost);
