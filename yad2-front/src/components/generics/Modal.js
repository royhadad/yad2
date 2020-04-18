import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { closeModal } from '../../actions/modal';
Modal.setAppElement('#root');

class MyModal extends React.Component {
    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.closeModal}
                style={this.props.style}
            >
                <div className='close-modal-button' onClick={this.props.closeModal}>
                    X
                </div>
                {this.props.childJSX}
            </ Modal>
        );
    }
}
const mapStateToProps = (state) => ({
    isOpen: state.modal.isOpen,
    childJSX: state.modal.childJSX,
    style: state.modal.style
})
const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(MyModal);