import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

export default class Messages extends PureComponent {
    static propTypes = {
        messages: PropTypes.arrayOf(
            PropTypes.shape(Message.basicPropTypes)
        ),
        toggleMessage: PropTypes.func.isRequired,
    };

    renderMessages() {
        if (!this.props.messages) return null;

        return this.props.messages.map(message =>
            <Message key={message.id}
                     id={message.id}
                     message={message.message}
                     updated={message.updated}
                     onClick={this.props.toggleMessage} />
        )
    }

    render() {
        return <div>
            {this.renderMessages()}
        </div>;
    }
}
